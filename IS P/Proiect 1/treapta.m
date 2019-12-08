t=second1; 
u=Volt; 
y=Volt1; 

% plot(t,[u,y]);
% grid
% xlabel('t(secunde)');ylabel('u y [V]');
% legend('semnal treapta(u)','raspuns');
% title('Sistem de ordin 1, raspuns la treapta');

% Regim stationar 
yst=mean(y(844:947)); 
ust=mean(u(844:947));

% Conditii initiale nenule 
y0=mean(y(504:522)); 
u0=mean(u(504:549));

d=(yst-y0)*(y-mean(y));
T=t(622)-t(548);

% Factorul de proportionalitate
k=(yst-y0)/(ust-u0);
% Functia de transfer
H=tf(k,[T,1])

% Y calculat
yc=lsim(H,u,t);

% plot(t,[u y yc]);
% Conditii initiale nenule( spatiul starilor treapta) 
A=-1/T;
B=k/T;
C=1;
D=0;
sys=ss(A,B,C,D); yc1=lsim(sys,u,t,[y(1)-y0]);

% plot(t,[u y yc1]);
% xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% legend('semnal treapta(u)','raspunsul la treapta dat(t)','63% din yst- y0','modelul calculat folosind H treapta(yc)');
% title('Sistem de ordin 1, raspuns la impuls');


% Functia de transfer ptr impuls 
h=tf(0.4647,[0.000375,1]);
yc2=lsim(h,u,t);
plot(t,[u y yc1]);

% Conditii initiale nenule( spatiul starilor impuls) 

A1=-1/0.000375;
B1= 0.4647/0.000375; C1=1;
D1=0; 
sys2=ss(A1,B1,C1,D1);
yc3=lsim(sys2,u,t,y(1));


% plot(t,u,t,y,t,y0+d*ones(size(t)),'--g',t,yc3,'b');
% xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% legend('semnal treapta(u)','raspunsul la treapta dat(t)','63% din yst- y0','modelul calculat folosind H impuls');
% title('Sistem de ordin 1, raspuns la impuls');

% plot(t,u,t,y,t,y0+d*ones(size(t)),'--g',t,yc1,'black',t,yc3); xlabel('t(secunde)');ylabel('u[ V ] y [ V ] ');
% legend('semnal treapta','raspunsul la treapta dat','63% din yst-y0','model calculat pt H treapta','model calculat pt H impuls');
% title('Sistem de ordin 1, raspuns la impuls');

% eroare medie patratica 
J=sqrt(1/1000*sum((y-yc3).^2));
eroare medie normalizata 
ym=mean(y);
Empn=norm(y-yc3)/norm(y-ym);