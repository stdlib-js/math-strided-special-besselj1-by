// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t,e,o,f,i,u){var a,c,l,y;if(r<=0)return e;for(a=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=i.call(u,n[a],y,a,c,n,e))&&(e[c]=f(l)),a+=t,c+=o;return e}function y(r,n,t,e,o,f,i,u,a,c){var l,y,v,p;if(r<=0)return o;for(l=e,y=i,p=0;p<r;p++)void 0!==(v=a.call(c,n[l],p,l,y,n,o))&&(o[y]=u(v)),l+=t,y+=f;return o}c(l,"ndarray",y);var v=Math.sqrt;function p(r){return Math.abs(r)}var s,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,w=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,f;if(null==r)return d.call(r);t=r[A],f=A,n=null!=(o=r)&&w.call(o,f);try{r[A]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[A]=t:delete r[A],e}:function(r){return d.call(r)},m="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=s,N="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=g,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var H,G=S,P="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V,W={uint16:H,uint8:G};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],Y=!0===k?1:0,q=new E(1),B=new j(q.buffer);function C(r){return q[0]=r,B[Y]}var z,D,J=!0===k?0:1,K=new E(1),Q=new j(K.buffer);!0===k?(z=1,D=0):(z=0,D=1);var R={HIGH:z,LOW:D},X=new E(1),Z=new j(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return Z[$]=r,Z[rr]=n,X[0]}var tr,er,or=Math.floor,fr=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY;function ur(r){return r!=r}function ar(r){return r===fr||r===ir}!0===k?(tr=1,er=0):(tr=0,er=1);var cr={HIGH:tr,LOW:er},lr=new E(1),yr=new j(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function sr(r,n,t,e){return lr[0]=r,n[e]=yr[vr],n[e+t]=yr[pr],n}function br(r){return sr(r,[0,0],1,0)}c(br,"assign",sr);var dr=[0,0];function wr(r,n,t,e){return ur(r)||ar(r)?(n[e]=r,n[e+t]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var Ar=[0,0],_r=[0,0];function mr(r,n){var t,e,o,f,i,u;return 0===n||0===r||ur(r)||ar(r)?r:(wr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?(o=0,f=r,br.assign(o,dr,1,0),i=dr[0],i&=2147483647,u=C(f),nr(i|=u&=2147483648,dr[1])):n>1023?r<0?ir:fr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,br.assign(r,_r,1,0),t=_r[0],t&=2148532223,e*nr(t|=n+1023<<20,_r[1])))}function hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Nr=5.960464477539063e-8,Ir=hr(20),Or=hr(20),Sr=hr(20),Er=hr(20);function Fr(r,n,t,e,o,f,i,u,a){var c,l,y,v,p,s,b,d,w;for(v=f,w=e[t],d=t,p=0;d>0;p++)l=Nr*w|0,Er[p]=w-jr*l|0,w=e[d-1]+l,d-=1;if(w=mr(w,o),w-=8*or(.125*w),w-=b=0|w,y=0,o>0?(b+=p=Er[t-1]>>24-o,Er[t-1]-=p<<24-o,y=Er[t-1]>>23-o):0===o?y=Er[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)d=Er[p],0===c?0!==d&&(c=1,Er[p]=16777216-d):Er[p]=16777215-d;if(o>0)switch(o){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=mr(1,o)))}if(0===w){for(d=0,p=t-1;p>=f;p--)d|=Er[p];if(0===d){for(s=1;0===Er[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[u+p]=Ur[i+p],l=0,d=0;d<=u;d++)l+=r[d]*a[u+(p-d)];e[p]=l}return Fr(r,n,t+=s,e,o,f,i,u,a)}}if(0===w)for(t-=1,o-=24;0===Er[t];)t-=1,o-=24;else(w=mr(w,-o))>=jr?(l=Nr*w|0,Er[t]=w-jr*l|0,o+=24,Er[t+=1]=l):Er[t]=0|w;for(l=mr(1,o),p=t;p>=0;p--)e[p]=l*Er[p],l*=Nr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=gr[s]*e[p+s];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&b}function Tr(r,n,t,e){var o,f,i,u,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),u=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Ir[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ir[i+(a-c)];Or[a]=o}return Fr(r,n,4,Or,u,4,f,i,Ir)}var xr=Math.round;function Hr(r,n,t){var e,o,f,i,u;return f=r-1.5707963267341256*(e=xr(.6366197723675814*r)),i=6077100506506192e-26*e,u=n>>20|0,t[0]=f-i,u-(C(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=f)-(f=o-(i=6077100506303966e-26*e))-i),t[0]=f-i,u-(C(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=f)-(f=o-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Gr=1.5707963267341256,Pr=6077100506506192e-26,Lr=2*Pr,Mr=3*Pr,Vr=4*Pr,Wr=[0,0,0],kr=[0,0];function Yr(r,n){var t,e,o,f,i,u,a;if((o=2147483647&C(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Hr(r,o,n):o<=1073928572?r>0?(a=r-Gr,n[0]=a-Pr,n[1]=a-n[0]-Pr,1):(a=r+Gr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-1):r>0?(a=r-2*Gr,n[0]=a-Lr,n[1]=a-n[0]-Lr,2):(a=r+2*Gr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Hr(r,o,n):r>0?(a=r-3*Gr,n[0]=a-Mr,n[1]=a-n[0]-Mr,3):(a=r+3*Gr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-3):1075388923===o?Hr(r,o,n):r>0?(a=r-4*Gr,n[0]=a-Vr,n[1]=a-n[0]-Vr,4):(a=r+4*Gr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-4);if(o<1094263291)return Hr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return K[0]=r,Q[J]}(r),a=nr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Wr[i]=0|a,a=16777216*(a-Wr[i]);for(Wr[2]=a,f=3;0===Wr[f-1];)f-=1;return u=Tr(Wr,kr,e,f),r<0?(n[0]=-kr[0],n[1]=-kr[1],-u):(n[0]=kr[0],n[1]=kr[1],u)}var qr=-.16666666666666632;function Br(r,n,t,e,o){var f,i,u,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),u=c*r,t[o]=0===n?r+u*(qr+c*i):r-(c*(.5*n-u*i)-n-u*qr),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(f=.5*c),t[o+e]=a+(1-a-f+(c*i-r*n)),t}var Cr=[0,0];function zr(r,n,t,e){var o,f;if(o=C(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Br(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(f=Yr(r,Cr),Br(Cr[0],Cr[1],n,t,e),3&f){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function Dr(r){return zr(r,[0,0],1,0)}c(Dr,"assign",zr);var Jr=[0,0];function Kr(r){var n,t,e,o,f,i,u,a;return a=p(r),0===r||a===fr?0:(a<=4?(f=function(r){var n,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(n=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(n=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),n/t)}(i=r*r),n=(u=a*(a+3.8317059702075125)*(a-981/256- -.0003252797924876844))*f):a<=8?(f=function(r){var n,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(n=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(n=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),n/t)}(i=r*r),n=(u=a*(a+7.015586669815619)*(a-7.015625- -38330184381246464e-21))*f):(t=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)}(o=(i=8/a)*i),e=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)}(o),u=1/(1.772453850905516*v(a)),Dr(Jr),n=u*(t*(Jr[0]-Jr[1])+i*e*(Jr[0]+Jr[1]))),r<0&&(n*=-1),n)}function Qr(r,n,t,e,o,f,i){return l(r,n,t,e,o,Kr,f,i)}return c(Qr,"ndarray",(function(r,n,t,e,o,f,i,u,a){return y(r,n,t,e,o,f,i,Kr,u,a)})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).besselj1By=n();
//# sourceMappingURL=index.js.map
