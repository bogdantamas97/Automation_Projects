t=second1;
u=Volt;
y=Volt1;
plot(t,[u,y yst*ones(size(t))]);
grid
xlabel('t(secunde)');ylabel('u y [V]');
legend('semnal impuls','raspuns');
title('Raspuns la impuls, sistem de ordin 2');
 
%Regim stationar 
ust=mean(u(884:984))
yst=mean(y(884:984)) 
 
%Factorul de proportionalitate
k=yst/ust
 
%Suprareglajul
A1=sum(y(623:694)-yst)*(t(2)-t(1));
A2=sum(y(694:788)-yst)*(t(2)-t(1));
sigma=-A2/A1
 
%Factorul de amortizare
tita=-log(sigma)/sqrt(log(sigma)^2+pi^2)
 
%Perioada de oscilatie
tmax=t(538);
t0=t(500);
Tosc=2*(tmax-t0)
 
%Pulsatie naturala
wn=pi/(Tosc*(sqrt(1-tita^2)))
 
%Functia de transfer
H=tf(k*wn^2,[1 2*tita*wn wn^2])
 
%Spatiul starilor
A=[0 1;-wn^2 -2*tita*wn];
B=[0;k*wn^2];
C=[1 0];
D=0;
sys=ss(A,B,C,D);
yc=lsim(sys,u,t,[y(1);0]);
% plot(t,u,'b',t,y,'r',t,yc,'green');
% xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% legend('semnal impuls','raspuns impuls','raspuns impuls S');
% title('Sistem de ordin 2, raspuns impuls');
 
%Eroare medie patratica
J=sqrt(1/1000*sum((y-yc).^2));
%Eroare medie patratica normalizata
ym=mean(y);
Empn=norm(y-yc)/norm(y-ym);
 
% %Functia de transfer identificata la treapta
wn_tr= 2.128693581788111e+04;
tita_tr= 0.239316317920612;
k_tr=1.026761789886195;
A_tr=[0 1; -wn_tr^2 -2*tita_tr*wn_tr];
B_tr=[0 ; k_tr*wn_tr^2];
C_tr=[1 0]; D_tr=0;
sys_tr=ss(A_tr,B_tr,C_tr,D_tr);
yc_tr=lsim(A_tr,B_tr,C_tr,D_tr,u,t,[y(1) ;0]);
% plot(t,u,'b',t,yc_tr,'green',t,y,'r',t,yc,'black');
% legend('semnal impuls','model H treapta ',' raspuns sistemului ','model H impuls');
% xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% title('Sistem de ordin 2, raspuns la impuls');

% eroare medie patratica la treapta
J_tr=sqrt(1/1000*(sum((y-yc_tr).^2)))
%eroare medie normalizata
ym=mean(y);
Empn_tr=norm(y-yc_tr)/norm(y-ym)
