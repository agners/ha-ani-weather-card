"use strict";(()=>{function $e(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Xa(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rn={duration:.5,overwrite:!1,delay:0},gr,ie,B,Me=1e8,W=1/Me,or=Math.PI*2,Hl=or/4,Fl=0,Za=Math.sqrt,Wl=Math.cos,zl=Math.sin,ne=function(t){return typeof t=="string"},X=function(t){return typeof t=="function"},Ge=function(t){return typeof t=="number"},ei=function(t){return typeof t>"u"},ze=function(t){return typeof t=="object"},ge=function(t){return t!==!1},yr=function(){return typeof window<"u"},Vn=function(t){return X(t)||ne(t)},Qa=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},le=Array.isArray,Nl=/random\([^)]+\)/g,Il=/,\s*/g,qa=/(?:-?\.?\d|\.)+/gi,wr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ct=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ji=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_r=/[+-]=-?[.\d]+/,$l=/[^,'"\[\]\s]+/gi,ql=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,U,Fe,sr,vr,Se={},jn={},Ja,eo=function(t){return(jn=At(t,Se))&&de},ti=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},an=function(t,e){return!e&&console.warn(t)},to=function(t,e){return t&&(Se[t]=e)&&jn&&(jn[t]=e)||Se},on=function(){return 0},Gl={suppressEvents:!0,isStart:!0,kill:!1},Un={suppressEvents:!0,kill:!1},Bl={suppressEvents:!0},br={},je=[],lr={},no,fe={},er={},Ga=30,Yn=[],xr="",Sr=function(t){var e=t[0],n,i;if(ze(e)||X(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Yn.length;i--&&!Yn[i].targetTest(e););n=Yn[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new kr(t[i],n)))||t.splice(i,1);return t},Xe=function(t){return t._gsap||Sr(Pe(t))[0]._gsap},Cr=function(t,e,n){return(n=t[e])&&X(n)?t[e]():ei(n)&&t.getAttribute&&t.getAttribute(e)||n},ue=function(t,e){return(t=t.split(",")).forEach(e)||t},Z=function(t){return Math.round(t*1e5)/1e5||0},V=function(t){return Math.round(t*1e7)/1e7||0},ut=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Vl=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Xn=function(){var t=je.length,e=je.slice(0),n,i;for(lr={},je.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ar=function(t){return!!(t._initted||t._startAt||t.add)},io=function(t,e,n,i){je.length&&!ie&&Xn(),t.render(e,n,i||!!(ie&&e<0&&Ar(t))),je.length&&!ie&&Xn()},ro=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($l).length<2?e:ne(t)?t.trim():t},ao=function(t){return t},Ce=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ul=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},At=function(t,e){for(var n in e)t[n]=e[n];return t},Ba=function a(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ze(e[n])?a(t[n]||(t[n]={}),e[n]):e[n]);return t},Zn=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},en=function(t){var e=t.parent||U,n=t.keyframes?Ul(le(t.keyframes)):Ce;if(ge(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Yl=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},oo=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],s;if(r)for(s=e[r];o&&o[r]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ni=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ze=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},st=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Kl=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dr=function(t,e,n,i){return t._startAt&&(ie?t._startAt.revert(Un):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},jl=function a(t){return!t||t._ts&&a(t.parent)},Va=function(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0},Tt=function(t,e){var n=Math.floor(t=V(t/e));return t&&n===t?n-1:n},Qn=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ii=function(t){return t._end=V(t._start+(t._tDur/Math.abs(t._ts||t._rts||W)||0))},ri=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=V(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ii(t),n._dirty||st(n,t)),t},so=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Qn(t.rawTime(),e),(!e._dur||dn(0,e.totalDuration(),n)-e._tTime>W)&&e.render(n,!0)),st(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-W}},We=function(t,e,n,i){return e.parent&&Ze(e),e._start=V((Ge(n)?n:n||t!==U?Ee(t,n,e):t._time)+e._delay),e._end=V(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),oo(t,e,"_first","_last",t._sort?"_start":0),cr(e)||(t._recent=e),i||so(t,e),t._ts<0&&ri(t,t._tTime),t},lo=function(t,e){return(Se.ScrollTrigger||ti("scrollTrigger",e))&&Se.ScrollTrigger.create(e,t)},co=function(t,e,n,i,r){if(Pr(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ie&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&no!==pe.frame)return je.push(t),t._lazy=[r,i],1},Xl=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},cr=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zl=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Xl(t)&&!(!t._initted&&cr(t))||(t._ts<0||t._dp._ts<0)&&!cr(t))?0:1,s=t._rDelay,l=0,d,c,h;if(s&&t._repeat&&(l=dn(0,t._tDur,e),c=Tt(l,s),t._yoyo&&c&1&&(o=1-o),c!==Tt(t._tTime,s)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||ie||i||t._zTime===W||!e&&t._zTime){if(!t._initted&&co(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?W:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,d=t._pt;d;)d.r(o,d.d),d=d._next;e<0&&dr(t,e,n,!0),t._onUpdate&&!n&&xe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&xe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ze(t,1),!n&&!ie&&(xe(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ql=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},kt=function(t,e,n,i){var r=t._repeat,o=V(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:V(o*(r+1)+t._rDelay*r):o,s>0&&!i&&ri(t,t._tTime=t._tDur*s),t.parent&&ii(t),n||st(t.parent,t),t},Ua=function(t){return t instanceof se?st(t):kt(t,t._dur)},Jl={_start:0,endTime:on,totalDuration:on},Ee=function a(t,e,n){var i=t.labels,r=t._recent||Jl,o=t.duration()>=Me?r.endTime(!1):t._dur,s,l,d;return ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),d=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),d&&n&&(l=l/100*(le(n)?n[0]:n).totalDuration()),s>1?a(t,e.substr(0,s-1),n)+l:o+l)):e==null?o:+e},tn=function(t,e,n){var i=Ge(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],s,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ge(l.vars.inherit)&&l.parent;o.immediateRender=ge(s.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new J(e[0],o,e[r+1])},Qe=function(t,e){return t||t===0?e(t):e},dn=function(t,e,n){return n<t?t:n>e?e:n},re=function(t,e){return!ne(t)||!(e=ql.exec(t))?"":e[1]},ed=function(t,e,n){return Qe(n,function(i){return dn(t,e,i)})},ur=[].slice,uo=function(t,e){return t&&ze(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ze(t[0]))&&!t.nodeType&&t!==Fe},td=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ne(i)&&!e||uo(i,1)?(r=n).push.apply(r,Pe(i)):n.push(i)})||n},Pe=function(t,e,n){return B&&!e&&B.selector?B.selector(t):ne(t)&&!n&&(sr||!Et())?ur.call((e||vr).querySelectorAll(t),0):le(t)?td(t,n):uo(t)?ur.call(t,0):t?[t]:[]},hr=function(t){return t=Pe(t)[0]||an("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Pe(e,n.querySelectorAll?n:n===t?an("Invalid scope")||vr.createElement("div"):t)}},ho=function(t){return t.sort(function(){return .5-Math.random()})},mo=function(t){if(X(t))return t;var e=ze(t)?t:{each:t},n=lt(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,d=e.axis,c=i,h=i;return ne(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],h=i[1]),function(u,f,p){var m=(p||e).length,g=o[m],y,w,_,v,b,C,S,A,T;if(!g){if(T=e.grid==="auto"?0:(e.grid||[1,Me])[1],!T){for(S=-Me;S<(S=p[T++].getBoundingClientRect().left)&&T<m;);T<m&&T--}for(g=o[m]=[],y=l?Math.min(T,m)*c-.5:i%T,w=T===Me?0:l?m*h/T-.5:i/T|0,S=0,A=Me,C=0;C<m;C++)_=C%T-y,v=w-(C/T|0),g[C]=b=d?Math.abs(d==="y"?v:_):Za(_*_+v*v),b>S&&(S=b),b<A&&(A=b);i==="random"&&ho(g),g.max=S-A,g.min=A,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(T>m?m-1:d?d==="y"?m/T:T:Math.max(T,m/T))||0)*(i==="edges"?-1:1),g.b=m<0?r-m:r,g.u=re(e.amount||e.each)||0,n=n&&m<0?fd(n):n}return m=(g[u]-g.min)/g.max||0,V(g.b+(n?n(m):m)*g.v)+g.u}},mr=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=V(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ge(n)?0:re(n))}},fo=function(t,e){var n=le(t),i,r;return!n&&ze(t)&&(i=n=t.radius||Me,t.values?(t=Pe(t.values),(r=!Ge(t[0]))&&(i*=i)):t=mr(t.increment)),Qe(e,n?X(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),d=Me,c=0,h=t.length,u,f;h--;)r?(u=t[h].x-s,f=t[h].y-l,u=u*u+f*f):u=Math.abs(t[h]-s),u<d&&(d=u,c=h);return c=!i||d<=i?t[c]:o,r||c===o||Ge(o)?c:c+re(o)}:mr(t))},po=function(t,e,n,i){return Qe(le(t)?!e:n===!0?!!(n=0):!i,function(){return le(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},nd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},id=function(t,e){return function(n){return t(parseFloat(n))+(e||re(n))}},rd=function(t,e,n){return yo(t,e,0,1,n)},go=function(t,e,n){return Qe(n,function(i){return t[~~e(i)]})},ad=function a(t,e,n){var i=e-t;return le(t)?go(t,a(0,t.length),e):Qe(n,function(r){return(i+(r-t)%i)%i+t})},od=function a(t,e,n){var i=e-t,r=i*2;return le(t)?go(t,a(0,t.length-1),e):Qe(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Mt=function(t){return t.replace(Nl,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Il);return po(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yo=function(t,e,n,i,r){var o=e-t,s=i-n;return Qe(r,function(l){return n+((l-t)/o*s||0)})},sd=function a(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=ne(t),s={},l,d,c,h,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(le(t)&&!le(e)){for(c=[],h=t.length,u=h-2,d=1;d<h;d++)c.push(a(t[d-1],t[d]));h--,r=function(p){p*=h;var m=Math.min(u,~~p);return c[m](p-m)},n=e}else i||(t=At(le(t)?[]:{},t));if(!c){for(l in e)Er.call(s,t,l,"get",e[l]);r=function(p){return Dr(p,s)||(o?t.p:t)}}}return Qe(n,r)},Ya=function(t,e,n){var i=t.labels,r=Me,o,s,l;for(o in i)s=i[o]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},xe=function(t,e,n){var i=t.vars,r=i[e],o=B,s=t._ctx,l,d,c;if(r)return l=i[e+"Params"],d=i.callbackScope||t,n&&je.length&&Xn(),s&&(B=s),c=l?r.apply(d,l):r.call(d),B=o,c},Qt=function(t){return Ze(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ie),t.progress()<1&&xe(t,"onInterrupt"),t},Ct,wo=[],_o=function(t){if(t)if(t=!t.name&&t.default||t,yr()||t.headless){var e=t.name,n=X(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:on,render:Dr,add:Er,kill:Cd,modifier:Sd,rawVars:0},o={targetTest:0,get:0,getSetter:ai,aliases:{},register:0};if(Et(),t!==i){if(fe[e])return;Ce(i,Ce(Zn(t,r),o)),At(i.prototype,At(r,Zn(t,o))),fe[i.prop=e]=i,t.targetTest&&(Yn.push(i),br[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}to(e,i),t.register&&t.register(de,i,he)}else wo.push(t)},F=255,Jt={aqua:[0,F,F],lime:[0,F,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,F],navy:[0,0,128],white:[F,F,F],olive:[128,128,0],yellow:[F,F,0],orange:[F,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[F,0,0],pink:[F,192,203],cyan:[0,F,F],transparent:[F,F,F,0]},tr=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*F+.5|0},vo=function(t,e,n){var i=t?Ge(t)?[t>>16,t>>8&F,t&F]:0:Jt.black,r,o,s,l,d,c,h,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jt[t])i=Jt[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),s=t.charAt(3),t="#"+r+r+o+o+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&F,i&F,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&F,t&F]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(qa),!e)l=+i[0]%360/360,d=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(d+1):c+d-c*d,r=c*2-o,i.length>3&&(i[3]*=1),i[0]=tr(l+1/3,r,o),i[1]=tr(l,r,o),i[2]=tr(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(wr),n&&i.length<4&&(i[3]=1),i}else i=t.match(qa)||Jt.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/F,o=i[1]/F,s=i[2]/F,h=Math.max(r,o,s),u=Math.min(r,o,s),c=(h+u)/2,h===u?l=d=0:(f=h-u,d=c>.5?f/(2-h-u):f/(h+u),l=h===r?(o-s)/f+(o<s?6:0):h===o?(s-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(d*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},bo=function(t){var e=[],n=[],i=-1;return t.split(qe).forEach(function(r){var o=r.match(ct)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Ka=function(t,e,n){var i="",r=(t+i).match(qe),o=e?"hsla(":"rgba(",s=0,l,d,c,h;if(!r)return t;if(r=r.map(function(u){return(u=vo(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(c=bo(t),l=n.c,l.join(i)!==c.c.join(i)))for(d=t.replace(qe,"1").split(ct),h=d.length-1;s<h;s++)i+=d[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!d)for(d=t.split(qe),h=d.length-1;s<h;s++)i+=d[s]+r[s];return i+d[h]},qe=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jt)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),ld=/hsl[a]?\(/,Tr=function(t){var e=t.join(" "),n;if(qe.lastIndex=0,qe.test(e))return n=ld.test(e),t[1]=Ka(t[1],n),t[0]=Ka(t[0],n,bo(t[1])),!0},sn,pe=(function(){var a=Date.now,t=500,e=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,d,c,h,u,f,p=function m(g){var y=a()-i,w=g===!0,_,v,b,C;if((y>t||y<0)&&(n+=y-e),i+=y,b=i-n,_=b-o,(_>0||w)&&(C=++h.frame,u=b-h.time*1e3,h.time=b=b/1e3,o+=_+(_>=r?4:r-_),v=1),w||(l=d(m)),v)for(f=0;f<s.length;f++)s[f](b,u,C,g)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Ja&&(!sr&&yr()&&(Fe=sr=window,vr=Fe.document||{},Se.gsap=de,(Fe.gsapVersions||(Fe.gsapVersions=[])).push(de.version),eo(jn||Fe.GreenSockGlobals||!Fe.gsap&&Fe||{}),wo.forEach(_o)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(g){return setTimeout(g,o-h.time*1e3+1|0)},sn=1,p(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),sn=0,d=on},lagSmoothing:function(g,y){t=g||1/0,e=Math.min(y||33,t)},fps:function(g){r=1e3/(g||240),o=h.time*1e3+r},add:function(g,y,w){var _=y?function(v,b,C,S){g(v,b,C,S),h.remove(_)}:g;return h.remove(g),s[w?"unshift":"push"](_),Et(),_},remove:function(g,y){~(y=s.indexOf(g))&&s.splice(y,1)&&f>=y&&f--},_listeners:s},h})(),Et=function(){return!sn&&pe.wake()},O={},dd=/^[\d.\-M][\d.\-,\s]/,cd=/["']/g,ud=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,d;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),e[i]=isNaN(d)?d.replace(cd,"").trim():+d,i=l.substr(s+1).trim();return e},hd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},md=function(t){var e=(t+"").split("("),n=O[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ud(e[1])]:hd(t).split(",").map(ro)):O._CE&&dd.test(t)?O._CE("",t):n},fd=function(t){return function(e){return 1-t(1-e)}},lt=function(t,e){return t&&(X(t)?t:O[t]||md(t))||e},ht=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return ue(t,function(s){O[s]=Se[s]=r,O[o=s.toLowerCase()]=n;for(var l in r)O[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=O[s+"."+l]=r[l]}),r},xo=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},nr=function a(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/or*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*zl((c-o)*r)+1},l=t==="out"?s:t==="in"?function(d){return 1-s(1-d)}:xo(s);return r=or/r,l.config=function(d,c){return a(t,d,c)},l},ir=function a(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:xo(n);return i.config=function(r){return a(t,r)},i};ue("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;ht(a+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});O.Linear.easeNone=O.none=O.Linear.easeIn;ht("Elastic",nr("in"),nr("out"),nr());(function(a,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?a*s*s:s<n?a*Math.pow(s-1.5/t,2)+.75:s<i?a*(s-=2.25/t)*s+.9375:a*Math.pow(s-2.625/t,2)+.984375};ht("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ht("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ht("Circ",function(a){return-(Za(1-a*a)-1)});ht("Sine",function(a){return a===1?1:-Wl(a*Hl)+1});ht("Back",ir("in"),ir("out"),ir());O.SteppedEase=O.steps=Se.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-W;return function(s){return((i*dn(0,o,s)|0)+r)*n}}};rn.ease=O["quad.out"];ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return xr+=a+","+a+"Params,"});var kr=function(t,e){this.id=Fl++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cr,this.set=e?e.getSetter:ai},ln=(function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,kt(this,+e.duration,1,1),this.data=e.data,B&&(this._ctx=B,B.data.push(this)),sn||pe.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,kt(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Et(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ri(this,n),!r._dp||r.parent||so(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&We(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===W||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),io(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Va(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Va(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Tt(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-W?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Qn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-W?0:this._rts,this.totalTime(dn(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ii(this),Kl(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Et(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==W&&(this._tTime-=W)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=V(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&We(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ge(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qn(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Bl);var i=ie;return ie=n,Ar(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ie=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ua(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ua(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ee(this,n),ge(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ge(i)),this._dur||(this._zTime=-W),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-W:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-W,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-W)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var s=X(n)?n:ao,l=function(){var c=i.then;i.then=null,r&&r(),X(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Qt(this)},a})();Ce(ln.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-W,_prom:0,_ps:!1,_rts:1});var se=(function(a){Xa(t,a);function t(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ge(n.sortChildren),U&&We(n.parent||U,$e(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&lo($e(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return tn(0,arguments,this),this},e.from=function(i,r,o){return tn(1,arguments,this),this},e.fromTo=function(i,r,o,s){return tn(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,en(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new J(i,r,Ee(this,o),1),this},e.call=function(i,r,o){return We(this,J.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,s,l,d,c){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new J(i,o,Ee(this,l)),this},e.staggerFrom=function(i,r,o,s,l,d,c){return o.runBackwards=1,en(o).immediateRender=ge(o.immediateRender),this.staggerTo(i,r,o,s,l,d,c)},e.staggerFromTo=function(i,r,o,s,l,d,c,h){return s.startAt=o,en(s).immediateRender=ge(s.immediateRender),this.staggerTo(i,r,s,l,d,c,h)},e.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=i<=0?0:V(i),h=this._zTime<0!=i<0&&(this._initted||!d),u,f,p,m,g,y,w,_,v,b,C,S;if(this!==U&&c>l&&i>=0&&(c=l),c!==this._tTime||o||h){if(s!==this._time&&d&&(c+=this._time-s,i+=this._time-s),u=c,v=this._start,_=this._ts,y=!_,h&&(d||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,g=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(u=V(c%g),c===l?(m=this._repeat,u=d):(b=V(c/g),m=~~b,m&&m===b&&(u=d,m--),u>d&&(u=d)),b=Tt(this._tTime,g),!s&&this._tTime&&b!==m&&this._tTime-b*g-this._dur<=0&&(b=m),C&&m&1&&(u=d-u,S=1),m!==b&&!this._lock){var A=C&&b&1,T=A===(C&&m&1);if(m<b&&(A=!A),s=A?0:c%d?d:c,this._lock=1,this.render(s||(S?0:V(m*g)),r,!d)._lock=0,this._tTime=c,!r&&this.parent&&xe(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=m),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,T&&(this._lock=2,s=A?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Ql(this,V(s),V(u)),w&&(c-=u-(u=w._start))),this._tTime=c,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&d&&!r&&!b&&(xe(this,"onStart"),this._tTime!==c))return this;if(u>=s&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!y){w=0,p&&(c+=this._zTime=-W);break}}f=p}else{f=this._last;for(var x=i<0?i:u;f;){if(p=f._prev,(f._act||x<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,o||ie&&Ar(f)),u!==this._time||!this._ts&&!y){w=0,p&&(c+=this._zTime=x?-W:W);break}}f=p}}if(w&&!r&&(this.pause(),w.render(u>=s?0:-W)._zTime=u>=s?1:-1,this._ts))return this._start=v,ii(this),this.render(i,r,o);this._onUpdate&&!r&&xe(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ze(this,1),!r&&!(i<0&&!s)&&(c||s||!l)&&(xe(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ge(r)||(r=Ee(this,r,i)),!(i instanceof ln)){if(le(i))return i.forEach(function(s){return o.add(s,r)}),this;if(ne(i))return this.addLabel(i,r);if(X(i))i=J.delayedCall(0,i);else return this}return this!==i?We(this,i,r):this},e.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-Me);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof J?r&&l.push(d):(o&&l.push(d),i&&l.push.apply(l,d.getChildren(!0,r,o)))),d=d._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ne(i)?this.removeLabel(i):X(i)?this.killTweensOf(i):(i.parent===this&&ni(this,i),i===this._recent&&(this._recent=this._last),st(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=V(pe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ee(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var s=J.delayedCall(0,r||on,o);return s.data="isPause",this._hasPause=1,We(this,s,Ee(this,i))},e.removePause=function(i){var r=this._first;for(i=Ee(this,i);r;)r._start===i&&r.data==="isPause"&&Ze(r),r=r._next},e.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Ke!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],s=Pe(i),l=this._first,d=Ge(r),c;l;)l instanceof J?Vl(l._targets,s)&&(d?(!Ke||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(s,r)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,s=Ee(o,i),l=r,d=l.startAt,c=l.onStart,h=l.onStartParams,u=l.immediateRender,f,p=J.to(o,Ce({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||W,onStart:function(){if(o.pause(),!f){var g=r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());p._dur!==g&&kt(p,g,0,1).render(p._time,!0,!0),f=1}c&&c.apply(p,h||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ce({startAt:{time:Ee(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ya(this,Ee(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ya(this,Ee(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+W)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(i=V(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(d in l)l[d]>=o&&(l[d]+=i);return st(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),st(this)},e.totalDuration=function(i){var r=0,o=this,s=o._last,l=Me,d,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,We(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=V(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=d;kt(o,o===U&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(U._ts&&(io(U,Qn(i,U)),no=pe.frame),pe.frame>=Ga){Ga+=ye.autoSleep||120;var r=U._first;if((!r||!r._ts)&&ye.autoSleep&&pe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pe.sleep()}}},t})(ln);Ce(se.prototype,{_lock:0,_hasPause:0,_forcing:0});var pd=function(t,e,n,i,r,o,s){var l=new he(this._pt,t,e,0,1,Or,null,r),d=0,c=0,h,u,f,p,m,g,y,w;for(l.b=n,l.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=Mt(i)),o&&(w=[n,i],o(w,t,e),n=w[0],i=w[1]),u=n.match(Ji)||[];h=Ji.exec(i);)p=h[0],m=i.substring(d,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),p!==u[c++]&&(g=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:p.charAt(1)==="="?ut(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},d=Ji.lastIndex);return l.c=d<i.length?i.substring(d,i.length):"",l.fp=s,(_r.test(i)||y)&&(l.e=0),this._pt=l,l},Er=function(t,e,n,i,r,o,s,l,d,c){X(i)&&(i=i(r||0,t,o));var h=t[e],u=n!=="get"?n:X(h)?d?t[e.indexOf("set")||!X(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():h,f=X(h)?d?vd:Ao:Lr,p;if(ne(i)&&(~i.indexOf("random(")&&(i=Mt(i)),i.charAt(1)==="="&&(p=ut(u,i)+(re(u)||0),(p||p===0)&&(i=p))),!c||u!==i||fr)return!isNaN(u*i)&&i!==""?(p=new he(this._pt,t,e,+u||0,i-(u||0),typeof h=="boolean"?xd:To,0,f),d&&(p.fp=d),s&&p.modifier(s,this,t),this._pt=p):(!h&&!(e in t)&&ti(e,i),pd.call(this,t,e,u,i,f,l||ye.stringFilter,d))},gd=function(t,e,n,i,r){if(X(t)&&(t=nn(t,r,e,n,i)),!ze(t)||t.style&&t.nodeType||le(t)||Qa(t))return ne(t)?nn(t,r,e,n,i):t;var o={},s;for(s in t)o[s]=nn(t[s],r,e,n,i);return o},Mr=function(t,e,n,i,r,o){var s,l,d,c;if(fe[t]&&(s=new fe[t]).init(r,s.rawVars?e[t]:gd(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new he(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Ct))for(d=n._ptLookup[n._targets.indexOf(r)],c=s._props.length;c--;)d[s._props[c]]=l;return s},Ke,fr,Pr=function a(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,d=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,m=t._startAt,g=t._targets,y=t.parent,w=y&&y.data==="nested"?y.vars.targets:g,_=t._overwrite==="auto"&&!gr,v=t.timeline,b=i.easeReverse||h,C,S,A,T,x,E,P,R,z,I,q,H,G;if(v&&(!u||!r)&&(r="none"),t._ease=lt(r,rn.ease),t._rEase=b&&(lt(b)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(R=g[0]?Xe(g[0]).harness:0,H=R&&i[R.prop],C=Zn(i,br),m&&(m._zTime<0&&m.progress(1),e<0&&c&&s&&!f?m.render(-1,!0):m.revert(c&&p?Un:Gl),m._lazy=0),o){if(Ze(t._startAt=J.set(g,Ce({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!m&&ge(l),startAt:null,delay:0,onUpdate:d&&function(){return xe(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ie||!s&&!f)&&t._startAt.revert(Un),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(c&&p&&!m){if(e&&(s=!1),A=Ce({overwrite:!1,data:"isFromStart",lazy:s&&!m&&ge(l),immediateRender:s,stagger:0,parent:y},C),H&&(A[R.prop]=H),Ze(t._startAt=J.set(g,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ie?t._startAt.revert(Un):t._startAt.render(-1,!0)),t._zTime=e,!s)a(t._startAt,W,W);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ge(l)||l&&!p,S=0;S<g.length;S++){if(x=g[S],P=x._gsap||Sr(g)[S]._gsap,t._ptLookup[S]=I={},lr[P.id]&&je.length&&Xn(),q=w===g?S:w.indexOf(x),R&&(z=new R).init(x,H||C,t,q,w)!==!1&&(t._pt=T=new he(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(be){I[be]=T}),z.priority&&(E=1)),!R||H)for(A in C)fe[A]&&(z=Mr(A,C,t,q,x,w))?z.priority&&(E=1):I[A]=T=Er.call(t,x,A,"get",C[A],q,w,0,i.stringFilter);t._op&&t._op[S]&&t.kill(x,t._op[S]),_&&t._pt&&(Ke=t,U.killTweensOf(x,I,t.globalTime(e)),G=!t.parent,Ke=0),t._pt&&l&&(lr[P.id]=1)}E&&Rr(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!G,u&&e<=0&&v.render(Me,!0,!0)},yd=function(t,e,n,i,r,o,s,l){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!d)for(d=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return fr=1,t.vars[e]="+=0",Pr(t,s),fr=0,l?an(e+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(f=d.length;f--;)h=d[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=Z(n)+re(h.e)),h.b&&(h.b=c.s+re(h.b))},wd=function(t,e){var n=t[0]?Xe(t[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return e;r=At({},e);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},_d=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,s;if(le(e))s=n[t]||(n[t]=[]),e.forEach(function(l,d){return s.push({t:d/(e.length-1)*100,v:l,e:r})});else for(o in e)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(t),v:e[o],e:r})},nn=function(t,e,n,i,r){return X(t)?t.call(e,n,i,r):ne(t)&&~t.indexOf("random(")?Mt(t):t},So=xr+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Co={};ue(So+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Co[a]=1});var J=(function(a){Xa(t,a);function t(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:en(i))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,m=l.defaults,g=l.scrollTrigger,y=i.parent||U,w=(le(n)||Qa(n)?Ge(n[0]):"length"in i)?[n]:Pe(n),_,v,b,C,S,A,T,x;if(s._targets=w.length?Sr(w):an("GSAP target "+n+" not found. https://gsap.com",!ye.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,p||u||Vn(d)||Vn(c)){i=s.vars;var E=i.easeReverse||i.yoyoEase;if(_=s.timeline=new se({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:w}),_.kill(),_.parent=_._dp=$e(s),_._start=0,u||Vn(d)||Vn(c)){if(C=w.length,T=u&&mo(u),ze(u))for(S in u)~So.indexOf(S)&&(x||(x={}),x[S]=u[S]);for(v=0;v<C;v++)b=Zn(i,Co),b.stagger=0,E&&(b.easeReverse=E),x&&At(b,x),A=w[v],b.duration=+nn(d,$e(s),v,A,w),b.delay=(+nn(c,$e(s),v,A,w)||0)-s._delay,!u&&C===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),_.to(A,b,T?T(v,A,w):0),_._ease=O.none;_.duration()?d=c=0:s.timeline=0}else if(p){en(Ce(_.vars.defaults,{ease:"none"})),_._ease=lt(p.ease||i.ease||"none");var P=0,R,z,I;if(le(p))p.forEach(function(q){return _.to(w,q,">")}),_.duration();else{b={};for(S in p)S==="ease"||S==="easeEach"||_d(S,p[S],b,p.easeEach);for(S in b)for(R=b[S].sort(function(q,H){return q.t-H.t}),P=0,v=0;v<R.length;v++)z=R[v],I={ease:z.e,duration:(z.t-(v?R[v-1].t:0))/100*d},I[S]=z.v,_.to(w,I,P),P+=I.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return f===!0&&!gr&&(Ke=$e(s),U.killTweensOf(w),Ke=0),We(y,$e(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!d&&!p&&s._start===V(y._time)&&ge(h)&&jl($e(s))&&y.data!=="nested")&&(s._tTime=-W,s.render(Math.max(0,-c)||0)),g&&lo($e(s),g),s}var e=t.prototype;return e.render=function(i,r,o){var s=this._time,l=this._tDur,d=this._dur,c=i<0,h=i>l-W&&!c?l:i<W?0:i,u,f,p,m,g,y,w,_;if(!d)Zl(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,r,o);if(u=V(h%m),h===l?(p=this._repeat,u=d):(g=V(h/m),p=~~g,p&&p===g?(u=d,p--):u>d&&(u=d)),y=this._yoyo&&p&1,y&&(u=d-u),g=Tt(this._tTime,m),u===s&&!o&&this._initted&&p===g)return this._tTime=h,this;p!==g&&this.vars.repeatRefresh&&!y&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(V(m*p),!0).invalidate()._lock=0)}if(!this._initted){if(co(this,c?i:u,o,r,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(d!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=u<s;if(v!==this._inv){var b=v?s:d-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/d);if(this._from&&(this.ratio=w=1-w),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!r&&!g&&(xe(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;_&&_.render(i<0?i:_._dur*_._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&dr(this,i,r,o),xe(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!r&&this.parent&&xe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&dr(this,i,!0,!0),(i||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ze(this,1),!r&&!(c&&!s)&&(h||s||y)&&(xe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,s,l){sn||pe.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Pr(this,d),c=this._ease(d/this._dur),yd(this,i,r,o,s,c,d,l)?this.resetTo(i,r,o,s,1):(ri(this,0),this.parent||oo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Qt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ie),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ke&&Ke.vars.overwrite!==!0)._first||Qt(this),this.parent&&o!==this.timeline.totalDuration()&&kt(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?Pe(i):s,d=this._ptLookup,c=this._pt,h,u,f,p,m,g,y;if((!r||r==="all")&&Yl(s,l))return r==="all"&&(this._pt=0),Qt(this);for(h=this._op=this._op||[],r!=="all"&&(ne(r)&&(m={},ue(r,function(w){return m[w]=1}),r=m),r=wd(s,r)),y=s.length;y--;)if(~l.indexOf(s[y])){u=d[y],r==="all"?(h[y]=r,p=u,f={}):(f=h[y]=h[y]||{},p=r);for(m in p)g=u&&u[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&ni(this,g,"_pt"),delete u[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&c&&Qt(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return tn(1,arguments)},t.delayedCall=function(i,r,o,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},t.fromTo=function(i,r,o){return tn(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return U.killTweensOf(i,r,o)},t})(ln);Ce(J.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ue("staggerTo,staggerFrom,staggerFromTo",function(a){J[a]=function(){var t=new se,e=ur.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var Lr=function(t,e,n){return t[e]=n},Ao=function(t,e,n){return t[e](n)},vd=function(t,e,n,i){return t[e](i.fp,n)},bd=function(t,e,n){return t.setAttribute(e,n)},ai=function(t,e){return X(t[e])?Ao:ei(t[e])&&t.setAttribute?bd:Lr},To=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},xd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Or=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Dr=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Sd=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Cd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ni(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ad=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Rr=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},he=(function(){function a(e,n,i,r,o,s,l,d,c){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||To,this.d=l||this,this.set=d||Lr,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ad,this.m=n,this.mt=r,this.tween=i},a})();ue(xr+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return br[a]=1});Se.TweenMax=Se.TweenLite=J;Se.TimelineLite=Se.TimelineMax=se;U=new se({sortChildren:!1,defaults:rn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ye.stringFilter=Tr;var dt=[],Kn={},Td=[],ja=0,kd=0,rr=function(t){return(Kn[t]||Td).map(function(e){return e()})},pr=function(){var t=Date.now(),e=[];t-ja>2&&(rr("matchMediaInit"),dt.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,d;for(s in i)o=Fe.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,d=1);d&&(n.revert(),l&&e.push(n))}),rr("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ja=t,rr("matchMedia"))},ko=(function(){function a(e,n){this.selector=n&&hr(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kd++,e&&this.add(e)}var t=a.prototype;return t.add=function(n,i,r){X(n)&&(r=i,i=n,n=X);var o=this,s=function(){var d=B,c=o.selector,h;return d&&d!==o&&d.data.push(o),r&&(o.selector=hr(r)),B=o,h=i.apply(o,arguments),X(h)&&o._r.push(h),B=d,o.selector=c,o.isReverted=!1,h};return o.last=s,n===X?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},t.ignore=function(n){var i=B;B=null,n(this),B=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof J&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var s=r.getTweens(),l=r.data.length,d;l--;)d=r.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=r.data.length;l--;)d=r.data[l],d instanceof se?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof J)&&d.revert&&d.revert(n);r._r.forEach(function(c){return c(n,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=dt.length;o--;)dt[o].id===this.id&&dt.splice(o,1)},t.revert=function(n){this.kill(n||{})},a})(),Ed=(function(){function a(e){this.contexts=[],this.scope=e,B&&B.data.push(this)}var t=a.prototype;return t.add=function(n,i,r){ze(n)||(n={matches:n});var o=new ko(0,r||this.scope),s=o.conditions={},l,d,c;B&&!o.selector&&(o.selector=B.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(d in n)d==="all"?c=1:(l=Fe.matchMedia(n[d]),l&&(dt.indexOf(o)<0&&dt.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(pr):l.addEventListener("change",pr)));return c&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),Jn={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _o(i)})},timeline:function(t){return new se(t)},getTweensOf:function(t,e){return U.getTweensOf(t,e)},getProperty:function(t,e,n,i){ne(t)&&(t=Pe(t)[0]);var r=Xe(t||{}).get,o=n?ao:ro;return n==="native"&&(n=""),t&&(e?o((fe[e]&&fe[e].get||r)(t,e,n,i)):function(s,l,d){return o((fe[s]&&fe[s].get||r)(t,s,l,d))})},quickSetter:function(t,e,n){if(t=Pe(t),t.length>1){var i=t.map(function(c){return de.quickSetter(c,e,n)}),r=i.length;return function(c){for(var h=r;h--;)i[h](c)}}t=t[0]||{};var o=fe[e],s=Xe(t),l=s.harness&&(s.harness.aliases||{})[e]||e,d=o?function(c){var h=new o;Ct._pt=0,h.init(t,n?c+n:c,Ct,0,[t]),h.render(1,h),Ct._pt&&Dr(1,Ct)}:s.set(t,l);return o?d:function(c){return d(t,l,n?c+n:c,s,1)}},quickTo:function(t,e,n){var i,r=de.to(t,Ce((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,d,c){return r.resetTo(e,l,d,c)};return o.tween=r,o},isTweening:function(t){return U.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lt(t.ease,rn.ease)),Ba(rn,t||{})},config:function(t){return Ba(ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!fe[s]&&!Se[s]&&an(e+" effect requires "+s+" plugin.")}),er[e]=function(s,l,d){return n(Pe(s),Ce(l||{},r),d)},o&&(se.prototype[e]=function(s,l,d){return this.add(er[e](s,ze(l)?l:(d=l)&&{},this),d)})},registerEase:function(t,e){O[t]=lt(e)},parseEase:function(t,e){return arguments.length?lt(t,e):O},getById:function(t){return U.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new se(t),i,r;for(n.smoothChildTiming=ge(t.smoothChildTiming),U.remove(n),n._dp=0,n._time=n._tTime=U._time,i=U._first;i;)r=i._next,(e||!(!i._dur&&i instanceof J&&i.vars.onComplete===i._targets[0]))&&We(n,i,i._start-i._delay),i=r;return We(U,n,0),n},context:function(t,e){return t?new ko(t,e):B},matchMedia:function(t){return new Ed(t)},matchMediaRefresh:function(){return dt.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||pr()},addEventListener:function(t,e){var n=Kn[t]||(Kn[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Kn[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ad,wrapYoyo:od,distribute:mo,random:po,snap:fo,normalize:rd,getUnit:re,clamp:ed,splitColor:vo,toArray:Pe,selector:hr,mapRange:yo,pipe:nd,unitize:id,interpolate:sd,shuffle:ho},install:eo,effects:er,ticker:pe,updateRoot:se.updateRoot,plugins:fe,globalTimeline:U,core:{PropTween:he,globals:to,Tween:J,Timeline:se,Animation:ln,getCache:Xe,_removeLinkedListItem:ni,reverting:function(){return ie},context:function(t){return t&&B&&(B.data.push(t),t._ctx=B),B},suppressOverwrites:function(t){return gr=t}}};ue("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Jn[a]=J[a]});pe.add(se.updateRoot);Ct=Jn.to({},{duration:0});var Md=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Pd=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Md(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ar=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,d;if(ne(r)&&(l={},ue(r,function(c){return l[c]=1}),r=l),e){l={};for(d in r)l[d]=e(r[d]);r=l}Pd(s,r)}}}},de=Jn.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,s,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",s=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ie?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ar("roundProps",mr),ar("modifiers"),ar("snap",fo))||Jn;J.version=se.version=de.version="3.15.0";Ja=1;yr()&&Et();var Ld=O.Power0,Od=O.Power1,Dd=O.Power2,Rd=O.Power3,Hd=O.Power4,Fd=O.Linear,Wd=O.Quad,zd=O.Cubic,Nd=O.Quart,Id=O.Quint,$d=O.Strong,qd=O.Elastic,Gd=O.Back,Bd=O.SteppedEase,Vd=O.Bounce,Ud=O.Sine,Yd=O.Expo,Kd=O.Circ;var Eo,Je,Lt,Ir,gt,jd,Mo,$r,Xd=function(){return typeof window<"u"},Ve={},pt=180/Math.PI,Ot=Math.PI/180,Pt=Math.atan2,Po=1e8,qr=/([A-Z])/g,Zd=/(left|right|width|margin|padding|x)/i,Qd=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fr=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Jd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ec=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},tc=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nc=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zo=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},No=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ic=function(t,e,n){return t.style[e]=n},rc=function(t,e,n){return t.style.setProperty(e,n)},ac=function(t,e,n){return t._gsap[e]=n},oc=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},sc=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},lc=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Y="transform",we=Y+"Origin",dc=function a(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ve&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ne[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=Be(i,s)}):this.tfm[t]=o.x?o[t]:Be(i,t),t===we&&(this.tfm.zOrigin=o.zOrigin);else return Ne.transform.split(",").forEach(function(s){return a.call(n,s,e)});if(this.props.indexOf(Y)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(we,e,"")),t=Y}(r||e)&&this.props.push(t,e,r[t])},Io=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cc=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(qr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=$r(),(!r||!r.isStart)&&!n[Y]&&(Io(n),i.zOrigin&&n[we]&&(n[we]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$o=function(t,e){var n={target:t,props:[],revert:cc,save:dc};return t._gsap||de.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},qo,Wr=function(t,e){var n=Je.createElementNS?Je.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Je.createElement(t);return n&&n.style?n:Je.createElement(t)},Ae=function a(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(qr,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&a(t,Dt(e)||e,1)||""},Lo="O,Moz,ms,Ms,Webkit".split(","),Dt=function(t,e,n){var i=e||gt,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Lo[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Lo[o]:"")+t},zr=function(){Xd()&&window.document&&(Eo=window,Je=Eo.document,Lt=Je.documentElement,gt=Wr("div")||{style:{}},jd=Wr("div"),Y=Dt(Y),we=Y+"Origin",gt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qo=!!Dt("perspective"),$r=de.core.reverting,Ir=1)},Oo=function(t){var e=t.ownerSVGElement,n=Wr("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Lt.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Lt.removeChild(n),r},Do=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Go=function(t){var e,n;try{e=t.getBBox()}catch{e=Oo(t),n=1}return e&&(e.width||e.height)||n||(e=Oo(t)),e&&!e.width&&!e.x&&!e.y?{x:+Do(t,["x","cx","x1"])||0,y:+Do(t,["y","cy","y1"])||0,width:0,height:0}:e},Bo=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Go(t))},tt=function(t,e){if(e){var n=t.style,i;e in Ve&&e!==we&&(e=Y),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(qr,"-$1").toLowerCase())):n.removeAttribute(e)}},et=function(t,e,n,i,r,o){var s=new he(t._pt,e,n,0,1,o?No:zo);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},Ro={deg:1,rad:1,turn:1},uc={grid:1,flex:1},nt=function a(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=gt.style,l=Zd.test(e),d=t.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,u=i==="px",f=i==="%",p,m,g,y;if(i===o||!r||Ro[i]||Ro[o])return r;if(o!=="px"&&!u&&(r=a(t,e,n,"px")),y=t.getCTM&&Bo(t),(f||o==="%")&&(Ve[e]||~e.indexOf("adius")))return p=y?t.getBBox()[l?"width":"height"]:t[c],Z(f?r/p*h:r/100*p);if(s[l?"width":"height"]=h+(u?o:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===Je||!m.appendChild)&&(m=Je.body),g=m._gsap,g&&f&&g.width&&l&&g.time===pe.time&&!g.uncache)return Z(r/g.width*h);if(f&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=h+i,p=t[c],w?t.style[e]=w:tt(t,e)}else(f||o==="%")&&!uc[Ae(m,"display")]&&(s.position=Ae(t,"position")),m===t&&(s.position="static"),m.appendChild(gt),p=gt[c],m.removeChild(gt),s.position="absolute";return l&&f&&(g=Xe(m),g.time=pe.time,g.width=m[c]),Z(u?p*r/h:p&&r?h/p*r:0)},Be=function(t,e,n,i){var r;return Ir||zr(),e in Ne&&e!=="transform"&&(e=Ne[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ve[e]&&e!=="transform"?(r=hn(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:si(Ae(t,we))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=oi[e]&&oi[e](t,e,n)||Ae(t,e)||Cr(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?nt(t,e,r,n)+n:r},hc=function(t,e,n,i){if(!n||n==="none"){var r=Dt(e,t,1),o=r&&Ae(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Ae(t,"borderTopColor"))}var s=new he(this._pt,t.style,e,0,1,Or),l=0,d=0,c,h,u,f,p,m,g,y,w,_,v,b;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ae(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=Ae(t,e)||i,m?t.style[e]=m:tt(t,e)),c=[n,i],Tr(c),n=c[0],i=c[1],u=n.match(ct)||[],b=i.match(ct)||[],b.length){for(;h=ct.exec(i);)g=h[0],w=i.substring(l,h.index),p?p=(p+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(p=1),g!==(m=u[d++]||"")&&(f=parseFloat(m)||0,v=m.substr((f+"").length),g.charAt(1)==="="&&(g=ut(f,g)+v),y=parseFloat(g),_=g.substr((y+"").length),l=ct.lastIndex-_.length,_||(_=_||ye.units[e]||v,l===i.length&&(i+=_,s.e+=_)),v!==_&&(f=nt(t,e,m,_)||0),s._pt={_next:s._pt,p:w||d===1?w:",",s:f,c:y-f,m:p&&p<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?No:zo;return _r.test(i)&&(s.e=0),this._pt=s,s},Ho={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mc=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ho[n]||n,e[1]=Ho[i]||i,e.join(" ")},fc=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,s,l,d;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),d=r.length;--d>-1;)s=r[d],Ve[s]&&(l=1,s=s==="transformOrigin"?we:Y),tt(n,s);l&&(tt(n,Y),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",hn(n,1),o.uncache=1,Io(i)))}},oi={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new he(t._pt,e,n,0,0,fc);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},un=[1,0,0,1,0,0],Vo={},Uo=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Fo=function(t){var e=Ae(t,Y);return Uo(e)?un:e.substr(7).match(wr).map(Z)},Gr=function(t,e){var n=t._gsap||Xe(t),i=t.style,r=Fo(t),o,s,l,d;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?un:r):(r===un&&!t.offsetParent&&t!==Lt&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,s=t.nextElementSibling,Lt.appendChild(t)),r=Fo(t),l?i.display=l:tt(t,"display"),d&&(s?o.insertBefore(t,s):o?o.appendChild(t):Lt.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Nr=function(t,e,n,i,r,o){var s=t._gsap,l=r||Gr(t,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,f=l[0],p=l[1],m=l[2],g=l[3],y=l[4],w=l[5],_=e.split(" "),v=parseFloat(_[0])||0,b=parseFloat(_[1])||0,C,S,A,T;n?l!==un&&(S=f*g-p*m)&&(A=v*(g/S)+b*(-m/S)+(m*w-g*y)/S,T=v*(-p/S)+b*(f/S)-(f*w-p*y)/S,v=A,b=T):(C=Go(t),v=C.x+(~_[0].indexOf("%")?v/100*C.width:v),b=C.y+(~(_[1]||_[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&s.smooth?(y=v-d,w=b-c,s.xOffset=h+(y*f+w*m)-y,s.yOffset=u+(y*p+w*g)-w):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=b,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[we]="0px 0px",o&&(et(o,s,"xOrigin",d,v),et(o,s,"yOrigin",c,b),et(o,s,"xOffset",h,s.xOffset),et(o,s,"yOffset",u,s.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},hn=function(t,e){var n=t._gsap||new kr(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(t),d=Ae(t,we)||"0",c,h,u,f,p,m,g,y,w,_,v,b,C,S,A,T,x,E,P,R,z,I,q,H,G,be,ae,ke,L,j,N,oe;return c=h=u=m=g=y=w=_=v=0,f=p=1,n.svg=!!(t.getCTM&&Bo(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Y]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Y]!=="none"?l[Y]:"")),i.scale=i.rotate=i.translate="none"),S=Gr(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),d=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),Nr(t,H||d,!!H||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,C=n.yOrigin||0,S!==un&&(E=S[0],P=S[1],R=S[2],z=S[3],c=I=S[4],h=q=S[5],S.length===6?(f=Math.sqrt(E*E+P*P),p=Math.sqrt(z*z+R*R),m=E||P?Pt(P,E)*pt:0,w=R||z?Pt(R,z)*pt+m:0,w&&(p*=Math.abs(Math.cos(w*Ot))),n.svg&&(c-=b-(b*E+C*R),h-=C-(b*P+C*z))):(oe=S[6],j=S[7],ae=S[8],ke=S[9],L=S[10],N=S[11],c=S[12],h=S[13],u=S[14],A=Pt(oe,L),g=A*pt,A&&(T=Math.cos(-A),x=Math.sin(-A),H=I*T+ae*x,G=q*T+ke*x,be=oe*T+L*x,ae=I*-x+ae*T,ke=q*-x+ke*T,L=oe*-x+L*T,N=j*-x+N*T,I=H,q=G,oe=be),A=Pt(-R,L),y=A*pt,A&&(T=Math.cos(-A),x=Math.sin(-A),H=E*T-ae*x,G=P*T-ke*x,be=R*T-L*x,N=z*x+N*T,E=H,P=G,R=be),A=Pt(P,E),m=A*pt,A&&(T=Math.cos(A),x=Math.sin(A),H=E*T+P*x,G=I*T+q*x,P=P*T-E*x,q=q*T-I*x,E=H,I=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,y=180-y),f=Z(Math.sqrt(E*E+P*P+R*R)),p=Z(Math.sqrt(q*q+oe*oe)),A=Pt(I,q),w=Math.abs(A)>2e-4?A*pt:0,v=N?1/(N<0?-N:N):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Uo(Ae(t,Y)),H&&t.setAttribute("transform",H))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(f*=-1,w+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=c-((n.xPercent=c&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Z(f),n.scaleY=Z(p),n.rotation=Z(m)+s,n.rotationX=Z(g)+s,n.rotationY=Z(y)+s,n.skewX=w+s,n.skewY=_+s,n.transformPerspective=v+o,(n.zOrigin=parseFloat(d.split(" ")[2])||!e&&n.zOrigin||0)&&(i[we]=si(d)),n.xOffset=n.yOffset=0,n.force3D=ye.force3D,n.renderTransform=n.svg?gc:qo?Yo:pc,n.uncache=0,n},si=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hr=function(t,e,n){var i=re(e);return Z(parseFloat(e)+parseFloat(nt(t,"x",n+"px",i)))+i},pc=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yo(t,e)},mt="0deg",cn="0px",ft=") ",Yo=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,d=n.rotation,c=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,g=n.transformPerspective,y=n.force3D,w=n.target,_=n.zOrigin,v="",b=y==="auto"&&t&&t!==1||y===!0;if(_&&(h!==mt||c!==mt)){var C=parseFloat(c)*Ot,S=Math.sin(C),A=Math.cos(C),T;C=parseFloat(h)*Ot,T=Math.cos(C),o=Hr(w,o,S*T*-_),s=Hr(w,s,-Math.sin(C)*-_),l=Hr(w,l,A*T*-_+_)}g!==cn&&(v+="perspective("+g+ft),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||o!==cn||s!==cn||l!==cn)&&(v+=l!==cn||b?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+ft),d!==mt&&(v+="rotate("+d+ft),c!==mt&&(v+="rotateY("+c+ft),h!==mt&&(v+="rotateX("+h+ft),(u!==mt||f!==mt)&&(v+="skew("+u+", "+f+ft),(p!==1||m!==1)&&(v+="scale("+p+", "+m+ft),w.style[Y]=v||"translate(0, 0)"},gc=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,d=n.skewX,c=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,g=n.xOffset,y=n.yOffset,w=n.forceCSS,_=parseFloat(o),v=parseFloat(s),b,C,S,A,T;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Ot,d*=Ot,b=Math.cos(l)*h,C=Math.sin(l)*h,S=Math.sin(l-d)*-u,A=Math.cos(l-d)*u,d&&(c*=Ot,T=Math.tan(d-c),T=Math.sqrt(1+T*T),S*=T,A*=T,c&&(T=Math.tan(c),T=Math.sqrt(1+T*T),b*=T,C*=T)),b=Z(b),C=Z(C),S=Z(S),A=Z(A)):(b=h,A=u,C=S=0),(_&&!~(o+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(_=nt(f,"x",o,"px"),v=nt(f,"y",s,"px")),(p||m||g||y)&&(_=Z(_+p-(p*b+m*S)+g),v=Z(v+m-(p*C+m*A)+y)),(i||r)&&(T=f.getBBox(),_=Z(_+i/100*T.width),v=Z(v+r/100*T.height)),T="matrix("+b+","+C+","+S+","+A+","+_+","+v+")",f.setAttribute("transform",T),w&&(f.style[Y]=T)},yc=function(t,e,n,i,r){var o=360,s=ne(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?pt:1),d=l-i,c=i+d+"deg",h,u;return s&&(h=r.split("_")[1],h==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),h==="cw"&&d<0?d=(d+o*Po)%o-~~(d/o)*o:h==="ccw"&&d>0&&(d=(d-o*Po)%o-~~(d/o)*o)),t._pt=u=new he(t._pt,e,n,i,d,Jd),u.e=c,u.u="deg",t._props.push(n),u},Wo=function(t,e){for(var n in e)t[n]=e[n];return t},wc=function(t,e,n){var i=Wo({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,d,c,h,u,f,p;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),o[Y]=e,s=hn(n,1),tt(n,Y),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Y],o[Y]=e,s=hn(n,1),o[Y]=d);for(l in Ve)d=i[l],c=s[l],d!==c&&r.indexOf(l)<0&&(f=re(d),p=re(c),h=f!==p?nt(n,l,d,p):parseFloat(d),u=parseFloat(c),t._pt=new he(t._pt,s,l,h,u-h,Fr),t._pt.u=p||0,t._props.push(l));Wo(s,i)};ue("padding,margin,Width,Radius",function(a,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?a+s:"border"+s+a});oi[t>1?"border"+a:a]=function(s,l,d,c,h){var u,f;if(arguments.length<4)return u=o.map(function(p){return Be(s,p,d)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(c+"").split(" "),f={},o.forEach(function(p,m){return f[p]=u[m]=u[m]||u[(m-1)/2|0]}),s.init(l,f,h)}});var Br={name:"css",register:zr,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,s=t.style,l=n.vars.startAt,d,c,h,u,f,p,m,g,y,w,_,v,b,C,S,A,T;Ir||zr(),this.styles=this.styles||$o(t),A=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(c=e[m],!(fe[m]&&Mr(m,e,n,i,t,r)))){if(f=typeof c,p=oi[m],f==="function"&&(c=c.call(n,i,t,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Mt(c)),p)p(this,t,m,c,n)&&(S=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(m)+"").trim(),c+="",qe.lastIndex=0,qe.test(d)||(g=re(d),y=re(c),y?g!==y&&(d=nt(t,m,d,y)+y):g&&(c+=g)),this.add(s,"setProperty",d,c,i,r,0,0,m),o.push(m),A.push(m,0,s[m]);else if(f!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(n,i,t,r):l[m],ne(d)&&~d.indexOf("random(")&&(d=Mt(d)),re(d+"")||d==="auto"||(d+=ye.units[m]||re(Be(t,m))||""),(d+"").charAt(1)==="="&&(d=Be(t,m))):d=Be(t,m),u=parseFloat(d),w=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),w&&(c=c.substr(2)),h=parseFloat(c),m in Ne&&(m==="autoAlpha"&&(u===1&&Be(t,"visibility")==="hidden"&&h&&(u=0),A.push("visibility",0,s.visibility),et(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Ne[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Ve,_){if(this.styles.save(m),T=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=Ae(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=c,c=Ae(t,"perspective"),x?t.style.perspective=x:tt(t,"perspective")}h=parseFloat(c)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||hn(t,e.parseTransform),C=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new he(this._pt,s,Y,0,1,b.renderTransform,b,0,-1),v.dep=1),m==="scale")this._pt=new he(this._pt,b,"scaleY",b.scaleY,(w?ut(b.scaleY,w+h):h)-b.scaleY||0,Fr),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(we,0,s[we]),c=mc(c),b.svg?Nr(t,c,0,C,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==b.zOrigin&&et(this,b,"zOrigin",b.zOrigin,y),et(this,s,m,si(d),si(c)));continue}else if(m==="svgOrigin"){Nr(t,c,1,C,0,this);continue}else if(m in Vo){yc(this,b,m,u,w?ut(u,w+c):c);continue}else if(m==="smoothOrigin"){et(this,b,"smooth",b.smooth,c);continue}else if(m==="force3D"){b[m]=c;continue}else if(m==="transform"){wc(this,c,t);continue}}else m in s||(m=Dt(m)||m);if(_||(h||h===0)&&(u||u===0)&&!Qd.test(c)&&m in s)g=(d+"").substr((u+"").length),h||(h=0),y=re(c)||(m in ye.units?ye.units[m]:g),g!==y&&(u=nt(t,m,d,y)),this._pt=new he(this._pt,_?b:s,m,u,(w?ut(u,w+h):h)-u,!_&&(y==="px"||m==="zIndex")&&e.autoRound!==!1?nc:Fr),this._pt.u=y||0,_&&T!==c?(this._pt.b=d,this._pt.e=T,this._pt.r=tc):g!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=ec);else if(m in s)hc.call(this,t,m,d,w?w+c:c);else if(m in t)this.add(t,m,d||t[m],w?w+c:c,i,r);else if(m!=="parseTransform"){ti(m,c);continue}_||(m in s?A.push(m,0,s[m]):typeof t[m]=="function"?A.push(m,2,t[m]()):A.push(m,1,d||t[m])),o.push(m)}}S&&Rr(this)},render:function(t,e){if(e.tween._time||!$r())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Be,aliases:Ne,getSetter:function(t,e,n){var i=Ne[e];return i&&i.indexOf(",")<0&&(e=i),e in Ve&&e!==we&&(t._gsap.x||Be(t,"x"))?n&&Mo===n?e==="scale"?oc:ac:(Mo=n||{})&&(e==="scale"?sc:lc):t.style&&!ei(t.style[e])?ic:~e.indexOf("-")?rc:ai(t,e)},core:{_removeProperty:tt,_getMatrix:Gr}};de.utils.checkPrefix=Dt;de.core.getStyleSaver=$o;(function(a,t,e,n){var i=ue(a+","+t+","+e,function(r){Ve[r]=1});ue(t,function(r){ye.units[r]="deg",Vo[r]=1}),Ne[i[13]]=a+","+t,ue(n,function(r){var o=r.split(":");Ne[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ye.units[a]="px"});de.registerPlugin(Br);var Vr=de.registerPlugin(Br)||de,Ph=Vr.core.Tween;var Ur={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},ce={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Ko={windSpeed:[.1,15],rainCount:[.1,10],leafCount:[.1,10],snowCount:[.1,10],cloudBaseSize:[.3,2.5],cloudCount:[1,20],splashBounce:[40,120]},jo={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Xo="1.3.2",Zo={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function yt(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function Te(){return new Date(yt())}function Yr(a,t=-1/0,e=1/0){return typeof a=="number"&&!isNaN(a)&&a>=t&&a<=e}function fn(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Oe(a,t){return Object.prototype.hasOwnProperty.call(a,t)?a[t]:void 0}function me(a,t,e=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**e&&(a=0);let n=t?.locale?.language||t?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(n,{minimumFractionDigits:e,maximumFractionDigits:e}).format(a)}catch{return a.toFixed(e)}}function pn(a,t,e){if(a?.localize)try{let n=a.localize(t);if(n&&n!==t)return n}catch{}return e}function De(a,t){if(!isFinite(a))return 0;switch((t||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,t,...e){a&&console.log(`[AWC Dev] ${t}`,...e)}function _c(a){let t=a?.engine_settings;return!t||typeof t!="object"?!1:Object.keys(ce).some(e=>{let n=t[e],[i,r]=Ko[e];return Yr(n,i,r)&&Math.abs(n-ce[e])>1e-9})}function li(a){let t=a?.engine_mode;return t==="auto"||t==="manual"?t:_c(a)?"manual":"auto"}function K(a,t){let e=li(a)==="manual"?a.engine_settings||{}:{},n=(o,s,l,d)=>Yr(o,l,d)?o:s,i=n(e.windSpeed,ce.windSpeed,.1,15),r=i;return Yr(t,0,200)&&(r=Math.max(.1,Math.min(15,t/10*i))),{windSpeed:r,rainCount:n(e.rainCount,ce.rainCount,.1,10),leafCount:n(e.leafCount,ce.leafCount,.1,10),snowCount:n(e.snowCount,ce.snowCount,.1,10),cloudBaseSize:n(e.cloudBaseSize,ce.cloudBaseSize,.3,2.5),cloudCount:n(e.cloudCount,ce.cloudCount,1,20),splashBounce:n(e.splashBounce,ce.splashBounce,40,120)}}function Kr(a){a.forEach(t=>{t!=null&&clearTimeout(t)}),a.length=0}function Qo(a){let t=new Set;return a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.getTweensOf(e).forEach(n=>{let i=n;for(;i.parent?.parent;)i=i.parent;t.add(i)})}),t}function di(a){window.AnimatedWeatherCardGsap&&Qo(a).forEach(t=>t.pause())}function ci(a){window.AnimatedWeatherCardGsap&&Qo(a).forEach(t=>t.resume())}function jr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)})}function gn(a,t,e,n,i={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let r=a.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){if(!i.clock){if(r.includes("night"))return"clear-night";if(r.includes("sunny"))return"sunny";if(i.night!==void 0)return i.night?"clear-night":"sunny"}let o=Te(),s;if(n)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(h.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=t??6,d=e??20;return(s<l||s>=d)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function yn(a,t,e){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),e||mn("rain");if(!t||!t.isEnabled())return e||mn(a);let n=Zo[a];if(!n)return console.warn(`No color scheme found for animation type: ${a}`),e||mn(a);try{let i=t.getCurrentState(),r=t.getTimeAwareColor(n);return fn(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),e||mn(a))}catch(i){return console.error("Error getting time-aware color:",i),e||mn(a)}}function mn(a){let e={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return e||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var ui=class ui{constructor(t,e,n){this.animationHandles=[];this.timeouts=[];this.particles=[];this.amounts=null;this.element=t,this.config=e,this.cardConfig=n,this.amounts=e.amounts??null,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(t){throw console.error(`Failed to start ${this.animationType} animation:`,t),this.setState("stopped"),t}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(t){throw console.error(`Failed to stop ${this.animationType} animation:`,t),t}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(t){throw console.error(`Failed to pause ${this.animationType} animation:`,t),t}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(t){throw console.error(`Failed to resume ${this.animationType} animation:`,t),this.setState("paused"),t}}setWindSpeed(t){this.realWindSpeed=t,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}setAmounts(t,e=!1){let n=this.amounts;this.amounts=t,(this.state==="active"||this.state==="paused")&&this.onAmountsChange(n,e)}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}onAmountsChange(t,e){}setState(t){let e=this.state;this.state=t,k(this.config.devMode,`${this.animationType} state: ${e} \u2192 ${t}`)}ensureLayerVisibility(t){if(this.containerSelector){let n=this.element.querySelector(this.containerSelector);n&&(n.style.display=t?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${t}`))}let e=this.element.querySelector(this.layerSelector);e&&!ui.SHARED_LAYERS.includes(this.layerSelector)&&(e.style.opacity=t?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${t?1:0}`))}cleanup(){this.animationHandles.forEach(t=>{t&&clearInterval(t)}),this.animationHandles=[],this.timeouts.forEach(t=>{if(t)if(typeof t=="function"){let e=t();e&&clearTimeout(e)}else clearTimeout(t)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)}),this.particles.forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(t){this.animationHandles.push(t)}addTimeout(t){this.timeouts.push(t)}addParticle(t){this.particles.push(t)}removeParticle(t){let e=this.particles.indexOf(t);e>-1&&this.particles.splice(e,1)}};ui.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var ee=ui;var it=class{constructor(t,e,n,i){this.layer=t;this.create=e;this.cycle=n;this.onRetire=i;this.items=[];this.running=!1;this.paused=!1}start(t){this.running=!0;let e=[];for(let n=0;n<t;n++){let i=this.create(n);this.layer.appendChild(i);let r={el:i};this.items.push(r),e.push(i),this.run(r,!0)}return e}run(t,e){if(this.running){if(t.retiring){this.retire(t);return}t.el.style.visibility="",t.anim=this.cycle(t.el,()=>this.run(t,!1),e),this.paused&&t.anim.pause()}}resize(t,e=1,n=!1){if(!this.running)return[];let i=Math.max(0,Math.round(t)),r=this.items.filter(d=>!d.retiring);if(i<r.length)return r.slice(i).forEach(d=>{d.retiring=!0,n&&(d.el.style.visibility="hidden")}),[];let o=i-r.length;for(let d of this.items){if(o<=0)break;d.retiring&&(d.retiring=!1,d.anim&&(d.el.style.visibility=""),o--)}let s=window.AnimatedWeatherCardGsap,l=[];for(let d=0;d<o;d++){let c=this.create(this.items.length);c.style.visibility="hidden",this.layer.appendChild(c);let h={el:c};this.items.push(h),l.push(c);let u=n?0:e*Math.random();n?this.run(h,!0):s?.delayedCall&&u>0?(h.anim=s.delayedCall(u,()=>this.run(h,!1)),this.paused&&h.anim.pause()):this.run(h,!1)}return l}get live(){return this.items.filter(t=>!t.retiring).length}retire(t){t.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.el),t.el.remove(),this.items=this.items.filter(e=>e!==t),this.onRetire?.(t.el)}pause(){this.paused=!0,this.items.forEach(t=>t.anim?.pause())}resume(){this.paused=!1,this.items.forEach(t=>t.anim?.resume())}stop(){this.running=!1,this.items.forEach(t=>{t.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.el),t.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(t=>t.el)}};function Rt(a,t){return t&&a.progress(Math.random()),a}var vc=420*230;function wt(a,t){return Math.min(3,Math.max(.6,a*t/vc))||1}function D(a,t){return a+Math.random()*(t-a)}var bc={light:10,rain:18,storm:24,pouring:32},xc={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Jo={light:16,rain:24,storm:34,pouring:42},Sc=.3,Cc=16,Ac=8,Tc=[10,30],es="http://www.w3.org/2000/svg";function kc(a,t,e,n){let i=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*a+l*l*e,c=2*(1-l)*l*t+l*l*n;i+=Math.hypot(d-r,c-o),r=d,o=c}return i}function Ec(a,t,e,n){return Math.max(4,Math.round(bc[a]*t*wt(e,n)))}var hi=class extends ee{constructor(e,n,i,r){super(e,n,i);this.kind="rain";this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...n},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Rain layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i,this.kind=this.amounts?.rain.kind??this.rainKind();let r=this.dropCount(),o=this.getRainColor(this.element.timeOfDayManager),s=this.cardConfig.spill_particles!==!1;this.splashLayer=e,this.splashColor=o,this.splashBounce=n.splashBounce/ce.splashBounce,this.pool=new it(e,()=>{let l=D(1,this.kind==="pouring"?3:2.4),d=Jo[this.kind],c=document.createElement("div");return c.className="raindrop",c.dataset.kind=this.kind,c.style.cssText=`
                    width: ${l.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${o}, transparent);
                    border-radius: ${l.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,c.dataset.width=l.toFixed(2),c},(l,d,c)=>this.fall(l,i,s,d,c),l=>this.removeParticle(l)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Rain animation started - ${r} drops (${this.kind})`)}dropCount(){let e=this.card;if(!e)return 0;if(this.amounts)return Math.max(4,Math.round(this.amounts.rain.drops*wt(e.offsetWidth,e.offsetHeight)));let n=K(this.cardConfig,this.realWindSpeed);return Ec(this.kind,n.rainCount,e.offsetWidth,e.offsetHeight)}onAmountsChange(e,n){this.pool&&(this.kind=this.amounts?.rain.kind??this.rainKind(),this.pool.resize(this.dropCount(),.8).forEach(i=>this.addParticle(i)))}fall(e,n,i,r,o){let s=n.offsetWidth,l=n.offsetHeight,d=this.kind,c=Jo[d];e.dataset.kind!==d&&(e.style.height=`${c}px`,e.dataset.kind=d);let[h,u]=xc[d],f=D(h,u),p=D(6,Math.max(7,s-6)),m=this.rainConfig.splashEnabled&&Math.random()<Sc,g=-c,y=m?l-c:i?l+D(60,120):l,w=Math.max(.25,(y-g)/f),_=parseFloat(e.dataset.width||"2");window.AnimatedWeatherCardGsap.set(e,{x:p,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:r});if(v.fromTo(e,{y:g},{y,duration:w,ease:"none"}),m)v.call(()=>this.createSplash(p+_/2,l),[],w),v.to(e,{scaleY:0,duration:c/f,ease:"none"},w);else if(i){let b=(l-c-g)/f;v.to(e,{opacity:0,duration:w-b,ease:"power1.in"},b)}return Rt(v,o)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()}),this.splashDots=[],this.rebounds.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf([e,e.firstChild]),e.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(e=>e.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(e,n){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(e,n);for(let i of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%Cc;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=i*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:e-1,y:n-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:e-1+l,duration:o,ease:"power1.out"},0).to(r,{y:n-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:n-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(e,n){let i=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(es,"svg"),r.classList.add("rain-rebound");let m=document.createElementNS(es,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,r.appendChild(m),i.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%Ac;let o=r.firstChild,[s,l]=Tc,d=D(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,h=D(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let u=kc(c,-2*d,2*c,h),f=Math.min(u*.45,6+d*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(u+f).toFixed(1)}`;let p=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:e,y:n,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:p,ease:"power2.out"},0).to(r,{opacity:0,duration:p*.35,ease:"power1.in"},p*.65)}getRainColor(e){return this.rainConfig.isStorm?yn("lightning",e,"var(--weather-storm-rain-color)"):yn("rain",e,"var(--weather-rain-color)")}};var Mc=36,rt=[2,6],Xr=[20,38],ts=10,Pc=.6;function Lc(a,t,e){return Math.max(6,Math.round(Mc*a*wt(t,e)))}function Zr(a){return Math.min(2.2,Math.max(.3,a/ce.windSpeed))}var mi=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.swingOf=new WeakMap;this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...n},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Snow layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i;let r=this.flakeCount(),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Zr(n.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new it(e,()=>this.createFlake(o),(d,c,h)=>this.fall(d,i,l,s,c,h),d=>{let c=this.swingOf.get(d);c?.kill(),this.swings=this.swings.filter(h=>h!==c),this.removeParticle(d)}),this.pool.start(r).forEach(d=>this.addParticle(d)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}flakeCount(){let e=this.card;if(!e)return 0;let n=this.amounts?.snow??K(this.cardConfig,this.realWindSpeed).snowCount;return Lc(n,e.offsetWidth,e.offsetHeight)}onAmountsChange(e,n){this.pool?.resize(this.flakeCount(),6,n).forEach(i=>this.addParticle(i))}createFlake(e){let n=D(rt[0],rt[1]),i=(n-rt[0])/(rt[1]-rt[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=n.toFixed(2),r.style.cssText=`
            width: ${n.toFixed(2)}px;
            height: ${n.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${e}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*i).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-ts});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:ts,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.state==="paused"&&o.pause(),this.swings.push(o),this.swingOf.set(r,o),r}fall(e,n,i,r,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(e.dataset.size||"4"),h=(c-rt[0])/(rt[1]-rt[0]),u=(Xr[0]+(Xr[1]-Xr[0])*h)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<Pc,p=-c*2,m=f?d-this.pileHeight()-c:r?d+D(60,120):d+c,g=m-p,y=Math.max(.5,g/u),w=g*D(.04,.13)*i,_=D(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:_,opacity:parseFloat(e.dataset.opacity||"0.7")});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(v.fromTo(e,{y:p},{y:m,x:_+w,duration:y,ease:"none"}),f)v.call(()=>this.addToAccumulation(),[],y),v.to(e,{opacity:0,duration:.6,ease:"power1.out"},y);else if(r){let b=Math.min(y,(d-p)/u);v.to(e,{opacity:0,duration:Math.max(.1,y-b),ease:"power1.in"},b)}return Rt(v,s)}async onStop(){this.swings.forEach(e=>e.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(e=>e.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(e=>e.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let e=this.element.querySelector(".animated-weather-card");if(!e)return;e.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(i=>i.remove());let n=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,e.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let e=this.accumulationElement,n=this.snowConfig.accumulationHeight;if(!e?.parentNode||n<=0)return;let i=this.pileHeight();if(i>=n)return;let r=Math.min(n,i+.8);e.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(e,{scaleY:r/n,opacity:Math.min(.9,r/n),duration:.3,ease:"power2.out"})}};var Oc=30,ns=[150,230],Dc=.3,pi=6,gi=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...n},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");this.card=i;let r=this.pelletCount(),o=this.cardConfig.spill_particles!==!1,s=Zr(n.windSpeed)*.5;this.pool=new it(e,()=>{let l=D(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,i,s,o,d,c),l=>this.removeParticle(l)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}pelletCount(){let e=this.card;if(!e)return 0;let n=this.amounts?.sleet??K(this.cardConfig,this.realWindSpeed).snowCount;return Math.max(6,Math.round(Oc*n*wt(e.offsetWidth,e.offsetHeight)))}onAmountsChange(e,n){this.pool?.resize(this.pelletCount(),1.5,n).forEach(i=>this.addParticle(i))}fall(e,n,i,r,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(e.dataset.size||"2"),h=D(ns[0],ns[1]),u=Math.random()<Dc,f=-c*2,p=u?d-c:r?d+D(60,120):d+c,m=p-f,g=Math.max(.3,m/h),y=m*D(.03,.08)*i,w=D(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:w,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(e,{y:f},{y:p,x:w+y,duration:g,ease:"none"}),u)_.call(()=>this.addToPile(n),[],g),_.to(e,{opacity:0,duration:.3,ease:"power1.out"},g);else if(r){let v=Math.min(g,(d-f)/h);_.to(e,{opacity:0,duration:Math.max(.1,g-v),ease:"power1.in"},v)}return Rt(_,s)}addToPile(e){if(this.state!=="active")return;let n=e.querySelector(".sleet-accumulation");n||(n=document.createElement("div"),n.className="sleet-accumulation",n.style.cssText=`
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
            `,e.appendChild(n));let i=parseFloat(n.getAttribute("data-target-height")||"0");if(i>=pi)return;let r=Math.min(pi,i+.4);n.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(n,{scaleY:r/pi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let e=this.element.querySelector(".animated-weather-card");e&&e.querySelectorAll(".sleet-accumulation").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function is(a,t,e,n){return e!==null&&e>0?a*Math.max(0,e-t):a*.6*n}var Qr=[90,160];function as(a,t,e,n,i,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=n.offsetWidth,l=n.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,u=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*e;o.style.width=o.style.height=f+"px";let p=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=p[Math.floor(Math.random()*p.length)];let m=-f-10,g=s+(r?60+Math.random()*80:f+10),y=(Qr[0]+Math.random()*(Qr[1]-Qr[0]))*_t(t.windSpeed)*(h?.6:1),w=(g-m)/y,_=Math.min(w,(s-m)/y),v=u?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let b=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),i&&i(o)}});return b.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:g,duration:w,ease:"none"},0).to(o,{y:d+v,duration:w,ease:h?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:w,ease:"none"},0),r&&w>_&&b.to(o,{opacity:0,duration:w-_,ease:"power1.in"},_),o}function os(a,t,e,n,i,r,o=.2){let s=document.createElement("div");s.className="wind-swoosh-gsap";let l=Math.random(),d=l>.6,c=l>1-o;s.style.position="absolute",s.style.height=(c?2:1)*e+"px",s.style.borderRadius=d?"2px 1px":"1px",s.style.transformOrigin="left center",s.style.zIndex="10";let h=i.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";s.style.background=`linear-gradient(90deg, transparent 0%, ${h} 50%, transparent 100%)`;let u=Math.max(15,(20+Math.random()*60)*e);s.style.width=u+"px";let f=n.offsetWidth,p=n.offsetHeight,m=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(s,{x:-u,y:m,rotation:d?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(s);let y=(f+u*2)/(Rc*_t(t.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s),r&&r(s)}}).to(s,{scaleX:1,opacity:c?.35:.22,duration:.3,ease:"power2.out"},0).to(s,{x:f+u,rotation:d?m>p/2?5:-5:0,duration:y,ease:"none"},0).to(s,{opacity:0,scaleX:.3,duration:Math.min(.5,y*.3)},y-Math.min(.5,y*.3)),s}var Rc=230,Hc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function _t(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/ce.windSpeed)))}var Fc=12;function Wc(a){let t=Math.round(70*a),e=Math.round(35*a);return{width:t,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:t-Math.round(9*a)-e,y:Math.round(-13*a),size:e}]}}var ss=a=>a>0?Math.ceil(a*3)+1:0,rs=new Map;function zc(a,t,e,n){let i=[a,t,e,n].join(","),r=rs.get(i);if(r)return r;let o=ss(e),s=Math.ceil((a+2*o)*n),l=Math.ceil((t+2*o)*n),d=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},c=null,[h,u]=d();if(u){let[f,p,m]=[o*n,o*n,Math.min(50,a/2,t/2)*n],[g,y]=[f+a*n,p+t*n];if(u.fillStyle="#000",u.beginPath(),u.moveTo(f+m,p),u.arcTo(g,p,g,y,m),u.arcTo(g,y,f,y,m),u.arcTo(f,y,f,p,m),u.arcTo(f,p,g,p,m),u.closePath(),u.fill(),e>0){let[w,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*e*n,_.shadowOffsetX=s,_.drawImage(h,-s,0),c=w.toDataURL())}else c=h.toDataURL()}return c&&rs.set(i,c),c}function wn(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function Nc(a){return Math.min(1,Math.max(.5,a/160))||1}function Jr(a){return[Math.ceil(a*.4),Math.ceil(a*.4),Math.ceil(a*.6)]}function ls(a,t,e,n,i,r,o={}){let s=i.offsetWidth,l=i.offsetHeight,d=Hc[e],c=o.windFactor??_t(t.windSpeed),h=Nc(l),u=document.createElement("div");u.className=`cloud-gsap cloud-gsap-${d.name}-${n}`;let f=t.cloudBaseSize*d.scale,p=1+(n-1)*.15,m=Math.max(.3,Math.min(2.5,f))*p*h,g=Wc(m);u.style.position="absolute",u.style.opacity=d.opacity.toString(),u.dataset.awcO=String(d.opacity),u.style.zIndex=(10+e).toString();let y=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][e],w=r?.color_palette==="theme"?0:d.blur,_=[{x:0,y:0,width:g.width,height:g.height},...g.puffs.map(L=>({x:L.x,y:L.y,width:L.size,height:L.size}))],v=Math.min(3,Math.max(1,window.devicePixelRatio||1)),b=_.map(L=>zc(L.width,L.height,w,v)),C=b.every(Boolean),S=C?ss(w):0;if(u.style.width=g.width+"px",u.style.height=g.height+"px",C)u.classList.add("cloud-masked"),_.forEach((L,j)=>{let N=document.createElement("div");N.style.position="absolute",N.style.left=L.x-S+"px",N.style.top=L.y-S+"px",N.style.width=L.width+2*S+"px",N.style.height=L.height+2*S+"px",N.style.background=y;for(let oe of["-webkit-",""])N.style.setProperty(`${oe}mask-image`,`url("${b[j]}")`),N.style.setProperty(`${oe}mask-size`,"100% 100%"),N.style.setProperty(`${oe}mask-repeat`,"no-repeat");u.appendChild(N)});else{u.style.borderRadius="50px",u.style.background=y,w>0&&(u.style.filter=`blur(${w}px)`);for(let L of g.puffs){let j=document.createElement("div");j.style.position="absolute",j.style.left=L.x+"px",j.style.top=L.y+"px",j.style.width=L.size+"px",j.style.height=L.size+"px",j.style.borderRadius="50px",j.style.background=y,u.appendChild(j)}}let A=g.width+2*S,E=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][e][n-1]||15+e*10)/60,P=g.height+Math.max(S,Math.ceil(w*3))+2,R=Number(i.dataset?.cloudBand),z=Number.isFinite(R)&&i.dataset?.cloudBand!==void 0?R:null,I=Math.max(150+e*50,A+Fc),q=d.speed*c*(.9+Math.random()*.2),H=(s+2*I)/q,G=document.createElement("div");G.className="cloud-track",G.dataset.awcF=String(E),G.dataset.awcB=String(P),G.appendChild(u),window.AnimatedWeatherCardGsap.set(u,{opacity:d.opacity});let be=[G];if(r?.color_palette==="theme"){let L=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),j=u.cloneNode(!0);j.className="cloud-occluder",j.style.opacity="1";for(let oe of[j,...Array.from(j.querySelectorAll("div"))])oe.style.background&&(oe.style.background="var(--awc-card-bg)");let N=G.cloneNode(!1);N.appendChild(j),L?.appendChild(N),be.push(N)}let ae=be.length>1?be:G;window.AnimatedWeatherCardGsap.set(ae,{xPercent:0,x:-I,y:is(E,P,z,l)}),a.appendChild(G);let ke=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5,...o.enter!==void 0?{delay:o.enter*H}:{},...o.onRepeat?{onRepeat:o.onRepeat}:{}});return ke.fromTo(ae,{xPercent:0,x:-I},{xPercent:100,x:I,duration:H,ease:"none"}),o.enter===void 0&&ke.progress(Math.random()),{layer:e,i:n,tracks:be,tl:ke}}function ds(a){let t=a.querySelector(".snow-accumulation");t&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(t,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{t.parentNode&&t.parentNode.removeChild(t)}}):t.parentNode?.removeChild(t))}function cs(a,t,e,n,i){let r=document.createElement("div");r.className=`fog-layer fog-layer-${e}`;let o=n.offsetWidth,s=n.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[e]||l[2],c=i.custom_colors?.fog_color,h=(i.color_palette||"default")!=="theme"?fn(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),f=o*d.scale;r.style.cssText=`
        position: absolute;
        top: ${20+e*15}%;
        left: -50%;
        width: ${f}px;
        height: ${d.height}px;
        opacity: ${d.opacity};
        filter: blur(${d.blur}px);
        pointer-events: none;
        z-index: ${5+e};
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
        `,r.appendChild(S)}a.appendChild(r);let p=t.windSpeed*(.5+Math.random()*.5),m=15/d.speed,g=Math.max(8,m/p),y=o*d.scale,w=-y,_=o+y;window.AnimatedWeatherCardGsap.set(r,{x:w,opacity:d.opacity});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:e*2+Math.random()*3});v.to(r,{x:_,duration:g,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:w})}});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return b.to(r,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:v,opacity:b}}function yi(a){a.querySelectorAll(".fog-layer, .fog-amount").forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}var Ic=3,$c=2,us=[900,1400],hs=[1800,2600],qc=.2,wi=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...n},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(e){this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=K(this.cardConfig,this.realWindSpeed),i=n.leafCount*(this.amounts?.leaves??1),r=Math.max(1,Math.round(Ic*i));if(this.leaves.size<r){let o=as(this.layer(),n,1,this.card(),s=>this.forget(s,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(o),this.addParticle(o)}this.scheduleLeaf(D(us[0],us[1])/Math.max(.5,i))},e)}scheduleSwoosh(e){this.swooshTimer=setTimeout(()=>{if(this.state!=="active")return;let n=K(this.cardConfig,this.realWindSpeed),i=this.amounts?.gusts??0;if(this.swooshes.size<$c+Math.round(2*i)){let r=os(this.layer(),n,1,this.card(),this.cardConfig,o=>this.forget(o,this.swooshes),qc+.3*i);this.swooshes.add(r),this.addParticle(r)}this.scheduleSwoosh(D(hs[0],hs[1])/(1+i))},e)}forget(e,n){n.delete(e),this.removeParticle(e)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),di(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){ci(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var _n=[6e3,18e3],Gc=[1500,6e3],ms=.16,_i=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:i.disable_lightning_shake||!1,minInterval:_n[0],maxInterval:_n[1],...n},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Lightning layer not found: ${this.layerSelector}`);e.style.opacity="0";let[n,i]=Gc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},n+Math.random()*(i-n)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let e=this.element.querySelector(this.layerSelector),n=this.element.querySelector(".animated-weather-card");if(!e||!n)return;let i=n.offsetWidth,r=n.offsetHeight,o=parseFloat(n.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(i-60),c=20*o,h=20,u=[d+",0"];for(let g=0;g<h;g++){let y=d+(Math.random()*c-c/2),w=r/h*(g+1);u.push(y+","+w)}l.setAttribute("d","M"+u.join(" L"));let f=this.element.timeOfDayManager,p=yn("lightning",f,"white");l.setAttribute("stroke",p),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),e.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(e,{opacity:.9},0).to(e,{opacity:.3,duration:.06,ease:"none"},0).to(e,{opacity:.8,duration:.04,ease:"none"},.06).to(e,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let g=-6*o;m.to(n,{y:g,duration:.06,ease:"power2.out"},ms).to(n,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},ms+.06)}}scheduleNext(){if(this.state!=="active")return;let e=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},e),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let e=this.element.querySelector(".animated-weather-card");e&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(e,{clearProps:"transform"});let n=this.element.querySelector(this.layerSelector);n&&(n.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),n.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var Bc=["dawn","day","dusk","night"],na=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],Vc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},gs=(a,t,e)=>Math.min(t,Math.max(a,e)),at=(a,t,e)=>a+(t-a)*e;function Uc(a,t,e){let n=(t-a+540)%360-180;return(a+n*e+360)%360}function Ue(a,t,e){let n=([m,g,y])=>[m,g*Math.cos(y*Math.PI/180),g*Math.sin(y*Math.PI/180)],[i,r,o]=n(a),[s,l,d]=n(t),c=at(i,s,e),h=at(r,l,e),u=at(o,d,e),f=Math.hypot(h,u),p=f<1e-6?a[2]:(Math.atan2(u,h)*180/Math.PI+360)%360;return[c,f,p]}function ea([a,t,e]){let n=e*Math.PI/180,i=t*Math.cos(n),r=t*Math.sin(n),o=(a+.3963377774*i+.2158037573*r)**3,s=(a-.1055613458*i-.0638541728*r)**3,l=(a-.0894841775*i-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var Yc=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Re(a){let t=n=>n.every(i=>i>=-1e-4&&i<=1.0001),e=ea(a);if(!t(e)){let n=0,i=a[1];for(let r=0;r<24;r++){let o=(n+i)/2;t(ea([a[0],o,a[2]]))?n=o:i=o}e=ea([a[0],n,a[2]])}return e.map(n=>Yc(gs(0,1,n)))}var ys=a=>Math.round(gs(0,1,a)*255);function Ye(a){return"#"+a.map(t=>ys(t).toString(16).padStart(2,"0")).join("")}function fs(a,t){return`rgba(${a.map(ys).join(", ")}, ${Number(t.toFixed(3))})`}function ta(a,t){return[.15+(a[0]-.15)*.42,a[1]*at(.75,.5,t),Uc(a[2],262,.45)]}function Kc(a,t){let e=Vc[a],n=1-e.overcast*.7,i={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:at(.46,.28,e.overcast)};if(a==="clear-night"){if(t==="dawn"||t==="dusk"){let r=t==="dawn"?[.4,.09,20]:[.38,.1,40];return{...i,bottom:Ue(e.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...i,scrimAlpha:.2}}switch(t){case"night":return{top:ta(e.top,e.overcast),mid:ta(e.mid,e.overcast),bottom:ta(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:at(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:Ue(e.top,[e.top[0]*.8,.075,292],.5*n),mid:Ue(e.mid,[e.mid[0]*.88,.065,350],.42*n),bottom:Ue(e.bottom,[e.bottom[0]*.92,.115,52],.72*n),glow:Ue(e.glow,[.82,.13,58],n),glowAlpha:at(e.glowAlpha,.6,n*.6),scrimAlpha:i.scrimAlpha+.04};case"dawn":return{top:Ue(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*n),mid:Ue(e.mid,[e.mid[0]*.95,.05,330],.3*n),bottom:Ue(e.bottom,[e.bottom[0]*.95,.085,32],.62*n),glow:Ue(e.glow,[.88,.09,40],n),glowAlpha:at(e.glowAlpha,.5,n*.5),scrimAlpha:i.scrimAlpha+.04};default:return i}}function jc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function Ht(a,t){let e=Kc(a,t);return{top:Ye(Re(e.top)),mid:Ye(Re(e.mid)),bottom:Ye(Re(e.bottom)),glow:fs(Re(e.glow),e.glowAlpha),scrim:fs(Re(jc(e.top)),e.scrimAlpha)}}var Ft=[.985,.006,250],vi=.8,ws=.55,_s=.4,bi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},vs={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},bs={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},xi=312,xs=a=>a.clientWidth>=640&&a.clientHeight>=540;function Wt(a,t){let e=n=>`${Math.round(n*100)}%`;return`radial-gradient(${e(a.rx)} ${e(a.ry)} at ${e(a.cx)} ${e(a.cy)}, ${t}, transparent ${e(a.fade)})`}function Ss(){let a=[];for(let t of na)for(let e of Bc){let n=Ht(t,e),i=e==="day"?`.animated-weather-card.${t}`:`.animated-weather-card.${t}[data-phase="${e}"]`;a.push(`${i} { --awc-sky-top: ${n.top}; --awc-sky-mid: ${n.mid}; --awc-sky-bottom: ${n.bottom}; --awc-sky-glow: ${n.glow}; --awc-sky-scrim: ${n.scrim}; }`)}return a.join(`
`)}function Si(a,t,e){return a==null||!Number.isFinite(a)?e?"day":"night":a<-6?"night":a<6?t?"dawn":"dusk":"day"}var Le=3.2,zt="cubic-bezier(0.37, 0, 0.63, 1)",Cs={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},As=Object.keys(Cs),ia=As.filter(a=>a.startsWith("--awc-sky-"));function Ts(){return As.map(a=>`${a} ${Le}s ${zt}`).join(`,
            `)}var ps=!1;function Ci(){if(ps)return;ps=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[t,e]of Object.entries(Cs))try{a.registerProperty({name:t,syntax:"<color>",inherits:!0,initialValue:e})}catch{}}var ra=Array.from({length:25},(a,t)=>[t%5/2-1,Math.floor(t/5)/2-1]).filter(([a,t])=>a*a+t*t<=1),Xc=1.9,Zc=.6,Qc=.3,Jc=.3,Ai=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.clouds=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...n},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");wn(e);let r=this.amounts?.clouds??Jr(this.cloudCount(n));this.startWindFactor=_t(n.windSpeed),this.clouds=[],r.forEach((o,s)=>{for(let l=1;l<=o;l++)this.addCloud(s,l,n)}),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${this.clouds.length} clouds`)}async onStop(){this.clouds.forEach(({tl:n})=>{window.AnimatedWeatherCardGsap?.killTweensOf(n),n&&typeof n.kill=="function"&&n.kill()}),this.clouds=[],this.looks?.kill(),this.looks=null;let e=this.element.querySelector(this.layerSelector);e&&wn(e),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.clouds.forEach(({tl:e})=>{e&&typeof e.pause=="function"&&e.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.clouds.forEach(({tl:e})=>{e&&typeof e.resume=="function"&&e.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(e=!1){if(this.occlude()){this.lightSun(1,e);return}let n=this.element.querySelector(".sun-track .sun"),i=n?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=_=>Number(_.dataset.awcO)||0;if(!n||!i?.width||getComputedStyle(n).opacity==="0"){r.forEach(_=>this.dense(_,o(_),e));return}let s=i.width/2,l=i.left+s,d=i.top+i.height/2,c=this.element.querySelector(this.containerSelector),h=c?parseFloat(getComputedStyle(c).opacity):1,u=Number.isFinite(h)?h:1,f=_=>{let v=_?parseFloat(getComputedStyle(_).opacity):1;return Number.isFinite(v)?v:1},p=r.map(_=>Math.min(o(_),f(_)||0)*f(_.parentElement)*Zc*u),m=r.map(_=>[_,...Array.from(_.children)].map(v=>v.getBoundingClientRect()).filter(v=>v.width&&v.height)),g=(_,v,b)=>m[_].some(C=>{let S=Math.min(C.width,C.height)/2,A=v-Math.min(Math.max(v,C.left+S),C.right-S),T=b-Math.min(Math.max(b,C.top+S),C.bottom-S);return A*A+T*T<=S*S}),y=0,w=r.map(()=>0);for(let[_,v]of ra)y+=r.reduce((b,C,S)=>g(S,l+_*s,d+v*s)?b*(1-p[S]):b,1),r.forEach((b,C)=>{g(C,l+_*s*1.25,d+v*s*1.25)&&(w[C]+=1/ra.length)});this.lightSun(y/ra.length,e),r.forEach((_,v)=>this.dense(_,o(_)*(1+(Xc-1)*Math.min(1,w[v]*3)),e))}occlude(){let e=this.element.querySelector(".animated-weather-card");if(!e||this.cardConfig.color_palette!=="theme")return!1;let n=e.closest("ha-card"),i=n?getComputedStyle(n):null,r=!!i&&(i.backgroundImage||"none")==="none"&&!!i.backgroundColor&&!/rgba|\/|transparent/.test(i.backgroundColor);return r&&e.style.getPropertyValue("--awc-card-bg")!==i.backgroundColor&&e.style.setProperty("--awc-card-bg",i.backgroundColor),e.toggleAttribute("data-occlude",r),r}dense(e,n,i){let r=(Math.round(Math.min(.95,n)*100)/100).toString();e.dataset.awcV!==r&&(e.dataset.awcV=r,i?window.AnimatedWeatherCardGsap?.set(e,{opacity:r}):window.AnimatedWeatherCardGsap?.to(e,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(e,n=!1){let i=this.element.querySelector(".sun-track"),r=Math.round(e*100)/100;!i||r===this.sunLit&&!n||(this.sunLit=r,n?window.AnimatedWeatherCardGsap?.set(i,{opacity:r}):window.AnimatedWeatherCardGsap?.to(i,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let e=K(this.cardConfig,this.realWindSpeed),n=_t(e.windSpeed)/this.startWindFactor;this.clouds.forEach(({tl:i})=>{window.AnimatedWeatherCardGsap.to(i,{timeScale:n,duration:Le,ease:"sine.inOut",overwrite:!0})})}cloudCount(e){let n=Math.min(6,Math.max(1,Math.round(e.cloudCount)));return this.cloudsConfig.isPartlyCloudy?Math.max(1,Math.round(n*.6)):n}addCloud(e,n,i,r){let o=this.element.querySelector(this.layerSelector),s=this.element.querySelector(".animated-weather-card"),l=ls(o,i,e,n,s,this.cardConfig,{enter:r,windFactor:this.startWindFactor,onRepeat:()=>{(l.retiring||l.hidden)&&this.retire(l)}}),d=_t(i.windSpeed)/this.startWindFactor;return Math.abs(d-1)>1e-6&&l.tl.timeScale(d),this.state==="paused"&&l.tl.pause(),this.clouds.push(l),l}retire(e){e.tl.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.tl);for(let n of e.tracks)window.AnimatedWeatherCardGsap?.killTweensOf([n,...Array.from(n.children)]),n.remove();this.clouds=this.clouds.filter(n=>n!==e)}freePlace(e){let n=new Set(this.clouds.filter(r=>r.layer===e).map(r=>r.i)),i=1;for(;n.has(i);)i++;return i}onAmountsChange(e,n){let i=K(this.cardConfig,this.realWindSpeed);(this.amounts?.clouds??Jr(this.cloudCount(i))).forEach((o,s)=>n?this.showClouds(s,o,i):this.driftClouds(s,o,i))}driftClouds(e,n,i){let r=this.clouds.filter(s=>s.layer===e).sort((s,l)=>s.i-l.i);r.filter(s=>s.hidden).forEach(s=>this.retire(s));let o=r.filter(s=>!s.hidden&&!s.retiring);for(let s of r.filter(l=>l.retiring)){if(o.length>=n)break;s.retiring=!1,o.push(s)}for(let s=0,l=n-o.length;s<l;s++)this.addCloud(e,this.freePlace(e),i,s*Jc);o.sort((s,l)=>s.i-l.i).slice(n).forEach(s=>{s.retiring=!0})}showClouds(e,n,i){let r=this.clouds.filter(o=>o.layer===e).sort((o,s)=>o.i-s.i);r.forEach((o,s)=>this.fadeCloud(o,s<n));for(let o=r.length;o<n;o++){let s=this.addCloud(e,this.freePlace(e),i);window.AnimatedWeatherCardGsap?.set(s.tracks,{opacity:0}),s.hidden=!0,this.fadeCloud(s,!0)}}fadeCloud(e,n){e.retiring=!1,!!e.hidden!=!n&&(e.hidden=!n,window.AnimatedWeatherCardGsap?.to(e.tracks,{opacity:n?1:0,duration:Qc,ease:"sine.out",overwrite:"auto"}))}};var Ti=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...n},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let e=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!e)throw new Error("Fog container not found");let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");yi(i);let r=document.createElement("div");r.className="fog-amount",e.appendChild(r),window.AnimatedWeatherCardGsap.set(r,{opacity:this.amounts?.fog??1}),this.fogTimelines=[];for(let o=0;o<this.fogConfig.layerCount;o++){let s=cs(r,n,o,i,this.cardConfig);this.fogTimelines.push(s.movement),this.fogTimelines.push(s.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(i=>{i&&typeof i.kill=="function"&&i.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer, .fog-amount")?.forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),k(this.config.devMode,"Fog animation resumed")}onAmountsChange(e,n){let i=this.element.querySelector(".fog-amount");i&&window.AnimatedWeatherCardGsap?.to(i,{opacity:this.amounts?.fog??1,duration:n?.3:Le,ease:"sine.inOut",overwrite:!0})}};var eu=5,ks=353,tu=1440,nu=1/2,iu=.25,ru=.2,au=2,ou=2;function aa(a,t){let e=t>0?Math.min(t,tu):ks;return Math.max(15,Math.round(a*eu*Math.max(1,e/ks)))}var ki=4;function su(a,t){return Math.round(Math.min(1,Math.max(0,a*ki-t))*100)/100}function Mi(a,t,e=0){a.querySelectorAll(".stars-band").forEach((n,i)=>{let r=su(t,i%ki);e>0&&window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(n,{opacity:r,duration:e,ease:"sine.inOut",overwrite:!0}):(window.AnimatedWeatherCardGsap?.killTweensOf(n),n.style.opacity=r<1?String(r):"")})}var Es=20,Ms=10,lu=12,Ps=(a,t)=>a.right>t.left-Es&&a.left<t.right+Es&&a.bottom>t.top-Ms&&a.top<t.bottom+Ms;function vn(a){let t=[],e=document.createRange();if(typeof e.getClientRects!="function")return t;let n=".animation-layer, .animation-container, style, script",i=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=i.nextNode();r;r=i.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(n))){e.selectNodeContents(r);for(let o of Array.from(e.getClientRects()))o.width&&o.height&&t.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(n))continue;let o=r.getBoundingClientRect();o.width&&o.height&&t.push(o)}return t}function du(a,t){for(let e of a){let n=e.getBoundingClientRect();e.classList.toggle("awc-veiled",!!n.width&&t.some(i=>Ps(n,i)))}}function Ls(a){let t=a.querySelectorAll(".stars-field .star-gsap");if(!t.length)return;let e=a.querySelector(".moon-gsap")?.getBoundingClientRect();du(t,e?.width?[...vn(a),e]:vn(a))}function oa(a,t,{moon:e,still:n=!1,words:i=[],share:r=1}){let o=document.createElement("div");o.className="stars-field";let s=Array.from({length:ki},()=>o.appendChild(Object.assign(document.createElement("div"),{className:"stars-band"}))),l=e?document.createElement("div"):null;if(l){l.className="moon-gsap",a.appendChild(l);let h=l.getBoundingClientRect();h.width&&h.height&&(i=[...i,h])}let d=a.getBoundingClientRect(),c=i.length>0&&d.width>0&&d.height>0;for(let h=0;h<t;h++){let u=document.createElement("div");u.className="star-gsap";let f=1+Math.random()*3,p=.3+Math.random()*.5,m=0,g=0,y=!1;for(let w=0;w<(c?lu:1)&&!y;w++){m=Math.random()*100,g=Math.random()*70;let _=d.left+m/100*d.width,v=d.top+g/100*d.height;y=!c||!i.some(b=>Ps({left:_,top:v,right:_+f,bottom:v+f},b))}if(y||u.classList.add("awc-veiled"),u.style.cssText=`
            width: ${f.toFixed(2)}px;
            height: ${f.toFixed(2)}px;
            left: ${m.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${p.toFixed(2)};
        `,!n&&Math.random()<nu){let w=au+Math.random()*ou;u.classList.add("twinkle"),u.style.setProperty("--star-o",p.toFixed(2)),u.style.setProperty("--star-dim",(p*(iu+Math.random()*ru)).toFixed(2)),u.style.animationDuration=`${w.toFixed(2)}s`,u.style.animationDelay=`${(-Math.random()*w).toFixed(2)}s`}s[h%ki].appendChild(u)}return Mi(o,r),l?a.insertBefore(o,l):a.appendChild(o),l?[o,l]:[o]}var Ei=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...n},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Animation layer not found: ${this.layerSelector}`);let n=K(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");i?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=aa(n.cloudCount,e.clientWidth||i?.clientWidth||0);for(let o of oa(e,r,{moon:this.starsConfig.showMoon,words:i?vn(i):[],share:this.amounts?.stars??1}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&e.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),k(this.config.devMode,"Stars animation stopped")}setPaused(e){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(n=>n.classList.toggle("paused",e))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}onAmountsChange(e,n){let i=this.element.querySelector(`${this.layerSelector} .stars-field`);i&&Mi(i,this.amounts?.stars??1,n?.3:Le)}};var Pi=class extends ee{constructor(e,n,i,r){super(e,n,i);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let e=this.element.querySelector(this.layerSelector);if(!e){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}e.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var Li=class{constructor(t,e,n,i){this.amounts=null;this.activeAnimations=new Map;this.element=t,this.config=e,this.timeOfDayManager=n,this.realWindSpeed=i}async startModularAnimation(t,e){this.activeAnimations.has(t)&&await this.stopModularAnimation(t);try{let n={intensity:e,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1,amounts:this.amounts},i=null;switch(t){case"rain":i=new hi(this.element,{...n,isStorm:e>=2&&e<=4,isPouring:e>4,isLightRain:e<1,particleCount:Math.floor(e*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":i=new mi(this.element,{...n,particleCount:Math.floor(e*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":i=new gi(this.element,{...n,particleCount:Math.floor(e*40)},this.config,this.realWindSpeed);break;case"wind":i=new wi(this.element,{...n,leafCount:Math.max(1,Math.floor(e*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":i=new _i(this.element,{...n,disableShake:this.config.disable_lightning_shake||!1,minInterval:_n[0],maxInterval:_n[1]},this.config,this.realWindSpeed);break;case"clouds":i=new Ai(this.element,{...n,cloudCount:Math.max(1,Math.floor(e*2)),isPartlyCloudy:e<3},this.config,this.realWindSpeed);break;case"fog":i=new Ti(this.element,{...n,layerCount:Math.max(2,Math.min(5,Math.floor(e)))},this.config,this.realWindSpeed);break;case"stars":i=new Ei(this.element,{...n,starCount:Math.max(15,Math.floor(e*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":i=new Pi(this.element,n,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${t}`),null}return await i.start(),this.activeAnimations.set(t,i),k(this.config.dev_mode,`Started modular ${t} animation with intensity ${e}`),i}catch(n){return console.error(`Failed to start modular ${t} animation:`,n),null}}async stopModularAnimation(t){let e=this.activeAnimations.get(t);if(e)try{await e.destroy(),k(this.config.dev_mode,`Stopped modular ${t} animation`)}catch(n){console.error(`Error stopping modular ${t} animation:`,n)}finally{this.activeAnimations.delete(t)}}async pauseModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isActive())try{await e.pause()}catch(n){console.error(`Error pausing modular ${t} animation:`,n)}}async resumeModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isPaused())try{await e.resume()}catch(n){console.error(`Error resuming modular ${t} animation:`,n)}}updateWindSpeed(t){if(!Object.is(t,this.realWindSpeed)){this.realWindSpeed=t;for(let[e,n]of this.activeAnimations)try{n.setWindSpeed(t)}catch(i){console.warn(`Failed to update wind speed for ${e}:`,i)}}}updateAmounts(t,e=!1){if(JSON.stringify(t)!==JSON.stringify(this.amounts)){this.amounts=t;for(let[n,i]of this.activeAnimations)try{i.setAmounts(t,e)}catch(r){console.warn(`Failed to update amounts for ${n}:`,r)}}}async cleanup(){let t=Array.from(this.activeAnimations.keys()).map(e=>this.stopModularAnimation(e));await Promise.all(t),this.activeAnimations.clear()}};var Oi=class{constructor(t,e,n,i){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.homeAmounts=null;this.hourAmounts=null;this.element=t,this.config=e,this.isPausedFn=n,this.timeOfDayManager=i,this.modularBridge=new Li(t,e,i,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(t){this.currentWindSpeed=t,this.modularBridge.updateWindSpeed(t)}setAmounts(t){this.homeAmounts=t,this.modularBridge.updateAmounts(this.hourAmounts??t)}showAmounts(t){this.hourAmounts=t,this.modularBridge.updateAmounts(t??this.homeAmounts,!0)}get amounts(){return this.hourAmounts??this.homeAmounts}async startAnimation(t,e){let n=this.animations[t];if(n.isActive){k(this.config.dev_mode,`Animation ${t} already active \u2014 skipping`);return}let i=e?.intensity??1,r=this.generation;n.isActive=!0,n.intensity=i,this.setAnimationLayerVisibility(t,!0);try{let o=await this.modularBridge.startModularAnimation(t,i);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${t} (generation drifted)`),await this.modularBridge.stopModularAnimation(t);return}if(!o){n.isActive=!1,console.warn(`No modular animation available for type: ${t}`);return}k(this.config.dev_mode,`Started ${t} animation with intensity ${i}`)}catch(o){console.error(`Failed to start ${t} animation:`,o),n.isActive=!1}}async stopAnimation(t){let e=this.animations[t];if(e.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(t),k(this.config.dev_mode,`Stopped ${t} animation`)}catch(n){console.error(`Error stopping ${t} animation:`,n)}this.setAnimationLayerVisibility(t,!1),e.isActive=!1,e.isPaused=!1,e.intensity=1}}pauseAnimation(t){let e=this.animations[t];!e.isActive||e.isPaused||(e.isPaused=!0,this.modularBridge.pauseModularAnimation(t),k(this.config.dev_mode,`Paused ${t} animation`))}resumeAnimation(t){let e=this.animations[t];!e.isActive||!e.isPaused||(e.isPaused=!1,this.modularBridge.resumeModularAnimation(t),k(this.config.dev_mode,`Resumed ${t} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(t=>this.stopAnimation(t)))}pauseAllAnimations(){Object.keys(this.animations).forEach(t=>this.pauseAnimation(t))}resumeAllAnimations(){Object.keys(this.animations).forEach(t=>this.resumeAnimation(t))}async applyWeatherCondition(t){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let e=this.defaultWeatherMappings[t.toLowerCase()];if(!e){console.warn(`No animation mapping for weather condition: ${t}`);return}await Promise.all(e.animations.map(n=>{let i=e.overrides?.[n];return this.startAnimation(n,i)})),k(this.config.dev_mode,`Applied weather condition: ${t} with animations: ${e.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(t,e){let n=this.element.querySelector(".animated-weather-card");if(!n)return;let i=`individual-${t}-active`;e?n.classList.add(i):n.classList.remove(i)}clearIndividualAnimationClasses(){let t=this.element.querySelector(".animated-weather-card");if(t)for(let e of Object.keys(this.animations))t.classList.remove(`individual-${e}-active`)}};var Di=new Map,sa=new Set;function la(a,t,e){let n=Di.get(a);if(!t){n&&(Di.delete(a),Os());return}let i={entity:t,sun:e||"sun.sun"};n&&n.entity===i.entity&&n.sun===i.sun||(Di.set(a,i),Os())}function Ds(a){if(a){for(let t of Di.values())if(t.sun===a)return t.entity}}function Rs(a){return sa.add(a),()=>{sa.delete(a)}}function Os(){for(let a of[...sa])a()}var Ri=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:Number(a);return Number.isFinite(t)?t:null},ot=a=>typeof a=="string"?a.trim():"";function cu(a){if(!a||typeof a!="object")return null;let t=a,e=typeof t.id=="number"?String(t.id):ot(t.id);return e?{id:e,label:ot(t.flight_number)||ot(t.callsign),aircraftCode:ot(t.aircraft_code),originCity:ot(t.airport_origin_city),originCode:ot(t.airport_origin_code_iata),destinationCity:ot(t.airport_destination_city),destinationCode:ot(t.airport_destination_code_iata),altitudeFt:Ri(t.altitude),groundSpeedKt:Ri(t.ground_speed),heading:Ri(t.heading),verticalSpeed:Ri(t.vertical_speed),onGround:t.on_ground===1||t.on_ground===!0||t.on_ground==="1"}:null}function da(a,t){if(!a||!t)return null;let e=a.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return null;let n=e.attributes?.flights;if(!Array.isArray(n))return[];let i=[];for(let r of n){let o=cu(r);o&&i.push(o)}return i}var Hi=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(t,e=!1){if(!t)return[];let n=t.filter(s=>!s.onGround),i=new Set(n.map(s=>s.id));if(this.known===null)return this.known=i,e?n.filter((s,l)=>n.findIndex(d=>d.id===s.id)===l):[];let r=[],o=new Set;for(let s of n)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=i,r}reset(){this.known=null}};var Fi=class{constructor(t={}){this.listeners=new Set;this.config={enableDayNightCycle:t.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...t},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(t){let e=this.config.enableDayNightCycle;this.config={...this.config,...t},this.updateState(),this.config.enableDayNightCycle&&!e?this.startAutoUpdate():!this.config.enableDayNightCycle&&e&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}getTimeAwareColor(t){let e=this.getCurrentState();if(!this.isEnabled())return t.day;switch(e.timePhase){case"dawn":return t.dawn||this.blendColors(t.night,t.day,.3);case"day":return t.day;case"dusk":return t.dusk||this.blendColors(t.day,t.night,.3);case"night":return t.night;default:return t.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let t=Te(),e,n;if(!this.config.useBrowserTime&&this.config.timeZone){let p=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(t);e=parseInt(p.find(m=>m.type==="hour")?.value||"0",10),n=parseInt(p.find(m=>m.type==="minute")?.value||"0",10)}else e=t.getHours(),n=t.getMinutes();let i=e+n/60,r,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,h=(s+1)%24,u=(p,m,g)=>m<=g?p>=m&&p<g:p>=m||p<g;u(i,l,d)?r="dawn":u(i,d,c)?r="day":u(i,c,h)?r="dusk":r="night";let f={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:e,timePhase:r};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},jo.UPDATE_INTERVAL)}notifyListeners(t){this.listeners.forEach(e=>{try{e(t)}catch(n){console.error("TimeOfDayManager: Error in listener callback:",n)}})}blendColors(t,e,n){let i=t.replace("#",""),r=e.replace("#",""),o=parseInt(i.substring(0,2),16),s=parseInt(i.substring(2,4),16),l=parseInt(i.substring(4,6),16),d=parseInt(r.substring(0,2),16),c=parseInt(r.substring(2,4),16),h=parseInt(r.substring(4,6),16),u=Math.round(o*(1-n)+d*n),f=Math.round(s*(1-n)+c*n),p=Math.round(l*(1-n)+h*n),m=u.toString(16).padStart(2,"0"),g=f.toString(16).padStart(2,"0"),y=p.toString(16).padStart(2,"0");return`#${m}${g}${y}`}};var Hs=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var xn={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},uu=Ss(),hu=Ye(Re(Ft)),Nt=a=>`${Math.round(a*100)}%`,mu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,fu=48,bn=.2,pu={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},gu={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},Fs=()=>`
${Hs("animated-weather-card")}
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
          --weather-text-color: ${hu};
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
            ${Ts()};
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
        ${uu}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Wt(bi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,
            linear-gradient(180deg, transparent ${Nt(_s)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Nt(ws)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Wt(vs,"var(--awc-sky-glow)")}; }
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
          background-image: ${mu};
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
          color: ${xn.text};
          background: ${xn.fill};
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
        ${Object.entries(pu).map(([a,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${t}; }`).join(`
        `)}
        ${Object.entries(gu).map(([a,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${a}"] .attribute-icon { color: ${t}; }`).join(`
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
          --awc-sky-glow-layer: ${Wt(bs,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${fu}px;
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
          top: ${Nt(bn)};
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
          transition: opacity ${Le/2}s ${zt};
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
          transition: transform ${Le}s ${zt};
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
          top: ${Nt(bn)};
          top: min(${Nt(bn)}, ${+(bn*xi).toFixed(1)}px);
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
        .animated-weather-card[data-fw] .moon-gsap { top: ${Nt(bn)}; }
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

`;var ca={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",daylight_day:"{delta} siden i g\xE5r",daylight_week:"{delta} siden forrige uke",daylight_month:"{delta} siden forrige m\xE5ned",shift_earlier:"{delta} tidligere",shift_later:"{delta} senere",shift_day:"{shift} enn i g\xE5r",shift_week:"{shift} enn forrige uke",shift_month:"{shift} enn forrige m\xE5ned",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},yu={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",daylight_day:"{delta} since yesterday",daylight_week:"{delta} since last week",daylight_month:"{delta} since last month",shift_earlier:"{delta} earlier",shift_later:"{delta} later",shift_day:"{shift} than yesterday",shift_week:"{shift} than last week",shift_month:"{shift} than last month",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",daylight_day:"{delta} seit gestern",daylight_week:"{delta} seit letzter Woche",daylight_month:"{delta} seit letztem Monat",shift_earlier:"{delta} fr\xFCher",shift_later:"{delta} sp\xE4ter",shift_day:"{shift} als gestern",shift_week:"{shift} als letzte Woche",shift_month:"{shift} als letzten Monat",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",daylight_day:"{delta} desde ayer",daylight_week:"{delta} desde la semana pasada",daylight_month:"{delta} desde el mes pasado",shift_earlier:"{delta} antes",shift_later:"{delta} despu\xE9s",shift_day:"{shift} que ayer",shift_week:"{shift} que la semana pasada",shift_month:"{shift} que el mes pasado",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",daylight_day:"{delta} depuis hier",daylight_week:"{delta} depuis la semaine derni\xE8re",daylight_month:"{delta} depuis le mois dernier",shift_earlier:"{delta} plus t\xF4t",shift_later:"{delta} plus tard",shift_day:"{shift} qu\u2019hier",shift_week:"{shift} que la semaine derni\xE8re",shift_month:"{shift} que le mois dernier",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",daylight_day:"{delta} da ieri",daylight_week:"{delta} dalla settimana scorsa",daylight_month:"{delta} dal mese scorso",shift_earlier:"{delta} prima",shift_later:"{delta} dopo",shift_day:"{shift} rispetto a ieri",shift_week:"{shift} rispetto alla settimana scorsa",shift_month:"{shift} rispetto al mese scorso",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",daylight_day:"{delta} sinds gisteren",daylight_week:"{delta} sinds vorige week",daylight_month:"{delta} sinds vorige maand",shift_earlier:"{delta} eerder",shift_later:"{delta} later",shift_day:"{shift} dan gisteren",shift_week:"{shift} dan vorige week",shift_month:"{shift} dan vorige maand",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",daylight_day:"{delta} od wczoraj",daylight_week:"{delta} od zesz\u0142ego tygodnia",daylight_month:"{delta} od zesz\u0142ego miesi\u0105ca",shift_earlier:"{delta} wcze\u015Bniej",shift_later:"{delta} p\xF3\u017Aniej",shift_day:"{shift} ni\u017C wczoraj",shift_week:"{shift} ni\u017C w zesz\u0142ym tygodniu",shift_month:"{shift} ni\u017C w zesz\u0142ym miesi\u0105cu",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",daylight_day:"{delta} desde ontem",daylight_week:"{delta} desde a semana passada",daylight_month:"{delta} desde o m\xEAs passado",shift_earlier:"{delta} mais cedo",shift_later:"{delta} mais tarde",shift_day:"{shift} do que ontem",shift_week:"{shift} do que na semana passada",shift_month:"{shift} do que no m\xEAs passado",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",daylight_day:"{delta} fa\u021B\u0103 de ieri",daylight_week:"{delta} fa\u021B\u0103 de s\u0103pt\u0103m\xE2na trecut\u0103",daylight_month:"{delta} fa\u021B\u0103 de luna trecut\u0103",shift_earlier:"cu {delta} mai devreme",shift_later:"cu {delta} mai t\xE2rziu",shift_day:"{shift} dec\xE2t ieri",shift_week:"{shift} dec\xE2t s\u0103pt\u0103m\xE2na trecut\u0103",shift_month:"{shift} dec\xE2t luna trecut\u0103",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:ca,no:ca,nn:ca,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",daylight_day:"{delta} \u0437 \u0443\u0447\u043E\u0440\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0434\u043D\u044F",daylight_week:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",daylight_month:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",shift_earlier:"\u043D\u0430 {delta} \u0440\u0430\u043D\u0456\u0448\u0435",shift_later:"\u043D\u0430 {delta} \u043F\u0456\u0437\u043D\u0456\u0448\u0435",shift_day:"{shift}, \u043D\u0456\u0436 \u0443\u0447\u043E\u0440\u0430",shift_week:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",shift_month:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function It(a){return a?.locale?.language||a?.language||"en"}function $t(a){return`${It(a)}|${a?.locale?.time_format??""}|${Sn(a)??""}`}function Sn(a){if(a?.locale?.time_zone!=="server")return;let t=a.config?.time_zone;if(t)try{return new Intl.DateTimeFormat("en",{timeZone:t}),t}catch{return}}function $(a,t,e={}){return wu(yu,a,t,e)}function wu(a,t,e,n={}){let i=It(t).toLowerCase();return(a[i]?.[e]??a[i.split("-")[0]]?.[e]??a.en[e]).replace(/\{(\w+)\}/g,(o,s)=>n[s]??"")}function _u(a){let t=a?.locale;if(!t?.time_format)return;if(t.time_format==="12")return!0;if(t.time_format==="24")return!1;let e=t.time_format==="language"?It(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}catch{return}}function qt(a,t){if(!a)return"--";let e=new Date(a);if(isNaN(e.getTime()))return"--";try{return Ws(t,{hour:"numeric",minute:"2-digit"}).format(e)}catch{return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Ws(a,t){let e=_u(a),n={...t,timeZone:Sn(a)};return e!==void 0&&(n.hourCycle=e?"h12":"h23"),new Intl.DateTimeFormat(a?It(a):void 0,n)}function zs(a,t){try{let e=Ws(t,{hour:"numeric",minute:"2-digit"}).formatToParts(a),n=e.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:e.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:n}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Wi(a,t){try{let e=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Sn(t)}).formatToParts(a),n=i=>Number(e.find(r=>r.type===i)?.value??0);return n("hour")+n("minute")/60+n("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function ua(a,t){let e=Math.round(Math.abs(a)*60),n=Math.floor(e/60),i=e%60,r=It(t),o=Intl.DurationFormat;if(o&&t)try{return new o(r,{style:"narrow"}).format(n>0?{hours:n,minutes:i}:{minutes:i})}catch{}return r.toLowerCase().split("-")[0]==="uk"?n>0?`${n}\xA0\u0433\u043E\u0434 ${i}\xA0\u0445\u0432`:`${i}\xA0\u0445\u0432`:n>0?`${n}h ${i}m`:`${i}m`}function zi(a,t,e=!0){let n=Math.round(Math.abs(a)),i=e?n===0?"\xB1":a>0?"+":"\u2212":"",r=Math.floor(n/3600),o=Math.floor(n%3600/60),s=n%60,l=r?{hours:r,minutes:o}:o?{minutes:o,seconds:s}:{seconds:s};for(let f of Object.keys(l).slice(1))l[f]||delete l[f];let d=It(t),c=Intl.DurationFormat;if(c&&t)try{let f=new c(d,n?{style:"narrow"}:{style:"narrow",secondsDisplay:"always"}).format(l);if(f)return i+f}catch{}let u=d.toLowerCase().split("-")[0]==="uk"?{hours:"\xA0\u0433\u043E\u0434",minutes:"\xA0\u0445\u0432",seconds:"\xA0\u0441"}:{hours:"h",minutes:"m",seconds:"s"};return i+Object.entries(l).map(([f,p])=>`${p}${u[f]}`).join(" ")}function ha(a,t){let e=Sn(t);if(e)try{let n=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(a)),i=o=>Number(n.find(s=>s.type===o)?.value),r=Date.UTC(i("year"),i("month")-1,i("day"),i("hour"),i("minute"),i("second"));if(Number.isFinite(r))return r-Math.floor(a/1e3)*1e3}catch{}return-new Date(a).getTimezoneOffset()*6e4}function ma(a,t){let e=a.getFullYear(),n=a.getMonth()+1,i=a.getDate();try{let o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric",timeZone:Sn(t)}).formatToParts(a),s=l=>Number(o.find(d=>d.type===l)?.value);[s("year"),s("month"),s("day")].every(Number.isFinite)&&([e,n,i]=[s("year"),s("month"),s("day")])}catch{}let r=new Date(Date.UTC(e,n-1,0)).getUTCDate();return Math.round((Date.UTC(e,n-1,i)-Date.UTC(e,n-2,Math.min(i,r)))/864e5)}function Ni(a,t){let e=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return e?`${M(e[1])}<span class="${t}">${M(e[2])}</span>`:M(a)}var Ns=["humidity","wind","pressure","sun","uv","rain"],Is=["humidity","wind","pressure","sun"];function fa(a){let t=a.metrics,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e)return[...Is];let n=[];for(let i of e){let r=String(i).trim().toLowerCase();Ns.includes(r)&&!n.includes(r)&&n.push(r)}return n}var Ii=[3,6,8,11],$s=["low","moderate","high","very_high","extreme"];function Cn(a){let t=a.uv_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==4)return Ii;let n=e.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,r)=>isFinite(i)&&(r===0||i>n[r-1]))?n:Ii}function An(a,t=Ii){let e=Math.round(a),n=0;for(;n<4&&e>=t[n];)n++;return $s[n]}var vu={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function bu(a,t){try{let e=a.formatEntityState?.(t);if(e&&e!==t.state)return e}catch{}return Oe(vu,t.state)||t.state}var pa=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:parseFloat(String(a));return isFinite(t)?t:null};function ga(a,t){return(t.uv_entity?pa(a?.states[t.uv_entity]?.state):null)??pa(t.entity?a?.states[t.entity]?.attributes?.uv_index:void 0)}function qs(a,t,e){if(e===null||!isFinite(e))return{text:"--",level:null};let n=An(e,Cn(t));return{text:`${me(Math.max(0,Math.round(e)),a)} ${ya(a,n)}`,level:n}}function ya(a,t){return $(a,`uv_${t}`)}function kn(a,t,e){let n=/\bin\b|inch/i.test(t)?2:1;return`${me(Math.max(0,a),e,n)} ${t}`.trim()}function vt(a,t,e){let n=t?a?.states[t]:void 0,i=pa(n?.state);return i===null?null:{value:i,unit:typeof n?.attributes?.unit_of_measurement=="string"?n.attributes.unit_of_measurement:e}}var $i=(a,t)=>$(a,t?"rain_now":"rain_today"),xu=180;function Gs(a,t){let e=t.note_entity?a?.states[t.note_entity]:void 0;if(!e)return null;let n=s=>typeof s=="string"?s.trim():"",i=e.state==="unknown"||e.state==="unavailable"?"":n(e.state),r=n(e.attributes?.[t.note_attribute||"note"]);if(!i&&!r)return null;let o=Date.parse(e.attributes?.generated_at);return{line:i||r,note:r||i,writtenAt:Number.isNaN(o)?null:o}}function Bs(a,t){let e=Number(t.note_max_age??xu);return a.writtenAt===null||!(e>0)?null:a.writtenAt+e*6e4}function wa(a,t){return a?Cu(a,t):{temperature:"--",weatherCondition:"",location:t.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var Su={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function Tn(a){let t=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(t)?(t%360+360)%360:typeof a=="string"?Su[a.trim().toUpperCase()]??null:null}function Gt(a){return Number(a.temperature_decimals)===1?1:0}function Cu(a,t){if(!t.entity)throw new Error("Weather entity is required");let e=a.states[t.entity];if(!e)throw new Error(`Entity ${t.entity} not found`);let n;if(t.outdoor_sensor_entity){let x=a.states[t.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?n=parseFloat(x.state):n=e.attributes.temperature}else n=e.attributes.temperature;let i=Gt(t),r=x=>me(i?x:Math.round(x),a,i),o=n!=null&&!isNaN(n)?r(n):"--",s=bu(a,e),l=t.name||e.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?me(Math.round(E),a)+"%":null},c="--";if(t.humidity_sensor_entity){let x=a.states[t.humidity_sensor_entity];c=x&&d(x.state)||d(e.attributes.humidity)||"--"}else c=d(e.attributes.humidity)||"--";let h="--",u=10,f=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=De(P,E||"km/h"),h=me(Math.round(P),a)+" "+(E||"km/h"),!0):!1},p=t.wind_speed_sensor_entity?a.states[t.wind_speed_sensor_entity]:void 0;p&&f(p.state,p.attributes?.unit_of_measurement)||f(e.attributes.wind_speed,e.attributes.wind_speed_unit);let m=t.wind_direction_sensor_entity?a.states[t.wind_direction_sensor_entity]:void 0,g=Tn(m?.state)??Tn(e.attributes.wind_bearing),y=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let R=E.toLowerCase()==="inhg"?2:0;return me(P,a,R)+" "+E},w=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",v=null;if(t.pressure_sensor_entity){let x=a.states[t.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=y(x.state,E);P&&(_=P,v=w(x.state))}if(_==="--"&&e.attributes.pressure!==void 0){let E=e.attributes.pressure_unit||"hPa";_=y(e.attributes.pressure,E)||"--",v=w(e.attributes.pressure)}}else if(e.attributes.pressure!==void 0){let x=e.attributes.pressure_unit||"hPa";_=y(e.attributes.pressure,x)||"--",v=w(e.attributes.pressure)}let b=null,C;if(t.feels_like_entity&&(C=a.states[t.feels_like_entity]?.state),C===void 0&&e.attributes.apparent_temperature!==void 0&&(C=e.attributes.apparent_temperature),C!==void 0){let x=typeof C=="number"?C:parseFloat(C);isFinite(x)&&(b=r(x)+"\xB0")}let S="--";if(t.indoor_temperature_entity){let x=a.states[t.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(S=r(parseFloat(x.state))+"\xB0")}let A="--";if(t.indoor_humidity_entity){let x=a.states[t.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(A=me(Math.round(parseFloat(x.state)),a)+"%")}let T;if(t.sun_entity){let x=a.states[t.sun_entity];x&&(T={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:u,windBearing:g,pressure:_,pressureValue:v,feelsLike:b,indoorTemperature:S,indoorHumidity:A,uv:ga(a,t),sun:T}}var Au=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],Mn={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},_a=["uv_max","rain_event","rain_week","rain_month","rain_year"],Tu=a=>a!=="sun"&&!Object.prototype.hasOwnProperty.call(Mn,a);var Vs=a=>typeof a=="string"&&Au.includes(a),qi=a=>typeof a=="string"&&a.trim()?a.trim():void 0;function ku(a){if(typeof a=="string"){let l=a.trim().toLowerCase();return Vs(l)?{type:l,view:_a.includes(l)}:null}if(!a||typeof a!="object")return null;let t=a,e=typeof t.type=="string"?t.type.trim().toLowerCase():"";if(!Vs(e))return null;let n={type:e,view:t.view===!0||_a.includes(e)},i=qi(t.entity);i&&(n.entity=i);let r=qi(t.direction_entity);e==="wind"&&r&&(n.direction_entity=r);let o=qi(t.rate_entity);e==="rain"&&o&&(n.rate_entity=o);let s=qi(t.name);return s&&(n.name=s),n}function Pn(a){let t=a.readings;if(Array.isArray(t))return t.map(ku).filter(r=>!!r);let e=[],n=r=>{let o=Object.fromEntries(Object.entries(r).filter(([,s])=>s!==void 0&&s!==""));e.push({...o,view:!!r.view||_a.includes(r.type)})},i=fa(a);for(let r of i){if(r==="sun"){a.show_sun!==!1&&n({type:"sun"});continue}r==="humidity"?n({type:"humidity",entity:a.humidity_sensor_entity}):r==="wind"?n({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity}):r==="pressure"?n({type:"pressure",entity:a.pressure_sensor_entity}):r==="uv"?n({type:"uv",entity:a.uv_entity}):r==="rain"&&n({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity})}!i.includes("wind")&&(a.wind_speed_sensor_entity||a.wind_direction_sensor_entity)&&n({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity,view:!0}),!i.includes("uv")&&a.uv_entity&&n({type:"uv",entity:a.uv_entity,view:!0}),!i.includes("rain")&&(a.rain_entity||a.rain_rate_entity)&&n({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity,view:!0}),a.uv_max_entity&&n({type:"uv_max",entity:a.uv_max_entity});for(let r of["rain_event","rain_week","rain_month","rain_year"]){let o=a[`${r}_entity`];o&&n({type:r,entity:o})}return e}var ba=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],En=a=>a?.entity&&!a.entity.startsWith("weather.")?a.entity:void 0;function Us(a){if(!Array.isArray(a.readings))return a;let t=Pn(a),e=s=>t.find(l=>l.type===s),n={...a};for(let s of ba)delete n[s];let i=e("wind"),r=e("rain"),o={humidity_sensor_entity:En(e("humidity")),wind_speed_sensor_entity:En(i),wind_direction_sensor_entity:i?.direction_entity,pressure_sensor_entity:En(e("pressure")),uv_entity:En(e("uv")),uv_max_entity:e("uv_max")?.entity,rain_entity:En(r),rain_rate_entity:r?.rate_entity,rain_event_entity:e("rain_event")?.entity,rain_week_entity:e("rain_week")?.entity,rain_month_entity:e("rain_month")?.entity,rain_year_entity:e("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(n[s]=l);return n}var Ys=a=>a.map((t,e)=>({r:t,i:e})).filter(({r:t})=>!t.view&&!(Tu(t.type)&&!t.entity)),Ks=a=>[...new Set(a.flatMap(t=>[t.entity,t.direction_entity,t.rate_entity]).filter(t=>!!t))];var va=[51,101,151,201,301],Eu=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function js(a){let t=a.aqi_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==5)return va;let n=e.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,r)=>isFinite(i)&&(r===0||i>n[r-1]))?n:va}function Xs(a,t=va){let e=Math.round(a),n=0;for(;n<5&&e>=t[n];)n++;return Eu[n]}var xa=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:parseFloat(String(a));return isFinite(t)?t:null},Zs=(a,t,e)=>{let n=e.entity?.startsWith("weather.")?e.entity:t.entity;return n?a?.states[n]:void 0},Mu=(a,t)=>t.entity&&!t.entity.startsWith("weather.")?a?.states[t.entity]:void 0;function Ie(a,t,e,n,i=""){let r=Mu(a,e),o=xa(r?.state);if(o!==null)return{value:o,unit:typeof r?.attributes?.unit_of_measurement=="string"?r.attributes.unit_of_measurement:i};let s=Oe(Mn,e.type);if(!s)return{value:null,unit:""};let l=Zs(a,t,e),d=n?l?.attributes?.[n]:void 0;return{value:xa(l?.attributes?.[s]),unit:typeof d=="string"?d:i}}var Ln=(a,t)=>t?`${a} ${t}`:a,_e="--",Gi=(a,t,e)=>pn(a,`ui.card.weather.attributes.${t}`,$(a,e)),Pu={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},Lu=(a,t)=>$(a,`aqi_${t}`);function Ou(a,t){let e=t.sun_entity?a?.states[t.sun_entity]:void 0,n=e?.state==="above_horizon",i=e?qt(n?e.attributes?.next_setting:e.attributes?.next_rising,a):_e;return{label:$(a,n?"sunset":"sunrise"),icon:n?"sunset":"sunrise",html:Ni(i,"awc-ampm"),text:i}}function Sa(a,t,e){let n=(o,s=0)=>me(s?o:Math.round(o),a,s),i=o=>`${me(Gt(t)?o:Math.round(o),a,Gt(t))}\xB0`,r=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(e.type){case"humidity":{let{value:o}=Ie(a,t,e);return r(pn(a,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?_e:`${n(o)}%`)}case"wind":{let{value:o,unit:s}=Ie(a,t,e,"wind_speed_unit","km/h"),l=e.direction_entity?a?.states[e.direction_entity]?.state:void 0,d=Tn(l)??Tn(Zs(a,t,e)?.attributes?.wind_bearing);return{...r(pn(a,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?_e:Ln(n(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=Ie(a,t,e,"pressure_unit","hPa"),l=s||"hPa";return{...r(pn(a,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?_e:Ln(n(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return Ou(a,t);case"uv":{let{value:o}=Ie(a,t,e),s=qs(a,t,o);return{label:$(a,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=vt(a,e.rate_entity,"mm/h"),s=vt(a,e.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return r($i(a,l),"rain",d?kn(d.value,d.unit,a):_e)}case"aqi":{let{value:o}=Ie(a,t,e);if(o===null)return{label:$(a,"aqi"),icon:"aqi",html:_e,text:_e,level:null};let s=Xs(o,js(t)),l=n(Math.max(0,o)),d=Lu(a,s);return{label:$(a,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=Ie(a,t,e);return r($(a,"feels_like"),"thermometer",o===null?_e:i(o))}case"dew_point":{let{value:o}=Ie(a,t,e);return r(Gi(a,"dew_point","dew_point"),"thermometer",o===null?_e:i(o))}case"visibility":{let{value:o,unit:s}=Ie(a,t,e,"visibility_unit","km");return r(Gi(a,"visibility","visibility"),"eye",o===null?_e:Ln(n(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=Ie(a,t,e);return r(Gi(a,"cloud_coverage","cloud_cover"),"cloud",o===null?_e:`${n(o)}%`)}case"gust":{let{value:o,unit:s}=Ie(a,t,e,"wind_speed_unit","km/h");return r(Gi(a,"wind_gust_speed","gusts"),"wind",o===null?_e:Ln(n(o),s||"km/h"))}case"sensor":{let o=e.entity?a?.states[e.entity]:void 0,s=e.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:e.entity??""),l=Oe(Pu,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return r(s,l,_e);let d;try{d=a?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=xa(o.state),h=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Ln(me(c,a,Math.min(2,(String(o.state).split(".")[1]??"").length)),h)}return r(s,l,d)}default:{let o=vt(a,e.entity,e.type==="uv_max"?"":"mm");return r(e.type,e.type==="uv_max"?"noon":"rain",o?e.type==="uv_max"?n(o.value):kn(o.value,o.unit,a):_e)}}}function Ca(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function Bi(a,t){return{entity:t,tap_action:Ca(a?.tap_action),hold_action:Ca(a?.hold_action),double_tap_action:Ca(a?.double_tap_action)}}function Bt(a){return!!a&&a.action!=="none"}function Qs(a){return a.tap_action?Bt(a.tap_action):!!a.entity}function On(a,t,e,n={}){let i=t[`${e}_action`],r=i&&Object.prototype.hasOwnProperty.call(n,i.action)?n[i.action]:void 0;if(r){r(e);return}if(e==="tap"&&!i){t.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t.entity},bubbles:!0,composed:!0}));return}Bt(i)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:t,action:e},bubbles:!0,composed:!0}))}function Vi(a,t,e,n={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let i=null,r=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{i=null,l()},c=()=>{Bt(e().double_tap_action)?s?(clearTimeout(s),s=void 0,On(t,e(),"double_tap",n)):s=setTimeout(()=>{s=void 0,On(t,e(),"tap",n)},250):On(t,e(),"tap",n)},h=u=>u.target!==a&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",u=>{u.button!==0||h(u)||(i={x:u.clientX,y:u.clientY},r=!1,l(),Bt(e().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,On(t,e(),"hold",n)},500)))}),a.addEventListener("pointermove",u=>{i&&Math.hypot(u.clientX-i.x,u.clientY-i.y)>10&&d()}),a.addEventListener("pointerup",()=>{let u=!!i&&!r;d(),u&&c()}),a.addEventListener("pointercancel",d),a.addEventListener("pointerleave",d),a.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==a||!Qs(e())||(u.preventDefault(),On(t,e(),"tap",n))}),a.addEventListener("contextmenu",u=>{Bt(e().hold_action)&&u.preventDefault()})}function Dn(a,t,e){Qs(t)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(e?a.setAttribute("role",e):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let n=Bt(t.hold_action);a.style.userSelect=n?"none":"",a.style.setProperty("-webkit-user-select",n?"none":""),a.style.setProperty("-webkit-touch-callout",n?"none":"")}var Aa=new Map;function bt(a,t){let e=Aa.get(a);if(e)return e;let n=new Promise((i,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>t()?i():r(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return n.catch(()=>Aa.delete(a)),Aa.set(a,n),n}function Rn(a){return bt("animated-weather-card-editor",()=>!!customElements.get(a))}var Js={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function xt(a,t){return`<svg class="${t} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${Js[a]}"/></svg>`}function el(a,t){!a||a.getAttribute("data-icon")===t||(a.setAttribute("data-icon",t),a.firstElementChild?.setAttribute("d",Js[t]))}var Du=29.530588853,Ru=Date.UTC(2e3,0,6,18,14),Hu={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function tl(a,t){let n=((a.getTime()-Ru)/864e5/Du%1+1)%1,i=t?Oe(Hu,t):void 0;if(!i)return n;let r=n*28;return r>=27.5&&(r-=28),r=Math.min(i[1],Math.max(i[0],r)),(r/28%1+1)%1}function nl(a,t=!1){let e=Math.cos(2*Math.PI*a),n=(1-e)/2,i=a<.5!==t,r=n<.5,o=(Math.abs(e)*50).toFixed(1),s=i===r?1:0,l=i?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,h=.3+.7*n;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*h).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*h).toFixed(3)})`}}var Q=Math.PI/180,Fn=6e4,ve=864e5;function Ta(a){let t=(a/ve+24405875e-1-2451545)/36525,e=(280.46646+t*(36000.76983+t*3032e-7))%360,n=357.52911+t*(35999.05029-1537e-7*t),i=.016708634-t*(42037e-9+1267e-10*t),r=Math.sin(n*Q)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*Q)*(.019993-101e-6*t)+Math.sin(3*n*Q)*289e-6,o=125.04-1934.136*t,s=e+r-.00569-.00478*Math.sin(o*Q),l=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(o*Q),d=Math.asin(Math.sin(l*Q)*Math.sin(s*Q)),c=Math.tan(l/2*Q)**2,h=4/Q*(c*Math.sin(2*e*Q)-2*i*Math.sin(n*Q)+4*i*c*Math.sin(n*Q)*Math.cos(2*e*Q)-.5*c*c*Math.sin(4*e*Q)-1.25*i*i*Math.sin(2*n*Q));return{declination:d,equationOfTime:h}}function rl(a,t,e){let{declination:n,equationOfTime:i}=Ta(a.getTime()),o=((a.getUTCHours()*60+a.getUTCMinutes()+a.getUTCSeconds()/60+a.getUTCMilliseconds()/6e4+i+4*e)%1440+1440)%1440/4-180,s=Math.sin(t*Q)*Math.sin(n)+Math.cos(t*Q)*Math.cos(n)*Math.cos(o*Q);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/Q}function al(a,t){let e=a+(720-4*t)*Fn,{equationOfTime:n}=Ta(e),i=a+(720-4*t-n)*Fn;return{noon:i,declination:Ta(i).declination}}var Fu=-.833;function Hn(a,t){let e=Math.floor(t/ve)*ve,n=NaN;for(let i=-1;i<=1;i++){let r=al(e+i*ve,a).noon;Math.abs(r-t)>=Math.abs(n-t)||(n=r)}return n}function ka(a,t,e){let n=l=>rl(new Date(l),a,t)>Fu,i=e-ve/2,r=e+ve/2,o=n(e);if(!o)return{up:o,start:i,end:r,rise:null,set:null};let s=(l,d)=>{for(let c=0;c<24;c++){let h=(l+d)/2;n(h)?d=h:l=h}return(l+d)/2};return{up:o,start:i,end:r,rise:n(i)?null:s(i,e),set:n(r)?null:s(r,e)}}function il(a,t,e){let n=ka(a,t,Hn(t,e));return n.up?n.rise===null&&n.set===null?{minutes:1440,polar:!0}:{minutes:((n.set??n.end)-(n.rise??n.start))/Fn,polar:!1}:{minutes:0,polar:!0}}function ol(a,t,e,n,i){let r=Hn(t,e),o=null,s=r;for(let d of[r-ve,r,r+ve]){let c=ka(a,t,Hn(t,d))[n];c!==null&&(o===null||Math.abs(c-e)<Math.abs(o-e))&&(o=c,s=Hn(t,d))}if(o===null)return null;let l=ka(a,t,Hn(t,s-i*ve))[n];return l===null?null:{now:o,then:l}}function sl(a,t,e,n){let i=il(a,t,e);return i.polar?null:Math.round((i.minutes-il(a,t,e-n*ve).minutes)*60)}function ll(a,t,e=Te()){let n=e.getTime(),i=Math.floor(n/ve)*ve,r={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=a*Q;for(let m=-1;m<=2;m++){let{noon:g,declination:y}=al(i+m*ve,t);r.noon.push(g),r.midnight.push(g+ve/2);for(let[w,_,v]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let b=(Math.sin(w*Q)-Math.sin(o)*Math.sin(y))/(Math.cos(o)*Math.cos(y));if(!(Math.abs(b)<=1))continue;let C=Math.acos(b)/Q*4;r[_].push(g-C*Fn),r[v].push(g+C*Fn)}}let s=m=>m.filter(g=>g>n).sort((g,y)=>g-y)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=rl(e,a,t),c=s(r.rising),h=s(r.setting),u=s(r.noon),f=s(r.midnight);return{state:(h!==null&&c!==null?h<c:h!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(r.dawn)),next_dusk:l(s(r.dusk)),next_midnight:l(f),next_noon:l(u),next_rising:l(c),next_setting:l(h),elevation:Math.round(d*100)/100,rising:u!==null&&f!==null?u<f:!1}}}var dl=a=>typeof a=="number"?a:typeof a=="string"&&a.trim()?Number(a):NaN;function Wu(a){let t=a.latitude!==void 0&&a.latitude!==null&&a.latitude!=="",e=a.longitude!==void 0&&a.longitude!==null&&a.longitude!=="",n=typeof a.time_zone=="string"&&a.time_zone.trim()?a.time_zone.trim():void 0;if(!t&&!e&&!n)return null;let i,r;if(t||e){if(i=dl(a.latitude),r=dl(a.longitude),!t||!e)throw new Error("latitude and longitude go together: set both, or neither");if(!(i>=-90&&i<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${a.latitude})`);if(!(r>=-180&&r<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${a.longitude})`)}if(n)try{new Intl.DateTimeFormat("en",{timeZone:n})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${n})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=i!==void 0&&r!==void 0?`sun.awc_${o(i)}_${o(r)}`:void 0;return{latitude:i,longitude:r,timeZone:n,sunId:s,key:`${s??""}|${n??""}`}}function zu(a,t,e,n=[]){let i=a;if(i.awcPlace===t.key)return a;let r=i.awcHome??a,o=Object.create(r);if(t.sunId&&e){let s=Object.create(r.states);s[t.sunId]=e;let l=e.state==="above_horizon"?"sunny":"clear-night";for(let d of n){let c=d?r.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...r.config,...t.latitude!==void 0?{latitude:t.latitude,longitude:t.longitude}:{},...t.timeZone?{time_zone:t.timeZone}:{}},t.timeZone&&(o.locale={...r.locale??{},time_zone:"server"}),o.awcPlace=t.key,o.awcHome=r,o}function Nu(a,t=Te()){if(!a.sunId||a.latitude===void 0||a.longitude===void 0)return;let e=ll(a.latitude,a.longitude,t),n=t.toISOString();return{entity_id:a.sunId,state:e.state,attributes:{...e.attributes,friendly_name:"Sun"},last_changed:n,last_updated:n,context:{id:"",parent_id:null,user_id:null}}}var Vt=class{constructor(t=()=>[]){this.weather=t;this.place=null;this.timer=0}set(t){let e=Wu(t),n=(e?.key??"")!==(this.place?.key??"");return this.place=e,n&&(this.sun=void 0),n}see(t){if(!this.place)return t;let e=Math.floor(yt()/6e4);if(this.place.sunId&&this.sun?.minute!==e){let n=Nu(this.place);this.sun=n?{minute:e,entity:n}:void 0}return zu(t,this.place,this.sun?.entity,this.weather())}tick(t){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(t,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var cl=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function ul(a){let t=a.color_palette||"default",e=a.custom_colors||{},n="";if(t!=="theme"){let r=c=>{if(typeof c!="string"||!cl.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let u=parseInt(h,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(c,h,u)=>"#"+(c<<16|h<<8|u).toString(16).padStart(6,"0"),s=(c,h)=>{let u=r(c);if(!u)return c;let f=1-h/100;return o(Math.max(0,Math.floor(u.r*f)),Math.max(0,Math.floor(u.g*f)),Math.max(0,Math.floor(u.b*f)))},l=(c,h)=>{let u=r(c);if(!u)return c;let f=h/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*f)),Math.min(255,Math.floor(u.g+(255-u.g)*f)),Math.min(255,Math.floor(u.b+(255-u.b)*f)))},d=(c,h)=>{let u=e[c];if(!u||typeof u!="string"||!cl.test(u))return;let f=l(u,12),p=s(u,22);n+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${u} 55%, ${p} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let i=(r,o)=>{r&&fn(r)&&(n+=o.replace(/\$\{value\}/g,r))};return i(e.text_color,"--weather-text-color: ${value} !important; "),i(e.temperature_color,"--awc-hero-color: ${value} !important; "),i(e.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),i(e.rain_color,"--weather-rain-color: ${value} !important; "),i(e.snow_color,"--weather-snow-color: ${value} !important; "),n}var Ut="animated-weather-card-hour";var Yt="animated-weather-card-dev",hl="weather.awc_dev";function Wn(a){return a.awcDevBase??a}function Yi(a,t){let e=Wn(a),n=window.AnimatedWeatherCardDev;if(!n||!t)return e;try{return n.wants(t)?n.lens(e,t):e}catch(i){return console.warn("Animated Weather Card: the dev card's world failed",i),e}}function zn(a){if(!a)return!1;let t=window.AnimatedWeatherCardDev;if(!t)return!!a.dev_mode;try{return t.wants(a)}catch{return!!a.dev_mode}}function Ki(){return window.AnimatedWeatherCardDev?.offset??0}function Kt(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function Nn(){return window.AnimatedWeatherCardDevCards?Promise.resolve():bt("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Ui=class extends HTMLElement{setConfig(t){this.devCardConfig={...t},this.view?.update()}set hass(t){this.devCardHass=t,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}Nn().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(t=>{console.warn(`Animated Weather Card: ${t.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var ml={horizon:196,peak:34,trough:276,twilightRy:78},fl={horizon:200,peak:96,trough:262,twilightRy:44};function Ea(a,t,e){let n=e-t;if(n<=0||n>=24)return 0;if(a>=t&&a<=e)return Math.sin(Math.PI*(a-t)/n);let i=((a-e)%24+24)%24;return-Math.sin(Math.PI*i/(24-n))}var Ma=(a,t=!1)=>t?1-a/24:a/24,St=(a,t=!1)=>Ma(a,t)*1e3,Pa=(a,t)=>a>=0?t.horizon-a*(t.horizon-t.peak):t.horizon-a*(t.trough-t.horizon);var yl={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},Iu={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function $u(a){return Oe(Iu,a)??"last-light"}function La(a,t){let e=i=>i.startsWith("sensor.")&&Oe(yl,t.states[i]?.state)!==void 0,n=t?e("sensor.moon_phase")?"sensor.moon_phase":Object.keys(t.states).find(e):"sensor.moon_phase";return n?{sun_entity:a,moon_entity:n}:{sun_entity:a}}var qu=124,pl=16;function Gu(a,t){if(a<1)return 1;let e=Math.max(2,Math.floor((t+pl)/(qu+pl))),n=Math.ceil(a/e);return Math.ceil(a/n)}function Bu(a,t,e){if(t==="none")return null;let n=a?.config?.latitude,i=a?.config?.longitude;if(typeof n!="number"||typeof i!="number"||!Number.isFinite(n)||!Number.isFinite(i))return null;let r=t==="week"||t==="month"?t:"day",o=r==="week"?7:r==="month"?ma(e,a):1,s=e.getTime()+(12-Wi(e,a))*36e5,l=sl(n,i,s,o);if(l===null)return null;let d="\0",[c="",h=""]=$(a,r==="week"?"daylight_week":r==="month"?"daylight_month":"daylight_day",{delta:d}).split(d);return{before:c,figure:zi(l,a),after:h}}function Vu(a,t,e,n){if(t==="none"||!n)return null;let i=a?.config?.latitude,r=a?.config?.longitude;if(typeof i!="number"||typeof r!="number"||!Number.isFinite(i)||!Number.isFinite(r))return null;let o=Date.parse(n);if(!Number.isFinite(o))return null;let s=t==="week"?7:t==="month"?ma(new Date(o),a):1,l=ol(i,r,o,e,s);if(!l)return null;let d=l.now-l.then-s*864e5+ha(l.now,a)-ha(l.then,a),c=Math.round(d/1e3);return c===0?null:c}function Uu(a,t,e,n){let i=[];for(let r=0;r<=240;r++){let o=r/10;i.push(`${St(o,n).toFixed(1)},${Pa(Ea(o,a,t),e).toFixed(1)}`)}return"M"+i.join(" L")}function Xi(a,t){if(!a)return 0;let e=new Date(a);return isNaN(e.getTime())?0:Wi(e,t)}var Yu=a=>Ni(a,"st-ampm");Ci();var gl=Ye(Re(Ft)),Ku=`
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
        color: ${xn.text};
        background: ${xn.fill};
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
        --st-text: ${gl};
        --st-secondary: ${gl};
        --st-secondary-opacity: ${vi};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Wt(bi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${ia.map(a=>`${a} ${Le}s ${zt}`).join(", ")};
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
`,Oa=class extends HTMLElement{constructor(){super();this.config={};this._place=new Vt(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=e=>this._follow(e.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",zn(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let e=Ki();e!==this._devClock&&(this._devClock=e,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(e){return this._place.see(Yi(e,this.config))}setConfig(e){let n=this._place.set(e),i=this._place.place?.sunId;if(!e.sun_entity&&!i&&!e.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let r=!!this.config.dev_mode!=!!e.dev_mode;this.config={...e,sun_entity:i||e.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",zn(this.config)),e.dev_mode&&Nn().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(n||r)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(e){this._homeHass=Wn(e),e=this._see(e);let n=this.config.sun_entity||"",i=this.config.moon_entity||"",r=this._hass?.states[n],o=e.states[n],s=this._hass?.states[i]?.state,l=e.states[i]?.state,d=$t(this._hass)!==$t(e),c=this._weatherId()||"",h=c&&this._hass?.states[c]?.state!==e.states[c]?.state;this._hass=e;let u=r?.attributes?.elevation,f=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(f||0))>=.5||i&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Ut,this._onHour),window.addEventListener(Yt,this._onDev),Kt().add(this),this._unshare||(this._unshare=Rs(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Ut,this._onHour),window.removeEventListener(Yt,this._onDev),Kt().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let e=this._shadow.querySelector(".st-card");if(!e)return;let n=e.querySelector(".st-metrics"),i=e.querySelector(".st-delta");for(let r of["regular","compact","short","tight"]){if(e.dataset.fit=r,this._fitShift(e),n){let o=Array.from(n.children).filter(s=>getComputedStyle(s).display!=="none").length;n.style.setProperty("--st-cols",String(Gu(o,n.clientWidth)))}if(i?.parentElement){let o=i.parentElement,s=()=>o.scrollWidth>o.clientWidth+.5;i.hidden=!1,delete i.dataset.words,s()&&(i.dataset.words="off"),s()&&(i.hidden=!0)}if(e.scrollHeight<=e.clientHeight+1)return}}_shiftHtml(e,n){let i=this.config.daylight_delta,r=$(n,e<0?"shift_earlier":"shift_later",{delta:zi(e,n,!1)}),o="\0",s=$(n,i==="week"?"shift_week":i==="month"?"shift_month":"shift_day",{shift:o}),[l="",d=""]=s.split(o),c=h=>h?`<span class="st-shift-period">${M(h)}</span>`:"";return`<span class="st-shift" title="${M(l+r+d)}"><span class="st-shift-sep" aria-hidden="true"> \xB7 </span>${c(l)}<span class="st-shift-words">${M(r)}</span>${c(d)}<span class="st-shift-sign" aria-hidden="true">${M(zi(e,n))}</span></span>`}_fitShift(e){let n=e.querySelector(".st-shift"),i=n?.parentElement;if(!n||!i||(n.hidden=!1,getComputedStyle(i).display==="none"))return;let r=i.clientWidth;e.classList.contains("compact")&&(n.hidden=!0,r=(e.querySelector(".st-hero")?.getBoundingClientRect().width??i.clientWidth)+Math.min(40,.08*e.clientWidth),n.hidden=!1);for(let o of["words","sign"])if(n.dataset.form=o,i.scrollWidth<=r+.5)return;n.hidden=!0}_actions(){let e=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return Bi(this.config,e)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||Ds(this.config.sun_entity)}_skyCondition(e){let n=this._weatherId(),i=n?this._hass?.states[n]?.state:void 0;if(i&&i!=="unavailable"&&i!=="unknown"){let r=gn(i,void 0,void 0,this._hass?.config?.time_zone,{night:e==="night"});if(na.includes(r))return r}return e==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Rn("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(e,n=[],i=[]){let r=[...n,...i,...Object.keys(e?.states??{})];return La(r.find(o=>o.startsWith("sun."))??"sun.sun",e)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let e=this._hass.states[this.config.sun_entity];return e?{sunrise:e.attributes.next_rising||null,sunset:e.attributes.next_setting||null,dawn:e.attributes.next_dawn||null,dusk:e.attributes.next_dusk||null,noon:e.attributes.next_noon||null,elevation:typeof e.attributes.elevation=="number"?e.attributes.elevation:null,aboveHorizon:e.state==="above_horizon",rising:!!e.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let e=this._hass.states[this.config.moon_entity];if(!e)return null;let n=e.state,i;try{i=this._hass.formatEntityState?.(e)}catch{}return{phase:n,phaseName:(i&&i!==n?i:void 0)||Oe(yl,n)||n.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:$u(n)}}_render(){this._drawnWeather=this._weatherId();let e=this._getSunData(),n=this._getMoonData(),i=this.config.color_palette!=="theme";if(!e||!e.sunrise||!e.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=Te(),o=Wi(r,this._hass),s=Xi(e.sunrise,this._hass),l=Xi(e.sunset,this._hass),d=e.dawn?Xi(e.dawn,this._hass):Math.max(0,s-.5),c=e.dusk?Xi(e.dusk,this._hass):Math.min(24,l+.5),h=l-s,u=e.aboveHorizon,f=u?e.sunset:e.sunrise,p=new Date(f).getTime()-r.getTime(),m=this._hass,g=He=>M($(m,He)),y=He=>Yu(qt(He,m)),w=p>0?$(m,"in_duration",{duration:ua(p/36e5,m)}):"",_=w&&this.config.show_header!==!1?Vu(m,this.config.daylight_delta,u?"set":"rise",f):null,v=_===null?"":this._shiftHtml(_,m),b=Si(e.elevation,e.rising,e.aboveHorizon),C=Ht(this._skyCondition(b),b),S=i?{"--awc-sky-top":C.top,"--awc-sky-mid":C.mid,"--awc-sky-bottom":C.bottom,"--awc-sky-glow":C.glow,"--awc-sky-scrim":C.scrim}:null,A=this.config.compact?fl:ml,T=this.config.direction,x=T==="right_to_left"||T!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:x};let E=Uu(s,l,A,x),P=`${E} L${St(24,x)},${A.horizon} L${St(0,x)},${A.horizon} Z`,R=Ea(o,s,l),z=Ma(o,x)*100,I=Pa(R,A)/300*100,q=(He,Qi)=>{let Bn=Math.max(70,Math.abs(Qi)/24*1e3*2.4);return`<ellipse cx="${St(He,x).toFixed(1)}" cy="${A.horizon}" rx="${Bn.toFixed(1)}" ry="${A.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},H=!!this.config.compact,G=this.config.show_header!==!1,be=G?`
            <div class="st-hero">
                ${this.config.title&&!H?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${xt(u?"sunset":"sunrise","st-glyph")}
                    <span>${g(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${y(f)}</div>
                ${w?`<div class="st-countdown">${M(w)}${v}</div>`:""}
            </div>`:this.config.title&&!H?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",ae=(He,Qi,Bn,Dl,Rl=!1)=>`
                <div class="st-metric" data-kind="${M(He)}">
                    <div class="st-metric-label">${xt(Qi,"st-glyph")}<span title="${M(Bn)}">${M(Bn)}</span></div>
                    <div class="st-metric-value${Rl?" wrap":""}">${Dl}</div>
                </div>`,ke=!H&&this.config.show_details!==!1,L=ke?Bu(m,this.config.daylight_delta,r):null,j=He=>He.trim()?`<span class="st-delta-words">${M(He)}</span>`:"",N=L?`<span class="st-delta" title="${M(L.before+L.figure+L.after)}">${j(L.before)}<span class="st-delta-figure">${M(L.figure)}</span>${j(L.after)}</span>`:"",oe=H&&G?`
                        <div class="st-chart-note">${g(u?"sunrise":"sunset")}<span class="st-chart-note-time">${y(u?e.sunrise:e.sunset)}</span></div>`:"",Ll=ke?`
            <div class="st-metrics">
                ${u?ae("sunrise","sunrise",g("sunrise"),y(e.sunrise)):ae("sunset","sunset",g("sunset"),y(e.sunset))}
                ${ae("noon","noon",g("solar_noon"),y(e.noon))}
                ${ae("daylight","daylight",g("daylight"),M(ua(h,m))+N)}
                ${ae("first-light","first-light",g("first_light"),y(e.dawn))}
                ${ae("last-light","last-light",g("last_light"),y(e.dusk))}
                ${n?ae("moon",n.icon,g("moon"),M(n.phaseName),!0):""}
            </div>`:"",Ia=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,$a="";try{$a=Ia&&m?.formatEntityState?.(Ia)||""}catch{}let Ol=[`${$(m,"sunrise")} ${qt(e.sunrise,m)}`,`${$(m,"sunset")} ${qt(e.sunset,m)}`,$a].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${be}
                    <div class="st-chart" role="img" aria-label="${M(Ol)}">
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
                            <line x1="${St(o,x).toFixed(1)}" y1="0" x2="${St(o,x).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${E}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${E}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${R<0?"below":""}" style="left: ${z.toFixed(2)}%; top: ${I.toFixed(2)}%;"></div>${oe}
                    </div>
                    ${Ll}`,S)}_mount(e,n){let i=this._shadow.querySelector(".st-card");i||(this._shadow.innerHTML=`<style>${Ku}</style><ha-card><div class="st-card"></div></ha-card>`,i=this._shadow.querySelector(".st-card"),Vi(i.parentElement,this,()=>this._actions())),Dn(i.parentElement,this._actions());let r=!!n;i.classList.toggle("sky",r),i.classList.toggle("compact",!!this.config.compact),i.parentElement?.classList.toggle("sky",r);for(let o of ia)n?i.style.setProperty(o,n[o]):i.style.removeProperty(o);i.innerHTML=e,this._link&&this._follow(),this._fit()}_follow(e){if(e){if(!e.source||e.sun!==this.config.sun_entity||e.at===null&&!this._link)return;if(this._link=e.at===null?null:e,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let n=this._shadow.querySelector(".st-card");n&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:n,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",Oa);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,t)=>t.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...La(t,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...La(t,a),compact:!0}}]:null});function jt(a){let t=Number(a?.attributes?.supported_features);if(!isFinite(t))return["hourly","daily"];let e=[];return t&2&&e.push("hourly"),t&4&&e.push("twice_daily"),t&1&&e.push("daily"),e}function wl(a){let t=jt(a);return t.includes("daily")?"daily":t.includes("twice_daily")?"twice_daily":null}var ju=5e3;function Xu(){let a=new WeakMap;return{subscribe(t,e,n,i){let r=a.get(t);r||a.set(t,r=new Map);let o=`${e}|${n}`,s=r.get(o);if(!s){let d={listeners:new Set};s=d,r.set(o,d);let c=h=>{d.last=h;for(let u of[...d.listeners])u(h)};d.unsubscribe=t.subscribeMessage(h=>c({type:h?.type??n,forecast:Array.isArray(h?.forecast)?h.forecast:null}),{type:"weather/subscribe_forecast",entity_id:e,forecast_type:n}).catch(()=>{r.get(o)===d&&r.delete(o),c({type:n,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(i),l.last&&i(l.last),()=>{!l.listeners.delete(i)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(r.get(o)===l&&r.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},ju))}}}}function Zu(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=Xu())}function _l(a,t,e,n){return a?.connection?.subscribeMessage?Zu().subscribe(a.connection,t,e,n):()=>{}}var $n=class{constructor(t){this.changed=t;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(t,e,n){let i=e?t?.states[e]:void 0,r=jt(i),o=n.hourly&&r.includes("hourly"),s=n.daily?wl(i):null,l=`${e}|${o}|${s}`;if(!t?.connection||!e||!i){this.key&&this.stop();return}if(l===this.key&&this.connection===t.connection)return;this.stop(),this.key=l,this.connection=t.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,h)=>{this.stops.push(_l(t,e,c,u=>{u.failed||h(u.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let t of this.stops)t();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};function Da(a,t){let e=a?.precipitation_unit;return e!=null&&e!==""?String(e):t?.accumulated_precipitation||(t?.length==="mi"?"in":"mm")}var Ra=36e5,Fa=a=>String(a??"").toLowerCase().replace(/\s+/g,"");function Qu(a,t){let e=Fa(t),n=a;return e.startsWith("in")||e.includes("inch")?n*=25.4:e.startsWith("cm")&&(n*=10),/\/(d|day|24h)$/.test(e)&&(n/=24),n}function Sl(a,t){let e=Fa(t);return e.startsWith("in")||e.includes("inch")?a*25.4:e.startsWith("cm")?a*10:a}function vl(a,t){let e=Fa(t);return e.startsWith("mi")?a*1.609344:e.startsWith("ft")?a*3048e-7:e==="m"||e.startsWith("met")?a/1e3:a}var te=a=>{let t=typeof a=="number"?a:typeof a=="string"&&a.trim()!==""?Number(a):NaN;return Number.isFinite(t)?t:void 0};function Cl(a,t){let e=(a??[]).map(i=>({e:i,t:Date.parse(i.datetime)})).filter(i=>!isNaN(i.t)).sort((i,r)=>i.t-r.t);for(let i=0;i<e.length;i++){let r=e[i+1]?.t??e[i].t+Ra;if(e[i].t<=t&&t<Math.min(r,e[i].t+Ra))return e[i].e}let n=e[0];return n&&n.t>t&&n.t-t<=Ra?n.e:void 0}function Al(a,t,e){let n=a?.states??{},r=(t.entity?n[t.entity]:void 0)?.attributes??{},o={},s=(()=>{try{return Pn(t)}catch{return[]}})(),l=y=>{let w=s.find(b=>b.type===y&&b.entity),_=w?.entity?n[w.entity]:void 0;if(!w?.entity||!_)return;if(w.entity.startsWith("weather.")){let b=_.attributes??{},C=te(b[Mn[y]??""]);return C===void 0?void 0:{value:C,unit:void 0,attrs:b}}let v=te(_.state);return v===void 0?void 0:{value:v,unit:_.attributes?.unit_of_measurement}},d=t.rain_rate_entity?n[t.rain_rate_entity]:void 0,c=te(d?.state);if(c!==void 0&&c>0)o.rate=Qu(c,d?.attributes?.unit_of_measurement);else{let y=te(e?.precipitation);y!==void 0&&y>0&&(o.rate=Sl(y,Da(r,a?.config?.unit_system)))}let h=l("cloud_cover")?.value??te(r.cloud_coverage)??te(e?.cloud_coverage);h!==void 0&&(o.cloud=Math.min(100,Math.max(0,h)));let u=l("visibility");if(u)o.visibility=vl(u.value,u.attrs?u.attrs.visibility_unit??"km":u.unit);else{let y=te(r.visibility);y!==void 0&&(o.visibility=vl(y,r.visibility_unit??"km"))}let f=t.wind_speed_sensor_entity?n[t.wind_speed_sensor_entity]:void 0,p=te(f?.state),m=r.wind_speed_unit;p!==void 0?o.wind=De(p,f?.attributes?.unit_of_measurement):te(r.wind_speed)!==void 0?o.wind=De(te(r.wind_speed),m):te(e?.wind_speed)!==void 0&&(o.wind=De(te(e?.wind_speed),m));let g=l("gust");return g?o.gust=De(g.value,g.attrs?g.attrs.wind_speed_unit:g.unit):te(r.wind_gust_speed)!==void 0?o.gust=De(te(r.wind_gust_speed),m):te(e?.wind_gust_speed)!==void 0&&(o.gust=De(te(e?.wind_gust_speed),m)),o}function Tl(a,t,e){let n={},i=t?.wind_speed_unit,r=te(a.precipitation);r!==void 0&&r>0&&(n.rate=Sl(r,Da(t,e)));let o=te(a.cloud_coverage);o!==void 0&&(n.cloud=Math.min(100,Math.max(0,o)));let s=te(a.wind_speed);s!==void 0&&(n.wind=De(s,i));let l=te(a.wind_gust_speed);return l!==void 0&&(n.gust=De(l,i)),n}function Xt(a,t,e=!1){if(t<=a[0][0])return a[0][1];let n=a[a.length-1];if(t>=n[0])return n[1];for(let i=1;i<a.length;i++){let[r,o]=a[i-1],[s,l]=a[i];if(t<=s){let d=e?Math.log(t/r)/Math.log(s/r):(t-r)/(s-r);return o+(l-o)*d}}return n[1]}var qn=(a,t,e)=>Math.min(e,Math.max(t,a)),Zt=["light","rain","storm","pouring"],Ju=[.5,2.5,8],bl=1.15,eh=[[.1,6],[.3,10],[1.5,18],[4,24],[10,32],[30,44]],th={"light-rain":[.05,.3,2.4],rainy:[.1,1.5,60],stormy:[1,4,60],pouring:[8,10,60],"snowy-rainy":[.1,1.5,60]},nh={"light-rain":"light",rainy:"rain",stormy:"storm",pouring:"pouring","snowy-rainy":"rain"},ih={light:10,rain:18,storm:24,pouring:32},rh=[[.1,.4],[.3,.6],[1,1],[2.5,1.6],[5,2.2]],ah=[[0,2],[25,3],[50,4],[75,6],[100,8]],oh={"partly-cloudy":[3,5],cloudy:[4,8]},sh=[[.2,1],[1,.8],[3,.6],[8,.45]],lh=[[10,.5],[20,.75],[30,1],[50,1.6],[80,2.4]],dh=[[0,1],[10,.85],[25,.6],[50,.35],[75,.25]];function Ha(a,t){let e=t?Zt.indexOf(t):-1,n=0;return Ju.forEach((i,r)=>{let o=e<0?i:r<e?i/bl:i*bl;a>=o&&(n=r+1)}),Zt[n]}function ch(a){let t=Math.max(1,Math.floor(a*.3)),e=Math.max(1,Math.round(a*.3));return[t,e,Math.max(1,a-t-e)]}var xl={rain:{kind:"rain",drops:18},snow:1,sleet:1,clouds:[1,1,2],fog:1,leaves:1,gusts:0,stars:1};function Wa(a,t,e){let n={...xl,rain:{kind:nh[a]??"rain",drops:0},clouds:[...xl.clouds]};n.rain.drops=ih[n.rain.kind];let i=th[a];if(i&&t.rate!==void 0){let o=qn(t.rate,i[0],i[2]),s=Zt.indexOf(Ha(i[0])),l=Zt.indexOf(Ha(i[2])),d=Zt[qn(Zt.indexOf(Ha(o,e)),s,l)];n.rain={kind:d,drops:Math.round(Xt(eh,o,!0))}}if(t.rate!==void 0){let o=Xt(rh,qn(t.rate,.1,10),!0);n.snow=Math.round(o*100)/100,n.sleet=n.snow}let r=oh[a];if(r&&t.cloud!==void 0&&(n.clouds=ch(qn(Math.round(Xt(ah,t.cloud)),r[0],r[1]))),t.visibility!==void 0&&(n.fog=Math.round(Xt(sh,t.visibility)*100)/100),t.wind!==void 0&&(n.leaves=Math.round(Xt(lh,t.wind)*100)/100),t.gust!==void 0){let o=t.wind!==void 0?(t.gust-t.wind)/25:(t.gust-30)/40;n.gusts=Math.round(qn(o,0,1)*100)/100}return t.cloud!==void 0&&(n.stars=Math.round(Xt(dh,t.cloud)*100)/100),n}var uh=["compact","layout","show_forecast","show_days","show_clock","show_date","hero","show_attributes","grid_options"];var hh=[{id:"standard",label:"Standard",description:"The sky, the temperature and four readings",options:{}},{id:"simple",label:"Simple",description:"The sky, the temperature and the condition, nothing else",options:{show_attributes:!1}},{id:"forecast",label:"Forecast",description:"The next hours under the readings; drag through them",options:{show_forecast:!0}},{id:"full",label:"Full info",description:"The time and date, the hours and the week",options:{show_forecast:!0,show_days:!0,show_clock:!0,show_date:!0}},{id:"strip",label:"Strip",description:"One line, to sit under other cards",options:{compact:!0}},{id:"bedside",label:"Bedside",description:"A clock that goes red on black at night",options:{layout:"nightstand"}},{id:"wall",label:"Wall",description:"A panel to read across the room",options:{show_forecast:!0,show_clock:!0,show_date:!0,grid_options:{columns:"full",rows:10}}}];var za=a=>hh.find(t=>t.id===a);function kl(a,t){let e=za(t);if(!e)return a;let n={...a};for(let i of uh)delete n[i];return{...n,...e.options}}Ci();var El=a=>`Wind from ${Math.round(a)}\xB0`,Ml=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",mh=18,fh=450,ph=1600,gh=["standard","forecast","full","strip"];function Gn(a,t){return t?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var yh=400,wh=120,_h=220,vh=24;window.AnimatedWeatherCardGsap=Vr;var Pl=["regular","compact","short","tight","minimal"],bh=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...Pl.map(a=>[a,"none"])],xh=new Set(["tap_action","hold_action","double_tap_action","readings","uv_levels","aqi_levels","show_attributes","show_attribute_labels","show_attribute_icons",...ba]),Zi=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Vt(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Hi;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new $n(()=>this.extras?.update());this.engineHours=new $n(()=>this.syncEngine());this.lastPicture=null;this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let e=Ki();e!==this.devClock&&(this.devClock=e,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0),this.syncEngine())};this.devClock=0;this.onNeedle=e=>{let n=e.detail;this.following||this.forecastOn()||n?.at==null||n.source===this||n.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(e,n=[],i=[]){let r=[...n,...i,...Object.keys(e?.states??{})];return Gn(r.find(o=>o.startsWith("weather."))??Ur.entity,e)}actionsConfig(){if(this.surface==="view")return{};let e=Bi(this.config,this.config?.entity);return e.tap_action?e:this.config?.layout==="nightstand"&&this.surface==="card"?{...e,tap_action:{action:"none"}}:this.forecastOn()?{...e,tap_action:{action:"forecast"}}:e}see(e){return this.placeView.see(Yi(e,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&zn(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let e=this.isConnected&&this.surface!=="view";la(this,e?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}newController(){let e=new Oi(this,this.config,()=>this.animationsPaused,this.timeOfDayManager);return li(this.config)==="auto"&&(e.amountsAt=n=>this.hourAmounts(n)),e}weatherClassNow(){let e=this.config,n=e?.entity?this._hass?.states[e.entity]:void 0;if(!(!e||!n))return gn(n.state.toLowerCase(),e.sunrise_hour,e.sunset_hour,this._hass?.config?.time_zone,{clock:!!e.enable_day_night_cycle,night:this.skyIsNight()})}engineAuto(){return!!this.config&&li(this.config)==="auto"&&this.weatherShown()}enginePicture(){let e=this.engineAuto()?this.weatherClassNow():void 0;if(!e||!this.config)return null;let n=Cl(this.engineHours.hourly,yt());return Wa(e,Al(this._hass,this.config,n),this.lastPicture?.rain.kind)}hourAmounts(e){if(!this.engineAuto()||!this.config)return;let n=this.config.entity?this._hass?.states[this.config.entity]:void 0,i=gn(String(e.condition??"").toLowerCase(),this.config.sunrise_hour,this.config.sunset_hour,this._hass?.config?.time_zone);return Wa(i,Tl(e,n?.attributes,this._hass?.config?.unit_system))}syncEngine(){clearTimeout(this.engineTimer),this.engineTimer=void 0;let e=this.syncEngineHours(),n=e?this.enginePicture():null;this.lastPicture=n;let i=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(this.config?.animate===!1||i){let r=this.querySelector(".animation-layer .stars-field");r&&Mi(r,n?.stars??1)}else this.animationController?.setAmounts(n);e&&this.engineHours.hourly?.length&&(clearTimeout(this.engineTimer),this.engineTimer=setTimeout(()=>this.syncEngine(),36e5-yt()%36e5+1e3))}syncEngineHours(){let e=this.isConnected&&this.engineAuto();return e?this.engineHours.sync(this._hass,this.config?.entity,{hourly:!0,daily:!1}):this.engineHours.stop(),e}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let e=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:e!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let e=window.AnimatedWeatherCardForecast;if(!e){bt("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}e.version===2&&(this.extras=e.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Ht,phase:()=>this.currentSkyPhase(),current:()=>{let e=this.config?.outdoor_sensor_entity||this.config?.entity,n=Number(e?this.config?.outdoor_sensor_entity?this._hass?.states[e]?.state:this._hass?.states[e]?.attributes?.temperature:NaN);return isFinite(n)?n:void 0},temperature:e=>{let n=this.config?Gt(this.config):0;return me(n?e:Math.round(e),this._hass,n).replace(/^-/,"\u2212")},conditionName:e=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:e,attributes:{},last_changed:"",last_updated:""})??e,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(e=>(e.type==="aqi"||e.type==="sensor")&&!!e.entity).map(e=>{let n=Sa(this._hass,this.config,e);return{label:n.label,value:n.value??n.text,...n.word?{word:n.word}:{},...n.level?{level:n.level}:{}}}),reading:(e,n)=>{if(!this.config)return null;if(e==="rain_today"||e==="rain_now"){let o=e==="rain_now"?vt(this._hass,this.config.rain_rate_entity,"mm/h"):vt(this._hass,this.config.rain_entity,"mm");return!o||e==="rain_now"&&!(o.value>0)?null:{label:$i(this._hass,e==="rain_now"),value:kn(o.value,o.unit,this._hass)}}if(e!=="uv")return null;let i=n??ga(this._hass,this.config);if(i===null||!isFinite(i))return null;let r=An(i,Cn(this.config));return{label:$(this._hass,"uv_index"),value:me(Math.max(0,Math.round(i)),this._hass),word:ya(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("You need to define an entity or enable dev mode");let n=p=>p===void 0||typeof p=="number"&&isFinite(p)&&p>=0&&p<=23;if(!n(e.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${e.sunrise_hour})`);if(!n(e.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${e.sunset_hour})`);let i=JSON.stringify(e);if(this.config&&i===this.configGiven)return;let r=this.configBefore,o=!!r&&[...new Set([...Object.keys(r),...Object.keys(e)])].filter(p=>JSON.stringify(r[p])!==JSON.stringify(e[p])).every(p=>xh.has(p));this.configGiven=i,this.configBefore={...e};let s=this.placeView.set(e),l=this.placeView.place?.sunId;l&&(e={...e,sun_entity:l}),e=Us(e),e.layout==="nightstand"&&e.compact&&this.surface==="card"&&(e={...e,compact:!1});let d=Pn(e),c=JSON.stringify(d)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(p=>this.config?.[p]!==e[p]);this.readingList=d;let h=!!this.config?.dev_mode!=!!e.dev_mode;e.dev_mode&&(e.entity||(e={...e,entity:hl}),Nn().then(()=>this.devChanged()).catch(p=>console.warn(`Animated Weather Card: ${p.message}`)));let u=this.config?.auto_pause;this.config?.flights_entity!==e.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==e.entity&&(this.following=!1),this.config=e,this.markDev(),c&&this.redrawRow(),(s||h)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let f=this.querySelector(".weather-info");if(f&&Dn(f,this.actionsConfig(),"group"),this.isConnected&&!o){this.initializeTimeOfDayManager();let p=this.animationController;this._animationGeneration++,this.animationController=this.newController(),p&&p.stopAllAnimations().catch(m=>k(this.config?.dev_mode,"Error stopping previous animation controller:",m))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras(),this.syncEngine()),this.isConnected&&!!e.auto_pause!=!!u&&(this.removeVisibilityTracking(),this.setupVisibilityTracking()),!o&&this.isConnected&&this._hass&&this.querySelector(".animated-weather-card")&&(this.render(),this.initializeAnimations())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Ut,this.onNeedle),window.addEventListener(Yt,this.devChanged),this.surface!=="view"&&Kt().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=this.newController())),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=this.newController()),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let n=this.querySelector(".animated-weather-card");n&&(n.classList.remove("no-transitions"),n.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;jr(this),this.stopPlanes();let e=this.config.color_palette||"default",n;try{n=wa(this.hass,this.config)}catch(y){let w=y?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${xt("alert","awc-empty-icon")}
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
            `;return}let{temperature:i,weatherCondition:r,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:h}=n,u=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let f=!!this.config.compact,p=this.heroClock(),m=ul(this.config),g=this.rowHtml(u);this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions${this.surface==="view"?"":" loading"} ${e==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${f?' data-variant="compact"':""} style="${M(m)}">
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
                ${p?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>`}
                ${f?`<div class="compact-meta">${this.config.show_clock&&!p?'<span class="awc-clock"></span>':""}${this.config.show_date?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,d))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(d,c,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${f?"":g}
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
        ${Fs()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(e,n){if(e)return"";let i=this.config?.show_location!==!1&&n?`<span class="awc-place">${M(n)}</span>`:"",r=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return i||r||o?`<div class="location">${r}${o}${i}</div>`:""}heroTime(){let{time:e,period:n}=zs(Te(),this._hass);return n?`${M(e)}<span class="awc-ampm">${M(n)}</span>`:M(e.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let e=this.querySelector("ha-card");if(!e)return;let n=this.config?.spill_particles!==!1?"visible":"hidden";e.style.setProperty("overflow",n,"important");let i=()=>{let r=e.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${n} !important; }`};i(),!e.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(i))}transitionCondition(){let e=this.querySelector(".animated-weather-card");if(!e||e.classList.contains("loading")){this.initializeAnimations();return}e.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},yh)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let e=window.AnimatedWeatherCardNote;if(e){this.noteWriter??(this.noteWriter=new e(this)),this.noteWriter.start();return}bt("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(e){this.writtenNote=e,this.updateNote()}noteWriting(e){this.noteComing!==e&&(this.noteComing=e,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let e=this.config.note_entity?Gs(this._hass,this.config):this.writtenNote,n=e?Bs(e,this.config):null;if(!e||n===null)return e;let i=n-yt();return i<=0?null:(i<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),i+50)),e)}noteHtml(e){return`<p class="weather-note"${e?"":" hidden"}><span class="note-long">${M(e?.note??"")}</span><span class="note-short">${M(e?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let e=this.querySelector(".weather-note");if(!e)return;let n=e.querySelector(".note-long"),i=e.querySelector(".note-short"),r=e.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=e.querySelector(".note-phrase"),d=$(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||e.hidden?(l&&(l.textContent=d),e.dataset.writing="",e.setAttribute("aria-busy","true"),e.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}r&&(delete e.dataset.writing,e.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!e.hidden||r)&&(e.hidden=!0,this.applySizeState());return}if(e.hidden||r){this.noteTyping?.finish(),n&&(n.textContent=o.note),i&&(i.textContent=o.line),e.hidden=!1,this.applySizeState(),r&&this.typeIn(e);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(n,o.note,s),this.fadeThrough(i,o.line,s)}compactMeta(e,n){return[this.config?.show_location!==!1?e:"",n?`${$(this._hass,"feels_like")} ${n}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let e=this.config?.indoor_style,n=M($(this._hass,"indoors")),i=xt("indoor","indoor-icon");if(e==="icon")return`${i}<span class="awc-visually-hidden">${n} </span>`;let r=`<span class="indoor-label">${n}</span>`;return e==="both"?i+r:r}heroMetaHtml(e,n,i){let r=[];e&&r.push(`<span class="feels-like">${M($(this._hass,"feels_like"))} ${M(e)}</span>`);let o=[n,i].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}attachEventListeners(){this.mountNoteWriter();let e=this.querySelector(".weather-info");if(e&&(Vi(e,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Dn(e,this.actionsConfig(),"group")),!this.isInitializing){let n=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(n)}}setAnimationsPaused(e){this.animationsPaused=e,this.toggleAttribute("data-paused",e),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),di(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),ci(this),this.flyHeldPlanes())}getWeatherSettings(e){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return K(this.config,e)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let e=++this._animationGeneration;try{if(!this.config)return;let n=this.config,i=this.querySelector(".animated-weather-card");if(!i||(this.clearAnimations(),!this.hass||!n.entity)||!this.hass.states[n.entity])return;let o=this.weatherClassNow(),s=(n.color_palette||"default")==="theme"?"theme-colors":"",l=i.classList.contains("loading"),d=(...h)=>{i.className=["animated-weather-card",o,...h,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{i.classList.remove("no-transitions"),i.classList.add("transitions-enabled")}))},c=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(n.animate===!1||c||!this.weatherShown()){let h=o==="clear-night"&&this.surface!=="forecast";d(n.animate===!1?"static":"",h?"individual-stars-active":"");let u=i.querySelector(".animation-layer");h&&u&&oa(u,aa(K(n).cloudCount,i.clientWidth),{moon:!0,still:!0,words:vn(i),share:this.enginePicture()?.stars??1}),this.currentWeatherClass=o;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&e===this._animationGeneration){if(d(),this.animationsPaused){this.currentWeatherClass=o,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.syncEngine(),this.animationController.applyWeatherCondition(o)),this.startPlanes()}},n.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),jr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let n=this.querySelector(".animated-weather-card"),i=this.querySelector(".animation-layer");i&&(wn(this),i.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),i.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),n&&(yi(n),ds(n));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),Kr(this.pendingTimeouts)}set hass(e){this.homeHass=Wn(e),e=this.see(e);let n=this._hass;if(this._hass=e,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.syncEngineHours(),this.extras?.update(),!n){this.render(),this.initializeAnimations();return}if($t(n)!==$t(e)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let i=n.states[this.config.entity],r=e.states[this.config.entity];if(!i||!r){this.render(),this.initializeAnimations();return}if(i.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(i.attributes[d])!==s(r.attributes[d])){o=!0;break}if(this.config.note_entity&&n.states[this.config.note_entity]!==e.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...Ks(this.readingList)];for(let c of d){if(!c)continue;let h=n.states[c],u=e.states[c];if(h?.state!==u?.state||h?.attributes?.unit_of_measurement!==u?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";n.states[d]!==e.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let e;try{e=wa(this._hass,this.config)}catch{return}let{temperature:n,weatherCondition:i,windSpeedValue:r,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=e;this.currentWindSpeedValue=r;let c=!!this.extras?.away(),h=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,u=h&&this.extras?.conditionText(h)||i,f=(y,w)=>{y&&y.textContent!==w&&(y.textContent=w)};c||(this.fadeThrough(this.querySelector(".temperature-value"),n),this.fadeThrough(this.querySelector(".weather-desc"),u));let p=this.updatePressureTrend(o);c||this.updateRow(p);let m=this.querySelector(".compact-meta .awc-meta-text");m&&f(m,this.compactMeta(e.location,s)),f(this.querySelector(".location .awc-place"),e.location);let g=this.querySelector(".hero-meta");if(g){let y=this.heroMetaHtml(s,l,d),w=g.querySelector(".awc-line");Array.from(g.children).filter(v=>v!==w).map(v=>v.outerHTML).join("")!==y&&(g.innerHTML=y,w&&g.prepend(w))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(r),this.syncEngine()}rowItem(e,n,i,r){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?xt(i.icon,"attribute-icon"):""}${s?`<span>${M(i.label)}</span>`:""}</div>`:"",d=e.type==="wind"&&typeof i.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${i.bearing+180}deg);" aria-label="${El(i.bearing)}"></ha-icon>`:e.type==="pressure"&&r?`<ha-icon class="pressure-trend ${r}" icon="${Ml(r)}" aria-label="Pressure ${r}"></ha-icon>`:"",c=i.level?` data-level="${M(i.level)}"`:"";return`<div class="attribute" data-kind="${e.type}" data-i="${n}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${i.html}</span>${d}</div></div>`}shownReadings(){return this.config?Ys(this.readingList).map(({r:e,i:n})=>({r:e,i:n,v:Sa(this._hass,this.config,e)})).filter(({r:e,v:n})=>e.type!=="sun"||n.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(e){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:i,i:r,v:o})=>this.rowItem(i,r,o,e)).join("")}</div>`}redrawRow(){let e=this.querySelector(".animated-weather-card .weather-info");if(!e||this.config?.compact)return;let n=e.querySelector(":scope > .weather-attributes"),i=this.rowHtml(this._pressureTrend??null).trim();if(n&&i){let r=document.createRange().createContextualFragment(i).firstElementChild;n.querySelectorAll(":scope > .attribute").forEach(o=>o.remove()),n.prepend(...Array.from(r.querySelectorAll(":scope > .attribute"))),n.classList.toggle("values-only",r.classList.contains("values-only"))}else if(n)n.remove();else if(i){let r=e.querySelector(":scope > .fc-section");r?r.insertAdjacentHTML("beforebegin",i):e.insertAdjacentHTML("beforeend",i)}this.applySizeState()}updateRow(e){let n=this.querySelector(".weather-attributes");if(!n||!this.config)return;let i=this.shownReadings();if([...n.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==i.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of i){let d=n.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let h=d.querySelector(".attribute-label > span");h&&h.textContent!==l.label&&(h.textContent=l.label),el(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:El(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",e?{icon:Ml(e),label:`Pressure ${e}`,className:e}:null)}}updatePressureTrend(e){return typeof e!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=e:Math.abs(e-this._lastPressureValue)>=.5&&(this._pressureTrend=e>this._lastPressureValue?"rising":"falling",this._lastPressureValue=e),this._pressureTrend??null)}syncValueIcon(e,n,i){let r=e.querySelector(".attribute-value");if(!r)return;let o=r.querySelector(`.${n}`);if(!i){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[n,i.className].filter(Boolean).join(" "),o.getAttribute("icon")!==i.icon&&o.setAttribute("icon",i.icon),o.setAttribute("aria-label",i.label),o.style.transform=i.transform??""}typeIn(e){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let n=Array.from(e.querySelectorAll(".note-long, .note-short")).map(u=>{let f=u.textContent??"",p=document.createElement("span");p.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=f,u.replaceChildren(p,m),{span:u,text:f,typed:p,rest:m}}),i=Math.max(0,...n.map(u=>u.text.length)),r=Math.min(ph,Math.max(fh,i*mh)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:n.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of n)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let f of n){let p=Math.round(u*f.text.length);f.typed.textContent=f.text.slice(0,p),f.rest.textContent=f.text.slice(p)}u<1?d=o(h):c.finish()};this.noteTyping=c,d=o(h)}fadeThrough(e,n,i){if(!e)return;let r=this.heroTextPending.get(e);if((r??e.textContent)===n)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof e.animate!="function"||o){e.textContent=n,i?.();return}if(this.heroTextPending.set(e,n),r!==void 0)return;let s=()=>{let d=this.heroTextPending.get(e);this.heroTextPending.delete(e),d!==void 0&&(e.textContent=d),i?.()},l=e.animate([{opacity:1},{opacity:0}],{duration:wh,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),e.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:_h,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let e=window.AnimatedWeatherCardPlanes;if(!e){bt("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}let n=new e(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=n,n.start().then(()=>{if(this.animationsPaused)n.pause();else if(this.planes===n){this.flyHeldPlanes();let i=this.askedPlanes;this.askedPlanes=void 0,i&&this.flyPlanes(i)}}).catch(i=>{console.error("Failed to start plane fly-overs:",i),this.planes===n&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let e=this.planes;e&&(this.planes=void 0,e.destroy().catch(n=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",n)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let e=this._hass?.states[this.config.flights_entity];if(e&&e===this.lastFlightsState)return;this.lastFlightsState=e;let n=!this.flightTracker.seeded,i=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(da(this._hass,this.config.flights_entity),i);r.length&&(n&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let e=this.heldPlanes;if(!e||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let n=(da(this._hass,this.config?.flights_entity)??[]).filter(i=>!i.onGround&&e.has(i.id));n.length&&this.flyPlanes(n)}flyOver(e){let n=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||n)){if(this.planes){this.flyPlanes(e);return}this.devPlanes=!0,this.askedPlanes=e,this.startPlanes()}}flyPlanes(e){!this.planes||this.animationsPaused||this.planes.flyOver(e,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let e=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;e!==this.animationsPaused&&this.setAnimationsPaused(e)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(e=>{this.offscreen=!e[e.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),la(this),window.removeEventListener(Ut,this.onNeedle),window.removeEventListener(Yt,this.devChanged),Kt().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.engineHours.stop(),clearTimeout(this.engineTimer),this.engineTimer=void 0,this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Kr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Fi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(e=>{this.onTimeOfDayChanged(e)}),this.config?.enable_day_night_cycle){let e=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(e)}}onTimeOfDayChanged(e){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${e.timePhase}`),this.updateDayNightBackground(e))}updateDayNightBackground(e){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let e=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!e)return"day";let n=e.attributes?.elevation;return Si(typeof n=="number"?n:Number(n),!!e.attributes?.rising,e.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let e=this.querySelector(".animated-weather-card");if(!e)return;let n=this.currentSkyPhase();e.dataset.phase!==n&&(e.dataset.phase=n),this.applyMoon(e)}applyMoon(e){let n=e.querySelector(".animation-layer");if(!n)return;let i=this.config?.moon_entity,r=tl(Te(),i?this._hass?.states[i]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(n.dataset.moon===s)return;n.dataset.moon=s;let l=nl(r,o);n.style.setProperty("--awc-moon-mask",l.mask),n.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let e=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(e)?e:void 0}applySizeState(){let e=this.querySelector(".animated-weather-card"),n=e?.querySelector(".weather-info");if(!e||!n)return;e.toggleAttribute("data-wall-frame",this.surface==="card"&&!!this.config?.show_forecast&&this.config?.layout!=="nightstand"&&xs(e)),cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>Ls(e));let i=e.querySelector(".main-weather-info"),r=e.querySelector(".weather-attributes");if(e.dataset.height="regular",e.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let m=e.dataset.metrics;e.dataset.metrics="row";let g=Array.from(r.children),y=parseFloat(getComputedStyle(r).columnGap)||0,w=g.reduce((b,C)=>b+C.getBoundingClientRect().width,0)+y*Math.max(0,g.length-1),_=r.clientWidth-w,v=_<-.5||m==="grid"&&_<vh;e.dataset.metrics=v?"grid":"row"}let o=e.dataset.variant==="compact",s=o?e.querySelector(".weather-desc"):null,l=e.querySelector(".weather-note"),d=()=>n.scrollHeight>n.clientHeight+1||!o&&!!i&&i.scrollHeight>i.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,h=!!l&&!l.hidden?bh:Pl.map(m=>[m,void 0]),u=([m,g])=>{e.dataset.height=m,g?e.dataset.note=g:delete e.dataset.note},f=this.extras,p=f?.levels()??[];if(!f||!p.length){for(let m of h)if(u(m),!d())break;f?.fitted();return}for(let m=0;m<p.length;m++){f.setLevel(p[m]);let g=m===p.length-1;for(let y of h){if(!g&&!["regular","close","compact"].includes(y[0]))break;if(u(y),!d()&&(g||f.levelOk(d))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let e=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(jt(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+e:4+e}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let e=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return e?Math.ceil((e*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let e=3;return this.config?.show_indoor!==!1&&(e+=1),this.config?.show_attributes!==!1&&(e+=1),this.noteEnabled()&&(e+=1),this.config?.show_forecast&&(e+=3+this.dayRows()),e}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Rn("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Zi);var Na=class extends Zi{constructor(){super(),this.surface="forecast"}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(t)}gridRows(){if(this.config?.compact)return 2;let t=this.config?.show_hours!==!1&&jt(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),e=Math.max(0,Math.min(10,this.config?.forecast_days??7));return t?e<=3?5:7:Math.max(3,Math.ceil((58+e*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(t,e=[],n=[]){let i=[...e,...n,...Object.keys(t?.states??{})];return Gn(i.find(r=>r.startsWith("weather."))??Ur.entity,t)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await Rn("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",Na);customElements.define("animated-weather-dev-card",Ui);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,t)=>t.startsWith("weather.")?gh.map(e=>({label:za(e).label,config:kl({type:"custom:animated-weather-card",...Gn(t,a)},e)})):null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,t)=>t.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Gn(t,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Gn(t,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=Ht("sunny","day"),t=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Xo} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${Ye(Re(Ft))}`,"border-radius: 4px 0 0 4px",...t].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...t].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
