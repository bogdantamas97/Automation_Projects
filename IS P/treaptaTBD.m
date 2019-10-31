t=second2; 
u=Volt2; 
y=Volt3; 

% plot(t,[u,y]);
% grid
% xlabel('t(secunde)');ylabel('u y [V]');
% legend('semnal treapta(u)','raspuns');
% title('Sistem de ordin 2, raspuns la treapta');

% Regim stationar 
ust=mean(u(890:990))
yst=mean(y(890:990)) 

% Factorul de proportionalitate
k=yst/ust;

% Suprareglaj
A1=sum(y(623:694)-yst)*(t(2)-t(1))
A2=sum(y(694:788)-yst)*(t(2)-t(1))
sigma = -A2/A1
%Amortizare
tzita=-(log(sigma))/(sqrt(log(sigma)^2+pi^2)) 

%Oscilatie
Tosc=2*(t(538)-t(500)) 

%Pulsatie naturala
wn=pi/(Tosc*sqrt(1-tita^2)) 

% Functia de transfer
H = tf(k*wn^2, [1 2*tita*wn wn^2])
A=[0 1; -wn^2 -2*tita*wn]
B=[0 ; k*wn^2];
C=[1 0];
D=0;

% Y calculat
sys=ss(A,B,C,D);
hold on
yc=lsim(sys,u,t,[y(1) ;0]);

% plot(t,u,'g',t,y,'r',t,yc,'b' );

%eroare medie patratica
J=sqrt(1/1000*sum((y-yc).^2))
%eroare medie normalizata
ym=mean(y);
Empn=norm(y-yc)/norm(y-ym)

% %Functia de transfer identificata la impuls
wn_imp= 2.122286899273439e+04
tzita_imp= 0.227094616428897;
k_imp=1.024203620245580;
A_imp=[0 1; -wn_imp^2 -2*tzita_imp*wn_imp];
B_imp=[0 ; k_imp*wn_imp^2];
C_imp=[1 0];
D_imp=0;
sys_imp=ss(A_imp,B_imp,C_imp,D_imp);
hold on
yc_imp=lsim(sys_imp,u,t,[y(1) ;0]);
plot(t,u,'b',t,yc_imp,'y',t,y,'r',t,yc,'black');
legend('semnal treapta','model calculat cu H impuls','raspunsul sistemului ','model calculat cu H treapta');
xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
title('Sistem de ordin 2, raspuns la treapta');

% %eroare medie patratica la impus
J_imp=sqrt(1/1000*sum((y-yc_imp).^2))
% %eroare medie normalizata
ym=mean(y);
Empn_imp=norm(y-yc_imp)/norm(y-ym)

