date=dx116;
t=double(date.X.Data')
u=double(date.Y(1,3).Data')
w=double(date.Y(1,2).Data')
y=double(date.Y(1,1).Data')

%%%%% Vizualizare date initiale
plot(t,[u*200 w y]);title('Intrare')
xlabel('Timp(sec)');ylabel('u[factor de umplere], w[rad/sec], y[impulsuri]');
legend('u-Intrarea','w-Viteza unghiulara','y-Pozitia'); figure

% intrarea-u
subplot(311); plot(t,u,'b');
title('Intrarea u'); ylabel('u(PWM)'); xlabel('Timpul(s)');
% viteza unghiulara-w
subplot(312); plot(t,w,'g')
title('Viteza \omega'); ylabel('\omega(rad/s)'); xlabel('Timpul(s)');
% pozitia-y
subplot(313); plot(t,y,'r')
title('Pozitia \theta'); ylabel('\theta(rad)'); xlabel('Timpul(s)');
figure

%%%%% Identificare
i1=2126;
i2=4503;
iden=[i1:i2]';
subplot(211); plot(t(iden),[u(iden)*200 w(iden) y(iden)]);
title('Portiune identificare');
%%%%% validare
v1=5711;
v2=7801;
valid=[v1:v2]';
subplot(212); plot(t(valid),[u(valid)*200 w(valid) y(valid)]);
title('Portiune validare'); figure

%%%%% perioada esantionare
Te=t(2)-t(1);

%%%%% Date identificare si validare viteza unghiulara
%identificare viteza unghiulara
d_iden_w=iddata(w(iden),u(iden),Te);
%validare viteza unghiulara
d_valid_w=iddata(w(valid),u(valid),Te);

%%%%% Identificare si validare viteza unghiulara prin metoda ARX
% model viteza
w_arx=arx(d_iden_w,[2 2 1]); 
% autocorelatie si intercorelatie
resid(w_arx,d_valid_w,15); figure
% comparare date de validare
compare(d_valid_w,w_arx); figure
% functie de transfer in z (discret)
Hzw_arx=tf(w_arx.B,w_arx.A,Te,'variable','z^-1');
% functie de transfer in s (continuu)
Hsw_arx=d2c(Hzw_arx,'zoh');

%%%%% Identificare si validare viteza unghiulara prin metoda IV4
% model viteza
w_iv4=iv4(d_iden_w,[1 1 0]); 
% autocorelatie si intercorelatie
resid(w_iv4,d_valid_w,15); figure
% comparatie date de validare
compare(d_valid_w,w_iv4); figure
% functie de transfer in z (discret)
Hzw_iv4=tf(w_iv4.B,w_iv4.A,Te,'variable','z^-1');
% functie de transfer in s (continuu)
Hsw_iv4=d2c(Hzw_iv4,'zoh');

%%%%% Date identificare si validare pozitie unghiulara
% identificare pozitie unghiulara
d_iden_y=iddata(y(iden),w(iden),Te);
% validare pozitie unghiulara
d_valid_y=iddata(y(valid),w(valid),Te);

%%%%% Identificare si validare pozitia unghiulara prin metoda ARX
% model viteza
y_arx=arx(d_iden_y,[2 2 1]);
% autocorelatie si intercorelatie
resid(y_arx,d_valid_y,15); figure
% comparatie date validare
compare(d_valid_y,y_arx); figure
%functie de transfer in z (discret)
Hzy_arx=tf(y_arx.B,y_arx.A,Te,'variable','z^-1');
% functie de transfer in s (continuu)
Hsy_arx=d2c(Hzy_arx,'zoh');

%%%%% Identificare si validare pozitia unghiulara prin metoda IV4
% model viteza
y_iv4=iv4(d_iden_y,[1 1 1]);
% autocorelatie si intercorelatie
resid(y_iv4,d_valid_y,15); figure
% comparatie date validare
compare(d_valid_y,y_iv4); figure
% functie de transfer in z (discret)
Hzy_iv4=tf(y_iv4.B,y_iv4.A,Te,'variable','z^-1');
% functie de transfer in s (continuu)
Hsy_iv4=d2c(Hzy_iv4,'zoh');

%%%%% Simulare viteza unghiulara
wc_arx=lsim(Hsw_arx,u,t); 
wc_iv4=lsim(Hsw_iv4,u,t); 
plot(t,w,t,wc_arx,t,wc_iv4);shg;
title('Simularea functiilor pentru viteza'); xlabel('Timp(sec)')
ylabel('w[rad/sec]')
legend('Viteza masurata','Viteza calculata cu arx','Viteza calculata cu iv4');
figure

%%%%% Simulare pozitie unghiulara
yc_arx=lsim(Hsy_arx,u*250,t);
yc_iv4=lsim(Hsy_iv4,u*250,t); 
plot(t,y,t,yc_arx+y(1),t,yc_iv4+y(1));shg;
title('Simularea functiilor pentru pozitie'); xlabel('Timp(sec)')
ylabel('impulsuri')
legend('Pozitia masurata','Pozitia calculata cu arx','Pozitia calculata cu iv4');

%%%%% Calcularea vitezei si pozitiei cu SS
main_data = iddata([w, y], u, Te); 
sys = n4sid(main_data); 
resid(sys, data); figure 
compare(data, sys); 

