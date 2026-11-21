"use strict";(()=>{function Ht(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function sa(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ke={duration:.5,overwrite:!1,delay:0},Ri,it,$,Ct=1e8,I=1/Ct,Ai=Math.PI*2,vs=Ai/4,bs=0,la=Math.sqrt,xs=Math.cos,Ss=Math.sin,tt=function(e){return typeof e=="string"},U=function(e){return typeof e=="function"},Wt=function(e){return typeof e=="number"},Mn=function(e){return typeof e>"u"},Dt=function(e){return typeof e=="object"},ft=function(e){return e!==!1},Wi=function(){return typeof window<"u"},vn=function(e){return U(e)||tt(e)},ca=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ct=Array.isArray,Ts=/random\([^)]+\)/g,Cs=/,\s*/g,Jr=/(?:-?\.?\d|\.)+/gi,zi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,se=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_i=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ni=/[+-]=-?[.\d]+/,As=/[^,'"\[\]\s]+/gi,ks=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,V,Lt,ki,Ii,vt={},Tn={},da,ua=function(e){return(Tn=_e(e,vt))&&dt},Pn=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},je=function(e,t){return!t&&console.warn(e)},ha=function(e,t){return e&&(vt[e]=t)&&Tn&&(Tn[e]=t)||vt},Xe=function(){return 0},Es={suppressEvents:!0,isStart:!0,kill:!1},bn={suppressEvents:!0,kill:!1},Ms={suppressEvents:!0},$i={},Vt=[],Ei={},ma,mt={},vi={},ta=30,xn=[],Gi="",Bi=function(e){var t=e[0],n,i;if(Dt(t)||U(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xn.length;i--&&!xn[i].targetTest(t););n=xn[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yi(e[i],n)))||e.splice(i,1);return e},qt=function(e){return e._gsap||Bi(At(e))[0]._gsap},Vi=function(e,t,n){return(n=e[t])&&U(n)?e[t]():Mn(n)&&e.getAttribute&&e.getAttribute(t)||n},ut=function(e,t){return(e=e.split(",")).forEach(t)||e},Y=function(e){return Math.round(e*1e5)/1e5||0},B=function(e){return Math.round(e*1e7)/1e7||0},le=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ps=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Cn=function(){var e=Vt.length,t=Vt.slice(0),n,i;for(Ei={},Vt.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qi=function(e){return!!(e._initted||e._startAt||e.add)},pa=function(e,t,n,i){Vt.length&&!it&&Cn(),e.render(t,n,i||!!(it&&t<0&&qi(e))),Vt.length&&!it&&Cn()},fa=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(As).length<2?t:tt(e)?e.trim():e},ga=function(e){return e},bt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ls=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},_e=function(e,t){for(var n in t)e[n]=t[n];return e},ea=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Dt(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},An=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qe=function(e){var t=e.parent||V,n=e.keyframes?Ls(ct(e.keyframes)):bt;if(ft(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Os=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ya=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ln=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ut=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},re=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ds=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mi=function(e,t,n,i){return e._startAt&&(it?e._startAt.revert(bn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Fs=function a(e){return!e||e._ts&&a(e.parent)},na=function(e){return e._repeat?ve(e._tTime,e=e.duration()+e._rDelay)*e:0},ve=function(e,t){var n=Math.floor(e=B(e/t));return e&&n===e?n-1:n},kn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},On=function(e){return e._end=B(e._start+(e._tDur/Math.abs(e._ts||e._rts||I)||0))},Dn=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=B(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),On(e),n._dirty||re(n,e)),e},wa=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kn(e.rawTime(),t),(!t._dur||Je(0,t.totalDuration(),n)-t._tTime>I)&&t.render(n,!0)),re(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-I}},Ot=function(e,t,n,i){return t.parent&&Ut(t),t._start=B((Wt(n)?n:n||e!==V?Tt(e,n,t):e._time)+t._delay),t._end=B(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ya(e,t,"_first","_last",e._sort?"_start":0),Pi(t)||(e._recent=t),i||wa(e,t),e._ts<0&&Dn(e,e._tTime),e},_a=function(e,t){return(vt.ScrollTrigger||Pn("scrollTrigger",t))&&vt.ScrollTrigger.create(t,e)},va=function(e,t,n,i,r){if(Xi(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!it&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ma!==pt.frame)return Vt.push(e),e._lazy=[r,i],1},Hs=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Pi=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Rs=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Hs(e)&&!(!e._initted&&Pi(e))||(e._ts<0||e._dp._ts<0)&&!Pi(e))?0:1,s=e._rDelay,l=0,c,d,m;if(s&&e._repeat&&(l=Je(0,e._tDur,t),d=ve(l,s),e._yoyo&&d&1&&(o=1-o),d!==ve(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||it||i||e._zTime===I||!t&&e._zTime){if(!e._initted&&va(e,t,i,n,l))return;for(m=e._zTime,e._zTime=t||(n?I:0),n||(n=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Mi(e,t,n,!0),e._onUpdate&&!n&&_t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ut(e,1),!n&&!it&&(_t(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ws=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},be=function(e,t,n,i){var r=e._repeat,o=B(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:B(o*(r+1)+e._rDelay*r):o,s>0&&!i&&Dn(e,e._tTime=e._tDur*s),e.parent&&On(e),n||re(e.parent,e),e},ia=function(e){return e instanceof lt?re(e):be(e,e._dur)},zs={_start:0,endTime:Xe,totalDuration:Xe},Tt=function a(e,t,n){var i=e.labels,r=e._recent||zs,o=e.duration()>=Ct?r.endTime(!1):e._dur,s,l,c;return tt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(ct(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},Ue=function(e,t,n){var i=Wt(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ft(l.vars.inherit)&&l.parent;o.immediateRender=ft(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Z(t[0],o,t[r+1])},Yt=function(e,t){return e||e===0?t(e):t},Je=function(e,t,n){return n<e?e:n>t?t:n},rt=function(e,t){return!tt(e)||!(t=ks.exec(e))?"":t[1]},Ns=function(e,t,n){return Yt(n,function(i){return Je(e,t,i)})},Li=[].slice,ba=function(e,t){return e&&Dt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dt(e[0]))&&!e.nodeType&&e!==Lt},Is=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return tt(i)&&!t||ba(i,1)?(r=n).push.apply(r,At(i)):n.push(i)})||n},At=function(e,t,n){return $&&!t&&$.selector?$.selector(e):tt(e)&&!n&&(ki||!xe())?Li.call((t||Ii).querySelectorAll(e),0):ct(e)?Is(e,n):ba(e)?Li.call(e,0):e?[e]:[]},Oi=function(e){return e=At(e)[0]||je("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return At(t,n.querySelectorAll?n:n===e?je("Invalid scope")||Ii.createElement("div"):e)}},xa=function(e){return e.sort(function(){return .5-Math.random()})},Sa=function(e){if(U(e))return e;var t=Dt(e)?e:{each:e},n=ae(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,d=i,m=i;return tt(i)?d=m={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(d=i[0],m=i[1]),function(u,p,g){var h=(g||t).length,f=o[h],y,w,_,b,v,x,T,A,C;if(!f){if(C=t.grid==="auto"?0:(t.grid||[1,Ct])[1],!C){for(T=-Ct;T<(T=g[C++].getBoundingClientRect().left)&&C<h;);C<h&&C--}for(f=o[h]=[],y=l?Math.min(C,h)*d-.5:i%C,w=C===Ct?0:l?h*m/C-.5:i/C|0,T=0,A=Ct,x=0;x<h;x++)_=x%C-y,b=w-(x/C|0),f[x]=v=c?Math.abs(c==="y"?b:_):la(_*_+b*b),v>T&&(T=v),v<A&&(A=v);i==="random"&&xa(f),f.max=T-A,f.min=A,f.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(C>h?h-1:c?c==="y"?h/C:C:Math.max(C,h/C))||0)*(i==="edges"?-1:1),f.b=h<0?r-h:r,f.u=rt(t.amount||t.each)||0,n=n&&h<0?Js(n):n}return h=(f[u]-f.min)/f.max||0,B(f.b+(n?n(h):h)*f.v)+f.u}},Di=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=B(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wt(n)?0:rt(n))}},Ta=function(e,t){var n=ct(e),i,r;return!n&&Dt(e)&&(i=n=e.radius||Ct,e.values?(e=At(e.values),(r=!Wt(e[0]))&&(i*=i)):e=Di(e.increment)),Yt(t,n?U(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ct,d=0,m=e.length,u,p;m--;)r?(u=e[m].x-s,p=e[m].y-l,u=u*u+p*p):u=Math.abs(e[m]-s),u<c&&(c=u,d=m);return d=!i||c<=i?e[d]:o,r||d===o||Wt(o)?d:d+rt(o)}:Di(e))},Ca=function(e,t,n,i){return Yt(ct(e)?!t:n===!0?!!(n=0):!i,function(){return ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Gs=function(e,t){return function(n){return e(parseFloat(n))+(t||rt(n))}},Bs=function(e,t,n){return ka(e,t,0,1,n)},Aa=function(e,t,n){return Yt(n,function(i){return e[~~t(i)]})},Vs=function a(e,t,n){var i=t-e;return ct(e)?Aa(e,a(0,e.length),t):Yt(n,function(r){return(i+(r-e)%i)%i+e})},qs=function a(e,t,n){var i=t-e,r=i*2;return ct(e)?Aa(e,a(0,e.length-1),t):Yt(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Se=function(e){return e.replace(Ts,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Cs);return Ca(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ka=function(e,t,n,i,r){var o=t-e,s=i-n;return Yt(r,function(l){return n+((l-e)/o*s||0)})},Us=function a(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=tt(e),s={},l,c,d,m,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ct(e)&&!ct(t)){for(d=[],m=e.length,u=m-2,c=1;c<m;c++)d.push(a(e[c-1],e[c]));m--,r=function(g){g*=m;var h=Math.min(u,~~g);return d[h](g-h)},n=t}else i||(e=_e(ct(e)?[]:{},e));if(!d){for(l in t)Ki.call(s,e,l,"get",t[l]);r=function(g){return Ji(g,s)||(o?e.p:e)}}}return Yt(n,r)},ra=function(e,t,n){var i=e.labels,r=Ct,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},_t=function(e,t,n){var i=e.vars,r=i[t],o=$,s=e._ctx,l,c,d;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vt.length&&Cn(),s&&($=s),d=l?r.apply(c,l):r.call(c),$=o,d},Be=function(e){return Ut(e),e.scrollTrigger&&e.scrollTrigger.kill(!!it),e.progress()<1&&_t(e,"onInterrupt"),e},we,Ea=[],Ma=function(e){if(e)if(e=!e.name&&e.default||e,Wi()||e.headless){var t=e.name,n=U(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Xe,render:Ji,add:Ki,kill:cl,modifier:ll,rawVars:0},o={targetTest:0,get:0,getSetter:Fn,aliases:{},register:0};if(xe(),e!==i){if(mt[t])return;bt(i,bt(An(e,r),o)),_e(i.prototype,_e(r,An(e,o))),mt[i.prop=t]=i,e.targetTest&&(xn.push(i),$i[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ha(t,i),e.register&&e.register(dt,i,ht)}else Ea.push(e)},N=255,Ve={aqua:[0,N,N],lime:[0,N,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,N],navy:[0,0,128],white:[N,N,N],olive:[128,128,0],yellow:[N,N,0],orange:[N,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[N,0,0],pink:[N,192,203],cyan:[0,N,N],transparent:[N,N,N,0]},bi=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*N+.5|0},Pa=function(e,t,n){var i=e?Wt(e)?[e>>16,e>>8&N,e&N]:0:Ve.black,r,o,s,l,c,d,m,u,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ve[e])i=Ve[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&N,i&N,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&N,e&N]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Jr),!t)l=+i[0]%360/360,c=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(c+1):d+c-d*c,r=d*2-o,i.length>3&&(i[3]*=1),i[0]=bi(l+1/3,r,o),i[1]=bi(l,r,o),i[2]=bi(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(zi),n&&i.length<4&&(i[3]=1),i}else i=e.match(Jr)||Ve.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/N,o=i[1]/N,s=i[2]/N,m=Math.max(r,o,s),u=Math.min(r,o,s),d=(m+u)/2,m===u?l=c=0:(p=m-u,c=d>.5?p/(2-m-u):p/(m+u),l=m===r?(o-s)/p+(o<s?6:0):m===o?(s-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},La=function(e){var t=[],n=[],i=-1;return e.split(Rt).forEach(function(r){var o=r.match(se)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},aa=function(e,t,n){var i="",r=(e+i).match(Rt),o=t?"hsla(":"rgba(",s=0,l,c,d,m;if(!r)return e;if(r=r.map(function(u){return(u=Pa(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=La(e),l=n.c,l.join(i)!==d.c.join(i)))for(c=e.replace(Rt,"1").split(se),m=c.length-1;s<m;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!c)for(c=e.split(Rt),m=c.length-1;s<m;s++)i+=c[s]+r[s];return i+c[m]},Rt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ve)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),Ys=/hsl[a]?\(/,Ui=function(e){var t=e.join(" "),n;if(Rt.lastIndex=0,Rt.test(t))return n=Ys.test(t),e[1]=aa(e[1],n),e[0]=aa(e[0],n,La(e[1])),!0},Ze,pt=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,c,d,m,u,p,g=function h(f){var y=a()-i,w=f===!0,_,b,v,x;if((y>e||y<0)&&(n+=y-t),i+=y,v=i-n,_=v-o,(_>0||w)&&(x=++m.frame,u=v-m.time*1e3,m.time=v=v/1e3,o+=_+(_>=r?4:r-_),b=1),w||(l=c(h)),b)for(p=0;p<s.length;p++)s[p](v,u,x,f)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return u/(1e3/(f||60))},wake:function(){da&&(!ki&&Wi()&&(Lt=ki=window,Ii=Lt.document||{},vt.gsap=dt,(Lt.gsapVersions||(Lt.gsapVersions=[])).push(dt.version),ua(Tn||Lt.GreenSockGlobals||!Lt.gsap&&Lt||{}),Ea.forEach(Ma)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),c=d||function(f){return setTimeout(f,o-m.time*1e3+1|0)},Ze=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Ze=0,c=Xe},lagSmoothing:function(f,y){e=f||1/0,t=Math.min(y||33,e)},fps:function(f){r=1e3/(f||240),o=m.time*1e3+r},add:function(f,y,w){var _=y?function(b,v,x,T){f(b,v,x,T),m.remove(_)}:f;return m.remove(f),s[w?"unshift":"push"](_),xe(),_},remove:function(f,y){~(y=s.indexOf(f))&&s.splice(y,1)&&p>=y&&p--},_listeners:s},m})(),xe=function(){return!Ze&&pt.wake()},L={},Ks=/^[\d.\-M][\d.\-,\s]/,js=/["']/g,Xs=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,c;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(js,"").trim():+c,i=l.substr(s+1).trim();return t},Zs=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Qs=function(e){var t=(e+"").split("("),n=L[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Xs(t[1])]:Zs(e).split(",").map(fa)):L._CE&&Ks.test(e)?L._CE("",e):n},Js=function(e){return function(t){return 1-e(1-t)}},ae=function(e,t){return e&&(U(e)?e:L[e]||Qs(e))||t},ce=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return ut(e,function(s){L[s]=vt[s]=r,L[o=s.toLowerCase()]=n;for(var l in r)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=r[l]}),r},Oa=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xi=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Ai*(Math.asin(1/i)||0),s=function(d){return d===1?1:i*Math.pow(2,-10*d)*Ss((d-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:Oa(s);return r=Ai/r,l.config=function(c,d){return a(e,c,d)},l},Si=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Oa(n);return i.config=function(r){return a(e,r)},i};ut("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;ce(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;ce("Elastic",xi("in"),xi("out"),xi());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};ce("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ce("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ce("Circ",function(a){return-(la(1-a*a)-1)});ce("Sine",function(a){return a===1?1:-xs(a*vs)+1});ce("Back",Si("in"),Si("out"),Si());L.SteppedEase=L.steps=vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-I;return function(s){return((i*Je(0,o,s)|0)+r)*n}}};Ke.ease=L["quad.out"];ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Gi+=a+","+a+"Params,"});var Yi=function(e,t){this.id=bs++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vi,this.set=t?t.getSetter:Fn},Qe=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,be(this,+t.duration,1,1),this.data=t.data,$&&(this._ctx=$,$.data.push(this)),Ze||pt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,be(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(xe(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Dn(this,n),!r._dp||r.parent||wa(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ot(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===I||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pa(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+na(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+na(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ve(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-I?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-I?0:this._rts,this.totalTime(Je(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),On(this),Ds(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xe(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==I&&(this._tTime-=I)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=B(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ot(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ft(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kn(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ms);var i=it;return it=n,qi(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),it=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ia(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ia(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Tt(this,n),ft(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ft(i)),this._dur||(this._zTime=-I),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-I:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-I,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-I)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var s=U(n)?n:ga,l=function(){var d=i.then;i.then=null,r&&r(),U(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=d),o(s),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Be(this)},a})();bt(Qe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-I,_prom:0,_ps:!1,_rts:1});var lt=(function(a){sa(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ft(n.sortChildren),V&&Ot(n.parent||V,Ht(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&_a(Ht(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ue(0,arguments,this),this},t.from=function(i,r,o){return Ue(1,arguments,this),this},t.fromTo=function(i,r,o,s){return Ue(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,qe(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Z(i,r,Tt(this,o),1),this},t.call=function(i,r,o){return Ot(this,Z.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,c,d){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=d,o.parent=this,new Z(i,o,Tt(this,l)),this},t.staggerFrom=function(i,r,o,s,l,c,d){return o.runBackwards=1,qe(o).immediateRender=ft(o.immediateRender),this.staggerTo(i,r,o,s,l,c,d)},t.staggerFromTo=function(i,r,o,s,l,c,d,m){return s.startAt=o,qe(s).immediateRender=ft(s.immediateRender),this.staggerTo(i,r,s,l,c,d,m)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=i<=0?0:B(i),m=this._zTime<0!=i<0&&(this._initted||!c),u,p,g,h,f,y,w,_,b,v,x,T;if(this!==V&&d>l&&i>=0&&(d=l),d!==this._tTime||o||m){if(s!==this._time&&c&&(d+=this._time-s,i+=this._time-s),u=d,b=this._start,_=this._ts,y=!_,m&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(x=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,o);if(u=B(d%f),d===l?(h=this._repeat,u=c):(v=B(d/f),h=~~v,h&&h===v&&(u=c,h--),u>c&&(u=c)),v=ve(this._tTime,f),!s&&this._tTime&&v!==h&&this._tTime-v*f-this._dur<=0&&(v=h),x&&h&1&&(u=c-u,T=1),h!==v&&!this._lock){var A=x&&v&1,C=A===(x&&h&1);if(h<v&&(A=!A),s=A?0:d%c?c:d,this._lock=1,this.render(s||(T?0:B(h*f)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&_t(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,v=h),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,s=A?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Ws(this,B(s),B(u)),w&&(d-=u-(u=w._start))),this._tTime=d,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&c&&!r&&!v&&(_t(this,"onStart"),this._tTime!==d))return this;if(u>=s&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||u>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,o),u!==this._time||!this._ts&&!y){w=0,g&&(d+=this._zTime=-I);break}}p=g}else{p=this._last;for(var S=i<0?i:u;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||it&&qi(p)),u!==this._time||!this._ts&&!y){w=0,g&&(d+=this._zTime=S?-I:I);break}}p=g}}if(w&&!r&&(this.pause(),w.render(u>=s?0:-I)._zTime=u>=s?1:-1,this._ts))return this._start=b,On(this),this.render(i,r,o);this._onUpdate&&!r&&_t(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ut(this,1),!r&&!(i<0&&!s)&&(d||s||!l)&&(_t(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Wt(r)||(r=Tt(this,r,i)),!(i instanceof Qe)){if(ct(i))return i.forEach(function(s){return o.add(s,r)}),this;if(tt(i))return this.addLabel(i,r);if(U(i))i=Z.delayedCall(0,i);else return this}return this!==i?Ot(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-Ct);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Z?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return tt(i)?this.removeLabel(i):U(i)?this.killTweensOf(i):(i.parent===this&&Ln(this,i),i===this._recent&&(this._recent=this._last),re(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=B(pt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Tt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=Z.delayedCall(0,r||Xe,o);return s.data="isPause",this._hasPause=1,Ot(this,s,Tt(this,i))},t.removePause=function(i){var r=this._first;for(i=Tt(this,i);r;)r._start===i&&r.data==="isPause"&&Ut(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Bt!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=At(i),l=this._first,c=Wt(r),d;l;)l instanceof Z?Ps(l._targets,s)&&(c?(!Bt||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(d=l.getTweensOf(s,r)).length&&o.push.apply(o,d),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=Tt(o,i),l=r,c=l.startAt,d=l.onStart,m=l.onStartParams,u=l.immediateRender,p,g=Z.to(o,bt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||I,onStart:function(){if(o.pause(),!p){var f=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==f&&be(g,f,0,1).render(g._time,!0,!0),p=1}d&&d.apply(g,m||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,bt({startAt:{time:Tt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ra(this,Tt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ra(this,Tt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+I)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,c;for(i=B(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return re(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),re(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=Ct,c,d,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(m=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Ot(o,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(r-=d,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=B(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;be(o,o===V&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(V._ts&&(pa(V,kn(i,V)),ma=pt.frame),pt.frame>=ta){ta+=gt.autoSleep||120;var r=V._first;if((!r||!r._ts)&&gt.autoSleep&&pt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pt.sleep()}}},e})(Qe);bt(lt.prototype,{_lock:0,_hasPause:0,_forcing:0});var tl=function(e,t,n,i,r,o,s){var l=new ht(this._pt,e,t,0,1,Qi,null,r),c=0,d=0,m,u,p,g,h,f,y,w;for(l.b=n,l.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=Se(i)),o&&(w=[n,i],o(w,e,t),n=w[0],i=w[1]),u=n.match(_i)||[];m=_i.exec(i);)g=m[0],h=i.substring(c,m.index),p?p=(p+1)%5:h.substr(-5)==="rgba("&&(p=1),g!==u[d++]&&(f=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:f,c:g.charAt(1)==="="?le(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},c=_i.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Ni.test(i)||y)&&(l.e=0),this._pt=l,l},Ki=function(e,t,n,i,r,o,s,l,c,d){U(i)&&(i=i(r||0,e,o));var m=e[t],u=n!=="get"?n:U(m)?c?e[t.indexOf("set")||!U(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():m,p=U(m)?c?al:Ha:Zi,g;if(tt(i)&&(~i.indexOf("random(")&&(i=Se(i)),i.charAt(1)==="="&&(g=le(u,i)+(rt(u)||0),(g||g===0)&&(i=g))),!d||u!==i||Fi)return!isNaN(u*i)&&i!==""?(g=new ht(this._pt,e,t,+u||0,i-(u||0),typeof m=="boolean"?sl:Ra,0,p),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!m&&!(t in e)&&Pn(t,i),tl.call(this,e,t,u,i,p,l||gt.stringFilter,c))},el=function(e,t,n,i,r){if(U(e)&&(e=Ye(e,r,t,n,i)),!Dt(e)||e.style&&e.nodeType||ct(e)||ca(e))return tt(e)?Ye(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Ye(e[s],r,t,n,i);return o},ji=function(e,t,n,i,r,o){var s,l,c,d;if(mt[e]&&(s=new mt[e]).init(r,s.rawVars?t[e]:el(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ht(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==we))for(c=n._ptLookup[n._targets.indexOf(r)],d=s._props.length;d--;)c[s._props[d]]=l;return s},Bt,Fi,Xi=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,d=i.runBackwards,m=i.yoyoEase,u=i.keyframes,p=i.autoRevert,g=e._dur,h=e._startAt,f=e._targets,y=e.parent,w=y&&y.data==="nested"?y.vars.targets:f,_=e._overwrite==="auto"&&!Ri,b=e.timeline,v=i.easeReverse||m,x,T,A,C,S,E,P,D,F,H,z,R,W;if(b&&(!u||!r)&&(r="none"),e._ease=ae(r,Ke.ease),e._rEase=v&&(ae(v)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||u&&!i.stagger){if(D=f[0]?qt(f[0]).harness:0,R=D&&i[D.prop],x=An(i,$i),h&&(h._zTime<0&&h.progress(1),t<0&&d&&s&&!p?h.render(-1,!0):h.revert(d&&g?bn:Es),h._lazy=0),o){if(Ut(e._startAt=Z.set(f,bt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!h&&ft(l),startAt:null,delay:0,onUpdate:c&&function(){return _t(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it||!s&&!p)&&e._startAt.revert(bn),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&g&&!h){if(t&&(s=!1),A=bt({overwrite:!1,data:"isFromStart",lazy:s&&!h&&ft(l),immediateRender:s,stagger:0,parent:y},x),R&&(A[D.prop]=R),Ut(e._startAt=Z.set(f,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it?e._startAt.revert(bn):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,I,I);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ft(l)||l&&!g,T=0;T<f.length;T++){if(S=f[T],P=S._gsap||Bi(f)[T]._gsap,e._ptLookup[T]=H={},Ei[P.id]&&Vt.length&&Cn(),z=w===f?T:w.indexOf(S),D&&(F=new D).init(S,R||x,e,z,w)!==!1&&(e._pt=C=new ht(e._pt,S,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(nt){H[nt]=C}),F.priority&&(E=1)),!D||R)for(A in x)mt[A]&&(F=ji(A,x,e,z,S,w))?F.priority&&(E=1):H[A]=C=Ki.call(e,S,A,"get",x[A],z,w,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),_&&e._pt&&(Bt=e,V.killTweensOf(S,H,e.globalTime(t)),W=!e.parent,Bt=0),e._pt&&l&&(Ei[P.id]=1)}E&&tr(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,u&&t<=0&&b.render(Ct,!0,!0)},nl=function(e,t,n,i,r,o,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,m,u,p;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,p=e._targets.length;p--;){if(d=u[p][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Fi=1,e.vars[t]="+=0",Xi(e,s),Fi=0,l?je(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(p=c.length;p--;)m=c[p],d=m._pt||m,d.s=(i||i===0)&&!r?i:d.s+(i||0)+o*d.c,d.c=n-d.s,m.e&&(m.e=Y(n)+rt(m.e)),m.b&&(m.b=d.s+rt(m.b))},il=function(e,t){var n=e[0]?qt(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=_e({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},rl=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(ct(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Ye=function(e,t,n,i,r){return U(e)?e.call(t,n,i,r):tt(e)&&~e.indexOf("random(")?Se(e):e},Da=Gi+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Fa={};ut(Da+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Fa[a]=1});var Z=(function(a){sa(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:qe(i))||this;var l=s.vars,c=l.duration,d=l.delay,m=l.immediateRender,u=l.stagger,p=l.overwrite,g=l.keyframes,h=l.defaults,f=l.scrollTrigger,y=i.parent||V,w=(ct(n)||ca(n)?Wt(n[0]):"length"in i)?[n]:At(n),_,b,v,x,T,A,C,S;if(s._targets=w.length?Bi(w):je("GSAP target "+n+" not found. https://gsap.com",!gt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||u||vn(c)||vn(d)){i=s.vars;var E=i.easeReverse||i.yoyoEase;if(_=s.timeline=new lt({data:"nested",defaults:h||{},targets:y&&y.data==="nested"?y.vars.targets:w}),_.kill(),_.parent=_._dp=Ht(s),_._start=0,u||vn(c)||vn(d)){if(x=w.length,C=u&&Sa(u),Dt(u))for(T in u)~Da.indexOf(T)&&(S||(S={}),S[T]=u[T]);for(b=0;b<x;b++)v=An(i,Fa),v.stagger=0,E&&(v.easeReverse=E),S&&_e(v,S),A=w[b],v.duration=+Ye(c,Ht(s),b,A,w),v.delay=(+Ye(d,Ht(s),b,A,w)||0)-s._delay,!u&&x===1&&v.delay&&(s._delay=d=v.delay,s._start+=d,v.delay=0),_.to(A,v,C?C(b,A,w):0),_._ease=L.none;_.duration()?c=d=0:s.timeline=0}else if(g){qe(bt(_.vars.defaults,{ease:"none"})),_._ease=ae(g.ease||i.ease||"none");var P=0,D,F,H;if(ct(g))g.forEach(function(z){return _.to(w,z,">")}),_.duration();else{v={};for(T in g)T==="ease"||T==="easeEach"||rl(T,g[T],v,g.easeEach);for(T in v)for(D=v[T].sort(function(z,R){return z.t-R.t}),P=0,b=0;b<D.length;b++)F=D[b],H={ease:F.e,duration:(F.t-(b?D[b-1].t:0))/100*c},H[T]=F.v,_.to(w,H,P),P+=H.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||s.duration(c=_.duration())}else s.timeline=0;return p===!0&&!Ri&&(Bt=Ht(s),V.killTweensOf(w),Bt=0),Ot(y,Ht(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(m||!c&&!g&&s._start===B(y._time)&&ft(m)&&Fs(Ht(s))&&y.data!=="nested")&&(s._tTime=-I,s.render(Math.max(0,-d)||0)),f&&_a(Ht(s),f),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,c=this._dur,d=i<0,m=i>l-I&&!d?l:i<I?0:i,u,p,g,h,f,y,w,_;if(!c)Rs(this,i,r,o);else if(m!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=m,_=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+i,r,o);if(u=B(m%h),m===l?(g=this._repeat,u=c):(f=B(m/h),g=~~f,g&&g===f?(u=c,g--):u>c&&(u=c)),y=this._yoyo&&g&1,y&&(u=c-u),f=ve(this._tTime,h),u===s&&!o&&this._initted&&g===f)return this._tTime=m,this;g!==f&&this.vars.repeatRefresh&&!y&&!this._lock&&u!==h&&this._initted&&(this._lock=o=1,this.render(B(h*g),!0).invalidate()._lock=0)}if(!this._initted){if(va(this,d?i:u,o,r,m))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==f))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var b=u<s;if(b!==this._inv){var v=b?s:c-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=m,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&m&&!r&&!f&&(_t(this,"onStart"),this._tTime!==m))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;_&&_.render(i<0?i:_._dur*_._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(d&&Mi(this,i,r,o),_t(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&_t(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&Mi(this,i,!0,!0),(i||!c)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Ut(this,1),!r&&!(d&&!s)&&(m||s||y)&&(_t(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s,l){Ze||pt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Xi(this,c),d=this._ease(c/this._dur),nl(this,i,r,o,s,d,c,l)?this.resetTo(i,r,o,s,1):(Dn(this,0),this.parent||ya(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Be(this):this.scrollTrigger&&this.scrollTrigger.kill(!!it),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bt&&Bt.vars.overwrite!==!0)._first||Be(this),this.parent&&o!==this.timeline.totalDuration()&&be(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?At(i):s,c=this._ptLookup,d=this._pt,m,u,p,g,h,f,y;if((!r||r==="all")&&Os(s,l))return r==="all"&&(this._pt=0),Be(this);for(m=this._op=this._op||[],r!=="all"&&(tt(r)&&(h={},ut(r,function(w){return h[w]=1}),r=h),r=il(s,r)),y=s.length;y--;)if(~l.indexOf(s[y])){u=c[y],r==="all"?(m[y]=r,g=u,p={}):(p=m[y]=m[y]||{},g=r);for(h in g)f=u&&u[h],f&&((!("kill"in f.d)||f.d.kill(h)===!0)&&Ln(this,f,"_pt"),delete u[h]),p!=="all"&&(p[h]=1)}return this._initted&&!this._pt&&d&&Be(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ue(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return Ue(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return V.killTweensOf(i,r,o)},e})(Qe);bt(Z.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ut("staggerTo,staggerFrom,staggerFromTo",function(a){Z[a]=function(){var e=new lt,t=Li.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Zi=function(e,t,n){return e[t]=n},Ha=function(e,t,n){return e[t](n)},al=function(e,t,n,i){return e[t](i.fp,n)},ol=function(e,t,n){return e.setAttribute(t,n)},Fn=function(e,t){return U(e[t])?Ha:Mn(e[t])&&e.setAttribute?ol:Zi},Ra=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sl=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qi=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ji=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ll=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},cl=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ln(this,t,"_pt"):t.dep||(n=1),t=i;return!n},dl=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tr=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},ht=(function(){function a(t,n,i,r,o,s,l,c,d){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||Ra,this.d=l||this,this.set=c||Zi,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=dl,this.m=n,this.mt=r,this.tween=i},a})();ut(Gi+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return $i[a]=1});vt.TweenMax=vt.TweenLite=Z;vt.TimelineLite=vt.TimelineMax=lt;V=new lt({sortChildren:!1,defaults:Ke,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=Ui;var oe=[],Sn={},ul=[],oa=0,hl=0,Ti=function(e){return(Sn[e]||ul).map(function(t){return t()})},Hi=function(){var e=Date.now(),t=[];e-oa>2&&(Ti("matchMediaInit"),oe.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,c;for(s in i)o=Lt.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ti("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),oa=e,Ti("matchMedia"))},Wa=(function(){function a(t,n){this.selector=n&&Oi(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hl++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){U(n)&&(r=i,i=n,n=U);var o=this,s=function(){var c=$,d=o.selector,m;return c&&c!==o&&c.data.push(o),r&&(o.selector=Oi(r)),$=o,m=i.apply(o,arguments),U(m)&&o._r.push(m),$=c,o.selector=d,o.isReverted=!1,m};return o.last=s,n===U?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},e.ignore=function(n){var i=$;$=null,n(this),$=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Z&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof lt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Z)&&c.revert&&c.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=oe.length;o--;)oe[o].id===this.id&&oe.splice(o,1)},e.revert=function(n){this.kill(n||{})},a})(),ml=(function(){function a(t){this.contexts=[],this.scope=t,$&&$.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){Dt(n)||(n={matches:n});var o=new Wa(0,r||this.scope),s=o.conditions={},l,c,d;$&&!o.selector&&(o.selector=$.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?d=1:(l=Lt.matchMedia(n[c]),l&&(oe.indexOf(o)<0&&oe.push(o),(s[c]=l.matches)&&(d=1),l.addListener?l.addListener(Hi):l.addEventListener("change",Hi)));return d&&i(o,function(m){return o.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),En={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ma(i)})},timeline:function(e){return new lt(e)},getTweensOf:function(e,t){return V.getTweensOf(e,t)},getProperty:function(e,t,n,i){tt(e)&&(e=At(e)[0]);var r=qt(e||{}).get,o=n?ga:fa;return n==="native"&&(n=""),e&&(t?o((mt[t]&&mt[t].get||r)(e,t,n,i)):function(s,l,c){return o((mt[s]&&mt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=At(e),e.length>1){var i=e.map(function(d){return dt.quickSetter(d,t,n)}),r=i.length;return function(d){for(var m=r;m--;)i[m](d)}}e=e[0]||{};var o=mt[t],s=qt(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(d){var m=new o;we._pt=0,m.init(e,n?d+n:d,we,0,[e]),m.render(1,m),we._pt&&Ji(1,we)}:s.set(e,l);return o?c:function(d){return c(e,l,n?d+n:d,s,1)}},quickTo:function(e,t,n){var i,r=dt.to(e,bt((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,d){return r.resetTo(t,l,c,d)};return o.tween=r,o},isTweening:function(e){return V.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ae(e.ease,Ke.ease)),ea(Ke,e||{})},config:function(e){return ea(gt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!mt[s]&&!vt[s]&&je(t+" effect requires "+s+" plugin.")}),vi[t]=function(s,l,c){return n(At(s),bt(l||{},r),c)},o&&(lt.prototype[t]=function(s,l,c){return this.add(vi[t](s,Dt(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){L[e]=ae(t)},parseEase:function(e,t){return arguments.length?ae(e,t):L},getById:function(e){return V.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new lt(e),i,r;for(n.smoothChildTiming=ft(e.smoothChildTiming),V.remove(n),n._dp=0,n._time=n._tTime=V._time,i=V._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Z&&i.vars.onComplete===i._targets[0]))&&Ot(n,i,i._start-i._delay),i=r;return Ot(V,n,0),n},context:function(e,t){return e?new Wa(e,t):$},matchMedia:function(e){return new ml(e)},matchMediaRefresh:function(){return oe.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hi()},addEventListener:function(e,t){var n=Sn[e]||(Sn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Sn[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Vs,wrapYoyo:qs,distribute:Sa,random:Ca,snap:Ta,normalize:Bs,getUnit:rt,clamp:Ns,splitColor:Pa,toArray:At,selector:Oi,mapRange:ka,pipe:$s,unitize:Gs,interpolate:Us,shuffle:xa},install:ua,effects:vi,ticker:pt,updateRoot:lt.updateRoot,plugins:mt,globalTimeline:V,core:{PropTween:ht,globals:ha,Tween:Z,Timeline:lt,Animation:Qe,getCache:qt,_removeLinkedListItem:Ln,reverting:function(){return it},context:function(e){return e&&$&&($.data.push(e),e._ctx=$),$},suppressOverwrites:function(e){return Ri=e}}};ut("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return En[a]=Z[a]});pt.add(lt.updateRoot);we=En.to({},{duration:0});var pl=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fl=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=pl(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ci=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,c;if(tt(r)&&(l={},ut(r,function(d){return l[d]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}fl(s,r)}}}},dt=En.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)it?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ci("roundProps",Di),Ci("modifiers"),Ci("snap",Ta))||En;Z.version=lt.version=dt.version="3.15.0";da=1;Wi()&&xe();var gl=L.Power0,yl=L.Power1,wl=L.Power2,_l=L.Power3,vl=L.Power4,bl=L.Linear,xl=L.Quad,Sl=L.Cubic,Tl=L.Quart,Cl=L.Quint,Al=L.Strong,kl=L.Elastic,El=L.Back,Ml=L.SteppedEase,Pl=L.Bounce,Ll=L.Sine,Ol=L.Expo,Dl=L.Circ;var za,Kt,Ce,or,me,Fl,Na,sr,Hl=function(){return typeof window<"u"},Nt={},he=180/Math.PI,Ae=Math.PI/180,Te=Math.atan2,Ia=1e8,lr=/([A-Z])/g,Rl=/(left|right|width|margin|padding|x)/i,Wl=/[\s,\(]\S/,Ft={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zl=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nl=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Il=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$l=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ka=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ja=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gl=function(e,t,n){return e.style[t]=n},Bl=function(e,t,n){return e.style.setProperty(t,n)},Vl=function(e,t,n){return e._gsap[t]=n},ql=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ul=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Yl=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},q="transform",yt=q+"Origin",Kl=function a(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Nt&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ft[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=zt(i,s)}):this.tfm[e]=o.x?o[e]:zt(i,e),e===yt&&(this.tfm.zOrigin=o.zOrigin);else return Ft.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yt,t,"")),e=q}(r||t)&&this.props.push(e,t,r[e])},Xa=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jl=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(lr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=sr(),(!r||!r.isStart)&&!n[q]&&(Xa(n),i.zOrigin&&n[yt]&&(n[yt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Za=function(e,t){var n={target:e,props:[],revert:jl,save:Kl};return e._gsap||dt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qa,ir=function(e,t){var n=Kt.createElementNS?Kt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kt.createElement(e);return n&&n.style?n:Kt.createElement(e)},xt=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(lr,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,ke(t)||t,1)||""},$a="O,Moz,ms,Ms,Webkit".split(","),ke=function(e,t,n){var i=t||me,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($a[o]+e in r););return o<0?null:(o===3?"ms":o>=0?$a[o]:"")+e},rr=function(){Hl()&&window.document&&(za=window,Kt=za.document,Ce=Kt.documentElement,me=ir("div")||{style:{}},Fl=ir("div"),q=ke(q),yt=q+"Origin",me.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qa=!!ke("perspective"),sr=dt.core.reverting,or=1)},Ga=function(e){var t=e.ownerSVGElement,n=ir("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ce.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ce.removeChild(n),r},Ba=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ja=function(e){var t,n;try{t=e.getBBox()}catch{t=Ga(e),n=1}return t&&(t.width||t.height)||n||(t=Ga(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ba(e,["x","cx","x1"])||0,y:+Ba(e,["y","cy","y1"])||0,width:0,height:0}:t},to=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ja(e))},Xt=function(e,t){if(t){var n=e.style,i;t in Nt&&t!==yt&&(t=q),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(lr,"-$1").toLowerCase())):n.removeAttribute(t)}},jt=function(e,t,n,i,r,o){var s=new ht(e._pt,t,n,0,1,o?ja:Ka);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Va={deg:1,rad:1,turn:1},Xl={grid:1,flex:1},Zt=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=me.style,l=Rl.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),m=100,u=i==="px",p=i==="%",g,h,f,y;if(i===o||!r||Va[i]||Va[o])return r;if(o!=="px"&&!u&&(r=a(e,t,n,"px")),y=e.getCTM&&to(e),(p||o==="%")&&(Nt[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[d],Y(p?r/g*m:r/100*g);if(s[l?"width":"height"]=m+(u?o:i),h=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,y&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Kt||!h.appendChild)&&(h=Kt.body),f=h._gsap,f&&p&&f.width&&l&&f.time===pt.time&&!f.uncache)return Y(r/f.width*m);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=m+i,g=e[d],w?e.style[t]=w:Xt(e,t)}else(p||o==="%")&&!Xl[xt(h,"display")]&&(s.position=xt(e,"position")),h===e&&(s.position="static"),h.appendChild(me),g=me[d],h.removeChild(me),s.position="absolute";return l&&p&&(f=qt(h),f.time=pt.time,f.width=h[d]),Y(u?g*r/m:g&&r?m/g*r:0)},zt=function(e,t,n,i){var r;return or||rr(),t in Ft&&t!=="transform"&&(t=Ft[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nt[t]&&t!=="transform"?(r=nn(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Rn(xt(e,yt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Hn[t]&&Hn[t](e,t,n)||xt(e,t)||Vi(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zt(e,t,r,n)+n:r},Zl=function(e,t,n,i){if(!n||n==="none"){var r=ke(t,e,1),o=r&&xt(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=xt(e,"borderTopColor"))}var s=new ht(this._pt,e.style,t,0,1,Qi),l=0,c=0,d,m,u,p,g,h,f,y,w,_,b,v;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(h=e.style[t],e.style[t]=i,i=xt(e,t)||i,h?e.style[t]=h:Xt(e,t)),d=[n,i],Ui(d),n=d[0],i=d[1],u=n.match(se)||[],v=i.match(se)||[],v.length){for(;m=se.exec(i);)f=m[0],w=i.substring(l,m.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),f!==(h=u[c++]||"")&&(p=parseFloat(h)||0,b=h.substr((p+"").length),f.charAt(1)==="="&&(f=le(p,f)+b),y=parseFloat(f),_=f.substr((y+"").length),l=se.lastIndex-_.length,_||(_=_||gt.units[t]||b,l===i.length&&(i+=_,s.e+=_)),b!==_&&(p=Zt(e,t,h,_)||0),s._pt={_next:s._pt,p:w||c===1?w:",",s:p,c:y-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?ja:Ka;return Ni.test(i)&&(s.e=0),this._pt=s,s},qa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ql=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qa[n]||n,t[1]=qa[i]||i,t.join(" ")},Jl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Nt[s]&&(l=1,s=s==="transformOrigin"?yt:q),Xt(n,s);l&&(Xt(n,q),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",nn(n,1),o.uncache=1,Xa(i)))}},Hn={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new ht(e._pt,t,n,0,0,Jl);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},en=[1,0,0,1,0,0],eo={},no=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ua=function(e){var t=xt(e,q);return no(t)?en:t.substr(7).match(zi).map(Y)},cr=function(e,t){var n=e._gsap||qt(e),i=e.style,r=Ua(e),o,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?en:r):(r===en&&!e.offsetParent&&e!==Ce&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,Ce.appendChild(e)),r=Ua(e),l?i.display=l:Xt(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):Ce.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ar=function(e,t,n,i,r,o){var s=e._gsap,l=r||cr(e,!0),c=s.xOrigin||0,d=s.yOrigin||0,m=s.xOffset||0,u=s.yOffset||0,p=l[0],g=l[1],h=l[2],f=l[3],y=l[4],w=l[5],_=t.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,x,T,A,C;n?l!==en&&(T=p*f-g*h)&&(A=b*(f/T)+v*(-h/T)+(h*w-f*y)/T,C=b*(-g/T)+v*(p/T)-(p*w-g*y)/T,b=A,v=C):(x=Ja(e),b=x.x+(~_[0].indexOf("%")?b/100*x.width:b),v=x.y+(~(_[1]||_[0]).indexOf("%")?v/100*x.height:v)),i||i!==!1&&s.smooth?(y=b-c,w=v-d,s.xOffset=m+(y*p+w*h)-y,s.yOffset=u+(y*g+w*f)-w):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[yt]="0px 0px",o&&(jt(o,s,"xOrigin",c,b),jt(o,s,"yOrigin",d,v),jt(o,s,"xOffset",m,s.xOffset),jt(o,s,"yOffset",u,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},nn=function(e,t){var n=e._gsap||new Yi(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=xt(e,yt)||"0",d,m,u,p,g,h,f,y,w,_,b,v,x,T,A,C,S,E,P,D,F,H,z,R,W,nt,Et,Mt,j,St,ot,J;return d=m=u=h=f=y=w=_=b=0,p=g=1,n.svg=!!(e.getCTM&&to(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[q]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[q]!=="none"?l[q]:"")),i.scale=i.rotate=i.translate="none"),T=cr(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",R=""):R=!t&&e.getAttribute("data-svg-origin"),ar(e,R||c,!!R||n.originIsAbsolute,n.smooth!==!1,T)),v=n.xOrigin||0,x=n.yOrigin||0,T!==en&&(E=T[0],P=T[1],D=T[2],F=T[3],d=H=T[4],m=z=T[5],T.length===6?(p=Math.sqrt(E*E+P*P),g=Math.sqrt(F*F+D*D),h=E||P?Te(P,E)*he:0,w=D||F?Te(D,F)*he+h:0,w&&(g*=Math.abs(Math.cos(w*Ae))),n.svg&&(d-=v-(v*E+x*D),m-=x-(v*P+x*F))):(J=T[6],St=T[7],Et=T[8],Mt=T[9],j=T[10],ot=T[11],d=T[12],m=T[13],u=T[14],A=Te(J,j),f=A*he,A&&(C=Math.cos(-A),S=Math.sin(-A),R=H*C+Et*S,W=z*C+Mt*S,nt=J*C+j*S,Et=H*-S+Et*C,Mt=z*-S+Mt*C,j=J*-S+j*C,ot=St*-S+ot*C,H=R,z=W,J=nt),A=Te(-D,j),y=A*he,A&&(C=Math.cos(-A),S=Math.sin(-A),R=E*C-Et*S,W=P*C-Mt*S,nt=D*C-j*S,ot=F*S+ot*C,E=R,P=W,D=nt),A=Te(P,E),h=A*he,A&&(C=Math.cos(A),S=Math.sin(A),R=E*C+P*S,W=H*C+z*S,P=P*C-E*S,z=z*C-H*S,E=R,H=W),f&&Math.abs(f)+Math.abs(h)>359.9&&(f=h=0,y=180-y),p=Y(Math.sqrt(E*E+P*P+D*D)),g=Y(Math.sqrt(z*z+J*J)),A=Te(H,z),w=Math.abs(A)>2e-4?A*he:0,b=ot?1/(ot<0?-ot:ot):0),n.svg&&(R=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!no(xt(e,q)),R&&e.setAttribute("transform",R))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(p*=-1,w+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Y(p),n.scaleY=Y(g),n.rotation=Y(h)+s,n.rotationX=Y(f)+s,n.rotationY=Y(y)+s,n.skewX=w+s,n.skewY=_+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[yt]=Rn(c)),n.xOffset=n.yOffset=0,n.force3D=gt.force3D,n.renderTransform=n.svg?ec:Qa?io:tc,n.uncache=0,n},Rn=function(e){return(e=e.split(" "))[0]+" "+e[1]},er=function(e,t,n){var i=rt(t);return Y(parseFloat(t)+parseFloat(Zt(e,"x",n+"px",i)))+i},tc=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,io(e,t)},de="0deg",tn="0px",ue=") ",io=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,c=n.rotation,d=n.rotationY,m=n.rotationX,u=n.skewX,p=n.skewY,g=n.scaleX,h=n.scaleY,f=n.transformPerspective,y=n.force3D,w=n.target,_=n.zOrigin,b="",v=y==="auto"&&e&&e!==1||y===!0;if(_&&(m!==de||d!==de)){var x=parseFloat(d)*Ae,T=Math.sin(x),A=Math.cos(x),C;x=parseFloat(m)*Ae,C=Math.cos(x),o=er(w,o,T*C*-_),s=er(w,s,-Math.sin(x)*-_),l=er(w,l,A*C*-_+_)}f!==tn&&(b+="perspective("+f+ue),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(v||o!==tn||s!==tn||l!==tn)&&(b+=l!==tn||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+ue),c!==de&&(b+="rotate("+c+ue),d!==de&&(b+="rotateY("+d+ue),m!==de&&(b+="rotateX("+m+ue),(u!==de||p!==de)&&(b+="skew("+u+", "+p+ue),(g!==1||h!==1)&&(b+="scale("+g+", "+h+ue),w.style[q]=b||"translate(0, 0)"},ec=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,c=n.skewX,d=n.skewY,m=n.scaleX,u=n.scaleY,p=n.target,g=n.xOrigin,h=n.yOrigin,f=n.xOffset,y=n.yOffset,w=n.forceCSS,_=parseFloat(o),b=parseFloat(s),v,x,T,A,C;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Ae,c*=Ae,v=Math.cos(l)*m,x=Math.sin(l)*m,T=Math.sin(l-c)*-u,A=Math.cos(l-c)*u,c&&(d*=Ae,C=Math.tan(c-d),C=Math.sqrt(1+C*C),T*=C,A*=C,d&&(C=Math.tan(d),C=Math.sqrt(1+C*C),v*=C,x*=C)),v=Y(v),x=Y(x),T=Y(T),A=Y(A)):(v=m,A=u,x=T=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=Zt(p,"x",o,"px"),b=Zt(p,"y",s,"px")),(g||h||f||y)&&(_=Y(_+g-(g*v+h*T)+f),b=Y(b+h-(g*x+h*A)+y)),(i||r)&&(C=p.getBBox(),_=Y(_+i/100*C.width),b=Y(b+r/100*C.height)),C="matrix("+v+","+x+","+T+","+A+","+_+","+b+")",p.setAttribute("transform",C),w&&(p.style[q]=C)},nc=function(e,t,n,i,r){var o=360,s=tt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?he:1),c=l-i,d=i+c+"deg",m,u;return s&&(m=r.split("_")[1],m==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),m==="cw"&&c<0?c=(c+o*Ia)%o-~~(c/o)*o:m==="ccw"&&c>0&&(c=(c-o*Ia)%o-~~(c/o)*o)),e._pt=u=new ht(e._pt,t,n,i,c,zl),u.e=d,u.u="deg",e._props.push(n),u},Ya=function(e,t){for(var n in t)e[n]=t[n];return e},ic=function(e,t,n){var i=Ya({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,c,d,m,u,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[q]=t,s=nn(n,1),Xt(n,q),n.setAttribute("transform",c)):(c=getComputedStyle(n)[q],o[q]=t,s=nn(n,1),o[q]=c);for(l in Nt)c=i[l],d=s[l],c!==d&&r.indexOf(l)<0&&(p=rt(c),g=rt(d),m=p!==g?Zt(n,l,c,g):parseFloat(c),u=parseFloat(d),e._pt=new ht(e._pt,s,l,m,u-m,nr),e._pt.u=g||0,e._props.push(l));Ya(s,i)};ut("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});Hn[e>1?"border"+a:a]=function(s,l,c,d,m){var u,p;if(arguments.length<4)return u=o.map(function(g){return zt(s,g,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(d+"").split(" "),p={},o.forEach(function(g,h){return p[g]=u[h]=u[h]||u[(h-1)/2|0]}),s.init(l,p,m)}});var dr={name:"css",register:rr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,c,d,m,u,p,g,h,f,y,w,_,b,v,x,T,A,C;or||rr(),this.styles=this.styles||Za(e),A=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(d=t[h],!(mt[h]&&ji(h,t,n,i,e,r)))){if(p=typeof d,g=Hn[h],p==="function"&&(d=d.call(n,i,e,r),p=typeof d),p==="string"&&~d.indexOf("random(")&&(d=Se(d)),g)g(this,e,h,d,n)&&(T=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",Rt.lastIndex=0,Rt.test(c)||(f=rt(c),y=rt(d),y?f!==y&&(c=Zt(e,h,c,y)+y):f&&(d+=f)),this.add(s,"setProperty",c,d,i,r,0,0,h),o.push(h),A.push(h,0,s[h]);else if(p!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,e,r):l[h],tt(c)&&~c.indexOf("random(")&&(c=Se(c)),rt(c+"")||c==="auto"||(c+=gt.units[h]||rt(zt(e,h))||""),(c+"").charAt(1)==="="&&(c=zt(e,h))):c=zt(e,h),u=parseFloat(c),w=p==="string"&&d.charAt(1)==="="&&d.substr(0,2),w&&(d=d.substr(2)),m=parseFloat(d),h in Ft&&(h==="autoAlpha"&&(u===1&&zt(e,"visibility")==="hidden"&&m&&(u=0),A.push("visibility",0,s.visibility),jt(this,s,"visibility",u?"inherit":"hidden",m?"inherit":"hidden",!m)),h!=="scale"&&h!=="transform"&&(h=Ft[h],~h.indexOf(",")&&(h=h.split(",")[0]))),_=h in Nt,_){if(this.styles.save(h),C=d,p==="string"&&d.substring(0,6)==="var(--"){if(d=xt(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=d,d=xt(e,"perspective"),S?e.style.perspective=S:Xt(e,"perspective")}m=parseFloat(d)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||nn(e,t.parseTransform),x=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new ht(this._pt,s,q,0,1,v.renderTransform,v,0,-1),b.dep=1),h==="scale")this._pt=new ht(this._pt,v,"scaleY",v.scaleY,(w?le(v.scaleY,w+m):m)-v.scaleY||0,nr),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){A.push(yt,0,s[yt]),d=Ql(d),v.svg?ar(e,d,0,x,0,this):(y=parseFloat(d.split(" ")[2])||0,y!==v.zOrigin&&jt(this,v,"zOrigin",v.zOrigin,y),jt(this,s,h,Rn(c),Rn(d)));continue}else if(h==="svgOrigin"){ar(e,d,1,x,0,this);continue}else if(h in eo){nc(this,v,h,u,w?le(u,w+d):d);continue}else if(h==="smoothOrigin"){jt(this,v,"smooth",v.smooth,d);continue}else if(h==="force3D"){v[h]=d;continue}else if(h==="transform"){ic(this,d,e);continue}}else h in s||(h=ke(h)||h);if(_||(m||m===0)&&(u||u===0)&&!Wl.test(d)&&h in s)f=(c+"").substr((u+"").length),m||(m=0),y=rt(d)||(h in gt.units?gt.units[h]:f),f!==y&&(u=Zt(e,h,c,y)),this._pt=new ht(this._pt,_?v:s,h,u,(w?le(u,w+m):m)-u,!_&&(y==="px"||h==="zIndex")&&t.autoRound!==!1?$l:nr),this._pt.u=y||0,_&&C!==d?(this._pt.b=c,this._pt.e=C,this._pt.r=Il):f!==y&&y!=="%"&&(this._pt.b=c,this._pt.r=Nl);else if(h in s)Zl.call(this,e,h,c,w?w+d:d);else if(h in e)this.add(e,h,c||e[h],w?w+d:d,i,r);else if(h!=="parseTransform"){Pn(h,d);continue}_||(h in s?A.push(h,0,s[h]):typeof e[h]=="function"?A.push(h,2,e[h]()):A.push(h,1,c||e[h])),o.push(h)}}T&&tr(this)},render:function(e,t){if(t.tween._time||!sr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:zt,aliases:Ft,getSetter:function(e,t,n){var i=Ft[t];return i&&i.indexOf(",")<0&&(t=i),t in Nt&&t!==yt&&(e._gsap.x||zt(e,"x"))?n&&Na===n?t==="scale"?ql:Vl:(Na=n||{})&&(t==="scale"?Ul:Yl):e.style&&!Mn(e.style[t])?Gl:~t.indexOf("-")?Bl:Fn(e,t)},core:{_removeProperty:Xt,_getMatrix:cr}};dt.utils.checkPrefix=ke;dt.core.getStyleSaver=Za;(function(a,e,t,n){var i=ut(a+","+e+","+t,function(r){Nt[r]=1});ut(e,function(r){gt.units[r]="deg",eo[r]=1}),Ft[i[13]]=a+","+e,ut(n,function(r){var o=r.split(":");Ft[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gt.units[a]="px"});dt.registerPlugin(dr);var ur=dt.registerPlugin(dr)||dt,Nd=ur.core.Tween;var hr={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},wt={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},mr={sunny:"26",rainy:"18",snowy:"2",stormy:"16",windy:"20",cloudy:"15",foggy:"12","partly-cloudy":"23",pouring:"14","snowy-rainy":"3","clear-night":"8",sleety:"1","snowy-stormy":"0","light-rain":"20","sleety-stormy":"-1"},pr={sunny:"Sunny",rainy:"Rainy",snowy:"Snowy",stormy:"Thunderstorm",windy:"Windy",cloudy:"Cloudy",foggy:"Foggy","partly-cloudy":"Partly Cloudy",pouring:"Pouring Rain","snowy-rainy":"Mixed Precipitation","clear-night":"Clear Night",sleety:"Sleet","snowy-stormy":"Snowy Thunderstorm","light-rain":"Light Rain","sleety-stormy":"Sleet Storm"};var ro={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},pe={humidity:"65%",windSpeed:"10 km/h",pressure:"1013 hPa",indoorTemperature:"22\xB0",indoorHumidity:"45%",uv:4},ao="1.3.2",oo={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function rc(a){return["sunny","clear-night","partly-cloudy","cloudy","rainy","light-rain","pouring","stormy","snowy","snowy-rainy","snowy-stormy","sleety","sleety-stormy","windy","foggy"].includes(a)}function so(a,e=-1/0,t=1/0){return typeof a=="number"&&!isNaN(a)&&a>=e&&a<=t}function an(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Qt(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0}function kt(a,e,t=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**t&&(a=0);let n=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:t}).format(a)}catch{return a.toFixed(t)}}function Wn(a,e,t){if(a?.localize)try{let n=a.localize(e);if(n&&n!==e)return n}catch{}return t}function lo(a,e){if(!isFinite(a))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,e,...t){a&&console.log(`[AWC Dev] ${e}`,...t)}function et(a,e){let t=a.engine_settings||{},n=(o,s,l,c)=>so(o,l,c)?o:s,i=n(t.windSpeed,wt.windSpeed,.1,15),r=i;return so(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*i))),{windSpeed:r,rainCount:n(t.rainCount,wt.rainCount,.1,10),leafCount:n(t.leafCount,wt.leafCount,.1,10),snowCount:n(t.snowCount,wt.snowCount,.1,10),cloudBaseSize:n(t.cloudBaseSize,wt.cloudBaseSize,.3,2.5),cloudCount:n(t.cloudCount,wt.cloudCount,1,20),splashBounce:n(t.splashBounce,wt.splashBounce,40,120)}}function fr(a){a.forEach(e=>{e!=null&&clearTimeout(e)}),a.length=0}function co(a){let e=new Set;return a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(n=>{let i=n;for(;i.parent?.parent;)i=i.parent;e.add(i)})}),e}function zn(a){window.AnimatedWeatherCardGsap&&co(a).forEach(e=>e.pause())}function Nn(a){window.AnimatedWeatherCardGsap&&co(a).forEach(e=>e.resume())}function gr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function In(a,e,t,n,i,r={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";if(e&&rc(a))return a;if(e)return console.warn(`Invalid dev mode condition: ${a}, using sunny`),"sunny";let o=a.toLowerCase();if(o.includes("sleet")&&(o.includes("lightning")||o.includes("thunder")||o.includes("storm")))return"sleety-stormy";if((o.includes("snow")||o.includes("sleet"))&&(o.includes("lightning")||o.includes("thunder")||o.includes("storm")))return"snowy-stormy";if(o.includes("lightning")||o.includes("thunder")||o.includes("storm"))return"stormy";if(o.includes("fog")||o.includes("mist"))return"foggy";if(o.includes("heavy")&&o.includes("rain"))return"pouring";if(o.includes("pouring")||o.includes("downpour"))return"pouring";if((o.includes("snow")||o.includes("sleet"))&&(o.includes("rain")||o.includes("drizzle")))return"snowy-rainy";if(o.includes("light")&&(o.includes("rain")||o.includes("drizzle")))return"light-rain";if(o.includes("rain")||o.includes("drizzle"))return"rainy";if(o.includes("sleet")||o.includes("hail"))return"sleety";if(o.includes("snow"))return"snowy";if(o.includes("wind"))return"windy";if(o.includes("partly")&&o.includes("cloud"))return"partly-cloudy";if(o.includes("cloud")||o.includes("overcast"))return"cloudy";if(o.includes("clear")||o.includes("sunny")){if(!r.clock){if(o.includes("night"))return"clear-night";if(o.includes("sunny"))return"sunny";if(r.night!==void 0)return r.night?"clear-night":"sunny"}let s=new Date,l;if(i)try{let u=new Intl.DateTimeFormat("en-US",{timeZone:i,hour:"numeric",hour12:!1}).formatToParts(s);l=parseInt(u.find(p=>p.type==="hour")?.value||"0",10)}catch{l=s.getHours()}else l=s.getHours();let c=t??6,d=n??20;return(l<c||l>=d)&&o.includes("clear")?"clear-night":"sunny"}return"sunny"}function on(a,e,t){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),t||rn("rain");if(!e||!e.isEnabled())return t||rn(a);let n=oo[a];if(!n)return console.warn(`No color scheme found for animation type: ${a}`),t||rn(a);try{let i=e.getCurrentState(),r=e.getTimeAwareColor(n);return an(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||rn(a))}catch(i){return console.error("Error getting time-aware color:",i),t||rn(a)}}function rn(a){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return t||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var $n=class $n{constructor(e,t,n){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=n,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let n=this.element.querySelector(this.containerSelector);n&&(n.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!$n.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};$n.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Q=$n;var Jt=class{constructor(e,t,n){this.layer=e;this.create=t;this.cycle=n;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let n=0;n<e;n++){let i=this.create(n);this.layer.appendChild(i);let r={el:i};this.items.push(r),t.push(i),this.run(r,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function Ee(a,e){return e&&a.progress(Math.random()),a}var ac=420*230;function Me(a,e){return Math.min(3,Math.max(.6,a*e/ac))||1}function O(a,e){return a+Math.random()*(e-a)}var oc={light:10,rain:18,storm:24,pouring:32},sc={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},lc={light:16,rain:24,storm:34,pouring:42},cc=.3,dc=16,uc=8,hc=[10,30],uo="http://www.w3.org/2000/svg";function mc(a,e,t,n){let i=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,c=2*(1-l)*l*a+l*l*t,d=2*(1-l)*l*e+l*l*n;i+=Math.hypot(c-r,d-o),r=c,o=d}return i}function pc(a,e,t,n){return Math.max(4,Math.round(oc[a]*e*Me(t,n)))}var Gn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...n},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),o=pc(r,n.rainCount,i.offsetWidth,i.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,c=lc[r],d=r==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=n.splashBounce/wt.splashBounce,this.pool=new Jt(t,()=>{let m=O(1,d),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${m.toFixed(2)}px;
                    height: ${c}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${m.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=m.toFixed(2),u},(m,u,p)=>this.fall(m,i,r,c,l,u,p)),this.pool.start(o).forEach(m=>this.addParticle(m)),k(this.config.devMode,`Rain animation started - ${o} drops (${r})`)}fall(t,n,i,r,o,s,l){let c=n.offsetWidth,d=n.offsetHeight,[m,u]=sc[i],p=O(m,u),g=O(6,Math.max(7,c-6)),h=this.rainConfig.splashEnabled&&Math.random()<cc,f=-r,y=h?d-r:o?d+O(60,120):d,w=Math.max(.25,(y-f)/p),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(t,{y:f},{y,duration:w,ease:"none"}),h)b.call(()=>this.createSplash(g+_/2,d),[],w),b.to(t,{scaleY:0,duration:r/p,ease:"none"},w);else if(o){let v=(d-r-f)/p;b.to(t,{opacity:0,duration:w-v,ease:"power1.in"},v)}return Ee(b,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,n){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,n);for(let i of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%dc;let o=O(.22,.28),s=O(4,10)*this.splashBounce,l=i*O(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:n-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+l,duration:o,ease:"power1.out"},0).to(r,{y:n-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:n-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,n){let i=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(uo,"svg"),r.classList.add("rain-rebound");let h=document.createElementNS(uo,"path");h.setAttribute("fill","none"),h.style.stroke=this.splashColor,r.appendChild(h),i.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%uc;let o=r.firstChild,[s,l]=hc,c=O(s,l)*this.splashBounce,d=(Math.random()<.5?-1:1)*O(10,24)*this.splashBounce,m=O(6,18);o.setAttribute("d",`M 0,0 Q ${d.toFixed(1)},${(-2*c).toFixed(1)} ${(2*d).toFixed(1)},${m.toFixed(1)}`);let u=mc(d,-2*c,2*d,m),p=Math.min(u*.45,6+c*.3);o.style.strokeDasharray=`${p.toFixed(1)} ${(u+p).toFixed(1)}`;let g=O(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:n,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:p,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?on("lightning",t,"var(--weather-storm-rain-color)"):on("rain",t,"var(--weather-rain-color)")}};var fc=36,te=[2,6],yr=[20,38],ho=10,gc=.6;function yc(a,e,t){return Math.max(6,Math.round(fc*a*Me(e,t)))}function _r(a){return Math.min(2.2,Math.max(.3,a/wt.windSpeed))}var Bn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...n},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),r=yc(n.snowCount,i.offsetWidth,i.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=_r(n.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new Jt(t,()=>this.createFlake(o),(c,d,m)=>this.fall(c,i,l,s,d,m)),this.pool.start(r).forEach(c=>this.addParticle(c)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(t){let n=O(te[0],te[1]),i=(n-te[0])/(te[1]-te[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=n.toFixed(2),r.style.cssText=`
            width: ${n.toFixed(2)}px;
            height: ${n.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*i).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-ho});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:ho,duration:O(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),r}fall(t,n,i,r,o,s){let l=n.offsetWidth,c=n.offsetHeight,d=parseFloat(t.dataset.size||"4"),m=(d-te[0])/(te[1]-te[0]),u=(yr[0]+(yr[1]-yr[0])*m)*O(.9,1.1),p=this.snowConfig.accumulation&&Math.random()<gc,g=-d*2,h=p?c-this.pileHeight()-d:r?c+O(60,120):c+d,f=h-g,y=Math.max(.5,f/u),w=f*O(.04,.13)*i,_=O(-w,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(t,{y:g},{y:h,x:_+w,duration:y,ease:"none"}),p)b.call(()=>this.addToAccumulation(),[],y),b.to(t,{opacity:0,duration:.6,ease:"power1.out"},y);else if(r){let v=Math.min(y,(c-g)/u);b.to(t,{opacity:0,duration:Math.max(.1,y-v),ease:"power1.in"},v)}return Ee(b,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(i=>i.remove());let n=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: ${n}px;
            background: linear-gradient(to top, #ffffff, transparent);
            transform-origin: 50% 100%;
            transform: scaleY(0);
            pointer-events: none;
            z-index: 5;
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,n=this.snowConfig.accumulationHeight;if(!t?.parentNode||n<=0)return;let i=this.pileHeight();if(i>=n)return;let r=Math.min(n,i+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/n,opacity:Math.min(.9,r/n),duration:.3,ease:"power2.out"})}};var wc=30,mo=[150,230],_c=.3,Vn=6,qn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...n},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(wc*n.snowCount*Me(i.offsetWidth,i.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=_r(n.windSpeed)*.5;this.pool=new Jt(t,()=>{let l=O(1.5,3.5),c=document.createElement("div");return c.className="sleet-particle-gsap",c.dataset.size=l.toFixed(2),c.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,c},(l,c,d)=>this.fall(l,i,s,o,c,d)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(t,n,i,r,o,s){let l=n.offsetWidth,c=n.offsetHeight,d=parseFloat(t.dataset.size||"2"),m=O(mo[0],mo[1]),u=Math.random()<_c,p=-d*2,g=u?c-d:r?c+O(60,120):c+d,h=g-p,f=Math.max(.3,h/m),y=h*O(.03,.08)*i,w=O(-y,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x:w,opacity:O(.8,1),rotation:O(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(t,{y:p},{y:g,x:w+y,duration:f,ease:"none"}),u)_.call(()=>this.addToPile(n),[],f),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},f);else if(r){let b=Math.min(f,(c-p)/m);_.to(t,{opacity:0,duration:Math.max(.1,f-b),ease:"power1.in"},b)}return Ee(_,s)}addToPile(t){if(this.state!=="active")return;let n=t.querySelector(".sleet-accumulation");n||(n=document.createElement("div"),n.className="sleet-accumulation",n.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${Vn}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(n));let i=parseFloat(n.getAttribute("data-target-height")||"0");if(i>=Vn)return;let r=Math.min(Vn,i+.4);n.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(n,{scaleY:r/Vn,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function po(a,e,t,n){return t!==null&&t>0?a*Math.max(0,t-e):a*.6*n}var vr=[90,160];function go(a,e,t,n,i,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=n.offsetWidth,l=n.offsetHeight,c=20+Math.random()*Math.max(40,l-40),d=Math.random(),m=d<.25,u=d>.8&&c>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let p=(Math.random()*8+6)*t;o.style.width=o.style.height=p+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let h=-p-10,f=s+(r?60+Math.random()*80:p+10),y=(vr[0]+Math.random()*(vr[1]-vr[0]))*Pe(e.windSpeed)*(m?.6:1),w=(f-h)/y,_=Math.min(w,(s-h)/y),b=u?-(60+Math.random()*80):m?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:h,y:c,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),i&&i(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:f,duration:w,ease:"none"},0).to(o,{y:c+b,duration:w,ease:m?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:w,ease:"none"},0),r&&w>_&&v.to(o,{opacity:0,duration:w-_,ease:"power1.in"},_),o}function yo(a,e,t,n,i,r){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,c=s>.8;o.style.position="absolute",o.style.height=(c?2:1)*t+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let d=i.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${d} 50%, transparent 100%)`;let m=Math.max(15,(20+Math.random()*60)*t);o.style.width=m+"px";let u=n.offsetWidth,p=n.offsetHeight,g=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(o,{x:-m,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(o);let f=(u+m*2)/(vc*Pe(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),r&&r(o)}}).to(o,{scaleX:1,opacity:c?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:u+m,rotation:l?g>p/2?5:-5:0,duration:f,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,f*.3)},f-Math.min(.5,f*.3)),o}var vc=230,bc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Pe(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/wt.windSpeed)))}var xc=12;function Sc(a){let e=Math.round(70*a),t=Math.round(35*a);return{width:e,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:e-Math.round(9*a)-t,y:Math.round(-13*a),size:t}]}}var wo=a=>a>0?Math.ceil(a*3)+1:0,fo=new Map;function Tc(a,e,t,n){let i=[a,e,t,n].join(","),r=fo.get(i);if(r)return r;let o=wo(t),s=Math.ceil((a+2*o)*n),l=Math.ceil((e+2*o)*n),c=()=>{let p=document.createElement("canvas");return p.width=s,p.height=l,[p,p.getContext("2d")]},d=null,[m,u]=c();if(u){let[p,g,h]=[o*n,o*n,Math.min(50,a/2,e/2)*n],[f,y]=[p+a*n,g+e*n];if(u.fillStyle="#000",u.beginPath(),u.moveTo(p+h,g),u.arcTo(f,g,f,y,h),u.arcTo(f,y,p,y,h),u.arcTo(p,y,p,g,h),u.arcTo(p,g,f,g,h),u.closePath(),u.fill(),t>0){let[w,_]=c();_&&(_.shadowColor="#000",_.shadowBlur=2*t*n,_.shadowOffsetX=s,_.drawImage(m,-s,0),d=w.toDataURL())}else d=m.toDataURL()}return d&&fo.set(i,d),d}function sn(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()})}function Cc(a){return Math.min(1,Math.max(.5,a/160))||1}function _o(a,e,t,n,i){let r=n.offsetWidth,o=n.offsetHeight,s=bc,l=Pe(e.windSpeed),c=[],d=t||e.cloudCount,m=Cc(o);return s.forEach((u,p)=>{let g=Math.ceil(p===0||p===1?d*.4:d*.6);for(let h=1;h<=g;h++){let f=document.createElement("div");f.className=`cloud-gsap cloud-gsap-${u.name}-${h}`;let y=e.cloudBaseSize*u.scale,w=1+(h-1)*.15,_=Math.max(.3,Math.min(2.5,y))*w*m,b=Sc(_);f.style.position="absolute",f.style.opacity=u.opacity.toString(),f.dataset.awcO=String(u.opacity),f.style.zIndex=(10+p).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][p],x=i?.color_palette==="theme"?0:u.blur,T=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(G=>({x:G.x,y:G.y,width:G.size,height:G.size}))],A=Math.min(3,Math.max(1,window.devicePixelRatio||1)),C=T.map(G=>Tc(G.width,G.height,x,A)),S=C.every(Boolean),E=S?wo(x):0;if(f.style.width=b.width+"px",f.style.height=b.height+"px",S)f.classList.add("cloud-masked"),T.forEach((G,X)=>{let st=document.createElement("div");st.style.position="absolute",st.style.left=G.x-E+"px",st.style.top=G.y-E+"px",st.style.width=G.width+2*E+"px",st.style.height=G.height+2*E+"px",st.style.background=v;for(let Gt of["-webkit-",""])st.style.setProperty(`${Gt}mask-image`,`url("${C[X]}")`),st.style.setProperty(`${Gt}mask-size`,"100% 100%"),st.style.setProperty(`${Gt}mask-repeat`,"no-repeat");f.appendChild(st)});else{f.style.borderRadius="50px",f.style.background=v,x>0&&(f.style.filter=`blur(${x}px)`);for(let G of b.puffs){let X=document.createElement("div");X.style.position="absolute",X.style.left=G.x+"px",X.style.top=G.y+"px",X.style.width=G.size+"px",X.style.height=G.size+"px",X.style.borderRadius="50px",X.style.background=v,f.appendChild(X)}}let P=b.width+2*E,H=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][p][h-1]||15+p*10)/60,z=b.height+Math.max(E,Math.ceil(x*3))+2,R=Number(n.dataset?.cloudBand),W=Number.isFinite(R)&&n.dataset?.cloudBand!==void 0?R:null,nt=Math.max(150+p*50,P+xc),Et=u.speed*l*(.9+Math.random()*.2),Mt=(r+2*nt)/Et,j=document.createElement("div");j.className="cloud-track",j.dataset.awcF=String(H),j.dataset.awcB=String(z),j.appendChild(f),window.AnimatedWeatherCardGsap.set(f,{opacity:u.opacity});let St=[j];if(i?.color_palette==="theme"){let G=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),X=f.cloneNode(!0);X.className="cloud-occluder",X.style.opacity="1";for(let Gt of[X,...Array.from(X.querySelectorAll("div"))])Gt.style.background&&(Gt.style.background="var(--awc-card-bg)");let st=j.cloneNode(!1);st.appendChild(X),G?.appendChild(st),St.push(st)}let ot=St.length>1?St:j;window.AnimatedWeatherCardGsap.set(ot,{xPercent:0,x:-nt,y:po(H,z,W,o)}),a.appendChild(j);let J=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});J.fromTo(ot,{xPercent:0,x:-nt},{xPercent:100,x:nt,duration:Mt,ease:"none"}),J.progress(Math.random()),c.push(J)}}),c}function vo(a){let e=a.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function bo(a,e,t,n,i){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let o=n.offsetWidth,s=n.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],c=l[t]||l[2],d=i.custom_colors?.fog_color,m=(i.color_palette||"default")!=="theme"?an(d)?d:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),p=o*c.scale;r.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${p}px;
        height: ${c.height}px;
        opacity: ${c.opacity};
        filter: blur(${c.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let x=0;x<u;x++){let T=document.createElement("div"),A=p/u*(2+Math.random()*1.2),C=c.height*(1.2+Math.random()*1.6),S=p/u*x-A*.3,E=(Math.random()-.5)*(c.height*.5);T.style.cssText=`
            position: absolute;
            left: ${S}px;
            top: ${E}px;
            width: ${A}px;
            height: ${C}px;
            background: radial-gradient(ellipse ${A/2}px ${C/2}px at center, 
                ${m} 0%, 
                ${m} 40%, 
                transparent 70%);
            border-radius: ${A/2}px ${C/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,r.appendChild(T)}a.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),h=15/c.speed,f=Math.max(8,h/g),y=o*c.scale,w=-y,_=o+y;window.AnimatedWeatherCardGsap.set(r,{x:w,opacity:c.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});b.to(r,{x:_,duration:f,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:w})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(r,{opacity:c.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function Un(a){a.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Ac=3,kc=2,xo=[900,1400],So=[1800,2600],Yn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...n},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(O(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let n=et(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let i=Math.max(1,Math.round(Ac*n.leafCount));if(this.leaves.size<i){let r=go(this.layer(),n,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(O(xo[0],xo[1])/Math.max(.5,n.leafCount))},t)}scheduleSwoosh(t){let n=et(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<kc){let i=yo(this.layer(),n,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(i),this.addParticle(i)}this.scheduleSwoosh(O(So[0],So[1]))}},t)}forget(t,n){n.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),zn(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){Nn(this.layer()),this.clearTimers(),this.scheduleLeaf(O(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var ln=[6e3,18e3],Ec=[1500,6e3],To=.16,Kn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:i.disable_lightning_shake||!1,minInterval:ln[0],maxInterval:ln[1],...n},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[n,i]=Ec;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},n+Math.random()*(i-n)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),n=this.element.querySelector(".animated-weather-card");if(!t||!n)return;let i=n.offsetWidth,r=n.offsetHeight,o=parseFloat(n.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),c=30+Math.random()*(i-60),d=20*o,m=20,u=[c+",0"];for(let f=0;f<m;f++){let y=c+(Math.random()*d-d/2),w=r/m*(f+1);u.push(y+","+w)}l.setAttribute("d","M"+u.join(" L"));let p=this.element.timeOfDayManager,g=on("lightning",p,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let h=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=h,h.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let f=-6*o;h.to(n,{y:f,duration:.06,ease:"power2.out"},To).to(n,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},To+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let n=this.element.querySelector(this.layerSelector);n&&(n.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),n.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var Mc=["dawn","day","dusk","night"],Sr=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],Pc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},ko=(a,e,t)=>Math.min(e,Math.max(a,t)),ee=(a,e,t)=>a+(e-a)*t;function Lc(a,e,t){let n=(e-a+540)%360-180;return(a+n*t+360)%360}function It(a,e,t){let n=([h,f,y])=>[h,f*Math.cos(y*Math.PI/180),f*Math.sin(y*Math.PI/180)],[i,r,o]=n(a),[s,l,c]=n(e),d=ee(i,s,t),m=ee(r,l,t),u=ee(o,c,t),p=Math.hypot(m,u),g=p<1e-6?a[2]:(Math.atan2(u,m)*180/Math.PI+360)%360;return[d,p,g]}function br([a,e,t]){let n=t*Math.PI/180,i=e*Math.cos(n),r=e*Math.sin(n),o=(a+.3963377774*i+.2158037573*r)**3,s=(a-.1055613458*i-.0638541728*r)**3,l=(a-.0894841775*i-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var Oc=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Pt(a){let e=n=>n.every(i=>i>=-1e-4&&i<=1.0001),t=br(a);if(!e(t)){let n=0,i=a[1];for(let r=0;r<24;r++){let o=(n+i)/2;e(br([a[0],o,a[2]]))?n=o:i=o}t=br([a[0],n,a[2]])}return t.map(n=>Oc(ko(0,1,n)))}var Eo=a=>Math.round(ko(0,1,a)*255);function $t(a){return"#"+a.map(e=>Eo(e).toString(16).padStart(2,"0")).join("")}function Co(a,e){return`rgba(${a.map(Eo).join(", ")}, ${Number(e.toFixed(3))})`}function xr(a,e){return[.15+(a[0]-.15)*.42,a[1]*ee(.75,.5,e),Lc(a[2],262,.45)]}function Dc(a,e){let t=Pc[a],n=1-t.overcast*.7,i={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:ee(.46,.28,t.overcast)};if(a==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...i,bottom:It(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...i,scrimAlpha:.2}}switch(e){case"night":return{top:xr(t.top,t.overcast),mid:xr(t.mid,t.overcast),bottom:xr(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:ee(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:It(t.top,[t.top[0]*.8,.075,292],.5*n),mid:It(t.mid,[t.mid[0]*.88,.065,350],.42*n),bottom:It(t.bottom,[t.bottom[0]*.92,.115,52],.72*n),glow:It(t.glow,[.82,.13,58],n),glowAlpha:ee(t.glowAlpha,.6,n*.6),scrimAlpha:i.scrimAlpha+.04};case"dawn":return{top:It(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*n),mid:It(t.mid,[t.mid[0]*.95,.05,330],.3*n),bottom:It(t.bottom,[t.bottom[0]*.95,.085,32],.62*n),glow:It(t.glow,[.88,.09,40],n),glowAlpha:ee(t.glowAlpha,.5,n*.5),scrimAlpha:i.scrimAlpha+.04};default:return i}}function Fc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function Le(a,e){let t=Dc(a,e);return{top:$t(Pt(t.top)),mid:$t(Pt(t.mid)),bottom:$t(Pt(t.bottom)),glow:Co(Pt(t.glow),t.glowAlpha),scrim:Co(Pt(Fc(t.top)),t.scrimAlpha)}}var Oe=[.985,.006,250],jn=.8,Mo=.55,Po=.4,Xn={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},Lo={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},Oo={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function De(a,e){let t=n=>`${Math.round(n*100)}%`;return`radial-gradient(${t(a.rx)} ${t(a.ry)} at ${t(a.cx)} ${t(a.cy)}, ${e}, transparent ${t(a.fade)})`}function Do(){let a=[];for(let e of Sr)for(let t of Mc){let n=Le(e,t),i=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;a.push(`${i} { --awc-sky-top: ${n.top}; --awc-sky-mid: ${n.mid}; --awc-sky-bottom: ${n.bottom}; --awc-sky-glow: ${n.glow}; --awc-sky-scrim: ${n.scrim}; }`)}return a.join(`
`)}function Zn(a,e,t){return a==null||!Number.isFinite(a)?t?"day":"night":a<-6?"night":a<6?e?"dawn":"dusk":"day"}var ne=3.2,Fe="cubic-bezier(0.37, 0, 0.63, 1)",Fo={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Ho=Object.keys(Fo),Tr=Ho.filter(a=>a.startsWith("--awc-sky-"));function Ro(){return Ho.map(a=>`${a} ${ne}s ${Fe}`).join(`,
            `)}var Ao=!1;function Qn(){if(Ao)return;Ao=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[e,t]of Object.entries(Fo))try{a.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Cr=Array.from({length:25},(a,e)=>[e%5/2-1,Math.floor(e/5)/2-1]).filter(([a,e])=>a*a+e*e<=1),Hc=1.9,Rc=.6,Jn=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...n},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");sn(t);let r=Math.min(6,Math.max(1,Math.round(n.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=_o(t,n,r,i,this.cardConfig),this.startWindFactor=Pe(n.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap?.killTweensOf(n),n&&typeof n.kill=="function"&&n.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let t=this.element.querySelector(this.layerSelector);t&&sn(t),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(t=!1){if(this.occlude()){this.lightSun(1,t);return}let n=this.element.querySelector(".sun-track .sun"),i=n?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=w=>Number(w.dataset.awcO)||0;if(!n||!i?.width||getComputedStyle(n).opacity==="0"){r.forEach(w=>this.dense(w,o(w),t));return}let s=i.width/2,l=i.left+s,c=i.top+i.height/2,d=this.element.querySelector(this.containerSelector),m=d?parseFloat(getComputedStyle(d).opacity):1,u=Number.isFinite(m)?m:1,p=r.map(w=>Math.min(o(w),parseFloat(getComputedStyle(w).opacity)||0)*Rc*u),g=r.map(w=>[w,...Array.from(w.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),h=(w,_,b)=>g[w].some(v=>{let x=Math.min(v.width,v.height)/2,T=_-Math.min(Math.max(_,v.left+x),v.right-x),A=b-Math.min(Math.max(b,v.top+x),v.bottom-x);return T*T+A*A<=x*x}),f=0,y=r.map(()=>0);for(let[w,_]of Cr)f+=r.reduce((b,v,x)=>h(x,l+w*s,c+_*s)?b*(1-p[x]):b,1),r.forEach((b,v)=>{h(v,l+w*s*1.25,c+_*s*1.25)&&(y[v]+=1/Cr.length)});this.lightSun(f/Cr.length,t),r.forEach((w,_)=>this.dense(w,o(w)*(1+(Hc-1)*Math.min(1,y[_]*3)),t))}occlude(){let t=this.element.querySelector(".animated-weather-card");if(!t||this.cardConfig.color_palette!=="theme")return!1;let n=t.closest("ha-card"),i=n?getComputedStyle(n):null,r=!!i&&(i.backgroundImage||"none")==="none"&&!!i.backgroundColor&&!/rgba|\/|transparent/.test(i.backgroundColor);return r&&t.style.getPropertyValue("--awc-card-bg")!==i.backgroundColor&&t.style.setProperty("--awc-card-bg",i.backgroundColor),t.toggleAttribute("data-occlude",r),r}dense(t,n,i){let r=(Math.round(Math.min(.95,n)*100)/100).toString();t.dataset.awcV!==r&&(t.dataset.awcV=r,i?window.AnimatedWeatherCardGsap?.set(t,{opacity:r}):window.AnimatedWeatherCardGsap?.to(t,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(t,n=!1){let i=this.element.querySelector(".sun-track"),r=Math.round(t*100)/100;!i||r===this.sunLit&&!n||(this.sunLit=r,n?window.AnimatedWeatherCardGsap?.set(i,{opacity:r}):window.AnimatedWeatherCardGsap?.to(i,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=et(this.cardConfig,this.realWindSpeed),n=Pe(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap.to(i,{timeScale:n,duration:ne,ease:"sine.inOut",overwrite:!0})})}};var ti=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...n},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");Un(i),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let o=bo(t,n,r,i,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(i=>{i&&typeof i.kill=="function"&&i.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}};var Wc=5,Wo=353,zc=1440,Nc=1/2,Ic=.25,$c=.2,Gc=2,Bc=2;function Ar(a,e){let t=e>0?Math.min(e,zc):Wo;return Math.max(15,Math.round(a*Wc*Math.max(1,t/Wo)))}var zo=20,No=10,Vc=12,Io=(a,e)=>a.right>e.left-zo&&a.left<e.right+zo&&a.bottom>e.top-No&&a.top<e.bottom+No;function cn(a){let e=[],t=document.createRange();if(typeof t.getClientRects!="function")return e;let n=".animation-layer, .animation-container, style, script",i=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=i.nextNode();r;r=i.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(n))){t.selectNodeContents(r);for(let o of Array.from(t.getClientRects()))o.width&&o.height&&e.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(n))continue;let o=r.getBoundingClientRect();o.width&&o.height&&e.push(o)}return e}function qc(a,e){for(let t of a){let n=t.getBoundingClientRect();t.classList.toggle("awc-veiled",!!n.width&&e.some(i=>Io(n,i)))}}function $o(a){let e=a.querySelectorAll(".stars-field .star-gsap");if(!e.length)return;let t=a.querySelector(".moon-gsap")?.getBoundingClientRect();qc(e,t?.width?[...cn(a),t]:cn(a))}function kr(a,e,{moon:t,still:n=!1,words:i=[]}){let r=document.createElement("div");r.className="stars-field";let o=t?document.createElement("div"):null;if(o){o.className="moon-gsap",a.appendChild(o);let c=o.getBoundingClientRect();c.width&&c.height&&(i=[...i,c])}let s=a.getBoundingClientRect(),l=i.length>0&&s.width>0&&s.height>0;for(let c=0;c<e;c++){let d=document.createElement("div");d.className="star-gsap";let m=1+Math.random()*3,u=.3+Math.random()*.5,p=0,g=0,h=!1;for(let f=0;f<(l?Vc:1)&&!h;f++){p=Math.random()*100,g=Math.random()*70;let y=s.left+p/100*s.width,w=s.top+g/100*s.height;h=!l||!i.some(_=>Io({left:y,top:w,right:y+m,bottom:w+m},_))}if(h||d.classList.add("awc-veiled"),d.style.cssText=`
            width: ${m.toFixed(2)}px;
            height: ${m.toFixed(2)}px;
            left: ${p.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${u.toFixed(2)};
        `,!n&&Math.random()<Nc){let f=Gc+Math.random()*Bc;d.classList.add("twinkle"),d.style.setProperty("--star-o",u.toFixed(2)),d.style.setProperty("--star-dim",(u*(Ic+Math.random()*$c)).toFixed(2)),d.style.animationDuration=`${f.toFixed(2)}s`,d.style.animationDelay=`${(-Math.random()*f).toFixed(2)}s`}r.appendChild(d)}return o?a.insertBefore(r,o):a.appendChild(r),o?[r,o]:[r]}var ei=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...n},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let n=et(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");i?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=Ar(n.cloudCount,t.clientWidth||i?.clientWidth||0);for(let o of kr(t,r,{moon:this.starsConfig.showMoon,words:i?cn(i):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(n=>n.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var ni=class extends Q{constructor(t,n,i,r){super(t,n,i);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var ii=class{constructor(e,t,n,i){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=n,this.realWindSpeed=i}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let n={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},i=null;switch(e){case"rain":i=new Gn(this.element,{...n,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":i=new Bn(this.element,{...n,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":i=new qn(this.element,{...n,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":i=new Yn(this.element,{...n,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":i=new Kn(this.element,{...n,disableShake:this.config.disable_lightning_shake||!1,minInterval:ln[0],maxInterval:ln[1]},this.config,this.realWindSpeed);break;case"clouds":i=new Jn(this.element,{...n,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":i=new ti(this.element,{...n,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":i=new ei(this.element,{...n,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":i=new ni(this.element,n,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await i.start(),this.activeAnimations.set(e,i),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),i}catch(n){return console.error(`Failed to start modular ${e} animation:`,n),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(n){console.error(`Error stopping modular ${e} animation:`,n)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(n){console.error(`Error pausing modular ${e} animation:`,n)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(n){console.error(`Error resuming modular ${e} animation:`,n)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,n]of this.activeAnimations)try{n.setWindSpeed(e)}catch(i){console.warn(`Failed to update wind speed for ${t}:`,i)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var He=class{constructor(e,t,n,i){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=n,this.timeOfDayManager=i,this.modularBridge=new ii(e,t,i,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let n=this.animations[e];if(n.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let i=t?.intensity??n.intensity??1,r=this.generation;n.isActive=!0,n.intensity=i,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,i);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){n.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${i}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),n.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(n){console.error(`Error stopping ${e} animation:`,n)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(n=>{let i=t.overrides?.[n];return this.startAnimation(n,i)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let n=this.element.querySelector(".animated-weather-card");if(!n)return;let i=`individual-${e}-active`;t?n.classList.add(i):n.classList.remove(i)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var ri=new Map,Er=new Set;function Mr(a,e,t){let n=ri.get(a);if(!e){n&&(ri.delete(a),Go());return}let i={entity:e,sun:t||"sun.sun"};n&&n.entity===i.entity&&n.sun===i.sun||(ri.set(a,i),Go())}function Bo(a){if(a){for(let e of ri.values())if(e.sun===a)return e.entity}}function Vo(a){return Er.add(a),()=>{Er.delete(a)}}function Go(){for(let a of[...Er])a()}var ai=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:Number(a);return Number.isFinite(e)?e:null},ie=a=>typeof a=="string"?a.trim():"";function Uc(a){if(!a||typeof a!="object")return null;let e=a,t=typeof e.id=="number"?String(e.id):ie(e.id);return t?{id:t,label:ie(e.flight_number)||ie(e.callsign),aircraftCode:ie(e.aircraft_code),originCity:ie(e.airport_origin_city),originCode:ie(e.airport_origin_code_iata),destinationCity:ie(e.airport_destination_city),destinationCode:ie(e.airport_destination_code_iata),altitudeFt:ai(e.altitude),groundSpeedKt:ai(e.ground_speed),heading:ai(e.heading),verticalSpeed:ai(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function Pr(a,e){if(!a||!e)return null;let t=a.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=t.attributes?.flights;if(!Array.isArray(n))return[];let i=[];for(let r of n){let o=Uc(r);o&&i.push(o)}return i}var oi=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(e,t=!1){if(!e)return[];let n=e.filter(s=>!s.onGround),i=new Set(n.map(s=>s.id));if(this.known===null)return this.known=i,t?n.filter((s,l)=>n.findIndex(c=>c.id===s.id)===l):[];let r=[],o=new Set;for(let s of n)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=i,r}reset(){this.known=null}};var si=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}setDevOverride(e){this.devTimePhaseOverride=e,this.updateState()}clearDevOverride(){this.devTimePhaseOverride=void 0,this.updateState()}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=new Date,t,n;if(!this.config.useBrowserTime&&this.config.timeZone){let s=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(s.find(l=>l.type==="hour")?.value||"0",10),n=parseInt(s.find(l=>l.type==="minute")?.value||"0",10)}else t=e.getHours(),n=e.getMinutes();let i=t+n/60,r;if(this.devTimePhaseOverride)r=this.devTimePhaseOverride;else{let s=this.config.sunriseHour,l=this.config.sunsetHour,c=(s-1+24)%24,d=(s+.5)%24,m=(l-.5+24)%24,u=(l+1)%24,p=(g,h,f)=>h<=f?g>=h&&g<f:g>=h||g<f;p(i,c,d)?r="dawn":p(i,d,m)?r="day":p(i,m,u)?r="dusk":r="night"}let o={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==o.timePhase?(this.currentState=o,this.notifyListeners(o)):this.currentState=o}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},ro.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(n){console.error("TimeOfDayManager: Error in listener callback:",n)}})}blendColors(e,t,n){let i=e.replace("#",""),r=t.replace("#",""),o=parseInt(i.substring(0,2),16),s=parseInt(i.substring(2,4),16),l=parseInt(i.substring(4,6),16),c=parseInt(r.substring(0,2),16),d=parseInt(r.substring(2,4),16),m=parseInt(r.substring(4,6),16),u=Math.round(o*(1-n)+c*n),p=Math.round(s*(1-n)+d*n),g=Math.round(l*(1-n)+m*n),h=u.toString(16).padStart(2,"0"),f=p.toString(16).padStart(2,"0"),y=g.toString(16).padStart(2,"0");return`#${h}${f}${y}`}};var Lr=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Yc=Do(),Kc=$t(Pt(Oe)),qo=a=>`${Math.round(a*100)}%`,jc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,Xc=48,Zc={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Or=()=>`
${Lr("animated-weather-card")}
        /* The card's own icons (icons.ts): inline SVG, sized like ha-icon and in the text's colour */
        .awc-icon {
          display: inline-block;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          fill: currentColor;
          vertical-align: middle;
        }
        /* \u2500\u2500 Reduced motion (WCAG 2.3.3): static sky, no weather motion \u2500\u2500\u2500\u2500\u2500 */
        @media (prefers-reduced-motion: reduce) {
          .animated-weather-card *,
          .animated-weather-card *::before,
          .animated-weather-card *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
          /* Weather motion goes; the sun stays, still */
          .animated-weather-card .animation-container {
            display: none !important;
          }
        }

        /* \u2500\u2500 Frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* The sky is the card: in the colorized palette ha-card's own fill and
           border step aside so the sky reaches the rounded edge. Theme mode
           keeps ha-card's frame and blends with the dashboard. */
        ha-card:has(> .animated-weather-card) {
          height: 100%;
          overflow: hidden;
          isolation: isolate;
        }
        /* spill_particles (default on): rain, snow, sleet and leaves fall out
           of the card onto the dashboard, and clouds can rise a little above
           its top edge. The sky, sun, planes and text stay inside the rounded
           frame either way. */
        ha-card:has(> .animated-weather-card[data-spill]) { overflow: visible; }
        ha-card:has(> .animated-weather-card:not(.theme-colors)) {
          background: none;
          border-color: transparent;
        }

        .animated-weather-card {
          --awc-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
          --awc-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
          --awc-ease: cubic-bezier(0.25, 1, 0.5, 1);
          --awc-pad: 20px;
          --awc-secondary: ${jn};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${Kc};
          --weather-text-shadow: var(--weather-text-shadow-color, rgba(6, 12, 28, 0.22));
          --weather-sun-primary: var(--weather-sun-color-primary, #ffd67a);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ffb547);
          --weather-sun-glow: var(--weather-sun-glow-color, rgba(255, 214, 140, 0.55));
          --weather-sun-halo: var(--weather-sun-halo-color, rgba(255, 214, 140, 0.24));
          --weather-rain-color: var(--weather-rain-particle-color, rgba(222, 234, 255, 0.62));
          --weather-storm-rain-color: var(--weather-storm-rain-particle-color, rgba(206, 214, 236, 0.5));
          --weather-snow-color: var(--weather-snow-particle-color, #f7fbff);
          --weather-wind-color: var(--weather-wind-particle-color, rgba(255, 255, 255, 0.4));
          --awc-cloud-far: rgba(214, 226, 242, 0.85);
          --awc-cloud-mid: rgba(232, 239, 248, 0.92);
          --awc-cloud-near: rgba(248, 250, 253, 0.96);

          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          min-height: 168px;
          border-radius: var(--ha-card-border-radius, 12px);
          overflow: hidden;
          isolation: isolate;
          container: awc / inline-size;
          color: var(--weather-text-color);
          font-family: var(--awc-font);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          /* Day \u2192 dusk \u2192 night and condition changes cross-fade through the
             registered sky, sun and cloud colors, all on one curve */
          transition:
            ${Ro()};
        }

        /* clip-path only hides what lies past the card: a fog bank or a cloud
           track still widens the page and brings up its scrollbars. Layout
           containment leaves spilled weather painted but never scrolled to. */
        .animated-weather-card[data-spill] { overflow: visible; contain: layout; }

        .animated-weather-card.no-transitions,
        .animated-weather-card.no-transitions * {
          transition: none !important;
        }

        /* \u2500\u2500 Sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        ${Yc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${De(Xn,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${qo(Po)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${qo(Mo)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${De(Lo,"var(--awc-sky-glow)")}; }
        }

        /* Edge falloff: the frame darkens slightly, like a lens */
        .sky::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(150% 120% at 40% 30%, transparent 58%, rgba(4, 8, 20, 0.2) 100%);
        }

        .sky::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: ${jc};
          background-size: 160px 160px;
          opacity: 0.07;
          mix-blend-mode: overlay;
        }

        /* Theme overrides: --weather-<condition>-background replaces the whole sky */
        .animated-weather-card.sunny { --awc-sky-override: var(--weather-sunny-background); }
        .animated-weather-card.partly-cloudy { --awc-sky-override: var(--weather-partly-cloudy-background); }
        .animated-weather-card.windy { --awc-sky-override: var(--weather-windy-background); }
        .animated-weather-card.cloudy { --awc-sky-override: var(--weather-cloudy-background); }
        .animated-weather-card.foggy { --awc-sky-override: var(--weather-foggy-background); }
        .animated-weather-card.light-rain { --awc-sky-override: var(--weather-light-rain-background); }
        .animated-weather-card.rainy { --awc-sky-override: var(--weather-rainy-background); }
        .animated-weather-card.pouring { --awc-sky-override: var(--weather-pouring-background); }
        .animated-weather-card.stormy { --awc-sky-override: var(--weather-stormy-background); }
        .animated-weather-card.snowy { --awc-sky-override: var(--weather-snowy-background); }
        .animated-weather-card.snowy-rainy { --awc-sky-override: var(--weather-snowy-rainy-background); }
        .animated-weather-card.sleety { --awc-sky-override: var(--weather-sleety-background); }
        .animated-weather-card.snowy-stormy { --awc-sky-override: var(--weather-snowy-stormy-background); }
        .animated-weather-card.sleety-stormy { --awc-sky-override: var(--weather-sleety-stormy-background); }
        .animated-weather-card.clear-night { --awc-sky-override: var(--weather-clear-night-background); }

        /* Overcast and night skies get greyer, dimmer clouds */
        .animated-weather-card.cloudy,
        .animated-weather-card.foggy {
          --awc-cloud-far: rgba(170, 182, 198, 0.8);
          --awc-cloud-mid: rgba(196, 206, 220, 0.88);
          --awc-cloud-near: rgba(222, 229, 238, 0.94);
        }
        .animated-weather-card[data-phase="night"] {
          --awc-cloud-far: rgba(96, 108, 132, 0.7);
          --awc-cloud-mid: rgba(122, 134, 158, 0.78);
          --awc-cloud-near: rgba(150, 162, 186, 0.85);
          --weather-rain-color: var(--weather-rain-particle-color, rgba(180, 198, 230, 0.48));
        }
        .animated-weather-card[data-phase="dusk"] {
          --awc-cloud-near: rgba(255, 226, 214, 0.94);
          --awc-cloud-mid: rgba(236, 210, 214, 0.9);
          --weather-sun-primary: var(--weather-sun-color-primary, #ffc58a);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ff9a5c);
          --weather-sun-glow: var(--weather-sun-glow-color, rgba(255, 170, 110, 0.55));
          --weather-sun-halo: var(--weather-sun-halo-color, rgba(255, 170, 110, 0.24));
        }
        .animated-weather-card[data-phase="dawn"] {
          --awc-cloud-near: rgba(255, 234, 228, 0.94);
          --weather-sun-primary: var(--weather-sun-color-primary, #ffe0b0);
          --weather-sun-secondary: var(--weather-sun-color-secondary, #ffb98a);
        }

        /* \u2500\u2500 Theme palette: blend with the dashboard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .animated-weather-card.theme-colors {
          --weather-text-color: var(--primary-text-color);
          --weather-text-shadow: transparent;
          --awc-secondary: 1;
          --weather-rain-color: var(--weather-rain-particle-color, var(--primary-color, #03a9f4));
          --weather-storm-rain-color: var(--weather-storm-rain-particle-color, var(--secondary-text-color, #8a8a8a));
          --weather-snow-color: var(--weather-snow-particle-color, var(--secondary-text-color, #9a9a9a));
          --weather-wind-color: var(--secondary-text-color, rgba(0, 0, 0, 0.3));
          --weather-sun-primary: var(--weather-sun-color-primary, var(--state-sun-above_horizon-color, #ffc107));
          --weather-sun-secondary: var(--weather-sun-color-secondary, var(--state-sun-above_horizon-color, #ff9800));
          --weather-sun-glow: transparent;
          --awc-cloud-far: var(--secondary-text-color, #888);
          --awc-cloud-mid: var(--secondary-text-color, #888);
          --awc-cloud-near: var(--secondary-text-color, #888);
          /* Icons take the theme's icon colour, as Home Assistant's own
             cards do for sensors (the tile card's default) */
          --awc-icon-color: var(--state-icon-color, var(--primary-color));
          /* The hero temperature carries the theme's primary colour */
          --awc-hero-color: var(--primary-color, var(--primary-text-color));
          border-radius: 0;
        }
        .animated-weather-card.theme-colors .sky { display: none; }
        /* Without a sky behind them, blurred translucent clouds read as
           smudges; draw them as faint, crisp shapes instead (their masks
           are crisp; the filter is for clouds without a canvas) */
        .animated-weather-card.theme-colors .cloud-gsap {
          opacity: 0.16 !important;
          filter: none !important;
        }
        /* Seen at 16%, the sun showed through them, as if in front. Under each
           cloud rides a twin in the card's own fill (.cloud-occluder, read into
           --awc-card-bg by the clouds animation), in a layer clipped to the
           card: unseen against the card, it hides the sun behind the cloud,
           while the cloud itself, above the card and where clouds overlap,
           is drawn as it always was. Only over an opaque fill (data-occlude):
           over a see-through one or an image the twin would show. */
        .clouds-occluders { position: absolute; left: 0; right: 0; bottom: 0; top: var(--awc-cloud-overhang); clip-path: inset(0 round calc(var(--ha-card-border-radius, 12px) - var(--ha-card-border-width, 1px))); }
        .animated-weather-card:not([data-occlude]) .clouds-occluders { display: none; }
        .animated-weather-card.theme-colors .secondary,
        .animated-weather-card.theme-colors .attribute-label,
        .animated-weather-card.theme-colors .hero-meta {
          color: var(--secondary-text-color);
        }
        .animated-weather-card.theme-colors .weather-info { text-shadow: none; }
        .animated-weather-card.theme-colors .attribute-icon,
        .animated-weather-card.theme-colors .indoor-icon {
          color: var(--awc-icon-color);
        }
        .animated-weather-card.theme-colors .temperature {
          color: var(--awc-hero-color);
        }

        /* \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .weather-skeleton {
          position: absolute;
          inset: 0;
          z-index: 30;
          display: none;
          flex-direction: column;
          padding: var(--awc-pad);
          gap: 10px;
        }
        .animated-weather-card.loading .weather-skeleton { display: flex; }
        .animated-weather-card.loading .weather-content { opacity: 0; }
        .animated-weather-card.loading .animation-layer,
        .animated-weather-card.loading .animation-container { display: none !important; }

        .skeleton-line {
          height: 12px;
          width: 34%;
          border-radius: 6px;
          background: currentColor;
          opacity: 0.12;
          animation: awcSkeleton 1.6s ease-in-out infinite;
        }
        .skeleton-line.large { height: 56px; width: 38%; border-radius: 12px; }
        .skeleton-line.medium { width: 26%; }
        .skeleton-line.small { width: 100%; height: 30px; margin-top: auto; border-radius: 8px; }
        @keyframes awcSkeleton {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.16; }
        }

        /* \u2500\u2500 Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* Clips the sky-borne layer (sun, moon, clouds, planes, lightning) to
           the frame even when precipitation is allowed to spill. */
        .weather-content {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          border-radius: inherit;
          overflow: hidden;
          transition: opacity 0.5s var(--awc-ease);
        }

        .weather-info {
          position: relative;
          z-index: 30;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: var(--awc-pad);
          min-height: 0;
          text-shadow: 0 1px 12px var(--weather-text-shadow);
        }

        .main-weather-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          /* Safety net for frames shorter than the content: the hero gives
             way at its bottom edge and the metric row is never cut. The
             card normally steps down first (see applySizeState). */
          flex: 0 1 auto;
          min-height: 0;
          clip-path: inset(-60px -60px 0 -60px);
        }
        /* Never squash a line to fit: let it overflow so the card can
           measure it and step down to a compact layout instead. */
        .main-weather-info > *,
        .weather-attributes { flex-shrink: 0; }

        .location {
          font-size: 15px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: -0.01em;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          opacity: 0.94;
        }

        .temperature {
          /* custom_colors.temperature_color, else the text's (the theme palette sets its accent below) */
          color: var(--awc-hero-color, inherit);
          font-family: var(--awc-font-display);
          font-size: 80px;
          font-weight: 200;
          line-height: 0.9;
          letter-spacing: -0.045em;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
          /* Optical alignment: big numerals carry extra left side-bearing */
          margin: 4px 0 0 -0.055em;
          white-space: nowrap;
        }
        /* inline-block so a new value can rise into place (fadeThrough) */
        .temperature-value { display: inline-block; }
        .temperature .degree {
          font-weight: 200;
          letter-spacing: 0;
          margin-left: 0.02em;
        }

        .weather-desc, .awc-temp-lead {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.012em;
        }
        /* hero: clock: the time in the temperature's place, "21\xB0 Partly cloudy" */
        .awc-hero-clock { font-variant-numeric: proportional-nums; font-feature-settings: "case" 1; letter-spacing: -0.02em; }
        .awc-hero-clock .awc-ampm { font-family: var(--awc-font); font-size: max(13px, 0.22em); font-weight: 500; letter-spacing: 0.04em; vertical-align: top; margin-left: 0.1em; position: relative; top: 0.16em; }
        .awc-lead-row { display: flex; align-items: baseline; column-gap: 12px; margin-top: 8px; min-width: 0; white-space: nowrap; }
        /* One line: the condition never wraps out of sight */
        .awc-lead-row.awc-desc-row { flex-wrap: nowrap; }
        .awc-lead-row > * { margin-top: 0 !important; align-self: baseline !important; }
        .awc-lead-row > .awc-temp-lead { flex-shrink: 0; margin-right: -6px; }
        /* Conditions come in the user's language and casing ("Partly cloudy",
           "Teilweise bew\xF6lkt"); only make sure they start with a capital */
        .weather-desc::first-letter { text-transform: uppercase; }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 2px 14px;
          margin-top: 2px;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.006em;
          font-variant-numeric: tabular-nums;
          opacity: var(--awc-secondary);
        }
        .hero-meta:empty { display: none; }
        .indoor-climate-inline { white-space: nowrap; }
        .indoor-label { font-weight: 400; margin-right: 4px; }
        .indoor-icon {
          --mdc-icon-size: 14px;
          margin-right: 4px;
          /* Sits on the line like a letter: centred on the digits beside it */
          vertical-align: -1.5px;
        }
        .awc-visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }
        /* "6:32" + a smaller "PM", matching the sun tracker */
        .awc-ampm {
          font-size: 0.7em;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-left: 0.24em;
        }
        .indoor-sep { margin: 0 4px; opacity: 0.6; }

        /* \u2500\u2500 Note \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* A sentence about the weather, last under the hero. It comes in two
           lengths, both in the markup: the height step shows the one that
           fits (see the adaptive height rules below). Full-strength text at
           the quiet tier's size, not its tint: on a narrow card the second
           half of a line runs into the sun's glow, where the tint falls
           below 4.5:1 (sky.test.ts samples it). A sentence is read, not
           glanced at. */
        .weather-note {
          margin: 10px 0 0;
          max-width: 46ch;
          font-size: 15px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.006em;
          text-wrap: pretty;
          /* Whole or not at all: the fit shows a length only if all of it
             fits, and treats a clamped one as not fitting (applySizeState).
             The clamp only stops runaway text from growing the card. */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          overflow: hidden;
        }
        .weather-note[hidden],
        .weather-note .note-short { display: none; }
        /* Which length, or none: the fit decides (NOTE_FIT_STEPS) */
        .animated-weather-card[data-note="line"] .weather-note { -webkit-line-clamp: 2; line-clamp: 2; }
        .animated-weather-card[data-note="line"] .note-long { display: none; }
        .animated-weather-card[data-note="line"] .note-short { display: inline; }
        .animated-weather-card[data-note="none"] .weather-note { display: none; }
        /* While a new note is written: a status in its place, typing dots
           and what's happening, the size of the note it stands for (two
           lines, or one), so nothing moves when the note arrives. A plain
           block, unclamped: a clamp would read the status as text cut
           short, and the fit would turn it away. */
        .note-status { display: none; }
        .weather-note[data-writing] {
          display: block;
          box-sizing: border-box;
          /* The hero column sizes its lines to their text: take the note's
             full measure (max-width: 46ch) instead */
          width: 100%;
          height: 40px;
        }
        .animated-weather-card .weather-note[data-writing] { -webkit-line-clamp: none; line-clamp: none; }
        /* Outranks the length rules above, which show one span or the other */
        .animated-weather-card .weather-note[data-writing] > .note-long,
        .animated-weather-card .weather-note[data-writing] > .note-short { display: none; }
        /* The secondary tint, short and at the left: well inside the part
           of the card the glow leaves at AA (x up to 0.55 on narrow cards,
           see sky.test.ts). A much longer status would need checking. */
        .weather-note[data-writing] > .note-status {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 20px;
          opacity: var(--awc-secondary);
          white-space: nowrap;
          overflow: hidden;
        }
        .note-dots { display: inline-flex; gap: 3px; flex: none; }
        .note-dots i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          animation: awcNoteDot 1.2s ease-in-out infinite;
        }
        .note-dots i:nth-child(2) { animation-delay: 0.15s; }
        .note-dots i:nth-child(3) { animation-delay: 0.3s; }
        @keyframes awcNoteDot {
          0%, 70%, 100% { opacity: 0.3; transform: none; }
          35% { opacity: 1; transform: translateY(-2px); }
        }
        .note-phrase { overflow: hidden; text-overflow: ellipsis; }
        .animated-weather-card[data-note="line"] .weather-note[data-writing] { height: 20px; }
        /* Typing in: the rest of the note is laid out but not yet shown, so
           its lines already break where they'll end up. No caret: even one
           with no width can change where a line breaks. */
        .note-untyped { color: transparent; text-shadow: none; }

        /* \u2500\u2500 Metrics \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .weather-attributes {
          position: relative;
          display: grid;
          grid-auto-flow: column;
          /* Columns hug their content and share the leftover space, so the
             longest label (PRESSURE) never truncates */
          grid-auto-columns: max-content;
          justify-content: space-between;
          column-gap: 24px;
          row-gap: 14px;
          margin-top: auto;
          padding-top: 14px;
        }
        .weather-attributes::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: currentColor;
          opacity: 0.2;
        }
        .animated-weather-card.theme-colors .weather-attributes::before {
          background: var(--divider-color, rgba(0, 0, 0, 0.12));
          opacity: 1;
        }

        .attribute {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .attribute-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          line-height: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          opacity: var(--awc-secondary);
        }
        .attribute-label > span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .attribute-icon {
          --mdc-icon-size: 13px;
          flex-shrink: 0;
          /* Optical: centred on the capitals of the uppercase label */
          margin-top: -0.5px;
        }

        .attribute-value {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 16px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: -0.012em;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
          min-width: 0;
        }
        .attribute-text {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .wind-bearing-arrow,
        .pressure-trend {
          --mdc-icon-size: 14px;
          flex-shrink: 0;
          opacity: var(--awc-secondary);
        }

        /* One row when the (localized) labels fit, else a 2\xD72 grid. Measured
           in applySizeState, since label length depends on the language. */
        .animated-weather-card[data-metrics="grid"] .weather-attributes {
          grid-auto-flow: row;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          justify-content: stretch;
        }

        /* Values only (labels hidden): give the numbers a touch more presence */
        .weather-attributes.values-only .attribute-value { font-size: 18px; }
        .weather-attributes.values-only .attribute { flex-direction: row; align-items: center; gap: 6px; }
        .weather-attributes.values-only .attribute-icon { --mdc-icon-size: 16px; opacity: var(--awc-secondary); }
        ${Object.entries(Zc).map(([a,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${e}; }`).join(`
        `)}

        /* \u2500\u2500 Adaptive layout: width \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        @container awc (max-width: 319px) {
          .weather-info, .weather-skeleton { --awc-pad: 16px; }
          .temperature { font-size: 64px; font-weight: 250; }
          .weather-desc, .awc-temp-lead { font-size: 16px; line-height: 21px; margin-top: 6px; }
          .hero-meta, .weather-note { font-size: 14px; }
          .attribute-value { font-size: 16px; }
        }
        @container awc (max-width: 259px) {
          .temperature { font-size: 56px; font-weight: 300; }
          .location { font-size: 14px; }
          .hero-meta, .weather-note { display: none; }
        }
        @container awc (min-width: 460px) {
          .weather-info, .weather-skeleton { --awc-pad: 24px; }
          .location { font-size: 16px; }
          .temperature { font-size: 96px; letter-spacing: -0.05em; }
          .weather-desc, .awc-temp-lead { font-size: 18px; line-height: 24px; }
          .attribute-value { font-size: 18px; line-height: 24px; }
        }
        /* Wide frames (wall tablets, full-width rows): hero left, metrics right */
        @container awc (min-width: 640px) {
          .weather-info, .weather-skeleton { --awc-pad: 28px; }
          .weather-info {
            flex-direction: row;
            align-items: flex-end;
            gap: 40px;
          }
          .main-weather-info { flex: 1; align-self: stretch; justify-content: flex-end; }
          .temperature { font-size: 120px; }
          /* [data-metrics] beats the measured row/grid rules: wide cards
             always use this two-column block */
          .weather-attributes,
          .animated-weather-card[data-metrics] .weather-attributes {
            flex: 0 0 auto;
            width: auto;
            margin-top: 0;
            padding: 0 0 4px 24px;
            grid-auto-flow: row;
            grid-template-columns: repeat(2, max-content);
            column-gap: 56px;
            justify-content: end;
            row-gap: 18px;
          }
          .weather-attributes::before {
            top: 0;
            bottom: 4px;
            left: 0;
            right: auto;
            width: 1px;
            height: auto;
          }
        }

        /* \u2500\u2500 Adaptive layout: height (stepped down until nothing overflows) \u2500
           Each step keeps the one before it and gives up a little more:
           compact drops the line under the condition, short shrinks the
           temperature, tight drops the location, minimal drops the metric
           labels and shrinks the temperature again. A phone's sections row
           (353 \xD7 248) lands on tight, with the labels. */
        .animated-weather-card[data-height="compact"] .hero-meta,
        .animated-weather-card[data-height="short"] .hero-meta,
        .animated-weather-card[data-height="tight"] .hero-meta,
        .animated-weather-card[data-height="minimal"] .hero-meta { display: none; }
        .animated-weather-card[data-height="short"] .weather-info,
        .animated-weather-card[data-height="tight"] .weather-info,
        .animated-weather-card[data-height="minimal"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="short"] .temperature,
        .animated-weather-card[data-height="tight"] .temperature { font-size: 60px; font-weight: 250; }
        .animated-weather-card[data-height="short"] .weather-desc,
        .animated-weather-card[data-height="tight"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="short"] .weather-attributes,
        .animated-weather-card[data-height="tight"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="tight"] .location,
        .animated-weather-card[data-height="minimal"] .location,
        .animated-weather-card[data-height="minimal"] .attribute-label > span { display: none; }
        /* Minimal: icon beside value, so the numbers keep their meaning */
        .animated-weather-card[data-height="minimal"] .attribute { flex-direction: row; align-items: center; gap: 6px; }
        .animated-weather-card[data-height="minimal"] .attribute-icon { --mdc-icon-size: 15px; }
        .animated-weather-card[data-height="minimal"] .temperature { font-size: 52px; font-weight: 300; }
        .animated-weather-card[data-height="minimal"] .weather-desc { margin-top: 2px; }
        .animated-weather-card[data-height="minimal"] .weather-attributes { padding-top: 8px; }

        /* Close, with a note only: everything at its regular size, with
           short's gaps, so a longer note's third line fits where there's
           a line's room less one gap: 12 px back before the note shortens */
        .animated-weather-card[data-height="close"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="close"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="close"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="close"] .weather-note { margin-top: 6px; }

        /* Snug, with a note only: short's sizes, keeping the location and
           the line under the condition, so the note's one-line version fits
           without either giving way. A phone's five-row section (353 \xD7 312,
           metrics in a labelled grid) has 155 px for the hero; snug needs
           152 with the note 6 px below the line above it. At 10 px it no
           longer fits. */
        .animated-weather-card[data-height="snug"] .weather-info { gap: 12px; }
        .animated-weather-card[data-height="snug"] .temperature { font-size: 60px; font-weight: 250; }
        .animated-weather-card[data-height="snug"] .weather-desc { margin-top: 4px; }
        .animated-weather-card[data-height="snug"] .weather-attributes { padding-top: 10px; }
        .animated-weather-card[data-height="snug"] .weather-note { margin-top: 6px; }

        /* \u2500\u2500 Compact: the hero on one line, the sky still moving behind \u2500\u2500 */
        /* The temperature leads on the left; the condition, then where and
           what it feels like, sit beside it; the sun keeps its corner of the
           sky on the right, at mid-height. Built to share a column with the
           compact sun tracker. */
        .animated-weather-card[data-variant="compact"] { min-height: 0; }
        .animated-weather-card[data-variant="compact"] .weather-info {
          flex-direction: row;
          align-items: center;
          gap: 0;
          padding-block: 16px;
        }
        .animated-weather-card[data-variant="compact"] .main-weather-info {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          grid-template-areas: "temp desc" "temp meta";
          column-gap: 14px;
          align-items: center;
          align-content: center;
          justify-content: start;
          flex: 1 1 auto;
          align-self: center;
          /* Text stops short of the sun */
          margin-right: calc(14% + 22px);
          clip-path: none;
        }
        .animated-weather-card[data-variant="compact"] .temperature {
          grid-area: temp;
          font-size: 56px;
          /* 1, not the hero's 0.9: the numerals must fit their box here, or
             the fit check reads them as overflowing the strip */
          line-height: 1;
          font-weight: 200;
          letter-spacing: -0.045em;
          margin: 0 0 0 -0.055em;
        }
        .animated-weather-card[data-variant="compact"] .weather-desc,
        .animated-weather-card[data-variant="compact"] .compact-meta,
        .animated-weather-card[data-variant="compact"] .awc-lead-row {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .animated-weather-card[data-variant="compact"] .weather-desc,
        .animated-weather-card[data-variant="compact"] .awc-lead-row {
          grid-area: desc;
          align-self: end;
          margin: 0;
          font-size: 16px;
          line-height: 21px;
        }
        .animated-weather-card[data-variant="compact"] .awc-temp-lead { font-size: inherit; line-height: inherit; }
        .animated-weather-card[data-variant="compact"] .awc-lead-row { margin: 0 !important; height: auto; max-width: none; }
        .compact-meta {
          grid-area: meta;
          align-self: start;
          margin-top: 2px;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: -0.004em;
          font-variant-numeric: tabular-nums;
          opacity: var(--awc-secondary);
        }
        .compact-meta:empty { display: none; }
        .animated-weather-card[data-variant="compact"] .sun {
          top: 50%;
          left: 86%;
          width: 30px;
          height: 30px;
        }
        .animated-weather-card[data-variant="compact"].theme-colors .sun { width: 26px; height: 26px; }
        .animated-weather-card[data-variant="compact"] .moon-gsap {
          top: 50%;
          left: 86%;
          width: 26px;
          height: 26px;
        }
        /* The light sits around the sun at mid-height */
        .animated-weather-card[data-variant="compact"] .sky {
          --awc-sky-glow-layer: ${De(Oo,"var(--awc-sky-glow)")};
        }
        /* Loading: the temperature and condition placeholders, side by side */
        .animated-weather-card[data-variant="compact"] .weather-skeleton {
          flex-direction: row;
          align-items: center;
          gap: 14px;
        }
        .animated-weather-card[data-variant="compact"] .skeleton-line:not(.large):not(.medium) { display: none; }
        .animated-weather-card[data-variant="compact"] .skeleton-line.large { width: 72px; height: 44px; }
        .animated-weather-card[data-variant="compact"] .skeleton-line.medium { width: 30%; }
        /* Short frames (a one-row section): smaller numerals, then one line.
           The strip has no step past tight: minimal looks the same. */
        .animated-weather-card[data-variant="compact"][data-height="short"] .temperature { font-size: 44px; font-weight: 250; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .weather-info,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .weather-info { padding-block: 8px; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .temperature,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .temperature { font-size: 36px; font-weight: 300; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .main-weather-info,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .main-weather-info { grid-template-areas: "temp desc"; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] :is(.weather-desc, .awc-lead-row),
        .animated-weather-card[data-variant="compact"][data-height="minimal"] :is(.weather-desc, .awc-lead-row) { align-self: center; font-size: 15px; }
        .animated-weather-card[data-variant="compact"][data-height="tight"] .compact-meta,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .compact-meta { display: none; }

        /* \u2500\u2500 Animation layers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .animation-layer {
          position: absolute;
          inset: 0;
          z-index: 20;
          pointer-events: none;
          contain: style;
        }

        .animation-container {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          transition: opacity 0.6s var(--awc-ease);
        }

        /* Condition change: the old weather fades out (0.4s, see
           CONDITION_FADE_OUT_MS) before the new one starts, while the sky
           cross-fades through its registered colors. !important beats the
           inline opacity GSAP keeps writing to clouds and stars. */
        .animated-weather-card.condition-out .animation-container,
        .animated-weather-card.condition-out .cloud-gsap,
        .animated-weather-card.condition-out .cloud-occluder,
        .animated-weather-card.condition-out .star-gsap,
        .animated-weather-card.condition-out .moon-gsap,
        .animated-weather-card.condition-out .snow-accumulation,
        .animated-weather-card.condition-out .sleet-accumulation {
          opacity: 0 !important;
          transition: opacity 0.4s cubic-bezier(0.5, 0, 0.75, 0) !important;
        }
        /* Fog always stays in the frame, corners included; overflow keeps it
           out of the page's size in Firefox (#16) */
        .animation-container.fog-container {
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
          overflow: hidden;
          overflow: clip;
        }
        /* Spill: precipitation escapes the sides and bottom, never the top;
           wind carries leaves out to the right */
        .animated-weather-card[data-spill] .rain-container,
        .animated-weather-card[data-spill] .snow-container,
        .animated-weather-card[data-spill] .sleet-container,
        .animated-weather-card[data-spill] .lightning-container {
          clip-path: inset(0 -200px -200px -200px);
        }
        .animated-weather-card[data-spill] .wind-container {
          clip-path: inset(0 -500px -200px 0);
        }
        /* Firefox would count spilled leaves in the page's size (#16) */
        @supports (-moz-appearance: none) {
          .animated-weather-card[data-spill] .wind-container { overflow: clip; }
        }

        /* Clouds drift in front of the sun, stars and planes, in their own
           layer. In the frame by default; with spill they can rise past the
           top edge, fading out over the top half of CLOUD_OVERHANG_PX. The sides and
           bottom stay closed: clouds cross the card, not the dashboard. */
        .clouds-container {
          --awc-cloud-overhang: 0px;
          z-index: 25;
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
          overflow: hidden;
          overflow: clip;
        }
        .clouds-layer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: var(--awc-cloud-overhang);
        }
        .animated-weather-card[data-spill] .clouds-container {
          --awc-cloud-overhang: ${Xc}px;
          top: calc(-1 * var(--awc-cloud-overhang));
          clip-path: inset(0 round 0 0 var(--ha-card-border-radius, 12px) var(--ha-card-border-radius, 12px));
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--awc-cloud-overhang) / 2));
          mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--awc-cloud-overhang) / 2));
        }

        .rain-layer, .snow-layer, .sleet-layer, .wind-layer {
          position: absolute;
          inset: 0;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s var(--awc-ease);
        }

        .animated-weather-card.rainy .rain-layer,
        .animated-weather-card.stormy .rain-layer,
        .animated-weather-card.pouring .rain-layer,
        .animated-weather-card.snowy-rainy .rain-layer,
        .animated-weather-card.light-rain .rain-layer { opacity: 1; }
        .animated-weather-card.snowy .snow-layer,
        .animated-weather-card.snowy-rainy .snow-layer,
        .animated-weather-card.snowy-stormy .snow-layer { opacity: 1; }
        .animated-weather-card.sleety .sleet-layer,
        .animated-weather-card.sleety-stormy .sleet-layer { opacity: 1; }
        .animated-weather-card.windy .wind-layer { opacity: 1; }

        .animated-weather-card.individual-rain-active .rain-layer { opacity: 1; }
        .animated-weather-card.individual-snow-active .snow-layer { opacity: 1; }
        .animated-weather-card.individual-sleet-active .sleet-layer { opacity: 1; }
        .animated-weather-card.individual-wind-active .wind-layer { opacity: 1; }
        .animated-weather-card.individual-clouds-active .cloud-gsap { opacity: 1; }
        .animated-weather-card.individual-fog-active .fog-layer { opacity: 1; }
        .animated-weather-card.individual-stars-active .star-gsap,
        .animated-weather-card.individual-stars-active .moon-gsap { opacity: 1; }
        .animated-weather-card.individual-sun-active .sun { opacity: 1; }

        /* \u2500\u2500 Sun: a light source, not a disc \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .sun {
          position: absolute;
          top: 20%;
          left: 84%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at 50% 50%, #fffaf0 0%, #fff3d6 34%, var(--weather-sun-primary) 70%, var(--weather-sun-secondary) 100%);
          box-shadow:
            0 0 18px 4px var(--weather-sun-glow),
            0 0 64px 18px var(--weather-sun-halo);
          opacity: 0;
          transition: opacity ${ne/2}s ${Fe};
          animation: awcSunBreathe 9s ease-in-out infinite;
        }
        .sun::before {
          content: '';
          position: absolute;
          inset: -90%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--weather-sun-glow) 0%, transparent 62%);
          opacity: 0.55;
          animation: awcSunCorona 7s ease-in-out infinite alternate;
        }
        /* The sun's height follows the time of day on a full-card track (a
           transform, so .sun keeps its breathing): low at dawn and dusk and
           below the horizon at night, so it sets downward and rises upward. */
        .sun-track {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: transform ${ne}s ${Fe};
        }
        .animated-weather-card[data-phase="dusk"] .sun-track,
        .animated-weather-card[data-phase="dawn"] .sun-track { transform: translateY(14%); }
        .animated-weather-card[data-phase="night"] .sun-track { transform: translateY(26%); }

        .animated-weather-card.sunny .sun { opacity: 1; }
        .animated-weather-card.partly-cloudy .sun { opacity: 0.85; }
        .animated-weather-card.rainy .sun,
        .animated-weather-card.snowy .sun,
        .animated-weather-card.stormy .sun,
        .animated-weather-card.windy .sun,
        .animated-weather-card.cloudy .sun,
        .animated-weather-card.foggy .sun,
        .animated-weather-card.snowy-rainy .sun,
        .animated-weather-card.clear-night .sun,
        .animated-weather-card[data-phase="night"] .sun {
          opacity: 0 !important;
        }
        /* animate: false is fully still: the light stays, the breathing stops */
        .animated-weather-card.static .sun,
        .animated-weather-card.static .sun::before,
        .animated-weather-card.static .moon-gsap::before { animation: none; }
        .animated-weather-card.theme-colors .sun { box-shadow: none !important; }
        .animated-weather-card.theme-colors .moon-gsap::before { display: none; }
        .animated-weather-card.theme-colors .sun {
          width: 32px;
          height: 32px;
          background: radial-gradient(circle, var(--weather-sun-primary) 0 62%, var(--weather-sun-secondary) 100%);
        }
        .animated-weather-card.theme-colors .sun::before { display: none; }

        @keyframes awcSunBreathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.04); }
        }
        @keyframes awcSunCorona {
          0% { transform: scale(0.96); opacity: 0.45; }
          100% { transform: scale(1.08); opacity: 0.65; }
        }

        /* \u2500\u2500 Lightning: the sky lights up from inside the cloud deck \u2500\u2500\u2500\u2500\u2500\u2500 */
        .lightning {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          background:
            radial-gradient(110% 80% at 50% 0%, rgba(232, 238, 255, 0.62) 0%, rgba(214, 224, 255, 0.16) 55%, transparent 85%);
        }
        .lightning svg path {
          filter: drop-shadow(0 0 4px rgba(214, 228, 255, 0.95)) drop-shadow(0 0 14px rgba(170, 196, 255, 0.6));
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .animated-weather-card.theme-colors .lightning {
          background: radial-gradient(110% 80% at 50% 0%, rgba(128, 128, 140, 0.2), transparent 80%);
        }

        /* \u2500\u2500 Stars and moon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .stars-field { position: absolute; inset: 0; pointer-events: none; }
        .star-gsap {
          position: absolute;
          border-radius: 50%;
          background: white;
          pointer-events: none;
        }
        .star-gsap.twinkle { animation: awcTwinkle 5s ease-in-out infinite alternate; }
        /* A star on a word would read as part of it; it steps out of sight until the word moves away */
        .star-gsap.awc-veiled { visibility: hidden; }
        @keyframes awcTwinkle {
          from { opacity: var(--star-o); }
          to { opacity: var(--star-dim); }
        }
        /* The moon takes the sun's place in the top-right, clear of the
           temperature: soft maria, a steady disc and a slowly breathing halo,
           in its real phase (moon.ts). */
        .moon-gsap {
          position: absolute;
          left: 84%;
          top: 20%;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background:
            radial-gradient(circle at 38% 40%, rgba(120, 132, 160, 0.08) 0 12%, transparent 13%),
            radial-gradient(circle at 34% 30%, rgba(196, 206, 230, 0.15) 0%, rgba(170, 182, 210, 0.09) 100%);
          opacity: 0;
          pointer-events: none;
        }
        .moon-gsap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at 38% 40%, rgba(160, 166, 180, 0.28) 0 12%, transparent 13%),
            radial-gradient(circle at 62% 62%, rgba(160, 166, 180, 0.22) 0 9%, transparent 10%),
            radial-gradient(circle at 58% 32%, rgba(160, 166, 180, 0.16) 0 6%, transparent 7%),
            radial-gradient(circle at 34% 30%, #fbfaf4 0%, #ece8dc 55%, #cfcabc 100%);
          -webkit-mask: var(--awc-moon-mask, none) center / 100% 100% no-repeat;
          mask: var(--awc-moon-mask, none) center / 100% 100% no-repeat;
        }
        .moon-gsap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: var(--awc-moon-halo, 0 0 16px 2px rgba(226, 232, 255, 0.28), 0 0 56px 12px rgba(190, 206, 255, 0.12));
          animation: awcMoonHalo 6s ease-in-out infinite alternate;
        }
        @keyframes awcMoonHalo {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        .stars-field.paused .star-gsap,
        .moon-gsap.paused::before { animation-play-state: paused; }
        /* While the card is paused (hidden or off-screen) its CSS loops rest too */
        animated-weather-card[data-paused] .animated-weather-card *,
        animated-weather-card[data-paused] .animated-weather-card *::before {
          animation-play-state: paused !important;
        }

        /* \u2500\u2500 Particles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        .wind-swoosh-gsap { position: absolute; transform-origin: left center; }
        .leaf-gsap { position: absolute; border-radius: 0 100% 0 100%; transform-origin: center; }
        /* A full-width track carries each cloud; the track is what moves */
        .cloud-track { position: absolute; top: 0; left: 0; width: 100%; height: 0; will-change: transform; }
        .raindrop { position: absolute; pointer-events: none; }
        .rain-rebound {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;
          overflow: visible;
          opacity: 0;
          pointer-events: none;
        }
        .rain-rebound path { stroke-linecap: round; }
        .rain-splash {
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        .snowflake { position: absolute; border-radius: 50%; pointer-events: none; }

        /* \u2500\u2500 Planes (Flightradar24) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* Inside .animation-layer at z-index 5: in front of the sun, stars and
           moon, behind the clouds (their own layer above) and the text. */
        .planes-layer {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          transition: opacity 0.3s var(--awc-ease);
        }
        .plane-gsap {
          position: absolute;
          top: 0;
          left: 0;
          color: var(--weather-plane-color, var(--weather-text-color, #fff));
          will-change: transform, opacity;
        }
        .plane-body { position: relative; line-height: 0; }
        .plane-svg {
          display: block;
          width: 100%;
          height: auto;
          opacity: 0.9;
          filter: drop-shadow(0 1px 2px rgba(6, 12, 28, 0.25));
        }
        /* At night a plane is its lights: the outline only faintly there.
           At dusk and dawn, with the sun just below the horizon, a plane up
           high is still in sunlight: it keeps its outline, lights on. */
        .animated-weather-card[data-phase="night"] .plane-gsap.night .plane-svg { opacity: 0.22; filter: none; }
        /* Its lights, where they are on the aircraft (aircraft.ts), in a
           fixed size whatever the plane's: steady red or green at the near
           wingtip, white strobes that flash twice, the red beacon on the
           belly, and white at the tail. A plane flying right shows its
           right side, whose wingtip is green; flying left, its red left. */
        .plane-light {
          position: absolute;
          width: 2px;
          height: 2px;
          margin: -1px 0 0 -1px;
          border-radius: 50%;
        }
        .plane-light.nav { background: #3ee07a; box-shadow: 0 0 3px 1px rgba(62, 224, 122, 0.7); }
        .plane-gsap.westbound .plane-light.nav { background: #ff4d40; box-shadow: 0 0 3px 1px rgba(255, 77, 64, 0.7); }
        .plane-light.tail { background: #f6f3ea; box-shadow: 0 0 2px rgba(246, 243, 234, 0.6); }
        .plane-light.strobe,
        .plane-light.beacon {
          width: 3px;
          height: 3px;
          margin: -1.5px 0 0 -1.5px;
          opacity: 0;
        }
        .plane-light.strobe {
          background: #fbfbff;
          box-shadow: 0 0 6px 2px rgba(251, 251, 255, 0.8);
          animation: planeStrobe 1.2s steps(1, end) infinite;
        }
        .plane-light.beacon {
          background: #ff3b30;
          box-shadow: 0 0 5px 1px rgba(255, 59, 48, 0.85);
          animation: planeBeacon 1s steps(1, end) infinite 0.35s;
        }
        @keyframes planeStrobe {
          0% { opacity: 1; }
          5% { opacity: 0; }
          13% { opacity: 1; }
          18%, 100% { opacity: 0; }
        }
        @keyframes planeBeacon {
          0% { opacity: 1; }
          12%, 100% { opacity: 0; }
        }
        /* A flight tracker's tag: beside the plane at fuselage height, on
           the open-sky side (right), so it adds no height to the plane */
        .plane-label {
          position: absolute;
          top: 50%;
          left: calc(100% + 6px);
          transform: translateY(-50%);
          font-size: 10px;
          font-weight: 600;
          line-height: 12px;
          letter-spacing: 0.04em;
          white-space: nowrap;
          color: var(--weather-text-color, #fff);
          opacity: 0.72;
          text-shadow: 0 1px 4px var(--weather-text-shadow);
          font-variant-numeric: tabular-nums;
        }
        /* With both, the flight sits under the route, quieter */
        .plane-label > span { display: block; }
        .plane-flight { font-weight: 500; opacity: 0.72; }

`;var Dr={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5"},Qc={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum"},nb:Dr,no:Dr,nn:Dr,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437"}};function dn(a){return a?.locale?.language||a?.language||"en"}function Re(a){return`${dn(a)}|${a?.locale?.time_format??""}|${Fr(a)??""}`}function Fr(a){if(a?.locale?.time_zone!=="server")return;let e=a.config?.time_zone;if(e)try{return new Intl.DateTimeFormat("en",{timeZone:e}),e}catch{return}}function at(a,e,t={}){return Jc(Qc,a,e,t)}function Jc(a,e,t,n={}){let i=dn(e).toLowerCase();return(a[i]?.[t]??a[i.split("-")[0]]?.[t]??a.en[t]).replace(/\{(\w+)\}/g,(o,s)=>n[s]??"")}function td(a){let e=a?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?dn(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function fe(a,e){if(!a)return"--";let t=new Date(a);if(isNaN(t.getTime()))return"--";try{return Uo(e,{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Uo(a,e){let t=td(a),n={...e,timeZone:Fr(a)};return t!==void 0&&(n.hourCycle=t?"h12":"h23"),new Intl.DateTimeFormat(a?dn(a):void 0,n)}function Yo(a,e){try{let t=Uo(e,{hour:"numeric",minute:"2-digit"}).formatToParts(a),n=t.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:t.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:n}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Hr(a,e){try{let t=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Fr(e)}).formatToParts(a),n=i=>Number(t.find(r=>r.type===i)?.value??0);return n("hour")+n("minute")/60+n("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function Rr(a,e){let t=Math.round(Math.abs(a)*60),n=Math.floor(t/60),i=t%60,r=dn(e),o=Intl.DurationFormat;if(o&&e)try{return new o(r,{style:"narrow"}).format(n>0?{hours:n,minutes:i}:{minutes:i})}catch{}return r.toLowerCase().split("-")[0]==="uk"?n>0?`${n}\xA0\u0433\u043E\u0434 ${i}\xA0\u0445\u0432`:`${i}\xA0\u0445\u0432`:n>0?`${n}h ${i}m`:`${i}m`}function un(a,e){let t=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(a)}var Ko=["humidity","wind","pressure","sun","uv","rain"],jo=["humidity","wind","pressure","sun"];function Wr(a){let e=a.metrics,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t)return[...jo];let n=[];for(let i of t){let r=String(i).trim().toLowerCase();Ko.includes(r)&&!n.includes(r)&&n.push(r)}return n}var li=[3,6,8,11],Xo=["low","moderate","high","very_high","extreme"];function hn(a){let e=a.uv_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==4)return li;let n=t.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,r)=>isFinite(i)&&(r===0||i>n[r-1]))?n:li}function mn(a,e=li){let t=Math.round(a),n=0;for(;n<4&&t>=e[n];)n++;return Xo[n]}var ed={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function nd(a,e){try{let t=a.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Qt(ed,e.state)||e.state}var zr=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:parseFloat(String(a));return isFinite(e)?e:null};function Nr(a,e){return(e.uv_entity?zr(a?.states[e.uv_entity]?.state):null)??zr(e.entity?a?.states[e.entity]?.attributes?.uv_index:void 0)}function Ir(a,e,t){if(t===null||!isFinite(t))return{text:"--",level:null};let n=mn(t,hn(e));return{text:`${kt(Math.max(0,Math.round(t)),a)} ${$r(a,n)}`,level:n}}function $r(a,e){return at(a,`uv_${e}`)}function ci(a,e,t){let n=/\bin\b|inch/i.test(e)?2:1;return`${kt(Math.max(0,a),t,n)} ${e}`.trim()}function pn(a,e,t){let n=e?a?.states[e]:void 0,i=zr(n?.state);return i===null?null:{value:i,unit:typeof n?.attributes?.unit_of_measurement=="string"?n.attributes.unit_of_measurement:t}}function Gr(a,e){let t=pn(a,e.rain_rate_entity,"mm/h");if(t&&t.value>0)return{now:!0,text:ci(t.value,t.unit,a)};let n=pn(a,e.rain_entity,"mm");return n?{now:!1,text:ci(n.value,n.unit,a)}:null}var di=(a,e)=>at(a,e?"rain_now":"rain_today"),id=180;function Qo(a,e){let t=e.note_entity?a?.states[e.note_entity]:void 0;if(!t)return null;let n=s=>typeof s=="string"?s.trim():"",i=t.state==="unknown"||t.state==="unavailable"?"":n(t.state),r=n(t.attributes?.[e.note_attribute||"note"]);if(!i&&!r)return null;let o=Date.parse(t.attributes?.generated_at);return{line:i||r,note:r||i,writtenAt:Number.isNaN(o)?null:o}}function Jo(a,e){let t=Number(e.note_max_age??id);return a.writtenAt===null||!(t>0)?null:a.writtenAt+t*6e4}function Br(a,e,t){if(e.dev_mode){let n=rd(e,t);if(a&&e.sun_entity){let i=a.states[e.sun_entity];i&&(n.sun={sunrise:i.attributes.next_rising||null,sunset:i.attributes.next_setting||null,dawn:i.attributes.next_dawn||null,dusk:i.attributes.next_dusk||null,noon:i.attributes.next_noon||null,elevation:i.attributes.elevation??null,aboveHorizon:i.state==="above_horizon"})}return n}return a?od(a,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}function rd(a,e){let i=mr[e||"sunny"]||"22",r=ui(a)?kt(parseFloat(i),void 0,1):i,o=a.name||"",s=pe.humidity,l=pe.windSpeed,c=parseFloat(l.split(" ")[0])||15,d=pe.pressure,u=pr[e||"sunny"]||e||"sunny",p=pe.indoorTemperature,g=pe.indoorHumidity,h=new Date,f=new Date(h.getFullYear(),h.getMonth(),h.getDate(),6,14),y=new Date(h.getFullYear(),h.getMonth(),h.getDate(),18,32),w=new Date(h.getFullYear(),h.getMonth(),h.getDate(),5,45),_=new Date(h.getFullYear(),h.getMonth(),h.getDate(),19,1),b=new Date(h.getFullYear(),h.getMonth(),h.getDate(),12,23),v=Date.now(),x={sunrise:f.toISOString(),sunset:y.toISOString(),dawn:w.toISOString(),dusk:_.toISOString(),noon:b.toISOString(),elevation:42.5,aboveHorizon:v>=f.getTime()&&v<=y.getTime()};return{temperature:r,weatherCondition:u,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:null,pressure:d,pressureValue:null,feelsLike:null,indoorTemperature:p,indoorHumidity:g,uv:pe.uv,sun:x}}var ad={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function Zo(a){let e=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(e)?(e%360+360)%360:typeof a=="string"?ad[a.trim().toUpperCase()]??null:null}function ui(a){return Number(a.temperature_decimals)===1?1:0}function od(a,e){if(!e.entity)throw new Error("Weather entity is required");let t=a.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let n;if(e.outdoor_sensor_entity){let S=a.states[e.outdoor_sensor_entity];S&&S.state&&!isNaN(parseFloat(S.state))?n=parseFloat(S.state):n=t.attributes.temperature}else n=t.attributes.temperature;let i=ui(e),r=S=>kt(i?S:Math.round(S),a,i),o=n!=null&&!isNaN(n)?r(n):"--",s=nd(a,t),l=e.name||t.attributes.friendly_name||"",c=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?kt(Math.round(E),a)+"%":null},d="--";if(e.humidity_sensor_entity){let S=a.states[e.humidity_sensor_entity];d=S&&c(S.state)||c(t.attributes.humidity)||"--"}else d=c(t.attributes.humidity)||"--";let m="--",u=10,p=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);return isFinite(P)?(u=lo(P,E||"km/h"),m=kt(Math.round(P),a)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?a.states[e.wind_speed_sensor_entity]:void 0;g&&p(g.state,g.attributes?.unit_of_measurement)||p(t.attributes.wind_speed,t.attributes.wind_speed_unit);let h=e.wind_direction_sensor_entity?a.states[e.wind_direction_sensor_entity]:void 0,f=Zo(h?.state)??Zo(t.attributes.wind_bearing),y=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);if(!isFinite(P))return null;let D=E.toLowerCase()==="inhg"?2:0;return kt(P,a,D)+" "+E},w=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?E:null},_="--",b=null;if(e.pressure_sensor_entity){let S=a.states[e.pressure_sensor_entity];if(S){let E=S.attributes.unit_of_measurement||"hPa",P=y(S.state,E);P&&(_=P,b=w(S.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,E)||"--",b=w(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let S=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,S)||"--",b=w(t.attributes.pressure)}let v=null,x;if(e.feels_like_entity&&(x=a.states[e.feels_like_entity]?.state),x===void 0&&t.attributes.apparent_temperature!==void 0&&(x=t.attributes.apparent_temperature),x!==void 0){let S=typeof x=="number"?x:parseFloat(x);isFinite(S)&&(v=r(S)+"\xB0")}let T="--";if(e.indoor_temperature_entity){let S=a.states[e.indoor_temperature_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(T=r(parseFloat(S.state))+"\xB0")}let A="--";if(e.indoor_humidity_entity){let S=a.states[e.indoor_humidity_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(A=kt(Math.round(parseFloat(S.state)),a)+"%")}let C;if(e.sun_entity){let S=a.states[e.sun_entity];S&&(C={sunrise:S.attributes.next_rising||null,sunset:S.attributes.next_setting||null,dawn:S.attributes.next_dawn||null,dusk:S.attributes.next_dusk||null,noon:S.attributes.next_noon||null,elevation:S.attributes.elevation??null,aboveHorizon:S.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:d,windSpeed:m,windSpeedValue:u,windBearing:f,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:T,indoorHumidity:A,uv:Nr(a,e),sun:C}}function Vr(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function hi(a,e){return{entity:e,tap_action:Vr(a?.tap_action),hold_action:Vr(a?.hold_action),double_tap_action:Vr(a?.double_tap_action)}}function We(a){return!!a&&a.action!=="none"}function ts(a){return a.tap_action?We(a.tap_action):!!a.entity}function fn(a,e,t,n={}){let i=e[`${t}_action`],r=i&&Object.prototype.hasOwnProperty.call(n,i.action)?n[i.action]:void 0;if(r){r(t);return}if(t==="tap"&&!i){e.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}We(i)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function mi(a,e,t,n={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let i=null,r=!1,o,s,l=()=>{clearTimeout(o),o=void 0},c=()=>{i=null,l()},d=()=>{We(t().double_tap_action)?s?(clearTimeout(s),s=void 0,fn(e,t(),"double_tap",n)):s=setTimeout(()=>{s=void 0,fn(e,t(),"tap",n)},250):fn(e,t(),"tap",n)},m=u=>u.target!==a&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",u=>{u.button!==0||m(u)||(i={x:u.clientX,y:u.clientY},r=!1,l(),We(t().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,fn(e,t(),"hold",n)},500)))}),a.addEventListener("pointermove",u=>{i&&Math.hypot(u.clientX-i.x,u.clientY-i.y)>10&&c()}),a.addEventListener("pointerup",()=>{let u=!!i&&!r;c(),u&&d()}),a.addEventListener("pointercancel",c),a.addEventListener("pointerleave",c),a.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==a||!ts(t())||(u.preventDefault(),fn(e,t(),"tap",n))}),a.addEventListener("contextmenu",u=>{We(t().hold_action)&&u.preventDefault()})}function gn(a,e,t){ts(e)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(t?a.setAttribute("role",t):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let n=We(e.hold_action);a.style.userSelect=n?"none":"",a.style.setProperty("-webkit-user-select",n?"none":""),a.style.setProperty("-webkit-touch-callout",n?"none":"")}var qr=new Map;function ze(a,e){let t=qr.get(a);if(t)return t;let n=new Promise((i,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(d=>/animated-weather-card(?:\.min)?\.js/.test(d.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,c=document.createElement("script");c.src=l,c.type="module",c.async=!0,c.onload=()=>e()?i():r(new Error(`${l} loaded but registered nothing`)),c.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(c)});return n.catch(()=>qr.delete(a)),qr.set(a,n),n}function yn(a){return ze("animated-weather-card-editor",()=>!!customElements.get(a))}var es={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function ge(a,e){return`<svg class="${e} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${es[a]}"/></svg>`}function ns(a,e){!a||a.getAttribute("data-icon")===e||(a.setAttribute("data-icon",e),a.firstElementChild?.setAttribute("d",es[e]))}var sd=29.530588853,ld=Date.UTC(2e3,0,6,18,14),cd={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function is(a,e){let n=((a.getTime()-ld)/864e5/sd%1+1)%1,i=e?Qt(cd,e):void 0;if(!i)return n;let r=n*28;return r>=27.5&&(r-=28),r=Math.min(i[1],Math.max(i[0],r)),(r/28%1+1)%1}function rs(a,e=!1){let t=Math.cos(2*Math.PI*a),n=(1-t)/2,i=a<.5!==e,r=n<.5,o=(Math.abs(t)*50).toFixed(1),s=i===r?1:0,l=i?130:-30,d=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,m=.3+.7*n;return{mask:`url("data:image/svg+xml,${encodeURIComponent(d)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*m).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*m).toFixed(3)})`}}var K=Math.PI/180,pi=6e4,wn=864e5;function Ur(a){let e=(a/wn+24405875e-1-2451545)/36525,t=(280.46646+e*(36000.76983+e*3032e-7))%360,n=357.52911+e*(35999.05029-1537e-7*e),i=.016708634-e*(42037e-9+1267e-10*e),r=Math.sin(n*K)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*K)*(.019993-101e-6*e)+Math.sin(3*n*K)*289e-6,o=125.04-1934.136*e,s=t+r-.00569-.00478*Math.sin(o*K),l=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(o*K),c=Math.asin(Math.sin(l*K)*Math.sin(s*K)),d=Math.tan(l/2*K)**2,m=4/K*(d*Math.sin(2*t*K)-2*i*Math.sin(n*K)+4*i*d*Math.sin(n*K)*Math.cos(2*t*K)-.5*d*d*Math.sin(4*t*K)-1.25*i*i*Math.sin(2*n*K));return{declination:c,equationOfTime:m}}function dd(a,e,t){let{declination:n,equationOfTime:i}=Ur(a.getTime()),o=((a.getUTCHours()*60+a.getUTCMinutes()+a.getUTCSeconds()/60+i+4*t)%1440+1440)%1440/4-180,s=Math.sin(e*K)*Math.sin(n)+Math.cos(e*K)*Math.cos(n)*Math.cos(o*K);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/K}function as(a,e,t=new Date){let n=t.getTime(),i=Math.floor(n/wn)*wn,r={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=a*K;for(let h=-1;h<=2;h++){let f=i+h*wn,y=f+(720-4*e)*pi,{equationOfTime:w}=Ur(y),_=f+(720-4*e-w)*pi,{declination:b}=Ur(_);r.noon.push(_),r.midnight.push(_+wn/2);for(let[v,x,T]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let A=(Math.sin(v*K)-Math.sin(o)*Math.sin(b))/(Math.cos(o)*Math.cos(b));if(!(Math.abs(A)<=1))continue;let C=Math.acos(A)/K*4;r[x].push(_-C*pi),r[T].push(_+C*pi)}}let s=h=>h.filter(f=>f>n).sort((f,y)=>f-y)[0]??null,l=h=>h===null?null:new Date(h).toISOString(),c=dd(t,a,e),d=s(r.rising),m=s(r.setting),u=s(r.noon),p=s(r.midnight);return{state:(m!==null&&d!==null?m<d:m!==null?!0:d!==null?!1:c>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(r.dawn)),next_dusk:l(s(r.dusk)),next_midnight:l(p),next_noon:l(u),next_rising:l(d),next_setting:l(m),elevation:Math.round(c*100)/100,rising:u!==null&&p!==null?u<p:!1}}}var os=a=>typeof a=="number"?a:typeof a=="string"&&a.trim()?Number(a):NaN;function ud(a){let e=a.latitude!==void 0&&a.latitude!==null&&a.latitude!=="",t=a.longitude!==void 0&&a.longitude!==null&&a.longitude!=="",n=typeof a.time_zone=="string"&&a.time_zone.trim()?a.time_zone.trim():void 0;if(!e&&!t&&!n)return null;let i,r;if(e||t){if(i=os(a.latitude),r=os(a.longitude),!e||!t)throw new Error("latitude and longitude go together: set both, or neither");if(!(i>=-90&&i<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${a.latitude})`);if(!(r>=-180&&r<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${a.longitude})`)}if(n)try{new Intl.DateTimeFormat("en",{timeZone:n})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${n})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=i!==void 0&&r!==void 0?`sun.awc_${o(i)}_${o(r)}`:void 0;return{latitude:i,longitude:r,timeZone:n,sunId:s,key:`${s??""}|${n??""}`}}function hd(a,e,t,n=[]){let i=a;if(i.awcPlace===e.key)return a;let r=i.awcHome??a,o=Object.create(r);if(e.sunId&&t){let s=Object.create(r.states);s[e.sunId]=t;let l=t.state==="above_horizon"?"sunny":"clear-night";for(let c of n){let d=c?r.states[c]:void 0;c&&d&&(d.state==="sunny"||d.state==="clear-night")&&d.state!==l&&(s[c]={...d,state:l})}o.states=s}return o.config={...r.config,...e.latitude!==void 0?{latitude:e.latitude,longitude:e.longitude}:{},...e.timeZone?{time_zone:e.timeZone}:{}},e.timeZone&&(o.locale={...r.locale??{},time_zone:"server"}),o.awcPlace=e.key,o.awcHome=r,o}function md(a,e=new Date){if(!a.sunId||a.latitude===void 0||a.longitude===void 0)return;let t=as(a.latitude,a.longitude,e),n=e.toISOString();return{entity_id:a.sunId,state:t.state,attributes:{...t.attributes,friendly_name:"Sun"},last_changed:n,last_updated:n,context:{id:"",parent_id:null,user_id:null}}}var Ne=class{constructor(e=()=>[]){this.weather=e;this.place=null;this.timer=0}set(e){let t=ud(e),n=(t?.key??"")!==(this.place?.key??"");return this.place=t,n&&(this.sun=void 0),n}see(e){if(!this.place)return e;let t=Math.floor(Date.now()/6e4);if(this.place.sunId&&this.sun?.minute!==t){let n=md(this.place);this.sun=n?{minute:t,entity:n}:void 0}return hd(e,this.place,this.sun?.entity,this.weather())}tick(e){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(e,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var ss=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function ls(a){let e=a.color_palette||"default",t=a.custom_colors||{},n="";if(e!=="theme"){let r=d=>{if(typeof d!="string"||!ss.test(d))return null;let m=d.replace("#","");m.length===3&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]);let u=parseInt(m,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(d,m,u)=>"#"+(d<<16|m<<8|u).toString(16).padStart(6,"0"),s=(d,m)=>{let u=r(d);if(!u)return d;let p=1-m/100;return o(Math.max(0,Math.floor(u.r*p)),Math.max(0,Math.floor(u.g*p)),Math.max(0,Math.floor(u.b*p)))},l=(d,m)=>{let u=r(d);if(!u)return d;let p=m/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*p)),Math.min(255,Math.floor(u.g+(255-u.g)*p)),Math.min(255,Math.floor(u.b+(255-u.b)*p)))},c=(d,m)=>{let u=t[d];if(!u||typeof u!="string"||!ss.test(u))return;let p=l(u,12),g=s(u,22);n+=`--weather-${m}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${p} 0%, ${u} 55%, ${g} 100%); `};c("sunny_bg","sunny"),c("rainy_bg","rainy"),c("snowy_bg","snowy"),c("stormy_bg","stormy"),c("windy_bg","windy"),c("cloudy_bg","cloudy")}let i=(r,o)=>{r&&an(r)&&(n+=o.replace(/\$\{value\}/g,r))};return i(t.text_color,"--weather-text-color: ${value} !important; "),i(t.temperature_color,"--awc-hero-color: ${value} !important; "),i(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),i(t.rain_color,"--weather-rain-color: ${value} !important; "),i(t.snow_color,"--weather-snow-color: ${value} !important; "),n}var Ie="animated-weather-card-hour";var cs={horizon:196,peak:34,trough:276,twilightRy:78},ds={horizon:200,peak:96,trough:262,twilightRy:44};function Yr(a,e,t){let n=t-e;if(n<=0||n>=24)return 0;if(a>=e&&a<=t)return Math.sin(Math.PI*(a-e)/n);let i=((a-t)%24+24)%24;return-Math.sin(Math.PI*i/(24-n))}var Kr=(a,e=!1)=>e?1-a/24:a/24,ye=(a,e=!1)=>Kr(a,e)*1e3,jr=(a,e)=>a>=0?e.horizon-a*(e.horizon-e.peak):e.horizon-a*(e.trough-e.horizon);var ms={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},pd={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function fd(a){return Qt(pd,a)??"last-light"}function Xr(a,e){let t=i=>i.startsWith("sensor.")&&Qt(ms,e.states[i]?.state)!==void 0,n=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return n?{sun_entity:a,moon_entity:n}:{sun_entity:a}}var gd=124,us=16;function yd(a,e){if(a<1)return 1;let t=Math.max(2,Math.floor((e+us)/(gd+us))),n=Math.ceil(a/t);return Math.ceil(a/n)}function wd(a,e,t,n){let i=[];for(let r=0;r<=240;r++){let o=r/10;i.push(`${ye(o,n).toFixed(1)},${jr(Yr(o,a,e),t).toFixed(1)}`)}return"M"+i.join(" L")}function gi(a,e){if(!a)return 0;let t=new Date(a);return isNaN(t.getTime())?0:Hr(t,e)}var _d=a=>un(a,"st-ampm");Qn();var hs=$t(Pt(Oe)),vd=`
    :host {
        display: block;
        height: 100%;
        --st-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
        --st-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", var(--ha-font-family-body, Roboto), "Segoe UI", system-ui, sans-serif;
    }

    ha-card {
        height: 100%;
        overflow: hidden;
    }
    ha-card.sky {
        background: none;
        border-color: transparent;
    }

    .st-card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 220px;
        padding: 20px;
        gap: 14px;
        container: st / inline-size;
        font-family: var(--st-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--st-text);
        --st-text: var(--primary-text-color);
        --st-secondary: var(--secondary-text-color);
        --st-secondary-opacity: 1;
        /* Theme palette: the headline time and the day's arc in the theme's
           primary color, with a faint tint of it under the arc (an amber
           fill turns muddy on dark themes), icons in its icon color, and no
           twilight glows */
        --st-path: var(--primary-color);
        --st-path-night: var(--secondary-text-color);
        --st-horizon: var(--divider-color, rgba(0, 0, 0, 0.12));
        --st-icon: var(--state-icon-color, var(--primary-color));
        --st-hero: var(--primary-color, var(--primary-text-color));
        --st-day-fill: var(--primary-color);
        --st-day-fill-opacity: 0.08;
        --st-twilight: var(--state-sun-above_horizon-color, #ffb300);
        --st-twilight-opacity: 0;
    }

    /* Colorized: the card's sky follows the sun */
    .st-card.sky {
        --st-text: ${hs};
        --st-secondary: ${hs};
        --st-secondary-opacity: ${jn};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${De(Xn,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Tr.map(a=>`${a} ${ne}s ${Fe}`).join(", ")};
    }
    .st-card.following { transition: none; }

    /* \u2500\u2500 Headline: the next sunrise or sunset \u2500\u2500 */
    .st-hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        min-width: 0;
    }
    .st-title {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.01em;
        margin-bottom: 6px;
        opacity: 0.94;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .st-eyebrow,
    .st-metric-label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    /* Long labels (German "Sonnenh\xF6chststand") end in an ellipsis rather
       than running into the next column; the full word is in the title */
    .st-metric-label { min-width: 0; }
    .st-metric-label > span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    /* The tracker's icons (icons.ts): inline SVG, sized like ha-icon and in the text's colour */
    .st-eyebrow .awc-icon,
    .st-metric-label .awc-icon {
        --mdc-icon-size: 13px;
        display: inline-block;
        width: var(--mdc-icon-size);
        height: var(--mdc-icon-size);
        fill: currentColor;
        /* Optical: centred on the capitals of the uppercase label */
        margin-top: -0.5px;
        flex-shrink: 0;
    }
    .st-time {
        margin: 6px 0 0 -0.04em;
        font-family: var(--st-font-display);
        font-size: 52px;
        font-weight: 250;
        line-height: 0.95;
        letter-spacing: -0.035em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }
    .st-ampm {
        font-size: 0.42em;
        font-weight: 500;
        letter-spacing: 0.02em;
        margin-left: 0.32em;
    }
    .st-countdown {
        margin-top: 6px;
        font-size: 15px;
        line-height: 20px;
        font-variant-numeric: tabular-nums;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }

    /* \u2500\u2500 Sun path \u2500\u2500 */
    .st-chart {
        position: relative;
        flex: 1 1 auto;
        min-height: 64px;
        /* The path stretches to the chart, so cap its height: the arc keeps
           the same gentle shape in a tall frame instead of becoming a peak */
        max-height: 96px;
        margin: auto -20px;
    }
    .st-chart svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    .st-path-day,
    .st-path-night {
        fill: none;
        stroke-width: 2.25;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
    }
    .st-path-day { stroke: var(--st-path); }
    .st-path-night { stroke: var(--st-path-night); stroke-dasharray: 2 5; }
    .st-day-fill { fill: var(--st-day-fill); opacity: var(--st-day-fill-opacity); }
    .st-twilight { opacity: var(--st-twilight-opacity); }
    .st-horizon {
        stroke: var(--st-horizon);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
    }
    .st-now-line {
        stroke: var(--st-horizon);
        stroke-width: 1;
        stroke-dasharray: 2 4;
        vector-effect: non-scaling-stroke;
    }

    /* The sun (or the moon, when it's below the horizon) at this moment */
    .st-dot {
        position: absolute;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 50%, #fffaf0 0%, #ffe3a3 55%, #ffb547 100%);
        box-shadow: 0 0 10px 3px rgba(255, 200, 110, 0.55), 0 0 30px 10px rgba(255, 200, 110, 0.22);
    }
    .st-dot.below {
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        background: radial-gradient(circle at 40% 40%, #ffffff 0%, #dfe6f5 70%, #b9c3d8 100%);
        box-shadow: 0 0 10px 2px rgba(200, 214, 255, 0.35);
    }
    /* Theme palette: a flat sun in Home Assistant's sun color, like the
       weather card's. Below the horizon it takes the night path's color:
       HA's indigo for a set sun is too faint on dark themes. */
    .st-card:not(.sky) .st-dot {
        box-shadow: none;
        background: var(--state-sun-above_horizon-color, #ffc107);
    }
    .st-card:not(.sky) .st-dot.below {
        background: var(--st-path-night);
    }
    .st-card:not(.sky) .st-eyebrow .awc-icon,
    .st-card:not(.sky) .st-metric-label .awc-icon {
        color: var(--st-icon);
    }
    /* The headline time is the tracker's hero, like the weather card's temperature */
    .st-card:not(.sky) .st-time {
        color: var(--st-hero);
    }

    /* \u2500\u2500 Facts \u2500\u2500 */
    .st-metrics {
        position: relative;
        display: grid;
        /* The column count comes from _fit (detailColumns) */
        grid-template-columns: repeat(var(--st-cols, 2), minmax(0, 1fr));
        gap: 14px 16px;
        padding-top: 14px;
        flex-shrink: 0;
    }
    .st-metrics::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: currentColor;
        opacity: 0.2;
    }
    .st-card:not(.sky) .st-metrics::before {
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        opacity: 1;
    }
    .st-metric {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
    }
    .st-metric-value {
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: -0.012em;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .st-metric-value .st-ampm { font-size: 0.7em; margin-left: 0.24em; }
    /* Moon phase names are long; let them wrap rather than truncate */
    .st-metric-value.wrap {
        white-space: normal;
        text-wrap: balance;
    }

    /* Fit to the frame, stepped down until nothing overflows (see _fit) */
    .st-card[data-fit="compact"] .st-metric[data-kind="first-light"],
    .st-card[data-fit="compact"] .st-metric[data-kind="last-light"],
    .st-card[data-fit="short"] .st-metric[data-kind="first-light"],
    .st-card[data-fit="short"] .st-metric[data-kind="last-light"],
    .st-card[data-fit="short"] .st-countdown,
    .st-card[data-fit="tight"] .st-countdown,
    .st-card[data-fit="tight"] .st-metrics { display: none; }
    .st-card[data-fit="short"] .st-time,
    .st-card[data-fit="tight"] .st-time { font-size: 40px; }
    .st-card[data-fit="short"],
    .st-card[data-fit="tight"] { gap: 10px; }
    .st-card[data-fit="short"] .st-chart,
    .st-card[data-fit="tight"] .st-chart { min-height: 44px; }

    @container st (max-width: 299px) {
        .st-time { font-size: 44px; }
        .st-metric-value { font-size: 16px; }
    }
    @container st (min-width: 460px) {
        .st-time { font-size: 60px; }
        .st-metric-value { font-size: 18px; line-height: 24px; }
    }

    /* \u2500\u2500 Compact: the next sunrise or sunset beside the sun's day \u2500\u2500
       One line, built to sit under a weather card: same left edge and
       label style, the time a quiet step down from the temperature. */
    .st-card.compact {
        flex-direction: row;
        align-items: center;
        gap: 20px;
        min-height: 0;
        padding: 16px 20px;
    }
    /* Under a weather card the real sun is just above, so no second light
       source: the sky's gradient and scrim only */
    .st-card.sky.compact {
        /* From the sky's mid tone down: under a weather card it reads as
           the lower sky, not a brighter strip below a darker card */
        background:
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-mid) 0%, var(--awc-sky-bottom) 100%);
        --st-twilight-opacity: 0.3;
    }
    .st-card.compact .st-hero { flex: 0 0 auto; }
    .st-card.compact .st-time { font-size: 34px; margin-top: 5px; }
    .st-card.compact .st-countdown { margin-top: 5px; font-size: 13px; line-height: 18px; }
    .st-card.compact .st-chart {
        flex: 1 1 auto;
        align-self: stretch;
        max-height: none;
        /* Full height of the card, out to its right edge */
        margin: -16px -20px -16px 0;
        /* The path fades in beside the headline instead of starting at a hard edge */
        -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 36px);
        mask-image: linear-gradient(90deg, transparent 0, #000 36px);
    }
    .st-card.compact[data-fit] .st-chart { min-height: 0; }
    /* The other event, small, in the open sky at the top-right */
    .st-chart-note {
        position: absolute;
        top: 14px;
        right: 20px;
        font-size: 11px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    .st-chart-note .st-chart-note-time {
        margin-left: 4px;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        font-variant-numeric: tabular-nums;
    }
    .st-chart-note .st-ampm { font-size: 1em; margin-left: 0.2em; font-weight: 500; }
    @container st (max-width: 419px) {
        .st-chart-note { display: none; }
    }
    /* Short frames (a one-row section): the countdown goes, then the label */
    .st-card.compact[data-fit="short"],
    .st-card.compact[data-fit="tight"] { gap: 16px; }
    .st-card.compact[data-fit="short"] .st-time,
    .st-card.compact[data-fit="tight"] .st-time { font-size: 28px; }
    .st-card.compact[data-fit="tight"] .st-eyebrow { display: none; }
    .st-card.compact[data-fit="tight"] { padding-block: 12px; }
    .st-card.compact[data-fit="tight"] .st-chart { margin-block: -12px; }
    .st-card.compact[data-fit="tight"] .st-time { margin-top: 0; }

    .st-no-data {
        margin: auto;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
`,Zr=class extends HTMLElement{constructor(){super();this.config={};this._place=new Ne(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=t=>this._follow(t.detail);this._shadow=this.attachShadow({mode:"open"})}setConfig(t){let n=this._place.set(t),i=this._place.place?.sunId;if(!t.sun_entity&&!i)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");this.config={...t,sun_entity:i||t.sun_entity},n&&this._homeHass&&(this._hass=this._place.see(this._homeHass)),this._render()}set hass(t){this._homeHass=t,t=this._place.see(t);let n=this.config.sun_entity||"",i=this.config.moon_entity||"",r=this._hass?.states[n],o=t.states[n],s=this._hass?.states[i]?.state,l=t.states[i]?.state,c=Re(this._hass)!==Re(t),d=this._weatherId()||"",m=d&&this._hass?.states[d]?.state!==t.states[d]?.state;this._hass=t;let u=r?.attributes?.elevation,p=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(p||0))>=.5||i&&s!==l||c||m)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._place.see(this._homeHass)),this._render()},6e4)),window.addEventListener(Ie,this._onHour),this._unshare||(this._unshare=Vo(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Ie,this._onHour),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let n=t.querySelector(".st-metrics");for(let i of["regular","compact","short","tight"]){if(t.dataset.fit=i,n){let r=Array.from(n.children).filter(o=>getComputedStyle(o).display!=="none").length;n.style.setProperty("--st-cols",String(yd(r,n.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){let t=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return hi(this.config,t)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||Bo(this.config.sun_entity)}_skyCondition(t){let n=this._weatherId(),i=n?this._hass?.states[n]?.state:void 0;if(i&&i!=="unavailable"&&i!=="unknown"){let r=In(i,!1,void 0,void 0,this._hass?.config?.time_zone,{night:t==="night"});if(Sr.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await yn("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,n=[],i=[]){let r=[...n,...i,...Object.keys(t?.states??{})];return Xr(r.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let n=t.state,i;try{i=this._hass.formatEntityState?.(t)}catch{}return{phase:n,phaseName:(i&&i!==n?i:void 0)||Qt(ms,n)||n.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:fd(n)}}_render(){this._drawnWeather=this._weatherId();let t=this._getSunData(),n=this._getMoonData(),i=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=new Date,o=Hr(r,this._hass),s=gi(t.sunrise,this._hass),l=gi(t.sunset,this._hass),c=t.dawn?gi(t.dawn,this._hass):Math.max(0,s-.5),d=t.dusk?gi(t.dusk,this._hass):Math.min(24,l+.5),m=l-s,u=t.aboveHorizon,p=u?t.sunset:t.sunrise,g=new Date(p).getTime()-r.getTime(),h=this._hass,f=J=>M(at(h,J)),y=J=>_d(fe(J,h)),w=g>0?at(h,"in_duration",{duration:Rr(g/36e5,h)}):"",_=Zn(t.elevation,t.rising,t.aboveHorizon),b=Le(this._skyCondition(_),_),v=i?{"--awc-sky-top":b.top,"--awc-sky-mid":b.mid,"--awc-sky-bottom":b.bottom,"--awc-sky-glow":b.glow,"--awc-sky-scrim":b.scrim}:null,x=this.config.compact?ds:cs,T=this.config.direction,A=T==="right_to_left"||T!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:A};let C=wd(s,l,x,A),S=`${C} L${ye(24,A)},${x.horizon} L${ye(0,A)},${x.horizon} Z`,E=Yr(o,s,l),P=Kr(o,A)*100,D=jr(E,x)/300*100,F=(J,G)=>{let X=Math.max(70,Math.abs(G)/24*1e3*2.4);return`<ellipse cx="${ye(J,A).toFixed(1)}" cy="${x.horizon}" rx="${X.toFixed(1)}" ry="${x.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},H=!!this.config.compact,z=this.config.show_header!==!1,R=z?`
            <div class="st-hero">
                ${this.config.title&&!H?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${ge(u?"sunset":"sunrise","st-glyph")}
                    <span>${f(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${y(p)}</div>
                ${w?`<div class="st-countdown">${M(w)}</div>`:""}
            </div>`:this.config.title&&!H?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",W=(J,G,X,st,Gt=!1)=>`
                <div class="st-metric" data-kind="${M(J)}">
                    <div class="st-metric-label">${ge(G,"st-glyph")}<span title="${M(X)}">${M(X)}</span></div>
                    <div class="st-metric-value${Gt?" wrap":""}">${st}</div>
                </div>`,nt=!H&&this.config.show_details!==!1,Et=H&&z?`
                        <div class="st-chart-note">${f(u?"sunrise":"sunset")}<span class="st-chart-note-time">${y(u?t.sunrise:t.sunset)}</span></div>`:"",Mt=nt?`
            <div class="st-metrics">
                ${u?W("sunrise","sunrise",f("sunrise"),y(t.sunrise)):W("sunset","sunset",f("sunset"),y(t.sunset))}
                ${W("noon","noon",f("solar_noon"),y(t.noon))}
                ${W("daylight","daylight",f("daylight"),M(Rr(m,h)))}
                ${W("first-light","first-light",f("first_light"),y(t.dawn))}
                ${W("last-light","last-light",f("last_light"),y(t.dusk))}
                ${n?W("moon",n.icon,f("moon"),M(n.phaseName),!0):""}
            </div>`:"",j=this.config.sun_entity?h?.states[this.config.sun_entity]:void 0,St="";try{St=j&&h?.formatEntityState?.(j)||""}catch{}let ot=[`${at(h,"sunrise")} ${fe(t.sunrise,h)}`,`${at(h,"sunset")} ${fe(t.sunset,h)}`,St].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${R}
                    <div class="st-chart" role="img" aria-label="${M(ot)}">
                        <svg viewBox="0 0 ${1e3} ${300}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${1e3}" height="${x.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${x.horizon}" width="${1e3}" height="${300-x.horizon}"/></clipPath>
                            </defs>
                            ${F(s,s-c)}
                            ${F(l,d-l)}
                            <path d="${S}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${x.horizon}" x2="${1e3}" y2="${x.horizon}" class="st-horizon"/>
                            <line x1="${ye(o,A).toFixed(1)}" y1="0" x2="${ye(o,A).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${C}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${C}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${E<0?"below":""}" style="left: ${P.toFixed(2)}%; top: ${D.toFixed(2)}%;"></div>${Et}
                    </div>
                    ${Mt}`,v)}_mount(t,n){let i=this._shadow.querySelector(".st-card");i||(this._shadow.innerHTML=`<style>${vd}</style><ha-card><div class="st-card"></div></ha-card>`,i=this._shadow.querySelector(".st-card"),mi(i.parentElement,this,()=>this._actions())),gn(i.parentElement,this._actions());let r=!!n;i.classList.toggle("sky",r),i.classList.toggle("compact",!!this.config.compact),i.parentElement?.classList.toggle("sky",r);for(let o of Tr)n?i.style.setProperty(o,n[o]):i.style.removeProperty(o);i.innerHTML=t,this._link&&this._follow(),this._fit()}_follow(t){if(t){if(!t.source||t.sun!==this.config.sun_entity||t.at===null&&!this._link)return;if(this._link=t.at===null?null:t,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let n=this._shadow.querySelector(".st-card");n&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:n,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",Zr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Xr(e,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Xr(e,a),compact:!0}}]:null});function $e(a){let e=Number(a?.attributes?.supported_features);if(!isFinite(e))return["hourly","daily"];let t=[];return e&2&&t.push("hourly"),e&4&&t.push("twice_daily"),e&1&&t.push("daily"),t}function ps(a){let e=$e(a);return e.includes("daily")?"daily":e.includes("twice_daily")?"twice_daily":null}var bd=5e3;function xd(){let a=new WeakMap;return{subscribe(e,t,n,i){let r=a.get(e);r||a.set(e,r=new Map);let o=`${t}|${n}`,s=r.get(o);if(!s){let c={listeners:new Set};s=c,r.set(o,c);let d=m=>{c.last=m;for(let u of[...c.listeners])u(m)};c.unsubscribe=e.subscribeMessage(m=>d({type:m?.type??n,forecast:Array.isArray(m?.forecast)?m.forecast:null}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:n}).catch(()=>{r.get(o)===c&&r.delete(o),d({type:n,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(i),l.last&&i(l.last),()=>{!l.listeners.delete(i)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(r.get(o)===l&&r.delete(o),l.unsubscribe?.then(c=>{typeof c=="function"&&c()}).catch(()=>{}))},bd))}}}}function Sd(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=xd())}function fs(a,e,t,n){return a?.connection?.subscribeMessage?Sd().subscribe(a.connection,e,t,n):()=>{}}var yi=class{constructor(e){this.changed=e;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(e,t,n){let i=t?e?.states[t]:void 0,r=$e(i),o=n.hourly&&r.includes("hourly"),s=n.daily?ps(i):null,l=`${t}|${o}|${s}`;if(!e?.connection||!t||!i){this.key&&this.stop();return}if(l===this.key&&this.connection===e.connection)return;this.stop(),this.key=l,this.connection=e.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let c=(d,m)=>{this.stops.push(fs(e,t,d,u=>{u.failed||m(u.forecast),this.pending.delete(d),this.settled=this.pending.size===0,this.changed()}))};o&&c("hourly",d=>{this.hourly=d}),s&&c(s,d=>{this.daily=d}),this.settled&&this.changed()}stop(){for(let e of this.stops)e();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};Qn();var gs=a=>`Wind from ${Math.round(a)}\xB0`,ys=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ws=a=>a?"sunset":"sunrise",Td=18,Cd=450,Ad=1600;function Ge(a,e){return e?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var kd=400,Ed=120,Md=220,Pd=24;window.AnimatedWeatherCardGsap=ur;var _s=["regular","compact","short","tight","minimal"],Ld=[["regular","long"],["close","long"],["regular","line"],["snug","line"],..._s.map(a=>[a,"none"])],wi=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Ne(()=>[this.config?.entity]);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this.devTimeOverride=!1;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new oi;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new yi(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.onNeedle=t=>{let n=t.detail;this.following||this.forecastOn()||this.config?.dev_mode||n?.at==null||n.source===this||n.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(t,n=[],i=[]){let r=[...n,...i,...Object.keys(t?.states??{})];return Ge(r.find(o=>o.startsWith("weather."))??hr.entity,t)}actionsConfig(){if(this.config?.dev_mode||this.surface==="view")return{};let t=hi(this.config,this.config?.entity);return t.tap_action?t:this.config?.layout==="nightstand"&&this.surface==="card"?{...t,tap_action:{action:"none"}}:this.forecastOn()?{...t,tap_action:{action:"forecast"}}:t}forecastOn(){return!this.config?.dev_mode&&(this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand")}extrasWanted(){return this.forecastOn()||this.following||(!!this.config?.show_clock||!!this.config?.show_date||this.heroClock())&&!this.config?.dev_mode}shareSky(){let t=this.isConnected&&this.surface!=="view"&&!this.config?.dev_mode;Mr(this,t?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&!this.config.dev_mode&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let t=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:t!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let t=window.AnimatedWeatherCardForecast;if(!t){ze("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}t.version===2&&(this.extras=t.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Le,phase:()=>this.currentSkyPhase(),current:()=>{let t=this.config?.outdoor_sensor_entity||this.config?.entity,n=Number(t?this.config?.outdoor_sensor_entity?this._hass?.states[t]?.state:this._hass?.states[t]?.attributes?.temperature:NaN);return isFinite(n)?n:void 0},temperature:t=>{let n=this.config?ui(this.config):0;return kt(n?t:Math.round(t),this._hass,n).replace(/^-/,"\u2212")},conditionName:t=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:t,attributes:{},last_changed:"",last_updated:""})??t,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),reading:(t,n)=>{if(!this.config)return null;if(t==="rain_today"||t==="rain_now"){let o=t==="rain_now"?pn(this._hass,this.config.rain_rate_entity,"mm/h"):pn(this._hass,this.config.rain_entity,"mm");return!o||t==="rain_now"&&!(o.value>0)?null:{label:di(this._hass,t==="rain_now"),value:ci(o.value,o.unit,this._hass)}}if(t!=="uv")return null;let i=n??Nr(this._hass,this.config);if(i===null||!isFinite(i))return null;let r=mn(i,hn(this.config));return{label:at(this._hass,"uv_index"),value:kt(Math.max(0,Math.round(i)),this._hass),word:$r(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let n=l=>l===void 0||typeof l=="number"&&isFinite(l)&&l>=0&&l<=23;if(!n(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!n(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let i=this.placeView.set(t),r=this.placeView.place?.sunId;r&&(t={...t,sun_entity:r});let o=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==t.entity&&(this.following=!1),this.config=t,i&&this.homeHass&&(this._hass=this.placeView.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let s=this.querySelector(".weather-info");if(s&&gn(s,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let l=this.animationController;this._animationGeneration++,this.animationController=new He(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),l&&l.stopAllAnimations().catch(c=>k(this.config?.dev_mode,"Error stopping previous animation controller:",c))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!t.auto_pause!=!!o&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Ie,this.onNeedle),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.applySizeState(),this.devPanel?.isOpen&&this.devPanel.dock()}),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new He(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new He(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let n=this.querySelector(".animated-weather-card");n&&(n.classList.remove("no-transitions"),n.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass&&!this.config.dev_mode)return;gr(this),this.stopPlanes();let t=this.config.color_palette||"default",n;try{n=Br(this.hass,this.config,this.currentDevCondition)}catch(W){let nt=W?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${ge("alert","awc-empty-icon")}
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M(nt)}</div>
                  <div class="awc-empty-hint">Open the card editor to choose a weather entity.</div>
                </div>
                <style>
                  .awc-empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 32px 16px;
                    text-align: center;
                    color: var(--primary-text-color, #333);
                  }
                  .awc-empty-icon {
                    width: 48px;
                    height: 48px;
                    fill: currentColor;
                    color: var(--secondary-text-color, #888);
                  }
                  .awc-empty-title {
                    font-size: 1.1rem;
                    font-weight: 500;
                  }
                  .awc-empty-message {
                    font-size: 0.9rem;
                    color: var(--secondary-text-color, #888);
                  }
                  .awc-empty-hint {
                    font-size: 0.85rem;
                    color: var(--secondary-text-color, #888);
                    opacity: 0.8;
                  }
                </style>
              </ha-card>
            `;return}let{temperature:i,weatherCondition:r,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:d,pressure:m,pressureValue:u,feelsLike:p,indoorTemperature:g,indoorHumidity:h,uv:f,sun:y}=n,w=this.updatePressureTrend(u);this.currentWindSpeedValue=c;let _=y?.aboveHorizon??!1,b=y?fe(_?y.sunset:y.sunrise,this._hass):"--",v=this.config.show_sun!==!1&&!!y&&b!=="--",x=!!this.config.compact,T=this.heroClock(),A=ls(this.config),C=this.config.show_attribute_icons!==!1,S=this.config.show_attribute_labels!==!1,E=(W,nt,Et,Mt,j="",St)=>{let ot=C||S?`<div class="attribute-label">${C?ge(nt,"attribute-icon"):""}${S?`<span>${M(Et)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${W}"${St?` data-level="${St}"`:""}>${ot}<div class="attribute-value"><span class="attribute-text">${Mt}</span>${j}</div></div>`},P=typeof d=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${d+180}deg);" aria-label="${gs(d)}"></ha-icon>`:"",D=w?`<ha-icon class="pressure-trend ${w}" icon="${ys(w)}" aria-label="Pressure ${w}"></ha-icon>`:"",F=Ir(this._hass,this.config,f),H=Gr(this._hass,this.config),z={humidity:()=>E("humidity","humidity",Wn(this._hass,"ui.card.weather.attributes.humidity","Humidity"),M(s)),wind:()=>E("wind","wind",Wn(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),M(l),P),pressure:()=>E("pressure","pressure",Wn(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),M(m),D),sun:()=>v?E("sun",ws(_),at(this._hass,_?"sunset":"sunrise"),un(b,"awc-ampm")):"",uv:()=>E("uv","noon",at(this._hass,"uv_index"),M(F.text),"",F.level),rain:()=>E("rain","rain",di(this._hass,!!H?.now),M(H?.text??"--"))},R=this.config.show_attributes!==!1?`
              <div class="weather-attributes${S?"":" values-only"}">${Wr(this.config).map(W=>z[W]()).join("")}</div>`:"";this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions${this.surface==="view"?"":" loading"} ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${x?' data-variant="compact"':""} style="${M(A)}">
          <div class="sky" aria-hidden="true"></div>
          <div class="weather-skeleton" aria-hidden="true">
            <div class="skeleton-line"></div>
            <div class="skeleton-line large"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line small"></div>
          </div>
          <div class="weather-content">
            <!-- Sky-borne animation layer (decorative) -->
            <div class="animation-layer" role="presentation" aria-hidden="true">
              <div class="sun-track"><div class="sun"></div></div>
              <div class="lightning" id="lightning"></div>
              <div class="planes-layer"></div>
            </div>

            <div class="weather-info" role="group" aria-label="Current weather">
              <div class="main-weather-info">
                ${this.locationHtml(x,o)}
                ${T?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>`}
                ${x?`<div class="compact-meta">${this.config.show_clock&&!T?'<span class="awc-clock"></span>':""}${this.config.show_date&&!this.config.dev_mode?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,p))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(p,g,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${x?"":R}
            </div>
          </div>

          <!-- Precipitation and wind containers (decorative) -->
          <div class="animation-container rain-container" aria-hidden="true">
            <div class="rain-layer"></div>
          </div>
          <div class="animation-container snow-container" aria-hidden="true">
            <div class="snow-layer"></div>
          </div>
          <div class="animation-container sleet-container" aria-hidden="true">
            <div class="sleet-layer"></div>
          </div>
          <div class="animation-container wind-container" aria-hidden="true">
            <div class="wind-layer"></div>
          </div>
          <div class="animation-container lightning-container" aria-hidden="true">
            <div class="lightning"></div>
          </div>
          <div class="animation-container clouds-container" aria-hidden="true">
            <div class="clouds-layer"></div>
          </div>
          <div class="animation-container fog-container" aria-hidden="true"></div>
          <div class="animation-container stars-container" aria-hidden="true"></div>
          <div class="animation-container sun-container" aria-hidden="true"></div>
        </div>
      </ha-card>
      
      <style>
        ${Or()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(t,n){if(t)return"";let i=this.config?.show_location!==!1&&n?`<span class="awc-place">${M(n)}</span>`:"",r=this.config?.show_clock&&!this.config.dev_mode&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date&&!this.config.dev_mode?'<span class="awc-date"></span>':"";return i||r||o?`<div class="location">${r}${o}${i}</div>`:""}heroTime(){let{time:t,period:n}=Yo(new Date,this._hass);return n?`${M(t)}<span class="awc-ampm">${M(n)}</span>`:M(t.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let n=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",n,"important");let i=()=>{let r=t.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${n} !important; }`};i(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(i))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},kd)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&!this.config.dev_mode&&this.surface!=="forecast"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}ze("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?Qo(this._hass,this.config):this.writtenNote,n=t?Jo(t,this.config):null;if(!t||n===null)return t;let i=n-Date.now();return i<=0?null:(i<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),i+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let n=t.querySelector(".note-long"),i=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),c=at(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(l&&(l.textContent=c),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,c);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),n&&(n.textContent=o.note),i&&(i.textContent=o.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(n,o.note,s),this.fadeThrough(i,o.line,s)}compactMeta(t,n){return[this.config?.show_location!==!1?t:"",n?`${at(this._hass,"feels_like")} ${n}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,n=M(at(this._hass,"indoors")),i=ge("indoor","indoor-icon");if(t==="icon")return`${i}<span class="awc-visually-hidden">${n} </span>`;let r=`<span class="indoor-label">${n}</span>`;return t==="both"?i+r:r}heroMetaHtml(t,n,i){let r=[];t&&r.push(`<span class="feels-like">${M(at(this._hass,"feels_like"))} ${M(t)}</span>`);let o=[n,i].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}mountDevPanel(){if(!this.config?.dev_mode){this.devPanel?.disconnect(),this.devPanel=void 0;return}let t=window.AnimatedWeatherCardDevPanel;if(t){this.devPanel??(this.devPanel=new t(this)),this.devPanel.mount();return}ze("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevPanel).then(()=>{this.isConnected&&this.mountDevPanel()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`))}attachEventListeners(){this.mountDevPanel(),this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(mi(t,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),gn(t,this.actionsConfig(),"group")),!this.isInitializing){let n=window.setTimeout(()=>{this.initializeAnimations(),this.config?.dev_mode&&!this.currentDevCondition&&(this.currentDevCondition="sunny")},100);this.pendingTimeouts.push(n)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),zn(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),Nn(this),this.flyHeldPlanes()),this.devPanel?.updatePauseButton()}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return et(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let n=this.config,i=this.querySelector(".animated-weather-card");if(!i)return;this.clearAnimations();let r;if(n.dev_mode)r=this.currentDevCondition||"sunny";else{if(!this.hass||!n.entity)return;let m=this.hass.states[n.entity];if(!m)return;r=m.state.toLowerCase()}let o=In(r,n.dev_mode??!1,n.sunrise_hour,n.sunset_hour,this._hass?.config?.time_zone,{clock:!!n.enable_day_night_cycle,night:this.skyIsNight()}),s=(n.color_palette||"default")==="theme"?"theme-colors":"",l=i.classList.contains("loading"),c=(...m)=>{i.className=["animated-weather-card",o,...m,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{i.classList.remove("no-transitions"),i.classList.add("transitions-enabled")}))},d=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(n.animate===!1||d||!this.weatherShown()){let m=o==="clear-night"&&this.surface!=="forecast";c(n.animate===!1?"static":"",m?"individual-stars-active":"");let u=i.querySelector(".animation-layer");m&&u&&kr(u,Ar(et(n).cloudCount,i.clientWidth),{moon:!0,still:!0,words:cn(i)}),this.currentWeatherClass=o;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=o,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(o)),this.startPlanes()}},n.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),gr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let n=this.querySelector(".animated-weather-card"),i=this.querySelector(".animation-layer");i&&(sn(this),i.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),i.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),n&&(Un(n),vo(n));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),fr(this.pendingTimeouts)}set hass(t){this.homeHass=t,t=this.placeView.see(t);let n=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!n){this.render(),this.initializeAnimations();return}if(Re(n)!==Re(t)){this.render(),this.initializeAnimations();return}if(this.config.dev_mode||!this.config.entity)return;let i=n.states[this.config.entity],r=t.states[this.config.entity];if(!i||!r){this.render(),this.initializeAnimations();return}if(i.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=c=>c==null?"__missing__":String(c),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name"];for(let c of l)if(s(i.attributes[c])!==s(r.attributes[c])){o=!0;break}if(this.config.note_entity&&n.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let c=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.uv_entity,this.config.rain_entity,this.config.rain_rate_entity,this.config.sun_entity];for(let d of c){if(!d)continue;let m=n.states[d]?.state,u=t.states[d]?.state;if(m!==u){o=!0;break}}}if(o)this._updateDataInPlace();else{let c=this.config.sun_entity||"sun.sun";n.states[c]!==t.states[c]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass&&!this.config.dev_mode)return;let t;try{t=Br(this._hass,this.config,this.currentDevCondition)}catch{return}let{temperature:n,weatherCondition:i,humidity:r,windSpeed:o,windSpeedValue:s,windBearing:l,pressure:c,pressureValue:d,feelsLike:m,indoorTemperature:u,indoorHumidity:p,uv:g,sun:h}=t;this.currentWindSpeedValue=s;let f=!!this.extras?.away(),y=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,w=y&&this.extras?.conditionText(y)||i,_=(x,T)=>{x&&x.textContent!==T&&(x.textContent=T)};if(!f){this.fadeThrough(this.querySelector(".temperature-value"),n),this.fadeThrough(this.querySelector(".weather-desc"),w);let x=(A,C)=>{_(this.querySelector(`.weather-attributes .attribute[data-kind="${A}"] .attribute-text`),C)};f||(x("humidity",r),x("wind",o),x("pressure",c),this.setUv(g),this.setRain()),f||this.syncValueIcon("wind","wind-bearing-arrow",typeof l=="number"?{icon:"mdi:navigation",transform:`rotate(${l+180}deg)`,label:gs(l)}:null);let T=this.updatePressureTrend(d);if(this.syncValueIcon("pressure","pressure-trend",T?{icon:ys(T),label:`Pressure ${T}`,className:T}:null),h){let A=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),C=A?.querySelector(".attribute-text"),S=un(fe(h.aboveHorizon?h.sunset:h.sunrise,this._hass),"awc-ampm");C&&C.innerHTML!==S&&(C.innerHTML=S),_(A?.querySelector(".attribute-label > span")??null,at(this._hass,h.aboveHorizon?"sunset":"sunrise")),ns(A?.querySelector(".attribute-icon"),ws(h.aboveHorizon))}}let b=this.querySelector(".compact-meta .awc-meta-text");b&&_(b,this.compactMeta(t.location,m)),_(this.querySelector(".location .awc-place"),t.location);let v=this.querySelector(".hero-meta");if(v){let x=this.heroMetaHtml(m,u,p),T=v.querySelector(".awc-line");Array.from(v.children).filter(C=>C!==T).map(C=>C.outerHTML).join("")!==x&&(v.innerHTML=x,T&&v.prepend(T))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}setUv(t){let n=this.querySelector('.weather-attributes .attribute[data-kind="uv"]');if(!n||!this.config)return;let i=Ir(this._hass,this.config,t),r=n.querySelector(".attribute-text");r&&r.textContent!==i.text&&(r.textContent=i.text),i.level?n.dataset.level=i.level:delete n.dataset.level}setRain(){let t=this.querySelector('.weather-attributes .attribute[data-kind="rain"]');if(!t||!this.config)return;let n=Gr(this._hass,this.config),i=t.querySelector(".attribute-text"),r=n?.text??"--";i&&i.textContent!==r&&(i.textContent=r);let o=t.querySelector(".attribute-label > span"),s=di(this._hass,!!n?.now);o&&o.textContent!==s&&(o.textContent=s)}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,n,i){let r=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!r)return;let o=r.querySelector(`.${n}`);if(!i){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[n,i.className].filter(Boolean).join(" "),o.getAttribute("icon")!==i.icon&&o.setAttribute("icon",i.icon),o.setAttribute("aria-label",i.label),o.style.transform=i.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let n=Array.from(t.querySelectorAll(".note-long, .note-short")).map(u=>{let p=u.textContent??"",g=document.createElement("span");g.className="note-typed";let h=document.createElement("span");return h.className="note-untyped",h.textContent=p,u.replaceChildren(g,h),{span:u,text:p,typed:g,rest:h}}),i=Math.max(0,...n.map(u=>u.text.length)),r=Math.min(Ad,Math.max(Cd,i*Td)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),c=0,d={text:n.map(u=>u.text).join(""),finish:()=>{s(c);for(let u of n)u.span.textContent=u.text;this.noteTyping===d&&(this.noteTyping=void 0)}},m=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let p of n){let g=Math.round(u*p.text.length);p.typed.textContent=p.text.slice(0,g),p.rest.textContent=p.text.slice(g)}u<1?c=o(m):d.finish()};this.noteTyping=d,c=o(m)}fadeThrough(t,n,i){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===n)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=n,i?.();return}if(this.heroTextPending.set(t,n),r!==void 0)return;let s=()=>{let c=this.heroTextPending.get(t);this.heroTextPending.delete(t),c!==void 0&&(t.textContent=c),i?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:Ed,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Md,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.config.dev_mode)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){ze("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}let n=new t(this,{intensity:1,scale:1,devMode:this.config.dev_mode||!1},this.config);this.planes=n,n.start().then(()=>{this.animationsPaused?n.pause():this.planes===n&&this.flyHeldPlanes()}).catch(i=>{console.error("Failed to start plane fly-overs:",i),this.planes===n&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(n=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",n)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let n=!this.flightTracker.seeded,i=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(Pr(this._hass,this.config.flights_entity),i);r.length&&(n&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let t=this.heldPlanes;if(!t||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let n=(Pr(this._hass,this.config?.flights_entity)??[]).filter(i=>!i.onGround&&t.has(i.id));n.length&&this.flyPlanes(n)}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride)?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),Mr(this),window.removeEventListener(Ie,this.onNeedle),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.devPanel?.disconnect(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),fr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new si({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let n=t.attributes?.elevation;return Zn(typeof n=="number"?n:Number(n),!!t.attributes?.rising,t.state!=="below_horizon")}skyIsNight(){if(!(!(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let n=this.currentSkyPhase();t.dataset.phase!==n&&(t.dataset.phase=n),this.applyMoon(t)}applyMoon(t){let n=t.querySelector(".animation-layer");if(!n)return;let i=this.config?.moon_entity,r=is(new Date,i?this._hass?.states[i]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(n.dataset.moon===s)return;n.dataset.moon=s;let l=rs(r,o);n.style.setProperty("--awc-moon-mask",l.mask),n.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let t=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(t)?t:void 0}applySizeState(){let t=this.querySelector(".animated-weather-card"),n=t?.querySelector(".weather-info");if(!t||!n)return;cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>$o(t));let i=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",t.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let h=t.dataset.metrics;t.dataset.metrics="row";let f=Array.from(r.children),y=parseFloat(getComputedStyle(r).columnGap)||0,w=f.reduce((v,x)=>v+x.getBoundingClientRect().width,0)+y*Math.max(0,f.length-1),_=r.clientWidth-w,b=_<-.5||h==="grid"&&_<Pd;t.dataset.metrics=b?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),c=()=>n.scrollHeight>n.clientHeight+1||!o&&!!i&&i.scrollHeight>i.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,m=!!l&&!l.hidden?Ld:_s.map(h=>[h,void 0]),u=([h,f])=>{t.dataset.height=h,f?t.dataset.note=f:delete t.dataset.note},p=this.extras,g=p?.levels()??[];if(!p||!g.length){for(let h of m)if(u(h),!c())break;p?.fitted();return}for(let h=0;h<g.length;h++){p.setLevel(g[h]);let f=h===g.length-1;for(let y of m){if(!f&&!["regular","close","compact"].includes(y[0]))break;if(u(y),!c()&&(f||p.levelOk(c))){p.fitted();return}}}p.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let t=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast&&!this.config.dev_mode?($e(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+t:4+t}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),this.config?.show_forecast&&(t+=3),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await yn("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",wi);var Qr=class extends wi{constructor(){super(),this.surface="forecast"}setConfig(e){if(!e.entity)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(e)}gridRows(){if(this.config?.compact)return 2;let e=this.config?.show_hours!==!1&&$e(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),t=Math.max(0,Math.min(10,this.config?.forecast_days??7));return e?t<=3?5:7:Math.max(3,Math.ceil((58+t*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(e,t=[],n=[]){let i=[...t,...n,...Object.keys(e?.states??{})];return Ge(i.find(r=>r.startsWith("weather."))??hr.entity,e)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await yn("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",Qr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Ge(e,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Ge(e,a),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Ge(e,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Ge(e,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=Le("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${ao} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${$t(Pt(Oe))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
