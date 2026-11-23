"use strict";(()=>{function It(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ka(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},an={duration:.5,overwrite:!1,delay:0},gr,it,B,Mt=1e8,W=1/Mt,or=Math.PI*2,Dl=or/4,Ol=0,ja=Math.sqrt,Rl=Math.cos,Hl=Math.sin,nt=function(e){return typeof e=="string"},X=function(e){return typeof e=="function"},Gt=function(e){return typeof e=="number"},ti=function(e){return typeof e>"u"},zt=function(e){return typeof e=="object"},gt=function(e){return e!==!1},yr=function(){return typeof window<"u"},Vn=function(e){return X(e)||nt(e)},Xa=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},lt=Array.isArray,Fl=/random\([^)]+\)/g,Wl=/,\s*/g,$a=/(?:-?\.?\d|\.)+/gi,wr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ce=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ji=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_r=/[+-]=-?[.\d]+/,zl=/[^,'"\[\]\s]+/gi,Nl=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,U,Ft,sr,vr,St={},jn={},Za,Qa=function(e){return(jn=Ae(e,St))&&dt},ei=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},on=function(e,t){return!t&&console.warn(e)},Ja=function(e,t){return e&&(St[e]=t)&&jn&&(jn[e]=t)||St},sn=function(){return 0},$l={suppressEvents:!0,isStart:!0,kill:!1},Un={suppressEvents:!0,kill:!1},Il={suppressEvents:!0},br={},jt=[],lr={},to,ft={},tr={},Ia=30,Yn=[],xr="",Sr=function(e){var t=e[0],n,i;if(zt(t)||X(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yn.length;i--&&!Yn[i].targetTest(t););n=Yn[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kr(e[i],n)))||e.splice(i,1);return e},Xt=function(e){return e._gsap||Sr(Pt(e))[0]._gsap},Cr=function(e,t,n){return(n=e[t])&&X(n)?e[t]():ti(n)&&e.getAttribute&&e.getAttribute(t)||n},ut=function(e,t){return(e=e.split(",")).forEach(t)||e},Z=function(e){return Math.round(e*1e5)/1e5||0},V=function(e){return Math.round(e*1e7)/1e7||0},ue=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ql=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Xn=function(){var e=jt.length,t=jt.slice(0),n,i;for(lr={},jt.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ar=function(e){return!!(e._initted||e._startAt||e.add)},eo=function(e,t,n,i){jt.length&&!it&&Xn(),e.render(t,n,i||!!(it&&t<0&&Ar(e))),jt.length&&!it&&Xn()},no=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zl).length<2?t:nt(e)?e.trim():e},io=function(e){return e},Ct=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gl=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ae=function(e,t){for(var n in t)e[n]=t[n];return e},qa=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zt(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Zn=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},en=function(e){var t=e.parent||U,n=e.keyframes?Gl(lt(e.keyframes)):Ct;if(gt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bl=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ro=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ni=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Zt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},se=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Vl=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dr=function(e,t,n,i){return e._startAt&&(it?e._startAt.revert(Un):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ul=function a(e){return!e||e._ts&&a(e.parent)},Ga=function(e){return e._repeat?Te(e._tTime,e=e.duration()+e._rDelay)*e:0},Te=function(e,t){var n=Math.floor(e=V(e/t));return e&&n===e?n-1:n},Qn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ii=function(e){return e._end=V(e._start+(e._tDur/Math.abs(e._ts||e._rts||W)||0))},ri=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=V(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ii(e),n._dirty||se(n,e)),e},ao=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qn(e.rawTime(),t),(!t._dur||cn(0,t.totalDuration(),n)-t._tTime>W)&&t.render(n,!0)),se(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-W}},Wt=function(e,t,n,i){return t.parent&&Zt(t),t._start=V((Gt(n)?n:n||e!==U?Et(e,n,t):e._time)+t._delay),t._end=V(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ro(e,t,"_first","_last",e._sort?"_start":0),cr(t)||(e._recent=t),i||ao(e,t),e._ts<0&&ri(e,e._tTime),e},oo=function(e,t){return(St.ScrollTrigger||ei("scrollTrigger",t))&&St.ScrollTrigger.create(t,e)},so=function(e,t,n,i,r){if(Pr(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!it&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&to!==pt.frame)return jt.push(e),e._lazy=[r,i],1},Yl=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},cr=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kl=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Yl(e)&&!(!e._initted&&cr(e))||(e._ts<0||e._dp._ts<0)&&!cr(e))?0:1,s=e._rDelay,l=0,d,c,h;if(s&&e._repeat&&(l=cn(0,e._tDur,t),c=Te(l,s),e._yoyo&&c&1&&(o=1-o),c!==Te(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||it||i||e._zTime===W||!t&&e._zTime){if(!e._initted&&so(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?W:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,d=e._pt;d;)d.r(o,d.d),d=d._next;t<0&&dr(e,t,n,!0),e._onUpdate&&!n&&xt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zt(e,1),!n&&!it&&(xt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jl=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ke=function(e,t,n,i){var r=e._repeat,o=V(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:V(o*(r+1)+e._rDelay*r):o,s>0&&!i&&ri(e,e._tTime=e._tDur*s),e.parent&&ii(e),n||se(e.parent,e),e},Ba=function(e){return e instanceof st?se(e):ke(e,e._dur)},Xl={_start:0,endTime:sn,totalDuration:sn},Et=function a(e,t,n){var i=e.labels,r=e._recent||Xl,o=e.duration()>=Mt?r.endTime(!1):e._dur,s,l,d;return nt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),d=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),d&&n&&(l=l/100*(lt(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},nn=function(e,t,n){var i=Gt(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=gt(l.vars.inherit)&&l.parent;o.immediateRender=gt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new J(t[0],o,t[r+1])},Qt=function(e,t){return e||e===0?t(e):t},cn=function(e,t,n){return n<e?e:n>t?t:n},rt=function(e,t){return!nt(e)||!(t=Nl.exec(e))?"":t[1]},Zl=function(e,t,n){return Qt(n,function(i){return cn(e,t,i)})},ur=[].slice,lo=function(e,t){return e&&zt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zt(e[0]))&&!e.nodeType&&e!==Ft},Ql=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return nt(i)&&!t||lo(i,1)?(r=n).push.apply(r,Pt(i)):n.push(i)})||n},Pt=function(e,t,n){return B&&!t&&B.selector?B.selector(e):nt(e)&&!n&&(sr||!Ee())?ur.call((t||vr).querySelectorAll(e),0):lt(e)?Ql(e,n):lo(e)?ur.call(e,0):e?[e]:[]},hr=function(e){return e=Pt(e)[0]||on("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pt(t,n.querySelectorAll?n:n===e?on("Invalid scope")||vr.createElement("div"):e)}},co=function(e){return e.sort(function(){return .5-Math.random()})},uo=function(e){if(X(e))return e;var t=zt(e)?e:{each:e},n=le(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,d=t.axis,c=i,h=i;return nt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],h=i[1]),function(u,f,g){var m=(g||t).length,p=o[m],y,w,_,v,b,C,S,A,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Mt])[1],!T){for(S=-Mt;S<(S=g[T++].getBoundingClientRect().left)&&T<m;);T<m&&T--}for(p=o[m]=[],y=l?Math.min(T,m)*c-.5:i%T,w=T===Mt?0:l?m*h/T-.5:i/T|0,S=0,A=Mt,C=0;C<m;C++)_=C%T-y,v=w-(C/T|0),p[C]=b=d?Math.abs(d==="y"?v:_):ja(_*_+v*v),b>S&&(S=b),b<A&&(A=b);i==="random"&&co(p),p.max=S-A,p.min=A,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(T>m?m-1:d?d==="y"?m/T:T:Math.max(T,m/T))||0)*(i==="edges"?-1:1),p.b=m<0?r-m:r,p.u=rt(t.amount||t.each)||0,n=n&&m<0?ud(n):n}return m=(p[u]-p.min)/p.max||0,V(p.b+(n?n(m):m)*p.v)+p.u}},mr=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=V(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gt(n)?0:rt(n))}},ho=function(e,t){var n=lt(e),i,r;return!n&&zt(e)&&(i=n=e.radius||Mt,e.values?(e=Pt(e.values),(r=!Gt(e[0]))&&(i*=i)):e=mr(e.increment)),Qt(t,n?X(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),d=Mt,c=0,h=e.length,u,f;h--;)r?(u=e[h].x-s,f=e[h].y-l,u=u*u+f*f):u=Math.abs(e[h]-s),u<d&&(d=u,c=h);return c=!i||d<=i?e[c]:o,r||c===o||Gt(o)?c:c+rt(o)}:mr(e))},mo=function(e,t,n,i){return Qt(lt(e)?!t:n===!0?!!(n=0):!i,function(){return lt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Jl=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},td=function(e,t){return function(n){return e(parseFloat(n))+(t||rt(n))}},ed=function(e,t,n){return po(e,t,0,1,n)},fo=function(e,t,n){return Qt(n,function(i){return e[~~t(i)]})},nd=function a(e,t,n){var i=t-e;return lt(e)?fo(e,a(0,e.length),t):Qt(n,function(r){return(i+(r-e)%i)%i+e})},id=function a(e,t,n){var i=t-e,r=i*2;return lt(e)?fo(e,a(0,e.length-1),t):Qt(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Me=function(e){return e.replace(Fl,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Wl);return mo(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},po=function(e,t,n,i,r){var o=t-e,s=i-n;return Qt(r,function(l){return n+((l-e)/o*s||0)})},rd=function a(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=nt(e),s={},l,d,c,h,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(lt(e)&&!lt(t)){for(c=[],h=e.length,u=h-2,d=1;d<h;d++)c.push(a(e[d-1],e[d]));h--,r=function(g){g*=h;var m=Math.min(u,~~g);return c[m](g-m)},n=t}else i||(e=Ae(lt(e)?[]:{},e));if(!c){for(l in t)Er.call(s,e,l,"get",t[l]);r=function(g){return Or(g,s)||(o?e.p:e)}}}return Qt(n,r)},Va=function(e,t,n){var i=e.labels,r=Mt,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},xt=function(e,t,n){var i=e.vars,r=i[t],o=B,s=e._ctx,l,d,c;if(r)return l=i[t+"Params"],d=i.callbackScope||e,n&&jt.length&&Xn(),s&&(B=s),c=l?r.apply(d,l):r.call(d),B=o,c},Je=function(e){return Zt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!it),e.progress()<1&&xt(e,"onInterrupt"),e},Ce,go=[],yo=function(e){if(e)if(e=!e.name&&e.default||e,yr()||e.headless){var t=e.name,n=X(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:sn,render:Or,add:Er,kill:bd,modifier:vd,rawVars:0},o={targetTest:0,get:0,getSetter:ai,aliases:{},register:0};if(Ee(),e!==i){if(ft[t])return;Ct(i,Ct(Zn(e,r),o)),Ae(i.prototype,Ae(r,Zn(e,o))),ft[i.prop=t]=i,e.targetTest&&(Yn.push(i),br[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ja(t,i),e.register&&e.register(dt,i,ht)}else go.push(e)},F=255,tn={aqua:[0,F,F],lime:[0,F,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,F],navy:[0,0,128],white:[F,F,F],olive:[128,128,0],yellow:[F,F,0],orange:[F,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[F,0,0],pink:[F,192,203],cyan:[0,F,F],transparent:[F,F,F,0]},er=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*F+.5|0},wo=function(e,t,n){var i=e?Gt(e)?[e>>16,e>>8&F,e&F]:0:tn.black,r,o,s,l,d,c,h,u,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),tn[e])i=tn[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&F,i&F,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&F,e&F]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match($a),!t)l=+i[0]%360/360,d=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(d+1):c+d-c*d,r=c*2-o,i.length>3&&(i[3]*=1),i[0]=er(l+1/3,r,o),i[1]=er(l,r,o),i[2]=er(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(wr),n&&i.length<4&&(i[3]=1),i}else i=e.match($a)||tn.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/F,o=i[1]/F,s=i[2]/F,h=Math.max(r,o,s),u=Math.min(r,o,s),c=(h+u)/2,h===u?l=d=0:(f=h-u,d=c>.5?f/(2-h-u):f/(h+u),l=h===r?(o-s)/f+(o<s?6:0):h===o?(s-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(d*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},_o=function(e){var t=[],n=[],i=-1;return e.split(qt).forEach(function(r){var o=r.match(ce)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ua=function(e,t,n){var i="",r=(e+i).match(qt),o=t?"hsla(":"rgba(",s=0,l,d,c,h;if(!r)return e;if(r=r.map(function(u){return(u=wo(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(c=_o(e),l=n.c,l.join(i)!==c.c.join(i)))for(d=e.replace(qt,"1").split(ce),h=d.length-1;s<h;s++)i+=d[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!d)for(d=e.split(qt),h=d.length-1;s<h;s++)i+=d[s]+r[s];return i+d[h]},qt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in tn)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),ad=/hsl[a]?\(/,Tr=function(e){var t=e.join(" "),n;if(qt.lastIndex=0,qt.test(t))return n=ad.test(t),e[1]=Ua(e[1],n),e[0]=Ua(e[0],n,_o(e[1])),!0},ln,pt=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,d,c,h,u,f,g=function m(p){var y=a()-i,w=p===!0,_,v,b,C;if((y>e||y<0)&&(n+=y-t),i+=y,b=i-n,_=b-o,(_>0||w)&&(C=++h.frame,u=b-h.time*1e3,h.time=b=b/1e3,o+=_+(_>=r?4:r-_),v=1),w||(l=d(m)),v)for(f=0;f<s.length;f++)s[f](b,u,C,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Za&&(!sr&&yr()&&(Ft=sr=window,vr=Ft.document||{},St.gsap=dt,(Ft.gsapVersions||(Ft.gsapVersions=[])).push(dt.version),Qa(jn||Ft.GreenSockGlobals||!Ft.gsap&&Ft||{}),go.forEach(yo)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ln=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ln=0,d=sn},lagSmoothing:function(p,y){e=p||1/0,t=Math.min(y||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,y,w){var _=y?function(v,b,C,S){p(v,b,C,S),h.remove(_)}:p;return h.remove(p),s[w?"unshift":"push"](_),Ee(),_},remove:function(p,y){~(y=s.indexOf(p))&&s.splice(y,1)&&f>=y&&f--},_listeners:s},h})(),Ee=function(){return!ln&&pt.wake()},D={},od=/^[\d.\-M][\d.\-,\s]/,sd=/["']/g,ld=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,d;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),t[i]=isNaN(d)?d.replace(sd,"").trim():+d,i=l.substr(s+1).trim();return t},dd=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cd=function(e){var t=(e+"").split("("),n=D[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ld(t[1])]:dd(e).split(",").map(no)):D._CE&&od.test(e)?D._CE("",e):n},ud=function(e){return function(t){return 1-e(1-t)}},le=function(e,t){return e&&(X(e)?e:D[e]||cd(e))||t},he=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return ut(e,function(s){D[s]=St[s]=r,D[o=s.toLowerCase()]=n;for(var l in r)D[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=D[s+"."+l]=r[l]}),r},vo=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nr=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/or*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*Hl((c-o)*r)+1},l=e==="out"?s:e==="in"?function(d){return 1-s(1-d)}:vo(s);return r=or/r,l.config=function(d,c){return a(e,d,c)},l},ir=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:vo(n);return i.config=function(r){return a(e,r)},i};ut("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;he(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});D.Linear.easeNone=D.none=D.Linear.easeIn;he("Elastic",nr("in"),nr("out"),nr());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};he("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);he("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});he("Circ",function(a){return-(ja(1-a*a)-1)});he("Sine",function(a){return a===1?1:-Rl(a*Dl)+1});he("Back",ir("in"),ir("out"),ir());D.SteppedEase=D.steps=St.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-W;return function(s){return((i*cn(0,o,s)|0)+r)*n}}};an.ease=D["quad.out"];ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return xr+=a+","+a+"Params,"});var kr=function(e,t){this.id=Ol++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cr,this.set=t?t.getSetter:ai},dn=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ke(this,+t.duration,1,1),this.data=t.data,B&&(this._ctx=B,B.data.push(this)),ln||pt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ke(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ee(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ri(this,n),!r._dp||r.parent||ao(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wt(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===W||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eo(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ga(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ga(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Te(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-W?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Qn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-W?0:this._rts,this.totalTime(cn(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ii(this),Vl(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ee(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==W&&(this._tTime-=W)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=V(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wt(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qn(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Il);var i=it;return it=n,Ar(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),it=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ba(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ba(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Et(this,n),gt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gt(i)),this._dur||(this._zTime=-W),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-W:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-W,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-W)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var s=X(n)?n:io,l=function(){var c=i.then;i.then=null,r&&r(),X(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Je(this)},a})();Ct(dn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-W,_prom:0,_ps:!1,_rts:1});var st=(function(a){Ka(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gt(n.sortChildren),U&&Wt(n.parent||U,It(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&oo(It(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return nn(0,arguments,this),this},t.from=function(i,r,o){return nn(1,arguments,this),this},t.fromTo=function(i,r,o,s){return nn(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,en(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new J(i,r,Et(this,o),1),this},t.call=function(i,r,o){return Wt(this,J.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,d,c){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new J(i,o,Et(this,l)),this},t.staggerFrom=function(i,r,o,s,l,d,c){return o.runBackwards=1,en(o).immediateRender=gt(o.immediateRender),this.staggerTo(i,r,o,s,l,d,c)},t.staggerFromTo=function(i,r,o,s,l,d,c,h){return s.startAt=o,en(s).immediateRender=gt(s.immediateRender),this.staggerTo(i,r,s,l,d,c,h)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=i<=0?0:V(i),h=this._zTime<0!=i<0&&(this._initted||!d),u,f,g,m,p,y,w,_,v,b,C,S;if(this!==U&&c>l&&i>=0&&(c=l),c!==this._tTime||o||h){if(s!==this._time&&d&&(c+=this._time-s,i+=this._time-s),u=c,v=this._start,_=this._ts,y=!_,h&&(d||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=V(c%p),c===l?(m=this._repeat,u=d):(b=V(c/p),m=~~b,m&&m===b&&(u=d,m--),u>d&&(u=d)),b=Te(this._tTime,p),!s&&this._tTime&&b!==m&&this._tTime-b*p-this._dur<=0&&(b=m),C&&m&1&&(u=d-u,S=1),m!==b&&!this._lock){var A=C&&b&1,T=A===(C&&m&1);if(m<b&&(A=!A),s=A?0:c%d?d:c,this._lock=1,this.render(s||(S?0:V(m*p)),r,!d)._lock=0,this._tTime=c,!r&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=m),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,T&&(this._lock=2,s=A?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=jl(this,V(s),V(u)),w&&(c-=u-(u=w._start))),this._tTime=c,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&d&&!r&&!b&&(xt(this,"onStart"),this._tTime!==c))return this;if(u>=s&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=-W);break}}f=g}else{f=this._last;for(var x=i<0?i:u;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,o||it&&Ar(f)),u!==this._time||!this._ts&&!y){w=0,g&&(c+=this._zTime=x?-W:W);break}}f=g}}if(w&&!r&&(this.pause(),w.render(u>=s?0:-W)._zTime=u>=s?1:-1,this._ts))return this._start=v,ii(this),this.render(i,r,o);this._onUpdate&&!r&&xt(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Zt(this,1),!r&&!(i<0&&!s)&&(c||s||!l)&&(xt(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Gt(r)||(r=Et(this,r,i)),!(i instanceof dn)){if(lt(i))return i.forEach(function(s){return o.add(s,r)}),this;if(nt(i))return this.addLabel(i,r);if(X(i))i=J.delayedCall(0,i);else return this}return this!==i?Wt(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-Mt);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof J?r&&l.push(d):(o&&l.push(d),i&&l.push.apply(l,d.getChildren(!0,r,o)))),d=d._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return nt(i)?this.removeLabel(i):X(i)?this.killTweensOf(i):(i.parent===this&&ni(this,i),i===this._recent&&(this._recent=this._last),se(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=V(pt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Et(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=J.delayedCall(0,r||sn,o);return s.data="isPause",this._hasPause=1,Wt(this,s,Et(this,i))},t.removePause=function(i){var r=this._first;for(i=Et(this,i);r;)r._start===i&&r.data==="isPause"&&Zt(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Kt!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=Pt(i),l=this._first,d=Gt(r),c;l;)l instanceof J?ql(l._targets,s)&&(d?(!Kt||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(s,r)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=Et(o,i),l=r,d=l.startAt,c=l.onStart,h=l.onStartParams,u=l.immediateRender,f,g=J.to(o,Ct({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||W,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==p&&ke(g,p,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,h||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ct({startAt:{time:Et(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Va(this,Et(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Va(this,Et(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+W)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(i=V(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(d in l)l[d]>=o&&(l[d]+=i);return se(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),se(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=Mt,d,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Wt(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=V(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=d;ke(o,o===U&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(U._ts&&(eo(U,Qn(i,U)),to=pt.frame),pt.frame>=Ia){Ia+=yt.autoSleep||120;var r=U._first;if((!r||!r._ts)&&yt.autoSleep&&pt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pt.sleep()}}},e})(dn);Ct(st.prototype,{_lock:0,_hasPause:0,_forcing:0});var hd=function(e,t,n,i,r,o,s){var l=new ht(this._pt,e,t,0,1,Dr,null,r),d=0,c=0,h,u,f,g,m,p,y,w;for(l.b=n,l.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=Me(i)),o&&(w=[n,i],o(w,e,t),n=w[0],i=w[1]),u=n.match(Ji)||[];h=Ji.exec(i);)g=h[0],m=i.substring(d,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==u[c++]&&(p=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:p,c:g.charAt(1)==="="?ue(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},d=Ji.lastIndex);return l.c=d<i.length?i.substring(d,i.length):"",l.fp=s,(_r.test(i)||y)&&(l.e=0),this._pt=l,l},Er=function(e,t,n,i,r,o,s,l,d,c){X(i)&&(i=i(r||0,e,o));var h=e[t],u=n!=="get"?n:X(h)?d?e[t.indexOf("set")||!X(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():h,f=X(h)?d?yd:So:Lr,g;if(nt(i)&&(~i.indexOf("random(")&&(i=Me(i)),i.charAt(1)==="="&&(g=ue(u,i)+(rt(u)||0),(g||g===0)&&(i=g))),!c||u!==i||fr)return!isNaN(u*i)&&i!==""?(g=new ht(this._pt,e,t,+u||0,i-(u||0),typeof h=="boolean"?_d:Co,0,f),d&&(g.fp=d),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&ei(t,i),hd.call(this,e,t,u,i,f,l||yt.stringFilter,d))},md=function(e,t,n,i,r){if(X(e)&&(e=rn(e,r,t,n,i)),!zt(e)||e.style&&e.nodeType||lt(e)||Xa(e))return nt(e)?rn(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=rn(e[s],r,t,n,i);return o},Mr=function(e,t,n,i,r,o){var s,l,d,c;if(ft[e]&&(s=new ft[e]).init(r,s.rawVars?t[e]:md(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ht(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Ce))for(d=n._ptLookup[n._targets.indexOf(r)],c=s._props.length;c--;)d[s._props[c]]=l;return s},Kt,fr,Pr=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,d=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=e._dur,m=e._startAt,p=e._targets,y=e.parent,w=y&&y.data==="nested"?y.vars.targets:p,_=e._overwrite==="auto"&&!gr,v=e.timeline,b=i.easeReverse||h,C,S,A,T,x,E,P,R,z,$,q,H,G;if(v&&(!u||!r)&&(r="none"),e._ease=le(r,an.ease),e._rEase=b&&(le(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||u&&!i.stagger){if(R=p[0]?Xt(p[0]).harness:0,H=R&&i[R.prop],C=Zn(i,br),m&&(m._zTime<0&&m.progress(1),t<0&&c&&s&&!f?m.render(-1,!0):m.revert(c&&g?Un:$l),m._lazy=0),o){if(Zt(e._startAt=J.set(p,Ct({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!m&&gt(l),startAt:null,delay:0,onUpdate:d&&function(){return xt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it||!s&&!f)&&e._startAt.revert(Un),s&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(c&&g&&!m){if(t&&(s=!1),A=Ct({overwrite:!1,data:"isFromStart",lazy:s&&!m&&gt(l),immediateRender:s,stagger:0,parent:y},C),H&&(A[R.prop]=H),Zt(e._startAt=J.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(it?e._startAt.revert(Un):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,W,W);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gt(l)||l&&!g,S=0;S<p.length;S++){if(x=p[S],P=x._gsap||Sr(p)[S]._gsap,e._ptLookup[S]=$={},lr[P.id]&&jt.length&&Xn(),q=w===p?S:w.indexOf(x),R&&(z=new R).init(x,H||C,e,q,w)!==!1&&(e._pt=T=new ht(e._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(bt){$[bt]=T}),z.priority&&(E=1)),!R||H)for(A in C)ft[A]&&(z=Mr(A,C,e,q,x,w))?z.priority&&(E=1):$[A]=T=Er.call(e,x,A,"get",C[A],q,w,0,i.stringFilter);e._op&&e._op[S]&&e.kill(x,e._op[S]),_&&e._pt&&(Kt=e,U.killTweensOf(x,$,e.globalTime(t)),G=!e.parent,Kt=0),e._pt&&l&&(lr[P.id]=1)}E&&Rr(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!G,u&&t<=0&&v.render(Mt,!0,!0)},fd=function(e,t,n,i,r,o,s,l){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,f;if(!d)for(d=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return fr=1,e.vars[t]="+=0",Pr(e,s),fr=0,l?on(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(f=d.length;f--;)h=d[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=Z(n)+rt(h.e)),h.b&&(h.b=c.s+rt(h.b))},pd=function(e,t){var n=e[0]?Xt(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=Ae({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},gd=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(lt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,d){return s.push({t:d/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},rn=function(e,t,n,i,r){return X(e)?e.call(t,n,i,r):nt(e)&&~e.indexOf("random(")?Me(e):e},bo=xr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xo={};ut(bo+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return xo[a]=1});var J=(function(a){Ka(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:en(i))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,y=i.parent||U,w=(lt(n)||Xa(n)?Gt(n[0]):"length"in i)?[n]:Pt(n),_,v,b,C,S,A,T,x;if(s._targets=w.length?Sr(w):on("GSAP target "+n+" not found. https://gsap.com",!yt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||u||Vn(d)||Vn(c)){i=s.vars;var E=i.easeReverse||i.yoyoEase;if(_=s.timeline=new st({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:w}),_.kill(),_.parent=_._dp=It(s),_._start=0,u||Vn(d)||Vn(c)){if(C=w.length,T=u&&uo(u),zt(u))for(S in u)~bo.indexOf(S)&&(x||(x={}),x[S]=u[S]);for(v=0;v<C;v++)b=Zn(i,xo),b.stagger=0,E&&(b.easeReverse=E),x&&Ae(b,x),A=w[v],b.duration=+rn(d,It(s),v,A,w),b.delay=(+rn(c,It(s),v,A,w)||0)-s._delay,!u&&C===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),_.to(A,b,T?T(v,A,w):0),_._ease=D.none;_.duration()?d=c=0:s.timeline=0}else if(g){en(Ct(_.vars.defaults,{ease:"none"})),_._ease=le(g.ease||i.ease||"none");var P=0,R,z,$;if(lt(g))g.forEach(function(q){return _.to(w,q,">")}),_.duration();else{b={};for(S in g)S==="ease"||S==="easeEach"||gd(S,g[S],b,g.easeEach);for(S in b)for(R=b[S].sort(function(q,H){return q.t-H.t}),P=0,v=0;v<R.length;v++)z=R[v],$={ease:z.e,duration:(z.t-(v?R[v-1].t:0))/100*d},$[S]=z.v,_.to(w,$,P),P+=$.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return f===!0&&!gr&&(Kt=It(s),U.killTweensOf(w),Kt=0),Wt(y,It(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!d&&!g&&s._start===V(y._time)&&gt(h)&&Ul(It(s))&&y.data!=="nested")&&(s._tTime=-W,s.render(Math.max(0,-c)||0)),p&&oo(It(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,d=this._dur,c=i<0,h=i>l-W&&!c?l:i<W?0:i,u,f,g,m,p,y,w,_;if(!d)Kl(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,r,o);if(u=V(h%m),h===l?(g=this._repeat,u=d):(p=V(h/m),g=~~p,g&&g===p?(u=d,g--):u>d&&(u=d)),y=this._yoyo&&g&1,y&&(u=d-u),p=Te(this._tTime,m),u===s&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!y&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(V(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(so(this,c?i:u,o,r,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(d!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=u<s;if(v!==this._inv){var b=v?s:d-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/d);if(this._from&&(this.ratio=w=1-w),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!r&&!p&&(xt(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;_&&_.render(i<0?i:_._dur*_._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&dr(this,i,r,o),xt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&xt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&dr(this,i,!0,!0),(i||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zt(this,1),!r&&!(c&&!s)&&(h||s||y)&&(xt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s,l){ln||pt.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Pr(this,d),c=this._ease(d/this._dur),fd(this,i,r,o,s,c,d,l)?this.resetTo(i,r,o,s,1):(ri(this,0),this.parent||ro(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Je(this):this.scrollTrigger&&this.scrollTrigger.kill(!!it),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Kt&&Kt.vars.overwrite!==!0)._first||Je(this),this.parent&&o!==this.timeline.totalDuration()&&ke(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?Pt(i):s,d=this._ptLookup,c=this._pt,h,u,f,g,m,p,y;if((!r||r==="all")&&Bl(s,l))return r==="all"&&(this._pt=0),Je(this);for(h=this._op=this._op||[],r!=="all"&&(nt(r)&&(m={},ut(r,function(w){return m[w]=1}),r=m),r=pd(s,r)),y=s.length;y--;)if(~l.indexOf(s[y])){u=d[y],r==="all"?(h[y]=r,g=u,f={}):(f=h[y]=h[y]||{},g=r);for(m in g)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&ni(this,p,"_pt"),delete u[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&c&&Je(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return nn(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return nn(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return U.killTweensOf(i,r,o)},e})(dn);Ct(J.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ut("staggerTo,staggerFrom,staggerFromTo",function(a){J[a]=function(){var e=new st,t=ur.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Lr=function(e,t,n){return e[t]=n},So=function(e,t,n){return e[t](n)},yd=function(e,t,n,i){return e[t](i.fp,n)},wd=function(e,t,n){return e.setAttribute(t,n)},ai=function(e,t){return X(e[t])?So:ti(e[t])&&e.setAttribute?wd:Lr},Co=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_d=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dr=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Or=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vd=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},bd=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ni(this,t,"_pt"):t.dep||(n=1),t=i;return!n},xd=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rr=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},ht=(function(){function a(t,n,i,r,o,s,l,d,c){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||Co,this.d=l||this,this.set=d||Lr,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=xd,this.m=n,this.mt=r,this.tween=i},a})();ut(xr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return br[a]=1});St.TweenMax=St.TweenLite=J;St.TimelineLite=St.TimelineMax=st;U=new st({sortChildren:!1,defaults:an,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yt.stringFilter=Tr;var de=[],Kn={},Sd=[],Ya=0,Cd=0,rr=function(e){return(Kn[e]||Sd).map(function(t){return t()})},pr=function(){var e=Date.now(),t=[];e-Ya>2&&(rr("matchMediaInit"),de.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,d;for(s in i)o=Ft.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,d=1);d&&(n.revert(),l&&t.push(n))}),rr("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ya=e,rr("matchMedia"))},Ao=(function(){function a(t,n){this.selector=n&&hr(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cd++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){X(n)&&(r=i,i=n,n=X);var o=this,s=function(){var d=B,c=o.selector,h;return d&&d!==o&&d.data.push(o),r&&(o.selector=hr(r)),B=o,h=i.apply(o,arguments),X(h)&&o._r.push(h),B=d,o.selector=c,o.isReverted=!1,h};return o.last=s,n===X?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},e.ignore=function(n){var i=B;B=null,n(this),B=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof J&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var s=r.getTweens(),l=r.data.length,d;l--;)d=r.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=r.data.length;l--;)d=r.data[l],d instanceof st?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof J)&&d.revert&&d.revert(n);r._r.forEach(function(c){return c(n,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=de.length;o--;)de[o].id===this.id&&de.splice(o,1)},e.revert=function(n){this.kill(n||{})},a})(),Ad=(function(){function a(t){this.contexts=[],this.scope=t,B&&B.data.push(this)}var e=a.prototype;return e.add=function(n,i,r){zt(n)||(n={matches:n});var o=new Ao(0,r||this.scope),s=o.conditions={},l,d,c;B&&!o.selector&&(o.selector=B.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(d in n)d==="all"?c=1:(l=Ft.matchMedia(n[d]),l&&(de.indexOf(o)<0&&de.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(pr):l.addEventListener("change",pr)));return c&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),Jn={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return yo(i)})},timeline:function(e){return new st(e)},getTweensOf:function(e,t){return U.getTweensOf(e,t)},getProperty:function(e,t,n,i){nt(e)&&(e=Pt(e)[0]);var r=Xt(e||{}).get,o=n?io:no;return n==="native"&&(n=""),e&&(t?o((ft[t]&&ft[t].get||r)(e,t,n,i)):function(s,l,d){return o((ft[s]&&ft[s].get||r)(e,s,l,d))})},quickSetter:function(e,t,n){if(e=Pt(e),e.length>1){var i=e.map(function(c){return dt.quickSetter(c,t,n)}),r=i.length;return function(c){for(var h=r;h--;)i[h](c)}}e=e[0]||{};var o=ft[t],s=Xt(e),l=s.harness&&(s.harness.aliases||{})[t]||t,d=o?function(c){var h=new o;Ce._pt=0,h.init(e,n?c+n:c,Ce,0,[e]),h.render(1,h),Ce._pt&&Or(1,Ce)}:s.set(e,l);return o?d:function(c){return d(e,l,n?c+n:c,s,1)}},quickTo:function(e,t,n){var i,r=dt.to(e,Ct((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,d,c){return r.resetTo(t,l,d,c)};return o.tween=r,o},isTweening:function(e){return U.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=le(e.ease,an.ease)),qa(an,e||{})},config:function(e){return qa(yt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ft[s]&&!St[s]&&on(t+" effect requires "+s+" plugin.")}),tr[t]=function(s,l,d){return n(Pt(s),Ct(l||{},r),d)},o&&(st.prototype[t]=function(s,l,d){return this.add(tr[t](s,zt(l)?l:(d=l)&&{},this),d)})},registerEase:function(e,t){D[e]=le(t)},parseEase:function(e,t){return arguments.length?le(e,t):D},getById:function(e){return U.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new st(e),i,r;for(n.smoothChildTiming=gt(e.smoothChildTiming),U.remove(n),n._dp=0,n._time=n._tTime=U._time,i=U._first;i;)r=i._next,(t||!(!i._dur&&i instanceof J&&i.vars.onComplete===i._targets[0]))&&Wt(n,i,i._start-i._delay),i=r;return Wt(U,n,0),n},context:function(e,t){return e?new Ao(e,t):B},matchMedia:function(e){return new Ad(e)},matchMediaRefresh:function(){return de.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pr()},addEventListener:function(e,t){var n=Kn[e]||(Kn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kn[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:nd,wrapYoyo:id,distribute:uo,random:mo,snap:ho,normalize:ed,getUnit:rt,clamp:Zl,splitColor:wo,toArray:Pt,selector:hr,mapRange:po,pipe:Jl,unitize:td,interpolate:rd,shuffle:co},install:Qa,effects:tr,ticker:pt,updateRoot:st.updateRoot,plugins:ft,globalTimeline:U,core:{PropTween:ht,globals:Ja,Tween:J,Timeline:st,Animation:dn,getCache:Xt,_removeLinkedListItem:ni,reverting:function(){return it},context:function(e){return e&&B&&(B.data.push(e),e._ctx=B),B},suppressOverwrites:function(e){return gr=e}}};ut("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Jn[a]=J[a]});pt.add(st.updateRoot);Ce=Jn.to({},{duration:0});var Td=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},kd=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Td(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},ar=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,d;if(nt(r)&&(l={},ut(r,function(c){return l[c]=1}),r=l),t){l={};for(d in r)l[d]=t(r[d]);r=l}kd(s,r)}}}},dt=Jn.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)it?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ar("roundProps",mr),ar("modifiers"),ar("snap",ho))||Jn;J.version=st.version=dt.version="3.15.0";Za=1;yr()&&Ee();var Ed=D.Power0,Md=D.Power1,Pd=D.Power2,Ld=D.Power3,Dd=D.Power4,Od=D.Linear,Rd=D.Quad,Hd=D.Cubic,Fd=D.Quart,Wd=D.Quint,zd=D.Strong,Nd=D.Elastic,$d=D.Back,Id=D.SteppedEase,qd=D.Bounce,Gd=D.Sine,Bd=D.Expo,Vd=D.Circ;var To,Jt,Le,$r,ge,Ud,ko,Ir,Yd=function(){return typeof window<"u"},Vt={},pe=180/Math.PI,De=Math.PI/180,Pe=Math.atan2,Eo=1e8,qr=/([A-Z])/g,Kd=/(left|right|width|margin|padding|x)/i,jd=/[\s,\(]\S/,Nt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xd=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zd=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qd=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jd=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fo=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wo=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tc=function(e,t,n){return e.style[t]=n},ec=function(e,t,n){return e.style.setProperty(t,n)},nc=function(e,t,n){return e._gsap[t]=n},ic=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rc=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},ac=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Y="transform",wt=Y+"Origin",oc=function a(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Vt&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Nt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Bt(i,s)}):this.tfm[e]=o.x?o[e]:Bt(i,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return Nt.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(Y)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wt,t,"")),e=Y}(r||t)&&this.props.push(e,t,r[e])},zo=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sc=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(qr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ir(),(!r||!r.isStart)&&!n[Y]&&(zo(n),i.zOrigin&&n[wt]&&(n[wt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},No=function(e,t){var n={target:e,props:[],revert:sc,save:oc};return e._gsap||dt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},$o,Wr=function(e,t){var n=Jt.createElementNS?Jt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jt.createElement(e);return n&&n.style?n:Jt.createElement(e)},At=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qr,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Oe(t)||t,1)||""},Mo="O,Moz,ms,Ms,Webkit".split(","),Oe=function(e,t,n){var i=t||ge,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Mo[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Mo[o]:"")+e},zr=function(){Yd()&&window.document&&(To=window,Jt=To.document,Le=Jt.documentElement,ge=Wr("div")||{style:{}},Ud=Wr("div"),Y=Oe(Y),wt=Y+"Origin",ge.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$o=!!Oe("perspective"),Ir=dt.core.reverting,$r=1)},Po=function(e){var t=e.ownerSVGElement,n=Wr("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Le.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Le.removeChild(n),r},Lo=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Io=function(e){var t,n;try{t=e.getBBox()}catch{t=Po(e),n=1}return t&&(t.width||t.height)||n||(t=Po(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lo(e,["x","cx","x1"])||0,y:+Lo(e,["y","cy","y1"])||0,width:0,height:0}:t},qo=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Io(e))},ee=function(e,t){if(t){var n=e.style,i;t in Vt&&t!==wt&&(t=Y),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qr,"-$1").toLowerCase())):n.removeAttribute(t)}},te=function(e,t,n,i,r,o){var s=new ht(e._pt,t,n,0,1,o?Wo:Fo);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Do={deg:1,rad:1,turn:1},lc={grid:1,flex:1},ne=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=ge.style,l=Kd.test(t),d=e.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,u=i==="px",f=i==="%",g,m,p,y;if(i===o||!r||Do[i]||Do[o])return r;if(o!=="px"&&!u&&(r=a(e,t,n,"px")),y=e.getCTM&&qo(e),(f||o==="%")&&(Vt[t]||~t.indexOf("adius")))return g=y?e.getBBox()[l?"width":"height"]:e[c],Z(f?r/g*h:r/100*g);if(s[l?"width":"height"]=h+(u?o:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Jt||!m.appendChild)&&(m=Jt.body),p=m._gsap,p&&f&&p.width&&l&&p.time===pt.time&&!p.uncache)return Z(r/p.width*h);if(f&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=h+i,g=e[c],w?e.style[t]=w:ee(e,t)}else(f||o==="%")&&!lc[At(m,"display")]&&(s.position=At(e,"position")),m===e&&(s.position="static"),m.appendChild(ge),g=ge[c],m.removeChild(ge),s.position="absolute";return l&&f&&(p=Xt(m),p.time=pt.time,p.width=m[c]),Z(u?g*r/h:g&&r?h/g*r:0)},Bt=function(e,t,n,i){var r;return $r||zr(),t in Nt&&t!=="transform"&&(t=Nt[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vt[t]&&t!=="transform"?(r=mn(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:si(At(e,wt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=oi[t]&&oi[t](e,t,n)||At(e,t)||Cr(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ne(e,t,r,n)+n:r},dc=function(e,t,n,i){if(!n||n==="none"){var r=Oe(t,e,1),o=r&&At(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=At(e,"borderTopColor"))}var s=new ht(this._pt,e.style,t,0,1,Dr),l=0,d=0,c,h,u,f,g,m,p,y,w,_,v,b;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=At(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=e.style[t],e.style[t]=i,i=At(e,t)||i,m?e.style[t]=m:ee(e,t)),c=[n,i],Tr(c),n=c[0],i=c[1],u=n.match(ce)||[],b=i.match(ce)||[],b.length){for(;h=ce.exec(i);)p=h[0],w=i.substring(l,h.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),p!==(m=u[d++]||"")&&(f=parseFloat(m)||0,v=m.substr((f+"").length),p.charAt(1)==="="&&(p=ue(f,p)+v),y=parseFloat(p),_=p.substr((y+"").length),l=ce.lastIndex-_.length,_||(_=_||yt.units[t]||v,l===i.length&&(i+=_,s.e+=_)),v!==_&&(f=ne(e,t,m,_)||0),s._pt={_next:s._pt,p:w||d===1?w:",",s:f,c:y-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Wo:Fo;return _r.test(i)&&(s.e=0),this._pt=s,s},Oo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cc=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Oo[n]||n,t[1]=Oo[i]||i,t.join(" ")},uc=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,d;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),d=r.length;--d>-1;)s=r[d],Vt[s]&&(l=1,s=s==="transformOrigin"?wt:Y),ee(n,s);l&&(ee(n,Y),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mn(n,1),o.uncache=1,zo(i)))}},oi={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new ht(e._pt,t,n,0,0,uc);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},hn=[1,0,0,1,0,0],Go={},Bo=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ro=function(e){var t=At(e,Y);return Bo(t)?hn:t.substr(7).match(wr).map(Z)},Gr=function(e,t){var n=e._gsap||Xt(e),i=e.style,r=Ro(e),o,s,l,d;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?hn:r):(r===hn&&!e.offsetParent&&e!==Le&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,s=e.nextElementSibling,Le.appendChild(e)),r=Ro(e),l?i.display=l:ee(e,"display"),d&&(s?o.insertBefore(e,s):o?o.appendChild(e):Le.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Nr=function(e,t,n,i,r,o){var s=e._gsap,l=r||Gr(e,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,f=l[0],g=l[1],m=l[2],p=l[3],y=l[4],w=l[5],_=t.split(" "),v=parseFloat(_[0])||0,b=parseFloat(_[1])||0,C,S,A,T;n?l!==hn&&(S=f*p-g*m)&&(A=v*(p/S)+b*(-m/S)+(m*w-p*y)/S,T=v*(-g/S)+b*(f/S)-(f*w-g*y)/S,v=A,b=T):(C=Io(e),v=C.x+(~_[0].indexOf("%")?v/100*C.width:v),b=C.y+(~(_[1]||_[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&s.smooth?(y=v-d,w=b-c,s.xOffset=h+(y*f+w*m)-y,s.yOffset=u+(y*g+w*p)-w):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=b,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[wt]="0px 0px",o&&(te(o,s,"xOrigin",d,v),te(o,s,"yOrigin",c,b),te(o,s,"xOffset",h,s.xOffset),te(o,s,"yOffset",u,s.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},mn=function(e,t){var n=e._gsap||new kr(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),d=At(e,wt)||"0",c,h,u,f,g,m,p,y,w,_,v,b,C,S,A,T,x,E,P,R,z,$,q,H,G,bt,at,kt,L,j,N,ot;return c=h=u=m=p=y=w=_=v=0,f=g=1,n.svg=!!(e.getCTM&&qo(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Y]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Y]!=="none"?l[Y]:"")),i.scale=i.rotate=i.translate="none"),S=Gr(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),d=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Nr(e,H||d,!!H||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,C=n.yOrigin||0,S!==hn&&(E=S[0],P=S[1],R=S[2],z=S[3],c=$=S[4],h=q=S[5],S.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt(z*z+R*R),m=E||P?Pe(P,E)*pe:0,w=R||z?Pe(R,z)*pe+m:0,w&&(g*=Math.abs(Math.cos(w*De))),n.svg&&(c-=b-(b*E+C*R),h-=C-(b*P+C*z))):(ot=S[6],j=S[7],at=S[8],kt=S[9],L=S[10],N=S[11],c=S[12],h=S[13],u=S[14],A=Pe(ot,L),p=A*pe,A&&(T=Math.cos(-A),x=Math.sin(-A),H=$*T+at*x,G=q*T+kt*x,bt=ot*T+L*x,at=$*-x+at*T,kt=q*-x+kt*T,L=ot*-x+L*T,N=j*-x+N*T,$=H,q=G,ot=bt),A=Pe(-R,L),y=A*pe,A&&(T=Math.cos(-A),x=Math.sin(-A),H=E*T-at*x,G=P*T-kt*x,bt=R*T-L*x,N=z*x+N*T,E=H,P=G,R=bt),A=Pe(P,E),m=A*pe,A&&(T=Math.cos(A),x=Math.sin(A),H=E*T+P*x,G=$*T+q*x,P=P*T-E*x,q=q*T-$*x,E=H,$=G),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,y=180-y),f=Z(Math.sqrt(E*E+P*P+R*R)),g=Z(Math.sqrt(q*q+ot*ot)),A=Pe($,q),w=Math.abs(A)>2e-4?A*pe:0,v=N?1/(N<0?-N:N):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bo(At(e,Y)),H&&e.setAttribute("transform",H))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(f*=-1,w+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Z(f),n.scaleY=Z(g),n.rotation=Z(m)+s,n.rotationX=Z(p)+s,n.rotationY=Z(y)+s,n.skewX=w+s,n.skewY=_+s,n.transformPerspective=v+o,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wt]=si(d)),n.xOffset=n.yOffset=0,n.force3D=yt.force3D,n.renderTransform=n.svg?mc:$o?Vo:hc,n.uncache=0,n},si=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hr=function(e,t,n){var i=rt(t);return Z(parseFloat(t)+parseFloat(ne(e,"x",n+"px",i)))+i},hc=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vo(e,t)},me="0deg",un="0px",fe=") ",Vo=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,d=n.rotation,c=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,y=n.force3D,w=n.target,_=n.zOrigin,v="",b=y==="auto"&&e&&e!==1||y===!0;if(_&&(h!==me||c!==me)){var C=parseFloat(c)*De,S=Math.sin(C),A=Math.cos(C),T;C=parseFloat(h)*De,T=Math.cos(C),o=Hr(w,o,S*T*-_),s=Hr(w,s,-Math.sin(C)*-_),l=Hr(w,l,A*T*-_+_)}p!==un&&(v+="perspective("+p+fe),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||o!==un||s!==un||l!==un)&&(v+=l!==un||b?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+fe),d!==me&&(v+="rotate("+d+fe),c!==me&&(v+="rotateY("+c+fe),h!==me&&(v+="rotateX("+h+fe),(u!==me||f!==me)&&(v+="skew("+u+", "+f+fe),(g!==1||m!==1)&&(v+="scale("+g+", "+m+fe),w.style[Y]=v||"translate(0, 0)"},mc=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,d=n.skewX,c=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,y=n.yOffset,w=n.forceCSS,_=parseFloat(o),v=parseFloat(s),b,C,S,A,T;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=De,d*=De,b=Math.cos(l)*h,C=Math.sin(l)*h,S=Math.sin(l-d)*-u,A=Math.cos(l-d)*u,d&&(c*=De,T=Math.tan(d-c),T=Math.sqrt(1+T*T),S*=T,A*=T,c&&(T=Math.tan(c),T=Math.sqrt(1+T*T),b*=T,C*=T)),b=Z(b),C=Z(C),S=Z(S),A=Z(A)):(b=h,A=u,C=S=0),(_&&!~(o+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(_=ne(f,"x",o,"px"),v=ne(f,"y",s,"px")),(g||m||p||y)&&(_=Z(_+g-(g*b+m*S)+p),v=Z(v+m-(g*C+m*A)+y)),(i||r)&&(T=f.getBBox(),_=Z(_+i/100*T.width),v=Z(v+r/100*T.height)),T="matrix("+b+","+C+","+S+","+A+","+_+","+v+")",f.setAttribute("transform",T),w&&(f.style[Y]=T)},fc=function(e,t,n,i,r){var o=360,s=nt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?pe:1),d=l-i,c=i+d+"deg",h,u;return s&&(h=r.split("_")[1],h==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),h==="cw"&&d<0?d=(d+o*Eo)%o-~~(d/o)*o:h==="ccw"&&d>0&&(d=(d-o*Eo)%o-~~(d/o)*o)),e._pt=u=new ht(e._pt,t,n,i,d,Xd),u.e=c,u.u="deg",e._props.push(n),u},Ho=function(e,t){for(var n in t)e[n]=t[n];return e},pc=function(e,t,n){var i=Ho({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,d,c,h,u,f,g;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),o[Y]=t,s=mn(n,1),ee(n,Y),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Y],o[Y]=t,s=mn(n,1),o[Y]=d);for(l in Vt)d=i[l],c=s[l],d!==c&&r.indexOf(l)<0&&(f=rt(d),g=rt(c),h=f!==g?ne(n,l,d,g):parseFloat(d),u=parseFloat(c),e._pt=new ht(e._pt,s,l,h,u-h,Fr),e._pt.u=g||0,e._props.push(l));Ho(s,i)};ut("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});oi[e>1?"border"+a:a]=function(s,l,d,c,h){var u,f;if(arguments.length<4)return u=o.map(function(g){return Bt(s,g,d)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(c+"").split(" "),f={},o.forEach(function(g,m){return f[g]=u[m]=u[m]||u[(m-1)/2|0]}),s.init(l,f,h)}});var Br={name:"css",register:zr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,d,c,h,u,f,g,m,p,y,w,_,v,b,C,S,A,T;$r||zr(),this.styles=this.styles||No(e),A=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(c=t[m],!(ft[m]&&Mr(m,t,n,i,e,r)))){if(f=typeof c,g=oi[m],f==="function"&&(c=c.call(n,i,e,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Me(c)),g)g(this,e,m,c,n)&&(S=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",qt.lastIndex=0,qt.test(d)||(p=rt(d),y=rt(c),y?p!==y&&(d=ne(e,m,d,y)+y):p&&(c+=p)),this.add(s,"setProperty",d,c,i,r,0,0,m),o.push(m),A.push(m,0,s[m]);else if(f!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(n,i,e,r):l[m],nt(d)&&~d.indexOf("random(")&&(d=Me(d)),rt(d+"")||d==="auto"||(d+=yt.units[m]||rt(Bt(e,m))||""),(d+"").charAt(1)==="="&&(d=Bt(e,m))):d=Bt(e,m),u=parseFloat(d),w=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),h=parseFloat(c),m in Nt&&(m==="autoAlpha"&&(u===1&&Bt(e,"visibility")==="hidden"&&h&&(u=0),A.push("visibility",0,s.visibility),te(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Nt[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Vt,_){if(this.styles.save(m),T=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=At(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=c,c=At(e,"perspective"),x?e.style.perspective=x:ee(e,"perspective")}h=parseFloat(c)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||mn(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new ht(this._pt,s,Y,0,1,b.renderTransform,b,0,-1),v.dep=1),m==="scale")this._pt=new ht(this._pt,b,"scaleY",b.scaleY,(w?ue(b.scaleY,w+h):h)-b.scaleY||0,Fr),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(wt,0,s[wt]),c=cc(c),b.svg?Nr(e,c,0,C,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==b.zOrigin&&te(this,b,"zOrigin",b.zOrigin,y),te(this,s,m,si(d),si(c)));continue}else if(m==="svgOrigin"){Nr(e,c,1,C,0,this);continue}else if(m in Go){fc(this,b,m,u,w?ue(u,w+c):c);continue}else if(m==="smoothOrigin"){te(this,b,"smooth",b.smooth,c);continue}else if(m==="force3D"){b[m]=c;continue}else if(m==="transform"){pc(this,c,e);continue}}else m in s||(m=Oe(m)||m);if(_||(h||h===0)&&(u||u===0)&&!jd.test(c)&&m in s)p=(d+"").substr((u+"").length),h||(h=0),y=rt(c)||(m in yt.units?yt.units[m]:p),p!==y&&(u=ne(e,m,d,y)),this._pt=new ht(this._pt,_?b:s,m,u,(w?ue(u,w+h):h)-u,!_&&(y==="px"||m==="zIndex")&&t.autoRound!==!1?Jd:Fr),this._pt.u=y||0,_&&T!==c?(this._pt.b=d,this._pt.e=T,this._pt.r=Qd):p!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=Zd);else if(m in s)dc.call(this,e,m,d,w?w+c:c);else if(m in e)this.add(e,m,d||e[m],w?w+c:c,i,r);else if(m!=="parseTransform"){ei(m,c);continue}_||(m in s?A.push(m,0,s[m]):typeof e[m]=="function"?A.push(m,2,e[m]()):A.push(m,1,d||e[m])),o.push(m)}}S&&Rr(this)},render:function(e,t){if(t.tween._time||!Ir())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bt,aliases:Nt,getSetter:function(e,t,n){var i=Nt[t];return i&&i.indexOf(",")<0&&(t=i),t in Vt&&t!==wt&&(e._gsap.x||Bt(e,"x"))?n&&ko===n?t==="scale"?ic:nc:(ko=n||{})&&(t==="scale"?rc:ac):e.style&&!ti(e.style[t])?tc:~t.indexOf("-")?ec:ai(e,t)},core:{_removeProperty:ee,_getMatrix:Gr}};dt.utils.checkPrefix=Oe;dt.core.getStyleSaver=No;(function(a,e,t,n){var i=ut(a+","+e+","+t,function(r){Vt[r]=1});ut(e,function(r){yt.units[r]="deg",Go[r]=1}),Nt[i[13]]=a+","+e,ut(n,function(r){var o=r.split(":");Nt[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){yt.units[a]="px"});dt.registerPlugin(Br);var Vr=dt.registerPlugin(Br)||dt,Ch=Vr.core.Tween;var Ur={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},ct={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Uo={windSpeed:[.1,15],rainCount:[.1,10],leafCount:[.1,10],snowCount:[.1,10],cloudBaseSize:[.3,2.5],cloudCount:[1,20],splashBounce:[40,120]},Yo={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Ko="1.3.2",jo={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function ye(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function Tt(){return new Date(ye())}function Yr(a,e=-1/0,t=1/0){return typeof a=="number"&&!isNaN(a)&&a>=e&&a<=t}function pn(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Dt(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0}function mt(a,e,t=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**t&&(a=0);let n=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:t}).format(a)}catch{return a.toFixed(t)}}function gn(a,e,t){if(a?.localize)try{let n=a.localize(e);if(n&&n!==e)return n}catch{}return t}function Ot(a,e){if(!isFinite(a))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,e,...t){a&&console.log(`[AWC Dev] ${e}`,...t)}function gc(a){let e=a?.engine_settings;return!e||typeof e!="object"?!1:Object.keys(ct).some(t=>{let n=e[t],[i,r]=Uo[t];return Yr(n,i,r)&&Math.abs(n-ct[t])>1e-9})}function li(a){let e=a?.engine_mode;return e==="auto"||e==="manual"?e:gc(a)?"manual":"auto"}function K(a,e){let t=li(a)==="manual"?a.engine_settings||{}:{},n=(o,s,l,d)=>Yr(o,l,d)?o:s,i=n(t.windSpeed,ct.windSpeed,.1,15),r=i;return Yr(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*i))),{windSpeed:r,rainCount:n(t.rainCount,ct.rainCount,.1,10),leafCount:n(t.leafCount,ct.leafCount,.1,10),snowCount:n(t.snowCount,ct.snowCount,.1,10),cloudBaseSize:n(t.cloudBaseSize,ct.cloudBaseSize,.3,2.5),cloudCount:n(t.cloudCount,ct.cloudCount,1,20),splashBounce:n(t.splashBounce,ct.splashBounce,40,120)}}function Kr(a){a.forEach(e=>{e!=null&&clearTimeout(e)}),a.length=0}function Xo(a){let e=new Set;return a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(n=>{let i=n;for(;i.parent?.parent;)i=i.parent;e.add(i)})}),e}function di(a){window.AnimatedWeatherCardGsap&&Xo(a).forEach(e=>e.pause())}function ci(a){window.AnimatedWeatherCardGsap&&Xo(a).forEach(e=>e.resume())}function jr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function yn(a,e,t,n,i={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let r=a.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){if(!i.clock){if(r.includes("night"))return"clear-night";if(r.includes("sunny"))return"sunny";if(i.night!==void 0)return i.night?"clear-night":"sunny"}let o=Tt(),s;if(n)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(h.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=e??6,d=t??20;return(s<l||s>=d)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function wn(a,e,t){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),t||fn("rain");if(!e||!e.isEnabled())return t||fn(a);let n=jo[a];if(!n)return console.warn(`No color scheme found for animation type: ${a}`),t||fn(a);try{let i=e.getCurrentState(),r=e.getTimeAwareColor(n);return pn(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||fn(a))}catch(i){return console.error("Error getting time-aware color:",i),t||fn(a)}}function fn(a){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return t||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var ui=class ui{constructor(e,t,n){this.animationHandles=[];this.timeouts=[];this.particles=[];this.amounts=null;this.element=e,this.config=t,this.cardConfig=n,this.amounts=t.amounts??null,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}setAmounts(e,t=!1){let n=this.amounts;this.amounts=e,(this.state==="active"||this.state==="paused")&&this.onAmountsChange(n,t)}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}onAmountsChange(e,t){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let n=this.element.querySelector(this.containerSelector);n&&(n.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!ui.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};ui.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var tt=ui;var ie=class{constructor(e,t,n,i){this.layer=e;this.create=t;this.cycle=n;this.onRetire=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let n=0;n<e;n++){let i=this.create(n);this.layer.appendChild(i);let r={el:i};this.items.push(r),t.push(i),this.run(r,!0)}return t}run(e,t){if(this.running){if(e.retiring){this.retire(e);return}e.el.style.visibility="",e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause()}}resize(e,t=1){if(!this.running)return[];let n=Math.max(0,Math.round(e)),i=this.items.filter(l=>!l.retiring);if(n<i.length)return i.slice(n).forEach(l=>{l.retiring=!0}),[];let r=n-i.length;for(let l of this.items){if(r<=0)break;l.retiring&&(l.retiring=!1,r--)}let o=window.AnimatedWeatherCardGsap,s=[];for(let l=0;l<r;l++){let d=this.create(this.items.length);d.style.visibility="hidden",this.layer.appendChild(d);let c={el:d};this.items.push(c),s.push(d);let h=t*Math.random();o?.delayedCall&&h>0?(c.anim=o.delayedCall(h,()=>this.run(c,!1)),this.paused&&c.anim.pause()):this.run(c,!1)}return s}get live(){return this.items.filter(e=>!e.retiring).length}retire(e){e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove(),this.items=this.items.filter(t=>t!==e),this.onRetire?.(e.el)}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function Re(a,e){return e&&a.progress(Math.random()),a}var yc=420*230;function we(a,e){return Math.min(3,Math.max(.6,a*e/yc))||1}function O(a,e){return a+Math.random()*(e-a)}var wc={light:10,rain:18,storm:24,pouring:32},_c={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Zo={light:16,rain:24,storm:34,pouring:42},vc=.3,bc=16,xc=8,Sc=[10,30],Qo="http://www.w3.org/2000/svg";function Cc(a,e,t,n){let i=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*a+l*l*t,c=2*(1-l)*l*e+l*l*n;i+=Math.hypot(d-r,c-o),r=d,o=c}return i}function Ac(a,e,t,n){return Math.max(4,Math.round(wc[a]*e*we(t,n)))}var hi=class extends tt{constructor(t,n,i,r){super(t,n,i);this.kind="rain";this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...n},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i,this.kind=this.amounts?.rain.kind??this.rainKind();let r=this.dropCount(),o=this.getRainColor(this.element.timeOfDayManager),s=this.cardConfig.spill_particles!==!1;this.splashLayer=t,this.splashColor=o,this.splashBounce=n.splashBounce/ct.splashBounce,this.pool=new ie(t,()=>{let l=O(1,this.kind==="pouring"?3:2.4),d=Zo[this.kind],c=document.createElement("div");return c.className="raindrop",c.dataset.kind=this.kind,c.style.cssText=`
                    width: ${l.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${o}, transparent);
                    border-radius: ${l.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,c.dataset.width=l.toFixed(2),c},(l,d,c)=>this.fall(l,i,s,d,c),l=>this.removeParticle(l)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Rain animation started - ${r} drops (${this.kind})`)}dropCount(){let t=this.card;if(!t)return 0;if(this.amounts)return Math.max(4,Math.round(this.amounts.rain.drops*we(t.offsetWidth,t.offsetHeight)));let n=K(this.cardConfig,this.realWindSpeed);return Ac(this.kind,n.rainCount,t.offsetWidth,t.offsetHeight)}onAmountsChange(t,n){this.pool&&(this.kind=this.amounts?.rain.kind??this.rainKind(),this.pool.resize(this.dropCount(),.8).forEach(i=>this.addParticle(i)))}fall(t,n,i,r,o){let s=n.offsetWidth,l=n.offsetHeight,d=this.kind,c=Zo[d];t.dataset.kind!==d&&(t.style.height=`${c}px`,t.dataset.kind=d);let[h,u]=_c[d],f=O(h,u),g=O(6,Math.max(7,s-6)),m=this.rainConfig.splashEnabled&&Math.random()<vc,p=-c,y=m?l-c:i?l+O(60,120):l,w=Math.max(.25,(y-p)/f),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:r});if(v.fromTo(t,{y:p},{y,duration:w,ease:"none"}),m)v.call(()=>this.createSplash(g+_/2,l),[],w),v.to(t,{scaleY:0,duration:c/f,ease:"none"},w);else if(i){let b=(l-c-p)/f;v.to(t,{opacity:0,duration:w-b,ease:"power1.in"},b)}return Re(v,o)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,n){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,n);for(let i of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%bc;let o=O(.22,.28),s=O(4,10)*this.splashBounce,l=i*O(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:n-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+l,duration:o,ease:"power1.out"},0).to(r,{y:n-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:n-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,n){let i=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(Qo,"svg"),r.classList.add("rain-rebound");let m=document.createElementNS(Qo,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,r.appendChild(m),i.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%xc;let o=r.firstChild,[s,l]=Sc,d=O(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*O(10,24)*this.splashBounce,h=O(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let u=Cc(c,-2*d,2*c,h),f=Math.min(u*.45,6+d*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(u+f).toFixed(1)}`;let g=O(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:n,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?wn("lightning",t,"var(--weather-storm-rain-color)"):wn("rain",t,"var(--weather-rain-color)")}};var Tc=36,re=[2,6],Xr=[20,38],Jo=10,kc=.6;function Ec(a,e,t){return Math.max(6,Math.round(Tc*a*we(e,t)))}function Zr(a){return Math.min(2.2,Math.max(.3,a/ct.windSpeed))}var mi=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.swingOf=new WeakMap;this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...n},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i;let r=this.flakeCount(),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Zr(n.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new ie(t,()=>this.createFlake(o),(d,c,h)=>this.fall(d,i,l,s,c,h),d=>{let c=this.swingOf.get(d);c?.kill(),this.swings=this.swings.filter(h=>h!==c),this.removeParticle(d)}),this.pool.start(r).forEach(d=>this.addParticle(d)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}flakeCount(){let t=this.card;if(!t)return 0;let n=this.amounts?.snow??K(this.cardConfig,this.realWindSpeed).snowCount;return Ec(n,t.offsetWidth,t.offsetHeight)}onAmountsChange(t,n){this.pool?.resize(this.flakeCount(),6).forEach(i=>this.addParticle(i))}createFlake(t){let n=O(re[0],re[1]),i=(n-re[0])/(re[1]-re[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=n.toFixed(2),r.style.cssText=`
            width: ${n.toFixed(2)}px;
            height: ${n.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*i).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-Jo});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:Jo,duration:O(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.state==="paused"&&o.pause(),this.swings.push(o),this.swingOf.set(r,o),r}fall(t,n,i,r,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(t.dataset.size||"4"),h=(c-re[0])/(re[1]-re[0]),u=(Xr[0]+(Xr[1]-Xr[0])*h)*O(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<kc,g=-c*2,m=f?d-this.pileHeight()-c:r?d+O(60,120):d+c,p=m-g,y=Math.max(.5,p/u),w=p*O(.04,.13)*i,_=O(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(v.fromTo(t,{y:g},{y:m,x:_+w,duration:y,ease:"none"}),f)v.call(()=>this.addToAccumulation(),[],y),v.to(t,{opacity:0,duration:.6,ease:"power1.out"},y);else if(r){let b=Math.min(y,(d-g)/u);v.to(t,{opacity:0,duration:Math.max(.1,y-b),ease:"power1.in"},b)}return Re(v,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(i=>i.remove());let n=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,n=this.snowConfig.accumulationHeight;if(!t?.parentNode||n<=0)return;let i=this.pileHeight();if(i>=n)return;let r=Math.min(n,i+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/n,opacity:Math.min(.9,r/n),duration:.3,ease:"power2.out"})}};var Mc=30,ts=[150,230],Pc=.3,pi=6,gi=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...n},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i;let r=this.pelletCount(),o=this.cardConfig.spill_particles!==!1,s=Zr(n.windSpeed)*.5;this.pool=new ie(t,()=>{let l=O(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,i,s,o,d,c),l=>this.removeParticle(l)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}pelletCount(){let t=this.card;if(!t)return 0;let n=this.amounts?.sleet??K(this.cardConfig,this.realWindSpeed).snowCount;return Math.max(6,Math.round(Mc*n*we(t.offsetWidth,t.offsetHeight)))}onAmountsChange(t,n){this.pool?.resize(this.pelletCount(),1.5).forEach(i=>this.addParticle(i))}fall(t,n,i,r,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(t.dataset.size||"2"),h=O(ts[0],ts[1]),u=Math.random()<Pc,f=-c*2,g=u?d-c:r?d+O(60,120):d+c,m=g-f,p=Math.max(.3,m/h),y=m*O(.03,.08)*i,w=O(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:w,opacity:O(.8,1),rotation:O(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(t,{y:f},{y:g,x:w+y,duration:p,ease:"none"}),u)_.call(()=>this.addToPile(n),[],p),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},p);else if(r){let v=Math.min(p,(d-f)/h);_.to(t,{opacity:0,duration:Math.max(.1,p-v),ease:"power1.in"},v)}return Re(_,s)}addToPile(t){if(this.state!=="active")return;let n=t.querySelector(".sleet-accumulation");n||(n=document.createElement("div"),n.className="sleet-accumulation",n.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${pi}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(n));let i=parseFloat(n.getAttribute("data-target-height")||"0");if(i>=pi)return;let r=Math.min(pi,i+.4);n.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(n,{scaleY:r/pi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function es(a,e,t,n){return t!==null&&t>0?a*Math.max(0,t-e):a*.6*n}var Qr=[90,160];function is(a,e,t,n,i,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=n.offsetWidth,l=n.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,u=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*t;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let m=-f-10,p=s+(r?60+Math.random()*80:f+10),y=(Qr[0]+Math.random()*(Qr[1]-Qr[0]))*_e(e.windSpeed)*(h?.6:1),w=(p-m)/y,_=Math.min(w,(s-m)/y),v=u?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let b=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),i&&i(o)}});return b.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:w,ease:"none"},0).to(o,{y:d+v,duration:w,ease:h?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:w,ease:"none"},0),r&&w>_&&b.to(o,{opacity:0,duration:w-_,ease:"power1.in"},_),o}function rs(a,e,t,n,i,r,o=.2){let s=document.createElement("div");s.className="wind-swoosh-gsap";let l=Math.random(),d=l>.6,c=l>1-o;s.style.position="absolute",s.style.height=(c?2:1)*t+"px",s.style.borderRadius=d?"2px 1px":"1px",s.style.transformOrigin="left center",s.style.zIndex="10";let h=i.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";s.style.background=`linear-gradient(90deg, transparent 0%, ${h} 50%, transparent 100%)`;let u=Math.max(15,(20+Math.random()*60)*t);s.style.width=u+"px";let f=n.offsetWidth,g=n.offsetHeight,m=g*.15+Math.random()*(g*.7);window.AnimatedWeatherCardGsap.set(s,{x:-u,y:m,rotation:d?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(s);let y=(f+u*2)/(Lc*_e(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s),r&&r(s)}}).to(s,{scaleX:1,opacity:c?.35:.22,duration:.3,ease:"power2.out"},0).to(s,{x:f+u,rotation:d?m>g/2?5:-5:0,duration:y,ease:"none"},0).to(s,{opacity:0,scaleX:.3,duration:Math.min(.5,y*.3)},y-Math.min(.5,y*.3)),s}var Lc=230,Dc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function _e(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/ct.windSpeed)))}var Oc=12;function Rc(a){let e=Math.round(70*a),t=Math.round(35*a);return{width:e,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:e-Math.round(9*a)-t,y:Math.round(-13*a),size:t}]}}var as=a=>a>0?Math.ceil(a*3)+1:0,ns=new Map;function Hc(a,e,t,n){let i=[a,e,t,n].join(","),r=ns.get(i);if(r)return r;let o=as(t),s=Math.ceil((a+2*o)*n),l=Math.ceil((e+2*o)*n),d=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},c=null,[h,u]=d();if(u){let[f,g,m]=[o*n,o*n,Math.min(50,a/2,e/2)*n],[p,y]=[f+a*n,g+e*n];if(u.fillStyle="#000",u.beginPath(),u.moveTo(f+m,g),u.arcTo(p,g,p,y,m),u.arcTo(p,y,f,y,m),u.arcTo(f,y,f,g,m),u.arcTo(f,g,p,g,m),u.closePath(),u.fill(),t>0){let[w,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*t*n,_.shadowOffsetX=s,_.drawImage(h,-s,0),c=w.toDataURL())}else c=h.toDataURL()}return c&&ns.set(i,c),c}function _n(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()})}function Fc(a){return Math.min(1,Math.max(.5,a/160))||1}function Jr(a){return[Math.ceil(a*.4),Math.ceil(a*.4),Math.ceil(a*.6)]}function os(a,e,t,n,i,r,o={}){let s=i.offsetWidth,l=i.offsetHeight,d=Dc[t],c=o.windFactor??_e(e.windSpeed),h=Fc(l),u=document.createElement("div");u.className=`cloud-gsap cloud-gsap-${d.name}-${n}`;let f=e.cloudBaseSize*d.scale,g=1+(n-1)*.15,m=Math.max(.3,Math.min(2.5,f))*g*h,p=Rc(m);u.style.position="absolute",u.style.opacity=d.opacity.toString(),u.dataset.awcO=String(d.opacity),u.style.zIndex=(10+t).toString();let y=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][t],w=r?.color_palette==="theme"?0:d.blur,_=[{x:0,y:0,width:p.width,height:p.height},...p.puffs.map(L=>({x:L.x,y:L.y,width:L.size,height:L.size}))],v=Math.min(3,Math.max(1,window.devicePixelRatio||1)),b=_.map(L=>Hc(L.width,L.height,w,v)),C=b.every(Boolean),S=C?as(w):0;if(u.style.width=p.width+"px",u.style.height=p.height+"px",C)u.classList.add("cloud-masked"),_.forEach((L,j)=>{let N=document.createElement("div");N.style.position="absolute",N.style.left=L.x-S+"px",N.style.top=L.y-S+"px",N.style.width=L.width+2*S+"px",N.style.height=L.height+2*S+"px",N.style.background=y;for(let ot of["-webkit-",""])N.style.setProperty(`${ot}mask-image`,`url("${b[j]}")`),N.style.setProperty(`${ot}mask-size`,"100% 100%"),N.style.setProperty(`${ot}mask-repeat`,"no-repeat");u.appendChild(N)});else{u.style.borderRadius="50px",u.style.background=y,w>0&&(u.style.filter=`blur(${w}px)`);for(let L of p.puffs){let j=document.createElement("div");j.style.position="absolute",j.style.left=L.x+"px",j.style.top=L.y+"px",j.style.width=L.size+"px",j.style.height=L.size+"px",j.style.borderRadius="50px",j.style.background=y,u.appendChild(j)}}let A=p.width+2*S,E=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][t][n-1]||15+t*10)/60,P=p.height+Math.max(S,Math.ceil(w*3))+2,R=Number(i.dataset?.cloudBand),z=Number.isFinite(R)&&i.dataset?.cloudBand!==void 0?R:null,$=Math.max(150+t*50,A+Oc),q=d.speed*c*(.9+Math.random()*.2),H=(s+2*$)/q,G=document.createElement("div");G.className="cloud-track",G.dataset.awcF=String(E),G.dataset.awcB=String(P),G.appendChild(u),window.AnimatedWeatherCardGsap.set(u,{opacity:d.opacity});let bt=[G];if(r?.color_palette==="theme"){let L=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),j=u.cloneNode(!0);j.className="cloud-occluder",j.style.opacity="1";for(let ot of[j,...Array.from(j.querySelectorAll("div"))])ot.style.background&&(ot.style.background="var(--awc-card-bg)");let N=G.cloneNode(!1);N.appendChild(j),L?.appendChild(N),bt.push(N)}let at=bt.length>1?bt:G;window.AnimatedWeatherCardGsap.set(at,{xPercent:0,x:-$,y:es(E,P,z,l)}),a.appendChild(G);let kt=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5,...o.enter!==void 0?{delay:o.enter*H}:{},...o.onRepeat?{onRepeat:o.onRepeat}:{}});return kt.fromTo(at,{xPercent:0,x:-$},{xPercent:100,x:$,duration:H,ease:"none"}),o.enter===void 0&&kt.progress(Math.random()),{layer:t,i:n,tracks:bt,tl:kt}}function ss(a){let e=a.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function ls(a,e,t,n,i){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let o=n.offsetWidth,s=n.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[t]||l[2],c=i.custom_colors?.fog_color,h=(i.color_palette||"default")!=="theme"?pn(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),f=o*d.scale;r.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${f}px;
        height: ${d.height}px;
        opacity: ${d.opacity};
        filter: blur(${d.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let C=0;C<u;C++){let S=document.createElement("div"),A=f/u*(2+Math.random()*1.2),T=d.height*(1.2+Math.random()*1.6),x=f/u*C-A*.3,E=(Math.random()-.5)*(d.height*.5);S.style.cssText=`
            position: absolute;
            left: ${x}px;
            top: ${E}px;
            width: ${A}px;
            height: ${T}px;
            background: radial-gradient(ellipse ${A/2}px ${T/2}px at center, 
                ${h} 0%, 
                ${h} 40%, 
                transparent 70%);
            border-radius: ${A/2}px ${T/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,r.appendChild(S)}a.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),m=15/d.speed,p=Math.max(8,m/g),y=o*d.scale,w=-y,_=o+y;window.AnimatedWeatherCardGsap.set(r,{x:w,opacity:d.opacity});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});v.to(r,{x:_,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:w})}});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return b.to(r,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:v,opacity:b}}function yi(a){a.querySelectorAll(".fog-layer, .fog-amount").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Wc=3,zc=2,ds=[900,1400],cs=[1800,2600],Nc=.2,wi=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...n},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(O(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=K(this.cardConfig,this.realWindSpeed),i=n.leafCount*(this.amounts?.leaves??1),r=Math.max(1,Math.round(Wc*i));if(this.leaves.size<r){let o=is(this.layer(),n,1,this.card(),s=>this.forget(s,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(o),this.addParticle(o)}this.scheduleLeaf(O(ds[0],ds[1])/Math.max(.5,i))},t)}scheduleSwoosh(t){this.swooshTimer=setTimeout(()=>{if(this.state!=="active")return;let n=K(this.cardConfig,this.realWindSpeed),i=this.amounts?.gusts??0;if(this.swooshes.size<zc+Math.round(2*i)){let r=rs(this.layer(),n,1,this.card(),this.cardConfig,o=>this.forget(o,this.swooshes),Nc+.3*i);this.swooshes.add(r),this.addParticle(r)}this.scheduleSwoosh(O(cs[0],cs[1])/(1+i))},t)}forget(t,n){n.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),di(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){ci(this.layer()),this.clearTimers(),this.scheduleLeaf(O(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var vn=[6e3,18e3],$c=[1500,6e3],us=.16,_i=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:i.disable_lightning_shake||!1,minInterval:vn[0],maxInterval:vn[1],...n},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[n,i]=$c;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},n+Math.random()*(i-n)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),n=this.element.querySelector(".animated-weather-card");if(!t||!n)return;let i=n.offsetWidth,r=n.offsetHeight,o=parseFloat(n.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(i-60),c=20*o,h=20,u=[d+",0"];for(let p=0;p<h;p++){let y=d+(Math.random()*c-c/2),w=r/h*(p+1);u.push(y+","+w)}l.setAttribute("d","M"+u.join(" L"));let f=this.element.timeOfDayManager,g=wn("lightning",f,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;m.to(n,{y:p,duration:.06,ease:"power2.out"},us).to(n,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},us+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let n=this.element.querySelector(this.layerSelector);n&&(n.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),n.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var Ic=["dawn","day","dusk","night"],na=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],qc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},fs=(a,e,t)=>Math.min(e,Math.max(a,t)),ae=(a,e,t)=>a+(e-a)*t;function Gc(a,e,t){let n=(e-a+540)%360-180;return(a+n*t+360)%360}function Ut(a,e,t){let n=([m,p,y])=>[m,p*Math.cos(y*Math.PI/180),p*Math.sin(y*Math.PI/180)],[i,r,o]=n(a),[s,l,d]=n(e),c=ae(i,s,t),h=ae(r,l,t),u=ae(o,d,t),f=Math.hypot(h,u),g=f<1e-6?a[2]:(Math.atan2(u,h)*180/Math.PI+360)%360;return[c,f,g]}function ta([a,e,t]){let n=t*Math.PI/180,i=e*Math.cos(n),r=e*Math.sin(n),o=(a+.3963377774*i+.2158037573*r)**3,s=(a-.1055613458*i-.0638541728*r)**3,l=(a-.0894841775*i-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var Bc=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Rt(a){let e=n=>n.every(i=>i>=-1e-4&&i<=1.0001),t=ta(a);if(!e(t)){let n=0,i=a[1];for(let r=0;r<24;r++){let o=(n+i)/2;e(ta([a[0],o,a[2]]))?n=o:i=o}t=ta([a[0],n,a[2]])}return t.map(n=>Bc(fs(0,1,n)))}var ps=a=>Math.round(fs(0,1,a)*255);function Yt(a){return"#"+a.map(e=>ps(e).toString(16).padStart(2,"0")).join("")}function hs(a,e){return`rgba(${a.map(ps).join(", ")}, ${Number(e.toFixed(3))})`}function ea(a,e){return[.15+(a[0]-.15)*.42,a[1]*ae(.75,.5,e),Gc(a[2],262,.45)]}function Vc(a,e){let t=qc[a],n=1-t.overcast*.7,i={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:ae(.46,.28,t.overcast)};if(a==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...i,bottom:Ut(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...i,scrimAlpha:.2}}switch(e){case"night":return{top:ea(t.top,t.overcast),mid:ea(t.mid,t.overcast),bottom:ea(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:ae(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:Ut(t.top,[t.top[0]*.8,.075,292],.5*n),mid:Ut(t.mid,[t.mid[0]*.88,.065,350],.42*n),bottom:Ut(t.bottom,[t.bottom[0]*.92,.115,52],.72*n),glow:Ut(t.glow,[.82,.13,58],n),glowAlpha:ae(t.glowAlpha,.6,n*.6),scrimAlpha:i.scrimAlpha+.04};case"dawn":return{top:Ut(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*n),mid:Ut(t.mid,[t.mid[0]*.95,.05,330],.3*n),bottom:Ut(t.bottom,[t.bottom[0]*.95,.085,32],.62*n),glow:Ut(t.glow,[.88,.09,40],n),glowAlpha:ae(t.glowAlpha,.5,n*.5),scrimAlpha:i.scrimAlpha+.04};default:return i}}function Uc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function He(a,e){let t=Vc(a,e);return{top:Yt(Rt(t.top)),mid:Yt(Rt(t.mid)),bottom:Yt(Rt(t.bottom)),glow:hs(Rt(t.glow),t.glowAlpha),scrim:hs(Rt(Uc(t.top)),t.scrimAlpha)}}var Fe=[.985,.006,250],vi=.8,gs=.55,ys=.4,bi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},ws={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},_s={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},xi=312,vs=a=>a.clientWidth>=640&&a.clientHeight>=540;function We(a,e){let t=n=>`${Math.round(n*100)}%`;return`radial-gradient(${t(a.rx)} ${t(a.ry)} at ${t(a.cx)} ${t(a.cy)}, ${e}, transparent ${t(a.fade)})`}function bs(){let a=[];for(let e of na)for(let t of Ic){let n=He(e,t),i=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;a.push(`${i} { --awc-sky-top: ${n.top}; --awc-sky-mid: ${n.mid}; --awc-sky-bottom: ${n.bottom}; --awc-sky-glow: ${n.glow}; --awc-sky-scrim: ${n.scrim}; }`)}return a.join(`
`)}function Si(a,e,t){return a==null||!Number.isFinite(a)?t?"day":"night":a<-6?"night":a<6?e?"dawn":"dusk":"day"}var Lt=3.2,ze="cubic-bezier(0.37, 0, 0.63, 1)",xs={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Ss=Object.keys(xs),ia=Ss.filter(a=>a.startsWith("--awc-sky-"));function Cs(){return Ss.map(a=>`${a} ${Lt}s ${ze}`).join(`,
            `)}var ms=!1;function Ci(){if(ms)return;ms=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[e,t]of Object.entries(xs))try{a.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var ra=Array.from({length:25},(a,e)=>[e%5/2-1,Math.floor(e/5)/2-1]).filter(([a,e])=>a*a+e*e<=1),Yc=1.9,Kc=.6,jc=.3,Xc=.3,Ai=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.clouds=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...n},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");_n(t);let r=this.amounts?.clouds??Jr(this.cloudCount(n));this.startWindFactor=_e(n.windSpeed),this.clouds=[],r.forEach((o,s)=>{for(let l=1;l<=o;l++)this.addCloud(s,l,n)}),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${this.clouds.length} clouds`)}async onStop(){this.clouds.forEach(({tl:n})=>{window.AnimatedWeatherCardGsap?.killTweensOf(n),n&&typeof n.kill=="function"&&n.kill()}),this.clouds=[],this.looks?.kill(),this.looks=null;let t=this.element.querySelector(this.layerSelector);t&&_n(t),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.clouds.forEach(({tl:t})=>{t&&typeof t.pause=="function"&&t.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.clouds.forEach(({tl:t})=>{t&&typeof t.resume=="function"&&t.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(t=!1){if(this.occlude()){this.lightSun(1,t);return}let n=this.element.querySelector(".sun-track .sun"),i=n?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=_=>Number(_.dataset.awcO)||0;if(!n||!i?.width||getComputedStyle(n).opacity==="0"){r.forEach(_=>this.dense(_,o(_),t));return}let s=i.width/2,l=i.left+s,d=i.top+i.height/2,c=this.element.querySelector(this.containerSelector),h=c?parseFloat(getComputedStyle(c).opacity):1,u=Number.isFinite(h)?h:1,f=_=>{let v=_?parseFloat(getComputedStyle(_).opacity):1;return Number.isFinite(v)?v:1},g=r.map(_=>Math.min(o(_),f(_)||0)*f(_.parentElement)*Kc*u),m=r.map(_=>[_,...Array.from(_.children)].map(v=>v.getBoundingClientRect()).filter(v=>v.width&&v.height)),p=(_,v,b)=>m[_].some(C=>{let S=Math.min(C.width,C.height)/2,A=v-Math.min(Math.max(v,C.left+S),C.right-S),T=b-Math.min(Math.max(b,C.top+S),C.bottom-S);return A*A+T*T<=S*S}),y=0,w=r.map(()=>0);for(let[_,v]of ra)y+=r.reduce((b,C,S)=>p(S,l+_*s,d+v*s)?b*(1-g[S]):b,1),r.forEach((b,C)=>{p(C,l+_*s*1.25,d+v*s*1.25)&&(w[C]+=1/ra.length)});this.lightSun(y/ra.length,t),r.forEach((_,v)=>this.dense(_,o(_)*(1+(Yc-1)*Math.min(1,w[v]*3)),t))}occlude(){let t=this.element.querySelector(".animated-weather-card");if(!t||this.cardConfig.color_palette!=="theme")return!1;let n=t.closest("ha-card"),i=n?getComputedStyle(n):null,r=!!i&&(i.backgroundImage||"none")==="none"&&!!i.backgroundColor&&!/rgba|\/|transparent/.test(i.backgroundColor);return r&&t.style.getPropertyValue("--awc-card-bg")!==i.backgroundColor&&t.style.setProperty("--awc-card-bg",i.backgroundColor),t.toggleAttribute("data-occlude",r),r}dense(t,n,i){let r=(Math.round(Math.min(.95,n)*100)/100).toString();t.dataset.awcV!==r&&(t.dataset.awcV=r,i?window.AnimatedWeatherCardGsap?.set(t,{opacity:r}):window.AnimatedWeatherCardGsap?.to(t,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(t,n=!1){let i=this.element.querySelector(".sun-track"),r=Math.round(t*100)/100;!i||r===this.sunLit&&!n||(this.sunLit=r,n?window.AnimatedWeatherCardGsap?.set(i,{opacity:r}):window.AnimatedWeatherCardGsap?.to(i,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=K(this.cardConfig,this.realWindSpeed),n=_e(t.windSpeed)/this.startWindFactor;this.clouds.forEach(({tl:i})=>{window.AnimatedWeatherCardGsap.to(i,{timeScale:n,duration:Lt,ease:"sine.inOut",overwrite:!0})})}cloudCount(t){let n=Math.min(6,Math.max(1,Math.round(t.cloudCount)));return this.cloudsConfig.isPartlyCloudy?Math.max(1,Math.round(n*.6)):n}addCloud(t,n,i,r){let o=this.element.querySelector(this.layerSelector),s=this.element.querySelector(".animated-weather-card"),l=os(o,i,t,n,s,this.cardConfig,{enter:r,windFactor:this.startWindFactor,onRepeat:()=>{(l.retiring||l.hidden)&&this.retire(l)}}),d=_e(i.windSpeed)/this.startWindFactor;return Math.abs(d-1)>1e-6&&l.tl.timeScale(d),this.state==="paused"&&l.tl.pause(),this.clouds.push(l),l}retire(t){t.tl.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.tl);for(let n of t.tracks)window.AnimatedWeatherCardGsap?.killTweensOf([n,...Array.from(n.children)]),n.remove();this.clouds=this.clouds.filter(n=>n!==t)}freePlace(t){let n=new Set(this.clouds.filter(r=>r.layer===t).map(r=>r.i)),i=1;for(;n.has(i);)i++;return i}onAmountsChange(t,n){let i=K(this.cardConfig,this.realWindSpeed);(this.amounts?.clouds??Jr(this.cloudCount(i))).forEach((o,s)=>n?this.showClouds(s,o,i):this.driftClouds(s,o,i))}driftClouds(t,n,i){let r=this.clouds.filter(s=>s.layer===t).sort((s,l)=>s.i-l.i);r.filter(s=>s.hidden).forEach(s=>this.retire(s));let o=r.filter(s=>!s.hidden&&!s.retiring);for(let s of r.filter(l=>l.retiring)){if(o.length>=n)break;s.retiring=!1,o.push(s)}for(let s=0,l=n-o.length;s<l;s++)this.addCloud(t,this.freePlace(t),i,s*Xc);o.sort((s,l)=>s.i-l.i).slice(n).forEach(s=>{s.retiring=!0})}showClouds(t,n,i){let r=this.clouds.filter(o=>o.layer===t).sort((o,s)=>o.i-s.i);r.forEach((o,s)=>this.fadeCloud(o,s<n));for(let o=r.length;o<n;o++){let s=this.addCloud(t,this.freePlace(t),i);window.AnimatedWeatherCardGsap?.set(s.tracks,{opacity:0}),s.hidden=!0,this.fadeCloud(s,!0)}}fadeCloud(t,n){t.retiring=!1,!!t.hidden!=!n&&(t.hidden=!n,window.AnimatedWeatherCardGsap?.to(t.tracks,{opacity:n?1:0,duration:jc,ease:"sine.out",overwrite:"auto"}))}};var Ti=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...n},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");yi(i);let r=document.createElement("div");r.className="fog-amount",t.appendChild(r),window.AnimatedWeatherCardGsap.set(r,{opacity:this.amounts?.fog??1}),this.fogTimelines=[];for(let o=0;o<this.fogConfig.layerCount;o++){let s=ls(r,n,o,i,this.cardConfig);this.fogTimelines.push(s.movement),this.fogTimelines.push(s.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(i=>{i&&typeof i.kill=="function"&&i.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer, .fog-amount")?.forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}onAmountsChange(t,n){let i=this.element.querySelector(".fog-amount");i&&window.AnimatedWeatherCardGsap?.to(i,{opacity:this.amounts?.fog??1,duration:n?.3:Lt,ease:"sine.inOut",overwrite:!0})}};var Zc=5,As=353,Qc=1440,Jc=1/2,tu=.25,eu=.2,nu=2,iu=2;function aa(a,e){let t=e>0?Math.min(e,Qc):As;return Math.max(15,Math.round(a*Zc*Math.max(1,t/As)))}var ki=4;function ru(a,e){return Math.round(Math.min(1,Math.max(0,a*ki-e))*100)/100}function Mi(a,e,t=0){a.querySelectorAll(".stars-band").forEach((n,i)=>{let r=ru(e,i%ki);t>0&&window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(n,{opacity:r,duration:t,ease:"sine.inOut",overwrite:!0}):(window.AnimatedWeatherCardGsap?.killTweensOf(n),n.style.opacity=r<1?String(r):"")})}var Ts=20,ks=10,au=12,Es=(a,e)=>a.right>e.left-Ts&&a.left<e.right+Ts&&a.bottom>e.top-ks&&a.top<e.bottom+ks;function bn(a){let e=[],t=document.createRange();if(typeof t.getClientRects!="function")return e;let n=".animation-layer, .animation-container, style, script",i=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=i.nextNode();r;r=i.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(n))){t.selectNodeContents(r);for(let o of Array.from(t.getClientRects()))o.width&&o.height&&e.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(n))continue;let o=r.getBoundingClientRect();o.width&&o.height&&e.push(o)}return e}function ou(a,e){for(let t of a){let n=t.getBoundingClientRect();t.classList.toggle("awc-veiled",!!n.width&&e.some(i=>Es(n,i)))}}function Ms(a){let e=a.querySelectorAll(".stars-field .star-gsap");if(!e.length)return;let t=a.querySelector(".moon-gsap")?.getBoundingClientRect();ou(e,t?.width?[...bn(a),t]:bn(a))}function oa(a,e,{moon:t,still:n=!1,words:i=[],share:r=1}){let o=document.createElement("div");o.className="stars-field";let s=Array.from({length:ki},()=>o.appendChild(Object.assign(document.createElement("div"),{className:"stars-band"}))),l=t?document.createElement("div"):null;if(l){l.className="moon-gsap",a.appendChild(l);let h=l.getBoundingClientRect();h.width&&h.height&&(i=[...i,h])}let d=a.getBoundingClientRect(),c=i.length>0&&d.width>0&&d.height>0;for(let h=0;h<e;h++){let u=document.createElement("div");u.className="star-gsap";let f=1+Math.random()*3,g=.3+Math.random()*.5,m=0,p=0,y=!1;for(let w=0;w<(c?au:1)&&!y;w++){m=Math.random()*100,p=Math.random()*70;let _=d.left+m/100*d.width,v=d.top+p/100*d.height;y=!c||!i.some(b=>Es({left:_,top:v,right:_+f,bottom:v+f},b))}if(y||u.classList.add("awc-veiled"),u.style.cssText=`
            width: ${f.toFixed(2)}px;
            height: ${f.toFixed(2)}px;
            left: ${m.toFixed(2)}%;
            top: ${p.toFixed(2)}%;
            opacity: ${g.toFixed(2)};
        `,!n&&Math.random()<Jc){let w=nu+Math.random()*iu;u.classList.add("twinkle"),u.style.setProperty("--star-o",g.toFixed(2)),u.style.setProperty("--star-dim",(g*(tu+Math.random()*eu)).toFixed(2)),u.style.animationDuration=`${w.toFixed(2)}s`,u.style.animationDelay=`${(-Math.random()*w).toFixed(2)}s`}s[h%ki].appendChild(u)}return Mi(o,r),l?a.insertBefore(o,l):a.appendChild(o),l?[o,l]:[o]}var Ei=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...n},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");i?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=aa(n.cloudCount,t.clientWidth||i?.clientWidth||0);for(let o of oa(t,r,{moon:this.starsConfig.showMoon,words:i?bn(i):[],share:this.amounts?.stars??1}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(n=>n.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}onAmountsChange(t,n){let i=this.element.querySelector(`${this.layerSelector} .stars-field`);i&&Mi(i,this.amounts?.stars??1,n?.3:Lt)}};var Pi=class extends tt{constructor(t,n,i,r){super(t,n,i);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var Li=class{constructor(e,t,n,i){this.amounts=null;this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=n,this.realWindSpeed=i}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let n={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1,amounts:this.amounts},i=null;switch(e){case"rain":i=new hi(this.element,{...n,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":i=new mi(this.element,{...n,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":i=new gi(this.element,{...n,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":i=new wi(this.element,{...n,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":i=new _i(this.element,{...n,disableShake:this.config.disable_lightning_shake||!1,minInterval:vn[0],maxInterval:vn[1]},this.config,this.realWindSpeed);break;case"clouds":i=new Ai(this.element,{...n,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":i=new Ti(this.element,{...n,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":i=new Ei(this.element,{...n,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":i=new Pi(this.element,n,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await i.start(),this.activeAnimations.set(e,i),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),i}catch(n){return console.error(`Failed to start modular ${e} animation:`,n),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(n){console.error(`Error stopping modular ${e} animation:`,n)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(n){console.error(`Error pausing modular ${e} animation:`,n)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(n){console.error(`Error resuming modular ${e} animation:`,n)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,n]of this.activeAnimations)try{n.setWindSpeed(e)}catch(i){console.warn(`Failed to update wind speed for ${t}:`,i)}}}updateAmounts(e,t=!1){if(JSON.stringify(e)!==JSON.stringify(this.amounts)){this.amounts=e;for(let[n,i]of this.activeAnimations)try{i.setAmounts(e,t)}catch(r){console.warn(`Failed to update amounts for ${n}:`,r)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var Di=class{constructor(e,t,n,i){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.homeAmounts=null;this.hourAmounts=null;this.element=e,this.config=t,this.isPausedFn=n,this.timeOfDayManager=i,this.modularBridge=new Li(e,t,i,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}setAmounts(e){this.homeAmounts=e,this.modularBridge.updateAmounts(this.hourAmounts??e)}showAmounts(e){this.hourAmounts=e,this.modularBridge.updateAmounts(e??this.homeAmounts,!0)}get amounts(){return this.hourAmounts??this.homeAmounts}async startAnimation(e,t){let n=this.animations[e];if(n.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let i=t?.intensity??1,r=this.generation;n.isActive=!0,n.intensity=i,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,i);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){n.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${i}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),n.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(n){console.error(`Error stopping ${e} animation:`,n)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1,t.intensity=1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(n=>{let i=t.overrides?.[n];return this.startAnimation(n,i)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let n=this.element.querySelector(".animated-weather-card");if(!n)return;let i=`individual-${e}-active`;t?n.classList.add(i):n.classList.remove(i)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Oi=new Map,sa=new Set;function la(a,e,t){let n=Oi.get(a);if(!e){n&&(Oi.delete(a),Ps());return}let i={entity:e,sun:t||"sun.sun"};n&&n.entity===i.entity&&n.sun===i.sun||(Oi.set(a,i),Ps())}function Ls(a){if(a){for(let e of Oi.values())if(e.sun===a)return e.entity}}function Ds(a){return sa.add(a),()=>{sa.delete(a)}}function Ps(){for(let a of[...sa])a()}var Ri=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:Number(a);return Number.isFinite(e)?e:null},oe=a=>typeof a=="string"?a.trim():"";function su(a){if(!a||typeof a!="object")return null;let e=a,t=typeof e.id=="number"?String(e.id):oe(e.id);return t?{id:t,label:oe(e.flight_number)||oe(e.callsign),aircraftCode:oe(e.aircraft_code),originCity:oe(e.airport_origin_city),originCode:oe(e.airport_origin_code_iata),destinationCity:oe(e.airport_destination_city),destinationCode:oe(e.airport_destination_code_iata),altitudeFt:Ri(e.altitude),groundSpeedKt:Ri(e.ground_speed),heading:Ri(e.heading),verticalSpeed:Ri(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function da(a,e){if(!a||!e)return null;let t=a.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=t.attributes?.flights;if(!Array.isArray(n))return[];let i=[];for(let r of n){let o=su(r);o&&i.push(o)}return i}var Hi=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(e,t=!1){if(!e)return[];let n=e.filter(s=>!s.onGround),i=new Set(n.map(s=>s.id));if(this.known===null)return this.known=i,t?n.filter((s,l)=>n.findIndex(d=>d.id===s.id)===l):[];let r=[],o=new Set;for(let s of n)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=i,r}reset(){this.known=null}};var Fi=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=Tt(),t,n;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(g.find(m=>m.type==="hour")?.value||"0",10),n=parseInt(g.find(m=>m.type==="minute")?.value||"0",10)}else t=e.getHours(),n=e.getMinutes();let i=t+n/60,r,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,h=(s+1)%24,u=(g,m,p)=>m<=p?g>=m&&g<p:g>=m||g<p;u(i,l,d)?r="dawn":u(i,d,c)?r="day":u(i,c,h)?r="dusk":r="night";let f={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Yo.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(n){console.error("TimeOfDayManager: Error in listener callback:",n)}})}blendColors(e,t,n){let i=e.replace("#",""),r=t.replace("#",""),o=parseInt(i.substring(0,2),16),s=parseInt(i.substring(2,4),16),l=parseInt(i.substring(4,6),16),d=parseInt(r.substring(0,2),16),c=parseInt(r.substring(2,4),16),h=parseInt(r.substring(4,6),16),u=Math.round(o*(1-n)+d*n),f=Math.round(s*(1-n)+c*n),g=Math.round(l*(1-n)+h*n),m=u.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),y=g.toString(16).padStart(2,"0");return`#${m}${p}${y}`}};var Os=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Sn={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},lu=bs(),du=Yt(Rt(Fe)),Ne=a=>`${Math.round(a*100)}%`,cu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,uu=48,xn=.2,hu={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},mu={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},Rs=()=>`
${Os("animated-weather-card")}
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
          --awc-secondary: ${vi};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${du};
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
            ${Cs()};
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
        ${lu}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${We(bi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,
            linear-gradient(180deg, transparent ${Ne(ys)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Ne(gs)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${We(ws,"var(--awc-sky-glow)")}; }
        }
        /* A card taller than five rows keeps a five-row card's glow, around the
           sun beside the temperature, rather than a long streak down its side:
           the light is painted in a box no taller than that card, from the top
           (it fades out well inside it). Behind @supports, since a browser that
           can't read min() there would drop the whole sky. The compact strip,
           the wall, the view and the forecast card light the whole card. */
        @supports (background-size: 100% min(100%, 1px)) {
          .sky { --awc-sky-glow-box: 100% min(100%, ${xi}px); }
        }
        .animated-weather-card[data-variant="compact"] .sky,
        .animated-weather-card[data-wall-frame] .sky,
        .animated-weather-card[data-fw] .sky,
        .animated-weather-card[data-fc-view] .sky,
        .animated-weather-card[data-fc-card] .sky { --awc-sky-glow-box: 100% 100%; }

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
          background-image: ${cu};
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

        /* dev_mode with no dev card on the page: a marker says the weather is simulated, on any sky or theme */
        animated-weather-card[data-awc-dev] .animated-weather-card::after,
        animated-forecast-card[data-awc-dev] .animated-weather-card::after {
          content: 'Simulated';
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 40;
          padding: 0 8px;
          border-radius: 9px;
          font: 600 11px/18px var(--awc-font);
          letter-spacing: 0.01em;
          color: ${Sn.text};
          background: ${Sn.fill};
          pointer-events: none;
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
        ${Object.entries(hu).map(([a,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${e}; }`).join(`
        `)}
        ${Object.entries(mu).map(([a,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${a}"] .attribute-icon { color: ${e}; }`).join(`
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
          --awc-sky-glow-layer: ${We(_s,"var(--awc-sky-glow)")};
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
        /* How thick the fog is (auto mode's amounts), apart from the container's fades */
        .fog-amount { position: absolute; inset: 0; pointer-events: none; }
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
          --awc-cloud-overhang: ${uu}px;
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
          top: ${Ne(xn)};
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
          transition: opacity ${Lt/2}s ${ze};
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
        /* The sun's height follows the time of day on a track as tall as the
           card, up to a five-row card's height (a transform, so .sun keeps its
           breathing): low at dawn and dusk and below the horizon at night, so
           it sets downward and rises upward. A taller card keeps the sun and
           its setting where a five-row card has them; the slide's drop is a
           share of the same track. The compact strip, the wall (from the first
           paint: data-wall-frame) and the view place the sun on the whole card. */
        .sun-track {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          max-height: ${xi}px;
          pointer-events: none;
          transition: transform ${Lt}s ${ze};
        }
        .animated-weather-card[data-variant="compact"] .sun-track,
        .animated-weather-card[data-wall-frame] .sun-track,
        .animated-weather-card[data-fw] .sun-track,
        .animated-weather-card[data-fc-view] .sun-track { max-height: none; }
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
        .stars-field, .stars-band { position: absolute; inset: 0; pointer-events: none; }
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
           in its real phase (moon.ts). Like the sun, no lower than on a
           five-row card; the wall places it on the whole card. */
        .moon-gsap {
          position: absolute;
          left: 84%;
          top: ${Ne(xn)};
          top: min(${Ne(xn)}, ${+(xn*xi).toFixed(1)}px);
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
        .animated-weather-card[data-wall-frame] .moon-gsap,
        .animated-weather-card[data-fw] .moon-gsap { top: ${Ne(xn)}; }
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

`;var ca={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",daylight_day:"{delta} siden i g\xE5r",daylight_week:"{delta} siden forrige uke",daylight_month:"{delta} siden forrige m\xE5ned",shift_earlier:"{delta} tidligere",shift_later:"{delta} senere",shift_day:"{shift} enn i g\xE5r",shift_week:"{shift} enn forrige uke",shift_month:"{shift} enn forrige m\xE5ned",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},fu={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",daylight_day:"{delta} since yesterday",daylight_week:"{delta} since last week",daylight_month:"{delta} since last month",shift_earlier:"{delta} earlier",shift_later:"{delta} later",shift_day:"{shift} than yesterday",shift_week:"{shift} than last week",shift_month:"{shift} than last month",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",daylight_day:"{delta} seit gestern",daylight_week:"{delta} seit letzter Woche",daylight_month:"{delta} seit letztem Monat",shift_earlier:"{delta} fr\xFCher",shift_later:"{delta} sp\xE4ter",shift_day:"{shift} als gestern",shift_week:"{shift} als letzte Woche",shift_month:"{shift} als letzten Monat",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",daylight_day:"{delta} desde ayer",daylight_week:"{delta} desde la semana pasada",daylight_month:"{delta} desde el mes pasado",shift_earlier:"{delta} antes",shift_later:"{delta} despu\xE9s",shift_day:"{shift} que ayer",shift_week:"{shift} que la semana pasada",shift_month:"{shift} que el mes pasado",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",daylight_day:"{delta} depuis hier",daylight_week:"{delta} depuis la semaine derni\xE8re",daylight_month:"{delta} depuis le mois dernier",shift_earlier:"{delta} plus t\xF4t",shift_later:"{delta} plus tard",shift_day:"{shift} qu\u2019hier",shift_week:"{shift} que la semaine derni\xE8re",shift_month:"{shift} que le mois dernier",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",daylight_day:"{delta} da ieri",daylight_week:"{delta} dalla settimana scorsa",daylight_month:"{delta} dal mese scorso",shift_earlier:"{delta} prima",shift_later:"{delta} dopo",shift_day:"{shift} rispetto a ieri",shift_week:"{shift} rispetto alla settimana scorsa",shift_month:"{shift} rispetto al mese scorso",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",daylight_day:"{delta} sinds gisteren",daylight_week:"{delta} sinds vorige week",daylight_month:"{delta} sinds vorige maand",shift_earlier:"{delta} eerder",shift_later:"{delta} later",shift_day:"{shift} dan gisteren",shift_week:"{shift} dan vorige week",shift_month:"{shift} dan vorige maand",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",daylight_day:"{delta} od wczoraj",daylight_week:"{delta} od zesz\u0142ego tygodnia",daylight_month:"{delta} od zesz\u0142ego miesi\u0105ca",shift_earlier:"{delta} wcze\u015Bniej",shift_later:"{delta} p\xF3\u017Aniej",shift_day:"{shift} ni\u017C wczoraj",shift_week:"{shift} ni\u017C w zesz\u0142ym tygodniu",shift_month:"{shift} ni\u017C w zesz\u0142ym miesi\u0105cu",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",daylight_day:"{delta} desde ontem",daylight_week:"{delta} desde a semana passada",daylight_month:"{delta} desde o m\xEAs passado",shift_earlier:"{delta} mais cedo",shift_later:"{delta} mais tarde",shift_day:"{shift} do que ontem",shift_week:"{shift} do que na semana passada",shift_month:"{shift} do que no m\xEAs passado",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",daylight_day:"{delta} fa\u021B\u0103 de ieri",daylight_week:"{delta} fa\u021B\u0103 de s\u0103pt\u0103m\xE2na trecut\u0103",daylight_month:"{delta} fa\u021B\u0103 de luna trecut\u0103",shift_earlier:"cu {delta} mai devreme",shift_later:"cu {delta} mai t\xE2rziu",shift_day:"{shift} dec\xE2t ieri",shift_week:"{shift} dec\xE2t s\u0103pt\u0103m\xE2na trecut\u0103",shift_month:"{shift} dec\xE2t luna trecut\u0103",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:ca,no:ca,nn:ca,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",daylight_day:"{delta} \u0437 \u0443\u0447\u043E\u0440\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0434\u043D\u044F",daylight_week:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",daylight_month:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",shift_earlier:"\u043D\u0430 {delta} \u0440\u0430\u043D\u0456\u0448\u0435",shift_later:"\u043D\u0430 {delta} \u043F\u0456\u0437\u043D\u0456\u0448\u0435",shift_day:"{shift}, \u043D\u0456\u0436 \u0443\u0447\u043E\u0440\u0430",shift_week:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",shift_month:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function $e(a){return a?.locale?.language||a?.language||"en"}function Ie(a){return`${$e(a)}|${a?.locale?.time_format??""}|${Cn(a)??""}`}function Cn(a){if(a?.locale?.time_zone!=="server")return;let e=a.config?.time_zone;if(e)try{return new Intl.DateTimeFormat("en",{timeZone:e}),e}catch{return}}function I(a,e,t={}){return pu(fu,a,e,t)}function pu(a,e,t,n={}){let i=$e(e).toLowerCase();return(a[i]?.[t]??a[i.split("-")[0]]?.[t]??a.en[t]).replace(/\{(\w+)\}/g,(o,s)=>n[s]??"")}function gu(a){let e=a?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?$e(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function qe(a,e){if(!a)return"--";let t=new Date(a);if(isNaN(t.getTime()))return"--";try{return Hs(e,{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Hs(a,e){let t=gu(a),n={...e,timeZone:Cn(a)};return t!==void 0&&(n.hourCycle=t?"h12":"h23"),new Intl.DateTimeFormat(a?$e(a):void 0,n)}function Fs(a,e){try{let t=Hs(e,{hour:"numeric",minute:"2-digit"}).formatToParts(a),n=t.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:t.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:n}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Wi(a,e){try{let t=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Cn(e)}).formatToParts(a),n=i=>Number(t.find(r=>r.type===i)?.value??0);return n("hour")+n("minute")/60+n("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function ua(a,e){let t=Math.round(Math.abs(a)*60),n=Math.floor(t/60),i=t%60,r=$e(e),o=Intl.DurationFormat;if(o&&e)try{return new o(r,{style:"narrow"}).format(n>0?{hours:n,minutes:i}:{minutes:i})}catch{}return r.toLowerCase().split("-")[0]==="uk"?n>0?`${n}\xA0\u0433\u043E\u0434 ${i}\xA0\u0445\u0432`:`${i}\xA0\u0445\u0432`:n>0?`${n}h ${i}m`:`${i}m`}function zi(a,e,t=!0){let n=Math.round(Math.abs(a)),i=t?n===0?"\xB1":a>0?"+":"\u2212":"",r=Math.floor(n/3600),o=Math.floor(n%3600/60),s=n%60,l=r?{hours:r,minutes:o}:o?{minutes:o,seconds:s}:{seconds:s};for(let f of Object.keys(l).slice(1))l[f]||delete l[f];let d=$e(e),c=Intl.DurationFormat;if(c&&e)try{let f=new c(d,n?{style:"narrow"}:{style:"narrow",secondsDisplay:"always"}).format(l);if(f)return i+f}catch{}let u=d.toLowerCase().split("-")[0]==="uk"?{hours:"\xA0\u0433\u043E\u0434",minutes:"\xA0\u0445\u0432",seconds:"\xA0\u0441"}:{hours:"h",minutes:"m",seconds:"s"};return i+Object.entries(l).map(([f,g])=>`${g}${u[f]}`).join(" ")}function ha(a,e){let t=Cn(e);if(t)try{let n=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(a)),i=o=>Number(n.find(s=>s.type===o)?.value),r=Date.UTC(i("year"),i("month")-1,i("day"),i("hour"),i("minute"),i("second"));if(Number.isFinite(r))return r-Math.floor(a/1e3)*1e3}catch{}return-new Date(a).getTimezoneOffset()*6e4}function ma(a,e){let t=a.getFullYear(),n=a.getMonth()+1,i=a.getDate();try{let o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric",timeZone:Cn(e)}).formatToParts(a),s=l=>Number(o.find(d=>d.type===l)?.value);[s("year"),s("month"),s("day")].every(Number.isFinite)&&([t,n,i]=[s("year"),s("month"),s("day")])}catch{}let r=new Date(Date.UTC(t,n-1,0)).getUTCDate();return Math.round((Date.UTC(t,n-1,i)-Date.UTC(t,n-2,Math.min(i,r)))/864e5)}function Ni(a,e){let t=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(a)}var Ws=["humidity","wind","pressure","sun","uv","rain"],zs=["humidity","wind","pressure","sun"];function fa(a){let e=a.metrics,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t)return[...zs];let n=[];for(let i of t){let r=String(i).trim().toLowerCase();Ws.includes(r)&&!n.includes(r)&&n.push(r)}return n}var $i=[3,6,8,11],Ns=["low","moderate","high","very_high","extreme"];function An(a){let e=a.uv_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==4)return $i;let n=t.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,r)=>isFinite(i)&&(r===0||i>n[r-1]))?n:$i}function Tn(a,e=$i){let t=Math.round(a),n=0;for(;n<4&&t>=e[n];)n++;return Ns[n]}var yu={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function wu(a,e){try{let t=a.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Dt(yu,e.state)||e.state}var pa=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:parseFloat(String(a));return isFinite(e)?e:null};function ga(a,e){return(e.uv_entity?pa(a?.states[e.uv_entity]?.state):null)??pa(e.entity?a?.states[e.entity]?.attributes?.uv_index:void 0)}function $s(a,e,t){if(t===null||!isFinite(t))return{text:"--",level:null};let n=Tn(t,An(e));return{text:`${mt(Math.max(0,Math.round(t)),a)} ${ya(a,n)}`,level:n}}function ya(a,e){return I(a,`uv_${e}`)}function En(a,e,t){let n=/\bin\b|inch/i.test(e)?2:1;return`${mt(Math.max(0,a),t,n)} ${e}`.trim()}function ve(a,e,t){let n=e?a?.states[e]:void 0,i=pa(n?.state);return i===null?null:{value:i,unit:typeof n?.attributes?.unit_of_measurement=="string"?n.attributes.unit_of_measurement:t}}var Ii=(a,e)=>I(a,e?"rain_now":"rain_today"),_u=180;function Is(a,e){let t=e.note_entity?a?.states[e.note_entity]:void 0;if(!t)return null;let n=s=>typeof s=="string"?s.trim():"",i=t.state==="unknown"||t.state==="unavailable"?"":n(t.state),r=n(t.attributes?.[e.note_attribute||"note"]);if(!i&&!r)return null;let o=Date.parse(t.attributes?.generated_at);return{line:i||r,note:r||i,writtenAt:Number.isNaN(o)?null:o}}function qs(a,e){let t=Number(e.note_max_age??_u);return a.writtenAt===null||!(t>0)?null:a.writtenAt+t*6e4}function wa(a,e){return a?bu(a,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var vu={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function kn(a){let e=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(e)?(e%360+360)%360:typeof a=="string"?vu[a.trim().toUpperCase()]??null:null}function Ge(a){return Number(a.temperature_decimals)===1?1:0}function bu(a,e){if(!e.entity)throw new Error("Weather entity is required");let t=a.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let n;if(e.outdoor_sensor_entity){let x=a.states[e.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?n=parseFloat(x.state):n=t.attributes.temperature}else n=t.attributes.temperature;let i=Ge(e),r=x=>mt(i?x:Math.round(x),a,i),o=n!=null&&!isNaN(n)?r(n):"--",s=wu(a,t),l=e.name||t.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?mt(Math.round(E),a)+"%":null},c="--";if(e.humidity_sensor_entity){let x=a.states[e.humidity_sensor_entity];c=x&&d(x.state)||d(t.attributes.humidity)||"--"}else c=d(t.attributes.humidity)||"--";let h="--",u=10,f=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=Ot(P,E||"km/h"),h=mt(Math.round(P),a)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?a.states[e.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(t.attributes.wind_speed,t.attributes.wind_speed_unit);let m=e.wind_direction_sensor_entity?a.states[e.wind_direction_sensor_entity]:void 0,p=kn(m?.state)??kn(t.attributes.wind_bearing),y=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let R=E.toLowerCase()==="inhg"?2:0;return mt(P,a,R)+" "+E},w=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",v=null;if(e.pressure_sensor_entity){let x=a.states[e.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=y(x.state,E);P&&(_=P,v=w(x.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,E)||"--",v=w(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let x=t.attributes.pressure_unit||"hPa";_=y(t.attributes.pressure,x)||"--",v=w(t.attributes.pressure)}let b=null,C;if(e.feels_like_entity&&(C=a.states[e.feels_like_entity]?.state),C===void 0&&t.attributes.apparent_temperature!==void 0&&(C=t.attributes.apparent_temperature),C!==void 0){let x=typeof C=="number"?C:parseFloat(C);isFinite(x)&&(b=r(x)+"\xB0")}let S="--";if(e.indoor_temperature_entity){let x=a.states[e.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(S=r(parseFloat(x.state))+"\xB0")}let A="--";if(e.indoor_humidity_entity){let x=a.states[e.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(A=mt(Math.round(parseFloat(x.state)),a)+"%")}let T;if(e.sun_entity){let x=a.states[e.sun_entity];x&&(T={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:u,windBearing:p,pressure:_,pressureValue:v,feelsLike:b,indoorTemperature:S,indoorHumidity:A,uv:ga(a,e),sun:T}}var xu=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],Pn={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},_a=["uv_max","rain_event","rain_week","rain_month","rain_year"],Su=a=>a!=="sun"&&!Object.prototype.hasOwnProperty.call(Pn,a);var Gs=a=>typeof a=="string"&&xu.includes(a),qi=a=>typeof a=="string"&&a.trim()?a.trim():void 0;function Cu(a){if(typeof a=="string"){let l=a.trim().toLowerCase();return Gs(l)?{type:l,view:_a.includes(l)}:null}if(!a||typeof a!="object")return null;let e=a,t=typeof e.type=="string"?e.type.trim().toLowerCase():"";if(!Gs(t))return null;let n={type:t,view:e.view===!0||_a.includes(t)},i=qi(e.entity);i&&(n.entity=i);let r=qi(e.direction_entity);t==="wind"&&r&&(n.direction_entity=r);let o=qi(e.rate_entity);t==="rain"&&o&&(n.rate_entity=o);let s=qi(e.name);return s&&(n.name=s),n}function Ln(a){let e=a.readings;if(Array.isArray(e))return e.map(Cu).filter(r=>!!r);let t=[],n=r=>{let o=Object.fromEntries(Object.entries(r).filter(([,s])=>s!==void 0&&s!==""));t.push({...o,view:!!r.view||_a.includes(r.type)})},i=fa(a);for(let r of i){if(r==="sun"){a.show_sun!==!1&&n({type:"sun"});continue}r==="humidity"?n({type:"humidity",entity:a.humidity_sensor_entity}):r==="wind"?n({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity}):r==="pressure"?n({type:"pressure",entity:a.pressure_sensor_entity}):r==="uv"?n({type:"uv",entity:a.uv_entity}):r==="rain"&&n({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity})}!i.includes("wind")&&(a.wind_speed_sensor_entity||a.wind_direction_sensor_entity)&&n({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity,view:!0}),!i.includes("uv")&&a.uv_entity&&n({type:"uv",entity:a.uv_entity,view:!0}),!i.includes("rain")&&(a.rain_entity||a.rain_rate_entity)&&n({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity,view:!0}),a.uv_max_entity&&n({type:"uv_max",entity:a.uv_max_entity});for(let r of["rain_event","rain_week","rain_month","rain_year"]){let o=a[`${r}_entity`];o&&n({type:r,entity:o})}return t}var Au=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],Mn=a=>a?.entity&&!a.entity.startsWith("weather.")?a.entity:void 0;function Bs(a){if(!Array.isArray(a.readings))return a;let e=Ln(a),t=s=>e.find(l=>l.type===s),n={...a};for(let s of Au)delete n[s];let i=t("wind"),r=t("rain"),o={humidity_sensor_entity:Mn(t("humidity")),wind_speed_sensor_entity:Mn(i),wind_direction_sensor_entity:i?.direction_entity,pressure_sensor_entity:Mn(t("pressure")),uv_entity:Mn(t("uv")),uv_max_entity:t("uv_max")?.entity,rain_entity:Mn(r),rain_rate_entity:r?.rate_entity,rain_event_entity:t("rain_event")?.entity,rain_week_entity:t("rain_week")?.entity,rain_month_entity:t("rain_month")?.entity,rain_year_entity:t("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(n[s]=l);return n}var Vs=a=>a.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.view&&!(Su(e.type)&&!e.entity)),Us=a=>[...new Set(a.flatMap(e=>[e.entity,e.direction_entity,e.rate_entity]).filter(e=>!!e))];var va=[51,101,151,201,301],Tu=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function Ys(a){let e=a.aqi_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==5)return va;let n=t.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,r)=>isFinite(i)&&(r===0||i>n[r-1]))?n:va}function Ks(a,e=va){let t=Math.round(a),n=0;for(;n<5&&t>=e[n];)n++;return Tu[n]}var ba=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:parseFloat(String(a));return isFinite(e)?e:null},js=(a,e,t)=>{let n=t.entity?.startsWith("weather.")?t.entity:e.entity;return n?a?.states[n]:void 0},ku=(a,e)=>e.entity&&!e.entity.startsWith("weather.")?a?.states[e.entity]:void 0;function $t(a,e,t,n,i=""){let r=ku(a,t),o=ba(r?.state);if(o!==null)return{value:o,unit:typeof r?.attributes?.unit_of_measurement=="string"?r.attributes.unit_of_measurement:i};let s=Dt(Pn,t.type);if(!s)return{value:null,unit:""};let l=js(a,e,t),d=n?l?.attributes?.[n]:void 0;return{value:ba(l?.attributes?.[s]),unit:typeof d=="string"?d:i}}var Dn=(a,e)=>e?`${a} ${e}`:a,_t="--",Gi=(a,e,t)=>gn(a,`ui.card.weather.attributes.${e}`,I(a,t)),Eu={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},Mu=(a,e)=>I(a,`aqi_${e}`);function Pu(a,e){let t=e.sun_entity?a?.states[e.sun_entity]:void 0,n=t?.state==="above_horizon",i=t?qe(n?t.attributes?.next_setting:t.attributes?.next_rising,a):_t;return{label:I(a,n?"sunset":"sunrise"),icon:n?"sunset":"sunrise",html:Ni(i,"awc-ampm"),text:i}}function xa(a,e,t){let n=(o,s=0)=>mt(s?o:Math.round(o),a,s),i=o=>`${mt(Ge(e)?o:Math.round(o),a,Ge(e))}\xB0`,r=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(t.type){case"humidity":{let{value:o}=$t(a,e,t);return r(gn(a,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?_t:`${n(o)}%`)}case"wind":{let{value:o,unit:s}=$t(a,e,t,"wind_speed_unit","km/h"),l=t.direction_entity?a?.states[t.direction_entity]?.state:void 0,d=kn(l)??kn(js(a,e,t)?.attributes?.wind_bearing);return{...r(gn(a,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?_t:Dn(n(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=$t(a,e,t,"pressure_unit","hPa"),l=s||"hPa";return{...r(gn(a,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?_t:Dn(n(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return Pu(a,e);case"uv":{let{value:o}=$t(a,e,t),s=$s(a,e,o);return{label:I(a,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=ve(a,t.rate_entity,"mm/h"),s=ve(a,t.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return r(Ii(a,l),"rain",d?En(d.value,d.unit,a):_t)}case"aqi":{let{value:o}=$t(a,e,t);if(o===null)return{label:I(a,"aqi"),icon:"aqi",html:_t,text:_t,level:null};let s=Ks(o,Ys(e)),l=n(Math.max(0,o)),d=Mu(a,s);return{label:I(a,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=$t(a,e,t);return r(I(a,"feels_like"),"thermometer",o===null?_t:i(o))}case"dew_point":{let{value:o}=$t(a,e,t);return r(Gi(a,"dew_point","dew_point"),"thermometer",o===null?_t:i(o))}case"visibility":{let{value:o,unit:s}=$t(a,e,t,"visibility_unit","km");return r(Gi(a,"visibility","visibility"),"eye",o===null?_t:Dn(n(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=$t(a,e,t);return r(Gi(a,"cloud_coverage","cloud_cover"),"cloud",o===null?_t:`${n(o)}%`)}case"gust":{let{value:o,unit:s}=$t(a,e,t,"wind_speed_unit","km/h");return r(Gi(a,"wind_gust_speed","gusts"),"wind",o===null?_t:Dn(n(o),s||"km/h"))}case"sensor":{let o=t.entity?a?.states[t.entity]:void 0,s=t.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:t.entity??""),l=Dt(Eu,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return r(s,l,_t);let d;try{d=a?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=ba(o.state),h=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Dn(mt(c,a,Math.min(2,(String(o.state).split(".")[1]??"").length)),h)}return r(s,l,d)}default:{let o=ve(a,t.entity,t.type==="uv_max"?"":"mm");return r(t.type,t.type==="uv_max"?"noon":"rain",o?t.type==="uv_max"?n(o.value):En(o.value,o.unit,a):_t)}}}function Sa(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function Bi(a,e){return{entity:e,tap_action:Sa(a?.tap_action),hold_action:Sa(a?.hold_action),double_tap_action:Sa(a?.double_tap_action)}}function Be(a){return!!a&&a.action!=="none"}function Xs(a){return a.tap_action?Be(a.tap_action):!!a.entity}function On(a,e,t,n={}){let i=e[`${t}_action`],r=i&&Object.prototype.hasOwnProperty.call(n,i.action)?n[i.action]:void 0;if(r){r(t);return}if(t==="tap"&&!i){e.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Be(i)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function Vi(a,e,t,n={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let i=null,r=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{i=null,l()},c=()=>{Be(t().double_tap_action)?s?(clearTimeout(s),s=void 0,On(e,t(),"double_tap",n)):s=setTimeout(()=>{s=void 0,On(e,t(),"tap",n)},250):On(e,t(),"tap",n)},h=u=>u.target!==a&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",u=>{u.button!==0||h(u)||(i={x:u.clientX,y:u.clientY},r=!1,l(),Be(t().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,On(e,t(),"hold",n)},500)))}),a.addEventListener("pointermove",u=>{i&&Math.hypot(u.clientX-i.x,u.clientY-i.y)>10&&d()}),a.addEventListener("pointerup",()=>{let u=!!i&&!r;d(),u&&c()}),a.addEventListener("pointercancel",d),a.addEventListener("pointerleave",d),a.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==a||!Xs(t())||(u.preventDefault(),On(e,t(),"tap",n))}),a.addEventListener("contextmenu",u=>{Be(t().hold_action)&&u.preventDefault()})}function Rn(a,e,t){Xs(e)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(t?a.setAttribute("role",t):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let n=Be(e.hold_action);a.style.userSelect=n?"none":"",a.style.setProperty("-webkit-user-select",n?"none":""),a.style.setProperty("-webkit-touch-callout",n?"none":"")}var Ca=new Map;function be(a,e){let t=Ca.get(a);if(t)return t;let n=new Promise((i,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>e()?i():r(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return n.catch(()=>Ca.delete(a)),Ca.set(a,n),n}function Hn(a){return be("animated-weather-card-editor",()=>!!customElements.get(a))}var Zs={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function xe(a,e){return`<svg class="${e} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${Zs[a]}"/></svg>`}function Qs(a,e){!a||a.getAttribute("data-icon")===e||(a.setAttribute("data-icon",e),a.firstElementChild?.setAttribute("d",Zs[e]))}var Lu=29.530588853,Du=Date.UTC(2e3,0,6,18,14),Ou={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function Js(a,e){let n=((a.getTime()-Du)/864e5/Lu%1+1)%1,i=e?Dt(Ou,e):void 0;if(!i)return n;let r=n*28;return r>=27.5&&(r-=28),r=Math.min(i[1],Math.max(i[0],r)),(r/28%1+1)%1}function tl(a,e=!1){let t=Math.cos(2*Math.PI*a),n=(1-t)/2,i=a<.5!==e,r=n<.5,o=(Math.abs(t)*50).toFixed(1),s=i===r?1:0,l=i?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,h=.3+.7*n;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*h).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*h).toFixed(3)})`}}var Q=Math.PI/180,Wn=6e4,vt=864e5;function Aa(a){let e=(a/vt+24405875e-1-2451545)/36525,t=(280.46646+e*(36000.76983+e*3032e-7))%360,n=357.52911+e*(35999.05029-1537e-7*e),i=.016708634-e*(42037e-9+1267e-10*e),r=Math.sin(n*Q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*Q)*(.019993-101e-6*e)+Math.sin(3*n*Q)*289e-6,o=125.04-1934.136*e,s=t+r-.00569-.00478*Math.sin(o*Q),l=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(o*Q),d=Math.asin(Math.sin(l*Q)*Math.sin(s*Q)),c=Math.tan(l/2*Q)**2,h=4/Q*(c*Math.sin(2*t*Q)-2*i*Math.sin(n*Q)+4*i*c*Math.sin(n*Q)*Math.cos(2*t*Q)-.5*c*c*Math.sin(4*t*Q)-1.25*i*i*Math.sin(2*n*Q));return{declination:d,equationOfTime:h}}function nl(a,e,t){let{declination:n,equationOfTime:i}=Aa(a.getTime()),o=((a.getUTCHours()*60+a.getUTCMinutes()+a.getUTCSeconds()/60+a.getUTCMilliseconds()/6e4+i+4*t)%1440+1440)%1440/4-180,s=Math.sin(e*Q)*Math.sin(n)+Math.cos(e*Q)*Math.cos(n)*Math.cos(o*Q);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/Q}function il(a,e){let t=a+(720-4*e)*Wn,{equationOfTime:n}=Aa(t),i=a+(720-4*e-n)*Wn;return{noon:i,declination:Aa(i).declination}}var Ru=-.833;function Fn(a,e){let t=Math.floor(e/vt)*vt,n=NaN;for(let i=-1;i<=1;i++){let r=il(t+i*vt,a).noon;Math.abs(r-e)>=Math.abs(n-e)||(n=r)}return n}function Ta(a,e,t){let n=l=>nl(new Date(l),a,e)>Ru,i=t-vt/2,r=t+vt/2,o=n(t);if(!o)return{up:o,start:i,end:r,rise:null,set:null};let s=(l,d)=>{for(let c=0;c<24;c++){let h=(l+d)/2;n(h)?d=h:l=h}return(l+d)/2};return{up:o,start:i,end:r,rise:n(i)?null:s(i,t),set:n(r)?null:s(r,t)}}function el(a,e,t){let n=Ta(a,e,Fn(e,t));return n.up?n.rise===null&&n.set===null?{minutes:1440,polar:!0}:{minutes:((n.set??n.end)-(n.rise??n.start))/Wn,polar:!1}:{minutes:0,polar:!0}}function rl(a,e,t,n,i){let r=Fn(e,t),o=null,s=r;for(let d of[r-vt,r,r+vt]){let c=Ta(a,e,Fn(e,d))[n];c!==null&&(o===null||Math.abs(c-t)<Math.abs(o-t))&&(o=c,s=Fn(e,d))}if(o===null)return null;let l=Ta(a,e,Fn(e,s-i*vt))[n];return l===null?null:{now:o,then:l}}function al(a,e,t,n){let i=el(a,e,t);return i.polar?null:Math.round((i.minutes-el(a,e,t-n*vt).minutes)*60)}function ol(a,e,t=Tt()){let n=t.getTime(),i=Math.floor(n/vt)*vt,r={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=a*Q;for(let m=-1;m<=2;m++){let{noon:p,declination:y}=il(i+m*vt,e);r.noon.push(p),r.midnight.push(p+vt/2);for(let[w,_,v]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let b=(Math.sin(w*Q)-Math.sin(o)*Math.sin(y))/(Math.cos(o)*Math.cos(y));if(!(Math.abs(b)<=1))continue;let C=Math.acos(b)/Q*4;r[_].push(p-C*Wn),r[v].push(p+C*Wn)}}let s=m=>m.filter(p=>p>n).sort((p,y)=>p-y)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=nl(t,a,e),c=s(r.rising),h=s(r.setting),u=s(r.noon),f=s(r.midnight);return{state:(h!==null&&c!==null?h<c:h!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(r.dawn)),next_dusk:l(s(r.dusk)),next_midnight:l(f),next_noon:l(u),next_rising:l(c),next_setting:l(h),elevation:Math.round(d*100)/100,rising:u!==null&&f!==null?u<f:!1}}}var sl=a=>typeof a=="number"?a:typeof a=="string"&&a.trim()?Number(a):NaN;function Hu(a){let e=a.latitude!==void 0&&a.latitude!==null&&a.latitude!=="",t=a.longitude!==void 0&&a.longitude!==null&&a.longitude!=="",n=typeof a.time_zone=="string"&&a.time_zone.trim()?a.time_zone.trim():void 0;if(!e&&!t&&!n)return null;let i,r;if(e||t){if(i=sl(a.latitude),r=sl(a.longitude),!e||!t)throw new Error("latitude and longitude go together: set both, or neither");if(!(i>=-90&&i<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${a.latitude})`);if(!(r>=-180&&r<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${a.longitude})`)}if(n)try{new Intl.DateTimeFormat("en",{timeZone:n})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${n})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=i!==void 0&&r!==void 0?`sun.awc_${o(i)}_${o(r)}`:void 0;return{latitude:i,longitude:r,timeZone:n,sunId:s,key:`${s??""}|${n??""}`}}function Fu(a,e,t,n=[]){let i=a;if(i.awcPlace===e.key)return a;let r=i.awcHome??a,o=Object.create(r);if(e.sunId&&t){let s=Object.create(r.states);s[e.sunId]=t;let l=t.state==="above_horizon"?"sunny":"clear-night";for(let d of n){let c=d?r.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...r.config,...e.latitude!==void 0?{latitude:e.latitude,longitude:e.longitude}:{},...e.timeZone?{time_zone:e.timeZone}:{}},e.timeZone&&(o.locale={...r.locale??{},time_zone:"server"}),o.awcPlace=e.key,o.awcHome=r,o}function Wu(a,e=Tt()){if(!a.sunId||a.latitude===void 0||a.longitude===void 0)return;let t=ol(a.latitude,a.longitude,e),n=e.toISOString();return{entity_id:a.sunId,state:t.state,attributes:{...t.attributes,friendly_name:"Sun"},last_changed:n,last_updated:n,context:{id:"",parent_id:null,user_id:null}}}var Ve=class{constructor(e=()=>[]){this.weather=e;this.place=null;this.timer=0}set(e){let t=Hu(e),n=(t?.key??"")!==(this.place?.key??"");return this.place=t,n&&(this.sun=void 0),n}see(e){if(!this.place)return e;let t=Math.floor(ye()/6e4);if(this.place.sunId&&this.sun?.minute!==t){let n=Wu(this.place);this.sun=n?{minute:t,entity:n}:void 0}return Fu(e,this.place,this.sun?.entity,this.weather())}tick(e){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(e,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var ll=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function dl(a){let e=a.color_palette||"default",t=a.custom_colors||{},n="";if(e!=="theme"){let r=c=>{if(typeof c!="string"||!ll.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let u=parseInt(h,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(c,h,u)=>"#"+(c<<16|h<<8|u).toString(16).padStart(6,"0"),s=(c,h)=>{let u=r(c);if(!u)return c;let f=1-h/100;return o(Math.max(0,Math.floor(u.r*f)),Math.max(0,Math.floor(u.g*f)),Math.max(0,Math.floor(u.b*f)))},l=(c,h)=>{let u=r(c);if(!u)return c;let f=h/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*f)),Math.min(255,Math.floor(u.g+(255-u.g)*f)),Math.min(255,Math.floor(u.b+(255-u.b)*f)))},d=(c,h)=>{let u=t[c];if(!u||typeof u!="string"||!ll.test(u))return;let f=l(u,12),g=s(u,22);n+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${u} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let i=(r,o)=>{r&&pn(r)&&(n+=o.replace(/\$\{value\}/g,r))};return i(t.text_color,"--weather-text-color: ${value} !important; "),i(t.temperature_color,"--awc-hero-color: ${value} !important; "),i(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),i(t.rain_color,"--weather-rain-color: ${value} !important; "),i(t.snow_color,"--weather-snow-color: ${value} !important; "),n}var Ue="animated-weather-card-hour";var Ye="animated-weather-card-dev",cl="weather.awc_dev";function zn(a){return a.awcDevBase??a}function Yi(a,e){let t=zn(a),n=window.AnimatedWeatherCardDev;if(!n||!e)return t;try{return n.wants(e)?n.lens(t,e):t}catch(i){return console.warn("Animated Weather Card: the dev card's world failed",i),t}}function Nn(a){if(!a)return!1;let e=window.AnimatedWeatherCardDev;if(!e)return!!a.dev_mode;try{return e.wants(a)}catch{return!!a.dev_mode}}function Ki(){return window.AnimatedWeatherCardDev?.offset??0}function Ke(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function $n(){return window.AnimatedWeatherCardDevCards?Promise.resolve():be("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Ui=class extends HTMLElement{setConfig(e){this.devCardConfig={...e},this.view?.update()}set hass(e){this.devCardHass=e,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}$n().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(e=>{console.warn(`Animated Weather Card: ${e.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var ul={horizon:196,peak:34,trough:276,twilightRy:78},hl={horizon:200,peak:96,trough:262,twilightRy:44};function ka(a,e,t){let n=t-e;if(n<=0||n>=24)return 0;if(a>=e&&a<=t)return Math.sin(Math.PI*(a-e)/n);let i=((a-t)%24+24)%24;return-Math.sin(Math.PI*i/(24-n))}var Ea=(a,e=!1)=>e?1-a/24:a/24,Se=(a,e=!1)=>Ea(a,e)*1e3,Ma=(a,e)=>a>=0?e.horizon-a*(e.horizon-e.peak):e.horizon-a*(e.trough-e.horizon);var pl={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},zu={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function Nu(a){return Dt(zu,a)??"last-light"}function Pa(a,e){let t=i=>i.startsWith("sensor.")&&Dt(pl,e.states[i]?.state)!==void 0,n=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return n?{sun_entity:a,moon_entity:n}:{sun_entity:a}}var $u=124,ml=16;function Iu(a,e){if(a<1)return 1;let t=Math.max(2,Math.floor((e+ml)/($u+ml))),n=Math.ceil(a/t);return Math.ceil(a/n)}function qu(a,e,t){if(e==="none")return null;let n=a?.config?.latitude,i=a?.config?.longitude;if(typeof n!="number"||typeof i!="number"||!Number.isFinite(n)||!Number.isFinite(i))return null;let r=e==="week"||e==="month"?e:"day",o=r==="week"?7:r==="month"?ma(t,a):1,s=t.getTime()+(12-Wi(t,a))*36e5,l=al(n,i,s,o);if(l===null)return null;let d="\0",[c="",h=""]=I(a,r==="week"?"daylight_week":r==="month"?"daylight_month":"daylight_day",{delta:d}).split(d);return{before:c,figure:zi(l,a),after:h}}function Gu(a,e,t,n){if(e==="none"||!n)return null;let i=a?.config?.latitude,r=a?.config?.longitude;if(typeof i!="number"||typeof r!="number"||!Number.isFinite(i)||!Number.isFinite(r))return null;let o=Date.parse(n);if(!Number.isFinite(o))return null;let s=e==="week"?7:e==="month"?ma(new Date(o),a):1,l=rl(i,r,o,t,s);if(!l)return null;let d=l.now-l.then-s*864e5+ha(l.now,a)-ha(l.then,a),c=Math.round(d/1e3);return c===0?null:c}function Bu(a,e,t,n){let i=[];for(let r=0;r<=240;r++){let o=r/10;i.push(`${Se(o,n).toFixed(1)},${Ma(ka(o,a,e),t).toFixed(1)}`)}return"M"+i.join(" L")}function Xi(a,e){if(!a)return 0;let t=new Date(a);return isNaN(t.getTime())?0:Wi(t,e)}var Vu=a=>Ni(a,"st-ampm");Ci();var fl=Yt(Rt(Fe)),Uu=`
    :host([data-awc-dev]) .st-card::after {
        content: 'Simulated';
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 5;
        padding: 0 8px;
        border-radius: 9px;
        font-size: 11px;
        line-height: 18px;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: ${Sn.text};
        background: ${Sn.fill};
        pointer-events: none;
    }
    /* The compact strip's next event sits in its top right: the marker takes the bottom corner */
    :host([data-awc-dev]) .st-card.compact::after { top: auto; bottom: 8px; }
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
        --st-text: ${fl};
        --st-secondary: ${fl};
        --st-secondary-opacity: ${vi};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${We(bi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${ia.map(a=>`${a} ${Lt}s ${ze}`).join(", ")};
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
        white-space: nowrap;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    /* How much earlier or later the sunrise or sunset is, after the countdown: in words, or the signed figure where
       they don't fit, or nothing (_fit). What it's compared with is its tooltip, and screen readers hear it all.
       Never cut short, never on a second line */
    .st-shift-sign { display: none; }
    .st-shift[data-form="sign"] .st-shift-sign { display: inline; }
    .st-shift-period,
    .st-shift[data-form="sign"] .st-shift-words {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }
    .st-shift[hidden] { display: none; }

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
    /* How much the daylight changed, quiet after its value on the same line, so the details take no more room. Its
       words show where the column has room for them; where it doesn't, the figure stands alone and the words stay for
       screen readers; where even that doesn't fit, it's left out (_fit). Never cut short. */
    .st-delta {
        margin-left: 0.5em;
        font-size: 13px;
        /* Its own smaller line box, so the value's line keeps its height */
        line-height: 1;
        font-weight: 400;
        letter-spacing: 0;
        color: var(--st-secondary);
        opacity: var(--st-secondary-opacity);
    }
    .st-delta[data-words="off"] .st-delta-words {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }
    .st-delta[hidden] { display: none; }

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
`,La=class extends HTMLElement{constructor(){super();this.config={};this._place=new Ve(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=t=>this._follow(t.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",Nn(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let t=Ki();t!==this._devClock&&(this._devClock=t,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(t){return this._place.see(Yi(t,this.config))}setConfig(t){let n=this._place.set(t),i=this._place.place?.sunId;if(!t.sun_entity&&!i&&!t.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let r=!!this.config.dev_mode!=!!t.dev_mode;this.config={...t,sun_entity:i||t.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",Nn(this.config)),t.dev_mode&&$n().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(n||r)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(t){this._homeHass=zn(t),t=this._see(t);let n=this.config.sun_entity||"",i=this.config.moon_entity||"",r=this._hass?.states[n],o=t.states[n],s=this._hass?.states[i]?.state,l=t.states[i]?.state,d=Ie(this._hass)!==Ie(t),c=this._weatherId()||"",h=c&&this._hass?.states[c]?.state!==t.states[c]?.state;this._hass=t;let u=r?.attributes?.elevation,f=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(f||0))>=.5||i&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Ue,this._onHour),window.addEventListener(Ye,this._onDev),Ke().add(this),this._unshare||(this._unshare=Ds(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Ue,this._onHour),window.removeEventListener(Ye,this._onDev),Ke().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let n=t.querySelector(".st-metrics"),i=t.querySelector(".st-delta");for(let r of["regular","compact","short","tight"]){if(t.dataset.fit=r,this._fitShift(t),n){let o=Array.from(n.children).filter(s=>getComputedStyle(s).display!=="none").length;n.style.setProperty("--st-cols",String(Iu(o,n.clientWidth)))}if(i?.parentElement){let o=i.parentElement,s=()=>o.scrollWidth>o.clientWidth+.5;i.hidden=!1,delete i.dataset.words,s()&&(i.dataset.words="off"),s()&&(i.hidden=!0)}if(t.scrollHeight<=t.clientHeight+1)return}}_shiftHtml(t,n){let i=this.config.daylight_delta,r=I(n,t<0?"shift_earlier":"shift_later",{delta:zi(t,n,!1)}),o="\0",s=I(n,i==="week"?"shift_week":i==="month"?"shift_month":"shift_day",{shift:o}),[l="",d=""]=s.split(o),c=h=>h?`<span class="st-shift-period">${M(h)}</span>`:"";return`<span class="st-shift" title="${M(l+r+d)}"><span class="st-shift-sep" aria-hidden="true"> \xB7 </span>${c(l)}<span class="st-shift-words">${M(r)}</span>${c(d)}<span class="st-shift-sign" aria-hidden="true">${M(zi(t,n))}</span></span>`}_fitShift(t){let n=t.querySelector(".st-shift"),i=n?.parentElement;if(!n||!i||(n.hidden=!1,getComputedStyle(i).display==="none"))return;let r=i.clientWidth;t.classList.contains("compact")&&(n.hidden=!0,r=(t.querySelector(".st-hero")?.getBoundingClientRect().width??i.clientWidth)+Math.min(40,.08*t.clientWidth),n.hidden=!1);for(let o of["words","sign"])if(n.dataset.form=o,i.scrollWidth<=r+.5)return;n.hidden=!0}_actions(){let t=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return Bi(this.config,t)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||Ls(this.config.sun_entity)}_skyCondition(t){let n=this._weatherId(),i=n?this._hass?.states[n]?.state:void 0;if(i&&i!=="unavailable"&&i!=="unknown"){let r=yn(i,void 0,void 0,this._hass?.config?.time_zone,{night:t==="night"});if(na.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Hn("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,n=[],i=[]){let r=[...n,...i,...Object.keys(t?.states??{})];return Pa(r.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let n=t.state,i;try{i=this._hass.formatEntityState?.(t)}catch{}return{phase:n,phaseName:(i&&i!==n?i:void 0)||Dt(pl,n)||n.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:Nu(n)}}_render(){this._drawnWeather=this._weatherId();let t=this._getSunData(),n=this._getMoonData(),i=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=Tt(),o=Wi(r,this._hass),s=Xi(t.sunrise,this._hass),l=Xi(t.sunset,this._hass),d=t.dawn?Xi(t.dawn,this._hass):Math.max(0,s-.5),c=t.dusk?Xi(t.dusk,this._hass):Math.min(24,l+.5),h=l-s,u=t.aboveHorizon,f=u?t.sunset:t.sunrise,g=new Date(f).getTime()-r.getTime(),m=this._hass,p=Ht=>M(I(m,Ht)),y=Ht=>Vu(qe(Ht,m)),w=g>0?I(m,"in_duration",{duration:ua(g/36e5,m)}):"",_=w&&this.config.show_header!==!1?Gu(m,this.config.daylight_delta,u?"set":"rise",f):null,v=_===null?"":this._shiftHtml(_,m),b=Si(t.elevation,t.rising,t.aboveHorizon),C=He(this._skyCondition(b),b),S=i?{"--awc-sky-top":C.top,"--awc-sky-mid":C.mid,"--awc-sky-bottom":C.bottom,"--awc-sky-glow":C.glow,"--awc-sky-scrim":C.scrim}:null,A=this.config.compact?hl:ul,T=this.config.direction,x=T==="right_to_left"||T!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:x};let E=Bu(s,l,A,x),P=`${E} L${Se(24,x)},${A.horizon} L${Se(0,x)},${A.horizon} Z`,R=ka(o,s,l),z=Ea(o,x)*100,$=Ma(R,A)/300*100,q=(Ht,Qi)=>{let Bn=Math.max(70,Math.abs(Qi)/24*1e3*2.4);return`<ellipse cx="${Se(Ht,x).toFixed(1)}" cy="${A.horizon}" rx="${Bn.toFixed(1)}" ry="${A.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},H=!!this.config.compact,G=this.config.show_header!==!1,bt=G?`
            <div class="st-hero">
                ${this.config.title&&!H?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${xe(u?"sunset":"sunrise","st-glyph")}
                    <span>${p(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${y(f)}</div>
                ${w?`<div class="st-countdown">${M(w)}${v}</div>`:""}
            </div>`:this.config.title&&!H?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",at=(Ht,Qi,Bn,Pl,Ll=!1)=>`
                <div class="st-metric" data-kind="${M(Ht)}">
                    <div class="st-metric-label">${xe(Qi,"st-glyph")}<span title="${M(Bn)}">${M(Bn)}</span></div>
                    <div class="st-metric-value${Ll?" wrap":""}">${Pl}</div>
                </div>`,kt=!H&&this.config.show_details!==!1,L=kt?qu(m,this.config.daylight_delta,r):null,j=Ht=>Ht.trim()?`<span class="st-delta-words">${M(Ht)}</span>`:"",N=L?`<span class="st-delta" title="${M(L.before+L.figure+L.after)}">${j(L.before)}<span class="st-delta-figure">${M(L.figure)}</span>${j(L.after)}</span>`:"",ot=H&&G?`
                        <div class="st-chart-note">${p(u?"sunrise":"sunset")}<span class="st-chart-note-time">${y(u?t.sunrise:t.sunset)}</span></div>`:"",El=kt?`
            <div class="st-metrics">
                ${u?at("sunrise","sunrise",p("sunrise"),y(t.sunrise)):at("sunset","sunset",p("sunset"),y(t.sunset))}
                ${at("noon","noon",p("solar_noon"),y(t.noon))}
                ${at("daylight","daylight",p("daylight"),M(ua(h,m))+N)}
                ${at("first-light","first-light",p("first_light"),y(t.dawn))}
                ${at("last-light","last-light",p("last_light"),y(t.dusk))}
                ${n?at("moon",n.icon,p("moon"),M(n.phaseName),!0):""}
            </div>`:"",za=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,Na="";try{Na=za&&m?.formatEntityState?.(za)||""}catch{}let Ml=[`${I(m,"sunrise")} ${qe(t.sunrise,m)}`,`${I(m,"sunset")} ${qe(t.sunset,m)}`,Na].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${bt}
                    <div class="st-chart" role="img" aria-label="${M(Ml)}">
                        <svg viewBox="0 0 ${1e3} ${300}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${1e3}" height="${A.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${A.horizon}" width="${1e3}" height="${300-A.horizon}"/></clipPath>
                            </defs>
                            ${q(s,s-d)}
                            ${q(l,c-l)}
                            <path d="${P}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${A.horizon}" x2="${1e3}" y2="${A.horizon}" class="st-horizon"/>
                            <line x1="${Se(o,x).toFixed(1)}" y1="0" x2="${Se(o,x).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${E}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${E}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${R<0?"below":""}" style="left: ${z.toFixed(2)}%; top: ${$.toFixed(2)}%;"></div>${ot}
                    </div>
                    ${El}`,S)}_mount(t,n){let i=this._shadow.querySelector(".st-card");i||(this._shadow.innerHTML=`<style>${Uu}</style><ha-card><div class="st-card"></div></ha-card>`,i=this._shadow.querySelector(".st-card"),Vi(i.parentElement,this,()=>this._actions())),Rn(i.parentElement,this._actions());let r=!!n;i.classList.toggle("sky",r),i.classList.toggle("compact",!!this.config.compact),i.parentElement?.classList.toggle("sky",r);for(let o of ia)n?i.style.setProperty(o,n[o]):i.style.removeProperty(o);i.innerHTML=t,this._link&&this._follow(),this._fit()}_follow(t){if(t){if(!t.source||t.sun!==this.config.sun_entity||t.at===null&&!this._link)return;if(this._link=t.at===null?null:t,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let n=this._shadow.querySelector(".st-card");n&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:n,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",La);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Pa(e,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Pa(e,a),compact:!0}}]:null});function je(a){let e=Number(a?.attributes?.supported_features);if(!isFinite(e))return["hourly","daily"];let t=[];return e&2&&t.push("hourly"),e&4&&t.push("twice_daily"),e&1&&t.push("daily"),t}function gl(a){let e=je(a);return e.includes("daily")?"daily":e.includes("twice_daily")?"twice_daily":null}var Yu=5e3;function Ku(){let a=new WeakMap;return{subscribe(e,t,n,i){let r=a.get(e);r||a.set(e,r=new Map);let o=`${t}|${n}`,s=r.get(o);if(!s){let d={listeners:new Set};s=d,r.set(o,d);let c=h=>{d.last=h;for(let u of[...d.listeners])u(h)};d.unsubscribe=e.subscribeMessage(h=>c({type:h?.type??n,forecast:Array.isArray(h?.forecast)?h.forecast:null}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:n}).catch(()=>{r.get(o)===d&&r.delete(o),c({type:n,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(i),l.last&&i(l.last),()=>{!l.listeners.delete(i)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(r.get(o)===l&&r.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},Yu))}}}}function ju(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=Ku())}function yl(a,e,t,n){return a?.connection?.subscribeMessage?ju().subscribe(a.connection,e,t,n):()=>{}}var qn=class{constructor(e){this.changed=e;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(e,t,n){let i=t?e?.states[t]:void 0,r=je(i),o=n.hourly&&r.includes("hourly"),s=n.daily?gl(i):null,l=`${t}|${o}|${s}`;if(!e?.connection||!t||!i){this.key&&this.stop();return}if(l===this.key&&this.connection===e.connection)return;this.stop(),this.key=l,this.connection=e.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,h)=>{this.stops.push(yl(e,t,c,u=>{u.failed||h(u.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let e of this.stops)e();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};function Da(a,e){let t=a?.precipitation_unit;return t!=null&&t!==""?String(t):e?.accumulated_precipitation||(e?.length==="mi"?"in":"mm")}var Oa=36e5,Ha=a=>String(a??"").toLowerCase().replace(/\s+/g,"");function Xu(a,e){let t=Ha(e),n=a;return t.startsWith("in")||t.includes("inch")?n*=25.4:t.startsWith("cm")&&(n*=10),/\/(d|day|24h)$/.test(t)&&(n/=24),n}function bl(a,e){let t=Ha(e);return t.startsWith("in")||t.includes("inch")?a*25.4:t.startsWith("cm")?a*10:a}function wl(a,e){let t=Ha(e);return t.startsWith("mi")?a*1.609344:t.startsWith("ft")?a*3048e-7:t==="m"||t.startsWith("met")?a/1e3:a}var et=a=>{let e=typeof a=="number"?a:typeof a=="string"&&a.trim()!==""?Number(a):NaN;return Number.isFinite(e)?e:void 0};function xl(a,e){let t=(a??[]).map(i=>({e:i,t:Date.parse(i.datetime)})).filter(i=>!isNaN(i.t)).sort((i,r)=>i.t-r.t);for(let i=0;i<t.length;i++){let r=t[i+1]?.t??t[i].t+Oa;if(t[i].t<=e&&e<Math.min(r,t[i].t+Oa))return t[i].e}let n=t[0];return n&&n.t>e&&n.t-e<=Oa?n.e:void 0}function Sl(a,e,t){let n=a?.states??{},r=(e.entity?n[e.entity]:void 0)?.attributes??{},o={},s=(()=>{try{return Ln(e)}catch{return[]}})(),l=y=>{let w=s.find(b=>b.type===y&&b.entity),_=w?.entity?n[w.entity]:void 0;if(!w?.entity||!_)return;if(w.entity.startsWith("weather.")){let b=_.attributes??{},C=et(b[Pn[y]??""]);return C===void 0?void 0:{value:C,unit:void 0,attrs:b}}let v=et(_.state);return v===void 0?void 0:{value:v,unit:_.attributes?.unit_of_measurement}},d=e.rain_rate_entity?n[e.rain_rate_entity]:void 0,c=et(d?.state);if(c!==void 0&&c>0)o.rate=Xu(c,d?.attributes?.unit_of_measurement);else{let y=et(t?.precipitation);y!==void 0&&y>0&&(o.rate=bl(y,Da(r,a?.config?.unit_system)))}let h=l("cloud_cover")?.value??et(r.cloud_coverage)??et(t?.cloud_coverage);h!==void 0&&(o.cloud=Math.min(100,Math.max(0,h)));let u=l("visibility");if(u)o.visibility=wl(u.value,u.attrs?u.attrs.visibility_unit??"km":u.unit);else{let y=et(r.visibility);y!==void 0&&(o.visibility=wl(y,r.visibility_unit??"km"))}let f=e.wind_speed_sensor_entity?n[e.wind_speed_sensor_entity]:void 0,g=et(f?.state),m=r.wind_speed_unit;g!==void 0?o.wind=Ot(g,f?.attributes?.unit_of_measurement):et(r.wind_speed)!==void 0?o.wind=Ot(et(r.wind_speed),m):et(t?.wind_speed)!==void 0&&(o.wind=Ot(et(t?.wind_speed),m));let p=l("gust");return p?o.gust=Ot(p.value,p.attrs?p.attrs.wind_speed_unit:p.unit):et(r.wind_gust_speed)!==void 0?o.gust=Ot(et(r.wind_gust_speed),m):et(t?.wind_gust_speed)!==void 0&&(o.gust=Ot(et(t?.wind_gust_speed),m)),o}function Cl(a,e,t){let n={},i=e?.wind_speed_unit,r=et(a.precipitation);r!==void 0&&r>0&&(n.rate=bl(r,Da(e,t)));let o=et(a.cloud_coverage);o!==void 0&&(n.cloud=Math.min(100,Math.max(0,o)));let s=et(a.wind_speed);s!==void 0&&(n.wind=Ot(s,i));let l=et(a.wind_gust_speed);return l!==void 0&&(n.gust=Ot(l,i)),n}function Xe(a,e,t=!1){if(e<=a[0][0])return a[0][1];let n=a[a.length-1];if(e>=n[0])return n[1];for(let i=1;i<a.length;i++){let[r,o]=a[i-1],[s,l]=a[i];if(e<=s){let d=t?Math.log(e/r)/Math.log(s/r):(e-r)/(s-r);return o+(l-o)*d}}return n[1]}var Gn=(a,e,t)=>Math.min(t,Math.max(e,a)),Ze=["light","rain","storm","pouring"],Zu=[.5,2.5,8],_l=1.15,Qu=[[.1,6],[.3,10],[1.5,18],[4,24],[10,32],[30,44]],Ju={"light-rain":[.05,.3,2.4],rainy:[.1,1.5,60],stormy:[1,4,60],pouring:[8,10,60],"snowy-rainy":[.1,1.5,60]},th={"light-rain":"light",rainy:"rain",stormy:"storm",pouring:"pouring","snowy-rainy":"rain"},eh={light:10,rain:18,storm:24,pouring:32},nh=[[.1,.4],[.3,.6],[1,1],[2.5,1.6],[5,2.2]],ih=[[0,2],[25,3],[50,4],[75,6],[100,8]],rh={"partly-cloudy":[3,5],cloudy:[4,8]},ah=[[.2,1],[1,.8],[3,.6],[8,.45]],oh=[[10,.5],[20,.75],[30,1],[50,1.6],[80,2.4]],sh=[[0,1],[10,.85],[25,.6],[50,.35],[75,.25]];function Ra(a,e){let t=e?Ze.indexOf(e):-1,n=0;return Zu.forEach((i,r)=>{let o=t<0?i:r<t?i/_l:i*_l;a>=o&&(n=r+1)}),Ze[n]}function lh(a){let e=Math.max(1,Math.floor(a*.3)),t=Math.max(1,Math.round(a*.3));return[e,t,Math.max(1,a-e-t)]}var vl={rain:{kind:"rain",drops:18},snow:1,sleet:1,clouds:[1,1,2],fog:1,leaves:1,gusts:0,stars:1};function Fa(a,e,t){let n={...vl,rain:{kind:th[a]??"rain",drops:0},clouds:[...vl.clouds]};n.rain.drops=eh[n.rain.kind];let i=Ju[a];if(i&&e.rate!==void 0){let o=Gn(e.rate,i[0],i[2]),s=Ze.indexOf(Ra(i[0])),l=Ze.indexOf(Ra(i[2])),d=Ze[Gn(Ze.indexOf(Ra(o,t)),s,l)];n.rain={kind:d,drops:Math.round(Xe(Qu,o,!0))}}if(e.rate!==void 0){let o=Xe(nh,Gn(e.rate,.1,10),!0);n.snow=Math.round(o*100)/100,n.sleet=n.snow}let r=rh[a];if(r&&e.cloud!==void 0&&(n.clouds=lh(Gn(Math.round(Xe(ih,e.cloud)),r[0],r[1]))),e.visibility!==void 0&&(n.fog=Math.round(Xe(ah,e.visibility)*100)/100),e.wind!==void 0&&(n.leaves=Math.round(Xe(oh,e.wind)*100)/100),e.gust!==void 0){let o=e.wind!==void 0?(e.gust-e.wind)/25:(e.gust-30)/40;n.gusts=Math.round(Gn(o,0,1)*100)/100}return e.cloud!==void 0&&(n.stars=Math.round(Xe(sh,e.cloud)*100)/100),n}Ci();var Al=a=>`Wind from ${Math.round(a)}\xB0`,Tl=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",dh=18,ch=450,uh=1600;function Qe(a,e){return e?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var hh=400,mh=120,fh=220,ph=24;window.AnimatedWeatherCardGsap=Vr;var kl=["regular","compact","short","tight","minimal"],gh=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...kl.map(a=>[a,"none"])],Zi=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Ve(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Hi;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new qn(()=>this.extras?.update());this.engineHours=new qn(()=>this.syncEngine());this.lastPicture=null;this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let t=Ki();t!==this.devClock&&(this.devClock=t,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0),this.syncEngine())};this.devClock=0;this.onNeedle=t=>{let n=t.detail;this.following||this.forecastOn()||n?.at==null||n.source===this||n.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(t,n=[],i=[]){let r=[...n,...i,...Object.keys(t?.states??{})];return Qe(r.find(o=>o.startsWith("weather."))??Ur.entity,t)}actionsConfig(){if(this.surface==="view")return{};let t=Bi(this.config,this.config?.entity);return t.tap_action?t:this.config?.layout==="nightstand"&&this.surface==="card"?{...t,tap_action:{action:"none"}}:this.forecastOn()?{...t,tap_action:{action:"forecast"}}:t}see(t){return this.placeView.see(Yi(t,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&Nn(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let t=this.isConnected&&this.surface!=="view";la(this,t?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}newController(){let t=new Di(this,this.config,()=>this.animationsPaused,this.timeOfDayManager);return li(this.config)==="auto"&&(t.amountsAt=n=>this.hourAmounts(n)),t}weatherClassNow(){let t=this.config,n=t?.entity?this._hass?.states[t.entity]:void 0;if(!(!t||!n))return yn(n.state.toLowerCase(),t.sunrise_hour,t.sunset_hour,this._hass?.config?.time_zone,{clock:!!t.enable_day_night_cycle,night:this.skyIsNight()})}engineAuto(){return!!this.config&&li(this.config)==="auto"&&this.weatherShown()}enginePicture(){let t=this.engineAuto()?this.weatherClassNow():void 0;if(!t||!this.config)return null;let n=xl(this.engineHours.hourly,ye());return Fa(t,Sl(this._hass,this.config,n),this.lastPicture?.rain.kind)}hourAmounts(t){if(!this.engineAuto()||!this.config)return;let n=this.config.entity?this._hass?.states[this.config.entity]:void 0,i=yn(String(t.condition??"").toLowerCase(),this.config.sunrise_hour,this.config.sunset_hour,this._hass?.config?.time_zone);return Fa(i,Cl(t,n?.attributes,this._hass?.config?.unit_system))}syncEngine(){clearTimeout(this.engineTimer),this.engineTimer=void 0;let t=this.isConnected&&this.engineAuto();t?this.engineHours.sync(this._hass,this.config?.entity,{hourly:!0,daily:!1}):this.engineHours.stop();let n=t?this.enginePicture():null;this.lastPicture=n;let i=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(this.config?.animate===!1||i){let r=this.querySelector(".animation-layer .stars-field");r&&Mi(r,n?.stars??1)}else this.animationController?.setAmounts(n);t&&this.engineHours.hourly?.length&&(this.engineTimer=setTimeout(()=>this.syncEngine(),36e5-ye()%36e5+1e3))}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let t=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:t!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let t=window.AnimatedWeatherCardForecast;if(!t){be("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}t.version===2&&(this.extras=t.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:He,phase:()=>this.currentSkyPhase(),current:()=>{let t=this.config?.outdoor_sensor_entity||this.config?.entity,n=Number(t?this.config?.outdoor_sensor_entity?this._hass?.states[t]?.state:this._hass?.states[t]?.attributes?.temperature:NaN);return isFinite(n)?n:void 0},temperature:t=>{let n=this.config?Ge(this.config):0;return mt(n?t:Math.round(t),this._hass,n).replace(/^-/,"\u2212")},conditionName:t=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:t,attributes:{},last_changed:"",last_updated:""})??t,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(t=>(t.type==="aqi"||t.type==="sensor")&&!!t.entity).map(t=>{let n=xa(this._hass,this.config,t);return{label:n.label,value:n.value??n.text,...n.word?{word:n.word}:{},...n.level?{level:n.level}:{}}}),reading:(t,n)=>{if(!this.config)return null;if(t==="rain_today"||t==="rain_now"){let o=t==="rain_now"?ve(this._hass,this.config.rain_rate_entity,"mm/h"):ve(this._hass,this.config.rain_entity,"mm");return!o||t==="rain_now"&&!(o.value>0)?null:{label:Ii(this._hass,t==="rain_now"),value:En(o.value,o.unit,this._hass)}}if(t!=="uv")return null;let i=n??ga(this._hass,this.config);if(i===null||!isFinite(i))return null;let r=Tn(i,An(this.config));return{label:I(this._hass,"uv_index"),value:mt(Math.max(0,Math.round(i)),this._hass),word:ya(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let n=h=>h===void 0||typeof h=="number"&&isFinite(h)&&h>=0&&h<=23;if(!n(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!n(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let i=this.placeView.set(t),r=this.placeView.place?.sunId;r&&(t={...t,sun_entity:r}),t=Bs(t),t.layout==="nightstand"&&t.compact&&this.surface==="card"&&(t={...t,compact:!1});let o=Ln(t),s=JSON.stringify(o)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(h=>this.config?.[h]!==t[h]);this.readingList=o;let l=!!this.config?.dev_mode!=!!t.dev_mode;t.dev_mode&&(t.entity||(t={...t,entity:cl}),$n().then(()=>this.devChanged()).catch(h=>console.warn(`Animated Weather Card: ${h.message}`)));let d=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==t.entity&&(this.following=!1),this.config=t,this.markDev(),s&&this.redrawRow(),(i||l)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&Rn(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let h=this.animationController;this._animationGeneration++,this.animationController=this.newController(),h&&h.stopAllAnimations().catch(u=>k(this.config?.dev_mode,"Error stopping previous animation controller:",u))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras(),this.syncEngine()),this.isConnected&&!!t.auto_pause!=!!d&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Ue,this.onNeedle),window.addEventListener(Ye,this.devChanged),this.surface!=="view"&&Ke().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=this.newController())),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=this.newController()),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let n=this.querySelector(".animated-weather-card");n&&(n.classList.remove("no-transitions"),n.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;jr(this),this.stopPlanes();let t=this.config.color_palette||"default",n;try{n=wa(this.hass,this.config)}catch(y){let w=y?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${xe("alert","awc-empty-icon")}
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M(w)}</div>
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
            `;return}let{temperature:i,weatherCondition:r,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:h}=n,u=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let f=!!this.config.compact,g=this.heroClock(),m=dl(this.config),p=this.rowHtml(u);this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions${this.surface==="view"?"":" loading"} ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${f?' data-variant="compact"':""} style="${M(m)}">
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
                ${this.locationHtml(f,o)}
                ${g?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>`}
                ${f?`<div class="compact-meta">${this.config.show_clock&&!g?'<span class="awc-clock"></span>':""}${this.config.show_date?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,d))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(d,c,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${f?"":p}
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
        ${Rs()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(t,n){if(t)return"";let i=this.config?.show_location!==!1&&n?`<span class="awc-place">${M(n)}</span>`:"",r=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return i||r||o?`<div class="location">${r}${o}${i}</div>`:""}heroTime(){let{time:t,period:n}=Fs(Tt(),this._hass);return n?`${M(t)}<span class="awc-ampm">${M(n)}</span>`:M(t.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let n=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",n,"important");let i=()=>{let r=t.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${n} !important; }`};i(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(i))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},hh)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}be("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?Is(this._hass,this.config):this.writtenNote,n=t?qs(t,this.config):null;if(!t||n===null)return t;let i=n-ye();return i<=0?null:(i<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),i+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let n=t.querySelector(".note-long"),i=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),d=I(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(l&&(l.textContent=d),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),n&&(n.textContent=o.note),i&&(i.textContent=o.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(n,o.note,s),this.fadeThrough(i,o.line,s)}compactMeta(t,n){return[this.config?.show_location!==!1?t:"",n?`${I(this._hass,"feels_like")} ${n}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,n=M(I(this._hass,"indoors")),i=xe("indoor","indoor-icon");if(t==="icon")return`${i}<span class="awc-visually-hidden">${n} </span>`;let r=`<span class="indoor-label">${n}</span>`;return t==="both"?i+r:r}heroMetaHtml(t,n,i){let r=[];t&&r.push(`<span class="feels-like">${M(I(this._hass,"feels_like"))} ${M(t)}</span>`);let o=[n,i].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}attachEventListeners(){this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(Vi(t,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Rn(t,this.actionsConfig(),"group")),!this.isInitializing){let n=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(n)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),di(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),ci(this),this.flyHeldPlanes())}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return K(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let n=this.config,i=this.querySelector(".animated-weather-card");if(!i||(this.clearAnimations(),!this.hass||!n.entity)||!this.hass.states[n.entity])return;let o=this.weatherClassNow(),s=(n.color_palette||"default")==="theme"?"theme-colors":"",l=i.classList.contains("loading"),d=(...h)=>{i.className=["animated-weather-card",o,...h,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{i.classList.remove("no-transitions"),i.classList.add("transitions-enabled")}))},c=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(n.animate===!1||c||!this.weatherShown()){let h=o==="clear-night"&&this.surface!=="forecast";d(n.animate===!1?"static":"",h?"individual-stars-active":"");let u=i.querySelector(".animation-layer");h&&u&&oa(u,aa(K(n).cloudCount,i.clientWidth),{moon:!0,still:!0,words:bn(i),share:this.enginePicture()?.stars??1}),this.currentWeatherClass=o;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(d(),this.animationsPaused){this.currentWeatherClass=o,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.syncEngine(),this.animationController.applyWeatherCondition(o)),this.startPlanes()}},n.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),jr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let n=this.querySelector(".animated-weather-card"),i=this.querySelector(".animation-layer");i&&(_n(this),i.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),i.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),n&&(yi(n),ss(n));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),Kr(this.pendingTimeouts)}set hass(t){this.homeHass=zn(t),t=this.see(t);let n=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!n){this.render(),this.initializeAnimations();return}if(Ie(n)!==Ie(t)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let i=n.states[this.config.entity],r=t.states[this.config.entity];if(!i||!r){this.render(),this.initializeAnimations();return}if(i.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(i.attributes[d])!==s(r.attributes[d])){o=!0;break}if(this.config.note_entity&&n.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...Us(this.readingList)];for(let c of d){if(!c)continue;let h=n.states[c],u=t.states[c];if(h?.state!==u?.state||h?.attributes?.unit_of_measurement!==u?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";n.states[d]!==t.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let t;try{t=wa(this._hass,this.config)}catch{return}let{temperature:n,weatherCondition:i,windSpeedValue:r,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=t;this.currentWindSpeedValue=r;let c=!!this.extras?.away(),h=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,u=h&&this.extras?.conditionText(h)||i,f=(y,w)=>{y&&y.textContent!==w&&(y.textContent=w)};c||(this.fadeThrough(this.querySelector(".temperature-value"),n),this.fadeThrough(this.querySelector(".weather-desc"),u));let g=this.updatePressureTrend(o);c||this.updateRow(g);let m=this.querySelector(".compact-meta .awc-meta-text");m&&f(m,this.compactMeta(t.location,s)),f(this.querySelector(".location .awc-place"),t.location);let p=this.querySelector(".hero-meta");if(p){let y=this.heroMetaHtml(s,l,d),w=p.querySelector(".awc-line");Array.from(p.children).filter(v=>v!==w).map(v=>v.outerHTML).join("")!==y&&(p.innerHTML=y,w&&p.prepend(w))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(r),this.syncEngine()}rowItem(t,n,i,r){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?xe(i.icon,"attribute-icon"):""}${s?`<span>${M(i.label)}</span>`:""}</div>`:"",d=t.type==="wind"&&typeof i.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${i.bearing+180}deg);" aria-label="${Al(i.bearing)}"></ha-icon>`:t.type==="pressure"&&r?`<ha-icon class="pressure-trend ${r}" icon="${Tl(r)}" aria-label="Pressure ${r}"></ha-icon>`:"",c=i.level?` data-level="${M(i.level)}"`:"";return`<div class="attribute" data-kind="${t.type}" data-i="${n}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${i.html}</span>${d}</div></div>`}shownReadings(){return this.config?Vs(this.readingList).map(({r:t,i:n})=>({r:t,i:n,v:xa(this._hass,this.config,t)})).filter(({r:t,v:n})=>t.type!=="sun"||n.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(t){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:i,i:r,v:o})=>this.rowItem(i,r,o,t)).join("")}</div>`}redrawRow(){let t=this.querySelector(".animated-weather-card .weather-info");if(!t||this.config?.compact)return;let n=t.querySelector(":scope > .weather-attributes"),i=this.rowHtml(this._pressureTrend??null).trim();if(n&&i){let r=document.createRange().createContextualFragment(i).firstElementChild;n.querySelectorAll(":scope > .attribute").forEach(o=>o.remove()),n.prepend(...Array.from(r.querySelectorAll(":scope > .attribute"))),n.classList.toggle("values-only",r.classList.contains("values-only"))}else if(n)n.remove();else if(i){let r=t.querySelector(":scope > .fc-section");r?r.insertAdjacentHTML("beforebegin",i):t.insertAdjacentHTML("beforeend",i)}this.applySizeState()}updateRow(t){let n=this.querySelector(".weather-attributes");if(!n||!this.config)return;let i=this.shownReadings();if([...n.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==i.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of i){let d=n.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let h=d.querySelector(".attribute-label > span");h&&h.textContent!==l.label&&(h.textContent=l.label),Qs(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:Al(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",t?{icon:Tl(t),label:`Pressure ${t}`,className:t}:null)}}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,n,i){let r=t.querySelector(".attribute-value");if(!r)return;let o=r.querySelector(`.${n}`);if(!i){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[n,i.className].filter(Boolean).join(" "),o.getAttribute("icon")!==i.icon&&o.setAttribute("icon",i.icon),o.setAttribute("aria-label",i.label),o.style.transform=i.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let n=Array.from(t.querySelectorAll(".note-long, .note-short")).map(u=>{let f=u.textContent??"",g=document.createElement("span");g.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=f,u.replaceChildren(g,m),{span:u,text:f,typed:g,rest:m}}),i=Math.max(0,...n.map(u=>u.text.length)),r=Math.min(uh,Math.max(ch,i*dh)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:n.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of n)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let f of n){let g=Math.round(u*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}u<1?d=o(h):c.finish()};this.noteTyping=c,d=o(h)}fadeThrough(t,n,i){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===n)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=n,i?.();return}if(this.heroTextPending.set(t,n),r!==void 0)return;let s=()=>{let d=this.heroTextPending.get(t);this.heroTextPending.delete(t),d!==void 0&&(t.textContent=d),i?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:mh,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:fh,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){be("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}let n=new t(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=n,n.start().then(()=>{if(this.animationsPaused)n.pause();else if(this.planes===n){this.flyHeldPlanes();let i=this.askedPlanes;this.askedPlanes=void 0,i&&this.flyPlanes(i)}}).catch(i=>{console.error("Failed to start plane fly-overs:",i),this.planes===n&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(n=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",n)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let n=!this.flightTracker.seeded,i=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(da(this._hass,this.config.flights_entity),i);r.length&&(n&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let t=this.heldPlanes;if(!t||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let n=(da(this._hass,this.config?.flights_entity)??[]).filter(i=>!i.onGround&&t.has(i.id));n.length&&this.flyPlanes(n)}flyOver(t){let n=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||n)){if(this.planes){this.flyPlanes(t);return}this.devPlanes=!0,this.askedPlanes=t,this.startPlanes()}}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),la(this),window.removeEventListener(Ue,this.onNeedle),window.removeEventListener(Ye,this.devChanged),Ke().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.engineHours.stop(),clearTimeout(this.engineTimer),this.engineTimer=void 0,this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Kr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Fi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let n=t.attributes?.elevation;return Si(typeof n=="number"?n:Number(n),!!t.attributes?.rising,t.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let n=this.currentSkyPhase();t.dataset.phase!==n&&(t.dataset.phase=n),this.applyMoon(t)}applyMoon(t){let n=t.querySelector(".animation-layer");if(!n)return;let i=this.config?.moon_entity,r=Js(Tt(),i?this._hass?.states[i]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(n.dataset.moon===s)return;n.dataset.moon=s;let l=tl(r,o);n.style.setProperty("--awc-moon-mask",l.mask),n.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let t=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(t)?t:void 0}applySizeState(){let t=this.querySelector(".animated-weather-card"),n=t?.querySelector(".weather-info");if(!t||!n)return;t.toggleAttribute("data-wall-frame",this.surface==="card"&&!!this.config?.show_forecast&&this.config?.layout!=="nightstand"&&vs(t)),cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>Ms(t));let i=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",t.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let m=t.dataset.metrics;t.dataset.metrics="row";let p=Array.from(r.children),y=parseFloat(getComputedStyle(r).columnGap)||0,w=p.reduce((b,C)=>b+C.getBoundingClientRect().width,0)+y*Math.max(0,p.length-1),_=r.clientWidth-w,v=_<-.5||m==="grid"&&_<ph;t.dataset.metrics=v?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),d=()=>n.scrollHeight>n.clientHeight+1||!o&&!!i&&i.scrollHeight>i.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,h=!!l&&!l.hidden?gh:kl.map(m=>[m,void 0]),u=([m,p])=>{t.dataset.height=m,p?t.dataset.note=p:delete t.dataset.note},f=this.extras,g=f?.levels()??[];if(!f||!g.length){for(let m of h)if(u(m),!d())break;f?.fitted();return}for(let m=0;m<g.length;m++){f.setLevel(g[m]);let p=m===g.length-1;for(let y of h){if(!p&&!["regular","close","compact"].includes(y[0]))break;if(u(y),!d()&&(p||f.levelOk(d))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let t=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(je(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+t:4+t}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let t=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return t?Math.ceil((t*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),this.config?.show_forecast&&(t+=3+this.dayRows()),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Hn("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Zi);var Wa=class extends Zi{constructor(){super(),this.surface="forecast"}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(e)}gridRows(){if(this.config?.compact)return 2;let e=this.config?.show_hours!==!1&&je(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),t=Math.max(0,Math.min(10,this.config?.forecast_days??7));return e?t<=3?5:7:Math.max(3,Math.ceil((58+t*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(e,t=[],n=[]){let i=[...t,...n,...Object.keys(e?.states??{})];return Qe(i.find(r=>r.startsWith("weather."))??Ur.entity,e)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await Hn("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",Wa);customElements.define("animated-weather-dev-card",Ui);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Qe(e,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Qe(e,a),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Qe(e,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Qe(e,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=He("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Ko} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${Yt(Rt(Fe))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
