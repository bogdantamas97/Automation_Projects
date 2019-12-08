
t=second1;
u=Volt;
y=Volt1;
plot(t,[u,y]);
grid;
legend('u','y');

u0=mean(u(411:499));
ust=mean(u(700:815));
y0=mean(y(440:504));
yst=mean(y(892:958));
d=yst-y0;
k=(yst-y0)/(ust-u0);
hold on;
plot(t,(y0+0.63*d)*ones(size(t)),'--r');
T=t(606)-t(504);
H=tf(k,[T 1]);
yf=lsim(H,u,t);
hold on
title('Conditii initiale 0');
plot(t,yf);


A=-1/T;
B=k/T;
C=1;
D=0;
yf1=lsim(A,B,C,D,u,t,y(1));
figure
title('Condiitii initiale !=0');
plot(t,[u,y,yf1]);
hold on;
plot(t,yf1,'g');

J=sqrt(1/1000*sum((y-yf1).^2));
eroare medie normalizata 
ym=mean(y);
Empn=norm(y-yf1)/norm(y-ym);