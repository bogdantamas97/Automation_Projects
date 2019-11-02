t=second2; 
u=Volt2; 
y=Volt3; 
% plot(t,[u,y]);
% grid
% xlabel('t(secunde)');ylabel('u y [V]');
% legend('semnal treapta','raspuns');
% title('Raspuns la treapta, sistem de ordin 2');
 
% Regim stationar 
ust=mean(u(882:982))
yst=mean(y(882:982)) 
 
% Factorul de proportionalitate
k=yst/ust;
 
% Suprareglaj
A1=sum(y(623:694)-yst)*(t(2)-t(1))
A2=sum(y(694:788)-yst)*(t(2)-t(1))
sigma = -A2/A1
 
%Amortizare
tita=-(log(sigma))/(sqrt(log(sigma)^2+pi^2)) 
 
%Oscilatie
Tosc=2*(t(538)-t(500)) 
 
%Pulsatie naturala
wn=pi/(Tosc*sqrt(1-tita^2)) 
 
% Functia de transfer
H = tf(k*wn^2, [1 2*tita*wn wn^2])
A=[0 1; -wn^2 -2*tita*wn]
B=[0 ; k*wn^2];
C=[1 0]; D=0;
 
% Y calculat
sys=ss(A,B,C,D);
hold on
yc=lsim(sys,u,t,[y(1) ;0]);
plot(t,u,'b',t,y,'r',t,yc,'green');
xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
legend('semnal treapta','raspuns treapta','raspuns treapta SS');
title('Sistem de ordin 2, raspuns treapta');
 
%Eroare medie patratica
J=sqrt(1/1000*sum((y-yc).^2))
%Eroare medie normalizata
ym=mean(y);
Empn=norm(y-yc)/norm(y-ym)
 
%Functia de transfer identificata la treapta
wn_imp= 2.120642634667262e+04;
tita_imp= 0.223831734802742;
k_imp=1.010208806914059;
A_imp=[0 1; -wn_imp^2 -2*tita_imp*wn_imp];
B_imp=[0 ; k_imp*wn_imp^2];
C_imp=[1 0]; D_imp=0;
sys_imp=ss(A_imp,B_imp,C_imp,D_imp);
yc_imp=lsim(sys_imp,u,t,[y(1) ;0]);
% plot(t,u,'b',t,yc_imp,'green',t,y,'r',t,yc,'black');
% legend('semnal treapta','model H treapta','raspuns sistem ','model H treapta');
% xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% title('Raspuns la treapta, sistem de ordin 2');
 
%Eroare medie patratica la treapta
J_imp=sqrt(1/1000*sum((y-yc_imp).^2))
%Eroare medie normalizata
ym=mean(y);
Empn_imp=norm(y-yc_imp)/norm(y-ym)
