// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).besselj1By=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,i=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,n,t.get),y&&u&&u.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r,n,t,e,o,a,u,f){var i,c,l,v;if(r<=0)return e;for(i=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,v=0;v<r;v++)void 0!==(l=u.call(f,n[i],v,i,c,n,e))&&(e[c]=a(l)),i+=t,c+=o;return e};var b=function(r,n,t,e,o,a,u,f,i,c){var l,v,y,p;if(r<=0)return o;for(l=e,v=u,p=0;p<r;p++)void 0!==(y=i.call(c,n[l],p,l,v,n,o))&&(o[v]=f(y)),l+=t,v+=a;return o},d=p;y(d,"ndarray",b);var s=d,w=Math.sqrt;var A=function(r){return Math.abs(r)};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var h=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,U=m;var g=function(r){return U.call(r)},j=Object.prototype.hasOwnProperty;var N=function(r,n){return null!=r&&j.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=N,S=I,E=m;var F=g,T=function(r){var n,t,e;if(null==r)return E.call(r);t=r[S],n=O(r,S);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e},x=h()?T:F,H=x,G="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null,L=function(r){return G&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},M=P;var V=function(){var r,n;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,4294967296,4294967297]),r=L(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var W="function"==typeof Uint32Array?Uint32Array:void 0,k=function(){throw new Error("not implemented")},Y=V()?W:k,q=x,B="function"==typeof Float64Array;var C="function"==typeof Float64Array?Float64Array:null,z=function(r){return B&&r instanceof Float64Array||"[object Float64Array]"===q(r)},D=C;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D([1,3.14,-3.14,NaN]),r=z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=x,Z="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null,rr=function(r){return Z&&r instanceof Uint8Array||"[object Uint8Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,256,257]),r=rr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var er="function"==typeof Uint8Array?Uint8Array:void 0,or=function(){throw new Error("not implemented")},ar=tr()?er:or,ur=x,fr="function"==typeof Uint16Array;var ir="function"==typeof Uint16Array?Uint16Array:null,cr=function(r){return fr&&r instanceof Uint16Array||"[object Uint16Array]"===ur(r)},lr=ir;var vr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,65536,65537]),r=cr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var yr,pr="function"==typeof Uint16Array?Uint16Array:void 0,br=function(){throw new Error("not implemented")},dr={uint16:vr()?pr:br,uint8:ar};(yr=new dr.uint16(1))[0]=4660;var sr=52===new dr.uint8(yr.buffer)[0],wr=Y,Ar=!0===sr?1:0,_r=new R(1),hr=new wr(_r.buffer);var mr=function(r){return _r[0]=r,hr[Ar]},Ur=Y,gr=!0===sr?0:1,jr=new R(1),Nr=new Ur(jr.buffer);var Ir,Or,Sr=function(r){return jr[0]=r,Nr[gr]};!0===sr?(Ir=1,Or=0):(Ir=0,Or=1);var Er=Y,Fr={HIGH:Ir,LOW:Or},Tr=new R(1),xr=new Er(Tr.buffer),Hr=Fr.HIGH,Gr=Fr.LOW;var Pr=function(r,n){return xr[Hr]=r,xr[Gr]=n,Tr[0]},Lr=Pr,Mr=Math.floor,Vr=Number.POSITIVE_INFINITY,Wr=Number.NEGATIVE_INFINITY;var kr=function(r){return r!=r},Yr=Vr,qr=Wr;var Br,Cr,zr=function(r){return r===Yr||r===qr};!0===sr?(Br=1,Cr=0):(Br=0,Cr=1);var Dr=Y,Jr={HIGH:Br,LOW:Cr},Kr=new R(1),Qr=new Dr(Kr.buffer),Rr=Jr.HIGH,Xr=Jr.LOW;var Zr=function(r,n){return Kr[0]=n,r[0]=Qr[Rr],r[1]=Qr[Xr],r};var $r=function(r,n){return 1===arguments.length?Zr([0,0],r):Zr(r,n)},rn=$r,nn=mr,tn=Lr,en=[0,0];var on=zr,an=kr,un=A;var fn=function(r,n){return an(n)||on(n)?(r[0]=n,r[1]=0,r):0!==n&&un(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var cn=function(r,n){return 1===arguments.length?fn([0,0],r):fn(r,n)},ln=mr;var vn=function(r){var n=ln(r);return(n=(2146435072&n)>>>20)-1023|0},yn=Vr,pn=Wr,bn=kr,dn=zr,sn=function(r,n){var t,e;return rn(en,r),t=en[0],t&=2147483647,e=nn(n),tn(t|=e&=2147483648,en[1])},wn=cn,An=vn,_n=$r,hn=Lr,mn=[0,0],Un=[0,0];var gn=function(r,n){var t,e;return 0===n||0===r||bn(r)||dn(r)?r:(wn(mn,r),n+=mn[1],(n+=An(r=mn[0]))<-1074?sn(0,r):n>1023?r<0?pn:yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_n(Un,r),t=Un[0],t&=2148532223,e*hn(t|=n+1023<<20,Un[1])))};var jn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Nn=Mr,In=gn,On=function(r){return jn(0,r)},Sn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],En=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Fn=16777216,Tn=5.960464477539063e-8,xn=On(20),Hn=On(20),Gn=On(20),Pn=On(20);function Ln(r,n,t,e,o,a,u,f,i){var c,l,v,y,p,b,d,s,w;for(y=a,w=e[t],s=t,p=0;s>0;p++)l=Tn*w|0,Pn[p]=w-Fn*l|0,w=e[s-1]+l,s-=1;if(w=In(w,o),w-=8*Nn(.125*w),w-=d=0|w,v=0,o>0?(d+=p=Pn[t-1]>>24-o,Pn[t-1]-=p<<24-o,v=Pn[t-1]>>23-o):0===o?v=Pn[t-1]>>23:w>=.5&&(v=2),v>0){for(d+=1,c=0,p=0;p<t;p++)s=Pn[p],0===c?0!==s&&(c=1,Pn[p]=16777216-s):Pn[p]=16777215-s;if(o>0)switch(o){case 1:Pn[t-1]&=8388607;break;case 2:Pn[t-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=In(1,o)))}if(0===w){for(s=0,p=t-1;p>=a;p--)s|=Pn[p];if(0===s){for(b=1;0===Pn[a-b];b++);for(p=t+1;p<=t+b;p++){for(i[f+p]=Sn[u+p],l=0,s=0;s<=f;s++)l+=r[s]*i[f+(p-s)];e[p]=l}return Ln(r,n,t+=b,e,o,a,u,f,i)}}if(0===w)for(t-=1,o-=24;0===Pn[t];)t-=1,o-=24;else(w=In(w,-o))>=Fn?(l=Tn*w|0,Pn[t]=w-Fn*l|0,o+=24,Pn[t+=1]=l):Pn[t]=0|w;for(l=In(1,o),p=t;p>=0;p--)e[p]=l*Pn[p],l*=Tn;for(p=t;p>=0;p--){for(l=0,b=0;b<=y&&b<=t-p;b++)l+=En[b]*e[p+b];Gn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Gn[p];for(n[0]=0===v?l:-l,l=Gn[0]-l,p=1;p<=t;p++)l+=Gn[p];return n[1]=0===v?l:-l,7&d}var Mn=function(r,n,t,e){var o,a,u,f,i,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),f=t-24*(a+1),c=a-(u=e-1),l=u+4,i=0;i<=l;i++)xn[i]=c<0?0:Sn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*xn[u+(i-c)];Hn[i]=o}return 4,Ln(r,n,4,Hn,f,4,a,u,xn)},Vn=Math.round,Wn=mr;var kn=mr,Yn=Sr,qn=Lr,Bn=Mn,Cn=function(r,n,t){var e,o,a,u,f;return a=r-1.5707963267341256*(e=Vn(.6366197723675814*r)),u=6077100506506192e-26*e,f=n>>20|0,t[0]=a-u,f-(Wn(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,f-(Wn(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e},zn=1.5707963267341256,Dn=6077100506506192e-26,Jn=2*Dn,Kn=3*Dn,Qn=4*Dn,Rn=[0,0,0],Xn=[0,0];var Zn=function(r,n){var t,e,o,a,u,f,i;if((o=2147483647&kn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Cn(r,o,n):o<=1073928572?r>0?(i=r-zn,n[0]=i-Dn,n[1]=i-n[0]-Dn,1):(i=r+zn,n[0]=i+Dn,n[1]=i-n[0]+Dn,-1):r>0?(i=r-2*zn,n[0]=i-Jn,n[1]=i-n[0]-Jn,2):(i=r+2*zn,n[0]=i+Jn,n[1]=i-n[0]+Jn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Cn(r,o,n):r>0?(i=r-3*zn,n[0]=i-Kn,n[1]=i-n[0]-Kn,3):(i=r+3*zn,n[0]=i+Kn,n[1]=i-n[0]+Kn,-3):1075388923===o?Cn(r,o,n):r>0?(i=r-4*zn,n[0]=i-Qn,n[1]=i-n[0]-Qn,4):(i=r+4*zn,n[0]=i+Qn,n[1]=i-n[0]+Qn,-4);if(o<1094263291)return Cn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Yn(r),i=qn(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Rn[u]=0|i,i=16777216*(i-Rn[u]);for(Rn[2]=i,a=3;0===Rn[a-1];)a-=1;return f=Bn(Rn,Xn,e,a),r<0?(n[0]=-Xn[0],n[1]=-Xn[1],-f):(n[0]=Xn[0],n[1]=Xn[1],f)},$n=-.16666666666666632;var rt=mr,nt=Zn,tt=function(r,n,t){var e,o,a,u,f;return o=.00833333333332249+(f=n*n)*(27557313707070068e-22*f-.0001984126982985795)+f*(u=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),a=f*n,r[0]=0===t?n+a*($n+f*o):n-(f*(.5*t-a*o)-t-a*$n),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=u*u*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),u=1-(e=.5*f),r[1]=u+(1-u-e+(f*o-n*t)),r},et=[0,0];var ot=function(r,n){var t,e;if(t=rt(n),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),tt(r,n,0);if(t>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=nt(n,et),tt(r,et[0],et[1]),3&e){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}};var at=function(r,n){return 1===arguments.length?ot([0,0],r):ot(r,n)};var ut=w,ft=A,it=at,ct=Vr,lt=function(r){var n,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(n=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(n=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),n/t)},vt=function(r){var n,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(n=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(n=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),n/t)},yt=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)},pt=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)},bt=[0,0];var dt=function(r){var n,t,e,o,a,u,f;return f=ft(r),0===r||f===ct?0:(f<=4?n=(u=f*(f+3.8317059702075125)*(f-981/256- -.0003252797924876844))*lt(a=r*r):f<=8?n=(u=f*(f+7.015586669815619)*(f-7.015625- -38330184381246464e-21))*vt(a=r*r):(t=yt(o=(a=8/f)*a),e=pt(o),u=1/(1.772453850905516*ut(f)),it(bt,f),n=u*(t*(bt[0]-bt[1])+a*e*(bt[0]+bt[1]))),r<0&&(n*=-1),n)},st=s,wt=dt;var At=s.ndarray,_t=dt;var ht=function(r,n,t,e,o,a,u){return st(r,n,t,e,o,wt,a,u)};return y(ht,"ndarray",(function(r,n,t,e,o,a,u,f,i){return At(r,n,t,e,o,a,u,_t,f,i)})),ht}));
//# sourceMappingURL=bundle.js.map
