"use strict";(()=>{function qe(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rr(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ye={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rn={duration:.5,overwrite:!1,delay:0},ha,ae,$,Pe=1e8,R=1/Pe,na=Math.PI*2,ul=na/4,hl=0,zr=Math.sqrt,ml=Math.cos,fl=Math.sin,Q=function(t){return typeof t=="string"},V=function(t){return typeof t=="function"},Be=function(t){return typeof t=="number"},Zn=function(t){return typeof t>"u"},We=function(t){return typeof t=="object"},ge=function(t){return t!==!1},ma=function(){return typeof window<"u"},qn=function(t){return V(t)||Q(t)},Wr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},se=Array.isArray,pl=/random\([^)]+\)/g,gl=/,\s*/g,Er=/(?:-?\.?\d|\.)+/gi,fa=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ht=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ji=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pa=/[+-]=-?[.\d]+/,yl=/[^,'"\[\]\s]+/gi,wl=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,G,Re,ia,ga,Te={},Un={},Nr,$r=function(t){return(Un=Ct(t,Te))&&le},Qn=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},on=function(t,e){return!e&&console.warn(t)},Ir=function(t,e){return t&&(Te[t]=e)&&Un&&(Un[t]=e)||Te},sn=function(){return 0},_l={suppressEvents:!0,isStart:!0,kill:!1},Gn={suppressEvents:!0,kill:!1},vl={suppressEvents:!0},ya={},Xe=[],aa={},qr,fe={},Xi={},Mr=30,Bn=[],wa="",_a=function(t){var e=t[0],n,i;if(We(e)||V(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Bn.length;i--&&!Bn[i].targetTest(e););n=Bn[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Sa(t[i],n)))||t.splice(i,1);return t},Ze=function(t){return t._gsap||_a(Le(t))[0]._gsap},va=function(t,e,n){return(n=t[e])&&V(n)?t[e]():Zn(n)&&t.getAttribute&&t.getAttribute(e)||n},ue=function(t,e){return(t=t.split(",")).forEach(e)||t},U=function(t){return Math.round(t*1e5)/1e5||0},q=function(t){return Math.round(t*1e7)/1e7||0},mt=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bl=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Yn=function(){var t=Xe.length,e=Xe.slice(0),n,i;for(aa={},Xe.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ba=function(t){return!!(t._initted||t._startAt||t.add)},Gr=function(t,e,n,i){Xe.length&&!ae&&Yn(),t.render(e,n,i||!!(ae&&e<0&&ba(t))),Xe.length&&!ae&&Yn()},Br=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(yl).length<2?e:Q(t)?t.trim():t},Vr=function(t){return t},ke=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xl=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ct=function(t,e){for(var n in e)t[n]=e[n];return t},Pr=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=We(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Kn=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},tn=function(t){var e=t.parent||G,n=t.keyframes?xl(se(t.keyframes)):ke;if(ge(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Sl=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ur=function(t,e,n,i,a){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],s;if(a)for(s=e[a];o&&o[a]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Jn=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e._prev,o=e._next;a?a._next=o:t[n]===e&&(t[n]=o),o?o._prev=a:t[i]===e&&(t[i]=a),e._next=e._prev=e.parent=null},Qe=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},dt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Cl=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ra=function(t,e,n,i){return t._startAt&&(ae?t._startAt.revert(Gn):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Tl=function r(t){return!t||t._ts&&r(t.parent)},Lr=function(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0},Tt=function(t,e){var n=Math.floor(t=q(t/e));return t&&n===t?n-1:n},jn=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ei=function(t){return t._end=q(t._start+(t._tDur/Math.abs(t._ts||t._rts||R)||0))},ti=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=q(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ei(t),n._dirty||dt(n,t)),t},Yr=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=jn(t.rawTime(),e),(!e._dur||cn(0,e.totalDuration(),n)-e._tTime>R)&&e.render(n,!0)),dt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-R}},ze=function(t,e,n,i){return e.parent&&Qe(e),e._start=q((Be(n)?n:n||t!==G?Me(t,n,e):t._time)+e._delay),e._end=q(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ur(t,e,"_first","_last",t._sort?"_start":0),oa(e)||(t._recent=e),i||Yr(t,e),t._ts<0&&ti(t,t._tTime),t},Kr=function(t,e){return(Te.ScrollTrigger||Qn("scrollTrigger",e))&&Te.ScrollTrigger.create(e,t)},jr=function(t,e,n,i,a){if(ka(t,e,a),!t._initted)return 1;if(!n&&t._pt&&!ae&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&qr!==pe.frame)return Xe.push(t),t._lazy=[a,i],1},kl=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},oa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Al=function(t,e,n,i){var a=t.ratio,o=e<0||!e&&(!t._start&&kl(t)&&!(!t._initted&&oa(t))||(t._ts<0||t._dp._ts<0)&&!oa(t))?0:1,s=t._rDelay,l=0,d,c,h;if(s&&t._repeat&&(l=cn(0,t._tDur,e),c=Tt(l,s),t._yoyo&&c&1&&(o=1-o),c!==Tt(t._tTime,s)&&(a=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==a||ae||i||t._zTime===R||!e&&t._zTime){if(!t._initted&&jr(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?R:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,d=t._pt;d;)d.r(o,d.d),d=d._next;e<0&&ra(t,e,n,!0),t._onUpdate&&!n&&Ce(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ce(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Qe(t,1),!n&&!ae&&(Ce(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},El=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},kt=function(t,e,n,i){var a=t._repeat,o=q(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=a?a<0?1e10:q(o*(a+1)+t._rDelay*a):o,s>0&&!i&&ti(t,t._tTime=t._tDur*s),t.parent&&ei(t),n||dt(t.parent,t),t},Dr=function(t){return t instanceof oe?dt(t):kt(t,t._dur)},Ml={_start:0,endTime:sn,totalDuration:sn},Me=function r(t,e,n){var i=t.labels,a=t._recent||Ml,o=t.duration()>=Pe?a.endTime(!1):t._dur,s,l,d;return Q(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),d=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(s<0?a:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),d&&n&&(l=l/100*(se(n)?n[0]:n).totalDuration()),s>1?r(t,e.substr(0,s-1),n)+l:o+l)):e==null?o:+e},nn=function(t,e,n){var i=Be(e[1]),a=(i?2:1)+(t<2?0:1),o=e[a],s,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ge(l.vars.inherit)&&l.parent;o.immediateRender=ge(s.immediateRender),t<2?o.runBackwards=1:o.startAt=e[a-1]}return new j(e[0],o,e[a+1])},Je=function(t,e){return t||t===0?e(t):e},cn=function(t,e,n){return n<t?t:n>e?e:n},re=function(t,e){return!Q(t)||!(e=wl.exec(t))?"":e[1]},Pl=function(t,e,n){return Je(n,function(i){return cn(t,e,i)})},sa=[].slice,Xr=function(t,e){return t&&We(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&We(t[0]))&&!t.nodeType&&t!==Re},Ll=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var a;return Q(i)&&!e||Xr(i,1)?(a=n).push.apply(a,Le(i)):n.push(i)})||n},Le=function(t,e,n){return $&&!e&&$.selector?$.selector(t):Q(t)&&!n&&(ia||!At())?sa.call((e||ga).querySelectorAll(t),0):se(t)?Ll(t,n):Xr(t)?sa.call(t,0):t?[t]:[]},la=function(t){return t=Le(t)[0]||on("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Le(e,n.querySelectorAll?n:n===t?on("Invalid scope")||ga.createElement("div"):t)}},Zr=function(t){return t.sort(function(){return .5-Math.random()})},Qr=function(t){if(V(t))return t;var e=We(t)?t:{each:t},n=ct(e.ease),i=e.from||0,a=parseFloat(e.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,d=e.axis,c=i,h=i;return Q(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],h=i[1]),function(u,f,g){var m=(g||e).length,p=o[m],w,y,_,b,v,S,C,T,k;if(!p){if(k=e.grid==="auto"?0:(e.grid||[1,Pe])[1],!k){for(C=-Pe;C<(C=g[k++].getBoundingClientRect().left)&&k<m;);k<m&&k--}for(p=o[m]=[],w=l?Math.min(k,m)*c-.5:i%k,y=k===Pe?0:l?m*h/k-.5:i/k|0,C=0,T=Pe,S=0;S<m;S++)_=S%k-w,b=y-(S/k|0),p[S]=v=d?Math.abs(d==="y"?b:_):zr(_*_+b*b),v>C&&(C=v),v<T&&(T=v);i==="random"&&Zr(p),p.max=C-T,p.min=T,p.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(k>m?m-1:d?d==="y"?m/k:k:Math.max(k,m/k))||0)*(i==="edges"?-1:1),p.b=m<0?a-m:a,p.u=re(e.amount||e.each)||0,n=n&&m<0?Bl(n):n}return m=(p[u]-p.min)/p.max||0,q(p.b+(n?n(m):m)*p.v)+p.u}},da=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=q(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Be(n)?0:re(n))}},Jr=function(t,e){var n=se(t),i,a;return!n&&We(t)&&(i=n=t.radius||Pe,t.values?(t=Le(t.values),(a=!Be(t[0]))&&(i*=i)):t=da(t.increment)),Je(e,n?V(t)?function(o){return a=t(o),Math.abs(a-o)<=i?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),d=Pe,c=0,h=t.length,u,f;h--;)a?(u=t[h].x-s,f=t[h].y-l,u=u*u+f*f):u=Math.abs(t[h]-s),u<d&&(d=u,c=h);return c=!i||d<=i?t[c]:o,a||c===o||Be(o)?c:c+re(o)}:da(t))},eo=function(t,e,n,i){return Je(se(t)?!e:n===!0?!!(n=0):!i,function(){return se(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Dl=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(a,o){return o(a)},i)}},Ol=function(t,e){return function(n){return t(parseFloat(n))+(e||re(n))}},Fl=function(t,e,n){return no(t,e,0,1,n)},to=function(t,e,n){return Je(n,function(i){return t[~~e(i)]})},Hl=function r(t,e,n){var i=e-t;return se(t)?to(t,r(0,t.length),e):Je(n,function(a){return(i+(a-t)%i)%i+t})},Rl=function r(t,e,n){var i=e-t,a=i*2;return se(t)?to(t,r(0,t.length-1),e):Je(n,function(o){return o=(a+(o-t)%a)%a||0,t+(o>i?a-o:o)})},Et=function(t){return t.replace(pl,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(gl);return eo(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},no=function(t,e,n,i,a){var o=e-t,s=i-n;return Je(a,function(l){return n+((l-t)/o*s||0)})},zl=function r(t,e,n,i){var a=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!a){var o=Q(t),s={},l,d,c,h,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(se(t)&&!se(e)){for(c=[],h=t.length,u=h-2,d=1;d<h;d++)c.push(r(t[d-1],t[d]));h--,a=function(g){g*=h;var m=Math.min(u,~~g);return c[m](g-m)},n=e}else i||(t=Ct(se(t)?[]:{},t));if(!c){for(l in e)Ca.call(s,t,l,"get",e[l]);a=function(g){return Ma(g,s)||(o?t.p:t)}}}return Je(n,a)},Or=function(t,e,n){var i=t.labels,a=Pe,o,s,l;for(o in i)s=i[o]-e,s<0==!!n&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},Ce=function(t,e,n){var i=t.vars,a=i[e],o=$,s=t._ctx,l,d,c;if(a)return l=i[e+"Params"],d=i.callbackScope||t,n&&Xe.length&&Yn(),s&&($=s),c=l?a.apply(d,l):a.call(d),$=o,c},Jt=function(t){return Qe(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ae),t.progress()<1&&Ce(t,"onInterrupt"),t},St,io=[],ao=function(t){if(t)if(t=!t.name&&t.default||t,ma()||t.headless){var e=t.name,n=V(t),i=e&&!n&&t.init?function(){this._props=[]}:t,a={init:sn,render:Ma,add:Ca,kill:ed,modifier:Jl,rawVars:0},o={targetTest:0,get:0,getSetter:ni,aliases:{},register:0};if(At(),t!==i){if(fe[e])return;ke(i,ke(Kn(t,a),o)),Ct(i.prototype,Ct(a,Kn(t,o))),fe[i.prop=e]=i,t.targetTest&&(Bn.push(i),ya[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ir(e,i),t.register&&t.register(le,i,he)}else io.push(t)},H=255,en={aqua:[0,H,H],lime:[0,H,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,H],navy:[0,0,128],white:[H,H,H],olive:[128,128,0],yellow:[H,H,0],orange:[H,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[H,0,0],pink:[H,192,203],cyan:[0,H,H],transparent:[H,H,H,0]},Zi=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*H+.5|0},ro=function(t,e,n){var i=t?Be(t)?[t>>16,t>>8&H,t&H]:0:en.black,a,o,s,l,d,c,h,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),en[t])i=en[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),o=t.charAt(2),s=t.charAt(3),t="#"+a+a+o+o+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&H,i&H,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&H,t&H]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Er),!e)l=+i[0]%360/360,d=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(d+1):c+d-c*d,a=c*2-o,i.length>3&&(i[3]*=1),i[0]=Zi(l+1/3,a,o),i[1]=Zi(l,a,o),i[2]=Zi(l-1/3,a,o);else if(~t.indexOf("="))return i=t.match(fa),n&&i.length<4&&(i[3]=1),i}else i=t.match(Er)||en.transparent;i=i.map(Number)}return e&&!g&&(a=i[0]/H,o=i[1]/H,s=i[2]/H,h=Math.max(a,o,s),u=Math.min(a,o,s),c=(h+u)/2,h===u?l=d=0:(f=h-u,d=c>.5?f/(2-h-u):f/(h+u),l=h===a?(o-s)/f+(o<s?6:0):h===o?(s-a)/f+2:(a-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(d*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},oo=function(t){var e=[],n=[],i=-1;return t.split(Ge).forEach(function(a){var o=a.match(ht)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fr=function(t,e,n){var i="",a=(t+i).match(Ge),o=e?"hsla(":"rgba(",s=0,l,d,c,h;if(!a)return t;if(a=a.map(function(u){return(u=ro(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(c=oo(t),l=n.c,l.join(i)!==c.c.join(i)))for(d=t.replace(Ge,"1").split(ht),h=d.length-1;s<h;s++)i+=d[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(c.length?c:a.length?a:n).shift());if(!d)for(d=t.split(Ge),h=d.length-1;s<h;s++)i+=d[s]+a[s];return i+d[h]},Ge=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in en)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Wl=/hsl[a]?\(/,xa=function(t){var e=t.join(" "),n;if(Ge.lastIndex=0,Ge.test(e))return n=Wl.test(e),t[1]=Fr(t[1],n),t[0]=Fr(t[0],n,oo(t[1])),!0},ln,pe=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,a=1e3/240,o=a,s=[],l,d,c,h,u,f,g=function m(p){var w=r()-i,y=p===!0,_,b,v,S;if((w>t||w<0)&&(n+=w-e),i+=w,v=i-n,_=v-o,(_>0||y)&&(S=++h.frame,u=v-h.time*1e3,h.time=v=v/1e3,o+=_+(_>=a?4:a-_),b=1),y||(l=d(m)),b)for(f=0;f<s.length;f++)s[f](v,u,S,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Nr&&(!ia&&ma()&&(Re=ia=window,ga=Re.document||{},Te.gsap=le,(Re.gsapVersions||(Re.gsapVersions=[])).push(le.version),$r(Un||Re.GreenSockGlobals||!Re.gsap&&Re||{}),io.forEach(ao)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),d=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ln=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ln=0,d=sn},lagSmoothing:function(p,w){t=p||1/0,e=Math.min(w||33,t)},fps:function(p){a=1e3/(p||240),o=h.time*1e3+a},add:function(p,w,y){var _=w?function(b,v,S,C){p(b,v,S,C),h.remove(_)}:p;return h.remove(p),s[y?"unshift":"push"](_),At(),_},remove:function(p,w){~(w=s.indexOf(p))&&s.splice(w,1)&&f>=w&&f--},_listeners:s},h})(),At=function(){return!ln&&pe.wake()},L={},Nl=/^[\d.\-M][\d.\-,\s]/,$l=/["']/g,Il=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],a=1,o=n.length,s,l,d;a<o;a++)l=n[a],s=a!==o-1?l.lastIndexOf(","):l.length,d=l.substr(0,s),e[i]=isNaN(d)?d.replace($l,"").trim():+d,i=l.substr(s+1).trim();return e},ql=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Gl=function(t){var e=(t+"").split("("),n=L[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Il(e[1])]:ql(t).split(",").map(Br)):L._CE&&Nl.test(t)?L._CE("",t):n},Bl=function(t){return function(e){return 1-t(1-e)}},ct=function(t,e){return t&&(V(t)?t:L[t]||Gl(t))||e},ft=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var a={easeIn:e,easeOut:n,easeInOut:i},o;return ue(t,function(s){L[s]=Te[s]=a,L[o=s.toLowerCase()]=n;for(var l in a)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=a[l]}),a},so=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qi=function r(t,e,n){var i=e>=1?e:1,a=(n||(t?.3:.45))/(e<1?e:1),o=a/na*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*fl((c-o)*a)+1},l=t==="out"?s:t==="in"?function(d){return 1-s(1-d)}:so(s);return a=na/a,l.config=function(d,c){return r(t,d,c)},l},Ji=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(a){return 1-n(1-a)}:so(n);return i.config=function(a){return r(t,a)},i};ue("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ft(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;ft("Elastic",Qi("in"),Qi("out"),Qi());(function(r,t){var e=1/t,n=2*e,i=2.5*e,a=function(s){return s<e?r*s*s:s<n?r*Math.pow(s-1.5/t,2)+.75:s<i?r*(s-=2.25/t)*s+.9375:r*Math.pow(s-2.625/t,2)+.984375};ft("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);ft("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ft("Circ",function(r){return-(zr(1-r*r)-1)});ft("Sine",function(r){return r===1?1:-ml(r*ul)+1});ft("Back",Ji("in"),Ji("out"),Ji());L.SteppedEase=L.steps=Te.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),a=e?1:0,o=1-R;return function(s){return((i*cn(0,o,s)|0)+a)*n}}};rn.ease=L["quad.out"];ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wa+=r+","+r+"Params,"});var Sa=function(t,e){this.id=hl++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:va,this.set=e?e.getSetter:ni},dn=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,kt(this,+e.duration,1,1),this.data=e.data,$&&(this._ctx=$,$.data.push(this)),ln||pe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,kt(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(At(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ti(this,n),!a._dp||a.parent||Yr(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ze(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===R||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gr(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lr(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lr(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?Tt(this._tTime,a)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-R?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?jn(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-R?0:this._rts,this.totalTime(cn(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),ei(this),Cl(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==R&&(this._tTime-=R)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=q(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ze(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ge(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jn(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vl);var i=ae;return ae=n,ba(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ae=i,this},t.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dr(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dr(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Me(this,n),ge(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ge(i)),this._dur||(this._zTime=-R),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-R:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-R,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-R)},t.eventCallback=function(n,i,a){var o=this.vars;return arguments.length>1?(i?(o[n]=i,a&&(o[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,a=i._prom;return new Promise(function(o){var s=V(n)?n:Vr,l=function(){var c=i.then;i.then=null,a&&a(),V(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Jt(this)},r})();ke(dn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-R,_prom:0,_ps:!1,_rts:1});var oe=(function(r){Rr(t,r);function t(n,i){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=ge(n.sortChildren),G&&ze(n.parent||G,qe(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Kr(qe(a),n.scrollTrigger),a}var e=t.prototype;return e.to=function(i,a,o){return nn(0,arguments,this),this},e.from=function(i,a,o){return nn(1,arguments,this),this},e.fromTo=function(i,a,o,s){return nn(2,arguments,this),this},e.set=function(i,a,o){return a.duration=0,a.parent=this,tn(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new j(i,a,Me(this,o),1),this},e.call=function(i,a,o){return ze(this,j.delayedCall(0,i,a),o)},e.staggerTo=function(i,a,o,s,l,d,c){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=d,o.onCompleteParams=c,o.parent=this,new j(i,o,Me(this,l)),this},e.staggerFrom=function(i,a,o,s,l,d,c){return o.runBackwards=1,tn(o).immediateRender=ge(o.immediateRender),this.staggerTo(i,a,o,s,l,d,c)},e.staggerFromTo=function(i,a,o,s,l,d,c,h){return s.startAt=o,tn(s).immediateRender=ge(s.immediateRender),this.staggerTo(i,a,s,l,d,c,h)},e.render=function(i,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=i<=0?0:q(i),h=this._zTime<0!=i<0&&(this._initted||!d),u,f,g,m,p,w,y,_,b,v,S,C;if(this!==G&&c>l&&i>=0&&(c=l),c!==this._tTime||o||h){if(s!==this._time&&d&&(c+=this._time-s,i+=this._time-s),u=c,b=this._start,_=this._ts,w=!_,h&&(d||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,a,o);if(u=q(c%p),c===l?(m=this._repeat,u=d):(v=q(c/p),m=~~v,m&&m===v&&(u=d,m--),u>d&&(u=d)),v=Tt(this._tTime,p),!s&&this._tTime&&v!==m&&this._tTime-v*p-this._dur<=0&&(v=m),S&&m&1&&(u=d-u,C=1),m!==v&&!this._lock){var T=S&&v&1,k=T===(S&&m&1);if(m<v&&(T=!T),s=T?0:c%d?d:c,this._lock=1,this.render(s||(C?0:q(m*p)),a,!d)._lock=0,this._tTime=c,!a&&this.parent&&Ce(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,v=m),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,k&&(this._lock=2,s=T?d:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=El(this,q(s),q(u)),y&&(c-=u-(u=y._start))),this._tTime=c,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&d&&!a&&!v&&(Ce(this,"onStart"),this._tTime!==c))return this;if(u>=s&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,a,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,a,o),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=-R);break}}f=g}else{f=this._last;for(var x=i<0?i:u;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,a,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,a,o||ae&&ba(f)),u!==this._time||!this._ts&&!w){y=0,g&&(c+=this._zTime=x?-R:R);break}}f=g}}if(y&&!a&&(this.pause(),y.render(u>=s?0:-R)._zTime=u>=s?1:-1,this._ts))return this._start=b,ei(this),this.render(i,a,o);this._onUpdate&&!a&&Ce(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Qe(this,1),!a&&!(i<0&&!s)&&(c||s||!l)&&(Ce(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,a){var o=this;if(Be(a)||(a=Me(this,a,i)),!(i instanceof dn)){if(se(i))return i.forEach(function(s){return o.add(s,a)}),this;if(Q(i))return this.addLabel(i,a);if(V(i))i=j.delayedCall(0,i);else return this}return this!==i?ze(this,i,a):this},e.getChildren=function(i,a,o,s){i===void 0&&(i=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Pe);for(var l=[],d=this._first;d;)d._start>=s&&(d instanceof j?a&&l.push(d):(o&&l.push(d),i&&l.push.apply(l,d.getChildren(!0,a,o)))),d=d._next;return l},e.getById=function(i){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===i)return a[o]},e.remove=function(i){return Q(i)?this.removeLabel(i):V(i)?this.killTweensOf(i):(i.parent===this&&Jn(this,i),i===this._recent&&(this._recent=this._last),dt(this))},e.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=q(pe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},e.addLabel=function(i,a){return this.labels[i]=Me(this,a),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,a,o){var s=j.delayedCall(0,a||sn,o);return s.data="isPause",this._hasPause=1,ze(this,s,Me(this,i))},e.removePause=function(i){var a=this._first;for(i=Me(this,i);a;)a._start===i&&a.data==="isPause"&&Qe(a),a=a._next},e.killTweensOf=function(i,a,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)je!==s[l]&&s[l].kill(i,a);return this},e.getTweensOf=function(i,a){for(var o=[],s=Le(i),l=this._first,d=Be(a),c;l;)l instanceof j?bl(l._targets,s)&&(d?(!je||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(c=l.getTweensOf(s,a)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(i,a){a=a||{};var o=this,s=Me(o,i),l=a,d=l.startAt,c=l.onStart,h=l.onStartParams,u=l.immediateRender,f,g=j.to(o,ke({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale())||R,onStart:function(){if(o.pause(),!f){var p=a.duration||Math.abs((s-(d&&"time"in d?d.time:o._time))/o.timeScale());g._dur!==p&&kt(g,p,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,h||[])}},a));return u?g.render(0):g},e.tweenFromTo=function(i,a,o){return this.tweenTo(a,ke({startAt:{time:Me(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Or(this,Me(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Or(this,Me(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+R)},e.shiftChildren=function(i,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,d;for(i=q(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(a)for(d in l)l[d]>=o&&(l[d]+=i);return dt(this)},e.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),dt(this)},e.totalDuration=function(i){var a=0,o=this,s=o._last,l=Pe,d,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)d=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,ze(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(a-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=q(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=d;kt(o,o===G&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(G._ts&&(Gr(G,jn(i,G)),qr=pe.frame),pe.frame>=Mr){Mr+=ye.autoSleep||120;var a=G._first;if((!a||!a._ts)&&ye.autoSleep&&pe._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||pe.sleep()}}},t})(dn);ke(oe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vl=function(t,e,n,i,a,o,s){var l=new he(this._pt,t,e,0,1,Ea,null,a),d=0,c=0,h,u,f,g,m,p,w,y;for(l.b=n,l.e=i,n+="",i+="",(w=~i.indexOf("random("))&&(i=Et(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),u=n.match(ji)||[];h=ji.exec(i);)g=h[0],m=i.substring(d,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==u[c++]&&(p=parseFloat(u[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:p,c:g.charAt(1)==="="?mt(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},d=ji.lastIndex);return l.c=d<i.length?i.substring(d,i.length):"",l.fp=s,(pa.test(i)||w)&&(l.e=0),this._pt=l,l},Ca=function(t,e,n,i,a,o,s,l,d,c){V(i)&&(i=i(a||0,t,o));var h=t[e],u=n!=="get"?n:V(h)?d?t[e.indexOf("set")||!V(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():h,f=V(h)?d?Xl:uo:Aa,g;if(Q(i)&&(~i.indexOf("random(")&&(i=Et(i)),i.charAt(1)==="="&&(g=mt(u,i)+(re(u)||0),(g||g===0)&&(i=g))),!c||u!==i||ca)return!isNaN(u*i)&&i!==""?(g=new he(this._pt,t,e,+u||0,i-(u||0),typeof h=="boolean"?Ql:ho,0,f),d&&(g.fp=d),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&Qn(e,i),Vl.call(this,t,e,u,i,f,l||ye.stringFilter,d))},Ul=function(t,e,n,i,a){if(V(t)&&(t=an(t,a,e,n,i)),!We(t)||t.style&&t.nodeType||se(t)||Wr(t))return Q(t)?an(t,a,e,n,i):t;var o={},s;for(s in t)o[s]=an(t[s],a,e,n,i);return o},Ta=function(t,e,n,i,a,o){var s,l,d,c;if(fe[t]&&(s=new fe[t]).init(a,s.rawVars?e[t]:Ul(e[t],i,a,o,n),n,i,o)!==!1&&(n._pt=l=new he(n._pt,a,t,0,1,s.render,s,0,s.priority),n!==St))for(d=n._ptLookup[n._targets.indexOf(a)],c=s._props.length;c--;)d[s._props[c]]=l;return s},je,ca,ka=function r(t,e,n){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,d=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,m=t._startAt,p=t._targets,w=t.parent,y=w&&w.data==="nested"?w.vars.targets:p,_=t._overwrite==="auto"&&!ha,b=t.timeline,v=i.easeReverse||h,S,C,T,k,x,E,P,O,z,I,W,F,te;if(b&&(!u||!a)&&(a="none"),t._ease=ct(a,rn.ease),t._rEase=v&&(ct(v)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||u&&!i.stagger){if(O=p[0]?Ze(p[0]).harness:0,F=O&&i[O.prop],S=Kn(i,ya),m&&(m._zTime<0&&m.progress(1),e<0&&c&&s&&!f?m.render(-1,!0):m.revert(c&&g?Gn:_l),m._lazy=0),o){if(Qe(t._startAt=j.set(p,ke({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!m&&ge(l),startAt:null,delay:0,onUpdate:d&&function(){return Ce(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ae||!s&&!f)&&t._startAt.revert(Gn),s&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(c&&g&&!m){if(e&&(s=!1),T=ke({overwrite:!1,data:"isFromStart",lazy:s&&!m&&ge(l),immediateRender:s,stagger:0,parent:w},S),F&&(T[O.prop]=F),Qe(t._startAt=j.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ae?t._startAt.revert(Gn):t._startAt.render(-1,!0)),t._zTime=e,!s)r(t._startAt,R,R);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ge(l)||l&&!g,C=0;C<p.length;C++){if(x=p[C],P=x._gsap||_a(p)[C]._gsap,t._ptLookup[C]=I={},aa[P.id]&&Xe.length&&Yn(),W=y===p?C:y.indexOf(x),O&&(z=new O).init(x,F||S,t,W,y)!==!1&&(t._pt=k=new he(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(xe){I[xe]=k}),z.priority&&(E=1)),!O||F)for(T in S)fe[T]&&(z=Ta(T,S,t,W,x,y))?z.priority&&(E=1):I[T]=k=Ca.call(t,x,T,"get",S[T],W,y,0,i.stringFilter);t._op&&t._op[C]&&t.kill(x,t._op[C]),_&&t._pt&&(je=t,G.killTweensOf(x,I,t.globalTime(e)),te=!t.parent,je=0),t._pt&&l&&(aa[P.id]=1)}E&&Pa(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!te,u&&e<=0&&b.render(Pe,!0,!0)},Yl=function(t,e,n,i,a,o,s,l){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!d)for(d=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ca=1,t.vars[e]="+=0",ka(t,s),ca=0,l?on(e+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(f=d.length;f--;)h=d[f],c=h._pt||h,c.s=(i||i===0)&&!a?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=U(n)+re(h.e)),h.b&&(h.b=c.s+re(h.b))},Kl=function(t,e){var n=t[0]?Ze(t[0]).harness:0,i=n&&n.aliases,a,o,s,l;if(!i)return e;a=Ct({},e);for(o in i)if(o in a)for(l=i[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},jl=function(t,e,n,i){var a=e.ease||i||"power1.inOut",o,s;if(se(e))s=n[t]||(n[t]=[]),e.forEach(function(l,d){return s.push({t:d/(e.length-1)*100,v:l,e:a})});else for(o in e)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(t),v:e[o],e:a})},an=function(t,e,n,i,a){return V(t)?t.call(e,n,i,a):Q(t)&&~t.indexOf("random(")?Et(t):t},lo=wa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",co={};ue(lo+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return co[r]=1});var j=(function(r){Rr(t,r);function t(n,i,a,o){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=r.call(this,o?i:tn(i))||this;var l=s.vars,d=l.duration,c=l.delay,h=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,w=i.parent||G,y=(se(n)||Wr(n)?Be(n[0]):"length"in i)?[n]:Le(n),_,b,v,S,C,T,k,x;if(s._targets=y.length?_a(y):on("GSAP target "+n+" not found. https://gsap.com",!ye.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=f,g||u||qn(d)||qn(c)){i=s.vars;var E=i.easeReverse||i.yoyoEase;if(_=s.timeline=new oe({data:"nested",defaults:m||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=qe(s),_._start=0,u||qn(d)||qn(c)){if(S=y.length,k=u&&Qr(u),We(u))for(C in u)~lo.indexOf(C)&&(x||(x={}),x[C]=u[C]);for(b=0;b<S;b++)v=Kn(i,co),v.stagger=0,E&&(v.easeReverse=E),x&&Ct(v,x),T=y[b],v.duration=+an(d,qe(s),b,T,y),v.delay=(+an(c,qe(s),b,T,y)||0)-s._delay,!u&&S===1&&v.delay&&(s._delay=c=v.delay,s._start+=c,v.delay=0),_.to(T,v,k?k(b,T,y):0),_._ease=L.none;_.duration()?d=c=0:s.timeline=0}else if(g){tn(ke(_.vars.defaults,{ease:"none"})),_._ease=ct(g.ease||i.ease||"none");var P=0,O,z,I;if(se(g))g.forEach(function(W){return _.to(y,W,">")}),_.duration();else{v={};for(C in g)C==="ease"||C==="easeEach"||jl(C,g[C],v,g.easeEach);for(C in v)for(O=v[C].sort(function(W,F){return W.t-F.t}),P=0,b=0;b<O.length;b++)z=O[b],I={ease:z.e,duration:(z.t-(b?O[b-1].t:0))/100*d},I[C]=z.v,_.to(y,I,P),P+=I.duration;_.duration()<d&&_.to({},{duration:d-_.duration()})}}d||s.duration(d=_.duration())}else s.timeline=0;return f===!0&&!ha&&(je=qe(s),G.killTweensOf(y),je=0),ze(w,qe(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!d&&!g&&s._start===q(w._time)&&ge(h)&&Tl(qe(s))&&w.data!=="nested")&&(s._tTime=-R,s.render(Math.max(0,-c)||0)),p&&Kr(qe(s),p),s}var e=t.prototype;return e.render=function(i,a,o){var s=this._time,l=this._tDur,d=this._dur,c=i<0,h=i>l-R&&!c?l:i<R?0:i,u,f,g,m,p,w,y,_;if(!d)Al(this,i,a,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(u=h,_=this.timeline,this._repeat){if(m=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,a,o);if(u=q(h%m),h===l?(g=this._repeat,u=d):(p=q(h/m),g=~~p,g&&g===p?(u=d,g--):u>d&&(u=d)),w=this._yoyo&&g&1,w&&(u=d-u),p=Tt(this._tTime,m),u===s&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!w&&!this._lock&&u!==m&&this._initted&&(this._lock=o=1,this.render(q(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(jr(this,c?i:u,o,a,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(d!==this._dur)return this.render(i,a,o)}if(this._rEase){var b=u<s;if(b!==this._inv){var v=b?s:d-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/d);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!a&&!p&&(Ce(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;_&&_.render(i<0?i:_._dur*_._ease(u/this._dur),a,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(c&&ra(this,i,a,o),Ce(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!a&&this.parent&&Ce(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&ra(this,i,!0,!0),(i||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qe(this,1),!a&&!(c&&!s)&&(h||s||w)&&(Ce(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,a,o,s,l){ln||pe.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ka(this,d),c=this._ease(d/this._dur),Yl(this,i,a,o,s,c,d,l)?this.resetTo(i,a,o,s,1):(ti(this,0),this.parent||Ur(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Jt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ae),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,je&&je.vars.overwrite!==!0)._first||Jt(this),this.parent&&o!==this.timeline.totalDuration()&&kt(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?Le(i):s,d=this._ptLookup,c=this._pt,h,u,f,g,m,p,w;if((!a||a==="all")&&Sl(s,l))return a==="all"&&(this._pt=0),Jt(this);for(h=this._op=this._op||[],a!=="all"&&(Q(a)&&(m={},ue(a,function(y){return m[y]=1}),a=m),a=Kl(s,a)),w=s.length;w--;)if(~l.indexOf(s[w])){u=d[w],a==="all"?(h[w]=a,g=u,f={}):(f=h[w]=h[w]||{},g=a);for(m in g)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Jn(this,p,"_pt"),delete u[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&c&&Jt(this),this},t.to=function(i,a){return new t(i,a,arguments[2])},t.from=function(i,a){return nn(1,arguments)},t.delayedCall=function(i,a,o,s){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},t.fromTo=function(i,a,o){return nn(2,arguments)},t.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(i,a)},t.killTweensOf=function(i,a,o){return G.killTweensOf(i,a,o)},t})(dn);ke(j.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ue("staggerTo,staggerFrom,staggerFromTo",function(r){j[r]=function(){var t=new oe,e=sa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Aa=function(t,e,n){return t[e]=n},uo=function(t,e,n){return t[e](n)},Xl=function(t,e,n,i){return t[e](i.fp,n)},Zl=function(t,e,n){return t.setAttribute(e,n)},ni=function(t,e){return V(t[e])?uo:Zn(t[e])&&t.setAttribute?Zl:Aa},ho=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ql=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ea=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ma=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Jl=function(t,e,n,i){for(var a=this._pt,o;a;)o=a._next,a.p===i&&a.modifier(t,e,n),a=o},ed=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Jn(this,e,"_pt"):e.dep||(n=1),e=i;return!n},td=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pa=function(t){for(var e=t._pt,n,i,a,o;e;){for(n=e._next,i=a;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:a=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=a},he=(function(){function r(e,n,i,a,o,s,l,d,c){this.t=n,this.s=a,this.c=o,this.p=i,this.r=s||ho,this.d=l||this,this.set=d||Aa,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=td,this.m=n,this.mt=a,this.tween=i},r})();ue(wa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ya[r]=1});Te.TweenMax=Te.TweenLite=j;Te.TimelineLite=Te.TimelineMax=oe;G=new oe({sortChildren:!1,defaults:rn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ye.stringFilter=xa;var ut=[],Vn={},nd=[],Hr=0,id=0,ea=function(t){return(Vn[t]||nd).map(function(e){return e()})},ua=function(){var t=Date.now(),e=[];t-Hr>2&&(ea("matchMediaInit"),ut.forEach(function(n){var i=n.queries,a=n.conditions,o,s,l,d;for(s in i)o=Re.matchMedia(i[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,d=1);d&&(n.revert(),l&&e.push(n))}),ea("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hr=t,ea("matchMedia"))},mo=(function(){function r(e,n){this.selector=n&&la(n),this.data=[],this._r=[],this.isReverted=!1,this.id=id++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,a){V(n)&&(a=i,i=n,n=V);var o=this,s=function(){var d=$,c=o.selector,h;return d&&d!==o&&d.data.push(o),a&&(o.selector=la(a)),$=o,h=i.apply(o,arguments),V(h)&&o._r.push(h),$=d,o.selector=c,o.isReverted=!1,h};return o.last=s,n===V?s(o,function(l){return o.add(null,l)}):n?o[n]=s:s},t.ignore=function(n){var i=$;$=null,n(this),$=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof j&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var a=this;if(n?(function(){for(var s=a.getTweens(),l=a.data.length,d;l--;)d=a.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=a.data.length;l--;)d=a.data[l],d instanceof oe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof j)&&d.revert&&d.revert(n);a._r.forEach(function(c){return c(n,a)}),a.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=ut.length;o--;)ut[o].id===this.id&&ut.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),ad=(function(){function r(e){this.contexts=[],this.scope=e,$&&$.data.push(this)}var t=r.prototype;return t.add=function(n,i,a){We(n)||(n={matches:n});var o=new mo(0,a||this.scope),s=o.conditions={},l,d,c;$&&!o.selector&&(o.selector=$.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(d in n)d==="all"?c=1:(l=Re.matchMedia(n[d]),l&&(ut.indexOf(o)<0&&ut.push(o),(s[d]=l.matches)&&(c=1),l.addListener?l.addListener(ua):l.addEventListener("change",ua)));return c&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xn={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ao(i)})},timeline:function(t){return new oe(t)},getTweensOf:function(t,e){return G.getTweensOf(t,e)},getProperty:function(t,e,n,i){Q(t)&&(t=Le(t)[0]);var a=Ze(t||{}).get,o=n?Vr:Br;return n==="native"&&(n=""),t&&(e?o((fe[e]&&fe[e].get||a)(t,e,n,i)):function(s,l,d){return o((fe[s]&&fe[s].get||a)(t,s,l,d))})},quickSetter:function(t,e,n){if(t=Le(t),t.length>1){var i=t.map(function(c){return le.quickSetter(c,e,n)}),a=i.length;return function(c){for(var h=a;h--;)i[h](c)}}t=t[0]||{};var o=fe[e],s=Ze(t),l=s.harness&&(s.harness.aliases||{})[e]||e,d=o?function(c){var h=new o;St._pt=0,h.init(t,n?c+n:c,St,0,[t]),h.render(1,h),St._pt&&Ma(1,St)}:s.set(t,l);return o?d:function(c){return d(t,l,n?c+n:c,s,1)}},quickTo:function(t,e,n){var i,a=le.to(t,ke((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,d,c){return a.resetTo(e,l,d,c)};return o.tween=a,o},isTweening:function(t){return G.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ct(t.ease,rn.ease)),Pr(rn,t||{})},config:function(t){return Pr(ye,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,a=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!fe[s]&&!Te[s]&&on(e+" effect requires "+s+" plugin.")}),Xi[e]=function(s,l,d){return n(Le(s),ke(l||{},a),d)},o&&(oe.prototype[e]=function(s,l,d){return this.add(Xi[e](s,We(l)?l:(d=l)&&{},this),d)})},registerEase:function(t,e){L[t]=ct(e)},parseEase:function(t,e){return arguments.length?ct(t,e):L},getById:function(t){return G.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new oe(t),i,a;for(n.smoothChildTiming=ge(t.smoothChildTiming),G.remove(n),n._dp=0,n._time=n._tTime=G._time,i=G._first;i;)a=i._next,(e||!(!i._dur&&i instanceof j&&i.vars.onComplete===i._targets[0]))&&ze(n,i,i._start-i._delay),i=a;return ze(G,n,0),n},context:function(t,e){return t?new mo(t,e):$},matchMedia:function(t){return new ad(t)},matchMediaRefresh:function(){return ut.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ua()},addEventListener:function(t,e){var n=Vn[t]||(Vn[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Vn[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Hl,wrapYoyo:Rl,distribute:Qr,random:eo,snap:Jr,normalize:Fl,getUnit:re,clamp:Pl,splitColor:ro,toArray:Le,selector:la,mapRange:no,pipe:Dl,unitize:Ol,interpolate:zl,shuffle:Zr},install:$r,effects:Xi,ticker:pe,updateRoot:oe.updateRoot,plugins:fe,globalTimeline:G,core:{PropTween:he,globals:Ir,Tween:j,Timeline:oe,Animation:dn,getCache:Ze,_removeLinkedListItem:Jn,reverting:function(){return ae},context:function(t){return t&&$&&($.data.push(t),t._ctx=$),$},suppressOverwrites:function(t){return ha=t}}};ue("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xn[r]=j[r]});pe.add(oe.updateRoot);St=Xn.to({},{duration:0});var rd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},od=function(t,e){var n=t._targets,i,a,o;for(i in e)for(a=n.length;a--;)o=t._ptLookup[a][i],o&&(o=o.d)&&(o._pt&&(o=rd(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[a],i))},ta=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,a,o){o._onInit=function(s){var l,d;if(Q(a)&&(l={},ue(a,function(c){return l[c]=1}),a=l),e){l={};for(d in a)l[d]=e(a[d]);a=l}od(s,a)}}}},le=Xn.registerPlugin({name:"attr",init:function(t,e,n,i,a){var o,s,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",s=this.add(t,"setAttribute",(l||0)+"",e[o],i,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ae?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ta("roundProps",da),ta("modifiers"),ta("snap",Jr))||Xn;j.version=oe.version=le.version="3.15.0";Nr=1;ma()&&At();var sd=L.Power0,ld=L.Power1,dd=L.Power2,cd=L.Power3,ud=L.Power4,hd=L.Linear,md=L.Quad,fd=L.Cubic,pd=L.Quart,gd=L.Quint,yd=L.Strong,wd=L.Elastic,_d=L.Back,vd=L.SteppedEase,bd=L.Bounce,xd=L.Sine,Sd=L.Expo,Cd=L.Circ;var fo,et,Pt,Ra,wt,Td,po,za,kd=function(){return typeof window<"u"},Ue={},yt=180/Math.PI,Lt=Math.PI/180,Mt=Math.atan2,go=1e8,Wa=/([A-Z])/g,Ad=/(left|right|width|margin|padding|x)/i,Ed=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Da=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Md=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Pd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ld=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Co=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},To=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Od=function(t,e,n){return t.style[e]=n},Fd=function(t,e,n){return t.style.setProperty(e,n)},Hd=function(t,e,n){return t._gsap[e]=n},Rd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},zd=function(t,e,n,i,a){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(a,o)},Wd=function(t,e,n,i,a){var o=t._gsap;o[e]=n,o.renderTransform(a,o)},B="transform",we=B+"Origin",Nd=function r(t,e){var n=this,i=this.target,a=i.style,o=i._gsap;if(t in Ue&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Ne[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=Ve(i,s)}):this.tfm[t]=o.x?o[t]:Ve(i,t),t===we&&(this.tfm.zOrigin=o.zOrigin);else return Ne.transform.split(",").forEach(function(s){return r.call(n,s,e)});if(this.props.indexOf(B)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(we,e,"")),t=B}(a||e)&&this.props.push(t,e,a[t])},ko=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$d=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,a,o;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?e[t[a]](t[a+2]):e[t[a]]=t[a+2]:t[a+2]?n[t[a]]=t[a+2]:n.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(Wa,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),a=za(),(!a||!a.isStart)&&!n[B]&&(ko(n),i.zOrigin&&n[we]&&(n[we]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ao=function(t,e){var n={target:t,props:[],revert:$d,save:Nd};return t._gsap||le.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Eo,Oa=function(t,e){var n=et.createElementNS?et.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):et.createElement(t);return n&&n.style?n:et.createElement(t)},Ae=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wa,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Dt(e)||e,1)||""},yo="O,Moz,ms,Ms,Webkit".split(","),Dt=function(t,e,n){var i=e||wt,a=i.style,o=5;if(t in a&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yo[o]+t in a););return o<0?null:(o===3?"ms":o>=0?yo[o]:"")+t},Fa=function(){kd()&&window.document&&(fo=window,et=fo.document,Pt=et.documentElement,wt=Oa("div")||{style:{}},Td=Oa("div"),B=Dt(B),we=B+"Origin",wt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eo=!!Dt("perspective"),za=le.core.reverting,Ra=1)},wo=function(t){var e=t.ownerSVGElement,n=Oa("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),a;i.style.display="block",n.appendChild(i),Pt.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),Pt.removeChild(n),a},_o=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Mo=function(t){var e,n;try{e=t.getBBox()}catch{e=wo(t),n=1}return e&&(e.width||e.height)||n||(e=wo(t)),e&&!e.width&&!e.x&&!e.y?{x:+_o(t,["x","cx","x1"])||0,y:+_o(t,["y","cy","y1"])||0,width:0,height:0}:e},Po=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Mo(t))},nt=function(t,e){if(e){var n=t.style,i;e in Ue&&e!==we&&(e=B),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Wa,"-$1").toLowerCase())):n.removeAttribute(e)}},tt=function(t,e,n,i,a,o){var s=new he(t._pt,e,n,0,1,o?To:Co);return t._pt=s,s.b=i,s.e=a,t._props.push(n),s},vo={deg:1,rad:1,turn:1},Id={grid:1,flex:1},it=function r(t,e,n,i){var a=parseFloat(n)||0,o=(n+"").trim().substr((a+"").length)||"px",s=wt.style,l=Ad.test(e),d=t.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),h=100,u=i==="px",f=i==="%",g,m,p,w;if(i===o||!a||vo[i]||vo[o])return a;if(o!=="px"&&!u&&(a=r(t,e,n,"px")),w=t.getCTM&&Po(t),(f||o==="%")&&(Ue[e]||~e.indexOf("adius")))return g=w?t.getBBox()[l?"width":"height"]:t[c],U(f?a/g*h:a/100*g);if(s[l?"width":"height"]=h+(u?o:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!d?t:t.parentNode,w&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===et||!m.appendChild)&&(m=et.body),p=m._gsap,p&&f&&p.width&&l&&p.time===pe.time&&!p.uncache)return U(a/p.width*h);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,g=t[c],y?t.style[e]=y:nt(t,e)}else(f||o==="%")&&!Id[Ae(m,"display")]&&(s.position=Ae(t,"position")),m===t&&(s.position="static"),m.appendChild(wt),g=wt[c],m.removeChild(wt),s.position="absolute";return l&&f&&(p=Ze(m),p.time=pe.time,p.width=m[c]),U(u?g*a/h:g&&a?h/g*a:0)},Ve=function(t,e,n,i){var a;return Ra||Fa(),e in Ne&&e!=="transform"&&(e=Ne[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ue[e]&&e!=="transform"?(a=mn(t,i),a=e!=="transformOrigin"?a[e]:a.svg?a.origin:ai(Ae(t,we))+" "+a.zOrigin+"px"):(a=t.style[e],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=ii[e]&&ii[e](t,e,n)||Ae(t,e)||va(t,e)||(e==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?it(t,e,a,n)+n:a},qd=function(t,e,n,i){if(!n||n==="none"){var a=Dt(e,t,1),o=a&&Ae(t,a,1);o&&o!==n?(e=a,n=o):e==="borderColor"&&(n=Ae(t,"borderTopColor"))}var s=new he(this._pt,t.style,e,0,1,Ea),l=0,d=0,c,h,u,f,g,m,p,w,y,_,b,v;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ae(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=Ae(t,e)||i,m?t.style[e]=m:nt(t,e)),c=[n,i],xa(c),n=c[0],i=c[1],u=n.match(ht)||[],v=i.match(ht)||[],v.length){for(;h=ht.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=u[d++]||"")&&(f=parseFloat(m)||0,b=m.substr((f+"").length),p.charAt(1)==="="&&(p=mt(f,p)+b),w=parseFloat(p),_=p.substr((w+"").length),l=ht.lastIndex-_.length,_||(_=_||ye.units[e]||b,l===i.length&&(i+=_,s.e+=_)),b!==_&&(f=it(t,e,m,_)||0),s._pt={_next:s._pt,p:y||d===1?y:",",s:f,c:w-f,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?To:Co;return pa.test(i)&&(s.e=0),this._pt=s,s},bo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=bo[n]||n,e[1]=bo[i]||i,e.join(" ")},Bd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,a=e.u,o=n._gsap,s,l,d;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),d=a.length;--d>-1;)s=a[d],Ue[s]&&(l=1,s=s==="transformOrigin"?we:B),nt(n,s);l&&(nt(n,B),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mn(n,1),o.uncache=1,ko(i)))}},ii={clearProps:function(t,e,n,i,a){if(a.data!=="isFromStart"){var o=t._pt=new he(t._pt,e,n,0,0,Bd);return o.u=i,o.pr=-10,o.tween=a,t._props.push(n),1}}},hn=[1,0,0,1,0,0],Lo={},Do=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},xo=function(t){var e=Ae(t,B);return Do(e)?hn:e.substr(7).match(fa).map(U)},Na=function(t,e){var n=t._gsap||Ze(t),i=t.style,a=xo(t),o,s,l,d;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?hn:a):(a===hn&&!t.offsetParent&&t!==Pt&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,s=t.nextElementSibling,Pt.appendChild(t)),a=xo(t),l?i.display=l:nt(t,"display"),d&&(s?o.insertBefore(t,s):o?o.appendChild(t):Pt.removeChild(t))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Ha=function(t,e,n,i,a,o){var s=t._gsap,l=a||Na(t,!0),d=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,u=s.yOffset||0,f=l[0],g=l[1],m=l[2],p=l[3],w=l[4],y=l[5],_=e.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,S,C,T,k;n?l!==hn&&(C=f*p-g*m)&&(T=b*(p/C)+v*(-m/C)+(m*y-p*w)/C,k=b*(-g/C)+v*(f/C)-(f*y-g*w)/C,b=T,v=k):(S=Mo(t),b=S.x+(~_[0].indexOf("%")?b/100*S.width:b),v=S.y+(~(_[1]||_[0]).indexOf("%")?v/100*S.height:v)),i||i!==!1&&s.smooth?(w=b-d,y=v-c,s.xOffset=h+(w*f+y*m)-w,s.yOffset=u+(w*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[we]="0px 0px",o&&(tt(o,s,"xOrigin",d,b),tt(o,s,"yOrigin",c,v),tt(o,s,"xOffset",h,s.xOffset),tt(o,s,"yOffset",u,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+v)},mn=function(t,e){var n=t._gsap||new Sa(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,a=n.scaleX<0,o="px",s="deg",l=getComputedStyle(t),d=Ae(t,we)||"0",c,h,u,f,g,m,p,w,y,_,b,v,S,C,T,k,x,E,P,O,z,I,W,F,te,xe,de,De,X,ne,ce,Se;return c=h=u=m=p=w=y=_=b=0,f=g=1,n.svg=!!(t.getCTM&&Po(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[B]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[B]!=="none"?l[B]:"")),i.scale=i.rotate=i.translate="none"),C=Na(t,n.svg),n.svg&&(n.uncache?(te=t.getBBox(),d=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Ha(t,F||d,!!F||n.originIsAbsolute,n.smooth!==!1,C)),v=n.xOrigin||0,S=n.yOrigin||0,C!==hn&&(E=C[0],P=C[1],O=C[2],z=C[3],c=I=C[4],h=W=C[5],C.length===6?(f=Math.sqrt(E*E+P*P),g=Math.sqrt(z*z+O*O),m=E||P?Mt(P,E)*yt:0,y=O||z?Mt(O,z)*yt+m:0,y&&(g*=Math.abs(Math.cos(y*Lt))),n.svg&&(c-=v-(v*E+S*O),h-=S-(v*P+S*z))):(Se=C[6],ne=C[7],de=C[8],De=C[9],X=C[10],ce=C[11],c=C[12],h=C[13],u=C[14],T=Mt(Se,X),p=T*yt,T&&(k=Math.cos(-T),x=Math.sin(-T),F=I*k+de*x,te=W*k+De*x,xe=Se*k+X*x,de=I*-x+de*k,De=W*-x+De*k,X=Se*-x+X*k,ce=ne*-x+ce*k,I=F,W=te,Se=xe),T=Mt(-O,X),w=T*yt,T&&(k=Math.cos(-T),x=Math.sin(-T),F=E*k-de*x,te=P*k-De*x,xe=O*k-X*x,ce=z*x+ce*k,E=F,P=te,O=xe),T=Mt(P,E),m=T*yt,T&&(k=Math.cos(T),x=Math.sin(T),F=E*k+P*x,te=I*k+W*x,P=P*k-E*x,W=W*k-I*x,E=F,I=te),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,w=180-w),f=U(Math.sqrt(E*E+P*P+O*O)),g=U(Math.sqrt(W*W+Se*Se)),T=Mt(I,W),y=Math.abs(T)>2e-4?T*yt:0,b=ce?1/(ce<0?-ce:ce):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Do(Ae(t,B)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(a?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=c-((n.xPercent=c&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=U(f),n.scaleY=U(g),n.rotation=U(m)+s,n.rotationX=U(p)+s,n.rotationY=U(w)+s,n.skewX=y+s,n.skewY=_+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(d.split(" ")[2])||!e&&n.zOrigin||0)&&(i[we]=ai(d)),n.xOffset=n.yOffset=0,n.force3D=ye.force3D,n.renderTransform=n.svg?Ud:Eo?Oo:Vd,n.uncache=0,n},ai=function(t){return(t=t.split(" "))[0]+" "+t[1]},La=function(t,e,n){var i=re(e);return U(parseFloat(e)+parseFloat(it(t,"x",n+"px",i)))+i},Vd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Oo(t,e)},pt="0deg",un="0px",gt=") ",Oo=function(t,e){var n=e||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,l=n.z,d=n.rotation,c=n.rotationY,h=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,w=n.force3D,y=n.target,_=n.zOrigin,b="",v=w==="auto"&&t&&t!==1||w===!0;if(_&&(h!==pt||c!==pt)){var S=parseFloat(c)*Lt,C=Math.sin(S),T=Math.cos(S),k;S=parseFloat(h)*Lt,k=Math.cos(S),o=La(y,o,C*k*-_),s=La(y,s,-Math.sin(S)*-_),l=La(y,l,T*k*-_+_)}p!==un&&(b+="perspective("+p+gt),(i||a)&&(b+="translate("+i+"%, "+a+"%) "),(v||o!==un||s!==un||l!==un)&&(b+=l!==un||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+gt),d!==pt&&(b+="rotate("+d+gt),c!==pt&&(b+="rotateY("+c+gt),h!==pt&&(b+="rotateX("+h+gt),(u!==pt||f!==pt)&&(b+="skew("+u+", "+f+gt),(g!==1||m!==1)&&(b+="scale("+g+", "+m+gt),y.style[B]=b||"translate(0, 0)"},Ud=function(t,e){var n=e||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,l=n.rotation,d=n.skewX,c=n.skewY,h=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,w=n.yOffset,y=n.forceCSS,_=parseFloat(o),b=parseFloat(s),v,S,C,T,k;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Lt,d*=Lt,v=Math.cos(l)*h,S=Math.sin(l)*h,C=Math.sin(l-d)*-u,T=Math.cos(l-d)*u,d&&(c*=Lt,k=Math.tan(d-c),k=Math.sqrt(1+k*k),C*=k,T*=k,c&&(k=Math.tan(c),k=Math.sqrt(1+k*k),v*=k,S*=k)),v=U(v),S=U(S),C=U(C),T=U(T)):(v=h,T=u,S=C=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=it(f,"x",o,"px"),b=it(f,"y",s,"px")),(g||m||p||w)&&(_=U(_+g-(g*v+m*C)+p),b=U(b+m-(g*S+m*T)+w)),(i||a)&&(k=f.getBBox(),_=U(_+i/100*k.width),b=U(b+a/100*k.height)),k="matrix("+v+","+S+","+C+","+T+","+_+","+b+")",f.setAttribute("transform",k),y&&(f.style[B]=k)},Yd=function(t,e,n,i,a){var o=360,s=Q(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?yt:1),d=l-i,c=i+d+"deg",h,u;return s&&(h=a.split("_")[1],h==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),h==="cw"&&d<0?d=(d+o*go)%o-~~(d/o)*o:h==="ccw"&&d>0&&(d=(d-o*go)%o-~~(d/o)*o)),t._pt=u=new he(t._pt,e,n,i,d,Md),u.e=c,u.u="deg",t._props.push(n),u},So=function(t,e){for(var n in e)t[n]=e[n];return t},Kd=function(t,e,n){var i=So({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,d,c,h,u,f,g;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),o[B]=e,s=mn(n,1),nt(n,B),n.setAttribute("transform",d)):(d=getComputedStyle(n)[B],o[B]=e,s=mn(n,1),o[B]=d);for(l in Ue)d=i[l],c=s[l],d!==c&&a.indexOf(l)<0&&(f=re(d),g=re(c),h=f!==g?it(n,l,d,g):parseFloat(d),u=parseFloat(c),t._pt=new he(t._pt,s,l,h,u-h,Da),t._pt.u=g||0,t._props.push(l));So(s,i)};ue("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",a="Left",o=(t<3?[e,n,i,a]:[e+a,e+n,i+n,i+a]).map(function(s){return t<2?r+s:"border"+s+r});ii[t>1?"border"+r:r]=function(s,l,d,c,h){var u,f;if(arguments.length<4)return u=o.map(function(g){return Ve(s,g,d)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(c+"").split(" "),f={},o.forEach(function(g,m){return f[g]=u[m]=u[m]||u[(m-1)/2|0]}),s.init(l,f,h)}});var $a={name:"css",register:Fa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,a){var o=this._props,s=t.style,l=n.vars.startAt,d,c,h,u,f,g,m,p,w,y,_,b,v,S,C,T,k;Ra||Fa(),this.styles=this.styles||Ao(t),T=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(c=e[m],!(fe[m]&&Ta(m,e,n,i,t,a)))){if(f=typeof c,g=ii[m],f==="function"&&(c=c.call(n,i,t,a),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Et(c)),g)g(this,t,m,c,n)&&(C=1);else if(m.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(m)+"").trim(),c+="",Ge.lastIndex=0,Ge.test(d)||(p=re(d),w=re(c),w?p!==w&&(d=it(t,m,d,w)+w):p&&(c+=p)),this.add(s,"setProperty",d,c,i,a,0,0,m),o.push(m),T.push(m,0,s[m]);else if(f!=="undefined"){if(l&&m in l?(d=typeof l[m]=="function"?l[m].call(n,i,t,a):l[m],Q(d)&&~d.indexOf("random(")&&(d=Et(d)),re(d+"")||d==="auto"||(d+=ye.units[m]||re(Ve(t,m))||""),(d+"").charAt(1)==="="&&(d=Ve(t,m))):d=Ve(t,m),u=parseFloat(d),y=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),h=parseFloat(c),m in Ne&&(m==="autoAlpha"&&(u===1&&Ve(t,"visibility")==="hidden"&&h&&(u=0),T.push("visibility",0,s.visibility),tt(this,s,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Ne[m],~m.indexOf(",")&&(m=m.split(",")[0]))),_=m in Ue,_){if(this.styles.save(m),k=c,f==="string"&&c.substring(0,6)==="var(--"){if(c=Ae(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=c,c=Ae(t,"perspective"),x?t.style.perspective=x:nt(t,"perspective")}h=parseFloat(c)}if(b||(v=t._gsap,v.renderTransform&&!e.parseTransform||mn(t,e.parseTransform),S=e.smoothOrigin!==!1&&v.smooth,b=this._pt=new he(this._pt,s,B,0,1,v.renderTransform,v,0,-1),b.dep=1),m==="scale")this._pt=new he(this._pt,v,"scaleY",v.scaleY,(y?mt(v.scaleY,y+h):h)-v.scaleY||0,Da),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(we,0,s[we]),c=Gd(c),v.svg?Ha(t,c,0,S,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==v.zOrigin&&tt(this,v,"zOrigin",v.zOrigin,w),tt(this,s,m,ai(d),ai(c)));continue}else if(m==="svgOrigin"){Ha(t,c,1,S,0,this);continue}else if(m in Lo){Yd(this,v,m,u,y?mt(u,y+c):c);continue}else if(m==="smoothOrigin"){tt(this,v,"smooth",v.smooth,c);continue}else if(m==="force3D"){v[m]=c;continue}else if(m==="transform"){Kd(this,c,t);continue}}else m in s||(m=Dt(m)||m);if(_||(h||h===0)&&(u||u===0)&&!Ed.test(c)&&m in s)p=(d+"").substr((u+"").length),h||(h=0),w=re(c)||(m in ye.units?ye.units[m]:p),p!==w&&(u=it(t,m,d,w)),this._pt=new he(this._pt,_?v:s,m,u,(y?mt(u,y+h):h)-u,!_&&(w==="px"||m==="zIndex")&&e.autoRound!==!1?Dd:Da),this._pt.u=w||0,_&&k!==c?(this._pt.b=d,this._pt.e=k,this._pt.r=Ld):p!==w&&w!=="%"&&(this._pt.b=d,this._pt.r=Pd);else if(m in s)qd.call(this,t,m,d,y?y+c:c);else if(m in t)this.add(t,m,d||t[m],y?y+c:c,i,a);else if(m!=="parseTransform"){Qn(m,c);continue}_||(m in s?T.push(m,0,s[m]):typeof t[m]=="function"?T.push(m,2,t[m]()):T.push(m,1,d||t[m])),o.push(m)}}C&&Pa(this)},render:function(t,e){if(e.tween._time||!za())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ve,aliases:Ne,getSetter:function(t,e,n){var i=Ne[e];return i&&i.indexOf(",")<0&&(e=i),e in Ue&&e!==we&&(t._gsap.x||Ve(t,"x"))?n&&po===n?e==="scale"?Rd:Hd:(po=n||{})&&(e==="scale"?zd:Wd):t.style&&!Zn(t.style[e])?Od:~e.indexOf("-")?Fd:ni(t,e)},core:{_removeProperty:nt,_getMatrix:Na}};le.utils.checkPrefix=Dt;le.core.getStyleSaver=Ao;(function(r,t,e,n){var i=ue(r+","+t+","+e,function(a){Ue[a]=1});ue(t,function(a){ye.units[a]="deg",Lo[a]=1}),Ne[i[13]]=r+","+t,ue(n,function(a){var o=a.split(":");Ne[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ye.units[r]="px"});le.registerPlugin($a);var Ia=le.registerPlugin($a)||le,$u=Ia.core.Tween;var qa={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},_e={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},Fo={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},Ho="1.3.2",Ro={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function fn(){return Date.now()+(typeof window>"u"?0:window.AnimatedWeatherCardDev?.offset??0)}function Ee(){return new Date(fn())}function zo(r,t=-1/0,e=1/0){return typeof r=="number"&&!isNaN(r)&&r>=t&&r<=e}function gn(r){return typeof r!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(r)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(r)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(r.toLowerCase())}function M(r){return r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Oe(r,t){return Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0}function me(r,t,e=0){if(!isFinite(r))return"--";Math.abs(r)<.5/10**e&&(r=0);let n=t?.locale?.language||t?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(n,{minimumFractionDigits:e,maximumFractionDigits:e}).format(r)}catch{return r.toFixed(e)}}function yn(r,t,e){if(r?.localize)try{let n=r.localize(t);if(n&&n!==t)return n}catch{}return e}function Wo(r,t){if(!isFinite(r))return 0;switch((t||"km/h").toLowerCase()){case"m/s":return r*3.6;case"mph":return r*1.609344;case"ft/s":return r*1.09728;case"kn":case"kt":case"knots":return r*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,r),1.5)*3.6;default:return r}}function A(r,t,...e){r&&console.log(`[AWC Dev] ${t}`,...e)}function J(r,t){let e=r.engine_settings||{},n=(o,s,l,d)=>zo(o,l,d)?o:s,i=n(e.windSpeed,_e.windSpeed,.1,15),a=i;return zo(t,0,200)&&(a=Math.max(.1,Math.min(15,t/10*i))),{windSpeed:a,rainCount:n(e.rainCount,_e.rainCount,.1,10),leafCount:n(e.leafCount,_e.leafCount,.1,10),snowCount:n(e.snowCount,_e.snowCount,.1,10),cloudBaseSize:n(e.cloudBaseSize,_e.cloudBaseSize,.3,2.5),cloudCount:n(e.cloudCount,_e.cloudCount,1,20),splashBounce:n(e.splashBounce,_e.splashBounce,40,120)}}function Ga(r){r.forEach(t=>{t!=null&&clearTimeout(t)}),r.length=0}function No(r){let t=new Set;return r.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.getTweensOf(e).forEach(n=>{let i=n;for(;i.parent?.parent;)i=i.parent;t.add(i)})}),t}function ri(r){window.AnimatedWeatherCardGsap&&No(r).forEach(t=>t.pause())}function oi(r){window.AnimatedWeatherCardGsap&&No(r).forEach(t=>t.resume())}function Ba(r){window.AnimatedWeatherCardGsap&&r.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)})}function si(r,t,e,n,i={}){if(typeof r!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";let a=r.toLowerCase();if(a.includes("sleet")&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"sleety-stormy";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("lightning")||a.includes("thunder")||a.includes("storm")))return"snowy-stormy";if(a.includes("lightning")||a.includes("thunder")||a.includes("storm"))return"stormy";if(a.includes("fog")||a.includes("mist"))return"foggy";if(a.includes("heavy")&&a.includes("rain"))return"pouring";if(a.includes("pouring")||a.includes("downpour"))return"pouring";if((a.includes("snow")||a.includes("sleet"))&&(a.includes("rain")||a.includes("drizzle")))return"snowy-rainy";if(a.includes("light")&&(a.includes("rain")||a.includes("drizzle")))return"light-rain";if(a.includes("rain")||a.includes("drizzle"))return"rainy";if(a.includes("sleet")||a.includes("hail"))return"sleety";if(a.includes("snow"))return"snowy";if(a.includes("wind"))return"windy";if(a.includes("partly")&&a.includes("cloud"))return"partly-cloudy";if(a.includes("cloud")||a.includes("overcast"))return"cloudy";if(a.includes("clear")||a.includes("sunny")){if(!i.clock){if(a.includes("night"))return"clear-night";if(a.includes("sunny"))return"sunny";if(i.night!==void 0)return i.night?"clear-night":"sunny"}let o=Ee(),s;if(n)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(o);s=parseInt(h.find(u=>u.type==="hour")?.value||"0",10)}catch{s=o.getHours()}else s=o.getHours();let l=t??6,d=e??20;return(s<l||s>=d)&&a.includes("clear")?"clear-night":"sunny"}return"sunny"}function wn(r,t,e){if(typeof r!="string"||!r.trim())return console.warn("Invalid animation type provided"),e||pn("rain");if(!t||!t.isEnabled())return e||pn(r);let n=Ro[r];if(!n)return console.warn(`No color scheme found for animation type: ${r}`),e||pn(r);try{let i=t.getCurrentState(),a=t.getTimeAwareColor(n);return gn(a)?a:(console.warn(`Invalid color returned from time manager: ${a}`),e||pn(r))}catch(i){return console.error("Error getting time-aware color:",i),e||pn(r)}}function pn(r){let e={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[r];return e||(console.warn(`Unknown animation type: ${r}, using white as fallback`),"#FFFFFF")}var li=class li{constructor(t,e,n){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=t,this.config=e,this.cardConfig=n,this.state="created",queueMicrotask(()=>A(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){A(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),A(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(t){throw console.error(`Failed to start ${this.animationType} animation:`,t),this.setState("stopped"),t}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),A(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(t){throw console.error(`Failed to stop ${this.animationType} animation:`,t),t}}async pause(){if(this.state==="active")try{A(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(t){throw console.error(`Failed to pause ${this.animationType} animation:`,t),t}}async resume(){if(this.state==="paused")try{A(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(t){throw console.error(`Failed to resume ${this.animationType} animation:`,t),this.setState("paused"),t}}setWindSpeed(t){this.realWindSpeed=t,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),A(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(t){let e=this.state;this.state=t,A(this.config.devMode,`${this.animationType} state: ${e} \u2192 ${t}`)}ensureLayerVisibility(t){if(this.containerSelector){let n=this.element.querySelector(this.containerSelector);n&&(n.style.display=t?"block":"none",A(this.config.devMode,`Set ${this.animationType} container visibility: ${t}`))}let e=this.element.querySelector(this.layerSelector);e&&!li.SHARED_LAYERS.includes(this.layerSelector)&&(e.style.opacity=t?"1":"0",A(this.config.devMode,`Set ${this.animationType} layer opacity: ${t?1:0}`))}cleanup(){this.animationHandles.forEach(t=>{t&&clearInterval(t)}),this.animationHandles=[],this.timeouts.forEach(t=>{if(t)if(typeof t=="function"){let e=t();e&&clearTimeout(e)}else clearTimeout(t)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(t=>{window.AnimatedWeatherCardGsap.killTweensOf(t)}),this.particles.forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)}),this.particles=[],A(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(t){this.animationHandles.push(t)}addTimeout(t){this.timeouts.push(t)}addParticle(t){this.particles.push(t)}removeParticle(t){let e=this.particles.indexOf(t);e>-1&&this.particles.splice(e,1)}};li.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Z=li;var at=class{constructor(t,e,n){this.layer=t;this.create=e;this.cycle=n;this.items=[];this.running=!1;this.paused=!1}start(t){this.running=!0;let e=[];for(let n=0;n<t;n++){let i=this.create(n);this.layer.appendChild(i);let a={el:i};this.items.push(a),e.push(i),this.run(a,!0)}return e}run(t,e){this.running&&(t.anim=this.cycle(t.el,()=>this.run(t,!1),e),this.paused&&t.anim.pause())}pause(){this.paused=!0,this.items.forEach(t=>t.anim?.pause())}resume(){this.paused=!1,this.items.forEach(t=>t.anim?.resume())}stop(){this.running=!1,this.items.forEach(t=>{t.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(t.el),t.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(t=>t.el)}};function Ot(r,t){return t&&r.progress(Math.random()),r}var jd=420*230;function Ft(r,t){return Math.min(3,Math.max(.6,r*t/jd))||1}function D(r,t){return r+Math.random()*(t-r)}var Xd={light:10,rain:18,storm:24,pouring:32},Zd={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Qd={light:16,rain:24,storm:34,pouring:42},Jd=.3,ec=16,tc=8,nc=[10,30],$o="http://www.w3.org/2000/svg";function ic(r,t,e,n){let i=0,a=0,o=0;for(let s=1;s<=16;s++){let l=s/16,d=2*(1-l)*l*r+l*l*e,c=2*(1-l)*l*t+l*l*n;i+=Math.hypot(d-a,c-o),a=d,o=c}return i}function ac(r,t,e,n){return Math.max(4,Math.round(Xd[r]*t*Ft(e,n)))}var di=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=a,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...n},A(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Rain layer not found: ${this.layerSelector}`);let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),a=this.rainKind(),o=ac(a,n.rainCount,i.offsetWidth,i.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,d=Qd[a],c=a==="pouring"?3:2.4;this.splashLayer=e,this.splashColor=s,this.splashBounce=n.splashBounce/_e.splashBounce,this.pool=new at(e,()=>{let h=D(1,c),u=document.createElement("div");return u.className="raindrop",u.style.cssText=`
                    width: ${h.toFixed(2)}px;
                    height: ${d}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${h.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,u.dataset.width=h.toFixed(2),u},(h,u,f)=>this.fall(h,i,a,d,l,u,f)),this.pool.start(o).forEach(h=>this.addParticle(h)),A(this.config.devMode,`Rain animation started - ${o} drops (${a})`)}fall(e,n,i,a,o,s,l){let d=n.offsetWidth,c=n.offsetHeight,[h,u]=Zd[i],f=D(h,u),g=D(6,Math.max(7,d-6)),m=this.rainConfig.splashEnabled&&Math.random()<Jd,p=-a,w=m?c-a:o?c+D(60,120):c,y=Math.max(.25,(w-p)/f),_=parseFloat(e.dataset.width||"2");window.AnimatedWeatherCardGsap.set(e,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(e,{y:p},{y:w,duration:y,ease:"none"}),m)b.call(()=>this.createSplash(g+_/2,c),[],y),b.to(e,{scaleY:0,duration:a/f,ease:"none"},y);else if(o){let v=(c-a-p)/f;b.to(e,{opacity:0,duration:y-v,ease:"power1.in"},v)}return Ot(b,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()}),this.splashDots=[],this.rebounds.forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf([e,e.firstChild]),e.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(e=>e.remove()),A(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(e,n){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(e,n);for(let i of[-1,1]){let a=this.splashDots[this.nextSplashDot];a||(a=document.createElement("div"),a.className="rain-splash",a.style.background=this.splashColor,this.splashLayer.appendChild(a),this.splashDots[this.nextSplashDot]=a),this.nextSplashDot=(this.nextSplashDot+1)%ec;let o=D(.22,.28),s=D(4,10)*this.splashBounce,l=i*D(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(a),window.AnimatedWeatherCardGsap.set(a,{x:e-1,y:n-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(a,{x:e-1+l,duration:o,ease:"power1.out"},0).to(a,{y:n-2-s,duration:o*.45,ease:"power2.out"},0).to(a,{y:n-2,duration:o*.55,ease:"power2.in"},o*.45).to(a,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(e,n){let i=this.splashLayer,a=this.rebounds[this.nextRebound];if(!a){a=document.createElementNS($o,"svg"),a.classList.add("rain-rebound");let m=document.createElementNS($o,"path");m.setAttribute("fill","none"),m.style.stroke=this.splashColor,a.appendChild(m),i.appendChild(a),this.rebounds[this.nextRebound]=a}this.nextRebound=(this.nextRebound+1)%tc;let o=a.firstChild,[s,l]=nc,d=D(s,l)*this.splashBounce,c=(Math.random()<.5?-1:1)*D(10,24)*this.splashBounce,h=D(6,18);o.setAttribute("d",`M 0,0 Q ${c.toFixed(1)},${(-2*d).toFixed(1)} ${(2*c).toFixed(1)},${h.toFixed(1)}`);let u=ic(c,-2*d,2*c,h),f=Math.min(u*.45,6+d*.3);o.style.strokeDasharray=`${f.toFixed(1)} ${(u+f).toFixed(1)}`;let g=D(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([a,o]),window.AnimatedWeatherCardGsap.set(a,{x:e,y:n,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:f,strokeWidth:1.6},{strokeDashoffset:-u,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(a,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(e){return this.rainConfig.isStorm?wn("lightning",e,"var(--weather-storm-rain-color)"):wn("rain",e,"var(--weather-rain-color)")}};var rc=36,rt=[2,6],Va=[20,38],Io=10,oc=.6;function sc(r,t,e){return Math.max(6,Math.round(rc*r*Ft(t,e)))}function Ya(r){return Math.min(2.2,Math.max(.3,r/_e.windSpeed))}var ci=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=a,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...n},A(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Snow layer not found: ${this.layerSelector}`);let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),a=sc(n.snowCount,i.offsetWidth,i.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=Ya(n.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new at(e,()=>this.createFlake(o),(d,c,h)=>this.fall(d,i,l,s,c,h)),this.pool.start(a).forEach(d=>this.addParticle(d)),A(this.config.devMode,`Snow animation started - ${a} flakes`)}createFlake(e){let n=D(rt[0],rt[1]),i=(n-rt[0])/(rt[1]-rt[0]),a=document.createElement("div");a.className="snowflake",a.dataset.size=n.toFixed(2),a.style.cssText=`
            width: ${n.toFixed(2)}px;
            height: ${n.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${e}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,a.dataset.opacity=(.45+.45*i).toFixed(2),window.AnimatedWeatherCardGsap.set(a,{transformOrigin:"50% -500%",rotation:-Io});let o=window.AnimatedWeatherCardGsap.to(a,{rotation:Io,duration:D(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),a}fall(e,n,i,a,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(e.dataset.size||"4"),h=(c-rt[0])/(rt[1]-rt[0]),u=(Va[0]+(Va[1]-Va[0])*h)*D(.9,1.1),f=this.snowConfig.accumulation&&Math.random()<oc,g=-c*2,m=f?d-this.pileHeight()-c:a?d+D(60,120):d+c,p=m-g,w=Math.max(.5,p/u),y=p*D(.04,.13)*i,_=D(-y,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:_,opacity:parseFloat(e.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(e,{y:g},{y:m,x:_+y,duration:w,ease:"none"}),f)b.call(()=>this.addToAccumulation(),[],w),b.to(e,{opacity:0,duration:.6,ease:"power1.out"},w);else if(a){let v=Math.min(w,(d-g)/u);b.to(e,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return Ot(b,s)}async onStop(){this.swings.forEach(e=>e.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),A(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(e=>e.pause()),A(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(e=>e.resume()),A(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let e=this.element.querySelector(".animated-weather-card");if(!e)return;e.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(i=>i.remove());let n=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,e.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let e=this.accumulationElement,n=this.snowConfig.accumulationHeight;if(!e?.parentNode||n<=0)return;let i=this.pileHeight();if(i>=n)return;let a=Math.min(n,i+.8);e.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(e,{scaleY:a/n,opacity:Math.min(.9,a/n),duration:.3,ease:"power2.out"})}};var lc=30,qo=[150,230],dc=.3,ui=6,hi=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=a,this.sleetConfig={particleCount:40,...n},A(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card"),a=Math.max(6,Math.round(lc*n.snowCount*Ft(i.offsetWidth,i.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=Ya(n.windSpeed)*.5;this.pool=new at(e,()=>{let l=D(1.5,3.5),d=document.createElement("div");return d.className="sleet-particle-gsap",d.dataset.size=l.toFixed(2),d.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,d},(l,d,c)=>this.fall(l,i,s,o,d,c)),this.pool.start(a).forEach(l=>this.addParticle(l)),A(this.config.devMode,`Sleet animation started - ${a} pellets`)}fall(e,n,i,a,o,s){let l=n.offsetWidth,d=n.offsetHeight,c=parseFloat(e.dataset.size||"2"),h=D(qo[0],qo[1]),u=Math.random()<dc,f=-c*2,g=u?d-c:a?d+D(60,120):d+c,m=g-f,p=Math.max(.3,m/h),w=m*D(.03,.08)*i,y=D(-w,Math.max(1,l-c));window.AnimatedWeatherCardGsap.set(e,{x:y,opacity:D(.8,1),rotation:D(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(e,{y:f},{y:g,x:y+w,duration:p,ease:"none"}),u)_.call(()=>this.addToPile(n),[],p),_.to(e,{opacity:0,duration:.3,ease:"power1.out"},p);else if(a){let b=Math.min(p,(d-f)/h);_.to(e,{opacity:0,duration:Math.max(.1,p-b),ease:"power1.in"},b)}return Ot(_,s)}addToPile(e){if(this.state!=="active")return;let n=e.querySelector(".sleet-accumulation");n||(n=document.createElement("div"),n.className="sleet-accumulation",n.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${ui}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,e.appendChild(n));let i=parseFloat(n.getAttribute("data-target-height")||"0");if(i>=ui)return;let a=Math.min(ui,i+.4);n.setAttribute("data-target-height",String(a)),window.AnimatedWeatherCardGsap.to(n,{scaleY:a/ui,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let e=this.element.querySelector(".animated-weather-card");e&&e.querySelectorAll(".sleet-accumulation").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),A(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),A(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),A(this.config.devMode,"Sleet animation resumed")}};function Go(r,t,e,n){return e!==null&&e>0?r*Math.max(0,e-t):r*.6*n}var Ka=[90,160];function Vo(r,t,e,n,i,a=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=n.offsetWidth,l=n.offsetHeight,d=20+Math.random()*Math.max(40,l-40),c=Math.random(),h=c<.25,u=c>.8&&d>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let f=(Math.random()*8+6)*e;o.style.width=o.style.height=f+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let m=-f-10,p=s+(a?60+Math.random()*80:f+10),w=(Ka[0]+Math.random()*(Ka[1]-Ka[0]))*Ht(t.windSpeed)*(h?.6:1),y=(p-m)/w,_=Math.min(y,(s-m)/w),b=u?-(60+Math.random()*80):h?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:m,y:d,rotation:Math.random()*360,opacity:0}),r.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),i&&i(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:p,duration:y,ease:"none"},0).to(o,{y:d+b,duration:y,ease:h?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),a&&y>_&&v.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function Uo(r,t,e,n,i,a){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,d=s>.8;o.style.position="absolute",o.style.height=(d?2:1)*e+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let c=i.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${c} 50%, transparent 100%)`;let h=Math.max(15,(20+Math.random()*60)*e);o.style.width=h+"px";let u=n.offsetWidth,f=n.offsetHeight,g=f*.15+Math.random()*(f*.7);window.AnimatedWeatherCardGsap.set(o,{x:-h,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),r.appendChild(o);let p=(u+h*2)/(cc*Ht(t.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),a&&a(o)}}).to(o,{scaleX:1,opacity:d?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:u+h,rotation:l?g>f/2?5:-5:0,duration:p,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,p*.3)},p-Math.min(.5,p*.3)),o}var cc=230,uc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Ht(r){return Math.min(2.2,Math.max(.6,Math.sqrt(r/_e.windSpeed)))}var hc=12;function mc(r){let t=Math.round(70*r),e=Math.round(35*r);return{width:t,height:Math.round(26*r),puffs:[{x:Math.round(9*r),y:Math.round(-22*r),size:Math.round(44*r)},{x:t-Math.round(9*r)-e,y:Math.round(-13*r),size:e}]}}var Yo=r=>r>0?Math.ceil(r*3)+1:0,Bo=new Map;function fc(r,t,e,n){let i=[r,t,e,n].join(","),a=Bo.get(i);if(a)return a;let o=Yo(e),s=Math.ceil((r+2*o)*n),l=Math.ceil((t+2*o)*n),d=()=>{let f=document.createElement("canvas");return f.width=s,f.height=l,[f,f.getContext("2d")]},c=null,[h,u]=d();if(u){let[f,g,m]=[o*n,o*n,Math.min(50,r/2,t/2)*n],[p,w]=[f+r*n,g+t*n];if(u.fillStyle="#000",u.beginPath(),u.moveTo(f+m,g),u.arcTo(p,g,p,w,m),u.arcTo(p,w,f,w,m),u.arcTo(f,w,f,g,m),u.arcTo(f,g,p,g,m),u.closePath(),u.fill(),e>0){let[y,_]=d();_&&(_.shadowColor="#000",_.shadowBlur=2*e*n,_.shadowOffsetX=s,_.drawImage(h,-s,0),c=y.toDataURL())}else c=h.toDataURL()}return c&&Bo.set(i,c),c}function _n(r){(r.closest?.(".clouds-container")??r).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(e=>{window.AnimatedWeatherCardGsap?.killTweensOf(e),e.remove()})}function pc(r){return Math.min(1,Math.max(.5,r/160))||1}function Ko(r,t,e,n,i){let a=n.offsetWidth,o=n.offsetHeight,s=uc,l=Ht(t.windSpeed),d=[],c=e||t.cloudCount,h=pc(o);return s.forEach((u,f)=>{let g=Math.ceil(f===0||f===1?c*.4:c*.6);for(let m=1;m<=g;m++){let p=document.createElement("div");p.className=`cloud-gsap cloud-gsap-${u.name}-${m}`;let w=t.cloudBaseSize*u.scale,y=1+(m-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*h,b=mc(_);p.style.position="absolute",p.style.opacity=u.opacity.toString(),p.dataset.awcO=String(u.opacity),p.style.zIndex=(10+f).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][f],S=i?.color_palette==="theme"?0:u.blur,C=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(K=>({x:K.x,y:K.y,width:K.size,height:K.size}))],T=Math.min(3,Math.max(1,window.devicePixelRatio||1)),k=C.map(K=>fc(K.width,K.height,S,T)),x=k.every(Boolean),E=x?Yo(S):0;if(p.style.width=b.width+"px",p.style.height=b.height+"px",x)p.classList.add("cloud-masked"),C.forEach((K,ee)=>{let ie=document.createElement("div");ie.style.position="absolute",ie.style.left=K.x-E+"px",ie.style.top=K.y-E+"px",ie.style.width=K.width+2*E+"px",ie.style.height=K.height+2*E+"px",ie.style.background=v;for(let Ie of["-webkit-",""])ie.style.setProperty(`${Ie}mask-image`,`url("${k[ee]}")`),ie.style.setProperty(`${Ie}mask-size`,"100% 100%"),ie.style.setProperty(`${Ie}mask-repeat`,"no-repeat");p.appendChild(ie)});else{p.style.borderRadius="50px",p.style.background=v,S>0&&(p.style.filter=`blur(${S}px)`);for(let K of b.puffs){let ee=document.createElement("div");ee.style.position="absolute",ee.style.left=K.x+"px",ee.style.top=K.y+"px",ee.style.width=K.size+"px",ee.style.height=K.size+"px",ee.style.borderRadius="50px",ee.style.background=v,p.appendChild(ee)}}let P=b.width+2*E,I=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][f][m-1]||15+f*10)/60,W=b.height+Math.max(E,Math.ceil(S*3))+2,F=Number(n.dataset?.cloudBand),te=Number.isFinite(F)&&n.dataset?.cloudBand!==void 0?F:null,xe=Math.max(150+f*50,P+hc),de=u.speed*l*(.9+Math.random()*.2),De=(a+2*xe)/de,X=document.createElement("div");X.className="cloud-track",X.dataset.awcF=String(I),X.dataset.awcB=String(W),X.appendChild(p),window.AnimatedWeatherCardGsap.set(p,{opacity:u.opacity});let ne=[X];if(i?.color_palette==="theme"){let K=r.parentElement?.querySelector(".clouds-occluders")??r.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),ee=p.cloneNode(!0);ee.className="cloud-occluder",ee.style.opacity="1";for(let Ie of[ee,...Array.from(ee.querySelectorAll("div"))])Ie.style.background&&(Ie.style.background="var(--awc-card-bg)");let ie=X.cloneNode(!1);ie.appendChild(ee),K?.appendChild(ie),ne.push(ie)}let ce=ne.length>1?ne:X;window.AnimatedWeatherCardGsap.set(ce,{xPercent:0,x:-xe,y:Go(I,W,te,o)}),r.appendChild(X);let Se=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});Se.fromTo(ce,{xPercent:0,x:-xe},{xPercent:100,x:xe,duration:De,ease:"none"}),Se.progress(Math.random()),d.push(Se)}}),d}function jo(r){let t=r.querySelector(".snow-accumulation");t&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(t,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{t.parentNode&&t.parentNode.removeChild(t)}}):t.parentNode?.removeChild(t))}function Xo(r,t,e,n,i){let a=document.createElement("div");a.className=`fog-layer fog-layer-${e}`;let o=n.offsetWidth,s=n.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],d=l[e]||l[2],c=i.custom_colors?.fog_color,h=(i.color_palette||"default")!=="theme"?gn(c)?c:"#e0e0e0":"var(--secondary-text-color)",u=3+Math.floor(Math.random()*3),f=o*d.scale;a.style.cssText=`
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
        `,a.appendChild(C)}r.appendChild(a);let g=t.windSpeed*(.5+Math.random()*.5),m=15/d.speed,p=Math.max(8,m/g),w=o*d.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(a,{x:y,opacity:d.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:e*2+Math.random()*3});b.to(a,{x:_,duration:p,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(a,{x:y})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(a,{opacity:d.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function mi(r){r.querySelectorAll(".fog-layer").forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)})}var gc=3,yc=2,Zo=[900,1400],Qo=[1800,2600],fi=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=a,this.windConfig={leafCount:3,swooshEnabled:!0,...n},A(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(D(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(300,900)),A(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(e){let n=J(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let i=Math.max(1,Math.round(gc*n.leafCount));if(this.leaves.size<i){let a=Vo(this.layer(),n,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(a),this.addParticle(a)}this.scheduleLeaf(D(Zo[0],Zo[1])/Math.max(.5,n.leafCount))},e)}scheduleSwoosh(e){let n=J(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<yc){let i=Uo(this.layer(),n,1,this.card(),this.cardConfig,a=>this.forget(a,this.swooshes));this.swooshes.add(i),this.addParticle(i)}this.scheduleSwoosh(D(Qo[0],Qo[1]))}},e)}forget(e,n){n.delete(e),this.removeParticle(e)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.remove()}),this.leaves.clear(),this.swooshes.clear(),A(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),ri(this.layer()),A(this.config.devMode,"Wind animation paused")}async onResume(){oi(this.layer()),this.clearTimers(),this.scheduleLeaf(D(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(D(600,1500)),A(this.config.devMode,"Wind animation resumed")}};var vn=[6e3,18e3],wc=[1500,6e3],Jo=.16,pi=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=a,this.lightningConfig={disableShake:i.disable_lightning_shake||!1,minInterval:vn[0],maxInterval:vn[1],...n},A(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Lightning layer not found: ${this.layerSelector}`);e.style.opacity="0";let[n,i]=wc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},n+Math.random()*(i-n)),this.addTimeout(this.flashTimeout),A(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let e=this.element.querySelector(this.layerSelector),n=this.element.querySelector(".animated-weather-card");if(!e||!n)return;let i=n.offsetWidth,a=n.offsetHeight,o=parseFloat(n.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),d=30+Math.random()*(i-60),c=20*o,h=20,u=[d+",0"];for(let p=0;p<h;p++){let w=d+(Math.random()*c-c/2),y=a/h*(p+1);u.push(w+","+y)}l.setAttribute("d","M"+u.join(" L"));let f=this.element.timeOfDayManager,g=wn("lightning",f,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),e.appendChild(s);let m=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=m,m.set(e,{opacity:.9},0).to(e,{opacity:.3,duration:.06,ease:"none"},0).to(e,{opacity:.8,duration:.04,ease:"none"},.06).to(e,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let p=-6*o;m.to(n,{y:p,duration:.06,ease:"power2.out"},Jo).to(n,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},Jo+.06)}}scheduleNext(){if(this.state!=="active")return;let e=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},e),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let e=this.element.querySelector(".animated-weather-card");e&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(e,{clearProps:"transform"});let n=this.element.querySelector(this.layerSelector);n&&(n.querySelectorAll("svg").forEach(a=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(a.querySelector("path")),a.parentNode&&a.parentNode.removeChild(a)}),n.style.opacity="0"),A(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),A(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),A(this.config.devMode,"Lightning animation resumed")}};var _c=["dawn","day","dusk","night"],Za=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],vc={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},ns=(r,t,e)=>Math.min(t,Math.max(r,e)),ot=(r,t,e)=>r+(t-r)*e;function bc(r,t,e){let n=(t-r+540)%360-180;return(r+n*e+360)%360}function Ye(r,t,e){let n=([m,p,w])=>[m,p*Math.cos(w*Math.PI/180),p*Math.sin(w*Math.PI/180)],[i,a,o]=n(r),[s,l,d]=n(t),c=ot(i,s,e),h=ot(a,l,e),u=ot(o,d,e),f=Math.hypot(h,u),g=f<1e-6?r[2]:(Math.atan2(u,h)*180/Math.PI+360)%360;return[c,f,g]}function ja([r,t,e]){let n=e*Math.PI/180,i=t*Math.cos(n),a=t*Math.sin(n),o=(r+.3963377774*i+.2158037573*a)**3,s=(r-.1055613458*i-.0638541728*a)**3,l=(r-.0894841775*i-1.291485548*a)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var xc=r=>r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055;function Fe(r){let t=n=>n.every(i=>i>=-1e-4&&i<=1.0001),e=ja(r);if(!t(e)){let n=0,i=r[1];for(let a=0;a<24;a++){let o=(n+i)/2;t(ja([r[0],o,r[2]]))?n=o:i=o}e=ja([r[0],n,r[2]])}return e.map(n=>xc(ns(0,1,n)))}var is=r=>Math.round(ns(0,1,r)*255);function Ke(r){return"#"+r.map(t=>is(t).toString(16).padStart(2,"0")).join("")}function es(r,t){return`rgba(${r.map(is).join(", ")}, ${Number(t.toFixed(3))})`}function Xa(r,t){return[.15+(r[0]-.15)*.42,r[1]*ot(.75,.5,t),bc(r[2],262,.45)]}function Sc(r,t){let e=vc[r],n=1-e.overcast*.7,i={top:e.top,mid:e.mid,bottom:e.bottom,glow:e.glow,glowAlpha:e.glowAlpha,scrimAlpha:ot(.46,.28,e.overcast)};if(r==="clear-night"){if(t==="dawn"||t==="dusk"){let a=t==="dawn"?[.4,.09,20]:[.38,.1,40];return{...i,bottom:Ye(e.bottom,a,.45),glowAlpha:.2,scrimAlpha:.22}}return{...i,scrimAlpha:.2}}switch(t){case"night":return{top:Xa(e.top,e.overcast),mid:Xa(e.mid,e.overcast),bottom:Xa(e.bottom,e.overcast),glow:[.86,.03,250],glowAlpha:ot(.14,.06,e.overcast),scrimAlpha:.2};case"dusk":return{top:Ye(e.top,[e.top[0]*.8,.075,292],.5*n),mid:Ye(e.mid,[e.mid[0]*.88,.065,350],.42*n),bottom:Ye(e.bottom,[e.bottom[0]*.92,.115,52],.72*n),glow:Ye(e.glow,[.82,.13,58],n),glowAlpha:ot(e.glowAlpha,.6,n*.6),scrimAlpha:i.scrimAlpha+.04};case"dawn":return{top:Ye(e.top,[e.top[0]*.95,e.top[1]*.85,262],.4*n),mid:Ye(e.mid,[e.mid[0]*.95,.05,330],.3*n),bottom:Ye(e.bottom,[e.bottom[0]*.95,.085,32],.62*n),glow:Ye(e.glow,[.88,.09,40],n),glowAlpha:ot(e.glowAlpha,.5,n*.5),scrimAlpha:i.scrimAlpha+.04};default:return i}}function Cc(r){return[.16,Math.min(.04,r[1]*.6),r[2]]}function Rt(r,t){let e=Sc(r,t);return{top:Ke(Fe(e.top)),mid:Ke(Fe(e.mid)),bottom:Ke(Fe(e.bottom)),glow:es(Fe(e.glow),e.glowAlpha),scrim:es(Fe(Cc(e.top)),e.scrimAlpha)}}var zt=[.985,.006,250],gi=.8,as=.55,rs=.4,yi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},os={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},ss={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64},wi=312,ls=r=>r.clientWidth>=640&&r.clientHeight>=540;function Wt(r,t){let e=n=>`${Math.round(n*100)}%`;return`radial-gradient(${e(r.rx)} ${e(r.ry)} at ${e(r.cx)} ${e(r.cy)}, ${t}, transparent ${e(r.fade)})`}function ds(){let r=[];for(let t of Za)for(let e of _c){let n=Rt(t,e),i=e==="day"?`.animated-weather-card.${t}`:`.animated-weather-card.${t}[data-phase="${e}"]`;r.push(`${i} { --awc-sky-top: ${n.top}; --awc-sky-mid: ${n.mid}; --awc-sky-bottom: ${n.bottom}; --awc-sky-glow: ${n.glow}; --awc-sky-scrim: ${n.scrim}; }`)}return r.join(`
`)}function _i(r,t,e){return r==null||!Number.isFinite(r)?e?"day":"night":r<-6?"night":r<6?t?"dawn":"dusk":"day"}var st=3.2,Nt="cubic-bezier(0.37, 0, 0.63, 1)",cs={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},us=Object.keys(cs),Qa=us.filter(r=>r.startsWith("--awc-sky-"));function hs(){return us.map(r=>`${r} ${st}s ${Nt}`).join(`,
            `)}var ts=!1;function vi(){if(ts)return;ts=!0;let r=globalThis.CSS;if(r?.registerProperty)for(let[t,e]of Object.entries(cs))try{r.registerProperty({name:t,syntax:"<color>",inherits:!0,initialValue:e})}catch{}}var Ja=Array.from({length:25},(r,t)=>[t%5/2-1,Math.floor(t/5)/2-1]).filter(([r,t])=>r*r+t*t<=1),Tc=1.9,kc=.6,bi=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=a,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...n},A(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");_n(e);let a=Math.min(6,Math.max(1,Math.round(n.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(a=Math.max(1,Math.round(a*.6))),this.cloudTimelines=Ko(e,n,a,i,this.cardConfig),this.startWindFactor=Ht(n.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),A(this.config.devMode,`Clouds animation started with ${a} clouds`)}async onStop(){this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap?.killTweensOf(n),n&&typeof n.kill=="function"&&n.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let e=this.element.querySelector(this.layerSelector);e&&_n(e),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),A(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),this.looks?.pause(),A(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),this.looks?.resume(),A(this.config.devMode,"Clouds animation resumed")}veilSun(e=!1){if(this.occlude()){this.lightSun(1,e);return}let n=this.element.querySelector(".sun-track .sun"),i=n?.getBoundingClientRect(),a=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!n||!i?.width||getComputedStyle(n).opacity==="0"){a.forEach(y=>this.dense(y,o(y),e));return}let s=i.width/2,l=i.left+s,d=i.top+i.height/2,c=this.element.querySelector(this.containerSelector),h=c?parseFloat(getComputedStyle(c).opacity):1,u=Number.isFinite(h)?h:1,f=a.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*kc*u),g=a.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),m=(y,_,b)=>g[y].some(v=>{let S=Math.min(v.width,v.height)/2,C=_-Math.min(Math.max(_,v.left+S),v.right-S),T=b-Math.min(Math.max(b,v.top+S),v.bottom-S);return C*C+T*T<=S*S}),p=0,w=a.map(()=>0);for(let[y,_]of Ja)p+=a.reduce((b,v,S)=>m(S,l+y*s,d+_*s)?b*(1-f[S]):b,1),a.forEach((b,v)=>{m(v,l+y*s*1.25,d+_*s*1.25)&&(w[v]+=1/Ja.length)});this.lightSun(p/Ja.length,e),a.forEach((y,_)=>this.dense(y,o(y)*(1+(Tc-1)*Math.min(1,w[_]*3)),e))}occlude(){let e=this.element.querySelector(".animated-weather-card");if(!e||this.cardConfig.color_palette!=="theme")return!1;let n=e.closest("ha-card"),i=n?getComputedStyle(n):null,a=!!i&&(i.backgroundImage||"none")==="none"&&!!i.backgroundColor&&!/rgba|\/|transparent/.test(i.backgroundColor);return a&&e.style.getPropertyValue("--awc-card-bg")!==i.backgroundColor&&e.style.setProperty("--awc-card-bg",i.backgroundColor),e.toggleAttribute("data-occlude",a),a}dense(e,n,i){let a=(Math.round(Math.min(.95,n)*100)/100).toString();e.dataset.awcV!==a&&(e.dataset.awcV=a,i?window.AnimatedWeatherCardGsap?.set(e,{opacity:a}):window.AnimatedWeatherCardGsap?.to(e,{opacity:a,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(e,n=!1){let i=this.element.querySelector(".sun-track"),a=Math.round(e*100)/100;!i||a===this.sunLit&&!n||(this.sunLit=a,n?window.AnimatedWeatherCardGsap?.set(i,{opacity:a}):window.AnimatedWeatherCardGsap?.to(i,{opacity:a,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let e=J(this.cardConfig,this.realWindSpeed),n=Ht(e.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap.to(i,{timeScale:n,duration:st,ease:"sine.inOut",overwrite:!0})})}};var xi=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=a,this.fogConfig={layerCount:3,...n},A(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let e=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!e)throw new Error("Fog container not found");let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");mi(i),this.fogTimelines=[];for(let a=0;a<this.fogConfig.layerCount;a++){let o=Xo(e,n,a,i,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}A(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(i=>{i&&typeof i.kill=="function"&&i.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),A(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(e=>{e&&typeof e.pause=="function"&&e.pause()}),A(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(e=>{e&&typeof e.resume=="function"&&e.resume()}),A(this.config.devMode,"Fog animation resumed")}};var Ac=5,ms=353,Ec=1440,Mc=1/2,Pc=.25,Lc=.2,Dc=2,Oc=2;function er(r,t){let e=t>0?Math.min(t,Ec):ms;return Math.max(15,Math.round(r*Ac*Math.max(1,e/ms)))}var fs=20,ps=10,Fc=12,gs=(r,t)=>r.right>t.left-fs&&r.left<t.right+fs&&r.bottom>t.top-ps&&r.top<t.bottom+ps;function bn(r){let t=[],e=document.createRange();if(typeof e.getClientRects!="function")return t;let n=".animation-layer, .animation-container, style, script",i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);for(let a=i.nextNode();a;a=i.nextNode())if(!(!a.nodeValue?.trim()||a.parentElement?.closest(n))){e.selectNodeContents(a);for(let o of Array.from(e.getClientRects()))o.width&&o.height&&t.push(o)}for(let a of Array.from(r.querySelectorAll("svg, ha-icon"))){if(a.closest(n))continue;let o=a.getBoundingClientRect();o.width&&o.height&&t.push(o)}return t}function Hc(r,t){for(let e of r){let n=e.getBoundingClientRect();e.classList.toggle("awc-veiled",!!n.width&&t.some(i=>gs(n,i)))}}function ys(r){let t=r.querySelectorAll(".stars-field .star-gsap");if(!t.length)return;let e=r.querySelector(".moon-gsap")?.getBoundingClientRect();Hc(t,e?.width?[...bn(r),e]:bn(r))}function tr(r,t,{moon:e,still:n=!1,words:i=[]}){let a=document.createElement("div");a.className="stars-field";let o=e?document.createElement("div"):null;if(o){o.className="moon-gsap",r.appendChild(o);let d=o.getBoundingClientRect();d.width&&d.height&&(i=[...i,d])}let s=r.getBoundingClientRect(),l=i.length>0&&s.width>0&&s.height>0;for(let d=0;d<t;d++){let c=document.createElement("div");c.className="star-gsap";let h=1+Math.random()*3,u=.3+Math.random()*.5,f=0,g=0,m=!1;for(let p=0;p<(l?Fc:1)&&!m;p++){f=Math.random()*100,g=Math.random()*70;let w=s.left+f/100*s.width,y=s.top+g/100*s.height;m=!l||!i.some(_=>gs({left:w,top:y,right:w+h,bottom:y+h},_))}if(m||c.classList.add("awc-veiled"),c.style.cssText=`
            width: ${h.toFixed(2)}px;
            height: ${h.toFixed(2)}px;
            left: ${f.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${u.toFixed(2)};
        `,!n&&Math.random()<Mc){let p=Dc+Math.random()*Oc;c.classList.add("twinkle"),c.style.setProperty("--star-o",u.toFixed(2)),c.style.setProperty("--star-dim",(u*(Pc+Math.random()*Lc)).toFixed(2)),c.style.animationDuration=`${p.toFixed(2)}s`,c.style.animationDelay=`${(-Math.random()*p).toFixed(2)}s`}a.appendChild(c)}return o?r.insertBefore(a,o):r.appendChild(a),o?[a,o]:[a]}var Si=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=a,this.starsConfig={starCount:30,showMoon:!0,...n},A(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let e=this.element.querySelector(this.layerSelector);if(!e)throw new Error(`Animation layer not found: ${this.layerSelector}`);let n=J(this.cardConfig,this.realWindSpeed),i=this.element.querySelector(".animated-weather-card");i?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let a=er(n.cloudCount,e.clientWidth||i?.clientWidth||0);for(let o of tr(e,a,{moon:this.starsConfig.showMoon,words:i?bn(i):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});A(this.config.devMode,`Stars animation started with ${a} stars`)}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&e.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.parentNode&&i.parentNode.removeChild(i)}),A(this.config.devMode,"Stars animation stopped")}setPaused(e){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(n=>n.classList.toggle("paused",e))}async onPause(){this.setPaused(!0),A(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),A(this.config.devMode,"Stars animation resumed")}};var Ci=class extends Z{constructor(e,n,i,a){super(e,n,i);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";A(this.config.devMode,"SunAnimation created")}async onStart(){let e=this.element.querySelector(this.layerSelector);if(!e){A(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}e.style.opacity="1",A(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.opacity="0"),A(this.config.devMode,"Sun animation stopped")}async onPause(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="paused"),A(this.config.devMode,"Sun animation paused")}async onResume(){let e=this.element.querySelector(this.layerSelector);e&&(e.style.animationPlayState="running"),A(this.config.devMode,"Sun animation resumed")}};var Ti=class{constructor(t,e,n,i){this.activeAnimations=new Map;this.element=t,this.config=e,this.timeOfDayManager=n,this.realWindSpeed=i}async startModularAnimation(t,e){this.activeAnimations.has(t)&&await this.stopModularAnimation(t);try{let n={intensity:e,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},i=null;switch(t){case"rain":i=new di(this.element,{...n,isStorm:e>=2&&e<=4,isPouring:e>4,isLightRain:e<1,particleCount:Math.floor(e*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":i=new ci(this.element,{...n,particleCount:Math.floor(e*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":i=new hi(this.element,{...n,particleCount:Math.floor(e*40)},this.config,this.realWindSpeed);break;case"wind":i=new fi(this.element,{...n,leafCount:Math.max(1,Math.floor(e*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":i=new pi(this.element,{...n,disableShake:this.config.disable_lightning_shake||!1,minInterval:vn[0],maxInterval:vn[1]},this.config,this.realWindSpeed);break;case"clouds":i=new bi(this.element,{...n,cloudCount:Math.max(1,Math.floor(e*2)),isPartlyCloudy:e<3},this.config,this.realWindSpeed);break;case"fog":i=new xi(this.element,{...n,layerCount:Math.max(2,Math.min(5,Math.floor(e)))},this.config,this.realWindSpeed);break;case"stars":i=new Si(this.element,{...n,starCount:Math.max(15,Math.floor(e*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":i=new Ci(this.element,n,this.config);break;default:return A(this.config.dev_mode,`No modular animation registered for type: ${t}`),null}return await i.start(),this.activeAnimations.set(t,i),A(this.config.dev_mode,`Started modular ${t} animation with intensity ${e}`),i}catch(n){return console.error(`Failed to start modular ${t} animation:`,n),null}}async stopModularAnimation(t){let e=this.activeAnimations.get(t);if(e)try{await e.destroy(),A(this.config.dev_mode,`Stopped modular ${t} animation`)}catch(n){console.error(`Error stopping modular ${t} animation:`,n)}finally{this.activeAnimations.delete(t)}}async pauseModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isActive())try{await e.pause()}catch(n){console.error(`Error pausing modular ${t} animation:`,n)}}async resumeModularAnimation(t){let e=this.activeAnimations.get(t);if(e&&e.isPaused())try{await e.resume()}catch(n){console.error(`Error resuming modular ${t} animation:`,n)}}updateWindSpeed(t){if(!Object.is(t,this.realWindSpeed)){this.realWindSpeed=t;for(let[e,n]of this.activeAnimations)try{n.setWindSpeed(t)}catch(i){console.warn(`Failed to update wind speed for ${e}:`,i)}}}async cleanup(){let t=Array.from(this.activeAnimations.keys()).map(e=>this.stopModularAnimation(e));await Promise.all(t),this.activeAnimations.clear()}};var $t=class{constructor(t,e,n,i){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=t,this.config=e,this.isPausedFn=n,this.timeOfDayManager=i,this.modularBridge=new Ti(t,e,i,this.currentWindSpeed),A(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(t){this.currentWindSpeed=t,this.modularBridge.updateWindSpeed(t)}async startAnimation(t,e){let n=this.animations[t];if(n.isActive){A(this.config.dev_mode,`Animation ${t} already active \u2014 skipping`);return}let i=e?.intensity??n.intensity??1,a=this.generation;n.isActive=!0,n.intensity=i,this.setAnimationLayerVisibility(t,!0);try{let o=await this.modularBridge.startModularAnimation(t,i);if(a!==this.generation){A(this.config.dev_mode,`Discarding stale start for ${t} (generation drifted)`),await this.modularBridge.stopModularAnimation(t);return}if(!o){n.isActive=!1,console.warn(`No modular animation available for type: ${t}`);return}A(this.config.dev_mode,`Started ${t} animation with intensity ${i}`)}catch(o){console.error(`Failed to start ${t} animation:`,o),n.isActive=!1}}async stopAnimation(t){let e=this.animations[t];if(e.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(t),A(this.config.dev_mode,`Stopped ${t} animation`)}catch(n){console.error(`Error stopping ${t} animation:`,n)}this.setAnimationLayerVisibility(t,!1),e.isActive=!1,e.isPaused=!1}}pauseAnimation(t){let e=this.animations[t];!e.isActive||e.isPaused||(e.isPaused=!0,this.modularBridge.pauseModularAnimation(t),A(this.config.dev_mode,`Paused ${t} animation`))}resumeAnimation(t){let e=this.animations[t];!e.isActive||!e.isPaused||(e.isPaused=!1,this.modularBridge.resumeModularAnimation(t),A(this.config.dev_mode,`Resumed ${t} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(t=>this.stopAnimation(t)))}pauseAllAnimations(){Object.keys(this.animations).forEach(t=>this.pauseAnimation(t))}resumeAllAnimations(){Object.keys(this.animations).forEach(t=>this.resumeAnimation(t))}async applyWeatherCondition(t){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let e=this.defaultWeatherMappings[t.toLowerCase()];if(!e){console.warn(`No animation mapping for weather condition: ${t}`);return}await Promise.all(e.animations.map(n=>{let i=e.overrides?.[n];return this.startAnimation(n,i)})),A(this.config.dev_mode,`Applied weather condition: ${t} with animations: ${e.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(t,e){let n=this.element.querySelector(".animated-weather-card");if(!n)return;let i=`individual-${t}-active`;e?n.classList.add(i):n.classList.remove(i)}clearIndividualAnimationClasses(){let t=this.element.querySelector(".animated-weather-card");if(t)for(let e of Object.keys(this.animations))t.classList.remove(`individual-${e}-active`)}};var ki=new Map,nr=new Set;function ir(r,t,e){let n=ki.get(r);if(!t){n&&(ki.delete(r),ws());return}let i={entity:t,sun:e||"sun.sun"};n&&n.entity===i.entity&&n.sun===i.sun||(ki.set(r,i),ws())}function _s(r){if(r){for(let t of ki.values())if(t.sun===r)return t.entity}}function vs(r){return nr.add(r),()=>{nr.delete(r)}}function ws(){for(let r of[...nr])r()}var Ai=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:Number(r);return Number.isFinite(t)?t:null},lt=r=>typeof r=="string"?r.trim():"";function Rc(r){if(!r||typeof r!="object")return null;let t=r,e=typeof t.id=="number"?String(t.id):lt(t.id);return e?{id:e,label:lt(t.flight_number)||lt(t.callsign),aircraftCode:lt(t.aircraft_code),originCity:lt(t.airport_origin_city),originCode:lt(t.airport_origin_code_iata),destinationCity:lt(t.airport_destination_city),destinationCode:lt(t.airport_destination_code_iata),altitudeFt:Ai(t.altitude),groundSpeedKt:Ai(t.ground_speed),heading:Ai(t.heading),verticalSpeed:Ai(t.vertical_speed),onGround:t.on_ground===1||t.on_ground===!0||t.on_ground==="1"}:null}function ar(r,t){if(!r||!t)return null;let e=r.states[t];if(!e||e.state==="unavailable"||e.state==="unknown")return null;let n=e.attributes?.flights;if(!Array.isArray(n))return[];let i=[];for(let a of n){let o=Rc(a);o&&i.push(o)}return i}var Ei=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(t,e=!1){if(!t)return[];let n=t.filter(s=>!s.onGround),i=new Set(n.map(s=>s.id));if(this.known===null)return this.known=i,e?n.filter((s,l)=>n.findIndex(d=>d.id===s.id)===l):[];let a=[],o=new Set;for(let s of n)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),a.push(s));return this.known=i,a}reset(){this.known=null}};var Mi=class{constructor(t={}){this.listeners=new Set;this.config={enableDayNightCycle:t.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...t},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(t){let e=this.config.enableDayNightCycle;this.config={...this.config,...t},this.updateState(),this.config.enableDayNightCycle&&!e?this.startAutoUpdate():!this.config.enableDayNightCycle&&e&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(t){this.listeners.add(t)}removeListener(t){this.listeners.delete(t)}getTimeAwareColor(t){let e=this.getCurrentState();if(!this.isEnabled())return t.day;switch(e.timePhase){case"dawn":return t.dawn||this.blendColors(t.night,t.day,.3);case"day":return t.day;case"dusk":return t.dusk||this.blendColors(t.day,t.night,.3);case"night":return t.night;default:return t.day}}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let t=Ee(),e,n;if(!this.config.useBrowserTime&&this.config.timeZone){let g=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(t);e=parseInt(g.find(m=>m.type==="hour")?.value||"0",10),n=parseInt(g.find(m=>m.type==="minute")?.value||"0",10)}else e=t.getHours(),n=t.getMinutes();let i=e+n/60,a,o=this.config.sunriseHour,s=this.config.sunsetHour,l=(o-1+24)%24,d=(o+.5)%24,c=(s-.5+24)%24,h=(s+1)%24,u=(g,m,p)=>m<=p?g>=m&&g<p:g>=m||g<p;u(i,l,d)?a="dawn":u(i,d,c)?a="day":u(i,c,h)?a="dusk":a="night";let f={isDaytime:a==="day"||a==="dawn",isNighttime:a==="night"||a==="dusk",isDawn:a==="dawn",isDusk:a==="dusk",currentHour:e,timePhase:a};!this.currentState||this.currentState.timePhase!==f.timePhase?(this.currentState=f,this.notifyListeners(f)):this.currentState=f}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Fo.UPDATE_INTERVAL)}notifyListeners(t){this.listeners.forEach(e=>{try{e(t)}catch(n){console.error("TimeOfDayManager: Error in listener callback:",n)}})}blendColors(t,e,n){let i=t.replace("#",""),a=e.replace("#",""),o=parseInt(i.substring(0,2),16),s=parseInt(i.substring(2,4),16),l=parseInt(i.substring(4,6),16),d=parseInt(a.substring(0,2),16),c=parseInt(a.substring(2,4),16),h=parseInt(a.substring(4,6),16),u=Math.round(o*(1-n)+d*n),f=Math.round(s*(1-n)+c*n),g=Math.round(l*(1-n)+h*n),m=u.toString(16).padStart(2,"0"),p=f.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${m}${p}${w}`}};var bs=r=>`
        ${r} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Sn={text:"#f4f6fa",fill:"rgba(12, 16, 24, 0.62)",alpha:.62,ink:[12,16,24]},zc=ds(),Wc=Ke(Fe(zt)),It=r=>`${Math.round(r*100)}%`,Nc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,$c=48,xn=.2,Ic={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},qc={good:"#84ef8a",moderate:"#f2db49",sensitive:"#ffd1a9",unhealthy:"#ffcdc8",very_unhealthy:"#e5d0ff",hazardous:"#fcd5e3"},xs=()=>`
${bs("animated-weather-card")}
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
          --awc-secondary: ${gi};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${Wc};
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
            ${hs()};
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
        ${zc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Wt(yi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer) 0 0 / var(--awc-sky-glow-box, 100% 100%) no-repeat,
            linear-gradient(180deg, transparent ${It(rs)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${It(as)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Wt(os,"var(--awc-sky-glow)")}; }
        }
        /* A card taller than five rows keeps a five-row card's glow, around the
           sun beside the temperature, rather than a long streak down its side:
           the light is painted in a box no taller than that card, from the top
           (it fades out well inside it). Behind @supports, since a browser that
           can't read min() there would drop the whole sky. The compact strip,
           the wall, the view and the forecast card light the whole card. */
        @supports (background-size: 100% min(100%, 1px)) {
          .sky { --awc-sky-glow-box: 100% min(100%, ${wi}px); }
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
          background-image: ${Nc};
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
        ${Object.entries(Ic).map(([r,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${r}"] .attribute-icon { color: ${t}; }`).join(`
        `)}
        ${Object.entries(qc).map(([r,t])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="aqi"][data-level="${r}"] .attribute-icon { color: ${t}; }`).join(`
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
          --awc-sky-glow-layer: ${Wt(ss,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${$c}px;
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
          top: ${It(xn)};
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
          max-height: ${wi}px;
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
          top: ${It(xn)};
          top: min(${It(xn)}, ${+(xn*wi).toFixed(1)}px);
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
        .animated-weather-card[data-fw] .moon-gsap { top: ${It(xn)}; }
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

`;var rr={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",daylight_day:"{delta} siden i g\xE5r",daylight_week:"{delta} siden forrige uke",daylight_month:"{delta} siden forrige m\xE5ned",shift_earlier:"{delta} tidligere",shift_later:"{delta} senere",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem",rain_today:"Regn i dag",rain_now:"Regn n\xE5",dew_point:"Duggpunkt",visibility:"Sikt",cloud_cover:"Skydekke",gusts:"Vindkast",aqi:"Luftkvalitet",aqi_good:"God",aqi_moderate:"Moderat",aqi_sensitive:"Usunn for f\xF8lsomme",aqi_unhealthy:"Usunn",aqi_very_unhealthy:"Sv\xE6rt usunn",aqi_hazardous:"Farlig"},Gc={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",daylight_day:"{delta} since yesterday",daylight_week:"{delta} since last week",daylight_month:"{delta} since last month",shift_earlier:"{delta} earlier",shift_later:"{delta} later",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme",rain_today:"Rain today",rain_now:"Rain now",dew_point:"Dew point",visibility:"Visibility",cloud_cover:"Cloud cover",gusts:"Gusts",aqi:"Air quality",aqi_good:"Good",aqi_moderate:"Moderate",aqi_sensitive:"Unhealthy for some",aqi_unhealthy:"Unhealthy",aqi_very_unhealthy:"Very unhealthy",aqi_hazardous:"Hazardous"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",daylight_day:"{delta} seit gestern",daylight_week:"{delta} seit letzter Woche",daylight_month:"{delta} seit letztem Monat",shift_earlier:"{delta} fr\xFCher",shift_later:"{delta} sp\xE4ter",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem",rain_today:"Regen heute",rain_now:"Regen jetzt",dew_point:"Taupunkt",visibility:"Sichtweite",cloud_cover:"Bew\xF6lkung",gusts:"B\xF6en",aqi:"Luftqualit\xE4t",aqi_good:"Gut",aqi_moderate:"M\xE4\xDFig",aqi_sensitive:"Ungesund f\xFCr Empfindliche",aqi_unhealthy:"Ungesund",aqi_very_unhealthy:"Sehr ungesund",aqi_hazardous:"Gef\xE4hrlich"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",daylight_day:"{delta} desde ayer",daylight_week:"{delta} desde la semana pasada",daylight_month:"{delta} desde el mes pasado",shift_earlier:"{delta} antes",shift_later:"{delta} despu\xE9s",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo",rain_today:"Lluvia hoy",rain_now:"Lluvia ahora",dew_point:"Punto de roc\xEDo",visibility:"Visibilidad",cloud_cover:"Nubosidad",gusts:"R\xE1fagas",aqi:"Calidad del aire",aqi_good:"Buena",aqi_moderate:"Moderada",aqi_sensitive:"Da\xF1ina para sensibles",aqi_unhealthy:"Da\xF1ina",aqi_very_unhealthy:"Muy da\xF1ina",aqi_hazardous:"Peligrosa"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",daylight_day:"{delta} depuis hier",daylight_week:"{delta} depuis la semaine derni\xE8re",daylight_month:"{delta} depuis le mois dernier",shift_earlier:"{delta} plus t\xF4t",shift_later:"{delta} plus tard",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme",rain_today:"Pluie aujourd\u2019hui",rain_now:"Pluie en cours",dew_point:"Point de ros\xE9e",visibility:"Visibilit\xE9",cloud_cover:"Couverture nuageuse",gusts:"Rafales",aqi:"Qualit\xE9 de l'air",aqi_good:"Bonne",aqi_moderate:"Mod\xE9r\xE9e",aqi_sensitive:"Mauvaise pour les sensibles",aqi_unhealthy:"Mauvaise",aqi_very_unhealthy:"Tr\xE8s mauvaise",aqi_hazardous:"Dangereuse"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",daylight_day:"{delta} da ieri",daylight_week:"{delta} dalla settimana scorsa",daylight_month:"{delta} dal mese scorso",shift_earlier:"{delta} prima",shift_later:"{delta} dopo",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo",rain_today:"Pioggia oggi",rain_now:"Pioggia ora",dew_point:"Punto di rugiada",visibility:"Visibilit\xE0",cloud_cover:"Copertura nuvolosa",gusts:"Raffiche",aqi:"Qualit\xE0 dell'aria",aqi_good:"Buona",aqi_moderate:"Moderata",aqi_sensitive:"Nociva per i sensibili",aqi_unhealthy:"Nociva",aqi_very_unhealthy:"Molto nociva",aqi_hazardous:"Pericolosa"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",daylight_day:"{delta} sinds gisteren",daylight_week:"{delta} sinds vorige week",daylight_month:"{delta} sinds vorige maand",shift_earlier:"{delta} eerder",shift_later:"{delta} later",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem",rain_today:"Regen vandaag",rain_now:"Regen nu",dew_point:"Dauwpunt",visibility:"Zicht",cloud_cover:"Bewolking",gusts:"Windstoten",aqi:"Luchtkwaliteit",aqi_good:"Goed",aqi_moderate:"Matig",aqi_sensitive:"Ongezond voor gevoeligen",aqi_unhealthy:"Ongezond",aqi_very_unhealthy:"Zeer ongezond",aqi_hazardous:"Gevaarlijk"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",daylight_day:"{delta} od wczoraj",daylight_week:"{delta} od zesz\u0142ego tygodnia",daylight_month:"{delta} od zesz\u0142ego miesi\u0105ca",shift_earlier:"{delta} wcze\u015Bniej",shift_later:"{delta} p\xF3\u017Aniej",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny",rain_today:"Deszcz dzi\u015B",rain_now:"Deszcz teraz",dew_point:"Punkt rosy",visibility:"Widoczno\u015B\u0107",cloud_cover:"Zachmurzenie",gusts:"Porywy",aqi:"Jako\u015B\u0107 powietrza",aqi_good:"Dobra",aqi_moderate:"Umiarkowana",aqi_sensitive:"Szkodliwa dla wra\u017Cliwych",aqi_unhealthy:"Szkodliwa",aqi_very_unhealthy:"Bardzo szkodliwa",aqi_hazardous:"Niebezpieczna"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",daylight_day:"{delta} desde ontem",daylight_week:"{delta} desde a semana passada",daylight_month:"{delta} desde o m\xEAs passado",shift_earlier:"{delta} mais cedo",shift_later:"{delta} mais tarde",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo",rain_today:"Chuva hoje",rain_now:"Chuva agora",dew_point:"Ponto de orvalho",visibility:"Visibilidade",cloud_cover:"Nebulosidade",gusts:"Rajadas",aqi:"Qualidade do ar",aqi_good:"Boa",aqi_moderate:"Moderada",aqi_sensitive:"M\xE1 para sens\xEDveis",aqi_unhealthy:"M\xE1",aqi_very_unhealthy:"Muito m\xE1",aqi_hazardous:"Perigosa"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",daylight_day:"{delta} fa\u021B\u0103 de ieri",daylight_week:"{delta} fa\u021B\u0103 de s\u0103pt\u0103m\xE2na trecut\u0103",daylight_month:"{delta} fa\u021B\u0103 de luna trecut\u0103",shift_earlier:"cu {delta} mai devreme",shift_later:"cu {delta} mai t\xE2rziu",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem",rain_today:"Ploaie azi",rain_now:"Ploaie acum",dew_point:"Punct de rou\u0103",visibility:"Vizibilitate",cloud_cover:"Nebulozitate",gusts:"Rafale",aqi:"Calitatea aerului",aqi_good:"Bun\u0103",aqi_moderate:"Moderat\u0103",aqi_sensitive:"Nociv\u0103 pentru sensibili",aqi_unhealthy:"Nociv\u0103",aqi_very_unhealthy:"Foarte nociv\u0103",aqi_hazardous:"Periculoas\u0103"},nb:rr,no:rr,nn:rr,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",daylight_day:"{delta} \u0437 \u0443\u0447\u043E\u0440\u0430\u0448\u043D\u044C\u043E\u0433\u043E \u0434\u043D\u044F",daylight_week:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F",daylight_month:"{delta} \u0437 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F",shift_earlier:"\u043D\u0430 {delta} \u0440\u0430\u043D\u0456\u0448\u0435",shift_later:"\u043D\u0430 {delta} \u043F\u0456\u0437\u043D\u0456\u0448\u0435",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439",rain_today:"\u0414\u043E\u0449 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",rain_now:"\u0414\u043E\u0449 \u0437\u0430\u0440\u0430\u0437",dew_point:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",visibility:"\u0412\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C",cloud_cover:"\u0425\u043C\u0430\u0440\u043D\u0456\u0441\u0442\u044C",gusts:"\u041F\u043E\u0440\u0438\u0432\u0438",aqi:"\u042F\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0456\u0442\u0440\u044F",aqi_good:"\u0414\u043E\u0431\u0440\u0430",aqi_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0430",aqi_sensitive:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u0447\u0443\u0442\u043B\u0438\u0432\u0438\u0445",aqi_unhealthy:"\u0428\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_very_unhealthy:"\u0414\u0443\u0436\u0435 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0430",aqi_hazardous:"\u041D\u0435\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0430"}};function qt(r){return r?.locale?.language||r?.language||"en"}function Gt(r){return`${qt(r)}|${r?.locale?.time_format??""}|${Cn(r)??""}`}function Cn(r){if(r?.locale?.time_zone!=="server")return;let t=r.config?.time_zone;if(t)try{return new Intl.DateTimeFormat("en",{timeZone:t}),t}catch{return}}function N(r,t,e={}){return Bc(Gc,r,t,e)}function Bc(r,t,e,n={}){let i=qt(t).toLowerCase();return(r[i]?.[e]??r[i.split("-")[0]]?.[e]??r.en[e]).replace(/\{(\w+)\}/g,(o,s)=>n[s]??"")}function Vc(r){let t=r?.locale;if(!t?.time_format)return;if(t.time_format==="12")return!0;if(t.time_format==="24")return!1;let e=t.time_format==="language"?qt(r):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}catch{return}}function Bt(r,t){if(!r)return"--";let e=new Date(r);if(isNaN(e.getTime()))return"--";try{return Ss(t,{hour:"numeric",minute:"2-digit"}).format(e)}catch{return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Ss(r,t){let e=Vc(r),n={...t,timeZone:Cn(r)};return e!==void 0&&(n.hourCycle=e?"h12":"h23"),new Intl.DateTimeFormat(r?qt(r):void 0,n)}function Cs(r,t){try{let e=Ss(t,{hour:"numeric",minute:"2-digit"}).formatToParts(r),n=e.filter(a=>a.type==="dayPeriod").map(a=>a.value).join("");return{time:e.filter(a=>a.type!=="dayPeriod").map(a=>a.value).join("").trim(),period:n}}catch{return{time:r.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Pi(r,t){try{let e=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:Cn(t)}).formatToParts(r),n=i=>Number(e.find(a=>a.type===i)?.value??0);return n("hour")+n("minute")/60+n("second")/3600}catch{return r.getHours()+r.getMinutes()/60+r.getSeconds()/3600}}function or(r,t){let e=Math.round(Math.abs(r)*60),n=Math.floor(e/60),i=e%60,a=qt(t),o=Intl.DurationFormat;if(o&&t)try{return new o(a,{style:"narrow"}).format(n>0?{hours:n,minutes:i}:{minutes:i})}catch{}return a.toLowerCase().split("-")[0]==="uk"?n>0?`${n}\xA0\u0433\u043E\u0434 ${i}\xA0\u0445\u0432`:`${i}\xA0\u0445\u0432`:n>0?`${n}h ${i}m`:`${i}m`}function Li(r,t,e=!0){let n=Math.round(Math.abs(r)),i=e?n===0?"\xB1":r>0?"+":"\u2212":"",a=Math.floor(n/3600),o=Math.floor(n%3600/60),s=n%60,l=a?{hours:a,minutes:o}:o?{minutes:o,seconds:s}:{seconds:s};for(let f of Object.keys(l).slice(1))l[f]||delete l[f];let d=qt(t),c=Intl.DurationFormat;if(c&&t)try{let f=new c(d,n?{style:"narrow"}:{style:"narrow",secondsDisplay:"always"}).format(l);if(f)return i+f}catch{}let u=d.toLowerCase().split("-")[0]==="uk"?{hours:"\xA0\u0433\u043E\u0434",minutes:"\xA0\u0445\u0432",seconds:"\xA0\u0441"}:{hours:"h",minutes:"m",seconds:"s"};return i+Object.entries(l).map(([f,g])=>`${g}${u[f]}`).join(" ")}function sr(r,t){let e=Cn(t);if(e)try{let n=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(r)),i=o=>Number(n.find(s=>s.type===o)?.value),a=Date.UTC(i("year"),i("month")-1,i("day"),i("hour"),i("minute"),i("second"));if(Number.isFinite(a))return a-Math.floor(r/1e3)*1e3}catch{}return-new Date(r).getTimezoneOffset()*6e4}function lr(r,t){let e=r.getFullYear(),n=r.getMonth()+1,i=r.getDate();try{let o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"numeric",day:"numeric",timeZone:Cn(t)}).formatToParts(r),s=l=>Number(o.find(d=>d.type===l)?.value);[s("year"),s("month"),s("day")].every(Number.isFinite)&&([e,n,i]=[s("year"),s("month"),s("day")])}catch{}let a=new Date(Date.UTC(e,n-1,0)).getUTCDate();return Math.round((Date.UTC(e,n-1,i)-Date.UTC(e,n-2,Math.min(i,a)))/864e5)}function Di(r,t){let e=r.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return e?`${M(e[1])}<span class="${t}">${M(e[2])}</span>`:M(r)}var Ts=["humidity","wind","pressure","sun","uv","rain"],ks=["humidity","wind","pressure","sun"];function dr(r){let t=r.metrics,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e)return[...ks];let n=[];for(let i of e){let a=String(i).trim().toLowerCase();Ts.includes(a)&&!n.includes(a)&&n.push(a)}return n}var Oi=[3,6,8,11],As=["low","moderate","high","very_high","extreme"];function Tn(r){let t=r.uv_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==4)return Oi;let n=e.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,a)=>isFinite(i)&&(a===0||i>n[a-1]))?n:Oi}function kn(r,t=Oi){let e=Math.round(r),n=0;for(;n<4&&e>=t[n];)n++;return As[n]}var Uc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function Yc(r,t){try{let e=r.formatEntityState?.(t);if(e&&e!==t.state)return e}catch{}return Oe(Uc,t.state)||t.state}var cr=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:parseFloat(String(r));return isFinite(t)?t:null};function ur(r,t){return(t.uv_entity?cr(r?.states[t.uv_entity]?.state):null)??cr(t.entity?r?.states[t.entity]?.attributes?.uv_index:void 0)}function Es(r,t,e){if(e===null||!isFinite(e))return{text:"--",level:null};let n=kn(e,Tn(t));return{text:`${me(Math.max(0,Math.round(e)),r)} ${hr(r,n)}`,level:n}}function hr(r,t){return N(r,`uv_${t}`)}function En(r,t,e){let n=/\bin\b|inch/i.test(t)?2:1;return`${me(Math.max(0,r),e,n)} ${t}`.trim()}function _t(r,t,e){let n=t?r?.states[t]:void 0,i=cr(n?.state);return i===null?null:{value:i,unit:typeof n?.attributes?.unit_of_measurement=="string"?n.attributes.unit_of_measurement:e}}var Fi=(r,t)=>N(r,t?"rain_now":"rain_today"),Kc=180;function Ms(r,t){let e=t.note_entity?r?.states[t.note_entity]:void 0;if(!e)return null;let n=s=>typeof s=="string"?s.trim():"",i=e.state==="unknown"||e.state==="unavailable"?"":n(e.state),a=n(e.attributes?.[t.note_attribute||"note"]);if(!i&&!a)return null;let o=Date.parse(e.attributes?.generated_at);return{line:i||a,note:a||i,writtenAt:Number.isNaN(o)?null:o}}function Ps(r,t){let e=Number(t.note_max_age??Kc);return r.writtenAt===null||!(e>0)?null:r.writtenAt+e*6e4}function mr(r,t){return r?Xc(r,t):{temperature:"--",weatherCondition:"",location:t.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}var jc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function An(r){let t=typeof r=="number"?r:typeof r=="string"?parseFloat(r):NaN;return isFinite(t)?(t%360+360)%360:typeof r=="string"?jc[r.trim().toUpperCase()]??null:null}function Vt(r){return Number(r.temperature_decimals)===1?1:0}function Xc(r,t){if(!t.entity)throw new Error("Weather entity is required");let e=r.states[t.entity];if(!e)throw new Error(`Entity ${t.entity} not found`);let n;if(t.outdoor_sensor_entity){let x=r.states[t.outdoor_sensor_entity];x&&x.state&&!isNaN(parseFloat(x.state))?n=parseFloat(x.state):n=e.attributes.temperature}else n=e.attributes.temperature;let i=Vt(t),a=x=>me(i?x:Math.round(x),r,i),o=n!=null&&!isNaN(n)?a(n):"--",s=Yc(r,e),l=t.name||e.attributes.friendly_name||"",d=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?me(Math.round(E),r)+"%":null},c="--";if(t.humidity_sensor_entity){let x=r.states[t.humidity_sensor_entity];c=x&&d(x.state)||d(e.attributes.humidity)||"--"}else c=d(e.attributes.humidity)||"--";let h="--",u=10,f=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);return isFinite(P)?(u=Wo(P,E||"km/h"),h=me(Math.round(P),r)+" "+(E||"km/h"),!0):!1},g=t.wind_speed_sensor_entity?r.states[t.wind_speed_sensor_entity]:void 0;g&&f(g.state,g.attributes?.unit_of_measurement)||f(e.attributes.wind_speed,e.attributes.wind_speed_unit);let m=t.wind_direction_sensor_entity?r.states[t.wind_direction_sensor_entity]:void 0,p=An(m?.state)??An(e.attributes.wind_bearing),w=(x,E)=>{let P=typeof x=="number"?x:parseFloat(x);if(!isFinite(P))return null;let O=E.toLowerCase()==="inhg"?2:0;return me(P,r,O)+" "+E},y=x=>{let E=typeof x=="number"?x:parseFloat(x);return isFinite(E)?E:null},_="--",b=null;if(t.pressure_sensor_entity){let x=r.states[t.pressure_sensor_entity];if(x){let E=x.attributes.unit_of_measurement||"hPa",P=w(x.state,E);P&&(_=P,b=y(x.state))}if(_==="--"&&e.attributes.pressure!==void 0){let E=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,E)||"--",b=y(e.attributes.pressure)}}else if(e.attributes.pressure!==void 0){let x=e.attributes.pressure_unit||"hPa";_=w(e.attributes.pressure,x)||"--",b=y(e.attributes.pressure)}let v=null,S;if(t.feels_like_entity&&(S=r.states[t.feels_like_entity]?.state),S===void 0&&e.attributes.apparent_temperature!==void 0&&(S=e.attributes.apparent_temperature),S!==void 0){let x=typeof S=="number"?S:parseFloat(S);isFinite(x)&&(v=a(x)+"\xB0")}let C="--";if(t.indoor_temperature_entity){let x=r.states[t.indoor_temperature_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(C=a(parseFloat(x.state))+"\xB0")}let T="--";if(t.indoor_humidity_entity){let x=r.states[t.indoor_humidity_entity];x&&x.state&&!isNaN(parseFloat(x.state))&&(T=me(Math.round(parseFloat(x.state)),r)+"%")}let k;if(t.sun_entity){let x=r.states[t.sun_entity];x&&(k={sunrise:x.attributes.next_rising||null,sunset:x.attributes.next_setting||null,dawn:x.attributes.next_dawn||null,dusk:x.attributes.next_dusk||null,noon:x.attributes.next_noon||null,elevation:x.attributes.elevation??null,aboveHorizon:x.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:c,windSpeed:h,windSpeedValue:u,windBearing:p,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:C,indoorHumidity:T,uv:ur(r,t),sun:k}}var Zc=["humidity","wind","pressure","sun","uv","rain","aqi","feels_like","dew_point","visibility","cloud_cover","gust","uv_max","rain_event","rain_week","rain_month","rain_year","sensor"],gr={humidity:"humidity",wind:"wind_speed",pressure:"pressure",uv:"uv_index",feels_like:"apparent_temperature",dew_point:"dew_point",visibility:"visibility",cloud_cover:"cloud_coverage",gust:"wind_gust_speed"},fr=["uv_max","rain_event","rain_week","rain_month","rain_year"],Qc=r=>r!=="sun"&&!Object.prototype.hasOwnProperty.call(gr,r);var Ls=r=>typeof r=="string"&&Zc.includes(r),Hi=r=>typeof r=="string"&&r.trim()?r.trim():void 0;function Jc(r){if(typeof r=="string"){let l=r.trim().toLowerCase();return Ls(l)?{type:l,view:fr.includes(l)}:null}if(!r||typeof r!="object")return null;let t=r,e=typeof t.type=="string"?t.type.trim().toLowerCase():"";if(!Ls(e))return null;let n={type:e,view:t.view===!0||fr.includes(e)},i=Hi(t.entity);i&&(n.entity=i);let a=Hi(t.direction_entity);e==="wind"&&a&&(n.direction_entity=a);let o=Hi(t.rate_entity);e==="rain"&&o&&(n.rate_entity=o);let s=Hi(t.name);return s&&(n.name=s),n}function yr(r){let t=r.readings;if(Array.isArray(t))return t.map(Jc).filter(a=>!!a);let e=[],n=a=>{let o=Object.fromEntries(Object.entries(a).filter(([,s])=>s!==void 0&&s!==""));e.push({...o,view:!!a.view||fr.includes(a.type)})},i=dr(r);for(let a of i){if(a==="sun"){r.show_sun!==!1&&n({type:"sun"});continue}a==="humidity"?n({type:"humidity",entity:r.humidity_sensor_entity}):a==="wind"?n({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity}):a==="pressure"?n({type:"pressure",entity:r.pressure_sensor_entity}):a==="uv"?n({type:"uv",entity:r.uv_entity}):a==="rain"&&n({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity})}!i.includes("wind")&&(r.wind_speed_sensor_entity||r.wind_direction_sensor_entity)&&n({type:"wind",entity:r.wind_speed_sensor_entity,direction_entity:r.wind_direction_sensor_entity,view:!0}),!i.includes("uv")&&r.uv_entity&&n({type:"uv",entity:r.uv_entity,view:!0}),!i.includes("rain")&&(r.rain_entity||r.rain_rate_entity)&&n({type:"rain",entity:r.rain_entity,rate_entity:r.rain_rate_entity,view:!0}),r.uv_max_entity&&n({type:"uv_max",entity:r.uv_max_entity});for(let a of["rain_event","rain_week","rain_month","rain_year"]){let o=r[`${a}_entity`];o&&n({type:a,entity:o})}return e}var eu=["metrics","show_sun","humidity_sensor_entity","wind_speed_sensor_entity","wind_direction_sensor_entity","pressure_sensor_entity","uv_entity","uv_max_entity","rain_entity","rain_rate_entity","rain_event_entity","rain_week_entity","rain_month_entity","rain_year_entity"],Mn=r=>r?.entity&&!r.entity.startsWith("weather.")?r.entity:void 0;function Ds(r){if(!Array.isArray(r.readings))return r;let t=yr(r),e=s=>t.find(l=>l.type===s),n={...r};for(let s of eu)delete n[s];let i=e("wind"),a=e("rain"),o={humidity_sensor_entity:Mn(e("humidity")),wind_speed_sensor_entity:Mn(i),wind_direction_sensor_entity:i?.direction_entity,pressure_sensor_entity:Mn(e("pressure")),uv_entity:Mn(e("uv")),uv_max_entity:e("uv_max")?.entity,rain_entity:Mn(a),rain_rate_entity:a?.rate_entity,rain_event_entity:e("rain_event")?.entity,rain_week_entity:e("rain_week")?.entity,rain_month_entity:e("rain_month")?.entity,rain_year_entity:e("rain_year")?.entity};for(let[s,l]of Object.entries(o))l&&(n[s]=l);return n}var Os=r=>r.map((t,e)=>({r:t,i:e})).filter(({r:t})=>!t.view&&!(Qc(t.type)&&!t.entity)),Fs=r=>[...new Set(r.flatMap(t=>[t.entity,t.direction_entity,t.rate_entity]).filter(t=>!!t))];var pr=[51,101,151,201,301],tu=["good","moderate","sensitive","unhealthy","very_unhealthy","hazardous"];function Hs(r){let t=r.aqi_levels,e=Array.isArray(t)?t:typeof t=="string"?t.split(","):null;if(!e||e.length!==5)return pr;let n=e.map(i=>typeof i=="number"?i:parseFloat(String(i)));return n.every((i,a)=>isFinite(i)&&(a===0||i>n[a-1]))?n:pr}function Rs(r,t=pr){let e=Math.round(r),n=0;for(;n<5&&e>=t[n];)n++;return tu[n]}var wr=r=>{if(r==null||r==="")return null;let t=typeof r=="number"?r:parseFloat(String(r));return isFinite(t)?t:null},zs=(r,t,e)=>{let n=e.entity?.startsWith("weather.")?e.entity:t.entity;return n?r?.states[n]:void 0},nu=(r,t)=>t.entity&&!t.entity.startsWith("weather.")?r?.states[t.entity]:void 0;function $e(r,t,e,n,i=""){let a=nu(r,e),o=wr(a?.state);if(o!==null)return{value:o,unit:typeof a?.attributes?.unit_of_measurement=="string"?a.attributes.unit_of_measurement:i};let s=Oe(gr,e.type);if(!s)return{value:null,unit:""};let l=zs(r,t,e),d=n?l?.attributes?.[n]:void 0;return{value:wr(l?.attributes?.[s]),unit:typeof d=="string"?d:i}}var Pn=(r,t)=>t?`${r} ${t}`:r,ve="--",Ri=(r,t,e)=>yn(r,`ui.card.weather.attributes.${t}`,N(r,e)),iu={temperature:"thermometer",apparent_temperature:"thermometer",humidity:"humidity",moisture:"humidity",pressure:"pressure",atmospheric_pressure:"pressure",wind_speed:"wind",precipitation:"rain",precipitation_intensity:"rain",illuminance:"noon",irradiance:"noon",aqi:"aqi",pm25:"aqi",pm10:"aqi",pm1:"aqi",carbon_dioxide:"aqi",carbon_monoxide:"aqi",nitrogen_dioxide:"aqi",ozone:"aqi",sulphur_dioxide:"aqi",volatile_organic_compounds:"aqi",volatile_organic_compounds_parts:"aqi",distance:"eye"},au=(r,t)=>N(r,`aqi_${t}`);function ru(r,t){let e=t.sun_entity?r?.states[t.sun_entity]:void 0,n=e?.state==="above_horizon",i=e?Bt(n?e.attributes?.next_setting:e.attributes?.next_rising,r):ve;return{label:N(r,n?"sunset":"sunrise"),icon:n?"sunset":"sunrise",html:Di(i,"awc-ampm"),text:i}}function _r(r,t,e){let n=(o,s=0)=>me(s?o:Math.round(o),r,s),i=o=>`${me(Vt(t)?o:Math.round(o),r,Vt(t))}\xB0`,a=(o,s,l)=>({label:o,icon:s,html:M(l),text:l});switch(e.type){case"humidity":{let{value:o}=$e(r,t,e);return a(yn(r,"ui.card.weather.attributes.humidity","Humidity"),"humidity",o===null?ve:`${n(o)}%`)}case"wind":{let{value:o,unit:s}=$e(r,t,e,"wind_speed_unit","km/h"),l=e.direction_entity?r?.states[e.direction_entity]?.state:void 0,d=An(l)??An(zs(r,t,e)?.attributes?.wind_bearing);return{...a(yn(r,"ui.card.weather.attributes.wind_speed","Wind"),"wind",o===null?ve:Pn(n(o),s||"km/h")),bearing:d}}case"pressure":{let{value:o,unit:s}=$e(r,t,e,"pressure_unit","hPa"),l=s||"hPa";return{...a(yn(r,"ui.card.weather.attributes.air_pressure","Pressure"),"pressure",o===null?ve:Pn(n(o,l.toLowerCase()==="inhg"?2:0),l)),pressure:o}}case"sun":return ru(r,t);case"uv":{let{value:o}=$e(r,t,e),s=Es(r,t,o);return{label:N(r,"uv_index"),icon:"noon",html:M(s.text),text:s.text,level:s.level}}case"rain":{let o=_t(r,e.rate_entity,"mm/h"),s=_t(r,e.entity,"mm"),l=!!o&&o.value>0,d=l?o:s;return a(Fi(r,l),"rain",d?En(d.value,d.unit,r):ve)}case"aqi":{let{value:o}=$e(r,t,e);if(o===null)return{label:N(r,"aqi"),icon:"aqi",html:ve,text:ve,level:null};let s=Rs(o,Hs(t)),l=n(Math.max(0,o)),d=au(r,s);return{label:N(r,"aqi"),icon:"aqi",html:M(`${l} ${d}`),text:`${l} ${d}`,value:l,word:d,level:s}}case"feels_like":{let{value:o}=$e(r,t,e);return a(N(r,"feels_like"),"thermometer",o===null?ve:i(o))}case"dew_point":{let{value:o}=$e(r,t,e);return a(Ri(r,"dew_point","dew_point"),"thermometer",o===null?ve:i(o))}case"visibility":{let{value:o,unit:s}=$e(r,t,e,"visibility_unit","km");return a(Ri(r,"visibility","visibility"),"eye",o===null?ve:Pn(n(o,o<10?1:0),s))}case"cloud_cover":{let{value:o}=$e(r,t,e);return a(Ri(r,"cloud_coverage","cloud_cover"),"cloud",o===null?ve:`${n(o)}%`)}case"gust":{let{value:o,unit:s}=$e(r,t,e,"wind_speed_unit","km/h");return a(Ri(r,"wind_gust_speed","gusts"),"wind",o===null?ve:Pn(n(o),s||"km/h"))}case"sensor":{let o=e.entity?r?.states[e.entity]:void 0,s=e.name||(typeof o?.attributes?.friendly_name=="string"?o.attributes.friendly_name:e.entity??""),l=Oe(iu,String(o?.attributes?.device_class??""))??"pressure";if(!o||o.state==="unavailable"||o.state==="unknown")return a(s,l,ve);let d;try{d=r?.formatEntityState?.(o)}catch{}if(!d||d===o.state){let c=wr(o.state),h=typeof o.attributes?.unit_of_measurement=="string"?o.attributes.unit_of_measurement:"";d=c===null?o.state:Pn(me(c,r,Math.min(2,(String(o.state).split(".")[1]??"").length)),h)}return a(s,l,d)}default:{let o=_t(r,e.entity,e.type==="uv_max"?"":"mm");return a(e.type,e.type==="uv_max"?"noon":"rain",o?e.type==="uv_max"?n(o.value):En(o.value,o.unit,r):ve)}}}function vr(r){return r&&typeof r=="object"&&typeof r.action=="string"?r:void 0}function zi(r,t){return{entity:t,tap_action:vr(r?.tap_action),hold_action:vr(r?.hold_action),double_tap_action:vr(r?.double_tap_action)}}function Ut(r){return!!r&&r.action!=="none"}function Ws(r){return r.tap_action?Ut(r.tap_action):!!r.entity}function Ln(r,t,e,n={}){let i=t[`${e}_action`],a=i&&Object.prototype.hasOwnProperty.call(n,i.action)?n[i.action]:void 0;if(a){a(e);return}if(e==="tap"&&!i){t.entity&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t.entity},bubbles:!0,composed:!0}));return}Ut(i)&&r.dispatchEvent(new CustomEvent("hass-action",{detail:{config:t,action:e},bubbles:!0,composed:!0}))}function Wi(r,t,e,n={}){if(r.dataset.actionsBound)return;r.dataset.actionsBound="1";let i=null,a=!1,o,s,l=()=>{clearTimeout(o),o=void 0},d=()=>{i=null,l()},c=()=>{Ut(e().double_tap_action)?s?(clearTimeout(s),s=void 0,Ln(t,e(),"double_tap",n)):s=setTimeout(()=>{s=void 0,Ln(t,e(),"tap",n)},250):Ln(t,e(),"tap",n)},h=u=>u.target!==r&&!!u.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');r.addEventListener("pointerdown",u=>{u.button!==0||h(u)||(i={x:u.clientX,y:u.clientY},a=!1,l(),Ut(e().hold_action)&&(o=setTimeout(()=>{o=void 0,a=!0,Ln(t,e(),"hold",n)},500)))}),r.addEventListener("pointermove",u=>{i&&Math.hypot(u.clientX-i.x,u.clientY-i.y)>10&&d()}),r.addEventListener("pointerup",()=>{let u=!!i&&!a;d(),u&&c()}),r.addEventListener("pointercancel",d),r.addEventListener("pointerleave",d),r.addEventListener("keydown",u=>{u.key!=="Enter"&&u.key!==" "||u.target!==r||!Ws(e())||(u.preventDefault(),Ln(t,e(),"tap",n))}),r.addEventListener("contextmenu",u=>{Ut(e().hold_action)&&u.preventDefault()})}function Dn(r,t,e){Ws(t)?(r.setAttribute("role","button"),r.tabIndex=0,r.style.cursor="pointer"):(e?r.setAttribute("role",e):r.removeAttribute("role"),r.removeAttribute("tabindex"),r.style.cursor="");let n=Ut(t.hold_action);r.style.userSelect=n?"none":"",r.style.setProperty("-webkit-user-select",n?"none":""),r.style.setProperty("-webkit-touch-callout",n?"none":"")}var br=new Map;function vt(r,t){let e=br.get(r);if(e)return e;let n=new Promise((i,a)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(c=>/animated-weather-card(?:\.min)?\.js/.test(c.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${r}$1.js`):`${r}.js`,d=document.createElement("script");d.src=l,d.type="module",d.async=!0,d.onload=()=>t()?i():a(new Error(`${l} loaded but registered nothing`)),d.onerror=()=>a(new Error(`Failed to load ${l}`)),document.head.appendChild(d)});return n.catch(()=>br.delete(r)),br.set(r,n),n}function On(r){return vt("animated-weather-card-editor",()=>!!customElements.get(r))}var Ns={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",rain:"m5.16 9.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5M18 18.5v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v3.89c0 .27.22.5.5.5.28 0 .5-.23.5-.5v-3.89c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5m-4 0v2c0 .28.22.5.5.5.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5-.28 0-.5.22-.5.5",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",cloud:"m5.16 12.5v.05h-.11c-1.69 0-3.05 1.45-3.05 3.22 0 1.78 1.36 3.23 3.05 3.23h13.24c2.6 0 4.71-2.18 4.71-4.86 0-2.69-2.11-4.87-4.71-4.87-.44 0-.87.07-1.29.18-1.07-2.09-3.19-3.45-5.55-3.45-3.48 0-6.29 2.91-6.29 6.5",thermometer:"m10 5.5a2.5 2.5 0 0 1 5 0v8.7a4.6 4.6 0 1 1-5 0zm1.5 0v9.4a3.1 3.1 0 1 0 2 0v-9.4a1 1 0 0 0-2 0zm.5 4.5a.5.5 0 0 1 1 0v7h-1zm-1.1 7.9a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 1 1-3.2 0z",eye:"m2.5 12.5c2.5-5 6.5-7 10-7s7.5 2 10 7c-2.5 5-6.5 7-10 7s-7.5-2-10-7zm1.8 0c2.3 3.9 5.3 5.5 8.2 5.5s5.9-1.6 8.2-5.5c-2.3-3.9-5.3-5.5-8.2-5.5s-5.9 1.6-8.2 5.5zm5.2 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0z",aqi:"m5 19.5c0-8.5 5-14 15-14.5-.5 10-6 15-14.5 15zm2 -.5l8.6-8.6-.8-.8-8.6 8.6z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function bt(r,t){return`<svg class="${t} awc-icon" data-icon="${r}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${Ns[r]}"/></svg>`}function $s(r,t){!r||r.getAttribute("data-icon")===t||(r.setAttribute("data-icon",t),r.firstElementChild?.setAttribute("d",Ns[t]))}var ou=29.530588853,su=Date.UTC(2e3,0,6,18,14),lu={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function Is(r,t){let n=((r.getTime()-su)/864e5/ou%1+1)%1,i=t?Oe(lu,t):void 0;if(!i)return n;let a=n*28;return a>=27.5&&(a-=28),a=Math.min(i[1],Math.max(i[0],a)),(a/28%1+1)%1}function qs(r,t=!1){let e=Math.cos(2*Math.PI*r),n=(1-e)/2,i=r<.5!==t,a=n<.5,o=(Math.abs(e)*50).toFixed(1),s=i===a?1:0,l=i?130:-30,c=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,h=.3+.7*n;return{mask:`url("data:image/svg+xml,${encodeURIComponent(c)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*h).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*h).toFixed(3)})`}}var Y=Math.PI/180,Hn=6e4,be=864e5;function xr(r){let t=(r/be+24405875e-1-2451545)/36525,e=(280.46646+t*(36000.76983+t*3032e-7))%360,n=357.52911+t*(35999.05029-1537e-7*t),i=.016708634-t*(42037e-9+1267e-10*t),a=Math.sin(n*Y)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*Y)*(.019993-101e-6*t)+Math.sin(3*n*Y)*289e-6,o=125.04-1934.136*t,s=e+a-.00569-.00478*Math.sin(o*Y),l=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(o*Y),d=Math.asin(Math.sin(l*Y)*Math.sin(s*Y)),c=Math.tan(l/2*Y)**2,h=4/Y*(c*Math.sin(2*e*Y)-2*i*Math.sin(n*Y)+4*i*c*Math.sin(n*Y)*Math.cos(2*e*Y)-.5*c*c*Math.sin(4*e*Y)-1.25*i*i*Math.sin(2*n*Y));return{declination:d,equationOfTime:h}}function Bs(r,t,e){let{declination:n,equationOfTime:i}=xr(r.getTime()),o=((r.getUTCHours()*60+r.getUTCMinutes()+r.getUTCSeconds()/60+r.getUTCMilliseconds()/6e4+i+4*e)%1440+1440)%1440/4-180,s=Math.sin(t*Y)*Math.sin(n)+Math.cos(t*Y)*Math.cos(n)*Math.cos(o*Y);return 90-Math.acos(Math.max(-1,Math.min(1,s)))/Y}function Vs(r,t){let e=r+(720-4*t)*Hn,{equationOfTime:n}=xr(e),i=r+(720-4*t-n)*Hn;return{noon:i,declination:xr(i).declination}}var du=-.833;function Fn(r,t){let e=Math.floor(t/be)*be,n=NaN;for(let i=-1;i<=1;i++){let a=Vs(e+i*be,r).noon;Math.abs(a-t)>=Math.abs(n-t)||(n=a)}return n}function Sr(r,t,e){let n=l=>Bs(new Date(l),r,t)>du,i=e-be/2,a=e+be/2,o=n(e);if(!o)return{up:o,start:i,end:a,rise:null,set:null};let s=(l,d)=>{for(let c=0;c<24;c++){let h=(l+d)/2;n(h)?d=h:l=h}return(l+d)/2};return{up:o,start:i,end:a,rise:n(i)?null:s(i,e),set:n(a)?null:s(a,e)}}function Gs(r,t,e){let n=Sr(r,t,Fn(t,e));return n.up?n.rise===null&&n.set===null?{minutes:1440,polar:!0}:{minutes:((n.set??n.end)-(n.rise??n.start))/Hn,polar:!1}:{minutes:0,polar:!0}}function Us(r,t,e,n,i){let a=Fn(t,e),o=null,s=a;for(let d of[a-be,a,a+be]){let c=Sr(r,t,Fn(t,d))[n];c!==null&&(o===null||Math.abs(c-e)<Math.abs(o-e))&&(o=c,s=Fn(t,d))}if(o===null)return null;let l=Sr(r,t,Fn(t,s-i*be))[n];return l===null?null:{now:o,then:l}}function Ys(r,t,e,n){let i=Gs(r,t,e);return i.polar?null:Math.round((i.minutes-Gs(r,t,e-n*be).minutes)*60)}function Ks(r,t,e=Ee()){let n=e.getTime(),i=Math.floor(n/be)*be,a={noon:[],midnight:[],rising:[],setting:[],dawn:[],dusk:[]},o=r*Y;for(let m=-1;m<=2;m++){let{noon:p,declination:w}=Vs(i+m*be,t);a.noon.push(p),a.midnight.push(p+be/2);for(let[y,_,b]of[[-.833,"rising","setting"],[-6,"dawn","dusk"]]){let v=(Math.sin(y*Y)-Math.sin(o)*Math.sin(w))/(Math.cos(o)*Math.cos(w));if(!(Math.abs(v)<=1))continue;let S=Math.acos(v)/Y*4;a[_].push(p-S*Hn),a[b].push(p+S*Hn)}}let s=m=>m.filter(p=>p>n).sort((p,w)=>p-w)[0]??null,l=m=>m===null?null:new Date(m).toISOString(),d=Bs(e,r,t),c=s(a.rising),h=s(a.setting),u=s(a.noon),f=s(a.midnight);return{state:(h!==null&&c!==null?h<c:h!==null?!0:c!==null?!1:d>-.833)?"above_horizon":"below_horizon",attributes:{next_dawn:l(s(a.dawn)),next_dusk:l(s(a.dusk)),next_midnight:l(f),next_noon:l(u),next_rising:l(c),next_setting:l(h),elevation:Math.round(d*100)/100,rising:u!==null&&f!==null?u<f:!1}}}var js=r=>typeof r=="number"?r:typeof r=="string"&&r.trim()?Number(r):NaN;function cu(r){let t=r.latitude!==void 0&&r.latitude!==null&&r.latitude!=="",e=r.longitude!==void 0&&r.longitude!==null&&r.longitude!=="",n=typeof r.time_zone=="string"&&r.time_zone.trim()?r.time_zone.trim():void 0;if(!t&&!e&&!n)return null;let i,a;if(t||e){if(i=js(r.latitude),a=js(r.longitude),!t||!e)throw new Error("latitude and longitude go together: set both, or neither");if(!(i>=-90&&i<=90))throw new Error(`latitude must be a number between -90 and 90 (got ${r.latitude})`);if(!(a>=-180&&a<=180))throw new Error(`longitude must be a number between -180 and 180 (got ${r.longitude})`)}if(n)try{new Intl.DateTimeFormat("en",{timeZone:n})}catch{throw new Error(`time_zone must be a time zone name, such as Europe/Rome (got ${n})`)}let o=l=>String(Math.round(l*1e4)).replace("-","m"),s=i!==void 0&&a!==void 0?`sun.awc_${o(i)}_${o(a)}`:void 0;return{latitude:i,longitude:a,timeZone:n,sunId:s,key:`${s??""}|${n??""}`}}function uu(r,t,e,n=[]){let i=r;if(i.awcPlace===t.key)return r;let a=i.awcHome??r,o=Object.create(a);if(t.sunId&&e){let s=Object.create(a.states);s[t.sunId]=e;let l=e.state==="above_horizon"?"sunny":"clear-night";for(let d of n){let c=d?a.states[d]:void 0;d&&c&&(c.state==="sunny"||c.state==="clear-night")&&c.state!==l&&(s[d]={...c,state:l})}o.states=s}return o.config={...a.config,...t.latitude!==void 0?{latitude:t.latitude,longitude:t.longitude}:{},...t.timeZone?{time_zone:t.timeZone}:{}},t.timeZone&&(o.locale={...a.locale??{},time_zone:"server"}),o.awcPlace=t.key,o.awcHome=a,o}function hu(r,t=Ee()){if(!r.sunId||r.latitude===void 0||r.longitude===void 0)return;let e=Ks(r.latitude,r.longitude,t),n=t.toISOString();return{entity_id:r.sunId,state:e.state,attributes:{...e.attributes,friendly_name:"Sun"},last_changed:n,last_updated:n,context:{id:"",parent_id:null,user_id:null}}}var Yt=class{constructor(t=()=>[]){this.weather=t;this.place=null;this.timer=0}set(t){let e=cu(t),n=(e?.key??"")!==(this.place?.key??"");return this.place=e,n&&(this.sun=void 0),n}see(t){if(!this.place)return t;let e=Math.floor(fn()/6e4);if(this.place.sunId&&this.sun?.minute!==e){let n=hu(this.place);this.sun=n?{minute:e,entity:n}:void 0}return uu(t,this.place,this.sun?.entity,this.weather())}tick(t){this.stop(),this.place?.sunId&&(this.timer=window.setInterval(t,6e4))}stop(){this.timer&&window.clearInterval(this.timer),this.timer=0}};var Xs=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function Zs(r){let t=r.color_palette||"default",e=r.custom_colors||{},n="";if(t!=="theme"){let a=c=>{if(typeof c!="string"||!Xs.test(c))return null;let h=c.replace("#","");h.length===3&&(h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);let u=parseInt(h,16);return{r:u>>16&255,g:u>>8&255,b:u&255}},o=(c,h,u)=>"#"+(c<<16|h<<8|u).toString(16).padStart(6,"0"),s=(c,h)=>{let u=a(c);if(!u)return c;let f=1-h/100;return o(Math.max(0,Math.floor(u.r*f)),Math.max(0,Math.floor(u.g*f)),Math.max(0,Math.floor(u.b*f)))},l=(c,h)=>{let u=a(c);if(!u)return c;let f=h/100;return o(Math.min(255,Math.floor(u.r+(255-u.r)*f)),Math.min(255,Math.floor(u.g+(255-u.g)*f)),Math.min(255,Math.floor(u.b+(255-u.b)*f)))},d=(c,h)=>{let u=e[c];if(!u||typeof u!="string"||!Xs.test(u))return;let f=l(u,12),g=s(u,22);n+=`--weather-${h}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${f} 0%, ${u} 55%, ${g} 100%); `};d("sunny_bg","sunny"),d("rainy_bg","rainy"),d("snowy_bg","snowy"),d("stormy_bg","stormy"),d("windy_bg","windy"),d("cloudy_bg","cloudy")}let i=(a,o)=>{a&&gn(a)&&(n+=o.replace(/\$\{value\}/g,a))};return i(e.text_color,"--weather-text-color: ${value} !important; "),i(e.temperature_color,"--awc-hero-color: ${value} !important; "),i(e.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),i(e.rain_color,"--weather-rain-color: ${value} !important; "),i(e.snow_color,"--weather-snow-color: ${value} !important; "),n}var Kt="animated-weather-card-hour";var jt="animated-weather-card-dev",Qs="weather.awc_dev";function Rn(r){return r.awcDevBase??r}function $i(r,t){let e=Rn(r),n=window.AnimatedWeatherCardDev;if(!n||!t)return e;try{return n.wants(t)?n.lens(e,t):e}catch(i){return console.warn("Animated Weather Card: the dev card's world failed",i),e}}function zn(r){if(!r)return!1;let t=window.AnimatedWeatherCardDev;if(!t)return!!r.dev_mode;try{return t.wants(r)}catch{return!!r.dev_mode}}function Ii(){return window.AnimatedWeatherCardDev?.offset??0}function Xt(){return window.AnimatedWeatherCardsOnPage??(window.AnimatedWeatherCardsOnPage=new Set)}function Wn(){return window.AnimatedWeatherCardDevCards?Promise.resolve():vt("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevCards)}var Ni=class extends HTMLElement{setConfig(t){this.devCardConfig={...t},this.view?.update()}set hass(t){this.devCardHass=t,this.view?.update()}connectedCallback(){if(this.view){this.view.connected();return}Wn().then(()=>{this.isConnected&&!this.view&&(this.view=window.AnimatedWeatherCardDevCards.attach(this))}).catch(t=>{console.warn(`Animated Weather Card: ${t.message}`),this.view||(this.innerHTML=`<ha-card style="display:block;padding:16px;line-height:20px">The dev card needs animated-weather-card-dev.js from the same build, beside animated-weather-card.js. Copy it in, change the resource's ?v= and reload.</ha-card>`)})}disconnectedCallback(){this.view?.disconnected()}getCardSize(){return 8}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};var Js={horizon:196,peak:34,trough:276,twilightRy:78},Cr={horizon:200,peak:96,trough:262,twilightRy:44};function qi(r,t,e){let n=e-t;if(n<=0||n>=24)return 0;if(r>=t&&r<=e)return Math.sin(Math.PI*(r-t)/n);let i=((r-e)%24+24)%24;return-Math.sin(Math.PI*i/(24-n))}var Gi=(r,t=!1)=>t?1-r/24:r/24,xt=(r,t=!1)=>Gi(r,t)*1e3,Bi=(r,t)=>r>=0?t.horizon-r*(t.horizon-t.peak):t.horizon-r*(t.trough-t.horizon);var nl={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},mu={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function fu(r){return Oe(mu,r)??"last-light"}function Tr(r,t){let e=i=>i.startsWith("sensor.")&&Oe(nl,t.states[i]?.state)!==void 0,n=t?e("sensor.moon_phase")?"sensor.moon_phase":Object.keys(t.states).find(e):"sensor.moon_phase";return n?{sun_entity:r,moon_entity:n}:{sun_entity:r}}var pu=124,el=16;function gu(r,t){if(r<1)return 1;let e=Math.max(2,Math.floor((t+el)/(pu+el))),n=Math.ceil(r/e);return Math.ceil(r/n)}function yu(r,t,e){if(t==="none")return null;let n=r?.config?.latitude,i=r?.config?.longitude;if(typeof n!="number"||typeof i!="number"||!Number.isFinite(n)||!Number.isFinite(i))return null;let a=t==="week"||t==="month"?t:"day",o=a==="week"?7:a==="month"?lr(e,r):1,s=e.getTime()+(12-Pi(e,r))*36e5,l=Ys(n,i,s,o);if(l===null)return null;let d="\0",[c="",h=""]=N(r,a==="week"?"daylight_week":a==="month"?"daylight_month":"daylight_day",{delta:d}).split(d);return{before:c,figure:Li(l,r),after:h}}function wu(r,t,e,n){if(t==="none"||!n)return null;let i=r?.config?.latitude,a=r?.config?.longitude;if(typeof i!="number"||typeof a!="number"||!Number.isFinite(i)||!Number.isFinite(a))return null;let o=Date.parse(n);if(!Number.isFinite(o))return null;let s=t==="week"?7:t==="month"?lr(new Date(o),r):1,l=Us(i,a,o,e,s);if(!l)return null;let d=l.now-l.then-s*864e5+sr(l.now,r)-sr(l.then,r),c=Math.round(d/1e3);return c===0?null:c}function _u(r,t,e,n){let i=[];for(let a=0;a<=240;a++){let o=a/10;i.push(`${xt(o,n).toFixed(1)},${Bi(qi(o,r,t),e).toFixed(1)}`)}return"M"+i.join(" L")}function Vi(r,t){if(!r)return 0;let e=new Date(r);return isNaN(e.getTime())?0:Pi(e,t)}var vu=r=>Di(r,"st-ampm");vi();var tl=Ke(Fe(zt)),bu=`
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
        --st-text: ${tl};
        --st-secondary: ${tl};
        --st-secondary-opacity: ${gi};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Wt(yi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${Qa.map(r=>`${r} ${st}s ${Nt}`).join(", ")};
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
       they don't fit (the words kept for screen readers), or nothing (_fit). Never cut short, never on a second line */
    .st-shift-sign { display: none; }
    .st-shift[data-form="sign"] .st-shift-sign { display: inline; }
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
    /* The daylight's change, under the note in its style: only on a strip two rows tall, where the sky has room */
    .st-chart-note.st-chart-delta { top: 31px; }
    .st-chart-note.st-chart-delta[hidden] { display: none; }
    .st-card.compact[data-fit="short"] .st-chart-delta,
    .st-card.compact[data-fit="tight"] .st-chart-delta { display: none; }
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
`,kr=class extends HTMLElement{constructor(){super();this.config={};this._place=new Yt(()=>[this.config?this._weatherId():void 0]);this._path=null;this._link=null;this._onHour=e=>this._follow(e.detail);this.devKind="tracker";this._onDev=()=>{this.toggleAttribute("data-awc-dev",zn(this.config)),this._homeHass&&this.isConnected&&(this.hass=this._homeHass);let e=Ii();e!==this._devClock&&(this._devClock=e,this._render())};this._devClock=0;this._shadow=this.attachShadow({mode:"open"})}devConfig(){return this.config}_see(e){return this._place.see($i(e,this.config))}setConfig(e){let n=this._place.set(e),i=this._place.place?.sunId;if(!e.sun_entity&&!i&&!e.dev_mode)throw new Error("Please define a sun_entity (e.g. sun.sun), or the latitude and longitude of a place");let a=!!this.config.dev_mode!=!!e.dev_mode;this.config={...e,sun_entity:i||e.sun_entity||"sun.sun"},this.toggleAttribute("data-awc-dev",zn(this.config)),e.dev_mode&&Wn().then(this._onDev).catch(o=>console.warn(`Animated Weather Card: ${o.message}`)),(n||a)&&this._homeHass&&(this._hass=this._see(this._homeHass)),this._render()}set hass(e){this._homeHass=Rn(e),e=this._see(e);let n=this.config.sun_entity||"",i=this.config.moon_entity||"",a=this._hass?.states[n],o=e.states[n],s=this._hass?.states[i]?.state,l=e.states[i]?.state,d=Gt(this._hass)!==Gt(e),c=this._weatherId()||"",h=c&&this._hass?.states[c]?.state!==e.states[c]?.state;this._hass=e;let u=a?.attributes?.elevation,f=o?.attributes?.elevation;(!a||a.state!==o?.state||a.attributes?.next_rising!==o?.attributes?.next_rising||a.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((u||0)-(f||0))>=.5||i&&s!==l||d||h)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>{this._homeHass&&this._place.place&&(this._hass=this._see(this._homeHass)),this._render()},6e4)),window.addEventListener(Kt,this._onHour),window.addEventListener(jt,this._onDev),Xt().add(this),this._unshare||(this._unshare=vs(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Kt,this._onHour),window.removeEventListener(jt,this._onDev),Xt().delete(this),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let e=this._shadow.querySelector(".st-card");if(!e)return;let n=e.querySelector(".st-metrics"),i=e.querySelector(".st-delta");for(let a of["regular","compact","short","tight"]){if(e.dataset.fit=a,this._fitShift(e),n){let o=Array.from(n.children).filter(s=>getComputedStyle(s).display!=="none").length;n.style.setProperty("--st-cols",String(gu(o,n.clientWidth)))}if(i?.parentElement){let o=i.parentElement,s=()=>o.scrollWidth>o.clientWidth+.5;i.hidden=!1,delete i.dataset.words,s()&&(i.dataset.words="off"),s()&&(i.hidden=!0)}if(this._clearDeltaOfPath(e),e.scrollHeight<=e.clientHeight+1)return}}_fitShift(e){let n=e.querySelector(".st-shift"),i=n?.parentElement;if(!n||!i||(n.hidden=!1,getComputedStyle(i).display==="none"))return;let a=i.clientWidth;e.classList.contains("compact")&&(n.hidden=!0,a=(e.querySelector(".st-hero")?.getBoundingClientRect().width??i.clientWidth)+Math.min(40,.08*e.clientWidth),n.hidden=!1);for(let o of["words","sign"])if(n.dataset.form=o,i.scrollWidth<=a+.5)return;n.hidden=!0}_clearDeltaOfPath(e){let n=e.querySelector(".st-chart-delta"),i=e.querySelector(".st-chart svg");if(!n||!i||!this._path||(n.hidden=!1,getComputedStyle(n).display==="none"))return;let a=n.getBoundingClientRect(),o=i.getBoundingClientRect();if(!o.width||!o.height)return;let{riseH:s,setH:l,rtl:d}=this._path,c=5;for(let f=0;f<=24;f+=.05){let g=o.left+Gi(f,d)*o.width;if(g<a.left-c||g>a.right+c)continue;if(o.top+Bi(qi(f,s,l),Cr)/300*o.height-c<a.bottom){n.hidden=!0;return}}let h=e.querySelector(".st-dot")?.getBoundingClientRect(),u=8;h&&h.right+u>a.left&&h.left-u<a.right&&h.bottom+u>a.top&&h.top-u<a.bottom&&(n.hidden=!0)}_actions(){let e=this.config.sun_entity===this._place.place?.sunId?void 0:this.config.sun_entity;return zi(this.config,e)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||_s(this.config.sun_entity)}_skyCondition(e){let n=this._weatherId(),i=n?this._hass?.states[n]?.state:void 0;if(i&&i!=="unavailable"&&i!=="unknown"){let a=si(i,void 0,void 0,this._hass?.config?.time_zone,{night:e==="night"});if(Za.includes(a))return a}return e==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await On("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(e,n=[],i=[]){let a=[...n,...i,...Object.keys(e?.states??{})];return Tr(a.find(o=>o.startsWith("sun."))??"sun.sun",e)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let e=this._hass.states[this.config.sun_entity];return e?{sunrise:e.attributes.next_rising||null,sunset:e.attributes.next_setting||null,dawn:e.attributes.next_dawn||null,dusk:e.attributes.next_dusk||null,noon:e.attributes.next_noon||null,elevation:typeof e.attributes.elevation=="number"?e.attributes.elevation:null,aboveHorizon:e.state==="above_horizon",rising:!!e.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let e=this._hass.states[this.config.moon_entity];if(!e)return null;let n=e.state,i;try{i=this._hass.formatEntityState?.(e)}catch{}return{phase:n,phaseName:(i&&i!==n?i:void 0)||Oe(nl,n)||n.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),icon:fu(n)}}_render(){this._drawnWeather=this._weatherId();let e=this._getSunData(),n=this._getMoonData(),i=this.config.color_palette!=="theme";if(!e||!e.sunrise||!e.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let a=Ee(),o=Pi(a,this._hass),s=Vi(e.sunrise,this._hass),l=Vi(e.sunset,this._hass),d=e.dawn?Vi(e.dawn,this._hass):Math.max(0,s-.5),c=e.dusk?Vi(e.dusk,this._hass):Math.min(24,l+.5),h=l-s,u=e.aboveHorizon,f=u?e.sunset:e.sunrise,g=new Date(f).getTime()-a.getTime(),m=this._hass,p=He=>M(N(m,He)),w=He=>vu(Bt(He,m)),y=g>0?N(m,"in_duration",{duration:or(g/36e5,m)}):"",_=y&&this.config.show_header!==!1?wu(m,this.config.daylight_delta,u?"set":"rise",f):null,b=_===null?"":`<span class="st-shift"><span class="st-shift-sep" aria-hidden="true"> \xB7 </span><span class="st-shift-words">${M(N(m,_<0?"shift_earlier":"shift_later",{delta:Li(_,m,!1)}))}</span><span class="st-shift-sign" aria-hidden="true">${M(Li(_,m))}</span></span>`,v=_i(e.elevation,e.rising,e.aboveHorizon),S=Rt(this._skyCondition(v),v),C=i?{"--awc-sky-top":S.top,"--awc-sky-mid":S.mid,"--awc-sky-bottom":S.bottom,"--awc-sky-glow":S.glow,"--awc-sky-scrim":S.scrim}:null,T=this.config.compact?Cr:Js,k=this.config.direction,x=k==="right_to_left"||k!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:x};let E=_u(s,l,T,x),P=`${E} L${xt(24,x)},${T.horizon} L${xt(0,x)},${T.horizon} Z`,O=qi(o,s,l),z=Gi(o,x)*100,I=Bi(O,T)/300*100,W=(He,Ki)=>{let In=Math.max(70,Math.abs(Ki)/24*1e3*2.4);return`<ellipse cx="${xt(He,x).toFixed(1)}" cy="${T.horizon}" rx="${In.toFixed(1)}" ry="${T.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},F=!!this.config.compact,te=this.config.show_header!==!1,xe=te?`
            <div class="st-hero">
                ${this.config.title&&!F?`<div class="st-title">${M(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${bt(u?"sunset":"sunrise","st-glyph")}
                    <span>${p(u?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(f)}</div>
                ${y?`<div class="st-countdown">${M(y)}${b}</div>`:""}
            </div>`:this.config.title&&!F?`<div class="st-hero"><div class="st-title">${M(this.config.title)}</div></div>`:"",de=(He,Ki,In,dl,cl=!1)=>`
                <div class="st-metric" data-kind="${M(He)}">
                    <div class="st-metric-label">${bt(Ki,"st-glyph")}<span title="${M(In)}">${M(In)}</span></div>
                    <div class="st-metric-value${cl?" wrap":""}">${dl}</div>
                </div>`,De=!F&&this.config.show_details!==!1,X=F&&te,ne=De||X?yu(m,this.config.daylight_delta,a):null,ce=He=>He.trim()?`<span class="st-delta-words">${M(He)}</span>`:"",Se=ne&&De?`<span class="st-delta">${ce(ne.before)}<span class="st-delta-figure">${M(ne.figure)}</span>${ce(ne.after)}</span>`:"",K=X?`
                        <div class="st-chart-note">${p(u?"sunrise":"sunset")}<span class="st-chart-note-time">${w(u?e.sunrise:e.sunset)}</span></div>${ne?`
                        <div class="st-chart-note st-chart-delta">${p("daylight")}<span class="st-chart-note-time">${M(ne.figure)}</span></div>`:""}`:"",ee=De?`
            <div class="st-metrics">
                ${u?de("sunrise","sunrise",p("sunrise"),w(e.sunrise)):de("sunset","sunset",p("sunset"),w(e.sunset))}
                ${de("noon","noon",p("solar_noon"),w(e.noon))}
                ${de("daylight","daylight",p("daylight"),M(or(h,m))+Se)}
                ${de("first-light","first-light",p("first_light"),w(e.dawn))}
                ${de("last-light","last-light",p("last_light"),w(e.dusk))}
                ${n?de("moon",n.icon,p("moon"),M(n.phaseName),!0):""}
            </div>`:"",ie=this.config.sun_entity?m?.states[this.config.sun_entity]:void 0,Ie="";try{Ie=ie&&m?.formatEntityState?.(ie)||""}catch{}let ll=[`${N(m,"sunrise")} ${Bt(e.sunrise,m)}`,`${N(m,"sunset")} ${Bt(e.sunset,m)}`,X&&ne?`${N(m,"daylight")} ${ne.before}${ne.figure}${ne.after}`:"",Ie].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${xe}
                    <div class="st-chart" role="img" aria-label="${M(ll)}">
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
                        <div class="st-dot ${O<0?"below":""}" style="left: ${z.toFixed(2)}%; top: ${I.toFixed(2)}%;"></div>${K}
                    </div>
                    ${ee}`,C)}_mount(e,n){let i=this._shadow.querySelector(".st-card");i||(this._shadow.innerHTML=`<style>${bu}</style><ha-card><div class="st-card"></div></ha-card>`,i=this._shadow.querySelector(".st-card"),Wi(i.parentElement,this,()=>this._actions())),Dn(i.parentElement,this._actions());let a=!!n;i.classList.toggle("sky",a),i.classList.toggle("compact",!!this.config.compact),i.parentElement?.classList.toggle("sky",a);for(let o of Qa)n?i.style.setProperty(o,n[o]):i.style.removeProperty(o);i.innerHTML=e,this._link&&this._follow(),this._fit()}_follow(e){if(e){if(!e.source||e.sun!==this.config.sun_entity||e.at===null&&!this._link)return;if(this._link=e.at===null?null:e,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let n=this._shadow.querySelector(".st-card");n&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:n,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",kr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,t)=>t.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Tr(t,r)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Tr(t,r),compact:!0}}]:null});function Zt(r){let t=Number(r?.attributes?.supported_features);if(!isFinite(t))return["hourly","daily"];let e=[];return t&2&&e.push("hourly"),t&4&&e.push("twice_daily"),t&1&&e.push("daily"),e}function il(r){let t=Zt(r);return t.includes("daily")?"daily":t.includes("twice_daily")?"twice_daily":null}var xu=5e3;function Su(){let r=new WeakMap;return{subscribe(t,e,n,i){let a=r.get(t);a||r.set(t,a=new Map);let o=`${e}|${n}`,s=a.get(o);if(!s){let d={listeners:new Set};s=d,a.set(o,d);let c=h=>{d.last=h;for(let u of[...d.listeners])u(h)};d.unsubscribe=t.subscribeMessage(h=>c({type:h?.type??n,forecast:Array.isArray(h?.forecast)?h.forecast:null}),{type:"weather/subscribe_forecast",entity_id:e,forecast_type:n}).catch(()=>{a.get(o)===d&&a.delete(o),c({type:n,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(i),l.last&&i(l.last),()=>{!l.listeners.delete(i)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(a.get(o)===l&&a.delete(o),l.unsubscribe?.then(d=>{typeof d=="function"&&d()}).catch(()=>{}))},xu))}}}}function Cu(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=Su())}function al(r,t,e,n){return r?.connection?.subscribeMessage?Cu().subscribe(r.connection,t,e,n):()=>{}}var Ui=class{constructor(t){this.changed=t;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(t,e,n){let i=e?t?.states[e]:void 0,a=Zt(i),o=n.hourly&&a.includes("hourly"),s=n.daily?il(i):null,l=`${e}|${o}|${s}`;if(!t?.connection||!e||!i){this.key&&this.stop();return}if(l===this.key&&this.connection===t.connection)return;this.stop(),this.key=l,this.connection=t.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let d=(c,h)=>{this.stops.push(al(t,e,c,u=>{u.failed||h(u.forecast),this.pending.delete(c),this.settled=this.pending.size===0,this.changed()}))};o&&d("hourly",c=>{this.hourly=c}),s&&d(s,c=>{this.daily=c}),this.settled&&this.changed()}stop(){for(let t of this.stops)t();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};vi();var rl=r=>`Wind from ${Math.round(r)}\xB0`,ol=r=>r==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",Tu=18,ku=450,Au=1600;function Qt(r,t){return t?.states["sun.sun"]?{entity:r,sun_entity:"sun.sun"}:{entity:r}}var Eu=400,Mu=120,Pu=220,Lu=24;window.AnimatedWeatherCardGsap=Ia;var sl=["regular","compact","short","tight","minimal"],Du=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...sl.map(r=>[r,"none"])],Yi=class extends HTMLElement{constructor(){super(...arguments);this.placeView=new Yt(()=>[this.config?.entity]);this.readingList=[];this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new Ei;this.devPlanes=!1;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new Ui(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.devChanged=()=>{this.markDev(),this.homeHass&&this.isConnected&&(this.hass=this.homeHass);let e=Ii();e!==this.devClock&&(this.devClock=e,this.timeOfDayManager?.updateConfig({}),this.noteVisible&&this.extras?.seen(!0))};this.devClock=0;this.onNeedle=e=>{let n=e.detail;this.following||this.forecastOn()||n?.at==null||n.source===this||n.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(e,n=[],i=[]){let a=[...n,...i,...Object.keys(e?.states??{})];return Qt(a.find(o=>o.startsWith("weather."))??qa.entity,e)}actionsConfig(){if(this.surface==="view")return{};let e=zi(this.config,this.config?.entity);return e.tap_action?e:this.config?.layout==="nightstand"&&this.surface==="card"?{...e,tap_action:{action:"none"}}:this.forecastOn()?{...e,tap_action:{action:"forecast"}}:e}see(e){return this.placeView.see($i(e,this.config))}markDev(){this.toggleAttribute("data-awc-dev",this.surface!=="view"&&zn(this.config))}get devKind(){return this.surface==="forecast"?"forecast":"weather"}devConfig(){return this.config}forecastOn(){return this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand"}extrasWanted(){return this.forecastOn()||this.following||!!this.config?.show_clock||!!this.config?.show_date||this.heroClock()}shareSky(){let e=this.isConnected&&this.surface!=="view";ir(this,e?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let e=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:e!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let e=window.AnimatedWeatherCardForecast;if(!e){vt("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}e.version===2&&(this.extras=e.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Rt,phase:()=>this.currentSkyPhase(),current:()=>{let e=this.config?.outdoor_sensor_entity||this.config?.entity,n=Number(e?this.config?.outdoor_sensor_entity?this._hass?.states[e]?.state:this._hass?.states[e]?.attributes?.temperature:NaN);return isFinite(n)?n:void 0},temperature:e=>{let n=this.config?Vt(this.config):0;return me(n?e:Math.round(e),this._hass,n).replace(/^-/,"\u2212")},conditionName:e=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:e,attributes:{},last_changed:"",last_updated:""})??e,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),readings:()=>this.readingList.filter(e=>(e.type==="aqi"||e.type==="sensor")&&!!e.entity).map(e=>{let n=_r(this._hass,this.config,e);return{label:n.label,value:n.value??n.text,...n.word?{word:n.word}:{},...n.level?{level:n.level}:{}}}),reading:(e,n)=>{if(!this.config)return null;if(e==="rain_today"||e==="rain_now"){let o=e==="rain_now"?_t(this._hass,this.config.rain_rate_entity,"mm/h"):_t(this._hass,this.config.rain_entity,"mm");return!o||e==="rain_now"&&!(o.value>0)?null:{label:Fi(this._hass,e==="rain_now"),value:En(o.value,o.unit,this._hass)}}if(e!=="uv")return null;let i=n??ur(this._hass,this.config);if(i===null||!isFinite(i))return null;let a=kn(i,Tn(this.config));return{label:N(this._hass,"uv_index"),value:me(Math.max(0,Math.round(i)),this._hass),word:hr(this._hass,a),level:a}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(e){if(!e.entity&&!e.dev_mode)throw new Error("You need to define an entity or enable dev mode");let n=h=>h===void 0||typeof h=="number"&&isFinite(h)&&h>=0&&h<=23;if(!n(e.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${e.sunrise_hour})`);if(!n(e.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${e.sunset_hour})`);let i=this.placeView.set(e),a=this.placeView.place?.sunId;a&&(e={...e,sun_entity:a}),e=Ds(e),e.layout==="nightstand"&&e.compact&&this.surface==="card"&&(e={...e,compact:!1});let o=yr(e),s=JSON.stringify(o)!==JSON.stringify(this.readingList)||["show_attributes","show_attribute_labels","show_attribute_icons"].some(h=>this.config?.[h]!==e[h]);this.readingList=o;let l=!!this.config?.dev_mode!=!!e.dev_mode;e.dev_mode&&(e.entity||(e={...e,entity:Qs}),Wn().then(()=>this.devChanged()).catch(h=>console.warn(`Animated Weather Card: ${h.message}`)));let d=this.config?.auto_pause;this.config?.flights_entity!==e.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==e.entity&&(this.following=!1),this.config=e,this.markDev(),s&&this.redrawRow(),(i||l)&&this.homeHass&&(this._hass=this.see(this.homeHass)),this.isConnected&&this.tickPlace(),this.shareSky();let c=this.querySelector(".weather-info");if(c&&Dn(c,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let h=this.animationController;this._animationGeneration++,this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),h&&h.stopAllAnimations().catch(u=>A(this.config?.dev_mode,"Error stopping previous animation controller:",u))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!e.auto_pause!=!!d&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Kt,this.onNeedle),window.addEventListener(jt,this.devChanged),this.surface!=="view"&&Xt().add(this),this.tickPlace(),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.applySizeState()),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new $t(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let n=this.querySelector(".animated-weather-card");n&&(n.classList.remove("no-transitions"),n.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass||this.config.dev_mode&&!this.hass.states[this.config.entity??""])return;Ba(this),this.stopPlanes();let e=this.config.color_palette||"default",n;try{n=mr(this.hass,this.config)}catch(w){let y=w?.message||"Error loading weather data";this.innerHTML=`
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
            `;return}let{temperature:i,weatherCondition:a,location:o,windSpeedValue:s,pressureValue:l,feelsLike:d,indoorTemperature:c,indoorHumidity:h}=n,u=this.updatePressureTrend(l);this.currentWindSpeedValue=s;let f=!!this.config.compact,g=this.heroClock(),m=Zs(this.config),p=this.rowHtml(u);this.innerHTML=`
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
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${M(a)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${M(i)}</span><span class="degree">\xB0</span></div>
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
        ${xs()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(e,n){if(e)return"";let i=this.config?.show_location!==!1&&n?`<span class="awc-place">${M(n)}</span>`:"",a=this.config?.show_clock&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date?'<span class="awc-date"></span>':"";return i||a||o?`<div class="location">${a}${o}${i}</div>`:""}heroTime(){let{time:e,period:n}=Cs(Ee(),this._hass);return n?`${M(e)}<span class="awc-ampm">${M(n)}</span>`:M(e.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let e=this.querySelector("ha-card");if(!e)return;let n=this.config?.spill_particles!==!1?"visible":"hidden";e.style.setProperty("overflow",n,"important");let i=()=>{let a=e.shadowRoot;if(!a)return;let o=a.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",a.appendChild(o)),o.textContent=`:host { overflow: ${n} !important; }`};i(),!e.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(i))}transitionCondition(){let e=this.querySelector(".animated-weather-card");if(!e||e.classList.contains("loading")){this.initializeAnimations();return}e.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},Eu)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let e=window.AnimatedWeatherCardNote;if(e){this.noteWriter??(this.noteWriter=new e(this)),this.noteWriter.start();return}vt("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(e){this.writtenNote=e,this.updateNote()}noteWriting(e){this.noteComing!==e&&(this.noteComing=e,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let e=this.config.note_entity?Ms(this._hass,this.config):this.writtenNote,n=e?Ps(e,this.config):null;if(!e||n===null)return e;let i=n-fn();return i<=0?null:(i<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),i+50)),e)}noteHtml(e){return`<p class="weather-note"${e?"":" hidden"}><span class="note-long">${M(e?.note??"")}</span><span class="note-short">${M(e?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let e=this.querySelector(".weather-note");if(!e)return;let n=e.querySelector(".note-long"),i=e.querySelector(".note-short"),a=e.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=e.querySelector(".note-phrase"),d=N(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!a||e.hidden?(l&&(l.textContent=d),e.dataset.writing="",e.setAttribute("aria-busy","true"),e.hidden=!1,this.applySizeState()):this.fadeThrough(l,d);return}a&&(delete e.dataset.writing,e.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!e.hidden||a)&&(e.hidden=!0,this.applySizeState());return}if(e.hidden||a){this.noteTyping?.finish(),n&&(n.textContent=o.note),i&&(i.textContent=o.line),e.hidden=!1,this.applySizeState(),a&&this.typeIn(e);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(n,o.note,s),this.fadeThrough(i,o.line,s)}compactMeta(e,n){return[this.config?.show_location!==!1?e:"",n?`${N(this._hass,"feels_like")} ${n}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let e=this.config?.indoor_style,n=M(N(this._hass,"indoors")),i=bt("indoor","indoor-icon");if(e==="icon")return`${i}<span class="awc-visually-hidden">${n} </span>`;let a=`<span class="indoor-label">${n}</span>`;return e==="both"?i+a:a}heroMetaHtml(e,n,i){let a=[];e&&a.push(`<span class="feels-like">${M(N(this._hass,"feels_like"))} ${M(e)}</span>`);let o=[n,i].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&a.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>M(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),a.join("")}attachEventListeners(){this.mountNoteWriter();let e=this.querySelector(".weather-info");if(e&&(Wi(e,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),Dn(e,this.actionsConfig(),"group")),!this.isInitializing){let n=window.setTimeout(()=>this.initializeAnimations(),100);this.pendingTimeouts.push(n)}}setAnimationsPaused(e){this.animationsPaused=e,this.toggleAttribute("data-paused",e),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),ri(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),oi(this),this.flyHeldPlanes())}getWeatherSettings(e){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return J(this.config,e)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let e=++this._animationGeneration;try{if(!this.config)return;let n=this.config,i=this.querySelector(".animated-weather-card");if(!i||(this.clearAnimations(),!this.hass||!n.entity))return;let a=this.hass.states[n.entity];if(!a)return;let o=a.state.toLowerCase(),s=si(o,n.sunrise_hour,n.sunset_hour,this._hass?.config?.time_zone,{clock:!!n.enable_day_night_cycle,night:this.skyIsNight()}),l=(n.color_palette||"default")==="theme"?"theme-colors":"",d=i.classList.contains("loading"),c=(...u)=>{i.className=["animated-weather-card",s,...u,l,d?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),d&&requestAnimationFrame(()=>requestAnimationFrame(()=>{i.classList.remove("no-transitions"),i.classList.add("transitions-enabled")}))},h=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(n.animate===!1||h||!this.weatherShown()){let u=s==="clear-night"&&this.surface!=="forecast";c(n.animate===!1?"static":"",u?"individual-stars-active":"");let f=i.querySelector(".animation-layer");u&&f&&tr(f,er(J(n).cloudCount,i.clientWidth),{moon:!0,still:!0,words:bn(i)}),this.currentWeatherClass=s;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&e===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=s,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(s)),this.startPlanes()}},n.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),Ba(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let n=this.querySelector(".animated-weather-card"),i=this.querySelector(".animation-layer");i&&(_n(this),i.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),i.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),n&&(mi(n),jo(n));let a=this.querySelector(".lightning");a&&(a.classList.remove("flash"),a.innerHTML=""),Ga(this.pendingTimeouts)}set hass(e){this.homeHass=Rn(e),e=this.see(e);let n=this._hass;if(this._hass=e,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!n){this.render(),this.initializeAnimations();return}if(Gt(n)!==Gt(e)){this.render(),this.initializeAnimations();return}if(!this.config.entity)return;let i=n.states[this.config.entity],a=e.states[this.config.entity];if(!i||!a){this.render(),this.initializeAnimations();return}if(i.state!==a.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=d=>d==null?"__missing__":String(d),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name","dew_point","visibility","cloud_coverage","wind_gust_speed"];for(let d of l)if(s(i.attributes[d])!==s(a.attributes[d])){o=!0;break}if(this.config.note_entity&&n.states[this.config.note_entity]!==e.states[this.config.note_entity]&&(o=!0),!o){let d=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.sun_entity,...Fs(this.readingList)];for(let c of d){if(!c)continue;let h=n.states[c],u=e.states[c];if(h?.state!==u?.state||h?.attributes?.unit_of_measurement!==u?.attributes?.unit_of_measurement){o=!0;break}}}if(o)this._updateDataInPlace();else{let d=this.config.sun_entity||"sun.sun";n.states[d]!==e.states[d]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass)return;let e;try{e=mr(this._hass,this.config)}catch{return}let{temperature:n,weatherCondition:i,windSpeedValue:a,pressureValue:o,feelsLike:s,indoorTemperature:l,indoorHumidity:d}=e;this.currentWindSpeedValue=a;let c=!!this.extras?.away(),h=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,u=h&&this.extras?.conditionText(h)||i,f=(w,y)=>{w&&w.textContent!==y&&(w.textContent=y)};c||(this.fadeThrough(this.querySelector(".temperature-value"),n),this.fadeThrough(this.querySelector(".weather-desc"),u));let g=this.updatePressureTrend(o);c||this.updateRow(g);let m=this.querySelector(".compact-meta .awc-meta-text");m&&f(m,this.compactMeta(e.location,s)),f(this.querySelector(".location .awc-place"),e.location);let p=this.querySelector(".hero-meta");if(p){let w=this.heroMetaHtml(s,l,d),y=p.querySelector(".awc-line");Array.from(p.children).filter(b=>b!==y).map(b=>b.outerHTML).join("")!==w&&(p.innerHTML=w,y&&p.prepend(y))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(a)}rowItem(e,n,i,a){let o=this.config?.show_attribute_icons!==!1,s=this.config?.show_attribute_labels!==!1,l=o||s?`<div class="attribute-label">${o?bt(i.icon,"attribute-icon"):""}${s?`<span>${M(i.label)}</span>`:""}</div>`:"",d=e.type==="wind"&&typeof i.bearing=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${i.bearing+180}deg);" aria-label="${rl(i.bearing)}"></ha-icon>`:e.type==="pressure"&&a?`<ha-icon class="pressure-trend ${a}" icon="${ol(a)}" aria-label="Pressure ${a}"></ha-icon>`:"",c=i.level?` data-level="${M(i.level)}"`:"";return`<div class="attribute" data-kind="${e.type}" data-i="${n}"${c}>${l}<div class="attribute-value"><span class="attribute-text">${i.html}</span>${d}</div></div>`}shownReadings(){return this.config?Os(this.readingList).map(({r:e,i:n})=>({r:e,i:n,v:_r(this._hass,this.config,e)})).filter(({r:e,v:n})=>e.type!=="sun"||n.html.replace(/<[^>]*>/g,"")!=="--"):[]}rowHtml(e){return!this.config||this.config.show_attributes===!1?"":`
              <div class="weather-attributes${this.config.show_attribute_labels!==!1?"":" values-only"}">${this.shownReadings().map(({r:i,i:a,v:o})=>this.rowItem(i,a,o,e)).join("")}</div>`}redrawRow(){let e=this.querySelector(".animated-weather-card .weather-info");if(!e||this.config?.compact)return;let n=e.querySelector(":scope > .weather-attributes"),i=this.rowHtml(this._pressureTrend??null).trim();if(n&&i){let a=document.createRange().createContextualFragment(i).firstElementChild;n.querySelectorAll(":scope > .attribute").forEach(o=>o.remove()),n.prepend(...Array.from(a.querySelectorAll(":scope > .attribute"))),n.classList.toggle("values-only",a.classList.contains("values-only"))}else if(n)n.remove();else if(i){let a=e.querySelector(":scope > .fc-section");a?a.insertAdjacentHTML("beforebegin",i):e.insertAdjacentHTML("beforeend",i)}this.applySizeState()}updateRow(e){let n=this.querySelector(".weather-attributes");if(!n||!this.config)return;let i=this.shownReadings();if([...n.querySelectorAll(":scope > .attribute")].map(o=>o.dataset.i).join()!==i.map(o=>String(o.i)).join()){this.redrawRow();return}for(let{r:o,i:s,v:l}of i){let d=n.querySelector(`:scope > .attribute[data-i="${s}"]`);if(!d)continue;let c=d.querySelector(".attribute-text");c&&c.innerHTML!==l.html&&(c.innerHTML=l.html);let h=d.querySelector(".attribute-label > span");h&&h.textContent!==l.label&&(h.textContent=l.label),$s(d.querySelector(".attribute-icon"),l.icon),l.level?d.dataset.level=l.level:delete d.dataset.level,o.type==="wind"&&this.syncValueIcon(d,"wind-bearing-arrow",typeof l.bearing=="number"?{icon:"mdi:navigation",transform:`rotate(${l.bearing+180}deg)`,label:rl(l.bearing)}:null),o.type==="pressure"&&this.syncValueIcon(d,"pressure-trend",e?{icon:ol(e),label:`Pressure ${e}`,className:e}:null)}}updatePressureTrend(e){return typeof e!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=e:Math.abs(e-this._lastPressureValue)>=.5&&(this._pressureTrend=e>this._lastPressureValue?"rising":"falling",this._lastPressureValue=e),this._pressureTrend??null)}syncValueIcon(e,n,i){let a=e.querySelector(".attribute-value");if(!a)return;let o=a.querySelector(`.${n}`);if(!i){o?.remove();return}o||(o=document.createElement("ha-icon"),a.appendChild(o)),o.className=[n,i.className].filter(Boolean).join(" "),o.getAttribute("icon")!==i.icon&&o.setAttribute("icon",i.icon),o.setAttribute("aria-label",i.label),o.style.transform=i.transform??""}typeIn(e){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let n=Array.from(e.querySelectorAll(".note-long, .note-short")).map(u=>{let f=u.textContent??"",g=document.createElement("span");g.className="note-typed";let m=document.createElement("span");return m.className="note-untyped",m.textContent=f,u.replaceChildren(g,m),{span:u,text:f,typed:g,rest:m}}),i=Math.max(0,...n.map(u=>u.text.length)),a=Math.min(Au,Math.max(ku,i*Tu)),o=window.requestAnimationFrame?.bind(window)??(u=>window.setTimeout(()=>u(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),d=0,c={text:n.map(u=>u.text).join(""),finish:()=>{s(d);for(let u of n)u.span.textContent=u.text;this.noteTyping===c&&(this.noteTyping=void 0)}},h=()=>{let u=Math.min(1,(Date.now()-l)/a);for(let f of n){let g=Math.round(u*f.text.length);f.typed.textContent=f.text.slice(0,g),f.rest.textContent=f.text.slice(g)}u<1?d=o(h):c.finish()};this.noteTyping=c,d=o(h)}fadeThrough(e,n,i){if(!e)return;let a=this.heroTextPending.get(e);if((a??e.textContent)===n)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof e.animate!="function"||o){e.textContent=n,i?.();return}if(this.heroTextPending.set(e,n),a!==void 0)return;let s=()=>{let d=this.heroTextPending.get(e);this.heroTextPending.delete(e),d!==void 0&&(e.textContent=d),i?.()},l=e.animate([{opacity:1},{opacity:0}],{duration:Mu,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),e.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:Pu,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.devPlanes)return;this.planesWanted=!0;let e=window.AnimatedWeatherCardPlanes;if(!e){vt("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}let n=new e(this,{intensity:1,scale:1,devMode:!!this.config.dev_mode},this.config);this.planes=n,n.start().then(()=>{if(this.animationsPaused)n.pause();else if(this.planes===n){this.flyHeldPlanes();let i=this.askedPlanes;this.askedPlanes=void 0,i&&this.flyPlanes(i)}}).catch(i=>{console.error("Failed to start plane fly-overs:",i),this.planes===n&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let e=this.planes;e&&(this.planes=void 0,e.destroy().catch(n=>A(this.config?.dev_mode,"Error stopping plane fly-overs:",n)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let e=this._hass?.states[this.config.flights_entity];if(e&&e===this.lastFlightsState)return;this.lastFlightsState=e;let n=!this.flightTracker.seeded,i=!!this.config.planes_on_load&&this.surface!=="view",a=this.flightTracker.update(ar(this._hass,this.config.flights_entity),i);a.length&&(n&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(a.map(o=>o.id)):this.flyPlanes(a))}flyHeldPlanes(){let e=this.heldPlanes;if(!e||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let n=(ar(this._hass,this.config?.flights_entity)??[]).filter(i=>!i.onGround&&e.has(i.id));n.length&&this.flyPlanes(n)}flyOver(e){let n=this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!this.weatherShown();if(!(this.animationsPaused||n)){if(this.planes){this.flyPlanes(e);return}this.devPlanes=!0,this.askedPlanes=e,this.startPlanes()}}flyPlanes(e){!this.planes||this.animationsPaused||this.planes.flyOver(e,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager?.isEnabled()?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let e=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;e!==this.animationsPaused&&this.setAnimationsPaused(e)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(e=>{this.offscreen=!e[e.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}tickPlace(){this.placeView.tick(()=>{this.homeHass&&this.isConnected&&(this.hass=this.homeHass)})}disconnectedCallback(){this.placeView.stop(),ir(this),window.removeEventListener(Kt,this.onNeedle),window.removeEventListener(jt,this.devChanged),Xt().delete(this),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),Ga(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new Mi({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(e=>{this.onTimeOfDayChanged(e)}),this.config?.enable_day_night_cycle){let e=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(e)}}onTimeOfDayChanged(e){this.config?.enable_day_night_cycle&&(A(this.config?.dev_mode,`Time of day changed to: ${e.timePhase}`),this.updateDayNightBackground(e))}updateDayNightBackground(e){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager?.isEnabled())return this.timeOfDayManager.getCurrentState().timePhase;let e=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!e)return"day";let n=e.attributes?.elevation;return _i(typeof n=="number"?n:Number(n),!!e.attributes?.rising,e.state!=="below_horizon")}skyIsNight(){if(!(!this.timeOfDayManager?.isEnabled()&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let e=this.querySelector(".animated-weather-card");if(!e)return;let n=this.currentSkyPhase();e.dataset.phase!==n&&(e.dataset.phase=n),this.applyMoon(e)}applyMoon(e){let n=e.querySelector(".animation-layer");if(!n)return;let i=this.config?.moon_entity,a=Is(Ee(),i?this._hass?.states[i]?.state:void 0),o=(this.latitude()??0)<0,s=`${a.toFixed(3)}${o?"s":"n"}`;if(n.dataset.moon===s)return;n.dataset.moon=s;let l=qs(a,o);n.style.setProperty("--awc-moon-mask",l.mask),n.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let e=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(e)?e:void 0}applySizeState(){let e=this.querySelector(".animated-weather-card"),n=e?.querySelector(".weather-info");if(!e||!n)return;e.toggleAttribute("data-wall-frame",this.surface==="card"&&!!this.config?.show_forecast&&this.config?.layout!=="nightstand"&&ls(e)),cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>ys(e));let i=e.querySelector(".main-weather-info"),a=e.querySelector(".weather-attributes");if(e.dataset.height="regular",e.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),a){let m=e.dataset.metrics;e.dataset.metrics="row";let p=Array.from(a.children),w=parseFloat(getComputedStyle(a).columnGap)||0,y=p.reduce((v,S)=>v+S.getBoundingClientRect().width,0)+w*Math.max(0,p.length-1),_=a.clientWidth-y,b=_<-.5||m==="grid"&&_<Lu;e.dataset.metrics=b?"grid":"row"}let o=e.dataset.variant==="compact",s=o?e.querySelector(".weather-desc"):null,l=e.querySelector(".weather-note"),d=()=>n.scrollHeight>n.clientHeight+1||!o&&!!i&&i.scrollHeight>i.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,h=!!l&&!l.hidden?Du:sl.map(m=>[m,void 0]),u=([m,p])=>{e.dataset.height=m,p?e.dataset.note=p:delete e.dataset.note},f=this.extras,g=f?.levels()??[];if(!f||!g.length){for(let m of h)if(u(m),!d())break;f?.fitted();return}for(let m=0;m<g.length;m++){f.setLevel(g[m]);let p=m===g.length-1;for(let w of h){if(!p&&!["regular","close","compact"].includes(w[0]))break;if(u(w),!d()&&(p||f.levelOk(d))){f.fitted();return}}}f.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let e=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast?(Zt(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+this.dayRows()+e:4+e}dayRows(){if(!this.config?.show_days||this.config.compact)return 0;let e=Math.max(0,Math.min(10,Math.round(Number(this.config.forecast_days??7))||0));return e?Math.ceil((e*32+12)/64):0}getCardSize(){if(this.config?.compact)return 2;let e=3;return this.config?.show_indoor!==!1&&(e+=1),this.config?.show_attributes!==!1&&(e+=1),this.noteEnabled()&&(e+=1),this.config?.show_forecast&&(e+=3+this.dayRows()),e}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await On("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",Yi);var Ar=class extends Yi{constructor(){super(),this.surface="forecast"}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(t)}gridRows(){if(this.config?.compact)return 2;let t=this.config?.show_hours!==!1&&Zt(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),e=Math.max(0,Math.min(10,this.config?.forecast_days??7));return t?e<=3?5:7:Math.max(3,Math.ceil((58+e*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(t,e=[],n=[]){let i=[...e,...n,...Object.keys(t?.states??{})];return Qt(i.find(a=>a.startsWith("weather."))??qa.entity,t)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await On("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",Ar);customElements.define("animated-weather-dev-card",Ni);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(r,t)=>t.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Qt(t,r)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Qt(t,r),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(r,t)=>t.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Qt(t,r)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Qt(t,r),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let r=Rt("sunny","day"),t=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${Ho} `,[`background: linear-gradient(90deg, ${r.top}, ${r.mid} 55%, ${r.bottom})`,`color: ${Ke(Fe(zt))}`,"border-radius: 4px 0 0 4px",...t].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${r.top}`,"border-radius: 0 4px 4px 0",...t].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
