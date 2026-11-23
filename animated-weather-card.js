"use strict";(()=>{function Ie(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hr(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ge={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ai={duration:.5,overwrite:!1,delay:0},da,ne,I,Me=1e8,R=1/Me,Jn=Math.PI*2,cl=Jn/4,ul=0,Rr=Math.sqrt,hl=Math.cos,ml=Math.sin,J=function(t){return typeof t=="string"},U=function(t){return typeof t=="function"},Ge=function(t){return typeof t=="number"},ji=function(t){return typeof t>"u"},ze=function(t){return typeof t=="object"},pe=function(t){return t!==!1},ca=function(){return typeof window<"u"},$i=function(t){return U(t)||J(t)},zr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},oe=Array.isArray,fl=/random\([^)]+\)/g,pl=/,\s*/g,Ar=/(?:-?\.?\d|\.)+/gi,ua=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ht=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Un=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ha=/[+-]=-?[.\d]+/,gl=/[^,'"\[\]\s]+/gi,yl=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,B,He,ea,ma,Ce={},Bi={},Wr,Nr=function(t){return(Bi=Ct(t,Ce))&&se},Xi=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ri=function(t,e){return!e&&console.warn(t)},$r=function(t,e){return t&&(Ce[t]=e)&&Bi&&(Bi[t]=e)||Ce},oi=function(){return 0},wl={suppressEvents:!0,isStart:!0,kill:!1},Ii={suppressEvents:!0,kill:!1},_l={suppressEvents:!0},fa={},Xe=[],ta={},Ir,me={},Yn={},Er=30,qi=[],pa="",ga=function(t){var e=t[0],i,n;if(ze(e)||U(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=qi.length;n--&&!qi[n].targetTest(e););i=qi[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new va(t[n],i)))||t.splice(n,1);return t},Ze=function(t){return t._gsap||ga(Pe(t))[0]._gsap},ya=function(t,e,i){return(i=t[e])&&U(i)?t[e]():ji(i)&&t.getAttribute&&t.getAttribute(e)||i},de=function(t,e){return(t=t.split(",")).forEach(e)||t},Y=function(t){return Math.round(t*1e5)/1e5||0},G=function(t){return Math.round(t*1e7)/1e7||0},mt=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},vl=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Vi=function(){var t=Xe.length,e=Xe.slice(0),i,n;for(ta={},Xe.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},wa=function(t){return!!(t._initted||t._startAt||t.add)},qr=function(t,e,i,n){Xe.length&&!ne&&Vi(),t.render(e,i,n||!!(ne&&e<0&&wa(t))),Xe.length&&!ne&&Vi()},Gr=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gl).length<2?e:J(t)?t.trim():t},Br=function(t){return t},Te=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},bl=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Ct=function(t,e){for(var i in e)t[i]=e[i];return t},Mr=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ze(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Ui=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},ti=function(t){var e=t.parent||B,i=t.keyframes?bl(oe(t.keyframes)):Te;if(pe(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},xl=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Vr=function(t,e,i,n,a){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],s;if(a)for(s=e[a];o&&o[a]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Zi=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e._prev,o=e._next;a?a._next=o:t[i]===e&&(t[i]=o),o?o._prev=a:t[n]===e&&(t[n]=a),e._next=e._prev=e.parent=null},Qe=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},dt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Sl=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ia=function(t,e,i,n){return t._startAt&&(ne?t._startAt.revert(Ii):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Cl=function r(t){return!t||t._ts&&r(t.parent)},Pr=function(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0},Tt=function(t,e){var i=Math.floor(t=G(t/e));return t&&i===t?i-1:i},Yi=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qi=function(t){return t._end=G(t._start+(t._tDur/Math.abs(t._ts||t._rts||R)||0))},Ji=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=G(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qi(t),i._dirty||dt(i,t)),t},Ur=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Yi(t.rawTime(),e),(!e._dur||di(0,e.totalDuration(),i)-e._tTime>R)&&e.render(i,!0)),dt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-R}},Re=function(t,e,i,n){return e.parent&&Qe(e),e._start=G((Ge(i)?i:i||t!==B?Ee(t,i,e):t._time)+e._delay),e._end=G(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Vr(t,e,"_first","_last",t._sort?"_start":0),na(e)||(t._recent=e),n||Ur(t,e),t._ts<0&&Ji(t,t._tTime),t},Yr=function(t,e){return(Ce.ScrollTrigger||Xi("scrollTrigger",e))&&Ce.ScrollTrigger.create(e,t)},Kr=function(t,e,i,n,a){if(Sa(t,e,a),!t._initted)return 1;if(!i&&t._pt&&!ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ir!==fe.frame)return Xe.push(t),t._lazy=[a,n],1},Tl=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},na=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},kl=function(t,e,i,n){var a=t.ratio,o=e<0||!e&&(!t._start&&Tl(t)&&!(!t._initted&&na(t))||(t._ts<0||t._dp._ts<0)&&!na(t))?0:1,s=t._rDelay,l=0,d,c,h;if(s&&t._repeat&&(l=di(0,t._tDur,e),c=Tt(l,s),t._yoyo&&c&1&&(o=1-o),c!==Tt(t._tTime,s)&&(a=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==a||ne||n||t._zTime===R||!e&&t._zTime){if(!t._initted&&Kr(t,e,n,i,l))return;for(h=t._zTime,t._zTime=e||(i?R:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,d=t._pt;d;)d.r(o,d.d),d=d._next;e<0&&ia(t,e,i,!0),t._onUpdate&&!i&&Se(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Se(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Qe(t,1),!i&&!ne&&(Se(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Al=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},kt=function(t,e,i,n){var a=t._repeat,o=G(e)||0,s=t._tTime/t._tDur;return s&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=a?a<0?1e10:G(o*(a+1)+t._rDelay*a):o,s>0&&!n&&Ji(t,t._tTime=t._tDur*s),t.parent&&Qi(t),i||dt(t.parent,t),t},Lr=function(t){return t instanceof re?dt(t):kt(t,t._dur)},El={_start:0,endTime:oi,totalDuration:oi},Ee=function r(t,e,i){var n=t.labels,a=t._recent||El,o=t.duration()>=Me?a.endTime(!1):t._dur,s,l,d;return J(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),d=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(s<0?a:i).totalDuration()/100:1)):s<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),d&&i&&(l=l/100*(oe(i)?i[0]:i).totalDuration()),s>1?r(t,e.substr(0,s-1),i)+l:o+l)):e==null?o:+e},ii=function(t,e,i){var n=Ge(e[1]),a=(n?2:1)+(t<2?0:1),o=e[a],s,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(s=o,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=pe(l.vars.inherit)&&l.parent;o.immediateRender=pe(s.immediateRender),t<2?o.runBackwards=1:o.startAt=e[a-1]}return new X(e[0],o,e[a+1])},Je=function(t,e){return t||t===0?e(t):e},di=function(t,e,i){return i<t?t:i>e?e:i},ae=function(t,e){return!J(t)||!(e=yl.exec(t))?"":e[1]},Ml=function(t,e,i){return Je(i,function(n){return di(t,e,n)})},aa=[].slice,jr=function(t,e){return t&&ze(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ze(t[0]))&&!t.nodeType&&t!==He},Pl=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var a;return J(n)&&!e||jr(n,1)?(a=i).push.apply(a,Pe(n)):i.push(n)})||i},Pe=function(t,e,i){return I&&!e&&I.selector?I.selector(t):J(t)&&!i&&(ea||!At())?aa.call((e||ma).querySelectorAll(t),0):oe(t)?Pl(t,i):jr(t)?aa.call(t,0):t?[t]:[]},ra=function(t){return t=Pe(t)[0]||ri("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Pe(e,i.querySelectorAll?i:i===t?ri("Invalid scope")||ma.createElement("div"):t)}},Xr=function(t){return t.sort(function(){return .5-Math.random()})},Zr=function(t){if(U(t))return t;var e=ze(t)?t:{each:t},i=ct(e.ease),n=e.from||0,a=parseFloat(e.base)||0,o={},s=n>0&&n<1,l=isNaN(n)||s,d=e.axis,c=n,h=n;return J(n)?c=h={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],h=n[1]),function(u,f,g){var m=(g||e).length,p=o[m],w,y,_,b,v,S,C,T,k;if(!p){if(k=e.grid==="auto"?0:(e.grid||[1,Me])[1],!k){for(C=-Me;C<(C=g[k++].getBoundingClientRect().left)&&k<m;);k<m&&k--}for(p=o[m]=[],w=l?Math.min(k,m)*c-.5:n%k,y=k===Me?0:l?m*h/k-.5:n/k|0,C=0,T=Me,S=0;S<m;S++)_=S%k-w,b=y-(S/k|0),p[S]=v=d?Math.abs(d==="y"?b:_):Rr(_*_+b*b),v>C&&(C=v),v<T&&(T=v);n==="random"&&Xr(p),p.max=C-T,p.min=T,p.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(k>m?m-1:d?d==="y"?m/k:k:Math.max(k,m/k))||0)*(n==="edges"?-1:1),p.b=m<0?a-m:a,p.u=ae(e.amount||e.each)||0,i=i&&m<0?Gl(i):i}return m=(p[u]-p.min)/p.max||0,G(p.b+(i?i(m):m)*p.v)+p.u}},oa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=G(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Ge(i)?0:ae(i))}},Qr=function(t,e){var i=oe(t),n,a;return!i&&ze(t)&&(n=i=t.radius||Me,t.values?(t=Pe(t.values),(a=!Ge(t[0]))&&(n*=n)):t=oa(t.increment)),Je(e,i?U(t)?function(o){return a=t(o),Math.abs(a-o)<=n?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),d=Me,c=0,h=t.length,u,f;h--;)a?(u=t[h].x-s,f=t[h].y-l,u=u*u+f*f):u=Math.abs(t[h]-s),u<d&&(d=u,c=h);return c=!n||d<=n?t[c]:o,a||c===o||Ge(o)?c:c+ae(o)}:oa(t))},Jr=function(t,e,i,n){return Je(oe(t)?!e:i===!0?!!(i=0):!n,function(){return oe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Ll=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(a,o){return o(a)},n)}},Dl=function(t,e){return function(i){return t(parseFloat(i))+(e||ae(i))}},Ol=function(t,e,i){return to(t,e,0,1,i)},eo=function(t,e,i){return Je(i,function(n){return t[~~e(n)]})},Fl=function r(t,e,i){var n=e-t;return oe(t)?eo(t,r(0,t.length),e):Je(i,function(a){return(n+(a-t)%n)%n+t})},Hl=function r(t,e,i){var n=e-t,a=n*2;return oe(t)?eo(t,r(0,t.length-1),e):Je(i,function(o){return o=(a+(o-t)%a)%a||0,t+(o>n?a-o:o)})},Et=function(t){return t.replace(fl,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(pl);return Jr(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},to=function(t,e,i,n,a){var o=e-t,s=n-i;return Je(a,function(l){return i+((l-t)/o*s||0)})},Rl=function r(t,e,i,n){var a=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!a){var o=J(t),s={},l,d,c,h,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(oe(t)&&!oe(e)){for(c=[],h=t.length,u=h-2,d=1;d<h;d++)c.push(r(t[d-1],t[d]));h--,a=function(g){g*=h;var m=Math.min(u,~~g);return c[m](g-m)},i=e}else n||(t=Ct(oe(t)?[]:{},t));if(!c){for(l in e)ba.call(s,t,l,"get",e[l]);a=function(g){return ka(g,s)||(o?t.p:t)}}}return Je(i,a)},Dr=function(t,e,i){var n=t.labels,a=Me,o,s,l;for(o in n)s=n[o]-e,s<0==!!i&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},Se=function(t,e,i){var n=t.vars,a=n[e],o=I,s=t._ctx,l,d,c;if(a)return l=n[e+"Params"],d=n.callbackScope||t,i&&Xe.length&&Vi(),s&&(I=s),c=l?a.apply(d,l):a.call(d),I=o,c},Jt=function(t){return Qe(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ne),t.progress()<1&&Se(t,"onInterrupt"),t},St,io=[],no=function(t){if(t)if(t=!t.name&&t.default||t,ca()||t.headless){var e=t.name,i=U(t),n=e&&!i&&t.init?function(){this._props=[]}:t,a={init:oi,render:ka,add:ba,kill:Jl,modifier:Ql,rawVars:0},o={targetTest:0,get:0,getSetter:en,aliases:{},register:0};if(At(),t!==n){if(me[e])return;Te(n,Te(Ui(t,a),o)),Ct(n.prototype,Ct(a,Ui(t,o))),me[n.prop=e]=n,t.targetTest&&(qi.push(n),fa[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$r(e,n),t.register&&t.register(se,n,ce)}else io.push(t)},H=255,ei={aqua:[0,H,H],lime:[0,H,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,H],navy:[0,0,128],white:[H,H,H],olive:[128,128,0],yellow:[H,H,0],orange:[H,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[H,0,0],pink:[H,192,203],cyan:[0,H,H],transparent:[H,H,H,0]},Kn=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*H+.5|0},ao=function(t,e,i){var n=t?Ge(t)?[t>>16,t>>8&H,t&H]:0:ei.black,a,o,s,l,d,c,h,u,f,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ei[t])n=ei[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),o=t.charAt(2),s=t.charAt(3),t="#"+a+a+o+o+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&H,n&H,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&H,t&H]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(Ar),!e)l=+n[0]%360/360,d=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(d+1):c+d-c*d,a=c*2-o,n.length>3&&(n[3]*=1),n[0]=Kn(l+1/3,a,o),n[1]=Kn(l,a,o),n[2]=Kn(l-1/3,a,o);else if(~t.indexOf("="))return n=t.match(ua),i&&n.length<4&&(n[3]=1),n}else n=t.match(Ar)||ei.transparent;n=n.map(Number)}return e&&!g&&(a=n[0]/H,o=n[1]/H,s=n[2]/H,h=Math.max(a,o,s),u=Math.min(a,o,s),c=(h+u)/2,h===u?l=d=0:(f=h-u,d=c>.5?f/(2-h-u):f/(h+u),l=h===a?(o-s)/f+(o<s?6:0):h===o?(s-a)/f+2:(a-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(d*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},ro=function(t){var e=[],i=[],n=-1;return t.split(qe).forEach(function(a){var o=a.match(ht)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Or=function(t,e,i){var n="",a=(t+n).match(qe),o=e?"hsla(":"rgba(",s=0,l,d,c,h;if(!a)return t;if(a=a.map(function(u){return(u=ao(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(c=ro(t),l=i.c,l.join(n)!==c.c.join(n)))for(d=t.replace(qe,"1").split(ht),h=d.length-1;s<h;s++)n+=d[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(c.length?c:a.length?a:i).shift());if(!d)for(d=t.split(qe),h=d.length-1;s<h;s++)n+=d[s]+a[s];return n+d[h]},qe=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ei)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),zl=/hsl[a]?\(/,_a=function(t){var e=t.join(" "),i;if(qe.lastIndex=0,qe.test(e))return i=zl.test(e),t[1]=Or(t[1],i),t[0]=Or(t[0],i,ro(t[1])),!0},si,fe=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,a=1e3/240,o=a,s=[],l,d,c,h,u,f,g=function m(p){var w=r()-n,y=p===!0,_,b,v,S;if((w>t||w<0)&&(i+=w-e),n+=w,v=n-i,_=v-o,(_>0||y)&&(S=++h.frame,u=v-h.time*1e3,h.time=v=v/1e3,o+=_+(_>=a?4:a-_),b=1),y||(l=d(m)),b)for(f=0;f<s.length;f++)s[f](v,u,S,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Wr&&(!ea&&ca()&&(He=ea=window,ma=He.document||{},Ce.gsap=se,(He.gsapVersions||(He.gsapVersions=[])).push(se.version),Nr(Bi||He.GreenSockGlobals||!He.gsap&&He||{}),io.forEach(no)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},si=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),si=0,d=oi},lagSmoothing:function(p,w){t=p||1/0,e=Math.min(w||33,t)},fps:function(p){a=1e3/(p||240),o=h.time*1e3+a},add:function(p,w,y){var _=w?function(b,v,S,C){p(b,v,S,C),h.remove(_)}:p;return h.remove(p),s[y?"unshift":"push"](_),At(),_},remove:function(p,w){~(w=s.indexOf(p))&&s.splice(w,1)&&f>=w&&f--},_listeners:s},h})(),At=function(){return!si&&fe.wake()},L={},Wl=/^[\d.\-M][\d.\-,\s]/,Nl=/["']/g,$l=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],a=1,o=i.length,s,l,d;a<o;a++)l=i[a],s=a!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),e[n]=isNaN(d)?d.replace(Nl,"").trim():+d,n=l.substr(s+1).trim();return e},Il=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},ql=function(t){var e=(t+"").split("("),i=L[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[$l(e[1])]:Il(t).split(",").map(Gr)):L._CE&&Wl.test(t)?L._CE("",t):i},Gl=function(t){return function(e){return 1-t(1-e)}},ct=function(t,e){return t&&(U(t)?t:L[t]||ql(t))||e},ft=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var a={easeIn:e,easeOut:i,easeInOut:n},o;return de(t,function(s){L[s]=Ce[s]=a,L[o=s.toLowerCase()]=i;for(var l in a)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=a[l]}),a},oo=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},jn=function r(t,e,i){var n=e>=1?e:1,a=(i||(t?.3:.45))/(e<1?e:1),o=a/Jn*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*ml((c-o)*a)+1},l=t==="out"?s:t==="in"?function(d){return 1-s(1-d)}:oo(s);return a=Jn/a,l.config=function(d,c){return r(t,d,c)},l},Xn=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:oo(i);return n.config=function(a){return r(t,a)},n};de("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ft(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;ft("Elastic",jn("in"),jn("out"),jn());(function(r,t){var e=1/t,i=2*e,n=2.5*e,a=function(s){return s<e?r*s*s:s<i?r*Math.pow(s-1.5/t,2)+.75:s<n?r*(s-=2.25/t)*s+.9375:r*Math.pow(s-2.625/t,2)+.984375};ft("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);ft("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ft("Circ",function(r){return-(Rr(1-r*r)-1)});ft("Sine",function(r){return r===1?1:-hl(r*cl)+1});ft("Back",Xn("in"),Xn("out"),Xn());L.SteppedEase=L.steps=Ce.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),a=e?1:0,o=1-R;return function(s){return((n*di(0,o,s)|0)+a)*i}}};ai.ease=L["quad.out"];de("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return pa+=r+","+r+"Params,"});var va=function(t,e){this.id=ul++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ya,this.set=e?e.getSetter:en},li=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,kt(this,+e.duration,1,1),this.data=e.data,I&&(this._ctx=I,I.data.push(this)),si||fe.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,kt(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(At(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ji(this,i),!a._dp||a.parent||Ur(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Re(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===R||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),qr(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Pr(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Pr(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,n):this._repeat?Tt(this._tTime,a)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-R?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Yi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-R?0:this._rts,this.totalTime(di(-Math.abs(this._delay),this.totalDuration(),a),n!==!1),Qi(this),Sl(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==R&&(this._tTime-=R)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=G(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Re(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(pe(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yi(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=_l);var n=ne;return ne=i,wa(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ne=n,this},t.globalTime=function(i){for(var n=this,a=arguments.length?i:n.rawTime();n;)a=n._start+a/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lr(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Lr(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ee(this,i),pe(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,pe(n)),this._dur||(this._zTime=-R),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-R:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-R,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=n&&a<this.endTime(!0)-R)},t.eventCallback=function(i,n,a){var o=this.vars;return arguments.length>1?(n?(o[i]=n,a&&(o[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,a=n._prom;return new Promise(function(o){var s=U(i)?i:Br,l=function(){var c=n.then;n.then=null,a&&a(),U(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),o(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){Jt(this)},r})();Te(li.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-R,_prom:0,_ps:!1,_rts:1});var re=(function(r){Hr(t,r);function t(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=pe(i.sortChildren),B&&Re(i.parent||B,Ie(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Yr(Ie(a),i.scrollTrigger),a}var e=t.prototype;return e.to=function(n,a,o){return ii(0,arguments,this),this},e.from=function(n,a,o){return ii(1,arguments,this),this},e.fromTo=function(n,a,o,s){return ii(2,arguments,this),this},e.set=function(n,a,o){return a.duration=0,a.parent=this,ti(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new X(n,a,Ee(this,o),1),this},e.call=function(n,a,o){return Re(this,X.delayedCall(0,n,a),o)},e.staggerTo=function(n,a,o,s,l,d,c){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new X(n,o,Ee(this,l)),this},e.staggerFrom=function(n,a,o,s,l,d,c){return o.runBackwards=1,ti(o).immediateRender=pe(o.immediateRender),this.staggerTo(n,a,o,s,l,d,c)},e.staggerFromTo=function(n,a,o,s,l,d,c,h){return s.startAt=o,ti(s).immediateRender=pe(s.immediateRender),this.staggerTo(n,a,s,l,d,c,h)},e.render=function(n,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=n<=0?0:G(n),h=this._zTime<0!=n<0&&(this._initted||!d),u,f,g,m,p,w,y,_,b,v,S,C;if(this!==B&&c>l&&n>=0&&(c=l),c!==this._tTime||o||h){if(s!==this._time&&d&&(c+=this._time-s,n+=this._time-s),u=c,b=this._start,_=this._ts,w=!_,h&&(d||(s=this._zTime),(n||!a)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,p=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,a,o);if(u=G(c%p),c===l?(m=this._repeat,u=d):(v=G(c/p),m=~~v,m&&m===v&&(u=d,m--),u>d&&(u=d)),v=Tt(this._tTime,p),!s&&this._tTime&&v!==m&&this._tTime-v*p-this._dur<=0&&(v=m),S&&m&1&&(u=d-u,C=1),m!==v&&!this._lock){var T=S&&v&1,k=T===(S&&m&1);if(m<v&&(T=!T),s=T?0:c%d?d:c,this._lock=1,this.render(s||(C?0:G(m*p)),a,!d)._lock=0,this._tTime=c,!a&&this.parent&&Se(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=m),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,k&&(this._lock=2,s=T?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Al(this,G(s),G(u)),y&&(c-=u-(u=y._start))),this._tTime=c,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&d&&!a&&!v&&(Se(this,"onStart"),this._tTime!==c))return this;if(u>=s&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,a,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,a,o),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=-R);break}}f=g}else{f=this._last;for(var x=n<0?n:u;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,a,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,a,o||ne&&wa(f)),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=x?-R:R);break}}f=g}}if(y&&!a&&(this.pause(),y.render(u>=s?0:-R)._zTime=u>=s?1:-1,this._ts))return this._start=b,Qi(this),this.render(n,a,o);this._onUpdate&&!a&&Se(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Qe(this,1),!a&&!(n<0&&!s)&&(c||s||!l)&&(Se(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,a){var o=this;if(Ge(a)||(a=Ee(this,a,n)),!(n instanceof li)){if(oe(n))return n.forEach(function(s){return o.add(s,a)}),this;if(J(n))return this.addLabel(n,a);if(U(n))n=X.delayedCall(0,n);else return this}return this!==n?Re(this,n,a):this},e.getChildren=function(n,a,o,s){n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Me);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof X?a&&l.push(d):(o&&l.push(d),n&&l.push.apply(l,d.getChildren(!0,a,o)))),d=d._next;return l},e.getById=function(n){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===n)return a[o]},e.remove=function(n){return J(n)?this.removeLabel(n):U(n)?this.killTweensOf(n):(n.parent===this&&Zi(this,n),n===this._recent&&(this._recent=this._last),dt(this))},e.totalTime=function(n,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=G(fe.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,a),this._forcing=0,this):this._tTime},e.addLabel=function(n,a){return this.labels[n]=Ee(this,a),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,a,o){var s=X.delayedCall(0,a||oi,o);return s.data="isPause",this._hasPause=1,Re(this,s,Ee(this,n))},e.removePause=function(n){var a=this._first;for(n=Ee(this,n);a;)a._start===n&&a.data==="isPause"&&Qe(a),a=a._next},e.killTweensOf=function(n,a,o){for(var s=this.getTweensOf(n,o),l=s.length;l--;)je!==s[l]&&s[l].kill(n,a);return this},e.getTweensOf=function(n,a){for(var o=[],s=Pe(n),l=this._first,d=Ge(a),c;l;)l instanceof X?vl(l._targets,s)&&(d?(!je||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(c=l.getTweensOf(s,a)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(n,a){a=a||{};var o=this,s=Ee(o,n),l=a,d=l.startAt,c=l.onStart,h=l.onStartParams,u=l.immediateRender,f,g=X.to(o,Te({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||R,onStart:function(){if(o.pause(),!f){var p=a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==p&&kt(g,p,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,h||[])}},a));return u?g.render(0):g},e.tweenFromTo=function(n,a,o){return this.tweenTo(a,Te({startAt:{time:Ee(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Dr(this,Ee(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Dr(this,Ee(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+R)},e.shiftChildren=function(n,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(n=G(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(a)for(d in l)l[d]>=o&&(l[d]+=n);return dt(this)},e.invalidate=function(n){var a=this._first;for(this._lock=0;a;)a.invalidate(n),a=a._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),dt(this)},e.totalDuration=function(n){var a=0,o=this,s=o._last,l=Me,d,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Re(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(a-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=G(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=d;kt(o,o===B&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(B._ts&&(qr(B,Yi(n,B)),Ir=fe.frame),fe.frame>=Er){Er+=ge.autoSleep||120;var a=B._first;if((!a||!a._ts)&&ge.autoSleep&&fe._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||fe.sleep()}}},t})(li);Te(re.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bl=function(t,e,i,n,a,o,s){var l=new ce(this._pt,t,e,0,1,Ta,null,a),d=0,c=0,h,u,f,g,m,p,w,y;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=Et(n)),o&&(y=[i,n],o(y,t,e),i=y[0],n=y[1]),u=i.match(Un)||[];h=Un.exec(n);)g=h[0],m=n.substring(d,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==u[c++]&&(p=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:p,c:g.charAt(1)==="="?mt(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},d=Un.lastIndex);return l.c=d<n.length?n.substring(d,n.length):"",l.fp=s,(ha.test(n)||w)&&(l.e=0),this._pt=l,l},ba=function(t,e,i,n,a,o,s,l,d,c){U(n)&&(n=n(a||0,t,o));var h=t[e],u=i!=="get"?i:U(h)?d?t[e.indexOf("set")||!U(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():h,f=U(h)?d?jl:co:Ca,g;if(J(n)&&(~n.indexOf("random(")&&(n=Et(n)),n.charAt(1)==="="&&(g=mt(u,n)+(ae(u)||0),(g||g===0)&&(n=g))),!c||u!==n||sa)return!isNaN(u*n)&&n!==""?(g=new ce(this._pt,t,e,+u||0,n-(u||0),typeof h=="boolean"?Zl:uo,0,f),d&&(g.fp=d),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&Xi(e,n),Bl.call(this,t,e,u,n,f,l||ge.stringFilter,d))},Vl=function(t,e,i,n,a){if(U(t)&&(t=ni(t,a,e,i,n)),!ze(t)||t.style&&t.nodeType||oe(t)||zr(t))return J(t)?ni(t,a,e,i,n):t;var o={},s;for(s in t)o[s]=ni(t[s],a,e,i,n);return o},xa=function(t,e,i,n,a,o){var s,l,d,c;if(me[t]&&(s=new me[t]).init(a,s.rawVars?e[t]:Vl(e[t],n,a,o,i),i,n,o)!==!1&&(i._pt=l=new ce(i._pt,a,t,0,1,s.render,s,0,s.priority),i!==St))for(d=i._ptLookup[i._targets.indexOf(a)],c=s._props.length;c--;)d[s._props[c]]=l;return s},je,sa,Sa=function r(t,e,i){var n=t.vars,a=n.ease,o=n.startAt,s=n.immediateRender,l=n.lazy,d=n.onUpdate,c=n.runBackwards,h=n.yoyoEase,u=n.keyframes,f=n.autoRevert,g=t._dur,m=t._startAt,p=t._targets,w=t.parent,y=w&&w.data==="nested"?w.vars.targets:p,_=t._overwrite==="auto"&&!da,b=t.timeline,v=n.easeReverse||h,S,C,T,k,x,E,P,O,z,q,W,F,te;if(b&&(!u||!a)&&(a="none"),t._ease=ct(a,ai.ease),t._rEase=v&&(ct(v)||t._ease),t._from=!b&&!!n.runBackwards,t._from&&(t.ratio=1),!b||u&&!n.stagger){if(O=p[0]?Ze(p[0]).harness:0,F=O&&n[O.prop],S=Ui(n,fa),m&&(m._zTime<0&&m.progress(1),e<0&&c&&s&&!f?m.render(-1,!0):m.revert(c&&g?Ii:wl),m._lazy=0),o){if(Qe(t._startAt=X.set(p,Te({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!m&&pe(l),startAt:null,delay:0,onUpdate:d&&function(){return Se(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ne||!s&&!f)&&t._startAt.revert(Ii),s&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&g&&!m){if(e&&(s=!1),T=Te({overwrite:!1,data:"isFromStart",lazy:s&&!m&&pe(l),immediateRender:s,stagger:0,parent:w},S),F&&(T[O.prop]=F),Qe(t._startAt=X.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ne?t._startAt.revert(Ii):t._startAt.render(-1,!0)),t._zTime=e,!s)r(t._startAt,R,R);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&pe(l)||l&&!g,C=0;C<p.length;C++){if(x=p[C],P=x._gsap||ga(p)[C]._gsap,t._ptLookup[C]=q={},ta[P.id]&&Xe.length&&Vi(),W=y===p?C:y.indexOf(x),O&&(z=new O).init(x,F||S,t,W,y)!==!1&&(t._pt=k=new ce(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(be){q[be]=k}),z.priority&&(E=1)),!O||F)for(T in S)me[T]&&(z=xa(T,S,t,W,x,y))?z.priority&&(E=1):q[T]=k=ba.call(t,x,T,"get",S[T],W,y,0,n.stringFilter);t._op&&t._op[C]&&t.kill(x,t._op[C]),_&&t._pt&&(je=t,B.killTweensOf(x,q,t.globalTime(e)),te=!t.parent,je=0),t._pt&&l&&(ta[P.id]=1)}E&&Aa(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!te,u&&e<=0&&b.render(Me,!0,!0)},Ul=function(t,e,i,n,a,o,s,l){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!d)for(d=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return sa=1,t.vars[e]="+=0",Sa(t,s),sa=0,l?ri(e+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(f=d.length;f--;)h=d[f],c=h._pt||h,c.s=(n||n===0)&&!a?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Y(i)+ae(h.e)),h.b&&(h.b=c.s+ae(h.b))},Yl=function(t,e){var i=t[0]?Ze(t[0]).harness:0,n=i&&i.aliases,a,o,s,l;if(!n)return e;a=Ct({},e);for(o in n)if(o in a)for(l=n[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},Kl=function(t,e,i,n){var a=e.ease||n||"power1.inOut",o,s;if(oe(e))s=i[t]||(i[t]=[]),e.forEach(function(l,d){return s.push({t:d/(e.length-1)*100,v:l,e:a})});else for(o in e)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(t),v:e[o],e:a})},ni=function(t,e,i,n,a){return U(t)?t.call(e,i,n,a):J(t)&&~t.indexOf("random(")?Et(t):t},so=pa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",lo={};de(so+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lo[r]=1});var X=(function(r){Hr(t,r);function t(i,n,a,o){var s;typeof n=="number"&&(a.duration=n,n=a,a=null),s=r.call(this,o?n:ti(n))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,w=n.parent||B,y=(oe(i)||zr(i)?Ge(i[0]):"length"in n)?[i]:Pe(i),_,b,v,S,C,T,k,x;if(s._targets=y.length?ga(y):ri("GSAP target "+i+" not found. https://gsap.com",!ge.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||u||$i(d)||$i(c)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new re({data:"nested",defaults:m||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=Ie(s),_._start=0,u||$i(d)||$i(c)){if(S=y.length,k=u&&Zr(u),ze(u))for(C in u)~so.indexOf(C)&&(x||(x={}),x[C]=u[C]);for(b=0;b<S;b++)v=Ui(n,lo),v.stagger=0,E&&(v.easeReverse=E),x&&Ct(v,x),T=y[b],v.duration=+ni(d,Ie(s),b,T,y),v.delay=(+ni(c,Ie(s),b,T,y)||0)-s._delay,!u&&S===1&&v.delay&&(s._delay=c=v.delay,s._start+=c,v.delay=0),_.to(T,v,k?k(b,T,y):0),_._ease=L.none;_.duration()?d=c=0:s.timeline=0}else if(g){ti(Te(_.vars.defaults,{ease:"none"})),_._ease=ct(g.ease||n.ease||"none");var P=0,O,z,q;if(oe(g))g.forEach(function(W){return _.to(y,W,">")}),_.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||Kl(C,g[C],v,g.easeEach);for(C in v)for(O=v[C].sort(function(W,F){return W.t-F.t}),P=0,b=0;b<O.length;b++)z=O[b],q={ease:z.e,duration:(z.t-(b?O[b-1].t:0))/100*d},q[C]=z.v,_.to(y,q,P),P+=q.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return f===!0&&!da&&(je=Ie(s),B.killTweensOf(y),je=0),Re(w,Ie(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(h||!d&&!g&&s._start===G(w._time)&&pe(h)&&Cl(Ie(s))&&w.data!=="nested")&&(s._tTime=-R,s.render(Math.max(0,-c)||0)),p&&Yr(Ie(s),p),s}var e=t.prototype;return e.render=function(n,a,o){var s=this._time,l=this._tDur,d=this._dur,c=n<0,h=n>l-R&&!c?l:n<R?0:n,u,f,g,m,p,w,y,_;if(!d)kl(this,n,a,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+n,a,o);if(u=G(h%m),h===l?(g=this._repeat,u=d):(p=G(h/m),g=~~p,g&&g===p?(u=d,g--):u>d&&(u=d)),w=this._yoyo&&g&1,w&&(u=d-u),p=Tt(this._tTime,m),u===s&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!w&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(G(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(Kr(this,c?n:u,o,a,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(d!==this._dur)return this.render(n,a,o)}if(this._rEase){var b=u<s;if(b!==this._inv){var v=b?s:d-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/d);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!a&&!p&&(Se(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;_&&_.render(n<0?n:_._dur*_._ease(u/this._dur),a,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!a&&(c&&ia(this,n,a,o),Se(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!a&&this.parent&&Se(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&ia(this,n,!0,!0),(n||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qe(this,1),!a&&!(c&&!s)&&(h||s||w)&&(Se(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,a,o,s,l){si||fe.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Sa(this,d),c=this._ease(d/this._dur),Ul(this,n,a,o,s,c,d,l)?this.resetTo(n,a,o,s,1):(Ji(this,0),this.parent||Vr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,a){if(a===void 0&&(a="all"),!n&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Jt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,a,je&&je.vars.overwrite!==!0)._first||Jt(this),this.parent&&o!==this.timeline.totalDuration()&&kt(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=n?Pe(n):s,d=this._ptLookup,c=this._pt,h,u,f,g,m,p,w;if((!a||a==="all")&&xl(s,l))return a==="all"&&(this._pt=0),Jt(this);for(h=this._op=this._op||[],a!=="all"&&(J(a)&&(m={},de(a,function(y){return m[y]=1}),a=m),a=Yl(s,a)),w=s.length;w--;)if(~l.indexOf(s[w])){u=d[w],a==="all"?(h[w]=a,g=u,f={}):(f=h[w]=h[w]||{},g=a);for(m in g)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Zi(this,p,"_pt"),delete u[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&c&&Jt(this),this},t.to=function(n,a){return new t(n,a,arguments[2])},t.from=function(n,a){return ii(1,arguments)},t.delayedCall=function(n,a,o,s){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},t.fromTo=function(n,a,o){return ii(2,arguments)},t.set=function(n,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(n,a)},t.killTweensOf=function(n,a,o){return B.killTweensOf(n,a,o)},t})(li);Te(X.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});de("staggerTo,staggerFrom,staggerFromTo",function(r){X[r]=function(){var t=new re,e=aa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ca=function(t,e,i){return t[e]=i},co=function(t,e,i){return t[e](i)},jl=function(t,e,i,n){return t[e](n.fp,i)},Xl=function(t,e,i){return t.setAttribute(e,i)},en=function(t,e){return U(t[e])?co:ji(t[e])&&t.setAttribute?Xl:Ca},uo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Zl=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ta=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ka=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ql=function(t,e,i,n){for(var a=this._pt,o;a;)o=a._next,a.p===n&&a.modifier(t,e,i),a=o},Jl=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Zi(this,e,"_pt"):e.dep||(i=1),e=n;return!i},ed=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Aa=function(t){for(var e=t._pt,i,n,a,o;e;){for(i=e._next,n=a;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:a=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=a},ce=(function(){function r(e,i,n,a,o,s,l,d,c){this.t=i,this.s=a,this.c=o,this.p=n,this.r=s||uo,this.d=l||this,this.set=d||Ca,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,a){this.mSet=this.mSet||this.set,this.set=ed,this.m=i,this.mt=a,this.tween=n},r})();de(pa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return fa[r]=1});Ce.TweenMax=Ce.TweenLite=X;Ce.TimelineLite=Ce.TimelineMax=re;B=new re({sortChildren:!1,defaults:ai,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ge.stringFilter=_a;var ut=[],Gi={},td=[],Fr=0,id=0,Zn=function(t){return(Gi[t]||td).map(function(e){return e()})},la=function(){var t=Date.now(),e=[];t-Fr>2&&(Zn("matchMediaInit"),ut.forEach(function(i){var n=i.queries,a=i.conditions,o,s,l,d;for(s in n)o=He.matchMedia(n[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,d=1);d&&(i.revert(),l&&e.push(i))}),Zn("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Fr=t,Zn("matchMedia"))},ho=(function(){function r(e,i){this.selector=i&&ra(i),this.data=[],this._r=[],this.isReverted=!1,this.id=id++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,a){U(i)&&(a=n,n=i,i=U);var o=this,s=function(){var d=I,c=o.selector,h;return d&&d!==o&&d.data.push(o),a&&(o.selector=ra(a)),I=o,h=n.apply(o,arguments),U(h)&&o._r.push(h),I=d,o.selector=c,o.isReverted=!1,h};return o.last=s,i===U?s(o,function(l){return o.add(null,l)}):i?o[i]=s:s},t.ignore=function(i){var n=I;I=null,i(this),I=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof X&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var a=this;if(i?(function(){for(var s=a.getTweens(),l=a.data.length,d;l--;)d=a.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=a.data.length;l--;)d=a.data[l],d instanceof re?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof X)&&d.revert&&d.revert(i);a._r.forEach(function(c){return c(i,a)}),a.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=ut.length;o--;)ut[o].id===this.id&&ut.splice(o,1)},t.revert=function(i){this.kill(i||{})},r})(),nd=(function(){function r(e){this.contexts=[],this.scope=e,I&&I.data.push(this)}var t=r.prototype;return t.add=function(i,n,a){ze(i)||(i={matches:i});var o=new ho(0,a||this.scope),s=o.conditions={},l,d,c;I&&!o.selector&&(o.selector=I.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(d in i)d==="all"?c=1:(l=He.matchMedia(i[d]),l&&(ut.indexOf(o)<0&&ut.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(la):l.addEventListener("change",la)));return c&&n(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Ki={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return no(n)})},timeline:function(t){return new re(t)},getTweensOf:function(t,e){return B.getTweensOf(t,e)},getProperty:function(t,e,i,n){J(t)&&(t=Pe(t)[0]);var a=Ze(t||{}).get,o=i?Br:Gr;return i==="native"&&(i=""),t&&(e?o((me[e]&&me[e].get||a)(t,e,i,n)):function(s,l,d){return o((me[s]&&me[s].get||a)(t,s,l,d))})},quickSetter:function(t,e,i){if(t=Pe(t),t.length>1){var n=t.map(function(c){return se.quickSetter(c,e,i)}),a=n.length;return function(c){for(var h=a;h--;)n[h](c)}}t=t[0]||{};var o=me[e],s=Ze(t),l=s.harness&&(s.harness.aliases||{})[e]||e,d=o?function(c){var h=new o;St._pt=0,h.init(t,i?c+i:c,St,0,[t]),h.render(1,h),St._pt&&ka(1,St)}:s.set(t,l);return o?d:function(c){return d(t,l,i?c+i:c,s,1)}},quickTo:function(t,e,i){var n,a=se.to(t,Te((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,d,c){return a.resetTo(e,l,d,c)};return o.tween=a,o},isTweening:function(t){return B.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ct(t.ease,ai.ease)),Mr(ai,t||{})},config:function(t){return Mr(ge,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,a=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!me[s]&&!Ce[s]&&ri(e+" effect requires "+s+" plugin.")}),Yn[e]=function(s,l,d){return i(Pe(s),Te(l||{},a),d)},o&&(re.prototype[e]=function(s,l,d){return this.add(Yn[e](s,ze(l)?l:(d=l)&&{},this),d)})},registerEase:function(t,e){L[t]=ct(e)},parseEase:function(t,e){return arguments.length?ct(t,e):L},getById:function(t){return B.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new re(t),n,a;for(i.smoothChildTiming=pe(t.smoothChildTiming),B.remove(i),i._dp=0,i._time=i._tTime=B._time,n=B._first;n;)a=n._next,(e||!(!n._dur&&n instanceof X&&n.vars.onComplete===n._targets[0]))&&Re(i,n,n._start-n._delay),n=a;return Re(B,i,0),i},context:function(t,e){return t?new ho(t,e):I},matchMedia:function(t){return new nd(t)},matchMediaRefresh:function(){return ut.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||la()},addEventListener:function(t,e){var i=Gi[t]||(Gi[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Gi[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Fl,wrapYoyo:Hl,distribute:Zr,random:Jr,snap:Qr,normalize:Ol,getUnit:ae,clamp:Ml,splitColor:ao,toArray:Pe,selector:ra,mapRange:to,pipe:Ll,unitize:Dl,interpolate:Rl,shuffle:Xr},install:Nr,effects:Yn,ticker:fe,updateRoot:re.updateRoot,plugins:me,globalTimeline:B,core:{PropTween:ce,globals:$r,Tween:X,Timeline:re,Animation:li,getCache:Ze,_removeLinkedListItem:Zi,reverting:function(){return ne},context:function(t){return t&&I&&(I.data.push(t),t._ctx=I),I},suppressOverwrites:function(t){return da=t}}};de("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ki[r]=X[r]});fe.add(re.updateRoot);St=Ki.to({},{duration:0});var ad=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},rd=function(t,e){var i=t._targets,n,a,o;for(n in e)for(a=i.length;a--;)o=t._ptLookup[a][n],o&&(o=o.d)&&(o._pt&&(o=ad(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[a],n))},Qn=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,a,o){o._onInit=function(s){var l,d;if(J(a)&&(l={},de(a,function(c){return l[c]=1}),a=l),e){l={};for(d in a)l[d]=e(a[d]);a=l}rd(s,a)}}}},se=Ki.registerPlugin({name:"attr",init:function(t,e,i,n,a){var o,s,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",s=this.add(t,"setAttribute",(l||0)+"",e[o],n,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)ne?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Qn("roundProps",oa),Qn("modifiers"),Qn("snap",Qr))||Ki;X.version=re.version=se.version="3.15.0";Wr=1;ca()&&At();var od=L.Power0,sd=L.Power1,ld=L.Power2,dd=L.Power3,cd=L.Power4,ud=L.Linear,hd=L.Quad,md=L.Cubic,fd=L.Quart,pd=L.Quint,gd=L.Strong,yd=L.Elastic,wd=L.Back,_d=L.SteppedEase,vd=L.Bounce,bd=L.Sine,xd=L.Expo,Sd=L.Circ;var mo,et,Pt,Oa,wt,Cd,fo,Fa,Td=function(){return typeof window<"u"},Ve={},yt=180/Math.PI,Lt=Math.PI/180,Mt=Math.atan2,po=1e8,Ha=/([A-Z])/g,kd=/(left|right|width|margin|padding|x)/i,Ad=/[\s,\(]\S/,We={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ma=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ed=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Md=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pd=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ld=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},So=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Co=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Dd=function(t,e,i){return t.style[e]=i},Od=function(t,e,i){return t.style.setProperty(e,i)},Fd=function(t,e,i){return t._gsap[e]=i},Hd=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Rd=function(t,e,i,n,a){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(a,o)},zd=function(t,e,i,n,a){var o=t._gsap;o[e]=i,o.renderTransform(a,o)},V="transform",ye=V+"Origin",Wd=function r(t,e){var i=this,n=this.target,a=n.style,o=n._gsap;if(t in Ve&&a){if(this.tfm=this.tfm||{},t!=="transform")t=We[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=Be(n,s)}):this.tfm[t]=o.x?o[t]:Be(n,t),t===ye&&(this.tfm.zOrigin=o.zOrigin);else return We.transform.split(",").forEach(function(s){return r.call(i,s,e)});if(this.props.indexOf(V)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ye,e,"")),t=V}(a||e)&&this.props.push(t,e,a[t])},To=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nd=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,a,o;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?e[t[a]](t[a+2]):e[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(Ha,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),a=Fa(),(!a||!a.isStart)&&!i[V]&&(To(i),n.zOrigin&&i[ye]&&(i[ye]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ko=function(t,e){var i={target:t,props:[],revert:Nd,save:Wd};return t._gsap||se.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Ao,Pa=function(t,e){var i=et.createElementNS?et.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):et.createElement(t);return i&&i.style?i:et.createElement(t)},ke=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Ha,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,Dt(e)||e,1)||""},go="O,Moz,ms,Ms,Webkit".split(","),Dt=function(t,e,i){var n=e||wt,a=n.style,o=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(go[o]+t in a););return o<0?null:(o===3?"ms":o>=0?go[o]:"")+t},La=function(){Td()&&window.document&&(mo=window,et=mo.document,Pt=et.documentElement,wt=Pa("div")||{style:{}},Cd=Pa("div"),V=Dt(V),ye=V+"Origin",wt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ao=!!Dt("perspective"),Fa=se.core.reverting,Oa=1)},yo=function(t){var e=t.ownerSVGElement,i=Pa("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),a;n.style.display="block",i.appendChild(n),Pt.appendChild(i);try{a=n.getBBox()}catch{}return i.removeChild(n),Pt.removeChild(i),a},wo=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Eo=function(t){var e,i;try{e=t.getBBox()}catch{e=yo(t),i=1}return e&&(e.width||e.height)||i||(e=yo(t)),e&&!e.width&&!e.x&&!e.y?{x:+wo(t,["x","cx","x1"])||0,y:+wo(t,["y","cy","y1"])||0,width:0,height:0}:e},Mo=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Eo(t))},it=function(t,e){if(e){var i=t.style,n;e in Ve&&e!==ye&&(e=V),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Ha,"-$1").toLowerCase())):i.removeAttribute(e)}},tt=function(t,e,i,n,a,o){var s=new ce(t._pt,e,i,0,1,o?Co:So);return t._pt=s,s.b=n,s.e=a,t._props.push(i),s},_o={deg:1,rad:1,turn:1},$d={grid:1,flex:1},nt=function r(t,e,i,n){var a=parseFloat(i)||0,o=(i+"").trim().substr((a+"").length)||"px",s=wt.style,l=kd.test(e),d=t.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,u=n==="px",f=n==="%",g,m,p,w;if(n===o||!a||_o[n]||_o[o])return a;if(o!=="px"&&!u&&(a=r(t,e,i,"px")),w=t.getCTM&&Mo(t),(f||o==="%")&&(Ve[e]||~e.indexOf("adius")))return g=w?t.getBBox()[l?"width":"height"]:t[c],Y(f?a/g*h:a/100*g);if(s[l?"width":"height"]=h+(u?o:n),m=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!d?t:t.parentNode,w&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===et||!m.appendChild)&&(m=et.body),p=m._gsap,p&&f&&p.width&&l&&p.time===fe.time&&!p.uncache)return Y(a/p.width*h);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+n,g=t[c],y?t.style[e]=y:it(t,e)}else(f||o==="%")&&!$d[ke(m,"display")]&&(s.position=ke(t,"position")),m===t&&(s.position="static"),m.appendChild(wt),g=wt[c],m.removeChild(wt),s.position="absolute";return l&&f&&(p=Ze(m),p.time=fe.time,p.width=m[c]),Y(u?g*a/h:g&&a?h/g*a:0)},Be=function(t,e,i,n){var a;return Oa||La(),e in We&&e!=="transform"&&(e=We[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ve[e]&&e!=="transform"?(a=hi(t,n),a=e!=="transformOrigin"?a[e]:a.svg?a.origin:nn(ke(t,ye))+" "+a.zOrigin+"px"):(a=t.style[e],(!a||a==="auto"||n||~(a+"").indexOf("calc("))&&(a=tn[e]&&tn[e](t,e,i)||ke(t,e)||ya(t,e)||(e==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?nt(t,e,a,i)+i:a},Id=function(t,e,i,n){if(!i||i==="none"){var a=Dt(e,t,1),o=a&&ke(t,a,1);o&&o!==i?(e=a,i=o):e==="borderColor"&&(i=ke(t,"borderTopColor"))}var s=new ce(this._pt,t.style,e,0,1,Ta),l=0,d=0,c,h,u,f,g,m,p,w,y,_,b,v;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=ke(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(m=t.style[e],t.style[e]=n,n=ke(t,e)||n,m?t.style[e]=m:it(t,e)),c=[i,n],_a(c),i=c[0],n=c[1],u=i.match(ht)||[],v=n.match(ht)||[],v.length){for(;h=ht.exec(n);)p=h[0],y=n.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=u[d++]||"")&&(f=parseFloat(m)||0,b=m.substr((f+"").length),p.charAt(1)==="="&&(p=mt(f,p)+b),w=parseFloat(p),_=p.substr((w+"").length),l=ht.lastIndex-_.length,_||(_=_||ge.units[e]||b,l===n.length&&(n+=_,s.e+=_)),b!==_&&(f=nt(t,e,m,_)||0),s._pt={_next:s._pt,p:y||d===1?y:",",s:f,c:w-f,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=e==="display"&&n==="none"?Co:So;return ha.test(n)&&(s.e=0),this._pt=s,s},vo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qd=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=vo[i]||i,e[1]=vo[n]||n,e.join(" ")},Gd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,a=e.u,o=i._gsap,s,l,d;if(a==="all"||a===!0)n.cssText="",l=1;else for(a=a.split(","),d=a.length;--d>-1;)s=a[d],Ve[s]&&(l=1,s=s==="transformOrigin"?ye:V),it(i,s);l&&(it(i,V),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",hi(i,1),o.uncache=1,To(n)))}},tn={clearProps:function(t,e,i,n,a){if(a.data!=="isFromStart"){var o=t._pt=new ce(t._pt,e,i,0,0,Gd);return o.u=n,o.pr=-10,o.tween=a,t._props.push(i),1}}},ui=[1,0,0,1,0,0],Po={},Lo=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},bo=function(t){var e=ke(t,V);return Lo(e)?ui:e.substr(7).match(ua).map(Y)},Ra=function(t,e){var i=t._gsap||Ze(t),n=t.style,a=bo(t),o,s,l,d;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?ui:a):(a===ui&&!t.offsetParent&&t!==Pt&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,s=t.nextElementSibling,Pt.appendChild(t)),a=bo(t),l?n.display=l:it(t,"display"),d&&(s?o.insertBefore(t,s):o?o.appendChild(t):Pt.removeChild(t))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Da=function(t,e,i,n,a,o){var s=t._gsap,l=a||Ra(t,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,f=l[0],g=l[1],m=l[2],p=l[3],w=l[4],y=l[5],_=e.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,S,C,T,k;i?l!==ui&&(C=f*p-g*m)&&(T=b*(p/C)+v*(-m/C)+(m*y-p*w)/C,k=b*(-g/C)+v*(f/C)-(f*y-g*w)/C,b=T,v=k):(S=Eo(t),b=S.x+(~_[0].indexOf("%")?b/100*S.width:b),v=S.y+(~(_[1]||_[0]).indexOf("%")?v/100*S.height:v)),n||n!==!1&&s.smooth?(w=b-d,y=v-c,s.xOffset=h+(w*f+y*m)-w,s.yOffset=u+(w*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!n,s.origin=e,s.originIsAbsolute=!!i,t.style[ye]="0px 0px",o&&(tt(o,s,"xOrigin",d,b),tt(o,s,"yOrigin",c,v),tt(o,s,"xOffset",h,s.xOffset),tt(o,s,"yOffset",u,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+v)},hi=function(t,e){var i=t._gsap||new va(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,a=i.scaleX<0,o="px",s="deg",l=getComputedStyle(t),d=ke(t,ye)||"0",c,h,u,f,g,m,p,w,y,_,b,v,S,C,T,k,x,E,P,O,z,q,W,F,te,be,le,Oe,$,$e,he,xe;return c=h=u=m=p=w=y=_=b=0,f=g=1,i.svg=!!(t.getCTM&&Mo(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[V]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[V]!=="none"?l[V]:"")),n.scale=n.rotate=n.translate="none"),C=Ra(t,i.svg),i.svg&&(i.uncache?(te=t.getBBox(),d=i.xOrigin-te.x+"px "+(i.yOrigin-te.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Da(t,F||d,!!F||i.originIsAbsolute,i.smooth!==!1,C)),v=i.xOrigin||0,S=i.yOrigin||0,C!==ui&&(E=C[0],P=C[1],O=C[2],z=C[3],c=q=C[4],h=W=C[5],C.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt(z*z+O*O),m=E||P?Mt(P,E)*yt:0,y=O||z?Mt(O,z)*yt+m:0,y&&(g*=Math.abs(Math.cos(y*Lt))),i.svg&&(c-=v-(v*E+S*O),h-=S-(v*P+S*z))):(xe=C[6],$e=C[7],le=C[8],Oe=C[9],$=C[10],he=C[11],c=C[12],h=C[13],u=C[14],T=Mt(xe,$),p=T*yt,T&&(k=Math.cos(-T),x=Math.sin(-T),F=q*k+le*x,te=W*k+Oe*x,be=xe*k+$*x,le=q*-x+le*k,Oe=W*-x+Oe*k,$=xe*-x+$*k,he=$e*-x+he*k,q=F,W=te,xe=be),T=Mt(-O,$),w=T*yt,T&&(k=Math.cos(-T),x=Math.sin(-T),F=E*k-le*x,te=P*k-Oe*x,be=O*k-$*x,he=z*x+he*k,E=F,P=te,O=be),T=Mt(P,E),m=T*yt,T&&(k=Math.cos(T),x=Math.sin(T),F=E*k+P*x,te=q*k+W*x,P=P*k-E*x,W=W*k-q*x,E=F,q=te),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,w=180-w),f=Y(Math.sqrt(E*E+P*P+O*O)),g=Y(Math.sqrt(W*W+xe*xe)),T=Mt(q,W),y=Math.abs(T)>2e-4?T*yt:0,b=he?1/(he<0?-he:he):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Lo(ke(t,V)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Y(f),i.scaleY=Y(g),i.rotation=Y(m)+s,i.rotationX=Y(p)+s,i.rotationY=Y(w)+s,i.skewX=y+s,i.skewY=_+s,i.transformPerspective=b+o,(i.zOrigin=parseFloat(d.split(" ")[2])||!e&&i.zOrigin||0)&&(n[ye]=nn(d)),i.xOffset=i.yOffset=0,i.force3D=ge.force3D,i.renderTransform=i.svg?Vd:Ao?Do:Bd,i.uncache=0,i},nn=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ea=function(t,e,i){var n=ae(e);return Y(parseFloat(e)+parseFloat(nt(t,"x",i+"px",n)))+n},Bd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Do(t,e)},pt="0deg",ci="0px",gt=") ",Do=function(t,e){var i=e||this,n=i.xPercent,a=i.yPercent,o=i.x,s=i.y,l=i.z,d=i.rotation,c=i.rotationY,h=i.rotationX,u=i.skewX,f=i.skewY,g=i.scaleX,m=i.scaleY,p=i.transformPerspective,w=i.force3D,y=i.target,_=i.zOrigin,b="",v=w==="auto"&&t&&t!==1||w===!0;if(_&&(h!==pt||c!==pt)){var S=parseFloat(c)*Lt,C=Math.sin(S),T=Math.cos(S),k;S=parseFloat(h)*Lt,k=Math.cos(S),o=Ea(y,o,C*k*-_),s=Ea(y,s,-Math.sin(S)*-_),l=Ea(y,l,T*k*-_+_)}p!==ci&&(b+="perspective("+p+gt),(n||a)&&(b+="translate("+n+"%, "+a+"%) "),(v||o!==ci||s!==ci||l!==ci)&&(b+=l!==ci||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+gt),d!==pt&&(b+="rotate("+d+gt),c!==pt&&(b+="rotateY("+c+gt),h!==pt&&(b+="rotateX("+h+gt),(u!==pt||f!==pt)&&(b+="skew("+u+", "+f+gt),(g!==1||m!==1)&&(b+="scale("+g+", "+m+gt),y.style[V]=b||"translate(0, 0)"},Vd=function(t,e){var i=e||this,n=i.xPercent,a=i.yPercent,o=i.x,s=i.y,l=i.rotation,d=i.skewX,c=i.skewY,h=i.scaleX,u=i.scaleY,f=i.target,g=i.xOrigin,m=i.yOrigin,p=i.xOffset,w=i.yOffset,y=i.forceCSS,_=parseFloat(o),b=parseFloat(s),v,S,C,T,k;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Lt,d*=Lt,v=Math.cos(l)*h,S=Math.sin(l)*h,C=Math.sin(l-d)*-u,T=Math.cos(l-d)*u,d&&(c*=Lt,k=Math.tan(d-c),k=Math.sqrt(1+k*k),C*=k,T*=k,c&&(k=Math.tan(c),k=Math.sqrt(1+k*k),v*=k,S*=k)),v=Y(v),S=Y(S),C=Y(C),T=Y(T)):(v=h,T=u,S=C=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=nt(f,"x",o,"px"),b=nt(f,"y",s,"px")),(g||m||p||w)&&(_=Y(_+g-(g*v+m*C)+p),b=Y(b+m-(g*S+m*T)+w)),(n||a)&&(k=f.getBBox(),_=Y(_+n/100*k.width),b=Y(b+a/100*k.height)),k="matrix("+v+","+S+","+C+","+T+","+_+","+b+")",f.setAttribute("transform",k),y&&(f.style[V]=k)},Ud=function(t,e,i,n,a){var o=360,s=J(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?yt:1),d=l-n,c=n+d+"deg",h,u;return s&&(h=a.split("_")[1],h==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),h==="cw"&&d<0?d=(d+o*po)%o-~~(d/o)*o:h==="ccw"&&d>0&&(d=(d-o*po)%o-~~(d/o)*o)),t._pt=u=new ce(t._pt,e,i,n,d,Ed),u.e=c,u.u="deg",t._props.push(i),u},xo=function(t,e){for(var i in e)t[i]=e[i];return t},Yd=function(t,e,i){var n=xo({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,l,d,c,h,u,f,g;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),o[V]=e,s=hi(i,1),it(i,V),i.setAttribute("transform",d)):(d=getComputedStyle(i)[V],o[V]=e,s=hi(i,1),o[V]=d);for(l in Ve)d=n[l],c=s[l],d!==c&&a.indexOf(l)<0&&(f=ae(d),g=ae(c),h=f!==g?nt(i,l,d,g):parseFloat(d),u=parseFloat(c),t._pt=new ce(t._pt,s,l,h,u-h,Ma),t._pt.u=g||0,t._props.push(l));xo(s,n)};de("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",a="Left",o=(t<3?[e,i,n,a]:[e+a,e+i,n+i,n+a]).map(function(s){return t<2?r+s:"border"+s+r});tn[t>1?"border"+r:r]=function(s,l,d,c,h){var u,f;if(arguments.length<4)return u=o.map(function(g){return Be(s,g,d)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(c+"").split(" "),f={},o.forEach(function(g,m){return f[g]=u[m]=u[m]||u[(m-1)/2|0]}),s.init(l,f,h)}});var za={name:"css",register:La,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,a){var o=this._props,s=t.style,l=i.vars.startAt,d,c,h,u,f,g,m,p,w,y,_,b,v,S,C,T,k;Oa||La(),this.styles=this.styles||ko(t),T=this.styles.props,this.tween=i;for(m in e)if(m!=="autoRound"&&(c=e[m],!(me[m]&&xa(m,e,i,n,t,a)))){if(f=typeof c,g=tn[m],f==="function"&&(c=c.call(i,n,t,a),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Et(c)),g)g(this,t,m,c,i)&&(C=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(m)+"").trim(),c+="",qe.lastIndex=0,qe.test(d)||(p=ae(d),w=ae(c),w?p!==w&&(d=nt(t,m,d,w)+w):p&&(c+=p)),this.add(s,"setProperty",d,c,n,a,0,0,m),o.push(m),T.push(m,0,s[m]);else if(f!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(i,n,t,a):l[m],J(d)&&~d.indexOf("random(")&&(d=Et(d)),ae(d+"")||d==="auto"||(d+=ge.units[m]||ae(Be(t,m))||""),(d+"").charAt(1)==="="&&(d=Be(t,m))):d=Be(t,m),u=parseFloat(d),y=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),h=parseFloat(c),m in We&&(m==="autoAlpha"&&(u===1&&Be(t,"visibility")==="hidden"&&h&&(u=0),T.push("visibility",0,s.visibility),tt(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=We[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Ve,_){if(this.styles.save(m),k=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=ke(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=c,c=ke(t,"perspective"),x?t.style.perspective=x:it(t,"perspective")}h=parseFloat(c)}if(b||(v=t._gsap,v.renderTransform&&!e.parseTransform||hi(t,e.parseTransform),S=e.smoothOrigin!==!1&&v.smooth,b=this._pt=new ce(this._pt,s,V,0,1,v.renderTransform,v,0,-1),b.dep=1),m==="scale")this._pt=new ce(this._pt,v,"scaleY",v.scaleY,(y?mt(v.scaleY,y+h):h)-v.scaleY||0,Ma),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(ye,0,s[ye]),c=qd(c),v.svg?Da(t,c,0,S,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==v.zOrigin&&tt(this,v,"zOrigin",v.zOrigin,w),tt(this,s,m,nn(d),nn(c)));continue}else if(m==="svgOrigin"){Da(t,c,1,S,0,this);continue}else if(m in Po){Ud(this,v,m,u,y?mt(u,y+c):c);continue}else if(m==="smoothOrigin"){tt(this,v,"smooth",v.smooth,c);continue}else if(m==="force3D"){v[m]=c;continue}else if(m==="transform"){Yd(this,c,t);continue}}else m in s||(m=Dt(m)||m);if(_||(h||h===0)&&(u||u===0)&&!Ad.test(c)&&m in s)p=(d+"").substr((u+"").length),h||(h=0),w=ae(c)||(m in ge.units?ge.units[m]:p),p!==w&&(u=nt(t,m,d,w)),this._pt=new ce(this._pt,_?v:s,m,u,(y?mt(u,y+h):h)-u,!_&&(w==="px"||m==="zIndex")&&e.autoRound!==!1?Ld:Ma),this._pt.u=w||0,_&&k!==c?(this._pt.b=d,this._pt.e=k,this._pt.r=Pd):p!==w&&w!=="%"&&(this._pt.b=d,this._pt.r=Md);else if(m in s)Id.call(this,t,m,d,y?y+c:c);else if(m in t)this.add(t,m,d||t[m],y?y+c:c,n,a);else if(m!=="parseTransform"){Xi(m,c);continue}_||(m in s?T.push(m,0,s[m]):typeof t[m]=="function"?T.push(m,2,t[m]()):T.push(m,1,d||t[m])),o.push(m)}}C&&Aa(this)},render:function(t,e){if(e.tween._time||!Fa())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Be,aliases:We,getSetter:function(t,e,i){var n=We[e];return n&&n.indexOf(",")<0&&(e=n),e in Ve&&e!==ye&&(t._gsap.x||Be(t,"x"))?i&&fo===i?e==="scale"?Hd:Fd:(fo=i||{})&&(e==="scale"?Rd:zd):t.style&&!ji(t.style[e])?Dd:~e.indexOf("-")?Od:en(t,e)},core:{_removeProperty:it,_getMatrix:Ra}};se.utils.checkPrefix=Dt;se.core.getStyleSaver=ko;(function(r,t,e,i){var n=de(r+","+t+","+e,function(a){Ve[a]=1});de(t,function(a){ge.units[a]="deg",Po[a]=1}),We[n[13]]=r+","+t,de(i,function(a){var o=a.split(":");We[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");de("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ge.units[r]="px"});se.registerPlugin(za);var Wa=se.registerPlugin(za)||se,Nu=Wa.core.Tween;var Na={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},we={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Oo={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Fo="1.3.2",Ho={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function mi(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function Ae(){return new Date(mi())}function Ro(r,t=-1/0,e=1/0){return typeof r=="number"&&!isNaN(r)&&r>=t&&r<=e}function pi(r){return typeof r!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(r)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(r)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(r.toLowerCase())}function M(r){return r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Le(r,t){return Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0}function ue(r,t,e=0){if(!isFinite(r))return"--";Math.abs(r)<.5/10**e&&(r=0);let i=t?.locale?.language||t?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:e,maximumFractionDigits:e}).format(r)}catch{return r.toFixed(e)}}function gi(r,t,e){if(r?.localize)try{let i=r.localize(t);if(i&&i!==t)return i}catch{}return e}function zo(r,t){if(!isFinite(r))return 0;switch((t||"km/h").toLowerCase()){case"m/s":return r*3.6;case"mph":return r*1.609344;case"ft/s":return r*1.09728;case"kn":case"kt":case"knots":return r*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,r),1.5)*3.6;default:return r}}function A(r,t,...e){r&&console.log(`[AWC Dev] ${t}`,...e)}function ee(r,t){let e=r.engine_settings||{},i=(o,s,l,d)=>Ro(o,l,d)?o:s,n=i(e.windSpeed,we.windSpeed,.1,15),a=n;return Ro(t,0,200)&&(a=Math.max(.1,Math.min(15,t/10*n))),{windSpeed:a,rainCount:i(e.rainCount,we.rainCount,.1,10),leafCount:i(e.leafCount,we.leafCount,.1,10),snowCount:i(e.snowCount,we.snowCount,.1,10),cloudBaseSize:i(e.cloudBaseSize,we.cloudBaseSize,.3,2.5),cloudCount:i(e.cloudCount,we.cloudCount,1,20),splashBounce:i(e.splashBounce,we.splashBounce,40,120)}}function $a(r){r.forEach(t=>{t!=null&&clearTimeout(t)}),r.length=0}function Wo(r){let t=new Set;return r.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.getTweensOf(e).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;t.add(n)})}),t}function an(r){window.AnimatedWeatherCardGsap&&Wo(r).forEach(t=>t.pause())}function rn(r){window.AnimatedWeatherCardGsap&&Wo(r).forEach(t=>t.resume())}function Ia(r){window.AnimatedWeatherCardGsap&&r.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)})}function on(r,t,e,i,n={}){if(typeof r!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let a=r.toLowerCase();if(a.includes("sleet")&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"sleety-stormy";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"snowy-stormy";if(a.includes("lightning")||a.includes("thunder")||a.includes("storm"))return"stormy";if(a.includes("fog")||a.includes("mist"))return"foggy";if(a.includes("heavy")&&a.includes("rain"))return"pouring";if(a.includes("pouring")||a.includes("downpour"))return"pouring";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("rain")||a.includes("drizzle")))return"snowy-rainy";if(a.includes("light")&&(a.includes("rain")||a.includes("drizzle")))return"light-rain";if(a.includes("rain")||a.includes("drizzle"))return"rainy";if(a.includes("sleet")||a.includes("hail"))return"sleety";if(a.includes("snow"))return"snowy";if(a.includes("wind"))return"windy";if(a.includes("partly")&&a.includes("cloud"))return"partly-cloudy";if(a.includes("cloud")||a.includes("overcast"))return"cloudy";if(a.includes("clear")||a.includes("sunny")){if(!n.clock){if(a.includes("night"))return"clear-night";if(a.includes("sunny"))return"sunny";if(n.night!==void 0)return n.night?"clear-night":"sunny"}let o=Ae(),s;if(i)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:i,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(h.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=t??6,d=e??20;return(s<l||s>=d)&&a.includes("clear")?"clear-night":"sunny"}return"sunny"}function yi(r,t,e){if(typeof r!="string"||!r.trim())return console.warn("Invalid animation type provided"),e||fi("rain");if(!t||!t.isEnabled())return e||fi(r);let i=Ho[r];if(!i)return console.warn(`No color scheme found for animation type: ${r}`),e||fi(r);try{let n=t.getCurrentState(),a=t.getTimeAwareColor(i);return pi(a)?a:(console.warn(`Invalid color returned from time manager: ${a}`),e||fi(r))}catch(n){return console.error("Error getting time-aware color:",n),e||fi(r)}}function fi(r){let e={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[r];return e||(console.warn(`Unknown animation type: ${r}, using white as fallback`),"#FFFFFF")}var sn=class sn{constructor(t,e,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=t,this.config=e,this.cardConfig=i,this.state="created",queueMicrotask(()=>A(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){A(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),A(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(t){throw console.error(`Failed to start ${this.animationType} animation:`,t),this.setState("stopped"),t}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),A(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(t){throw console.error(`Failed to stop ${this.animationType} animation:`,t),t}}async pause(){if(this.state==="active")try{A(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(t){throw console.error(`Failed to pause ${this.animationType} animation:`,t),t}}async resume(){if(this.state==="paused")try{A(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(t){throw console.error(`Failed to resume ${this.animationType} animation:`,t),this.setState("paused"),t}}setWindSpeed(t){this.realWindSpeed=t,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),A(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(t){let e=this.state;this.state=t,A(this.config.devMode,`${this.animationType} state: ${e} \u2192 ${t}`)}ensureLayerVisibility(t){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=t?"block":"none",A(this.config.devMode,`Set ${this.animationType} container visibility: ${t}`))}let e=this.element.querySelector(this.layerSelector);e&&!sn.SHARED_LAYERS.includes(this.layerSelector)&&(e.style.opacity=t?"1":"0",A(this.config.devMode,`Set ${this.animationType} layer opacity: ${t?1:0}`))}cleanup(){this.animationHandles.forEach(t=>{t&&clearInterval(t)}),this.animationHandles=[],this.timeouts.forEach(t=>{if(t)if(typeof t=="function"){let e=t();e&&clearTimeout(e)}else clearTimeout(t)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)}),this.particles.forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)}),this.particles=[],A(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(t){this.animationHandles.push(t)}addTimeout(t){this.timeouts.push(t)}addParticle(t){this.particles.push(t)}removeParticle(t){let e=this.particles.indexOf(t);e>-1&&this.particles.splice(e,1)}};sn.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Z=sn;var at=class{constructor(t,e,i){this.layer=t;this.create=e;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(t){this.running=!0;let e=[];for(let i=0;i<t;i++){let n=this.create(i);this.layer.appendChild(n);let a={el:n};this.items.push(a),e.push(n),this.run(a,!0)}return e}run(t,e){this.running&&(t.anim=this.cycle(t.el,()=>this.run(t,!1),e),this.paused&&t.anim.pause())}pause(){this.paused=!0,this.items.forEach(t=>t.anim?.pause())}resume(){this.paused=!1,this.items.forEach(t=>t.anim?.resume())}stop(){this.running=!1,this.items.forEach(t=>{t.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.el),t.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(t=>t.el)}};function Ot(r,t){return t&&r.progress(Math.random()),r}var Kd=420*230;function Ft(r,t){return Math.min(3,Math.max(.6,r*t/Kd))||1}function D(r,t){return r+Math.random()*(t-r)}var jd={light:10,rain:18,storm:24,pouring:32},Xd={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Zd={light:16,rain:24,storm:34,pouring:42},Qd=.3,Jd=16,ec=8,tc=[10,30],No="http://www.w3.org/2000/svg";function ic(r,t,e,i){let n=0,a=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*r+l*l*e,c=2*(1-l)*l*t+l*l*i;n+=Math.hypot(d-a,c-o),a=d,o=c}return n}function nc(r,t,e,i){return Math.max(4,Math.round(jd[r]*t*Ft(e,i)))}var ln=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=a,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},A(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=this.rainKind(),o=nc(a,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,d=Zd[a],c=a==="pouring"?3:2.4;this.splashLayer=e,this.splashColor=s,this.splashBounce=i.splashBounce/we.splashBounce,this.pool=new at(e,()=>{let h=D(1,c),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${h.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${h.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=h.toFixed(2),u},(h,u,f)=>this.fall(h,n,a,d,l,u,f)),this.pool.start(o).forEach(h=>this.addParticle(h)),A(this.config.devMode,`Rain animation started - ${o} drops (${a})`)}fall(e,i,n,a,o,s,l){let d=i.offsetWidth,c=i.offsetHeight,[h,u]=Xd[n],f=D(h,u),g=D(6,Math.max(7,d-6)),m=this.rainConfig.splashEnabled&&Math.random()<Qd,p=-a,w=m?c-a:o?c+D(60,120):c,y=Math.max(.25,(w-p)/f),_=parseFloat(e.dataset.width||"2");window.AnimatedWeatherCardGsap.set(e,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(e,{y:p},{y:w,duration:y,ease:"none"}),m)b.call(()=>this.createSplash(g+_/2,c),[],y),b.to(e,{scaleY:0,duration:a/f,ease:"none"},y);else if(o){let v=(c-a-p)/f;b.to(e,{opacity:0,duration:y-v,ease:"power1.in"},v)}return Ot(b,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()}),this.splashDots=[],this.rebounds.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf([e,e.firstChild]),e.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(e=>e.remove()),A(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(e,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(e,i);for(let n of[-1,1]){let a=this.splashDots[this.nextSplashDot];a||(a=document.createElement("div"),a.className="rain-splash",a.style.background=this.splashColor,this.splashLayer.appendChild(a),this.splashDots[this.nextSplashDot]=a),this.nextSplashDot=(this.nextSplashDot+1)%Jd;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=n*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(a),window.AnimatedWeatherCardGsap.set(a,{x:e-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(a,{x:e-1+l,duration:o,ease:"power1.out"},0).to(a,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(a,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(a,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(e,i){let n=this.splashLayer,a=this.rebounds[this.nextRebound];if(!a){a=document.createElementNS(No,"svg"),a.classList.add("rain-rebound");let m=document.createElementNS(No,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,a.appendChild(m),n.appendChild(a),this.rebounds[this.nextRebound]=a}this.nextRebound=(this.nextRebound+1)%ec;let o=a.firstChild,[s,l]=tc,d=D(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,h=D(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let u=ic(c,-2*d,2*c,h),f=Math.min(u*.45,6+d*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(u+f).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([a,o]),window.AnimatedWeatherCardGsap.set(a,{x:e,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(a,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(e){return this.rainConfig.isStorm?yi("lightning",e,"var(--weather-storm-rain-color)"):yi("rain",e,"var(--weather-rain-color)")}};var ac=36,rt=[2,6],qa=[20,38],$o=10,rc=.6;function oc(r,t,e){return Math.max(6,Math.round(ac*r*Ft(t,e)))}function Ba(r){return Math.min(2.2,Math.max(.3,r/we.windSpeed))}var dn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=a,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},A(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=oc(i.snowCount,n.offsetWidth,n.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Ba(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new at(e,()=>this.createFlake(o),(d,c,h)=>this.fall(d,n,l,s,c,h)),this.pool.start(a).forEach(d=>this.addParticle(d)),A(this.config.devMode,`Snow animation started - ${a} flakes`)}createFlake(e){let i=D(rt[0],rt[1]),n=(i-rt[0])/(rt[1]-rt[0]),a=document.createElement("div");a.className="snowflake",a.dataset.size=i.toFixed(2),a.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${e}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,a.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(a,{transformOrigin:"50% -500%",rotation:-$o});let o=window.AnimatedWeatherCardGsap.to(a,{rotation:$o,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),a}fall(e,i,n,a,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(e.dataset.size||"4"),h=(c-rt[0])/(rt[1]-rt[0]),u=(qa[0]+(qa[1]-qa[0])*h)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<rc,g=-c*2,m=f?d-this.pileHeight()-c:a?d+D(60,120):d+c,p=m-g,w=Math.max(.5,p/u),y=p*D(.04,.13)*n,_=D(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:_,opacity:parseFloat(e.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(e,{y:g},{y:m,x:_+y,duration:w,ease:"none"}),f)b.call(()=>this.addToAccumulation(),[],w),b.to(e,{opacity:0,duration:.6,ease:"power1.out"},w);else if(a){let v=Math.min(w,(d-g)/u);b.to(e,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return Ot(b,s)}async onStop(){this.swings.forEach(e=>e.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),A(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(e=>e.pause()),A(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(e=>e.resume()),A(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let e=this.element.querySelector(".animated-weather-card");if(!e)return;e.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,e.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let e=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!e?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let a=Math.min(i,n+.8);e.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(e,{scaleY:a/i,opacity:Math.min(.9,a/i),duration:.3,ease:"power2.out"})}};var sc=30,Io=[150,230],lc=.3,cn=6,un=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=a,this.sleetConfig={particleCount:40,...i},A(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),a=Math.max(6,Math.round(sc*i.snowCount*Ft(n.offsetWidth,n.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=Ba(i.windSpeed)*.5;this.pool=new at(e,()=>{let l=D(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,n,s,o,d,c)),this.pool.start(a).forEach(l=>this.addParticle(l)),A(this.config.devMode,`Sleet animation started - ${a} pellets`)}fall(e,i,n,a,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(e.dataset.size||"2"),h=D(Io[0],Io[1]),u=Math.random()<lc,f=-c*2,g=u?d-c:a?d+D(60,120):d+c,m=g-f,p=Math.max(.3,m/h),w=m*D(.03,.08)*n,y=D(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:y,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(e,{y:f},{y:g,x:y+w,duration:p,ease:"none"}),u)_.call(()=>this.addToPile(i),[],p),_.to(e,{opacity:0,duration:.3,ease:"power1.out"},p);else if(a){let b=Math.min(p,(d-f)/h);_.to(e,{opacity:0,duration:Math.max(.1,p-b),ease:"power1.in"},b)}return Ot(_,s)}addToPile(e){if(this.state!=="active")return;let i=e.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${cn}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,e.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=cn)return;let a=Math.min(cn,n+.4);i.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(i,{scaleY:a/cn,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let e=this.element.querySelector(".animated-weather-card");e&&e.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),A(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Sleet animation resumed")}};function qo(r,t,e,i){return e!==null&&e>0?r*Math.max(0,e-t):r*.6*i}var Va=[90,160];function Bo(r,t,e,i,n,a=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,u=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*e;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let m=-f-10,p=s+(a?60+Math.random()*80:f+10),w=(Va[0]+Math.random()*(Va[1]-Va[0]))*Ht(t.windSpeed)*(h?.6:1),y=(p-m)/w,_=Math.min(y,(s-m)/w),b=u?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),r.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:y,ease:"none"},0).to(o,{y:d+b,duration:y,ease:h?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),a&&y>_&&v.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function Vo(r,t,e,i,n,a){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;o.style.position="absolute",o.style.height=(d?2:1)*e+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let c=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let h=Math.max(15,(20+Math.random()*60)*e);o.style.width=h+"px";let u=i.offsetWidth,f=i.offsetHeight,g=f*.15+Math.random()*(f*.7);window.AnimatedWeatherCardGsap.set(o,{x:-h,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),r.appendChild(o);let p=(u+h*2)/(dc*Ht(t.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),a&&a(o)}}).to(o,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:u+h,rotation:l?g>f/2?5:-5:0,duration:p,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,p*.3)},p-Math.min(.5,p*.3)),o}var dc=230,cc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Ht(r){return Math.min(2.2,Math.max(.6,Math.sqrt(r/we.windSpeed)))}var uc=12;function hc(r){let t=Math.round(70*r),e=Math.round(35*r);return{width:t,height:Math.round(26*r),puffs:[{x:Math.round(9*r),y:Math.round(-22*r),size:Math.round(44*r)},{x:t-Math.round(9*r)-e,y:Math.round(-13*r),size:e}]}}var Uo=r=>r>0?Math.ceil(r*3)+1:0,Go=new Map;function mc(r,t,e,i){let n=[r,t,e,i].join(","),a=Go.get(n);if(a)return a;let o=Uo(e),s=Math.ceil((r+2*o)*i),l=Math.ceil((t+2*o)*i),d=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},c=null,[h,u]=d();if(u){let[f,g,m]=[o*i,o*i,Math.min(50,r/2,t/2)*i],[p,w]=[f+r*i,g+t*i];if(u.fillStyle="#000",u.beginPath(),u.moveTo(f+m,g),u.arcTo(p,g,p,w,m),u.arcTo(p,w,f,w,m),u.arcTo(f,w,f,g,m),u.arcTo(f,g,p,g,m),u.closePath(),u.fill(),e>0){let[y,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*e*i,_.shadowOffsetX=s,_.drawImage(h,-s,0),c=y.toDataURL())}else c=h.toDataURL()}return c&&Go.set(n,c),c}function wi(r){(r.closest?.(".clouds-container")??r).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function fc(r){return Math.min(1,Math.max(.5,r/160))||1}function Yo(r,t,e,i,n){let a=i.offsetWidth,o=i.offsetHeight,s=cc,l=Ht(t.windSpeed),d=[],c=e||t.cloudCount,h=fc(o);return s.forEach((u,f)=>{let g=Math.ceil(f===0||f===1?c*.4:c*.6);for(let m=1;m<=g;m++){let p=document.createElement("div");p.className=`cloud-gsap cloud-gsap-${u.name}-${m}`;let w=t.cloudBaseSize*u.scale,y=1+(m-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*h,b=hc(_);p.style.position="absolute",p.style.opacity=u.opacity.toString(),p.dataset.awcO=String(u.opacity),p.style.zIndex=(10+f).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][f],S=n?.color_palette==="theme"?0:u.blur,C=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(j=>({x:j.x,y:j.y,width:j.size,height:j.size}))],T=Math.min(3,Math.max(1,window.devicePixelRatio||1)),k=C.map(j=>mc(j.width,j.height,S,T)),x=k.every(Boolean),E=x?Uo(S):0;if(p.style.width=b.width+"px",p.style.height=b.height+"px",x)p.classList.add("cloud-masked"),C.forEach((j,Q)=>{let ie=document.createElement("div");ie.style.position="absolute",ie.style.left=j.x-E+"px",ie.style.top=j.y-E+"px",ie.style.width=j.width+2*E+"px",ie.style.height=j.height+2*E+"px",ie.style.background=v;for(let Ke of["-webkit-",""])ie.style.setProperty(`${Ke}mask-image`,`url("${k[Q]}")`),ie.style.setProperty(`${Ke}mask-size`,"100% 100%"),ie.style.setProperty(`${Ke}mask-repeat`,"no-repeat");p.appendChild(ie)});else{p.style.borderRadius="50px",p.style.background=v,S>0&&(p.style.filter=`blur(${S}px)`);for(let j of b.puffs){let Q=document.createElement("div");Q.style.position="absolute",Q.style.left=j.x+"px",Q.style.top=j.y+"px",Q.style.width=j.size+"px",Q.style.height=j.size+"px",Q.style.borderRadius="50px",Q.style.background=v,p.appendChild(Q)}}let P=b.width+2*E,q=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][f][m-1]||15+f*10)/60,W=b.height+Math.max(E,Math.ceil(S*3))+2,F=Number(i.dataset?.cloudBand),te=Number.isFinite(F)&&i.dataset?.cloudBand!==void 0?F:null,be=Math.max(150+f*50,P+uc),le=u.speed*l*(.9+Math.random()*.2),Oe=(a+2*be)/le,$=document.createElement("div");$.className="cloud-track",$.dataset.awcF=String(q),$.dataset.awcB=String(W),$.appendChild(p),window.AnimatedWeatherCardGsap.set(p,{opacity:u.opacity});let $e=[$];if(n?.color_palette==="theme"){let j=r.parentElement?.querySelector(".clouds-occluders")??r.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),Q=p.cloneNode(!0);Q.className="cloud-occluder",Q.style.opacity="1";for(let Ke of[Q,...Array.from(Q.querySelectorAll("div"))])Ke.style.background&&(Ke.style.background="var(--awc-card-bg)");let ie=$.cloneNode(!1);ie.appendChild(Q),j?.appendChild(ie),$e.push(ie)}let he=$e.length>1?$e:$;window.AnimatedWeatherCardGsap.set(he,{xPercent:0,x:-be,y:qo(q,W,te,o)}),r.appendChild($);let xe=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});xe.fromTo(he,{xPercent:0,x:-be},{xPercent:100,x:be,duration:Oe,ease:"none"}),xe.progress(Math.random()),d.push(xe)}}),d}function Ko(r){let t=r.querySelector(".snow-accumulation");t&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(t,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{t.parentNode&&t.parentNode.removeChild(t)}}):t.parentNode?.removeChild(t))}function jo(r,t,e,i,n){let a=document.createElement("div");a.className=`fog-layer fog-layer-${e}`;let o=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[e]||l[2],c=n.custom_colors?.fog_color,h=(n.color_palette||"default")!=="theme"?pi(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),f=o*d.scale;a.style.cssText=`
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
    `;for(let S=0;S<u;S++){let C=document.createElement("div"),T=f/u*(2+Math.random()*1.2),k=d.height*(1.2+Math.random()*1.6),x=f/u*S-T*.3,E=(Math.random()-.5)*(d.height*.5);C.style.cssText=`
            position: absolute;
            left: ${x}px;
            top: ${E}px;
            width: ${T}px;
            height: ${k}px;
            background: radial-gradient(ellipse ${T/2}px ${k/2}px at center, 
                ${h} 0%, 
                ${h} 40%, 
                transparent 70%);
            border-radius: ${T/2}px ${k/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,a.appendChild(C)}r.appendChild(a);let g=t.windSpeed*(.5+Math.random()*.5),m=15/d.speed,p=Math.max(8,m/g),w=o*d.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(a,{x:y,opacity:d.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:e*2+Math.random()*3});b.to(a,{x:_,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(a,{x:y})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(a,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function hn(r){r.querySelectorAll(".fog-layer").forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}var pc=3,gc=2,Xo=[900,1400],Zo=[1800,2600],mn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=a,this.windConfig={leafCount:3,swooshEnabled:!0,...i},A(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),A(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(e){let i=ee(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(pc*i.leafCount));if(this.leaves.size<n){let a=Bo(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(a),this.addParticle(a)}this.scheduleLeaf(D(Xo[0],Xo[1])/Math.max(.5,i.leafCount))},e)}scheduleSwoosh(e){let i=ee(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<gc){let n=Vo(this.layer(),i,1,this.card(),this.cardConfig,a=>this.forget(a,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(D(Zo[0],Zo[1]))}},e)}forget(e,i){i.delete(e),this.removeParticle(e)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),A(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),an(this.layer()),A(this.config.devMode,"Wind animation paused")}async onResume(){rn(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),A(this.config.devMode,"Wind animation resumed")}};var _i=[6e3,18e3],yc=[1500,6e3],Qo=.16,fn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=a,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:_i[0],maxInterval:_i[1],...i},A(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Lightning layer not found: ${this.layerSelector}`);e.style.opacity="0";let[i,n]=yc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),A(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let e=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!e||!i)return;let n=i.offsetWidth,a=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(n-60),c=20*o,h=20,u=[d+",0"];for(let p=0;p<h;p++){let w=d+(Math.random()*c-c/2),y=a/h*(p+1);u.push(w+","+y)}l.setAttribute("d","M"+u.join(" L"));let f=this.element.timeOfDayManager,g=yi("lightning",f,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),e.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(e,{opacity:.9},0).to(e,{opacity:.3,duration:.06,ease:"none"},0).to(e,{opacity:.8,duration:.04,ease:"none"},.06).to(e,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;m.to(i,{y:p,duration:.06,ease:"power2.out"},Qo).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},Qo+.06)}}scheduleNext(){if(this.state!=="active")return;let e=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},e),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let e=this.element.querySelector(".animated-weather-card");e&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(e,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(a=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(a.querySelector("path")),a.parentNode&&a.parentNode.removeChild(a)}),i.style.opacity="0"),A(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),A(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),A(this.config.devMode,"Lightning animation resumed")}};var wc=["dawn","day","dusk","night"],Ka=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],_c={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},ts=(r,t,e)=>Math.min(t,Math.max(r,e)),ot=(r,t,e)=>r+(t-r)*e;function vc(r,t,e){let i=(t-r+540)%360-180;return(r+i*e+360)%360}function Ue(r,t,e){let i=([m,p,w])=>[m,p*Math.cos(w*Math.PI/180),p*Math.sin(w*Math.PI/180)],[n,a,o]=i(r),[s,l,d]=i(t),c=ot(n,s,e),h=ot(a,l,e),u=ot(o,d,e),f=Math.hypot(h,u),g=f<1e-6?r[2]:(Math.atan2(u,h)*180/Math.PI+360)%360;return[c,f,g]}function Ua([r,t,e]){let i=e*Math.PI/180,n=t*Math.cos(i),a=t*Math.sin(i),o=(r+.3963377774*n+.2158037573*a)**3,s=(r-.1055613458*n-.0638541728*a)**3,l=(r-.0894841775*n-1.291485548*a)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var bc=r=>r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055;function De(r){let t=i=>i.every(n=>n>=-1e-4&&n<=1.0001),e=Ua(r);if(!t(e)){let i=0,n=r[1];for(let a=0;a<24;a++){let o=(i+n)/2;t(Ua([r[0],o,r[2]]))?i=o:n=o}e=Ua([r[0],i,r[2]])}return e.map(i=>bc(ts(0,1,i)))}var is=r=>Math.round(ts(0,1,r)*255);function Ye(r){return"#"+r.map(t=>is(t).toString(16).padStart(2,"0")).join("")}function Jo(r,t){return`rgba(${r.map(is).join(", ")}, ${Number(t.toFixed(3))})`}function Ya(r,t){return[.15+(r[0]-.15)*.42,r[1]*ot(.75,.5,t),vc(r[2],262,.45)]}function xc(r,t){let e=_c[r],i=1-e.overcast*.7,n={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:ot(.46,.28,e.overcast)};if(r==="clear-night"){if(t==="dawn"||t==="dusk"){let a=t==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Ue(e.bottom,a,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(t){case"night":return{top:Ya(e.top,e.overcast),mid:Ya(e.mid,e.overcast),bottom:Ya(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:ot(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:Ue(e.top,[e.top[0]*.8,.075,292],.5*i),mid:Ue(e.mid,[e.mid[0]*.88,.065,350],.42*i),bottom:Ue(e.bottom,[e.bottom[0]*.92,.115,52],.72*i),glow:Ue(e.glow,[.82,.13,58],i),glowAlpha:ot(e.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Ue(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*i),mid:Ue(e.mid,[e.mid[0]*.95,.05,330],.3*i),bottom:Ue(e.bottom,[e.bottom[0]*.95,.085,32],.62*i),glow:Ue(e.glow,[.88,.09,40],i),glowAlpha:ot(e.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Sc(r){return[.16,Math.min(.04,r[1]*.6),r[2]]}function Rt(r,t){let e=xc(r,t);return{top:Ye(De(e.top)),mid:Ye(De(e.mid)),bottom:Ye(De(e.bottom)),glow:Jo(De(e.glow),e.glowAlpha),scrim:Jo(De(Sc(e.top)),e.scrimAlpha)}}var zt=[.985,.006,250],pn=.8,ns=.55,as=.4,gn={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},rs={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},os={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},yn=312,ss=r=>r.clientWidth>=640&&r.clientHeight>=540;function Wt(r,t){let e=i=>`${Math.round(i*100)}%`;return`radial-gradient(${e(r.rx)} ${e(r.ry)} at ${e(r.cx)} ${e(r.cy)}, ${t}, transparent ${e(r.fade)})`}function ls(){let r=[];for(let t of Ka)for(let e of wc){let i=Rt(t,e),n=e==="day"?`.animated-weather-card.${t}`:`.animated-weather-card.${t}[data-phase="${e}"]`;r.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return r.join(`
`)}function wn(r,t,e){return r==null||!Number.isFinite(r)?e?"day":"night":r<-6?"night":r<6?t?"dawn":"dusk":"day"}var st=3.2,Nt="cubic-bezier(0.37, 0, 0.63, 1)",ds={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},cs=Object.keys(ds),ja=cs.filter(r=>r.startsWith("--awc-sky-"));function us(){return cs.map(r=>`${r} ${st}s ${Nt}`).join(`,
            `)}var es=!1;function _n(){if(es)return;es=!0;let r=globalThis.CSS;if(r?.registerProperty)for(let[t,e]of Object.entries(ds))try{r.registerProperty({name:t,syntax:"<color>",inherits:!0,initialValue:e})}catch{}}var Xa=Array.from({length:25},(r,t)=>[t%5/2-1,Math.floor(t/5)/2-1]).filter(([r,t])=>r*r+t*t<=1),Cc=1.9,Tc=.6,vn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=a,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},A(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");wi(e);let a=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(a=Math.max(1,Math.round(a*.6))),this.cloudTimelines=Yo(e,i,a,n,this.cardConfig),this.startWindFactor=Ht(i.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),A(this.config.devMode,`Clouds animation started with ${a} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let e=this.element.querySelector(this.layerSelector);e&&wi(e),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),A(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),this.looks?.pause(),A(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),this.looks?.resume(),A(this.config.devMode,"Clouds animation resumed")}veilSun(e=!1){if(this.occlude()){this.lightSun(1,e);return}let i=this.element.querySelector(".sun-track .sun"),n=i?.getBoundingClientRect(),a=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!i||!n?.width||getComputedStyle(i).opacity==="0"){a.forEach(y=>this.dense(y,o(y),e));return}let s=n.width/2,l=n.left+s,d=n.top+n.height/2,c=this.element.querySelector(this.containerSelector),h=c?parseFloat(getComputedStyle(c).opacity):1,u=Number.isFinite(h)?h:1,f=a.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*Tc*u),g=a.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),m=(y,_,b)=>g[y].some(v=>{let S=Math.min(v.width,v.height)/2,C=_-Math.min(Math.max(_,v.left+S),v.right-S),T=b-Math.min(Math.max(b,v.top+S),v.bottom-S);return C*C+T*T<=S*S}),p=0,w=a.map(()=>0);for(let[y,_]of Xa)p+=a.reduce((b,v,S)=>m(S,l+y*s,d+_*s)?b*(1-f[S]):b,1),a.forEach((b,v)=>{m(v,l+y*s*1.25,d+_*s*1.25)&&(w[v]+=1/Xa.length)});this.lightSun(p/Xa.length,e),a.forEach((y,_)=>this.dense(y,o(y)*(1+(Cc-1)*Math.min(1,w[_]*3)),e))}occlude(){let e=this.element.querySelector(".animated-weather-card");if(!e||this.cardConfig.color_palette!=="theme")return!1;let i=e.closest("ha-card"),n=i?getComputedStyle(i):null,a=!!n&&(n.backgroundImage||"none")==="none"&&!!n.backgroundColor&&!/rgba|\/|transparent/.test(n.backgroundColor);return a&&e.style.getPropertyValue("--awc-card-bg")!==n.backgroundColor&&e.style.setProperty("--awc-card-bg",n.backgroundColor),e.toggleAttribute("data-occlude",a),a}dense(e,i,n){let a=(Math.round(Math.min(.95,i)*100)/100).toString();e.dataset.awcV!==a&&(e.dataset.awcV=a,n?window.AnimatedWeatherCardGsap?.set(e,{opacity:a}):window.AnimatedWeatherCardGsap?.to(e,{opacity:a,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(e,i=!1){let n=this.element.querySelector(".sun-track"),a=Math.round(e*100)/100;!n||a===this.sunLit&&!i||(this.sunLit=a,i?window.AnimatedWeatherCardGsap?.set(n,{opacity:a}):window.AnimatedWeatherCardGsap?.to(n,{opacity:a,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let e=ee(this.cardConfig,this.realWindSpeed),i=Ht(e.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:st,ease:"sine.inOut",overwrite:!0})})}};var bn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=a,this.fogConfig={layerCount:3,...i},A(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let e=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!e)throw new Error("Fog container not found");let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");hn(n),this.fogTimelines=[];for(let a=0;a<this.fogConfig.layerCount;a++){let o=jo(e,i,a,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}A(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),A(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),A(this.config.devMode,"Fog animation resumed")}};var kc=5,hs=353,Ac=1440,Ec=1/2,Mc=.25,Pc=.2,Lc=2,Dc=2;function Za(r,t){let e=t>0?Math.min(t,Ac):hs;return Math.max(15,Math.round(r*kc*Math.max(1,e/hs)))}var ms=20,fs=10,Oc=12,ps=(r,t)=>r.right>t.left-ms&&r.left<t.right+ms&&r.bottom>t.top-fs&&r.top<t.bottom+fs;function vi(r){let t=[],e=document.createRange();if(typeof e.getClientRects!="function")return t;let i=".animation-layer, .animation-container, style, script",n=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);for(let a=n.nextNode();a;a=n.nextNode())if(!(!a.nodeValue?.trim()||a.parentElement?.closest(i))){e.selectNodeContents(a);for(let o of Array.from(e.getClientRects()))o.width&&o.height&&t.push(o)}for(let a of Array.from(r.querySelectorAll("svg, ha-icon"))){if(a.closest(i))continue;let o=a.getBoundingClientRect();o.width&&o.height&&t.push(o)}return t}function Fc(r,t){for(let e of r){let i=e.getBoundingClientRect();e.classList.toggle("awc-veiled",!!i.width&&t.some(n=>ps(i,n)))}}function gs(r){let t=r.querySelectorAll(".stars-field .star-gsap");if(!t.length)return;let e=r.querySelector(".moon-gsap")?.getBoundingClientRect();Fc(t,e?.width?[...vi(r),e]:vi(r))}function Qa(r,t,{moon:e,still:i=!1,words:n=[]}){let a=document.createElement("div");a.className="stars-field";let o=e?document.createElement("div"):null;if(o){o.className="moon-gsap",r.appendChild(o);let d=o.getBoundingClientRect();d.width&&d.height&&(n=[...n,d])}let s=r.getBoundingClientRect(),l=n.length>0&&s.width>0&&s.height>0;for(let d=0;d<t;d++){let c=document.createElement("div");c.className="star-gsap";let h=1+Math.random()*3,u=.3+Math.random()*.5,f=0,g=0,m=!1;for(let p=0;p<(l?Oc:1)&&!m;p++){f=Math.random()*100,g=Math.random()*70;let w=s.left+f/100*s.width,y=s.top+g/100*s.height;m=!l||!n.some(_=>ps({left:w,top:y,right:w+h,bottom:y+h},_))}if(m||c.classList.add("awc-veiled"),c.style.cssText=`
            width: ${h.toFixed(2)}px;
            height: ${h.toFixed(2)}px;
            left: ${f.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${u.toFixed(2)};
        `,!i&&Math.random()<Ec){let p=Lc+Math.random()*Dc;c.classList.add("twinkle"),c.style.setProperty("--star-o",u.toFixed(2)),c.style.setProperty("--star-dim",(u*(Mc+Math.random()*Pc)).toFixed(2)),c.style.animationDuration=`${p.toFixed(2)}s`,c.style.animationDelay=`${(-Math.random()*p).toFixed(2)}s`}a.appendChild(c)}return o?r.insertBefore(a,o):r.appendChild(a),o?[a,o]:[a]}var xn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=a,this.starsConfig={starCount:30,showMoon:!0,...i},A(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=ee(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");n?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let a=Za(i.cloudCount,e.clientWidth||n?.clientWidth||0);for(let o of Qa(e,a,{moon:this.starsConfig.showMoon,words:n?vi(n):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});A(this.config.devMode,`Stars animation started with ${a} stars`)}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&e.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),A(this.config.devMode,"Stars animation stopped")}setPaused(e){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",e))}async onPause(){this.setPaused(!0),A(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),A(this.config.devMode,"Stars animation resumed")}};var Sn=class extends Z{constructor(e,i,n,a){super(e,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";A(this.config.devMode,"SunAnimation created")}async onStart(){let e=this.element.querySelector(this.layerSelector);if(!e){A(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}e.style.opacity="1",A(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.opacity="0"),A(this.config.devMode,"Sun animation stopped")}async onPause(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="paused"),A(this.config.devMode,"Sun animation paused")}async onResume(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="running"),A(this.config.devMode,"Sun animation resumed")}};var Cn=class{constructor(t,e,i,n){this.activeAnimations=new Map;this.element=t,this.config=e,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(t,e){this.activeAnimations.has(t)&&await this.stopModularAnimation(t);try{let i={intensity:e,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(t){case"rain":n=new ln(this.element,{...i,isStorm:e>=2&&e<=4,isPouring:e>4,isLightRain:e<1,particleCount:Math.floor(e*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new dn(this.element,{...i,particleCount:Math.floor(e*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new un(this.element,{...i,particleCount:Math.floor(e*40)},this.config,this.realWindSpeed);break;case"wind":n=new mn(this.element,{...i,leafCount:Math.max(1,Math.floor(e*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new fn(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:_i[0],maxInterval:_i[1]},this.config,this.realWindSpeed);break;case"clouds":n=new vn(this.element,{...i,cloudCount:Math.max(1,Math.floor(e*2)),isPartlyCloudy:e<3},this.config,this.realWindSpeed);break;case"fog":n=new bn(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(e)))},this.config,this.realWindSpeed);break;case"stars":n=new xn(this.element,{...i,starCount:Math.max(15,Math.floor(e*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new Sn(this.element,i,this.config);break;default:return A(this.config.dev_mode,`No modular animation registered for type: ${t}`),null}return await n.start(),this.activeAnimations.set(t,n),A(this.config.dev_mode,`Started modular ${t} animation with intensity ${e}`),n}catch(i){return console.error(`Failed to start modular ${t} animation:`,i),null}}async stopModularAnimation(t){let e=this.activeAnimations.get(t);if(e)try{await e.destroy(),A(this.config.dev_mode,`Stopped modular ${t} animation`)}catch(i){console.error(`Error stopping modular ${t} animation:`,i)}finally{this.activeAnimations.delete(t)}}async pauseModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isActive())try{await e.pause()}catch(i){console.error(`Error pausing modular ${t} animation:`,i)}}async resumeModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isPaused())try{await e.resume()}catch(i){console.error(`Error resuming modular ${t} animation:`,i)}}updateWindSpeed(t){if(!Object.is(t,this.realWindSpeed)){this.realWindSpeed=t;for(let[e,i]of this.activeAnimations)try{i.setWindSpeed(t)}catch(n){console.warn(`Failed to update wind speed for ${e}:`,n)}}}async cleanup(){let t=Array.from(this.activeAnimations.keys()).map(e=>this.stopModularAnimation(e));await Promise.all(t),this.activeAnimations.clear()}};var $t=class{constructor(t,e,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=t,this.config=e,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new Cn(t,e,n,this.currentWindSpeed),A(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(t){this.currentWindSpeed=t,this.modularBridge.updateWindSpeed(t)}async startAnimation(t,e){let i=this.animations[t];if(i.isActive){A(this.config.dev_mode,`Animation ${t} already active \u2014 skipping`);return}let n=e?.intensity??i.intensity??1,a=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(t,!0);try{let o=await this.modularBridge.startModularAnimation(t,n);if(a!==this.generation){A(this.config.dev_mode,`Discarding stale start for ${t} (generation drifted)`),await this.modularBridge.stopModularAnimation(t);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${t}`);return}A(this.config.dev_mode,`Started ${t} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${t} animation:`,o),i.isActive=!1}}async stopAnimation(t){let e=this.animations[t];if(e.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(t),A(this.config.dev_mode,`Stopped ${t} animation`)}catch(i){console.error(`Error stopping ${t} animation:`,i)}this.setAnimationLayerVisibility(t,!1),e.isActive=!1,e.isPaused=!1}}pauseAnimation(t){let e=this.animations[t];!e.isActive||e.isPaused||(e.isPaused=!0,this.modularBridge.pauseModularAnimation(t),A(this.config.dev_mode,`Paused ${t} animation`))}resumeAnimation(t){let e=this.animations[t];!e.isActive||!e.isPaused||(e.isPaused=!1,this.modularBridge.resumeModularAnimation(t),A(this.config.dev_mode,`Resumed ${t} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(t=>this.stopAnimation(t)))}pauseAllAnimations(){Object.keys(this.animations).forEach(t=>this.pauseAnimation(t))}resumeAllAnimations(){Object.keys(this.animations).forEach(t=>this.resumeAnimation(t))}async applyWeatherCondition(t){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let e=this.defaultWeatherMappings[t.toLowerCase()];if(!e){console.warn(`No animation mapping for weather condition: ${t}`);return}await Promise.all(e.animations.map(i=>{let n=e.overrides?.[i];return this.startAnimation(i,n)})),A(this.config.dev_mode,`Applied weather condition: ${t} with animations: ${e.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(t,e){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${t}-active`;e?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let t=this.element.querySelector(".animated-weather-card");if(t)for(let e of Object.keys(this.animations))t.classList.remove(`individual-${e}-active`)}};var Tn=new Map,Ja=new Set;function er(r,t,e){let i=Tn.get(r);if(!t){i&&(Tn.delete(r),ys());return}let n={entity:t,sun:e||"sun.sun"};i&&i.entity===n.entity&&i.sun===n.sun||(Tn.set(r,n),ys())}function ws(r){if(r){for(let t of Tn.values())if(t.sun===r)return t.entity}}function _s(r){return Ja.add(r),()=>{Ja.delete(r)}}function ys(){for(let r of[...Ja])r()}var kn=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:Number(r);return Number.isFinite(t)?t:null},lt=r=>typeof r=="string"?r.trim():"";function Hc(r){if(!r||typeof r!="object")return null;let t=r,e=typeof t.id=="number"?String(t.id):lt(t.id);return e?{id:e,label:lt(t.flight_number)||lt(t.callsign),aircraftCode:lt(t.aircraft_code),originCity:lt(t.airport_origin_city),originCode:lt(t.airport_origin_code_iata),destinationCity:lt(t.airport_destination_city),destinationCode:lt(t.airport_destination_code_iata),altitudeFt:kn(t.altitude),groundSpeedKt:kn(t.ground_speed),heading:kn(t.heading),verticalSpeed:kn(t.vertical_speed),onGround:t.on_ground===1||t.on_ground===!0||t.on_ground==="1"}:null}function tr(r,t){if(!r||!t)return null;let e=r.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return null;let i=e.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let a of i){let o=Hc(a);o&&n.push(o)}return n}var An=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(t,e=!1){if(!t)return[];let i=t.filter(s=>!s.onGround),n=new Set(i.map(s=>s.id));if(this.known===null)return this.known=n,e?i.filter((s,l)=>i.findIndex(d=>d.id===s.id)===l):[];let a=[],o=new Set;for(let s of i)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),a.push(s));return this.known=n,a}reset(){this.known=null}};var En=class{constructor(t={}){this.listeners=new Set;this.config={enableDayNightCycle:t.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...t},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(t){let e=this.config.enableDayNightCycle;this.config={...this.config,...t},this.updateState(),this.config.enableDayNightCycle&&!e?this.startAutoUpdate():!this.config.enableDayNightCycle&&e&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}getTimeAwareColor(t){let e=this.getCurrentState();if(!this.isEnabled())return t.day;switch(e.timePhase){case"dawn":return t.dawn||this.blendColors(t.night,t.day,.3);case"day":return t.day;case"dusk":return t.dusk||this.blendColors(t.day,t.night,.3);case"night":return t.night;default:return t.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let t=Ae(),e,i;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(t);e=parseInt(g.find(m=>m.type==="hour")?.value||"0",10),i=parseInt(g.find(m=>m.type==="minute")?.value||"0",10)}else e=t.getHours(),i=t.getMinutes();let n=e+i/60,a,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,h=(s+1)%24,u=(g,m,p)=>m<=p?g>=m&&g<p:g>=m||g<p;u(n,l,d)?a="dawn":u(n,d,c)?a="day":u(n,c,h)?a="dusk":a="night";let f={isDaytime:a==="day"||a==="dawn",isNighttime:a==="night"||a==="dusk",isDawn:a==="dawn",isDusk:a==="dusk",currentHour:e,timePhase:a};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Oo.UPDATE_INTERVAL)}notifyListeners(t){this.listeners.forEach(e=>{try{e(t)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(t,e,i){let n=t.replace("#",""),a=e.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),d=parseInt(a.substring(0,2),16),c=parseInt(a.substring(2,4),16),h=parseInt(a.substring(4,6),16),u=Math.round(o*(1-i)+d*i),f=Math.round(s*(1-i)+c*i),g=Math.round(l*(1-i)+h*i),m=u.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${m}${p}${w}`}};var vs=r=>`
        ${r} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var xi={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},Rc=ls(),zc=Ye(De(zt)),It=r=>`${Math.round(r*100)}%`,Wc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,Nc=48,bi=.2,$c={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Ic={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},bs=()=>`
${vs("animated-weather-card")}
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
          --awc-secondary: ${pn};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${zc};
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
            ${us()};
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
        ${Rc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Wt(gn,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,
            linear-gradient(180deg, transparent ${It(as)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${It(ns)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Wt(rs,"var(--awc-sky-glow)")}; }
        }
        /* A card taller than five rows keeps a five-row card's glow, around the
           sun beside the temperature, rather than a long streak down its side:
           the light is painted in a box no taller than that card, from the top
           (it fades out well inside it). Behind @supports, since a browser that
           can't read min() there would drop the whole sky. The compact strip,
           the wall, the view and the forecast card light the whole card. */
        @supports (background-size: 100% min(100%, 1px)) {
          .sky { --awc-sky-glow-box: 100% min(100%, ${yn}px); }
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
          background-image: ${Wc};
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
          color: ${xi.text};
          background: ${xi.fill};
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
        ${Object.entries($c).map(([r,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${r}"] .attribute-icon { color: ${t}; }`).join(`
        `)}
        ${Object.entries(Ic).map(([r,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${r}"] .attribute-icon { color: ${t}; }`).join(`
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
          --awc-sky-glow-layer: ${Wt(os,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${Nc}px;
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
          top: ${It(bi)};
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
          transition: opacity ${st/2}s ${Nt};
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
          max-height: ${yn}px;
          pointer-events: none;
          transition: transform ${st}s ${Nt};
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
           in its real phase (moon.ts). Like the sun, no lower than on a
           five-row card; the wall places it on the whole card. */
        .moon-gsap {
          position: absolute;
          left: 84%;
          top: ${It(bi)};
          top: min(${It(bi)}, ${+(bi*yn).toFixed(1)}px);
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
        .animated-weather-card[data-fw] .moon-gsap { top: ${It(bi)}; }
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

`;var ir={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",daylight_day:"{delta} siden i g\xE5r",daylight_week:"{delta} siden forrige uke",daylight_month:"{delta} siden forrige m\xE5ned",shift_earlier:"{delta} tidligere",shift_later:"{delta} senere",shift_day:"{shift} enn i g\xE5r",shift_week:"{shift} enn forrige uke",shift_month:"{shift} enn forrige m\xE5ned",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},qc={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",daylight_day:"{delta} since yesterday",daylight_week:"{delta} since last week",daylight_month:"{delta} since last month",shift_earlier:"{delta} earlier",shift_later:"{delta} later",shift_day:"{shift} than yesterday",shift_week:"{shift} than last week",shift_month:"{shift} than last month",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",daylight_day:"{delta} seit gestern",daylight_week:"{delta} seit letzter Woche",daylight_month:"{delta} seit letztem Monat",shift_earlier:"{delta} fr\xFCher",shift_later:"{delta} sp\xE4ter",shift_day:"{shift} als gestern",shift_week:"{shift} als letzte Woche",shift_month:"{shift} als letzten Monat",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",daylight_day:"{delta} desde ayer",daylight_week:"{delta} desde la semana pasada",daylight_month:"{delta} desde el mes pasado",shift_earlier:"{delta} antes",shift_later:"{delta} despu\xE9s",shift_day:"{shift} que ayer",shift_week:"{shift} que la semana pasada",shift_month:"{shift} que el mes pasado",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",daylight_day:"{delta} depuis hier",daylight_week:"{delta} depuis la semaine derni\xE8re",daylight_month:"{delta} depuis le mois dernier",shift_earlier:"{delta} plus t\xF4t",shift_later:"{delta} plus tard",shift_day:"{shift} qu\u2019hier",shift_week:"{shift} que la semaine derni\xE8re",shift_month:"{shift} que le mois dernier",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",daylight_day:"{delta} da ieri",daylight_week:"{delta} dalla settimana scorsa",daylight_month:"{delta} dal mese scorso",shift_earlier:"{delta} prima",shift_later:"{delta} dopo",shift_day:"{shift} rispetto a ieri",shift_week:"{shift} rispetto alla settimana scorsa",shift_month:"{shift} rispetto al mese scorso",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",daylight_day:"{delta} sinds gisteren",daylight_week:"{delta} sinds vorige week",daylight_month:"{delta} sinds vorige maand",shift_earlier:"{delta} eerder",shift_later:"{delta} later",shift_day:"{shift} dan gisteren",shift_week:"{shift} dan vorige week",shift_month:"{shift} dan vorige maand",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",daylight_day:"{delta} od wczoraj",daylight_week:"{delta} od zesz\u0142ego tygodnia",daylight_month:"{delta} od zesz\u0142ego miesi\u0105ca",shift_earlier:"{delta} wcze\u015Bniej",shift_later:"{delta} p\xF3\u017Aniej",shift_day:"{shift} ni\u017C wczoraj",shift_week:"{shift} ni\u017C w zesz\u0142ym tygodniu",shift_month:"{shift} ni\u017C w zesz\u0142ym miesi\u0105cu",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",daylight_day:"{delta} desde ontem",daylight_week:"{delta} desde a semana passada",daylight_month:"{delta} desde o m\xEAs passado",shift_earlier:"{delta} mais cedo",shift_later:"{delta} mais tarde",shift_day:"{shift} do que ontem",shift_week:"{shift} do que na semana passada",shift_month:"{shift} do que no m\xEAs passado",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",daylight_day:"{delta} fa\u021B\u0103 de ieri",daylight_week:"{delta} fa\u021B\u0103 de s\u0103pt\u0103m\xE2na trecut\u0103",daylight_month:"{delta} fa\u021B\u0103 de luna trecut\u0103",shift_earlier:"cu {delta} mai devreme",shift_later:"cu {delta} mai t\xE2rziu",shift_day:"{shift} dec\xE2t ieri",shift_week:"{shift} dec\xE2t s\u0103pt\u0103m\xE2na trecut\u0103",shift_month:"{shift} dec\xE2t luna trecut\u0103",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:ir,no:ir,nn:ir,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",daylight_day:"{delta} \u0437 \u0443\u0447\u043E\u0440\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0434\u043D\u044F",daylight_week:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",daylight_month:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",shift_earlier:"\u043D\u0430 {delta} \u0440\u0430\u043D\u0456\u0448\u0435",shift_later:"\u043D\u0430 {delta} \u043F\u0456\u0437\u043D\u0456\u0448\u0435",shift_day:"{shift}, \u043D\u0456\u0436 \u0443\u0447\u043E\u0440\u0430",shift_week:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",shift_month:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function qt(r){return r?.locale?.language||r?.language||"en"}function Gt(r){return`${qt(r)}|${r?.locale?.time_format??""}|${Si(r)??""}`}function Si(r){if(r?.locale?.time_zone!=="server")return;let t=r.config?.time_zone;if(t)try{return new Intl.DateTimeFormat("en",{timeZone:t}),t}catch{return}}function N(r,t,e={}){return Gc(qc,r,t,e)}function Gc(r,t,e,i={}){let n=qt(t).toLowerCase();return(r[n]?.[e]??r[n.split("-")[0]]?.[e]??r.en[e]).replace(/\{(\w+)\}/g,(o,s)=>i[s]??"")}function Bc(r){let t=r?.locale;if(!t?.time_format)return;if(t.time_format==="12")return!0;if(t.time_format==="24")return!1;let e=t.time_format==="language"?qt(r):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}catch{return}}function Bt(r,t){if(!r)return"--";let e=new Date(r);if(isNaN(e.getTime()))return"--";try{return xs(t,{hour:"numeric",minute:"2-digit"}).format(e)}catch{return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function xs(r,t){let e=Bc(r),i={...t,timeZone:Si(r)};return e!==void 0&&(i.hourCycle=e?"h12":"h23"),new Intl.DateTimeFormat(r?qt(r):void 0,i)}function Ss(r,t){try{let e=xs(t,{hour:"numeric",minute:"2-digit"}).formatToParts(r),i=e.filter(a=>a.type==="dayPeriod").map(a=>a.value).join("");return{time:e.filter(a=>a.type!=="dayPeriod").map(a=>a.value).join("").trim(),period:i}}catch{return{time:r.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Mn(r,t){try{let e=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Si(t)}).formatToParts(r),i=n=>Number(e.find(a=>a.type===n)?.value??0);return i("hour")+i("minute")/60+i("second")/3600}catch{return r.getHours()+r.getMinutes()/60+r.getSeconds()/3600}}function nr(r,t){let e=Math.round(Math.abs(r)*60),i=Math.floor(e/60),n=e%60,a=qt(t),o=Intl.DurationFormat;if(o&&t)try{return new o(a,{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return a.toLowerCase().split("-")[0]==="uk"?i>0?`${i}\xA0\u0433\u043E\u0434 ${n}\xA0\u0445\u0432`:`${n}\xA0\u0445\u0432`:i>0?`${i}h ${n}m`:`${n}m`}function Pn(r,t,e=!0){let i=Math.round(Math.abs(r)),n=e?i===0?"\xB1":r>0?"+":"\u2212":"",a=Math.floor(i/3600),o=Math.floor(i%3600/60),s=i%60,l=a?{hours:a,minutes:o}:o?{minutes:o,seconds:s}:{seconds:s};for(let f of Object.keys(l).slice(1))l[f]||delete l[f];let d=qt(t),c=Intl.DurationFormat;if(c&&t)try{let f=new c(d,i?{style:"narrow"}:{style:"narrow",secondsDisplay:"always"}).format(l);if(f)return n+f}catch{}let u=d.toLowerCase().split("-")[0]==="uk"?{hours:"\xA0\u0433\u043E\u0434",minutes:"\xA0\u0445\u0432",seconds:"\xA0\u0441"}:{hours:"h",minutes:"m",seconds:"s"};return n+Object.entries(l).map(([f,g])=>`${g}${u[f]}`).join(" ")}function ar(r,t){let e=Si(t);if(e)try{let i=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(r)),n=o=>Number(i.find(s=>s.type===o)?.value),a=Date.UTC(n("year"),n("month")-1,n("day"),n("hour"),n("minute"),n("second"));if(Number.isFinite(a))return a-Math.floor(r/1e3)*1e3}catch{}return-new Date(r).getTimezoneOffset()*6e4}function rr(r,t){let e=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();try{let o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric",timeZone:Si(t)}).formatToParts(r),s=l=>Number(o.find(d=>d.type===l)?.value);[s("year"),s("month"),s("day")].every(Number.isFinite)&&([e,i,n]=[s("year"),s("month"),s("day")])}catch{}let a=new Date(Date.UTC(e,i-1,0)).getUTCDate();return Math.round((Date.UTC(e,i-1,n)-Date.UTC(e,i-2,Math.min(n,a)))/864e5)}function Ln(r,t){let e=r.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return e?`${M(e[1])}<span class="${t}">${M(e[2])}</span>`:M(r)}var Cs=["humidity","wind","pressure","sun","uv","rain"],Ts=["humidity","wind","pressure","sun"];function or(r){let t=r.metrics,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e)return[...Ts];let i=[];for(let n of e){let a=String(n).trim().toLowerCase();Cs.includes(a)&&!i.includes(a)&&i.push(a)}return i}var Dn=[3,6,8,11],ks=["low","moderate","high","very_high","extreme"];function Ci(r){let t=r.uv_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==4)return Dn;let i=e.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,a)=>isFinite(n)&&(a===0||n>i[a-1]))?i:Dn}function Ti(r,t=Dn){let e=Math.round(r),i=0;for(;i<4&&e>=t[i];)i++;return ks[i]}var Vc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function Uc(r,t){try{let e=r.formatEntityState?.(t);if(e&&e!==t.state)return e}catch{}return Le(Vc,t.state)||t.state}var sr=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:parseFloat(String(r));return isFinite(t)?t:null};function lr(r,t){return(t.uv_entity?sr(r?.states[t.uv_entity]?.state):null)??sr(t.entity?r?.states[t.entity]?.attributes?.uv_index:void 0)}function As(r,t,e){if(e===null||!isFinite(e))return{text:"--",level:null};let i=Ti(e,Ci(t));return{text:`${ue(Math.max(0,Math.round(e)),r)} ${dr(r,i)}`,level:i}}function dr(r,t){return N(r,`uv_${t}`)}function Ai(r,t,e){let i=/\bin\b|inch/i.test(t)?2:1;return`${ue(Math.max(0,r),e,i)} ${t}`.trim()}function _t(r,t,e){let i=t?r?.states[t]:void 0,n=sr(i?.state);return n===null?null:{value:n,unit:typeof i?.attributes?.unit_of_measurement=="string"?i.attributes.unit_of_measurement:e}}var On=(r,t)=>N(r,t?"rain_now":"rain_today"),Yc=180;function Es(r,t){let e=t.note_entity?r?.states[t.note_entity]:void 0;if(!e)return null;let i=s=>typeof s=="string"?s.trim():"",n=e.state==="unknown"||e.state==="unavailable"?"":i(e.state),a=i(e.attributes?.[t.note_attribute||"note"]);if(!n&&!a)return null;let o=Date.parse(e.attributes?.generated_at);return{line:n||a,note:a||n,writtenAt:Number.isNaN(o)?null:o}}function Ms(r,t){let e=Number(t.note_max_age??Yc);return r.writtenAt===null||!(e>0)?null:r.writtenAt+e*6e4}function cr(r,t){return r?jc(r,t):{temperature:"--",weatherCondition:"",location:t.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var Kc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function ki(r){let t=typeof r=="number"?r:typeof r=="string"?parseFloat(r):NaN;return isFinite(t)?(t%360+360)%360:typeof r=="string"?Kc[r.trim().toUpperCase()]??null:null}function Vt(r){return Number(r.temperature_decimals)===1?1:0}function jc(r,t){if(!t.entity)throw new Error("Weather entity is required");let e=r.states[t.entity];if(!e)throw new Error(`Entity ${t.entity} not found`);let i;if(t.outdoor_sensor_entity){let x=r.states[t.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?i=parseFloat(x.state):i=e.attributes.temperature}else i=e.attributes.temperature;let n=Vt(t),a=x=>ue(n?x:Math.round(x),r,n),o=i!=null&&!isNaN(i)?a(i):"--",s=Uc(r,e),l=t.name||e.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?ue(Math.round(E),r)+"%":null},c="--";if(t.humidity_sensor_entity){let x=r.states[t.humidity_sensor_entity];c=x&&d(x.state)||d(e.attributes.humidity)||"--"}else c=d(e.attributes.humidity)||"--";let h="--",u=10,f=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=zo(P,E||"km/h"),h=ue(Math.round(P),r)+" "+(E||"km/h"),!0):!1},g=t.wind_speed_sensor_entity?r.states[t.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(e.attributes.wind_speed,e.attributes.wind_speed_unit);let m=t.wind_direction_sensor_entity?r.states[t.wind_direction_sensor_entity]:void 0,p=ki(m?.state)??ki(e.attributes.wind_bearing),w=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return ue(P,r,O)+" "+E},y=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",b=null;if(t.pressure_sensor_entity){let x=r.states[t.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=w(x.state,E);P&&(_=P,b=y(x.state))}if(_==="--"&&e.attributes.pressure!==void 0){let E=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,E)||"--",b=y(e.attributes.pressure)}}else if(e.attributes.pressure!==void 0){let x=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,x)||"--",b=y(e.attributes.pressure)}let v=null,S;if(t.feels_like_entity&&(S=r.states[t.feels_like_entity]?.state),S===void 0&&e.attributes.apparent_temperature!==void 0&&(S=e.attributes.apparent_temperature),S!==void 0){let x=typeof S=="number"?S:parseFloat(S);isFinite(x)&&(v=a(x)+"\xB0")}let C="--";if(t.indoor_temperature_entity){let x=r.states[t.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(C=a(parseFloat(x.state))+"\xB0")}let T="--";if(t.indoor_humidity_entity){let x=r.states[t.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(T=ue(Math.round(parseFloat(x.state)),r)+"%")}let k;if(t.sun_entity){let x=r.states[t.sun_entity];x&&(k={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:u,windBearing:p,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:C,indoorHumidity:T,uv:lr(r,t),sun:k}}var Xc=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],mr={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},ur=["uv_max","rain_event","rain_week","rain_month","rain_year"],Zc=r=>r!=="sun"&&!Object.prototype.hasOwnProperty.call(mr,r);var Ps=r=>typeof r=="string"&&Xc.includes(r),Fn=r=>typeof r=="string"&&r.trim()?r.trim():void 0;function Qc(r){if(typeof r=="string"){let l=r.trim().toLowerCase();return Ps(l)?{type:l,view:ur.includes(l)}:null}if(!r||typeof r!="object")return null;let t=r,e=typeof t.type=="string"?t.type.trim().toLowerCase():"";if(!Ps(e))return null;let i={type:e,view:t.view===!0||ur.includes(e)},n=Fn(t.entity);n&&(i.entity=n);let a=Fn(t.direction_entity);e==="wind"&&a&&(i.direction_entity=a);let o=Fn(t.rate_entity);e==="rain"&&o&&(i.rate_entity=o);let s=Fn(t.name);return s&&(i.name=s),i}function fr(r){let t=r.readings;if(Array.isArray(t))return t.map(Qc).filter(a=>!!a);let e=[],i=a=>{let o=Object.fromEntries(Object.entries(a).filter(([,s])=>s!==void 0&&s!==""));e.push({...o,view:!!a.view||ur.includes(a.type)})},n=or(r);for(let a of n){if(a==="sun"){r.show_sun!==!1&&i({type:"sun"});continue}a==="humidity"?i({type:"humidity",entity:r.humidity_sensor_entity}):a==="wind"?i({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity}):a==="pressure"?i({type:"pressure",entity:r.pressure_sensor_entity}):a==="uv"?i({type:"uv",entity:r.uv_entity}):a==="rain"&&i({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity})}!n.includes("wind")&&(r.wind_speed_sensor_entity||r.wind_direction_sensor_entity)&&i({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity,view:!0}),!n.includes("uv")&&r.uv_entity&&i({type:"uv",entity:r.uv_entity,view:!0}),!n.includes("rain")&&(r.rain_entity||r.rain_rate_entity)&&i({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity,view:!0}),r.uv_max_entity&&i({type:"uv_max",entity:r.uv_max_entity});for(let a of["rain_event","rain_week","rain_month","rain_year"]){let o=r[`${a}_entity`];o&&i({type:a,entity:o})}return e}var Jc=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],Ei=r=>r?.entity&&!r.entity.startsWith("weather.")?r.entity:void 0;function Ls(r){if(!Array.isArray(r.readings))return r;let t=fr(r),e=s=>t.find(l=>l.type===s),i={...r};for(let s of Jc)delete i[s];let n=e("wind"),a=e("rain"),o={humidity_sensor_entity:Ei(e("humidity")),wind_speed_sensor_entity:Ei(n),wind_direction_sensor_entity:n?.direction_entity,pressure_sensor_entity:Ei(e("pressure")),uv_entity:Ei(e("uv")),uv_max_entity:e("uv_max")?.entity,rain_entity:Ei(a),rain_rate_entity:a?.rate_entity,rain_event_entity:e("rain_event")?.entity,rain_week_entity:e("rain_week")?.entity,rain_month_entity:e("rain_month")?.entity,rain_year_entity:e("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(i[s]=l);return i}var Ds=r=>r.map((t,e)=>({r:t,i:e})).filter(({r:t})=>!t.view&&!(Zc(t.type)&&!t.entity)),Os=r=>[...new Set(r.flatMap(t=>[t.entity,t.direction_entity,t.rate_entity]).filter(t=>!!t))];var hr=[51,101,151,201,301],eu=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function Fs(r){let t=r.aqi_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==5)return hr;let i=e.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,a)=>isFinite(n)&&(a===0||n>i[a-1]))?i:hr}function Hs(r,t=hr){let e=Math.round(r),i=0;for(;i<5&&e>=t[i];)i++;return eu[i]}var pr=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:parseFloat(String(r));return isFinite(t)?t:null},Rs=(r,t,e)=>{let i=e.entity?.startsWith("weather.")?e.entity:t.entity;return i?r?.states[i]:void 0},tu=(r,t)=>t.entity&&!t.entity.startsWith("weather.")?r?.states[t.entity]:void 0;function Ne(r,t,e,i,n=""){let a=tu(r,e),o=pr(a?.state);if(o!==null)return{value:o,unit:typeof a?.attributes?.unit_of_measurement=="string"?a.attributes.unit_of_measurement:n};let s=Le(mr,e.type);if(!s)return{value:null,unit:""};let l=Rs(r,t,e),d=i?l?.attributes?.[i]:void 0;return{value:pr(l?.attributes?.[s]),unit:typeof d=="string"?d:n}}var Mi=(r,t)=>t?`${r} ${t}`:r,_e="--",Hn=(r,t,e)=>gi(r,`ui.card.weather.attributes.${t}`,N(r,e)),iu={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},nu=(r,t)=>N(r,`aqi_${t}`);function au(r,t){let e=t.sun_entity?r?.states[t.sun_entity]:void 0,i=e?.state==="above_horizon",n=e?Bt(i?e.attributes?.next_setting:e.attributes?.next_rising,r):_e;return{label:N(r,i?"sunset":"sunrise"),icon:i?"sunset":"sunrise",html:Ln(n,"awc-ampm"),text:n}}function gr(r,t,e){let i=(o,s=0)=>ue(s?o:Math.round(o),r,s),n=o=>`${ue(Vt(t)?o:Math.round(o),r,Vt(t))}\xB0`,a=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(e.type){case"humidity":{let{value:o}=Ne(r,t,e);return a(gi(r,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?_e:`${i(o)}%`)}case"wind":{let{value:o,unit:s}=Ne(r,t,e,"wind_speed_unit","km/h"),l=e.direction_entity?r?.states[e.direction_entity]?.state:void 0,d=ki(l)??ki(Rs(r,t,e)?.attributes?.wind_bearing);return{...a(gi(r,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?_e:Mi(i(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=Ne(r,t,e,"pressure_unit","hPa"),l=s||"hPa";return{...a(gi(r,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?_e:Mi(i(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return au(r,t);case"uv":{let{value:o}=Ne(r,t,e),s=As(r,t,o);return{label:N(r,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=_t(r,e.rate_entity,"mm/h"),s=_t(r,e.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return a(On(r,l),"rain",d?Ai(d.value,d.unit,r):_e)}case"aqi":{let{value:o}=Ne(r,t,e);if(o===null)return{label:N(r,"aqi"),icon:"aqi",html:_e,text:_e,level:null};let s=Hs(o,Fs(t)),l=i(Math.max(0,o)),d=nu(r,s);return{label:N(r,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=Ne(r,t,e);return a(N(r,"feels_like"),"thermometer",o===null?_e:n(o))}case"dew_point":{let{value:o}=Ne(r,t,e);return a(Hn(r,"dew_point","dew_point"),"thermometer",o===null?_e:n(o))}case"visibility":{let{value:o,unit:s}=Ne(r,t,e,"visibility_unit","km");return a(Hn(r,"visibility","visibility"),"eye",o===null?_e:Mi(i(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=Ne(r,t,e);return a(Hn(r,"cloud_coverage","cloud_cover"),"cloud",o===null?_e:`${i(o)}%`)}case"gust":{let{value:o,unit:s}=Ne(r,t,e,"wind_speed_unit","km/h");return a(Hn(r,"wind_gust_speed","gusts"),"wind",o===null?_e:Mi(i(o),s||"km/h"))}case"sensor":{let o=e.entity?r?.states[e.entity]:void 0,s=e.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:e.entity??""),l=Le(iu,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return a(s,l,_e);let d;try{d=r?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=pr(o.state),h=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Mi(ue(c,r,Math.min(2,(String(o.state).split(".")[1]??"").length)),h)}return a(s,l,d)}default:{let o=_t(r,e.entity,e.type==="uv_max"?"":"mm");return a(e.type,e.type==="uv_max"?"noon":"rain",o?e.type==="uv_max"?i(o.value):Ai(o.value,o.unit,r):_e)}}}function yr(r){return r&&typeof r=="object"&&typeof r.action=="string"?r:void 0}function Rn(r,t){return{entity:t,tap_action:yr(r?.tap_action),hold_action:yr(r?.hold_action),double_tap_action:yr(r?.double_tap_action)}}function Ut(r){return!!r&&r.action!=="none"}function zs(r){return r.tap_action?Ut(r.tap_action):!!r.entity}function Pi(r,t,e,i={}){let n=t[`${e}_action`],a=n&&Object.prototype.hasOwnProperty.call(i,n.action)?i[n.action]:void 0;if(a){a(e);return}if(e==="tap"&&!n){t.entity&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t.entity},bubbles:!0,composed:!0}));return}Ut(n)&&r.dispatchEvent(new CustomEvent("hass-action",{detail:{config:t,action:e},bubbles:!0,composed:!0}))}function zn(r,t,e,i={}){if(r.dataset.actionsBound)return;r.dataset.actionsBound="1";let n=null,a=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{n=null,l()},c=()=>{Ut(e().double_tap_action)?s?(clearTimeout(s),s=void 0,Pi(t,e(),"double_tap",i)):s=setTimeout(()=>{s=void 0,Pi(t,e(),"tap",i)},250):Pi(t,e(),"tap",i)},h=u=>u.target!==r&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');r.addEventListener("pointerdown",u=>{u.button!==0||h(u)||(n={x:u.clientX,y:u.clientY},a=!1,l(),Ut(e().hold_action)&&(o=setTimeout(()=>{o=void 0,a=!0,Pi(t,e(),"hold",i)},500)))}),r.addEventListener("pointermove",u=>{n&&Math.hypot(u.clientX-n.x,u.clientY-n.y)>10&&d()}),r.addEventListener("pointerup",()=>{let u=!!n&&!a;d(),u&&c()}),r.addEventListener("pointercancel",d),r.addEventListener("pointerleave",d),r.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==r||!zs(e())||(u.preventDefault(),Pi(t,e(),"tap",i))}),r.addEventListener("contextmenu",u=>{Ut(e().hold_action)&&u.preventDefault()})}function Li(r,t,e){zs(t)?(r.setAttribute("role","button"),r.tabIndex=0,r.style.cursor="pointer"):(e?r.setAttribute("role",e):r.removeAttribute("role"),r.removeAttribute("tabindex"),r.style.cursor="");let i=Ut(t.hold_action);r.style.userSelect=i?"none":"",r.style.setProperty("-webkit-user-select",i?"none":""),r.style.setProperty("-webkit-touch-callout",i?"none":"")}var wr=new Map;function vt(r,t){let e=wr.get(r);if(e)return e;let i=new Promise((n,a)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${r}$1.js`):`${r}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>t()?n():a(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>a(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return i.catch(()=>wr.delete(r)),wr.set(r,i),i}function Di(r){return vt("animated-weather-card-editor",()=>!!customElements.get(r))}var Ws={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function bt(r,t){return`<svg class="${t} awc-icon" data-icon="${r}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${Ws[r]}"/></svg>`}function Ns(r,t){!r||r.getAttribute("data-icon")===t||(r.setAttribute("data-icon",t),r.firstElementChild?.setAttribute("d",Ws[t]))}var ru=29.530588853,ou=Date.UTC(2e3,0,6,18,14),su={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function $s(r,t){let i=((r.getTime()-ou)/864e5/ru%1+1)%1,n=t?Le(su,t):void 0;if(!n)return i;let a=i*28;return a>=27.5&&(a-=28),a=Math.min(n[1],Math.max(n[0],a)),(a/28%1+1)%1}function Is(r,t=!1){let e=Math.cos(2*Math.PI*r),i=(1-e)/2,n=r<.5!==t,a=i<.5,o=(Math.abs(e)*50).toFixed(1),s=n===a?1:0,l=n?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,h=.3+.7*i;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*h).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*h).toFixed(3)})`}}var K=Math.PI/180,Fi=6e4,ve=864e5;function _r(r){let t=(r/ve+24405875e-1-2451545)/36525,e=(280.46646+t*(36000.76983+t*3032e-7))%360,i=357.52911+t*(35999.05029-1537e-7*t),n=.016708634-t*(42037e-9+1267e-10*t),a=Math.sin(i*K)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*i*K)*(.019993-101e-6*t)+Math.sin(3*i*K)*289e-6,o=125.04-1934.136*t,s=e+a-.00569-.00478*Math.sin(o*K),l=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(o*K),d=Math.asin(Math.sin(l*K)*Math.sin(s*K)),c=Math.tan(l/2*K)**2,h=4/K*(c*Math.sin(2*e*K)-2*n*Math.sin(i*K)+4*n*c*Math.sin(i*K)*Math.cos(2*e*K)-.5*c*c*Math.sin(4*e*K)-1.25*n*n*Math.sin(2*i*K));return{declination:d,equationOfTime:h}}function Gs(r,t,e){let{declination:i,equationOfTime:n}=_r(r.getTime()),o=((r.getUTCHours()*60+r.getUTCMinutes()+r.getUTCSeconds()/60+r.getUTCMilliseconds()/6e4+n+4*e)%1440+1440)%1440/4-180,s=Math.sin(t*K)*Math.sin(i)+Math.cos(t*K)*Math.cos(i)*Math.cos(o*K);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/K}function Bs(r,t){let e=r+(720-4*t)*Fi,{equationOfTime:i}=_r(e),n=r+(720-4*t-i)*Fi;return{noon:n,declination:_r(n).declination}}var lu=-.833;function Oi(r,t){let e=Math.floor(t/ve)*ve,i=NaN;for(let n=-1;n<=1;n++){let a=Bs(e+n*ve,r).noon;Math.abs(a-t)>=Math.abs(i-t)||(i=a)}return i}function vr(r,t,e){let i=l=>Gs(new Date(l),r,t)>lu,n=e-ve/2,a=e+ve/2,o=i(e);if(!o)return{up:o,start:n,end:a,rise:null,set:null};let s=(l,d)=>{for(let c=0;c<24;c++){let h=(l+d)/2;i(h)?d=h:l=h}return(l+d)/2};return{up:o,start:n,end:a,rise:i(n)?null:s(n,e),set:i(a)?null:s(a,e)}}function qs(r,t,e){let i=vr(r,t,Oi(t,e));return i.up?i.rise===null&&i.set===null?{minutes:1440,polar:!0}:{minutes:((i.set??i.end)-(i.rise??i.start))/Fi,polar:!1}:{minutes:0,polar:!0}}function Vs(r,t,e,i,n){let a=Oi(t,e),o=null,s=a;for(let d of[a-ve,a,a+ve]){let c=vr(r,t,Oi(t,d))[i];c!==null&&(o===null||Math.abs(c-e)<Math.abs(o-e))&&(o=c,s=Oi(t,d))}if(o===null)return null;let l=vr(r,t,Oi(t,s-n*ve))[i];return l===null?null:{now:o,then:l}}function Us(r,t,e,i){let n=qs(r,t,e);return n.polar?null:Math.round((n.minutes-qs(r,t,e-i*ve).minutes)*60)}function Ys(r,t,e=Ae()){let i=e.getTime(),n=Math.floor(i/ve)*ve,a={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=r*K;for(let m=-1;m<=2;m++){let{noon:p,declination:w}=Bs(n+m*ve,t);a.noon.push(p),a.midnight.push(p+ve/2);for(let[y,_,b]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let v=(Math.sin(y*K)-Math.sin(o)*Math.sin(w))/(Math.cos(o)*Math.cos(w));if(!(Math.abs(v)<=1))continue;let S=Math.acos(v)/K*4;a[_].push(p-S*Fi),a[b].push(p+S*Fi)}}let s=m=>m.filter(p=>p>i).sort((p,w)=>p-w)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=Gs(e,r,t),c=s(a.rising),h=s(a.setting),u=s(a.noon),f=s(a.midnight);return{state:(h!==null&&c!==null?h<c:h!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(a.dawn)),next_dusk:l(s(a.dusk)),next_midnight:l(f),next_noon:l(u),next_rising:l(c),next_setting:l(h),elevation:Math.round(d*100)/100,rising:u!==null&&f!==null?u<f:!1}}}var Ks=r=>typeof r=="number"?r:typeof r=="string"&&r.trim()?Number(r):NaN;function du(r){let t=r.latitude!==void 0&&r.latitude!==null&&r.latitude!=="",e=r.longitude!==void 0&&r.longitude!==null&&r.longitude!=="",i=typeof r.time_zone=="string"&&r.time_zone.trim()?r.time_zone.trim():void 0;if(!t&&!e&&!i)return null;let n,a;if(t||e){if(n=Ks(r.latitude),a=Ks(r.longitude),!t||!e)throw new Error("latitude and longitude go together: set both, or neither");if(!(n>=-90&&n<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${r.latitude})`);if(!(a>=-180&&a<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${r.longitude})`)}if(i)try{new Intl.DateTimeFormat("en",{timeZone:i})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${i})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=n!==void 0&&a!==void 0?`sun.awc_${o(n)}_${o(a)}`:void 0;return{latitude:n,longitude:a,timeZone:i,sunId:s,key:`${s??""}|${i??""}`}}function cu(r,t,e,i=[]){let n=r;if(n.awcPlace===t.key)return r;let a=n.awcHome??r,o=Object.create(a);if(t.sunId&&e){let s=Object.create(a.states);s[t.sunId]=e;let l=e.state==="above_horizon"?"sunny":"clear-night";for(let d of i){let c=d?a.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...a.config,...t.latitude!==void 0?{latitude:t.latitude,longitude:t.longitude}:{},...t.timeZone?{time_zone:t.timeZone}:{}},t.timeZone&&(o.locale={...a.locale??{},time_zone:"server"}),o.awcPlace=t.key,o.awcHome=a,o}function uu(r,t=Ae()){if(!r.sunId||r.latitude===void 0||r.longitude===void 0)return;let e=Ys(r.latitude,r.longitude,t),i=t.toISOString();return{entity_id:r.sunId,state:e.state,attributes:{...e.attributes,friendly_name:"Sun"},last_changed:i,last_updated:i,context:{id:"",parent_id:null,user_id:null}}}var Yt=class{constructor(t=()=>[]){this.weather=t;this.place=null;this.timer=0}set(t){let e=du(t),i=(e?.key??"")!==(this.place?.key??"");return this.place=e,i&&(this.sun=void 0),i}see(t){if(!this.place)return t;let e=Math.floor(mi()/6e4);if(this.place.sunId&&this.sun?.minute!==e){let i=uu(this.place);this.sun=i?{minute:e,entity:i}:void 0}return cu(t,this.place,this.sun?.entity,this.weather())}tick(t){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(t,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var js=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function Xs(r){let t=r.color_palette||"default",e=r.custom_colors||{},i="";if(t!=="theme"){let a=c=>{if(typeof c!="string"||!js.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let u=parseInt(h,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(c,h,u)=>"#"+(c<<16|h<<8|u).toString(16).padStart(6,"0"),s=(c,h)=>{let u=a(c);if(!u)return c;let f=1-h/100;return o(Math.max(0,Math.floor(u.r*f)),Math.max(0,Math.floor(u.g*f)),Math.max(0,Math.floor(u.b*f)))},l=(c,h)=>{let u=a(c);if(!u)return c;let f=h/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*f)),Math.min(255,Math.floor(u.g+(255-u.g)*f)),Math.min(255,Math.floor(u.b+(255-u.b)*f)))},d=(c,h)=>{let u=e[c];if(!u||typeof u!="string"||!js.test(u))return;let f=l(u,12),g=s(u,22);i+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${u} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let n=(a,o)=>{a&&pi(a)&&(i+=o.replace(/\$\{value\}/g,a))};return n(e.text_color,"--weather-text-color: ${value} !important; "),n(e.temperature_color,"--awc-hero-color: ${value} !important; "),n(e.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(e.rain_color,"--weather-rain-color: ${value} !important; "),n(e.snow_color,"--weather-snow-color: ${value} !important; "),i}var Kt="animated-weather-card-hour";var jt="animated-weather-card-dev",Zs="weather.awc_dev";function Hi(r){return r.awcDevBase??r}function Nn(r,t){let e=Hi(r),i=window.AnimatedWeatherCardDev;if(!i||!t)return e;try{return i.wants(t)?i.lens(e,t):e}catch(n){return console.warn("Animated Weather Card: the dev card's world failed",n),e}}function Ri(r){if(!r)return!1;let t=window.AnimatedWeatherCardDev;if(!t)return!!r.dev_mode;try{return t.wants(r)}catch{return!!r.dev_mode}}function $n(){return window.AnimatedWeatherCardDev?.offset??0}function Xt(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function zi(){return window.AnimatedWeatherCardDevCards?Promise.resolve():vt("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Wn=class extends HTMLElement{setConfig(t){this.devCardConfig={...t},this.view?.update()}set hass(t){this.devCardHass=t,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}zi().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(t=>{console.warn(`Animated Weather Card: ${t.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var Qs={horizon:196,peak:34,trough:276,twilightRy:78},Js={horizon:200,peak:96,trough:262,twilightRy:44};function br(r,t,e){let i=e-t;if(i<=0||i>=24)return 0;if(r>=t&&r<=e)return Math.sin(Math.PI*(r-t)/i);let n=((r-e)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var xr=(r,t=!1)=>t?1-r/24:r/24,xt=(r,t=!1)=>xr(r,t)*1e3,Sr=(r,t)=>r>=0?t.horizon-r*(t.horizon-t.peak):t.horizon-r*(t.trough-t.horizon);var il={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},hu={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function mu(r){return Le(hu,r)??"last-light"}function Cr(r,t){let e=n=>n.startsWith("sensor.")&&Le(il,t.states[n]?.state)!==void 0,i=t?e("sensor.moon_phase")?"sensor.moon_phase":Object.keys(t.states).find(e):"sensor.moon_phase";return i?{sun_entity:r,moon_entity:i}:{sun_entity:r}}var fu=124,el=16;function pu(r,t){if(r<1)return 1;let e=Math.max(2,Math.floor((t+el)/(fu+el))),i=Math.ceil(r/e);return Math.ceil(r/i)}function gu(r,t,e){if(t==="none")return null;let i=r?.config?.latitude,n=r?.config?.longitude;if(typeof i!="number"||typeof n!="number"||!Number.isFinite(i)||!Number.isFinite(n))return null;let a=t==="week"||t==="month"?t:"day",o=a==="week"?7:a==="month"?rr(e,r):1,s=e.getTime()+(12-Mn(e,r))*36e5,l=Us(i,n,s,o);if(l===null)return null;let d="\0",[c="",h=""]=N(r,a==="week"?"daylight_week":a==="month"?"daylight_month":"daylight_day",{delta:d}).split(d);return{before:c,figure:Pn(l,r),after:h}}function yu(r,t,e,i){if(t==="none"||!i)return null;let n=r?.config?.latitude,a=r?.config?.longitude;if(typeof n!="number"||typeof a!="number"||!Number.isFinite(n)||!Number.isFinite(a))return null;let o=Date.parse(i);if(!Number.isFinite(o))return null;let s=t==="week"?7:t==="month"?rr(new Date(o),r):1,l=Vs(n,a,o,e,s);if(!l)return null;let d=l.now-l.then-s*864e5+ar(l.now,r)-ar(l.then,r),c=Math.round(d/1e3);return c===0?null:c}function wu(r,t,e,i){let n=[];for(let a=0;a<=240;a++){let o=a/10;n.push(`${xt(o,i).toFixed(1)},${Sr(br(o,r,t),e).toFixed(1)}`)}return"M"+n.join(" L")}function qn(r,t){if(!r)return 0;let e=new Date(r);return isNaN(e.getTime())?0:Mn(e,t)}var _u=r=>Ln(r,"st-ampm");_n();var tl=Ye(De(zt)),vu=`
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
        color: ${xi.text};
        background: ${xi.fill};
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
        --st-text: ${tl};
        --st-secondary: ${tl};
        --st-secondary-opacity: ${pn};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Wt(gn,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${ja.map(r=>`${r} ${st}s ${Nt}`).join(", ")};
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
`,Tr=class extends HTMLElement{constructor(){super();this.config={};this._place=new Yt(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=e=>this._follow(e.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",Ri(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let e=$n();e!==this._devClock&&(this._devClock=e,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(e){return this._place.see(Nn(e,this.config))}setConfig(e){let i=this._place.set(e),n=this._place.place?.sunId;if(!e.sun_entity&&!n&&!e.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let a=!!this.config.dev_mode!=!!e.dev_mode;this.config={...e,sun_entity:n||e.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",Ri(this.config)),e.dev_mode&&zi().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(i||a)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(e){this._homeHass=Hi(e),e=this._see(e);let i=this.config.sun_entity||"",n=this.config.moon_entity||"",a=this._hass?.states[i],o=e.states[i],s=this._hass?.states[n]?.state,l=e.states[n]?.state,d=Gt(this._hass)!==Gt(e),c=this._weatherId()||"",h=c&&this._hass?.states[c]?.state!==e.states[c]?.state;this._hass=e;let u=a?.attributes?.elevation,f=o?.attributes?.elevation;(!a||a.state!==o?.state||a.attributes?.next_rising!==o?.attributes?.next_rising||a.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(f||0))>=.5||n&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Kt,this._onHour),window.addEventListener(jt,this._onDev),Xt().add(this),this._unshare||(this._unshare=_s(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Kt,this._onHour),window.removeEventListener(jt,this._onDev),Xt().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let e=this._shadow.querySelector(".st-card");if(!e)return;let i=e.querySelector(".st-metrics"),n=e.querySelector(".st-delta");for(let a of["regular","compact","short","tight"]){if(e.dataset.fit=a,this._fitShift(e),i){let o=Array.from(i.children).filter(s=>getComputedStyle(s).display!=="none").length;i.style.setProperty("--st-cols",String(pu(o,i.clientWidth)))}if(n?.parentElement){let o=n.parentElement,s=()=>o.scrollWidth>o.clientWidth+.5;n.hidden=!1,delete n.dataset.words,s()&&(n.dataset.words="off"),s()&&(n.hidden=!0)}if(e.scrollHeight<=e.clientHeight+1)return}}_shiftHtml(e,i){let n=this.config.daylight_delta,a=N(i,e<0?"shift_earlier":"shift_later",{delta:Pn(e,i,!1)}),o="\0",s=N(i,n==="week"?"shift_week":n==="month"?"shift_month":"shift_day",{shift:o}),[l="",d=""]=s.split(o),c=h=>h?`<span class="st-shift-period">${M(h)}</span>`:"";return`<span class="st-shift" title="${M(l+a+d)}"><span class="st-shift-sep" aria-hidden="true"> \xB7 </span>${c(l)}<span class="st-shift-words">${M(a)}</span>${c(d)}<span class="st-shift-sign" aria-hidden="true">${M(Pn(e,i))}</span></span>`}_fitShift(e){let i=e.querySelector(".st-shift"),n=i?.parentElement;if(!i||!n||(i.hidden=!1,getComputedStyle(n).display==="none"))return;let a=n.clientWidth;e.classList.contains("compact")&&(i.hidden=!0,a=(e.querySelector(".st-hero")?.getBoundingClientRect().width??n.clientWidth)+Math.min(40,.08*e.clientWidth),i.hidden=!1);for(let o of["words","sign"])if(i.dataset.form=o,n.scrollWidth<=a+.5)return;i.hidden=!0}_actions(){let e=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return Rn(this.config,e)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||ws(this.config.sun_entity)}_skyCondition(e){let i=this._weatherId(),n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let a=on(n,void 0,void 0,this._hass?.config?.time_zone,{night:e==="night"});if(Ka.includes(a))return a}return e==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Di("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(e,i=[],n=[]){let a=[...i,...n,...Object.keys(e?.states??{})];return Cr(a.find(o=>o.startsWith("sun."))??"sun.sun",e)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let e=this._hass.states[this.config.sun_entity];return e?{sunrise:e.attributes.next_rising||null,sunset:e.attributes.next_setting||null,dawn:e.attributes.next_dawn||null,dusk:e.attributes.next_dusk||null,noon:e.attributes.next_noon||null,elevation:typeof e.attributes.elevation=="number"?e.attributes.elevation:null,aboveHorizon:e.state==="above_horizon",rising:!!e.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let e=this._hass.states[this.config.moon_entity];if(!e)return null;let i=e.state,n;try{n=this._hass.formatEntityState?.(e)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Le(il,i)||i.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),icon:mu(i)}}_render(){this._drawnWeather=this._weatherId();let e=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!e||!e.sunrise||!e.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let a=Ae(),o=Mn(a,this._hass),s=qn(e.sunrise,this._hass),l=qn(e.sunset,this._hass),d=e.dawn?qn(e.dawn,this._hass):Math.max(0,s-.5),c=e.dusk?qn(e.dusk,this._hass):Math.min(24,l+.5),h=l-s,u=e.aboveHorizon,f=u?e.sunset:e.sunrise,g=new Date(f).getTime()-a.getTime(),m=this._hass,p=Fe=>M(N(m,Fe)),w=Fe=>_u(Bt(Fe,m)),y=g>0?N(m,"in_duration",{duration:nr(g/36e5,m)}):"",_=y&&this.config.show_header!==!1?yu(m,this.config.daylight_delta,u?"set":"rise",f):null,b=_===null?"":this._shiftHtml(_,m),v=wn(e.elevation,e.rising,e.aboveHorizon),S=Rt(this._skyCondition(v),v),C=n?{"--awc-sky-top":S.top,"--awc-sky-mid":S.mid,"--awc-sky-bottom":S.bottom,"--awc-sky-glow":S.glow,"--awc-sky-scrim":S.scrim}:null,T=this.config.compact?Js:Qs,k=this.config.direction,x=k==="right_to_left"||k!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:x};let E=wu(s,l,T,x),P=`${E} L${xt(24,x)},${T.horizon} L${xt(0,x)},${T.horizon} Z`,O=br(o,s,l),z=xr(o,x)*100,q=Sr(O,T)/300*100,W=(Fe,Vn)=>{let Ni=Math.max(70,Math.abs(Vn)/24*1e3*2.4);return`<ellipse cx="${xt(Fe,x).toFixed(1)}" cy="${T.horizon}" rx="${Ni.toFixed(1)}" ry="${T.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},F=!!this.config.compact,te=this.config.show_header!==!1,be=te?`
            <div class="st-hero">
                ${this.config.title&&!F?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${bt(u?"sunset":"sunrise","st-glyph")}
                    <span>${p(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(f)}</div>
                ${y?`<div class="st-countdown">${M(y)}${b}</div>`:""}
            </div>`:this.config.title&&!F?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",le=(Fe,Vn,Ni,ll,dl=!1)=>`
                <div class="st-metric" data-kind="${M(Fe)}">
                    <div class="st-metric-label">${bt(Vn,"st-glyph")}<span title="${M(Ni)}">${M(Ni)}</span></div>
                    <div class="st-metric-value${dl?" wrap":""}">${ll}</div>
                </div>`,Oe=!F&&this.config.show_details!==!1,$=Oe?gu(m,this.config.daylight_delta,a):null,$e=Fe=>Fe.trim()?`<span class="st-delta-words">${M(Fe)}</span>`:"",he=$?`<span class="st-delta" title="${M($.before+$.figure+$.after)}">${$e($.before)}<span class="st-delta-figure">${M($.figure)}</span>${$e($.after)}</span>`:"",xe=F&&te?`
                        <div class="st-chart-note">${p(u?"sunrise":"sunset")}<span class="st-chart-note-time">${w(u?e.sunrise:e.sunset)}</span></div>`:"",j=Oe?`
            <div class="st-metrics">
                ${u?le("sunrise","sunrise",p("sunrise"),w(e.sunrise)):le("sunset","sunset",p("sunset"),w(e.sunset))}
                ${le("noon","noon",p("solar_noon"),w(e.noon))}
                ${le("daylight","daylight",p("daylight"),M(nr(h,m))+he)}
                ${le("first-light","first-light",p("first_light"),w(e.dawn))}
                ${le("last-light","last-light",p("last_light"),w(e.dusk))}
                ${i?le("moon",i.icon,p("moon"),M(i.phaseName),!0):""}
            </div>`:"",Q=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,ie="";try{ie=Q&&m?.formatEntityState?.(Q)||""}catch{}let Ke=[`${N(m,"sunrise")} ${Bt(e.sunrise,m)}`,`${N(m,"sunset")} ${Bt(e.sunset,m)}`,ie].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${be}
                    <div class="st-chart" role="img" aria-label="${M(Ke)}">
                        <svg viewBox="0 0 ${1e3} ${300}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${1e3}" height="${T.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${T.horizon}" width="${1e3}" height="${300-T.horizon}"/></clipPath>
                            </defs>
                            ${W(s,s-d)}
                            ${W(l,c-l)}
                            <path d="${P}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${T.horizon}" x2="${1e3}" y2="${T.horizon}" class="st-horizon"/>
                            <line x1="${xt(o,x).toFixed(1)}" y1="0" x2="${xt(o,x).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${E}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${E}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${O<0?"below":""}" style="left: ${z.toFixed(2)}%; top: ${q.toFixed(2)}%;"></div>${xe}
                    </div>
                    ${j}`,C)}_mount(e,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${vu}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),zn(n.parentElement,this,()=>this._actions())),Li(n.parentElement,this._actions());let a=!!i;n.classList.toggle("sky",a),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",a);for(let o of ja)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=e,this._link&&this._follow(),this._fit()}_follow(e){if(e){if(!e.source||e.sun!==this.config.sun_entity||e.at===null&&!this._link)return;if(this._link=e.at===null?null:e,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let i=this._shadow.querySelector(".st-card");i&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:i,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",Tr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,t)=>t.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Cr(t,r)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Cr(t,r),compact:!0}}]:null});function Zt(r){let t=Number(r?.attributes?.supported_features);if(!isFinite(t))return["hourly","daily"];let e=[];return t&2&&e.push("hourly"),t&4&&e.push("twice_daily"),t&1&&e.push("daily"),e}function nl(r){let t=Zt(r);return t.includes("daily")?"daily":t.includes("twice_daily")?"twice_daily":null}var bu=5e3;function xu(){let r=new WeakMap;return{subscribe(t,e,i,n){let a=r.get(t);a||r.set(t,a=new Map);let o=`${e}|${i}`,s=a.get(o);if(!s){let d={listeners:new Set};s=d,a.set(o,d);let c=h=>{d.last=h;for(let u of[...d.listeners])u(h)};d.unsubscribe=t.subscribeMessage(h=>c({type:h?.type??i,forecast:Array.isArray(h?.forecast)?h.forecast:null}),{type:"weather/subscribe_forecast",entity_id:e,forecast_type:i}).catch(()=>{a.get(o)===d&&a.delete(o),c({type:i,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(n),l.last&&n(l.last),()=>{!l.listeners.delete(n)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(a.get(o)===l&&a.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},bu))}}}}function Su(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=xu())}function al(r,t,e,i){return r?.connection?.subscribeMessage?Su().subscribe(r.connection,t,e,i):()=>{}}var Gn=class{constructor(t){this.changed=t;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(t,e,i){let n=e?t?.states[e]:void 0,a=Zt(n),o=i.hourly&&a.includes("hourly"),s=i.daily?nl(n):null,l=`${e}|${o}|${s}`;if(!t?.connection||!e||!n){this.key&&this.stop();return}if(l===this.key&&this.connection===t.connection)return;this.stop(),this.key=l,this.connection=t.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,h)=>{this.stops.push(al(t,e,c,u=>{u.failed||h(u.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let t of this.stops)t();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};_n();var rl=r=>`Wind from ${Math.round(r)}\xB0`,ol=r=>r==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",Cu=18,Tu=450,ku=1600;function Qt(r,t){return t?.states["sun.sun"]?{entity:r,sun_entity:"sun.sun"}:{entity:r}}var Au=400,Eu=120,Mu=220,Pu=24;window.AnimatedWeatherCardGsap=Wa;var sl=["regular","compact","short","tight","minimal"],Lu=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...sl.map(r=>[r,"none"])],Bn=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Yt(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new An;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new Gn(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let e=$n();e!==this.devClock&&(this.devClock=e,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0))};this.devClock=0;this.onNeedle=e=>{let i=e.detail;this.following||this.forecastOn()||i?.at==null||i.source===this||i.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(e,i=[],n=[]){let a=[...i,...n,...Object.keys(e?.states??{})];return Qt(a.find(o=>o.startsWith("weather."))??Na.entity,e)}actionsConfig(){if(this.surface==="view")return{};let e=Rn(this.config,this.config?.entity);return e.tap_action?e:this.config?.layout==="nightstand"&&this.surface==="card"?{...e,tap_action:{action:"none"}}:this.forecastOn()?{...e,tap_action:{action:"forecast"}}:e}see(e){return this.placeView.see(Nn(e,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&Ri(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let e=this.isConnected&&this.surface!=="view";er(this,e?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let e=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:e!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let e=window.AnimatedWeatherCardForecast;if(!e){vt("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}e.version===2&&(this.extras=e.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Rt,phase:()=>this.currentSkyPhase(),current:()=>{let e=this.config?.outdoor_sensor_entity||this.config?.entity,i=Number(e?this.config?.outdoor_sensor_entity?this._hass?.states[e]?.state:this._hass?.states[e]?.attributes?.temperature:NaN);return isFinite(i)?i:void 0},temperature:e=>{let i=this.config?Vt(this.config):0;return ue(i?e:Math.round(e),this._hass,i).replace(/^-/,"\u2212")},conditionName:e=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:e,attributes:{},last_changed:"",last_updated:""})??e,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(e=>(e.type==="aqi"||e.type==="sensor")&&!!e.entity).map(e=>{let i=gr(this._hass,this.config,e);return{label:i.label,value:i.value??i.text,...i.word?{word:i.word}:{},...i.level?{level:i.level}:{}}}),reading:(e,i)=>{if(!this.config)return null;if(e==="rain_today"||e==="rain_now"){let o=e==="rain_now"?_t(this._hass,this.config.rain_rate_entity,"mm/h"):_t(this._hass,this.config.rain_entity,"mm");return!o||e==="rain_now"&&!(o.value>0)?null:{label:On(this._hass,e==="rain_now"),value:Ai(o.value,o.unit,this._hass)}}if(e!=="uv")return null;let n=i??lr(this._hass,this.config);if(n===null||!isFinite(n))return null;let a=Ti(n,Ci(this.config));return{label:N(this._hass,"uv_index"),value:ue(Math.max(0,Math.round(n)),this._hass),word:dr(this._hass,a),level:a}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=h=>h===void 0||typeof h=="number"&&isFinite(h)&&h>=0&&h<=23;if(!i(e.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${e.sunrise_hour})`);if(!i(e.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${e.sunset_hour})`);let n=this.placeView.set(e),a=this.placeView.place?.sunId;a&&(e={...e,sun_entity:a}),e=Ls(e),e.layout==="nightstand"&&e.compact&&this.surface==="card"&&(e={...e,compact:!1});let o=fr(e),s=JSON.stringify(o)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(h=>this.config?.[h]!==e[h]);this.readingList=o;let l=!!this.config?.dev_mode!=!!e.dev_mode;e.dev_mode&&(e.entity||(e={...e,entity:Zs}),zi().then(()=>this.devChanged()).catch(h=>console.warn(`Animated Weather Card: ${h.message}`)));let d=this.config?.auto_pause;this.config?.flights_entity!==e.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==e.entity&&(this.following=!1),this.config=e,this.markDev(),s&&this.redrawRow(),(n||l)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&Li(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let h=this.animationController;this._animationGeneration++,this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),h&&h.stopAllAnimations().catch(u=>A(this.config?.dev_mode,"Error stopping previous animation controller:",u))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!e.auto_pause!=!!d&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Kt,this.onNeedle),window.addEventListener(jt,this.devChanged),this.surface!=="view"&&Xt().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;Ia(this),this.stopPlanes();let e=this.config.color_palette||"default",i;try{i=cr(this.hass,this.config)}catch(w){let y=w?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${bt("alert","awc-empty-icon")}
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
            `;return}let{temperature:n,weatherCondition:a,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:h}=i,u=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let f=!!this.config.compact,g=this.heroClock(),m=Xs(this.config),p=this.rowHtml(u);this.innerHTML=`
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
                ${g?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(a)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(a)}</div>`}
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
        ${bs()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(e,i){if(e)return"";let n=this.config?.show_location!==!1&&i?`<span class="awc-place">${M(i)}</span>`:"",a=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return n||a||o?`<div class="location">${a}${o}${n}</div>`:""}heroTime(){let{time:e,period:i}=Ss(Ae(),this._hass);return i?`${M(e)}<span class="awc-ampm">${M(i)}</span>`:M(e.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let e=this.querySelector("ha-card");if(!e)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";e.style.setProperty("overflow",i,"important");let n=()=>{let a=e.shadowRoot;if(!a)return;let o=a.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",a.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!e.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let e=this.querySelector(".animated-weather-card");if(!e||e.classList.contains("loading")){this.initializeAnimations();return}e.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},Au)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let e=window.AnimatedWeatherCardNote;if(e){this.noteWriter??(this.noteWriter=new e(this)),this.noteWriter.start();return}vt("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(e){this.writtenNote=e,this.updateNote()}noteWriting(e){this.noteComing!==e&&(this.noteComing=e,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let e=this.config.note_entity?Es(this._hass,this.config):this.writtenNote,i=e?Ms(e,this.config):null;if(!e||i===null)return e;let n=i-mi();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),e)}noteHtml(e){return`<p class="weather-note"${e?"":" hidden"}><span class="note-long">${M(e?.note??"")}</span><span class="note-short">${M(e?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let e=this.querySelector(".weather-note");if(!e)return;let i=e.querySelector(".note-long"),n=e.querySelector(".note-short"),a=e.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=e.querySelector(".note-phrase"),d=N(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!a||e.hidden?(l&&(l.textContent=d),e.dataset.writing="",e.setAttribute("aria-busy","true"),e.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}a&&(delete e.dataset.writing,e.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!e.hidden||a)&&(e.hidden=!0,this.applySizeState());return}if(e.hidden||a){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),e.hidden=!1,this.applySizeState(),a&&this.typeIn(e);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(e,i){return[this.config?.show_location!==!1?e:"",i?`${N(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let e=this.config?.indoor_style,i=M(N(this._hass,"indoors")),n=bt("indoor","indoor-icon");if(e==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let a=`<span class="indoor-label">${i}</span>`;return e==="both"?n+a:a}heroMetaHtml(e,i,n){let a=[];e&&a.push(`<span class="feels-like">${M(N(this._hass,"feels_like"))} ${M(e)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&a.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),a.join("")}attachEventListeners(){this.mountNoteWriter();let e=this.querySelector(".weather-info");if(e&&(zn(e,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Li(e,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(i)}}setAnimationsPaused(e){this.animationsPaused=e,this.toggleAttribute("data-paused",e),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),an(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),rn(this),this.flyHeldPlanes())}getWeatherSettings(e){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return ee(this.config,e)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let e=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n||(this.clearAnimations(),!this.hass||!i.entity))return;let a=this.hass.states[i.entity];if(!a)return;let o=a.state.toLowerCase(),s=on(o,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone,{clock:!!i.enable_day_night_cycle,night:this.skyIsNight()}),l=(i.color_palette||"default")==="theme"?"theme-colors":"",d=n.classList.contains("loading"),c=(...u)=>{n.className=["animated-weather-card",s,...u,l,d?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),d&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},h=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||h||!this.weatherShown()){let u=s==="clear-night"&&this.surface!=="forecast";c(i.animate===!1?"static":"",u?"individual-stars-active":"");let f=n.querySelector(".animation-layer");u&&f&&Qa(f,Za(ee(i).cloudCount,n.clientWidth),{moon:!0,still:!0,words:vi(n)}),this.currentWeatherClass=s;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&e===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=s,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(s)),this.startPlanes()}},i.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Ia(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(wi(this),n.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(hn(i),Ko(i));let a=this.querySelector(".lightning");a&&(a.classList.remove("flash"),a.innerHTML=""),$a(this.pendingTimeouts)}set hass(e){this.homeHass=Hi(e),e=this.see(e);let i=this._hass;if(this._hass=e,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!i){this.render(),this.initializeAnimations();return}if(Gt(i)!==Gt(e)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let n=i.states[this.config.entity],a=e.states[this.config.entity];if(!n||!a){this.render(),this.initializeAnimations();return}if(n.state!==a.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(n.attributes[d])!==s(a.attributes[d])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==e.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...Os(this.readingList)];for(let c of d){if(!c)continue;let h=i.states[c],u=e.states[c];if(h?.state!==u?.state||h?.attributes?.unit_of_measurement!==u?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";i.states[d]!==e.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let e;try{e=cr(this._hass,this.config)}catch{return}let{temperature:i,weatherCondition:n,windSpeedValue:a,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=e;this.currentWindSpeedValue=a;let c=!!this.extras?.away(),h=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,u=h&&this.extras?.conditionText(h)||n,f=(w,y)=>{w&&w.textContent!==y&&(w.textContent=y)};c||(this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),u));let g=this.updatePressureTrend(o);c||this.updateRow(g);let m=this.querySelector(".compact-meta .awc-meta-text");m&&f(m,this.compactMeta(e.location,s)),f(this.querySelector(".location .awc-place"),e.location);let p=this.querySelector(".hero-meta");if(p){let w=this.heroMetaHtml(s,l,d),y=p.querySelector(".awc-line");Array.from(p.children).filter(b=>b!==y).map(b=>b.outerHTML).join("")!==w&&(p.innerHTML=w,y&&p.prepend(y))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(a)}rowItem(e,i,n,a){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?bt(n.icon,"attribute-icon"):""}${s?`<span>${M(n.label)}</span>`:""}</div>`:"",d=e.type==="wind"&&typeof n.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${n.bearing+180}deg);" aria-label="${rl(n.bearing)}"></ha-icon>`:e.type==="pressure"&&a?`<ha-icon class="pressure-trend ${a}" icon="${ol(a)}" aria-label="Pressure ${a}"></ha-icon>`:"",c=n.level?` data-level="${M(n.level)}"`:"";return`<div class="attribute" data-kind="${e.type}" data-i="${i}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${n.html}</span>${d}</div></div>`}shownReadings(){return this.config?Ds(this.readingList).map(({r:e,i})=>({r:e,i,v:gr(this._hass,this.config,e)})).filter(({r:e,v:i})=>e.type!=="sun"||i.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(e){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:n,i:a,v:o})=>this.rowItem(n,a,o,e)).join("")}</div>`}redrawRow(){let e=this.querySelector(".animated-weather-card .weather-info");if(!e||this.config?.compact)return;let i=e.querySelector(":scope > .weather-attributes"),n=this.rowHtml(this._pressureTrend??null).trim();if(i&&n){let a=document.createRange().createContextualFragment(n).firstElementChild;i.querySelectorAll(":scope > .attribute").forEach(o=>o.remove()),i.prepend(...Array.from(a.querySelectorAll(":scope > .attribute"))),i.classList.toggle("values-only",a.classList.contains("values-only"))}else if(i)i.remove();else if(n){let a=e.querySelector(":scope > .fc-section");a?a.insertAdjacentHTML("beforebegin",n):e.insertAdjacentHTML("beforeend",n)}this.applySizeState()}updateRow(e){let i=this.querySelector(".weather-attributes");if(!i||!this.config)return;let n=this.shownReadings();if([...i.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==n.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of n){let d=i.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let h=d.querySelector(".attribute-label > span");h&&h.textContent!==l.label&&(h.textContent=l.label),Ns(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:rl(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",e?{icon:ol(e),label:`Pressure ${e}`,className:e}:null)}}updatePressureTrend(e){return typeof e!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=e:Math.abs(e-this._lastPressureValue)>=.5&&(this._pressureTrend=e>this._lastPressureValue?"rising":"falling",this._lastPressureValue=e),this._pressureTrend??null)}syncValueIcon(e,i,n){let a=e.querySelector(".attribute-value");if(!a)return;let o=a.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),a.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(e){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(e.querySelectorAll(".note-long, .note-short")).map(u=>{let f=u.textContent??"",g=document.createElement("span");g.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=f,u.replaceChildren(g,m),{span:u,text:f,typed:g,rest:m}}),n=Math.max(0,...i.map(u=>u.text.length)),a=Math.min(ku,Math.max(Tu,n*Cu)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:i.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of i)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let u=Math.min(1,(Date.now()-l)/a);for(let f of i){let g=Math.round(u*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}u<1?d=o(h):c.finish()};this.noteTyping=c,d=o(h)}fadeThrough(e,i,n){if(!e)return;let a=this.heroTextPending.get(e);if((a??e.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof e.animate!="function"||o){e.textContent=i,n?.();return}if(this.heroTextPending.set(e,i),a!==void 0)return;let s=()=>{let d=this.heroTextPending.get(e);this.heroTextPending.delete(e),d!==void 0&&(e.textContent=d),n?.()},l=e.animate([{opacity:1},{opacity:0}],{duration:Eu,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),e.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Mu,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let e=window.AnimatedWeatherCardPlanes;if(!e){vt("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new e(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=i,i.start().then(()=>{if(this.animationsPaused)i.pause();else if(this.planes===i){this.flyHeldPlanes();let n=this.askedPlanes;this.askedPlanes=void 0,n&&this.flyPlanes(n)}}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let e=this.planes;e&&(this.planes=void 0,e.destroy().catch(i=>A(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let e=this._hass?.states[this.config.flights_entity];if(e&&e===this.lastFlightsState)return;this.lastFlightsState=e;let i=!this.flightTracker.seeded,n=!!this.config.planes_on_load&&this.surface!=="view",a=this.flightTracker.update(tr(this._hass,this.config.flights_entity),n);a.length&&(i&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(a.map(o=>o.id)):this.flyPlanes(a))}flyHeldPlanes(){let e=this.heldPlanes;if(!e||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let i=(tr(this._hass,this.config?.flights_entity)??[]).filter(n=>!n.onGround&&e.has(n.id));i.length&&this.flyPlanes(i)}flyOver(e){let i=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||i)){if(this.planes){this.flyPlanes(e);return}this.devPlanes=!0,this.askedPlanes=e,this.startPlanes()}}flyPlanes(e){!this.planes||this.animationsPaused||this.planes.flyOver(e,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let e=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;e!==this.animationsPaused&&this.setAnimationsPaused(e)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(e=>{this.offscreen=!e[e.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),er(this),window.removeEventListener(Kt,this.onNeedle),window.removeEventListener(jt,this.devChanged),Xt().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),$a(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new En({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(e=>{this.onTimeOfDayChanged(e)}),this.config?.enable_day_night_cycle){let e=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(e)}}onTimeOfDayChanged(e){this.config?.enable_day_night_cycle&&(A(this.config?.dev_mode,`Time of day changed to: ${e.timePhase}`),this.updateDayNightBackground(e))}updateDayNightBackground(e){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let e=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!e)return"day";let i=e.attributes?.elevation;return wn(typeof i=="number"?i:Number(i),!!e.attributes?.rising,e.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let e=this.querySelector(".animated-weather-card");if(!e)return;let i=this.currentSkyPhase();e.dataset.phase!==i&&(e.dataset.phase=i),this.applyMoon(e)}applyMoon(e){let i=e.querySelector(".animation-layer");if(!i)return;let n=this.config?.moon_entity,a=$s(Ae(),n?this._hass?.states[n]?.state:void 0),o=(this.latitude()??0)<0,s=`${a.toFixed(3)}${o?"s":"n"}`;if(i.dataset.moon===s)return;i.dataset.moon=s;let l=Is(a,o);i.style.setProperty("--awc-moon-mask",l.mask),i.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let e=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(e)?e:void 0}applySizeState(){let e=this.querySelector(".animated-weather-card"),i=e?.querySelector(".weather-info");if(!e||!i)return;e.toggleAttribute("data-wall-frame",this.surface==="card"&&!!this.config?.show_forecast&&this.config?.layout!=="nightstand"&&ss(e)),cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>gs(e));let n=e.querySelector(".main-weather-info"),a=e.querySelector(".weather-attributes");if(e.dataset.height="regular",e.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),a){let m=e.dataset.metrics;e.dataset.metrics="row";let p=Array.from(a.children),w=parseFloat(getComputedStyle(a).columnGap)||0,y=p.reduce((v,S)=>v+S.getBoundingClientRect().width,0)+w*Math.max(0,p.length-1),_=a.clientWidth-y,b=_<-.5||m==="grid"&&_<Pu;e.dataset.metrics=b?"grid":"row"}let o=e.dataset.variant==="compact",s=o?e.querySelector(".weather-desc"):null,l=e.querySelector(".weather-note"),d=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,h=!!l&&!l.hidden?Lu:sl.map(m=>[m,void 0]),u=([m,p])=>{e.dataset.height=m,p?e.dataset.note=p:delete e.dataset.note},f=this.extras,g=f?.levels()??[];if(!f||!g.length){for(let m of h)if(u(m),!d())break;f?.fitted();return}for(let m=0;m<g.length;m++){f.setLevel(g[m]);let p=m===g.length-1;for(let w of h){if(!p&&!["regular","close","compact"].includes(w[0]))break;if(u(w),!d()&&(p||f.levelOk(d))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let e=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(Zt(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+e:4+e}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let e=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return e?Math.ceil((e*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let e=3;return this.config?.show_indoor!==!1&&(e+=1),this.config?.show_attributes!==!1&&(e+=1),this.noteEnabled()&&(e+=1),this.config?.show_forecast&&(e+=3+this.dayRows()),e}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Di("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Bn);var kr=class extends Bn{constructor(){super(),this.surface="forecast"}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(t)}gridRows(){if(this.config?.compact)return 2;let t=this.config?.show_hours!==!1&&Zt(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),e=Math.max(0,Math.min(10,this.config?.forecast_days??7));return t?e<=3?5:7:Math.max(3,Math.ceil((58+e*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(t,e=[],i=[]){let n=[...e,...i,...Object.keys(t?.states??{})];return Qt(n.find(a=>a.startsWith("weather."))??Na.entity,t)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await Di("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",kr);customElements.define("animated-weather-dev-card",Wn);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,t)=>t.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Qt(t,r)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Qt(t,r),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(r,t)=>t.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Qt(t,r)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Qt(t,r),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let r=Rt("sunny","day"),t=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Fo} `,[`background: linear-gradient(90deg, ${r.top}, ${r.mid} 55%, ${r.bottom})`,`color: ${Ye(De(zt))}`,"border-radius: 4px 0 0 4px",...t].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${r.top}`,"border-radius: 0 4px 4px 0",...t].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
