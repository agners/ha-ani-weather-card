"use strict";(()=>{function It(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rr(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ai={duration:.5,overwrite:!1,delay:0},da,nt,I,Mt=1e8,R=1/Mt,Jn=Math.PI*2,hl=Jn/4,ml=0,zr=Math.sqrt,fl=Math.cos,pl=Math.sin,tt=function(e){return typeof e=="string"},U=function(e){return typeof e=="function"},Gt=function(e){return typeof e=="number"},ji=function(e){return typeof e>"u"},zt=function(e){return typeof e=="object"},gt=function(e){return e!==!1},ca=function(){return typeof window<"u"},$i=function(e){return U(e)||tt(e)},Wr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,gl=/random\([^)]+\)/g,yl=/,\s*/g,Er=/(?:-?\.?\d|\.)+/gi,ua=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,he=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Un=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ha=/[+-]=-?[.\d]+/,wl=/[^,'"\[\]\s]+/gi,_l=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,B,Ht,ta,ma,Ct={},Bi={},Nr,$r=function(e){return(Bi=Te(e,Ct))&&st},Xi=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ri=function(e,t){return!t&&console.warn(e)},Ir=function(e,t){return e&&(Ct[e]=t)&&Bi&&(Bi[e]=t)||Ct},oi=function(){return 0},vl={suppressEvents:!0,isStart:!0,kill:!1},Ii={suppressEvents:!0,kill:!1},bl={suppressEvents:!0},fa={},Xt=[],ea={},qr,ft={},Yn={},Mr=30,qi=[],pa="",ga=function(e){var t=e[0],i,n;if(zt(t)||U(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=qi.length;n--&&!qi[n].targetTest(t););i=qi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new va(e[n],i)))||e.splice(n,1);return e},Zt=function(e){return e._gsap||ga(Pt(e))[0]._gsap},ya=function(e,t,i){return(i=e[t])&&U(i)?e[t]():ji(i)&&e.getAttribute&&e.getAttribute(t)||i},ct=function(e,t){return(e=e.split(",")).forEach(t)||e},Y=function(e){return Math.round(e*1e5)/1e5||0},G=function(e){return Math.round(e*1e7)/1e7||0},me=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},xl=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Vi=function(){var e=Xt.length,t=Xt.slice(0),i,n;for(ea={},Xt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},wa=function(e){return!!(e._initted||e._startAt||e.add)},Gr=function(e,t,i,n){Xt.length&&!nt&&Vi(),e.render(t,i,n||!!(nt&&t<0&&wa(e))),Xt.length&&!nt&&Vi()},Br=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wl).length<2?t:tt(e)?e.trim():e},Vr=function(e){return e},Tt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Sl=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Te=function(e,t){for(var i in t)e[i]=t[i];return e},Pr=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=zt(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ui=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ei=function(e){var t=e.parent||B,i=e.keyframes?Sl(ot(e.keyframes)):Tt;if(gt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Cl=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Ur=function(e,t,i,n,a){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],s;if(a)for(s=t[a];o&&o[a]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Zi=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t._prev,o=t._next;a?a._next=o:e[i]===t&&(e[i]=o),o?o._prev=a:e[n]===t&&(e[n]=a),t._next=t._prev=t.parent=null},Qt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},de=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Tl=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ia=function(e,t,i,n){return e._startAt&&(nt?e._startAt.revert(Ii):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Al=function r(e){return!e||e._ts&&r(e.parent)},Lr=function(e){return e._repeat?Ae(e._tTime,e=e.duration()+e._rDelay)*e:0},Ae=function(e,t){var i=Math.floor(e=G(e/t));return e&&i===e?i-1:i},Yi=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qi=function(e){return e._end=G(e._start+(e._tDur/Math.abs(e._ts||e._rts||R)||0))},Ji=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=G(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qi(e),i._dirty||de(i,e)),e},Yr=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Yi(e.rawTime(),t),(!t._dur||di(0,t.totalDuration(),i)-t._tTime>R)&&t.render(i,!0)),de(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-R}},Rt=function(e,t,i,n){return t.parent&&Qt(t),t._start=G((Gt(i)?i:i||e!==B?Et(e,i,t):e._time)+t._delay),t._end=G(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ur(e,t,"_first","_last",e._sort?"_start":0),na(t)||(e._recent=t),n||Yr(e,t),e._ts<0&&Ji(e,e._tTime),e},Kr=function(e,t){return(Ct.ScrollTrigger||Xi("scrollTrigger",t))&&Ct.ScrollTrigger.create(t,e)},jr=function(e,t,i,n,a){if(Sa(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qr!==pt.frame)return Xt.push(e),e._lazy=[a,n],1},kl=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},na=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},El=function(e,t,i,n){var a=e.ratio,o=t<0||!t&&(!e._start&&kl(e)&&!(!e._initted&&na(e))||(e._ts<0||e._dp._ts<0)&&!na(e))?0:1,s=e._rDelay,l=0,d,c,u;if(s&&e._repeat&&(l=di(0,e._tDur,t),c=Ae(l,s),e._yoyo&&c&1&&(o=1-o),c!==Ae(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||nt||n||e._zTime===R||!t&&e._zTime){if(!e._initted&&jr(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?R:0),i||(i=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,d=e._pt;d;)d.r(o,d.d),d=d._next;t<0&&ia(e,t,i,!0),e._onUpdate&&!i&&St(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&St(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qt(e,1),!i&&!nt&&(St(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ml=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ke=function(e,t,i,n){var a=e._repeat,o=G(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:G(o*(a+1)+e._rDelay*a):o,s>0&&!n&&Ji(e,e._tTime=e._tDur*s),e.parent&&Qi(e),i||de(e.parent,e),e},Dr=function(e){return e instanceof rt?de(e):ke(e,e._dur)},Pl={_start:0,endTime:oi,totalDuration:oi},Et=function r(e,t,i){var n=e.labels,a=e._recent||Pl,o=e.duration()>=Mt?a.endTime(!1):e._dur,s,l,d;return tt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),d=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(s<0?a:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),d&&i&&(l=l/100*(ot(i)?i[0]:i).totalDuration()),s>1?r(e,t.substr(0,s-1),i)+l:o+l)):t==null?o:+t},ii=function(e,t,i){var n=Gt(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a],s,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(s=o,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=gt(l.vars.inherit)&&l.parent;o.immediateRender=gt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new Z(t[0],o,t[a+1])},Jt=function(e,t){return e||e===0?t(e):t},di=function(e,t,i){return i<e?e:i>t?t:i},at=function(e,t){return!tt(e)||!(t=_l.exec(e))?"":t[1]},Ll=function(e,t,i){return Jt(i,function(n){return di(e,t,n)})},aa=[].slice,Xr=function(e,t){return e&&zt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zt(e[0]))&&!e.nodeType&&e!==Ht},Dl=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var a;return tt(n)&&!t||Xr(n,1)?(a=i).push.apply(a,Pt(n)):i.push(n)})||i},Pt=function(e,t,i){return I&&!t&&I.selector?I.selector(e):tt(e)&&!i&&(ta||!Ee())?aa.call((t||ma).querySelectorAll(e),0):ot(e)?Dl(e,i):Xr(e)?aa.call(e,0):e?[e]:[]},ra=function(e){return e=Pt(e)[0]||ri("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Pt(t,i.querySelectorAll?i:i===e?ri("Invalid scope")||ma.createElement("div"):e)}},Zr=function(e){return e.sort(function(){return .5-Math.random()})},Qr=function(e){if(U(e))return e;var t=zt(e)?e:{each:e},i=ce(t.ease),n=t.from||0,a=parseFloat(t.base)||0,o={},s=n>0&&n<1,l=isNaN(n)||s,d=t.axis,c=n,u=n;return tt(n)?c=u={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(c=n[0],u=n[1]),function(h,f,g){var m=(g||t).length,p=o[m],w,y,_,b,v,S,C,T,A;if(!p){if(A=t.grid==="auto"?0:(t.grid||[1,Mt])[1],!A){for(C=-Mt;C<(C=g[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(p=o[m]=[],w=l?Math.min(A,m)*c-.5:n%A,y=A===Mt?0:l?m*u/A-.5:n/A|0,C=0,T=Mt,S=0;S<m;S++)_=S%A-w,b=y-(S/A|0),p[S]=v=d?Math.abs(d==="y"?b:_):zr(_*_+b*b),v>C&&(C=v),v<T&&(T=v);n==="random"&&Zr(p),p.max=C-T,p.min=T,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(A>m?m-1:d?d==="y"?m/A:A:Math.max(A,m/A))||0)*(n==="edges"?-1:1),p.b=m<0?a-m:a,p.u=at(t.amount||t.each)||0,i=i&&m<0?Vl(i):i}return m=(p[h]-p.min)/p.max||0,G(p.b+(i?i(m):m)*p.v)+p.u}},oa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=G(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Gt(i)?0:at(i))}},Jr=function(e,t){var i=ot(e),n,a;return!i&&zt(e)&&(n=i=e.radius||Mt,e.values?(e=Pt(e.values),(a=!Gt(e[0]))&&(n*=n)):e=oa(e.increment)),Jt(t,i?U(e)?function(o){return a=e(o),Math.abs(a-o)<=n?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),d=Mt,c=0,u=e.length,h,f;u--;)a?(h=e[u].x-s,f=e[u].y-l,h=h*h+f*f):h=Math.abs(e[u]-s),h<d&&(d=h,c=u);return c=!n||d<=n?e[c]:o,a||c===o||Gt(o)?c:c+at(o)}:oa(e))},to=function(e,t,i,n){return Jt(ot(e)?!t:i===!0?!!(i=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Ol=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(a,o){return o(a)},n)}},Fl=function(e,t){return function(i){return e(parseFloat(i))+(t||at(i))}},Hl=function(e,t,i){return io(e,t,0,1,i)},eo=function(e,t,i){return Jt(i,function(n){return e[~~t(n)]})},Rl=function r(e,t,i){var n=t-e;return ot(e)?eo(e,r(0,e.length),t):Jt(i,function(a){return(n+(a-e)%n)%n+e})},zl=function r(e,t,i){var n=t-e,a=n*2;return ot(e)?eo(e,r(0,e.length-1),t):Jt(i,function(o){return o=(a+(o-e)%a)%a||0,e+(o>n?a-o:o)})},Me=function(e){return e.replace(gl,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(yl);return to(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},io=function(e,t,i,n,a){var o=t-e,s=n-i;return Jt(a,function(l){return i+((l-e)/o*s||0)})},Wl=function r(e,t,i,n){var a=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!a){var o=tt(e),s={},l,d,c,u,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ot(e)&&!ot(t)){for(c=[],u=e.length,h=u-2,d=1;d<u;d++)c.push(r(e[d-1],e[d]));u--,a=function(g){g*=u;var m=Math.min(h,~~g);return c[m](g-m)},i=t}else n||(e=Te(ot(e)?[]:{},e));if(!c){for(l in t)ba.call(s,e,l,"get",t[l]);a=function(g){return Aa(g,s)||(o?e.p:e)}}}return Jt(i,a)},Or=function(e,t,i){var n=e.labels,a=Mt,o,s,l;for(o in n)s=n[o]-t,s<0==!!i&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},St=function(e,t,i){var n=e.vars,a=n[t],o=I,s=e._ctx,l,d,c;if(a)return l=n[t+"Params"],d=n.callbackScope||e,i&&Xt.length&&Vi(),s&&(I=s),c=l?a.apply(d,l):a.call(d),I=o,c},Je=function(e){return Qt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nt),e.progress()<1&&St(e,"onInterrupt"),e},Ce,no=[],ao=function(e){if(e)if(e=!e.name&&e.default||e,ca()||e.headless){var t=e.name,i=U(e),n=t&&!i&&e.init?function(){this._props=[]}:e,a={init:oi,render:Aa,add:ba,kill:ed,modifier:td,rawVars:0},o={targetTest:0,get:0,getSetter:tn,aliases:{},register:0};if(Ee(),e!==n){if(ft[t])return;Tt(n,Tt(Ui(e,a),o)),Te(n.prototype,Te(a,Ui(e,o))),ft[n.prop=t]=n,e.targetTest&&(qi.push(n),fa[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ir(t,n),e.register&&e.register(st,n,ut)}else no.push(e)},H=255,ti={aqua:[0,H,H],lime:[0,H,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,H],navy:[0,0,128],white:[H,H,H],olive:[128,128,0],yellow:[H,H,0],orange:[H,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[H,0,0],pink:[H,192,203],cyan:[0,H,H],transparent:[H,H,H,0]},Kn=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*H+.5|0},ro=function(e,t,i){var n=e?Gt(e)?[e>>16,e>>8&H,e&H]:0:ti.black,a,o,s,l,d,c,u,h,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ti[e])n=ti[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&H,n&H,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&H,e&H]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Er),!t)l=+n[0]%360/360,d=+n[1]/100,c=+n[2]/100,o=c<=.5?c*(d+1):c+d-c*d,a=c*2-o,n.length>3&&(n[3]*=1),n[0]=Kn(l+1/3,a,o),n[1]=Kn(l,a,o),n[2]=Kn(l-1/3,a,o);else if(~e.indexOf("="))return n=e.match(ua),i&&n.length<4&&(n[3]=1),n}else n=e.match(Er)||ti.transparent;n=n.map(Number)}return t&&!g&&(a=n[0]/H,o=n[1]/H,s=n[2]/H,u=Math.max(a,o,s),h=Math.min(a,o,s),c=(u+h)/2,u===h?l=d=0:(f=u-h,d=c>.5?f/(2-u-h):f/(u+h),l=u===a?(o-s)/f+(o<s?6:0):u===o?(s-a)/f+2:(a-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(d*100+.5),n[2]=~~(c*100+.5)),i&&n.length<4&&(n[3]=1),n},oo=function(e){var t=[],i=[],n=-1;return e.split(qt).forEach(function(a){var o=a.match(he)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},Fr=function(e,t,i){var n="",a=(e+n).match(qt),o=t?"hsla(":"rgba(",s=0,l,d,c,u;if(!a)return e;if(a=a.map(function(h){return(h=ro(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=oo(e),l=i.c,l.join(n)!==c.c.join(n)))for(d=e.replace(qt,"1").split(he),u=d.length-1;s<u;s++)n+=d[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(c.length?c:a.length?a:i).shift());if(!d)for(d=e.split(qt),u=d.length-1;s<u;s++)n+=d[s]+a[s];return n+d[u]},qt=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ti)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Nl=/hsl[a]?\(/,_a=function(e){var t=e.join(" "),i;if(qt.lastIndex=0,qt.test(t))return i=Nl.test(t),e[1]=Fr(e[1],i),e[0]=Fr(e[0],i,oo(e[1])),!0},si,pt=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,a=1e3/240,o=a,s=[],l,d,c,u,h,f,g=function m(p){var w=r()-n,y=p===!0,_,b,v,S;if((w>e||w<0)&&(i+=w-t),n+=w,v=n-i,_=v-o,(_>0||y)&&(S=++u.frame,h=v-u.time*1e3,u.time=v=v/1e3,o+=_+(_>=a?4:a-_),b=1),y||(l=d(m)),b)for(f=0;f<s.length;f++)s[f](v,h,S,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Nr&&(!ta&&ca()&&(Ht=ta=window,ma=Ht.document||{},Ct.gsap=st,(Ht.gsapVersions||(Ht.gsapVersions=[])).push(st.version),$r(Bi||Ht.GreenSockGlobals||!Ht.gsap&&Ht||{}),no.forEach(ao)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),d=c||function(p){return setTimeout(p,o-u.time*1e3+1|0)},si=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),si=0,d=oi},lagSmoothing:function(p,w){e=p||1/0,t=Math.min(w||33,e)},fps:function(p){a=1e3/(p||240),o=u.time*1e3+a},add:function(p,w,y){var _=w?function(b,v,S,C){p(b,v,S,C),u.remove(_)}:p;return u.remove(p),s[y?"unshift":"push"](_),Ee(),_},remove:function(p,w){~(w=s.indexOf(p))&&s.splice(w,1)&&f>=w&&f--},_listeners:s},u})(),Ee=function(){return!si&&pt.wake()},L={},$l=/^[\d.\-M][\d.\-,\s]/,Il=/["']/g,ql=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],a=1,o=i.length,s,l,d;a<o;a++)l=i[a],s=a!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),t[n]=isNaN(d)?d.replace(Il,"").trim():+d,n=l.substr(s+1).trim();return t},Gl=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Bl=function(e){var t=(e+"").split("("),i=L[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ql(t[1])]:Gl(e).split(",").map(Br)):L._CE&&$l.test(e)?L._CE("",e):i},Vl=function(e){return function(t){return 1-e(1-t)}},ce=function(e,t){return e&&(U(e)?e:L[e]||Bl(e))||t},fe=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:n},o;return ct(e,function(s){L[s]=Ct[s]=a,L[o=s.toLowerCase()]=i;for(var l in a)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=a[l]}),a},so=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jn=function r(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),o=a/Jn*(Math.asin(1/n)||0),s=function(c){return c===1?1:n*Math.pow(2,-10*c)*pl((c-o)*a)+1},l=e==="out"?s:e==="in"?function(d){return 1-s(1-d)}:so(s);return a=Jn/a,l.config=function(d,c){return r(e,d,c)},l},Xn=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:so(i);return n.config=function(a){return r(e,a)},n};ct("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fe(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;fe("Elastic",jn("in"),jn("out"),jn());(function(r,e){var t=1/e,i=2*t,n=2.5*t,a=function(s){return s<t?r*s*s:s<i?r*Math.pow(s-1.5/e,2)+.75:s<n?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};fe("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);fe("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fe("Circ",function(r){return-(zr(1-r*r)-1)});fe("Sine",function(r){return r===1?1:-fl(r*hl)+1});fe("Back",Xn("in"),Xn("out"),Xn());L.SteppedEase=L.steps=Ct.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),a=t?1:0,o=1-R;return function(s){return((n*di(0,o,s)|0)+a)*i}}};ai.ease=L["quad.out"];ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return pa+=r+","+r+"Params,"});var va=function(e,t){this.id=ml++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ya,this.set=t?t.getSetter:tn},li=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ke(this,+t.duration,1,1),this.data=t.data,I&&(this._ctx=I,I.data.push(this)),si||pt.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ke(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Ee(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Ji(this,i),!a._dp||a.parent||Yr(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Rt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===R||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Gr(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lr(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lr(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,n):this._repeat?Ae(this._tTime,a)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-R?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Yi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-R?0:this._rts,this.totalTime(di(-Math.abs(this._delay),this.totalDuration(),a),n!==!1),Qi(this),Tl(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ee(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==R&&(this._tTime-=R)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=G(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Rt(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(gt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yi(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=bl);var n=nt;return nt=i,wa(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nt=n,this},e.globalTime=function(i){for(var n=this,a=arguments.length?i:n.rawTime();n;)a=n._start+a/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Dr(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Dr(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Et(this,i),gt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,gt(n)),this._dur||(this._zTime=-R),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-R:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-R,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=n&&a<this.endTime(!0)-R)},e.eventCallback=function(i,n,a){var o=this.vars;return arguments.length>1?(n?(o[i]=n,a&&(o[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,a=n._prom;return new Promise(function(o){var s=U(i)?i:Vr,l=function(){var c=n.then;n.then=null,a&&a(),U(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),o(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Je(this)},r})();Tt(li.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-R,_prom:0,_ps:!1,_rts:1});var rt=(function(r){Rr(e,r);function e(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=gt(i.sortChildren),B&&Rt(i.parent||B,It(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Kr(It(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(n,a,o){return ii(0,arguments,this),this},t.from=function(n,a,o){return ii(1,arguments,this),this},t.fromTo=function(n,a,o,s){return ii(2,arguments,this),this},t.set=function(n,a,o){return a.duration=0,a.parent=this,ei(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Z(n,a,Et(this,o),1),this},t.call=function(n,a,o){return Rt(this,Z.delayedCall(0,n,a),o)},t.staggerTo=function(n,a,o,s,l,d,c){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new Z(n,o,Et(this,l)),this},t.staggerFrom=function(n,a,o,s,l,d,c){return o.runBackwards=1,ei(o).immediateRender=gt(o.immediateRender),this.staggerTo(n,a,o,s,l,d,c)},t.staggerFromTo=function(n,a,o,s,l,d,c,u){return s.startAt=o,ei(s).immediateRender=gt(s.immediateRender),this.staggerTo(n,a,s,l,d,c,u)},t.render=function(n,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=n<=0?0:G(n),u=this._zTime<0!=n<0&&(this._initted||!d),h,f,g,m,p,w,y,_,b,v,S,C;if(this!==B&&c>l&&n>=0&&(c=l),c!==this._tTime||o||u){if(s!==this._time&&d&&(c+=this._time-s,n+=this._time-s),h=c,b=this._start,_=this._ts,w=!_,u&&(d||(s=this._zTime),(n||!a)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,p=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,a,o);if(h=G(c%p),c===l?(m=this._repeat,h=d):(v=G(c/p),m=~~v,m&&m===v&&(h=d,m--),h>d&&(h=d)),v=Ae(this._tTime,p),!s&&this._tTime&&v!==m&&this._tTime-v*p-this._dur<=0&&(v=m),S&&m&1&&(h=d-h,C=1),m!==v&&!this._lock){var T=S&&v&1,A=T===(S&&m&1);if(m<v&&(T=!T),s=T?0:c%d?d:c,this._lock=1,this.render(s||(C?0:G(m*p)),a,!d)._lock=0,this._tTime=c,!a&&this.parent&&St(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=m),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,A&&(this._lock=2,s=T?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ml(this,G(s),G(h)),y&&(c-=h-(h=y._start))),this._tTime=c,this._time=h,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&d&&!a&&!v&&(St(this,"onStart"),this._tTime!==c))return this;if(h>=s&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,a,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,a,o),h!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=-R);break}}f=g}else{f=this._last;for(var x=n<0?n:h;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,a,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,a,o||nt&&wa(f)),h!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=x?-R:R);break}}f=g}}if(y&&!a&&(this.pause(),y.render(h>=s?0:-R)._zTime=h>=s?1:-1,this._ts))return this._start=b,Qi(this),this.render(n,a,o);this._onUpdate&&!a&&St(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Qt(this,1),!a&&!(n<0&&!s)&&(c||s||!l)&&(St(this,c===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,a){var o=this;if(Gt(a)||(a=Et(this,a,n)),!(n instanceof li)){if(ot(n))return n.forEach(function(s){return o.add(s,a)}),this;if(tt(n))return this.addLabel(n,a);if(U(n))n=Z.delayedCall(0,n);else return this}return this!==n?Rt(this,n,a):this},t.getChildren=function(n,a,o,s){n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Mt);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof Z?a&&l.push(d):(o&&l.push(d),n&&l.push.apply(l,d.getChildren(!0,a,o)))),d=d._next;return l},t.getById=function(n){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===n)return a[o]},t.remove=function(n){return tt(n)?this.removeLabel(n):U(n)?this.killTweensOf(n):(n.parent===this&&Zi(this,n),n===this._recent&&(this._recent=this._last),de(this))},t.totalTime=function(n,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=G(pt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,a),this._forcing=0,this):this._tTime},t.addLabel=function(n,a){return this.labels[n]=Et(this,a),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,a,o){var s=Z.delayedCall(0,a||oi,o);return s.data="isPause",this._hasPause=1,Rt(this,s,Et(this,n))},t.removePause=function(n){var a=this._first;for(n=Et(this,n);a;)a._start===n&&a.data==="isPause"&&Qt(a),a=a._next},t.killTweensOf=function(n,a,o){for(var s=this.getTweensOf(n,o),l=s.length;l--;)jt!==s[l]&&s[l].kill(n,a);return this},t.getTweensOf=function(n,a){for(var o=[],s=Pt(n),l=this._first,d=Gt(a),c;l;)l instanceof Z?xl(l._targets,s)&&(d?(!jt||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(c=l.getTweensOf(s,a)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(n,a){a=a||{};var o=this,s=Et(o,n),l=a,d=l.startAt,c=l.onStart,u=l.onStartParams,h=l.immediateRender,f,g=Z.to(o,Tt({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||R,onStart:function(){if(o.pause(),!f){var p=a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==p&&ke(g,p,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,u||[])}},a));return h?g.render(0):g},t.tweenFromTo=function(n,a,o){return this.tweenTo(a,Tt({startAt:{time:Et(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Or(this,Et(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Or(this,Et(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+R)},t.shiftChildren=function(n,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(n=G(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(a)for(d in l)l[d]>=o&&(l[d]+=n);return de(this)},t.invalidate=function(n){var a=this._first;for(this._lock=0;a;)a.invalidate(n),a=a._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),de(this)},t.totalDuration=function(n){var a=0,o=this,s=o._last,l=Mt,d,c,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Rt(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(a-=c,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=G(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=d;ke(o,o===B&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(B._ts&&(Gr(B,Yi(n,B)),qr=pt.frame),pt.frame>=Mr){Mr+=yt.autoSleep||120;var a=B._first;if((!a||!a._ts)&&yt.autoSleep&&pt._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||pt.sleep()}}},e})(li);Tt(rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ul=function(e,t,i,n,a,o,s){var l=new ut(this._pt,e,t,0,1,Ta,null,a),d=0,c=0,u,h,f,g,m,p,w,y;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=Me(n)),o&&(y=[i,n],o(y,e,t),i=y[0],n=y[1]),h=i.match(Un)||[];u=Un.exec(n);)g=u[0],m=n.substring(d,u.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==h[c++]&&(p=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:p,c:g.charAt(1)==="="?me(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},d=Un.lastIndex);return l.c=d<n.length?n.substring(d,n.length):"",l.fp=s,(ha.test(n)||w)&&(l.e=0),this._pt=l,l},ba=function(e,t,i,n,a,o,s,l,d,c){U(n)&&(n=n(a||0,e,o));var u=e[t],h=i!=="get"?i:U(u)?d?e[t.indexOf("set")||!U(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():u,f=U(u)?d?Zl:uo:Ca,g;if(tt(n)&&(~n.indexOf("random(")&&(n=Me(n)),n.charAt(1)==="="&&(g=me(h,n)+(at(h)||0),(g||g===0)&&(n=g))),!c||h!==n||sa)return!isNaN(h*n)&&n!==""?(g=new ut(this._pt,e,t,+h||0,n-(h||0),typeof u=="boolean"?Jl:ho,0,f),d&&(g.fp=d),s&&g.modifier(s,this,e),this._pt=g):(!u&&!(t in e)&&Xi(t,n),Ul.call(this,e,t,h,n,f,l||yt.stringFilter,d))},Yl=function(e,t,i,n,a){if(U(e)&&(e=ni(e,a,t,i,n)),!zt(e)||e.style&&e.nodeType||ot(e)||Wr(e))return tt(e)?ni(e,a,t,i,n):e;var o={},s;for(s in e)o[s]=ni(e[s],a,t,i,n);return o},xa=function(e,t,i,n,a,o){var s,l,d,c;if(ft[e]&&(s=new ft[e]).init(a,s.rawVars?t[e]:Yl(t[e],n,a,o,i),i,n,o)!==!1&&(i._pt=l=new ut(i._pt,a,e,0,1,s.render,s,0,s.priority),i!==Ce))for(d=i._ptLookup[i._targets.indexOf(a)],c=s._props.length;c--;)d[s._props[c]]=l;return s},jt,sa,Sa=function r(e,t,i){var n=e.vars,a=n.ease,o=n.startAt,s=n.immediateRender,l=n.lazy,d=n.onUpdate,c=n.runBackwards,u=n.yoyoEase,h=n.keyframes,f=n.autoRevert,g=e._dur,m=e._startAt,p=e._targets,w=e.parent,y=w&&w.data==="nested"?w.vars.targets:p,_=e._overwrite==="auto"&&!da,b=e.timeline,v=n.easeReverse||u,S,C,T,A,x,E,P,O,z,q,W,F,et;if(b&&(!h||!a)&&(a="none"),e._ease=ce(a,ai.ease),e._rEase=v&&(ce(v)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||h&&!n.stagger){if(O=p[0]?Zt(p[0]).harness:0,F=O&&n[O.prop],S=Ui(n,fa),m&&(m._zTime<0&&m.progress(1),t<0&&c&&s&&!f?m.render(-1,!0):m.revert(c&&g?Ii:vl),m._lazy=0),o){if(Qt(e._startAt=Z.set(p,Tt({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!m&&gt(l),startAt:null,delay:0,onUpdate:d&&function(){return St(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nt||!s&&!f)&&e._startAt.revert(Ii),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!m){if(t&&(s=!1),T=Tt({overwrite:!1,data:"isFromStart",lazy:s&&!m&&gt(l),immediateRender:s,stagger:0,parent:w},S),F&&(T[O.prop]=F),Qt(e._startAt=Z.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nt?e._startAt.revert(Ii):e._startAt.render(-1,!0)),e._zTime=t,!s)r(e._startAt,R,R);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gt(l)||l&&!g,C=0;C<p.length;C++){if(x=p[C],P=x._gsap||ga(p)[C]._gsap,e._ptLookup[C]=q={},ea[P.id]&&Xt.length&&Vi(),W=y===p?C:y.indexOf(x),O&&(z=new O).init(x,F||S,e,W,y)!==!1&&(e._pt=A=new ut(e._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(bt){q[bt]=A}),z.priority&&(E=1)),!O||F)for(T in S)ft[T]&&(z=xa(T,S,e,W,x,y))?z.priority&&(E=1):q[T]=A=ba.call(e,x,T,"get",S[T],W,y,0,n.stringFilter);e._op&&e._op[C]&&e.kill(x,e._op[C]),_&&e._pt&&(jt=e,B.killTweensOf(x,q,e.globalTime(t)),et=!e.parent,jt=0),e._pt&&l&&(ea[P.id]=1)}E&&ka(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!et,h&&t<=0&&b.render(Mt,!0,!0)},Kl=function(e,t,i,n,a,o,s,l){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!d)for(d=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return sa=1,e.vars[t]="+=0",Sa(e,s),sa=0,l?ri(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(f=d.length;f--;)u=d[f],c=u._pt||u,c.s=(n||n===0)&&!a?n:c.s+(n||0)+o*c.c,c.c=i-c.s,u.e&&(u.e=Y(i)+at(u.e)),u.b&&(u.b=c.s+at(u.b))},jl=function(e,t){var i=e[0]?Zt(e[0]).harness:0,n=i&&i.aliases,a,o,s,l;if(!n)return t;a=Te({},t);for(o in n)if(o in a)for(l=n[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},Xl=function(e,t,i,n){var a=t.ease||n||"power1.inOut",o,s;if(ot(t))s=i[e]||(i[e]=[]),t.forEach(function(l,d){return s.push({t:d/(t.length-1)*100,v:l,e:a})});else for(o in t)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:a})},ni=function(e,t,i,n,a){return U(e)?e.call(t,i,n,a):tt(e)&&~e.indexOf("random(")?Me(e):e},lo=pa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",co={};ct(lo+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return co[r]=1});var Z=(function(r){Rr(e,r);function e(i,n,a,o){var s;typeof n=="number"&&(a.duration=n,n=a,a=null),s=r.call(this,o?n:ei(n))||this;var l=s.vars,d=l.duration,c=l.delay,u=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,w=n.parent||B,y=(ot(i)||Wr(i)?Gt(i[0]):"length"in n)?[i]:Pt(i),_,b,v,S,C,T,A,x;if(s._targets=y.length?ga(y):ri("GSAP target "+i+" not found. https://gsap.com",!yt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||h||$i(d)||$i(c)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new rt({data:"nested",defaults:m||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=It(s),_._start=0,h||$i(d)||$i(c)){if(S=y.length,A=h&&Qr(h),zt(h))for(C in h)~lo.indexOf(C)&&(x||(x={}),x[C]=h[C]);for(b=0;b<S;b++)v=Ui(n,co),v.stagger=0,E&&(v.easeReverse=E),x&&Te(v,x),T=y[b],v.duration=+ni(d,It(s),b,T,y),v.delay=(+ni(c,It(s),b,T,y)||0)-s._delay,!h&&S===1&&v.delay&&(s._delay=c=v.delay,s._start+=c,v.delay=0),_.to(T,v,A?A(b,T,y):0),_._ease=L.none;_.duration()?d=c=0:s.timeline=0}else if(g){ei(Tt(_.vars.defaults,{ease:"none"})),_._ease=ce(g.ease||n.ease||"none");var P=0,O,z,q;if(ot(g))g.forEach(function(W){return _.to(y,W,">")}),_.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||Xl(C,g[C],v,g.easeEach);for(C in v)for(O=v[C].sort(function(W,F){return W.t-F.t}),P=0,b=0;b<O.length;b++)z=O[b],q={ease:z.e,duration:(z.t-(b?O[b-1].t:0))/100*d},q[C]=z.v,_.to(y,q,P),P+=q.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return f===!0&&!da&&(jt=It(s),B.killTweensOf(y),jt=0),Rt(w,It(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(u||!d&&!g&&s._start===G(w._time)&&gt(u)&&Al(It(s))&&w.data!=="nested")&&(s._tTime=-R,s.render(Math.max(0,-c)||0)),p&&Kr(It(s),p),s}var t=e.prototype;return t.render=function(n,a,o){var s=this._time,l=this._tDur,d=this._dur,c=n<0,u=n>l-R&&!c?l:n<R?0:n,h,f,g,m,p,w,y,_;if(!d)El(this,n,a,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=u,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+n,a,o);if(h=G(u%m),u===l?(g=this._repeat,h=d):(p=G(u/m),g=~~p,g&&g===p?(h=d,g--):h>d&&(h=d)),w=this._yoyo&&g&1,w&&(h=d-h),p=Ae(this._tTime,m),h===s&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&this.vars.repeatRefresh&&!w&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(G(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(jr(this,c?n:h,o,a,u))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(d!==this._dur)return this.render(n,a,o)}if(this._rEase){var b=h<s;if(b!==this._inv){var v=b?s:d-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/d);if(this._from&&(this.ratio=y=1-y),this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&u&&!a&&!p&&(St(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;_&&_.render(n<0?n:_._dur*_._ease(h/this._dur),a,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!a&&(c&&ia(this,n,a,o),St(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!a&&this.parent&&St(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&ia(this,n,!0,!0),(n||!d)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Qt(this,1),!a&&!(c&&!s)&&(u||s||w)&&(St(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,a,o,s,l){si||pt.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Sa(this,d),c=this._ease(d/this._dur),Kl(this,n,a,o,s,c,d,l)?this.resetTo(n,a,o,s,1):(Ji(this,0),this.parent||Ur(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,a){if(a===void 0&&(a="all"),!n&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Je(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,a,jt&&jt.vars.overwrite!==!0)._first||Je(this),this.parent&&o!==this.timeline.totalDuration()&&ke(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=n?Pt(n):s,d=this._ptLookup,c=this._pt,u,h,f,g,m,p,w;if((!a||a==="all")&&Cl(s,l))return a==="all"&&(this._pt=0),Je(this);for(u=this._op=this._op||[],a!=="all"&&(tt(a)&&(m={},ct(a,function(y){return m[y]=1}),a=m),a=jl(s,a)),w=s.length;w--;)if(~l.indexOf(s[w])){h=d[w],a==="all"?(u[w]=a,g=h,f={}):(f=u[w]=u[w]||{},g=a);for(m in g)p=h&&h[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Zi(this,p,"_pt"),delete h[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&c&&Je(this),this},e.to=function(n,a){return new e(n,a,arguments[2])},e.from=function(n,a){return ii(1,arguments)},e.delayedCall=function(n,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(n,a,o){return ii(2,arguments)},e.set=function(n,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(n,a)},e.killTweensOf=function(n,a,o){return B.killTweensOf(n,a,o)},e})(li);Tt(Z.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ct("staggerTo,staggerFrom,staggerFromTo",function(r){Z[r]=function(){var e=new rt,t=aa.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ca=function(e,t,i){return e[t]=i},uo=function(e,t,i){return e[t](i)},Zl=function(e,t,i,n){return e[t](n.fp,i)},Ql=function(e,t,i){return e.setAttribute(t,i)},tn=function(e,t){return U(e[t])?uo:ji(e[t])&&e.setAttribute?Ql:Ca},ho=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jl=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ta=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Aa=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},td=function(e,t,i,n){for(var a=this._pt,o;a;)o=a._next,a.p===n&&a.modifier(e,t,i),a=o},ed=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Zi(this,t,"_pt"):t.dep||(i=1),t=n;return!i},id=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ka=function(e){for(var t=e._pt,i,n,a,o;t;){for(i=t._next,n=a;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:a=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=a},ut=(function(){function r(t,i,n,a,o,s,l,d,c){this.t=i,this.s=a,this.c=o,this.p=n,this.r=s||ho,this.d=l||this,this.set=d||Ca,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,a){this.mSet=this.mSet||this.set,this.set=id,this.m=i,this.mt=a,this.tween=n},r})();ct(pa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return fa[r]=1});Ct.TweenMax=Ct.TweenLite=Z;Ct.TimelineLite=Ct.TimelineMax=rt;B=new rt({sortChildren:!1,defaults:ai,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yt.stringFilter=_a;var ue=[],Gi={},nd=[],Hr=0,ad=0,Zn=function(e){return(Gi[e]||nd).map(function(t){return t()})},la=function(){var e=Date.now(),t=[];e-Hr>2&&(Zn("matchMediaInit"),ue.forEach(function(i){var n=i.queries,a=i.conditions,o,s,l,d;for(s in n)o=Ht.matchMedia(n[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,d=1);d&&(i.revert(),l&&t.push(i))}),Zn("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Hr=e,Zn("matchMedia"))},mo=(function(){function r(t,i){this.selector=i&&ra(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ad++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,a){U(i)&&(a=n,n=i,i=U);var o=this,s=function(){var d=I,c=o.selector,u;return d&&d!==o&&d.data.push(o),a&&(o.selector=ra(a)),I=o,u=n.apply(o,arguments),U(u)&&o._r.push(u),I=d,o.selector=c,o.isReverted=!1,u};return o.last=s,i===U?s(o,function(l){return o.add(null,l)}):i?o[i]=s:s},e.ignore=function(i){var n=I;I=null,i(this),I=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Z&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var a=this;if(i?(function(){for(var s=a.getTweens(),l=a.data.length,d;l--;)d=a.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=a.data.length;l--;)d=a.data[l],d instanceof rt?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Z)&&d.revert&&d.revert(i);a._r.forEach(function(c){return c(i,a)}),a.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=ue.length;o--;)ue[o].id===this.id&&ue.splice(o,1)},e.revert=function(i){this.kill(i||{})},r})(),rd=(function(){function r(t){this.contexts=[],this.scope=t,I&&I.data.push(this)}var e=r.prototype;return e.add=function(i,n,a){zt(i)||(i={matches:i});var o=new mo(0,a||this.scope),s=o.conditions={},l,d,c;I&&!o.selector&&(o.selector=I.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(d in i)d==="all"?c=1:(l=Ht.matchMedia(i[d]),l&&(ue.indexOf(o)<0&&ue.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(la):l.addEventListener("change",la)));return c&&n(o,function(u){return o.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Ki={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return ao(n)})},timeline:function(e){return new rt(e)},getTweensOf:function(e,t){return B.getTweensOf(e,t)},getProperty:function(e,t,i,n){tt(e)&&(e=Pt(e)[0]);var a=Zt(e||{}).get,o=i?Vr:Br;return i==="native"&&(i=""),e&&(t?o((ft[t]&&ft[t].get||a)(e,t,i,n)):function(s,l,d){return o((ft[s]&&ft[s].get||a)(e,s,l,d))})},quickSetter:function(e,t,i){if(e=Pt(e),e.length>1){var n=e.map(function(c){return st.quickSetter(c,t,i)}),a=n.length;return function(c){for(var u=a;u--;)n[u](c)}}e=e[0]||{};var o=ft[t],s=Zt(e),l=s.harness&&(s.harness.aliases||{})[t]||t,d=o?function(c){var u=new o;Ce._pt=0,u.init(e,i?c+i:c,Ce,0,[e]),u.render(1,u),Ce._pt&&Aa(1,Ce)}:s.set(e,l);return o?d:function(c){return d(e,l,i?c+i:c,s,1)}},quickTo:function(e,t,i){var n,a=st.to(e,Tt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,d,c){return a.resetTo(t,l,d,c)};return o.tween=a,o},isTweening:function(e){return B.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ce(e.ease,ai.ease)),Pr(ai,e||{})},config:function(e){return Pr(yt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,a=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!ft[s]&&!Ct[s]&&ri(t+" effect requires "+s+" plugin.")}),Yn[t]=function(s,l,d){return i(Pt(s),Tt(l||{},a),d)},o&&(rt.prototype[t]=function(s,l,d){return this.add(Yn[t](s,zt(l)?l:(d=l)&&{},this),d)})},registerEase:function(e,t){L[e]=ce(t)},parseEase:function(e,t){return arguments.length?ce(e,t):L},getById:function(e){return B.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new rt(e),n,a;for(i.smoothChildTiming=gt(e.smoothChildTiming),B.remove(i),i._dp=0,i._time=i._tTime=B._time,n=B._first;n;)a=n._next,(t||!(!n._dur&&n instanceof Z&&n.vars.onComplete===n._targets[0]))&&Rt(i,n,n._start-n._delay),n=a;return Rt(B,i,0),i},context:function(e,t){return e?new mo(e,t):I},matchMedia:function(e){return new rd(e)},matchMediaRefresh:function(){return ue.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||la()},addEventListener:function(e,t){var i=Gi[e]||(Gi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Gi[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Rl,wrapYoyo:zl,distribute:Qr,random:to,snap:Jr,normalize:Hl,getUnit:at,clamp:Ll,splitColor:ro,toArray:Pt,selector:ra,mapRange:io,pipe:Ol,unitize:Fl,interpolate:Wl,shuffle:Zr},install:$r,effects:Yn,ticker:pt,updateRoot:rt.updateRoot,plugins:ft,globalTimeline:B,core:{PropTween:ut,globals:Ir,Tween:Z,Timeline:rt,Animation:li,getCache:Zt,_removeLinkedListItem:Zi,reverting:function(){return nt},context:function(e){return e&&I&&(I.data.push(e),e._ctx=I),I},suppressOverwrites:function(e){return da=e}}};ct("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ki[r]=Z[r]});pt.add(rt.updateRoot);Ce=Ki.to({},{duration:0});var od=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},sd=function(e,t){var i=e._targets,n,a,o;for(n in t)for(a=i.length;a--;)o=e._ptLookup[a][n],o&&(o=o.d)&&(o._pt&&(o=od(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[a],n))},Qn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,a,o){o._onInit=function(s){var l,d;if(tt(a)&&(l={},ct(a,function(c){return l[c]=1}),a=l),t){l={};for(d in a)l[d]=t(a[d]);a=l}sd(s,a)}}}},st=Ki.registerPlugin({name:"attr",init:function(e,t,i,n,a){var o,s,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],n,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)nt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Qn("roundProps",oa),Qn("modifiers"),Qn("snap",Jr))||Ki;Z.version=rt.version=st.version="3.15.0";Nr=1;ca()&&Ee();var ld=L.Power0,dd=L.Power1,cd=L.Power2,ud=L.Power3,hd=L.Power4,md=L.Linear,fd=L.Quad,pd=L.Cubic,gd=L.Quart,yd=L.Quint,wd=L.Strong,_d=L.Elastic,vd=L.Back,bd=L.SteppedEase,xd=L.Bounce,Sd=L.Sine,Cd=L.Expo,Td=L.Circ;var fo,te,Le,Oa,we,Ad,po,Fa,kd=function(){return typeof window<"u"},Vt={},ye=180/Math.PI,De=Math.PI/180,Pe=Math.atan2,go=1e8,Ha=/([A-Z])/g,Ed=/(left|right|width|margin|padding|x)/i,Md=/[\s,\(]\S/,Wt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ma=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pd=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ld=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Dd=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Od=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Co=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},To=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Fd=function(e,t,i){return e.style[t]=i},Hd=function(e,t,i){return e.style.setProperty(t,i)},Rd=function(e,t,i){return e._gsap[t]=i},zd=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Wd=function(e,t,i,n,a){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(a,o)},Nd=function(e,t,i,n,a){var o=e._gsap;o[t]=i,o.renderTransform(a,o)},V="transform",wt=V+"Origin",$d=function r(e,t){var i=this,n=this.target,a=n.style,o=n._gsap;if(e in Vt&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Wt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Bt(n,s)}):this.tfm[e]=o.x?o[e]:Bt(n,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return Wt.transform.split(",").forEach(function(s){return r.call(i,s,t)});if(this.props.indexOf(V)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,t,"")),e=V}(a||t)&&this.props.push(e,t,a[e])},Ao=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Id=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Ha,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Fa(),(!a||!a.isStart)&&!i[V]&&(Ao(i),n.zOrigin&&i[wt]&&(i[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ko=function(e,t){var i={target:e,props:[],revert:Id,save:$d};return e._gsap||st.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Eo,Pa=function(e,t){var i=te.createElementNS?te.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):te.createElement(e);return i&&i.style?i:te.createElement(e)},At=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ha,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Oe(t)||t,1)||""},yo="O,Moz,ms,Ms,Webkit".split(","),Oe=function(e,t,i){var n=t||we,a=n.style,o=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yo[o]+e in a););return o<0?null:(o===3?"ms":o>=0?yo[o]:"")+e},La=function(){kd()&&window.document&&(fo=window,te=fo.document,Le=te.documentElement,we=Pa("div")||{style:{}},Ad=Pa("div"),V=Oe(V),wt=V+"Origin",we.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eo=!!Oe("perspective"),Fa=st.core.reverting,Oa=1)},wo=function(e){var t=e.ownerSVGElement,i=Pa("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),a;n.style.display="block",i.appendChild(n),Le.appendChild(i);try{a=n.getBBox()}catch{}return i.removeChild(n),Le.removeChild(i),a},_o=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mo=function(e){var t,i;try{t=e.getBBox()}catch{t=wo(e),i=1}return t&&(t.width||t.height)||i||(t=wo(e)),t&&!t.width&&!t.x&&!t.y?{x:+_o(e,["x","cx","x1"])||0,y:+_o(e,["y","cy","y1"])||0,width:0,height:0}:t},Po=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mo(e))},ie=function(e,t){if(t){var i=e.style,n;t in Vt&&t!==wt&&(t=V),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ha,"-$1").toLowerCase())):i.removeAttribute(t)}},ee=function(e,t,i,n,a,o){var s=new ut(e._pt,t,i,0,1,o?To:Co);return e._pt=s,s.b=n,s.e=a,e._props.push(i),s},vo={deg:1,rad:1,turn:1},qd={grid:1,flex:1},ne=function r(e,t,i,n){var a=parseFloat(i)||0,o=(i+"").trim().substr((a+"").length)||"px",s=we.style,l=Ed.test(t),d=e.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),u=100,h=n==="px",f=n==="%",g,m,p,w;if(n===o||!a||vo[n]||vo[o])return a;if(o!=="px"&&!h&&(a=r(e,t,i,"px")),w=e.getCTM&&Po(e),(f||o==="%")&&(Vt[t]||~t.indexOf("adius")))return g=w?e.getBBox()[l?"width":"height"]:e[c],Y(f?a/g*u:a/100*g);if(s[l?"width":"height"]=u+(h?o:n),m=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!d?e:e.parentNode,w&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===te||!m.appendChild)&&(m=te.body),p=m._gsap,p&&f&&p.width&&l&&p.time===pt.time&&!p.uncache)return Y(a/p.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+n,g=e[c],y?e.style[t]=y:ie(e,t)}else(f||o==="%")&&!qd[At(m,"display")]&&(s.position=At(e,"position")),m===e&&(s.position="static"),m.appendChild(we),g=we[c],m.removeChild(we),s.position="absolute";return l&&f&&(p=Zt(m),p.time=pt.time,p.width=m[c]),Y(h?g*a/u:g&&a?u/g*a:0)},Bt=function(e,t,i,n){var a;return Oa||La(),t in Wt&&t!=="transform"&&(t=Wt[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vt[t]&&t!=="transform"?(a=hi(e,n),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:nn(At(e,wt))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||n||~(a+"").indexOf("calc("))&&(a=en[t]&&en[t](e,t,i)||At(e,t)||ya(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ne(e,t,a,i)+i:a},Gd=function(e,t,i,n){if(!i||i==="none"){var a=Oe(t,e,1),o=a&&At(e,a,1);o&&o!==i?(t=a,i=o):t==="borderColor"&&(i=At(e,"borderTopColor"))}var s=new ut(this._pt,e.style,t,0,1,Ta),l=0,d=0,c,u,h,f,g,m,p,w,y,_,b,v;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=At(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(m=e.style[t],e.style[t]=n,n=At(e,t)||n,m?e.style[t]=m:ie(e,t)),c=[i,n],_a(c),i=c[0],n=c[1],h=i.match(he)||[],v=n.match(he)||[],v.length){for(;u=he.exec(n);)p=u[0],y=n.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=h[d++]||"")&&(f=parseFloat(m)||0,b=m.substr((f+"").length),p.charAt(1)==="="&&(p=me(f,p)+b),w=parseFloat(p),_=p.substr((w+"").length),l=he.lastIndex-_.length,_||(_=_||yt.units[t]||b,l===n.length&&(n+=_,s.e+=_)),b!==_&&(f=ne(e,t,m,_)||0),s._pt={_next:s._pt,p:y||d===1?y:",",s:f,c:w-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?To:Co;return ha.test(n)&&(s.e=0),this._pt=s,s},bo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bd=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=bo[i]||i,t[1]=bo[n]||n,t.join(" ")},Vd=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,a=t.u,o=i._gsap,s,l,d;if(a==="all"||a===!0)n.cssText="",l=1;else for(a=a.split(","),d=a.length;--d>-1;)s=a[d],Vt[s]&&(l=1,s=s==="transformOrigin"?wt:V),ie(i,s);l&&(ie(i,V),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",hi(i,1),o.uncache=1,Ao(n)))}},en={clearProps:function(e,t,i,n,a){if(a.data!=="isFromStart"){var o=e._pt=new ut(e._pt,t,i,0,0,Vd);return o.u=n,o.pr=-10,o.tween=a,e._props.push(i),1}}},ui=[1,0,0,1,0,0],Lo={},Do=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xo=function(e){var t=At(e,V);return Do(t)?ui:t.substr(7).match(ua).map(Y)},Ra=function(e,t){var i=e._gsap||Zt(e),n=e.style,a=xo(e),o,s,l,d;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?ui:a):(a===ui&&!e.offsetParent&&e!==Le&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,s=e.nextElementSibling,Le.appendChild(e)),a=xo(e),l?n.display=l:ie(e,"display"),d&&(s?o.insertBefore(e,s):o?o.appendChild(e):Le.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Da=function(e,t,i,n,a,o){var s=e._gsap,l=a||Ra(e,!0),d=s.xOrigin||0,c=s.yOrigin||0,u=s.xOffset||0,h=s.yOffset||0,f=l[0],g=l[1],m=l[2],p=l[3],w=l[4],y=l[5],_=t.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,S,C,T,A;i?l!==ui&&(C=f*p-g*m)&&(T=b*(p/C)+v*(-m/C)+(m*y-p*w)/C,A=b*(-g/C)+v*(f/C)-(f*y-g*w)/C,b=T,v=A):(S=Mo(e),b=S.x+(~_[0].indexOf("%")?b/100*S.width:b),v=S.y+(~(_[1]||_[0]).indexOf("%")?v/100*S.height:v)),n||n!==!1&&s.smooth?(w=b-d,y=v-c,s.xOffset=u+(w*f+y*m)-w,s.yOffset=h+(w*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[wt]="0px 0px",o&&(ee(o,s,"xOrigin",d,b),ee(o,s,"yOrigin",c,v),ee(o,s,"xOffset",u,s.xOffset),ee(o,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},hi=function(e,t){var i=e._gsap||new va(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,a=i.scaleX<0,o="px",s="deg",l=getComputedStyle(e),d=At(e,wt)||"0",c,u,h,f,g,m,p,w,y,_,b,v,S,C,T,A,x,E,P,O,z,q,W,F,et,bt,dt,Ot,$,$t,mt,xt;return c=u=h=m=p=w=y=_=b=0,f=g=1,i.svg=!!(e.getCTM&&Po(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[V]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[V]!=="none"?l[V]:"")),n.scale=n.rotate=n.translate="none"),C=Ra(e,i.svg),i.svg&&(i.uncache?(et=e.getBBox(),d=i.xOrigin-et.x+"px "+(i.yOrigin-et.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Da(e,F||d,!!F||i.originIsAbsolute,i.smooth!==!1,C)),v=i.xOrigin||0,S=i.yOrigin||0,C!==ui&&(E=C[0],P=C[1],O=C[2],z=C[3],c=q=C[4],u=W=C[5],C.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt(z*z+O*O),m=E||P?Pe(P,E)*ye:0,y=O||z?Pe(O,z)*ye+m:0,y&&(g*=Math.abs(Math.cos(y*De))),i.svg&&(c-=v-(v*E+S*O),u-=S-(v*P+S*z))):(xt=C[6],$t=C[7],dt=C[8],Ot=C[9],$=C[10],mt=C[11],c=C[12],u=C[13],h=C[14],T=Pe(xt,$),p=T*ye,T&&(A=Math.cos(-T),x=Math.sin(-T),F=q*A+dt*x,et=W*A+Ot*x,bt=xt*A+$*x,dt=q*-x+dt*A,Ot=W*-x+Ot*A,$=xt*-x+$*A,mt=$t*-x+mt*A,q=F,W=et,xt=bt),T=Pe(-O,$),w=T*ye,T&&(A=Math.cos(-T),x=Math.sin(-T),F=E*A-dt*x,et=P*A-Ot*x,bt=O*A-$*x,mt=z*x+mt*A,E=F,P=et,O=bt),T=Pe(P,E),m=T*ye,T&&(A=Math.cos(T),x=Math.sin(T),F=E*A+P*x,et=q*A+W*x,P=P*A-E*x,W=W*A-q*x,E=F,q=et),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,w=180-w),f=Y(Math.sqrt(E*E+P*P+O*O)),g=Y(Math.sqrt(W*W+xt*xt)),T=Pe(q,W),y=Math.abs(T)>2e-4?T*ye:0,b=mt?1/(mt<0?-mt:mt):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Do(At(e,V)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Y(f),i.scaleY=Y(g),i.rotation=Y(m)+s,i.rotationX=Y(p)+s,i.rotationY=Y(w)+s,i.skewX=y+s,i.skewY=_+s,i.transformPerspective=b+o,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(n[wt]=nn(d)),i.xOffset=i.yOffset=0,i.force3D=yt.force3D,i.renderTransform=i.svg?Yd:Eo?Oo:Ud,i.uncache=0,i},nn=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ea=function(e,t,i){var n=at(t);return Y(parseFloat(t)+parseFloat(ne(e,"x",i+"px",n)))+n},Ud=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Oo(e,t)},pe="0deg",ci="0px",ge=") ",Oo=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,o=i.x,s=i.y,l=i.z,d=i.rotation,c=i.rotationY,u=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,m=i.scaleY,p=i.transformPerspective,w=i.force3D,y=i.target,_=i.zOrigin,b="",v=w==="auto"&&e&&e!==1||w===!0;if(_&&(u!==pe||c!==pe)){var S=parseFloat(c)*De,C=Math.sin(S),T=Math.cos(S),A;S=parseFloat(u)*De,A=Math.cos(S),o=Ea(y,o,C*A*-_),s=Ea(y,s,-Math.sin(S)*-_),l=Ea(y,l,T*A*-_+_)}p!==ci&&(b+="perspective("+p+ge),(n||a)&&(b+="translate("+n+"%, "+a+"%) "),(v||o!==ci||s!==ci||l!==ci)&&(b+=l!==ci||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+ge),d!==pe&&(b+="rotate("+d+ge),c!==pe&&(b+="rotateY("+c+ge),u!==pe&&(b+="rotateX("+u+ge),(h!==pe||f!==pe)&&(b+="skew("+h+", "+f+ge),(g!==1||m!==1)&&(b+="scale("+g+", "+m+ge),y.style[V]=b||"translate(0, 0)"},Yd=function(e,t){var i=t||this,n=i.xPercent,a=i.yPercent,o=i.x,s=i.y,l=i.rotation,d=i.skewX,c=i.skewY,u=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,m=i.yOrigin,p=i.xOffset,w=i.yOffset,y=i.forceCSS,_=parseFloat(o),b=parseFloat(s),v,S,C,T,A;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=De,d*=De,v=Math.cos(l)*u,S=Math.sin(l)*u,C=Math.sin(l-d)*-h,T=Math.cos(l-d)*h,d&&(c*=De,A=Math.tan(d-c),A=Math.sqrt(1+A*A),C*=A,T*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),v*=A,S*=A)),v=Y(v),S=Y(S),C=Y(C),T=Y(T)):(v=u,T=h,S=C=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=ne(f,"x",o,"px"),b=ne(f,"y",s,"px")),(g||m||p||w)&&(_=Y(_+g-(g*v+m*C)+p),b=Y(b+m-(g*S+m*T)+w)),(n||a)&&(A=f.getBBox(),_=Y(_+n/100*A.width),b=Y(b+a/100*A.height)),A="matrix("+v+","+S+","+C+","+T+","+_+","+b+")",f.setAttribute("transform",A),y&&(f.style[V]=A)},Kd=function(e,t,i,n,a){var o=360,s=tt(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?ye:1),d=l-n,c=n+d+"deg",u,h;return s&&(u=a.split("_")[1],u==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),u==="cw"&&d<0?d=(d+o*go)%o-~~(d/o)*o:u==="ccw"&&d>0&&(d=(d-o*go)%o-~~(d/o)*o)),e._pt=h=new ut(e._pt,t,i,n,d,Pd),h.e=c,h.u="deg",e._props.push(i),h},So=function(e,t){for(var i in t)e[i]=t[i];return e},jd=function(e,t,i){var n=So({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,l,d,c,u,h,f,g;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),o[V]=t,s=hi(i,1),ie(i,V),i.setAttribute("transform",d)):(d=getComputedStyle(i)[V],o[V]=t,s=hi(i,1),o[V]=d);for(l in Vt)d=n[l],c=s[l],d!==c&&a.indexOf(l)<0&&(f=at(d),g=at(c),u=f!==g?ne(i,l,d,g):parseFloat(d),h=parseFloat(c),e._pt=new ut(e._pt,s,l,u,h-u,Ma),e._pt.u=g||0,e._props.push(l));So(s,n)};ct("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",a="Left",o=(e<3?[t,i,n,a]:[t+a,t+i,n+i,n+a]).map(function(s){return e<2?r+s:"border"+s+r});en[e>1?"border"+r:r]=function(s,l,d,c,u){var h,f;if(arguments.length<4)return h=o.map(function(g){return Bt(s,g,d)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(c+"").split(" "),f={},o.forEach(function(g,m){return f[g]=h[m]=h[m]||h[(m-1)/2|0]}),s.init(l,f,u)}});var za={name:"css",register:La,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,a){var o=this._props,s=e.style,l=i.vars.startAt,d,c,u,h,f,g,m,p,w,y,_,b,v,S,C,T,A;Oa||La(),this.styles=this.styles||ko(e),T=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(ft[m]&&xa(m,t,i,n,e,a)))){if(f=typeof c,g=en[m],f==="function"&&(c=c.call(i,n,e,a),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Me(c)),g)g(this,e,m,c,i)&&(C=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",qt.lastIndex=0,qt.test(d)||(p=at(d),w=at(c),w?p!==w&&(d=ne(e,m,d,w)+w):p&&(c+=p)),this.add(s,"setProperty",d,c,n,a,0,0,m),o.push(m),T.push(m,0,s[m]);else if(f!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(i,n,e,a):l[m],tt(d)&&~d.indexOf("random(")&&(d=Me(d)),at(d+"")||d==="auto"||(d+=yt.units[m]||at(Bt(e,m))||""),(d+"").charAt(1)==="="&&(d=Bt(e,m))):d=Bt(e,m),h=parseFloat(d),y=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),u=parseFloat(c),m in Wt&&(m==="autoAlpha"&&(h===1&&Bt(e,"visibility")==="hidden"&&u&&(h=0),T.push("visibility",0,s.visibility),ee(this,s,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Wt[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Vt,_){if(this.styles.save(m),A=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=At(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=c,c=At(e,"perspective"),x?e.style.perspective=x:ie(e,"perspective")}u=parseFloat(c)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||hi(e,t.parseTransform),S=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new ut(this._pt,s,V,0,1,v.renderTransform,v,0,-1),b.dep=1),m==="scale")this._pt=new ut(this._pt,v,"scaleY",v.scaleY,(y?me(v.scaleY,y+u):u)-v.scaleY||0,Ma),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(wt,0,s[wt]),c=Bd(c),v.svg?Da(e,c,0,S,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==v.zOrigin&&ee(this,v,"zOrigin",v.zOrigin,w),ee(this,s,m,nn(d),nn(c)));continue}else if(m==="svgOrigin"){Da(e,c,1,S,0,this);continue}else if(m in Lo){Kd(this,v,m,h,y?me(h,y+c):c);continue}else if(m==="smoothOrigin"){ee(this,v,"smooth",v.smooth,c);continue}else if(m==="force3D"){v[m]=c;continue}else if(m==="transform"){jd(this,c,e);continue}}else m in s||(m=Oe(m)||m);if(_||(u||u===0)&&(h||h===0)&&!Md.test(c)&&m in s)p=(d+"").substr((h+"").length),u||(u=0),w=at(c)||(m in yt.units?yt.units[m]:p),p!==w&&(h=ne(e,m,d,w)),this._pt=new ut(this._pt,_?v:s,m,h,(y?me(h,y+u):u)-h,!_&&(w==="px"||m==="zIndex")&&t.autoRound!==!1?Od:Ma),this._pt.u=w||0,_&&A!==c?(this._pt.b=d,this._pt.e=A,this._pt.r=Dd):p!==w&&w!=="%"&&(this._pt.b=d,this._pt.r=Ld);else if(m in s)Gd.call(this,e,m,d,y?y+c:c);else if(m in e)this.add(e,m,d||e[m],y?y+c:c,n,a);else if(m!=="parseTransform"){Xi(m,c);continue}_||(m in s?T.push(m,0,s[m]):typeof e[m]=="function"?T.push(m,2,e[m]()):T.push(m,1,d||e[m])),o.push(m)}}C&&ka(this)},render:function(e,t){if(t.tween._time||!Fa())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Bt,aliases:Wt,getSetter:function(e,t,i){var n=Wt[t];return n&&n.indexOf(",")<0&&(t=n),t in Vt&&t!==wt&&(e._gsap.x||Bt(e,"x"))?i&&po===i?t==="scale"?zd:Rd:(po=i||{})&&(t==="scale"?Wd:Nd):e.style&&!ji(e.style[t])?Fd:~t.indexOf("-")?Hd:tn(e,t)},core:{_removeProperty:ie,_getMatrix:Ra}};st.utils.checkPrefix=Oe;st.core.getStyleSaver=ko;(function(r,e,t,i){var n=ct(r+","+e+","+t,function(a){Vt[a]=1});ct(e,function(a){yt.units[a]="deg",Lo[a]=1}),Wt[n[13]]=r+","+e,ct(i,function(a){var o=a.split(":");Wt[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){yt.units[r]="px"});st.registerPlugin(za);var Wa=st.registerPlugin(za)||st,qu=Wa.core.Tween;var Na={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},lt={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Fo={windSpeed:[.1,15],rainCount:[.1,10],leafCount:[.1,10],snowCount:[.1,10],cloudBaseSize:[.3,2.5],cloudCount:[1,20],splashBounce:[40,120]},Ho={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Ro="1.3.2",zo={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function mi(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function kt(){return new Date(mi())}function $a(r,e=-1/0,t=1/0){return typeof r=="number"&&!isNaN(r)&&r>=e&&r<=t}function pi(r){return typeof r!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(r)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(r)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(r.toLowerCase())}function M(r){return r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Lt(r,e){return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0}function ht(r,e,t=0){if(!isFinite(r))return"--";Math.abs(r)<.5/10**t&&(r=0);let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(r)}catch{return r.toFixed(t)}}function gi(r,e,t){if(r?.localize)try{let i=r.localize(e);if(i&&i!==e)return i}catch{}return t}function Wo(r,e){if(!isFinite(r))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return r*3.6;case"mph":return r*1.609344;case"ft/s":return r*1.09728;case"kn":case"kt":case"knots":return r*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,r),1.5)*3.6;default:return r}}function k(r,e,...t){r&&console.log(`[AWC Dev] ${e}`,...t)}function Xd(r){let e=r?.engine_settings;return!e||typeof e!="object"?!1:Object.keys(lt).some(t=>{let i=e[t],[n,a]=Fo[t];return $a(i,n,a)&&Math.abs(i-lt[t])>1e-9})}function Zd(r){let e=r?.engine_mode;return e==="auto"||e==="manual"?e:Xd(r)?"manual":"auto"}function K(r,e){let t=Zd(r)==="manual"?r.engine_settings||{}:{},i=(o,s,l,d)=>$a(o,l,d)?o:s,n=i(t.windSpeed,lt.windSpeed,.1,15),a=n;return $a(e,0,200)&&(a=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:a,rainCount:i(t.rainCount,lt.rainCount,.1,10),leafCount:i(t.leafCount,lt.leafCount,.1,10),snowCount:i(t.snowCount,lt.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,lt.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,lt.cloudCount,1,20),splashBounce:i(t.splashBounce,lt.splashBounce,40,120)}}function Ia(r){r.forEach(e=>{e!=null&&clearTimeout(e)}),r.length=0}function No(r){let e=new Set;return r.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function an(r){window.AnimatedWeatherCardGsap&&No(r).forEach(e=>e.pause())}function rn(r){window.AnimatedWeatherCardGsap&&No(r).forEach(e=>e.resume())}function qa(r){window.AnimatedWeatherCardGsap&&r.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function on(r,e,t,i,n={}){if(typeof r!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let a=r.toLowerCase();if(a.includes("sleet")&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"sleety-stormy";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"snowy-stormy";if(a.includes("lightning")||a.includes("thunder")||a.includes("storm"))return"stormy";if(a.includes("fog")||a.includes("mist"))return"foggy";if(a.includes("heavy")&&a.includes("rain"))return"pouring";if(a.includes("pouring")||a.includes("downpour"))return"pouring";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("rain")||a.includes("drizzle")))return"snowy-rainy";if(a.includes("light")&&(a.includes("rain")||a.includes("drizzle")))return"light-rain";if(a.includes("rain")||a.includes("drizzle"))return"rainy";if(a.includes("sleet")||a.includes("hail"))return"sleety";if(a.includes("snow"))return"snowy";if(a.includes("wind"))return"windy";if(a.includes("partly")&&a.includes("cloud"))return"partly-cloudy";if(a.includes("cloud")||a.includes("overcast"))return"cloudy";if(a.includes("clear")||a.includes("sunny")){if(!n.clock){if(a.includes("night"))return"clear-night";if(a.includes("sunny"))return"sunny";if(n.night!==void 0)return n.night?"clear-night":"sunny"}let o=kt(),s;if(i)try{let u=new Intl.DateTimeFormat("en-US",{timeZone:i,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(u.find(h=>h.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=e??6,d=t??20;return(s<l||s>=d)&&a.includes("clear")?"clear-night":"sunny"}return"sunny"}function yi(r,e,t){if(typeof r!="string"||!r.trim())return console.warn("Invalid animation type provided"),t||fi("rain");if(!e||!e.isEnabled())return t||fi(r);let i=zo[r];if(!i)return console.warn(`No color scheme found for animation type: ${r}`),t||fi(r);try{let n=e.getCurrentState(),a=e.getTimeAwareColor(i);return pi(a)?a:(console.warn(`Invalid color returned from time manager: ${a}`),t||fi(r))}catch(n){return console.error("Error getting time-aware color:",n),t||fi(r)}}function fi(r){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[r];return t||(console.warn(`Unknown animation type: ${r}, using white as fallback`),"#FFFFFF")}var sn=class sn{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.amounts=null;this.element=e,this.config=t,this.cardConfig=i,this.amounts=t.amounts??null,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}setAmounts(e){let t=this.amounts;this.amounts=e,(this.state==="active"||this.state==="paused")&&this.onAmountsChange(t)}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}onAmountsChange(e){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!sn.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};sn.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Q=sn;var ae=class{constructor(e,t,i,n){this.layer=e;this.create=t;this.cycle=i;this.onRetire=n;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let a={el:n};this.items.push(a),t.push(n),this.run(a,!0)}return t}run(e,t){if(this.running){if(e.retiring){this.retire(e);return}e.el.style.visibility="",e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause()}}resize(e,t=1){if(!this.running)return[];let i=Math.max(0,Math.round(e)),n=this.items.filter(l=>!l.retiring);if(i<n.length)return n.slice(i).forEach(l=>{l.retiring=!0}),[];let a=i-n.length;for(let l of this.items){if(a<=0)break;l.retiring&&(l.retiring=!1,a--)}let o=window.AnimatedWeatherCardGsap,s=[];for(let l=0;l<a;l++){let d=this.create(this.items.length);d.style.visibility="hidden",this.layer.appendChild(d);let c={el:d};this.items.push(c),s.push(d);let u=t*Math.random();o?.delayedCall&&u>0?(c.anim=o.delayedCall(u,()=>this.run(c,!1)),this.paused&&c.anim.pause()):this.run(c,!1)}return s}get live(){return this.items.filter(e=>!e.retiring).length}retire(e){e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove(),this.items=this.items.filter(t=>t!==e),this.onRetire?.(e.el)}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function Fe(r,e){return e&&r.progress(Math.random()),r}var Qd=420*230;function _e(r,e){return Math.min(3,Math.max(.6,r*e/Qd))||1}function D(r,e){return r+Math.random()*(e-r)}var Jd={light:10,rain:18,storm:24,pouring:32},tc={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},$o={light:16,rain:24,storm:34,pouring:42},ec=.3,ic=16,nc=8,ac=[10,30],Io="http://www.w3.org/2000/svg";function rc(r,e,t,i){let n=0,a=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*r+l*l*t,c=2*(1-l)*l*e+l*l*i;n+=Math.hypot(d-a,c-o),a=d,o=c}return n}function oc(r,e,t,i){return Math.max(4,Math.round(Jd[r]*e*_e(t,i)))}var ln=class extends Q{constructor(t,i,n,a){super(t,i,n);this.kind="rain";this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=a,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");this.card=n,this.kind=this.amounts?.rain.kind??this.rainKind();let a=this.dropCount(),o=this.getRainColor(this.element.timeOfDayManager),s=this.cardConfig.spill_particles!==!1;this.splashLayer=t,this.splashColor=o,this.splashBounce=i.splashBounce/lt.splashBounce,this.pool=new ae(t,()=>{let l=D(1,this.kind==="pouring"?3:2.4),d=$o[this.kind],c=document.createElement("div");return c.className="raindrop",c.dataset.kind=this.kind,c.style.cssText=`
                    width: ${l.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${o}, transparent);
                    border-radius: ${l.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,c.dataset.width=l.toFixed(2),c},(l,d,c)=>this.fall(l,n,s,d,c),l=>this.removeParticle(l)),this.pool.start(a).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Rain animation started - ${a} drops (${this.kind})`)}dropCount(){let t=this.card;if(!t)return 0;if(this.amounts)return Math.max(4,Math.round(this.amounts.rain.drops*_e(t.offsetWidth,t.offsetHeight)));let i=K(this.cardConfig,this.realWindSpeed);return oc(this.kind,i.rainCount,t.offsetWidth,t.offsetHeight)}onAmountsChange(t){this.pool&&(this.kind=this.amounts?.rain.kind??this.rainKind(),this.pool.resize(this.dropCount(),.8).forEach(i=>this.addParticle(i)))}fall(t,i,n,a,o){let s=i.offsetWidth,l=i.offsetHeight,d=this.kind,c=$o[d];t.dataset.kind!==d&&(t.style.height=`${c}px`,t.dataset.kind=d);let[u,h]=tc[d],f=D(u,h),g=D(6,Math.max(7,s-6)),m=this.rainConfig.splashEnabled&&Math.random()<ec,p=-c,w=m?l-c:n?l+D(60,120):l,y=Math.max(.25,(w-p)/f),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:a});if(b.fromTo(t,{y:p},{y:w,duration:y,ease:"none"}),m)b.call(()=>this.createSplash(g+_/2,l),[],y),b.to(t,{scaleY:0,duration:c/f,ease:"none"},y);else if(n){let v=(l-c-p)/f;b.to(t,{opacity:0,duration:y-v,ease:"power1.in"},v)}return Fe(b,o)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let a=this.splashDots[this.nextSplashDot];a||(a=document.createElement("div"),a.className="rain-splash",a.style.background=this.splashColor,this.splashLayer.appendChild(a),this.splashDots[this.nextSplashDot]=a),this.nextSplashDot=(this.nextSplashDot+1)%ic;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=n*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(a),window.AnimatedWeatherCardGsap.set(a,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(a,{x:t-1+l,duration:o,ease:"power1.out"},0).to(a,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(a,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(a,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,i){let n=this.splashLayer,a=this.rebounds[this.nextRebound];if(!a){a=document.createElementNS(Io,"svg"),a.classList.add("rain-rebound");let m=document.createElementNS(Io,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,a.appendChild(m),n.appendChild(a),this.rebounds[this.nextRebound]=a}this.nextRebound=(this.nextRebound+1)%nc;let o=a.firstChild,[s,l]=ac,d=D(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,u=D(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${u.toFixed(1)}`);let h=rc(c,-2*d,2*c,u),f=Math.min(h*.45,6+d*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(h+f).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([a,o]),window.AnimatedWeatherCardGsap.set(a,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-h,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(a,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?yi("lightning",t,"var(--weather-storm-rain-color)"):yi("rain",t,"var(--weather-rain-color)")}};var sc=36,re=[2,6],Ga=[20,38],qo=10,lc=.6;function dc(r,e,t){return Math.max(6,Math.round(sc*r*_e(e,t)))}function Va(r){return Math.min(2.2,Math.max(.3,r/lt.windSpeed))}var dn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.swingOf=new WeakMap;this.realWindSpeed=a,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");this.card=n;let a=this.flakeCount(),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Va(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new ae(t,()=>this.createFlake(o),(d,c,u)=>this.fall(d,n,l,s,c,u),d=>{let c=this.swingOf.get(d);c?.kill(),this.swings=this.swings.filter(u=>u!==c),this.removeParticle(d)}),this.pool.start(a).forEach(d=>this.addParticle(d)),k(this.config.devMode,`Snow animation started - ${a} flakes`)}flakeCount(){let t=this.card;if(!t)return 0;let i=this.amounts?.snow??K(this.cardConfig,this.realWindSpeed).snowCount;return dc(i,t.offsetWidth,t.offsetHeight)}onAmountsChange(t){this.pool?.resize(this.flakeCount(),6).forEach(i=>this.addParticle(i))}createFlake(t){let i=D(re[0],re[1]),n=(i-re[0])/(re[1]-re[0]),a=document.createElement("div");a.className="snowflake",a.dataset.size=i.toFixed(2),a.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,a.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(a,{transformOrigin:"50% -500%",rotation:-qo});let o=window.AnimatedWeatherCardGsap.to(a,{rotation:qo,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.state==="paused"&&o.pause(),this.swings.push(o),this.swingOf.set(a,o),a}fall(t,i,n,a,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"4"),u=(c-re[0])/(re[1]-re[0]),h=(Ga[0]+(Ga[1]-Ga[0])*u)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<lc,g=-c*2,m=f?d-this.pileHeight()-c:a?d+D(60,120):d+c,p=m-g,w=Math.max(.5,p/h),y=p*D(.04,.13)*n,_=D(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(t,{y:g},{y:m,x:_+y,duration:w,ease:"none"}),f)b.call(()=>this.addToAccumulation(),[],w),b.to(t,{opacity:0,duration:.6,ease:"power1.out"},w);else if(a){let v=Math.min(w,(d-g)/h);b.to(t,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return Fe(b,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let a=Math.min(i,n+.8);t.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(t,{scaleY:a/i,opacity:Math.min(.9,a/i),duration:.3,ease:"power2.out"})}};var cc=30,Go=[150,230],uc=.3,cn=6,un=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=a,this.sleetConfig={particleCount:40,...i},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");this.card=n;let a=this.pelletCount(),o=this.cardConfig.spill_particles!==!1,s=Va(i.windSpeed)*.5;this.pool=new ae(t,()=>{let l=D(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,n,s,o,d,c),l=>this.removeParticle(l)),this.pool.start(a).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${a} pellets`)}pelletCount(){let t=this.card;if(!t)return 0;let i=this.amounts?.sleet??K(this.cardConfig,this.realWindSpeed).snowCount;return Math.max(6,Math.round(cc*i*_e(t.offsetWidth,t.offsetHeight)))}onAmountsChange(t){this.pool?.resize(this.pelletCount(),1.5).forEach(i=>this.addParticle(i))}fall(t,i,n,a,o,s){let l=i.offsetWidth,d=i.offsetHeight,c=parseFloat(t.dataset.size||"2"),u=D(Go[0],Go[1]),h=Math.random()<uc,f=-c*2,g=h?d-c:a?d+D(60,120):d+c,m=g-f,p=Math.max(.3,m/u),w=m*D(.03,.08)*n,y=D(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(t,{x:y,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(t,{y:f},{y:g,x:y+w,duration:p,ease:"none"}),h)_.call(()=>this.addToPile(i),[],p),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},p);else if(a){let b=Math.min(p,(d-f)/u);_.to(t,{opacity:0,duration:Math.max(.1,p-b),ease:"power1.in"},b)}return Fe(_,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
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
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=cn)return;let a=Math.min(cn,n+.4);i.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(i,{scaleY:a/cn,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function Bo(r,e,t,i){return t!==null&&t>0?r*Math.max(0,t-e):r*.6*i}var Ua=[90,160];function Uo(r,e,t,i,n,a=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),u=c<.25,h=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*t;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let m=-f-10,p=s+(a?60+Math.random()*80:f+10),w=(Ua[0]+Math.random()*(Ua[1]-Ua[0]))*He(e.windSpeed)*(u?.6:1),y=(p-m)/w,_=Math.min(y,(s-m)/w),b=h?-(60+Math.random()*80):u?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),r.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:y,ease:"none"},0).to(o,{y:d+b,duration:y,ease:u?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),a&&y>_&&v.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function Yo(r,e,t,i,n,a){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;o.style.position="absolute",o.style.height=(d?2:1)*t+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let c=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let u=Math.max(15,(20+Math.random()*60)*t);o.style.width=u+"px";let h=i.offsetWidth,f=i.offsetHeight,g=f*.15+Math.random()*(f*.7);window.AnimatedWeatherCardGsap.set(o,{x:-u,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),r.appendChild(o);let p=(h+u*2)/(hc*He(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),a&&a(o)}}).to(o,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:h+u,rotation:l?g>f/2?5:-5:0,duration:p,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,p*.3)},p-Math.min(.5,p*.3)),o}var hc=230,mc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function He(r){return Math.min(2.2,Math.max(.6,Math.sqrt(r/lt.windSpeed)))}var fc=12;function pc(r){let e=Math.round(70*r),t=Math.round(35*r);return{width:e,height:Math.round(26*r),puffs:[{x:Math.round(9*r),y:Math.round(-22*r),size:Math.round(44*r)},{x:e-Math.round(9*r)-t,y:Math.round(-13*r),size:t}]}}var Ko=r=>r>0?Math.ceil(r*3)+1:0,Vo=new Map;function gc(r,e,t,i){let n=[r,e,t,i].join(","),a=Vo.get(n);if(a)return a;let o=Ko(t),s=Math.ceil((r+2*o)*i),l=Math.ceil((e+2*o)*i),d=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},c=null,[u,h]=d();if(h){let[f,g,m]=[o*i,o*i,Math.min(50,r/2,e/2)*i],[p,w]=[f+r*i,g+e*i];if(h.fillStyle="#000",h.beginPath(),h.moveTo(f+m,g),h.arcTo(p,g,p,w,m),h.arcTo(p,w,f,w,m),h.arcTo(f,w,f,g,m),h.arcTo(f,g,p,g,m),h.closePath(),h.fill(),t>0){let[y,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*t*i,_.shadowOffsetX=s,_.drawImage(u,-s,0),c=y.toDataURL())}else c=u.toDataURL()}return c&&Vo.set(n,c),c}function wi(r){(r.closest?.(".clouds-container")??r).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()})}function yc(r){return Math.min(1,Math.max(.5,r/160))||1}function jo(r,e,t,i,n){let a=i.offsetWidth,o=i.offsetHeight,s=mc,l=He(e.windSpeed),d=[],c=t||e.cloudCount,u=yc(o);return s.forEach((h,f)=>{let g=Math.ceil(f===0||f===1?c*.4:c*.6);for(let m=1;m<=g;m++){let p=document.createElement("div");p.className=`cloud-gsap cloud-gsap-${h.name}-${m}`;let w=e.cloudBaseSize*h.scale,y=1+(m-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*u,b=pc(_);p.style.position="absolute",p.style.opacity=h.opacity.toString(),p.dataset.awcO=String(h.opacity),p.style.zIndex=(10+f).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][f],S=n?.color_palette==="theme"?0:h.blur,C=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(X=>({x:X.x,y:X.y,width:X.size,height:X.size}))],T=Math.min(3,Math.max(1,window.devicePixelRatio||1)),A=C.map(X=>gc(X.width,X.height,S,T)),x=A.every(Boolean),E=x?Ko(S):0;if(p.style.width=b.width+"px",p.style.height=b.height+"px",x)p.classList.add("cloud-masked"),C.forEach((X,J)=>{let it=document.createElement("div");it.style.position="absolute",it.style.left=X.x-E+"px",it.style.top=X.y-E+"px",it.style.width=X.width+2*E+"px",it.style.height=X.height+2*E+"px",it.style.background=v;for(let Kt of["-webkit-",""])it.style.setProperty(`${Kt}mask-image`,`url("${A[J]}")`),it.style.setProperty(`${Kt}mask-size`,"100% 100%"),it.style.setProperty(`${Kt}mask-repeat`,"no-repeat");p.appendChild(it)});else{p.style.borderRadius="50px",p.style.background=v,S>0&&(p.style.filter=`blur(${S}px)`);for(let X of b.puffs){let J=document.createElement("div");J.style.position="absolute",J.style.left=X.x+"px",J.style.top=X.y+"px",J.style.width=X.size+"px",J.style.height=X.size+"px",J.style.borderRadius="50px",J.style.background=v,p.appendChild(J)}}let P=b.width+2*E,q=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][f][m-1]||15+f*10)/60,W=b.height+Math.max(E,Math.ceil(S*3))+2,F=Number(i.dataset?.cloudBand),et=Number.isFinite(F)&&i.dataset?.cloudBand!==void 0?F:null,bt=Math.max(150+f*50,P+fc),dt=h.speed*l*(.9+Math.random()*.2),Ot=(a+2*bt)/dt,$=document.createElement("div");$.className="cloud-track",$.dataset.awcF=String(q),$.dataset.awcB=String(W),$.appendChild(p),window.AnimatedWeatherCardGsap.set(p,{opacity:h.opacity});let $t=[$];if(n?.color_palette==="theme"){let X=r.parentElement?.querySelector(".clouds-occluders")??r.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),J=p.cloneNode(!0);J.className="cloud-occluder",J.style.opacity="1";for(let Kt of[J,...Array.from(J.querySelectorAll("div"))])Kt.style.background&&(Kt.style.background="var(--awc-card-bg)");let it=$.cloneNode(!1);it.appendChild(J),X?.appendChild(it),$t.push(it)}let mt=$t.length>1?$t:$;window.AnimatedWeatherCardGsap.set(mt,{xPercent:0,x:-bt,y:Bo(q,W,et,o)}),r.appendChild($);let xt=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});xt.fromTo(mt,{xPercent:0,x:-bt},{xPercent:100,x:bt,duration:Ot,ease:"none"}),xt.progress(Math.random()),d.push(xt)}}),d}function Xo(r){let e=r.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function Zo(r,e,t,i,n){let a=document.createElement("div");a.className=`fog-layer fog-layer-${t}`;let o=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[t]||l[2],c=n.custom_colors?.fog_color,u=(n.color_palette||"default")!=="theme"?pi(c)?c:"#e0e0e0":"var(--secondary-text-color)",h=3+Math.floor(Math.random()*3),f=o*d.scale;a.style.cssText=`
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
    `;for(let S=0;S<h;S++){let C=document.createElement("div"),T=f/h*(2+Math.random()*1.2),A=d.height*(1.2+Math.random()*1.6),x=f/h*S-T*.3,E=(Math.random()-.5)*(d.height*.5);C.style.cssText=`
            position: absolute;
            left: ${x}px;
            top: ${E}px;
            width: ${T}px;
            height: ${A}px;
            background: radial-gradient(ellipse ${T/2}px ${A/2}px at center, 
                ${u} 0%, 
                ${u} 40%, 
                transparent 70%);
            border-radius: ${T/2}px ${A/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,a.appendChild(C)}r.appendChild(a);let g=e.windSpeed*(.5+Math.random()*.5),m=15/d.speed,p=Math.max(8,m/g),w=o*d.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(a,{x:y,opacity:d.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});b.to(a,{x:_,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(a,{x:y})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(a,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function hn(r){r.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var wc=3,_c=2,Qo=[900,1400],Jo=[1800,2600],mn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=a,this.windConfig={leafCount:3,swooshEnabled:!0,...i},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=K(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(wc*i.leafCount));if(this.leaves.size<n){let a=Uo(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(a),this.addParticle(a)}this.scheduleLeaf(D(Qo[0],Qo[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=K(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<_c){let n=Yo(this.layer(),i,1,this.card(),this.cardConfig,a=>this.forget(a,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(D(Jo[0],Jo[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),an(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){rn(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var _i=[6e3,18e3],vc=[1500,6e3],ts=.16,fn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=a,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:_i[0],maxInterval:_i[1],...i},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=vc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,a=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(n-60),c=20*o,u=20,h=[d+",0"];for(let p=0;p<u;p++){let w=d+(Math.random()*c-c/2),y=a/u*(p+1);h.push(w+","+y)}l.setAttribute("d","M"+h.join(" L"));let f=this.element.timeOfDayManager,g=yi("lightning",f,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;m.to(i,{y:p,duration:.06,ease:"power2.out"},ts).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},ts+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(a=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(a.querySelector("path")),a.parentNode&&a.parentNode.removeChild(a)}),i.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var bc=["dawn","day","dusk","night"],ja=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],xc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},ns=(r,e,t)=>Math.min(e,Math.max(r,t)),oe=(r,e,t)=>r+(e-r)*t;function Sc(r,e,t){let i=(e-r+540)%360-180;return(r+i*t+360)%360}function Ut(r,e,t){let i=([m,p,w])=>[m,p*Math.cos(w*Math.PI/180),p*Math.sin(w*Math.PI/180)],[n,a,o]=i(r),[s,l,d]=i(e),c=oe(n,s,t),u=oe(a,l,t),h=oe(o,d,t),f=Math.hypot(u,h),g=f<1e-6?r[2]:(Math.atan2(h,u)*180/Math.PI+360)%360;return[c,f,g]}function Ya([r,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),a=e*Math.sin(i),o=(r+.3963377774*n+.2158037573*a)**3,s=(r-.1055613458*n-.0638541728*a)**3,l=(r-.0894841775*n-1.291485548*a)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var Cc=r=>r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055;function Dt(r){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=Ya(r);if(!e(t)){let i=0,n=r[1];for(let a=0;a<24;a++){let o=(i+n)/2;e(Ya([r[0],o,r[2]]))?i=o:n=o}t=Ya([r[0],i,r[2]])}return t.map(i=>Cc(ns(0,1,i)))}var as=r=>Math.round(ns(0,1,r)*255);function Yt(r){return"#"+r.map(e=>as(e).toString(16).padStart(2,"0")).join("")}function es(r,e){return`rgba(${r.map(as).join(", ")}, ${Number(e.toFixed(3))})`}function Ka(r,e){return[.15+(r[0]-.15)*.42,r[1]*oe(.75,.5,e),Sc(r[2],262,.45)]}function Tc(r,e){let t=xc[r],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:oe(.46,.28,t.overcast)};if(r==="clear-night"){if(e==="dawn"||e==="dusk"){let a=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:Ut(t.bottom,a,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:Ka(t.top,t.overcast),mid:Ka(t.mid,t.overcast),bottom:Ka(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:oe(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:Ut(t.top,[t.top[0]*.8,.075,292],.5*i),mid:Ut(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:Ut(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:Ut(t.glow,[.82,.13,58],i),glowAlpha:oe(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:Ut(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:Ut(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:Ut(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:Ut(t.glow,[.88,.09,40],i),glowAlpha:oe(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Ac(r){return[.16,Math.min(.04,r[1]*.6),r[2]]}function Re(r,e){let t=Tc(r,e);return{top:Yt(Dt(t.top)),mid:Yt(Dt(t.mid)),bottom:Yt(Dt(t.bottom)),glow:es(Dt(t.glow),t.glowAlpha),scrim:es(Dt(Ac(t.top)),t.scrimAlpha)}}var ze=[.985,.006,250],pn=.8,rs=.55,os=.4,gn={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},ss={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},ls={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},yn=312,ds=r=>r.clientWidth>=640&&r.clientHeight>=540;function We(r,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(r.rx)} ${t(r.ry)} at ${t(r.cx)} ${t(r.cy)}, ${e}, transparent ${t(r.fade)})`}function cs(){let r=[];for(let e of ja)for(let t of bc){let i=Re(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;r.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return r.join(`
`)}function wn(r,e,t){return r==null||!Number.isFinite(r)?t?"day":"night":r<-6?"night":r<6?e?"dawn":"dusk":"day"}var se=3.2,Ne="cubic-bezier(0.37, 0, 0.63, 1)",us={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},hs=Object.keys(us),Xa=hs.filter(r=>r.startsWith("--awc-sky-"));function ms(){return hs.map(r=>`${r} ${se}s ${Ne}`).join(`,
            `)}var is=!1;function _n(){if(is)return;is=!0;let r=globalThis.CSS;if(r?.registerProperty)for(let[e,t]of Object.entries(us))try{r.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Za=Array.from({length:25},(r,e)=>[e%5/2-1,Math.floor(e/5)/2-1]).filter(([r,e])=>r*r+e*e<=1),kc=1.9,Ec=.6,vn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=a,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");wi(t);let a=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(a=Math.max(1,Math.round(a*.6))),this.cloudTimelines=jo(t,i,a,n,this.cardConfig),this.startWindFactor=He(i.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${a} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let t=this.element.querySelector(this.layerSelector);t&&wi(t),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(t=!1){if(this.occlude()){this.lightSun(1,t);return}let i=this.element.querySelector(".sun-track .sun"),n=i?.getBoundingClientRect(),a=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!i||!n?.width||getComputedStyle(i).opacity==="0"){a.forEach(y=>this.dense(y,o(y),t));return}let s=n.width/2,l=n.left+s,d=n.top+n.height/2,c=this.element.querySelector(this.containerSelector),u=c?parseFloat(getComputedStyle(c).opacity):1,h=Number.isFinite(u)?u:1,f=a.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*Ec*h),g=a.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),m=(y,_,b)=>g[y].some(v=>{let S=Math.min(v.width,v.height)/2,C=_-Math.min(Math.max(_,v.left+S),v.right-S),T=b-Math.min(Math.max(b,v.top+S),v.bottom-S);return C*C+T*T<=S*S}),p=0,w=a.map(()=>0);for(let[y,_]of Za)p+=a.reduce((b,v,S)=>m(S,l+y*s,d+_*s)?b*(1-f[S]):b,1),a.forEach((b,v)=>{m(v,l+y*s*1.25,d+_*s*1.25)&&(w[v]+=1/Za.length)});this.lightSun(p/Za.length,t),a.forEach((y,_)=>this.dense(y,o(y)*(1+(kc-1)*Math.min(1,w[_]*3)),t))}occlude(){let t=this.element.querySelector(".animated-weather-card");if(!t||this.cardConfig.color_palette!=="theme")return!1;let i=t.closest("ha-card"),n=i?getComputedStyle(i):null,a=!!n&&(n.backgroundImage||"none")==="none"&&!!n.backgroundColor&&!/rgba|\/|transparent/.test(n.backgroundColor);return a&&t.style.getPropertyValue("--awc-card-bg")!==n.backgroundColor&&t.style.setProperty("--awc-card-bg",n.backgroundColor),t.toggleAttribute("data-occlude",a),a}dense(t,i,n){let a=(Math.round(Math.min(.95,i)*100)/100).toString();t.dataset.awcV!==a&&(t.dataset.awcV=a,n?window.AnimatedWeatherCardGsap?.set(t,{opacity:a}):window.AnimatedWeatherCardGsap?.to(t,{opacity:a,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(t,i=!1){let n=this.element.querySelector(".sun-track"),a=Math.round(t*100)/100;!n||a===this.sunLit&&!i||(this.sunLit=a,i?window.AnimatedWeatherCardGsap?.set(n,{opacity:a}):window.AnimatedWeatherCardGsap?.to(n,{opacity:a,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=K(this.cardConfig,this.realWindSpeed),i=He(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:se,ease:"sine.inOut",overwrite:!0})})}};var bn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=a,this.fogConfig={layerCount:3,...i},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");hn(n),this.fogTimelines=[];for(let a=0;a<this.fogConfig.layerCount;a++){let o=Zo(t,i,a,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}};var Mc=5,fs=353,Pc=1440,Lc=1/2,Dc=.25,Oc=.2,Fc=2,Hc=2;function Qa(r,e){let t=e>0?Math.min(e,Pc):fs;return Math.max(15,Math.round(r*Mc*Math.max(1,t/fs)))}var ps=20,gs=10,Rc=12,ys=(r,e)=>r.right>e.left-ps&&r.left<e.right+ps&&r.bottom>e.top-gs&&r.top<e.bottom+gs;function vi(r){let e=[],t=document.createRange();if(typeof t.getClientRects!="function")return e;let i=".animation-layer, .animation-container, style, script",n=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);for(let a=n.nextNode();a;a=n.nextNode())if(!(!a.nodeValue?.trim()||a.parentElement?.closest(i))){t.selectNodeContents(a);for(let o of Array.from(t.getClientRects()))o.width&&o.height&&e.push(o)}for(let a of Array.from(r.querySelectorAll("svg, ha-icon"))){if(a.closest(i))continue;let o=a.getBoundingClientRect();o.width&&o.height&&e.push(o)}return e}function zc(r,e){for(let t of r){let i=t.getBoundingClientRect();t.classList.toggle("awc-veiled",!!i.width&&e.some(n=>ys(i,n)))}}function ws(r){let e=r.querySelectorAll(".stars-field .star-gsap");if(!e.length)return;let t=r.querySelector(".moon-gsap")?.getBoundingClientRect();zc(e,t?.width?[...vi(r),t]:vi(r))}function Ja(r,e,{moon:t,still:i=!1,words:n=[]}){let a=document.createElement("div");a.className="stars-field";let o=t?document.createElement("div"):null;if(o){o.className="moon-gsap",r.appendChild(o);let d=o.getBoundingClientRect();d.width&&d.height&&(n=[...n,d])}let s=r.getBoundingClientRect(),l=n.length>0&&s.width>0&&s.height>0;for(let d=0;d<e;d++){let c=document.createElement("div");c.className="star-gsap";let u=1+Math.random()*3,h=.3+Math.random()*.5,f=0,g=0,m=!1;for(let p=0;p<(l?Rc:1)&&!m;p++){f=Math.random()*100,g=Math.random()*70;let w=s.left+f/100*s.width,y=s.top+g/100*s.height;m=!l||!n.some(_=>ys({left:w,top:y,right:w+u,bottom:y+u},_))}if(m||c.classList.add("awc-veiled"),c.style.cssText=`
            width: ${u.toFixed(2)}px;
            height: ${u.toFixed(2)}px;
            left: ${f.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${h.toFixed(2)};
        `,!i&&Math.random()<Lc){let p=Fc+Math.random()*Hc;c.classList.add("twinkle"),c.style.setProperty("--star-o",h.toFixed(2)),c.style.setProperty("--star-dim",(h*(Dc+Math.random()*Oc)).toFixed(2)),c.style.animationDuration=`${p.toFixed(2)}s`,c.style.animationDelay=`${(-Math.random()*p).toFixed(2)}s`}a.appendChild(c)}return o?r.insertBefore(a,o):r.appendChild(a),o?[a,o]:[a]}var xn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=a,this.starsConfig={starCount:30,showMoon:!0,...i},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=K(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");n?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let a=Qa(i.cloudCount,t.clientWidth||n?.clientWidth||0);for(let o of Ja(t,a,{moon:this.starsConfig.showMoon,words:n?vi(n):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${a} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var Sn=class extends Q{constructor(t,i,n,a){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var Cn=class{constructor(e,t,i,n){this.amounts=null;this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1,amounts:this.amounts},n=null;switch(e){case"rain":n=new ln(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new dn(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new un(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new mn(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new fn(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:_i[0],maxInterval:_i[1]},this.config,this.realWindSpeed);break;case"clouds":n=new vn(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new bn(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new xn(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new Sn(this.element,i,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}updateAmounts(e){if(JSON.stringify(e)!==JSON.stringify(this.amounts)){this.amounts=e;for(let[t,i]of this.activeAnimations)try{i.setAmounts(e)}catch(n){console.warn(`Failed to update amounts for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var $e=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.homeAmounts=null;this.hourAmounts=null;this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new Cn(e,t,n,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}setAmounts(e){this.homeAmounts=e,this.modularBridge.updateAmounts(this.hourAmounts??e)}showAmounts(e){this.hourAmounts=e,this.modularBridge.updateAmounts(e??this.homeAmounts)}get amounts(){return this.hourAmounts??this.homeAmounts}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??1,a=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,n);if(a!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1,t.intensity=1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Tn=new Map,tr=new Set;function er(r,e,t){let i=Tn.get(r);if(!e){i&&(Tn.delete(r),_s());return}let n={entity:e,sun:t||"sun.sun"};i&&i.entity===n.entity&&i.sun===n.sun||(Tn.set(r,n),_s())}function vs(r){if(r){for(let e of Tn.values())if(e.sun===r)return e.entity}}function bs(r){return tr.add(r),()=>{tr.delete(r)}}function _s(){for(let r of[...tr])r()}var An=r=>{if(r==null||r==="")return null;let e=typeof r=="number"?r:Number(r);return Number.isFinite(e)?e:null},le=r=>typeof r=="string"?r.trim():"";function Wc(r){if(!r||typeof r!="object")return null;let e=r,t=typeof e.id=="number"?String(e.id):le(e.id);return t?{id:t,label:le(e.flight_number)||le(e.callsign),aircraftCode:le(e.aircraft_code),originCity:le(e.airport_origin_city),originCode:le(e.airport_origin_code_iata),destinationCity:le(e.airport_destination_city),destinationCode:le(e.airport_destination_code_iata),altitudeFt:An(e.altitude),groundSpeedKt:An(e.ground_speed),heading:An(e.heading),verticalSpeed:An(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function ir(r,e){if(!r||!e)return null;let t=r.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let a of i){let o=Wc(a);o&&n.push(o)}return n}var kn=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(e,t=!1){if(!e)return[];let i=e.filter(s=>!s.onGround),n=new Set(i.map(s=>s.id));if(this.known===null)return this.known=n,t?i.filter((s,l)=>i.findIndex(d=>d.id===s.id)===l):[];let a=[],o=new Set;for(let s of i)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),a.push(s));return this.known=n,a}reset(){this.known=null}};var En=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=kt(),t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(g.find(m=>m.type==="hour")?.value||"0",10),i=parseInt(g.find(m=>m.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,a,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,u=(s+1)%24,h=(g,m,p)=>m<=p?g>=m&&g<p:g>=m||g<p;h(n,l,d)?a="dawn":h(n,d,c)?a="day":h(n,c,u)?a="dusk":a="night";let f={isDaytime:a==="day"||a==="dawn",isNighttime:a==="night"||a==="dusk",isDawn:a==="dawn",isDusk:a==="dusk",currentHour:t,timePhase:a};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Ho.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),a=t.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),d=parseInt(a.substring(0,2),16),c=parseInt(a.substring(2,4),16),u=parseInt(a.substring(4,6),16),h=Math.round(o*(1-i)+d*i),f=Math.round(s*(1-i)+c*i),g=Math.round(l*(1-i)+u*i),m=h.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${m}${p}${w}`}};var xs=r=>`
        ${r} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var xi={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},Nc=cs(),$c=Yt(Dt(ze)),Ie=r=>`${Math.round(r*100)}%`,Ic=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,qc=48,bi=.2,Gc={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Bc={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},Ss=()=>`
${xs("animated-weather-card")}
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
          --weather-text-color: ${$c};
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
            ${ms()};
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
        ${Nc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${We(gn,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,
            linear-gradient(180deg, transparent ${Ie(os)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Ie(rs)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${We(ss,"var(--awc-sky-glow)")}; }
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
          background-image: ${Ic};
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
        ${Object.entries(Gc).map(([r,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${r}"] .attribute-icon { color: ${e}; }`).join(`
        `)}
        ${Object.entries(Bc).map(([r,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${r}"] .attribute-icon { color: ${e}; }`).join(`
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
          --awc-sky-glow-layer: ${We(ls,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${qc}px;
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
          top: ${Ie(bi)};
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
          transition: opacity ${se/2}s ${Ne};
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
          transition: transform ${se}s ${Ne};
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
          top: ${Ie(bi)};
          top: min(${Ie(bi)}, ${+(bi*yn).toFixed(1)}px);
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
        .animated-weather-card[data-fw] .moon-gsap { top: ${Ie(bi)}; }
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

`;var nr={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",daylight_day:"{delta} siden i g\xE5r",daylight_week:"{delta} siden forrige uke",daylight_month:"{delta} siden forrige m\xE5ned",shift_earlier:"{delta} tidligere",shift_later:"{delta} senere",shift_day:"{shift} enn i g\xE5r",shift_week:"{shift} enn forrige uke",shift_month:"{shift} enn forrige m\xE5ned",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},Vc={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",daylight_day:"{delta} since yesterday",daylight_week:"{delta} since last week",daylight_month:"{delta} since last month",shift_earlier:"{delta} earlier",shift_later:"{delta} later",shift_day:"{shift} than yesterday",shift_week:"{shift} than last week",shift_month:"{shift} than last month",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",daylight_day:"{delta} seit gestern",daylight_week:"{delta} seit letzter Woche",daylight_month:"{delta} seit letztem Monat",shift_earlier:"{delta} fr\xFCher",shift_later:"{delta} sp\xE4ter",shift_day:"{shift} als gestern",shift_week:"{shift} als letzte Woche",shift_month:"{shift} als letzten Monat",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",daylight_day:"{delta} desde ayer",daylight_week:"{delta} desde la semana pasada",daylight_month:"{delta} desde el mes pasado",shift_earlier:"{delta} antes",shift_later:"{delta} despu\xE9s",shift_day:"{shift} que ayer",shift_week:"{shift} que la semana pasada",shift_month:"{shift} que el mes pasado",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",daylight_day:"{delta} depuis hier",daylight_week:"{delta} depuis la semaine derni\xE8re",daylight_month:"{delta} depuis le mois dernier",shift_earlier:"{delta} plus t\xF4t",shift_later:"{delta} plus tard",shift_day:"{shift} qu\u2019hier",shift_week:"{shift} que la semaine derni\xE8re",shift_month:"{shift} que le mois dernier",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",daylight_day:"{delta} da ieri",daylight_week:"{delta} dalla settimana scorsa",daylight_month:"{delta} dal mese scorso",shift_earlier:"{delta} prima",shift_later:"{delta} dopo",shift_day:"{shift} rispetto a ieri",shift_week:"{shift} rispetto alla settimana scorsa",shift_month:"{shift} rispetto al mese scorso",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",daylight_day:"{delta} sinds gisteren",daylight_week:"{delta} sinds vorige week",daylight_month:"{delta} sinds vorige maand",shift_earlier:"{delta} eerder",shift_later:"{delta} later",shift_day:"{shift} dan gisteren",shift_week:"{shift} dan vorige week",shift_month:"{shift} dan vorige maand",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",daylight_day:"{delta} od wczoraj",daylight_week:"{delta} od zesz\u0142ego tygodnia",daylight_month:"{delta} od zesz\u0142ego miesi\u0105ca",shift_earlier:"{delta} wcze\u015Bniej",shift_later:"{delta} p\xF3\u017Aniej",shift_day:"{shift} ni\u017C wczoraj",shift_week:"{shift} ni\u017C w zesz\u0142ym tygodniu",shift_month:"{shift} ni\u017C w zesz\u0142ym miesi\u0105cu",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",daylight_day:"{delta} desde ontem",daylight_week:"{delta} desde a semana passada",daylight_month:"{delta} desde o m\xEAs passado",shift_earlier:"{delta} mais cedo",shift_later:"{delta} mais tarde",shift_day:"{shift} do que ontem",shift_week:"{shift} do que na semana passada",shift_month:"{shift} do que no m\xEAs passado",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",daylight_day:"{delta} fa\u021B\u0103 de ieri",daylight_week:"{delta} fa\u021B\u0103 de s\u0103pt\u0103m\xE2na trecut\u0103",daylight_month:"{delta} fa\u021B\u0103 de luna trecut\u0103",shift_earlier:"cu {delta} mai devreme",shift_later:"cu {delta} mai t\xE2rziu",shift_day:"{shift} dec\xE2t ieri",shift_week:"{shift} dec\xE2t s\u0103pt\u0103m\xE2na trecut\u0103",shift_month:"{shift} dec\xE2t luna trecut\u0103",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:nr,no:nr,nn:nr,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",daylight_day:"{delta} \u0437 \u0443\u0447\u043E\u0440\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0434\u043D\u044F",daylight_week:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",daylight_month:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",shift_earlier:"\u043D\u0430 {delta} \u0440\u0430\u043D\u0456\u0448\u0435",shift_later:"\u043D\u0430 {delta} \u043F\u0456\u0437\u043D\u0456\u0448\u0435",shift_day:"{shift}, \u043D\u0456\u0436 \u0443\u0447\u043E\u0440\u0430",shift_week:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",shift_month:"{shift}, \u043D\u0456\u0436 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function qe(r){return r?.locale?.language||r?.language||"en"}function Ge(r){return`${qe(r)}|${r?.locale?.time_format??""}|${Si(r)??""}`}function Si(r){if(r?.locale?.time_zone!=="server")return;let e=r.config?.time_zone;if(e)try{return new Intl.DateTimeFormat("en",{timeZone:e}),e}catch{return}}function N(r,e,t={}){return Uc(Vc,r,e,t)}function Uc(r,e,t,i={}){let n=qe(e).toLowerCase();return(r[n]?.[t]??r[n.split("-")[0]]?.[t]??r.en[t]).replace(/\{(\w+)\}/g,(o,s)=>i[s]??"")}function Yc(r){let e=r?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?qe(r):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function Be(r,e){if(!r)return"--";let t=new Date(r);if(isNaN(t.getTime()))return"--";try{return Cs(e,{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Cs(r,e){let t=Yc(r),i={...e,timeZone:Si(r)};return t!==void 0&&(i.hourCycle=t?"h12":"h23"),new Intl.DateTimeFormat(r?qe(r):void 0,i)}function Ts(r,e){try{let t=Cs(e,{hour:"numeric",minute:"2-digit"}).formatToParts(r),i=t.filter(a=>a.type==="dayPeriod").map(a=>a.value).join("");return{time:t.filter(a=>a.type!=="dayPeriod").map(a=>a.value).join("").trim(),period:i}}catch{return{time:r.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Mn(r,e){try{let t=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Si(e)}).formatToParts(r),i=n=>Number(t.find(a=>a.type===n)?.value??0);return i("hour")+i("minute")/60+i("second")/3600}catch{return r.getHours()+r.getMinutes()/60+r.getSeconds()/3600}}function ar(r,e){let t=Math.round(Math.abs(r)*60),i=Math.floor(t/60),n=t%60,a=qe(e),o=Intl.DurationFormat;if(o&&e)try{return new o(a,{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return a.toLowerCase().split("-")[0]==="uk"?i>0?`${i}\xA0\u0433\u043E\u0434 ${n}\xA0\u0445\u0432`:`${n}\xA0\u0445\u0432`:i>0?`${i}h ${n}m`:`${n}m`}function Pn(r,e,t=!0){let i=Math.round(Math.abs(r)),n=t?i===0?"\xB1":r>0?"+":"\u2212":"",a=Math.floor(i/3600),o=Math.floor(i%3600/60),s=i%60,l=a?{hours:a,minutes:o}:o?{minutes:o,seconds:s}:{seconds:s};for(let f of Object.keys(l).slice(1))l[f]||delete l[f];let d=qe(e),c=Intl.DurationFormat;if(c&&e)try{let f=new c(d,i?{style:"narrow"}:{style:"narrow",secondsDisplay:"always"}).format(l);if(f)return n+f}catch{}let h=d.toLowerCase().split("-")[0]==="uk"?{hours:"\xA0\u0433\u043E\u0434",minutes:"\xA0\u0445\u0432",seconds:"\xA0\u0441"}:{hours:"h",minutes:"m",seconds:"s"};return n+Object.entries(l).map(([f,g])=>`${g}${h[f]}`).join(" ")}function rr(r,e){let t=Si(e);if(t)try{let i=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(r)),n=o=>Number(i.find(s=>s.type===o)?.value),a=Date.UTC(n("year"),n("month")-1,n("day"),n("hour"),n("minute"),n("second"));if(Number.isFinite(a))return a-Math.floor(r/1e3)*1e3}catch{}return-new Date(r).getTimezoneOffset()*6e4}function or(r,e){let t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();try{let o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric",timeZone:Si(e)}).formatToParts(r),s=l=>Number(o.find(d=>d.type===l)?.value);[s("year"),s("month"),s("day")].every(Number.isFinite)&&([t,i,n]=[s("year"),s("month"),s("day")])}catch{}let a=new Date(Date.UTC(t,i-1,0)).getUTCDate();return Math.round((Date.UTC(t,i-1,n)-Date.UTC(t,i-2,Math.min(n,a)))/864e5)}function Ln(r,e){let t=r.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(r)}var As=["humidity","wind","pressure","sun","uv","rain"],ks=["humidity","wind","pressure","sun"];function sr(r){let e=r.metrics,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t)return[...ks];let i=[];for(let n of t){let a=String(n).trim().toLowerCase();As.includes(a)&&!i.includes(a)&&i.push(a)}return i}var Dn=[3,6,8,11],Es=["low","moderate","high","very_high","extreme"];function Ci(r){let e=r.uv_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==4)return Dn;let i=t.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,a)=>isFinite(n)&&(a===0||n>i[a-1]))?i:Dn}function Ti(r,e=Dn){let t=Math.round(r),i=0;for(;i<4&&t>=e[i];)i++;return Es[i]}var Kc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function jc(r,e){try{let t=r.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Lt(Kc,e.state)||e.state}var lr=r=>{if(r==null||r==="")return null;let e=typeof r=="number"?r:parseFloat(String(r));return isFinite(e)?e:null};function dr(r,e){return(e.uv_entity?lr(r?.states[e.uv_entity]?.state):null)??lr(e.entity?r?.states[e.entity]?.attributes?.uv_index:void 0)}function Ms(r,e,t){if(t===null||!isFinite(t))return{text:"--",level:null};let i=Ti(t,Ci(e));return{text:`${ht(Math.max(0,Math.round(t)),r)} ${cr(r,i)}`,level:i}}function cr(r,e){return N(r,`uv_${e}`)}function ki(r,e,t){let i=/\bin\b|inch/i.test(e)?2:1;return`${ht(Math.max(0,r),t,i)} ${e}`.trim()}function ve(r,e,t){let i=e?r?.states[e]:void 0,n=lr(i?.state);return n===null?null:{value:n,unit:typeof i?.attributes?.unit_of_measurement=="string"?i.attributes.unit_of_measurement:t}}var On=(r,e)=>N(r,e?"rain_now":"rain_today"),Xc=180;function Ps(r,e){let t=e.note_entity?r?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),a=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!a)return null;let o=Date.parse(t.attributes?.generated_at);return{line:n||a,note:a||n,writtenAt:Number.isNaN(o)?null:o}}function Ls(r,e){let t=Number(e.note_max_age??Xc);return r.writtenAt===null||!(t>0)?null:r.writtenAt+t*6e4}function ur(r,e){return r?Qc(r,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var Zc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function Ai(r){let e=typeof r=="number"?r:typeof r=="string"?parseFloat(r):NaN;return isFinite(e)?(e%360+360)%360:typeof r=="string"?Zc[r.trim().toUpperCase()]??null:null}function Ve(r){return Number(r.temperature_decimals)===1?1:0}function Qc(r,e){if(!e.entity)throw new Error("Weather entity is required");let t=r.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let x=r.states[e.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?i=parseFloat(x.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=Ve(e),a=x=>ht(n?x:Math.round(x),r,n),o=i!=null&&!isNaN(i)?a(i):"--",s=jc(r,t),l=e.name||t.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?ht(Math.round(E),r)+"%":null},c="--";if(e.humidity_sensor_entity){let x=r.states[e.humidity_sensor_entity];c=x&&d(x.state)||d(t.attributes.humidity)||"--"}else c=d(t.attributes.humidity)||"--";let u="--",h=10,f=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(h=Wo(P,E||"km/h"),u=ht(Math.round(P),r)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?r.states[e.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(t.attributes.wind_speed,t.attributes.wind_speed_unit);let m=e.wind_direction_sensor_entity?r.states[e.wind_direction_sensor_entity]:void 0,p=Ai(m?.state)??Ai(t.attributes.wind_bearing),w=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return ht(P,r,O)+" "+E},y=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",b=null;if(e.pressure_sensor_entity){let x=r.states[e.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=w(x.state,E);P&&(_=P,b=y(x.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,E)||"--",b=y(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let x=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,x)||"--",b=y(t.attributes.pressure)}let v=null,S;if(e.feels_like_entity&&(S=r.states[e.feels_like_entity]?.state),S===void 0&&t.attributes.apparent_temperature!==void 0&&(S=t.attributes.apparent_temperature),S!==void 0){let x=typeof S=="number"?S:parseFloat(S);isFinite(x)&&(v=a(x)+"\xB0")}let C="--";if(e.indoor_temperature_entity){let x=r.states[e.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(C=a(parseFloat(x.state))+"\xB0")}let T="--";if(e.indoor_humidity_entity){let x=r.states[e.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(T=ht(Math.round(parseFloat(x.state)),r)+"%")}let A;if(e.sun_entity){let x=r.states[e.sun_entity];x&&(A={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:u,windSpeedValue:h,windBearing:p,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:C,indoorHumidity:T,uv:dr(r,e),sun:A}}var Jc=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],fr={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},hr=["uv_max","rain_event","rain_week","rain_month","rain_year"],tu=r=>r!=="sun"&&!Object.prototype.hasOwnProperty.call(fr,r);var Ds=r=>typeof r=="string"&&Jc.includes(r),Fn=r=>typeof r=="string"&&r.trim()?r.trim():void 0;function eu(r){if(typeof r=="string"){let l=r.trim().toLowerCase();return Ds(l)?{type:l,view:hr.includes(l)}:null}if(!r||typeof r!="object")return null;let e=r,t=typeof e.type=="string"?e.type.trim().toLowerCase():"";if(!Ds(t))return null;let i={type:t,view:e.view===!0||hr.includes(t)},n=Fn(e.entity);n&&(i.entity=n);let a=Fn(e.direction_entity);t==="wind"&&a&&(i.direction_entity=a);let o=Fn(e.rate_entity);t==="rain"&&o&&(i.rate_entity=o);let s=Fn(e.name);return s&&(i.name=s),i}function pr(r){let e=r.readings;if(Array.isArray(e))return e.map(eu).filter(a=>!!a);let t=[],i=a=>{let o=Object.fromEntries(Object.entries(a).filter(([,s])=>s!==void 0&&s!==""));t.push({...o,view:!!a.view||hr.includes(a.type)})},n=sr(r);for(let a of n){if(a==="sun"){r.show_sun!==!1&&i({type:"sun"});continue}a==="humidity"?i({type:"humidity",entity:r.humidity_sensor_entity}):a==="wind"?i({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity}):a==="pressure"?i({type:"pressure",entity:r.pressure_sensor_entity}):a==="uv"?i({type:"uv",entity:r.uv_entity}):a==="rain"&&i({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity})}!n.includes("wind")&&(r.wind_speed_sensor_entity||r.wind_direction_sensor_entity)&&i({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity,view:!0}),!n.includes("uv")&&r.uv_entity&&i({type:"uv",entity:r.uv_entity,view:!0}),!n.includes("rain")&&(r.rain_entity||r.rain_rate_entity)&&i({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity,view:!0}),r.uv_max_entity&&i({type:"uv_max",entity:r.uv_max_entity});for(let a of["rain_event","rain_week","rain_month","rain_year"]){let o=r[`${a}_entity`];o&&i({type:a,entity:o})}return t}var iu=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],Ei=r=>r?.entity&&!r.entity.startsWith("weather.")?r.entity:void 0;function Os(r){if(!Array.isArray(r.readings))return r;let e=pr(r),t=s=>e.find(l=>l.type===s),i={...r};for(let s of iu)delete i[s];let n=t("wind"),a=t("rain"),o={humidity_sensor_entity:Ei(t("humidity")),wind_speed_sensor_entity:Ei(n),wind_direction_sensor_entity:n?.direction_entity,pressure_sensor_entity:Ei(t("pressure")),uv_entity:Ei(t("uv")),uv_max_entity:t("uv_max")?.entity,rain_entity:Ei(a),rain_rate_entity:a?.rate_entity,rain_event_entity:t("rain_event")?.entity,rain_week_entity:t("rain_week")?.entity,rain_month_entity:t("rain_month")?.entity,rain_year_entity:t("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(i[s]=l);return i}var Fs=r=>r.map((e,t)=>({r:e,i:t})).filter(({r:e})=>!e.view&&!(tu(e.type)&&!e.entity)),Hs=r=>[...new Set(r.flatMap(e=>[e.entity,e.direction_entity,e.rate_entity]).filter(e=>!!e))];var mr=[51,101,151,201,301],nu=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function Rs(r){let e=r.aqi_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==5)return mr;let i=t.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,a)=>isFinite(n)&&(a===0||n>i[a-1]))?i:mr}function zs(r,e=mr){let t=Math.round(r),i=0;for(;i<5&&t>=e[i];)i++;return nu[i]}var gr=r=>{if(r==null||r==="")return null;let e=typeof r=="number"?r:parseFloat(String(r));return isFinite(e)?e:null},Ws=(r,e,t)=>{let i=t.entity?.startsWith("weather.")?t.entity:e.entity;return i?r?.states[i]:void 0},au=(r,e)=>e.entity&&!e.entity.startsWith("weather.")?r?.states[e.entity]:void 0;function Nt(r,e,t,i,n=""){let a=au(r,t),o=gr(a?.state);if(o!==null)return{value:o,unit:typeof a?.attributes?.unit_of_measurement=="string"?a.attributes.unit_of_measurement:n};let s=Lt(fr,t.type);if(!s)return{value:null,unit:""};let l=Ws(r,e,t),d=i?l?.attributes?.[i]:void 0;return{value:gr(l?.attributes?.[s]),unit:typeof d=="string"?d:n}}var Mi=(r,e)=>e?`${r} ${e}`:r,_t="--",Hn=(r,e,t)=>gi(r,`ui.card.weather.attributes.${e}`,N(r,t)),ru={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},ou=(r,e)=>N(r,`aqi_${e}`);function su(r,e){let t=e.sun_entity?r?.states[e.sun_entity]:void 0,i=t?.state==="above_horizon",n=t?Be(i?t.attributes?.next_setting:t.attributes?.next_rising,r):_t;return{label:N(r,i?"sunset":"sunrise"),icon:i?"sunset":"sunrise",html:Ln(n,"awc-ampm"),text:n}}function yr(r,e,t){let i=(o,s=0)=>ht(s?o:Math.round(o),r,s),n=o=>`${ht(Ve(e)?o:Math.round(o),r,Ve(e))}\xB0`,a=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(t.type){case"humidity":{let{value:o}=Nt(r,e,t);return a(gi(r,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?_t:`${i(o)}%`)}case"wind":{let{value:o,unit:s}=Nt(r,e,t,"wind_speed_unit","km/h"),l=t.direction_entity?r?.states[t.direction_entity]?.state:void 0,d=Ai(l)??Ai(Ws(r,e,t)?.attributes?.wind_bearing);return{...a(gi(r,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?_t:Mi(i(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=Nt(r,e,t,"pressure_unit","hPa"),l=s||"hPa";return{...a(gi(r,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?_t:Mi(i(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return su(r,e);case"uv":{let{value:o}=Nt(r,e,t),s=Ms(r,e,o);return{label:N(r,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=ve(r,t.rate_entity,"mm/h"),s=ve(r,t.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return a(On(r,l),"rain",d?ki(d.value,d.unit,r):_t)}case"aqi":{let{value:o}=Nt(r,e,t);if(o===null)return{label:N(r,"aqi"),icon:"aqi",html:_t,text:_t,level:null};let s=zs(o,Rs(e)),l=i(Math.max(0,o)),d=ou(r,s);return{label:N(r,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=Nt(r,e,t);return a(N(r,"feels_like"),"thermometer",o===null?_t:n(o))}case"dew_point":{let{value:o}=Nt(r,e,t);return a(Hn(r,"dew_point","dew_point"),"thermometer",o===null?_t:n(o))}case"visibility":{let{value:o,unit:s}=Nt(r,e,t,"visibility_unit","km");return a(Hn(r,"visibility","visibility"),"eye",o===null?_t:Mi(i(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=Nt(r,e,t);return a(Hn(r,"cloud_coverage","cloud_cover"),"cloud",o===null?_t:`${i(o)}%`)}case"gust":{let{value:o,unit:s}=Nt(r,e,t,"wind_speed_unit","km/h");return a(Hn(r,"wind_gust_speed","gusts"),"wind",o===null?_t:Mi(i(o),s||"km/h"))}case"sensor":{let o=t.entity?r?.states[t.entity]:void 0,s=t.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:t.entity??""),l=Lt(ru,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return a(s,l,_t);let d;try{d=r?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=gr(o.state),u=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Mi(ht(c,r,Math.min(2,(String(o.state).split(".")[1]??"").length)),u)}return a(s,l,d)}default:{let o=ve(r,t.entity,t.type==="uv_max"?"":"mm");return a(t.type,t.type==="uv_max"?"noon":"rain",o?t.type==="uv_max"?i(o.value):ki(o.value,o.unit,r):_t)}}}function wr(r){return r&&typeof r=="object"&&typeof r.action=="string"?r:void 0}function Rn(r,e){return{entity:e,tap_action:wr(r?.tap_action),hold_action:wr(r?.hold_action),double_tap_action:wr(r?.double_tap_action)}}function Ue(r){return!!r&&r.action!=="none"}function Ns(r){return r.tap_action?Ue(r.tap_action):!!r.entity}function Pi(r,e,t,i={}){let n=e[`${t}_action`],a=n&&Object.prototype.hasOwnProperty.call(i,n.action)?i[n.action]:void 0;if(a){a(t);return}if(t==="tap"&&!n){e.entity&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Ue(n)&&r.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function zn(r,e,t,i={}){if(r.dataset.actionsBound)return;r.dataset.actionsBound="1";let n=null,a=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{n=null,l()},c=()=>{Ue(t().double_tap_action)?s?(clearTimeout(s),s=void 0,Pi(e,t(),"double_tap",i)):s=setTimeout(()=>{s=void 0,Pi(e,t(),"tap",i)},250):Pi(e,t(),"tap",i)},u=h=>h.target!==r&&!!h.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');r.addEventListener("pointerdown",h=>{h.button!==0||u(h)||(n={x:h.clientX,y:h.clientY},a=!1,l(),Ue(t().hold_action)&&(o=setTimeout(()=>{o=void 0,a=!0,Pi(e,t(),"hold",i)},500)))}),r.addEventListener("pointermove",h=>{n&&Math.hypot(h.clientX-n.x,h.clientY-n.y)>10&&d()}),r.addEventListener("pointerup",()=>{let h=!!n&&!a;d(),h&&c()}),r.addEventListener("pointercancel",d),r.addEventListener("pointerleave",d),r.addEventListener("keydown",h=>{h.key!=="Enter"&&h.key!==" "||h.target!==r||!Ns(t())||(h.preventDefault(),Pi(e,t(),"tap",i))}),r.addEventListener("contextmenu",h=>{Ue(t().hold_action)&&h.preventDefault()})}function Li(r,e,t){Ns(e)?(r.setAttribute("role","button"),r.tabIndex=0,r.style.cursor="pointer"):(t?r.setAttribute("role",t):r.removeAttribute("role"),r.removeAttribute("tabindex"),r.style.cursor="");let i=Ue(e.hold_action);r.style.userSelect=i?"none":"",r.style.setProperty("-webkit-user-select",i?"none":""),r.style.setProperty("-webkit-touch-callout",i?"none":"")}var _r=new Map;function be(r,e){let t=_r.get(r);if(t)return t;let i=new Promise((n,a)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${r}$1.js`):`${r}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>e()?n():a(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>a(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return i.catch(()=>_r.delete(r)),_r.set(r,i),i}function Di(r){return be("animated-weather-card-editor",()=>!!customElements.get(r))}var $s={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function xe(r,e){return`<svg class="${e} awc-icon" data-icon="${r}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${$s[r]}"/></svg>`}function Is(r,e){!r||r.getAttribute("data-icon")===e||(r.setAttribute("data-icon",e),r.firstElementChild?.setAttribute("d",$s[e]))}var lu=29.530588853,du=Date.UTC(2e3,0,6,18,14),cu={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function qs(r,e){let i=((r.getTime()-du)/864e5/lu%1+1)%1,n=e?Lt(cu,e):void 0;if(!n)return i;let a=i*28;return a>=27.5&&(a-=28),a=Math.min(n[1],Math.max(n[0],a)),(a/28%1+1)%1}function Gs(r,e=!1){let t=Math.cos(2*Math.PI*r),i=(1-t)/2,n=r<.5!==e,a=i<.5,o=(Math.abs(t)*50).toFixed(1),s=n===a?1:0,l=n?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,u=.3+.7*i;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*u).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*u).toFixed(3)})`}}var j=Math.PI/180,Fi=6e4,vt=864e5;function vr(r){let e=(r/vt+24405875e-1-2451545)/36525,t=(280.46646+e*(36000.76983+e*3032e-7))%360,i=357.52911+e*(35999.05029-1537e-7*e),n=.016708634-e*(42037e-9+1267e-10*e),a=Math.sin(i*j)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*i*j)*(.019993-101e-6*e)+Math.sin(3*i*j)*289e-6,o=125.04-1934.136*e,s=t+a-.00569-.00478*Math.sin(o*j),l=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(o*j),d=Math.asin(Math.sin(l*j)*Math.sin(s*j)),c=Math.tan(l/2*j)**2,u=4/j*(c*Math.sin(2*t*j)-2*n*Math.sin(i*j)+4*n*c*Math.sin(i*j)*Math.cos(2*t*j)-.5*c*c*Math.sin(4*t*j)-1.25*n*n*Math.sin(2*i*j));return{declination:d,equationOfTime:u}}function Vs(r,e,t){let{declination:i,equationOfTime:n}=vr(r.getTime()),o=((r.getUTCHours()*60+r.getUTCMinutes()+r.getUTCSeconds()/60+r.getUTCMilliseconds()/6e4+n+4*t)%1440+1440)%1440/4-180,s=Math.sin(e*j)*Math.sin(i)+Math.cos(e*j)*Math.cos(i)*Math.cos(o*j);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/j}function Us(r,e){let t=r+(720-4*e)*Fi,{equationOfTime:i}=vr(t),n=r+(720-4*e-i)*Fi;return{noon:n,declination:vr(n).declination}}var uu=-.833;function Oi(r,e){let t=Math.floor(e/vt)*vt,i=NaN;for(let n=-1;n<=1;n++){let a=Us(t+n*vt,r).noon;Math.abs(a-e)>=Math.abs(i-e)||(i=a)}return i}function br(r,e,t){let i=l=>Vs(new Date(l),r,e)>uu,n=t-vt/2,a=t+vt/2,o=i(t);if(!o)return{up:o,start:n,end:a,rise:null,set:null};let s=(l,d)=>{for(let c=0;c<24;c++){let u=(l+d)/2;i(u)?d=u:l=u}return(l+d)/2};return{up:o,start:n,end:a,rise:i(n)?null:s(n,t),set:i(a)?null:s(a,t)}}function Bs(r,e,t){let i=br(r,e,Oi(e,t));return i.up?i.rise===null&&i.set===null?{minutes:1440,polar:!0}:{minutes:((i.set??i.end)-(i.rise??i.start))/Fi,polar:!1}:{minutes:0,polar:!0}}function Ys(r,e,t,i,n){let a=Oi(e,t),o=null,s=a;for(let d of[a-vt,a,a+vt]){let c=br(r,e,Oi(e,d))[i];c!==null&&(o===null||Math.abs(c-t)<Math.abs(o-t))&&(o=c,s=Oi(e,d))}if(o===null)return null;let l=br(r,e,Oi(e,s-n*vt))[i];return l===null?null:{now:o,then:l}}function Ks(r,e,t,i){let n=Bs(r,e,t);return n.polar?null:Math.round((n.minutes-Bs(r,e,t-i*vt).minutes)*60)}function js(r,e,t=kt()){let i=t.getTime(),n=Math.floor(i/vt)*vt,a={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=r*j;for(let m=-1;m<=2;m++){let{noon:p,declination:w}=Us(n+m*vt,e);a.noon.push(p),a.midnight.push(p+vt/2);for(let[y,_,b]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let v=(Math.sin(y*j)-Math.sin(o)*Math.sin(w))/(Math.cos(o)*Math.cos(w));if(!(Math.abs(v)<=1))continue;let S=Math.acos(v)/j*4;a[_].push(p-S*Fi),a[b].push(p+S*Fi)}}let s=m=>m.filter(p=>p>i).sort((p,w)=>p-w)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=Vs(t,r,e),c=s(a.rising),u=s(a.setting),h=s(a.noon),f=s(a.midnight);return{state:(u!==null&&c!==null?u<c:u!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(a.dawn)),next_dusk:l(s(a.dusk)),next_midnight:l(f),next_noon:l(h),next_rising:l(c),next_setting:l(u),elevation:Math.round(d*100)/100,rising:h!==null&&f!==null?h<f:!1}}}var Xs=r=>typeof r=="number"?r:typeof r=="string"&&r.trim()?Number(r):NaN;function hu(r){let e=r.latitude!==void 0&&r.latitude!==null&&r.latitude!=="",t=r.longitude!==void 0&&r.longitude!==null&&r.longitude!=="",i=typeof r.time_zone=="string"&&r.time_zone.trim()?r.time_zone.trim():void 0;if(!e&&!t&&!i)return null;let n,a;if(e||t){if(n=Xs(r.latitude),a=Xs(r.longitude),!e||!t)throw new Error("latitude and longitude go together: set both, or neither");if(!(n>=-90&&n<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${r.latitude})`);if(!(a>=-180&&a<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${r.longitude})`)}if(i)try{new Intl.DateTimeFormat("en",{timeZone:i})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${i})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=n!==void 0&&a!==void 0?`sun.awc_${o(n)}_${o(a)}`:void 0;return{latitude:n,longitude:a,timeZone:i,sunId:s,key:`${s??""}|${i??""}`}}function mu(r,e,t,i=[]){let n=r;if(n.awcPlace===e.key)return r;let a=n.awcHome??r,o=Object.create(a);if(e.sunId&&t){let s=Object.create(a.states);s[e.sunId]=t;let l=t.state==="above_horizon"?"sunny":"clear-night";for(let d of i){let c=d?a.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...a.config,...e.latitude!==void 0?{latitude:e.latitude,longitude:e.longitude}:{},...e.timeZone?{time_zone:e.timeZone}:{}},e.timeZone&&(o.locale={...a.locale??{},time_zone:"server"}),o.awcPlace=e.key,o.awcHome=a,o}function fu(r,e=kt()){if(!r.sunId||r.latitude===void 0||r.longitude===void 0)return;let t=js(r.latitude,r.longitude,e),i=e.toISOString();return{entity_id:r.sunId,state:t.state,attributes:{...t.attributes,friendly_name:"Sun"},last_changed:i,last_updated:i,context:{id:"",parent_id:null,user_id:null}}}var Ye=class{constructor(e=()=>[]){this.weather=e;this.place=null;this.timer=0}set(e){let t=hu(e),i=(t?.key??"")!==(this.place?.key??"");return this.place=t,i&&(this.sun=void 0),i}see(e){if(!this.place)return e;let t=Math.floor(mi()/6e4);if(this.place.sunId&&this.sun?.minute!==t){let i=fu(this.place);this.sun=i?{minute:t,entity:i}:void 0}return mu(e,this.place,this.sun?.entity,this.weather())}tick(e){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(e,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var Zs=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function Qs(r){let e=r.color_palette||"default",t=r.custom_colors||{},i="";if(e!=="theme"){let a=c=>{if(typeof c!="string"||!Zs.test(c))return null;let u=c.replace("#","");u.length===3&&(u=u[0]+u[0]+u[1]+u[1]+u[2]+u[2]);let h=parseInt(u,16);return{r:h>>16&255,g:h>>8&255,b:h&255}},o=(c,u,h)=>"#"+(c<<16|u<<8|h).toString(16).padStart(6,"0"),s=(c,u)=>{let h=a(c);if(!h)return c;let f=1-u/100;return o(Math.max(0,Math.floor(h.r*f)),Math.max(0,Math.floor(h.g*f)),Math.max(0,Math.floor(h.b*f)))},l=(c,u)=>{let h=a(c);if(!h)return c;let f=u/100;return o(Math.min(255,Math.floor(h.r+(255-h.r)*f)),Math.min(255,Math.floor(h.g+(255-h.g)*f)),Math.min(255,Math.floor(h.b+(255-h.b)*f)))},d=(c,u)=>{let h=t[c];if(!h||typeof h!="string"||!Zs.test(h))return;let f=l(h,12),g=s(h,22);i+=`--weather-${u}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${h} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let n=(a,o)=>{a&&pi(a)&&(i+=o.replace(/\$\{value\}/g,a))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.temperature_color,"--awc-hero-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var Ke="animated-weather-card-hour";var je="animated-weather-card-dev",Js="weather.awc_dev";function Hi(r){return r.awcDevBase??r}function Nn(r,e){let t=Hi(r),i=window.AnimatedWeatherCardDev;if(!i||!e)return t;try{return i.wants(e)?i.lens(t,e):t}catch(n){return console.warn("Animated Weather Card: the dev card's world failed",n),t}}function Ri(r){if(!r)return!1;let e=window.AnimatedWeatherCardDev;if(!e)return!!r.dev_mode;try{return e.wants(r)}catch{return!!r.dev_mode}}function $n(){return window.AnimatedWeatherCardDev?.offset??0}function Xe(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function zi(){return window.AnimatedWeatherCardDevCards?Promise.resolve():be("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Wn=class extends HTMLElement{setConfig(e){this.devCardConfig={...e},this.view?.update()}set hass(e){this.devCardHass=e,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}zi().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(e=>{console.warn(`Animated Weather Card: ${e.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var tl={horizon:196,peak:34,trough:276,twilightRy:78},el={horizon:200,peak:96,trough:262,twilightRy:44};function xr(r,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(r>=e&&r<=t)return Math.sin(Math.PI*(r-e)/i);let n=((r-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var Sr=(r,e=!1)=>e?1-r/24:r/24,Se=(r,e=!1)=>Sr(r,e)*1e3,Cr=(r,e)=>r>=0?e.horizon-r*(e.horizon-e.peak):e.horizon-r*(e.trough-e.horizon);var al={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},pu={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function gu(r){return Lt(pu,r)??"last-light"}function Tr(r,e){let t=n=>n.startsWith("sensor.")&&Lt(al,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:r,moon_entity:i}:{sun_entity:r}}var yu=124,il=16;function wu(r,e){if(r<1)return 1;let t=Math.max(2,Math.floor((e+il)/(yu+il))),i=Math.ceil(r/t);return Math.ceil(r/i)}function _u(r,e,t){if(e==="none")return null;let i=r?.config?.latitude,n=r?.config?.longitude;if(typeof i!="number"||typeof n!="number"||!Number.isFinite(i)||!Number.isFinite(n))return null;let a=e==="week"||e==="month"?e:"day",o=a==="week"?7:a==="month"?or(t,r):1,s=t.getTime()+(12-Mn(t,r))*36e5,l=Ks(i,n,s,o);if(l===null)return null;let d="\0",[c="",u=""]=N(r,a==="week"?"daylight_week":a==="month"?"daylight_month":"daylight_day",{delta:d}).split(d);return{before:c,figure:Pn(l,r),after:u}}function vu(r,e,t,i){if(e==="none"||!i)return null;let n=r?.config?.latitude,a=r?.config?.longitude;if(typeof n!="number"||typeof a!="number"||!Number.isFinite(n)||!Number.isFinite(a))return null;let o=Date.parse(i);if(!Number.isFinite(o))return null;let s=e==="week"?7:e==="month"?or(new Date(o),r):1,l=Ys(n,a,o,t,s);if(!l)return null;let d=l.now-l.then-s*864e5+rr(l.now,r)-rr(l.then,r),c=Math.round(d/1e3);return c===0?null:c}function bu(r,e,t,i){let n=[];for(let a=0;a<=240;a++){let o=a/10;n.push(`${Se(o,i).toFixed(1)},${Cr(xr(o,r,e),t).toFixed(1)}`)}return"M"+n.join(" L")}function qn(r,e){if(!r)return 0;let t=new Date(r);return isNaN(t.getTime())?0:Mn(t,e)}var xu=r=>Ln(r,"st-ampm");_n();var nl=Yt(Dt(ze)),Su=`
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
        --st-text: ${nl};
        --st-secondary: ${nl};
        --st-secondary-opacity: ${pn};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${We(gn,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Xa.map(r=>`${r} ${se}s ${Ne}`).join(", ")};
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
`,Ar=class extends HTMLElement{constructor(){super();this.config={};this._place=new Ye(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=t=>this._follow(t.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",Ri(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let t=$n();t!==this._devClock&&(this._devClock=t,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(t){return this._place.see(Nn(t,this.config))}setConfig(t){let i=this._place.set(t),n=this._place.place?.sunId;if(!t.sun_entity&&!n&&!t.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let a=!!this.config.dev_mode!=!!t.dev_mode;this.config={...t,sun_entity:n||t.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",Ri(this.config)),t.dev_mode&&zi().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(i||a)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(t){this._homeHass=Hi(t),t=this._see(t);let i=this.config.sun_entity||"",n=this.config.moon_entity||"",a=this._hass?.states[i],o=t.states[i],s=this._hass?.states[n]?.state,l=t.states[n]?.state,d=Ge(this._hass)!==Ge(t),c=this._weatherId()||"",u=c&&this._hass?.states[c]?.state!==t.states[c]?.state;this._hass=t;let h=a?.attributes?.elevation,f=o?.attributes?.elevation;(!a||a.state!==o?.state||a.attributes?.next_rising!==o?.attributes?.next_rising||a.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((h||0)-(f||0))>=.5||n&&s!==l||d||u)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Ke,this._onHour),window.addEventListener(je,this._onDev),Xe().add(this),this._unshare||(this._unshare=bs(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Ke,this._onHour),window.removeEventListener(je,this._onDev),Xe().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics"),n=t.querySelector(".st-delta");for(let a of["regular","compact","short","tight"]){if(t.dataset.fit=a,this._fitShift(t),i){let o=Array.from(i.children).filter(s=>getComputedStyle(s).display!=="none").length;i.style.setProperty("--st-cols",String(wu(o,i.clientWidth)))}if(n?.parentElement){let o=n.parentElement,s=()=>o.scrollWidth>o.clientWidth+.5;n.hidden=!1,delete n.dataset.words,s()&&(n.dataset.words="off"),s()&&(n.hidden=!0)}if(t.scrollHeight<=t.clientHeight+1)return}}_shiftHtml(t,i){let n=this.config.daylight_delta,a=N(i,t<0?"shift_earlier":"shift_later",{delta:Pn(t,i,!1)}),o="\0",s=N(i,n==="week"?"shift_week":n==="month"?"shift_month":"shift_day",{shift:o}),[l="",d=""]=s.split(o),c=u=>u?`<span class="st-shift-period">${M(u)}</span>`:"";return`<span class="st-shift" title="${M(l+a+d)}"><span class="st-shift-sep" aria-hidden="true"> \xB7 </span>${c(l)}<span class="st-shift-words">${M(a)}</span>${c(d)}<span class="st-shift-sign" aria-hidden="true">${M(Pn(t,i))}</span></span>`}_fitShift(t){let i=t.querySelector(".st-shift"),n=i?.parentElement;if(!i||!n||(i.hidden=!1,getComputedStyle(n).display==="none"))return;let a=n.clientWidth;t.classList.contains("compact")&&(i.hidden=!0,a=(t.querySelector(".st-hero")?.getBoundingClientRect().width??n.clientWidth)+Math.min(40,.08*t.clientWidth),i.hidden=!1);for(let o of["words","sign"])if(i.dataset.form=o,n.scrollWidth<=a+.5)return;i.hidden=!0}_actions(){let t=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return Rn(this.config,t)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||vs(this.config.sun_entity)}_skyCondition(t){let i=this._weatherId(),n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let a=on(n,void 0,void 0,this._hass?.config?.time_zone,{night:t==="night"});if(ja.includes(a))return a}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await Di("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let a=[...i,...n,...Object.keys(t?.states??{})];return Tr(a.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Lt(al,i)||i.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),icon:gu(i)}}_render(){this._drawnWeather=this._weatherId();let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let a=kt(),o=Mn(a,this._hass),s=qn(t.sunrise,this._hass),l=qn(t.sunset,this._hass),d=t.dawn?qn(t.dawn,this._hass):Math.max(0,s-.5),c=t.dusk?qn(t.dusk,this._hass):Math.min(24,l+.5),u=l-s,h=t.aboveHorizon,f=h?t.sunset:t.sunrise,g=new Date(f).getTime()-a.getTime(),m=this._hass,p=Ft=>M(N(m,Ft)),w=Ft=>xu(Be(Ft,m)),y=g>0?N(m,"in_duration",{duration:ar(g/36e5,m)}):"",_=y&&this.config.show_header!==!1?vu(m,this.config.daylight_delta,h?"set":"rise",f):null,b=_===null?"":this._shiftHtml(_,m),v=wn(t.elevation,t.rising,t.aboveHorizon),S=Re(this._skyCondition(v),v),C=n?{"--awc-sky-top":S.top,"--awc-sky-mid":S.mid,"--awc-sky-bottom":S.bottom,"--awc-sky-glow":S.glow,"--awc-sky-scrim":S.scrim}:null,T=this.config.compact?el:tl,A=this.config.direction,x=A==="right_to_left"||A!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:x};let E=bu(s,l,T,x),P=`${E} L${Se(24,x)},${T.horizon} L${Se(0,x)},${T.horizon} Z`,O=xr(o,s,l),z=Sr(o,x)*100,q=Cr(O,T)/300*100,W=(Ft,Vn)=>{let Ni=Math.max(70,Math.abs(Vn)/24*1e3*2.4);return`<ellipse cx="${Se(Ft,x).toFixed(1)}" cy="${T.horizon}" rx="${Ni.toFixed(1)}" ry="${T.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},F=!!this.config.compact,et=this.config.show_header!==!1,bt=et?`
            <div class="st-hero">
                ${this.config.title&&!F?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${xe(h?"sunset":"sunrise","st-glyph")}
                    <span>${p(h?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(f)}</div>
                ${y?`<div class="st-countdown">${M(y)}${b}</div>`:""}
            </div>`:this.config.title&&!F?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",dt=(Ft,Vn,Ni,cl,ul=!1)=>`
                <div class="st-metric" data-kind="${M(Ft)}">
                    <div class="st-metric-label">${xe(Vn,"st-glyph")}<span title="${M(Ni)}">${M(Ni)}</span></div>
                    <div class="st-metric-value${ul?" wrap":""}">${cl}</div>
                </div>`,Ot=!F&&this.config.show_details!==!1,$=Ot?_u(m,this.config.daylight_delta,a):null,$t=Ft=>Ft.trim()?`<span class="st-delta-words">${M(Ft)}</span>`:"",mt=$?`<span class="st-delta" title="${M($.before+$.figure+$.after)}">${$t($.before)}<span class="st-delta-figure">${M($.figure)}</span>${$t($.after)}</span>`:"",xt=F&&et?`
                        <div class="st-chart-note">${p(h?"sunrise":"sunset")}<span class="st-chart-note-time">${w(h?t.sunrise:t.sunset)}</span></div>`:"",X=Ot?`
            <div class="st-metrics">
                ${h?dt("sunrise","sunrise",p("sunrise"),w(t.sunrise)):dt("sunset","sunset",p("sunset"),w(t.sunset))}
                ${dt("noon","noon",p("solar_noon"),w(t.noon))}
                ${dt("daylight","daylight",p("daylight"),M(ar(u,m))+mt)}
                ${dt("first-light","first-light",p("first_light"),w(t.dawn))}
                ${dt("last-light","last-light",p("last_light"),w(t.dusk))}
                ${i?dt("moon",i.icon,p("moon"),M(i.phaseName),!0):""}
            </div>`:"",J=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,it="";try{it=J&&m?.formatEntityState?.(J)||""}catch{}let Kt=[`${N(m,"sunrise")} ${Be(t.sunrise,m)}`,`${N(m,"sunset")} ${Be(t.sunset,m)}`,it].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${bt}
                    <div class="st-chart" role="img" aria-label="${M(Kt)}">
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
                            <line x1="${Se(o,x).toFixed(1)}" y1="0" x2="${Se(o,x).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${E}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${E}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${O<0?"below":""}" style="left: ${z.toFixed(2)}%; top: ${q.toFixed(2)}%;"></div>${xt}
                    </div>
                    ${X}`,C)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${Su}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),zn(n.parentElement,this,()=>this._actions())),Li(n.parentElement,this._actions());let a=!!i;n.classList.toggle("sky",a),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",a);for(let o of Xa)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=t,this._link&&this._follow(),this._fit()}_follow(t){if(t){if(!t.source||t.sun!==this.config.sun_entity||t.at===null&&!this._link)return;if(this._link=t.at===null?null:t,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let i=this._shadow.querySelector(".st-card");i&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:i,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",Ar);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Tr(e,r)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Tr(e,r),compact:!0}}]:null});function Ze(r){let e=Number(r?.attributes?.supported_features);if(!isFinite(e))return["hourly","daily"];let t=[];return e&2&&t.push("hourly"),e&4&&t.push("twice_daily"),e&1&&t.push("daily"),t}function rl(r){let e=Ze(r);return e.includes("daily")?"daily":e.includes("twice_daily")?"twice_daily":null}var Cu=5e3;function Tu(){let r=new WeakMap;return{subscribe(e,t,i,n){let a=r.get(e);a||r.set(e,a=new Map);let o=`${t}|${i}`,s=a.get(o);if(!s){let d={listeners:new Set};s=d,a.set(o,d);let c=u=>{d.last=u;for(let h of[...d.listeners])h(u)};d.unsubscribe=e.subscribeMessage(u=>c({type:u?.type??i,forecast:Array.isArray(u?.forecast)?u.forecast:null}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:i}).catch(()=>{a.get(o)===d&&a.delete(o),c({type:i,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(n),l.last&&n(l.last),()=>{!l.listeners.delete(n)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(a.get(o)===l&&a.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},Cu))}}}}function Au(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=Tu())}function ol(r,e,t,i){return r?.connection?.subscribeMessage?Au().subscribe(r.connection,e,t,i):()=>{}}var Gn=class{constructor(e){this.changed=e;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(e,t,i){let n=t?e?.states[t]:void 0,a=Ze(n),o=i.hourly&&a.includes("hourly"),s=i.daily?rl(n):null,l=`${t}|${o}|${s}`;if(!e?.connection||!t||!n){this.key&&this.stop();return}if(l===this.key&&this.connection===e.connection)return;this.stop(),this.key=l,this.connection=e.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,u)=>{this.stops.push(ol(e,t,c,h=>{h.failed||u(h.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let e of this.stops)e();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};_n();var sl=r=>`Wind from ${Math.round(r)}\xB0`,ll=r=>r==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ku=18,Eu=450,Mu=1600;function Qe(r,e){return e?.states["sun.sun"]?{entity:r,sun_entity:"sun.sun"}:{entity:r}}var Pu=400,Lu=120,Du=220,Ou=24;window.AnimatedWeatherCardGsap=Wa;var dl=["regular","compact","short","tight","minimal"],Fu=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...dl.map(r=>[r,"none"])],Bn=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Ye(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new kn;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new Gn(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let t=$n();t!==this.devClock&&(this.devClock=t,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0))};this.devClock=0;this.onNeedle=t=>{let i=t.detail;this.following||this.forecastOn()||i?.at==null||i.source===this||i.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(t,i=[],n=[]){let a=[...i,...n,...Object.keys(t?.states??{})];return Qe(a.find(o=>o.startsWith("weather."))??Na.entity,t)}actionsConfig(){if(this.surface==="view")return{};let t=Rn(this.config,this.config?.entity);return t.tap_action?t:this.config?.layout==="nightstand"&&this.surface==="card"?{...t,tap_action:{action:"none"}}:this.forecastOn()?{...t,tap_action:{action:"forecast"}}:t}see(t){return this.placeView.see(Nn(t,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&Ri(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let t=this.isConnected&&this.surface!=="view";er(this,t?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let t=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:t!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let t=window.AnimatedWeatherCardForecast;if(!t){be("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}t.version===2&&(this.extras=t.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Re,phase:()=>this.currentSkyPhase(),current:()=>{let t=this.config?.outdoor_sensor_entity||this.config?.entity,i=Number(t?this.config?.outdoor_sensor_entity?this._hass?.states[t]?.state:this._hass?.states[t]?.attributes?.temperature:NaN);return isFinite(i)?i:void 0},temperature:t=>{let i=this.config?Ve(this.config):0;return ht(i?t:Math.round(t),this._hass,i).replace(/^-/,"\u2212")},conditionName:t=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:t,attributes:{},last_changed:"",last_updated:""})??t,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(t=>(t.type==="aqi"||t.type==="sensor")&&!!t.entity).map(t=>{let i=yr(this._hass,this.config,t);return{label:i.label,value:i.value??i.text,...i.word?{word:i.word}:{},...i.level?{level:i.level}:{}}}),reading:(t,i)=>{if(!this.config)return null;if(t==="rain_today"||t==="rain_now"){let o=t==="rain_now"?ve(this._hass,this.config.rain_rate_entity,"mm/h"):ve(this._hass,this.config.rain_entity,"mm");return!o||t==="rain_now"&&!(o.value>0)?null:{label:On(this._hass,t==="rain_now"),value:ki(o.value,o.unit,this._hass)}}if(t!=="uv")return null;let n=i??dr(this._hass,this.config);if(n===null||!isFinite(n))return null;let a=Ti(n,Ci(this.config));return{label:N(this._hass,"uv_index"),value:ht(Math.max(0,Math.round(n)),this._hass),word:cr(this._hass,a),level:a}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=u=>u===void 0||typeof u=="number"&&isFinite(u)&&u>=0&&u<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.placeView.set(t),a=this.placeView.place?.sunId;a&&(t={...t,sun_entity:a}),t=Os(t),t.layout==="nightstand"&&t.compact&&this.surface==="card"&&(t={...t,compact:!1});let o=pr(t),s=JSON.stringify(o)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(u=>this.config?.[u]!==t[u]);this.readingList=o;let l=!!this.config?.dev_mode!=!!t.dev_mode;t.dev_mode&&(t.entity||(t={...t,entity:Js}),zi().then(()=>this.devChanged()).catch(u=>console.warn(`Animated Weather Card: ${u.message}`)));let d=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==t.entity&&(this.following=!1),this.config=t,this.markDev(),s&&this.redrawRow(),(n||l)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&Li(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let u=this.animationController;this._animationGeneration++,this.animationController=new $e(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),u&&u.stopAllAnimations().catch(h=>k(this.config?.dev_mode,"Error stopping previous animation controller:",h))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!t.auto_pause!=!!d&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Ke,this.onNeedle),window.addEventListener(je,this.devChanged),this.surface!=="view"&&Xe().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new $e(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new $e(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;qa(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=ur(this.hass,this.config)}catch(w){let y=w?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${xe("alert","awc-empty-icon")}
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
            `;return}let{temperature:n,weatherCondition:a,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:u}=i,h=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let f=!!this.config.compact,g=this.heroClock(),m=Qs(this.config),p=this.rowHtml(h);this.innerHTML=`
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
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(a)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(a)}</div>`}
                ${f?`<div class="compact-meta">${this.config.show_clock&&!g?'<span class="awc-clock"></span>':""}${this.config.show_date?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,d))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(d,c,u)}</div>`}
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
        ${Ss()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(t,i){if(t)return"";let n=this.config?.show_location!==!1&&i?`<span class="awc-place">${M(i)}</span>`:"",a=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return n||a||o?`<div class="location">${a}${o}${n}</div>`:""}heroTime(){let{time:t,period:i}=Ts(kt(),this._hass);return i?`${M(t)}<span class="awc-ampm">${M(i)}</span>`:M(t.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let a=t.shadowRoot;if(!a)return;let o=a.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",a.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},Pu)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}be("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?Ps(this._hass,this.config):this.writtenNote,i=t?Ls(t,this.config):null;if(!t||i===null)return t;let n=i-mi();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),a=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),d=N(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!a||t.hidden?(l&&(l.textContent=d),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}a&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||a)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||a){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),t.hidden=!1,this.applySizeState(),a&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${N(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=M(N(this._hass,"indoors")),n=xe("indoor","indoor-icon");if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let a=`<span class="indoor-label">${i}</span>`;return t==="both"?n+a:a}heroMetaHtml(t,i,n){let a=[];t&&a.push(`<span class="feels-like">${M(N(this._hass,"feels_like"))} ${M(t)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&a.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),a.join("")}attachEventListeners(){this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(zn(t,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Li(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),an(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),rn(this),this.flyHeldPlanes())}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return K(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n||(this.clearAnimations(),!this.hass||!i.entity))return;let a=this.hass.states[i.entity];if(!a)return;let o=a.state.toLowerCase(),s=on(o,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone,{clock:!!i.enable_day_night_cycle,night:this.skyIsNight()}),l=(i.color_palette||"default")==="theme"?"theme-colors":"",d=n.classList.contains("loading"),c=(...h)=>{n.className=["animated-weather-card",s,...h,l,d?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),d&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},u=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||u||!this.weatherShown()){let h=s==="clear-night"&&this.surface!=="forecast";c(i.animate===!1?"static":"",h?"individual-stars-active":"");let f=n.querySelector(".animation-layer");h&&f&&Ja(f,Qa(K(i).cloudCount,n.clientWidth),{moon:!0,still:!0,words:vi(n)}),this.currentWeatherClass=s;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=s,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(s)),this.startPlanes()}},i.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),qa(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(wi(this),n.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(hn(i),Xo(i));let a=this.querySelector(".lightning");a&&(a.classList.remove("flash"),a.innerHTML=""),Ia(this.pendingTimeouts)}set hass(t){this.homeHass=Hi(t),t=this.see(t);let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!i){this.render(),this.initializeAnimations();return}if(Ge(i)!==Ge(t)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let n=i.states[this.config.entity],a=t.states[this.config.entity];if(!n||!a){this.render(),this.initializeAnimations();return}if(n.state!==a.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(n.attributes[d])!==s(a.attributes[d])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...Hs(this.readingList)];for(let c of d){if(!c)continue;let u=i.states[c],h=t.states[c];if(u?.state!==h?.state||u?.attributes?.unit_of_measurement!==h?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";i.states[d]!==t.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let t;try{t=ur(this._hass,this.config)}catch{return}let{temperature:i,weatherCondition:n,windSpeedValue:a,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=t;this.currentWindSpeedValue=a;let c=!!this.extras?.away(),u=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,h=u&&this.extras?.conditionText(u)||n,f=(w,y)=>{w&&w.textContent!==y&&(w.textContent=y)};c||(this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),h));let g=this.updatePressureTrend(o);c||this.updateRow(g);let m=this.querySelector(".compact-meta .awc-meta-text");m&&f(m,this.compactMeta(t.location,s)),f(this.querySelector(".location .awc-place"),t.location);let p=this.querySelector(".hero-meta");if(p){let w=this.heroMetaHtml(s,l,d),y=p.querySelector(".awc-line");Array.from(p.children).filter(b=>b!==y).map(b=>b.outerHTML).join("")!==w&&(p.innerHTML=w,y&&p.prepend(y))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(a)}rowItem(t,i,n,a){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?xe(n.icon,"attribute-icon"):""}${s?`<span>${M(n.label)}</span>`:""}</div>`:"",d=t.type==="wind"&&typeof n.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${n.bearing+180}deg);" aria-label="${sl(n.bearing)}"></ha-icon>`:t.type==="pressure"&&a?`<ha-icon class="pressure-trend ${a}" icon="${ll(a)}" aria-label="Pressure ${a}"></ha-icon>`:"",c=n.level?` data-level="${M(n.level)}"`:"";return`<div class="attribute" data-kind="${t.type}" data-i="${i}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${n.html}</span>${d}</div></div>`}shownReadings(){return this.config?Fs(this.readingList).map(({r:t,i})=>({r:t,i,v:yr(this._hass,this.config,t)})).filter(({r:t,v:i})=>t.type!=="sun"||i.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(t){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:n,i:a,v:o})=>this.rowItem(n,a,o,t)).join("")}</div>`}redrawRow(){let t=this.querySelector(".animated-weather-card .weather-info");if(!t||this.config?.compact)return;let i=t.querySelector(":scope > .weather-attributes"),n=this.rowHtml(this._pressureTrend??null).trim();if(i&&n){let a=document.createRange().createContextualFragment(n).firstElementChild;i.querySelectorAll(":scope > .attribute").forEach(o=>o.remove()),i.prepend(...Array.from(a.querySelectorAll(":scope > .attribute"))),i.classList.toggle("values-only",a.classList.contains("values-only"))}else if(i)i.remove();else if(n){let a=t.querySelector(":scope > .fc-section");a?a.insertAdjacentHTML("beforebegin",n):t.insertAdjacentHTML("beforeend",n)}this.applySizeState()}updateRow(t){let i=this.querySelector(".weather-attributes");if(!i||!this.config)return;let n=this.shownReadings();if([...i.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==n.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of n){let d=i.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let u=d.querySelector(".attribute-label > span");u&&u.textContent!==l.label&&(u.textContent=l.label),Is(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:sl(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",t?{icon:ll(t),label:`Pressure ${t}`,className:t}:null)}}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let a=t.querySelector(".attribute-value");if(!a)return;let o=a.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),a.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(h=>{let f=h.textContent??"",g=document.createElement("span");g.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=f,h.replaceChildren(g,m),{span:h,text:f,typed:g,rest:m}}),n=Math.max(0,...i.map(h=>h.text.length)),a=Math.min(Mu,Math.max(Eu,n*ku)),o=window.requestAnimationFrame?.bind(window)??(h=>window.setTimeout(()=>h(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:i.map(h=>h.text).join(""),finish:()=>{s(d);for(let h of i)h.span.textContent=h.text;this.noteTyping===c&&(this.noteTyping=void 0)}},u=()=>{let h=Math.min(1,(Date.now()-l)/a);for(let f of i){let g=Math.round(h*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}h<1?d=o(u):c.finish()};this.noteTyping=c,d=o(u)}fadeThrough(t,i,n){if(!t)return;let a=this.heroTextPending.get(t);if((a??t.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),a!==void 0)return;let s=()=>{let d=this.heroTextPending.get(t);this.heroTextPending.delete(t),d!==void 0&&(t.textContent=d),n?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:Lu,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Du,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){be("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=i,i.start().then(()=>{if(this.animationsPaused)i.pause();else if(this.planes===i){this.flyHeldPlanes();let n=this.askedPlanes;this.askedPlanes=void 0,n&&this.flyPlanes(n)}}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=!this.flightTracker.seeded,n=!!this.config.planes_on_load&&this.surface!=="view",a=this.flightTracker.update(ir(this._hass,this.config.flights_entity),n);a.length&&(i&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(a.map(o=>o.id)):this.flyPlanes(a))}flyHeldPlanes(){let t=this.heldPlanes;if(!t||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let i=(ir(this._hass,this.config?.flights_entity)??[]).filter(n=>!n.onGround&&t.has(n.id));i.length&&this.flyPlanes(i)}flyOver(t){let i=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||i)){if(this.planes){this.flyPlanes(t);return}this.devPlanes=!0,this.askedPlanes=t,this.startPlanes()}}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),er(this),window.removeEventListener(Ke,this.onNeedle),window.removeEventListener(je,this.devChanged),Xe().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Ia(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new En({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return wn(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i),this.applyMoon(t)}applyMoon(t){let i=t.querySelector(".animation-layer");if(!i)return;let n=this.config?.moon_entity,a=qs(kt(),n?this._hass?.states[n]?.state:void 0),o=(this.latitude()??0)<0,s=`${a.toFixed(3)}${o?"s":"n"}`;if(i.dataset.moon===s)return;i.dataset.moon=s;let l=Gs(a,o);i.style.setProperty("--awc-moon-mask",l.mask),i.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let t=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(t)?t:void 0}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;t.toggleAttribute("data-wall-frame",this.surface==="card"&&!!this.config?.show_forecast&&this.config?.layout!=="nightstand"&&ds(t)),cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>ws(t));let n=t.querySelector(".main-weather-info"),a=t.querySelector(".weather-attributes");if(t.dataset.height="regular",t.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),a){let m=t.dataset.metrics;t.dataset.metrics="row";let p=Array.from(a.children),w=parseFloat(getComputedStyle(a).columnGap)||0,y=p.reduce((v,S)=>v+S.getBoundingClientRect().width,0)+w*Math.max(0,p.length-1),_=a.clientWidth-y,b=_<-.5||m==="grid"&&_<Ou;t.dataset.metrics=b?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),d=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,u=!!l&&!l.hidden?Fu:dl.map(m=>[m,void 0]),h=([m,p])=>{t.dataset.height=m,p?t.dataset.note=p:delete t.dataset.note},f=this.extras,g=f?.levels()??[];if(!f||!g.length){for(let m of u)if(h(m),!d())break;f?.fitted();return}for(let m=0;m<g.length;m++){f.setLevel(g[m]);let p=m===g.length-1;for(let w of u){if(!p&&!["regular","close","compact"].includes(w[0]))break;if(h(w),!d()&&(p||f.levelOk(d))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let t=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(Ze(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+t:4+t}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let t=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return t?Math.ceil((t*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),this.config?.show_forecast&&(t+=3+this.dayRows()),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await Di("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Bn);var kr=class extends Bn{constructor(){super(),this.surface="forecast"}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(e)}gridRows(){if(this.config?.compact)return 2;let e=this.config?.show_hours!==!1&&Ze(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),t=Math.max(0,Math.min(10,this.config?.forecast_days??7));return e?t<=3?5:7:Math.max(3,Math.ceil((58+t*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(e,t=[],i=[]){let n=[...t,...i,...Object.keys(e?.states??{})];return Qe(n.find(a=>a.startsWith("weather."))??Na.entity,e)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await Di("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",kr);customElements.define("animated-weather-dev-card",Wn);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Qe(e,r)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Qe(e,r),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(r,e)=>e.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Qe(e,r)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Qe(e,r),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let r=Re("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Ro} `,[`background: linear-gradient(90deg, ${r.top}, ${r.mid} 55%, ${r.bottom})`,`color: ${Yt(Dt(ze))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${r.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
