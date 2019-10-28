%% First part
A = 332.5;
k = 0.035;
k1 = 0.6541;
k2 = -0.015;
k3 = -0.0006;
C = 9;

Ua = 0:0.1:10;
Um=UmUaFunction(Ua);

%% Second part
Rm = 3;
Im = Um/Rm;
um = 0:0.22:22;
km = 1;

n = (um - Rm*Im)/km;
em = km*n

%% Third part(Pump)
h = 13;
Pv = 2*h;
qi = k2*n + sqrt(((k2.^2 + 4*(k-k3)*k1)*n.^2) - 4*(k-k3)*Pv) / (2*k - 2*k3);

% Pp = k1*(n.^2) + (k2*n)*qi + k3*(qi*qi);
% Pp = 0.624
k11 = k2^2 + 4*(k-k3)*k1;
k12 = 8*(k - k3)*h;
k13 = 2*(k-k3);

% q-debitul dat de pompa
q = sqrt((Ppo-Pv)/k);


%% Fourth part(Pump rand)
Pe=um *im;
kn = 8*10.^(-5);
eta = kn*um*q;



