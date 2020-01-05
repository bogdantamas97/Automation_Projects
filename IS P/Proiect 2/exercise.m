data=dx116;

t=double(data.X.Data');
u=double(data.Y(1,3).Data');
w=double(data.Y(1,2).Data');
y=double(data.Y(1,1).Data');

% plot(t, [u*200 w y]);

% identificare & validare

% plot(t, u*200);
% figure

i1=2384;
i2=4289;
iden=[i1:i2]';

v1=5800;
v2=7691;
valid=[v1:v2]';

Te=t(2)-t(1);

d_iden_w=iddata(w(iden),u(iden),Te);
d_valid_w=iddata(w(valid),u(valid),Te);

w_arx=arx(d_iden_w,[2 2 1]);
% resid(w_arx,d_iden_w,15);
% figure;
% compare(w_arx,d_valid_w);
% figure

Hzw_arx=tf(w_arx.B,w_arx.A,Te,'variable','z^-1');
Hsw_arx=d2c(Hzw_arx,'zoh');

w_iv4=iv4(d_iden_w,[1 1 0]);
% resid(w_iv4,d_iden_w,15);
% figure;
% compare(w_iv4,d_valid_w);
% figure

Hzw_iv4=tf(w_iv4.B,w_iv4.A,Te,'variable','z^-1');
Hsw_iv4=d2c(Hzw_iv4,'zoh');

%simulare viteza unghiulara

wc_arx=lsim(Hsw_arx,u,t);
wc_iv4=lsim(Hsw_iv4,u,t);

wc_arx(1:612)=w(1:612)-;

plot(t, [w wc_arx]);

% main_data=iddata([w y], u, Te);
% sys=n4sid(main_data);
% resid(sys,main_data);
% compare(main_data, sys);
















