"use strict";(()=>{function Ne(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Aa(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var ge={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ei={duration:.5,overwrite:!1,delay:0},Jn,ne,$,ke=1e8,H=1/ke,Gn=Math.PI*2,Us=Gn/4,Ys=0,ka=Math.sqrt,Ks=Math.cos,js=Math.sin,te=function(t){return typeof t=="string"},U=function(t){return typeof t=="function"},Ie=function(t){return typeof t=="number"},qi=function(t){return typeof t>"u"},Oe=function(t){return typeof t=="object"},fe=function(t){return t!==!1},er=function(){return typeof window<"u"},Oi=function(t){return U(t)||te(t)},Ea=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},se=Array.isArray,Xs=/random\([^)]+\)/g,Zs=/,\s*/g,wa=/(?:-?\.?\d|\.)+/gi,tr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ct=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ir=/[+-]=-?[.\d]+/,Qs=/[^,'"\[\]\s]+/gi,Js=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,G,Le,Bn,nr,xe={},zi={},Ma,Pa=function(t){return(zi=xt(t,xe))&&le},Gi=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ti=function(t,e){return!e&&console.warn(t)},La=function(t,e){return t&&(xe[t]=e)&&zi&&(zi[t]=e)||xe},ii=function(){return 0},el={suppressEvents:!0,isStart:!0,kill:!1},Fi={suppressEvents:!0,kill:!1},tl={suppressEvents:!0},rr={},Ke=[],Vn={},Da,me={},zn={},_a=30,Hi=[],ar="",or=function(t){var e=t[0],i,n;if(Oe(e)||U(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Hi.length;n--&&!Hi[n].targetTest(e););i=Hi[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new cr(t[n],i)))||t.splice(n,1);return t},je=function(t){return t._gsap||or(Ee(t))[0]._gsap},sr=function(t,e,i){return(i=t[e])&&U(i)?t[e]():qi(i)&&t.getAttribute&&t.getAttribute(e)||i},de=function(t,e){return(t=t.split(",")).forEach(e)||t},Y=function(t){return Math.round(t*1e5)/1e5||0},q=function(t){return Math.round(t*1e7)/1e7||0},ut=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},il=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Wi=function(){var t=Ke.length,e=Ke.slice(0),i,n;for(Vn={},Ke.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},lr=function(t){return!!(t._initted||t._startAt||t.add)},Oa=function(t,e,i,n){Ke.length&&!ne&&Wi(),t.render(e,i,n||!!(ne&&e<0&&lr(t))),Ke.length&&!ne&&Wi()},Fa=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qs).length<2?e:te(t)?t.trim():t},Ha=function(t){return t},Se=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},nl=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},xt=function(t,e){for(var i in e)t[i]=e[i];return t},va=function a(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Oe(e[i])?a(t[i]||(t[i]={}),e[i]):e[i]);return t},Ni=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Zt=function(t){var e=t.parent||G,i=t.keyframes?nl(se(t.keyframes)):Se;if(fe(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},rl=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Ra=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],s;if(r)for(s=e[r];o&&o[r]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Bi=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Xe=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},st=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},al=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Un=function(t,e,i,n){return t._startAt&&(ne?t._startAt.revert(Fi):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},ol=function a(t){return!t||t._ts&&a(t.parent)},ba=function(t){return t._repeat?St(t._tTime,t=t.duration()+t._rDelay)*t:0},St=function(t,e){var i=Math.floor(t=q(t/e));return t&&i===t?i-1:i},$i=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Vi=function(t){return t._end=q(t._start+(t._tDur/Math.abs(t._ts||t._rts||H)||0))},Ui=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=q(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Vi(t),i._dirty||st(i,t)),t},za=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=$i(t.rawTime(),e),(!e._dur||ai(0,e.totalDuration(),i)-e._tTime>H)&&e.render(i,!0)),st(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-H}},De=function(t,e,i,n){return e.parent&&Xe(e),e._start=q((Ie(i)?i:i||t!==G?Ae(t,i,e):t._time)+e._delay),e._end=q(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ra(t,e,"_first","_last",t._sort?"_start":0),Yn(e)||(t._recent=e),n||za(t,e),t._ts<0&&Ui(t,t._tTime),t},Wa=function(t,e){return(xe.ScrollTrigger||Gi("scrollTrigger",e))&&xe.ScrollTrigger.create(e,t)},Na=function(t,e,i,n,r){if(mr(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Da!==pe.frame)return Ke.push(t),t._lazy=[r,n],1},sl=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},Yn=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ll=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&sl(t)&&!(!t._initted&&Yn(t))||(t._ts<0||t._dp._ts<0)&&!Yn(t))?0:1,s=t._rDelay,l=0,d,c,h;if(s&&t._repeat&&(l=ai(0,t._tDur,e),c=St(l,s),t._yoyo&&c&1&&(o=1-o),c!==St(t._tTime,s)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||ne||n||t._zTime===H||!e&&t._zTime){if(!t._initted&&Na(t,e,n,i,l))return;for(h=t._zTime,t._zTime=e||(i?H:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,d=t._pt;d;)d.r(o,d.d),d=d._next;e<0&&Un(t,e,i,!0),t._onUpdate&&!i&&be(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&be(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xe(t,1),!i&&!ne&&(be(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},dl=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Ct=function(t,e,i,n){var r=t._repeat,o=q(e)||0,s=t._tTime/t._tDur;return s&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:q(o*(r+1)+t._rDelay*r):o,s>0&&!n&&Ui(t,t._tTime=t._tDur*s),t.parent&&Vi(t),i||st(t.parent,t),t},xa=function(t){return t instanceof oe?st(t):Ct(t,t._dur)},cl={_start:0,endTime:ii,totalDuration:ii},Ae=function a(t,e,i){var n=t.labels,r=t._recent||cl,o=t.duration()>=ke?r.endTime(!1):t._dur,s,l,d;return te(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),d=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(s<0?r:i).totalDuration()/100:1)):s<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),d&&i&&(l=l/100*(se(i)?i[0]:i).totalDuration()),s>1?a(t,e.substr(0,s-1),i)+l:o+l)):e==null?o:+e},Qt=function(t,e,i){var n=Ie(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],s,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(s=o,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=fe(l.vars.inherit)&&l.parent;o.immediateRender=fe(s.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Z(e[0],o,e[r+1])},Ze=function(t,e){return t||t===0?e(t):e},ai=function(t,e,i){return i<t?t:i>e?e:i},re=function(t,e){return!te(t)||!(e=Js.exec(t))?"":e[1]},ul=function(t,e,i){return Ze(i,function(n){return ai(t,e,n)})},Kn=[].slice,$a=function(t,e){return t&&Oe(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Oe(t[0]))&&!t.nodeType&&t!==Le},hl=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return te(n)&&!e||$a(n,1)?(r=i).push.apply(r,Ee(n)):i.push(n)})||i},Ee=function(t,e,i){return $&&!e&&$.selector?$.selector(t):te(t)&&!i&&(Bn||!Tt())?Kn.call((e||nr).querySelectorAll(t),0):se(t)?hl(t,i):$a(t)?Kn.call(t,0):t?[t]:[]},jn=function(t){return t=Ee(t)[0]||ti("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ee(e,i.querySelectorAll?i:i===t?ti("Invalid scope")||nr.createElement("div"):t)}},Ia=function(t){return t.sort(function(){return .5-Math.random()})},qa=function(t){if(U(t))return t;var e=Oe(t)?t:{each:t},i=lt(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},s=n>0&&n<1,l=isNaN(n)||s,d=e.axis,c=n,h=n;return te(n)?c=h={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],h=n[1]),function(u,p,g){var m=(g||e).length,f=o[m],w,y,_,v,b,S,C,A,T;if(!f){if(T=e.grid==="auto"?0:(e.grid||[1,ke])[1],!T){for(C=-ke;C<(C=g[T++].getBoundingClientRect().left)&&T<m;);T<m&&T--}for(f=o[m]=[],w=l?Math.min(T,m)*c-.5:n%T,y=T===ke?0:l?m*h/T-.5:n/T|0,C=0,A=ke,S=0;S<m;S++)_=S%T-w,v=y-(S/T|0),f[S]=b=d?Math.abs(d==="y"?v:_):ka(_*_+v*v),b>C&&(C=b),b<A&&(A=b);n==="random"&&Ia(f),f.max=C-A,f.min=A,f.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(T>m?m-1:d?d==="y"?m/T:T:Math.max(T,m/T))||0)*(n==="edges"?-1:1),f.b=m<0?r-m:r,f.u=re(e.amount||e.each)||0,i=i&&m<0?Tl(i):i}return m=(f[u]-f.min)/f.max||0,q(f.b+(i?i(m):m)*f.v)+f.u}},Xn=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=q(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Ie(i)?0:re(i))}},Ga=function(t,e){var i=se(t),n,r;return!i&&Oe(t)&&(n=i=t.radius||ke,t.values?(t=Ee(t.values),(r=!Ie(t[0]))&&(n*=n)):t=Xn(t.increment)),Ze(e,i?U(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),d=ke,c=0,h=t.length,u,p;h--;)r?(u=t[h].x-s,p=t[h].y-l,u=u*u+p*p):u=Math.abs(t[h]-s),u<d&&(d=u,c=h);return c=!n||d<=n?t[c]:o,r||c===o||Ie(o)?c:c+re(o)}:Xn(t))},Ba=function(t,e,i,n){return Ze(se(t)?!e:i===!0?!!(i=0):!n,function(){return se(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},ml=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},pl=function(t,e){return function(i){return t(parseFloat(i))+(e||re(i))}},fl=function(t,e,i){return Ua(t,e,0,1,i)},Va=function(t,e,i){return Ze(i,function(n){return t[~~e(n)]})},gl=function a(t,e,i){var n=e-t;return se(t)?Va(t,a(0,t.length),e):Ze(i,function(r){return(n+(r-t)%n)%n+t})},yl=function a(t,e,i){var n=e-t,r=n*2;return se(t)?Va(t,a(0,t.length-1),e):Ze(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},At=function(t){return t.replace(Xs,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Zs);return Ba(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Ua=function(t,e,i,n,r){var o=e-t,s=n-i;return Ze(r,function(l){return i+((l-t)/o*s||0)})},wl=function a(t,e,i,n){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=te(t),s={},l,d,c,h,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(se(t)&&!se(e)){for(c=[],h=t.length,u=h-2,d=1;d<h;d++)c.push(a(t[d-1],t[d]));h--,r=function(g){g*=h;var m=Math.min(u,~~g);return c[m](g-m)},i=e}else n||(t=xt(se(t)?[]:{},t));if(!c){for(l in e)ur.call(s,t,l,"get",e[l]);r=function(g){return gr(g,s)||(o?t.p:t)}}}return Ze(i,r)},Sa=function(t,e,i){var n=t.labels,r=ke,o,s,l;for(o in n)s=n[o]-e,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},be=function(t,e,i){var n=t.vars,r=n[e],o=$,s=t._ctx,l,d,c;if(r)return l=n[e+"Params"],d=n.callbackScope||t,i&&Ke.length&&Wi(),s&&($=s),c=l?r.apply(d,l):r.call(d),$=o,c},jt=function(t){return Xe(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ne),t.progress()<1&&be(t,"onInterrupt"),t},bt,Ya=[],Ka=function(t){if(t)if(t=!t.name&&t.default||t,er()||t.headless){var e=t.name,i=U(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:ii,render:gr,add:ur,kill:Hl,modifier:Fl,rawVars:0},o={targetTest:0,get:0,getSetter:Yi,aliases:{},register:0};if(Tt(),t!==n){if(me[e])return;Se(n,Se(Ni(t,r),o)),xt(n.prototype,xt(r,Ni(t,o))),me[n.prop=e]=n,t.targetTest&&(Hi.push(n),rr[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}La(e,n),t.register&&t.register(le,n,ce)}else Ya.push(t)},F=255,Xt={aqua:[0,F,F],lime:[0,F,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,F],navy:[0,0,128],white:[F,F,F],olive:[128,128,0],yellow:[F,F,0],orange:[F,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[F,0,0],pink:[F,192,203],cyan:[0,F,F],transparent:[F,F,F,0]},Wn=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*F+.5|0},ja=function(t,e,i){var n=t?Ie(t)?[t>>16,t>>8&F,t&F]:0:Xt.black,r,o,s,l,d,c,h,u,p,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xt[t])n=Xt[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),s=t.charAt(3),t="#"+r+r+o+o+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&F,n&F,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&F,t&F]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(wa),!e)l=+n[0]%360/360,d=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(d+1):c+d-c*d,r=c*2-o,n.length>3&&(n[3]*=1),n[0]=Wn(l+1/3,r,o),n[1]=Wn(l,r,o),n[2]=Wn(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(tr),i&&n.length<4&&(n[3]=1),n}else n=t.match(wa)||Xt.transparent;n=n.map(Number)}return e&&!g&&(r=n[0]/F,o=n[1]/F,s=n[2]/F,h=Math.max(r,o,s),u=Math.min(r,o,s),c=(h+u)/2,h===u?l=d=0:(p=h-u,d=c>.5?p/(2-h-u):p/(h+u),l=h===r?(o-s)/p+(o<s?6:0):h===o?(s-r)/p+2:(r-o)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(d*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},Xa=function(t){var e=[],i=[],n=-1;return t.split($e).forEach(function(r){var o=r.match(ct)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Ca=function(t,e,i){var n="",r=(t+n).match($e),o=e?"hsla(":"rgba(",s=0,l,d,c,h;if(!r)return t;if(r=r.map(function(u){return(u=ja(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(c=Xa(t),l=i.c,l.join(n)!==c.c.join(n)))for(d=t.replace($e,"1").split(ct),h=d.length-1;s<h;s++)n+=d[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!d)for(d=t.split($e),h=d.length-1;s<h;s++)n+=d[s]+r[s];return n+d[h]},$e=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xt)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),_l=/hsl[a]?\(/,dr=function(t){var e=t.join(" "),i;if($e.lastIndex=0,$e.test(e))return i=_l.test(e),t[1]=Ca(t[1],i),t[0]=Ca(t[0],i,Xa(t[1])),!0},ni,pe=(function(){var a=Date.now,t=500,e=33,i=a(),n=i,r=1e3/240,o=r,s=[],l,d,c,h,u,p,g=function m(f){var w=a()-n,y=f===!0,_,v,b,S;if((w>t||w<0)&&(i+=w-e),n+=w,b=n-i,_=b-o,(_>0||y)&&(S=++h.frame,u=b-h.time*1e3,h.time=b=b/1e3,o+=_+(_>=r?4:r-_),v=1),y||(l=d(m)),v)for(p=0;p<s.length;p++)s[p](b,u,S,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return u/(1e3/(f||60))},wake:function(){Ma&&(!Bn&&er()&&(Le=Bn=window,nr=Le.document||{},xe.gsap=le,(Le.gsapVersions||(Le.gsapVersions=[])).push(le.version),Pa(zi||Le.GreenSockGlobals||!Le.gsap&&Le||{}),Ya.forEach(Ka)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(f){return setTimeout(f,o-h.time*1e3+1|0)},ni=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ni=0,d=ii},lagSmoothing:function(f,w){t=f||1/0,e=Math.min(w||33,t)},fps:function(f){r=1e3/(f||240),o=h.time*1e3+r},add:function(f,w,y){var _=w?function(v,b,S,C){f(v,b,S,C),h.remove(_)}:f;return h.remove(f),s[y?"unshift":"push"](_),Tt(),_},remove:function(f,w){~(w=s.indexOf(f))&&s.splice(w,1)&&p>=w&&p--},_listeners:s},h})(),Tt=function(){return!ni&&pe.wake()},L={},vl=/^[\d.\-M][\d.\-,\s]/,bl=/["']/g,xl=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,s,l,d;r<o;r++)l=i[r],s=r!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),e[n]=isNaN(d)?d.replace(bl,"").trim():+d,n=l.substr(s+1).trim();return e},Sl=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Cl=function(t){var e=(t+"").split("("),i=L[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[xl(e[1])]:Sl(t).split(",").map(Fa)):L._CE&&vl.test(t)?L._CE("",t):i},Tl=function(t){return function(e){return 1-t(1-e)}},lt=function(t,e){return t&&(U(t)?t:L[t]||Cl(t))||e},ht=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return de(t,function(s){L[s]=xe[s]=r,L[o=s.toLowerCase()]=i;for(var l in r)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=r[l]}),r},Za=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nn=function a(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/Gn*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*js((c-o)*r)+1},l=t==="out"?s:t==="in"?function(d){return 1-s(1-d)}:Za(s);return r=Gn/r,l.config=function(d,c){return a(t,d,c)},l},$n=function a(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Za(i);return n.config=function(r){return a(t,r)},n};de("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;ht(a+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;ht("Elastic",Nn("in"),Nn("out"),Nn());(function(a,t){var e=1/t,i=2*e,n=2.5*e,r=function(s){return s<e?a*s*s:s<i?a*Math.pow(s-1.5/t,2)+.75:s<n?a*(s-=2.25/t)*s+.9375:a*Math.pow(s-2.625/t,2)+.984375};ht("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ht("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ht("Circ",function(a){return-(ka(1-a*a)-1)});ht("Sine",function(a){return a===1?1:-Ks(a*Us)+1});ht("Back",$n("in"),$n("out"),$n());L.SteppedEase=L.steps=xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-H;return function(s){return((n*ai(0,o,s)|0)+r)*i}}};ei.ease=L["quad.out"];de("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ar+=a+","+a+"Params,"});var cr=function(t,e){this.id=Ys++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sr,this.set=e?e.getSetter:Yi},ri=(function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ct(this,+e.duration,1,1),this.data=e.data,$&&(this._ctx=$,$.data.push(this)),ni||pe.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ct(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Tt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ui(this,i),!r._dp||r.parent||za(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&De(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===H||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Oa(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ba(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ba(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?St(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-H?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?$i(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-H?0:this._rts,this.totalTime(ai(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Vi(this),al(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==H&&(this._tTime-=H)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=q(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&De(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(fe(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$i(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=tl);var n=ne;return ne=i,lr(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ne=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xa(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,xa(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ae(this,i),fe(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,fe(n)),this._dur||(this._zTime=-H),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-H:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-H,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-H)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var s=U(i)?i:Ha,l=function(){var c=n.then;n.then=null,r&&r(),U(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),o(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){jt(this)},a})();Se(ri.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-H,_prom:0,_ps:!1,_rts:1});var oe=(function(a){Aa(t,a);function t(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=fe(i.sortChildren),G&&De(i.parent||G,Ne(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Wa(Ne(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return Qt(0,arguments,this),this},e.from=function(n,r,o){return Qt(1,arguments,this),this},e.fromTo=function(n,r,o,s){return Qt(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,Zt(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Z(n,r,Ae(this,o),1),this},e.call=function(n,r,o){return De(this,Z.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,s,l,d,c){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new Z(n,o,Ae(this,l)),this},e.staggerFrom=function(n,r,o,s,l,d,c){return o.runBackwards=1,Zt(o).immediateRender=fe(o.immediateRender),this.staggerTo(n,r,o,s,l,d,c)},e.staggerFromTo=function(n,r,o,s,l,d,c,h){return s.startAt=o,Zt(s).immediateRender=fe(s.immediateRender),this.staggerTo(n,r,s,l,d,c,h)},e.render=function(n,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=n<=0?0:q(n),h=this._zTime<0!=n<0&&(this._initted||!d),u,p,g,m,f,w,y,_,v,b,S,C;if(this!==G&&c>l&&n>=0&&(c=l),c!==this._tTime||o||h){if(s!==this._time&&d&&(c+=this._time-s,n+=this._time-s),u=c,v=this._start,_=this._ts,w=!_,h&&(d||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,f=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,r,o);if(u=q(c%f),c===l?(m=this._repeat,u=d):(b=q(c/f),m=~~b,m&&m===b&&(u=d,m--),u>d&&(u=d)),b=St(this._tTime,f),!s&&this._tTime&&b!==m&&this._tTime-b*f-this._dur<=0&&(b=m),S&&m&1&&(u=d-u,C=1),m!==b&&!this._lock){var A=S&&b&1,T=A===(S&&m&1);if(m<b&&(A=!A),s=A?0:c%d?d:c,this._lock=1,this.render(s||(C?0:q(m*f)),r,!d)._lock=0,this._tTime=c,!r&&this.parent&&be(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,b=m),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,T&&(this._lock=2,s=A?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=dl(this,q(s),q(u)),y&&(c-=u-(u=y._start))),this._tTime=c,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&d&&!r&&!b&&(be(this,"onStart"),this._tTime!==c))return this;if(u>=s&&n>=0)for(p=this._first;p;){if(g=p._next,(p._act||u>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(n,r,o);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,o),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=-H);break}}p=g}else{p=this._last;for(var x=n<0?n:u;p;){if(g=p._prev,(p._act||x<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(n,r,o);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,r,o||ne&&lr(p)),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=x?-H:H);break}}p=g}}if(y&&!r&&(this.pause(),y.render(u>=s?0:-H)._zTime=u>=s?1:-1,this._ts))return this._start=v,Vi(this),this.render(n,r,o);this._onUpdate&&!r&&be(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Xe(this,1),!r&&!(n<0&&!s)&&(c||s||!l)&&(be(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(Ie(r)||(r=Ae(this,r,n)),!(n instanceof ri)){if(se(n))return n.forEach(function(s){return o.add(s,r)}),this;if(te(n))return this.addLabel(n,r);if(U(n))n=Z.delayedCall(0,n);else return this}return this!==n?De(this,n,r):this},e.getChildren=function(n,r,o,s){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-ke);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof Z?r&&l.push(d):(o&&l.push(d),n&&l.push.apply(l,d.getChildren(!0,r,o)))),d=d._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return te(n)?this.removeLabel(n):U(n)?this.killTweensOf(n):(n.parent===this&&Bi(this,n),n===this._recent&&(this._recent=this._last),st(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=q(pe.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Ae(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var s=Z.delayedCall(0,r||ii,o);return s.data="isPause",this._hasPause=1,De(this,s,Ae(this,n))},e.removePause=function(n){var r=this._first;for(n=Ae(this,n);r;)r._start===n&&r.data==="isPause"&&Xe(r),r=r._next},e.killTweensOf=function(n,r,o){for(var s=this.getTweensOf(n,o),l=s.length;l--;)Ye!==s[l]&&s[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],s=Ee(n),l=this._first,d=Ie(r),c;l;)l instanceof Z?il(l._targets,s)&&(d?(!Ye||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(s,r)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,s=Ae(o,n),l=r,d=l.startAt,c=l.onStart,h=l.onStartParams,u=l.immediateRender,p,g=Z.to(o,Se({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||H,onStart:function(){if(o.pause(),!p){var f=r.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==f&&Ct(g,f,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,Se({startAt:{time:Ae(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Sa(this,Ae(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Sa(this,Ae(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+H)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(n=q(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(r)for(d in l)l[d]>=o&&(l[d]+=n);return st(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),st(this)},e.totalDuration=function(n){var r=0,o=this,s=o._last,l=ke,d,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,De(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(r-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=q(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=d;Ct(o,o===G&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(G._ts&&(Oa(G,$i(n,G)),Da=pe.frame),pe.frame>=_a){_a+=ge.autoSleep||120;var r=G._first;if((!r||!r._ts)&&ge.autoSleep&&pe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pe.sleep()}}},t})(ri);Se(oe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Al=function(t,e,i,n,r,o,s){var l=new ce(this._pt,t,e,0,1,fr,null,r),d=0,c=0,h,u,p,g,m,f,w,y;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=At(n)),o&&(y=[i,n],o(y,t,e),i=y[0],n=y[1]),u=i.match(Rn)||[];h=Rn.exec(n);)g=h[0],m=n.substring(d,h.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),g!==u[c++]&&(f=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:f,c:g.charAt(1)==="="?ut(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},d=Rn.lastIndex);return l.c=d<n.length?n.substring(d,n.length):"",l.fp=s,(ir.test(n)||w)&&(l.e=0),this._pt=l,l},ur=function(t,e,i,n,r,o,s,l,d,c){U(n)&&(n=n(r||0,t,o));var h=t[e],u=i!=="get"?i:U(h)?d?t[e.indexOf("set")||!U(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():h,p=U(h)?d?Ll:eo:pr,g;if(te(n)&&(~n.indexOf("random(")&&(n=At(n)),n.charAt(1)==="="&&(g=ut(u,n)+(re(u)||0),(g||g===0)&&(n=g))),!c||u!==n||Zn)return!isNaN(u*n)&&n!==""?(g=new ce(this._pt,t,e,+u||0,n-(u||0),typeof h=="boolean"?Ol:to,0,p),d&&(g.fp=d),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&Gi(e,n),Al.call(this,t,e,u,n,p,l||ge.stringFilter,d))},kl=function(t,e,i,n,r){if(U(t)&&(t=Jt(t,r,e,i,n)),!Oe(t)||t.style&&t.nodeType||se(t)||Ea(t))return te(t)?Jt(t,r,e,i,n):t;var o={},s;for(s in t)o[s]=Jt(t[s],r,e,i,n);return o},hr=function(t,e,i,n,r,o){var s,l,d,c;if(me[t]&&(s=new me[t]).init(r,s.rawVars?e[t]:kl(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new ce(i._pt,r,t,0,1,s.render,s,0,s.priority),i!==bt))for(d=i._ptLookup[i._targets.indexOf(r)],c=s._props.length;c--;)d[s._props[c]]=l;return s},Ye,Zn,mr=function a(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,s=n.immediateRender,l=n.lazy,d=n.onUpdate,c=n.runBackwards,h=n.yoyoEase,u=n.keyframes,p=n.autoRevert,g=t._dur,m=t._startAt,f=t._targets,w=t.parent,y=w&&w.data==="nested"?w.vars.targets:f,_=t._overwrite==="auto"&&!Jn,v=t.timeline,b=n.easeReverse||h,S,C,A,T,x,E,P,O,R,z,N,W,V;if(v&&(!u||!r)&&(r="none"),t._ease=lt(r,ei.ease),t._rEase=b&&(lt(b)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||u&&!n.stagger){if(O=f[0]?je(f[0]).harness:0,W=O&&n[O.prop],S=Ni(n,rr),m&&(m._zTime<0&&m.progress(1),e<0&&c&&s&&!p?m.render(-1,!0):m.revert(c&&g?Fi:el),m._lazy=0),o){if(Xe(t._startAt=Z.set(f,Se({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!m&&fe(l),startAt:null,delay:0,onUpdate:d&&function(){return be(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ne||!s&&!p)&&t._startAt.revert(Fi),s&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&g&&!m){if(e&&(s=!1),A=Se({overwrite:!1,data:"isFromStart",lazy:s&&!m&&fe(l),immediateRender:s,stagger:0,parent:w},S),W&&(A[O.prop]=W),Xe(t._startAt=Z.set(f,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ne?t._startAt.revert(Fi):t._startAt.render(-1,!0)),t._zTime=e,!s)a(t._startAt,H,H);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&fe(l)||l&&!g,C=0;C<f.length;C++){if(x=f[C],P=x._gsap||or(f)[C]._gsap,t._ptLookup[C]=z={},Vn[P.id]&&Ke.length&&Wi(),N=y===f?C:y.indexOf(x),O&&(R=new O).init(x,W||S,t,N,y)!==!1&&(t._pt=T=new ce(t._pt,x,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(ve){z[ve]=T}),R.priority&&(E=1)),!O||W)for(A in S)me[A]&&(R=hr(A,S,t,N,x,y))?R.priority&&(E=1):z[A]=T=ur.call(t,x,A,"get",S[A],N,y,0,n.stringFilter);t._op&&t._op[C]&&t.kill(x,t._op[C]),_&&t._pt&&(Ye=t,G.killTweensOf(x,z,t.globalTime(e)),V=!t.parent,Ye=0),t._pt&&l&&(Vn[P.id]=1)}E&&yr(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!V,u&&e<=0&&v.render(ke,!0,!0)},El=function(t,e,i,n,r,o,s,l){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,p;if(!d)for(d=t._ptCache[e]=[],u=t._ptLookup,p=t._targets.length;p--;){if(c=u[p][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Zn=1,t.vars[e]="+=0",mr(t,s),Zn=0,l?ti(e+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(p=d.length;p--;)h=d[p],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Y(i)+re(h.e)),h.b&&(h.b=c.s+re(h.b))},Ml=function(t,e){var i=t[0]?je(t[0]).harness:0,n=i&&i.aliases,r,o,s,l;if(!n)return e;r=xt({},e);for(o in n)if(o in r)for(l=n[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},Pl=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,s;if(se(e))s=i[t]||(i[t]=[]),e.forEach(function(l,d){return s.push({t:d/(e.length-1)*100,v:l,e:r})});else for(o in e)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(t),v:e[o],e:r})},Jt=function(t,e,i,n,r){return U(t)?t.call(e,i,n,r):te(t)&&~t.indexOf("random(")?At(t):t},Qa=ar+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ja={};de(Qa+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ja[a]=1});var Z=(function(a){Aa(t,a);function t(i,n,r,o){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=a.call(this,o?n:Zt(n))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,u=l.stagger,p=l.overwrite,g=l.keyframes,m=l.defaults,f=l.scrollTrigger,w=n.parent||G,y=(se(i)||Ea(i)?Ie(i[0]):"length"in n)?[i]:Ee(i),_,v,b,S,C,A,T,x;if(s._targets=y.length?or(y):ti("GSAP target "+i+" not found. https://gsap.com",!ge.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||u||Oi(d)||Oi(c)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new oe({data:"nested",defaults:m||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=Ne(s),_._start=0,u||Oi(d)||Oi(c)){if(S=y.length,T=u&&qa(u),Oe(u))for(C in u)~Qa.indexOf(C)&&(x||(x={}),x[C]=u[C]);for(v=0;v<S;v++)b=Ni(n,Ja),b.stagger=0,E&&(b.easeReverse=E),x&&xt(b,x),A=y[v],b.duration=+Jt(d,Ne(s),v,A,y),b.delay=(+Jt(c,Ne(s),v,A,y)||0)-s._delay,!u&&S===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),_.to(A,b,T?T(v,A,y):0),_._ease=L.none;_.duration()?d=c=0:s.timeline=0}else if(g){Zt(Se(_.vars.defaults,{ease:"none"})),_._ease=lt(g.ease||n.ease||"none");var P=0,O,R,z;if(se(g))g.forEach(function(N){return _.to(y,N,">")}),_.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||Pl(C,g[C],b,g.easeEach);for(C in b)for(O=b[C].sort(function(N,W){return N.t-W.t}),P=0,v=0;v<O.length;v++)R=O[v],z={ease:R.e,duration:(R.t-(v?O[v-1].t:0))/100*d},z[C]=R.v,_.to(y,z,P),P+=z.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return p===!0&&!Jn&&(Ye=Ne(s),G.killTweensOf(y),Ye=0),De(w,Ne(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(h||!d&&!g&&s._start===q(w._time)&&fe(h)&&ol(Ne(s))&&w.data!=="nested")&&(s._tTime=-H,s.render(Math.max(0,-c)||0)),f&&Wa(Ne(s),f),s}var e=t.prototype;return e.render=function(n,r,o){var s=this._time,l=this._tDur,d=this._dur,c=n<0,h=n>l-H&&!c?l:n<H?0:n,u,p,g,m,f,w,y,_;if(!d)ll(this,n,r,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+n,r,o);if(u=q(h%m),h===l?(g=this._repeat,u=d):(f=q(h/m),g=~~f,g&&g===f?(u=d,g--):u>d&&(u=d)),w=this._yoyo&&g&1,w&&(u=d-u),f=St(this._tTime,m),u===s&&!o&&this._initted&&g===f)return this._tTime=h,this;g!==f&&this.vars.repeatRefresh&&!w&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(q(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(Na(this,c?n:u,o,r,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==f))return this;if(d!==this._dur)return this.render(n,r,o)}if(this._rEase){var v=u<s;if(v!==this._inv){var b=v?s:d-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/d);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!r&&!f&&(be(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;_&&_.render(n<0?n:_._dur*_._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(c&&Un(this,n,r,o),be(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&be(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Un(this,n,!0,!0),(n||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xe(this,1),!r&&!(c&&!s)&&(h||s||w)&&(be(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,s,l){ni||pe.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||mr(this,d),c=this._ease(d/this._dur),El(this,n,r,o,s,c,d,l)?this.resetTo(n,r,o,s,1):(Ui(this,0),this.parent||Ra(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?jt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ye&&Ye.vars.overwrite!==!0)._first||jt(this),this.parent&&o!==this.timeline.totalDuration()&&Ct(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=n?Ee(n):s,d=this._ptLookup,c=this._pt,h,u,p,g,m,f,w;if((!r||r==="all")&&rl(s,l))return r==="all"&&(this._pt=0),jt(this);for(h=this._op=this._op||[],r!=="all"&&(te(r)&&(m={},de(r,function(y){return m[y]=1}),r=m),r=Ml(s,r)),w=s.length;w--;)if(~l.indexOf(s[w])){u=d[w],r==="all"?(h[w]=r,g=u,p={}):(p=h[w]=h[w]||{},g=r);for(m in g)f=u&&u[m],f&&((!("kill"in f.d)||f.d.kill(m)===!0)&&Bi(this,f,"_pt"),delete u[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&jt(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return Qt(1,arguments)},t.delayedCall=function(n,r,o,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},t.fromTo=function(n,r,o){return Qt(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return G.killTweensOf(n,r,o)},t})(ri);Se(Z.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});de("staggerTo,staggerFrom,staggerFromTo",function(a){Z[a]=function(){var t=new oe,e=Kn.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var pr=function(t,e,i){return t[e]=i},eo=function(t,e,i){return t[e](i)},Ll=function(t,e,i,n){return t[e](n.fp,i)},Dl=function(t,e,i){return t.setAttribute(e,i)},Yi=function(t,e){return U(t[e])?eo:qi(t[e])&&t.setAttribute?Dl:pr},to=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ol=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},fr=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},gr=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Fl=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},Hl=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Bi(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Rl=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},yr=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},ce=(function(){function a(e,i,n,r,o,s,l,d,c){this.t=i,this.s=r,this.c=o,this.p=n,this.r=s||to,this.d=l||this,this.set=d||pr,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Rl,this.m=i,this.mt=r,this.tween=n},a})();de(ar+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return rr[a]=1});xe.TweenMax=xe.TweenLite=Z;xe.TimelineLite=xe.TimelineMax=oe;G=new oe({sortChildren:!1,defaults:ei,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ge.stringFilter=dr;var dt=[],Ri={},zl=[],Ta=0,Wl=0,In=function(t){return(Ri[t]||zl).map(function(e){return e()})},Qn=function(){var t=Date.now(),e=[];t-Ta>2&&(In("matchMediaInit"),dt.forEach(function(i){var n=i.queries,r=i.conditions,o,s,l,d;for(s in n)o=Le.matchMedia(n[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,d=1);d&&(i.revert(),l&&e.push(i))}),In("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Ta=t,In("matchMedia"))},io=(function(){function a(e,i){this.selector=i&&jn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Wl++,e&&this.add(e)}var t=a.prototype;return t.add=function(i,n,r){U(i)&&(r=n,n=i,i=U);var o=this,s=function(){var d=$,c=o.selector,h;return d&&d!==o&&d.data.push(o),r&&(o.selector=jn(r)),$=o,h=n.apply(o,arguments),U(h)&&o._r.push(h),$=d,o.selector=c,o.isReverted=!1,h};return o.last=s,i===U?s(o,function(l){return o.add(null,l)}):i?o[i]=s:s},t.ignore=function(i){var n=$;$=null,i(this),$=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof Z&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),l=r.data.length,d;l--;)d=r.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)d=r.data[l],d instanceof oe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Z)&&d.revert&&d.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=dt.length;o--;)dt[o].id===this.id&&dt.splice(o,1)},t.revert=function(i){this.kill(i||{})},a})(),Nl=(function(){function a(e){this.contexts=[],this.scope=e,$&&$.data.push(this)}var t=a.prototype;return t.add=function(i,n,r){Oe(i)||(i={matches:i});var o=new io(0,r||this.scope),s=o.conditions={},l,d,c;$&&!o.selector&&(o.selector=$.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(d in i)d==="all"?c=1:(l=Le.matchMedia(i[d]),l&&(dt.indexOf(o)<0&&dt.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(Qn):l.addEventListener("change",Qn)));return c&&n(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a})(),Ii={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Ka(n)})},timeline:function(t){return new oe(t)},getTweensOf:function(t,e){return G.getTweensOf(t,e)},getProperty:function(t,e,i,n){te(t)&&(t=Ee(t)[0]);var r=je(t||{}).get,o=i?Ha:Fa;return i==="native"&&(i=""),t&&(e?o((me[e]&&me[e].get||r)(t,e,i,n)):function(s,l,d){return o((me[s]&&me[s].get||r)(t,s,l,d))})},quickSetter:function(t,e,i){if(t=Ee(t),t.length>1){var n=t.map(function(c){return le.quickSetter(c,e,i)}),r=n.length;return function(c){for(var h=r;h--;)n[h](c)}}t=t[0]||{};var o=me[e],s=je(t),l=s.harness&&(s.harness.aliases||{})[e]||e,d=o?function(c){var h=new o;bt._pt=0,h.init(t,i?c+i:c,bt,0,[t]),h.render(1,h),bt._pt&&gr(1,bt)}:s.set(t,l);return o?d:function(c){return d(t,l,i?c+i:c,s,1)}},quickTo:function(t,e,i){var n,r=le.to(t,Se((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,d,c){return r.resetTo(e,l,d,c)};return o.tween=r,o},isTweening:function(t){return G.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lt(t.ease,ei.ease)),va(ei,t||{})},config:function(t){return va(ge,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!me[s]&&!xe[s]&&ti(e+" effect requires "+s+" plugin.")}),zn[e]=function(s,l,d){return i(Ee(s),Se(l||{},r),d)},o&&(oe.prototype[e]=function(s,l,d){return this.add(zn[e](s,Oe(l)?l:(d=l)&&{},this),d)})},registerEase:function(t,e){L[t]=lt(e)},parseEase:function(t,e){return arguments.length?lt(t,e):L},getById:function(t){return G.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new oe(t),n,r;for(i.smoothChildTiming=fe(t.smoothChildTiming),G.remove(i),i._dp=0,i._time=i._tTime=G._time,n=G._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Z&&n.vars.onComplete===n._targets[0]))&&De(i,n,n._start-n._delay),n=r;return De(G,i,0),i},context:function(t,e){return t?new io(t,e):$},matchMedia:function(t){return new Nl(t)},matchMediaRefresh:function(){return dt.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Qn()},addEventListener:function(t,e){var i=Ri[t]||(Ri[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ri[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:gl,wrapYoyo:yl,distribute:qa,random:Ba,snap:Ga,normalize:fl,getUnit:re,clamp:ul,splitColor:ja,toArray:Ee,selector:jn,mapRange:Ua,pipe:ml,unitize:pl,interpolate:wl,shuffle:Ia},install:Pa,effects:zn,ticker:pe,updateRoot:oe.updateRoot,plugins:me,globalTimeline:G,core:{PropTween:ce,globals:La,Tween:Z,Timeline:oe,Animation:ri,getCache:je,_removeLinkedListItem:Bi,reverting:function(){return ne},context:function(t){return t&&$&&($.data.push(t),t._ctx=$),$},suppressOverwrites:function(t){return Jn=t}}};de("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ii[a]=Z[a]});pe.add(oe.updateRoot);bt=Ii.to({},{duration:0});var $l=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Il=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=$l(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},qn=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(s){var l,d;if(te(r)&&(l={},de(r,function(c){return l[c]=1}),r=l),e){l={};for(d in r)l[d]=e(r[d]);r=l}Il(s,r)}}}},le=Ii.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,s,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",s=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)ne?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},qn("roundProps",Xn),qn("modifiers"),qn("snap",Ga))||Ii;Z.version=oe.version=le.version="3.15.0";Ma=1;er()&&Tt();var ql=L.Power0,Gl=L.Power1,Bl=L.Power2,Vl=L.Power3,Ul=L.Power4,Yl=L.Linear,Kl=L.Quad,jl=L.Cubic,Xl=L.Quart,Zl=L.Quint,Ql=L.Strong,Jl=L.Elastic,ed=L.Back,td=L.SteppedEase,id=L.Bounce,nd=L.Sine,rd=L.Expo,ad=L.Circ;var no,Qe,Et,Sr,gt,od,ro,Cr,sd=function(){return typeof window<"u"},Ge={},ft=180/Math.PI,Mt=Math.PI/180,kt=Math.atan2,ao=1e8,Tr=/([A-Z])/g,ld=/(left|right|width|margin|padding|x)/i,dd=/[\s,\(]\S/,Fe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_r=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ud=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},hd=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},md=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},po=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},fo=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pd=function(t,e,i){return t.style[e]=i},fd=function(t,e,i){return t.style.setProperty(e,i)},gd=function(t,e,i){return t._gsap[e]=i},yd=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},wd=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},_d=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},B="transform",ye=B+"Origin",vd=function a(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in Ge&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Fe[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=qe(n,s)}):this.tfm[t]=o.x?o[t]:qe(n,t),t===ye&&(this.tfm.zOrigin=o.zOrigin);else return Fe.transform.split(",").forEach(function(s){return a.call(i,s,e)});if(this.props.indexOf(B)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ye,e,"")),t=B}(r||e)&&this.props.push(t,e,r[t])},go=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},bd=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Tr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Cr(),(!r||!r.isStart)&&!i[B]&&(go(i),n.zOrigin&&i[ye]&&(i[ye]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},yo=function(t,e){var i={target:t,props:[],revert:bd,save:vd};return t._gsap||le.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},wo,vr=function(t,e){var i=Qe.createElementNS?Qe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Qe.createElement(t);return i&&i.style?i:Qe.createElement(t)},Ce=function a(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Tr,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&a(t,Pt(e)||e,1)||""},oo="O,Moz,ms,Ms,Webkit".split(","),Pt=function(t,e,i){var n=e||gt,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(oo[o]+t in r););return o<0?null:(o===3?"ms":o>=0?oo[o]:"")+t},br=function(){sd()&&window.document&&(no=window,Qe=no.document,Et=Qe.documentElement,gt=vr("div")||{style:{}},od=vr("div"),B=Pt(B),ye=B+"Origin",gt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wo=!!Pt("perspective"),Cr=le.core.reverting,Sr=1)},so=function(t){var e=t.ownerSVGElement,i=vr("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Et.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Et.removeChild(i),r},lo=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},_o=function(t){var e,i;try{e=t.getBBox()}catch{e=so(t),i=1}return e&&(e.width||e.height)||i||(e=so(t)),e&&!e.width&&!e.x&&!e.y?{x:+lo(t,["x","cx","x1"])||0,y:+lo(t,["y","cy","y1"])||0,width:0,height:0}:e},vo=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&_o(t))},et=function(t,e){if(e){var i=t.style,n;e in Ge&&e!==ye&&(e=B),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Tr,"-$1").toLowerCase())):i.removeAttribute(e)}},Je=function(t,e,i,n,r,o){var s=new ce(t._pt,e,i,0,1,o?fo:po);return t._pt=s,s.b=n,s.e=r,t._props.push(i),s},co={deg:1,rad:1,turn:1},xd={grid:1,flex:1},tt=function a(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",s=gt.style,l=ld.test(e),d=t.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,u=n==="px",p=n==="%",g,m,f,w;if(n===o||!r||co[n]||co[o])return r;if(o!=="px"&&!u&&(r=a(t,e,i,"px")),w=t.getCTM&&vo(t),(p||o==="%")&&(Ge[e]||~e.indexOf("adius")))return g=w?t.getBBox()[l?"width":"height"]:t[c],Y(p?r/g*h:r/100*g);if(s[l?"width":"height"]=h+(u?o:n),m=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!d?t:t.parentNode,w&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===Qe||!m.appendChild)&&(m=Qe.body),f=m._gsap,f&&p&&f.width&&l&&f.time===pe.time&&!f.uncache)return Y(r/f.width*h);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+n,g=t[c],y?t.style[e]=y:et(t,e)}else(p||o==="%")&&!xd[Ce(m,"display")]&&(s.position=Ce(t,"position")),m===t&&(s.position="static"),m.appendChild(gt),g=gt[c],m.removeChild(gt),s.position="absolute";return l&&p&&(f=je(m),f.time=pe.time,f.width=m[c]),Y(u?g*r/h:g&&r?h/g*r:0)},qe=function(t,e,i,n){var r;return Sr||br(),e in Fe&&e!=="transform"&&(e=Fe[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ge[e]&&e!=="transform"?(r=li(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ji(Ce(t,ye))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ki[e]&&Ki[e](t,e,i)||Ce(t,e)||sr(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?tt(t,e,r,i)+i:r},Sd=function(t,e,i,n){if(!i||i==="none"){var r=Pt(e,t,1),o=r&&Ce(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=Ce(t,"borderTopColor"))}var s=new ce(this._pt,t.style,e,0,1,fr),l=0,d=0,c,h,u,p,g,m,f,w,y,_,v,b;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ce(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(m=t.style[e],t.style[e]=n,n=Ce(t,e)||n,m?t.style[e]=m:et(t,e)),c=[i,n],dr(c),i=c[0],n=c[1],u=i.match(ct)||[],b=n.match(ct)||[],b.length){for(;h=ct.exec(n);)f=h[0],y=n.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),f!==(m=u[d++]||"")&&(p=parseFloat(m)||0,v=m.substr((p+"").length),f.charAt(1)==="="&&(f=ut(p,f)+v),w=parseFloat(f),_=f.substr((w+"").length),l=ct.lastIndex-_.length,_||(_=_||ge.units[e]||v,l===n.length&&(n+=_,s.e+=_)),v!==_&&(p=tt(t,e,m,_)||0),s._pt={_next:s._pt,p:y||d===1?y:",",s:p,c:w-p,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=e==="display"&&n==="none"?fo:po;return ir.test(n)&&(s.e=0),this._pt=s,s},uo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cd=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=uo[i]||i,e[1]=uo[n]||n,e.join(" ")},Td=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,s,l,d;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),d=r.length;--d>-1;)s=r[d],Ge[s]&&(l=1,s=s==="transformOrigin"?ye:B),et(i,s);l&&(et(i,B),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",li(i,1),o.uncache=1,go(n)))}},Ki={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new ce(t._pt,e,i,0,0,Td);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},si=[1,0,0,1,0,0],bo={},xo=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ho=function(t){var e=Ce(t,B);return xo(e)?si:e.substr(7).match(tr).map(Y)},Ar=function(t,e){var i=t._gsap||je(t),n=t.style,r=ho(t),o,s,l,d;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?si:r):(r===si&&!t.offsetParent&&t!==Et&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,s=t.nextElementSibling,Et.appendChild(t)),r=ho(t),l?n.display=l:et(t,"display"),d&&(s?o.insertBefore(t,s):o?o.appendChild(t):Et.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},xr=function(t,e,i,n,r,o){var s=t._gsap,l=r||Ar(t,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,p=l[0],g=l[1],m=l[2],f=l[3],w=l[4],y=l[5],_=e.split(" "),v=parseFloat(_[0])||0,b=parseFloat(_[1])||0,S,C,A,T;i?l!==si&&(C=p*f-g*m)&&(A=v*(f/C)+b*(-m/C)+(m*y-f*w)/C,T=v*(-g/C)+b*(p/C)-(p*y-g*w)/C,v=A,b=T):(S=_o(t),v=S.x+(~_[0].indexOf("%")?v/100*S.width:v),b=S.y+(~(_[1]||_[0]).indexOf("%")?b/100*S.height:b)),n||n!==!1&&s.smooth?(w=v-d,y=b-c,s.xOffset=h+(w*p+y*m)-w,s.yOffset=u+(w*g+y*f)-y):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=b,s.smooth=!!n,s.origin=e,s.originIsAbsolute=!!i,t.style[ye]="0px 0px",o&&(Je(o,s,"xOrigin",d,v),Je(o,s,"yOrigin",c,b),Je(o,s,"xOffset",h,s.xOffset),Je(o,s,"yOffset",u,s.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},li=function(t,e){var i=t._gsap||new cr(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",s="deg",l=getComputedStyle(t),d=Ce(t,ye)||"0",c,h,u,p,g,m,f,w,y,_,v,b,S,C,A,T,x,E,P,O,R,z,N,W,V,ve,Re,ze,J,We,he,ee;return c=h=u=m=f=w=y=_=v=0,p=g=1,i.svg=!!(t.getCTM&&vo(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[B]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[B]!=="none"?l[B]:"")),n.scale=n.rotate=n.translate="none"),C=Ar(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),d=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),xr(t,W||d,!!W||i.originIsAbsolute,i.smooth!==!1,C)),b=i.xOrigin||0,S=i.yOrigin||0,C!==si&&(E=C[0],P=C[1],O=C[2],R=C[3],c=z=C[4],h=N=C[5],C.length===6?(p=Math.sqrt(E*E+P*P),g=Math.sqrt(R*R+O*O),m=E||P?kt(P,E)*ft:0,y=O||R?kt(O,R)*ft+m:0,y&&(g*=Math.abs(Math.cos(y*Mt))),i.svg&&(c-=b-(b*E+S*O),h-=S-(b*P+S*R))):(ee=C[6],We=C[7],Re=C[8],ze=C[9],J=C[10],he=C[11],c=C[12],h=C[13],u=C[14],A=kt(ee,J),f=A*ft,A&&(T=Math.cos(-A),x=Math.sin(-A),W=z*T+Re*x,V=N*T+ze*x,ve=ee*T+J*x,Re=z*-x+Re*T,ze=N*-x+ze*T,J=ee*-x+J*T,he=We*-x+he*T,z=W,N=V,ee=ve),A=kt(-O,J),w=A*ft,A&&(T=Math.cos(-A),x=Math.sin(-A),W=E*T-Re*x,V=P*T-ze*x,ve=O*T-J*x,he=R*x+he*T,E=W,P=V,O=ve),A=kt(P,E),m=A*ft,A&&(T=Math.cos(A),x=Math.sin(A),W=E*T+P*x,V=z*T+N*x,P=P*T-E*x,N=N*T-z*x,E=W,z=V),f&&Math.abs(f)+Math.abs(m)>359.9&&(f=m=0,w=180-w),p=Y(Math.sqrt(E*E+P*P+O*O)),g=Y(Math.sqrt(N*N+ee*ee)),A=kt(z,N),y=Math.abs(A)>2e-4?A*ft:0,v=he?1/(he<0?-he:he):0),i.svg&&(W=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!xo(Ce(t,B)),W&&t.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Y(p),i.scaleY=Y(g),i.rotation=Y(m)+s,i.rotationX=Y(f)+s,i.rotationY=Y(w)+s,i.skewX=y+s,i.skewY=_+s,i.transformPerspective=v+o,(i.zOrigin=parseFloat(d.split(" ")[2])||!e&&i.zOrigin||0)&&(n[ye]=ji(d)),i.xOffset=i.yOffset=0,i.force3D=ge.force3D,i.renderTransform=i.svg?kd:wo?So:Ad,i.uncache=0,i},ji=function(t){return(t=t.split(" "))[0]+" "+t[1]},wr=function(t,e,i){var n=re(e);return Y(parseFloat(e)+parseFloat(tt(t,"x",i+"px",n)))+n},Ad=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,So(t,e)},mt="0deg",oi="0px",pt=") ",So=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.z,d=i.rotation,c=i.rotationY,h=i.rotationX,u=i.skewX,p=i.skewY,g=i.scaleX,m=i.scaleY,f=i.transformPerspective,w=i.force3D,y=i.target,_=i.zOrigin,v="",b=w==="auto"&&t&&t!==1||w===!0;if(_&&(h!==mt||c!==mt)){var S=parseFloat(c)*Mt,C=Math.sin(S),A=Math.cos(S),T;S=parseFloat(h)*Mt,T=Math.cos(S),o=wr(y,o,C*T*-_),s=wr(y,s,-Math.sin(S)*-_),l=wr(y,l,A*T*-_+_)}f!==oi&&(v+="perspective("+f+pt),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||o!==oi||s!==oi||l!==oi)&&(v+=l!==oi||b?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+pt),d!==mt&&(v+="rotate("+d+pt),c!==mt&&(v+="rotateY("+c+pt),h!==mt&&(v+="rotateX("+h+pt),(u!==mt||p!==mt)&&(v+="skew("+u+", "+p+pt),(g!==1||m!==1)&&(v+="scale("+g+", "+m+pt),y.style[B]=v||"translate(0, 0)"},kd=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.rotation,d=i.skewX,c=i.skewY,h=i.scaleX,u=i.scaleY,p=i.target,g=i.xOrigin,m=i.yOrigin,f=i.xOffset,w=i.yOffset,y=i.forceCSS,_=parseFloat(o),v=parseFloat(s),b,S,C,A,T;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Mt,d*=Mt,b=Math.cos(l)*h,S=Math.sin(l)*h,C=Math.sin(l-d)*-u,A=Math.cos(l-d)*u,d&&(c*=Mt,T=Math.tan(d-c),T=Math.sqrt(1+T*T),C*=T,A*=T,c&&(T=Math.tan(c),T=Math.sqrt(1+T*T),b*=T,S*=T)),b=Y(b),S=Y(S),C=Y(C),A=Y(A)):(b=h,A=u,S=C=0),(_&&!~(o+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(_=tt(p,"x",o,"px"),v=tt(p,"y",s,"px")),(g||m||f||w)&&(_=Y(_+g-(g*b+m*C)+f),v=Y(v+m-(g*S+m*A)+w)),(n||r)&&(T=p.getBBox(),_=Y(_+n/100*T.width),v=Y(v+r/100*T.height)),T="matrix("+b+","+S+","+C+","+A+","+_+","+v+")",p.setAttribute("transform",T),y&&(p.style[B]=T)},Ed=function(t,e,i,n,r){var o=360,s=te(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ft:1),d=l-n,c=n+d+"deg",h,u;return s&&(h=r.split("_")[1],h==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),h==="cw"&&d<0?d=(d+o*ao)%o-~~(d/o)*o:h==="ccw"&&d>0&&(d=(d-o*ao)%o-~~(d/o)*o)),t._pt=u=new ce(t._pt,e,i,n,d,cd),u.e=c,u.u="deg",t._props.push(i),u},mo=function(t,e){for(var i in e)t[i]=e[i];return t},Md=function(t,e,i){var n=mo({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,l,d,c,h,u,p,g;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),o[B]=e,s=li(i,1),et(i,B),i.setAttribute("transform",d)):(d=getComputedStyle(i)[B],o[B]=e,s=li(i,1),o[B]=d);for(l in Ge)d=n[l],c=s[l],d!==c&&r.indexOf(l)<0&&(p=re(d),g=re(c),h=p!==g?tt(i,l,d,g):parseFloat(d),u=parseFloat(c),t._pt=new ce(t._pt,s,l,h,u-h,_r),t._pt.u=g||0,t._props.push(l));mo(s,n)};de("padding,margin,Width,Radius",function(a,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(s){return t<2?a+s:"border"+s+a});Ki[t>1?"border"+a:a]=function(s,l,d,c,h){var u,p;if(arguments.length<4)return u=o.map(function(g){return qe(s,g,d)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(c+"").split(" "),p={},o.forEach(function(g,m){return p[g]=u[m]=u[m]||u[(m-1)/2|0]}),s.init(l,p,h)}});var kr={name:"css",register:br,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,s=t.style,l=i.vars.startAt,d,c,h,u,p,g,m,f,w,y,_,v,b,S,C,A,T;Sr||br(),this.styles=this.styles||yo(t),A=this.styles.props,this.tween=i;for(m in e)if(m!=="autoRound"&&(c=e[m],!(me[m]&&hr(m,e,i,n,t,r)))){if(p=typeof c,g=Ki[m],p==="function"&&(c=c.call(i,n,t,r),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=At(c)),g)g(this,t,m,c,i)&&(C=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(m)+"").trim(),c+="",$e.lastIndex=0,$e.test(d)||(f=re(d),w=re(c),w?f!==w&&(d=tt(t,m,d,w)+w):f&&(c+=f)),this.add(s,"setProperty",d,c,n,r,0,0,m),o.push(m),A.push(m,0,s[m]);else if(p!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(i,n,t,r):l[m],te(d)&&~d.indexOf("random(")&&(d=At(d)),re(d+"")||d==="auto"||(d+=ge.units[m]||re(qe(t,m))||""),(d+"").charAt(1)==="="&&(d=qe(t,m))):d=qe(t,m),u=parseFloat(d),y=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),h=parseFloat(c),m in Fe&&(m==="autoAlpha"&&(u===1&&qe(t,"visibility")==="hidden"&&h&&(u=0),A.push("visibility",0,s.visibility),Je(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Fe[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Ge,_){if(this.styles.save(m),T=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ce(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=c,c=Ce(t,"perspective"),x?t.style.perspective=x:et(t,"perspective")}h=parseFloat(c)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||li(t,e.parseTransform),S=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new ce(this._pt,s,B,0,1,b.renderTransform,b,0,-1),v.dep=1),m==="scale")this._pt=new ce(this._pt,b,"scaleY",b.scaleY,(y?ut(b.scaleY,y+h):h)-b.scaleY||0,_r),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(ye,0,s[ye]),c=Cd(c),b.svg?xr(t,c,0,S,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==b.zOrigin&&Je(this,b,"zOrigin",b.zOrigin,w),Je(this,s,m,ji(d),ji(c)));continue}else if(m==="svgOrigin"){xr(t,c,1,S,0,this);continue}else if(m in bo){Ed(this,b,m,u,y?ut(u,y+c):c);continue}else if(m==="smoothOrigin"){Je(this,b,"smooth",b.smooth,c);continue}else if(m==="force3D"){b[m]=c;continue}else if(m==="transform"){Md(this,c,t);continue}}else m in s||(m=Pt(m)||m);if(_||(h||h===0)&&(u||u===0)&&!dd.test(c)&&m in s)f=(d+"").substr((u+"").length),h||(h=0),w=re(c)||(m in ge.units?ge.units[m]:f),f!==w&&(u=tt(t,m,d,w)),this._pt=new ce(this._pt,_?b:s,m,u,(y?ut(u,y+h):h)-u,!_&&(w==="px"||m==="zIndex")&&e.autoRound!==!1?md:_r),this._pt.u=w||0,_&&T!==c?(this._pt.b=d,this._pt.e=T,this._pt.r=hd):f!==w&&w!=="%"&&(this._pt.b=d,this._pt.r=ud);else if(m in s)Sd.call(this,t,m,d,y?y+c:c);else if(m in t)this.add(t,m,d||t[m],y?y+c:c,n,r);else if(m!=="parseTransform"){Gi(m,c);continue}_||(m in s?A.push(m,0,s[m]):typeof t[m]=="function"?A.push(m,2,t[m]()):A.push(m,1,d||t[m])),o.push(m)}}C&&yr(this)},render:function(t,e){if(e.tween._time||!Cr())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:qe,aliases:Fe,getSetter:function(t,e,i){var n=Fe[e];return n&&n.indexOf(",")<0&&(e=n),e in Ge&&e!==ye&&(t._gsap.x||qe(t,"x"))?i&&ro===i?e==="scale"?yd:gd:(ro=i||{})&&(e==="scale"?wd:_d):t.style&&!qi(t.style[e])?pd:~e.indexOf("-")?fd:Yi(t,e)},core:{_removeProperty:et,_getMatrix:Ar}};le.utils.checkPrefix=Pt;le.core.getStyleSaver=yo;(function(a,t,e,i){var n=de(a+","+t+","+e,function(r){Ge[r]=1});de(t,function(r){ge.units[r]="deg",bo[r]=1}),Fe[n[13]]=a+","+t,de(i,function(r){var o=r.split(":");Fe[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");de("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ge.units[a]="px"});le.registerPlugin(kr);var Er=le.registerPlugin(kr)||le,_u=Er.core.Tween;var Mr={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},we={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Co={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},To="1.3.2",Ao={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function di(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function Te(){return new Date(di())}function ko(a,t=-1/0,e=1/0){return typeof a=="number"&&!isNaN(a)&&a>=t&&a<=e}function ui(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Me(a,t){return Object.prototype.hasOwnProperty.call(a,t)?a[t]:void 0}function ue(a,t,e=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**e&&(a=0);let i=t?.locale?.language||t?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:e,maximumFractionDigits:e}).format(a)}catch{return a.toFixed(e)}}function hi(a,t,e){if(a?.localize)try{let i=a.localize(t);if(i&&i!==t)return i}catch{}return e}function Eo(a,t){if(!isFinite(a))return 0;switch((t||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,t,...e){a&&console.log(`[AWC Dev] ${t}`,...e)}function ie(a,t){let e=a.engine_settings||{},i=(o,s,l,d)=>ko(o,l,d)?o:s,n=i(e.windSpeed,we.windSpeed,.1,15),r=n;return ko(t,0,200)&&(r=Math.max(.1,Math.min(15,t/10*n))),{windSpeed:r,rainCount:i(e.rainCount,we.rainCount,.1,10),leafCount:i(e.leafCount,we.leafCount,.1,10),snowCount:i(e.snowCount,we.snowCount,.1,10),cloudBaseSize:i(e.cloudBaseSize,we.cloudBaseSize,.3,2.5),cloudCount:i(e.cloudCount,we.cloudCount,1,20),splashBounce:i(e.splashBounce,we.splashBounce,40,120)}}function Pr(a){a.forEach(t=>{t!=null&&clearTimeout(t)}),a.length=0}function Mo(a){let t=new Set;return a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.getTweensOf(e).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;t.add(n)})}),t}function Xi(a){window.AnimatedWeatherCardGsap&&Mo(a).forEach(t=>t.pause())}function Zi(a){window.AnimatedWeatherCardGsap&&Mo(a).forEach(t=>t.resume())}function Lr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)})}function Qi(a,t,e,i,n={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let r=a.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){if(!n.clock){if(r.includes("night"))return"clear-night";if(r.includes("sunny"))return"sunny";if(n.night!==void 0)return n.night?"clear-night":"sunny"}let o=Te(),s;if(i)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:i,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(h.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=t??6,d=e??20;return(s<l||s>=d)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function mi(a,t,e){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),e||ci("rain");if(!t||!t.isEnabled())return e||ci(a);let i=Ao[a];if(!i)return console.warn(`No color scheme found for animation type: ${a}`),e||ci(a);try{let n=t.getCurrentState(),r=t.getTimeAwareColor(i);return ui(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),e||ci(a))}catch(n){return console.error("Error getting time-aware color:",n),e||ci(a)}}function ci(a){let e={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return e||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var Ji=class Ji{constructor(t,e,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=t,this.config=e,this.cardConfig=i,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(t){throw console.error(`Failed to start ${this.animationType} animation:`,t),this.setState("stopped"),t}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(t){throw console.error(`Failed to stop ${this.animationType} animation:`,t),t}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(t){throw console.error(`Failed to pause ${this.animationType} animation:`,t),t}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(t){throw console.error(`Failed to resume ${this.animationType} animation:`,t),this.setState("paused"),t}}setWindSpeed(t){this.realWindSpeed=t,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(t){let e=this.state;this.state=t,k(this.config.devMode,`${this.animationType} state: ${e} \u2192 ${t}`)}ensureLayerVisibility(t){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=t?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${t}`))}let e=this.element.querySelector(this.layerSelector);e&&!Ji.SHARED_LAYERS.includes(this.layerSelector)&&(e.style.opacity=t?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${t?1:0}`))}cleanup(){this.animationHandles.forEach(t=>{t&&clearInterval(t)}),this.animationHandles=[],this.timeouts.forEach(t=>{if(t)if(typeof t=="function"){let e=t();e&&clearTimeout(e)}else clearTimeout(t)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)}),this.particles.forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(t){this.animationHandles.push(t)}addTimeout(t){this.timeouts.push(t)}addParticle(t){this.particles.push(t)}removeParticle(t){let e=this.particles.indexOf(t);e>-1&&this.particles.splice(e,1)}};Ji.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Q=Ji;var it=class{constructor(t,e,i){this.layer=t;this.create=e;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(t){this.running=!0;let e=[];for(let i=0;i<t;i++){let n=this.create(i);this.layer.appendChild(n);let r={el:n};this.items.push(r),e.push(n),this.run(r,!0)}return e}run(t,e){this.running&&(t.anim=this.cycle(t.el,()=>this.run(t,!1),e),this.paused&&t.anim.pause())}pause(){this.paused=!0,this.items.forEach(t=>t.anim?.pause())}resume(){this.paused=!1,this.items.forEach(t=>t.anim?.resume())}stop(){this.running=!1,this.items.forEach(t=>{t.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.el),t.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(t=>t.el)}};function Lt(a,t){return t&&a.progress(Math.random()),a}var Pd=420*230;function Dt(a,t){return Math.min(3,Math.max(.6,a*t/Pd))||1}function D(a,t){return a+Math.random()*(t-a)}var Ld={light:10,rain:18,storm:24,pouring:32},Dd={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Od={light:16,rain:24,storm:34,pouring:42},Fd=.3,Hd=16,Rd=8,zd=[10,30],Po="http://www.w3.org/2000/svg";function Wd(a,t,e,i){let n=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*a+l*l*e,c=2*(1-l)*l*t+l*l*i;n+=Math.hypot(d-r,c-o),r=d,o=c}return n}function Nd(a,t,e,i){return Math.max(4,Math.round(Ld[a]*t*Dt(e,i)))}var en=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),o=Nd(r,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,d=Od[r],c=r==="pouring"?3:2.4;this.splashLayer=e,this.splashColor=s,this.splashBounce=i.splashBounce/we.splashBounce,this.pool=new it(e,()=>{let h=D(1,c),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${h.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${h.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=h.toFixed(2),u},(h,u,p)=>this.fall(h,n,r,d,l,u,p)),this.pool.start(o).forEach(h=>this.addParticle(h)),k(this.config.devMode,`Rain animation started - ${o} drops (${r})`)}fall(e,i,n,r,o,s,l){let d=i.offsetWidth,c=i.offsetHeight,[h,u]=Dd[n],p=D(h,u),g=D(6,Math.max(7,d-6)),m=this.rainConfig.splashEnabled&&Math.random()<Fd,f=-r,w=m?c-r:o?c+D(60,120):c,y=Math.max(.25,(w-f)/p),_=parseFloat(e.dataset.width||"2");window.AnimatedWeatherCardGsap.set(e,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(v.fromTo(e,{y:f},{y:w,duration:y,ease:"none"}),m)v.call(()=>this.createSplash(g+_/2,c),[],y),v.to(e,{scaleY:0,duration:r/p,ease:"none"},y);else if(o){let b=(c-r-f)/p;v.to(e,{opacity:0,duration:y-b,ease:"power1.in"},b)}return Lt(v,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()}),this.splashDots=[],this.rebounds.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf([e,e.firstChild]),e.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(e=>e.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(e,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(e,i);for(let n of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%Hd;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=n*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:e-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:e-1+l,duration:o,ease:"power1.out"},0).to(r,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(e,i){let n=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(Po,"svg"),r.classList.add("rain-rebound");let m=document.createElementNS(Po,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,r.appendChild(m),n.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%Rd;let o=r.firstChild,[s,l]=zd,d=D(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,h=D(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let u=Wd(c,-2*d,2*c,h),p=Math.min(u*.45,6+d*.3);o.style.strokeDasharray=`${p.toFixed(1)} ${(u+p).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:e,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:p,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(e){return this.rainConfig.isStorm?mi("lightning",e,"var(--weather-storm-rain-color)"):mi("rain",e,"var(--weather-rain-color)")}};var $d=36,nt=[2,6],Dr=[20,38],Lo=10,Id=.6;function qd(a,t,e){return Math.max(6,Math.round($d*a*Dt(t,e)))}function Fr(a){return Math.min(2.2,Math.max(.3,a/we.windSpeed))}var tn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=qd(i.snowCount,n.offsetWidth,n.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Fr(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new it(e,()=>this.createFlake(o),(d,c,h)=>this.fall(d,n,l,s,c,h)),this.pool.start(r).forEach(d=>this.addParticle(d)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(e){let i=D(nt[0],nt[1]),n=(i-nt[0])/(nt[1]-nt[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=i.toFixed(2),r.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${e}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-Lo});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:Lo,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),r}fall(e,i,n,r,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(e.dataset.size||"4"),h=(c-nt[0])/(nt[1]-nt[0]),u=(Dr[0]+(Dr[1]-Dr[0])*h)*D(.9,1.1),p=this.snowConfig.accumulation&&Math.random()<Id,g=-c*2,m=p?d-this.pileHeight()-c:r?d+D(60,120):d+c,f=m-g,w=Math.max(.5,f/u),y=f*D(.04,.13)*n,_=D(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:_,opacity:parseFloat(e.dataset.opacity||"0.7")});let v=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(v.fromTo(e,{y:g},{y:m,x:_+y,duration:w,ease:"none"}),p)v.call(()=>this.addToAccumulation(),[],w),v.to(e,{opacity:0,duration:.6,ease:"power1.out"},w);else if(r){let b=Math.min(w,(d-g)/u);v.to(e,{opacity:0,duration:Math.max(.1,w-b),ease:"power1.in"},b)}return Lt(v,s)}async onStop(){this.swings.forEach(e=>e.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(e=>e.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(e=>e.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let e=this.element.querySelector(".animated-weather-card");if(!e)return;e.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,e.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let e=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!e?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let r=Math.min(i,n+.8);e.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(e,{scaleY:r/i,opacity:Math.min(.9,r/i),duration:.3,ease:"power2.out"})}};var Gd=30,Do=[150,230],Bd=.3,nn=6,rn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...i},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(Gd*i.snowCount*Dt(n.offsetWidth,n.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=Fr(i.windSpeed)*.5;this.pool=new it(e,()=>{let l=D(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,n,s,o,d,c)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(e,i,n,r,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(e.dataset.size||"2"),h=D(Do[0],Do[1]),u=Math.random()<Bd,p=-c*2,g=u?d-c:r?d+D(60,120):d+c,m=g-p,f=Math.max(.3,m/h),w=m*D(.03,.08)*n,y=D(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:y,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(e,{y:p},{y:g,x:y+w,duration:f,ease:"none"}),u)_.call(()=>this.addToPile(i),[],f),_.to(e,{opacity:0,duration:.3,ease:"power1.out"},f);else if(r){let v=Math.min(f,(d-p)/h);_.to(e,{opacity:0,duration:Math.max(.1,f-v),ease:"power1.in"},v)}return Lt(_,s)}addToPile(e){if(this.state!=="active")return;let i=e.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${nn}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,e.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=nn)return;let r=Math.min(nn,n+.4);i.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(i,{scaleY:r/nn,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let e=this.element.querySelector(".animated-weather-card");e&&e.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function Oo(a,t,e,i){return e!==null&&e>0?a*Math.max(0,e-t):a*.6*i}var Hr=[90,160];function Ho(a,t,e,i,n,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,u=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let p=(Math.random()*8+6)*e;o.style.width=o.style.height=p+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let m=-p-10,f=s+(r?60+Math.random()*80:p+10),w=(Hr[0]+Math.random()*(Hr[1]-Hr[0]))*Ot(t.windSpeed)*(h?.6:1),y=(f-m)/w,_=Math.min(y,(s-m)/w),v=u?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let b=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return b.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:f,duration:y,ease:"none"},0).to(o,{y:d+v,duration:y,ease:h?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),r&&y>_&&b.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function Ro(a,t,e,i,n,r){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;o.style.position="absolute",o.style.height=(d?2:1)*e+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let c=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let h=Math.max(15,(20+Math.random()*60)*e);o.style.width=h+"px";let u=i.offsetWidth,p=i.offsetHeight,g=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(o,{x:-h,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(o);let f=(u+h*2)/(Vd*Ot(t.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),r&&r(o)}}).to(o,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:u+h,rotation:l?g>p/2?5:-5:0,duration:f,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,f*.3)},f-Math.min(.5,f*.3)),o}var Vd=230,Ud=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Ot(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/we.windSpeed)))}var Yd=12;function Kd(a){let t=Math.round(70*a),e=Math.round(35*a);return{width:t,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:t-Math.round(9*a)-e,y:Math.round(-13*a),size:e}]}}var zo=a=>a>0?Math.ceil(a*3)+1:0,Fo=new Map;function jd(a,t,e,i){let n=[a,t,e,i].join(","),r=Fo.get(n);if(r)return r;let o=zo(e),s=Math.ceil((a+2*o)*i),l=Math.ceil((t+2*o)*i),d=()=>{let p=document.createElement("canvas");return p.width=s,p.height=l,[p,p.getContext("2d")]},c=null,[h,u]=d();if(u){let[p,g,m]=[o*i,o*i,Math.min(50,a/2,t/2)*i],[f,w]=[p+a*i,g+t*i];if(u.fillStyle="#000",u.beginPath(),u.moveTo(p+m,g),u.arcTo(f,g,f,w,m),u.arcTo(f,w,p,w,m),u.arcTo(p,w,p,g,m),u.arcTo(p,g,f,g,m),u.closePath(),u.fill(),e>0){let[y,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*e*i,_.shadowOffsetX=s,_.drawImage(h,-s,0),c=y.toDataURL())}else c=h.toDataURL()}return c&&Fo.set(n,c),c}function pi(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function Xd(a){return Math.min(1,Math.max(.5,a/160))||1}function Wo(a,t,e,i,n){let r=i.offsetWidth,o=i.offsetHeight,s=Ud,l=Ot(t.windSpeed),d=[],c=e||t.cloudCount,h=Xd(o);return s.forEach((u,p)=>{let g=Math.ceil(p===0||p===1?c*.4:c*.6);for(let m=1;m<=g;m++){let f=document.createElement("div");f.className=`cloud-gsap cloud-gsap-${u.name}-${m}`;let w=t.cloudBaseSize*u.scale,y=1+(m-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*h,v=Kd(_);f.style.position="absolute",f.style.opacity=u.opacity.toString(),f.dataset.awcO=String(u.opacity),f.style.zIndex=(10+p).toString();let b=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][p],S=n?.color_palette==="theme"?0:u.blur,C=[{x:0,y:0,width:v.width,height:v.height},...v.puffs.map(I=>({x:I.x,y:I.y,width:I.size,height:I.size}))],A=Math.min(3,Math.max(1,window.devicePixelRatio||1)),T=C.map(I=>jd(I.width,I.height,S,A)),x=T.every(Boolean),E=x?zo(S):0;if(f.style.width=v.width+"px",f.style.height=v.height+"px",x)f.classList.add("cloud-masked"),C.forEach((I,X)=>{let ae=document.createElement("div");ae.style.position="absolute",ae.style.left=I.x-E+"px",ae.style.top=I.y-E+"px",ae.style.width=I.width+2*E+"px",ae.style.height=I.height+2*E+"px",ae.style.background=b;for(let Ue of["-webkit-",""])ae.style.setProperty(`${Ue}mask-image`,`url("${T[X]}")`),ae.style.setProperty(`${Ue}mask-size`,"100% 100%"),ae.style.setProperty(`${Ue}mask-repeat`,"no-repeat");f.appendChild(ae)});else{f.style.borderRadius="50px",f.style.background=b,S>0&&(f.style.filter=`blur(${S}px)`);for(let I of v.puffs){let X=document.createElement("div");X.style.position="absolute",X.style.left=I.x+"px",X.style.top=I.y+"px",X.style.width=I.size+"px",X.style.height=I.size+"px",X.style.borderRadius="50px",X.style.background=b,f.appendChild(X)}}let P=v.width+2*E,z=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][p][m-1]||15+p*10)/60,N=v.height+Math.max(E,Math.ceil(S*3))+2,W=Number(i.dataset?.cloudBand),V=Number.isFinite(W)&&i.dataset?.cloudBand!==void 0?W:null,ve=Math.max(150+p*50,P+Yd),Re=u.speed*l*(.9+Math.random()*.2),ze=(r+2*ve)/Re,J=document.createElement("div");J.className="cloud-track",J.dataset.awcF=String(z),J.dataset.awcB=String(N),J.appendChild(f),window.AnimatedWeatherCardGsap.set(f,{opacity:u.opacity});let We=[J];if(n?.color_palette==="theme"){let I=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),X=f.cloneNode(!0);X.className="cloud-occluder",X.style.opacity="1";for(let Ue of[X,...Array.from(X.querySelectorAll("div"))])Ue.style.background&&(Ue.style.background="var(--awc-card-bg)");let ae=J.cloneNode(!1);ae.appendChild(X),I?.appendChild(ae),We.push(ae)}let he=We.length>1?We:J;window.AnimatedWeatherCardGsap.set(he,{xPercent:0,x:-ve,y:Oo(z,N,V,o)}),a.appendChild(J);let ee=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});ee.fromTo(he,{xPercent:0,x:-ve},{xPercent:100,x:ve,duration:ze,ease:"none"}),ee.progress(Math.random()),d.push(ee)}}),d}function No(a){let t=a.querySelector(".snow-accumulation");t&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(t,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{t.parentNode&&t.parentNode.removeChild(t)}}):t.parentNode?.removeChild(t))}function $o(a,t,e,i,n){let r=document.createElement("div");r.className=`fog-layer fog-layer-${e}`;let o=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[e]||l[2],c=n.custom_colors?.fog_color,h=(n.color_palette||"default")!=="theme"?ui(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),p=o*d.scale;r.style.cssText=`
        position: absolute;
        top: ${20+e*15}%;
        left: -50%;
        width: ${p}px;
        height: ${d.height}px;
        opacity: ${d.opacity};
        filter: blur(${d.blur}px);
        pointer-events: none;
        z-index: ${5+e};
        overflow: visible;
    `;for(let S=0;S<u;S++){let C=document.createElement("div"),A=p/u*(2+Math.random()*1.2),T=d.height*(1.2+Math.random()*1.6),x=p/u*S-A*.3,E=(Math.random()-.5)*(d.height*.5);C.style.cssText=`
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
        `,r.appendChild(C)}a.appendChild(r);let g=t.windSpeed*(.5+Math.random()*.5),m=15/d.speed,f=Math.max(8,m/g),w=o*d.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(r,{x:y,opacity:d.opacity});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:e*2+Math.random()*3});v.to(r,{x:_,duration:f,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:y})}});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return b.to(r,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:v,opacity:b}}function an(a){a.querySelectorAll(".fog-layer").forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}var Zd=3,Qd=2,Io=[900,1400],qo=[1800,2600],on=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...i},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(e){let i=ie(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(Zd*i.leafCount));if(this.leaves.size<n){let r=Ho(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(D(Io[0],Io[1])/Math.max(.5,i.leafCount))},e)}scheduleSwoosh(e){let i=ie(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<Qd){let n=Ro(this.layer(),i,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(D(qo[0],qo[1]))}},e)}forget(e,i){i.delete(e),this.removeParticle(e)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),Xi(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){Zi(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var fi=[6e3,18e3],Jd=[1500,6e3],Go=.16,sn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:fi[0],maxInterval:fi[1],...i},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Lightning layer not found: ${this.layerSelector}`);e.style.opacity="0";let[i,n]=Jd;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let e=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!e||!i)return;let n=i.offsetWidth,r=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(n-60),c=20*o,h=20,u=[d+",0"];for(let f=0;f<h;f++){let w=d+(Math.random()*c-c/2),y=r/h*(f+1);u.push(w+","+y)}l.setAttribute("d","M"+u.join(" L"));let p=this.element.timeOfDayManager,g=mi("lightning",p,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),e.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(e,{opacity:.9},0).to(e,{opacity:.3,duration:.06,ease:"none"},0).to(e,{opacity:.8,duration:.04,ease:"none"},.06).to(e,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let f=-6*o;m.to(i,{y:f,duration:.06,ease:"power2.out"},Go).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},Go+.06)}}scheduleNext(){if(this.state!=="active")return;let e=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},e),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let e=this.element.querySelector(".animated-weather-card");e&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(e,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),i.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var ec=["dawn","day","dusk","night"],Wr=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],tc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Uo=(a,t,e)=>Math.min(t,Math.max(a,e)),rt=(a,t,e)=>a+(t-a)*e;function ic(a,t,e){let i=(t-a+540)%360-180;return(a+i*e+360)%360}function Be(a,t,e){let i=([m,f,w])=>[m,f*Math.cos(w*Math.PI/180),f*Math.sin(w*Math.PI/180)],[n,r,o]=i(a),[s,l,d]=i(t),c=rt(n,s,e),h=rt(r,l,e),u=rt(o,d,e),p=Math.hypot(h,u),g=p<1e-6?a[2]:(Math.atan2(u,h)*180/Math.PI+360)%360;return[c,p,g]}function Rr([a,t,e]){let i=e*Math.PI/180,n=t*Math.cos(i),r=t*Math.sin(i),o=(a+.3963377774*n+.2158037573*r)**3,s=(a-.1055613458*n-.0638541728*r)**3,l=(a-.0894841775*n-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var nc=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Pe(a){let t=i=>i.every(n=>n>=-1e-4&&n<=1.0001),e=Rr(a);if(!t(e)){let i=0,n=a[1];for(let r=0;r<24;r++){let o=(i+n)/2;t(Rr([a[0],o,a[2]]))?i=o:n=o}e=Rr([a[0],i,a[2]])}return e.map(i=>nc(Uo(0,1,i)))}var Yo=a=>Math.round(Uo(0,1,a)*255);function Ve(a){return"#"+a.map(t=>Yo(t).toString(16).padStart(2,"0")).join("")}function Bo(a,t){return`rgba(${a.map(Yo).join(", ")}, ${Number(t.toFixed(3))})`}function zr(a,t){return[.15+(a[0]-.15)*.42,a[1]*rt(.75,.5,t),ic(a[2],262,.45)]}function rc(a,t){let e=tc[a],i=1-e.overcast*.7,n={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:rt(.46,.28,e.overcast)};if(a==="clear-night"){if(t==="dawn"||t==="dusk"){let r=t==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Be(e.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(t){case"night":return{top:zr(e.top,e.overcast),mid:zr(e.mid,e.overcast),bottom:zr(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:rt(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:Be(e.top,[e.top[0]*.8,.075,292],.5*i),mid:Be(e.mid,[e.mid[0]*.88,.065,350],.42*i),bottom:Be(e.bottom,[e.bottom[0]*.92,.115,52],.72*i),glow:Be(e.glow,[.82,.13,58],i),glowAlpha:rt(e.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Be(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*i),mid:Be(e.mid,[e.mid[0]*.95,.05,330],.3*i),bottom:Be(e.bottom,[e.bottom[0]*.95,.085,32],.62*i),glow:Be(e.glow,[.88,.09,40],i),glowAlpha:rt(e.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function ac(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function Ft(a,t){let e=rc(a,t);return{top:Ve(Pe(e.top)),mid:Ve(Pe(e.mid)),bottom:Ve(Pe(e.bottom)),glow:Bo(Pe(e.glow),e.glowAlpha),scrim:Bo(Pe(ac(e.top)),e.scrimAlpha)}}var Ht=[.985,.006,250],ln=.8,Ko=.55,jo=.4,dn={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},Xo={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},Zo={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function Rt(a,t){let e=i=>`${Math.round(i*100)}%`;return`radial-gradient(${e(a.rx)} ${e(a.ry)} at ${e(a.cx)} ${e(a.cy)}, ${t}, transparent ${e(a.fade)})`}function Qo(){let a=[];for(let t of Wr)for(let e of ec){let i=Ft(t,e),n=e==="day"?`.animated-weather-card.${t}`:`.animated-weather-card.${t}[data-phase="${e}"]`;a.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return a.join(`
`)}function cn(a,t,e){return a==null||!Number.isFinite(a)?e?"day":"night":a<-6?"night":a<6?t?"dawn":"dusk":"day"}var at=3.2,zt="cubic-bezier(0.37, 0, 0.63, 1)",Jo={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},es=Object.keys(Jo),Nr=es.filter(a=>a.startsWith("--awc-sky-"));function ts(){return es.map(a=>`${a} ${at}s ${zt}`).join(`,
            `)}var Vo=!1;function un(){if(Vo)return;Vo=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[t,e]of Object.entries(Jo))try{a.registerProperty({name:t,syntax:"<color>",inherits:!0,initialValue:e})}catch{}}var $r=Array.from({length:25},(a,t)=>[t%5/2-1,Math.floor(t/5)/2-1]).filter(([a,t])=>a*a+t*t<=1),oc=1.9,sc=.6,hn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");pi(e);let r=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=Wo(e,i,r,n,this.cardConfig),this.startWindFactor=Ot(i.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let e=this.element.querySelector(this.layerSelector);e&&pi(e),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(e=!1){if(this.occlude()){this.lightSun(1,e);return}let i=this.element.querySelector(".sun-track .sun"),n=i?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!i||!n?.width||getComputedStyle(i).opacity==="0"){r.forEach(y=>this.dense(y,o(y),e));return}let s=n.width/2,l=n.left+s,d=n.top+n.height/2,c=this.element.querySelector(this.containerSelector),h=c?parseFloat(getComputedStyle(c).opacity):1,u=Number.isFinite(h)?h:1,p=r.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*sc*u),g=r.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),m=(y,_,v)=>g[y].some(b=>{let S=Math.min(b.width,b.height)/2,C=_-Math.min(Math.max(_,b.left+S),b.right-S),A=v-Math.min(Math.max(v,b.top+S),b.bottom-S);return C*C+A*A<=S*S}),f=0,w=r.map(()=>0);for(let[y,_]of $r)f+=r.reduce((v,b,S)=>m(S,l+y*s,d+_*s)?v*(1-p[S]):v,1),r.forEach((v,b)=>{m(b,l+y*s*1.25,d+_*s*1.25)&&(w[b]+=1/$r.length)});this.lightSun(f/$r.length,e),r.forEach((y,_)=>this.dense(y,o(y)*(1+(oc-1)*Math.min(1,w[_]*3)),e))}occlude(){let e=this.element.querySelector(".animated-weather-card");if(!e||this.cardConfig.color_palette!=="theme")return!1;let i=e.closest("ha-card"),n=i?getComputedStyle(i):null,r=!!n&&(n.backgroundImage||"none")==="none"&&!!n.backgroundColor&&!/rgba|\/|transparent/.test(n.backgroundColor);return r&&e.style.getPropertyValue("--awc-card-bg")!==n.backgroundColor&&e.style.setProperty("--awc-card-bg",n.backgroundColor),e.toggleAttribute("data-occlude",r),r}dense(e,i,n){let r=(Math.round(Math.min(.95,i)*100)/100).toString();e.dataset.awcV!==r&&(e.dataset.awcV=r,n?window.AnimatedWeatherCardGsap?.set(e,{opacity:r}):window.AnimatedWeatherCardGsap?.to(e,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(e,i=!1){let n=this.element.querySelector(".sun-track"),r=Math.round(e*100)/100;!n||r===this.sunLit&&!i||(this.sunLit=r,i?window.AnimatedWeatherCardGsap?.set(n,{opacity:r}):window.AnimatedWeatherCardGsap?.to(n,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let e=ie(this.cardConfig,this.realWindSpeed),i=Ot(e.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:at,ease:"sine.inOut",overwrite:!0})})}};var mn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...i},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let e=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!e)throw new Error("Fog container not found");let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");an(n),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let o=$o(e,i,r,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),k(this.config.devMode,"Fog animation resumed")}};var lc=5,is=353,dc=1440,cc=1/2,uc=.25,hc=.2,mc=2,pc=2;function Ir(a,t){let e=t>0?Math.min(t,dc):is;return Math.max(15,Math.round(a*lc*Math.max(1,e/is)))}var ns=20,rs=10,fc=12,as=(a,t)=>a.right>t.left-ns&&a.left<t.right+ns&&a.bottom>t.top-rs&&a.top<t.bottom+rs;function gi(a){let t=[],e=document.createRange();if(typeof e.getClientRects!="function")return t;let i=".animation-layer, .animation-container, style, script",n=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=n.nextNode();r;r=n.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(i))){e.selectNodeContents(r);for(let o of Array.from(e.getClientRects()))o.width&&o.height&&t.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(i))continue;let o=r.getBoundingClientRect();o.width&&o.height&&t.push(o)}return t}function gc(a,t){for(let e of a){let i=e.getBoundingClientRect();e.classList.toggle("awc-veiled",!!i.width&&t.some(n=>as(i,n)))}}function os(a){let t=a.querySelectorAll(".stars-field .star-gsap");if(!t.length)return;let e=a.querySelector(".moon-gsap")?.getBoundingClientRect();gc(t,e?.width?[...gi(a),e]:gi(a))}function qr(a,t,{moon:e,still:i=!1,words:n=[]}){let r=document.createElement("div");r.className="stars-field";let o=e?document.createElement("div"):null;if(o){o.className="moon-gsap",a.appendChild(o);let d=o.getBoundingClientRect();d.width&&d.height&&(n=[...n,d])}let s=a.getBoundingClientRect(),l=n.length>0&&s.width>0&&s.height>0;for(let d=0;d<t;d++){let c=document.createElement("div");c.className="star-gsap";let h=1+Math.random()*3,u=.3+Math.random()*.5,p=0,g=0,m=!1;for(let f=0;f<(l?fc:1)&&!m;f++){p=Math.random()*100,g=Math.random()*70;let w=s.left+p/100*s.width,y=s.top+g/100*s.height;m=!l||!n.some(_=>as({left:w,top:y,right:w+h,bottom:y+h},_))}if(m||c.classList.add("awc-veiled"),c.style.cssText=`
            width: ${h.toFixed(2)}px;
            height: ${h.toFixed(2)}px;
            left: ${p.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${u.toFixed(2)};
        `,!i&&Math.random()<cc){let f=mc+Math.random()*pc;c.classList.add("twinkle"),c.style.setProperty("--star-o",u.toFixed(2)),c.style.setProperty("--star-dim",(u*(uc+Math.random()*hc)).toFixed(2)),c.style.animationDuration=`${f.toFixed(2)}s`,c.style.animationDelay=`${(-Math.random()*f).toFixed(2)}s`}r.appendChild(c)}return o?a.insertBefore(r,o):a.appendChild(r),o?[r,o]:[r]}var pn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...i},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=ie(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");n?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=Ir(i.cloudCount,e.clientWidth||n?.clientWidth||0);for(let o of qr(e,r,{moon:this.starsConfig.showMoon,words:n?gi(n):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&e.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Stars animation stopped")}setPaused(e){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",e))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var fn=class extends Q{constructor(e,i,n,r){super(e,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let e=this.element.querySelector(this.layerSelector);if(!e){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}e.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var gn=class{constructor(t,e,i,n){this.activeAnimations=new Map;this.element=t,this.config=e,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(t,e){this.activeAnimations.has(t)&&await this.stopModularAnimation(t);try{let i={intensity:e,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(t){case"rain":n=new en(this.element,{...i,isStorm:e>=2&&e<=4,isPouring:e>4,isLightRain:e<1,particleCount:Math.floor(e*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new tn(this.element,{...i,particleCount:Math.floor(e*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new rn(this.element,{...i,particleCount:Math.floor(e*40)},this.config,this.realWindSpeed);break;case"wind":n=new on(this.element,{...i,leafCount:Math.max(1,Math.floor(e*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new sn(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:fi[0],maxInterval:fi[1]},this.config,this.realWindSpeed);break;case"clouds":n=new hn(this.element,{...i,cloudCount:Math.max(1,Math.floor(e*2)),isPartlyCloudy:e<3},this.config,this.realWindSpeed);break;case"fog":n=new mn(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(e)))},this.config,this.realWindSpeed);break;case"stars":n=new pn(this.element,{...i,starCount:Math.max(15,Math.floor(e*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new fn(this.element,i,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${t}`),null}return await n.start(),this.activeAnimations.set(t,n),k(this.config.dev_mode,`Started modular ${t} animation with intensity ${e}`),n}catch(i){return console.error(`Failed to start modular ${t} animation:`,i),null}}async stopModularAnimation(t){let e=this.activeAnimations.get(t);if(e)try{await e.destroy(),k(this.config.dev_mode,`Stopped modular ${t} animation`)}catch(i){console.error(`Error stopping modular ${t} animation:`,i)}finally{this.activeAnimations.delete(t)}}async pauseModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isActive())try{await e.pause()}catch(i){console.error(`Error pausing modular ${t} animation:`,i)}}async resumeModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isPaused())try{await e.resume()}catch(i){console.error(`Error resuming modular ${t} animation:`,i)}}updateWindSpeed(t){if(!Object.is(t,this.realWindSpeed)){this.realWindSpeed=t;for(let[e,i]of this.activeAnimations)try{i.setWindSpeed(t)}catch(n){console.warn(`Failed to update wind speed for ${e}:`,n)}}}async cleanup(){let t=Array.from(this.activeAnimations.keys()).map(e=>this.stopModularAnimation(e));await Promise.all(t),this.activeAnimations.clear()}};var Wt=class{constructor(t,e,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=t,this.config=e,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new gn(t,e,n,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(t){this.currentWindSpeed=t,this.modularBridge.updateWindSpeed(t)}async startAnimation(t,e){let i=this.animations[t];if(i.isActive){k(this.config.dev_mode,`Animation ${t} already active \u2014 skipping`);return}let n=e?.intensity??i.intensity??1,r=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(t,!0);try{let o=await this.modularBridge.startModularAnimation(t,n);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${t} (generation drifted)`),await this.modularBridge.stopModularAnimation(t);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${t}`);return}k(this.config.dev_mode,`Started ${t} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${t} animation:`,o),i.isActive=!1}}async stopAnimation(t){let e=this.animations[t];if(e.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(t),k(this.config.dev_mode,`Stopped ${t} animation`)}catch(i){console.error(`Error stopping ${t} animation:`,i)}this.setAnimationLayerVisibility(t,!1),e.isActive=!1,e.isPaused=!1}}pauseAnimation(t){let e=this.animations[t];!e.isActive||e.isPaused||(e.isPaused=!0,this.modularBridge.pauseModularAnimation(t),k(this.config.dev_mode,`Paused ${t} animation`))}resumeAnimation(t){let e=this.animations[t];!e.isActive||!e.isPaused||(e.isPaused=!1,this.modularBridge.resumeModularAnimation(t),k(this.config.dev_mode,`Resumed ${t} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(t=>this.stopAnimation(t)))}pauseAllAnimations(){Object.keys(this.animations).forEach(t=>this.pauseAnimation(t))}resumeAllAnimations(){Object.keys(this.animations).forEach(t=>this.resumeAnimation(t))}async applyWeatherCondition(t){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let e=this.defaultWeatherMappings[t.toLowerCase()];if(!e){console.warn(`No animation mapping for weather condition: ${t}`);return}await Promise.all(e.animations.map(i=>{let n=e.overrides?.[i];return this.startAnimation(i,n)})),k(this.config.dev_mode,`Applied weather condition: ${t} with animations: ${e.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(t,e){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${t}-active`;e?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let t=this.element.querySelector(".animated-weather-card");if(t)for(let e of Object.keys(this.animations))t.classList.remove(`individual-${e}-active`)}};var yn=new Map,Gr=new Set;function Br(a,t,e){let i=yn.get(a);if(!t){i&&(yn.delete(a),ss());return}let n={entity:t,sun:e||"sun.sun"};i&&i.entity===n.entity&&i.sun===n.sun||(yn.set(a,n),ss())}function ls(a){if(a){for(let t of yn.values())if(t.sun===a)return t.entity}}function ds(a){return Gr.add(a),()=>{Gr.delete(a)}}function ss(){for(let a of[...Gr])a()}var wn=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:Number(a);return Number.isFinite(t)?t:null},ot=a=>typeof a=="string"?a.trim():"";function yc(a){if(!a||typeof a!="object")return null;let t=a,e=typeof t.id=="number"?String(t.id):ot(t.id);return e?{id:e,label:ot(t.flight_number)||ot(t.callsign),aircraftCode:ot(t.aircraft_code),originCity:ot(t.airport_origin_city),originCode:ot(t.airport_origin_code_iata),destinationCity:ot(t.airport_destination_city),destinationCode:ot(t.airport_destination_code_iata),altitudeFt:wn(t.altitude),groundSpeedKt:wn(t.ground_speed),heading:wn(t.heading),verticalSpeed:wn(t.vertical_speed),onGround:t.on_ground===1||t.on_ground===!0||t.on_ground==="1"}:null}function Vr(a,t){if(!a||!t)return null;let e=a.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return null;let i=e.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let r of i){let o=yc(r);o&&n.push(o)}return n}var _n=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(t,e=!1){if(!t)return[];let i=t.filter(s=>!s.onGround),n=new Set(i.map(s=>s.id));if(this.known===null)return this.known=n,e?i.filter((s,l)=>i.findIndex(d=>d.id===s.id)===l):[];let r=[],o=new Set;for(let s of i)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=n,r}reset(){this.known=null}};var vn=class{constructor(t={}){this.listeners=new Set;this.config={enableDayNightCycle:t.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...t},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(t){let e=this.config.enableDayNightCycle;this.config={...this.config,...t},this.updateState(),this.config.enableDayNightCycle&&!e?this.startAutoUpdate():!this.config.enableDayNightCycle&&e&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}getTimeAwareColor(t){let e=this.getCurrentState();if(!this.isEnabled())return t.day;switch(e.timePhase){case"dawn":return t.dawn||this.blendColors(t.night,t.day,.3);case"day":return t.day;case"dusk":return t.dusk||this.blendColors(t.day,t.night,.3);case"night":return t.night;default:return t.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let t=Te(),e,i;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(t);e=parseInt(g.find(m=>m.type==="hour")?.value||"0",10),i=parseInt(g.find(m=>m.type==="minute")?.value||"0",10)}else e=t.getHours(),i=t.getMinutes();let n=e+i/60,r,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,h=(s+1)%24,u=(g,m,f)=>m<=f?g>=m&&g<f:g>=m||g<f;u(n,l,d)?r="dawn":u(n,d,c)?r="day":u(n,c,h)?r="dusk":r="night";let p={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:e,timePhase:r};!this.currentState||this.currentState.timePhase!==p.timePhase?(this.currentState=p,this.notifyListeners(p)):this.currentState=p}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Co.UPDATE_INTERVAL)}notifyListeners(t){this.listeners.forEach(e=>{try{e(t)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(t,e,i){let n=t.replace("#",""),r=e.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),d=parseInt(r.substring(0,2),16),c=parseInt(r.substring(2,4),16),h=parseInt(r.substring(4,6),16),u=Math.round(o*(1-i)+d*i),p=Math.round(s*(1-i)+c*i),g=Math.round(l*(1-i)+h*i),m=u.toString(16).padStart(2,"0"),f=p.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${m}${f}${w}`}};var Ur=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var yi={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},wc=Qo(),_c=Ve(Pe(Ht)),cs=a=>`${Math.round(a*100)}%`,vc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,bc=48,xc={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Sc={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},Yr=()=>`
${Ur("animated-weather-card")}
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
          --awc-secondary: ${ln};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${_c};
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
            ${ts()};
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
        ${wc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Rt(dn,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${cs(jo)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${cs(Ko)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Rt(Xo,"var(--awc-sky-glow)")}; }
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
          background-image: ${vc};
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
          color: ${yi.text};
          background: ${yi.fill};
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
        ${Object.entries(xc).map(([a,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${t}; }`).join(`
        `)}
        ${Object.entries(Sc).map(([a,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${a}"] .attribute-icon { color: ${t}; }`).join(`
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
          --awc-sky-glow-layer: ${Rt(Zo,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${bc}px;
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
          transition: opacity ${at/2}s ${zt};
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
          transition: transform ${at}s ${zt};
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

`;var Kr={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},Cc={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:Kr,no:Kr,nn:Kr,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function wi(a){return a?.locale?.language||a?.language||"en"}function Nt(a){return`${wi(a)}|${a?.locale?.time_format??""}|${jr(a)??""}`}function jr(a){if(a?.locale?.time_zone!=="server")return;let t=a.config?.time_zone;if(t)try{return new Intl.DateTimeFormat("en",{timeZone:t}),t}catch{return}}function K(a,t,e={}){return Tc(Cc,a,t,e)}function Tc(a,t,e,i={}){let n=wi(t).toLowerCase();return(a[n]?.[e]??a[n.split("-")[0]]?.[e]??a.en[e]).replace(/\{(\w+)\}/g,(o,s)=>i[s]??"")}function Ac(a){let t=a?.locale;if(!t?.time_format)return;if(t.time_format==="12")return!0;if(t.time_format==="24")return!1;let e=t.time_format==="language"?wi(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}catch{return}}function $t(a,t){if(!a)return"--";let e=new Date(a);if(isNaN(e.getTime()))return"--";try{return us(t,{hour:"numeric",minute:"2-digit"}).format(e)}catch{return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function us(a,t){let e=Ac(a),i={...t,timeZone:jr(a)};return e!==void 0&&(i.hourCycle=e?"h12":"h23"),new Intl.DateTimeFormat(a?wi(a):void 0,i)}function hs(a,t){try{let e=us(t,{hour:"numeric",minute:"2-digit"}).formatToParts(a),i=e.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:e.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:i}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Xr(a,t){try{let e=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:jr(t)}).formatToParts(a),i=n=>Number(e.find(r=>r.type===n)?.value??0);return i("hour")+i("minute")/60+i("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function Zr(a,t){let e=Math.round(Math.abs(a)*60),i=Math.floor(e/60),n=e%60,r=wi(t),o=Intl.DurationFormat;if(o&&t)try{return new o(r,{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return r.toLowerCase().split("-")[0]==="uk"?i>0?`${i}\xA0\u0433\u043E\u0434 ${n}\xA0\u0445\u0432`:`${n}\xA0\u0445\u0432`:i>0?`${i}h ${n}m`:`${n}m`}function bn(a,t){let e=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return e?`${M(e[1])}<span class="${t}">${M(e[2])}</span>`:M(a)}var ms=["humidity","wind","pressure","sun","uv","rain"],ps=["humidity","wind","pressure","sun"];function Qr(a){let t=a.metrics,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e)return[...ps];let i=[];for(let n of e){let r=String(n).trim().toLowerCase();ms.includes(r)&&!i.includes(r)&&i.push(r)}return i}var xn=[3,6,8,11],fs=["low","moderate","high","very_high","extreme"];function _i(a){let t=a.uv_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==4)return xn;let i=e.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,r)=>isFinite(n)&&(r===0||n>i[r-1]))?i:xn}function vi(a,t=xn){let e=Math.round(a),i=0;for(;i<4&&e>=t[i];)i++;return fs[i]}var kc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function Ec(a,t){try{let e=a.formatEntityState?.(t);if(e&&e!==t.state)return e}catch{}return Me(kc,t.state)||t.state}var Jr=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:parseFloat(String(a));return isFinite(t)?t:null};function ea(a,t){return(t.uv_entity?Jr(a?.states[t.uv_entity]?.state):null)??Jr(t.entity?a?.states[t.entity]?.attributes?.uv_index:void 0)}function gs(a,t,e){if(e===null||!isFinite(e))return{text:"--",level:null};let i=vi(e,_i(t));return{text:`${ue(Math.max(0,Math.round(e)),a)} ${ta(a,i)}`,level:i}}function ta(a,t){return K(a,`uv_${t}`)}function xi(a,t,e){let i=/\bin\b|inch/i.test(t)?2:1;return`${ue(Math.max(0,a),e,i)} ${t}`.trim()}function yt(a,t,e){let i=t?a?.states[t]:void 0,n=Jr(i?.state);return n===null?null:{value:n,unit:typeof i?.attributes?.unit_of_measurement=="string"?i.attributes.unit_of_measurement:e}}var Sn=(a,t)=>K(a,t?"rain_now":"rain_today"),Mc=180;function ys(a,t){let e=t.note_entity?a?.states[t.note_entity]:void 0;if(!e)return null;let i=s=>typeof s=="string"?s.trim():"",n=e.state==="unknown"||e.state==="unavailable"?"":i(e.state),r=i(e.attributes?.[t.note_attribute||"note"]);if(!n&&!r)return null;let o=Date.parse(e.attributes?.generated_at);return{line:n||r,note:r||n,writtenAt:Number.isNaN(o)?null:o}}function ws(a,t){let e=Number(t.note_max_age??Mc);return a.writtenAt===null||!(e>0)?null:a.writtenAt+e*6e4}function ia(a,t){return a?Lc(a,t):{temperature:"--",weatherCondition:"",location:t.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var Pc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function bi(a){let t=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(t)?(t%360+360)%360:typeof a=="string"?Pc[a.trim().toUpperCase()]??null:null}function It(a){return Number(a.temperature_decimals)===1?1:0}function Lc(a,t){if(!t.entity)throw new Error("Weather entity is required");let e=a.states[t.entity];if(!e)throw new Error(`Entity ${t.entity} not found`);let i;if(t.outdoor_sensor_entity){let x=a.states[t.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?i=parseFloat(x.state):i=e.attributes.temperature}else i=e.attributes.temperature;let n=It(t),r=x=>ue(n?x:Math.round(x),a,n),o=i!=null&&!isNaN(i)?r(i):"--",s=Ec(a,e),l=t.name||e.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?ue(Math.round(E),a)+"%":null},c="--";if(t.humidity_sensor_entity){let x=a.states[t.humidity_sensor_entity];c=x&&d(x.state)||d(e.attributes.humidity)||"--"}else c=d(e.attributes.humidity)||"--";let h="--",u=10,p=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=Eo(P,E||"km/h"),h=ue(Math.round(P),a)+" "+(E||"km/h"),!0):!1},g=t.wind_speed_sensor_entity?a.states[t.wind_speed_sensor_entity]:void 0;g&&p(g.state,g.attributes?.unit_of_measurement)||p(e.attributes.wind_speed,e.attributes.wind_speed_unit);let m=t.wind_direction_sensor_entity?a.states[t.wind_direction_sensor_entity]:void 0,f=bi(m?.state)??bi(e.attributes.wind_bearing),w=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return ue(P,a,O)+" "+E},y=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",v=null;if(t.pressure_sensor_entity){let x=a.states[t.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=w(x.state,E);P&&(_=P,v=y(x.state))}if(_==="--"&&e.attributes.pressure!==void 0){let E=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,E)||"--",v=y(e.attributes.pressure)}}else if(e.attributes.pressure!==void 0){let x=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,x)||"--",v=y(e.attributes.pressure)}let b=null,S;if(t.feels_like_entity&&(S=a.states[t.feels_like_entity]?.state),S===void 0&&e.attributes.apparent_temperature!==void 0&&(S=e.attributes.apparent_temperature),S!==void 0){let x=typeof S=="number"?S:parseFloat(S);isFinite(x)&&(b=r(x)+"\xB0")}let C="--";if(t.indoor_temperature_entity){let x=a.states[t.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(C=r(parseFloat(x.state))+"\xB0")}let A="--";if(t.indoor_humidity_entity){let x=a.states[t.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(A=ue(Math.round(parseFloat(x.state)),a)+"%")}let T;if(t.sun_entity){let x=a.states[t.sun_entity];x&&(T={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:u,windBearing:f,pressure:_,pressureValue:v,feelsLike:b,indoorTemperature:C,indoorHumidity:A,uv:ea(a,t),sun:T}}var Dc=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],aa={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},na=["uv_max","rain_event","rain_week","rain_month","rain_year"],Oc=a=>a!=="sun"&&!Object.prototype.hasOwnProperty.call(aa,a);var _s=a=>typeof a=="string"&&Dc.includes(a),Cn=a=>typeof a=="string"&&a.trim()?a.trim():void 0;function Fc(a){if(typeof a=="string"){let l=a.trim().toLowerCase();return _s(l)?{type:l,view:na.includes(l)}:null}if(!a||typeof a!="object")return null;let t=a,e=typeof t.type=="string"?t.type.trim().toLowerCase():"";if(!_s(e))return null;let i={type:e,view:t.view===!0||na.includes(e)},n=Cn(t.entity);n&&(i.entity=n);let r=Cn(t.direction_entity);e==="wind"&&r&&(i.direction_entity=r);let o=Cn(t.rate_entity);e==="rain"&&o&&(i.rate_entity=o);let s=Cn(t.name);return s&&(i.name=s),i}function oa(a){let t=a.readings;if(Array.isArray(t))return t.map(Fc).filter(r=>!!r);let e=[],i=r=>{let o=Object.fromEntries(Object.entries(r).filter(([,s])=>s!==void 0&&s!==""));e.push({...o,view:!!r.view||na.includes(r.type)})},n=Qr(a);for(let r of n){if(r==="sun"){a.show_sun!==!1&&i({type:"sun"});continue}r==="humidity"?i({type:"humidity",entity:a.humidity_sensor_entity}):r==="wind"?i({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity}):r==="pressure"?i({type:"pressure",entity:a.pressure_sensor_entity}):r==="uv"?i({type:"uv",entity:a.uv_entity}):r==="rain"&&i({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity})}!n.includes("wind")&&(a.wind_speed_sensor_entity||a.wind_direction_sensor_entity)&&i({type:"wind",entity:a.wind_speed_sensor_entity,direction_entity:a.wind_direction_sensor_entity,view:!0}),!n.includes("uv")&&a.uv_entity&&i({type:"uv",entity:a.uv_entity,view:!0}),!n.includes("rain")&&(a.rain_entity||a.rain_rate_entity)&&i({type:"rain",entity:a.rain_entity,rate_entity:a.rain_rate_entity,view:!0}),a.uv_max_entity&&i({type:"uv_max",entity:a.uv_max_entity});for(let r of["rain_event","rain_week","rain_month","rain_year"]){let o=a[`${r}_entity`];o&&i({type:r,entity:o})}return e}var Hc=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],Si=a=>a?.entity&&!a.entity.startsWith("weather.")?a.entity:void 0;function vs(a){if(!Array.isArray(a.readings))return a;let t=oa(a),e=s=>t.find(l=>l.type===s),i={...a};for(let s of Hc)delete i[s];let n=e("wind"),r=e("rain"),o={humidity_sensor_entity:Si(e("humidity")),wind_speed_sensor_entity:Si(n),wind_direction_sensor_entity:n?.direction_entity,pressure_sensor_entity:Si(e("pressure")),uv_entity:Si(e("uv")),uv_max_entity:e("uv_max")?.entity,rain_entity:Si(r),rain_rate_entity:r?.rate_entity,rain_event_entity:e("rain_event")?.entity,rain_week_entity:e("rain_week")?.entity,rain_month_entity:e("rain_month")?.entity,rain_year_entity:e("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(i[s]=l);return i}var bs=a=>a.map((t,e)=>({r:t,i:e})).filter(({r:t})=>!t.view&&!(Oc(t.type)&&!t.entity)),xs=a=>[...new Set(a.flatMap(t=>[t.entity,t.direction_entity,t.rate_entity]).filter(t=>!!t))];var ra=[51,101,151,201,301],Rc=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function Ss(a){let t=a.aqi_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==5)return ra;let i=e.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,r)=>isFinite(n)&&(r===0||n>i[r-1]))?i:ra}function Cs(a,t=ra){let e=Math.round(a),i=0;for(;i<5&&e>=t[i];)i++;return Rc[i]}var sa=a=>{if(a==null||a==="")return null;let t=typeof a=="number"?a:parseFloat(String(a));return isFinite(t)?t:null},Ts=(a,t,e)=>{let i=e.entity?.startsWith("weather.")?e.entity:t.entity;return i?a?.states[i]:void 0},zc=(a,t)=>t.entity&&!t.entity.startsWith("weather.")?a?.states[t.entity]:void 0;function He(a,t,e,i,n=""){let r=zc(a,e),o=sa(r?.state);if(o!==null)return{value:o,unit:typeof r?.attributes?.unit_of_measurement=="string"?r.attributes.unit_of_measurement:n};if(e.entity&&!e.entity.startsWith("weather."))return{value:null,unit:""};let s=Ts(a,t,e),l=Me(aa,e.type),d=i?s?.attributes?.[i]:void 0;return{value:sa(l?s?.attributes?.[l]:void 0),unit:typeof d=="string"?d:n}}var Ci=(a,t)=>t?`${a} ${t}`:a,_e="--",Tn=(a,t,e)=>hi(a,`ui.card.weather.attributes.${t}`,K(a,e)),Wc={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},Nc=(a,t)=>K(a,`aqi_${t}`);function $c(a,t){let e=t.sun_entity?a?.states[t.sun_entity]:void 0,i=e?.state==="above_horizon",n=e?$t(i?e.attributes?.next_setting:e.attributes?.next_rising,a):_e;return{label:K(a,i?"sunset":"sunrise"),icon:i?"sunset":"sunrise",html:bn(n,"awc-ampm"),text:n}}function la(a,t,e){let i=(o,s=0)=>ue(s?o:Math.round(o),a,s),n=o=>`${ue(It(t)?o:Math.round(o),a,It(t))}\xB0`,r=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(e.type){case"humidity":{let{value:o}=He(a,t,e);return r(hi(a,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?_e:`${i(o)}%`)}case"wind":{let{value:o,unit:s}=He(a,t,e,"wind_speed_unit","km/h"),l=e.direction_entity?a?.states[e.direction_entity]?.state:void 0,d=bi(l)??bi(Ts(a,t,e)?.attributes?.wind_bearing);return{...r(hi(a,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?_e:Ci(i(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=He(a,t,e,"pressure_unit","hPa"),l=s||"hPa";return{...r(hi(a,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?_e:Ci(i(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return $c(a,t);case"uv":{let{value:o}=He(a,t,e),s=gs(a,t,o);return{label:K(a,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=yt(a,e.rate_entity,"mm/h"),s=yt(a,e.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return r(Sn(a,l),"rain",d?xi(d.value,d.unit,a):_e)}case"aqi":{let{value:o}=He(a,t,e);if(o===null)return{label:K(a,"aqi"),icon:"aqi",html:_e,text:_e,level:null};let s=Cs(o,Ss(t)),l=i(Math.max(0,o)),d=Nc(a,s);return{label:K(a,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=He(a,t,e);return r(K(a,"feels_like"),"thermometer",o===null?_e:n(o))}case"dew_point":{let{value:o}=He(a,t,e);return r(Tn(a,"dew_point","dew_point"),"thermometer",o===null?_e:n(o))}case"visibility":{let{value:o,unit:s}=He(a,t,e,"visibility_unit","km");return r(Tn(a,"visibility","visibility"),"eye",o===null?_e:Ci(i(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=He(a,t,e);return r(Tn(a,"cloud_coverage","cloud_cover"),"cloud",o===null?_e:`${i(o)}%`)}case"gust":{let{value:o,unit:s}=He(a,t,e,"wind_speed_unit","km/h");return r(Tn(a,"wind_gust_speed","gusts"),"wind",o===null?_e:Ci(i(o),s||"km/h"))}case"sensor":{let o=e.entity?a?.states[e.entity]:void 0,s=e.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:e.entity??""),l=Me(Wc,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return r(s,l,_e);let d;try{d=a?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=sa(o.state),h=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Ci(ue(c,a,Math.min(2,(String(o.state).split(".")[1]??"").length)),h)}return r(s,l,d)}default:{let o=yt(a,e.entity,e.type==="uv_max"?"":"mm");return r(e.type,e.type==="uv_max"?"noon":"rain",o?e.type==="uv_max"?i(o.value):xi(o.value,o.unit,a):_e)}}}function da(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function An(a,t){return{entity:t,tap_action:da(a?.tap_action),hold_action:da(a?.hold_action),double_tap_action:da(a?.double_tap_action)}}function qt(a){return!!a&&a.action!=="none"}function As(a){return a.tap_action?qt(a.tap_action):!!a.entity}function Ti(a,t,e,i={}){let n=t[`${e}_action`],r=n&&Object.prototype.hasOwnProperty.call(i,n.action)?i[n.action]:void 0;if(r){r(e);return}if(e==="tap"&&!n){t.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t.entity},bubbles:!0,composed:!0}));return}qt(n)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:t,action:e},bubbles:!0,composed:!0}))}function kn(a,t,e,i={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let n=null,r=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{n=null,l()},c=()=>{qt(e().double_tap_action)?s?(clearTimeout(s),s=void 0,Ti(t,e(),"double_tap",i)):s=setTimeout(()=>{s=void 0,Ti(t,e(),"tap",i)},250):Ti(t,e(),"tap",i)},h=u=>u.target!==a&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",u=>{u.button!==0||h(u)||(n={x:u.clientX,y:u.clientY},r=!1,l(),qt(e().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,Ti(t,e(),"hold",i)},500)))}),a.addEventListener("pointermove",u=>{n&&Math.hypot(u.clientX-n.x,u.clientY-n.y)>10&&d()}),a.addEventListener("pointerup",()=>{let u=!!n&&!r;d(),u&&c()}),a.addEventListener("pointercancel",d),a.addEventListener("pointerleave",d),a.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==a||!As(e())||(u.preventDefault(),Ti(t,e(),"tap",i))}),a.addEventListener("contextmenu",u=>{qt(e().hold_action)&&u.preventDefault()})}function Ai(a,t,e){As(t)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(e?a.setAttribute("role",e):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let i=qt(t.hold_action);a.style.userSelect=i?"none":"",a.style.setProperty("-webkit-user-select",i?"none":""),a.style.setProperty("-webkit-touch-callout",i?"none":"")}var ca=new Map;function wt(a,t){let e=ca.get(a);if(e)return e;let i=new Promise((n,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>t()?n():r(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return i.catch(()=>ca.delete(a)),ca.set(a,i),i}function ki(a){return wt("animated-weather-card-editor",()=>!!customElements.get(a))}var ks={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function _t(a,t){return`<svg class="${t} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${ks[a]}"/></svg>`}function Es(a,t){!a||a.getAttribute("data-icon")===t||(a.setAttribute("data-icon",t),a.firstElementChild?.setAttribute("d",ks[t]))}var Ic=29.530588853,qc=Date.UTC(2e3,0,6,18,14),Gc={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function Ms(a,t){let i=((a.getTime()-qc)/864e5/Ic%1+1)%1,n=t?Me(Gc,t):void 0;if(!n)return i;let r=i*28;return r>=27.5&&(r-=28),r=Math.min(n[1],Math.max(n[0],r)),(r/28%1+1)%1}function Ps(a,t=!1){let e=Math.cos(2*Math.PI*a),i=(1-e)/2,n=a<.5!==t,r=i<.5,o=(Math.abs(e)*50).toFixed(1),s=n===r?1:0,l=n?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,h=.3+.7*i;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*h).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*h).toFixed(3)})`}}var j=Math.PI/180,En=6e4,Ei=864e5;function ua(a){let t=(a/Ei+24405875e-1-2451545)/36525,e=(280.46646+t*(36000.76983+t*3032e-7))%360,i=357.52911+t*(35999.05029-1537e-7*t),n=.016708634-t*(42037e-9+1267e-10*t),r=Math.sin(i*j)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*i*j)*(.019993-101e-6*t)+Math.sin(3*i*j)*289e-6,o=125.04-1934.136*t,s=e+r-.00569-.00478*Math.sin(o*j),l=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(o*j),d=Math.asin(Math.sin(l*j)*Math.sin(s*j)),c=Math.tan(l/2*j)**2,h=4/j*(c*Math.sin(2*e*j)-2*n*Math.sin(i*j)+4*n*c*Math.sin(i*j)*Math.cos(2*e*j)-.5*c*c*Math.sin(4*e*j)-1.25*n*n*Math.sin(2*i*j));return{declination:d,equationOfTime:h}}function Bc(a,t,e){let{declination:i,equationOfTime:n}=ua(a.getTime()),o=((a.getUTCHours()*60+a.getUTCMinutes()+a.getUTCSeconds()/60+n+4*e)%1440+1440)%1440/4-180,s=Math.sin(t*j)*Math.sin(i)+Math.cos(t*j)*Math.cos(i)*Math.cos(o*j);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/j}function Ls(a,t,e=Te()){let i=e.getTime(),n=Math.floor(i/Ei)*Ei,r={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=a*j;for(let m=-1;m<=2;m++){let f=n+m*Ei,w=f+(720-4*t)*En,{equationOfTime:y}=ua(w),_=f+(720-4*t-y)*En,{declination:v}=ua(_);r.noon.push(_),r.midnight.push(_+Ei/2);for(let[b,S,C]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let A=(Math.sin(b*j)-Math.sin(o)*Math.sin(v))/(Math.cos(o)*Math.cos(v));if(!(Math.abs(A)<=1))continue;let T=Math.acos(A)/j*4;r[S].push(_-T*En),r[C].push(_+T*En)}}let s=m=>m.filter(f=>f>i).sort((f,w)=>f-w)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=Bc(e,a,t),c=s(r.rising),h=s(r.setting),u=s(r.noon),p=s(r.midnight);return{state:(h!==null&&c!==null?h<c:h!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(r.dawn)),next_dusk:l(s(r.dusk)),next_midnight:l(p),next_noon:l(u),next_rising:l(c),next_setting:l(h),elevation:Math.round(d*100)/100,rising:u!==null&&p!==null?u<p:!1}}}var Ds=a=>typeof a=="number"?a:typeof a=="string"&&a.trim()?Number(a):NaN;function Vc(a){let t=a.latitude!==void 0&&a.latitude!==null&&a.latitude!=="",e=a.longitude!==void 0&&a.longitude!==null&&a.longitude!=="",i=typeof a.time_zone=="string"&&a.time_zone.trim()?a.time_zone.trim():void 0;if(!t&&!e&&!i)return null;let n,r;if(t||e){if(n=Ds(a.latitude),r=Ds(a.longitude),!t||!e)throw new Error("latitude and longitude go together: set both, or neither");if(!(n>=-90&&n<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${a.latitude})`);if(!(r>=-180&&r<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${a.longitude})`)}if(i)try{new Intl.DateTimeFormat("en",{timeZone:i})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${i})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=n!==void 0&&r!==void 0?`sun.awc_${o(n)}_${o(r)}`:void 0;return{latitude:n,longitude:r,timeZone:i,sunId:s,key:`${s??""}|${i??""}`}}function Uc(a,t,e,i=[]){let n=a;if(n.awcPlace===t.key)return a;let r=n.awcHome??a,o=Object.create(r);if(t.sunId&&e){let s=Object.create(r.states);s[t.sunId]=e;let l=e.state==="above_horizon"?"sunny":"clear-night";for(let d of i){let c=d?r.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...r.config,...t.latitude!==void 0?{latitude:t.latitude,longitude:t.longitude}:{},...t.timeZone?{time_zone:t.timeZone}:{}},t.timeZone&&(o.locale={...r.locale??{},time_zone:"server"}),o.awcPlace=t.key,o.awcHome=r,o}function Yc(a,t=Te()){if(!a.sunId||a.latitude===void 0||a.longitude===void 0)return;let e=Ls(a.latitude,a.longitude,t),i=t.toISOString();return{entity_id:a.sunId,state:e.state,attributes:{...e.attributes,friendly_name:"Sun"},last_changed:i,last_updated:i,context:{id:"",parent_id:null,user_id:null}}}var Gt=class{constructor(t=()=>[]){this.weather=t;this.place=null;this.timer=0}set(t){let e=Vc(t),i=(e?.key??"")!==(this.place?.key??"");return this.place=e,i&&(this.sun=void 0),i}see(t){if(!this.place)return t;let e=Math.floor(di()/6e4);if(this.place.sunId&&this.sun?.minute!==e){let i=Yc(this.place);this.sun=i?{minute:e,entity:i}:void 0}return Uc(t,this.place,this.sun?.entity,this.weather())}tick(t){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(t,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var Os=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function Fs(a){let t=a.color_palette||"default",e=a.custom_colors||{},i="";if(t!=="theme"){let r=c=>{if(typeof c!="string"||!Os.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let u=parseInt(h,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(c,h,u)=>"#"+(c<<16|h<<8|u).toString(16).padStart(6,"0"),s=(c,h)=>{let u=r(c);if(!u)return c;let p=1-h/100;return o(Math.max(0,Math.floor(u.r*p)),Math.max(0,Math.floor(u.g*p)),Math.max(0,Math.floor(u.b*p)))},l=(c,h)=>{let u=r(c);if(!u)return c;let p=h/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*p)),Math.min(255,Math.floor(u.g+(255-u.g)*p)),Math.min(255,Math.floor(u.b+(255-u.b)*p)))},d=(c,h)=>{let u=e[c];if(!u||typeof u!="string"||!Os.test(u))return;let p=l(u,12),g=s(u,22);i+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${p} 0%, ${u} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let n=(r,o)=>{r&&ui(r)&&(i+=o.replace(/\$\{value\}/g,r))};return n(e.text_color,"--weather-text-color: ${value} !important; "),n(e.temperature_color,"--awc-hero-color: ${value} !important; "),n(e.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(e.rain_color,"--weather-rain-color: ${value} !important; "),n(e.snow_color,"--weather-snow-color: ${value} !important; "),i}var Bt="animated-weather-card-hour";var Vt="animated-weather-card-dev",Hs="weather.awc_dev";function Mi(a){return a.awcDevBase??a}function Pn(a,t){let e=Mi(a),i=window.AnimatedWeatherCardDev;if(!i||!t)return e;try{return i.wants(t)?i.lens(e,t):e}catch(n){return console.warn("Animated Weather Card: the dev card's world failed",n),e}}function Pi(a){return!!a?.dev_mode&&!window.AnimatedWeatherCardDev?.driven()}function Ln(){return window.AnimatedWeatherCardDev?.offset??0}function Ut(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function Li(){return window.AnimatedWeatherCardDevCards?Promise.resolve():wt("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Mn=class extends HTMLElement{setConfig(t){this.devCardConfig={...t},this.view?.update()}set hass(t){this.devCardHass=t,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}Li().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(t=>{console.warn(`Animated Weather Card: ${t.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var Rs={horizon:196,peak:34,trough:276,twilightRy:78},zs={horizon:200,peak:96,trough:262,twilightRy:44};function ha(a,t,e){let i=e-t;if(i<=0||i>=24)return 0;if(a>=t&&a<=e)return Math.sin(Math.PI*(a-t)/i);let n=((a-e)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var ma=(a,t=!1)=>t?1-a/24:a/24,vt=(a,t=!1)=>ma(a,t)*1e3,pa=(a,t)=>a>=0?t.horizon-a*(t.horizon-t.peak):t.horizon-a*(t.trough-t.horizon);var $s={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},Kc={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function jc(a){return Me(Kc,a)??"last-light"}function fa(a,t){let e=n=>n.startsWith("sensor.")&&Me($s,t.states[n]?.state)!==void 0,i=t?e("sensor.moon_phase")?"sensor.moon_phase":Object.keys(t.states).find(e):"sensor.moon_phase";return i?{sun_entity:a,moon_entity:i}:{sun_entity:a}}var Xc=124,Ws=16;function Zc(a,t){if(a<1)return 1;let e=Math.max(2,Math.floor((t+Ws)/(Xc+Ws))),i=Math.ceil(a/e);return Math.ceil(a/i)}function Qc(a,t,e,i){let n=[];for(let r=0;r<=240;r++){let o=r/10;n.push(`${vt(o,i).toFixed(1)},${pa(ha(o,a,t),e).toFixed(1)}`)}return"M"+n.join(" L")}function On(a,t){if(!a)return 0;let e=new Date(a);return isNaN(e.getTime())?0:Xr(e,t)}var Jc=a=>bn(a,"st-ampm");un();var Ns=Ve(Pe(Ht)),eu=`
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
        color: ${yi.text};
        background: ${yi.fill};
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
        --st-text: ${Ns};
        --st-secondary: ${Ns};
        --st-secondary-opacity: ${ln};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Rt(dn,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Nr.map(a=>`${a} ${at}s ${zt}`).join(", ")};
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
`,ga=class extends HTMLElement{constructor(){super();this.config={};this._place=new Gt(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=e=>this._follow(e.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",Pi(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let e=Ln();e!==this._devClock&&(this._devClock=e,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(e){return this._place.see(Pn(e,this.config))}setConfig(e){let i=this._place.set(e),n=this._place.place?.sunId;if(!e.sun_entity&&!n&&!e.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let r=!!this.config.dev_mode!=!!e.dev_mode;this.config={...e,sun_entity:n||e.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",Pi(this.config)),e.dev_mode&&Li().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(i||r)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(e){this._homeHass=Mi(e),e=this._see(e);let i=this.config.sun_entity||"",n=this.config.moon_entity||"",r=this._hass?.states[i],o=e.states[i],s=this._hass?.states[n]?.state,l=e.states[n]?.state,d=Nt(this._hass)!==Nt(e),c=this._weatherId()||"",h=c&&this._hass?.states[c]?.state!==e.states[c]?.state;this._hass=e;let u=r?.attributes?.elevation,p=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(p||0))>=.5||n&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Bt,this._onHour),window.addEventListener(Vt,this._onDev),Ut().add(this),this._unshare||(this._unshare=ds(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Bt,this._onHour),window.removeEventListener(Vt,this._onDev),Ut().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let e=this._shadow.querySelector(".st-card");if(!e)return;let i=e.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(e.dataset.fit=n,i){let r=Array.from(i.children).filter(o=>getComputedStyle(o).display!=="none").length;i.style.setProperty("--st-cols",String(Zc(r,i.clientWidth)))}if(e.scrollHeight<=e.clientHeight+1)return}}_actions(){let e=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return An(this.config,e)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||ls(this.config.sun_entity)}_skyCondition(e){let i=this._weatherId(),n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let r=Qi(n,void 0,void 0,this._hass?.config?.time_zone,{night:e==="night"});if(Wr.includes(r))return r}return e==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await ki("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(e,i=[],n=[]){let r=[...i,...n,...Object.keys(e?.states??{})];return fa(r.find(o=>o.startsWith("sun."))??"sun.sun",e)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let e=this._hass.states[this.config.sun_entity];return e?{sunrise:e.attributes.next_rising||null,sunset:e.attributes.next_setting||null,dawn:e.attributes.next_dawn||null,dusk:e.attributes.next_dusk||null,noon:e.attributes.next_noon||null,elevation:typeof e.attributes.elevation=="number"?e.attributes.elevation:null,aboveHorizon:e.state==="above_horizon",rising:!!e.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let e=this._hass.states[this.config.moon_entity];if(!e)return null;let i=e.state,n;try{n=this._hass.formatEntityState?.(e)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Me($s,i)||i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:jc(i)}}_render(){this._drawnWeather=this._weatherId();let e=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!e||!e.sunrise||!e.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=Te(),o=Xr(r,this._hass),s=On(e.sunrise,this._hass),l=On(e.sunset,this._hass),d=e.dawn?On(e.dawn,this._hass):Math.max(0,s-.5),c=e.dusk?On(e.dusk,this._hass):Math.min(24,l+.5),h=l-s,u=e.aboveHorizon,p=u?e.sunset:e.sunrise,g=new Date(p).getTime()-r.getTime(),m=this._hass,f=ee=>M(K(m,ee)),w=ee=>Jc($t(ee,m)),y=g>0?K(m,"in_duration",{duration:Zr(g/36e5,m)}):"",_=cn(e.elevation,e.rising,e.aboveHorizon),v=Ft(this._skyCondition(_),_),b=n?{"--awc-sky-top":v.top,"--awc-sky-mid":v.mid,"--awc-sky-bottom":v.bottom,"--awc-sky-glow":v.glow,"--awc-sky-scrim":v.scrim}:null,S=this.config.compact?zs:Rs,C=this.config.direction,A=C==="right_to_left"||C!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:A};let T=Qc(s,l,S,A),x=`${T} L${vt(24,A)},${S.horizon} L${vt(0,A)},${S.horizon} Z`,E=ha(o,s,l),P=ma(o,A)*100,O=pa(E,S)/300*100,R=(ee,I)=>{let X=Math.max(70,Math.abs(I)/24*1e3*2.4);return`<ellipse cx="${vt(ee,A).toFixed(1)}" cy="${S.horizon}" rx="${X.toFixed(1)}" ry="${S.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},z=!!this.config.compact,N=this.config.show_header!==!1,W=N?`
            <div class="st-hero">
                ${this.config.title&&!z?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${_t(u?"sunset":"sunrise","st-glyph")}
                    <span>${f(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(p)}</div>
                ${y?`<div class="st-countdown">${M(y)}</div>`:""}
            </div>`:this.config.title&&!z?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",V=(ee,I,X,ae,Ue=!1)=>`
                <div class="st-metric" data-kind="${M(ee)}">
                    <div class="st-metric-label">${_t(I,"st-glyph")}<span title="${M(X)}">${M(X)}</span></div>
                    <div class="st-metric-value${Ue?" wrap":""}">${ae}</div>
                </div>`,ve=!z&&this.config.show_details!==!1,Re=z&&N?`
                        <div class="st-chart-note">${f(u?"sunrise":"sunset")}<span class="st-chart-note-time">${w(u?e.sunrise:e.sunset)}</span></div>`:"",ze=ve?`
            <div class="st-metrics">
                ${u?V("sunrise","sunrise",f("sunrise"),w(e.sunrise)):V("sunset","sunset",f("sunset"),w(e.sunset))}
                ${V("noon","noon",f("solar_noon"),w(e.noon))}
                ${V("daylight","daylight",f("daylight"),M(Zr(h,m)))}
                ${V("first-light","first-light",f("first_light"),w(e.dawn))}
                ${V("last-light","last-light",f("last_light"),w(e.dusk))}
                ${i?V("moon",i.icon,f("moon"),M(i.phaseName),!0):""}
            </div>`:"",J=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,We="";try{We=J&&m?.formatEntityState?.(J)||""}catch{}let he=[`${K(m,"sunrise")} ${$t(e.sunrise,m)}`,`${K(m,"sunset")} ${$t(e.sunset,m)}`,We].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${W}
                    <div class="st-chart" role="img" aria-label="${M(he)}">
                        <svg viewBox="0 0 ${1e3} ${300}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${1e3}" height="${S.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${S.horizon}" width="${1e3}" height="${300-S.horizon}"/></clipPath>
                            </defs>
                            ${R(s,s-d)}
                            ${R(l,c-l)}
                            <path d="${x}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${S.horizon}" x2="${1e3}" y2="${S.horizon}" class="st-horizon"/>
                            <line x1="${vt(o,A).toFixed(1)}" y1="0" x2="${vt(o,A).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${T}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${T}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${E<0?"below":""}" style="left: ${P.toFixed(2)}%; top: ${O.toFixed(2)}%;"></div>${Re}
                    </div>
                    ${ze}`,b)}_mount(e,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${eu}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),kn(n.parentElement,this,()=>this._actions())),Ai(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",r);for(let o of Nr)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=e,this._link&&this._follow(),this._fit()}_follow(e){if(e){if(!e.source||e.sun!==this.config.sun_entity||e.at===null&&!this._link)return;if(this._link=e.at===null?null:e,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let i=this._shadow.querySelector(".st-card");i&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:i,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",ga);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,t)=>t.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...fa(t,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...fa(t,a),compact:!0}}]:null});function Yt(a){let t=Number(a?.attributes?.supported_features);if(!isFinite(t))return["hourly","daily"];let e=[];return t&2&&e.push("hourly"),t&4&&e.push("twice_daily"),t&1&&e.push("daily"),e}function Is(a){let t=Yt(a);return t.includes("daily")?"daily":t.includes("twice_daily")?"twice_daily":null}var tu=5e3;function iu(){let a=new WeakMap;return{subscribe(t,e,i,n){let r=a.get(t);r||a.set(t,r=new Map);let o=`${e}|${i}`,s=r.get(o);if(!s){let d={listeners:new Set};s=d,r.set(o,d);let c=h=>{d.last=h;for(let u of[...d.listeners])u(h)};d.unsubscribe=t.subscribeMessage(h=>c({type:h?.type??i,forecast:Array.isArray(h?.forecast)?h.forecast:null}),{type:"weather/subscribe_forecast",entity_id:e,forecast_type:i}).catch(()=>{r.get(o)===d&&r.delete(o),c({type:i,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(n),l.last&&n(l.last),()=>{!l.listeners.delete(n)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(r.get(o)===l&&r.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},tu))}}}}function nu(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=iu())}function qs(a,t,e,i){return a?.connection?.subscribeMessage?nu().subscribe(a.connection,t,e,i):()=>{}}var Fn=class{constructor(t){this.changed=t;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(t,e,i){let n=e?t?.states[e]:void 0,r=Yt(n),o=i.hourly&&r.includes("hourly"),s=i.daily?Is(n):null,l=`${e}|${o}|${s}`;if(!t?.connection||!e||!n){this.key&&this.stop();return}if(l===this.key&&this.connection===t.connection)return;this.stop(),this.key=l,this.connection=t.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,h)=>{this.stops.push(qs(t,e,c,u=>{u.failed||h(u.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let t of this.stops)t();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};un();var Gs=a=>`Wind from ${Math.round(a)}\xB0`,Bs=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ru=18,au=450,ou=1600;function Kt(a,t){return t?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var su=400,lu=120,du=220,cu=24;window.AnimatedWeatherCardGsap=Er;var Vs=["regular","compact","short","tight","minimal"],uu=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...Vs.map(a=>[a,"none"])],Hn=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Gt(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new _n;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new Fn(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let e=Ln();e!==this.devClock&&(this.devClock=e,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0))};this.devClock=0;this.onNeedle=e=>{let i=e.detail;this.following||this.forecastOn()||i?.at==null||i.source===this||i.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(e,i=[],n=[]){let r=[...i,...n,...Object.keys(e?.states??{})];return Kt(r.find(o=>o.startsWith("weather."))??Mr.entity,e)}actionsConfig(){if(this.surface==="view")return{};let e=An(this.config,this.config?.entity);return e.tap_action?e:this.config?.layout==="nightstand"&&this.surface==="card"?{...e,tap_action:{action:"none"}}:this.forecastOn()?{...e,tap_action:{action:"forecast"}}:e}see(e){return this.placeView.see(Pn(e,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&Pi(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let e=this.isConnected&&this.surface!=="view";Br(this,e?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let e=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:e!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let e=window.AnimatedWeatherCardForecast;if(!e){wt("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}e.version===2&&(this.extras=e.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Ft,phase:()=>this.currentSkyPhase(),current:()=>{let e=this.config?.outdoor_sensor_entity||this.config?.entity,i=Number(e?this.config?.outdoor_sensor_entity?this._hass?.states[e]?.state:this._hass?.states[e]?.attributes?.temperature:NaN);return isFinite(i)?i:void 0},temperature:e=>{let i=this.config?It(this.config):0;return ue(i?e:Math.round(e),this._hass,i).replace(/^-/,"\u2212")},conditionName:e=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:e,attributes:{},last_changed:"",last_updated:""})??e,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(e=>(e.type==="aqi"||e.type==="sensor")&&!!e.entity).map(e=>{let i=la(this._hass,this.config,e);return{label:i.label,value:i.value??i.text,...i.word?{word:i.word}:{},...i.level?{level:i.level}:{}}}),reading:(e,i)=>{if(!this.config)return null;if(e==="rain_today"||e==="rain_now"){let o=e==="rain_now"?yt(this._hass,this.config.rain_rate_entity,"mm/h"):yt(this._hass,this.config.rain_entity,"mm");return!o||e==="rain_now"&&!(o.value>0)?null:{label:Sn(this._hass,e==="rain_now"),value:xi(o.value,o.unit,this._hass)}}if(e!=="uv")return null;let n=i??ea(this._hass,this.config);if(n===null||!isFinite(n))return null;let r=vi(n,_i(this.config));return{label:K(this._hass,"uv_index"),value:ue(Math.max(0,Math.round(n)),this._hass),word:ta(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=h=>h===void 0||typeof h=="number"&&isFinite(h)&&h>=0&&h<=23;if(!i(e.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${e.sunrise_hour})`);if(!i(e.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${e.sunset_hour})`);let n=this.placeView.set(e),r=this.placeView.place?.sunId;r&&(e={...e,sun_entity:r}),e=vs(e);let o=oa(e),s=JSON.stringify(o)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(h=>this.config?.[h]!==e[h]);this.readingList=o;let l=!!this.config?.dev_mode!=!!e.dev_mode;e.dev_mode&&(e.entity||(e={...e,entity:Hs}),Li().then(()=>this.devChanged()).catch(h=>console.warn(`Animated Weather Card: ${h.message}`)));let d=this.config?.auto_pause;this.config?.flights_entity!==e.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==e.entity&&(this.following=!1),this.config=e,this.markDev(),s&&this.redrawRow(),(n||l)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&Ai(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let h=this.animationController;this._animationGeneration++,this.animationController=new Wt(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),h&&h.stopAllAnimations().catch(u=>k(this.config?.dev_mode,"Error stopping previous animation controller:",u))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!e.auto_pause!=!!d&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Bt,this.onNeedle),window.addEventListener(Vt,this.devChanged),this.surface!=="view"&&Ut().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new Wt(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new Wt(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;Lr(this),this.stopPlanes();let e=this.config.color_palette||"default",i;try{i=ia(this.hass,this.config)}catch(w){let y=w?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${_t("alert","awc-empty-icon")}
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M(y)}</div>
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
            `;return}let{temperature:n,weatherCondition:r,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:h}=i,u=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let p=!!this.config.compact,g=this.heroClock(),m=Fs(this.config),f=this.rowHtml(u);this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions${this.surface==="view"?"":" loading"} ${e==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${p?' data-variant="compact"':""} style="${M(m)}">
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
                ${this.locationHtml(p,o)}
                ${g?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>`}
                ${p?`<div class="compact-meta">${this.config.show_clock&&!g?'<span class="awc-clock"></span>':""}${this.config.show_date?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,d))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(d,c,h)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${p?"":f}
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
        ${Yr()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(e,i){if(e)return"";let n=this.config?.show_location!==!1&&i?`<span class="awc-place">${M(i)}</span>`:"",r=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return n||r||o?`<div class="location">${r}${o}${n}</div>`:""}heroTime(){let{time:e,period:i}=hs(Te(),this._hass);return i?`${M(e)}<span class="awc-ampm">${M(i)}</span>`:M(e.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let e=this.querySelector("ha-card");if(!e)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";e.style.setProperty("overflow",i,"important");let n=()=>{let r=e.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!e.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let e=this.querySelector(".animated-weather-card");if(!e||e.classList.contains("loading")){this.initializeAnimations();return}e.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},su)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let e=window.AnimatedWeatherCardNote;if(e){this.noteWriter??(this.noteWriter=new e(this)),this.noteWriter.start();return}wt("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(e){this.writtenNote=e,this.updateNote()}noteWriting(e){this.noteComing!==e&&(this.noteComing=e,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let e=this.config.note_entity?ys(this._hass,this.config):this.writtenNote,i=e?ws(e,this.config):null;if(!e||i===null)return e;let n=i-di();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),e)}noteHtml(e){return`<p class="weather-note"${e?"":" hidden"}><span class="note-long">${M(e?.note??"")}</span><span class="note-short">${M(e?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let e=this.querySelector(".weather-note");if(!e)return;let i=e.querySelector(".note-long"),n=e.querySelector(".note-short"),r=e.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=e.querySelector(".note-phrase"),d=K(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||e.hidden?(l&&(l.textContent=d),e.dataset.writing="",e.setAttribute("aria-busy","true"),e.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}r&&(delete e.dataset.writing,e.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!e.hidden||r)&&(e.hidden=!0,this.applySizeState());return}if(e.hidden||r){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),e.hidden=!1,this.applySizeState(),r&&this.typeIn(e);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(e,i){return[this.config?.show_location!==!1?e:"",i?`${K(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let e=this.config?.indoor_style,i=M(K(this._hass,"indoors")),n=_t("indoor","indoor-icon");if(e==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let r=`<span class="indoor-label">${i}</span>`;return e==="both"?n+r:r}heroMetaHtml(e,i,n){let r=[];e&&r.push(`<span class="feels-like">${M(K(this._hass,"feels_like"))} ${M(e)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}attachEventListeners(){this.mountNoteWriter();let e=this.querySelector(".weather-info");if(e&&(kn(e,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Ai(e,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(i)}}setAnimationsPaused(e){this.animationsPaused=e,this.toggleAttribute("data-paused",e),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),Xi(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),Zi(this),this.flyHeldPlanes())}getWeatherSettings(e){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return ie(this.config,e)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let e=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n||(this.clearAnimations(),!this.hass||!i.entity))return;let r=this.hass.states[i.entity];if(!r)return;let o=r.state.toLowerCase(),s=Qi(o,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone,{clock:!!i.enable_day_night_cycle,night:this.skyIsNight()}),l=(i.color_palette||"default")==="theme"?"theme-colors":"",d=n.classList.contains("loading"),c=(...u)=>{n.className=["animated-weather-card",s,...u,l,d?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),d&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},h=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||h||!this.weatherShown()){let u=s==="clear-night"&&this.surface!=="forecast";c(i.animate===!1?"static":"",u?"individual-stars-active":"");let p=n.querySelector(".animation-layer");u&&p&&qr(p,Ir(ie(i).cloudCount,n.clientWidth),{moon:!0,still:!0,words:gi(n)}),this.currentWeatherClass=s;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&e===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=s,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(s)),this.startPlanes()}},i.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Lr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(pi(this),n.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(an(i),No(i));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),Pr(this.pendingTimeouts)}set hass(e){this.homeHass=Mi(e),e=this.see(e);let i=this._hass;if(this._hass=e,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!i){this.render(),this.initializeAnimations();return}if(Nt(i)!==Nt(e)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let n=i.states[this.config.entity],r=e.states[this.config.entity];if(!n||!r){this.render(),this.initializeAnimations();return}if(n.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(n.attributes[d])!==s(r.attributes[d])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==e.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...xs(this.readingList)];for(let c of d){if(!c)continue;let h=i.states[c],u=e.states[c];if(h?.state!==u?.state||h?.attributes?.unit_of_measurement!==u?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";i.states[d]!==e.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let e;try{e=ia(this._hass,this.config)}catch{return}let{temperature:i,weatherCondition:n,windSpeedValue:r,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=e;this.currentWindSpeedValue=r;let c=!!this.extras?.away(),h=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,u=h&&this.extras?.conditionText(h)||n,p=(w,y)=>{w&&w.textContent!==y&&(w.textContent=y)};c||(this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),u));let g=this.updatePressureTrend(o);c||this.updateRow(g);let m=this.querySelector(".compact-meta .awc-meta-text");m&&p(m,this.compactMeta(e.location,s)),p(this.querySelector(".location .awc-place"),e.location);let f=this.querySelector(".hero-meta");if(f){let w=this.heroMetaHtml(s,l,d),y=f.querySelector(".awc-line");Array.from(f.children).filter(v=>v!==y).map(v=>v.outerHTML).join("")!==w&&(f.innerHTML=w,y&&f.prepend(y))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(r)}rowItem(e,i,n,r){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?_t(n.icon,"attribute-icon"):""}${s?`<span>${M(n.label)}</span>`:""}</div>`:"",d=e.type==="wind"&&typeof n.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${n.bearing+180}deg);" aria-label="${Gs(n.bearing)}"></ha-icon>`:e.type==="pressure"&&r?`<ha-icon class="pressure-trend ${r}" icon="${Bs(r)}" aria-label="Pressure ${r}"></ha-icon>`:"",c=n.level?` data-level="${M(n.level)}"`:"";return`<div class="attribute" data-kind="${e.type}" data-i="${i}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${n.html}</span>${d}</div></div>`}shownReadings(){return this.config?bs(this.readingList).map(({r:e,i})=>({r:e,i,v:la(this._hass,this.config,e)})).filter(({r:e,v:i})=>e.type!=="sun"||i.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(e){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:n,i:r,v:o})=>this.rowItem(n,r,o,e)).join("")}</div>`}redrawRow(){let e=this.querySelector(".animated-weather-card .weather-info");if(!e||this.config?.compact)return;let i=e.querySelector(":scope > .weather-attributes"),n=this.rowHtml(this._pressureTrend??null).trim();if(i)n?i.outerHTML=n:i.remove();else if(n){let r=e.querySelector(":scope > .fc-section");r?r.insertAdjacentHTML("beforebegin",n):e.insertAdjacentHTML("beforeend",n)}this.applySizeState()}updateRow(e){let i=this.querySelector(".weather-attributes");if(!i||!this.config)return;let n=this.shownReadings();if([...i.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==n.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of n){let d=i.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let h=d.querySelector(".attribute-label > span");h&&h.textContent!==l.label&&(h.textContent=l.label),Es(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:Gs(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",e?{icon:Bs(e),label:`Pressure ${e}`,className:e}:null)}}updatePressureTrend(e){return typeof e!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=e:Math.abs(e-this._lastPressureValue)>=.5&&(this._pressureTrend=e>this._lastPressureValue?"rising":"falling",this._lastPressureValue=e),this._pressureTrend??null)}syncValueIcon(e,i,n){let r=e.querySelector(".attribute-value");if(!r)return;let o=r.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(e){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(e.querySelectorAll(".note-long, .note-short")).map(u=>{let p=u.textContent??"",g=document.createElement("span");g.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=p,u.replaceChildren(g,m),{span:u,text:p,typed:g,rest:m}}),n=Math.max(0,...i.map(u=>u.text.length)),r=Math.min(ou,Math.max(au,n*ru)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:i.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of i)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let u=Math.min(1,(Date.now()-l)/r);for(let p of i){let g=Math.round(u*p.text.length);p.typed.textContent=p.text.slice(0,g),p.rest.textContent=p.text.slice(g)}u<1?d=o(h):c.finish()};this.noteTyping=c,d=o(h)}fadeThrough(e,i,n){if(!e)return;let r=this.heroTextPending.get(e);if((r??e.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof e.animate!="function"||o){e.textContent=i,n?.();return}if(this.heroTextPending.set(e,i),r!==void 0)return;let s=()=>{let d=this.heroTextPending.get(e);this.heroTextPending.delete(e),d!==void 0&&(e.textContent=d),n?.()},l=e.animate([{opacity:1},{opacity:0}],{duration:lu,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),e.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:du,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let e=window.AnimatedWeatherCardPlanes;if(!e){wt("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new e(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=i,i.start().then(()=>{if(this.animationsPaused)i.pause();else if(this.planes===i){this.flyHeldPlanes();let n=this.askedPlanes;this.askedPlanes=void 0,n&&this.flyPlanes(n)}}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let e=this.planes;e&&(this.planes=void 0,e.destroy().catch(i=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let e=this._hass?.states[this.config.flights_entity];if(e&&e===this.lastFlightsState)return;this.lastFlightsState=e;let i=!this.flightTracker.seeded,n=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(Vr(this._hass,this.config.flights_entity),n);r.length&&(i&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let e=this.heldPlanes;if(!e||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let i=(Vr(this._hass,this.config?.flights_entity)??[]).filter(n=>!n.onGround&&e.has(n.id));i.length&&this.flyPlanes(i)}flyOver(e){let i=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||i)){if(this.planes){this.flyPlanes(e);return}this.devPlanes=!0,this.askedPlanes=e,this.startPlanes()}}flyPlanes(e){!this.planes||this.animationsPaused||this.planes.flyOver(e,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let e=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;e!==this.animationsPaused&&this.setAnimationsPaused(e)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(e=>{this.offscreen=!e[e.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),Br(this),window.removeEventListener(Bt,this.onNeedle),window.removeEventListener(Vt,this.devChanged),Ut().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Pr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new vn({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(e=>{this.onTimeOfDayChanged(e)}),this.config?.enable_day_night_cycle){let e=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(e)}}onTimeOfDayChanged(e){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${e.timePhase}`),this.updateDayNightBackground(e))}updateDayNightBackground(e){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let e=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!e)return"day";let i=e.attributes?.elevation;return cn(typeof i=="number"?i:Number(i),!!e.attributes?.rising,e.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let e=this.querySelector(".animated-weather-card");if(!e)return;let i=this.currentSkyPhase();e.dataset.phase!==i&&(e.dataset.phase=i),this.applyMoon(e)}applyMoon(e){let i=e.querySelector(".animation-layer");if(!i)return;let n=this.config?.moon_entity,r=Ms(Te(),n?this._hass?.states[n]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(i.dataset.moon===s)return;i.dataset.moon=s;let l=Ps(r,o);i.style.setProperty("--awc-moon-mask",l.mask),i.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let e=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(e)?e:void 0}applySizeState(){let e=this.querySelector(".animated-weather-card"),i=e?.querySelector(".weather-info");if(!e||!i)return;cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>os(e));let n=e.querySelector(".main-weather-info"),r=e.querySelector(".weather-attributes");if(e.dataset.height="regular",e.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let m=e.dataset.metrics;e.dataset.metrics="row";let f=Array.from(r.children),w=parseFloat(getComputedStyle(r).columnGap)||0,y=f.reduce((b,S)=>b+S.getBoundingClientRect().width,0)+w*Math.max(0,f.length-1),_=r.clientWidth-y,v=_<-.5||m==="grid"&&_<cu;e.dataset.metrics=v?"grid":"row"}let o=e.dataset.variant==="compact",s=o?e.querySelector(".weather-desc"):null,l=e.querySelector(".weather-note"),d=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,h=!!l&&!l.hidden?uu:Vs.map(m=>[m,void 0]),u=([m,f])=>{e.dataset.height=m,f?e.dataset.note=f:delete e.dataset.note},p=this.extras,g=p?.levels()??[];if(!p||!g.length){for(let m of h)if(u(m),!d())break;p?.fitted();return}for(let m=0;m<g.length;m++){p.setLevel(g[m]);let f=m===g.length-1;for(let w of h){if(!f&&!["regular","close","compact"].includes(w[0]))break;if(u(w),!d()&&(f||p.levelOk(d))){p.fitted();return}}}p.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let e=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(Yt(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+e:4+e}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let e=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return e?Math.ceil((e*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let e=3;return this.config?.show_indoor!==!1&&(e+=1),this.config?.show_attributes!==!1&&(e+=1),this.noteEnabled()&&(e+=1),this.config?.show_forecast&&(e+=3+this.dayRows()),e}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await ki("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Hn);var ya=class extends Hn{constructor(){super(),this.surface="forecast"}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(t)}gridRows(){if(this.config?.compact)return 2;let t=this.config?.show_hours!==!1&&Yt(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),e=Math.max(0,Math.min(10,this.config?.forecast_days??7));return t?e<=3?5:7:Math.max(3,Math.ceil((58+e*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(t,e=[],i=[]){let n=[...e,...i,...Object.keys(t?.states??{})];return Kt(n.find(r=>r.startsWith("weather."))??Mr.entity,t)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await ki("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",ya);customElements.define("animated-weather-dev-card",Mn);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,t)=>t.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Kt(t,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Kt(t,a),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,t)=>t.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Kt(t,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Kt(t,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=Ft("sunny","day"),t=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${To} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${Ve(Pe(Ht))}`,"border-radius: 4px 0 0 4px",...t].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...t].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
