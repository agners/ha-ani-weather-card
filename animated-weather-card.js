"use strict";(()=>{function Ot(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Tr(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},We={duration:.5,overwrite:!1,delay:0},fn,tt,I,St=1e8,z=1/St,an=Math.PI*2,To=an/4,Co=0,Cr=Math.sqrt,Ao=Math.cos,ko=Math.sin,Q=function(e){return typeof e=="string"},Y=function(e){return typeof e=="function"},Dt=function(e){return typeof e=="number"},ui=function(e){return typeof e>"u"},Et=function(e){return typeof e=="object"},ut=function(e){return e!==!1},gn=function(){return typeof window<"u"},ni=function(e){return Y(e)||Q(e)},Ar=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nt=Array.isArray,Eo=/random\([^)]+\)/g,Mo=/,\s*/g,gr=/(?:-?\.?\d|\.)+/gi,yn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,te=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zi=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wn=/[+-]=-?[.\d]+/,Po=/[^,'"\[\]\s]+/gi,Oo=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,B,At,on,_n,wt={},si={},kr,Er=function(e){return(si=ce(e,wt))&&rt},mi=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Re=function(e,t){return!t&&console.warn(e)},Mr=function(e,t){return e&&(wt[e]=t)&&si&&(si[e]=t)||wt},Ne=function(){return 0},Lo={suppressEvents:!0,isStart:!0,kill:!1},ri={suppressEvents:!0,kill:!1},Do={suppressEvents:!0},bn={},zt=[],sn={},Pr,ct={},Qi={},yr=30,ai=[],vn="",xn=function(e){var t=e[0],i,n;if(Et(t)||Y(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=ai.length;n--&&!ai[n].targetTest(t););i=ai[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new An(e[n],i)))||e.splice(n,1);return e},$t=function(e){return e._gsap||xn(Tt(e))[0]._gsap},Sn=function(e,t,i){return(i=e[t])&&Y(i)?e[t]():ui(i)&&e.getAttribute&&e.getAttribute(t)||i},at=function(e,t){return(e=e.split(",")).forEach(t)||e},U=function(e){return Math.round(e*1e5)/1e5||0},G=function(e){return Math.round(e*1e7)/1e7||0},ee=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Fo=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},li=function(){var e=zt.length,t=zt.slice(0),i,n;for(sn={},zt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Tn=function(e){return!!(e._initted||e._startAt||e.add)},Or=function(e,t,i,n){zt.length&&!tt&&li(),e.render(t,i,n||!!(tt&&t<0&&Tn(e))),zt.length&&!tt&&li()},Lr=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Po).length<2?t:Q(e)?e.trim():e},Dr=function(e){return e},_t=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Wo=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ce=function(e,t){for(var i in t)e[i]=t[i];return e},wr=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Et(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},di=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Le=function(e){var t=e.parent||B,i=e.keyframes?Wo(nt(e.keyframes)):_t;if(ut(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Ro=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Fr=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},pi=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},It=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zt=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},No=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ln=function(e,t,i,n){return e._startAt&&(tt?e._startAt.revert(ri):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Ho=function o(e){return!e||e._ts&&o(e.parent)},_r=function(e){return e._repeat?he(e._tTime,e=e.duration()+e._rDelay)*e:0},he=function(e,t){var i=Math.floor(e=G(e/t));return e&&i===e?i-1:i},ci=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fi=function(e){return e._end=G(e._start+(e._tDur/Math.abs(e._ts||e._rts||z)||0))},gi=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=G(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fi(e),i._dirty||Zt(i,e)),e},Wr=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ci(e.rawTime(),t),(!t._dur||$e(0,t.totalDuration(),i)-t._tTime>z)&&t.render(i,!0)),Zt(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-z}},kt=function(e,t,i,n){return t.parent&&It(t),t._start=G((Dt(i)?i:i||e!==B?xt(e,i,t):e._time)+t._delay),t._end=G(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fr(e,t,"_first","_last",e._sort?"_start":0),dn(t)||(e._recent=t),n||Wr(e,t),e._ts<0&&gi(e,e._tTime),e},Rr=function(e,t){return(wt.ScrollTrigger||mi("scrollTrigger",t))&&wt.ScrollTrigger.create(t,e)},Nr=function(e,t,i,n,r){if(Mn(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!tt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pr!==ht.frame)return zt.push(e),e._lazy=[r,n],1},zo=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},dn=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$o=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&zo(e)&&!(!e._initted&&dn(e))||(e._ts<0||e._dp._ts<0)&&!dn(e))?0:1,s=e._rDelay,l=0,d,c,m;if(s&&e._repeat&&(l=$e(0,e._tDur,t),c=he(l,s),e._yoyo&&c&1&&(a=1-a),c!==he(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||tt||n||e._zTime===z||!t&&e._zTime){if(!e._initted&&Nr(e,t,n,i,l))return;for(m=e._zTime,e._zTime=t||(i?z:0),i||(i=t&&!m),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,d=e._pt;d;)d.r(a,d.d),d=d._next;t<0&&ln(e,t,i,!0),e._onUpdate&&!i&&yt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&It(e,1),!i&&!tt&&(yt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Io=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ue=function(e,t,i,n){var r=e._repeat,a=G(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:G(a*(r+1)+e._rDelay*r):a,s>0&&!n&&gi(e,e._tTime=e._tDur*s),e.parent&&fi(e),i||Zt(e.parent,e),e},br=function(e){return e instanceof it?Zt(e):ue(e,e._dur)},Go={_start:0,endTime:Ne,totalDuration:Ne},xt=function o(e,t,i){var n=e.labels,r=e._recent||Go,a=e.duration()>=St?r.endTime(!1):e._dur,s,l,d;return Q(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),d=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),d&&i&&(l=l/100*(nt(i)?i[0]:i).totalDuration()),s>1?o(e,t.substr(0,s-1),i)+l:a+l)):t==null?a:+t},De=function(e,t,i){var n=Dt(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],s,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(s=a,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ut(l.vars.inherit)&&l.parent;a.immediateRender=ut(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new K(t[0],a,t[r+1])},Gt=function(e,t){return e||e===0?t(e):t},$e=function(e,t,i){return i<e?e:i>t?t:i},et=function(e,t){return!Q(e)||!(t=Oo.exec(e))?"":t[1]},Bo=function(e,t,i){return Gt(i,function(n){return $e(e,t,n)})},cn=[].slice,Hr=function(e,t){return e&&Et(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Et(e[0]))&&!e.nodeType&&e!==At},Vo=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Q(n)&&!t||Hr(n,1)?(r=i).push.apply(r,Tt(n)):i.push(n)})||i},Tt=function(e,t,i){return I&&!t&&I.selector?I.selector(e):Q(e)&&!i&&(on||!me())?cn.call((t||_n).querySelectorAll(e),0):nt(e)?Vo(e,i):Hr(e)?cn.call(e,0):e?[e]:[]},hn=function(e){return e=Tt(e)[0]||Re("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Tt(t,i.querySelectorAll?i:i===e?Re("Invalid scope")||_n.createElement("div"):e)}},zr=function(e){return e.sort(function(){return .5-Math.random()})},$r=function(e){if(Y(e))return e;var t=Et(e)?e:{each:e},i=Qt(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},s=n>0&&n<1,l=isNaN(n)||s,d=t.axis,c=n,m=n;return Q(n)?c=m={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],m=n[1]),function(u,p,g){var h=(g||t).length,f=a[h],y,w,v,_,b,C,S,k,T;if(!f){if(T=t.grid==="auto"?0:(t.grid||[1,St])[1],!T){for(S=-St;S<(S=g[T++].getBoundingClientRect().left)&&T<h;);T<h&&T--}for(f=a[h]=[],y=l?Math.min(T,h)*c-.5:n%T,w=T===St?0:l?h*m/T-.5:n/T|0,S=0,k=St,C=0;C<h;C++)v=C%T-y,_=w-(C/T|0),f[C]=b=d?Math.abs(d==="y"?_:v):Cr(v*v+_*_),b>S&&(S=b),b<k&&(k=b);n==="random"&&zr(f),f.max=S-k,f.min=k,f.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(T>h?h-1:d?d==="y"?h/T:T:Math.max(T,h/T))||0)*(n==="edges"?-1:1),f.b=h<0?r-h:r,f.u=et(t.amount||t.each)||0,i=i&&h<0?ns(i):i}return h=(f[u]-f.min)/f.max||0,G(f.b+(i?i(h):h)*f.v)+f.u}},un=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=G(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Dt(i)?0:et(i))}},Ir=function(e,t){var i=nt(e),n,r;return!i&&Et(e)&&(n=i=e.radius||St,e.values?(e=Tt(e.values),(r=!Dt(e[0]))&&(n*=n)):e=un(e.increment)),Gt(t,i?Y(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),d=St,c=0,m=e.length,u,p;m--;)r?(u=e[m].x-s,p=e[m].y-l,u=u*u+p*p):u=Math.abs(e[m]-s),u<d&&(d=u,c=m);return c=!n||d<=n?e[c]:a,r||c===a||Dt(a)?c:c+et(a)}:un(e))},Gr=function(e,t,i,n){return Gt(nt(e)?!t:i===!0?!!(i=0):!n,function(){return nt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},qo=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Yo=function(e,t){return function(i){return e(parseFloat(i))+(t||et(i))}},Uo=function(e,t,i){return Vr(e,t,0,1,i)},Br=function(e,t,i){return Gt(i,function(n){return e[~~t(n)]})},Ko=function o(e,t,i){var n=t-e;return nt(e)?Br(e,o(0,e.length),t):Gt(i,function(r){return(n+(r-e)%n)%n+e})},jo=function o(e,t,i){var n=t-e,r=n*2;return nt(e)?Br(e,o(0,e.length-1),t):Gt(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},pe=function(e){return e.replace(Eo,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Mo);return Gr(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Vr=function(e,t,i,n,r){var a=t-e,s=n-i;return Gt(r,function(l){return i+((l-e)/a*s||0)})},Xo=function o(e,t,i,n){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Q(e),s={},l,d,c,m,u;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(nt(e)&&!nt(t)){for(c=[],m=e.length,u=m-2,d=1;d<m;d++)c.push(o(e[d-1],e[d]));m--,r=function(g){g*=m;var h=Math.min(u,~~g);return c[h](g-h)},i=t}else n||(e=ce(nt(e)?[]:{},e));if(!c){for(l in t)kn.call(s,e,l,"get",t[l]);r=function(g){return Ln(g,s)||(a?e.p:e)}}}return Gt(i,r)},vr=function(e,t,i){var n=e.labels,r=St,a,s,l;for(a in n)s=n[a]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},yt=function(e,t,i){var n=e.vars,r=n[t],a=I,s=e._ctx,l,d,c;if(r)return l=n[t+"Params"],d=n.callbackScope||e,i&&zt.length&&li(),s&&(I=s),c=l?r.apply(d,l):r.call(d),I=a,c},Pe=function(e){return It(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tt),e.progress()<1&&yt(e,"onInterrupt"),e},de,qr=[],Yr=function(e){if(e)if(e=!e.name&&e.default||e,gn()||e.headless){var t=e.name,i=Y(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Ne,render:Ln,add:kn,kill:ms,modifier:us,rawVars:0},a={targetTest:0,get:0,getSetter:yi,aliases:{},register:0};if(me(),e!==n){if(ct[t])return;_t(n,_t(di(e,r),a)),ce(n.prototype,ce(r,di(e,a))),ct[n.prop=t]=n,e.targetTest&&(ai.push(n),bn[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mr(t,n),e.register&&e.register(rt,n,ot)}else qr.push(e)},H=255,Oe={aqua:[0,H,H],lime:[0,H,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,H],navy:[0,0,128],white:[H,H,H],olive:[128,128,0],yellow:[H,H,0],orange:[H,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[H,0,0],pink:[H,192,203],cyan:[0,H,H],transparent:[H,H,H,0]},Ji=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*H+.5|0},Ur=function(e,t,i){var n=e?Dt(e)?[e>>16,e>>8&H,e&H]:0:Oe.black,r,a,s,l,d,c,m,u,p,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oe[e])n=Oe[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&H,n&H,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&H,e&H]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(gr),!t)l=+n[0]%360/360,d=+n[1]/100,c=+n[2]/100,a=c<=.5?c*(d+1):c+d-c*d,r=c*2-a,n.length>3&&(n[3]*=1),n[0]=Ji(l+1/3,r,a),n[1]=Ji(l,r,a),n[2]=Ji(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(yn),i&&n.length<4&&(n[3]=1),n}else n=e.match(gr)||Oe.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/H,a=n[1]/H,s=n[2]/H,m=Math.max(r,a,s),u=Math.min(r,a,s),c=(m+u)/2,m===u?l=d=0:(p=m-u,d=c>.5?p/(2-m-u):p/(m+u),l=m===r?(a-s)/p+(a<s?6:0):m===a?(s-r)/p+2:(r-a)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(d*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},Kr=function(e){var t=[],i=[],n=-1;return e.split(Lt).forEach(function(r){var a=r.match(te)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},xr=function(e,t,i){var n="",r=(e+n).match(Lt),a=t?"hsla(":"rgba(",s=0,l,d,c,m;if(!r)return e;if(r=r.map(function(u){return(u=Ur(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(c=Kr(e),l=i.c,l.join(n)!==c.c.join(n)))for(d=e.replace(Lt,"1").split(te),m=d.length-1;s<m;s++)n+=d[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!d)for(d=e.split(Lt),m=d.length-1;s<m;s++)n+=d[s]+r[s];return n+d[m]},Lt=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oe)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),Zo=/hsl[a]?\(/,Cn=function(e){var t=e.join(" "),i;if(Lt.lastIndex=0,Lt.test(t))return i=Zo.test(t),e[1]=xr(e[1],i),e[0]=xr(e[0],i,Kr(e[1])),!0},He,ht=(function(){var o=Date.now,e=500,t=33,i=o(),n=i,r=1e3/240,a=r,s=[],l,d,c,m,u,p,g=function h(f){var y=o()-n,w=f===!0,v,_,b,C;if((y>e||y<0)&&(i+=y-t),n+=y,b=n-i,v=b-a,(v>0||w)&&(C=++m.frame,u=b-m.time*1e3,m.time=b=b/1e3,a+=v+(v>=r?4:r-v),_=1),w||(l=d(h)),_)for(p=0;p<s.length;p++)s[p](b,u,C,f)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return u/(1e3/(f||60))},wake:function(){kr&&(!on&&gn()&&(At=on=window,_n=At.document||{},wt.gsap=rt,(At.gsapVersions||(At.gsapVersions=[])).push(rt.version),Er(si||At.GreenSockGlobals||!At.gsap&&At||{}),qr.forEach(Yr)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),d=c||function(f){return setTimeout(f,a-m.time*1e3+1|0)},He=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),He=0,d=Ne},lagSmoothing:function(f,y){e=f||1/0,t=Math.min(y||33,e)},fps:function(f){r=1e3/(f||240),a=m.time*1e3+r},add:function(f,y,w){var v=y?function(_,b,C,S){f(_,b,C,S),m.remove(v)}:f;return m.remove(f),s[w?"unshift":"push"](v),me(),v},remove:function(f,y){~(y=s.indexOf(f))&&s.splice(y,1)&&p>=y&&p--},_listeners:s},m})(),me=function(){return!He&&ht.wake()},D={},Qo=/^[\d.\-M][\d.\-,\s]/,Jo=/["']/g,ts=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,s,l,d;r<a;r++)l=i[r],s=r!==a-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),t[n]=isNaN(d)?d.replace(Jo,"").trim():+d,n=l.substr(s+1).trim();return t},es=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},is=function(e){var t=(e+"").split("("),i=D[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ts(t[1])]:es(e).split(",").map(Lr)):D._CE&&Qo.test(e)?D._CE("",e):i},ns=function(e){return function(t){return 1-e(1-t)}},Qt=function(e,t){return e&&(Y(e)?e:D[e]||is(e))||t},ie=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return at(e,function(s){D[s]=wt[s]=r,D[a=s.toLowerCase()]=i;for(var l in r)D[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=D[s+"."+l]=r[l]}),r},jr=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tn=function o(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/an*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*ko((c-a)*r)+1},l=e==="out"?s:e==="in"?function(d){return 1-s(1-d)}:jr(s);return r=an/r,l.config=function(d,c){return o(e,d,c)},l},en=function o(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:jr(i);return n.config=function(r){return o(e,r)},n};at("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ie(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});D.Linear.easeNone=D.none=D.Linear.easeIn;ie("Elastic",tn("in"),tn("out"),tn());(function(o,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?o*s*s:s<i?o*Math.pow(s-1.5/e,2)+.75:s<n?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};ie("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ie("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ie("Circ",function(o){return-(Cr(1-o*o)-1)});ie("Sine",function(o){return o===1?1:-Ao(o*To)+1});ie("Back",en("in"),en("out"),en());D.SteppedEase=D.steps=wt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-z;return function(s){return((n*$e(0,a,s)|0)+r)*i}}};We.ease=D["quad.out"];at("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return vn+=o+","+o+"Params,"});var An=function(e,t){this.id=Co++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sn,this.set=t?t.getSetter:yi},ze=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ue(this,+t.duration,1,1),this.data=t.data,I&&(this._ctx=I,I.data.push(this)),He||ht.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ue(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(me(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gi(this,i),!r._dp||r.parent||Wr(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&kt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===z||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Or(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_r(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_r(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?he(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-z?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?ci(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-z?0:this._rts,this.totalTime($e(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),fi(this),No(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(me(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==z&&(this._tTime-=z)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=G(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&kt(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ut(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ci(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Do);var n=tt;return tt=i,Tn(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),tt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,br(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,br(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(xt(this,i),ut(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ut(n)),this._dur||(this._zTime=-z),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-z:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-z,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-z)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var s=Y(i)?i:Dr,l=function(){var c=n.then;n.then=null,r&&r(),Y(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),a(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Pe(this)},o})();_t(ze.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-z,_prom:0,_ps:!1,_rts:1});var it=(function(o){Tr(e,o);function e(i,n){var r;return i===void 0&&(i={}),r=o.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ut(i.sortChildren),B&&kt(i.parent||B,Ot(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Rr(Ot(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return De(0,arguments,this),this},t.from=function(n,r,a){return De(1,arguments,this),this},t.fromTo=function(n,r,a,s){return De(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Le(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new K(n,r,xt(this,a),1),this},t.call=function(n,r,a){return kt(this,K.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,s,l,d,c){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=d,a.onCompleteParams=c,a.parent=this,new K(n,a,xt(this,l)),this},t.staggerFrom=function(n,r,a,s,l,d,c){return a.runBackwards=1,Le(a).immediateRender=ut(a.immediateRender),this.staggerTo(n,r,a,s,l,d,c)},t.staggerFromTo=function(n,r,a,s,l,d,c,m){return s.startAt=a,Le(s).immediateRender=ut(s.immediateRender),this.staggerTo(n,r,s,l,d,c,m)},t.render=function(n,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=n<=0?0:G(n),m=this._zTime<0!=n<0&&(this._initted||!d),u,p,g,h,f,y,w,v,_,b,C,S;if(this!==B&&c>l&&n>=0&&(c=l),c!==this._tTime||a||m){if(s!==this._time&&d&&(c+=this._time-s,n+=this._time-s),u=c,_=this._start,v=this._ts,y=!v,m&&(d||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,f=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,r,a);if(u=G(c%f),c===l?(h=this._repeat,u=d):(b=G(c/f),h=~~b,h&&h===b&&(u=d,h--),u>d&&(u=d)),b=he(this._tTime,f),!s&&this._tTime&&b!==h&&this._tTime-b*f-this._dur<=0&&(b=h),C&&h&1&&(u=d-u,S=1),h!==b&&!this._lock){var k=C&&b&1,T=k===(C&&h&1);if(h<b&&(k=!k),s=k?0:c%d?d:c,this._lock=1,this.render(s||(S?0:G(h*f)),r,!d)._lock=0,this._tTime=c,!r&&this.parent&&yt(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=h),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,T&&(this._lock=2,s=k?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Io(this,G(s),G(u)),w&&(c-=u-(u=w._start))),this._tTime=c,this._time=u,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&d&&!r&&!b&&(yt(this,"onStart"),this._tTime!==c))return this;if(u>=s&&n>=0)for(p=this._first;p;){if(g=p._next,(p._act||u>=p._start)&&p._ts&&w!==p){if(p.parent!==this)return this.render(n,r,a);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,a),u!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=-z);break}}p=g}else{p=this._last;for(var x=n<0?n:u;p;){if(g=p._prev,(p._act||x<=p._end)&&p._ts&&w!==p){if(p.parent!==this)return this.render(n,r,a);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,r,a||tt&&Tn(p)),u!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=x?-z:z);break}}p=g}}if(w&&!r&&(this.pause(),w.render(u>=s?0:-z)._zTime=u>=s?1:-1,this._ts))return this._start=_,fi(this),this.render(n,r,a);this._onUpdate&&!r&&yt(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(_===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&It(this,1),!r&&!(n<0&&!s)&&(c||s||!l)&&(yt(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Dt(r)||(r=xt(this,r,n)),!(n instanceof ze)){if(nt(n))return n.forEach(function(s){return a.add(s,r)}),this;if(Q(n))return this.addLabel(n,r);if(Y(n))n=K.delayedCall(0,n);else return this}return this!==n?kt(this,n,r):this},t.getChildren=function(n,r,a,s){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-St);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof K?r&&l.push(d):(a&&l.push(d),n&&l.push.apply(l,d.getChildren(!0,r,a)))),d=d._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Q(n)?this.removeLabel(n):Y(n)?this.killTweensOf(n):(n.parent===this&&pi(this,n),n===this._recent&&(this._recent=this._last),Zt(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=G(ht.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=xt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var s=K.delayedCall(0,r||Ne,a);return s.data="isPause",this._hasPause=1,kt(this,s,xt(this,n))},t.removePause=function(n){var r=this._first;for(n=xt(this,n);r;)r._start===n&&r.data==="isPause"&&It(r),r=r._next},t.killTweensOf=function(n,r,a){for(var s=this.getTweensOf(n,a),l=s.length;l--;)Ht!==s[l]&&s[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],s=Tt(n),l=this._first,d=Dt(r),c;l;)l instanceof K?Fo(l._targets,s)&&(d?(!Ht||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(c=l.getTweensOf(s,r)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,s=xt(a,n),l=r,d=l.startAt,c=l.onStart,m=l.onStartParams,u=l.immediateRender,p,g=K.to(a,_t({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(d&&"time"in d?d.time:a._time))/a.timeScale())||z,onStart:function(){if(a.pause(),!p){var f=r.duration||Math.abs((s-(d&&"time"in d?d.time:a._time))/a.timeScale());g._dur!==f&&ue(g,f,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,m||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,_t({startAt:{time:xt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),vr(this,xt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),vr(this,xt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+z)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var s=this._first,l=this.labels,d;for(n=G(n);s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(r)for(d in l)l[d]>=a&&(l[d]+=n);return Zt(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return o.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Zt(this)},t.totalDuration=function(n){var r=0,a=this,s=a._last,l=St,d,c,m;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(m=a.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,kt(a,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!m&&!a._dp||m&&m.smoothChildTiming)&&(a._start+=G(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=d;ue(a,a===B&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(B._ts&&(Or(B,ci(n,B)),Pr=ht.frame),ht.frame>=yr){yr+=mt.autoSleep||120;var r=B._first;if((!r||!r._ts)&&mt.autoSleep&&ht._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ht.sleep()}}},e})(ze);_t(it.prototype,{_lock:0,_hasPause:0,_forcing:0});var rs=function(e,t,i,n,r,a,s){var l=new ot(this._pt,e,t,0,1,On,null,r),d=0,c=0,m,u,p,g,h,f,y,w;for(l.b=i,l.e=n,i+="",n+="",(y=~n.indexOf("random("))&&(n=pe(n)),a&&(w=[i,n],a(w,e,t),i=w[0],n=w[1]),u=i.match(Zi)||[];m=Zi.exec(n);)g=m[0],h=n.substring(d,m.index),p?p=(p+1)%5:h.substr(-5)==="rgba("&&(p=1),g!==u[c++]&&(f=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:h||c===1?h:",",s:f,c:g.charAt(1)==="="?ee(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},d=Zi.lastIndex);return l.c=d<n.length?n.substring(d,n.length):"",l.fp=s,(wn.test(n)||y)&&(l.e=0),this._pt=l,l},kn=function(e,t,i,n,r,a,s,l,d,c){Y(n)&&(n=n(r||0,e,a));var m=e[t],u=i!=="get"?i:Y(m)?d?e[t.indexOf("set")||!Y(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():m,p=Y(m)?d?ds:Qr:Pn,g;if(Q(n)&&(~n.indexOf("random(")&&(n=pe(n)),n.charAt(1)==="="&&(g=ee(u,n)+(et(u)||0),(g||g===0)&&(n=g))),!c||u!==n||mn)return!isNaN(u*n)&&n!==""?(g=new ot(this._pt,e,t,+u||0,n-(u||0),typeof m=="boolean"?hs:Jr,0,p),d&&(g.fp=d),s&&g.modifier(s,this,e),this._pt=g):(!m&&!(t in e)&&mi(t,n),rs.call(this,e,t,u,n,p,l||mt.stringFilter,d))},as=function(e,t,i,n,r){if(Y(e)&&(e=Fe(e,r,t,i,n)),!Et(e)||e.style&&e.nodeType||nt(e)||Ar(e))return Q(e)?Fe(e,r,t,i,n):e;var a={},s;for(s in e)a[s]=Fe(e[s],r,t,i,n);return a},En=function(e,t,i,n,r,a){var s,l,d,c;if(ct[e]&&(s=new ct[e]).init(r,s.rawVars?t[e]:as(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new ot(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==de))for(d=i._ptLookup[i._targets.indexOf(r)],c=s._props.length;c--;)d[s._props[c]]=l;return s},Ht,mn,Mn=function o(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,s=n.immediateRender,l=n.lazy,d=n.onUpdate,c=n.runBackwards,m=n.yoyoEase,u=n.keyframes,p=n.autoRevert,g=e._dur,h=e._startAt,f=e._targets,y=e.parent,w=y&&y.data==="nested"?y.vars.targets:f,v=e._overwrite==="auto"&&!fn,_=e.timeline,b=n.easeReverse||m,C,S,k,T,x,E,P,O,L,R,W,N,q;if(_&&(!u||!r)&&(r="none"),e._ease=Qt(r,We.ease),e._rEase=b&&(Qt(b)||e._ease),e._from=!_&&!!n.runBackwards,e._from&&(e.ratio=1),!_||u&&!n.stagger){if(O=f[0]?$t(f[0]).harness:0,N=O&&n[O.prop],C=di(n,bn),h&&(h._zTime<0&&h.progress(1),t<0&&c&&s&&!p?h.render(-1,!0):h.revert(c&&g?ri:Lo),h._lazy=0),a){if(It(e._startAt=K.set(f,_t({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!h&&ut(l),startAt:null,delay:0,onUpdate:d&&function(){return yt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tt||!s&&!p)&&e._startAt.revert(ri),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!h){if(t&&(s=!1),k=_t({overwrite:!1,data:"isFromStart",lazy:s&&!h&&ut(l),immediateRender:s,stagger:0,parent:y},C),N&&(k[O.prop]=N),It(e._startAt=K.set(f,k)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tt?e._startAt.revert(ri):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,z,z);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ut(l)||l&&!g,S=0;S<f.length;S++){if(x=f[S],P=x._gsap||xn(f)[S]._gsap,e._ptLookup[S]=R={},sn[P.id]&&zt.length&&li(),W=w===f?S:w.indexOf(x),O&&(L=new O).init(x,N||C,e,W,w)!==!1&&(e._pt=T=new ot(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(lt){R[lt]=T}),L.priority&&(E=1)),!O||N)for(k in C)ct[k]&&(L=En(k,C,e,W,x,w))?L.priority&&(E=1):R[k]=T=kn.call(e,x,k,"get",C[k],W,w,0,n.stringFilter);e._op&&e._op[S]&&e.kill(x,e._op[S]),v&&e._pt&&(Ht=e,B.killTweensOf(x,R,e.globalTime(t)),q=!e.parent,Ht=0),e._pt&&l&&(sn[P.id]=1)}E&&Dn(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!q,u&&t<=0&&_.render(St,!0,!0)},os=function(e,t,i,n,r,a,s,l){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,m,u,p;if(!d)for(d=e._ptCache[t]=[],u=e._ptLookup,p=e._targets.length;p--;){if(c=u[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return mn=1,e.vars[t]="+=0",Mn(e,s),mn=0,l?Re(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(p=d.length;p--;)m=d[p],c=m._pt||m,c.s=(n||n===0)&&!r?n:c.s+(n||0)+a*c.c,c.c=i-c.s,m.e&&(m.e=U(i)+et(m.e)),m.b&&(m.b=c.s+et(m.b))},ss=function(e,t){var i=e[0]?$t(e[0]).harness:0,n=i&&i.aliases,r,a,s,l;if(!n)return t;r=ce({},t);for(a in n)if(a in r)for(l=n[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},ls=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,s;if(nt(t))s=i[e]||(i[e]=[]),t.forEach(function(l,d){return s.push({t:d/(t.length-1)*100,v:l,e:r})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Fe=function(e,t,i,n,r){return Y(e)?e.call(t,i,n,r):Q(e)&&~e.indexOf("random(")?pe(e):e},Xr=vn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zr={};at(Xr+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Zr[o]=1});var K=(function(o){Tr(e,o);function e(i,n,r,a){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=o.call(this,a?n:Le(n))||this;var l=s.vars,d=l.duration,c=l.delay,m=l.immediateRender,u=l.stagger,p=l.overwrite,g=l.keyframes,h=l.defaults,f=l.scrollTrigger,y=n.parent||B,w=(nt(i)||Ar(i)?Dt(i[0]):"length"in n)?[i]:Tt(i),v,_,b,C,S,k,T,x;if(s._targets=w.length?xn(w):Re("GSAP target "+i+" not found. https://gsap.com",!mt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||u||ni(d)||ni(c)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(v=s.timeline=new it({data:"nested",defaults:h||{},targets:y&&y.data==="nested"?y.vars.targets:w}),v.kill(),v.parent=v._dp=Ot(s),v._start=0,u||ni(d)||ni(c)){if(C=w.length,T=u&&$r(u),Et(u))for(S in u)~Xr.indexOf(S)&&(x||(x={}),x[S]=u[S]);for(_=0;_<C;_++)b=di(n,Zr),b.stagger=0,E&&(b.easeReverse=E),x&&ce(b,x),k=w[_],b.duration=+Fe(d,Ot(s),_,k,w),b.delay=(+Fe(c,Ot(s),_,k,w)||0)-s._delay,!u&&C===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),v.to(k,b,T?T(_,k,w):0),v._ease=D.none;v.duration()?d=c=0:s.timeline=0}else if(g){Le(_t(v.vars.defaults,{ease:"none"})),v._ease=Qt(g.ease||n.ease||"none");var P=0,O,L,R;if(nt(g))g.forEach(function(W){return v.to(w,W,">")}),v.duration();else{b={};for(S in g)S==="ease"||S==="easeEach"||ls(S,g[S],b,g.easeEach);for(S in b)for(O=b[S].sort(function(W,N){return W.t-N.t}),P=0,_=0;_<O.length;_++)L=O[_],R={ease:L.e,duration:(L.t-(_?O[_-1].t:0))/100*d},R[S]=L.v,v.to(w,R,P),P+=R.duration;v.duration()<d&&v.to({},{duration:d-v.duration()})}}d||s.duration(d=v.duration())}else s.timeline=0;return p===!0&&!fn&&(Ht=Ot(s),B.killTweensOf(w),Ht=0),kt(y,Ot(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(m||!d&&!g&&s._start===G(y._time)&&ut(m)&&Ho(Ot(s))&&y.data!=="nested")&&(s._tTime=-z,s.render(Math.max(0,-c)||0)),f&&Rr(Ot(s),f),s}var t=e.prototype;return t.render=function(n,r,a){var s=this._time,l=this._tDur,d=this._dur,c=n<0,m=n>l-z&&!c?l:n<z?0:n,u,p,g,h,f,y,w,v;if(!d)$o(this,n,r,a);else if(m!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=m,v=this.timeline,this._repeat){if(h=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(h*100+n,r,a);if(u=G(m%h),m===l?(g=this._repeat,u=d):(f=G(m/h),g=~~f,g&&g===f?(u=d,g--):u>d&&(u=d)),y=this._yoyo&&g&1,y&&(u=d-u),f=he(this._tTime,h),u===s&&!a&&this._initted&&g===f)return this._tTime=m,this;g!==f&&this.vars.repeatRefresh&&!y&&!this._lock&&u!==h&&this._initted&&(this._lock=a=1,this.render(G(h*g),!0).invalidate()._lock=0)}if(!this._initted){if(Nr(this,c?n:u,a,r,m))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&g!==f))return this;if(d!==this._dur)return this.render(n,r,a)}if(this._rEase){var _=u<s;if(_!==this._inv){var b=_?s:d-s;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(_?-1:1)/b:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/d);if(this._from&&(this.ratio=w=1-w),this._tTime=m,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&m&&!r&&!f&&(yt(this,"onStart"),this._tTime!==m))return this;for(p=this._pt;p;)p.r(w,p.d),p=p._next;v&&v.render(n<0?n:v._dur*v._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&ln(this,n,r,a),yt(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&yt(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(c&&!this._onUpdate&&ln(this,n,!0,!0),(n||!d)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&It(this,1),!r&&!(c&&!s)&&(m||s||y)&&(yt(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),o.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,s,l){He||ht.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mn(this,d),c=this._ease(d/this._dur),os(this,n,r,a,s,c,d,l)?this.resetTo(n,r,a,s,1):(gi(this,0),this.parent||Fr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Pe(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ht&&Ht.vars.overwrite!==!0)._first||Pe(this),this.parent&&a!==this.timeline.totalDuration()&&ue(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=n?Tt(n):s,d=this._ptLookup,c=this._pt,m,u,p,g,h,f,y;if((!r||r==="all")&&Ro(s,l))return r==="all"&&(this._pt=0),Pe(this);for(m=this._op=this._op||[],r!=="all"&&(Q(r)&&(h={},at(r,function(w){return h[w]=1}),r=h),r=ss(s,r)),y=s.length;y--;)if(~l.indexOf(s[y])){u=d[y],r==="all"?(m[y]=r,g=u,p={}):(p=m[y]=m[y]||{},g=r);for(h in g)f=u&&u[h],f&&((!("kill"in f.d)||f.d.kill(h)===!0)&&pi(this,f,"_pt"),delete u[h]),p!=="all"&&(p[h]=1)}return this._initted&&!this._pt&&c&&Pe(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return De(1,arguments)},e.delayedCall=function(n,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(n,r,a){return De(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return B.killTweensOf(n,r,a)},e})(ze);_t(K.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});at("staggerTo,staggerFrom,staggerFromTo",function(o){K[o]=function(){var e=new it,t=cn.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Pn=function(e,t,i){return e[t]=i},Qr=function(e,t,i){return e[t](i)},ds=function(e,t,i,n){return e[t](n.fp,i)},cs=function(e,t,i){return e.setAttribute(t,i)},yi=function(e,t){return Y(e[t])?Qr:ui(e[t])&&e.setAttribute?cs:Pn},Jr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hs=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},On=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Ln=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},us=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},ms=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?pi(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ps=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Dn=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},ot=(function(){function o(t,i,n,r,a,s,l,d,c){this.t=i,this.s=r,this.c=a,this.p=n,this.r=s||Jr,this.d=l||this,this.set=d||Pn,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=ps,this.m=i,this.mt=r,this.tween=n},o})();at(vn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return bn[o]=1});wt.TweenMax=wt.TweenLite=K;wt.TimelineLite=wt.TimelineMax=it;B=new it({sortChildren:!1,defaults:We,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=Cn;var Jt=[],oi={},fs=[],Sr=0,gs=0,nn=function(e){return(oi[e]||fs).map(function(t){return t()})},pn=function(){var e=Date.now(),t=[];e-Sr>2&&(nn("matchMediaInit"),Jt.forEach(function(i){var n=i.queries,r=i.conditions,a,s,l,d;for(s in n)a=At.matchMedia(n[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,d=1);d&&(i.revert(),l&&t.push(i))}),nn("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Sr=e,nn("matchMedia"))},ta=(function(){function o(t,i){this.selector=i&&hn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gs++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,n,r){Y(i)&&(r=n,n=i,i=Y);var a=this,s=function(){var d=I,c=a.selector,m;return d&&d!==a&&d.data.push(a),r&&(a.selector=hn(r)),I=a,m=n.apply(a,arguments),Y(m)&&a._r.push(m),I=d,a.selector=c,a.isReverted=!1,m};return a.last=s,i===Y?s(a,function(l){return a.add(null,l)}):i?a[i]=s:s},e.ignore=function(i){var n=I;I=null,i(this),I=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof o?i.push.apply(i,n.getTweens()):n instanceof K&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),l=r.data.length,d;l--;)d=r.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,m){return m.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)d=r.data[l],d instanceof it?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof K)&&d.revert&&d.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var a=Jt.length;a--;)Jt[a].id===this.id&&Jt.splice(a,1)},e.revert=function(i){this.kill(i||{})},o})(),ys=(function(){function o(t){this.contexts=[],this.scope=t,I&&I.data.push(this)}var e=o.prototype;return e.add=function(i,n,r){Et(i)||(i={matches:i});var a=new ta(0,r||this.scope),s=a.conditions={},l,d,c;I&&!a.selector&&(a.selector=I.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(d in i)d==="all"?c=1:(l=At.matchMedia(i[d]),l&&(Jt.indexOf(a)<0&&Jt.push(a),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(pn):l.addEventListener("change",pn)));return c&&n(a,function(m){return a.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},o})(),hi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Yr(n)})},timeline:function(e){return new it(e)},getTweensOf:function(e,t){return B.getTweensOf(e,t)},getProperty:function(e,t,i,n){Q(e)&&(e=Tt(e)[0]);var r=$t(e||{}).get,a=i?Dr:Lr;return i==="native"&&(i=""),e&&(t?a((ct[t]&&ct[t].get||r)(e,t,i,n)):function(s,l,d){return a((ct[s]&&ct[s].get||r)(e,s,l,d))})},quickSetter:function(e,t,i){if(e=Tt(e),e.length>1){var n=e.map(function(c){return rt.quickSetter(c,t,i)}),r=n.length;return function(c){for(var m=r;m--;)n[m](c)}}e=e[0]||{};var a=ct[t],s=$t(e),l=s.harness&&(s.harness.aliases||{})[t]||t,d=a?function(c){var m=new a;de._pt=0,m.init(e,i?c+i:c,de,0,[e]),m.render(1,m),de._pt&&Ln(1,de)}:s.set(e,l);return a?d:function(c){return d(e,l,i?c+i:c,s,1)}},quickTo:function(e,t,i){var n,r=rt.to(e,_t((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,d,c){return r.resetTo(t,l,d,c)};return a.tween=r,a},isTweening:function(e){return B.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qt(e.ease,We.ease)),wr(We,e||{})},config:function(e){return wr(mt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!ct[s]&&!wt[s]&&Re(t+" effect requires "+s+" plugin.")}),Qi[t]=function(s,l,d){return i(Tt(s),_t(l||{},r),d)},a&&(it.prototype[t]=function(s,l,d){return this.add(Qi[t](s,Et(l)?l:(d=l)&&{},this),d)})},registerEase:function(e,t){D[e]=Qt(t)},parseEase:function(e,t){return arguments.length?Qt(e,t):D},getById:function(e){return B.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new it(e),n,r;for(i.smoothChildTiming=ut(e.smoothChildTiming),B.remove(i),i._dp=0,i._time=i._tTime=B._time,n=B._first;n;)r=n._next,(t||!(!n._dur&&n instanceof K&&n.vars.onComplete===n._targets[0]))&&kt(i,n,n._start-n._delay),n=r;return kt(B,i,0),i},context:function(e,t){return e?new ta(e,t):I},matchMedia:function(e){return new ys(e)},matchMediaRefresh:function(){return Jt.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||pn()},addEventListener:function(e,t){var i=oi[e]||(oi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=oi[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Ko,wrapYoyo:jo,distribute:$r,random:Gr,snap:Ir,normalize:Uo,getUnit:et,clamp:Bo,splitColor:Ur,toArray:Tt,selector:hn,mapRange:Vr,pipe:qo,unitize:Yo,interpolate:Xo,shuffle:zr},install:Er,effects:Qi,ticker:ht,updateRoot:it.updateRoot,plugins:ct,globalTimeline:B,core:{PropTween:ot,globals:Mr,Tween:K,Timeline:it,Animation:ze,getCache:$t,_removeLinkedListItem:pi,reverting:function(){return tt},context:function(e){return e&&I&&(I.data.push(e),e._ctx=I),I},suppressOverwrites:function(e){return fn=e}}};at("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return hi[o]=K[o]});ht.add(it.updateRoot);de=hi.to({},{duration:0});var ws=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},_s=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=ws(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},rn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(s){var l,d;if(Q(r)&&(l={},at(r,function(c){return l[c]=1}),r=l),t){l={};for(d in r)l[d]=t(r[d]);r=l}_s(s,r)}}}},rt=hi.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,s,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)tt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},rn("roundProps",un),rn("modifiers"),rn("snap",Ir))||hi;K.version=it.version=rt.version="3.15.0";kr=1;gn()&&me();var bs=D.Power0,vs=D.Power1,xs=D.Power2,Ss=D.Power3,Ts=D.Power4,Cs=D.Linear,As=D.Quad,ks=D.Cubic,Es=D.Quart,Ms=D.Quint,Ps=D.Strong,Os=D.Elastic,Ls=D.Back,Ds=D.SteppedEase,Fs=D.Bounce,Ws=D.Sine,Rs=D.Expo,Ns=D.Circ;var ea,Bt,ge,zn,oe,Hs,ia,$n,zs=function(){return typeof window<"u"},Wt={},ae=180/Math.PI,ye=Math.PI/180,fe=Math.atan2,na=1e8,In=/([A-Z])/g,$s=/(left|right|width|margin|padding|x)/i,Is=/[\s,\(]\S/,Mt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gs=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bs=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vs=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qs=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ha=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ua=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ys=function(e,t,i){return e.style[t]=i},Us=function(e,t,i){return e.style.setProperty(t,i)},Ks=function(e,t,i){return e._gsap[t]=i},js=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Xs=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},Zs=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},V="transform",pt=V+"Origin",Qs=function o(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Wt&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Mt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Ft(n,s)}):this.tfm[e]=a.x?a[e]:Ft(n,e),e===pt&&(this.tfm.zOrigin=a.zOrigin);else return Mt.transform.split(",").forEach(function(s){return o.call(i,s,t)});if(this.props.indexOf(V)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pt,t,"")),e=V}(r||t)&&this.props.push(e,t,r[e])},ma=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Js=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(In,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=$n(),(!r||!r.isStart)&&!i[V]&&(ma(i),n.zOrigin&&i[pt]&&(i[pt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},pa=function(e,t){var i={target:e,props:[],revert:Js,save:Qs};return e._gsap||rt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},fa,Rn=function(e,t){var i=Bt.createElementNS?Bt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bt.createElement(e);return i&&i.style?i:Bt.createElement(e)},bt=function o(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(In,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&o(e,we(t)||t,1)||""},ra="O,Moz,ms,Ms,Webkit".split(","),we=function(e,t,i){var n=t||oe,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ra[a]+e in r););return a<0?null:(a===3?"ms":a>=0?ra[a]:"")+e},Nn=function(){zs()&&window.document&&(ea=window,Bt=ea.document,ge=Bt.documentElement,oe=Rn("div")||{style:{}},Hs=Rn("div"),V=we(V),pt=V+"Origin",oe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fa=!!we("perspective"),$n=rt.core.reverting,zn=1)},aa=function(e){var t=e.ownerSVGElement,i=Rn("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),ge.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),ge.removeChild(i),r},oa=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ga=function(e){var t,i;try{t=e.getBBox()}catch{t=aa(e),i=1}return t&&(t.width||t.height)||i||(t=aa(e)),t&&!t.width&&!t.x&&!t.y?{x:+oa(e,["x","cx","x1"])||0,y:+oa(e,["y","cy","y1"])||0,width:0,height:0}:t},ya=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ga(e))},qt=function(e,t){if(t){var i=e.style,n;t in Wt&&t!==pt&&(t=V),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(In,"-$1").toLowerCase())):i.removeAttribute(t)}},Vt=function(e,t,i,n,r,a){var s=new ot(e._pt,t,i,0,1,a?ua:ha);return e._pt=s,s.b=n,s.e=r,e._props.push(i),s},sa={deg:1,rad:1,turn:1},tl={grid:1,flex:1},Yt=function o(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",s=oe.style,l=$s.test(t),d=e.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),m=100,u=n==="px",p=n==="%",g,h,f,y;if(n===a||!r||sa[n]||sa[a])return r;if(a!=="px"&&!u&&(r=o(e,t,i,"px")),y=e.getCTM&&ya(e),(p||a==="%")&&(Wt[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[c],U(p?r/g*m:r/100*g);if(s[l?"width":"height"]=m+(u?a:n),h=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Bt||!h.appendChild)&&(h=Bt.body),f=h._gsap,f&&p&&f.width&&l&&f.time===ht.time&&!f.uncache)return U(r/f.width*m);if(p&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=m+n,g=e[c],w?e.style[t]=w:qt(e,t)}else(p||a==="%")&&!tl[bt(h,"display")]&&(s.position=bt(e,"position")),h===e&&(s.position="static"),h.appendChild(oe),g=oe[c],h.removeChild(oe),s.position="absolute";return l&&p&&(f=$t(h),f.time=ht.time,f.width=h[c]),U(u?g*r/m:g&&r?m/g*r:0)},Ft=function(e,t,i,n){var r;return zn||Nn(),t in Mt&&t!=="transform"&&(t=Mt[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wt[t]&&t!=="transform"?(r=Be(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:_i(bt(e,pt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=wi[t]&&wi[t](e,t,i)||bt(e,t)||Sn(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Yt(e,t,r,i)+i:r},el=function(e,t,i,n){if(!i||i==="none"){var r=we(t,e,1),a=r&&bt(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=bt(e,"borderTopColor"))}var s=new ot(this._pt,e.style,t,0,1,On),l=0,d=0,c,m,u,p,g,h,f,y,w,v,_,b;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=bt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(h=e.style[t],e.style[t]=n,n=bt(e,t)||n,h?e.style[t]=h:qt(e,t)),c=[i,n],Cn(c),i=c[0],n=c[1],u=i.match(te)||[],b=n.match(te)||[],b.length){for(;m=te.exec(n);)f=m[0],w=n.substring(l,m.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),f!==(h=u[d++]||"")&&(p=parseFloat(h)||0,_=h.substr((p+"").length),f.charAt(1)==="="&&(f=ee(p,f)+_),y=parseFloat(f),v=f.substr((y+"").length),l=te.lastIndex-v.length,v||(v=v||mt.units[t]||_,l===n.length&&(n+=v,s.e+=v)),_!==v&&(p=Yt(e,t,h,v)||0),s._pt={_next:s._pt,p:w||d===1?w:",",s:p,c:y-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?ua:ha;return wn.test(n)&&(s.e=0),this._pt=s,s},la={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},il=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=la[i]||i,t[1]=la[n]||n,t.join(" ")},nl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,s,l,d;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),d=r.length;--d>-1;)s=r[d],Wt[s]&&(l=1,s=s==="transformOrigin"?pt:V),qt(i,s);l&&(qt(i,V),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Be(i,1),a.uncache=1,ma(n)))}},wi={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new ot(e._pt,t,i,0,0,nl);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Ge=[1,0,0,1,0,0],wa={},_a=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},da=function(e){var t=bt(e,V);return _a(t)?Ge:t.substr(7).match(yn).map(U)},Gn=function(e,t){var i=e._gsap||$t(e),n=e.style,r=da(e),a,s,l,d;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ge:r):(r===Ge&&!e.offsetParent&&e!==ge&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,s=e.nextElementSibling,ge.appendChild(e)),r=da(e),l?n.display=l:qt(e,"display"),d&&(s?a.insertBefore(e,s):a?a.appendChild(e):ge.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hn=function(e,t,i,n,r,a){var s=e._gsap,l=r||Gn(e,!0),d=s.xOrigin||0,c=s.yOrigin||0,m=s.xOffset||0,u=s.yOffset||0,p=l[0],g=l[1],h=l[2],f=l[3],y=l[4],w=l[5],v=t.split(" "),_=parseFloat(v[0])||0,b=parseFloat(v[1])||0,C,S,k,T;i?l!==Ge&&(S=p*f-g*h)&&(k=_*(f/S)+b*(-h/S)+(h*w-f*y)/S,T=_*(-g/S)+b*(p/S)-(p*w-g*y)/S,_=k,b=T):(C=ga(e),_=C.x+(~v[0].indexOf("%")?_/100*C.width:_),b=C.y+(~(v[1]||v[0]).indexOf("%")?b/100*C.height:b)),n||n!==!1&&s.smooth?(y=_-d,w=b-c,s.xOffset=m+(y*p+w*h)-y,s.yOffset=u+(y*g+w*f)-w):s.xOffset=s.yOffset=0,s.xOrigin=_,s.yOrigin=b,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[pt]="0px 0px",a&&(Vt(a,s,"xOrigin",d,_),Vt(a,s,"yOrigin",c,b),Vt(a,s,"xOffset",m,s.xOffset),Vt(a,s,"yOffset",u,s.yOffset)),e.setAttribute("data-svg-origin",_+" "+b)},Be=function(e,t){var i=e._gsap||new An(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",s="deg",l=getComputedStyle(e),d=bt(e,pt)||"0",c,m,u,p,g,h,f,y,w,v,_,b,C,S,k,T,x,E,P,O,L,R,W,N,q,lt,$,Z,j,dt,gt,vt;return c=m=u=h=f=y=w=v=_=0,p=g=1,i.svg=!!(e.getCTM&&ya(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[V]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[V]!=="none"?l[V]:"")),n.scale=n.rotate=n.translate="none"),S=Gn(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),d=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),Hn(e,N||d,!!N||i.originIsAbsolute,i.smooth!==!1,S)),b=i.xOrigin||0,C=i.yOrigin||0,S!==Ge&&(E=S[0],P=S[1],O=S[2],L=S[3],c=R=S[4],m=W=S[5],S.length===6?(p=Math.sqrt(E*E+P*P),g=Math.sqrt(L*L+O*O),h=E||P?fe(P,E)*ae:0,w=O||L?fe(O,L)*ae+h:0,w&&(g*=Math.abs(Math.cos(w*ye))),i.svg&&(c-=b-(b*E+C*O),m-=C-(b*P+C*L))):(vt=S[6],dt=S[7],$=S[8],Z=S[9],j=S[10],gt=S[11],c=S[12],m=S[13],u=S[14],k=fe(vt,j),f=k*ae,k&&(T=Math.cos(-k),x=Math.sin(-k),N=R*T+$*x,q=W*T+Z*x,lt=vt*T+j*x,$=R*-x+$*T,Z=W*-x+Z*T,j=vt*-x+j*T,gt=dt*-x+gt*T,R=N,W=q,vt=lt),k=fe(-O,j),y=k*ae,k&&(T=Math.cos(-k),x=Math.sin(-k),N=E*T-$*x,q=P*T-Z*x,lt=O*T-j*x,gt=L*x+gt*T,E=N,P=q,O=lt),k=fe(P,E),h=k*ae,k&&(T=Math.cos(k),x=Math.sin(k),N=E*T+P*x,q=R*T+W*x,P=P*T-E*x,W=W*T-R*x,E=N,R=q),f&&Math.abs(f)+Math.abs(h)>359.9&&(f=h=0,y=180-y),p=U(Math.sqrt(E*E+P*P+O*O)),g=U(Math.sqrt(W*W+vt*vt)),k=fe(R,W),w=Math.abs(k)>2e-4?k*ae:0,_=gt?1/(gt<0?-gt:gt):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_a(bt(e,V)),N&&e.setAttribute("transform",N))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(p*=-1,w+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=u+a,i.scaleX=U(p),i.scaleY=U(g),i.rotation=U(h)+s,i.rotationX=U(f)+s,i.rotationY=U(y)+s,i.skewX=w+s,i.skewY=v+s,i.transformPerspective=_+a,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(n[pt]=_i(d)),i.xOffset=i.yOffset=0,i.force3D=mt.force3D,i.renderTransform=i.svg?al:fa?ba:rl,i.uncache=0,i},_i=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fn=function(e,t,i){var n=et(t);return U(parseFloat(t)+parseFloat(Yt(e,"x",i+"px",n)))+n},rl=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ba(e,t)},ne="0deg",Ie="0px",re=") ",ba=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,l=i.z,d=i.rotation,c=i.rotationY,m=i.rotationX,u=i.skewX,p=i.skewY,g=i.scaleX,h=i.scaleY,f=i.transformPerspective,y=i.force3D,w=i.target,v=i.zOrigin,_="",b=y==="auto"&&e&&e!==1||y===!0;if(v&&(m!==ne||c!==ne)){var C=parseFloat(c)*ye,S=Math.sin(C),k=Math.cos(C),T;C=parseFloat(m)*ye,T=Math.cos(C),a=Fn(w,a,S*T*-v),s=Fn(w,s,-Math.sin(C)*-v),l=Fn(w,l,k*T*-v+v)}f!==Ie&&(_+="perspective("+f+re),(n||r)&&(_+="translate("+n+"%, "+r+"%) "),(b||a!==Ie||s!==Ie||l!==Ie)&&(_+=l!==Ie||b?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+re),d!==ne&&(_+="rotate("+d+re),c!==ne&&(_+="rotateY("+c+re),m!==ne&&(_+="rotateX("+m+re),(u!==ne||p!==ne)&&(_+="skew("+u+", "+p+re),(g!==1||h!==1)&&(_+="scale("+g+", "+h+re),w.style[V]=_||"translate(0, 0)"},al=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,l=i.rotation,d=i.skewX,c=i.skewY,m=i.scaleX,u=i.scaleY,p=i.target,g=i.xOrigin,h=i.yOrigin,f=i.xOffset,y=i.yOffset,w=i.forceCSS,v=parseFloat(a),_=parseFloat(s),b,C,S,k,T;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=ye,d*=ye,b=Math.cos(l)*m,C=Math.sin(l)*m,S=Math.sin(l-d)*-u,k=Math.cos(l-d)*u,d&&(c*=ye,T=Math.tan(d-c),T=Math.sqrt(1+T*T),S*=T,k*=T,c&&(T=Math.tan(c),T=Math.sqrt(1+T*T),b*=T,C*=T)),b=U(b),C=U(C),S=U(S),k=U(k)):(b=m,k=u,C=S=0),(v&&!~(a+"").indexOf("px")||_&&!~(s+"").indexOf("px"))&&(v=Yt(p,"x",a,"px"),_=Yt(p,"y",s,"px")),(g||h||f||y)&&(v=U(v+g-(g*b+h*S)+f),_=U(_+h-(g*C+h*k)+y)),(n||r)&&(T=p.getBBox(),v=U(v+n/100*T.width),_=U(_+r/100*T.height)),T="matrix("+b+","+C+","+S+","+k+","+v+","+_+")",p.setAttribute("transform",T),w&&(p.style[V]=T)},ol=function(e,t,i,n,r){var a=360,s=Q(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ae:1),d=l-n,c=n+d+"deg",m,u;return s&&(m=r.split("_")[1],m==="short"&&(d%=a,d!==d%(a/2)&&(d+=d<0?a:-a)),m==="cw"&&d<0?d=(d+a*na)%a-~~(d/a)*a:m==="ccw"&&d>0&&(d=(d-a*na)%a-~~(d/a)*a)),e._pt=u=new ot(e._pt,t,i,n,d,Gs),u.e=c,u.u="deg",e._props.push(i),u},ca=function(e,t){for(var i in t)e[i]=t[i];return e},sl=function(e,t,i){var n=ca({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,l,d,c,m,u,p,g;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),a[V]=t,s=Be(i,1),qt(i,V),i.setAttribute("transform",d)):(d=getComputedStyle(i)[V],a[V]=t,s=Be(i,1),a[V]=d);for(l in Wt)d=n[l],c=s[l],d!==c&&r.indexOf(l)<0&&(p=et(d),g=et(c),m=p!==g?Yt(i,l,d,g):parseFloat(d),u=parseFloat(c),e._pt=new ot(e._pt,s,l,m,u-m,Wn),e._pt.u=g||0,e._props.push(l));ca(s,n)};at("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(s){return e<2?o+s:"border"+s+o});wi[e>1?"border"+o:o]=function(s,l,d,c,m){var u,p;if(arguments.length<4)return u=a.map(function(g){return Ft(s,g,d)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(c+"").split(" "),p={},a.forEach(function(g,h){return p[g]=u[h]=u[h]||u[(h-1)/2|0]}),s.init(l,p,m)}});var Bn={name:"css",register:Nn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,s=e.style,l=i.vars.startAt,d,c,m,u,p,g,h,f,y,w,v,_,b,C,S,k,T;zn||Nn(),this.styles=this.styles||pa(e),k=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(c=t[h],!(ct[h]&&En(h,t,i,n,e,r)))){if(p=typeof c,g=wi[h],p==="function"&&(c=c.call(i,n,e,r),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=pe(c)),g)g(this,e,h,c,i)&&(S=1);else if(h.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(h)+"").trim(),c+="",Lt.lastIndex=0,Lt.test(d)||(f=et(d),y=et(c),y?f!==y&&(d=Yt(e,h,d,y)+y):f&&(c+=f)),this.add(s,"setProperty",d,c,n,r,0,0,h),a.push(h),k.push(h,0,s[h]);else if(p!=="undefined"){if(l&&h in l?(d=typeof l[h]=="function"?l[h].call(i,n,e,r):l[h],Q(d)&&~d.indexOf("random(")&&(d=pe(d)),et(d+"")||d==="auto"||(d+=mt.units[h]||et(Ft(e,h))||""),(d+"").charAt(1)==="="&&(d=Ft(e,h))):d=Ft(e,h),u=parseFloat(d),w=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),m=parseFloat(c),h in Mt&&(h==="autoAlpha"&&(u===1&&Ft(e,"visibility")==="hidden"&&m&&(u=0),k.push("visibility",0,s.visibility),Vt(this,s,"visibility",u?"inherit":"hidden",m?"inherit":"hidden",!m)),h!=="scale"&&h!=="transform"&&(h=Mt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),v=h in Wt,v){if(this.styles.save(h),T=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=bt(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=c,c=bt(e,"perspective"),x?e.style.perspective=x:qt(e,"perspective")}m=parseFloat(c)}if(_||(b=e._gsap,b.renderTransform&&!t.parseTransform||Be(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,_=this._pt=new ot(this._pt,s,V,0,1,b.renderTransform,b,0,-1),_.dep=1),h==="scale")this._pt=new ot(this._pt,b,"scaleY",b.scaleY,(w?ee(b.scaleY,w+m):m)-b.scaleY||0,Wn),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){k.push(pt,0,s[pt]),c=il(c),b.svg?Hn(e,c,0,C,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==b.zOrigin&&Vt(this,b,"zOrigin",b.zOrigin,y),Vt(this,s,h,_i(d),_i(c)));continue}else if(h==="svgOrigin"){Hn(e,c,1,C,0,this);continue}else if(h in wa){ol(this,b,h,u,w?ee(u,w+c):c);continue}else if(h==="smoothOrigin"){Vt(this,b,"smooth",b.smooth,c);continue}else if(h==="force3D"){b[h]=c;continue}else if(h==="transform"){sl(this,c,e);continue}}else h in s||(h=we(h)||h);if(v||(m||m===0)&&(u||u===0)&&!Is.test(c)&&h in s)f=(d+"").substr((u+"").length),m||(m=0),y=et(c)||(h in mt.units?mt.units[h]:f),f!==y&&(u=Yt(e,h,d,y)),this._pt=new ot(this._pt,v?b:s,h,u,(w?ee(u,w+m):m)-u,!v&&(y==="px"||h==="zIndex")&&t.autoRound!==!1?qs:Wn),this._pt.u=y||0,v&&T!==c?(this._pt.b=d,this._pt.e=T,this._pt.r=Vs):f!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=Bs);else if(h in s)el.call(this,e,h,d,w?w+c:c);else if(h in e)this.add(e,h,d||e[h],w?w+c:c,n,r);else if(h!=="parseTransform"){mi(h,c);continue}v||(h in s?k.push(h,0,s[h]):typeof e[h]=="function"?k.push(h,2,e[h]()):k.push(h,1,d||e[h])),a.push(h)}}S&&Dn(this)},render:function(e,t){if(t.tween._time||!$n())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ft,aliases:Mt,getSetter:function(e,t,i){var n=Mt[t];return n&&n.indexOf(",")<0&&(t=n),t in Wt&&t!==pt&&(e._gsap.x||Ft(e,"x"))?i&&ia===i?t==="scale"?js:Ks:(ia=i||{})&&(t==="scale"?Xs:Zs):e.style&&!ui(e.style[t])?Ys:~t.indexOf("-")?Us:yi(e,t)},core:{_removeProperty:qt,_getMatrix:Gn}};rt.utils.checkPrefix=we;rt.core.getStyleSaver=pa;(function(o,e,t,i){var n=at(o+","+e+","+t,function(r){Wt[r]=1});at(e,function(r){mt.units[r]="deg",wa[r]=1}),Mt[n[13]]=o+","+e,at(i,function(r){var a=r.split(":");Mt[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");at("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){mt.units[o]="px"});rt.registerPlugin(Bn);var Vn=rt.registerPlugin(Bn)||rt,Ed=Vn.core.Tween;var va={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},ft={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},qn={sunny:"26",rainy:"18",snowy:"2",stormy:"16",windy:"20",cloudy:"15",foggy:"12","partly-cloudy":"23",pouring:"14","snowy-rainy":"3","clear-night":"8",sleety:"1","snowy-stormy":"0","light-rain":"20","sleety-stormy":"-1"},Yn={sunny:"Sunny",rainy:"Rainy",snowy:"Snowy",stormy:"Thunderstorm",windy:"Windy",cloudy:"Cloudy",foggy:"Foggy","partly-cloudy":"Partly Cloudy",pouring:"Pouring Rain","snowy-rainy":"Mixed Precipitation","clear-night":"Clear Night",sleety:"Sleet","snowy-stormy":"Snowy Thunderstorm","light-rain":"Light Rain","sleety-stormy":"Sleet Storm"};var xa={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},_e={humidity:"65%",windSpeed:"10 km/h",pressure:"1013 hPa",indoorTemperature:"22\xB0",indoorHumidity:"45%"},Sa="1.2.0-trains.2",Ta={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function ll(o){return["sunny","clear-night","partly-cloudy","cloudy","rainy","light-rain","pouring","stormy","snowy","snowy-rainy","snowy-stormy","sleety","sleety-stormy","windy","foggy"].includes(o)}function Ca(o,e=-1/0,t=1/0){return typeof o=="number"&&!isNaN(o)&&o>=e&&o<=t}function qe(o){return typeof o!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(o)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(o)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(o.toLowerCase())}function M(o){return o==null?"":String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function be(o,e){return Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0}function se(o,e,t=0){if(!isFinite(o))return"--";let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(o)}catch{return o.toFixed(t)}}function bi(o,e,t){if(o?.localize)try{let i=o.localize(e);if(i&&i!==e)return i}catch{}return t}function Aa(o,e){if(!isFinite(o))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return o*3.6;case"mph":return o*1.609344;case"ft/s":return o*1.09728;case"kn":case"kt":case"knots":return o*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,o),1.5)*3.6;default:return o}}function A(o,e,...t){o&&console.log(`[AWC Dev] ${e}`,...t)}function J(o,e){let t=o.engine_settings||{},i=(a,s,l,d)=>Ca(a,l,d)?a:s,n=i(t.windSpeed,ft.windSpeed,.1,15),r=n;return Ca(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:r,rainCount:i(t.rainCount,ft.rainCount,.1,10),leafCount:i(t.leafCount,ft.leafCount,.1,10),snowCount:i(t.snowCount,ft.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,ft.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,ft.cloudCount,1,20),splashBounce:i(t.splashBounce,ft.splashBounce,40,120)}}function Un(o){o.forEach(e=>{e!=null&&clearTimeout(e)}),o.length=0}function ka(o){let e=new Set;return o.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function vi(o){window.AnimatedWeatherCardGsap&&ka(o).forEach(e=>e.pause())}function xi(o){window.AnimatedWeatherCardGsap&&ka(o).forEach(e=>e.resume())}function Kn(o){window.AnimatedWeatherCardGsap&&o.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function Si(o,e,t,i,n){if(typeof o!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";if(e&&ll(o))return o;if(e)return console.warn(`Invalid dev mode condition: ${o}, using sunny`),"sunny";let r=o.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){let a=new Date,s;if(n)try{let m=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(a);s=parseInt(m.find(u=>u.type==="hour")?.value||"0",10)}catch{s=a.getHours()}else s=a.getHours();let l=t??6,d=i??20;return(s<l||s>=d)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function Ye(o,e,t){if(typeof o!="string"||!o.trim())return console.warn("Invalid animation type provided"),t||Ve("rain");if(!e||!e.isEnabled())return t||Ve(o);let i=Ta[o];if(!i)return console.warn(`No color scheme found for animation type: ${o}`),t||Ve(o);try{let n=e.getCurrentState(),r=e.getTimeAwareColor(i);return qe(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||Ve(o))}catch(n){return console.error("Error getting time-aware color:",n),t||Ve(o)}}function Ve(o){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[o];return t||(console.warn(`Unknown animation type: ${o}, using white as fallback`),"#FFFFFF")}var Ti=class Ti{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=i,this.state="created",queueMicrotask(()=>A(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){A(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),A(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),A(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{A(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{A(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),A(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,A(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",A(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!Ti.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",A(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],A(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};Ti.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var X=Ti;var Ut=class{constructor(e,t,i){this.layer=e;this.create=t;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let r={el:n};this.items.push(r),t.push(n),this.run(r,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function ve(o,e){return e&&o.progress(Math.random()),o}var dl=420*230;function xe(o,e){return Math.min(3,Math.max(.6,o*e/dl))||1}function F(o,e){return o+Math.random()*(e-o)}var cl={light:10,rain:18,storm:24,pouring:32},hl={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},ul={light:16,rain:24,storm:34,pouring:42},ml=.3,pl=16,fl=8,gl=[10,30],Ea="http://www.w3.org/2000/svg";function yl(o,e,t,i){let n=0,r=0,a=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*o+l*l*t,c=2*(1-l)*l*e+l*l*i;n+=Math.hypot(d-r,c-a),r=d,a=c}return n}function wl(o,e,t,i){return Math.max(4,Math.round(cl[o]*e*xe(t,i)))}var Ci=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},A(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=J(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),a=wl(r,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,d=ul[r],c=r==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=i.splashBounce/ft.splashBounce,this.pool=new Ut(t,()=>{let m=F(1,c),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${m.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${m.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=m.toFixed(2),u},(m,u,p)=>this.fall(m,n,r,d,l,u,p)),this.pool.start(a).forEach(m=>this.addParticle(m)),A(this.config.devMode,`Rain animation started - ${a} drops (${r})`)}fall(t,i,n,r,a,s,l){let d=i.offsetWidth,c=i.offsetHeight,[m,u]=hl[n],p=F(m,u),g=F(6,Math.max(7,d-6)),h=this.rainConfig.splashEnabled&&Math.random()<ml,f=-r,y=h?c-r:a?c+F(60,120):c,w=Math.max(.25,(y-f)/p),v=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,v/2.4)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(_.fromTo(t,{y:f},{y,duration:w,ease:"none"}),h)_.call(()=>this.createSplash(g+v/2,c),[],w),_.to(t,{scaleY:0,duration:r/p,ease:"none"},w);else if(a){let b=(c-r-f)/p;_.to(t,{opacity:0,duration:w-b,ease:"power1.in"},b)}return ve(_,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),A(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%pl;let a=F(.22,.28),s=F(4,10)*this.splashBounce,l=n*F(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+l,duration:a,ease:"power1.out"},0).to(r,{y:i-2-s,duration:a*.45,ease:"power2.out"},0).to(r,{y:i-2,duration:a*.55,ease:"power2.in"},a*.45).to(r,{opacity:0,duration:a*.4,ease:"power1.in"},a*.6)}}}createRebound(t,i){let n=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(Ea,"svg"),r.classList.add("rain-rebound");let h=document.createElementNS(Ea,"path");h.setAttribute("fill","none"),h.style.stroke=this.splashColor,r.appendChild(h),n.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%fl;let a=r.firstChild,[s,l]=gl,d=F(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*F(10,24)*this.splashBounce,m=F(6,18);a.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${m.toFixed(1)}`);let u=yl(c,-2*d,2*c,m),p=Math.min(u*.45,6+d*.3);a.style.strokeDasharray=`${p.toFixed(1)} ${(u+p).toFixed(1)}`;let g=F(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,a]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(a,{strokeDashoffset:p,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?Ye("lightning",t,"var(--weather-storm-rain-color)"):Ye("rain",t,"var(--weather-rain-color)")}};var _l=36,Kt=[2,6],jn=[20,38],Ma=10,bl=.6;function vl(o,e,t){return Math.max(6,Math.round(_l*o*xe(e,t)))}function Zn(o){return Math.min(2.2,Math.max(.3,o/ft.windSpeed))}var Ai=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},A(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=J(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=vl(i.snowCount,n.offsetWidth,n.offsetHeight),a="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Zn(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new Ut(t,()=>this.createFlake(a),(d,c,m)=>this.fall(d,n,l,s,c,m)),this.pool.start(r).forEach(d=>this.addParticle(d)),A(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(t){let i=F(Kt[0],Kt[1]),n=(i-Kt[0])/(Kt[1]-Kt[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=i.toFixed(2),r.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-Ma});let a=window.AnimatedWeatherCardGsap.to(r,{rotation:Ma,duration:F(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return a.progress(Math.random()),this.swings.push(a),r}fall(t,i,n,r,a,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"4"),m=(c-Kt[0])/(Kt[1]-Kt[0]),u=(jn[0]+(jn[1]-jn[0])*m)*F(.9,1.1),p=this.snowConfig.accumulation&&Math.random()<bl,g=-c*2,h=p?d-this.pileHeight()-c:r?d+F(60,120):d+c,f=h-g,y=Math.max(.5,f/u),w=f*F(.04,.13)*n,v=F(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:v,opacity:parseFloat(t.dataset.opacity||"0.7")});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:a});if(_.fromTo(t,{y:g},{y:h,x:v+w,duration:y,ease:"none"}),p)_.call(()=>this.addToAccumulation(),[],y),_.to(t,{opacity:0,duration:.6,ease:"power1.out"},y);else if(r){let b=Math.min(y,(d-g)/u);_.to(t,{opacity:0,duration:Math.max(.1,y-b),ease:"power1.in"},b)}return ve(_,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),A(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),A(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),A(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: ${i}px;
            background: linear-gradient(to top, #ffffff, transparent);
            transform-origin: 50% 100%;
            transform: scaleY(0);
            pointer-events: none;
            z-index: 5;
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let r=Math.min(i,n+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/i,opacity:Math.min(.9,r/i),duration:.3,ease:"power2.out"})}};var xl=30,Pa=[150,230],Sl=.3,ki=6,Ei=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...i},A(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=J(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(xl*i.snowCount*xe(n.offsetWidth,n.offsetHeight))),a=this.cardConfig.spill_particles!==!1,s=Zn(i.windSpeed)*.5;this.pool=new Ut(t,()=>{let l=F(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,n,s,a,d,c)),this.pool.start(r).forEach(l=>this.addParticle(l)),A(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(t,i,n,r,a,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"2"),m=F(Pa[0],Pa[1]),u=Math.random()<Sl,p=-c*2,g=u?d-c:r?d+F(60,120):d+c,h=g-p,f=Math.max(.3,h/m),y=h*F(.03,.08)*n,w=F(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:w,opacity:F(.8,1),rotation:F(0,360)});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:a});if(v.fromTo(t,{y:p},{y:g,x:w+y,duration:f,ease:"none"}),u)v.call(()=>this.addToPile(i),[],f),v.to(t,{opacity:0,duration:.3,ease:"power1.out"},f);else if(r){let _=Math.min(f,(d-p)/m);v.to(t,{opacity:0,duration:Math.max(.1,f-_),ease:"power1.in"},_)}return ve(v,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${ki}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=ki)return;let r=Math.min(ki,n+.4);i.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(i,{scaleY:r/ki,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),A(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Sleet animation resumed")}};var Qn=[90,160];function La(o,e,t,i,n,r=!0){let a=document.createElement("div");a.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),m=c<.25,u=c>.8&&d>100;a.style.position="absolute",a.style.borderRadius="0 100% 0 100%",a.style.transformOrigin="center",a.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let p=(Math.random()*8+6)*t;a.style.width=a.style.height=p+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];a.style.background=g[Math.floor(Math.random()*g.length)];let h=-p-10,f=s+(r?60+Math.random()*80:p+10),y=(Qn[0]+Math.random()*(Qn[1]-Qn[0]))*Se(e.windSpeed)*(m?.6:1),w=(f-h)/y,v=Math.min(w,(s-h)/y),_=u?-(60+Math.random()*80):m?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(a,{x:h,y:d,rotation:Math.random()*360,opacity:0}),o.appendChild(a);let b=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{a.parentNode&&a.parentNode.removeChild(a),n&&n(a)}});return b.to(a,{opacity:.85,duration:.25,ease:"power1.out"},0).to(a,{x:f,duration:w,ease:"none"},0).to(a,{y:d+_,duration:w,ease:m?"sine.in":"sine.inOut"},0).to(a,{rotation:`+=${120+Math.random()*180}`,duration:w,ease:"none"},0),r&&w>v&&b.to(a,{opacity:0,duration:w-v,ease:"power1.in"},v),a}function Da(o,e,t,i,n,r){let a=document.createElement("div");a.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;a.style.position="absolute",a.style.height=(d?2:1)*t+"px",a.style.borderRadius=l?"2px 1px":"1px",a.style.transformOrigin="left center",a.style.zIndex="10";let c=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";a.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let m=Math.max(15,(20+Math.random()*60)*t);a.style.width=m+"px";let u=i.offsetWidth,p=i.offsetHeight,g=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(a,{x:-m,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),o.appendChild(a);let f=(u+m*2)/(Tl*Se(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{a.parentNode&&a.parentNode.removeChild(a),r&&r(a)}}).to(a,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(a,{x:u+m,rotation:l?g>p/2?5:-5:0,duration:f,ease:"none"},0).to(a,{opacity:0,scaleX:.3,duration:Math.min(.5,f*.3)},f-Math.min(.5,f*.3)),a}var Tl=230,Cl=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Se(o){return Math.min(2.2,Math.max(.6,Math.sqrt(o/ft.windSpeed)))}var Al=12;function kl(o){let e=Math.round(70*o),t=Math.round(35*o);return{width:e,height:Math.round(26*o),puffs:[{x:Math.round(9*o),y:Math.round(-22*o),size:Math.round(44*o)},{x:e-Math.round(9*o)-t,y:Math.round(-13*o),size:t}]}}var Fa=o=>o>0?Math.ceil(o*3)+1:0,Oa=new Map;function El(o,e,t,i){let n=[o,e,t,i].join(","),r=Oa.get(n);if(r)return r;let a=Fa(t),s=Math.ceil((o+2*a)*i),l=Math.ceil((e+2*a)*i),d=()=>{let p=document.createElement("canvas");return p.width=s,p.height=l,[p,p.getContext("2d")]},c=null,[m,u]=d();if(u){let[p,g,h]=[a*i,a*i,Math.min(50,o/2,e/2)*i],[f,y]=[p+o*i,g+e*i];if(u.fillStyle="#000",u.beginPath(),u.moveTo(p+h,g),u.arcTo(f,g,f,y,h),u.arcTo(f,y,p,y,h),u.arcTo(p,y,p,g,h),u.arcTo(p,g,f,g,h),u.closePath(),u.fill(),t>0){let[w,v]=d();v&&(v.shadowColor="#000",v.shadowBlur=2*t*i,v.shadowOffsetX=s,v.drawImage(m,-s,0),c=w.toDataURL())}else c=m.toDataURL()}return c&&Oa.set(n,c),c}function Ue(o){o.querySelectorAll(".cloud-track, .cloud-gsap").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function Ml(o){return Math.min(1,Math.max(.5,o/160))||1}function Wa(o,e,t,i,n){let r=i.offsetWidth,a=i.offsetHeight,s=Cl,l=Se(e.windSpeed),d=[],c=t||e.cloudCount,m=Ml(a);return s.forEach((u,p)=>{let g=Math.ceil(p===0||p===1?c*.4:c*.6);for(let h=1;h<=g;h++){let f=document.createElement("div");f.className=`cloud-gsap cloud-gsap-${u.name}-${h}`;let y=e.cloudBaseSize*u.scale,w=1+(h-1)*.15,v=Math.max(.3,Math.min(2.5,y))*w*m,_=kl(v);f.style.position="absolute",f.style.opacity=u.opacity.toString(),f.style.zIndex=(10+p).toString();let b=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][p],C=n?.color_palette==="theme"?0:u.blur,S=[{x:0,y:0,width:_.width,height:_.height},..._.puffs.map($=>({x:$.x,y:$.y,width:$.size,height:$.size}))],k=Math.min(3,Math.max(1,window.devicePixelRatio||1)),T=S.map($=>El($.width,$.height,C,k)),x=T.every(Boolean),E=x?Fa(C):0;if(f.style.width=_.width+"px",f.style.height=_.height+"px",x)f.classList.add("cloud-masked"),S.forEach(($,Z)=>{let j=document.createElement("div");j.style.position="absolute",j.style.left=$.x-E+"px",j.style.top=$.y-E+"px",j.style.width=$.width+2*E+"px",j.style.height=$.height+2*E+"px",j.style.background=b;for(let dt of["-webkit-",""])j.style.setProperty(`${dt}mask-image`,`url("${T[Z]}")`),j.style.setProperty(`${dt}mask-size`,"100% 100%"),j.style.setProperty(`${dt}mask-repeat`,"no-repeat");f.appendChild(j)});else{f.style.borderRadius="50px",f.style.background=b,C>0&&(f.style.filter=`blur(${C}px)`);for(let $ of _.puffs){let Z=document.createElement("div");Z.style.position="absolute",Z.style.left=$.x+"px",Z.style.top=$.y+"px",Z.style.width=$.size+"px",Z.style.height=$.size+"px",Z.style.borderRadius="50px",Z.style.background=b,f.appendChild(Z)}}let P=_.width+2*E,L=[[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][p][h-1]||15+p*10,R=Math.max(150+p*50,P+Al),W=u.speed*l*(.9+Math.random()*.2),N=(r+2*R)/W,q=document.createElement("div");q.className="cloud-track",q.appendChild(f),window.AnimatedWeatherCardGsap.set(f,{opacity:u.opacity}),window.AnimatedWeatherCardGsap.set(q,{xPercent:0,x:-R,y:a*L/100}),o.appendChild(q);let lt=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});lt.fromTo(q,{xPercent:0,x:-R},{xPercent:100,x:R,duration:N,ease:"none"}),lt.progress(Math.random()),d.push(lt)}}),d}function Ra(o){let e=o.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function Na(o,e,t,i,n){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let a=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[t]||l[2],c=n.custom_colors?.fog_color,m=n.color_palette==="default"?qe(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),p=a*d.scale;r.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${p}px;
        height: ${d.height}px;
        opacity: ${d.opacity};
        filter: blur(${d.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let C=0;C<u;C++){let S=document.createElement("div"),k=p/u*(2+Math.random()*1.2),T=d.height*(1.2+Math.random()*1.6),x=p/u*C-k*.3,E=(Math.random()-.5)*(d.height*.5);S.style.cssText=`
            position: absolute;
            left: ${x}px;
            top: ${E}px;
            width: ${k}px;
            height: ${T}px;
            background: radial-gradient(ellipse ${k/2}px ${T/2}px at center, 
                ${m} 0%, 
                ${m} 40%, 
                transparent 70%);
            border-radius: ${k/2}px ${T/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,r.appendChild(S)}o.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),h=15/d.speed,f=Math.max(8,h/g),y=a*d.scale,w=-y,v=a+y;window.AnimatedWeatherCardGsap.set(r,{x:w,opacity:d.opacity});let _=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});_.to(r,{x:v,duration:f,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:w})}});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return b.to(r,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:_,opacity:b}}function Mi(o){o.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Pl=3,Ol=2,Ha=[900,1400],za=[1800,2600],Pi=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...i},A(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(F(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(F(300,900)),A(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=J(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(Pl*i.leafCount));if(this.leaves.size<n){let r=La(this.layer(),i,1,this.card(),a=>this.forget(a,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(F(Ha[0],Ha[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=J(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<Ol){let n=Da(this.layer(),i,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(F(za[0],za[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),A(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),vi(this.layer()),A(this.config.devMode,"Wind animation paused")}async onResume(){xi(this.layer()),this.clearTimers(),this.scheduleLeaf(F(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(F(600,1500)),A(this.config.devMode,"Wind animation resumed")}};var Ke=[6e3,18e3],Ll=[1500,6e3],$a=.16,Oi=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:Ke[0],maxInterval:Ke[1],...i},A(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=Ll;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),A(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,r=i.offsetHeight,a=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(n-60),c=20*a,m=20,u=[d+",0"];for(let f=0;f<m;f++){let y=d+(Math.random()*c-c/2),w=r/m*(f+1);u.push(y+","+w)}l.setAttribute("d","M"+u.join(" L"));let p=this.element.timeOfDayManager,g=Ye("lightning",p,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*a).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let h=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=h,h.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let f=-6*a;h.to(i,{y:f,duration:.06,ease:"power2.out"},$a).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},$a+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),i.style.opacity="0"),A(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),A(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),A(this.config.devMode,"Lightning animation resumed")}};var Dl=["dawn","day","dusk","night"],er=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],Fl={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Ba=(o,e,t)=>Math.min(e,Math.max(o,t)),jt=(o,e,t)=>o+(e-o)*t;function Wl(o,e,t){let i=(e-o+540)%360-180;return(o+i*t+360)%360}function Rt(o,e,t){let i=([h,f,y])=>[h,f*Math.cos(y*Math.PI/180),f*Math.sin(y*Math.PI/180)],[n,r,a]=i(o),[s,l,d]=i(e),c=jt(n,s,t),m=jt(r,l,t),u=jt(a,d,t),p=Math.hypot(m,u),g=p<1e-6?o[2]:(Math.atan2(u,m)*180/Math.PI+360)%360;return[c,p,g]}function Jn([o,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),r=e*Math.sin(i),a=(o+.3963377774*n+.2158037573*r)**3,s=(o-.1055613458*n-.0638541728*r)**3,l=(o-.0894841775*n-1.291485548*r)**3;return[4.0767416621*a-3.3077115913*s+.2309699292*l,-1.2684380046*a+2.6097574011*s-.3413193965*l,-.0041960863*a-.7034186147*s+1.707614701*l]}var Rl=o=>o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055;function Ct(o){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=Jn(o);if(!e(t)){let i=0,n=o[1];for(let r=0;r<24;r++){let a=(i+n)/2;e(Jn([o[0],a,o[2]]))?i=a:n=a}t=Jn([o[0],i,o[2]])}return t.map(i=>Rl(Ba(0,1,i)))}var Va=o=>Math.round(Ba(0,1,o)*255);function Nt(o){return"#"+o.map(e=>Va(e).toString(16).padStart(2,"0")).join("")}function Ia(o,e){return`rgba(${o.map(Va).join(", ")}, ${Number(e.toFixed(3))})`}function tr(o,e){return[.15+(o[0]-.15)*.42,o[1]*jt(.75,.5,e),Wl(o[2],262,.45)]}function Nl(o,e){let t=Fl[o],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:jt(.46,.28,t.overcast)};if(o==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Rt(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:tr(t.top,t.overcast),mid:tr(t.mid,t.overcast),bottom:tr(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:jt(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:Rt(t.top,[t.top[0]*.8,.075,292],.5*i),mid:Rt(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:Rt(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:Rt(t.glow,[.82,.13,58],i),glowAlpha:jt(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Rt(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:Rt(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:Rt(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:Rt(t.glow,[.88,.09,40],i),glowAlpha:jt(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Hl(o){return[.16,Math.min(.04,o[1]*.6),o[2]]}function je(o,e){let t=Nl(o,e);return{top:Nt(Ct(t.top)),mid:Nt(Ct(t.mid)),bottom:Nt(Ct(t.bottom)),glow:Ia(Ct(t.glow),t.glowAlpha),scrim:Ia(Ct(Hl(t.top)),t.scrimAlpha)}}var Te=[.985,.006,250],Li=.8,qa=.55,Ya=.4,Di={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},Ua={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},Ka={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function Ce(o,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(o.rx)} ${t(o.ry)} at ${t(o.cx)} ${t(o.cy)}, ${e}, transparent ${t(o.fade)})`}function ja(){let o=[];for(let e of er)for(let t of Dl){let i=je(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;o.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return o.join(`
`)}function Fi(o,e,t){return o==null||!Number.isFinite(o)?t?"day":"night":o<-6?"night":o<6?e?"dawn":"dusk":"day"}var Xt=3.2,Ae="cubic-bezier(0.37, 0, 0.63, 1)",Xa={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Za=Object.keys(Xa),ir=Za.filter(o=>o.startsWith("--awc-sky-"));function Qa(){return Za.map(o=>`${o} ${Xt}s ${Ae}`).join(`,
            `)}var Ga=!1;function Wi(){if(Ga)return;Ga=!0;let o=globalThis.CSS;if(o?.registerProperty)for(let[e,t]of Object.entries(Xa))try{o.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Ri=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},A(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=J(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");Ue(t);let r=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=Wa(t,i,r,n,this.cardConfig),this.startWindFactor=Se(i.windSpeed),A(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[];let t=this.element.querySelector(this.layerSelector);t&&Ue(t),A(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),A(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),A(this.config.devMode,"Clouds animation resumed")}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=J(this.cardConfig,this.realWindSpeed),i=Se(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:Xt,ease:"sine.inOut",overwrite:!0})})}};var Ni=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...i},A(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=J(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");Mi(n),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let a=Na(t,i,r,n,this.cardConfig);this.fogTimelines.push(a.movement),this.fogTimelines.push(a.opacity)}A(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),A(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),A(this.config.devMode,"Fog animation resumed")}};var zl=1/3,$l=.35,Hi=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...i},A(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=J(this.cardConfig,this.realWindSpeed);this.element.querySelector(".animated-weather-card")?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(s),s.remove()});let r=Math.max(15,Math.round(i.cloudCount*5)),a=document.createElement("div");a.className="stars-field";for(let s=0;s<r;s++){let l=document.createElement("div");l.className="star-gsap";let d=1+Math.random()*3,c=.3+Math.random()*.5;if(l.style.cssText=`
                width: ${d.toFixed(2)}px;
                height: ${d.toFixed(2)}px;
                left: ${(Math.random()*100).toFixed(2)}%;
                top: ${(Math.random()*70).toFixed(2)}%;
                opacity: ${c.toFixed(2)};
            `,Math.random()<zl){let m=3+Math.random()*4;l.classList.add("twinkle"),l.style.setProperty("--star-o",c.toFixed(2)),l.style.setProperty("--star-dim",(c*(1-Math.random()*$l)).toFixed(2)),l.style.animationDuration=`${m.toFixed(2)}s`,l.style.animationDelay=`${(-Math.random()*m).toFixed(2)}s`}a.appendChild(l)}if(t.appendChild(a),this.addParticle(a),window.AnimatedWeatherCardGsap.fromTo(a,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"}),this.starsConfig.showMoon){let s=document.createElement("div");s.className="moon-gsap",t.appendChild(s),this.addParticle(s),window.AnimatedWeatherCardGsap.fromTo(s,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"})}A(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),A(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),A(this.config.devMode,"Stars animation resumed")}};var zi=class extends X{constructor(t,i,n,r){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";A(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){A(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",A(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),A(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),A(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),A(this.config.devMode,"Sun animation resumed")}};var $i=class{constructor(e,t,i,n){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(e){case"rain":n=new Ci(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new Ai(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new Ei(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new Pi(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new Oi(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:Ke[0],maxInterval:Ke[1]},this.config,this.realWindSpeed);break;case"clouds":n=new Ri(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new Ni(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new Hi(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new zi(this.element,i,this.config);break;default:return A(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),A(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),A(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var ke=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new $i(e,t,n,this.currentWindSpeed),A(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){A(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??i.intensity??1,r=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let a=await this.modularBridge.startModularAnimation(e,n);if(r!==this.generation){A(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!a){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}A(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(a){console.error(`Failed to start ${e} animation:`,a),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),A(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),A(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),A(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),A(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Ii=o=>{if(o==null||o==="")return null;let e=typeof o=="number"?o:Number(o);return Number.isFinite(e)?e:null},Gi=o=>typeof o=="string"?o.trim():"";function Il(o){if(!o||typeof o!="object")return null;let e=o,t=typeof e.id=="number"?String(e.id):Gi(e.id);return t?{id:t,label:Gi(e.flight_number)||Gi(e.callsign),aircraftCode:Gi(e.aircraft_code),altitudeFt:Ii(e.altitude),groundSpeedKt:Ii(e.ground_speed),heading:Ii(e.heading),verticalSpeed:Ii(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function Ja(o,e){if(!o||!e)return null;let t=o.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let r of i){let a=Il(r);a&&n.push(a)}return n}var Bi=class{constructor(){this.known=null}update(e){if(!e)return[];let t=e.filter(a=>!a.onGround),i=new Set(t.map(a=>a.id));if(this.known===null)return this.known=i,[];let n=[],r=new Set;for(let a of t)this.known.has(a.id)||r.has(a.id)||(r.add(a.id),n.push(a));return this.known=i,n}reset(){this.known=null}};var nr={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",departures:"Departures",platform:"Pl.",transfers:"Transfers"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",departures:"Abfahrten",platform:"Gl.",transfers:"Umstiege"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",departures:"Salidas",platform:"V\xEDa",transfers:"Transbordos"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",departures:"D\xE9parts",platform:"Voie",transfers:"Correspondances"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",departures:"Partenze",platform:"Bin.",transfers:"Cambi"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",departures:"Vertrek",platform:"Spoor",transfers:"Overstappen"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",departures:"Odjazdy",platform:"Peron",transfers:"Przesiadki"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",departures:"Partidas",platform:"Linha",transfers:"Transbordos"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",departures:"Plec\u0103ri",platform:"Linia",transfers:"Schimb\u0103ri"}};function Xe(o){return o?.locale?.language||o?.language||"en"}function Ee(o){return`${Xe(o)}|${o?.locale?.time_format??""}`}function st(o,e,t={}){let i=Xe(o).toLowerCase();return(nr[i]?.[e]??nr[i.split("-")[0]]?.[e]??nr.en[e]).replace(/\{(\w+)\}/g,(r,a)=>t[a]??"")}function Gl(o){let e=o?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?Xe(o):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function Pt(o,e){if(!o)return"--";let t=new Date(o);if(isNaN(t.getTime()))return"--";let i=Gl(e),n={hour:"numeric",minute:"2-digit"};i!==void 0&&(n.hourCycle=i?"h12":"h23");try{return new Intl.DateTimeFormat(e?Xe(e):void 0,n).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function rr(o,e){let t=Math.round(Math.abs(o)*60),i=Math.floor(t/60),n=t%60,r=Intl.DurationFormat;if(r&&e)try{return new r(Xe(e),{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return i>0?`${i}h ${n}m`:`${n}m`}function Ze(o,e){let t=o.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(o)}var Bl="swiss_public_transport",to=["departure0","departure1","departure2"],eo=3e4,Vl=59;function ql(o){let e=o.match(/^(B|BUS|NFB|T|TRAM|NFT)\s?(\d\w*)$/i);return e?`${/^(T|TRAM|NFT)$/i.test(e[1])?"Tram":"Bus"} ${e[2]}`:o}function ar(o){return(Array.isArray(o)?o:typeof o=="string"?[o]:[]).filter(e=>typeof e=="string"&&!!e)}var io=new WeakMap;function Yl(o,e){let t=o.entities,i=t?.[e]?.device_id;if(!t||!i)return{};let n=io.get(t);n||io.set(t,n=new Map);let r=n.get(e);if(!r){r={};for(let a of Object.values(t))a.device_id===i&&a.platform===Bl&&a.translation_key&&(r[a.translation_key]=a.entity_id);n.set(e,r)}return r}var Qe=(o,e)=>{let t=e?o.states[e]?.state:void 0;return!t||t==="unavailable"||t==="unknown"?"":t},no=(o,e)=>{let t=Date.parse(Qe(o,e));return Number.isNaN(t)?null:t};function ro(o,e,t){if(!o)return[];let i=[];for(let n of ar(e)){let r=o.states[n];if(!r)continue;let a=Yl(o,n),s=o.devices?.[o.entities?.[n]?.device_id||""],l=Math.max(0,to.findIndex(f=>a[f]===n)),d=l===0?no(o,a.departure0||n):null,c=Number(Qe(o,a.delay)),m=d!==null&&Number.isFinite(c)&&c>0?Math.round(c):0,u=d!==null&&d+m*6e4>=t-eo,p=Number(Qe(o,a.transfers)),g=(a.departure0?to.slice(Math.max(1,l)):[]).map(f=>no(o,a[f])).filter(f=>f!==null&&f>=t-eo),h=[...u?[d+m*6e4]:[],...g].sort((f,y)=>f-y);i.push({entity:n,name:s?.name_by_user||s?.name||String(r.attributes?.friendly_name||n),departures:h,line:u?ql(Qe(o,a.line)):"",platform:u?Qe(o,a.platform):"",delayMin:u?m:0,transfers:u&&Number.isFinite(p)&&p>0?Math.round(p):0})}return i}function Ul(o,e,t){let i=Math.floor((o-e)/6e4);return i<1?"<1 min":i>Vl?Pt(new Date(o).toISOString(),t):`${i} min`}function ao(o,e,t,i,n="Transfers"){return o.map(r=>{let[a,...s]=r.departures,l=a===void 0?"--":Ul(a,e,t),d=u=>Pt(new Date(u).toISOString(),t),c=a!==void 0&&d(a)!==l?d(a):"",m=s.map(d).join(" \xB7 ");return`<div class="train-row" data-entity="${M(r.entity)}" role="button" tabindex="0"><span class="train-due">${M(l)}</span>`+(r.line?`<span class="train-line">${M(r.line)}</span>`:"")+(r.line&&r.transfers?`<span class="train-transfers" aria-label="${M(n)}: ${r.transfers}">+${r.transfers}</span>`:"")+`<span class="train-name">${M(r.name)}</span>`+(r.delayMin?`<span class="train-delay">+${r.delayMin}\u2032</span>`:"")+(r.platform?`<span class="train-platform">${M(i)} ${M(r.platform)}</span>`:"")+(c?`<span class="train-time">${M(c)}</span>`:"")+(m?`<span class="train-later">${M(m)}</span>`:"")+"</div>"}).join("")}var Vi=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}setDevOverride(e){this.devTimePhaseOverride=e,this.updateState()}clearDevOverride(){this.devTimePhaseOverride=void 0,this.updateState()}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=new Date,t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let s=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(s.find(l=>l.type==="hour")?.value||"0",10),i=parseInt(s.find(l=>l.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,r;if(this.devTimePhaseOverride)r=this.devTimePhaseOverride;else{let s=this.config.sunriseHour,l=this.config.sunsetHour,d=(s-1+24)%24,c=(s+.5)%24,m=(l-.5+24)%24,u=(l+1)%24,p=(g,h,f)=>h<=f?g>=h&&g<f:g>=h||g<f;p(n,d,c)?r="dawn":p(n,c,m)?r="day":p(n,m,u)?r="dusk":r="night"}let a={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==a.timePhase?(this.currentState=a,this.notifyListeners(a)):this.currentState=a}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},xa.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),r=t.replace("#",""),a=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),d=parseInt(r.substring(0,2),16),c=parseInt(r.substring(2,4),16),m=parseInt(r.substring(4,6),16),u=Math.round(a*(1-i)+d*i),p=Math.round(s*(1-i)+c*i),g=Math.round(l*(1-i)+m*i),h=u.toString(16).padStart(2,"0"),f=p.toString(16).padStart(2,"0"),y=g.toString(16).padStart(2,"0");return`#${h}${f}${y}`}};var Je=o=>`
        ${o} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Kl=ja(),jl=Nt(Ct(Te)),oo=o=>`${Math.round(o*100)}%`,Xl=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,Zl=48,or=()=>`
${Je("animated-weather-card")}
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
          --awc-secondary: ${Li};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${jl};
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
            ${Qa()};
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
        ${Kl}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Ce(Di,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${oo(Ya)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${oo(qa)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Ce(Ua,"var(--awc-sky-glow)")}; }
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
          background-image: ${Xl};
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

        .weather-desc {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.012em;
        }
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

        /* \u2500\u2500 Departure board (train_entities) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        /* Below the weather, outside .weather-info: the weather fits itself
           to the room the board leaves (see applySizeState). */
        .train-board {
          position: relative;
          z-index: 30;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 0 var(--awc-pad);
          padding: 12px 0 var(--awc-pad);
          text-shadow: 0 1px 12px var(--weather-text-shadow);
        }
        .train-board::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: currentColor;
          opacity: 0.2;
        }
        .animated-weather-card.theme-colors .train-board { text-shadow: none; }
        .animated-weather-card.theme-colors .train-board::before {
          background: var(--divider-color, rgba(0, 0, 0, 0.12));
          opacity: 1;
        }
        .weather-info:has(+ .train-board) { padding-bottom: 14px; }
        .train-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          min-width: 0;
          font-size: 14px;
          line-height: 22px;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
          cursor: pointer;
          border-radius: 4px;
        }
        .train-row:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
        .train-due {
          flex: 0 0 auto;
          min-width: 56px;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.012em;
        }
        .train-line {
          flex: 0 0 auto;
          padding: 0 6px;
          border: 1px solid currentColor;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0.04em;
        }
        /* Further legs after the line shown: sits against its badge */
        .train-transfers { flex: 0 0 auto; margin-left: -6px; font-size: 12px; opacity: var(--awc-secondary); }
        .train-name {
          flex: 1 1 0;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
        }
        .train-delay { flex: 0 0 auto; font-weight: 600; }
        .train-time { flex: 0 0 auto; font-weight: 500; }
        .train-platform,
        .train-later { flex: 0 0 auto; opacity: var(--awc-secondary); }
        /* A narrow card keeps the next train and gives up the two after it */
        @container awc (max-width: 419px) {
          .train-later { display: none; }
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

        /* \u2500\u2500 Adaptive layout: width \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
        @container awc (max-width: 319px) {
          .weather-info, .weather-skeleton, .train-board { --awc-pad: 16px; }
          .temperature { font-size: 64px; font-weight: 250; }
          .weather-desc { font-size: 16px; line-height: 21px; margin-top: 6px; }
          .hero-meta, .weather-note { font-size: 14px; }
          .attribute-value { font-size: 16px; }
        }
        @container awc (max-width: 259px) {
          .temperature { font-size: 56px; font-weight: 300; }
          .location { font-size: 14px; }
          .hero-meta, .weather-note { display: none; }
        }
        @container awc (min-width: 460px) {
          .weather-info, .weather-skeleton, .train-board { --awc-pad: 24px; }
          .location { font-size: 16px; }
          .temperature { font-size: 96px; letter-spacing: -0.05em; }
          .weather-desc { font-size: 18px; line-height: 24px; }
          .attribute-value { font-size: 18px; line-height: 24px; }
        }
        /* Wide frames (wall tablets, full-width rows): hero left, metrics right */
        @container awc (min-width: 640px) {
          .weather-info, .weather-skeleton, .train-board { --awc-pad: 28px; }
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
        .animated-weather-card[data-variant="compact"] .compact-meta {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .animated-weather-card[data-variant="compact"] .weather-desc {
          grid-area: desc;
          align-self: end;
          margin: 0;
          font-size: 16px;
          line-height: 21px;
        }
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
          --awc-sky-glow-layer: ${Ce(Ka,"var(--awc-sky-glow)")};
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
        .animated-weather-card[data-variant="compact"][data-height="tight"] .weather-desc,
        .animated-weather-card[data-variant="compact"][data-height="minimal"] .weather-desc { align-self: center; font-size: 15px; }
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
        .animated-weather-card.condition-out .star-gsap,
        .animated-weather-card.condition-out .moon-gsap,
        .animated-weather-card.condition-out .snow-accumulation,
        .animated-weather-card.condition-out .sleet-accumulation {
          opacity: 0 !important;
          transition: opacity 0.4s cubic-bezier(0.5, 0, 0.75, 0) !important;
        }
        /* Fog always stays in the frame, corners included */
        .animation-container.fog-container {
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
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

        /* Clouds drift in front of the sun, stars and planes, in their own
           layer. In the frame by default; with spill they can rise past the
           top edge, fading out over the top half of CLOUD_OVERHANG_PX. The sides and
           bottom stay closed: clouds cross the card, not the dashboard. */
        .clouds-container {
          --awc-cloud-overhang: 0px;
          z-index: 25;
          clip-path: inset(0 round var(--ha-card-border-radius, 12px));
        }
        .clouds-layer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: var(--awc-cloud-overhang);
        }
        .animated-weather-card[data-spill] .clouds-container {
          --awc-cloud-overhang: ${Zl}px;
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
          transition: opacity ${Xt/2}s ${Ae};
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
          transition: transform ${Xt}s ${Ae};
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
        .animated-weather-card.static .sun::before { animation: none; }
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
        @keyframes awcTwinkle {
          from { opacity: var(--star-o); }
          to { opacity: var(--star-dim); }
        }
        /* The moon takes the sun's place in the top-right, clear of the
           temperature: soft maria, a steady disc and a slowly breathing halo. */
        .moon-gsap {
          position: absolute;
          left: 84%;
          top: 20%;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background:
            radial-gradient(circle at 38% 40%, rgba(160, 166, 180, 0.28) 0 12%, transparent 13%),
            radial-gradient(circle at 62% 62%, rgba(160, 166, 180, 0.22) 0 9%, transparent 10%),
            radial-gradient(circle at 58% 32%, rgba(160, 166, 180, 0.16) 0 6%, transparent 7%),
            radial-gradient(circle at 34% 30%, #fbfaf4 0%, #ece8dc 55%, #cfcabc 100%);
          opacity: 0;
          pointer-events: none;
        }
        .moon-gsap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: 0 0 16px 2px rgba(226, 232, 255, 0.28), 0 0 56px 12px rgba(190, 206, 255, 0.12);
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

`;var Ql={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function Jl(o,e){try{let t=o.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return be(Ql,e.state)||e.state}var td=180;function lo(o,e){let t=e.note_entity?o?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),r=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!r)return null;let a=Date.parse(t.attributes?.generated_at);return{line:n||r,note:r||n,writtenAt:Number.isNaN(a)?null:a}}function co(o,e){let t=Number(e.note_max_age??td);return o.writtenAt===null||!(t>0)?null:o.writtenAt+t*6e4}function sr(o,e,t){if(e.dev_mode){let i=ed(e,t);if(o&&e.sun_entity){let n=o.states[e.sun_entity];n&&(i.sun={sunrise:n.attributes.next_rising||null,sunset:n.attributes.next_setting||null,dawn:n.attributes.next_dawn||null,dusk:n.attributes.next_dusk||null,noon:n.attributes.next_noon||null,elevation:n.attributes.elevation??null,aboveHorizon:n.state==="above_horizon"})}return i}return o?nd(o,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--"}}function ed(o,e){let n=qn[e||"sunny"]||"22",r=ho(o)?se(parseFloat(n),void 0,1):n,a=o.name||"",s=_e.humidity,l=_e.windSpeed,d=parseFloat(l.split(" ")[0])||15,c=_e.pressure,u=Yn[e||"sunny"]||e||"sunny",p=_e.indoorTemperature,g=_e.indoorHumidity,h=new Date,f=new Date(h.getFullYear(),h.getMonth(),h.getDate(),6,14),y=new Date(h.getFullYear(),h.getMonth(),h.getDate(),18,32),w=new Date(h.getFullYear(),h.getMonth(),h.getDate(),5,45),v=new Date(h.getFullYear(),h.getMonth(),h.getDate(),19,1),_=new Date(h.getFullYear(),h.getMonth(),h.getDate(),12,23),b=Date.now(),C={sunrise:f.toISOString(),sunset:y.toISOString(),dawn:w.toISOString(),dusk:v.toISOString(),noon:_.toISOString(),elevation:42.5,aboveHorizon:b>=f.getTime()&&b<=y.getTime()};return{temperature:r,weatherCondition:u,location:a,humidity:s,windSpeed:l,windSpeedValue:d,windBearing:null,pressure:c,pressureValue:null,feelsLike:null,indoorTemperature:p,indoorHumidity:g,sun:C}}var id={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function so(o){let e=typeof o=="number"?o:typeof o=="string"?parseFloat(o):NaN;return isFinite(e)?(e%360+360)%360:typeof o=="string"?id[o.trim().toUpperCase()]??null:null}function ho(o){return Number(o.temperature_decimals)===1?1:0}function nd(o,e){if(!e.entity)throw new Error("Weather entity is required");let t=o.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let x=o.states[e.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?i=parseFloat(x.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=ho(e),r=x=>se(n?x:Math.round(x),o,n),a=i!=null&&!isNaN(i)?r(i):"--",s=Jl(o,t),l=e.name||t.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?se(Math.round(E),o)+"%":null},c="--";if(e.humidity_sensor_entity){let x=o.states[e.humidity_sensor_entity];c=x&&d(x.state)||d(t.attributes.humidity)||"--"}else c=d(t.attributes.humidity)||"--";let m="--",u=10,p=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=Aa(P,E||"km/h"),m=se(Math.round(P),o)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?o.states[e.wind_speed_sensor_entity]:void 0;g&&p(g.state,g.attributes?.unit_of_measurement)||p(t.attributes.wind_speed,t.attributes.wind_speed_unit);let h=e.wind_direction_sensor_entity?o.states[e.wind_direction_sensor_entity]:void 0,f=so(h?.state)??so(t.attributes.wind_bearing),y=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return se(P,o,O)+" "+E},w=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},v="--",_=null;if(e.pressure_sensor_entity){let x=o.states[e.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=y(x.state,E);P&&(v=P,_=w(x.state))}if(v==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";v=y(t.attributes.pressure,E)||"--",_=w(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let x=t.attributes.pressure_unit||"hPa";v=y(t.attributes.pressure,x)||"--",_=w(t.attributes.pressure)}let b=null,C;if(e.feels_like_entity&&(C=o.states[e.feels_like_entity]?.state),C===void 0&&t.attributes.apparent_temperature!==void 0&&(C=t.attributes.apparent_temperature),C!==void 0){let x=typeof C=="number"?C:parseFloat(C);isFinite(x)&&(b=r(x)+"\xB0")}let S="--";if(e.indoor_temperature_entity){let x=o.states[e.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(S=r(parseFloat(x.state))+"\xB0")}let k="--";if(e.indoor_humidity_entity){let x=o.states[e.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(k=se(Math.round(parseFloat(x.state)),o)+"%")}let T;if(e.sun_entity){let x=o.states[e.sun_entity];x&&(T={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:a,weatherCondition:s,location:l,humidity:c,windSpeed:m,windSpeedValue:u,windBearing:f,pressure:v,pressureValue:_,feelsLike:b,indoorTemperature:S,indoorHumidity:k,sun:T}}function lr(o){return o&&typeof o=="object"&&typeof o.action=="string"?o:void 0}function qi(o,e){return{entity:e,tap_action:lr(o?.tap_action),hold_action:lr(o?.hold_action),double_tap_action:lr(o?.double_tap_action)}}function Me(o){return!!o&&o.action!=="none"}function uo(o){return o.tap_action?Me(o.tap_action):!!o.entity}function ti(o,e,t){let i=e[`${t}_action`];if(t==="tap"&&!i){e.entity&&o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Me(i)&&o.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function Yi(o,e,t){if(o.dataset.actionsBound)return;o.dataset.actionsBound="1";let i=null,n=!1,r,a,s=()=>{clearTimeout(r),r=void 0},l=()=>{i=null,s()},d=()=>{Me(t().double_tap_action)?a?(clearTimeout(a),a=void 0,ti(e,t(),"double_tap")):a=setTimeout(()=>{a=void 0,ti(e,t(),"tap")},250):ti(e,t(),"tap")};o.addEventListener("pointerdown",c=>{c.button===0&&(i={x:c.clientX,y:c.clientY},n=!1,s(),Me(t().hold_action)&&(r=setTimeout(()=>{r=void 0,n=!0,ti(e,t(),"hold")},500)))}),o.addEventListener("pointermove",c=>{i&&Math.hypot(c.clientX-i.x,c.clientY-i.y)>10&&l()}),o.addEventListener("pointerup",()=>{let c=!!i&&!n;l(),c&&d()}),o.addEventListener("pointercancel",l),o.addEventListener("pointerleave",l),o.addEventListener("keydown",c=>{c.key!=="Enter"&&c.key!==" "||!uo(t())||(c.preventDefault(),ti(e,t(),"tap"))}),o.addEventListener("contextmenu",c=>{Me(t().hold_action)&&c.preventDefault()})}function ei(o,e,t){uo(e)?(o.setAttribute("role","button"),o.tabIndex=0,o.style.cursor="pointer"):(t?o.setAttribute("role",t):o.removeAttribute("role"),o.removeAttribute("tabindex"),o.style.cursor="");let i=Me(e.hold_action);o.style.userSelect=i?"none":"",o.style.setProperty("-webkit-user-select",i?"none":""),o.style.setProperty("-webkit-touch-callout",i?"none":"")}var dr=new Map;function ii(o,e){let t=dr.get(o);if(t)return t;let i=new Promise((n,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${o}$1.js`):`${o}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>e()?n():r(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return i.catch(()=>dr.delete(o)),dr.set(o,i),i}function Ui(o){return ii("animated-weather-card-editor",()=>!!customElements.get(o))}var mo=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function po(o){let e=o.color_palette||"default",t=o.custom_colors||{},i="";if(e!=="theme"){let r=c=>{if(typeof c!="string"||!mo.test(c))return null;let m=c.replace("#","");m.length===3&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]);let u=parseInt(m,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},a=(c,m,u)=>"#"+(c<<16|m<<8|u).toString(16).padStart(6,"0"),s=(c,m)=>{let u=r(c);if(!u)return c;let p=1-m/100;return a(Math.max(0,Math.floor(u.r*p)),Math.max(0,Math.floor(u.g*p)),Math.max(0,Math.floor(u.b*p)))},l=(c,m)=>{let u=r(c);if(!u)return c;let p=m/100;return a(Math.min(255,Math.floor(u.r+(255-u.r)*p)),Math.min(255,Math.floor(u.g+(255-u.g)*p)),Math.min(255,Math.floor(u.b+(255-u.b)*p)))},d=(c,m)=>{let u=t[c];if(!u||typeof u!="string"||!mo.test(u))return;let p=l(u,12),g=s(u,22);i+=`--weather-${m}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${p} 0%, ${u} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let n=(r,a)=>{r&&qe(r)&&(i+=a.replace(/\$\{value\}/g,r))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var ur={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"};function rd(o){return be(ur,o)===void 0?"mdi:weather-night":`mdi:moon-${o.replace(/_moon$/,"").replace(/_/g,"-")}`}function cr(o,e){let t=n=>n.startsWith("sensor.")&&be(ur,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:o,moon_entity:i}:{sun_entity:o}}var le=1e3,Ki=300,ad={horizon:196,peak:34,trough:276,twilightRy:78},od={horizon:200,peak:96,trough:262,twilightRy:44},sd=124,fo=16;function ld(o,e){if(o<1)return 1;let t=Math.max(2,Math.floor((e+fo)/(sd+fo))),i=Math.ceil(o/t);return Math.ceil(o/i)}function yo(o,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(o>=e&&o<=t)return Math.sin(Math.PI*(o-e)/i);let n=((o-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var Xi=o=>o/24*le,wo=(o,e)=>o>=0?e.horizon-o*(e.horizon-e.peak):e.horizon-o*(e.trough-e.horizon);function dd(o,e,t){let i=[];for(let n=0;n<=240;n++){let r=n/10;i.push(`${Xi(r).toFixed(1)},${wo(yo(r,o,e),t).toFixed(1)}`)}return"M"+i.join(" L")}function ji(o){if(!o)return 0;let e=new Date(o);return isNaN(e.getTime())?0:e.getHours()+e.getMinutes()/60+e.getSeconds()/3600}var cd=o=>Ze(o,"st-ampm");Wi();var go=Nt(Ct(Te)),hd=`
${Je("")}
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
        --st-text: ${go};
        --st-secondary: ${go};
        --st-secondary-opacity: ${Li};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Ce(Di,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${ir.map(o=>`${o} ${Xt}s ${Ae}`).join(", ")};
    }

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
    .st-eyebrow ha-icon,
    .st-metric-label ha-icon {
        --mdc-icon-size: 13px;
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
    .st-card:not(.sky) .st-eyebrow ha-icon,
    .st-card:not(.sky) .st-metric-label ha-icon {
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
`,hr=class extends HTMLElement{constructor(){super();this.config={};this._shadow=this.attachShadow({mode:"open"})}setConfig(t){if(!t.sun_entity)throw new Error("Please define a sun_entity (e.g. sun.sun)");this.config={...t},this._render()}set hass(t){let i=this.config.sun_entity||"",n=this.config.moon_entity||"",r=this._hass?.states[i],a=t.states[i],s=this._hass?.states[n]?.state,l=t.states[n]?.state,d=Ee(this._hass)!==Ee(t),c=this.config.weather_entity||"",m=c&&this._hass?.states[c]?.state!==t.states[c]?.state;this._hass=t;let u=r?.attributes?.elevation,p=a?.attributes?.elevation;(!r||r.state!==a?.state||r.attributes?.next_rising!==a?.attributes?.next_rising||r.attributes?.next_setting!==a?.attributes?.next_setting||Math.abs((u||0)-(p||0))>=.5||n&&s!==l||d||m)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>this._render(),6e4)),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(t.dataset.fit=n,i){let r=Array.from(i.children).filter(a=>getComputedStyle(a).display!=="none").length;i.style.setProperty("--st-cols",String(ld(r,i.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){return qi(this.config,this.config.sun_entity)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_skyCondition(t){let i=this.config.weather_entity,n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let r=Si(n,!1,void 0,void 0,this._hass?.config?.time_zone);if(er.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Ui("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return cr(r.find(a=>a.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||be(ur,i)||i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:rd(i)}}_render(){let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=new Date,a=r.getHours()+r.getMinutes()/60,s=ji(t.sunrise),l=ji(t.sunset),d=t.dawn?ji(t.dawn):Math.max(0,s-.5),c=t.dusk?ji(t.dusk):Math.min(24,l+.5),m=l-s,u=t.aboveHorizon,p=u?t.sunset:t.sunrise,g=new Date(p).getTime()-r.getTime(),h=this._hass,f=dt=>M(st(h,dt)),y=dt=>cd(Pt(dt,h)),w=g>0?st(h,"in_duration",{duration:rr(g/36e5,h)}):"",v=Fi(t.elevation,t.rising,t.aboveHorizon),_=je(this._skyCondition(v),v),b=n?{"--awc-sky-top":_.top,"--awc-sky-mid":_.mid,"--awc-sky-bottom":_.bottom,"--awc-sky-glow":_.glow,"--awc-sky-scrim":_.scrim}:null,C=this.config.compact?od:ad,S=dd(s,l,C),k=`${S} L${le},${C.horizon} L0,${C.horizon} Z`,T=yo(a,s,l),x=a/24*100,E=wo(T,C)/Ki*100,P=(dt,gt)=>{let vt=Math.max(70,Math.abs(gt)/24*le*2.4);return`<ellipse cx="${Xi(dt).toFixed(1)}" cy="${C.horizon}" rx="${vt.toFixed(1)}" ry="${C.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},O=!!this.config.compact,L=this.config.show_header!==!1,R=L?`
            <div class="st-hero">
                ${this.config.title&&!O?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    <ha-icon icon="${u?"mdi:weather-sunset-down":"mdi:weather-sunset-up"}"></ha-icon>
                    <span>${f(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${y(p)}</div>
                ${w?`<div class="st-countdown">${M(w)}</div>`:""}
            </div>`:this.config.title&&!O?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",W=(dt,gt,vt,xo,So=!1)=>`
                <div class="st-metric" data-kind="${M(dt)}">
                    <div class="st-metric-label"><ha-icon icon="${M(gt)}"></ha-icon><span title="${M(vt)}">${M(vt)}</span></div>
                    <div class="st-metric-value${So?" wrap":""}">${xo}</div>
                </div>`,N=!O&&this.config.show_details!==!1,q=O&&L?`
                        <div class="st-chart-note">${f(u?"sunrise":"sunset")}<span class="st-chart-note-time">${y(u?t.sunrise:t.sunset)}</span></div>`:"",lt=N?`
            <div class="st-metrics">
                ${u?W("sunrise","mdi:weather-sunset-up",f("sunrise"),y(t.sunrise)):W("sunset","mdi:weather-sunset-down",f("sunset"),y(t.sunset))}
                ${W("noon","mdi:white-balance-sunny",f("solar_noon"),y(t.noon))}
                ${W("daylight","mdi:timer-sand",f("daylight"),M(rr(m,h)))}
                ${W("first-light","mdi:weather-sunset",f("first_light"),y(t.dawn))}
                ${W("last-light","mdi:weather-night",f("last_light"),y(t.dusk))}
                ${i?W("moon",i.icon,f("moon"),M(i.phaseName),!0):""}
            </div>`:"",$=this.config.sun_entity?h?.states[this.config.sun_entity]:void 0,Z="";try{Z=$&&h?.formatEntityState?.($)||""}catch{}let j=[`${st(h,"sunrise")} ${Pt(t.sunrise,h)}`,`${st(h,"sunset")} ${Pt(t.sunset,h)}`,Z].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${R}
                    <div class="st-chart" role="img" aria-label="${M(j)}">
                        <svg viewBox="0 0 ${le} ${Ki}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${le}" height="${C.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${C.horizon}" width="${le}" height="${Ki-C.horizon}"/></clipPath>
                            </defs>
                            ${P(s,s-d)}
                            ${P(l,c-l)}
                            <path d="${k}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${C.horizon}" x2="${le}" y2="${C.horizon}" class="st-horizon"/>
                            <line x1="${Xi(a).toFixed(1)}" y1="0" x2="${Xi(a).toFixed(1)}" y2="${Ki}" class="st-now-line"/>
                            <path d="${S}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${S}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${T<0?"below":""}" style="left: ${x.toFixed(2)}%; top: ${E.toFixed(2)}%;"></div>${q}
                    </div>
                    ${lt}`,b)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${hd}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),Yi(n.parentElement,this,()=>this._actions())),ei(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",r);for(let a of ir)i?n.style.setProperty(a,i[a]):n.style.removeProperty(a);n.innerHTML=t,this._fit()}};customElements.define("animated-sun-tracker-card",hr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(o,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...cr(e,o)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...cr(e,o),compact:!0}}]:null});Wi();var _o=o=>`Wind from ${Math.round(o)}\xB0`,bo=o=>o==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",mr=o=>o?"mdi:weather-sunset-down":"mdi:weather-sunset-up",ud=18,md=450,pd=1600;function pr(o,e){return e?.states["sun.sun"]?{entity:o,sun_entity:"sun.sun"}:{entity:o}}var fd=400,gd=120,yd=220,wd=24,_d=15e3;window.AnimatedWeatherCardGsap=Vn;var vo=["regular","compact","short","tight","minimal"],bd=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...vo.map(o=>[o,"none"])],fr=class extends HTMLElement{constructor(){super(...arguments);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this.devTimeOverride=!1;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Bi;this.writtenNote=null;this.noteComing=!1}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return pr(r.find(a=>a.startsWith("weather."))??va.entity,t)}actionsConfig(){return this.config?.dev_mode?{}:qi(this.config,this.config?.entity)}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=a=>a===void 0||typeof a=="number"&&isFinite(a)&&a>=0&&a<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0),this.config=t;let r=this.querySelector(".weather-info");if(r&&ei(r,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let a=this.animationController;this._animationGeneration++,this.animationController=new ke(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),a&&a.stopAllAnimations().catch(s=>A(this.config?.dev_mode,"Error stopping previous animation controller:",s))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&!!t.auto_pause!=!!n&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.startTrainTimer(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.applySizeState(),this.devPanel?.isOpen&&this.devPanel.dock()}),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new ke(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new ke(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass&&!this.config.dev_mode)return;Kn(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=sr(this.hass,this.config,this.currentDevCondition)}catch(L){let R=L?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  <ha-icon class="awc-empty-icon" icon="mdi:weather-cloudy-alert"></ha-icon>
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M(R)}</div>
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
                    --mdc-icon-size: 48px;
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
            `;return}let{temperature:n,weatherCondition:r,location:a,humidity:s,windSpeed:l,windSpeedValue:d,windBearing:c,pressure:m,pressureValue:u,feelsLike:p,indoorTemperature:g,indoorHumidity:h,sun:f}=i,y=this.updatePressureTrend(u);this.currentWindSpeedValue=d;let w=f?.aboveHorizon??!1,v=f?Pt(w?f.sunset:f.sunrise,this._hass):"--",_=this.config.show_sun!==!1&&!!f&&v!=="--",b=!!this.config.compact,C=po(this.config),S=this.config.show_attribute_icons!==!1,k=this.config.show_attribute_labels!==!1,T=(L,R,W,N,q="")=>{let lt=S||k?`<div class="attribute-label">${S?`<ha-icon class="attribute-icon" icon="${R}"></ha-icon>`:""}${k?`<span>${M(W)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${L}">${lt}<div class="attribute-value"><span class="attribute-text">${N}</span>${q}</div></div>`},x=typeof c=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${c+180}deg);" aria-label="${_o(c)}"></ha-icon>`:"",E=y?`<ha-icon class="pressure-trend ${y}" icon="${bo(y)}" aria-label="Pressure ${y}"></ha-icon>`:"",P=this.config.show_attributes!==!1?`
              <div class="weather-attributes${k?"":" values-only"}">${[T("humidity","mdi:water-percent",bi(this._hass,"ui.card.weather.attributes.humidity","Humidity"),M(s)),T("wind","mdi:weather-windy",bi(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),M(l),x),T("pressure","mdi:gauge",bi(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),M(m),E),_?T("sun",mr(w),st(this._hass,w?"sunset":"sunrise"),Ze(v,"awc-ampm")):""].join("")}</div>`:"";this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions loading ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${b?' data-variant="compact"':""} style="${M(C)}">
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
                ${!b&&this.config.show_location!==!1&&a?`<div class="location">${M(a)}</div>`:""}
                <div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>
                ${b?`<div class="compact-meta">${M(this.compactMeta(a,p))}</div>`:`<div class="hero-meta">${this.heroMetaHtml(p,g,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${b?"":P}
            </div>
            ${this.trainRows()?`<div class="train-board" role="group" aria-label="${M(st(this._hass,"departures"))}">${this.trainBoardHtml()}</div>`:""}
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
        ${or()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill();let O=this.querySelector(".train-board");O?.addEventListener("click",L=>this.openTrain(L)),O?.addEventListener("keydown",L=>this.openTrain(L)),this.startTrainTimer()}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let r=t.shadowRoot;if(!r)return;let a=r.querySelector("#awc-overflow");a||(a=document.createElement("style"),a.id="awc-overflow",r.appendChild(a)),a.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},fd)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&!this.config.dev_mode}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}ii("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?lo(this._hass,this.config):this.writtenNote,i=t?co(t,this.config):null;if(!t||i===null)return t;let n=i-Date.now();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),d=st(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(l&&(l.textContent=d),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let a=this.currentNote();if(!a){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),i&&(i.textContent=a.note),n&&(n.textContent=a.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===a.note+a.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,a.note,s),this.fadeThrough(n,a.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${st(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=M(st(this._hass,"indoors")),n='<ha-icon class="indoor-icon" icon="mdi:home-thermometer-outline"></ha-icon>';if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let r=`<span class="indoor-label">${i}</span>`;return t==="both"?n+r:r}heroMetaHtml(t,i,n){let r=[];t&&r.push(`<span class="feels-like">${M(st(this._hass,"feels_like"))} ${M(t)}</span>`);let a=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&a.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${a.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}mountDevPanel(){if(!this.config?.dev_mode){this.devPanel?.disconnect(),this.devPanel=void 0;return}let t=window.AnimatedWeatherCardDevPanel;if(t){this.devPanel??(this.devPanel=new t(this)),this.devPanel.mount();return}ii("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevPanel).then(()=>{this.isConnected&&this.mountDevPanel()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}attachEventListeners(){this.mountDevPanel(),this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(Yi(t,this,()=>this.actionsConfig()),ei(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>{this.initializeAnimations(),this.config?.dev_mode&&!this.currentDevCondition&&(this.currentDevCondition="sunny")},100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),vi(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),xi(this)),this.devPanel?.updatePauseButton()}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return J(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n)return;this.clearAnimations();let r;if(i.dev_mode)r=this.currentDevCondition||"sunny";else{if(!this.hass||!i.entity)return;let m=this.hass.states[i.entity];if(!m)return;r=m.state.toLowerCase()}let a=Si(r,i.dev_mode??!1,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone),s=(i.color_palette||"default")==="theme"?"theme-colors":"",l=n.classList.contains("loading"),d=(...m)=>{n.className=["animated-weather-card",a,...m,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},c=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||c){d(i.animate===!1?"static":""),this.currentWeatherClass=a;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(d(),this.animationsPaused){this.currentWeatherClass=a,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(a)),this.startPlanes()}},i.dev_mode?50:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Kn(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(a=>{a.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(Ue(this),n.querySelectorAll(".star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(Mi(i),Ra(i));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),Un(this.pendingTimeouts)}set hass(t){let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.updateTrains(),this.noteWriter?.hassChanged(),!i){this.render(),this.initializeAnimations();return}if(Ee(i)!==Ee(t)){this.render(),this.initializeAnimations();return}if(this.config.dev_mode||!this.config.entity)return;let n=i.states[this.config.entity],r=t.states[this.config.entity];if(!n||!r){this.render(),this.initializeAnimations();return}if(n.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let a=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","friendly_name"];for(let d of l)if(s(n.attributes[d])!==s(r.attributes[d])){a=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(a=!0),!a){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity];for(let c of d){if(!c)continue;let m=i.states[c]?.state,u=t.states[c]?.state;if(m!==u){a=!0;break}}}if(a)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";i.states[d]!==t.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass&&!this.config.dev_mode)return;let t;try{t=sr(this._hass,this.config,this.currentDevCondition)}catch{return}let{temperature:i,weatherCondition:n,humidity:r,windSpeed:a,windSpeedValue:s,windBearing:l,pressure:d,pressureValue:c,feelsLike:m,indoorTemperature:u,indoorHumidity:p,sun:g}=t;this.currentWindSpeedValue=s;let h=(_,b)=>{_&&_.textContent!==b&&(_.textContent=b)};this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),n);let f=(_,b)=>{h(this.querySelector(`.weather-attributes .attribute[data-kind="${_}"] .attribute-text`),b)};f("humidity",r),f("wind",a),f("pressure",d),this.syncValueIcon("wind","wind-bearing-arrow",typeof l=="number"?{icon:"mdi:navigation",transform:`rotate(${l+180}deg)`,label:_o(l)}:null);let y=this.updatePressureTrend(c);if(this.syncValueIcon("pressure","pressure-trend",y?{icon:bo(y),label:`Pressure ${y}`,className:y}:null),g){let _=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),b=_?.querySelector(".attribute-text"),C=Ze(Pt(g.aboveHorizon?g.sunset:g.sunrise,this._hass),"awc-ampm");b&&b.innerHTML!==C&&(b.innerHTML=C),h(_?.querySelector(".attribute-label > span")??null,st(this._hass,g.aboveHorizon?"sunset":"sunrise"));let S=_?.querySelector(".attribute-icon");S&&S.getAttribute("icon")!==mr(g.aboveHorizon)&&S.setAttribute("icon",mr(g.aboveHorizon))}let w=this.querySelector(".compact-meta");w&&h(w,this.compactMeta(t.location,m)),h(this.querySelector(".location"),t.location);let v=this.querySelector(".hero-meta");if(v){let _=this.heroMetaHtml(m,u,p);v.innerHTML!==_&&(v.innerHTML=_)}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let r=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!r)return;let a=r.querySelector(`.${i}`);if(!n){a?.remove();return}a||(a=document.createElement("ha-icon"),r.appendChild(a)),a.className=[i,n.className].filter(Boolean).join(" "),a.getAttribute("icon")!==n.icon&&a.setAttribute("icon",n.icon),a.setAttribute("aria-label",n.label),a.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(u=>{let p=u.textContent??"",g=document.createElement("span");g.className="note-typed";let h=document.createElement("span");return h.className="note-untyped",h.textContent=p,u.replaceChildren(g,h),{span:u,text:p,typed:g,rest:h}}),n=Math.max(0,...i.map(u=>u.text.length)),r=Math.min(pd,Math.max(md,n*ud)),a=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:i.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of i)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},m=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let p of i){let g=Math.round(u*p.text.length);p.typed.textContent=p.text.slice(0,g),p.rest.textContent=p.text.slice(g)}u<1?d=a(m):c.finish()};this.noteTyping=c,d=a(m)}fadeThrough(t,i,n){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===i)return;let a=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||a){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),r!==void 0)return;let s=()=>{let d=this.heroTextPending.get(t);this.heroTextPending.delete(t),d!==void 0&&(t.textContent=d),n?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:gd,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:yd,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.config.dev_mode)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){ii("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:this.config.dev_mode||!1},this.config);this.planes=i,i.start().then(()=>{this.animationsPaused&&i.pause()}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>A(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}trainRows(){return this.config?.compact?0:ar(this.config?.train_entities).length}trainBoardHtml(){let t=Date.now();return ao(ro(this._hass,this.config?.train_entities,t),t,this._hass,st(this._hass,"platform"),st(this._hass,"transfers"))}updateTrains(){let t=this.querySelector(".train-board");if(!t)return;let i=this.trainBoardHtml();t.innerHTML!==i&&(t.innerHTML=i)}startTrainTimer(){clearInterval(this.trainTimer),this.trainTimer=this.trainRows()&&this.isConnected?setInterval(()=>this.updateTrains(),_d):void 0}openTrain(t){let i=t.target?.closest?.(".train-row");if(!(!i?.dataset.entity||this.config?.dev_mode)){if(t instanceof KeyboardEvent){if(t.key!=="Enter"&&t.key!==" ")return;t.preventDefault()}this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i.dataset.entity},bubbles:!0,composed:!0}))}}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=this.flightTracker.update(Ja(this._hass,this.config.flights_entity));i.length&&this.flyPlanes(i)}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride)?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}disconnectedCallback(){this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,clearInterval(this.trainTimer),this.trainTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.devPanel?.disconnect(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Un(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Vi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(A(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return Fi(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i)}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;let n=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",r){let c=t.dataset.metrics;t.dataset.metrics="row";let m=Array.from(r.children),u=parseFloat(getComputedStyle(r).columnGap)||0,p=m.reduce((f,y)=>f+y.getBoundingClientRect().width,0)+u*Math.max(0,m.length-1),g=r.clientWidth-p,h=g<-.5||c==="grid"&&g<wd;t.dataset.metrics=h?"grid":"row"}let a=t.dataset.variant==="compact",s=a?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),d=()=>i.scrollHeight>i.clientHeight+1||!a&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1;if(!l||l.hidden){delete t.dataset.note;for(let c of vo)if(t.dataset.height=c,!d())return;return}for(let[c,m]of bd)if(t.dataset.height=c,t.dataset.note=m,!d())return}getGridOptions(){if(this.config?.compact)return{columns:12,rows:2,min_columns:6,min_rows:1};let t=this.noteEnabled()?{columns:12,rows:5,min_columns:6,min_rows:3}:{columns:12,rows:4,min_columns:6,min_rows:3},i=this.trainRows();return i?{...t,rows:t.rows+Math.ceil(i/2),min_rows:4}:t}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),t+=Math.ceil(this.trainRows()/2),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Ui("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",fr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(o,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...pr(e,o)}},{label:"Compact",config:{type:"custom:animated-weather-card",...pr(e,o),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let o=je("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Sa} `,[`background: linear-gradient(90deg, ${o.top}, ${o.mid} 55%, ${o.bottom})`,`color: ${Nt(Ct(Te))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${o.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
