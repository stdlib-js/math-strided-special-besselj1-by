// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,f=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),p&&u&&u.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r,n,t,e,o,f,u,i){var a,c,l,y;if(r<=0)return e;for(a=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=u.call(i,n[a],y,a,c,n,e))&&(e[c]=f(l)),a+=t,c+=o;return e}function p(r,n,t,e,o,f,u,i,a,c){var l,y,p,v;if(r<=0)return o;for(l=e,y=u,v=0;v<r;v++)void 0!==(p=a.call(c,n[l],v,l,y,n,o))&&(o[y]=i(p)),l+=t,y+=f;return o}l(y,"ndarray",p);var v=Math.sqrt;function b(r){return Math.abs(r)}var d,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,_=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",h=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,f;if(null==r)return w.call(r);t=r[A],f=A,n=null!=(o=r)&&_.call(o,f);try{r[A]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[A]=t:delete r[A],e}:function(r){return w.call(r)},m="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g,N=d,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,E=g,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=x,M="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k={uint16:G,uint8:P};(W=new k.uint16(1))[0]=4660;var Y=52===new k.uint8(W.buffer)[0],q=!0===Y?1:0,B=new E(1),C=new N(B.buffer);function z(r){return B[0]=r,C[q]}var D,J,K=!0===Y?0:1,Q=new E(1),R=new N(Q.buffer);!0===Y?(D=1,J=0):(D=0,J=1);var X={HIGH:D,LOW:J},Z=new E(1),$=new N(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n){return $[rr]=r,$[nr]=n,Z[0]}var er,or,fr=Math.floor,ur=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY;function ar(r){return r!=r}function cr(r){return r===ur||r===ir}!0===Y?(er=1,or=0):(er=0,or=1);var lr={HIGH:er,LOW:or},yr=new E(1),pr=new N(yr.buffer),vr=lr.HIGH,br=lr.LOW;function dr(r,n){return yr[0]=n,r[0]=pr[vr],r[1]=pr[br],r}function sr(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)}var wr=[0,0];function _r(r,n,t,e){return ar(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&b(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var Ar=[0,0],hr=[0,0];function mr(r,n){var t,e,o,f,u;return 0===n||0===r||ar(r)||cr(r)?r:(_r(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?(o=r,sr(wr,0),f=wr[0],f&=2147483647,u=z(o),tr(f|=u&=2147483648,wr[1])):n>1023?r<0?ir:ur:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr(hr,r),t=hr[0],t&=2148532223,e*tr(t|=n+1023<<20,hr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=16777216,Ir=5.960464477539063e-8,Or=Ur(20),Sr=Ur(20),xr=Ur(20),Er=Ur(20);function Fr(r,n,t,e,o,f,u,i,a){var c,l,y,p,v,b,d,s,w;for(p=f,w=e[t],s=t,v=0;s>0;v++)l=Ir*w|0,Er[v]=w-Nr*l|0,w=e[s-1]+l,s-=1;if(w=mr(w,o),w-=8*fr(.125*w),w-=d=0|w,y=0,o>0?(d+=v=Er[t-1]>>24-o,Er[t-1]-=v<<24-o,y=Er[t-1]>>23-o):0===o?y=Er[t-1]>>23:w>=.5&&(y=2),y>0){for(d+=1,c=0,v=0;v<t;v++)s=Er[v],0===c?0!==s&&(c=1,Er[v]=16777216-s):Er[v]=16777215-s;if(o>0)switch(o){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=mr(1,o)))}if(0===w){for(s=0,v=t-1;v>=f;v--)s|=Er[v];if(0===s){for(b=1;0===Er[f-b];b++);for(v=t+1;v<=t+b;v++){for(a[i+v]=jr[u+v],l=0,s=0;s<=i;s++)l+=r[s]*a[i+(v-s)];e[v]=l}return Fr(r,n,t+=b,e,o,f,u,i,a)}}if(0===w)for(t-=1,o-=24;0===Er[t];)t-=1,o-=24;else(w=mr(w,-o))>=Nr?(l=Ir*w|0,Er[t]=w-Nr*l|0,o+=24,Er[t+=1]=l):Er[t]=0|w;for(l=mr(1,o),v=t;v>=0;v--)e[v]=l*Er[v],l*=Ir;for(v=t;v>=0;v--){for(l=0,b=0;b<=p&&b<=t-v;b++)l+=gr[b]*e[v+b];xr[t-v]=l}for(l=0,v=t;v>=0;v--)l+=xr[v];for(n[0]=0===y?l:-l,l=xr[0]-l,v=1;v<=t;v++)l+=xr[v];return n[1]=0===y?l:-l,7&d}function Tr(r,n,t,e){var o,f,u,i,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),c=f-(u=e-1),l=u+4,a=0;a<=l;a++)Or[a]=c<0?0:jr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*Or[u+(a-c)];Sr[a]=o}return Fr(r,n,4,Sr,i,4,f,u,Or)}var Hr=Math.round;function Gr(r,n,t){var e,o,f,u,i;return f=r-1.5707963267341256*(e=Hr(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=f-u,i-(z(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(z(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var Pr=1.5707963267341256,Mr=6077100506506192e-26,Lr=2*Mr,Vr=3*Mr,Wr=4*Mr,kr=[0,0,0],Yr=[0,0];function qr(r,n){var t,e,o,f,u,i,a;if((o=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(a=r-Pr,n[0]=a-Mr,n[1]=a-n[0]-Mr,1):(a=r+Pr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-1):r>0?(a=r-2*Pr,n[0]=a-Lr,n[1]=a-n[0]-Lr,2):(a=r+2*Pr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(a=r-3*Pr,n[0]=a-Vr,n[1]=a-n[0]-Vr,3):(a=r+3*Pr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-3):1075388923===o?Gr(r,o,n):r>0?(a=r-4*Pr,n[0]=a-Wr,n[1]=a-n[0]-Wr,4):(a=r+4*Pr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Q[0]=r,R[K]}(r),a=tr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)kr[u]=0|a,a=16777216*(a-kr[u]);for(kr[2]=a,f=3;0===kr[f-1];)f-=1;return i=Tr(kr,Yr,e,f),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-i):(n[0]=Yr[0],n[1]=Yr[1],i)}var Br=-.16666666666666632;function Cr(r,n,t){var e,o,f,u,i;return o=.00833333333332249+(i=n*n)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),f=i*n,r[0]=0===t?n+f*(Br+i*o):n-(i*(.5*t-f*o)-t-f*Br),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(e=.5*i),r[1]=u+(1-u-e+(i*o-n*t)),r}var zr=[0,0];function Dr(r,n){var t,e;if(t=z(n),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Cr(r,n,0);if(t>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=qr(n,zr),Cr(r,zr[0],zr[1]),3&e){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}var Jr=[0,0];function Kr(r){var n,t,e,o,f,u,i,a;return a=b(r),0===r||a===ur?0:(a<=4?(f=function(r){var n,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(n=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(n=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),n/t)}(u=r*r),n=(i=a*(a+3.8317059702075125)*(a-981/256- -.0003252797924876844))*f):a<=8?(f=function(r){var n,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(n=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(n=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),n/t)}(u=r*r),n=(i=a*(a+7.015586669815619)*(a-7.015625- -38330184381246464e-21))*f):(t=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)}(o=(u=8/a)*u),e=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)}(o),i=1/(1.772453850905516*v(a)),function(r,n){1===arguments.length?Dr([0,0],r):Dr(r,n)}(Jr,a),n=i*(t*(Jr[0]-Jr[1])+u*e*(Jr[0]+Jr[1]))),r<0&&(n*=-1),n)}function Qr(r,n,t,e,o,f,u){return y(r,n,t,e,o,Kr,f,u)}function Rr(r,n,t,e,o,f,u,i,a){return p(r,n,t,e,o,f,u,Kr,i,a)}l(Qr,"ndarray",Rr),r.default=Qr,r.ndarray=Rr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).besselj1By={});
//# sourceMappingURL=browser.js.map
