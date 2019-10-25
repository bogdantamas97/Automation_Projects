function um = UmUaFunction(uc)
um=2.2*uc;
if um<0; um=0; end
if uc>8.1; um=um+5*(uc-8.1); end
if um>22; um=22; end


