"use strict";(()=>{function Wt(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function pa(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xe={duration:.5,overwrite:!1,delay:0},qn,nt,I,At=1e8,$=1/At,Hn=Math.PI*2,Ms=Hn/4,Ps=0,ga=Math.sqrt,Ls=Math.cos,Ds=Math.sin,tt=function(e){return typeof e=="string"},U=function(e){return typeof e=="function"},Rt=function(e){return typeof e=="number"},Hi=function(e){return typeof e>"u"},Ot=function(e){return typeof e=="object"},pt=function(e){return e!==!1},Un=function(){return typeof window<"u"},Ai=function(e){return U(e)||tt(e)},ya=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ct=Array.isArray,Fs=/random\([^)]+\)/g,Os=/,\s*/g,sa=/(?:-?\.?\d|\.)+/gi,Yn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,le=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,En=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kn=/[+-]=-?[.\d]+/,Hs=/[^,'"\[\]\s]+/gi,Ws=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,V,Dt,Wn,jn,vt={},Pi={},wa,_a=function(e){return(Pi=ve(e,vt))&&dt},Wi=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ze=function(e,t){return!t&&console.warn(e)},va=function(e,t){return e&&(vt[e]=t)&&Pi&&(Pi[e]=t)||vt},Qe=function(){return 0},zs={suppressEvents:!0,isStart:!0,kill:!1},ki={suppressEvents:!0,kill:!1},Rs={suppressEvents:!0},Xn={},qt=[],zn={},ba,mt={},Mn={},la=30,Ei=[],Zn="",Qn=function(e){var t=e[0],i,n;if(Ot(t)||U(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ei.length;n--&&!Ei[n].targetTest(t););i=Ei[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new ir(e[n],i)))||e.splice(n,1);return e},Ut=function(e){return e._gsap||Qn(kt(e))[0]._gsap},Jn=function(e,t,i){return(i=e[t])&&U(i)?e[t]():Hi(i)&&e.getAttribute&&e.getAttribute(t)||i},ht=function(e,t){return(e=e.split(",")).forEach(t)||e},Y=function(e){return Math.round(e*1e5)/1e5||0},B=function(e){return Math.round(e*1e7)/1e7||0},ce=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Ns=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Li=function(){var e=qt.length,t=qt.slice(0),i,n;for(zn={},qt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},tr=function(e){return!!(e._initted||e._startAt||e.add)},xa=function(e,t,i,n){qt.length&&!nt&&Li(),e.render(t,i,n||!!(nt&&t<0&&tr(e))),qt.length&&!nt&&Li()},Sa=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hs).length<2?t:tt(e)?e.trim():e},Ca=function(e){return e},bt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$s=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ve=function(e,t){for(var i in t)e[i]=t[i];return e},ca=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ot(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Di=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ye=function(e){var t=e.parent||V,i=e.keyframes?$s(ct(e.keyframes)):bt;if(pt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Is=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Ta=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},zi=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Yt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ae=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Gs=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rn=function(e,t,i,n){return e._startAt&&(nt?e._startAt.revert(ki):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Bs=function a(e){return!e||e._ts&&a(e.parent)},da=function(e){return e._repeat?be(e._tTime,e=e.duration()+e._rDelay)*e:0},be=function(e,t){var i=Math.floor(e=B(e/t));return e&&i===e?i-1:i},Fi=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ri=function(e){return e._end=B(e._start+(e._tDur/Math.abs(e._ts||e._rts||$)||0))},Ni=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=B(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ri(e),i._dirty||ae(i,e)),e},Aa=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Fi(e.rawTime(),t),(!t._dur||ei(0,t.totalDuration(),i)-t._tTime>$)&&t.render(i,!0)),ae(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-$}},Ft=function(e,t,i,n){return t.parent&&Yt(t),t._start=B((Rt(i)?i:i||e!==V?Tt(e,i,t):e._time)+t._delay),t._end=B(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ta(e,t,"_first","_last",e._sort?"_start":0),Nn(t)||(e._recent=t),n||Aa(e,t),e._ts<0&&Ni(e,e._tTime),e},ka=function(e,t){return(vt.ScrollTrigger||Wi("scrollTrigger",t))&&vt.ScrollTrigger.create(t,e)},Ea=function(e,t,i,n,r){if(ar(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ba!==ft.frame)return qt.push(e),e._lazy=[r,n],1},Vs=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Nn=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qs=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&Vs(e)&&!(!e._initted&&Nn(e))||(e._ts<0||e._dp._ts<0)&&!Nn(e))?0:1,s=e._rDelay,c=0,l,d,m;if(s&&e._repeat&&(c=ei(0,e._tDur,t),d=be(c,s),e._yoyo&&d&1&&(o=1-o),d!==be(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||nt||n||e._zTime===$||!t&&e._zTime){if(!e._initted&&Ea(e,t,n,i,c))return;for(m=e._zTime,e._zTime=t||(i?$:0),i||(i=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Rn(e,t,i,!0),e._onUpdate&&!i&&_t(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&_t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yt(e,1),!i&&!nt&&(_t(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Us=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},xe=function(e,t,i,n){var r=e._repeat,o=B(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:B(o*(r+1)+e._rDelay*r):o,s>0&&!n&&Ni(e,e._tTime=e._tDur*s),e.parent&&Ri(e),i||ae(e.parent,e),e},ha=function(e){return e instanceof lt?ae(e):xe(e,e._dur)},Ys={_start:0,endTime:Qe,totalDuration:Qe},Tt=function a(e,t,i){var n=e.labels,r=e._recent||Ys,o=e.duration()>=At?r.endTime(!1):e._dur,s,c,l;return tt(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=o),n[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&i&&(c=c/100*(ct(i)?i[0]:i).totalDuration()),s>1?a(e,t.substr(0,s-1),i)+c:o+c)):t==null?o:+t},Ke=function(e,t,i){var n=Rt(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],s,c;if(n&&(o.duration=t[1]),o.parent=i,e){for(s=o,c=i;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=pt(c.vars.inherit)&&c.parent;o.immediateRender=pt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Z(t[0],o,t[r+1])},Kt=function(e,t){return e||e===0?t(e):t},ei=function(e,t,i){return i<e?e:i>t?t:i},rt=function(e,t){return!tt(e)||!(t=Ws.exec(e))?"":t[1]},Ks=function(e,t,i){return Kt(i,function(n){return ei(e,t,n)})},$n=[].slice,Ma=function(e,t){return e&&Ot(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ot(e[0]))&&!e.nodeType&&e!==Dt},js=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return tt(n)&&!t||Ma(n,1)?(r=i).push.apply(r,kt(n)):i.push(n)})||i},kt=function(e,t,i){return I&&!t&&I.selector?I.selector(e):tt(e)&&!i&&(Wn||!Se())?$n.call((t||jn).querySelectorAll(e),0):ct(e)?js(e,i):Ma(e)?$n.call(e,0):e?[e]:[]},In=function(e){return e=kt(e)[0]||Ze("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return kt(t,i.querySelectorAll?i:i===e?Ze("Invalid scope")||jn.createElement("div"):e)}},Pa=function(e){return e.sort(function(){return .5-Math.random()})},La=function(e){if(U(e))return e;var t=Ot(e)?e:{each:e},i=oe(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},s=n>0&&n<1,c=isNaN(n)||s,l=t.axis,d=n,m=n;return tt(n)?d=m={center:.5,edges:.5,end:1}[n]||0:!s&&c&&(d=n[0],m=n[1]),function(h,f,g){var u=(g||t).length,p=o[u],w,y,_,b,v,x,C,A,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,At])[1],!T){for(C=-At;C<(C=g[T++].getBoundingClientRect().left)&&T<u;);T<u&&T--}for(p=o[u]=[],w=c?Math.min(T,u)*d-.5:n%T,y=T===At?0:c?u*m/T-.5:n/T|0,C=0,A=At,x=0;x<u;x++)_=x%T-w,b=y-(x/T|0),p[x]=v=l?Math.abs(l==="y"?b:_):ga(_*_+b*b),v>C&&(C=v),v<A&&(A=v);n==="random"&&Pa(p),p.max=C-A,p.min=A,p.v=u=(parseFloat(t.amount)||parseFloat(t.each)*(T>u?u-1:l?l==="y"?u/T:T:Math.max(T,u/T))||0)*(n==="edges"?-1:1),p.b=u<0?r-u:r,p.u=rt(t.amount||t.each)||0,i=i&&u<0?ll(i):i}return u=(p[h]-p.min)/p.max||0,B(p.b+(i?i(u):u)*p.v)+p.u}},Gn=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=B(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Rt(i)?0:rt(i))}},Da=function(e,t){var i=ct(e),n,r;return!i&&Ot(e)&&(n=i=e.radius||At,e.values?(e=kt(e.values),(r=!Rt(e[0]))&&(n*=n)):e=Gn(e.increment)),Kt(t,i?U(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var s=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=At,d=0,m=e.length,h,f;m--;)r?(h=e[m].x-s,f=e[m].y-c,h=h*h+f*f):h=Math.abs(e[m]-s),h<l&&(l=h,d=m);return d=!n||l<=n?e[d]:o,r||d===o||Rt(o)?d:d+rt(o)}:Gn(e))},Fa=function(e,t,i,n){return Kt(ct(e)?!t:i===!0?!!(i=0):!n,function(){return ct(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Xs=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},Zs=function(e,t){return function(i){return e(parseFloat(i))+(t||rt(i))}},Qs=function(e,t,i){return Ha(e,t,0,1,i)},Oa=function(e,t,i){return Kt(i,function(n){return e[~~t(n)]})},Js=function a(e,t,i){var n=t-e;return ct(e)?Oa(e,a(0,e.length),t):Kt(i,function(r){return(n+(r-e)%n)%n+e})},tl=function a(e,t,i){var n=t-e,r=n*2;return ct(e)?Oa(e,a(0,e.length-1),t):Kt(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},Ce=function(e){return e.replace(Fs,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Os);return Fa(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Ha=function(e,t,i,n,r){var o=t-e,s=n-i;return Kt(r,function(c){return i+((c-e)/o*s||0)})},el=function a(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=tt(e),s={},c,l,d,m,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ct(e)&&!ct(t)){for(d=[],m=e.length,h=m-2,l=1;l<m;l++)d.push(a(e[l-1],e[l]));m--,r=function(g){g*=m;var u=Math.min(h,~~g);return d[u](g-u)},i=t}else n||(e=ve(ct(e)?[]:{},e));if(!d){for(c in t)nr.call(s,e,c,"get",t[c]);r=function(g){return lr(g,s)||(o?e.p:e)}}}return Kt(i,r)},ua=function(e,t,i){var n=e.labels,r=At,o,s,c;for(o in n)s=n[o]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(c=o,r=s);return c},_t=function(e,t,i){var n=e.vars,r=n[t],o=I,s=e._ctx,c,l,d;if(r)return c=n[t+"Params"],l=n.callbackScope||e,i&&qt.length&&Li(),s&&(I=s),d=c?r.apply(l,c):r.call(l),I=o,d},qe=function(e){return Yt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nt),e.progress()<1&&_t(e,"onInterrupt"),e},_e,Wa=[],za=function(e){if(e)if(e=!e.name&&e.default||e,Un()||e.headless){var t=e.name,i=U(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Qe,render:lr,add:nr,kill:wl,modifier:yl,rawVars:0},o={targetTest:0,get:0,getSetter:$i,aliases:{},register:0};if(Se(),e!==n){if(mt[t])return;bt(n,bt(Di(e,r),o)),ve(n.prototype,ve(r,Di(e,o))),mt[n.prop=t]=n,e.targetTest&&(Ei.push(n),Xn[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}va(t,n),e.register&&e.register(dt,n,ut)}else Wa.push(e)},N=255,Ue={aqua:[0,N,N],lime:[0,N,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,N],navy:[0,0,128],white:[N,N,N],olive:[128,128,0],yellow:[N,N,0],orange:[N,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[N,0,0],pink:[N,192,203],cyan:[0,N,N],transparent:[N,N,N,0]},Pn=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*N+.5|0},Ra=function(e,t,i){var n=e?Rt(e)?[e>>16,e>>8&N,e&N]:0:Ue.black,r,o,s,c,l,d,m,h,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ue[e])n=Ue[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&N,n&N,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&N,e&N]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(sa),!t)c=+n[0]%360/360,l=+n[1]/100,d=+n[2]/100,o=d<=.5?d*(l+1):d+l-d*l,r=d*2-o,n.length>3&&(n[3]*=1),n[0]=Pn(c+1/3,r,o),n[1]=Pn(c,r,o),n[2]=Pn(c-1/3,r,o);else if(~e.indexOf("="))return n=e.match(Yn),i&&n.length<4&&(n[3]=1),n}else n=e.match(sa)||Ue.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/N,o=n[1]/N,s=n[2]/N,m=Math.max(r,o,s),h=Math.min(r,o,s),d=(m+h)/2,m===h?c=l=0:(f=m-h,l=d>.5?f/(2-m-h):f/(m+h),c=m===r?(o-s)/f+(o<s?6:0):m===o?(s-r)/f+2:(r-o)/f+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},Na=function(e){var t=[],i=[],n=-1;return e.split(zt).forEach(function(r){var o=r.match(le)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},ma=function(e,t,i){var n="",r=(e+n).match(zt),o=t?"hsla(":"rgba(",s=0,c,l,d,m;if(!r)return e;if(r=r.map(function(h){return(h=Ra(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(d=Na(e),c=i.c,c.join(n)!==d.c.join(n)))for(l=e.replace(zt,"1").split(le),m=l.length-1;s<m;s++)n+=l[s]+(~c.indexOf(s)?r.shift()||o+"0,0,0,0)":(d.length?d:r.length?r:i).shift());if(!l)for(l=e.split(zt),m=l.length-1;s<m;s++)n+=l[s]+r[s];return n+l[m]},zt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ue)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),il=/hsl[a]?\(/,er=function(e){var t=e.join(" "),i;if(zt.lastIndex=0,zt.test(t))return i=il.test(t),e[1]=ma(e[1],i),e[0]=ma(e[0],i,Na(e[1])),!0},Je,ft=(function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,o=r,s=[],c,l,d,m,h,f,g=function u(p){var w=a()-n,y=p===!0,_,b,v,x;if((w>e||w<0)&&(i+=w-t),n+=w,v=n-i,_=v-o,(_>0||y)&&(x=++m.frame,h=v-m.time*1e3,m.time=v=v/1e3,o+=_+(_>=r?4:r-_),b=1),y||(c=l(u)),b)for(f=0;f<s.length;f++)s[f](v,h,x,p)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){wa&&(!Wn&&Un()&&(Dt=Wn=window,jn=Dt.document||{},vt.gsap=dt,(Dt.gsapVersions||(Dt.gsapVersions=[])).push(dt.version),_a(Pi||Dt.GreenSockGlobals||!Dt.gsap&&Dt||{}),Wa.forEach(za)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&m.sleep(),l=d||function(p){return setTimeout(p,o-m.time*1e3+1|0)},Je=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Je=0,l=Qe},lagSmoothing:function(p,w){e=p||1/0,t=Math.min(w||33,e)},fps:function(p){r=1e3/(p||240),o=m.time*1e3+r},add:function(p,w,y){var _=w?function(b,v,x,C){p(b,v,x,C),m.remove(_)}:p;return m.remove(p),s[y?"unshift":"push"](_),Se(),_},remove:function(p,w){~(w=s.indexOf(p))&&s.splice(w,1)&&f>=w&&f--},_listeners:s},m})(),Se=function(){return!Je&&ft.wake()},L={},nl=/^[\d.\-M][\d.\-,\s]/,rl=/["']/g,al=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,s,c,l;r<o;r++)c=i[r],s=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),t[n]=isNaN(l)?l.replace(rl,"").trim():+l,n=c.substr(s+1).trim();return t},ol=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},sl=function(e){var t=(e+"").split("("),i=L[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[al(t[1])]:ol(e).split(",").map(Sa)):L._CE&&nl.test(e)?L._CE("",e):i},ll=function(e){return function(t){return 1-e(1-t)}},oe=function(e,t){return e&&(U(e)?e:L[e]||sl(e))||t},de=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return ht(e,function(s){L[s]=vt[s]=r,L[o=s.toLowerCase()]=i;for(var c in r)L[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=L[s+"."+c]=r[c]}),r},$a=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ln=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Hn*(Math.asin(1/n)||0),s=function(d){return d===1?1:n*Math.pow(2,-10*d)*Ds((d-o)*r)+1},c=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:$a(s);return r=Hn/r,c.config=function(l,d){return a(e,l,d)},c},Dn=function a(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:$a(i);return n.config=function(r){return a(e,r)},n};ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;de(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;de("Elastic",Ln("in"),Ln("out"),Ln());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?a*s*s:s<i?a*Math.pow(s-1.5/e,2)+.75:s<n?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};de("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);de("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});de("Circ",function(a){return-(ga(1-a*a)-1)});de("Sine",function(a){return a===1?1:-Ls(a*Ms)+1});de("Back",Dn("in"),Dn("out"),Dn());L.SteppedEase=L.steps=vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-$;return function(s){return((n*ei(0,o,s)|0)+r)*i}}};Xe.ease=L["quad.out"];ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Zn+=a+","+a+"Params,"});var ir=function(e,t){this.id=Ps++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jn,this.set=t?t.getSetter:$i},ti=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xe(this,+t.duration,1,1),this.data=t.data,I&&(this._ctx=I,I.data.push(this)),Je||ft.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,xe(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Se(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ni(this,i),!r._dp||r.parent||Aa(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ft(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===$||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xa(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+da(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+da(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?be(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-$?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Fi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-$?0:this._rts,this.totalTime(ei(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Ri(this),Gs(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Se(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$&&(this._tTime-=$)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=B(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ft(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fi(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Rs);var n=nt;return nt=i,tr(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ha(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ha(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Tt(this,i),pt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,pt(n)),this._dur||(this._zTime=-$),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-$:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-$)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var s=U(i)?i:Ca,c=function(){var d=n.then;n.then=null,r&&r(),U(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=d),o(s),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?c():n._prom=c})},e.kill=function(){qe(this)},a})();bt(ti.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$,_prom:0,_ps:!1,_rts:1});var lt=(function(a){pa(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=pt(i.sortChildren),V&&Ft(i.parent||V,Wt(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ka(Wt(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return Ke(0,arguments,this),this},t.from=function(n,r,o){return Ke(1,arguments,this),this},t.fromTo=function(n,r,o,s){return Ke(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,Ye(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Z(n,r,Tt(this,o),1),this},t.call=function(n,r,o){return Ft(this,Z.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,s,c,l,d){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=l,o.onCompleteParams=d,o.parent=this,new Z(n,o,Tt(this,c)),this},t.staggerFrom=function(n,r,o,s,c,l,d){return o.runBackwards=1,Ye(o).immediateRender=pt(o.immediateRender),this.staggerTo(n,r,o,s,c,l,d)},t.staggerFromTo=function(n,r,o,s,c,l,d,m){return s.startAt=o,Ye(s).immediateRender=pt(s.immediateRender),this.staggerTo(n,r,s,c,l,d,m)},t.render=function(n,r,o){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=n<=0?0:B(n),m=this._zTime<0!=n<0&&(this._initted||!l),h,f,g,u,p,w,y,_,b,v,x,C;if(this!==V&&d>c&&n>=0&&(d=c),d!==this._tTime||o||m){if(s!==this._time&&l&&(d+=this._time-s,n+=this._time-s),h=d,b=this._start,_=this._ts,w=!_,m&&(l||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(x=this._yoyo,p=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,o);if(h=B(d%p),d===c?(u=this._repeat,h=l):(v=B(d/p),u=~~v,u&&u===v&&(h=l,u--),h>l&&(h=l)),v=be(this._tTime,p),!s&&this._tTime&&v!==u&&this._tTime-v*p-this._dur<=0&&(v=u),x&&u&1&&(h=l-h,C=1),u!==v&&!this._lock){var A=x&&v&1,T=A===(x&&u&1);if(u<v&&(A=!A),s=A?0:d%l?l:d,this._lock=1,this.render(s||(C?0:B(u*p)),r,!l)._lock=0,this._tTime=d,!r&&this.parent&&_t(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=u),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,T&&(this._lock=2,s=A?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Us(this,B(s),B(h)),y&&(d-=h-(h=y._start))),this._tTime=d,this._time=h,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&d&&l&&!r&&!v&&(_t(this,"onStart"),this._tTime!==d))return this;if(h>=s&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,r,o),h!==this._time||!this._ts&&!w){y=0,g&&(d+=this._zTime=-$);break}}f=g}else{f=this._last;for(var S=n<0?n:h;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,o||nt&&tr(f)),h!==this._time||!this._ts&&!w){y=0,g&&(d+=this._zTime=S?-$:$);break}}f=g}}if(y&&!r&&(this.pause(),y.render(h>=s?0:-$)._zTime=h>=s?1:-1,this._ts))return this._start=b,Ri(this),this.render(n,r,o);this._onUpdate&&!r&&_t(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&Yt(this,1),!r&&!(n<0&&!s)&&(d||s||!c)&&(_t(this,d===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(Rt(r)||(r=Tt(this,r,n)),!(n instanceof ti)){if(ct(n))return n.forEach(function(s){return o.add(s,r)}),this;if(tt(n))return this.addLabel(n,r);if(U(n))n=Z.delayedCall(0,n);else return this}return this!==n?Ft(this,n,r):this},t.getChildren=function(n,r,o,s){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-At);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof Z?r&&c.push(l):(o&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return tt(n)?this.removeLabel(n):U(n)?this.killTweensOf(n):(n.parent===this&&zi(this,n),n===this._recent&&(this._recent=this._last),ae(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=B(ft.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Tt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var s=Z.delayedCall(0,r||Qe,o);return s.data="isPause",this._hasPause=1,Ft(this,s,Tt(this,n))},t.removePause=function(n){var r=this._first;for(n=Tt(this,n);r;)r._start===n&&r.data==="isPause"&&Yt(r),r=r._next},t.killTweensOf=function(n,r,o){for(var s=this.getTweensOf(n,o),c=s.length;c--;)Vt!==s[c]&&s[c].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],s=kt(n),c=this._first,l=Rt(r),d;c;)c instanceof Z?Ns(c._targets,s)&&(l?(!Vt||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(d=c.getTweensOf(s,r)).length&&o.push.apply(o,d),c=c._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,s=Tt(o,n),c=r,l=c.startAt,d=c.onStart,m=c.onStartParams,h=c.immediateRender,f,g=Z.to(o,bt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:o._time))/o.timeScale())||$,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&xe(g,p,0,1).render(g._time,!0,!0),f=1}d&&d.apply(g,m||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,bt({startAt:{time:Tt(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),ua(this,Tt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),ua(this,Tt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+$)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var s=this._first,c=this.labels,l;for(n=B(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(r)for(l in c)c[l]>=o&&(c[l]+=n);return ae(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ae(this)},t.totalDuration=function(n){var r=0,o=this,s=o._last,c=At,l,d,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(m=o.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>c&&o._sort&&s._ts&&!o._lock?(o._lock=1,Ft(o,s,d-s._delay,1)._lock=0):c=d,d<0&&s._ts&&(r-=d,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=B(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;xe(o,o===V&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(V._ts&&(xa(V,Fi(n,V)),ba=ft.frame),ft.frame>=la){la+=gt.autoSleep||120;var r=V._first;if((!r||!r._ts)&&gt.autoSleep&&ft._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ft.sleep()}}},e})(ti);bt(lt.prototype,{_lock:0,_hasPause:0,_forcing:0});var cl=function(e,t,i,n,r,o,s){var c=new ut(this._pt,e,t,0,1,sr,null,r),l=0,d=0,m,h,f,g,u,p,w,y;for(c.b=i,c.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=Ce(n)),o&&(y=[i,n],o(y,e,t),i=y[0],n=y[1]),h=i.match(En)||[];m=En.exec(n);)g=m[0],u=n.substring(l,m.index),f?f=(f+1)%5:u.substr(-5)==="rgba("&&(f=1),g!==h[d++]&&(p=parseFloat(h[d-1])||0,c._pt={_next:c._pt,p:u||d===1?u:",",s:p,c:g.charAt(1)==="="?ce(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=En.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=s,(Kn.test(n)||w)&&(c.e=0),this._pt=c,c},nr=function(e,t,i,n,r,o,s,c,l,d){U(n)&&(n=n(r||0,e,o));var m=e[t],h=i!=="get"?i:U(m)?l?e[t.indexOf("set")||!U(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():m,f=U(m)?l?fl:Ba:or,g;if(tt(n)&&(~n.indexOf("random(")&&(n=Ce(n)),n.charAt(1)==="="&&(g=ce(h,n)+(rt(h)||0),(g||g===0)&&(n=g))),!d||h!==n||Bn)return!isNaN(h*n)&&n!==""?(g=new ut(this._pt,e,t,+h||0,n-(h||0),typeof m=="boolean"?gl:Va,0,f),l&&(g.fp=l),s&&g.modifier(s,this,e),this._pt=g):(!m&&!(t in e)&&Wi(t,n),cl.call(this,e,t,h,n,f,c||gt.stringFilter,l))},dl=function(e,t,i,n,r){if(U(e)&&(e=je(e,r,t,i,n)),!Ot(e)||e.style&&e.nodeType||ct(e)||ya(e))return tt(e)?je(e,r,t,i,n):e;var o={},s;for(s in e)o[s]=je(e[s],r,t,i,n);return o},rr=function(e,t,i,n,r,o){var s,c,l,d;if(mt[e]&&(s=new mt[e]).init(r,s.rawVars?t[e]:dl(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=c=new ut(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==_e))for(l=i._ptLookup[i._targets.indexOf(r)],d=s._props.length;d--;)l[s._props[d]]=c;return s},Vt,Bn,ar=function a(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,s=n.immediateRender,c=n.lazy,l=n.onUpdate,d=n.runBackwards,m=n.yoyoEase,h=n.keyframes,f=n.autoRevert,g=e._dur,u=e._startAt,p=e._targets,w=e.parent,y=w&&w.data==="nested"?w.vars.targets:p,_=e._overwrite==="auto"&&!qn,b=e.timeline,v=n.easeReverse||m,x,C,A,T,S,E,P,F,O,H,R,W,z;if(b&&(!h||!r)&&(r="none"),e._ease=oe(r,Xe.ease),e._rEase=v&&(oe(v)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||h&&!n.stagger){if(F=p[0]?Ut(p[0]).harness:0,W=F&&n[F.prop],x=Di(n,Xn),u&&(u._zTime<0&&u.progress(1),t<0&&d&&s&&!f?u.render(-1,!0):u.revert(d&&g?ki:zs),u._lazy=0),o){if(Yt(e._startAt=Z.set(p,bt({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!u&&pt(c),startAt:null,delay:0,onUpdate:l&&function(){return _t(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nt||!s&&!f)&&e._startAt.revert(ki),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&g&&!u){if(t&&(s=!1),A=bt({overwrite:!1,data:"isFromStart",lazy:s&&!u&&pt(c),immediateRender:s,stagger:0,parent:w},x),W&&(A[F.prop]=W),Yt(e._startAt=Z.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nt?e._startAt.revert(ki):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,$,$);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&pt(c)||c&&!g,C=0;C<p.length;C++){if(S=p[C],P=S._gsap||Qn(p)[C]._gsap,e._ptLookup[C]=H={},zn[P.id]&&qt.length&&Li(),R=y===p?C:y.indexOf(S),F&&(O=new F).init(S,W||x,e,R,y)!==!1&&(e._pt=T=new ut(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(it){H[it]=T}),O.priority&&(E=1)),!F||W)for(A in x)mt[A]&&(O=rr(A,x,e,R,S,y))?O.priority&&(E=1):H[A]=T=nr.call(e,S,A,"get",x[A],R,y,0,n.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),_&&e._pt&&(Vt=e,V.killTweensOf(S,H,e.globalTime(t)),z=!e.parent,Vt=0),e._pt&&c&&(zn[P.id]=1)}E&&cr(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&b.render(At,!0,!0)},hl=function(e,t,i,n,r,o,s,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,m,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(d=h[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Bn=1,e.vars[t]="+=0",ar(e,s),Bn=0,c?Ze(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(f=l.length;f--;)m=l[f],d=m._pt||m,d.s=(n||n===0)&&!r?n:d.s+(n||0)+o*d.c,d.c=i-d.s,m.e&&(m.e=Y(i)+rt(m.e)),m.b&&(m.b=d.s+rt(m.b))},ul=function(e,t){var i=e[0]?Ut(e[0]).harness:0,n=i&&i.aliases,r,o,s,c;if(!n)return t;r=ve({},t);for(o in n)if(o in r)for(c=n[o].split(","),s=c.length;s--;)r[c[s]]=r[o];return r},ml=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,s;if(ct(t))s=i[e]||(i[e]=[]),t.forEach(function(c,l){return s.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},je=function(e,t,i,n,r){return U(e)?e.call(t,i,n,r):tt(e)&&~e.indexOf("random(")?Ce(e):e},Ia=Zn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ga={};ht(Ia+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ga[a]=1});var Z=(function(a){pa(e,a);function e(i,n,r,o){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=a.call(this,o?n:Ye(n))||this;var c=s.vars,l=c.duration,d=c.delay,m=c.immediateRender,h=c.stagger,f=c.overwrite,g=c.keyframes,u=c.defaults,p=c.scrollTrigger,w=n.parent||V,y=(ct(i)||ya(i)?Rt(i[0]):"length"in n)?[i]:kt(i),_,b,v,x,C,A,T,S;if(s._targets=y.length?Qn(y):Ze("GSAP target "+i+" not found. https://gsap.com",!gt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||h||Ai(l)||Ai(d)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new lt({data:"nested",defaults:u||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=Wt(s),_._start=0,h||Ai(l)||Ai(d)){if(x=y.length,T=h&&La(h),Ot(h))for(C in h)~Ia.indexOf(C)&&(S||(S={}),S[C]=h[C]);for(b=0;b<x;b++)v=Di(n,Ga),v.stagger=0,E&&(v.easeReverse=E),S&&ve(v,S),A=y[b],v.duration=+je(l,Wt(s),b,A,y),v.delay=(+je(d,Wt(s),b,A,y)||0)-s._delay,!h&&x===1&&v.delay&&(s._delay=d=v.delay,s._start+=d,v.delay=0),_.to(A,v,T?T(b,A,y):0),_._ease=L.none;_.duration()?l=d=0:s.timeline=0}else if(g){Ye(bt(_.vars.defaults,{ease:"none"})),_._ease=oe(g.ease||n.ease||"none");var P=0,F,O,H;if(ct(g))g.forEach(function(R){return _.to(y,R,">")}),_.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||ml(C,g[C],v,g.easeEach);for(C in v)for(F=v[C].sort(function(R,W){return R.t-W.t}),P=0,b=0;b<F.length;b++)O=F[b],H={ease:O.e,duration:(O.t-(b?F[b-1].t:0))/100*l},H[C]=O.v,_.to(y,H,P),P+=H.duration;_.duration()<l&&_.to({},{duration:l-_.duration()})}}l||s.duration(l=_.duration())}else s.timeline=0;return f===!0&&!qn&&(Vt=Wt(s),V.killTweensOf(y),Vt=0),Ft(w,Wt(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(m||!l&&!g&&s._start===B(w._time)&&pt(m)&&Bs(Wt(s))&&w.data!=="nested")&&(s._tTime=-$,s.render(Math.max(0,-d)||0)),p&&ka(Wt(s),p),s}var t=e.prototype;return t.render=function(n,r,o){var s=this._time,c=this._tDur,l=this._dur,d=n<0,m=n>c-$&&!d?c:n<$?0:n,h,f,g,u,p,w,y,_;if(!l)qs(this,n,r,o);else if(m!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(h=m,_=this.timeline,this._repeat){if(u=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(u*100+n,r,o);if(h=B(m%u),m===c?(g=this._repeat,h=l):(p=B(m/u),g=~~p,g&&g===p?(h=l,g--):h>l&&(h=l)),w=this._yoyo&&g&1,w&&(h=l-h),p=be(this._tTime,u),h===s&&!o&&this._initted&&g===p)return this._tTime=m,this;g!==p&&this.vars.repeatRefresh&&!w&&!this._lock&&h!==u&&this._initted&&(this._lock=o=1,this.render(B(u*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ea(this,d?n:h,o,r,m))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(n,r,o)}if(this._rEase){var b=h<s;if(b!==this._inv){var v=b?s:l-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/l);if(this._from&&(this.ratio=y=1-y),this._tTime=m,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&m&&!r&&!p&&(_t(this,"onStart"),this._tTime!==m))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;_&&_.render(n<0?n:_._dur*_._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(d&&Rn(this,n,r,o),_t(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&_t(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&Rn(this,n,!0,!0),(n||!l)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Yt(this,1),!r&&!(d&&!s)&&(m||s||w)&&(_t(this,m===c?"onComplete":"onReverseComplete",!0),this._prom&&!(m<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,s,c){Je||ft.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||ar(this,l),d=this._ease(l/this._dur),hl(this,n,r,o,s,d,l,c)?this.resetTo(n,r,o,s,1):(Ni(this,0),this.parent||Ta(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qe(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Vt&&Vt.vars.overwrite!==!0)._first||qe(this),this.parent&&o!==this.timeline.totalDuration()&&xe(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,c=n?kt(n):s,l=this._ptLookup,d=this._pt,m,h,f,g,u,p,w;if((!r||r==="all")&&Is(s,c))return r==="all"&&(this._pt=0),qe(this);for(m=this._op=this._op||[],r!=="all"&&(tt(r)&&(u={},ht(r,function(y){return u[y]=1}),r=u),r=ul(s,r)),w=s.length;w--;)if(~c.indexOf(s[w])){h=l[w],r==="all"?(m[w]=r,g=h,f={}):(f=m[w]=m[w]||{},g=r);for(u in g)p=h&&h[u],p&&((!("kill"in p.d)||p.d.kill(u)===!0)&&zi(this,p,"_pt"),delete h[u]),f!=="all"&&(f[u]=1)}return this._initted&&!this._pt&&d&&qe(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Ke(1,arguments)},e.delayedCall=function(n,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(n,r,o){return Ke(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return V.killTweensOf(n,r,o)},e})(ti);bt(Z.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ht("staggerTo,staggerFrom,staggerFromTo",function(a){Z[a]=function(){var e=new lt,t=$n.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var or=function(e,t,i){return e[t]=i},Ba=function(e,t,i){return e[t](i)},fl=function(e,t,i,n){return e[t](n.fp,i)},pl=function(e,t,i){return e.setAttribute(t,i)},$i=function(e,t){return U(e[t])?Ba:Hi(e[t])&&e.setAttribute?pl:or},Va=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gl=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sr=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},lr=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},yl=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},wl=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?zi(this,t,"_pt"):t.dep||(i=1),t=n;return!i},_l=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},cr=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},ut=(function(){function a(t,i,n,r,o,s,c,l,d){this.t=i,this.s=r,this.c=o,this.p=n,this.r=s||Va,this.d=c||this,this.set=l||or,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=_l,this.m=i,this.mt=r,this.tween=n},a})();ht(Zn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Xn[a]=1});vt.TweenMax=vt.TweenLite=Z;vt.TimelineLite=vt.TimelineMax=lt;V=new lt({sortChildren:!1,defaults:Xe,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=er;var se=[],Mi={},vl=[],fa=0,bl=0,Fn=function(e){return(Mi[e]||vl).map(function(t){return t()})},Vn=function(){var e=Date.now(),t=[];e-fa>2&&(Fn("matchMediaInit"),se.forEach(function(i){var n=i.queries,r=i.conditions,o,s,c,l;for(s in n)o=Dt.matchMedia(n[s]).matches,o&&(c=1),o!==r[s]&&(r[s]=o,l=1);l&&(i.revert(),c&&t.push(i))}),Fn("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),fa=e,Fn("matchMedia"))},qa=(function(){function a(t,i){this.selector=i&&In(i),this.data=[],this._r=[],this.isReverted=!1,this.id=bl++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){U(i)&&(r=n,n=i,i=U);var o=this,s=function(){var l=I,d=o.selector,m;return l&&l!==o&&l.data.push(o),r&&(o.selector=In(r)),I=o,m=n.apply(o,arguments),U(m)&&o._r.push(m),I=l,o.selector=d,o.isReverted=!1,m};return o.last=s,i===U?s(o,function(c){return o.add(null,c)}):i?o[i]=s:s},e.ignore=function(i){var n=I;I=null,i(this),I=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof Z&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),c=r.data.length;c--;)l=r.data[c],l instanceof lt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Z)&&l.revert&&l.revert(i);r._r.forEach(function(d){return d(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=se.length;o--;)se[o].id===this.id&&se.splice(o,1)},e.revert=function(i){this.kill(i||{})},a})(),xl=(function(){function a(t){this.contexts=[],this.scope=t,I&&I.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){Ot(i)||(i={matches:i});var o=new qa(0,r||this.scope),s=o.conditions={},c,l,d;I&&!o.selector&&(o.selector=I.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(l in i)l==="all"?d=1:(c=Dt.matchMedia(i[l]),c&&(se.indexOf(o)<0&&se.push(o),(s[l]=c.matches)&&(d=1),c.addListener?c.addListener(Vn):c.addEventListener("change",Vn)));return d&&n(o,function(m){return o.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a})(),Oi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return za(n)})},timeline:function(e){return new lt(e)},getTweensOf:function(e,t){return V.getTweensOf(e,t)},getProperty:function(e,t,i,n){tt(e)&&(e=kt(e)[0]);var r=Ut(e||{}).get,o=i?Ca:Sa;return i==="native"&&(i=""),e&&(t?o((mt[t]&&mt[t].get||r)(e,t,i,n)):function(s,c,l){return o((mt[s]&&mt[s].get||r)(e,s,c,l))})},quickSetter:function(e,t,i){if(e=kt(e),e.length>1){var n=e.map(function(d){return dt.quickSetter(d,t,i)}),r=n.length;return function(d){for(var m=r;m--;)n[m](d)}}e=e[0]||{};var o=mt[t],s=Ut(e),c=s.harness&&(s.harness.aliases||{})[t]||t,l=o?function(d){var m=new o;_e._pt=0,m.init(e,i?d+i:d,_e,0,[e]),m.render(1,m),_e._pt&&lr(1,_e)}:s.set(e,c);return o?l:function(d){return l(e,c,i?d+i:d,s,1)}},quickTo:function(e,t,i){var n,r=dt.to(e,bt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(c,l,d){return r.resetTo(t,c,l,d)};return o.tween=r,o},isTweening:function(e){return V.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oe(e.ease,Xe.ease)),ca(Xe,e||{})},config:function(e){return ca(gt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!mt[s]&&!vt[s]&&Ze(t+" effect requires "+s+" plugin.")}),Mn[t]=function(s,c,l){return i(kt(s),bt(c||{},r),l)},o&&(lt.prototype[t]=function(s,c,l){return this.add(Mn[t](s,Ot(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){L[e]=oe(t)},parseEase:function(e,t){return arguments.length?oe(e,t):L},getById:function(e){return V.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new lt(e),n,r;for(i.smoothChildTiming=pt(e.smoothChildTiming),V.remove(i),i._dp=0,i._time=i._tTime=V._time,n=V._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Z&&n.vars.onComplete===n._targets[0]))&&Ft(i,n,n._start-n._delay),n=r;return Ft(V,i,0),i},context:function(e,t){return e?new qa(e,t):I},matchMedia:function(e){return new xl(e)},matchMediaRefresh:function(){return se.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Vn()},addEventListener:function(e,t){var i=Mi[e]||(Mi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Mi[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Js,wrapYoyo:tl,distribute:La,random:Fa,snap:Da,normalize:Qs,getUnit:rt,clamp:Ks,splitColor:Ra,toArray:kt,selector:In,mapRange:Ha,pipe:Xs,unitize:Zs,interpolate:el,shuffle:Pa},install:_a,effects:Mn,ticker:ft,updateRoot:lt.updateRoot,plugins:mt,globalTimeline:V,core:{PropTween:ut,globals:va,Tween:Z,Timeline:lt,Animation:ti,getCache:Ut,_removeLinkedListItem:zi,reverting:function(){return nt},context:function(e){return e&&I&&(I.data.push(e),e._ctx=I),I},suppressOverwrites:function(e){return qn=e}}};ht("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Oi[a]=Z[a]});ft.add(lt.updateRoot);_e=Oi.to({},{duration:0});var Sl=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Cl=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Sl(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},On=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(s){var c,l;if(tt(r)&&(c={},ht(r,function(d){return c[d]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}Cl(s,r)}}}},dt=Oi.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,s,c;this.tween=i;for(o in t)c=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(c||0)+"",t[o],n,r,0,0,o),s.op=o,s.b=c,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)nt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},On("roundProps",Gn),On("modifiers"),On("snap",Da))||Oi;Z.version=lt.version=dt.version="3.15.0";wa=1;Un()&&Se();var Tl=L.Power0,Al=L.Power1,kl=L.Power2,El=L.Power3,Ml=L.Power4,Pl=L.Linear,Ll=L.Quad,Dl=L.Cubic,Fl=L.Quart,Ol=L.Quint,Hl=L.Strong,Wl=L.Elastic,zl=L.Back,Rl=L.SteppedEase,Nl=L.Bounce,$l=L.Sine,Il=L.Expo,Gl=L.Circ;var Ua,jt,Ae,pr,fe,Bl,Ya,gr,Vl=function(){return typeof window<"u"},$t={},me=180/Math.PI,ke=Math.PI/180,Te=Math.atan2,Ka=1e8,yr=/([A-Z])/g,ql=/(left|right|width|margin|padding|x)/i,Ul=/[\s,\(]\S/,Ht={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yl=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kl=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jl=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xl=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},io=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},no=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zl=function(e,t,i){return e.style[t]=i},Ql=function(e,t,i){return e.style.setProperty(t,i)},Jl=function(e,t,i){return e._gsap[t]=i},tc=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ec=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},ic=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},q="transform",yt=q+"Origin",nc=function a(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in $t&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ht[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Nt(n,s)}):this.tfm[e]=o.x?o[e]:Nt(n,e),e===yt&&(this.tfm.zOrigin=o.zOrigin);else return Ht.transform.split(",").forEach(function(s){return a.call(i,s,t)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(yt,t,"")),e=q}(r||t)&&this.props.push(e,t,r[e])},ro=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rc=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(yr,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=gr(),(!r||!r.isStart)&&!i[q]&&(ro(i),n.zOrigin&&i[yt]&&(i[yt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ao=function(e,t){var i={target:e,props:[],revert:rc,save:nc};return e._gsap||dt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},oo,ur=function(e,t){var i=jt.createElementNS?jt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jt.createElement(e);return i&&i.style?i:jt.createElement(e)},xt=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(yr,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Ee(t)||t,1)||""},ja="O,Moz,ms,Ms,Webkit".split(","),Ee=function(e,t,i){var n=t||fe,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ja[o]+e in r););return o<0?null:(o===3?"ms":o>=0?ja[o]:"")+e},mr=function(){Vl()&&window.document&&(Ua=window,jt=Ua.document,Ae=jt.documentElement,fe=ur("div")||{style:{}},Bl=ur("div"),q=Ee(q),yt=q+"Origin",fe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",oo=!!Ee("perspective"),gr=dt.core.reverting,pr=1)},Xa=function(e){var t=e.ownerSVGElement,i=ur("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Ae.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Ae.removeChild(i),r},Za=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},so=function(e){var t,i;try{t=e.getBBox()}catch{t=Xa(e),i=1}return t&&(t.width||t.height)||i||(t=Xa(e)),t&&!t.width&&!t.x&&!t.y?{x:+Za(e,["x","cx","x1"])||0,y:+Za(e,["y","cy","y1"])||0,width:0,height:0}:t},lo=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&so(e))},Zt=function(e,t){if(t){var i=e.style,n;t in $t&&t!==yt&&(t=q),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(yr,"-$1").toLowerCase())):i.removeAttribute(t)}},Xt=function(e,t,i,n,r,o){var s=new ut(e._pt,t,i,0,1,o?no:io);return e._pt=s,s.b=n,s.e=r,e._props.push(i),s},Qa={deg:1,rad:1,turn:1},ac={grid:1,flex:1},Qt=function a(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",s=fe.style,c=ql.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),m=100,h=n==="px",f=n==="%",g,u,p,w;if(n===o||!r||Qa[n]||Qa[o])return r;if(o!=="px"&&!h&&(r=a(e,t,i,"px")),w=e.getCTM&&lo(e),(f||o==="%")&&($t[t]||~t.indexOf("adius")))return g=w?e.getBBox()[c?"width":"height"]:e[d],Y(f?r/g*m:r/100*g);if(s[c?"width":"height"]=m+(h?o:n),u=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,w&&(u=(e.ownerSVGElement||{}).parentNode),(!u||u===jt||!u.appendChild)&&(u=jt.body),p=u._gsap,p&&f&&p.width&&c&&p.time===ft.time&&!p.uncache)return Y(r/p.width*m);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=m+n,g=e[d],y?e.style[t]=y:Zt(e,t)}else(f||o==="%")&&!ac[xt(u,"display")]&&(s.position=xt(e,"position")),u===e&&(s.position="static"),u.appendChild(fe),g=fe[d],u.removeChild(fe),s.position="absolute";return c&&f&&(p=Ut(u),p.time=ft.time,p.width=u[d]),Y(h?g*r/m:g&&r?m/g*r:0)},Nt=function(e,t,i,n){var r;return pr||mr(),t in Ht&&t!=="transform"&&(t=Ht[t],~t.indexOf(",")&&(t=t.split(",")[0])),$t[t]&&t!=="transform"?(r=ri(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Gi(xt(e,yt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ii[t]&&Ii[t](e,t,i)||xt(e,t)||Jn(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Qt(e,t,r,i)+i:r},oc=function(e,t,i,n){if(!i||i==="none"){var r=Ee(t,e,1),o=r&&xt(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=xt(e,"borderTopColor"))}var s=new ut(this._pt,e.style,t,0,1,sr),c=0,l=0,d,m,h,f,g,u,p,w,y,_,b,v;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=xt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(u=e.style[t],e.style[t]=n,n=xt(e,t)||n,u?e.style[t]=u:Zt(e,t)),d=[i,n],er(d),i=d[0],n=d[1],h=i.match(le)||[],v=n.match(le)||[],v.length){for(;m=le.exec(n);)p=m[0],y=n.substring(c,m.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(u=h[l++]||"")&&(f=parseFloat(u)||0,b=u.substr((f+"").length),p.charAt(1)==="="&&(p=ce(f,p)+b),w=parseFloat(p),_=p.substr((w+"").length),c=le.lastIndex-_.length,_||(_=_||gt.units[t]||b,c===n.length&&(n+=_,s.e+=_)),b!==_&&(f=Qt(e,t,u,_)||0),s._pt={_next:s._pt,p:y||l===1?y:",",s:f,c:w-f,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=c<n.length?n.substring(c,n.length):""}else s.r=t==="display"&&n==="none"?no:io;return Kn.test(n)&&(s.e=0),this._pt=s,s},Ja={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sc=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Ja[i]||i,t[1]=Ja[n]||n,t.join(" ")},lc=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,s,c,l;if(r==="all"||r===!0)n.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],$t[s]&&(c=1,s=s==="transformOrigin"?yt:q),Zt(i,s);c&&(Zt(i,q),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",ri(i,1),o.uncache=1,ro(n)))}},Ii={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new ut(e._pt,t,i,0,0,lc);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},ni=[1,0,0,1,0,0],co={},ho=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},to=function(e){var t=xt(e,q);return ho(t)?ni:t.substr(7).match(Yn).map(Y)},wr=function(e,t){var i=e._gsap||Ut(e),n=e.style,r=to(e),o,s,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ni:r):(r===ni&&!e.offsetParent&&e!==Ae&&!i.svg&&(c=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,s=e.nextElementSibling,Ae.appendChild(e)),r=to(e),c?n.display=c:Zt(e,"display"),l&&(s?o.insertBefore(e,s):o?o.appendChild(e):Ae.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fr=function(e,t,i,n,r,o){var s=e._gsap,c=r||wr(e,!0),l=s.xOrigin||0,d=s.yOrigin||0,m=s.xOffset||0,h=s.yOffset||0,f=c[0],g=c[1],u=c[2],p=c[3],w=c[4],y=c[5],_=t.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,x,C,A,T;i?c!==ni&&(C=f*p-g*u)&&(A=b*(p/C)+v*(-u/C)+(u*y-p*w)/C,T=b*(-g/C)+v*(f/C)-(f*y-g*w)/C,b=A,v=T):(x=so(e),b=x.x+(~_[0].indexOf("%")?b/100*x.width:b),v=x.y+(~(_[1]||_[0]).indexOf("%")?v/100*x.height:v)),n||n!==!1&&s.smooth?(w=b-l,y=v-d,s.xOffset=m+(w*f+y*u)-w,s.yOffset=h+(w*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[yt]="0px 0px",o&&(Xt(o,s,"xOrigin",l,b),Xt(o,s,"yOrigin",d,v),Xt(o,s,"xOffset",m,s.xOffset),Xt(o,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},ri=function(e,t){var i=e._gsap||new ir(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",s="deg",c=getComputedStyle(e),l=xt(e,yt)||"0",d,m,h,f,g,u,p,w,y,_,b,v,x,C,A,T,S,E,P,F,O,H,R,W,z,it,Et,Mt,j,Ct,ot,J;return d=m=h=u=p=w=y=_=b=0,f=g=1,i.svg=!!(e.getCTM&&lo(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[q]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[q]!=="none"?c[q]:"")),n.scale=n.rotate=n.translate="none"),C=wr(e,i.svg),i.svg&&(i.uncache?(z=e.getBBox(),l=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),fr(e,W||l,!!W||i.originIsAbsolute,i.smooth!==!1,C)),v=i.xOrigin||0,x=i.yOrigin||0,C!==ni&&(E=C[0],P=C[1],F=C[2],O=C[3],d=H=C[4],m=R=C[5],C.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt(O*O+F*F),u=E||P?Te(P,E)*me:0,y=F||O?Te(F,O)*me+u:0,y&&(g*=Math.abs(Math.cos(y*ke))),i.svg&&(d-=v-(v*E+x*F),m-=x-(v*P+x*O))):(J=C[6],Ct=C[7],Et=C[8],Mt=C[9],j=C[10],ot=C[11],d=C[12],m=C[13],h=C[14],A=Te(J,j),p=A*me,A&&(T=Math.cos(-A),S=Math.sin(-A),W=H*T+Et*S,z=R*T+Mt*S,it=J*T+j*S,Et=H*-S+Et*T,Mt=R*-S+Mt*T,j=J*-S+j*T,ot=Ct*-S+ot*T,H=W,R=z,J=it),A=Te(-F,j),w=A*me,A&&(T=Math.cos(-A),S=Math.sin(-A),W=E*T-Et*S,z=P*T-Mt*S,it=F*T-j*S,ot=O*S+ot*T,E=W,P=z,F=it),A=Te(P,E),u=A*me,A&&(T=Math.cos(A),S=Math.sin(A),W=E*T+P*S,z=H*T+R*S,P=P*T-E*S,R=R*T-H*S,E=W,H=z),p&&Math.abs(p)+Math.abs(u)>359.9&&(p=u=0,w=180-w),f=Y(Math.sqrt(E*E+P*P+F*F)),g=Y(Math.sqrt(R*R+J*J)),A=Te(H,R),y=Math.abs(A)>2e-4?A*me:0,b=ot?1/(ot<0?-ot:ot):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ho(xt(e,q)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=u<=0?180:-180,u+=u<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Y(f),i.scaleY=Y(g),i.rotation=Y(u)+s,i.rotationX=Y(p)+s,i.rotationY=Y(w)+s,i.skewX=y+s,i.skewY=_+s,i.transformPerspective=b+o,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(n[yt]=Gi(l)),i.xOffset=i.yOffset=0,i.force3D=gt.force3D,i.renderTransform=i.svg?dc:oo?uo:cc,i.uncache=0,i},Gi=function(e){return(e=e.split(" "))[0]+" "+e[1]},dr=function(e,t,i){var n=rt(t);return Y(parseFloat(t)+parseFloat(Qt(e,"x",i+"px",n)))+n},cc=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,uo(e,t)},he="0deg",ii="0px",ue=") ",uo=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,c=i.z,l=i.rotation,d=i.rotationY,m=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,u=i.scaleY,p=i.transformPerspective,w=i.force3D,y=i.target,_=i.zOrigin,b="",v=w==="auto"&&e&&e!==1||w===!0;if(_&&(m!==he||d!==he)){var x=parseFloat(d)*ke,C=Math.sin(x),A=Math.cos(x),T;x=parseFloat(m)*ke,T=Math.cos(x),o=dr(y,o,C*T*-_),s=dr(y,s,-Math.sin(x)*-_),c=dr(y,c,A*T*-_+_)}p!==ii&&(b+="perspective("+p+ue),(n||r)&&(b+="translate("+n+"%, "+r+"%) "),(v||o!==ii||s!==ii||c!==ii)&&(b+=c!==ii||v?"translate3d("+o+", "+s+", "+c+") ":"translate("+o+", "+s+ue),l!==he&&(b+="rotate("+l+ue),d!==he&&(b+="rotateY("+d+ue),m!==he&&(b+="rotateX("+m+ue),(h!==he||f!==he)&&(b+="skew("+h+", "+f+ue),(g!==1||u!==1)&&(b+="scale("+g+", "+u+ue),y.style[q]=b||"translate(0, 0)"},dc=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,c=i.rotation,l=i.skewX,d=i.skewY,m=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,u=i.yOrigin,p=i.xOffset,w=i.yOffset,y=i.forceCSS,_=parseFloat(o),b=parseFloat(s),v,x,C,A,T;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=ke,l*=ke,v=Math.cos(c)*m,x=Math.sin(c)*m,C=Math.sin(c-l)*-h,A=Math.cos(c-l)*h,l&&(d*=ke,T=Math.tan(l-d),T=Math.sqrt(1+T*T),C*=T,A*=T,d&&(T=Math.tan(d),T=Math.sqrt(1+T*T),v*=T,x*=T)),v=Y(v),x=Y(x),C=Y(C),A=Y(A)):(v=m,A=h,x=C=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=Qt(f,"x",o,"px"),b=Qt(f,"y",s,"px")),(g||u||p||w)&&(_=Y(_+g-(g*v+u*C)+p),b=Y(b+u-(g*x+u*A)+w)),(n||r)&&(T=f.getBBox(),_=Y(_+n/100*T.width),b=Y(b+r/100*T.height)),T="matrix("+v+","+x+","+C+","+A+","+_+","+b+")",f.setAttribute("transform",T),y&&(f.style[q]=T)},hc=function(e,t,i,n,r){var o=360,s=tt(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?me:1),l=c-n,d=n+l+"deg",m,h;return s&&(m=r.split("_")[1],m==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),m==="cw"&&l<0?l=(l+o*Ka)%o-~~(l/o)*o:m==="ccw"&&l>0&&(l=(l-o*Ka)%o-~~(l/o)*o)),e._pt=h=new ut(e._pt,t,i,n,l,Yl),h.e=d,h.u="deg",e._props.push(i),h},eo=function(e,t){for(var i in t)e[i]=t[i];return e},uc=function(e,t,i){var n=eo({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,c,l,d,m,h,f,g;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),o[q]=t,s=ri(i,1),Zt(i,q),i.setAttribute("transform",l)):(l=getComputedStyle(i)[q],o[q]=t,s=ri(i,1),o[q]=l);for(c in $t)l=n[c],d=s[c],l!==d&&r.indexOf(c)<0&&(f=rt(l),g=rt(d),m=f!==g?Qt(i,c,l,g):parseFloat(l),h=parseFloat(d),e._pt=new ut(e._pt,s,c,m,h-m,hr),e._pt.u=g||0,e._props.push(c));eo(s,n)};ht("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(s){return e<2?a+s:"border"+s+a});Ii[e>1?"border"+a:a]=function(s,c,l,d,m){var h,f;if(arguments.length<4)return h=o.map(function(g){return Nt(s,g,l)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(d+"").split(" "),f={},o.forEach(function(g,u){return f[g]=h[u]=h[u]||h[(u-1)/2|0]}),s.init(c,f,m)}});var _r={name:"css",register:mr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,s=e.style,c=i.vars.startAt,l,d,m,h,f,g,u,p,w,y,_,b,v,x,C,A,T;pr||mr(),this.styles=this.styles||ao(e),A=this.styles.props,this.tween=i;for(u in t)if(u!=="autoRound"&&(d=t[u],!(mt[u]&&rr(u,t,i,n,e,r)))){if(f=typeof d,g=Ii[u],f==="function"&&(d=d.call(i,n,e,r),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Ce(d)),g)g(this,e,u,d,i)&&(C=1);else if(u.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(u)+"").trim(),d+="",zt.lastIndex=0,zt.test(l)||(p=rt(l),w=rt(d),w?p!==w&&(l=Qt(e,u,l,w)+w):p&&(d+=p)),this.add(s,"setProperty",l,d,n,r,0,0,u),o.push(u),A.push(u,0,s[u]);else if(f!=="undefined"){if(c&&u in c?(l=typeof c[u]=="function"?c[u].call(i,n,e,r):c[u],tt(l)&&~l.indexOf("random(")&&(l=Ce(l)),rt(l+"")||l==="auto"||(l+=gt.units[u]||rt(Nt(e,u))||""),(l+"").charAt(1)==="="&&(l=Nt(e,u))):l=Nt(e,u),h=parseFloat(l),y=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),m=parseFloat(d),u in Ht&&(u==="autoAlpha"&&(h===1&&Nt(e,"visibility")==="hidden"&&m&&(h=0),A.push("visibility",0,s.visibility),Xt(this,s,"visibility",h?"inherit":"hidden",m?"inherit":"hidden",!m)),u!=="scale"&&u!=="transform"&&(u=Ht[u],~u.indexOf(",")&&(u=u.split(",")[0]))),_=u in $t,_){if(this.styles.save(u),T=d,f==="string"&&d.substring(0,6)==="var(--"){if(d=xt(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=d,d=xt(e,"perspective"),S?e.style.perspective=S:Zt(e,"perspective")}m=parseFloat(d)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||ri(e,t.parseTransform),x=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new ut(this._pt,s,q,0,1,v.renderTransform,v,0,-1),b.dep=1),u==="scale")this._pt=new ut(this._pt,v,"scaleY",v.scaleY,(y?ce(v.scaleY,y+m):m)-v.scaleY||0,hr),this._pt.u=0,o.push("scaleY",u),u+="X";else if(u==="transformOrigin"){A.push(yt,0,s[yt]),d=sc(d),v.svg?fr(e,d,0,x,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==v.zOrigin&&Xt(this,v,"zOrigin",v.zOrigin,w),Xt(this,s,u,Gi(l),Gi(d)));continue}else if(u==="svgOrigin"){fr(e,d,1,x,0,this);continue}else if(u in co){hc(this,v,u,h,y?ce(h,y+d):d);continue}else if(u==="smoothOrigin"){Xt(this,v,"smooth",v.smooth,d);continue}else if(u==="force3D"){v[u]=d;continue}else if(u==="transform"){uc(this,d,e);continue}}else u in s||(u=Ee(u)||u);if(_||(m||m===0)&&(h||h===0)&&!Ul.test(d)&&u in s)p=(l+"").substr((h+"").length),m||(m=0),w=rt(d)||(u in gt.units?gt.units[u]:p),p!==w&&(h=Qt(e,u,l,w)),this._pt=new ut(this._pt,_?v:s,u,h,(y?ce(h,y+m):m)-h,!_&&(w==="px"||u==="zIndex")&&t.autoRound!==!1?Xl:hr),this._pt.u=w||0,_&&T!==d?(this._pt.b=l,this._pt.e=T,this._pt.r=jl):p!==w&&w!=="%"&&(this._pt.b=l,this._pt.r=Kl);else if(u in s)oc.call(this,e,u,l,y?y+d:d);else if(u in e)this.add(e,u,l||e[u],y?y+d:d,n,r);else if(u!=="parseTransform"){Wi(u,d);continue}_||(u in s?A.push(u,0,s[u]):typeof e[u]=="function"?A.push(u,2,e[u]()):A.push(u,1,l||e[u])),o.push(u)}}C&&cr(this)},render:function(e,t){if(t.tween._time||!gr())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nt,aliases:Ht,getSetter:function(e,t,i){var n=Ht[t];return n&&n.indexOf(",")<0&&(t=n),t in $t&&t!==yt&&(e._gsap.x||Nt(e,"x"))?i&&Ya===i?t==="scale"?tc:Jl:(Ya=i||{})&&(t==="scale"?ec:ic):e.style&&!Hi(e.style[t])?Zl:~t.indexOf("-")?Ql:$i(e,t)},core:{_removeProperty:Zt,_getMatrix:wr}};dt.utils.checkPrefix=Ee;dt.core.getStyleSaver=ao;(function(a,e,t,i){var n=ht(a+","+e+","+t,function(r){$t[r]=1});ht(e,function(r){gt.units[r]="deg",co[r]=1}),Ht[n[13]]=a+","+e,ht(i,function(r){var o=r.split(":");Ht[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gt.units[a]="px"});dt.registerPlugin(_r);var vr=dt.registerPlugin(_r)||dt,Ud=vr.core.Tween;var br={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},wt={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},mo={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},fo="1.3.2",po={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function ai(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function St(){return new Date(ai())}function go(a,e=-1/0,t=1/0){return typeof a=="number"&&!isNaN(a)&&a>=e&&a<=t}function si(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function M(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Jt(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0}function Pt(a,e,t=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**t&&(a=0);let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(a)}catch{return a.toFixed(t)}}function Bi(a,e,t){if(a?.localize)try{let i=a.localize(e);if(i&&i!==e)return i}catch{}return t}function yo(a,e){if(!isFinite(a))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,e,...t){a&&console.log(`[AWC Dev] ${e}`,...t)}function et(a,e){let t=a.engine_settings||{},i=(o,s,c,l)=>go(o,c,l)?o:s,n=i(t.windSpeed,wt.windSpeed,.1,15),r=n;return go(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:r,rainCount:i(t.rainCount,wt.rainCount,.1,10),leafCount:i(t.leafCount,wt.leafCount,.1,10),snowCount:i(t.snowCount,wt.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,wt.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,wt.cloudCount,1,20),splashBounce:i(t.splashBounce,wt.splashBounce,40,120)}}function xr(a){a.forEach(e=>{e!=null&&clearTimeout(e)}),a.length=0}function wo(a){let e=new Set;return a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function Vi(a){window.AnimatedWeatherCardGsap&&wo(a).forEach(e=>e.pause())}function qi(a){window.AnimatedWeatherCardGsap&&wo(a).forEach(e=>e.resume())}function Sr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function Ui(a,e,t,i,n={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let r=a.toLowerCase();if(r.includes("sleet")&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"sleety-stormy";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("lightning")||r.includes("thunder")||r.includes("storm")))return"snowy-stormy";if(r.includes("lightning")||r.includes("thunder")||r.includes("storm"))return"stormy";if(r.includes("fog")||r.includes("mist"))return"foggy";if(r.includes("heavy")&&r.includes("rain"))return"pouring";if(r.includes("pouring")||r.includes("downpour"))return"pouring";if((r.includes("snow")||r.includes("sleet"))&&(r.includes("rain")||r.includes("drizzle")))return"snowy-rainy";if(r.includes("light")&&(r.includes("rain")||r.includes("drizzle")))return"light-rain";if(r.includes("rain")||r.includes("drizzle"))return"rainy";if(r.includes("sleet")||r.includes("hail"))return"sleety";if(r.includes("snow"))return"snowy";if(r.includes("wind"))return"windy";if(r.includes("partly")&&r.includes("cloud"))return"partly-cloudy";if(r.includes("cloud")||r.includes("overcast"))return"cloudy";if(r.includes("clear")||r.includes("sunny")){if(!n.clock){if(r.includes("night"))return"clear-night";if(r.includes("sunny"))return"sunny";if(n.night!==void 0)return n.night?"clear-night":"sunny"}let o=St(),s;if(i)try{let m=new Intl.DateTimeFormat("en-US",{timeZone:i,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(m.find(h=>h.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let c=e??6,l=t??20;return(s<c||s>=l)&&r.includes("clear")?"clear-night":"sunny"}return"sunny"}function li(a,e,t){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),t||oi("rain");if(!e||!e.isEnabled())return t||oi(a);let i=po[a];if(!i)return console.warn(`No color scheme found for animation type: ${a}`),t||oi(a);try{let n=e.getCurrentState(),r=e.getTimeAwareColor(i);return si(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||oi(a))}catch(n){return console.error("Error getting time-aware color:",n),t||oi(a)}}function oi(a){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return t||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var Yi=class Yi{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=i,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!Yi.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};Yi.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Q=Yi;var te=class{constructor(e,t,i){this.layer=e;this.create=t;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let r={el:n};this.items.push(r),t.push(n),this.run(r,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function Me(a,e){return e&&a.progress(Math.random()),a}var mc=420*230;function Pe(a,e){return Math.min(3,Math.max(.6,a*e/mc))||1}function D(a,e){return a+Math.random()*(e-a)}var fc={light:10,rain:18,storm:24,pouring:32},pc={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},gc={light:16,rain:24,storm:34,pouring:42},yc=.3,wc=16,_c=8,vc=[10,30],_o="http://www.w3.org/2000/svg";function bc(a,e,t,i){let n=0,r=0,o=0;for(let s=1;s<=16;s++){let c=s/16,l=2*(1-c)*c*a+c*c*t,d=2*(1-c)*c*e+c*c*i;n+=Math.hypot(l-r,d-o),r=l,o=d}return n}function xc(a,e,t,i){return Math.max(4,Math.round(fc[a]*e*Pe(t,i)))}var Ki=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),o=xc(r,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),c=this.cardConfig.spill_particles!==!1,l=gc[r],d=r==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=i.splashBounce/wt.splashBounce,this.pool=new te(t,()=>{let m=D(1,d),h=document.createElement("div");return h.className="raindrop",h.style.cssText=`
                    width: ${m.toFixed(2)}px;
                    height: ${l}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${m.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,h.dataset.width=m.toFixed(2),h},(m,h,f)=>this.fall(m,n,r,l,c,h,f)),this.pool.start(o).forEach(m=>this.addParticle(m)),k(this.config.devMode,`Rain animation started - ${o} drops (${r})`)}fall(t,i,n,r,o,s,c){let l=i.offsetWidth,d=i.offsetHeight,[m,h]=pc[n],f=D(m,h),g=D(6,Math.max(7,l-6)),u=this.rainConfig.splashEnabled&&Math.random()<yc,p=-r,w=u?d-r:o?d+D(60,120):d,y=Math.max(.25,(w-p)/f),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(t,{y:p},{y:w,duration:y,ease:"none"}),u)b.call(()=>this.createSplash(g+_/2,d),[],y),b.to(t,{scaleY:0,duration:r/f,ease:"none"},y);else if(o){let v=(d-r-p)/f;b.to(t,{opacity:0,duration:y-v,ease:"power1.in"},v)}return Me(b,c)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%wc;let o=D(.22,.28),s=D(4,10)*this.splashBounce,c=n*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+c,duration:o,ease:"power1.out"},0).to(r,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,i){let n=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(_o,"svg"),r.classList.add("rain-rebound");let u=document.createElementNS(_o,"path");u.setAttribute("fill","none"),u.style.stroke=this.splashColor,r.appendChild(u),n.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%_c;let o=r.firstChild,[s,c]=vc,l=D(s,c)*this.splashBounce,d=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,m=D(6,18);o.setAttribute("d",`M 0,0 Q ${d.toFixed(1)},${(-2*l).toFixed(1)} ${(2*d).toFixed(1)},${m.toFixed(1)}`);let h=bc(d,-2*l,2*d,m),f=Math.min(h*.45,6+l*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(h+f).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-h,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?li("lightning",t,"var(--weather-storm-rain-color)"):li("rain",t,"var(--weather-rain-color)")}};var Sc=36,ee=[2,6],Cr=[20,38],vo=10,Cc=.6;function Tc(a,e,t){return Math.max(6,Math.round(Sc*a*Pe(e,t)))}function Ar(a){return Math.min(2.2,Math.max(.3,a/wt.windSpeed))}var ji=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Tc(i.snowCount,n.offsetWidth,n.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,c=Ar(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new te(t,()=>this.createFlake(o),(l,d,m)=>this.fall(l,n,c,s,d,m)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(t){let i=D(ee[0],ee[1]),n=(i-ee[0])/(ee[1]-ee[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=i.toFixed(2),r.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-vo});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:vo,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),r}fall(t,i,n,r,o,s){let c=i.offsetWidth,l=i.offsetHeight,d=parseFloat(t.dataset.size||"4"),m=(d-ee[0])/(ee[1]-ee[0]),h=(Cr[0]+(Cr[1]-Cr[0])*m)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<Cc,g=-d*2,u=f?l-this.pileHeight()-d:r?l+D(60,120):l+d,p=u-g,w=Math.max(.5,p/h),y=p*D(.04,.13)*n,_=D(-y,Math.max(1,c-d));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(t,{y:g},{y:u,x:_+y,duration:w,ease:"none"}),f)b.call(()=>this.addToAccumulation(),[],w),b.to(t,{opacity:0,duration:.6,ease:"power1.out"},w);else if(r){let v=Math.min(w,(l-g)/h);b.to(t,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return Me(b,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let r=Math.min(i,n+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/i,opacity:Math.min(.9,r/i),duration:.3,ease:"power2.out"})}};var Ac=30,bo=[150,230],kc=.3,Xi=6,Zi=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...i},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(Ac*i.snowCount*Pe(n.offsetWidth,n.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=Ar(i.windSpeed)*.5;this.pool=new te(t,()=>{let c=D(1.5,3.5),l=document.createElement("div");return l.className="sleet-particle-gsap",l.dataset.size=c.toFixed(2),l.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${c.toFixed(2)}px;
                    height: ${c.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,l},(c,l,d)=>this.fall(c,n,s,o,l,d)),this.pool.start(r).forEach(c=>this.addParticle(c)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(t,i,n,r,o,s){let c=i.offsetWidth,l=i.offsetHeight,d=parseFloat(t.dataset.size||"2"),m=D(bo[0],bo[1]),h=Math.random()<kc,f=-d*2,g=h?l-d:r?l+D(60,120):l+d,u=g-f,p=Math.max(.3,u/m),w=u*D(.03,.08)*n,y=D(-w,Math.max(1,c-d));window.AnimatedWeatherCardGsap.set(t,{x:y,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(t,{y:f},{y:g,x:y+w,duration:p,ease:"none"}),h)_.call(()=>this.addToPile(i),[],p),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},p);else if(r){let b=Math.min(p,(l-f)/m);_.to(t,{opacity:0,duration:Math.max(.1,p-b),ease:"power1.in"},b)}return Me(_,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${Xi}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=Xi)return;let r=Math.min(Xi,n+.4);i.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(i,{scaleY:r/Xi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function xo(a,e,t,i){return t!==null&&t>0?a*Math.max(0,t-e):a*.6*i}var kr=[90,160];function Co(a,e,t,i,n,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,c=i.offsetHeight,l=20+Math.random()*Math.max(40,c-40),d=Math.random(),m=d<.25,h=d>.8&&l>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*t;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let u=-f-10,p=s+(r?60+Math.random()*80:f+10),w=(kr[0]+Math.random()*(kr[1]-kr[0]))*Le(e.windSpeed)*(m?.6:1),y=(p-u)/w,_=Math.min(y,(s-u)/w),b=h?-(60+Math.random()*80):m?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:u,y:l,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:y,ease:"none"},0).to(o,{y:l+b,duration:y,ease:m?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),r&&y>_&&v.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function To(a,e,t,i,n,r){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),c=s>.6,l=s>.8;o.style.position="absolute",o.style.height=(l?2:1)*t+"px",o.style.borderRadius=c?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let d=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${d} 50%, transparent 100%)`;let m=Math.max(15,(20+Math.random()*60)*t);o.style.width=m+"px";let h=i.offsetWidth,f=i.offsetHeight,g=f*.15+Math.random()*(f*.7);window.AnimatedWeatherCardGsap.set(o,{x:-m,y:g,rotation:c?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(o);let p=(h+m*2)/(Ec*Le(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),r&&r(o)}}).to(o,{scaleX:1,opacity:l?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:h+m,rotation:c?g>f/2?5:-5:0,duration:p,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,p*.3)},p-Math.min(.5,p*.3)),o}var Ec=230,Mc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Le(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/wt.windSpeed)))}var Pc=12;function Lc(a){let e=Math.round(70*a),t=Math.round(35*a);return{width:e,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:e-Math.round(9*a)-t,y:Math.round(-13*a),size:t}]}}var Ao=a=>a>0?Math.ceil(a*3)+1:0,So=new Map;function Dc(a,e,t,i){let n=[a,e,t,i].join(","),r=So.get(n);if(r)return r;let o=Ao(t),s=Math.ceil((a+2*o)*i),c=Math.ceil((e+2*o)*i),l=()=>{let f=document.createElement("canvas");return f.width=s,f.height=c,[f,f.getContext("2d")]},d=null,[m,h]=l();if(h){let[f,g,u]=[o*i,o*i,Math.min(50,a/2,e/2)*i],[p,w]=[f+a*i,g+e*i];if(h.fillStyle="#000",h.beginPath(),h.moveTo(f+u,g),h.arcTo(p,g,p,w,u),h.arcTo(p,w,f,w,u),h.arcTo(f,w,f,g,u),h.arcTo(f,g,p,g,u),h.closePath(),h.fill(),t>0){let[y,_]=l();_&&(_.shadowColor="#000",_.shadowBlur=2*t*i,_.shadowOffsetX=s,_.drawImage(m,-s,0),d=y.toDataURL())}else d=m.toDataURL()}return d&&So.set(n,d),d}function ci(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()})}function Fc(a){return Math.min(1,Math.max(.5,a/160))||1}function ko(a,e,t,i,n){let r=i.offsetWidth,o=i.offsetHeight,s=Mc,c=Le(e.windSpeed),l=[],d=t||e.cloudCount,m=Fc(o);return s.forEach((h,f)=>{let g=Math.ceil(f===0||f===1?d*.4:d*.6);for(let u=1;u<=g;u++){let p=document.createElement("div");p.className=`cloud-gsap cloud-gsap-${h.name}-${u}`;let w=e.cloudBaseSize*h.scale,y=1+(u-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*m,b=Lc(_);p.style.position="absolute",p.style.opacity=h.opacity.toString(),p.dataset.awcO=String(h.opacity),p.style.zIndex=(10+f).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][f],x=n?.color_palette==="theme"?0:h.blur,C=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(G=>({x:G.x,y:G.y,width:G.size,height:G.size}))],A=Math.min(3,Math.max(1,window.devicePixelRatio||1)),T=C.map(G=>Dc(G.width,G.height,x,A)),S=T.every(Boolean),E=S?Ao(x):0;if(p.style.width=b.width+"px",p.style.height=b.height+"px",S)p.classList.add("cloud-masked"),C.forEach((G,X)=>{let st=document.createElement("div");st.style.position="absolute",st.style.left=G.x-E+"px",st.style.top=G.y-E+"px",st.style.width=G.width+2*E+"px",st.style.height=G.height+2*E+"px",st.style.background=v;for(let Bt of["-webkit-",""])st.style.setProperty(`${Bt}mask-image`,`url("${T[X]}")`),st.style.setProperty(`${Bt}mask-size`,"100% 100%"),st.style.setProperty(`${Bt}mask-repeat`,"no-repeat");p.appendChild(st)});else{p.style.borderRadius="50px",p.style.background=v,x>0&&(p.style.filter=`blur(${x}px)`);for(let G of b.puffs){let X=document.createElement("div");X.style.position="absolute",X.style.left=G.x+"px",X.style.top=G.y+"px",X.style.width=G.size+"px",X.style.height=G.size+"px",X.style.borderRadius="50px",X.style.background=v,p.appendChild(X)}}let P=b.width+2*E,H=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][f][u-1]||15+f*10)/60,R=b.height+Math.max(E,Math.ceil(x*3))+2,W=Number(i.dataset?.cloudBand),z=Number.isFinite(W)&&i.dataset?.cloudBand!==void 0?W:null,it=Math.max(150+f*50,P+Pc),Et=h.speed*c*(.9+Math.random()*.2),Mt=(r+2*it)/Et,j=document.createElement("div");j.className="cloud-track",j.dataset.awcF=String(H),j.dataset.awcB=String(R),j.appendChild(p),window.AnimatedWeatherCardGsap.set(p,{opacity:h.opacity});let Ct=[j];if(n?.color_palette==="theme"){let G=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),X=p.cloneNode(!0);X.className="cloud-occluder",X.style.opacity="1";for(let Bt of[X,...Array.from(X.querySelectorAll("div"))])Bt.style.background&&(Bt.style.background="var(--awc-card-bg)");let st=j.cloneNode(!1);st.appendChild(X),G?.appendChild(st),Ct.push(st)}let ot=Ct.length>1?Ct:j;window.AnimatedWeatherCardGsap.set(ot,{xPercent:0,x:-it,y:xo(H,R,z,o)}),a.appendChild(j);let J=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});J.fromTo(ot,{xPercent:0,x:-it},{xPercent:100,x:it,duration:Mt,ease:"none"}),J.progress(Math.random()),l.push(J)}}),l}function Eo(a){let e=a.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function Mo(a,e,t,i,n){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let o=i.offsetWidth,s=i.offsetHeight,c=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],l=c[t]||c[2],d=n.custom_colors?.fog_color,m=(n.color_palette||"default")!=="theme"?si(d)?d:"#e0e0e0":"var(--secondary-text-color)",h=3+Math.floor(Math.random()*3),f=o*l.scale;r.style.cssText=`
        position: absolute;
        top: ${20+t*15}%;
        left: -50%;
        width: ${f}px;
        height: ${l.height}px;
        opacity: ${l.opacity};
        filter: blur(${l.blur}px);
        pointer-events: none;
        z-index: ${5+t};
        overflow: visible;
    `;for(let x=0;x<h;x++){let C=document.createElement("div"),A=f/h*(2+Math.random()*1.2),T=l.height*(1.2+Math.random()*1.6),S=f/h*x-A*.3,E=(Math.random()-.5)*(l.height*.5);C.style.cssText=`
            position: absolute;
            left: ${S}px;
            top: ${E}px;
            width: ${A}px;
            height: ${T}px;
            background: radial-gradient(ellipse ${A/2}px ${T/2}px at center, 
                ${m} 0%, 
                ${m} 40%, 
                transparent 70%);
            border-radius: ${A/2}px ${T/2}px;
            opacity: ${.7+Math.random()*.6}; // Varied opacity per segment
        `,r.appendChild(C)}a.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),u=15/l.speed,p=Math.max(8,u/g),w=o*l.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(r,{x:y,opacity:l.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});b.to(r,{x:_,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:y})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(r,{opacity:l.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function Qi(a){a.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var Oc=3,Hc=2,Po=[900,1400],Lo=[1800,2600],Ji=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...i},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=et(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(Oc*i.leafCount));if(this.leaves.size<n){let r=Co(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(D(Po[0],Po[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=et(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<Hc){let n=To(this.layer(),i,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(D(Lo[0],Lo[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),Vi(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){qi(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var di=[6e3,18e3],Wc=[1500,6e3],Do=.16,tn=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:di[0],maxInterval:di[1],...i},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=Wc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,r=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let c=document.createElementNS("http://www.w3.org/2000/svg","path"),l=30+Math.random()*(n-60),d=20*o,m=20,h=[l+",0"];for(let p=0;p<m;p++){let w=l+(Math.random()*d-d/2),y=r/m*(p+1);h.push(w+","+y)}c.setAttribute("d","M"+h.join(" L"));let f=this.element.timeOfDayManager,g=li("lightning",f,"white");c.setAttribute("stroke",g),c.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),c.setAttribute("fill","none"),s.appendChild(c),t.appendChild(s);let u=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=u,u.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;u.to(i,{y:p,duration:.06,ease:"power2.out"},Do).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},Do+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),i.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var zc=["dawn","day","dusk","night"],Pr=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],Rc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},Ho=(a,e,t)=>Math.min(e,Math.max(a,t)),ie=(a,e,t)=>a+(e-a)*t;function Nc(a,e,t){let i=(e-a+540)%360-180;return(a+i*t+360)%360}function It(a,e,t){let i=([u,p,w])=>[u,p*Math.cos(w*Math.PI/180),p*Math.sin(w*Math.PI/180)],[n,r,o]=i(a),[s,c,l]=i(e),d=ie(n,s,t),m=ie(r,c,t),h=ie(o,l,t),f=Math.hypot(m,h),g=f<1e-6?a[2]:(Math.atan2(h,m)*180/Math.PI+360)%360;return[d,f,g]}function Er([a,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),r=e*Math.sin(i),o=(a+.3963377774*n+.2158037573*r)**3,s=(a-.1055613458*n-.0638541728*r)**3,c=(a-.0894841775*n-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*c,-1.2684380046*o+2.6097574011*s-.3413193965*c,-.0041960863*o-.7034186147*s+1.707614701*c]}var $c=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Lt(a){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=Er(a);if(!e(t)){let i=0,n=a[1];for(let r=0;r<24;r++){let o=(i+n)/2;e(Er([a[0],o,a[2]]))?i=o:n=o}t=Er([a[0],i,a[2]])}return t.map(i=>$c(Ho(0,1,i)))}var Wo=a=>Math.round(Ho(0,1,a)*255);function Gt(a){return"#"+a.map(e=>Wo(e).toString(16).padStart(2,"0")).join("")}function Fo(a,e){return`rgba(${a.map(Wo).join(", ")}, ${Number(e.toFixed(3))})`}function Mr(a,e){return[.15+(a[0]-.15)*.42,a[1]*ie(.75,.5,e),Nc(a[2],262,.45)]}function Ic(a,e){let t=Rc[a],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:ie(.46,.28,t.overcast)};if(a==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:It(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:Mr(t.top,t.overcast),mid:Mr(t.mid,t.overcast),bottom:Mr(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:ie(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:It(t.top,[t.top[0]*.8,.075,292],.5*i),mid:It(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:It(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:It(t.glow,[.82,.13,58],i),glowAlpha:ie(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:It(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:It(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:It(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:It(t.glow,[.88,.09,40],i),glowAlpha:ie(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Gc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function De(a,e){let t=Ic(a,e);return{top:Gt(Lt(t.top)),mid:Gt(Lt(t.mid)),bottom:Gt(Lt(t.bottom)),glow:Fo(Lt(t.glow),t.glowAlpha),scrim:Fo(Lt(Gc(t.top)),t.scrimAlpha)}}var Fe=[.985,.006,250],en=.8,zo=.55,Ro=.4,nn={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},No={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},$o={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function Oe(a,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(a.rx)} ${t(a.ry)} at ${t(a.cx)} ${t(a.cy)}, ${e}, transparent ${t(a.fade)})`}function Io(){let a=[];for(let e of Pr)for(let t of zc){let i=De(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;a.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return a.join(`
`)}function rn(a,e,t){return a==null||!Number.isFinite(a)?t?"day":"night":a<-6?"night":a<6?e?"dawn":"dusk":"day"}var ne=3.2,He="cubic-bezier(0.37, 0, 0.63, 1)",Go={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Bo=Object.keys(Go),Lr=Bo.filter(a=>a.startsWith("--awc-sky-"));function Vo(){return Bo.map(a=>`${a} ${ne}s ${He}`).join(`,
            `)}var Oo=!1;function an(){if(Oo)return;Oo=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[e,t]of Object.entries(Go))try{a.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var Dr=Array.from({length:25},(a,e)=>[e%5/2-1,Math.floor(e/5)/2-1]).filter(([a,e])=>a*a+e*e<=1),Bc=1.9,Vc=.6,on=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");ci(t);let r=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=ko(t,i,r,n,this.cardConfig),this.startWindFactor=Le(i.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let t=this.element.querySelector(this.layerSelector);t&&ci(t),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(t=!1){if(this.occlude()){this.lightSun(1,t);return}let i=this.element.querySelector(".sun-track .sun"),n=i?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!i||!n?.width||getComputedStyle(i).opacity==="0"){r.forEach(y=>this.dense(y,o(y),t));return}let s=n.width/2,c=n.left+s,l=n.top+n.height/2,d=this.element.querySelector(this.containerSelector),m=d?parseFloat(getComputedStyle(d).opacity):1,h=Number.isFinite(m)?m:1,f=r.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*Vc*h),g=r.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),u=(y,_,b)=>g[y].some(v=>{let x=Math.min(v.width,v.height)/2,C=_-Math.min(Math.max(_,v.left+x),v.right-x),A=b-Math.min(Math.max(b,v.top+x),v.bottom-x);return C*C+A*A<=x*x}),p=0,w=r.map(()=>0);for(let[y,_]of Dr)p+=r.reduce((b,v,x)=>u(x,c+y*s,l+_*s)?b*(1-f[x]):b,1),r.forEach((b,v)=>{u(v,c+y*s*1.25,l+_*s*1.25)&&(w[v]+=1/Dr.length)});this.lightSun(p/Dr.length,t),r.forEach((y,_)=>this.dense(y,o(y)*(1+(Bc-1)*Math.min(1,w[_]*3)),t))}occlude(){let t=this.element.querySelector(".animated-weather-card");if(!t||this.cardConfig.color_palette!=="theme")return!1;let i=t.closest("ha-card"),n=i?getComputedStyle(i):null,r=!!n&&(n.backgroundImage||"none")==="none"&&!!n.backgroundColor&&!/rgba|\/|transparent/.test(n.backgroundColor);return r&&t.style.getPropertyValue("--awc-card-bg")!==n.backgroundColor&&t.style.setProperty("--awc-card-bg",n.backgroundColor),t.toggleAttribute("data-occlude",r),r}dense(t,i,n){let r=(Math.round(Math.min(.95,i)*100)/100).toString();t.dataset.awcV!==r&&(t.dataset.awcV=r,n?window.AnimatedWeatherCardGsap?.set(t,{opacity:r}):window.AnimatedWeatherCardGsap?.to(t,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(t,i=!1){let n=this.element.querySelector(".sun-track"),r=Math.round(t*100)/100;!n||r===this.sunLit&&!i||(this.sunLit=r,i?window.AnimatedWeatherCardGsap?.set(n,{opacity:r}):window.AnimatedWeatherCardGsap?.to(n,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=et(this.cardConfig,this.realWindSpeed),i=Le(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:ne,ease:"sine.inOut",overwrite:!0})})}};var sn=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...i},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");Qi(n),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let o=Mo(t,i,r,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}};var qc=5,qo=353,Uc=1440,Yc=1/2,Kc=.25,jc=.2,Xc=2,Zc=2;function Fr(a,e){let t=e>0?Math.min(e,Uc):qo;return Math.max(15,Math.round(a*qc*Math.max(1,t/qo)))}var Uo=20,Yo=10,Qc=12,Ko=(a,e)=>a.right>e.left-Uo&&a.left<e.right+Uo&&a.bottom>e.top-Yo&&a.top<e.bottom+Yo;function hi(a){let e=[],t=document.createRange();if(typeof t.getClientRects!="function")return e;let i=".animation-layer, .animation-container, style, script",n=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=n.nextNode();r;r=n.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(i))){t.selectNodeContents(r);for(let o of Array.from(t.getClientRects()))o.width&&o.height&&e.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(i))continue;let o=r.getBoundingClientRect();o.width&&o.height&&e.push(o)}return e}function Jc(a,e){for(let t of a){let i=t.getBoundingClientRect();t.classList.toggle("awc-veiled",!!i.width&&e.some(n=>Ko(i,n)))}}function jo(a){let e=a.querySelectorAll(".stars-field .star-gsap");if(!e.length)return;let t=a.querySelector(".moon-gsap")?.getBoundingClientRect();Jc(e,t?.width?[...hi(a),t]:hi(a))}function Or(a,e,{moon:t,still:i=!1,words:n=[]}){let r=document.createElement("div");r.className="stars-field";let o=t?document.createElement("div"):null;if(o){o.className="moon-gsap",a.appendChild(o);let l=o.getBoundingClientRect();l.width&&l.height&&(n=[...n,l])}let s=a.getBoundingClientRect(),c=n.length>0&&s.width>0&&s.height>0;for(let l=0;l<e;l++){let d=document.createElement("div");d.className="star-gsap";let m=1+Math.random()*3,h=.3+Math.random()*.5,f=0,g=0,u=!1;for(let p=0;p<(c?Qc:1)&&!u;p++){f=Math.random()*100,g=Math.random()*70;let w=s.left+f/100*s.width,y=s.top+g/100*s.height;u=!c||!n.some(_=>Ko({left:w,top:y,right:w+m,bottom:y+m},_))}if(u||d.classList.add("awc-veiled"),d.style.cssText=`
            width: ${m.toFixed(2)}px;
            height: ${m.toFixed(2)}px;
            left: ${f.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${h.toFixed(2)};
        `,!i&&Math.random()<Yc){let p=Xc+Math.random()*Zc;d.classList.add("twinkle"),d.style.setProperty("--star-o",h.toFixed(2)),d.style.setProperty("--star-dim",(h*(Kc+Math.random()*jc)).toFixed(2)),d.style.animationDuration=`${p.toFixed(2)}s`,d.style.animationDelay=`${(-Math.random()*p).toFixed(2)}s`}r.appendChild(d)}return o?a.insertBefore(r,o):a.appendChild(r),o?[r,o]:[r]}var ln=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...i},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=et(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");n?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=Fr(i.cloudCount,t.clientWidth||n?.clientWidth||0);for(let o of Or(t,r,{moon:this.starsConfig.showMoon,words:n?hi(n):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var cn=class extends Q{constructor(t,i,n,r){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var dn=class{constructor(e,t,i,n){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(e){case"rain":n=new Ki(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new ji(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new Zi(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new Ji(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new tn(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:di[0],maxInterval:di[1]},this.config,this.realWindSpeed);break;case"clouds":n=new on(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new sn(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new ln(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new cn(this.element,i,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var We=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new dn(e,t,n,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??i.intensity??1,r=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,n);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var hn=new Map,Hr=new Set;function Wr(a,e,t){let i=hn.get(a);if(!e){i&&(hn.delete(a),Xo());return}let n={entity:e,sun:t||"sun.sun"};i&&i.entity===n.entity&&i.sun===n.sun||(hn.set(a,n),Xo())}function Zo(a){if(a){for(let e of hn.values())if(e.sun===a)return e.entity}}function Qo(a){return Hr.add(a),()=>{Hr.delete(a)}}function Xo(){for(let a of[...Hr])a()}var un=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:Number(a);return Number.isFinite(e)?e:null},re=a=>typeof a=="string"?a.trim():"";function td(a){if(!a||typeof a!="object")return null;let e=a,t=typeof e.id=="number"?String(e.id):re(e.id);return t?{id:t,label:re(e.flight_number)||re(e.callsign),aircraftCode:re(e.aircraft_code),originCity:re(e.airport_origin_city),originCode:re(e.airport_origin_code_iata),destinationCity:re(e.airport_destination_city),destinationCode:re(e.airport_destination_code_iata),altitudeFt:un(e.altitude),groundSpeedKt:un(e.ground_speed),heading:un(e.heading),verticalSpeed:un(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function zr(a,e){if(!a||!e)return null;let t=a.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let r of i){let o=td(r);o&&n.push(o)}return n}var mn=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(e,t=!1){if(!e)return[];let i=e.filter(s=>!s.onGround),n=new Set(i.map(s=>s.id));if(this.known===null)return this.known=n,t?i.filter((s,c)=>i.findIndex(l=>l.id===s.id)===c):[];let r=[],o=new Set;for(let s of i)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=n,r}reset(){this.known=null}};var fn=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=St(),t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(g.find(u=>u.type==="hour")?.value||"0",10),i=parseInt(g.find(u=>u.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,r,o=this.config.sunriseHour,s=this.config.sunsetHour,c=(o-1+24)%24,l=(o+.5)%24,d=(s-.5+24)%24,m=(s+1)%24,h=(g,u,p)=>u<=p?g>=u&&g<p:g>=u||g<p;h(n,c,l)?r="dawn":h(n,l,d)?r="day":h(n,d,m)?r="dusk":r="night";let f={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},mo.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),r=t.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),c=parseInt(n.substring(4,6),16),l=parseInt(r.substring(0,2),16),d=parseInt(r.substring(2,4),16),m=parseInt(r.substring(4,6),16),h=Math.round(o*(1-i)+l*i),f=Math.round(s*(1-i)+d*i),g=Math.round(c*(1-i)+m*i),u=h.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${u}${p}${w}`}};var Rr=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var ui={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},ed=Io(),id=Gt(Lt(Fe)),Jo=a=>`${Math.round(a*100)}%`,nd=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,rd=48,ad={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Nr=()=>`
${Rr("animated-weather-card")}
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
          --awc-secondary: ${en};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${id};
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
            ${Vo()};
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
        ${ed}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Oe(nn,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${Jo(Ro)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Jo(zo)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Oe(No,"var(--awc-sky-glow)")}; }
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
          background-image: ${nd};
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
          color: ${ui.text};
          background: ${ui.fill};
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
        ${Object.entries(ad).map(([a,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${e}; }`).join(`
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
          --awc-sky-glow-layer: ${Oe($o,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${rd}px;
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
          transition: opacity ${ne/2}s ${He};
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
          transition: transform ${ne}s ${He};
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

`;var $r={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5"},od={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum"},nb:$r,no:$r,nn:$r,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437"}};function mi(a){return a?.locale?.language||a?.language||"en"}function ze(a){return`${mi(a)}|${a?.locale?.time_format??""}|${Ir(a)??""}`}function Ir(a){if(a?.locale?.time_zone!=="server")return;let e=a.config?.time_zone;if(e)try{return new Intl.DateTimeFormat("en",{timeZone:e}),e}catch{return}}function at(a,e,t={}){return sd(od,a,e,t)}function sd(a,e,t,i={}){let n=mi(e).toLowerCase();return(a[n]?.[t]??a[n.split("-")[0]]?.[t]??a.en[t]).replace(/\{(\w+)\}/g,(o,s)=>i[s]??"")}function ld(a){let e=a?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?mi(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function pe(a,e){if(!a)return"--";let t=new Date(a);if(isNaN(t.getTime()))return"--";try{return ts(e,{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function ts(a,e){let t=ld(a),i={...e,timeZone:Ir(a)};return t!==void 0&&(i.hourCycle=t?"h12":"h23"),new Intl.DateTimeFormat(a?mi(a):void 0,i)}function es(a,e){try{let t=ts(e,{hour:"numeric",minute:"2-digit"}).formatToParts(a),i=t.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:t.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:i}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Gr(a,e){try{let t=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Ir(e)}).formatToParts(a),i=n=>Number(t.find(r=>r.type===n)?.value??0);return i("hour")+i("minute")/60+i("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function Br(a,e){let t=Math.round(Math.abs(a)*60),i=Math.floor(t/60),n=t%60,r=mi(e),o=Intl.DurationFormat;if(o&&e)try{return new o(r,{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return r.toLowerCase().split("-")[0]==="uk"?i>0?`${i}\xA0\u0433\u043E\u0434 ${n}\xA0\u0445\u0432`:`${n}\xA0\u0445\u0432`:i>0?`${i}h ${n}m`:`${n}m`}function fi(a,e){let t=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${M(t[1])}<span class="${e}">${M(t[2])}</span>`:M(a)}var is=["humidity","wind","pressure","sun","uv","rain"],ns=["humidity","wind","pressure","sun"];function Vr(a){let e=a.metrics,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t)return[...ns];let i=[];for(let n of t){let r=String(n).trim().toLowerCase();is.includes(r)&&!i.includes(r)&&i.push(r)}return i}var pn=[3,6,8,11],rs=["low","moderate","high","very_high","extreme"];function pi(a){let e=a.uv_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==4)return pn;let i=t.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,r)=>isFinite(n)&&(r===0||n>i[r-1]))?i:pn}function gi(a,e=pn){let t=Math.round(a),i=0;for(;i<4&&t>=e[i];)i++;return rs[i]}var cd={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function dd(a,e){try{let t=a.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Jt(cd,e.state)||e.state}var qr=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:parseFloat(String(a));return isFinite(e)?e:null};function Ur(a,e){return(e.uv_entity?qr(a?.states[e.uv_entity]?.state):null)??qr(e.entity?a?.states[e.entity]?.attributes?.uv_index:void 0)}function Yr(a,e,t){if(t===null||!isFinite(t))return{text:"--",level:null};let i=gi(t,pi(e));return{text:`${Pt(Math.max(0,Math.round(t)),a)} ${Kr(a,i)}`,level:i}}function Kr(a,e){return at(a,`uv_${e}`)}function gn(a,e,t){let i=/\bin\b|inch/i.test(e)?2:1;return`${Pt(Math.max(0,a),t,i)} ${e}`.trim()}function yi(a,e,t){let i=e?a?.states[e]:void 0,n=qr(i?.state);return n===null?null:{value:n,unit:typeof i?.attributes?.unit_of_measurement=="string"?i.attributes.unit_of_measurement:t}}function jr(a,e){let t=yi(a,e.rain_rate_entity,"mm/h");if(t&&t.value>0)return{now:!0,text:gn(t.value,t.unit,a)};let i=yi(a,e.rain_entity,"mm");return i?{now:!1,text:gn(i.value,i.unit,a)}:null}var yn=(a,e)=>at(a,e?"rain_now":"rain_today"),hd=180;function os(a,e){let t=e.note_entity?a?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),r=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!r)return null;let o=Date.parse(t.attributes?.generated_at);return{line:n||r,note:r||n,writtenAt:Number.isNaN(o)?null:o}}function ss(a,e){let t=Number(e.note_max_age??hd);return a.writtenAt===null||!(t>0)?null:a.writtenAt+t*6e4}function Xr(a,e){return a?md(a,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var ud={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function as(a){let e=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(e)?(e%360+360)%360:typeof a=="string"?ud[a.trim().toUpperCase()]??null:null}function Zr(a){return Number(a.temperature_decimals)===1?1:0}function md(a,e){if(!e.entity)throw new Error("Weather entity is required");let t=a.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let S=a.states[e.outdoor_sensor_entity];S&&S.state&&!isNaN(parseFloat(S.state))?i=parseFloat(S.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=Zr(e),r=S=>Pt(n?S:Math.round(S),a,n),o=i!=null&&!isNaN(i)?r(i):"--",s=dd(a,t),c=e.name||t.attributes.friendly_name||"",l=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?Pt(Math.round(E),a)+"%":null},d="--";if(e.humidity_sensor_entity){let S=a.states[e.humidity_sensor_entity];d=S&&l(S.state)||l(t.attributes.humidity)||"--"}else d=l(t.attributes.humidity)||"--";let m="--",h=10,f=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);return isFinite(P)?(h=yo(P,E||"km/h"),m=Pt(Math.round(P),a)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?a.states[e.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(t.attributes.wind_speed,t.attributes.wind_speed_unit);let u=e.wind_direction_sensor_entity?a.states[e.wind_direction_sensor_entity]:void 0,p=as(u?.state)??as(t.attributes.wind_bearing),w=(S,E)=>{let P=typeof S=="number"?S:parseFloat(S);if(!isFinite(P))return null;let F=E.toLowerCase()==="inhg"?2:0;return Pt(P,a,F)+" "+E},y=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?E:null},_="--",b=null;if(e.pressure_sensor_entity){let S=a.states[e.pressure_sensor_entity];if(S){let E=S.attributes.unit_of_measurement||"hPa",P=w(S.state,E);P&&(_=P,b=y(S.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,E)||"--",b=y(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let S=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,S)||"--",b=y(t.attributes.pressure)}let v=null,x;if(e.feels_like_entity&&(x=a.states[e.feels_like_entity]?.state),x===void 0&&t.attributes.apparent_temperature!==void 0&&(x=t.attributes.apparent_temperature),x!==void 0){let S=typeof x=="number"?x:parseFloat(x);isFinite(S)&&(v=r(S)+"\xB0")}let C="--";if(e.indoor_temperature_entity){let S=a.states[e.indoor_temperature_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(C=r(parseFloat(S.state))+"\xB0")}let A="--";if(e.indoor_humidity_entity){let S=a.states[e.indoor_humidity_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(A=Pt(Math.round(parseFloat(S.state)),a)+"%")}let T;if(e.sun_entity){let S=a.states[e.sun_entity];S&&(T={sunrise:S.attributes.next_rising||null,sunset:S.attributes.next_setting||null,dawn:S.attributes.next_dawn||null,dusk:S.attributes.next_dusk||null,noon:S.attributes.next_noon||null,elevation:S.attributes.elevation??null,aboveHorizon:S.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:c,humidity:d,windSpeed:m,windSpeedValue:h,windBearing:p,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:C,indoorHumidity:A,uv:Ur(a,e),sun:T}}function Qr(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function wn(a,e){return{entity:e,tap_action:Qr(a?.tap_action),hold_action:Qr(a?.hold_action),double_tap_action:Qr(a?.double_tap_action)}}function Re(a){return!!a&&a.action!=="none"}function ls(a){return a.tap_action?Re(a.tap_action):!!a.entity}function wi(a,e,t,i={}){let n=e[`${t}_action`],r=n&&Object.prototype.hasOwnProperty.call(i,n.action)?i[n.action]:void 0;if(r){r(t);return}if(t==="tap"&&!n){e.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}Re(n)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function _n(a,e,t,i={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let n=null,r=!1,o,s,c=()=>{clearTimeout(o),o=void 0},l=()=>{n=null,c()},d=()=>{Re(t().double_tap_action)?s?(clearTimeout(s),s=void 0,wi(e,t(),"double_tap",i)):s=setTimeout(()=>{s=void 0,wi(e,t(),"tap",i)},250):wi(e,t(),"tap",i)},m=h=>h.target!==a&&!!h.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",h=>{h.button!==0||m(h)||(n={x:h.clientX,y:h.clientY},r=!1,c(),Re(t().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,wi(e,t(),"hold",i)},500)))}),a.addEventListener("pointermove",h=>{n&&Math.hypot(h.clientX-n.x,h.clientY-n.y)>10&&l()}),a.addEventListener("pointerup",()=>{let h=!!n&&!r;l(),h&&d()}),a.addEventListener("pointercancel",l),a.addEventListener("pointerleave",l),a.addEventListener("keydown",h=>{h.key!=="Enter"&&h.key!==" "||h.target!==a||!ls(t())||(h.preventDefault(),wi(e,t(),"tap",i))}),a.addEventListener("contextmenu",h=>{Re(t().hold_action)&&h.preventDefault()})}function _i(a,e,t){ls(e)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(t?a.setAttribute("role",t):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let i=Re(e.hold_action);a.style.userSelect=i?"none":"",a.style.setProperty("-webkit-user-select",i?"none":""),a.style.setProperty("-webkit-touch-callout",i?"none":"")}var Jr=new Map;function ge(a,e){let t=Jr.get(a);if(t)return t;let i=new Promise((n,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(d=>/animated-weather-card(?:\.min)?\.js/.test(d.src)),c=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,l=document.createElement("script");l.src=c,l.type="module",l.async=!0,l.onload=()=>e()?n():r(new Error(`${c} loaded but registered nothing`)),l.onerror=()=>r(new Error(`Failed to load ${c}`)),document.head.appendChild(l)});return i.catch(()=>Jr.delete(a)),Jr.set(a,i),i}function vi(a){return ge("animated-weather-card-editor",()=>!!customElements.get(a))}var cs={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function ye(a,e){return`<svg class="${e} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${cs[a]}"/></svg>`}function ds(a,e){!a||a.getAttribute("data-icon")===e||(a.setAttribute("data-icon",e),a.firstElementChild?.setAttribute("d",cs[e]))}var fd=29.530588853,pd=Date.UTC(2e3,0,6,18,14),gd={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function hs(a,e){let i=((a.getTime()-pd)/864e5/fd%1+1)%1,n=e?Jt(gd,e):void 0;if(!n)return i;let r=i*28;return r>=27.5&&(r-=28),r=Math.min(n[1],Math.max(n[0],r)),(r/28%1+1)%1}function us(a,e=!1){let t=Math.cos(2*Math.PI*a),i=(1-t)/2,n=a<.5!==e,r=i<.5,o=(Math.abs(t)*50).toFixed(1),s=n===r?1:0,c=n?130:-30,d=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${c} 130L${c} -30Z`}'/></svg>`,m=.3+.7*i;return{mask:`url("data:image/svg+xml,${encodeURIComponent(d)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*m).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*m).toFixed(3)})`}}var K=Math.PI/180,vn=6e4,bi=864e5;function ta(a){let e=(a/bi+24405875e-1-2451545)/36525,t=(280.46646+e*(36000.76983+e*3032e-7))%360,i=357.52911+e*(35999.05029-1537e-7*e),n=.016708634-e*(42037e-9+1267e-10*e),r=Math.sin(i*K)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*i*K)*(.019993-101e-6*e)+Math.sin(3*i*K)*289e-6,o=125.04-1934.136*e,s=t+r-.00569-.00478*Math.sin(o*K),c=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(o*K),l=Math.asin(Math.sin(c*K)*Math.sin(s*K)),d=Math.tan(c/2*K)**2,m=4/K*(d*Math.sin(2*t*K)-2*n*Math.sin(i*K)+4*n*d*Math.sin(i*K)*Math.cos(2*t*K)-.5*d*d*Math.sin(4*t*K)-1.25*n*n*Math.sin(2*i*K));return{declination:l,equationOfTime:m}}function yd(a,e,t){let{declination:i,equationOfTime:n}=ta(a.getTime()),o=((a.getUTCHours()*60+a.getUTCMinutes()+a.getUTCSeconds()/60+n+4*t)%1440+1440)%1440/4-180,s=Math.sin(e*K)*Math.sin(i)+Math.cos(e*K)*Math.cos(i)*Math.cos(o*K);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/K}function ms(a,e,t=St()){let i=t.getTime(),n=Math.floor(i/bi)*bi,r={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=a*K;for(let u=-1;u<=2;u++){let p=n+u*bi,w=p+(720-4*e)*vn,{equationOfTime:y}=ta(w),_=p+(720-4*e-y)*vn,{declination:b}=ta(_);r.noon.push(_),r.midnight.push(_+bi/2);for(let[v,x,C]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let A=(Math.sin(v*K)-Math.sin(o)*Math.sin(b))/(Math.cos(o)*Math.cos(b));if(!(Math.abs(A)<=1))continue;let T=Math.acos(A)/K*4;r[x].push(_-T*vn),r[C].push(_+T*vn)}}let s=u=>u.filter(p=>p>i).sort((p,w)=>p-w)[0]??null,c=u=>u===null?null:new Date(u).toISOString(),l=yd(t,a,e),d=s(r.rising),m=s(r.setting),h=s(r.noon),f=s(r.midnight);return{state:(m!==null&&d!==null?m<d:m!==null?!0:d!==null?!1:l>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:c(s(r.dawn)),next_dusk:c(s(r.dusk)),next_midnight:c(f),next_noon:c(h),next_rising:c(d),next_setting:c(m),elevation:Math.round(l*100)/100,rising:h!==null&&f!==null?h<f:!1}}}var fs=a=>typeof a=="number"?a:typeof a=="string"&&a.trim()?Number(a):NaN;function wd(a){let e=a.latitude!==void 0&&a.latitude!==null&&a.latitude!=="",t=a.longitude!==void 0&&a.longitude!==null&&a.longitude!=="",i=typeof a.time_zone=="string"&&a.time_zone.trim()?a.time_zone.trim():void 0;if(!e&&!t&&!i)return null;let n,r;if(e||t){if(n=fs(a.latitude),r=fs(a.longitude),!e||!t)throw new Error("latitude and longitude go together: set both, or neither");if(!(n>=-90&&n<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${a.latitude})`);if(!(r>=-180&&r<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${a.longitude})`)}if(i)try{new Intl.DateTimeFormat("en",{timeZone:i})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${i})`)}let o=c=>String(Math.round(c*1e4)).replace("-","m"),s=n!==void 0&&r!==void 0?`sun.awc_${o(n)}_${o(r)}`:void 0;return{latitude:n,longitude:r,timeZone:i,sunId:s,key:`${s??""}|${i??""}`}}function _d(a,e,t,i=[]){let n=a;if(n.awcPlace===e.key)return a;let r=n.awcHome??a,o=Object.create(r);if(e.sunId&&t){let s=Object.create(r.states);s[e.sunId]=t;let c=t.state==="above_horizon"?"sunny":"clear-night";for(let l of i){let d=l?r.states[l]:void 0;l&&d&&(d.state==="sunny"||d.state==="clear-night")&&d.state!==c&&(s[l]={...d,state:c})}o.states=s}return o.config={...r.config,...e.latitude!==void 0?{latitude:e.latitude,longitude:e.longitude}:{},...e.timeZone?{time_zone:e.timeZone}:{}},e.timeZone&&(o.locale={...r.locale??{},time_zone:"server"}),o.awcPlace=e.key,o.awcHome=r,o}function vd(a,e=St()){if(!a.sunId||a.latitude===void 0||a.longitude===void 0)return;let t=ms(a.latitude,a.longitude,e),i=e.toISOString();return{entity_id:a.sunId,state:t.state,attributes:{...t.attributes,friendly_name:"Sun"},last_changed:i,last_updated:i,context:{id:"",parent_id:null,user_id:null}}}var Ne=class{constructor(e=()=>[]){this.weather=e;this.place=null;this.timer=0}set(e){let t=wd(e),i=(t?.key??"")!==(this.place?.key??"");return this.place=t,i&&(this.sun=void 0),i}see(e){if(!this.place)return e;let t=Math.floor(ai()/6e4);if(this.place.sunId&&this.sun?.minute!==t){let i=vd(this.place);this.sun=i?{minute:t,entity:i}:void 0}return _d(e,this.place,this.sun?.entity,this.weather())}tick(e){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(e,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var ps=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function gs(a){let e=a.color_palette||"default",t=a.custom_colors||{},i="";if(e!=="theme"){let r=d=>{if(typeof d!="string"||!ps.test(d))return null;let m=d.replace("#","");m.length===3&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]);let h=parseInt(m,16);return{r:h>>16&255,g:h>>8&255,b:h&255}},o=(d,m,h)=>"#"+(d<<16|m<<8|h).toString(16).padStart(6,"0"),s=(d,m)=>{let h=r(d);if(!h)return d;let f=1-m/100;return o(Math.max(0,Math.floor(h.r*f)),Math.max(0,Math.floor(h.g*f)),Math.max(0,Math.floor(h.b*f)))},c=(d,m)=>{let h=r(d);if(!h)return d;let f=m/100;return o(Math.min(255,Math.floor(h.r+(255-h.r)*f)),Math.min(255,Math.floor(h.g+(255-h.g)*f)),Math.min(255,Math.floor(h.b+(255-h.b)*f)))},l=(d,m)=>{let h=t[d];if(!h||typeof h!="string"||!ps.test(h))return;let f=c(h,12),g=s(h,22);i+=`--weather-${m}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${h} 55%, ${g} 100%); `};l("sunny_bg","sunny"),l("rainy_bg","rainy"),l("snowy_bg","snowy"),l("stormy_bg","stormy"),l("windy_bg","windy"),l("cloudy_bg","cloudy")}let n=(r,o)=>{r&&si(r)&&(i+=o.replace(/\$\{value\}/g,r))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.temperature_color,"--awc-hero-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var $e="animated-weather-card-hour";var Ie="animated-weather-card-dev",ys="weather.awc_dev";function xi(a){return a.awcDevBase??a}function xn(a,e){let t=xi(a),i=window.AnimatedWeatherCardDev;if(!i||!e)return t;try{return i.wants(e)?i.lens(t,e):t}catch(n){return console.warn("Animated Weather Card: the dev card's world failed",n),t}}function Si(a){return!!a?.dev_mode&&!window.AnimatedWeatherCardDev?.driven()}function Sn(){return window.AnimatedWeatherCardDev?.offset??0}function Ge(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function Ci(){return window.AnimatedWeatherCardDevCards?Promise.resolve():ge("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var bn=class extends HTMLElement{setConfig(e){this.devCardConfig={...e},this.view?.update()}set hass(e){this.devCardHass=e,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}Ci().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(e=>{console.warn(`Animated Weather Card: ${e.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var ws={horizon:196,peak:34,trough:276,twilightRy:78},_s={horizon:200,peak:96,trough:262,twilightRy:44};function ea(a,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(a>=e&&a<=t)return Math.sin(Math.PI*(a-e)/i);let n=((a-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var ia=(a,e=!1)=>e?1-a/24:a/24,we=(a,e=!1)=>ia(a,e)*1e3,na=(a,e)=>a>=0?e.horizon-a*(e.horizon-e.peak):e.horizon-a*(e.trough-e.horizon);var xs={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},bd={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function xd(a){return Jt(bd,a)??"last-light"}function ra(a,e){let t=n=>n.startsWith("sensor.")&&Jt(xs,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:a,moon_entity:i}:{sun_entity:a}}var Sd=124,vs=16;function Cd(a,e){if(a<1)return 1;let t=Math.max(2,Math.floor((e+vs)/(Sd+vs))),i=Math.ceil(a/t);return Math.ceil(a/i)}function Td(a,e,t,i){let n=[];for(let r=0;r<=240;r++){let o=r/10;n.push(`${we(o,i).toFixed(1)},${na(ea(o,a,e),t).toFixed(1)}`)}return"M"+n.join(" L")}function Tn(a,e){if(!a)return 0;let t=new Date(a);return isNaN(t.getTime())?0:Gr(t,e)}var Ad=a=>fi(a,"st-ampm");an();var bs=Gt(Lt(Fe)),kd=`
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
        color: ${ui.text};
        background: ${ui.fill};
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
        --st-text: ${bs};
        --st-secondary: ${bs};
        --st-secondary-opacity: ${en};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Oe(nn,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Lr.map(a=>`${a} ${ne}s ${He}`).join(", ")};
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
`,aa=class extends HTMLElement{constructor(){super();this.config={};this._place=new Ne(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=t=>this._follow(t.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",Si(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let t=Sn();t!==this._devClock&&(this._devClock=t,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(t){return this._place.see(xn(t,this.config))}setConfig(t){let i=this._place.set(t),n=this._place.place?.sunId;if(!t.sun_entity&&!n&&!t.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let r=!!this.config.dev_mode!=!!t.dev_mode;this.config={...t,sun_entity:n||t.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",Si(this.config)),t.dev_mode&&Ci().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(i||r)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(t){this._homeHass=xi(t),t=this._see(t);let i=this.config.sun_entity||"",n=this.config.moon_entity||"",r=this._hass?.states[i],o=t.states[i],s=this._hass?.states[n]?.state,c=t.states[n]?.state,l=ze(this._hass)!==ze(t),d=this._weatherId()||"",m=d&&this._hass?.states[d]?.state!==t.states[d]?.state;this._hass=t;let h=r?.attributes?.elevation,f=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((h||0)-(f||0))>=.5||n&&s!==c||l||m)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener($e,this._onHour),window.addEventListener(Ie,this._onDev),Ge().add(this),this._unshare||(this._unshare=Qo(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener($e,this._onHour),window.removeEventListener(Ie,this._onDev),Ge().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(t.dataset.fit=n,i){let r=Array.from(i.children).filter(o=>getComputedStyle(o).display!=="none").length;i.style.setProperty("--st-cols",String(Cd(r,i.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){let t=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return wn(this.config,t)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||Zo(this.config.sun_entity)}_skyCondition(t){let i=this._weatherId(),n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let r=Ui(n,void 0,void 0,this._hass?.config?.time_zone,{night:t==="night"});if(Pr.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await vi("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return ra(r.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Jt(xs,i)||i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:xd(i)}}_render(){this._drawnWeather=this._weatherId();let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=St(),o=Gr(r,this._hass),s=Tn(t.sunrise,this._hass),c=Tn(t.sunset,this._hass),l=t.dawn?Tn(t.dawn,this._hass):Math.max(0,s-.5),d=t.dusk?Tn(t.dusk,this._hass):Math.min(24,c+.5),m=c-s,h=t.aboveHorizon,f=h?t.sunset:t.sunrise,g=new Date(f).getTime()-r.getTime(),u=this._hass,p=J=>M(at(u,J)),w=J=>Ad(pe(J,u)),y=g>0?at(u,"in_duration",{duration:Br(g/36e5,u)}):"",_=rn(t.elevation,t.rising,t.aboveHorizon),b=De(this._skyCondition(_),_),v=n?{"--awc-sky-top":b.top,"--awc-sky-mid":b.mid,"--awc-sky-bottom":b.bottom,"--awc-sky-glow":b.glow,"--awc-sky-scrim":b.scrim}:null,x=this.config.compact?_s:ws,C=this.config.direction,A=C==="right_to_left"||C!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:c,rtl:A};let T=Td(s,c,x,A),S=`${T} L${we(24,A)},${x.horizon} L${we(0,A)},${x.horizon} Z`,E=ea(o,s,c),P=ia(o,A)*100,F=na(E,x)/300*100,O=(J,G)=>{let X=Math.max(70,Math.abs(G)/24*1e3*2.4);return`<ellipse cx="${we(J,A).toFixed(1)}" cy="${x.horizon}" rx="${X.toFixed(1)}" ry="${x.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},H=!!this.config.compact,R=this.config.show_header!==!1,W=R?`
            <div class="st-hero">
                ${this.config.title&&!H?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${ye(h?"sunset":"sunrise","st-glyph")}
                    <span>${p(h?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(f)}</div>
                ${y?`<div class="st-countdown">${M(y)}</div>`:""}
            </div>`:this.config.title&&!H?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",z=(J,G,X,st,Bt=!1)=>`
                <div class="st-metric" data-kind="${M(J)}">
                    <div class="st-metric-label">${ye(G,"st-glyph")}<span title="${M(X)}">${M(X)}</span></div>
                    <div class="st-metric-value${Bt?" wrap":""}">${st}</div>
                </div>`,it=!H&&this.config.show_details!==!1,Et=H&&R?`
                        <div class="st-chart-note">${p(h?"sunrise":"sunset")}<span class="st-chart-note-time">${w(h?t.sunrise:t.sunset)}</span></div>`:"",Mt=it?`
            <div class="st-metrics">
                ${h?z("sunrise","sunrise",p("sunrise"),w(t.sunrise)):z("sunset","sunset",p("sunset"),w(t.sunset))}
                ${z("noon","noon",p("solar_noon"),w(t.noon))}
                ${z("daylight","daylight",p("daylight"),M(Br(m,u)))}
                ${z("first-light","first-light",p("first_light"),w(t.dawn))}
                ${z("last-light","last-light",p("last_light"),w(t.dusk))}
                ${i?z("moon",i.icon,p("moon"),M(i.phaseName),!0):""}
            </div>`:"",j=this.config.sun_entity?u?.states[this.config.sun_entity]:void 0,Ct="";try{Ct=j&&u?.formatEntityState?.(j)||""}catch{}let ot=[`${at(u,"sunrise")} ${pe(t.sunrise,u)}`,`${at(u,"sunset")} ${pe(t.sunset,u)}`,Ct].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${W}
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
                            ${O(s,s-l)}
                            ${O(c,d-c)}
                            <path d="${S}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${x.horizon}" x2="${1e3}" y2="${x.horizon}" class="st-horizon"/>
                            <line x1="${we(o,A).toFixed(1)}" y1="0" x2="${we(o,A).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${T}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${T}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${E<0?"below":""}" style="left: ${P.toFixed(2)}%; top: ${F.toFixed(2)}%;"></div>${Et}
                    </div>
                    ${Mt}`,v)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${kd}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),_n(n.parentElement,this,()=>this._actions())),_i(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",r);for(let o of Lr)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=t,this._link&&this._follow(),this._fit()}_follow(t){if(t){if(!t.source||t.sun!==this.config.sun_entity||t.at===null&&!this._link)return;if(this._link=t.at===null?null:t,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let i=this._shadow.querySelector(".st-card");i&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:i,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",aa);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...ra(e,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...ra(e,a),compact:!0}}]:null});function Be(a){let e=Number(a?.attributes?.supported_features);if(!isFinite(e))return["hourly","daily"];let t=[];return e&2&&t.push("hourly"),e&4&&t.push("twice_daily"),e&1&&t.push("daily"),t}function Ss(a){let e=Be(a);return e.includes("daily")?"daily":e.includes("twice_daily")?"twice_daily":null}var Ed=5e3;function Md(){let a=new WeakMap;return{subscribe(e,t,i,n){let r=a.get(e);r||a.set(e,r=new Map);let o=`${t}|${i}`,s=r.get(o);if(!s){let l={listeners:new Set};s=l,r.set(o,l);let d=m=>{l.last=m;for(let h of[...l.listeners])h(m)};l.unsubscribe=e.subscribeMessage(m=>d({type:m?.type??i,forecast:Array.isArray(m?.forecast)?m.forecast:null}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:i}).catch(()=>{r.get(o)===l&&r.delete(o),d({type:i,forecast:null,failed:!0})})}let c=s;return clearTimeout(c.closing),c.closing=void 0,c.listeners.add(n),c.last&&n(c.last),()=>{!c.listeners.delete(n)||c.listeners.size||(c.closing=setTimeout(()=>{c.listeners.size||(r.get(o)===c&&r.delete(o),c.unsubscribe?.then(l=>{typeof l=="function"&&l()}).catch(()=>{}))},Ed))}}}}function Pd(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=Md())}function Cs(a,e,t,i){return a?.connection?.subscribeMessage?Pd().subscribe(a.connection,e,t,i):()=>{}}var An=class{constructor(e){this.changed=e;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(e,t,i){let n=t?e?.states[t]:void 0,r=Be(n),o=i.hourly&&r.includes("hourly"),s=i.daily?Ss(n):null,c=`${t}|${o}|${s}`;if(!e?.connection||!t||!n){this.key&&this.stop();return}if(c===this.key&&this.connection===e.connection)return;this.stop(),this.key=c,this.connection=e.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let l=(d,m)=>{this.stops.push(Cs(e,t,d,h=>{h.failed||m(h.forecast),this.pending.delete(d),this.settled=this.pending.size===0,this.changed()}))};o&&l("hourly",d=>{this.hourly=d}),s&&l(s,d=>{this.daily=d}),this.settled&&this.changed()}stop(){for(let e of this.stops)e();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};an();var Ts=a=>`Wind from ${Math.round(a)}\xB0`,As=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ks=a=>a?"sunset":"sunrise",Ld=18,Dd=450,Fd=1600;function Ve(a,e){return e?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var Od=400,Hd=120,Wd=220,zd=24;window.AnimatedWeatherCardGsap=vr;var Es=["regular","compact","short","tight","minimal"],Rd=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...Es.map(a=>[a,"none"])],kn=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Ne(()=>[this.config?.entity]);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new mn;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new An(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let t=Sn();t!==this.devClock&&(this.devClock=t,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0))};this.devClock=0;this.onNeedle=t=>{let i=t.detail;this.following||this.forecastOn()||i?.at==null||i.source===this||i.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return Ve(r.find(o=>o.startsWith("weather."))??br.entity,t)}actionsConfig(){if(this.surface==="view")return{};let t=wn(this.config,this.config?.entity);return t.tap_action?t:this.config?.layout==="nightstand"&&this.surface==="card"?{...t,tap_action:{action:"none"}}:this.forecastOn()?{...t,tap_action:{action:"forecast"}}:t}see(t){return this.placeView.see(xn(t,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&Si(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let t=this.isConnected&&this.surface!=="view";Wr(this,t?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let t=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:t!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let t=window.AnimatedWeatherCardForecast;if(!t){ge("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}t.version===2&&(this.extras=t.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:De,phase:()=>this.currentSkyPhase(),current:()=>{let t=this.config?.outdoor_sensor_entity||this.config?.entity,i=Number(t?this.config?.outdoor_sensor_entity?this._hass?.states[t]?.state:this._hass?.states[t]?.attributes?.temperature:NaN);return isFinite(i)?i:void 0},temperature:t=>{let i=this.config?Zr(this.config):0;return Pt(i?t:Math.round(t),this._hass,i).replace(/^-/,"\u2212")},conditionName:t=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:t,attributes:{},last_changed:"",last_updated:""})??t,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),reading:(t,i)=>{if(!this.config)return null;if(t==="rain_today"||t==="rain_now"){let o=t==="rain_now"?yi(this._hass,this.config.rain_rate_entity,"mm/h"):yi(this._hass,this.config.rain_entity,"mm");return!o||t==="rain_now"&&!(o.value>0)?null:{label:yn(this._hass,t==="rain_now"),value:gn(o.value,o.unit,this._hass)}}if(t!=="uv")return null;let n=i??Ur(this._hass,this.config);if(n===null||!isFinite(n))return null;let r=gi(n,pi(this.config));return{label:at(this._hass,"uv_index"),value:Pt(Math.max(0,Math.round(n)),this._hass),word:Kr(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=l=>l===void 0||typeof l=="number"&&isFinite(l)&&l>=0&&l<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.placeView.set(t),r=this.placeView.place?.sunId;r&&(t={...t,sun_entity:r});let o=!!this.config?.dev_mode!=!!t.dev_mode;t.dev_mode&&(t.entity||(t={...t,entity:ys}),Ci().then(()=>this.devChanged()).catch(l=>console.warn(`Animated Weather Card: ${l.message}`)));let s=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==t.entity&&(this.following=!1),this.config=t,this.markDev(),(n||o)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&_i(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let l=this.animationController;this._animationGeneration++,this.animationController=new We(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),l&&l.stopAllAnimations().catch(d=>k(this.config?.dev_mode,"Error stopping previous animation controller:",d))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!t.auto_pause!=!!s&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener($e,this.onNeedle),window.addEventListener(Ie,this.devChanged),this.surface!=="view"&&Ge().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new We(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new We(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;Sr(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=Xr(this.hass,this.config)}catch(z){let it=z?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${ye("alert","awc-empty-icon")}
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${M(it)}</div>
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
            `;return}let{temperature:n,weatherCondition:r,location:o,humidity:s,windSpeed:c,windSpeedValue:l,windBearing:d,pressure:m,pressureValue:h,feelsLike:f,indoorTemperature:g,indoorHumidity:u,uv:p,sun:w}=i,y=this.updatePressureTrend(h);this.currentWindSpeedValue=l;let _=w?.aboveHorizon??!1,b=w?pe(_?w.sunset:w.sunrise,this._hass):"--",v=this.config.show_sun!==!1&&!!w&&b!=="--",x=!!this.config.compact,C=this.heroClock(),A=gs(this.config),T=this.config.show_attribute_icons!==!1,S=this.config.show_attribute_labels!==!1,E=(z,it,Et,Mt,j="",Ct)=>{let ot=T||S?`<div class="attribute-label">${T?ye(it,"attribute-icon"):""}${S?`<span>${M(Et)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${z}"${Ct?` data-level="${Ct}"`:""}>${ot}<div class="attribute-value"><span class="attribute-text">${Mt}</span>${j}</div></div>`},P=typeof d=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${d+180}deg);" aria-label="${Ts(d)}"></ha-icon>`:"",F=y?`<ha-icon class="pressure-trend ${y}" icon="${As(y)}" aria-label="Pressure ${y}"></ha-icon>`:"",O=Yr(this._hass,this.config,p),H=jr(this._hass,this.config),R={humidity:()=>E("humidity","humidity",Bi(this._hass,"ui.card.weather.attributes.humidity","Humidity"),M(s)),wind:()=>E("wind","wind",Bi(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),M(c),P),pressure:()=>E("pressure","pressure",Bi(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),M(m),F),sun:()=>v?E("sun",ks(_),at(this._hass,_?"sunset":"sunrise"),fi(b,"awc-ampm")):"",uv:()=>E("uv","noon",at(this._hass,"uv_index"),M(O.text),"",O.level),rain:()=>E("rain","rain",yn(this._hass,!!H?.now),M(H?.text??"--"))},W=this.config.show_attributes!==!1?`
              <div class="weather-attributes${S?"":" values-only"}">${Vr(this.config).map(z=>R[z]()).join("")}</div>`:"";this.innerHTML=`
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
                ${C?`<div class="temperature awc-hero-clock"><span class="awc-clock">${this.heroTime()}</span></div>
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${M(r)}</div>`}
                ${x?`<div class="compact-meta">${this.config.show_clock&&!C?'<span class="awc-clock"></span>':""}${this.config.show_date?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${M(this.compactMeta(o,f))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(f,g,u)}</div>`}
                ${this.noteEnabled()?this.noteHtml(this.currentNote()):""}
              </div>
              ${x?"":W}
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
        ${Nr()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(t,i){if(t)return"";let n=this.config?.show_location!==!1&&i?`<span class="awc-place">${M(i)}</span>`:"",r=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return n||r||o?`<div class="location">${r}${o}${n}</div>`:""}heroTime(){let{time:t,period:i}=es(St(),this._hass);return i?`${M(t)}<span class="awc-ampm">${M(i)}</span>`:M(t.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let r=t.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},Od)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}ge("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?os(this._hass,this.config):this.writtenNote,i=t?ss(t,this.config):null;if(!t||i===null)return t;let n=i-ai();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${M(t?.note??"")}</span><span class="note-short">${M(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let c=t.querySelector(".note-phrase"),l=at(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(c&&(c.textContent=l),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(c,l);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${at(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=M(at(this._hass,"indoors")),n=ye("indoor","indoor-icon");if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let r=`<span class="indoor-label">${i}</span>`;return t==="both"?n+r:r}heroMetaHtml(t,i,n){let r=[];t&&r.push(`<span class="feels-like">${M(at(this._hass,"feels_like"))} ${M(t)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}attachEventListeners(){this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(_n(t,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),_i(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),Vi(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),qi(this),this.flyHeldPlanes())}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return et(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n||(this.clearAnimations(),!this.hass||!i.entity))return;let r=this.hass.states[i.entity];if(!r)return;let o=r.state.toLowerCase(),s=Ui(o,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone,{clock:!!i.enable_day_night_cycle,night:this.skyIsNight()}),c=(i.color_palette||"default")==="theme"?"theme-colors":"",l=n.classList.contains("loading"),d=(...h)=>{n.className=["animated-weather-card",s,...h,c,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},m=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||m||!this.weatherShown()){let h=s==="clear-night"&&this.surface!=="forecast";d(i.animate===!1?"static":"",h?"individual-stars-active":"");let f=n.querySelector(".animation-layer");h&&f&&Or(f,Fr(et(i).cloudCount,n.clientWidth),{moon:!0,still:!0,words:hi(n)}),this.currentWeatherClass=s;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(d(),this.animationsPaused){this.currentWeatherClass=s,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(s)),this.startPlanes()}},i.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Sr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(ci(this),n.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&(Qi(i),Eo(i));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),xr(this.pendingTimeouts)}set hass(t){this.homeHass=xi(t),t=this.see(t);let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!i){this.render(),this.initializeAnimations();return}if(ze(i)!==ze(t)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let n=i.states[this.config.entity],r=t.states[this.config.entity];if(!n||!r){this.render(),this.initializeAnimations();return}if(n.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=l=>l==null?"__missing__":String(l),c=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name"];for(let l of c)if(s(n.attributes[l])!==s(r.attributes[l])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let l=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.uv_entity,this.config.rain_entity,this.config.rain_rate_entity,this.config.sun_entity];for(let d of l){if(!d)continue;let m=i.states[d]?.state,h=t.states[d]?.state;if(m!==h){o=!0;break}}}if(o)this._updateDataInPlace();else{let l=this.config.sun_entity||"sun.sun";i.states[l]!==t.states[l]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let t;try{t=Xr(this._hass,this.config)}catch{return}let{temperature:i,weatherCondition:n,humidity:r,windSpeed:o,windSpeedValue:s,windBearing:c,pressure:l,pressureValue:d,feelsLike:m,indoorTemperature:h,indoorHumidity:f,uv:g,sun:u}=t;this.currentWindSpeedValue=s;let p=!!this.extras?.away(),w=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,y=w&&this.extras?.conditionText(w)||n,_=(x,C)=>{x&&x.textContent!==C&&(x.textContent=C)};if(!p){this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),y);let x=(A,T)=>{_(this.querySelector(`.weather-attributes .attribute[data-kind="${A}"] .attribute-text`),T)};p||(x("humidity",r),x("wind",o),x("pressure",l),this.setUv(g),this.setRain()),p||this.syncValueIcon("wind","wind-bearing-arrow",typeof c=="number"?{icon:"mdi:navigation",transform:`rotate(${c+180}deg)`,label:Ts(c)}:null);let C=this.updatePressureTrend(d);if(this.syncValueIcon("pressure","pressure-trend",C?{icon:As(C),label:`Pressure ${C}`,className:C}:null),u){let A=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),T=A?.querySelector(".attribute-text"),S=fi(pe(u.aboveHorizon?u.sunset:u.sunrise,this._hass),"awc-ampm");T&&T.innerHTML!==S&&(T.innerHTML=S),_(A?.querySelector(".attribute-label > span")??null,at(this._hass,u.aboveHorizon?"sunset":"sunrise")),ds(A?.querySelector(".attribute-icon"),ks(u.aboveHorizon))}}let b=this.querySelector(".compact-meta .awc-meta-text");b&&_(b,this.compactMeta(t.location,m)),_(this.querySelector(".location .awc-place"),t.location);let v=this.querySelector(".hero-meta");if(v){let x=this.heroMetaHtml(m,h,f),C=v.querySelector(".awc-line");Array.from(v.children).filter(T=>T!==C).map(T=>T.outerHTML).join("")!==x&&(v.innerHTML=x,C&&v.prepend(C))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}setUv(t){let i=this.querySelector('.weather-attributes .attribute[data-kind="uv"]');if(!i||!this.config)return;let n=Yr(this._hass,this.config,t),r=i.querySelector(".attribute-text");r&&r.textContent!==n.text&&(r.textContent=n.text),n.level?i.dataset.level=n.level:delete i.dataset.level}setRain(){let t=this.querySelector('.weather-attributes .attribute[data-kind="rain"]');if(!t||!this.config)return;let i=jr(this._hass,this.config),n=t.querySelector(".attribute-text"),r=i?.text??"--";n&&n.textContent!==r&&(n.textContent=r);let o=t.querySelector(".attribute-label > span"),s=yn(this._hass,!!i?.now);o&&o.textContent!==s&&(o.textContent=s)}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let r=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!r)return;let o=r.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(h=>{let f=h.textContent??"",g=document.createElement("span");g.className="note-typed";let u=document.createElement("span");return u.className="note-untyped",u.textContent=f,h.replaceChildren(g,u),{span:h,text:f,typed:g,rest:u}}),n=Math.max(0,...i.map(h=>h.text.length)),r=Math.min(Fd,Math.max(Dd,n*Ld)),o=window.requestAnimationFrame?.bind(window)??(h=>window.setTimeout(()=>h(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),c=Date.now(),l=0,d={text:i.map(h=>h.text).join(""),finish:()=>{s(l);for(let h of i)h.span.textContent=h.text;this.noteTyping===d&&(this.noteTyping=void 0)}},m=()=>{let h=Math.min(1,(Date.now()-c)/r);for(let f of i){let g=Math.round(h*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}h<1?l=o(m):d.finish()};this.noteTyping=d,l=o(m)}fadeThrough(t,i,n){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),r!==void 0)return;let s=()=>{let l=this.heroTextPending.get(t);this.heroTextPending.delete(t),l!==void 0&&(t.textContent=l),n?.()},c=t.animate([{opacity:1},{opacity:0}],{duration:Hd,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});c.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Wd,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),c.cancel()},c.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){ge("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=i,i.start().then(()=>{if(this.animationsPaused)i.pause();else if(this.planes===i){this.flyHeldPlanes();let n=this.askedPlanes;this.askedPlanes=void 0,n&&this.flyPlanes(n)}}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=!this.flightTracker.seeded,n=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(zr(this._hass,this.config.flights_entity),n);r.length&&(i&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let t=this.heldPlanes;if(!t||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let i=(zr(this._hass,this.config?.flights_entity)??[]).filter(n=>!n.onGround&&t.has(n.id));i.length&&this.flyPlanes(i)}flyOver(t){let i=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||i)){if(this.planes){this.flyPlanes(t);return}this.devPlanes=!0,this.askedPlanes=t,this.startPlanes()}}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),Wr(this),window.removeEventListener($e,this.onNeedle),window.removeEventListener(Ie,this.devChanged),Ge().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),xr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new fn({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return rn(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i),this.applyMoon(t)}applyMoon(t){let i=t.querySelector(".animation-layer");if(!i)return;let n=this.config?.moon_entity,r=hs(St(),n?this._hass?.states[n]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(i.dataset.moon===s)return;i.dataset.moon=s;let c=us(r,o);i.style.setProperty("--awc-moon-mask",c.mask),i.style.setProperty("--awc-moon-halo",c.halo)}latitude(){let t=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(t)?t:void 0}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>jo(t));let n=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",t.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let u=t.dataset.metrics;t.dataset.metrics="row";let p=Array.from(r.children),w=parseFloat(getComputedStyle(r).columnGap)||0,y=p.reduce((v,x)=>v+x.getBoundingClientRect().width,0)+w*Math.max(0,p.length-1),_=r.clientWidth-y,b=_<-.5||u==="grid"&&_<zd;t.dataset.metrics=b?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,c=t.querySelector(".weather-note"),l=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!c&&!c.hidden&&c.scrollHeight>c.clientHeight+1,m=!!c&&!c.hidden?Rd:Es.map(u=>[u,void 0]),h=([u,p])=>{t.dataset.height=u,p?t.dataset.note=p:delete t.dataset.note},f=this.extras,g=f?.levels()??[];if(!f||!g.length){for(let u of m)if(h(u),!l())break;f?.fitted();return}for(let u=0;u<g.length;u++){f.setLevel(g[u]);let p=u===g.length-1;for(let w of m){if(!p&&!["regular","close","compact"].includes(w[0]))break;if(h(w),!l()&&(p||f.levelOk(l))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let t=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(Be(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+t:4+t}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let t=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return t?Math.ceil((t*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),this.config?.show_forecast&&(t+=3+this.dayRows()),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await vi("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",kn);var oa=class extends kn{constructor(){super(),this.surface="forecast"}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(e)}gridRows(){if(this.config?.compact)return 2;let e=this.config?.show_hours!==!1&&Be(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),t=Math.max(0,Math.min(10,this.config?.forecast_days??7));return e?t<=3?5:7:Math.max(3,Math.ceil((58+t*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(e,t=[],i=[]){let n=[...t,...i,...Object.keys(e?.states??{})];return Ve(n.find(r=>r.startsWith("weather."))??br.entity,e)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await vi("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",oa);customElements.define("animated-weather-dev-card",bn);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Ve(e,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Ve(e,a),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Ve(e,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Ve(e,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=De("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${fo} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${Gt(Lt(Fe))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
