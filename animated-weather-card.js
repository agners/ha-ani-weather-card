"use strict";(()=>{function Dt(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Zr(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var ft={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ue={duration:.5,overwrite:!1,delay:0},Mn,et,$,St=1e8,z=1/St,_n=Math.PI*2,cs=_n/4,ds=0,Qr=Math.sqrt,hs=Math.cos,us=Math.sin,J=function(e){return typeof e=="string"},Y=function(e){return typeof e=="function"},Ht=function(e){return typeof e=="number"},Ti=function(e){return typeof e>"u"},Ot=function(e){return typeof e=="object"},pt=function(e){return e!==!1},Pn=function(){return typeof window<"u"},fi=function(e){return Y(e)||J(e)},Jr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},at=Array.isArray,ms=/random\([^)]+\)/g,ps=/,\s*/g,Br=/(?:-?\.?\d|\.)+/gi,Ln=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oe=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,un=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,On=/[+-]=-?[.\d]+/,fs=/[^,'"\[\]\s]+/gi,gs=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,V,Pt,vn,Fn,_t={},_i={},ta,ea=function(e){return(_i=we(e,_t))&&ot},Ci=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ye=function(e,t){return!t&&console.warn(e)},ia=function(e,t){return e&&(_t[e]=t)&&_i&&(_i[e]=t)||_t},Ke=function(){return 0},ys={suppressEvents:!0,isStart:!0,kill:!1},gi={suppressEvents:!0,kill:!1},ws={suppressEvents:!0},Dn={},Bt=[],bn={},na,ut={},mn={},Vr=30,yi=[],Wn="",Hn=function(e){var t=e[0],i,n;if(Ot(t)||Y(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=yi.length;n--&&!yi[n].targetTest(t););i=yi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new In(e[n],i)))||e.splice(n,1);return e},Vt=function(e){return e._gsap||Hn(Tt(e))[0]._gsap},Rn=function(e,t,i){return(i=e[t])&&Y(i)?e[t]():Ti(i)&&e.getAttribute&&e.getAttribute(t)||i},ct=function(e,t){return(e=e.split(",")).forEach(t)||e},K=function(e){return Math.round(e*1e5)/1e5||0},B=function(e){return Math.round(e*1e7)/1e7||0},se=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},_s=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},vi=function(){var e=Bt.length,t=Bt.slice(0),i,n;for(bn={},Bt.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Nn=function(e){return!!(e._initted||e._startAt||e.add)},ra=function(e,t,i,n){Bt.length&&!et&&vi(),e.render(t,i,n||!!(et&&t<0&&Nn(e))),Bt.length&&!et&&vi()},aa=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fs).length<2?t:J(e)?e.trim():e},oa=function(e){return e},vt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vs=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},we=function(e,t){for(var i in t)e[i]=t[i];return e},qr=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ot(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},bi=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Be=function(e){var t=e.parent||V,i=e.keyframes?vs(at(e.keyframes)):vt;if(pt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},bs=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},sa=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Ai=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},qt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ne=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},xs=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xn=function(e,t,i,n){return e._startAt&&(et?e._startAt.revert(gi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Ss=function a(e){return!e||e._ts&&a(e.parent)},Ur=function(e){return e._repeat?_e(e._tTime,e=e.duration()+e._rDelay)*e:0},_e=function(e,t){var i=Math.floor(e=B(e/t));return e&&i===e?i-1:i},xi=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ki=function(e){return e._end=B(e._start+(e._tDur/Math.abs(e._ts||e._rts||z)||0))},Ei=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=B(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ki(e),i._dirty||ne(i,e)),e},la=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xi(e.rawTime(),t),(!t._dur||Ze(0,t.totalDuration(),i)-t._tTime>z)&&t.render(i,!0)),ne(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-z}},Lt=function(e,t,i,n){return t.parent&&qt(t),t._start=B((Ht(i)?i:i||e!==V?xt(e,i,t):e._time)+t._delay),t._end=B(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sa(e,t,"_first","_last",e._sort?"_start":0),Sn(t)||(e._recent=t),n||la(e,t),e._ts<0&&Ei(e,e._tTime),e},ca=function(e,t){return(_t.ScrollTrigger||Ci("scrollTrigger",t))&&_t.ScrollTrigger.create(t,e)},da=function(e,t,i,n,r){if(Bn(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&na!==mt.frame)return Bt.push(e),e._lazy=[r,n],1},Ts=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Sn=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Cs=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&Ts(e)&&!(!e._initted&&Sn(e))||(e._ts<0||e._dp._ts<0)&&!Sn(e))?0:1,s=e._rDelay,l=0,c,d,m;if(s&&e._repeat&&(l=Ze(0,e._tDur,t),d=_e(l,s),e._yoyo&&d&1&&(o=1-o),d!==_e(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||et||n||e._zTime===z||!t&&e._zTime){if(!e._initted&&da(e,t,n,i,l))return;for(m=e._zTime,e._zTime=t||(i?z:0),i||(i=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&xn(e,t,i,!0),e._onUpdate&&!i&&wt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&wt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qt(e,1),!i&&!et&&(wt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},As=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ve=function(e,t,i,n){var r=e._repeat,o=B(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:B(o*(r+1)+e._rDelay*r):o,s>0&&!n&&Ei(e,e._tTime=e._tDur*s),e.parent&&ki(e),i||ne(e.parent,e),e},Yr=function(e){return e instanceof rt?ne(e):ve(e,e._dur)},ks={_start:0,endTime:Ke,totalDuration:Ke},xt=function a(e,t,i){var n=e.labels,r=e._recent||ks,o=e.duration()>=St?r.endTime(!1):e._dur,s,l,c;return J(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&i&&(l=l/100*(at(i)?i[0]:i).totalDuration()),s>1?a(e,t.substr(0,s-1),i)+l:o+l)):t==null?o:+t},Ve=function(e,t,i){var n=Ht(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],s,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(s=o,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=pt(l.vars.inherit)&&l.parent;o.immediateRender=pt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new X(t[0],o,t[r+1])},Ut=function(e,t){return e||e===0?t(e):t},Ze=function(e,t,i){return i<e?e:i>t?t:i},it=function(e,t){return!J(e)||!(t=gs.exec(e))?"":t[1]},Es=function(e,t,i){return Ut(i,function(n){return Ze(e,t,n)})},Tn=[].slice,ha=function(e,t){return e&&Ot(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ot(e[0]))&&!e.nodeType&&e!==Pt},Ms=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return J(n)&&!t||ha(n,1)?(r=i).push.apply(r,Tt(n)):i.push(n)})||i},Tt=function(e,t,i){return $&&!t&&$.selector?$.selector(e):J(e)&&!i&&(vn||!be())?Tn.call((t||Fn).querySelectorAll(e),0):at(e)?Ms(e,i):ha(e)?Tn.call(e,0):e?[e]:[]},Cn=function(e){return e=Tt(e)[0]||Ye("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Tt(t,i.querySelectorAll?i:i===e?Ye("Invalid scope")||Fn.createElement("div"):e)}},ua=function(e){return e.sort(function(){return .5-Math.random()})},ma=function(e){if(Y(e))return e;var t=Ot(e)?e:{each:e},i=re(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},s=n>0&&n<1,l=isNaN(n)||s,c=t.axis,d=n,m=n;return J(n)?d=m={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(d=n[0],m=n[1]),function(h,p,g){var u=(g||t).length,f=o[u],w,y,_,b,v,x,T,A,C;if(!f){if(C=t.grid==="auto"?0:(t.grid||[1,St])[1],!C){for(T=-St;T<(T=g[C++].getBoundingClientRect().left)&&C<u;);C<u&&C--}for(f=o[u]=[],w=l?Math.min(C,u)*d-.5:n%C,y=C===St?0:l?u*m/C-.5:n/C|0,T=0,A=St,x=0;x<u;x++)_=x%C-w,b=y-(x/C|0),f[x]=v=c?Math.abs(c==="y"?b:_):Qr(_*_+b*b),v>T&&(T=v),v<A&&(A=v);n==="random"&&ua(f),f.max=T-A,f.min=A,f.v=u=(parseFloat(t.amount)||parseFloat(t.each)*(C>u?u-1:c?c==="y"?u/C:C:Math.max(C,u/C))||0)*(n==="edges"?-1:1),f.b=u<0?r-u:r,f.u=it(t.amount||t.each)||0,i=i&&u<0?Gs(i):i}return u=(f[h]-f.min)/f.max||0,B(f.b+(i?i(u):u)*f.v)+f.u}},An=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=B(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Ht(i)?0:it(i))}},pa=function(e,t){var i=at(e),n,r;return!i&&Ot(e)&&(n=i=e.radius||St,e.values?(e=Tt(e.values),(r=!Ht(e[0]))&&(n*=n)):e=An(e.increment)),Ut(t,i?Y(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=St,d=0,m=e.length,h,p;m--;)r?(h=e[m].x-s,p=e[m].y-l,h=h*h+p*p):h=Math.abs(e[m]-s),h<c&&(c=h,d=m);return d=!n||c<=n?e[d]:o,r||d===o||Ht(o)?d:d+it(o)}:An(e))},fa=function(e,t,i,n){return Ut(at(e)?!t:i===!0?!!(i=0):!n,function(){return at(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Ps=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},Ls=function(e,t){return function(i){return e(parseFloat(i))+(t||it(i))}},Os=function(e,t,i){return ya(e,t,0,1,i)},ga=function(e,t,i){return Ut(i,function(n){return e[~~t(n)]})},Fs=function a(e,t,i){var n=t-e;return at(e)?ga(e,a(0,e.length),t):Ut(i,function(r){return(n+(r-e)%n)%n+e})},Ds=function a(e,t,i){var n=t-e,r=n*2;return at(e)?ga(e,a(0,e.length-1),t):Ut(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},xe=function(e){return e.replace(ms,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ps);return fa(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},ya=function(e,t,i,n,r){var o=t-e,s=n-i;return Ut(r,function(l){return i+((l-e)/o*s||0)})},Ws=function a(e,t,i,n){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=J(e),s={},l,c,d,m,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(at(e)&&!at(t)){for(d=[],m=e.length,h=m-2,c=1;c<m;c++)d.push(a(e[c-1],e[c]));m--,r=function(g){g*=m;var u=Math.min(h,~~g);return d[u](g-u)},i=t}else n||(e=we(at(e)?[]:{},e));if(!d){for(l in t)$n.call(s,e,l,"get",t[l]);r=function(g){return Un(g,s)||(o?e.p:e)}}}return Ut(i,r)},Kr=function(e,t,i){var n=e.labels,r=St,o,s,l;for(o in n)s=n[o]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},wt=function(e,t,i){var n=e.vars,r=n[t],o=$,s=e._ctx,l,c,d;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Bt.length&&vi(),s&&($=s),d=l?r.apply(c,l):r.call(c),$=o,d},$e=function(e){return qt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!et),e.progress()<1&&wt(e,"onInterrupt"),e},ye,wa=[],_a=function(e){if(e)if(e=!e.name&&e.default||e,Pn()||e.headless){var t=e.name,i=Y(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Ke,render:Un,add:$n,kill:Qs,modifier:Zs,rawVars:0},o={targetTest:0,get:0,getSetter:Mi,aliases:{},register:0};if(be(),e!==n){if(ut[t])return;vt(n,vt(bi(e,r),o)),we(n.prototype,we(r,bi(e,o))),ut[n.prop=t]=n,e.targetTest&&(yi.push(n),Dn[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ia(t,n),e.register&&e.register(ot,n,dt)}else wa.push(e)},N=255,Ge={aqua:[0,N,N],lime:[0,N,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,N],navy:[0,0,128],white:[N,N,N],olive:[128,128,0],yellow:[N,N,0],orange:[N,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[N,0,0],pink:[N,192,203],cyan:[0,N,N],transparent:[N,N,N,0]},pn=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*N+.5|0},va=function(e,t,i){var n=e?Ht(e)?[e>>16,e>>8&N,e&N]:0:Ge.black,r,o,s,l,c,d,m,h,p,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ge[e])n=Ge[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&N,n&N,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&N,e&N]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Br),!t)l=+n[0]%360/360,c=+n[1]/100,d=+n[2]/100,o=d<=.5?d*(c+1):d+c-d*c,r=d*2-o,n.length>3&&(n[3]*=1),n[0]=pn(l+1/3,r,o),n[1]=pn(l,r,o),n[2]=pn(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(Ln),i&&n.length<4&&(n[3]=1),n}else n=e.match(Br)||Ge.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/N,o=n[1]/N,s=n[2]/N,m=Math.max(r,o,s),h=Math.min(r,o,s),d=(m+h)/2,m===h?l=c=0:(p=m-h,c=d>.5?p/(2-m-h):p/(m+h),l=m===r?(o-s)/p+(o<s?6:0):m===o?(s-r)/p+2:(r-o)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},ba=function(e){var t=[],i=[],n=-1;return e.split(Wt).forEach(function(r){var o=r.match(oe)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},jr=function(e,t,i){var n="",r=(e+n).match(Wt),o=t?"hsla(":"rgba(",s=0,l,c,d,m;if(!r)return e;if(r=r.map(function(h){return(h=va(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(d=ba(e),l=i.c,l.join(n)!==d.c.join(n)))for(c=e.replace(Wt,"1").split(oe),m=c.length-1;s<m;s++)n+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(d.length?d:r.length?r:i).shift());if(!c)for(c=e.split(Wt),m=c.length-1;s<m;s++)n+=c[s]+r[s];return n+c[m]},Wt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ge)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),Hs=/hsl[a]?\(/,zn=function(e){var t=e.join(" "),i;if(Wt.lastIndex=0,Wt.test(t))return i=Hs.test(t),e[1]=jr(e[1],i),e[0]=jr(e[0],i,ba(e[1])),!0},je,mt=(function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,o=r,s=[],l,c,d,m,h,p,g=function u(f){var w=a()-n,y=f===!0,_,b,v,x;if((w>e||w<0)&&(i+=w-t),n+=w,v=n-i,_=v-o,(_>0||y)&&(x=++m.frame,h=v-m.time*1e3,m.time=v=v/1e3,o+=_+(_>=r?4:r-_),b=1),y||(l=c(u)),b)for(p=0;p<s.length;p++)s[p](v,h,x,f)};return m={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return h/(1e3/(f||60))},wake:function(){ta&&(!vn&&Pn()&&(Pt=vn=window,Fn=Pt.document||{},_t.gsap=ot,(Pt.gsapVersions||(Pt.gsapVersions=[])).push(ot.version),ea(_i||Pt.GreenSockGlobals||!Pt.gsap&&Pt||{}),wa.forEach(_a)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),c=d||function(f){return setTimeout(f,o-m.time*1e3+1|0)},je=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),je=0,c=Ke},lagSmoothing:function(f,w){e=f||1/0,t=Math.min(w||33,e)},fps:function(f){r=1e3/(f||240),o=m.time*1e3+r},add:function(f,w,y){var _=w?function(b,v,x,T){f(b,v,x,T),m.remove(_)}:f;return m.remove(f),s[y?"unshift":"push"](_),be(),_},remove:function(f,w){~(w=s.indexOf(f))&&s.splice(w,1)&&p>=w&&p--},_listeners:s},m})(),be=function(){return!je&&mt.wake()},L={},Rs=/^[\d.\-M][\d.\-,\s]/,Ns=/["']/g,zs=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,s,l,c;r<o;r++)l=i[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[n]=isNaN(c)?c.replace(Ns,"").trim():+c,n=l.substr(s+1).trim();return t},Is=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},$s=function(e){var t=(e+"").split("("),i=L[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[zs(t[1])]:Is(e).split(",").map(aa)):L._CE&&Rs.test(e)?L._CE("",e):i},Gs=function(e){return function(t){return 1-e(1-t)}},re=function(e,t){return e&&(Y(e)?e:L[e]||$s(e))||t},le=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return ct(e,function(s){L[s]=_t[s]=r,L[o=s.toLowerCase()]=i;for(var l in r)L[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=L[s+"."+l]=r[l]}),r},xa=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fn=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/_n*(Math.asin(1/n)||0),s=function(d){return d===1?1:n*Math.pow(2,-10*d)*us((d-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:xa(s);return r=_n/r,l.config=function(c,d){return a(e,c,d)},l},gn=function a(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:xa(i);return n.config=function(r){return a(e,r)},n};ct("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;le(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});L.Linear.easeNone=L.none=L.Linear.easeIn;le("Elastic",fn("in"),fn("out"),fn());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?a*s*s:s<i?a*Math.pow(s-1.5/e,2)+.75:s<n?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};le("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);le("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});le("Circ",function(a){return-(Qr(1-a*a)-1)});le("Sine",function(a){return a===1?1:-hs(a*cs)+1});le("Back",gn("in"),gn("out"),gn());L.SteppedEase=L.steps=_t.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-z;return function(s){return((n*Ze(0,o,s)|0)+r)*i}}};Ue.ease=L["quad.out"];ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Wn+=a+","+a+"Params,"});var In=function(e,t){this.id=ds++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rn,this.set=t?t.getSetter:Mi},Xe=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ve(this,+t.duration,1,1),this.data=t.data,$&&(this._ctx=$,$.data.push(this)),je||mt.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ve(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(be(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ei(this,i),!r._dp||r.parent||la(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Lt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===z||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ra(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ur(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ur(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?_e(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-z?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?xi(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-z?0:this._rts,this.totalTime(Ze(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),ki(this),xs(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(be(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==z&&(this._tTime-=z)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=B(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Lt(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xi(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ws);var n=et;return et=i,Nn(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),et=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Yr(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Yr(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(xt(this,i),pt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,pt(n)),this._dur||(this._zTime=-z),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-z:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-z,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-z)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var s=Y(i)?i:oa,l=function(){var d=n.then;n.then=null,r&&r(),Y(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=d),o(s),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){$e(this)},a})();vt(Xe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-z,_prom:0,_ps:!1,_rts:1});var rt=(function(a){Zr(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=pt(i.sortChildren),V&&Lt(i.parent||V,Dt(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ca(Dt(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return Ve(0,arguments,this),this},t.from=function(n,r,o){return Ve(1,arguments,this),this},t.fromTo=function(n,r,o,s){return Ve(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,Be(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new X(n,r,xt(this,o),1),this},t.call=function(n,r,o){return Lt(this,X.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,s,l,c,d){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=d,o.parent=this,new X(n,o,xt(this,l)),this},t.staggerFrom=function(n,r,o,s,l,c,d){return o.runBackwards=1,Be(o).immediateRender=pt(o.immediateRender),this.staggerTo(n,r,o,s,l,c,d)},t.staggerFromTo=function(n,r,o,s,l,c,d,m){return s.startAt=o,Be(s).immediateRender=pt(s.immediateRender),this.staggerTo(n,r,s,l,c,d,m)},t.render=function(n,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=n<=0?0:B(n),m=this._zTime<0!=n<0&&(this._initted||!c),h,p,g,u,f,w,y,_,b,v,x,T;if(this!==V&&d>l&&n>=0&&(d=l),d!==this._tTime||o||m){if(s!==this._time&&c&&(d+=this._time-s,n+=this._time-s),h=d,b=this._start,_=this._ts,w=!_,m&&(c||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(x=this._yoyo,f=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,r,o);if(h=B(d%f),d===l?(u=this._repeat,h=c):(v=B(d/f),u=~~v,u&&u===v&&(h=c,u--),h>c&&(h=c)),v=_e(this._tTime,f),!s&&this._tTime&&v!==u&&this._tTime-v*f-this._dur<=0&&(v=u),x&&u&1&&(h=c-h,T=1),u!==v&&!this._lock){var A=x&&v&1,C=A===(x&&u&1);if(u<v&&(A=!A),s=A?0:d%c?c:d,this._lock=1,this.render(s||(T?0:B(u*f)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&wt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,v=u),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,s=A?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=As(this,B(s),B(h)),y&&(d-=h-(h=y._start))),this._tTime=d,this._time=h,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&d&&c&&!r&&!v&&(wt(this,"onStart"),this._tTime!==d))return this;if(h>=s&&n>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(n,r,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,o),h!==this._time||!this._ts&&!w){y=0,g&&(d+=this._zTime=-z);break}}p=g}else{p=this._last;for(var S=n<0?n:h;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(n,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||et&&Nn(p)),h!==this._time||!this._ts&&!w){y=0,g&&(d+=this._zTime=S?-z:z);break}}p=g}}if(y&&!r&&(this.pause(),y.render(h>=s?0:-z)._zTime=h>=s?1:-1,this._ts))return this._start=b,ki(this),this.render(n,r,o);this._onUpdate&&!r&&wt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&qt(this,1),!r&&!(n<0&&!s)&&(d||s||!l)&&(wt(this,d===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(Ht(r)||(r=xt(this,r,n)),!(n instanceof Xe)){if(at(n))return n.forEach(function(s){return o.add(s,r)}),this;if(J(n))return this.addLabel(n,r);if(Y(n))n=X.delayedCall(0,n);else return this}return this!==n?Lt(this,n,r):this},t.getChildren=function(n,r,o,s){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-St);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof X?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return J(n)?this.removeLabel(n):Y(n)?this.killTweensOf(n):(n.parent===this&&Ai(this,n),n===this._recent&&(this._recent=this._last),ne(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=B(mt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=xt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var s=X.delayedCall(0,r||Ke,o);return s.data="isPause",this._hasPause=1,Lt(this,s,xt(this,n))},t.removePause=function(n){var r=this._first;for(n=xt(this,n);r;)r._start===n&&r.data==="isPause"&&qt(r),r=r._next},t.killTweensOf=function(n,r,o){for(var s=this.getTweensOf(n,o),l=s.length;l--;)Gt!==s[l]&&s[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],s=Tt(n),l=this._first,c=Ht(r),d;l;)l instanceof X?_s(l._targets,s)&&(c?(!Gt||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(d=l.getTweensOf(s,r)).length&&o.push.apply(o,d),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,s=xt(o,n),l=r,c=l.startAt,d=l.onStart,m=l.onStartParams,h=l.immediateRender,p,g=X.to(o,vt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||z,onStart:function(){if(o.pause(),!p){var f=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==f&&ve(g,f,0,1).render(g._time,!0,!0),p=1}d&&d.apply(g,m||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,vt({startAt:{time:xt(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Kr(this,xt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Kr(this,xt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+z)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var s=this._first,l=this.labels,c;for(n=B(n);s;)s._start>=o&&(s._start+=n,s._end+=n),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return ne(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ne(this)},t.totalDuration=function(n){var r=0,o=this,s=o._last,l=St,c,d,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(m=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Lt(o,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(r-=d,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=B(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ve(o,o===V&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(V._ts&&(ra(V,xi(n,V)),na=mt.frame),mt.frame>=Vr){Vr+=ft.autoSleep||120;var r=V._first;if((!r||!r._ts)&&ft.autoSleep&&mt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mt.sleep()}}},e})(Xe);vt(rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bs=function(e,t,i,n,r,o,s){var l=new dt(this._pt,e,t,0,1,qn,null,r),c=0,d=0,m,h,p,g,u,f,w,y;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=xe(n)),o&&(y=[i,n],o(y,e,t),i=y[0],n=y[1]),h=i.match(un)||[];m=un.exec(n);)g=m[0],u=n.substring(c,m.index),p?p=(p+1)%5:u.substr(-5)==="rgba("&&(p=1),g!==h[d++]&&(f=parseFloat(h[d-1])||0,l._pt={_next:l._pt,p:u||d===1?u:",",s:f,c:g.charAt(1)==="="?se(f,g)-f:parseFloat(g)-f,m:p&&p<4?Math.round:0},c=un.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=s,(On.test(n)||w)&&(l.e=0),this._pt=l,l},$n=function(e,t,i,n,r,o,s,l,c,d){Y(n)&&(n=n(r||0,e,o));var m=e[t],h=i!=="get"?i:Y(m)?c?e[t.indexOf("set")||!Y(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():m,p=Y(m)?c?Ks:Ca:Vn,g;if(J(n)&&(~n.indexOf("random(")&&(n=xe(n)),n.charAt(1)==="="&&(g=se(h,n)+(it(h)||0),(g||g===0)&&(n=g))),!d||h!==n||kn)return!isNaN(h*n)&&n!==""?(g=new dt(this._pt,e,t,+h||0,n-(h||0),typeof m=="boolean"?Xs:Aa,0,p),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!m&&!(t in e)&&Ci(t,n),Bs.call(this,e,t,h,n,p,l||ft.stringFilter,c))},Vs=function(e,t,i,n,r){if(Y(e)&&(e=qe(e,r,t,i,n)),!Ot(e)||e.style&&e.nodeType||at(e)||Jr(e))return J(e)?qe(e,r,t,i,n):e;var o={},s;for(s in e)o[s]=qe(e[s],r,t,i,n);return o},Gn=function(e,t,i,n,r,o){var s,l,c,d;if(ut[e]&&(s=new ut[e]).init(r,s.rawVars?t[e]:Vs(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new dt(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==ye))for(c=i._ptLookup[i._targets.indexOf(r)],d=s._props.length;d--;)c[s._props[d]]=l;return s},Gt,kn,Bn=function a(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,s=n.immediateRender,l=n.lazy,c=n.onUpdate,d=n.runBackwards,m=n.yoyoEase,h=n.keyframes,p=n.autoRevert,g=e._dur,u=e._startAt,f=e._targets,w=e.parent,y=w&&w.data==="nested"?w.vars.targets:f,_=e._overwrite==="auto"&&!Mn,b=e.timeline,v=n.easeReverse||m,x,T,A,C,S,E,M,D,W,H,R,F,I;if(b&&(!h||!r)&&(r="none"),e._ease=re(r,Ue.ease),e._rEase=v&&(re(v)||e._ease),e._from=!b&&!!n.runBackwards,e._from&&(e.ratio=1),!b||h&&!n.stagger){if(D=f[0]?Vt(f[0]).harness:0,F=D&&n[D.prop],x=bi(n,Dn),u&&(u._zTime<0&&u.progress(1),t<0&&d&&s&&!p?u.render(-1,!0):u.revert(d&&g?gi:ys),u._lazy=0),o){if(qt(e._startAt=X.set(f,vt({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!u&&pt(l),startAt:null,delay:0,onUpdate:c&&function(){return wt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(et||!s&&!p)&&e._startAt.revert(gi),s&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&g&&!u){if(t&&(s=!1),A=vt({overwrite:!1,data:"isFromStart",lazy:s&&!u&&pt(l),immediateRender:s,stagger:0,parent:w},x),F&&(A[D.prop]=F),qt(e._startAt=X.set(f,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(et?e._startAt.revert(gi):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,z,z);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&pt(l)||l&&!g,T=0;T<f.length;T++){if(S=f[T],M=S._gsap||Hn(f)[T]._gsap,e._ptLookup[T]=H={},bn[M.id]&&Bt.length&&vi(),R=y===f?T:y.indexOf(S),D&&(W=new D).init(S,F||x,e,R,y)!==!1&&(e._pt=C=new dt(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(lt){H[lt]=C}),W.priority&&(E=1)),!D||F)for(A in x)ut[A]&&(W=Gn(A,x,e,R,S,y))?W.priority&&(E=1):H[A]=C=$n.call(e,S,A,"get",x[A],R,y,0,n.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),_&&e._pt&&(Gt=e,V.killTweensOf(S,H,e.globalTime(t)),I=!e.parent,Gt=0),e._pt&&l&&(bn[M.id]=1)}E&&Yn(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,h&&t<=0&&b.render(St,!0,!0)},qs=function(e,t,i,n,r,o,s,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,m,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(d=h[p][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return kn=1,e.vars[t]="+=0",Bn(e,s),kn=0,l?Ye(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(p=c.length;p--;)m=c[p],d=m._pt||m,d.s=(n||n===0)&&!r?n:d.s+(n||0)+o*d.c,d.c=i-d.s,m.e&&(m.e=K(i)+it(m.e)),m.b&&(m.b=d.s+it(m.b))},Us=function(e,t){var i=e[0]?Vt(e[0]).harness:0,n=i&&i.aliases,r,o,s,l;if(!n)return t;r=we({},t);for(o in n)if(o in r)for(l=n[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},Ys=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,s;if(at(t))s=i[e]||(i[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},qe=function(e,t,i,n,r){return Y(e)?e.call(t,i,n,r):J(e)&&~e.indexOf("random(")?xe(e):e},Sa=Wn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ta={};ct(Sa+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ta[a]=1});var X=(function(a){Zr(e,a);function e(i,n,r,o){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=a.call(this,o?n:Be(n))||this;var l=s.vars,c=l.duration,d=l.delay,m=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,u=l.defaults,f=l.scrollTrigger,w=n.parent||V,y=(at(i)||Jr(i)?Ht(i[0]):"length"in n)?[i]:Tt(i),_,b,v,x,T,A,C,S;if(s._targets=y.length?Hn(y):Ye("GSAP target "+i+" not found. https://gsap.com",!ft.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,g||h||fi(c)||fi(d)){n=s.vars;var E=n.easeReverse||n.yoyoEase;if(_=s.timeline=new rt({data:"nested",defaults:u||{},targets:w&&w.data==="nested"?w.vars.targets:y}),_.kill(),_.parent=_._dp=Dt(s),_._start=0,h||fi(c)||fi(d)){if(x=y.length,C=h&&ma(h),Ot(h))for(T in h)~Sa.indexOf(T)&&(S||(S={}),S[T]=h[T]);for(b=0;b<x;b++)v=bi(n,Ta),v.stagger=0,E&&(v.easeReverse=E),S&&we(v,S),A=y[b],v.duration=+qe(c,Dt(s),b,A,y),v.delay=(+qe(d,Dt(s),b,A,y)||0)-s._delay,!h&&x===1&&v.delay&&(s._delay=d=v.delay,s._start+=d,v.delay=0),_.to(A,v,C?C(b,A,y):0),_._ease=L.none;_.duration()?c=d=0:s.timeline=0}else if(g){Be(vt(_.vars.defaults,{ease:"none"})),_._ease=re(g.ease||n.ease||"none");var M=0,D,W,H;if(at(g))g.forEach(function(R){return _.to(y,R,">")}),_.duration();else{v={};for(T in g)T==="ease"||T==="easeEach"||Ys(T,g[T],v,g.easeEach);for(T in v)for(D=v[T].sort(function(R,F){return R.t-F.t}),M=0,b=0;b<D.length;b++)W=D[b],H={ease:W.e,duration:(W.t-(b?D[b-1].t:0))/100*c},H[T]=W.v,_.to(y,H,M),M+=H.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||s.duration(c=_.duration())}else s.timeline=0;return p===!0&&!Mn&&(Gt=Dt(s),V.killTweensOf(y),Gt=0),Lt(w,Dt(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(m||!c&&!g&&s._start===B(w._time)&&pt(m)&&Ss(Dt(s))&&w.data!=="nested")&&(s._tTime=-z,s.render(Math.max(0,-d)||0)),f&&ca(Dt(s),f),s}var t=e.prototype;return t.render=function(n,r,o){var s=this._time,l=this._tDur,c=this._dur,d=n<0,m=n>l-z&&!d?l:n<z?0:n,h,p,g,u,f,w,y,_;if(!c)Cs(this,n,r,o);else if(m!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(h=m,_=this.timeline,this._repeat){if(u=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(u*100+n,r,o);if(h=B(m%u),m===l?(g=this._repeat,h=c):(f=B(m/u),g=~~f,g&&g===f?(h=c,g--):h>c&&(h=c)),w=this._yoyo&&g&1,w&&(h=c-h),f=_e(this._tTime,u),h===s&&!o&&this._initted&&g===f)return this._tTime=m,this;g!==f&&this.vars.repeatRefresh&&!w&&!this._lock&&h!==u&&this._initted&&(this._lock=o=1,this.render(B(u*g),!0).invalidate()._lock=0)}if(!this._initted){if(da(this,d?n:h,o,r,m))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&g!==f))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var b=h<s;if(b!==this._inv){var v=b?s:c-s;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(b?-1:1)/v:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=m,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&m&&!r&&!f&&(wt(this,"onStart"),this._tTime!==m))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;_&&_.render(n<0?n:_._dur*_._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(d&&xn(this,n,r,o),wt(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!r&&this.parent&&wt(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&xn(this,n,!0,!0),(n||!c)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&qt(this,1),!r&&!(d&&!s)&&(m||s||w)&&(wt(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,s,l){je||mt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Bn(this,c),d=this._ease(c/this._dur),qs(this,n,r,o,s,d,c,l)?this.resetTo(n,r,o,s,1):(Ei(this,0),this.parent||sa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$e(this):this.scrollTrigger&&this.scrollTrigger.kill(!!et),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Gt&&Gt.vars.overwrite!==!0)._first||$e(this),this.parent&&o!==this.timeline.totalDuration()&&ve(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=n?Tt(n):s,c=this._ptLookup,d=this._pt,m,h,p,g,u,f,w;if((!r||r==="all")&&bs(s,l))return r==="all"&&(this._pt=0),$e(this);for(m=this._op=this._op||[],r!=="all"&&(J(r)&&(u={},ct(r,function(y){return u[y]=1}),r=u),r=Us(s,r)),w=s.length;w--;)if(~l.indexOf(s[w])){h=c[w],r==="all"?(m[w]=r,g=h,p={}):(p=m[w]=m[w]||{},g=r);for(u in g)f=h&&h[u],f&&((!("kill"in f.d)||f.d.kill(u)===!0)&&Ai(this,f,"_pt"),delete h[u]),p!=="all"&&(p[u]=1)}return this._initted&&!this._pt&&d&&$e(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Ve(1,arguments)},e.delayedCall=function(n,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(n,r,o){return Ve(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return V.killTweensOf(n,r,o)},e})(Xe);vt(X.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ct("staggerTo,staggerFrom,staggerFromTo",function(a){X[a]=function(){var e=new rt,t=Tn.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Vn=function(e,t,i){return e[t]=i},Ca=function(e,t,i){return e[t](i)},Ks=function(e,t,i,n){return e[t](n.fp,i)},js=function(e,t,i){return e.setAttribute(t,i)},Mi=function(e,t){return Y(e[t])?Ca:Ti(e[t])&&e.setAttribute?js:Vn},Aa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xs=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qn=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Un=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Zs=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},Qs=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ai(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Js=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Yn=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},dt=(function(){function a(t,i,n,r,o,s,l,c,d){this.t=i,this.s=r,this.c=o,this.p=n,this.r=s||Aa,this.d=l||this,this.set=c||Vn,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Js,this.m=i,this.mt=r,this.tween=n},a})();ct(Wn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Dn[a]=1});_t.TweenMax=_t.TweenLite=X;_t.TimelineLite=_t.TimelineMax=rt;V=new rt({sortChildren:!1,defaults:Ue,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ft.stringFilter=zn;var ae=[],wi={},tl=[],Xr=0,el=0,yn=function(e){return(wi[e]||tl).map(function(t){return t()})},En=function(){var e=Date.now(),t=[];e-Xr>2&&(yn("matchMediaInit"),ae.forEach(function(i){var n=i.queries,r=i.conditions,o,s,l,c;for(s in n)o=Pt.matchMedia(n[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(i.revert(),l&&t.push(i))}),yn("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Xr=e,yn("matchMedia"))},ka=(function(){function a(t,i){this.selector=i&&Cn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=el++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){Y(i)&&(r=n,n=i,i=Y);var o=this,s=function(){var c=$,d=o.selector,m;return c&&c!==o&&c.data.push(o),r&&(o.selector=Cn(r)),$=o,m=n.apply(o,arguments),Y(m)&&o._r.push(m),$=c,o.selector=d,o.isReverted=!1,m};return o.last=s,i===Y?s(o,function(l){return o.add(null,l)}):i?o[i]=s:s},e.ignore=function(i){var n=$;$=null,i(this),$=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof X&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof rt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof X)&&c.revert&&c.revert(i);r._r.forEach(function(d){return d(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var o=ae.length;o--;)ae[o].id===this.id&&ae.splice(o,1)},e.revert=function(i){this.kill(i||{})},a})(),il=(function(){function a(t){this.contexts=[],this.scope=t,$&&$.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){Ot(i)||(i={matches:i});var o=new ka(0,r||this.scope),s=o.conditions={},l,c,d;$&&!o.selector&&(o.selector=$.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?d=1:(l=Pt.matchMedia(i[c]),l&&(ae.indexOf(o)<0&&ae.push(o),(s[c]=l.matches)&&(d=1),l.addListener?l.addListener(En):l.addEventListener("change",En)));return d&&n(o,function(m){return o.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a})(),Si={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return _a(n)})},timeline:function(e){return new rt(e)},getTweensOf:function(e,t){return V.getTweensOf(e,t)},getProperty:function(e,t,i,n){J(e)&&(e=Tt(e)[0]);var r=Vt(e||{}).get,o=i?oa:aa;return i==="native"&&(i=""),e&&(t?o((ut[t]&&ut[t].get||r)(e,t,i,n)):function(s,l,c){return o((ut[s]&&ut[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,i){if(e=Tt(e),e.length>1){var n=e.map(function(d){return ot.quickSetter(d,t,i)}),r=n.length;return function(d){for(var m=r;m--;)n[m](d)}}e=e[0]||{};var o=ut[t],s=Vt(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(d){var m=new o;ye._pt=0,m.init(e,i?d+i:d,ye,0,[e]),m.render(1,m),ye._pt&&Un(1,ye)}:s.set(e,l);return o?c:function(d){return c(e,l,i?d+i:d,s,1)}},quickTo:function(e,t,i){var n,r=ot.to(e,vt((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,d){return r.resetTo(t,l,c,d)};return o.tween=r,o},isTweening:function(e){return V.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=re(e.ease,Ue.ease)),qr(Ue,e||{})},config:function(e){return qr(ft,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!ut[s]&&!_t[s]&&Ye(t+" effect requires "+s+" plugin.")}),mn[t]=function(s,l,c){return i(Tt(s),vt(l||{},r),c)},o&&(rt.prototype[t]=function(s,l,c){return this.add(mn[t](s,Ot(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){L[e]=re(t)},parseEase:function(e,t){return arguments.length?re(e,t):L},getById:function(e){return V.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new rt(e),n,r;for(i.smoothChildTiming=pt(e.smoothChildTiming),V.remove(i),i._dp=0,i._time=i._tTime=V._time,n=V._first;n;)r=n._next,(t||!(!n._dur&&n instanceof X&&n.vars.onComplete===n._targets[0]))&&Lt(i,n,n._start-n._delay),n=r;return Lt(V,i,0),i},context:function(e,t){return e?new ka(e,t):$},matchMedia:function(e){return new il(e)},matchMediaRefresh:function(){return ae.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||En()},addEventListener:function(e,t){var i=wi[e]||(wi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wi[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Fs,wrapYoyo:Ds,distribute:ma,random:fa,snap:pa,normalize:Os,getUnit:it,clamp:Es,splitColor:va,toArray:Tt,selector:Cn,mapRange:ya,pipe:Ps,unitize:Ls,interpolate:Ws,shuffle:ua},install:ea,effects:mn,ticker:mt,updateRoot:rt.updateRoot,plugins:ut,globalTimeline:V,core:{PropTween:dt,globals:ia,Tween:X,Timeline:rt,Animation:Xe,getCache:Vt,_removeLinkedListItem:Ai,reverting:function(){return et},context:function(e){return e&&$&&($.data.push(e),e._ctx=$),$},suppressOverwrites:function(e){return Mn=e}}};ct("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Si[a]=X[a]});mt.add(rt.updateRoot);ye=Si.to({},{duration:0});var nl=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},rl=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=nl(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},wn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(s){var l,c;if(J(r)&&(l={},ct(r,function(d){return l[d]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}rl(s,r)}}}},ot=Si.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,s,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)et?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},wn("roundProps",An),wn("modifiers"),wn("snap",pa))||Si;X.version=rt.version=ot.version="3.15.0";ta=1;Pn()&&be();var al=L.Power0,ol=L.Power1,sl=L.Power2,ll=L.Power3,cl=L.Power4,dl=L.Linear,hl=L.Quad,ul=L.Cubic,ml=L.Quart,pl=L.Quint,fl=L.Strong,gl=L.Elastic,yl=L.Back,wl=L.SteppedEase,_l=L.Bounce,vl=L.Sine,bl=L.Expo,xl=L.Circ;var Ea,Yt,Te,Jn,ue,Sl,Ma,tr,Tl=function(){return typeof window<"u"},Nt={},he=180/Math.PI,Ce=Math.PI/180,Se=Math.atan2,Pa=1e8,er=/([A-Z])/g,Cl=/(left|right|width|margin|padding|x)/i,Al=/[\s,\(]\S/,Ft={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kl=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},El=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ml=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pl=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Na=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},za=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ll=function(e,t,i){return e.style[t]=i},Ol=function(e,t,i){return e.style.setProperty(t,i)},Fl=function(e,t,i){return e._gsap[t]=i},Dl=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Wl=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Hl=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},q="transform",gt=q+"Origin",Rl=function a(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in Nt&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ft[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=Rt(n,s)}):this.tfm[e]=o.x?o[e]:Rt(n,e),e===gt&&(this.tfm.zOrigin=o.zOrigin);else return Ft.transform.split(",").forEach(function(s){return a.call(i,s,t)});if(this.props.indexOf(q)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(gt,t,"")),e=q}(r||t)&&this.props.push(e,t,r[e])},Ia=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Nl=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(er,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=tr(),(!r||!r.isStart)&&!i[q]&&(Ia(i),n.zOrigin&&i[gt]&&(i[gt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},$a=function(e,t){var i={target:e,props:[],revert:Nl,save:Rl};return e._gsap||ot.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Ga,Xn=function(e,t){var i=Yt.createElementNS?Yt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yt.createElement(e);return i&&i.style?i:Yt.createElement(e)},bt=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(er,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Ae(t)||t,1)||""},La="O,Moz,ms,Ms,Webkit".split(","),Ae=function(e,t,i){var n=t||ue,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(La[o]+e in r););return o<0?null:(o===3?"ms":o>=0?La[o]:"")+e},Zn=function(){Tl()&&window.document&&(Ea=window,Yt=Ea.document,Te=Yt.documentElement,ue=Xn("div")||{style:{}},Sl=Xn("div"),q=Ae(q),gt=q+"Origin",ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ga=!!Ae("perspective"),tr=ot.core.reverting,Jn=1)},Oa=function(e){var t=e.ownerSVGElement,i=Xn("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Te.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Te.removeChild(i),r},Fa=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ba=function(e){var t,i;try{t=e.getBBox()}catch{t=Oa(e),i=1}return t&&(t.width||t.height)||i||(t=Oa(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fa(e,["x","cx","x1"])||0,y:+Fa(e,["y","cy","y1"])||0,width:0,height:0}:t},Va=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ba(e))},jt=function(e,t){if(t){var i=e.style,n;t in Nt&&t!==gt&&(t=q),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(er,"-$1").toLowerCase())):i.removeAttribute(t)}},Kt=function(e,t,i,n,r,o){var s=new dt(e._pt,t,i,0,1,o?za:Na);return e._pt=s,s.b=n,s.e=r,e._props.push(i),s},Da={deg:1,rad:1,turn:1},zl={grid:1,flex:1},Xt=function a(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",s=ue.style,l=Cl.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),m=100,h=n==="px",p=n==="%",g,u,f,w;if(n===o||!r||Da[n]||Da[o])return r;if(o!=="px"&&!h&&(r=a(e,t,i,"px")),w=e.getCTM&&Va(e),(p||o==="%")&&(Nt[t]||~t.indexOf("adius")))return g=w?e.getBBox()[l?"width":"height"]:e[d],K(p?r/g*m:r/100*g);if(s[l?"width":"height"]=m+(h?o:n),u=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,w&&(u=(e.ownerSVGElement||{}).parentNode),(!u||u===Yt||!u.appendChild)&&(u=Yt.body),f=u._gsap,f&&p&&f.width&&l&&f.time===mt.time&&!f.uncache)return K(r/f.width*m);if(p&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=m+n,g=e[d],y?e.style[t]=y:jt(e,t)}else(p||o==="%")&&!zl[bt(u,"display")]&&(s.position=bt(e,"position")),u===e&&(s.position="static"),u.appendChild(ue),g=ue[d],u.removeChild(ue),s.position="absolute";return l&&p&&(f=Vt(u),f.time=mt.time,f.width=u[d]),K(h?g*r/m:g&&r?m/g*r:0)},Rt=function(e,t,i,n){var r;return Jn||Zn(),t in Ft&&t!=="transform"&&(t=Ft[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nt[t]&&t!=="transform"?(r=ti(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Li(bt(e,gt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Pi[t]&&Pi[t](e,t,i)||bt(e,t)||Rn(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Xt(e,t,r,i)+i:r},Il=function(e,t,i,n){if(!i||i==="none"){var r=Ae(t,e,1),o=r&&bt(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=bt(e,"borderTopColor"))}var s=new dt(this._pt,e.style,t,0,1,qn),l=0,c=0,d,m,h,p,g,u,f,w,y,_,b,v;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=bt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(u=e.style[t],e.style[t]=n,n=bt(e,t)||n,u?e.style[t]=u:jt(e,t)),d=[i,n],zn(d),i=d[0],n=d[1],h=i.match(oe)||[],v=n.match(oe)||[],v.length){for(;m=oe.exec(n);)f=m[0],y=n.substring(l,m.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),f!==(u=h[c++]||"")&&(p=parseFloat(u)||0,b=u.substr((p+"").length),f.charAt(1)==="="&&(f=se(p,f)+b),w=parseFloat(f),_=f.substr((w+"").length),l=oe.lastIndex-_.length,_||(_=_||ft.units[t]||b,l===n.length&&(n+=_,s.e+=_)),b!==_&&(p=Xt(e,t,u,_)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:p,c:w-p,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<n.length?n.substring(l,n.length):""}else s.r=t==="display"&&n==="none"?za:Na;return On.test(n)&&(s.e=0),this._pt=s,s},Wa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$l=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Wa[i]||i,t[1]=Wa[n]||n,t.join(" ")},Gl=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,s,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Nt[s]&&(l=1,s=s==="transformOrigin"?gt:q),jt(i,s);l&&(jt(i,q),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",ti(i,1),o.uncache=1,Ia(n)))}},Pi={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new dt(e._pt,t,i,0,0,Gl);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},Je=[1,0,0,1,0,0],qa={},Ua=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ha=function(e){var t=bt(e,q);return Ua(t)?Je:t.substr(7).match(Ln).map(K)},ir=function(e,t){var i=e._gsap||Vt(e),n=e.style,r=Ha(e),o,s,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Je:r):(r===Je&&!e.offsetParent&&e!==Te&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,Te.appendChild(e)),r=Ha(e),l?n.display=l:jt(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):Te.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Qn=function(e,t,i,n,r,o){var s=e._gsap,l=r||ir(e,!0),c=s.xOrigin||0,d=s.yOrigin||0,m=s.xOffset||0,h=s.yOffset||0,p=l[0],g=l[1],u=l[2],f=l[3],w=l[4],y=l[5],_=t.split(" "),b=parseFloat(_[0])||0,v=parseFloat(_[1])||0,x,T,A,C;i?l!==Je&&(T=p*f-g*u)&&(A=b*(f/T)+v*(-u/T)+(u*y-f*w)/T,C=b*(-g/T)+v*(p/T)-(p*y-g*w)/T,b=A,v=C):(x=Ba(e),b=x.x+(~_[0].indexOf("%")?b/100*x.width:b),v=x.y+(~(_[1]||_[0]).indexOf("%")?v/100*x.height:v)),n||n!==!1&&s.smooth?(w=b-c,y=v-d,s.xOffset=m+(w*p+y*u)-w,s.yOffset=h+(w*g+y*f)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[gt]="0px 0px",o&&(Kt(o,s,"xOrigin",c,b),Kt(o,s,"yOrigin",d,v),Kt(o,s,"xOffset",m,s.xOffset),Kt(o,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},ti=function(e,t){var i=e._gsap||new In(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=bt(e,gt)||"0",d,m,h,p,g,u,f,w,y,_,b,v,x,T,A,C,S,E,M,D,W,H,R,F,I,lt,Ct,At,U,kt,ht,Q;return d=m=h=u=f=w=y=_=b=0,p=g=1,i.svg=!!(e.getCTM&&Va(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[q]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[q]!=="none"?l[q]:"")),n.scale=n.rotate=n.translate="none"),T=ir(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),c=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Qn(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,T)),v=i.xOrigin||0,x=i.yOrigin||0,T!==Je&&(E=T[0],M=T[1],D=T[2],W=T[3],d=H=T[4],m=R=T[5],T.length===6?(p=Math.sqrt(E*E+M*M),g=Math.sqrt(W*W+D*D),u=E||M?Se(M,E)*he:0,y=D||W?Se(D,W)*he+u:0,y&&(g*=Math.abs(Math.cos(y*Ce))),i.svg&&(d-=v-(v*E+x*D),m-=x-(v*M+x*W))):(Q=T[6],kt=T[7],Ct=T[8],At=T[9],U=T[10],ht=T[11],d=T[12],m=T[13],h=T[14],A=Se(Q,U),f=A*he,A&&(C=Math.cos(-A),S=Math.sin(-A),F=H*C+Ct*S,I=R*C+At*S,lt=Q*C+U*S,Ct=H*-S+Ct*C,At=R*-S+At*C,U=Q*-S+U*C,ht=kt*-S+ht*C,H=F,R=I,Q=lt),A=Se(-D,U),w=A*he,A&&(C=Math.cos(-A),S=Math.sin(-A),F=E*C-Ct*S,I=M*C-At*S,lt=D*C-U*S,ht=W*S+ht*C,E=F,M=I,D=lt),A=Se(M,E),u=A*he,A&&(C=Math.cos(A),S=Math.sin(A),F=E*C+M*S,I=H*C+R*S,M=M*C-E*S,R=R*C-H*S,E=F,H=I),f&&Math.abs(f)+Math.abs(u)>359.9&&(f=u=0,w=180-w),p=K(Math.sqrt(E*E+M*M+D*D)),g=K(Math.sqrt(R*R+Q*Q)),A=Se(H,R),y=Math.abs(A)>2e-4?A*he:0,b=ht?1/(ht<0?-ht:ht):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ua(bt(e,q)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=u<=0?180:-180,u+=u<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=K(p),i.scaleY=K(g),i.rotation=K(u)+s,i.rotationX=K(f)+s,i.rotationY=K(w)+s,i.skewX=y+s,i.skewY=_+s,i.transformPerspective=b+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[gt]=Li(c)),i.xOffset=i.yOffset=0,i.force3D=ft.force3D,i.renderTransform=i.svg?Vl:Ga?Ya:Bl,i.uncache=0,i},Li=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kn=function(e,t,i){var n=it(t);return K(parseFloat(t)+parseFloat(Xt(e,"x",i+"px",n)))+n},Bl=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ya(e,t)},ce="0deg",Qe="0px",de=") ",Ya=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.z,c=i.rotation,d=i.rotationY,m=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,u=i.scaleY,f=i.transformPerspective,w=i.force3D,y=i.target,_=i.zOrigin,b="",v=w==="auto"&&e&&e!==1||w===!0;if(_&&(m!==ce||d!==ce)){var x=parseFloat(d)*Ce,T=Math.sin(x),A=Math.cos(x),C;x=parseFloat(m)*Ce,C=Math.cos(x),o=Kn(y,o,T*C*-_),s=Kn(y,s,-Math.sin(x)*-_),l=Kn(y,l,A*C*-_+_)}f!==Qe&&(b+="perspective("+f+de),(n||r)&&(b+="translate("+n+"%, "+r+"%) "),(v||o!==Qe||s!==Qe||l!==Qe)&&(b+=l!==Qe||v?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+de),c!==ce&&(b+="rotate("+c+de),d!==ce&&(b+="rotateY("+d+de),m!==ce&&(b+="rotateX("+m+de),(h!==ce||p!==ce)&&(b+="skew("+h+", "+p+de),(g!==1||u!==1)&&(b+="scale("+g+", "+u+de),y.style[q]=b||"translate(0, 0)"},Vl=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,s=i.y,l=i.rotation,c=i.skewX,d=i.skewY,m=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,u=i.yOrigin,f=i.xOffset,w=i.yOffset,y=i.forceCSS,_=parseFloat(o),b=parseFloat(s),v,x,T,A,C;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Ce,c*=Ce,v=Math.cos(l)*m,x=Math.sin(l)*m,T=Math.sin(l-c)*-h,A=Math.cos(l-c)*h,c&&(d*=Ce,C=Math.tan(c-d),C=Math.sqrt(1+C*C),T*=C,A*=C,d&&(C=Math.tan(d),C=Math.sqrt(1+C*C),v*=C,x*=C)),v=K(v),x=K(x),T=K(T),A=K(A)):(v=m,A=h,x=T=0),(_&&!~(o+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(_=Xt(p,"x",o,"px"),b=Xt(p,"y",s,"px")),(g||u||f||w)&&(_=K(_+g-(g*v+u*T)+f),b=K(b+u-(g*x+u*A)+w)),(n||r)&&(C=p.getBBox(),_=K(_+n/100*C.width),b=K(b+r/100*C.height)),C="matrix("+v+","+x+","+T+","+A+","+_+","+b+")",p.setAttribute("transform",C),y&&(p.style[q]=C)},ql=function(e,t,i,n,r){var o=360,s=J(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?he:1),c=l-n,d=n+c+"deg",m,h;return s&&(m=r.split("_")[1],m==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),m==="cw"&&c<0?c=(c+o*Pa)%o-~~(c/o)*o:m==="ccw"&&c>0&&(c=(c-o*Pa)%o-~~(c/o)*o)),e._pt=h=new dt(e._pt,t,i,n,c,kl),h.e=d,h.u="deg",e._props.push(i),h},Ra=function(e,t){for(var i in t)e[i]=t[i];return e},Ul=function(e,t,i){var n=Ra({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,l,c,d,m,h,p,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[q]=t,s=ti(i,1),jt(i,q),i.setAttribute("transform",c)):(c=getComputedStyle(i)[q],o[q]=t,s=ti(i,1),o[q]=c);for(l in Nt)c=n[l],d=s[l],c!==d&&r.indexOf(l)<0&&(p=it(c),g=it(d),m=p!==g?Xt(i,l,c,g):parseFloat(c),h=parseFloat(d),e._pt=new dt(e._pt,s,l,m,h-m,jn),e._pt.u=g||0,e._props.push(l));Ra(s,n)};ct("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(s){return e<2?a+s:"border"+s+a});Pi[e>1?"border"+a:a]=function(s,l,c,d,m){var h,p;if(arguments.length<4)return h=o.map(function(g){return Rt(s,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(d+"").split(" "),p={},o.forEach(function(g,u){return p[g]=h[u]=h[u]||h[(u-1)/2|0]}),s.init(l,p,m)}});var nr={name:"css",register:Zn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,s=e.style,l=i.vars.startAt,c,d,m,h,p,g,u,f,w,y,_,b,v,x,T,A,C;Jn||Zn(),this.styles=this.styles||$a(e),A=this.styles.props,this.tween=i;for(u in t)if(u!=="autoRound"&&(d=t[u],!(ut[u]&&Gn(u,t,i,n,e,r)))){if(p=typeof d,g=Pi[u],p==="function"&&(d=d.call(i,n,e,r),p=typeof d),p==="string"&&~d.indexOf("random(")&&(d=xe(d)),g)g(this,e,u,d,i)&&(T=1);else if(u.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(u)+"").trim(),d+="",Wt.lastIndex=0,Wt.test(c)||(f=it(c),w=it(d),w?f!==w&&(c=Xt(e,u,c,w)+w):f&&(d+=f)),this.add(s,"setProperty",c,d,n,r,0,0,u),o.push(u),A.push(u,0,s[u]);else if(p!=="undefined"){if(l&&u in l?(c=typeof l[u]=="function"?l[u].call(i,n,e,r):l[u],J(c)&&~c.indexOf("random(")&&(c=xe(c)),it(c+"")||c==="auto"||(c+=ft.units[u]||it(Rt(e,u))||""),(c+"").charAt(1)==="="&&(c=Rt(e,u))):c=Rt(e,u),h=parseFloat(c),y=p==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),m=parseFloat(d),u in Ft&&(u==="autoAlpha"&&(h===1&&Rt(e,"visibility")==="hidden"&&m&&(h=0),A.push("visibility",0,s.visibility),Kt(this,s,"visibility",h?"inherit":"hidden",m?"inherit":"hidden",!m)),u!=="scale"&&u!=="transform"&&(u=Ft[u],~u.indexOf(",")&&(u=u.split(",")[0]))),_=u in Nt,_){if(this.styles.save(u),C=d,p==="string"&&d.substring(0,6)==="var(--"){if(d=bt(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=d,d=bt(e,"perspective"),S?e.style.perspective=S:jt(e,"perspective")}m=parseFloat(d)}if(b||(v=e._gsap,v.renderTransform&&!t.parseTransform||ti(e,t.parseTransform),x=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new dt(this._pt,s,q,0,1,v.renderTransform,v,0,-1),b.dep=1),u==="scale")this._pt=new dt(this._pt,v,"scaleY",v.scaleY,(y?se(v.scaleY,y+m):m)-v.scaleY||0,jn),this._pt.u=0,o.push("scaleY",u),u+="X";else if(u==="transformOrigin"){A.push(gt,0,s[gt]),d=$l(d),v.svg?Qn(e,d,0,x,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==v.zOrigin&&Kt(this,v,"zOrigin",v.zOrigin,w),Kt(this,s,u,Li(c),Li(d)));continue}else if(u==="svgOrigin"){Qn(e,d,1,x,0,this);continue}else if(u in qa){ql(this,v,u,h,y?se(h,y+d):d);continue}else if(u==="smoothOrigin"){Kt(this,v,"smooth",v.smooth,d);continue}else if(u==="force3D"){v[u]=d;continue}else if(u==="transform"){Ul(this,d,e);continue}}else u in s||(u=Ae(u)||u);if(_||(m||m===0)&&(h||h===0)&&!Al.test(d)&&u in s)f=(c+"").substr((h+"").length),m||(m=0),w=it(d)||(u in ft.units?ft.units[u]:f),f!==w&&(h=Xt(e,u,c,w)),this._pt=new dt(this._pt,_?v:s,u,h,(y?se(h,y+m):m)-h,!_&&(w==="px"||u==="zIndex")&&t.autoRound!==!1?Pl:jn),this._pt.u=w||0,_&&C!==d?(this._pt.b=c,this._pt.e=C,this._pt.r=Ml):f!==w&&w!=="%"&&(this._pt.b=c,this._pt.r=El);else if(u in s)Il.call(this,e,u,c,y?y+d:d);else if(u in e)this.add(e,u,c||e[u],y?y+d:d,n,r);else if(u!=="parseTransform"){Ci(u,d);continue}_||(u in s?A.push(u,0,s[u]):typeof e[u]=="function"?A.push(u,2,e[u]()):A.push(u,1,c||e[u])),o.push(u)}}T&&Yn(this)},render:function(e,t){if(t.tween._time||!tr())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rt,aliases:Ft,getSetter:function(e,t,i){var n=Ft[t];return n&&n.indexOf(",")<0&&(t=n),t in Nt&&t!==gt&&(e._gsap.x||Rt(e,"x"))?i&&Ma===i?t==="scale"?Dl:Fl:(Ma=i||{})&&(t==="scale"?Wl:Hl):e.style&&!Ti(e.style[t])?Ll:~t.indexOf("-")?Ol:Mi(e,t)},core:{_removeProperty:jt,_getMatrix:ir}};ot.utils.checkPrefix=Ae;ot.core.getStyleSaver=$a;(function(a,e,t,i){var n=ct(a+","+e+","+t,function(r){Nt[r]=1});ct(e,function(r){ft.units[r]="deg",qa[r]=1}),Ft[n[13]]=a+","+e,ct(i,function(r){var o=r.split(":");Ft[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ft.units[a]="px"});ot.registerPlugin(nr);var rr=ot.registerPlugin(nr)||ot,Td=rr.core.Tween;var ar={entity:"weather.forecast_home",name:"Weather",outdoor_sensor_entity:"",humidity_sensor_entity:"",pressure_sensor_entity:"",show_attributes:!0,show_location:!0,animate:!0,auto_pause:!1,dev_mode:!1,disable_lightning_shake:!1,color_palette:"default",enable_day_night_cycle:!1,sunrise_hour:6,sunset_hour:20},yt={windSpeed:2,rainCount:1,leafCount:1,snowCount:1,cloudBaseSize:1,cloudCount:3,splashBounce:80},or={sunny:"26",rainy:"18",snowy:"2",stormy:"16",windy:"20",cloudy:"15",foggy:"12","partly-cloudy":"23",pouring:"14","snowy-rainy":"3","clear-night":"8",sleety:"1","snowy-stormy":"0","light-rain":"20","sleety-stormy":"-1"},sr={sunny:"Sunny",rainy:"Rainy",snowy:"Snowy",stormy:"Thunderstorm",windy:"Windy",cloudy:"Cloudy",foggy:"Foggy","partly-cloudy":"Partly Cloudy",pouring:"Pouring Rain","snowy-rainy":"Mixed Precipitation","clear-night":"Clear Night",sleety:"Sleet","snowy-stormy":"Snowy Thunderstorm","light-rain":"Light Rain","sleety-stormy":"Sleet Storm"};var Ka={DAWN_START:5,DAY_START:7,DUSK_START:19,NIGHT_START:21,UPDATE_INTERVAL:3e5},me={humidity:"65%",windSpeed:"10 km/h",pressure:"1013 hPa",indoorTemperature:"22\xB0",indoorHumidity:"45%",uv:4},ja="1.3.2",Xa={rain:{day:"rgba(222, 234, 255, 0.62)",night:"rgba(180, 198, 230, 0.48)",dawn:"rgba(255, 232, 226, 0.58)",dusk:"rgba(255, 220, 200, 0.55)"},snow:{day:"#FFFFFF",night:"#B8D4F0",dawn:"#E6F3FF",dusk:"#D1E7FF"},lightning:{day:"rgba(236, 242, 255, 0.6)",night:"rgba(170, 200, 255, 0.55)",dawn:"rgba(240, 246, 255, 0.58)",dusk:"rgba(214, 230, 255, 0.56)"},wind:{day:"#8FBC8F",night:"#4A5D4A",dawn:"#A8CCA8",dusk:"#6B8F6B"},clouds:{day:"#FFFFFF",night:"#737B8C",dawn:"#E8F0F8",dusk:"#B0B8C8"},fog:{day:"#E0E8F0",night:"#5A6B7D",dawn:"#D8E4F0",dusk:"#8A9BAD"},sun:{day:"#FFD700",night:"#FFD700",dawn:"#FFF4B8",dusk:"#FFE066"},stars:{day:"#FFFFFF",night:"#FFFFFF",dawn:"#F0F8FF",dusk:"#E8F0FF"}};function Yl(a){return["sunny","clear-night","partly-cloudy","cloudy","rainy","light-rain","pouring","stormy","snowy","snowy-rainy","snowy-stormy","sleety","sleety-stormy","windy","foggy"].includes(a)}function Za(a,e=-1/0,t=1/0){return typeof a=="number"&&!isNaN(a)&&a>=e&&a<=t}function ii(a){return typeof a!="string"?!1:/^#([0-9A-Fa-f]{3}){1,2}$/.test(a)||/^rgba?\(\s*[\d.,%\s/]+\)$/.test(a)?!0:["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","transparent","aqua","cyan","magenta","fuchsia","lime","maroon","navy","olive","teal","silver","gold","coral","crimson","indigo","ivory","khaki","lavender","linen","orchid","peru","plum","salmon","sienna","tan","thistle","tomato","turquoise","violet","wheat","beige","azure","bisque","chocolate","cornsilk","firebrick","gainsboro","honeydew","lemonchiffon","lightblue","lightcoral","lightcyan","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightyellow","mediumblue","mintcream","mistyrose","moccasin","oldlace","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","powderblue","rosybrown","royalblue","seagreen","seashell","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","yellowgreen","aliceblue","antiquewhite","aquamarine","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","floralwhite","forestgreen","ghostwhite","goldenrod","greenyellow","hotpink","indianred","lawngreen","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","limegreen","mediumaquamarine","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","navajowhite","olivedrab","rebeccapurple","saddlebrown","sandybrown","whitesmoke"].includes(a.toLowerCase())}function P(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Zt(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0}function Et(a,e,t=0){if(!isFinite(a))return"--";Math.abs(a)<.5/10**t&&(a=0);let i=e?.locale?.language||e?.language||(typeof navigator<"u"?navigator.language:"en");try{return new Intl.NumberFormat(i,{minimumFractionDigits:t,maximumFractionDigits:t}).format(a)}catch{return a.toFixed(t)}}function Oi(a,e,t){if(a?.localize)try{let i=a.localize(e);if(i&&i!==e)return i}catch{}return t}function Qa(a,e){if(!isFinite(a))return 0;switch((e||"km/h").toLowerCase()){case"m/s":return a*3.6;case"mph":return a*1.609344;case"ft/s":return a*1.09728;case"kn":case"kt":case"knots":return a*1.852;case"beaufort":case"bft":return .836*Math.pow(Math.max(0,a),1.5)*3.6;default:return a}}function k(a,e,...t){a&&console.log(`[AWC Dev] ${e}`,...t)}function tt(a,e){let t=a.engine_settings||{},i=(o,s,l,c)=>Za(o,l,c)?o:s,n=i(t.windSpeed,yt.windSpeed,.1,15),r=n;return Za(e,0,200)&&(r=Math.max(.1,Math.min(15,e/10*n))),{windSpeed:r,rainCount:i(t.rainCount,yt.rainCount,.1,10),leafCount:i(t.leafCount,yt.leafCount,.1,10),snowCount:i(t.snowCount,yt.snowCount,.1,10),cloudBaseSize:i(t.cloudBaseSize,yt.cloudBaseSize,.3,2.5),cloudCount:i(t.cloudCount,yt.cloudCount,1,20),splashBounce:i(t.splashBounce,yt.splashBounce,40,120)}}function lr(a){a.forEach(e=>{e!=null&&clearTimeout(e)}),a.length=0}function Ja(a){let e=new Set;return a.querySelectorAll("*").forEach(t=>{window.AnimatedWeatherCardGsap.getTweensOf(t).forEach(i=>{let n=i;for(;n.parent?.parent;)n=n.parent;e.add(n)})}),e}function Fi(a){window.AnimatedWeatherCardGsap&&Ja(a).forEach(e=>e.pause())}function Di(a){window.AnimatedWeatherCardGsap&&Ja(a).forEach(e=>e.resume())}function cr(a){window.AnimatedWeatherCardGsap&&a.querySelectorAll("*").forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)})}function Wi(a,e,t,i,n,r={}){if(typeof a!="string")return console.warn("Invalid condition type provided, using sunny as fallback"),"sunny";if(e&&Yl(a))return a;if(e)return console.warn(`Invalid dev mode condition: ${a}, using sunny`),"sunny";let o=a.toLowerCase();if(o.includes("sleet")&&(o.includes("lightning")||o.includes("thunder")||o.includes("storm")))return"sleety-stormy";if((o.includes("snow")||o.includes("sleet"))&&(o.includes("lightning")||o.includes("thunder")||o.includes("storm")))return"snowy-stormy";if(o.includes("lightning")||o.includes("thunder")||o.includes("storm"))return"stormy";if(o.includes("fog")||o.includes("mist"))return"foggy";if(o.includes("heavy")&&o.includes("rain"))return"pouring";if(o.includes("pouring")||o.includes("downpour"))return"pouring";if((o.includes("snow")||o.includes("sleet"))&&(o.includes("rain")||o.includes("drizzle")))return"snowy-rainy";if(o.includes("light")&&(o.includes("rain")||o.includes("drizzle")))return"light-rain";if(o.includes("rain")||o.includes("drizzle"))return"rainy";if(o.includes("sleet")||o.includes("hail"))return"sleety";if(o.includes("snow"))return"snowy";if(o.includes("wind"))return"windy";if(o.includes("partly")&&o.includes("cloud"))return"partly-cloudy";if(o.includes("cloud")||o.includes("overcast"))return"cloudy";if(o.includes("clear")||o.includes("sunny")){if(!r.clock){if(o.includes("night"))return"clear-night";if(o.includes("sunny"))return"sunny";if(r.night!==void 0)return r.night?"clear-night":"sunny"}let s=new Date,l;if(n)try{let h=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"numeric",hour12:!1}).formatToParts(s);l=parseInt(h.find(p=>p.type==="hour")?.value||"0",10)}catch{l=s.getHours()}else l=s.getHours();let c=t??6,d=i??20;return(l<c||l>=d)&&o.includes("clear")?"clear-night":"sunny"}return"sunny"}function ni(a,e,t){if(typeof a!="string"||!a.trim())return console.warn("Invalid animation type provided"),t||ei("rain");if(!e||!e.isEnabled())return t||ei(a);let i=Xa[a];if(!i)return console.warn(`No color scheme found for animation type: ${a}`),t||ei(a);try{let n=e.getCurrentState(),r=e.getTimeAwareColor(i);return ii(r)?r:(console.warn(`Invalid color returned from time manager: ${r}`),t||ei(a))}catch(n){return console.error("Error getting time-aware color:",n),t||ei(a)}}function ei(a){let t={rain:"#4A9EFF",snow:"#FFFFFF",lightning:"#FFFFFF",wind:"#8FBC8F",clouds:"#FFFFFF",fog:"#E0E8F0",sun:"#FFD700",stars:"#FFFFFF"}[a];return t||(console.warn(`Unknown animation type: ${a}, using white as fallback`),"#FFFFFF")}var Hi=class Hi{constructor(e,t,i){this.animationHandles=[];this.timeouts=[];this.particles=[];this.element=e,this.config=t,this.cardConfig=i,this.state="created",queueMicrotask(()=>k(this.config.devMode,`Created ${this.animationType} animation`))}async start(){if(this.state==="active"){k(this.config.devMode,`${this.animationType} animation already active`);return}try{this.setState("starting"),k(this.config.devMode,`Starting ${this.animationType} animation with intensity ${this.config.intensity}`),this.ensureLayerVisibility(!0),await this.onStart(),this.setState("active")}catch(e){throw console.error(`Failed to start ${this.animationType} animation:`,e),this.setState("stopped"),e}}async stop(){if(!(this.state==="stopped"||this.state==="destroyed"))try{this.setState("stopping"),k(this.config.devMode,`Stopping ${this.animationType} animation`),await this.onStop(),this.cleanup(),this.ensureLayerVisibility(!1),this.setState("stopped")}catch(e){throw console.error(`Failed to stop ${this.animationType} animation:`,e),e}}async pause(){if(this.state==="active")try{k(this.config.devMode,`Pausing ${this.animationType} animation`),await this.onPause(),this.setState("paused")}catch(e){throw console.error(`Failed to pause ${this.animationType} animation:`,e),e}}async resume(){if(this.state==="paused")try{k(this.config.devMode,`Resuming ${this.animationType} animation`),this.setState("active"),await this.onResume()}catch(e){throw console.error(`Failed to resume ${this.animationType} animation:`,e),this.setState("paused"),e}}setWindSpeed(e){this.realWindSpeed=e,(this.state==="active"||this.state==="paused")&&this.onWindSpeedChange()}async destroy(){this.state!=="destroyed"&&(await this.stop(),this.setState("destroyed"),k(this.config.devMode,`Destroyed ${this.animationType} animation`))}getState(){return this.state}isActive(){return this.state==="active"}isPaused(){return this.state==="paused"}onWindSpeedChange(){}setState(e){let t=this.state;this.state=e,k(this.config.devMode,`${this.animationType} state: ${t} \u2192 ${e}`)}ensureLayerVisibility(e){if(this.containerSelector){let i=this.element.querySelector(this.containerSelector);i&&(i.style.display=e?"block":"none",k(this.config.devMode,`Set ${this.animationType} container visibility: ${e}`))}let t=this.element.querySelector(this.layerSelector);t&&!Hi.SHARED_LAYERS.includes(this.layerSelector)&&(t.style.opacity=e?"1":"0",k(this.config.devMode,`Set ${this.animationType} layer opacity: ${e?1:0}`))}cleanup(){this.animationHandles.forEach(e=>{e&&clearInterval(e)}),this.animationHandles=[],this.timeouts.forEach(e=>{if(e)if(typeof e=="function"){let t=e();t&&clearTimeout(t)}else clearTimeout(e)}),this.timeouts=[],window.AnimatedWeatherCardGsap&&this.particles.forEach(e=>{window.AnimatedWeatherCardGsap.killTweensOf(e)}),this.particles.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.particles=[],k(this.config.devMode,`Cleaned up ${this.animationType} animation resources`)}addAnimationHandle(e){this.animationHandles.push(e)}addTimeout(e){this.timeouts.push(e)}addParticle(e){this.particles.push(e)}removeParticle(e){let t=this.particles.indexOf(e);t>-1&&this.particles.splice(t,1)}};Hi.SHARED_LAYERS=[".animated-weather-card",".animation-layer"];var Z=Hi;var Qt=class{constructor(e,t,i){this.layer=e;this.create=t;this.cycle=i;this.items=[];this.running=!1;this.paused=!1}start(e){this.running=!0;let t=[];for(let i=0;i<e;i++){let n=this.create(i);this.layer.appendChild(n);let r={el:n};this.items.push(r),t.push(n),this.run(r,!0)}return t}run(e,t){this.running&&(e.anim=this.cycle(e.el,()=>this.run(e,!1),t),this.paused&&e.anim.pause())}pause(){this.paused=!0,this.items.forEach(e=>e.anim?.pause())}resume(){this.paused=!1,this.items.forEach(e=>e.anim?.resume())}stop(){this.running=!1,this.items.forEach(e=>{e.anim?.kill(),window.AnimatedWeatherCardGsap?.killTweensOf(e.el),e.el.remove()}),this.items=[]}get size(){return this.items.length}get elements(){return this.items.map(e=>e.el)}};function ke(a,e){return e&&a.progress(Math.random()),a}var Kl=420*230;function Ee(a,e){return Math.min(3,Math.max(.6,a*e/Kl))||1}function O(a,e){return a+Math.random()*(e-a)}var jl={light:10,rain:18,storm:24,pouring:32},Xl={light:[300,380],rain:[420,520],storm:[520,620],pouring:[620,760]},Zl={light:16,rain:24,storm:34,pouring:42},Ql=.3,Jl=16,tc=8,ec=[10,30],to="http://www.w3.org/2000/svg";function ic(a,e,t,i){let n=0,r=0,o=0;for(let s=1;s<=16;s++){let l=s/16,c=2*(1-l)*l*a+l*l*t,d=2*(1-l)*l*e+l*l*i;n+=Math.hypot(c-r,d-o),r=c,o=d}return n}function nc(a,e,t,i){return Math.max(4,Math.round(jl[a]*e*Ee(t,i)))}var Ri=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="rain";this.layerSelector=".rain-layer";this.containerSelector=".rain-container";this.splashColor="white";this.splashBounce=1;this.splashDots=[];this.nextSplashDot=0;this.rebounds=[];this.nextRebound=0;this.realWindSpeed=r,this.rainConfig={isStorm:!1,isPouring:!1,isLightRain:!1,particleCount:50,splashEnabled:!0,...i},k(this.config.devMode,"RainAnimation created with config:",this.rainConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start rain animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Rain layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=this.rainKind(),o=nc(r,i.rainCount,n.offsetWidth,n.offsetHeight),s=this.getRainColor(this.element.timeOfDayManager),l=this.cardConfig.spill_particles!==!1,c=Zl[r],d=r==="pouring"?3:2.4;this.splashLayer=t,this.splashColor=s,this.splashBounce=i.splashBounce/yt.splashBounce,this.pool=new Qt(t,()=>{let m=O(1,d),h=document.createElement("div");return h.className="raindrop",h.style.cssText=`
                    width: ${m.toFixed(2)}px;
                    height: ${c}px;
                    background: linear-gradient(0deg, ${s}, transparent);
                    border-radius: ${m.toFixed(2)}px;
                    top: 0;
                    left: 0;
                    transform-origin: 50% 100%;
                `,h.dataset.width=m.toFixed(2),h},(m,h,p)=>this.fall(m,n,r,c,l,h,p)),this.pool.start(o).forEach(m=>this.addParticle(m)),k(this.config.devMode,`Rain animation started - ${o} drops (${r})`)}fall(t,i,n,r,o,s,l){let c=i.offsetWidth,d=i.offsetHeight,[m,h]=Xl[n],p=O(m,h),g=O(6,Math.max(7,c-6)),u=this.rainConfig.splashEnabled&&Math.random()<Ql,f=-r,w=u?d-r:o?d+O(60,120):d,y=Math.max(.25,(w-f)/p),_=parseFloat(t.dataset.width||"2");window.AnimatedWeatherCardGsap.set(t,{x:g,scaleY:1,opacity:.55+.45*Math.min(1,_/2.4)});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:s});if(b.fromTo(t,{y:f},{y:w,duration:y,ease:"none"}),u)b.call(()=>this.createSplash(g+_/2,d),[],y),b.to(t,{scaleY:0,duration:r/p,ease:"none"},y);else if(o){let v=(d-r-f)/p;b.to(t,{opacity:0,duration:y-v,ease:"power1.in"},v)}return ke(b,l)}async onStop(){this.pool?.stop(),this.pool=void 0,this.splashDots.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()}),this.splashDots=[],this.rebounds.forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf([t,t.firstChild]),t.remove()}),this.rebounds=[],this.element.querySelectorAll(`${this.layerSelector} .raindrop, ${this.layerSelector} .rain-splash-svg`).forEach(t=>t.remove()),k(this.config.devMode,"Rain animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Rain animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Rain animation resumed")}rainKind(){return this.rainConfig.isPouring?"pouring":this.rainConfig.isStorm?"storm":this.rainConfig.isLightRain?"light":"rain"}createSplash(t,i){if(!(!window.AnimatedWeatherCardGsap||!this.splashLayer)){this.createRebound(t,i);for(let n of[-1,1]){let r=this.splashDots[this.nextSplashDot];r||(r=document.createElement("div"),r.className="rain-splash",r.style.background=this.splashColor,this.splashLayer.appendChild(r),this.splashDots[this.nextSplashDot]=r),this.nextSplashDot=(this.nextSplashDot+1)%Jl;let o=O(.22,.28),s=O(4,10)*this.splashBounce,l=n*O(6,12)*this.splashBounce;window.AnimatedWeatherCardGsap.killTweensOf(r),window.AnimatedWeatherCardGsap.set(r,{x:t-1,y:i-2,opacity:.9}),window.AnimatedWeatherCardGsap.timeline().to(r,{x:t-1+l,duration:o,ease:"power1.out"},0).to(r,{y:i-2-s,duration:o*.45,ease:"power2.out"},0).to(r,{y:i-2,duration:o*.55,ease:"power2.in"},o*.45).to(r,{opacity:0,duration:o*.4,ease:"power1.in"},o*.6)}}}createRebound(t,i){let n=this.splashLayer,r=this.rebounds[this.nextRebound];if(!r){r=document.createElementNS(to,"svg"),r.classList.add("rain-rebound");let u=document.createElementNS(to,"path");u.setAttribute("fill","none"),u.style.stroke=this.splashColor,r.appendChild(u),n.appendChild(r),this.rebounds[this.nextRebound]=r}this.nextRebound=(this.nextRebound+1)%tc;let o=r.firstChild,[s,l]=ec,c=O(s,l)*this.splashBounce,d=(Math.random()<.5?-1:1)*O(10,24)*this.splashBounce,m=O(6,18);o.setAttribute("d",`M 0,0 Q ${d.toFixed(1)},${(-2*c).toFixed(1)} ${(2*d).toFixed(1)},${m.toFixed(1)}`);let h=ic(d,-2*c,2*d,m),p=Math.min(h*.45,6+c*.3);o.style.strokeDasharray=`${p.toFixed(1)} ${(h+p).toFixed(1)}`;let g=O(.42,.56);window.AnimatedWeatherCardGsap.killTweensOf([r,o]),window.AnimatedWeatherCardGsap.set(r,{x:t,y:i,opacity:.85}),window.AnimatedWeatherCardGsap.timeline().fromTo(o,{strokeDashoffset:p,strokeWidth:1.6},{strokeDashoffset:-h,strokeWidth:.6,duration:g,ease:"power2.out"},0).to(r,{opacity:0,duration:g*.35,ease:"power1.in"},g*.65)}getRainColor(t){return this.rainConfig.isStorm?ni("lightning",t,"var(--weather-storm-rain-color)"):ni("rain",t,"var(--weather-rain-color)")}};var rc=36,Jt=[2,6],dr=[20,38],eo=10,ac=.6;function oc(a,e,t){return Math.max(6,Math.round(rc*a*Ee(e,t)))}function ur(a){return Math.min(2.2,Math.max(.3,a/yt.windSpeed))}var Ni=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="snow";this.layerSelector=".snow-layer";this.containerSelector=".snow-container";this.swings=[];this.realWindSpeed=r,this.snowConfig={accumulation:!0,accumulationHeight:12,swayAmplitude:15,fallSpeed:3,particleCount:40,...i},k(this.config.devMode,"SnowAnimation created with config:",this.snowConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start snow animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Snow layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=oc(i.snowCount,n.offsetWidth,n.offsetHeight),o="#ffffff",s=this.cardConfig.spill_particles!==!1,l=ur(i.windSpeed);this.snowConfig.accumulation&&this.createSnowAccumulation(),this.pool=new Qt(t,()=>this.createFlake(o),(c,d,m)=>this.fall(c,n,l,s,d,m)),this.pool.start(r).forEach(c=>this.addParticle(c)),k(this.config.devMode,`Snow animation started - ${r} flakes`)}createFlake(t){let i=O(Jt[0],Jt[1]),n=(i-Jt[0])/(Jt[1]-Jt[0]),r=document.createElement("div");r.className="snowflake",r.dataset.size=i.toFixed(2),r.style.cssText=`
            width: ${i.toFixed(2)}px;
            height: ${i.toFixed(2)}px;
            background: radial-gradient(circle closest-side, var(--weather-snow-color, ${t}) 45%, transparent 100%);
            top: 0;
            left: 0;
        `,r.dataset.opacity=(.45+.45*n).toFixed(2),window.AnimatedWeatherCardGsap.set(r,{transformOrigin:"50% -500%",rotation:-eo});let o=window.AnimatedWeatherCardGsap.to(r,{rotation:eo,duration:O(1.4,2.2),ease:"sine.inOut",yoyo:!0,repeat:-1});return o.progress(Math.random()),this.swings.push(o),r}fall(t,i,n,r,o,s){let l=i.offsetWidth,c=i.offsetHeight,d=parseFloat(t.dataset.size||"4"),m=(d-Jt[0])/(Jt[1]-Jt[0]),h=(dr[0]+(dr[1]-dr[0])*m)*O(.9,1.1),p=this.snowConfig.accumulation&&Math.random()<ac,g=-d*2,u=p?c-this.pileHeight()-d:r?c+O(60,120):c+d,f=u-g,w=Math.max(.5,f/h),y=f*O(.04,.13)*n,_=O(-y,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x:_,opacity:parseFloat(t.dataset.opacity||"0.7")});let b=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(b.fromTo(t,{y:g},{y:u,x:_+y,duration:w,ease:"none"}),p)b.call(()=>this.addToAccumulation(),[],w),b.to(t,{opacity:0,duration:.6,ease:"power1.out"},w);else if(r){let v=Math.min(w,(c-g)/h);b.to(t,{opacity:0,duration:Math.max(.1,w-v),ease:"power1.in"},v)}return ke(b,s)}async onStop(){this.swings.forEach(t=>t.kill()),this.swings=[],this.pool?.stop(),this.pool=void 0,this.accumulationElement&&this.accumulationElement.parentNode&&(window.AnimatedWeatherCardGsap?.killTweensOf(this.accumulationElement),this.accumulationElement.parentNode.removeChild(this.accumulationElement),this.accumulationElement=void 0),k(this.config.devMode,"Snow animation stopped")}async onPause(){this.pool?.pause(),this.swings.forEach(t=>t.pause()),k(this.config.devMode,"Snow animation paused")}async onResume(){this.pool?.resume(),this.swings.forEach(t=>t.resume()),k(this.config.devMode,"Snow animation resumed")}pileHeight(){return parseFloat(this.accumulationElement?.getAttribute("data-target-height")||"0")}createSnowAccumulation(){let t=this.element.querySelector(".animated-weather-card");if(!t)return;t.querySelectorAll('.snow-accumulation[data-modular="true"]').forEach(n=>n.remove());let i=Math.max(0,this.snowConfig.accumulationHeight);this.accumulationElement=document.createElement("div"),this.accumulationElement.className="snow-accumulation",this.accumulationElement.setAttribute("data-modular","true"),this.accumulationElement.style.cssText=`
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
        `,t.appendChild(this.accumulationElement)}addToAccumulation(){if(this.state!=="active")return;let t=this.accumulationElement,i=this.snowConfig.accumulationHeight;if(!t?.parentNode||i<=0)return;let n=this.pileHeight();if(n>=i)return;let r=Math.min(i,n+.8);t.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(t,{scaleY:r/i,opacity:Math.min(.9,r/i),duration:.3,ease:"power2.out"})}};var sc=30,io=[150,230],lc=.3,zi=6,Ii=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="sleet";this.layerSelector=".sleet-layer";this.containerSelector=".sleet-container";this.realWindSpeed=r,this.sleetConfig={particleCount:40,...i},k(this.config.devMode,"SleetAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start sleet animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Sleet layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card"),r=Math.max(6,Math.round(sc*i.snowCount*Ee(n.offsetWidth,n.offsetHeight))),o=this.cardConfig.spill_particles!==!1,s=ur(i.windSpeed)*.5;this.pool=new Qt(t,()=>{let l=O(1.5,3.5),c=document.createElement("div");return c.className="sleet-particle-gsap",c.dataset.size=l.toFixed(2),c.style.cssText=`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${l.toFixed(2)}px;
                    height: ${l.toFixed(2)}px;
                    background: #e8f4fd;
                    border-radius: 20%;
                    box-shadow: 0 0 2px rgba(200, 220, 255, 0.9);
                    pointer-events: none;
                `,c},(l,c,d)=>this.fall(l,n,s,o,c,d)),this.pool.start(r).forEach(l=>this.addParticle(l)),k(this.config.devMode,`Sleet animation started - ${r} pellets`)}fall(t,i,n,r,o,s){let l=i.offsetWidth,c=i.offsetHeight,d=parseFloat(t.dataset.size||"2"),m=O(io[0],io[1]),h=Math.random()<lc,p=-d*2,g=h?c-d:r?c+O(60,120):c+d,u=g-p,f=Math.max(.3,u/m),w=u*O(.03,.08)*n,y=O(-w,Math.max(1,l-d));window.AnimatedWeatherCardGsap.set(t,{x:y,opacity:O(.8,1),rotation:O(0,360)});let _=window.AnimatedWeatherCardGsap.timeline({onComplete:o});if(_.fromTo(t,{y:p},{y:g,x:y+w,duration:f,ease:"none"}),h)_.call(()=>this.addToPile(i),[],f),_.to(t,{opacity:0,duration:.3,ease:"power1.out"},f);else if(r){let b=Math.min(f,(c-p)/m);_.to(t,{opacity:0,duration:Math.max(.1,f-b),ease:"power1.in"},b)}return ke(_,s)}addToPile(t){if(this.state!=="active")return;let i=t.querySelector(".sleet-accumulation");i||(i=document.createElement("div"),i.className="sleet-accumulation",i.style.cssText=`
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: ${zi}px;
                background: linear-gradient(to top, #e8f4fd 0%, rgba(232,244,253,0.8) 60%, rgba(232,244,253,0.2) 100%);
                border-radius: 0 0 16px 16px;
                transform-origin: 50% 100%;
                transform: scaleY(0);
                z-index: 5;
                pointer-events: none;
            `,t.appendChild(i));let n=parseFloat(i.getAttribute("data-target-height")||"0");if(n>=zi)return;let r=Math.min(zi,n+.4);i.setAttribute("data-target-height",String(r)),window.AnimatedWeatherCardGsap.to(i,{scaleY:r/zi,duration:.3,ease:"power2.out"})}async onStop(){this.pool?.stop(),this.pool=void 0;let t=this.element.querySelector(".animated-weather-card");t&&t.querySelectorAll(".sleet-accumulation").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),k(this.config.devMode,"Sleet animation stopped")}async onPause(){this.pool?.pause(),k(this.config.devMode,"Sleet animation paused")}async onResume(){this.pool?.resume(),k(this.config.devMode,"Sleet animation resumed")}};function no(a,e,t,i){return t!==null&&t>0?a*Math.max(0,t-e):a*.6*i}var mr=[90,160];function ao(a,e,t,i,n,r=!0){let o=document.createElement("div");o.className="leaf-gsap";let s=i.offsetWidth,l=i.offsetHeight,c=20+Math.random()*Math.max(40,l-40),d=Math.random(),m=d<.25,h=d>.8&&c>100;o.style.position="absolute",o.style.borderRadius="0 100% 0 100%",o.style.transformOrigin="center",o.style.boxShadow="0 1px 3px rgba(0,0,0,0.3)";let p=(Math.random()*8+6)*t;o.style.width=o.style.height=p+"px";let g=["#27ae60","#2ecc71","#16a085","#f39c12","#e67e22","#e74c3c"];o.style.background=g[Math.floor(Math.random()*g.length)];let u=-p-10,f=s+(r?60+Math.random()*80:p+10),w=(mr[0]+Math.random()*(mr[1]-mr[0]))*Me(e.windSpeed)*(m?.6:1),y=(f-u)/w,_=Math.min(y,(s-u)/w),b=h?-(60+Math.random()*80):m?80+Math.random()*80:(Math.random()-.5)*80;window.AnimatedWeatherCardGsap.set(o,{x:u,y:c,rotation:Math.random()*360,opacity:0}),a.appendChild(o);let v=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),n&&n(o)}});return v.to(o,{opacity:.85,duration:.25,ease:"power1.out"},0).to(o,{x:f,duration:y,ease:"none"},0).to(o,{y:c+b,duration:y,ease:m?"sine.in":"sine.inOut"},0).to(o,{rotation:`+=${120+Math.random()*180}`,duration:y,ease:"none"},0),r&&y>_&&v.to(o,{opacity:0,duration:y-_,ease:"power1.in"},_),o}function oo(a,e,t,i,n,r){let o=document.createElement("div");o.className="wind-swoosh-gsap";let s=Math.random(),l=s>.6,c=s>.8;o.style.position="absolute",o.style.height=(c?2:1)*t+"px",o.style.borderRadius=l?"2px 1px":"1px",o.style.transformOrigin="left center",o.style.zIndex="10";let d=n.color_palette==="theme"?"var(--secondary-text-color)":"rgb(255, 255, 255)";o.style.background=`linear-gradient(90deg, transparent 0%, ${d} 50%, transparent 100%)`;let m=Math.max(15,(20+Math.random()*60)*t);o.style.width=m+"px";let h=i.offsetWidth,p=i.offsetHeight,g=p*.15+Math.random()*(p*.7);window.AnimatedWeatherCardGsap.set(o,{x:-m,y:g,rotation:l?-5+Math.random()*10:0,scaleX:.1,scaleY:1,opacity:0}),a.appendChild(o);let f=(h+m*2)/(cc*Me(e.windSpeed));return window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{o.parentNode&&o.parentNode.removeChild(o),r&&r(o)}}).to(o,{scaleX:1,opacity:c?.35:.22,duration:.3,ease:"power2.out"},0).to(o,{x:h+m,rotation:l?g>p/2?5:-5:0,duration:f,ease:"none"},0).to(o,{opacity:0,scaleX:.3,duration:Math.min(.5,f*.3)},f-Math.min(.5,f*.3)),o}var cc=230,dc=[{name:"background",speed:6,opacity:.26,scale:.7,blur:2.5},{name:"middle",speed:12,opacity:.5,scale:.9,blur:1.5},{name:"foreground",speed:22,opacity:.66,scale:1.2,blur:.75}];function Me(a){return Math.min(2.2,Math.max(.6,Math.sqrt(a/yt.windSpeed)))}var hc=12;function uc(a){let e=Math.round(70*a),t=Math.round(35*a);return{width:e,height:Math.round(26*a),puffs:[{x:Math.round(9*a),y:Math.round(-22*a),size:Math.round(44*a)},{x:e-Math.round(9*a)-t,y:Math.round(-13*a),size:t}]}}var so=a=>a>0?Math.ceil(a*3)+1:0,ro=new Map;function mc(a,e,t,i){let n=[a,e,t,i].join(","),r=ro.get(n);if(r)return r;let o=so(t),s=Math.ceil((a+2*o)*i),l=Math.ceil((e+2*o)*i),c=()=>{let p=document.createElement("canvas");return p.width=s,p.height=l,[p,p.getContext("2d")]},d=null,[m,h]=c();if(h){let[p,g,u]=[o*i,o*i,Math.min(50,a/2,e/2)*i],[f,w]=[p+a*i,g+e*i];if(h.fillStyle="#000",h.beginPath(),h.moveTo(p+u,g),h.arcTo(f,g,f,w,u),h.arcTo(f,w,p,w,u),h.arcTo(p,w,p,g,u),h.arcTo(p,g,f,g,u),h.closePath(),h.fill(),t>0){let[y,_]=c();_&&(_.shadowColor="#000",_.shadowBlur=2*t*i,_.shadowOffsetX=s,_.drawImage(m,-s,0),d=y.toDataURL())}else d=m.toDataURL()}return d&&ro.set(n,d),d}function ri(a){(a.closest?.(".clouds-container")??a).querySelectorAll(".cloud-track, .cloud-gsap, .cloud-occluder").forEach(t=>{window.AnimatedWeatherCardGsap?.killTweensOf(t),t.remove()})}function pc(a){return Math.min(1,Math.max(.5,a/160))||1}function lo(a,e,t,i,n){let r=i.offsetWidth,o=i.offsetHeight,s=dc,l=Me(e.windSpeed),c=[],d=t||e.cloudCount,m=pc(o);return s.forEach((h,p)=>{let g=Math.ceil(p===0||p===1?d*.4:d*.6);for(let u=1;u<=g;u++){let f=document.createElement("div");f.className=`cloud-gsap cloud-gsap-${h.name}-${u}`;let w=e.cloudBaseSize*h.scale,y=1+(u-1)*.15,_=Math.max(.3,Math.min(2.5,w))*y*m,b=uc(_);f.style.position="absolute",f.style.opacity=h.opacity.toString(),f.dataset.awcO=String(h.opacity),f.style.zIndex=(10+p).toString();let v=["var(--awc-cloud-far)","var(--awc-cloud-mid)","var(--awc-cloud-near)"][p],x=n?.color_palette==="theme"?0:h.blur,T=[{x:0,y:0,width:b.width,height:b.height},...b.puffs.map(G=>({x:G.x,y:G.y,width:G.size,height:G.size}))],A=Math.min(3,Math.max(1,window.devicePixelRatio||1)),C=T.map(G=>mc(G.width,G.height,x,A)),S=C.every(Boolean),E=S?so(x):0;if(f.style.width=b.width+"px",f.style.height=b.height+"px",S)f.classList.add("cloud-masked"),T.forEach((G,j)=>{let nt=document.createElement("div");nt.style.position="absolute",nt.style.left=G.x-E+"px",nt.style.top=G.y-E+"px",nt.style.width=G.width+2*E+"px",nt.style.height=G.height+2*E+"px",nt.style.background=v;for(let $t of["-webkit-",""])nt.style.setProperty(`${$t}mask-image`,`url("${C[j]}")`),nt.style.setProperty(`${$t}mask-size`,"100% 100%"),nt.style.setProperty(`${$t}mask-repeat`,"no-repeat");f.appendChild(nt)});else{f.style.borderRadius="50px",f.style.background=v,x>0&&(f.style.filter=`blur(${x}px)`);for(let G of b.puffs){let j=document.createElement("div");j.style.position="absolute",j.style.left=G.x+"px",j.style.top=G.y+"px",j.style.width=G.size+"px",j.style.height=G.size+"px",j.style.borderRadius="50px",j.style.background=v,f.appendChild(j)}}let M=b.width+2*E,H=([[10,25,40,15,30],[20,45,60,35,50],[5,35,55,25,45]][p][u-1]||15+p*10)/60,R=b.height+Math.max(E,Math.ceil(x*3))+2,F=Number(i.dataset?.cloudBand),I=Number.isFinite(F)&&i.dataset?.cloudBand!==void 0?F:null,lt=Math.max(150+p*50,M+hc),Ct=h.speed*l*(.9+Math.random()*.2),At=(r+2*lt)/Ct,U=document.createElement("div");U.className="cloud-track",U.dataset.awcF=String(H),U.dataset.awcB=String(R),U.appendChild(f),window.AnimatedWeatherCardGsap.set(f,{opacity:h.opacity});let kt=[U];if(n?.color_palette==="theme"){let G=a.parentElement?.querySelector(".clouds-occluders")??a.insertAdjacentElement("beforebegin",Object.assign(document.createElement("div"),{className:"clouds-occluders"})),j=f.cloneNode(!0);j.className="cloud-occluder",j.style.opacity="1";for(let $t of[j,...Array.from(j.querySelectorAll("div"))])$t.style.background&&($t.style.background="var(--awc-card-bg)");let nt=U.cloneNode(!1);nt.appendChild(j),G?.appendChild(nt),kt.push(nt)}let ht=kt.length>1?kt:U;window.AnimatedWeatherCardGsap.set(ht,{xPercent:0,x:-lt,y:no(H,R,I,o)}),a.appendChild(U);let Q=window.AnimatedWeatherCardGsap.timeline({repeat:-1,repeatDelay:Math.random()*1.5});Q.fromTo(ht,{xPercent:0,x:-lt},{xPercent:100,x:lt,duration:At,ease:"none"}),Q.progress(Math.random()),c.push(Q)}}),c}function co(a){let e=a.querySelector(".snow-accumulation");e&&(window.AnimatedWeatherCardGsap?window.AnimatedWeatherCardGsap.to(e,{height:"0px",duration:2,ease:"power2.out",onComplete:()=>{e.parentNode&&e.parentNode.removeChild(e)}}):e.parentNode?.removeChild(e))}function ho(a,e,t,i,n){let r=document.createElement("div");r.className=`fog-layer fog-layer-${t}`;let o=i.offsetWidth,s=i.offsetHeight,l=[{opacity:.1,scale:1.8,blur:8,speed:.3,height:80},{opacity:.15,scale:1.4,blur:4,speed:.5,height:60},{opacity:.12,scale:1,blur:2,speed:.8,height:40}],c=l[t]||l[2],d=n.custom_colors?.fog_color,m=(n.color_palette||"default")!=="theme"?ii(d)?d:"#e0e0e0":"var(--secondary-text-color)",h=3+Math.floor(Math.random()*3),p=o*c.scale;r.style.cssText=`
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
    `;for(let x=0;x<h;x++){let T=document.createElement("div"),A=p/h*(2+Math.random()*1.2),C=c.height*(1.2+Math.random()*1.6),S=p/h*x-A*.3,E=(Math.random()-.5)*(c.height*.5);T.style.cssText=`
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
        `,r.appendChild(T)}a.appendChild(r);let g=e.windSpeed*(.5+Math.random()*.5),u=15/c.speed,f=Math.max(8,u/g),w=o*c.scale,y=-w,_=o+w;window.AnimatedWeatherCardGsap.set(r,{x:y,opacity:c.opacity});let b=window.AnimatedWeatherCardGsap.timeline({repeat:-1,delay:t*2+Math.random()*3});b.to(r,{x:_,duration:f,ease:"none",onComplete:()=>{window.AnimatedWeatherCardGsap.set(r,{x:y})}});let v=window.AnimatedWeatherCardGsap.timeline({repeat:-1,yoyo:!0});return v.to(r,{opacity:c.opacity*.6,duration:3+Math.random()*4,ease:"sine.inOut"}),{movement:b,opacity:v}}function $i(a){a.querySelectorAll(".fog-layer").forEach(t=>{t.parentNode&&t.parentNode.removeChild(t)})}var fc=3,gc=2,uo=[900,1400],mo=[1800,2600],Gi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="wind";this.layerSelector=".wind-layer";this.containerSelector=".wind-container";this.leaves=new Set;this.swooshes=new Set;this.realWindSpeed=r,this.windConfig={leafCount:3,swooshEnabled:!0,...i},k(this.config.devMode,"WindAnimation created with config:",this.windConfig)}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start wind animation");if(!this.element.querySelector(this.layerSelector))throw new Error(`Wind layer not found: ${this.layerSelector}`);this.scheduleLeaf(O(150,500)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(300,900)),k(this.config.devMode,"Wind animation started successfully")}scheduleLeaf(t){let i=tt(this.cardConfig,this.realWindSpeed);this.leafTimer=setTimeout(()=>{if(this.state!=="active")return;let n=Math.max(1,Math.round(fc*i.leafCount));if(this.leaves.size<n){let r=ao(this.layer(),i,1,this.card(),o=>this.forget(o,this.leaves),this.cardConfig.spill_particles!==!1);this.leaves.add(r),this.addParticle(r)}this.scheduleLeaf(O(uo[0],uo[1])/Math.max(.5,i.leafCount))},t)}scheduleSwoosh(t){let i=tt(this.cardConfig,this.realWindSpeed);this.swooshTimer=setTimeout(()=>{if(this.state==="active"){if(this.swooshes.size<gc){let n=oo(this.layer(),i,1,this.card(),this.cardConfig,r=>this.forget(r,this.swooshes));this.swooshes.add(n),this.addParticle(n)}this.scheduleSwoosh(O(mo[0],mo[1]))}},t)}forget(t,i){i.delete(t),this.removeParticle(t)}layer(){return this.element.querySelector(this.layerSelector)}card(){return this.element.querySelector(".animated-weather-card")}clearTimers(){this.leafTimer&&clearTimeout(this.leafTimer),this.swooshTimer&&clearTimeout(this.swooshTimer),this.leafTimer=void 0,this.swooshTimer=void 0}async onStop(){this.clearTimers(),this.element.querySelector(this.layerSelector)?.querySelectorAll(".leaf-gsap, .wind-swoosh-gsap").forEach(i=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(i),i.remove()}),this.leaves.clear(),this.swooshes.clear(),k(this.config.devMode,"Wind animation stopped")}async onPause(){this.clearTimers(),Fi(this.layer()),k(this.config.devMode,"Wind animation paused")}async onResume(){Di(this.layer()),this.clearTimers(),this.scheduleLeaf(O(300,900)),this.windConfig.swooshEnabled&&this.scheduleSwoosh(O(600,1500)),k(this.config.devMode,"Wind animation resumed")}};var ai=[6e3,18e3],yc=[1500,6e3],po=.16,Bi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="lightning";this.layerSelector=".lightning";this.containerSelector=".lightning-container";this.realWindSpeed=r,this.lightningConfig={disableShake:n.disable_lightning_shake||!1,minInterval:ai[0],maxInterval:ai[1],...i},k(this.config.devMode,"LightningAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start lightning animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Lightning layer not found: ${this.layerSelector}`);t.style.opacity="0";let[i,n]=yc;this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},i+Math.random()*(n-i)),this.addTimeout(this.flashTimeout),k(this.config.devMode,"Lightning animation started")}flash(){if(!window.AnimatedWeatherCardGsap||this.state!=="active")return;let t=this.element.querySelector(this.layerSelector),i=this.element.querySelector(".animated-weather-card");if(!t||!i)return;let n=i.offsetWidth,r=i.offsetHeight,o=parseFloat(i.style.getPropertyValue("--scale-factor"))||1,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;";let l=document.createElementNS("http://www.w3.org/2000/svg","path"),c=30+Math.random()*(n-60),d=20*o,m=20,h=[c+",0"];for(let f=0;f<m;f++){let w=c+(Math.random()*d-d/2),y=r/m*(f+1);h.push(w+","+y)}l.setAttribute("d","M"+h.join(" L"));let p=this.element.timeOfDayManager,g=ni("lightning",p,"white");l.setAttribute("stroke",g),l.setAttribute("stroke-width",((2+Math.random()*2)*o).toString()),l.setAttribute("fill","none"),s.appendChild(l),t.appendChild(s);let u=window.AnimatedWeatherCardGsap.timeline({onComplete:()=>{s.parentNode&&s.parentNode.removeChild(s)}});if(this.flashTimeline=u,u.set(t,{opacity:.9},0).to(t,{opacity:.3,duration:.06,ease:"none"},0).to(t,{opacity:.8,duration:.04,ease:"none"},.06).to(t,{opacity:0,duration:.38,ease:"expo.out"},.1),!this.lightningConfig.disableShake){let f=-6*o;u.to(i,{y:f,duration:.06,ease:"power2.out"},po).to(i,{y:0,duration:.42,ease:"power3.out",clearProps:"transform"},po+.06)}}scheduleNext(){if(this.state!=="active")return;let t=this.lightningConfig.minInterval+Math.random()*(this.lightningConfig.maxInterval-this.lightningConfig.minInterval);this.flashTimeout=setTimeout(()=>{this.state==="active"&&(this.flash(),this.scheduleNext())},t),this.addTimeout(this.flashTimeout)}async onStop(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),this.flashTimeline?.kill(),this.flashTimeline=void 0;let t=this.element.querySelector(".animated-weather-card");t&&window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.set(t,{clearProps:"transform"});let i=this.element.querySelector(this.layerSelector);i&&(i.querySelectorAll("svg").forEach(r=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(r.querySelector("path")),r.parentNode&&r.parentNode.removeChild(r)}),i.style.opacity="0"),k(this.config.devMode,"Lightning animation stopped")}async onPause(){this.flashTimeout&&(clearTimeout(this.flashTimeout),this.flashTimeout=void 0),k(this.config.devMode,"Lightning animation paused")}async onResume(){this.scheduleNext(),k(this.config.devMode,"Lightning animation resumed")}};var wc=["dawn","day","dusk","night"],gr=["sunny","partly-cloudy","windy","cloudy","foggy","light-rain","rainy","pouring","stormy","snowy","snowy-rainy","sleety","snowy-stormy","sleety-stormy","clear-night"],_c={sunny:{top:[.445,.13,256],mid:[.495,.125,250],bottom:[.575,.11,238],glow:[.88,.08,218],glowAlpha:.45,overcast:0},"partly-cloudy":{top:[.445,.1,254],mid:[.495,.092,248],bottom:[.565,.08,240],glow:[.88,.07,220],glowAlpha:.36,overcast:.25},windy:{top:[.445,.115,244],mid:[.495,.105,236],bottom:[.565,.09,222],glow:[.95,.05,200],glowAlpha:.3,overcast:.1},cloudy:{top:[.43,.026,250],mid:[.475,.025,248],bottom:[.53,.024,244],glow:[.86,.016,250],glowAlpha:.28,overcast:.8},foggy:{top:[.44,.014,212],mid:[.48,.013,214],bottom:[.53,.012,218],glow:[.88,.01,210],glowAlpha:.3,overcast:.9},"light-rain":{top:[.42,.034,246],mid:[.48,.032,243],bottom:[.53,.03,238],glow:[.82,.02,246],glowAlpha:.22,overcast:.85},rainy:{top:[.37,.032,248],mid:[.43,.032,244],bottom:[.48,.03,240],glow:[.78,.02,246],glowAlpha:.18,overcast:.9},pouring:{top:[.3,.03,250],mid:[.36,.031,246],bottom:[.41,.03,242],glow:[.72,.02,248],glowAlpha:.14,overcast:1},stormy:{top:[.26,.032,280],mid:[.31,.034,272],bottom:[.36,.034,262],glow:[.7,.03,280],glowAlpha:.14,overcast:1},snowy:{top:[.45,.04,238],mid:[.495,.036,234],bottom:[.55,.03,228],glow:[.93,.02,230],glowAlpha:.32,overcast:.7},"snowy-rainy":{top:[.44,.036,240],mid:[.49,.033,236],bottom:[.54,.03,232],glow:[.86,.02,236],glowAlpha:.24,overcast:.85},sleety:{top:[.42,.042,258],mid:[.47,.04,252],bottom:[.52,.036,246],glow:[.84,.024,252],glowAlpha:.22,overcast:.85},"snowy-stormy":{top:[.3,.04,266],mid:[.35,.04,260],bottom:[.4,.038,252],glow:[.74,.026,260],glowAlpha:.14,overcast:1},"sleety-stormy":{top:[.28,.042,284],mid:[.33,.042,276],bottom:[.38,.04,266],glow:[.72,.03,280],glowAlpha:.14,overcast:1},"clear-night":{top:[.2,.045,272],mid:[.25,.052,266],bottom:[.31,.055,256],glow:[.86,.03,250],glowAlpha:.16,overcast:0}},yo=(a,e,t)=>Math.min(e,Math.max(a,t)),te=(a,e,t)=>a+(e-a)*t;function vc(a,e,t){let i=(e-a+540)%360-180;return(a+i*t+360)%360}function zt(a,e,t){let i=([u,f,w])=>[u,f*Math.cos(w*Math.PI/180),f*Math.sin(w*Math.PI/180)],[n,r,o]=i(a),[s,l,c]=i(e),d=te(n,s,t),m=te(r,l,t),h=te(o,c,t),p=Math.hypot(m,h),g=p<1e-6?a[2]:(Math.atan2(h,m)*180/Math.PI+360)%360;return[d,p,g]}function pr([a,e,t]){let i=t*Math.PI/180,n=e*Math.cos(i),r=e*Math.sin(i),o=(a+.3963377774*n+.2158037573*r)**3,s=(a-.1055613458*n-.0638541728*r)**3,l=(a-.0894841775*n-1.291485548*r)**3;return[4.0767416621*o-3.3077115913*s+.2309699292*l,-1.2684380046*o+2.6097574011*s-.3413193965*l,-.0041960863*o-.7034186147*s+1.707614701*l]}var bc=a=>a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055;function Mt(a){let e=i=>i.every(n=>n>=-1e-4&&n<=1.0001),t=pr(a);if(!e(t)){let i=0,n=a[1];for(let r=0;r<24;r++){let o=(i+n)/2;e(pr([a[0],o,a[2]]))?i=o:n=o}t=pr([a[0],i,a[2]])}return t.map(i=>bc(yo(0,1,i)))}var wo=a=>Math.round(yo(0,1,a)*255);function It(a){return"#"+a.map(e=>wo(e).toString(16).padStart(2,"0")).join("")}function fo(a,e){return`rgba(${a.map(wo).join(", ")}, ${Number(e.toFixed(3))})`}function fr(a,e){return[.15+(a[0]-.15)*.42,a[1]*te(.75,.5,e),vc(a[2],262,.45)]}function xc(a,e){let t=_c[a],i=1-t.overcast*.7,n={top:t.top,mid:t.mid,bottom:t.bottom,glow:t.glow,glowAlpha:t.glowAlpha,scrimAlpha:te(.46,.28,t.overcast)};if(a==="clear-night"){if(e==="dawn"||e==="dusk"){let r=e==="dawn"?[.4,.09,20]:[.38,.1,40];return{...n,bottom:zt(t.bottom,r,.45),glowAlpha:.2,scrimAlpha:.22}}return{...n,scrimAlpha:.2}}switch(e){case"night":return{top:fr(t.top,t.overcast),mid:fr(t.mid,t.overcast),bottom:fr(t.bottom,t.overcast),glow:[.86,.03,250],glowAlpha:te(.14,.06,t.overcast),scrimAlpha:.2};case"dusk":return{top:zt(t.top,[t.top[0]*.8,.075,292],.5*i),mid:zt(t.mid,[t.mid[0]*.88,.065,350],.42*i),bottom:zt(t.bottom,[t.bottom[0]*.92,.115,52],.72*i),glow:zt(t.glow,[.82,.13,58],i),glowAlpha:te(t.glowAlpha,.6,i*.6),scrimAlpha:n.scrimAlpha+.04};case"dawn":return{top:zt(t.top,[t.top[0]*.95,t.top[1]*.85,262],.4*i),mid:zt(t.mid,[t.mid[0]*.95,.05,330],.3*i),bottom:zt(t.bottom,[t.bottom[0]*.95,.085,32],.62*i),glow:zt(t.glow,[.88,.09,40],i),glowAlpha:te(t.glowAlpha,.5,i*.5),scrimAlpha:n.scrimAlpha+.04};default:return n}}function Sc(a){return[.16,Math.min(.04,a[1]*.6),a[2]]}function Pe(a,e){let t=xc(a,e);return{top:It(Mt(t.top)),mid:It(Mt(t.mid)),bottom:It(Mt(t.bottom)),glow:fo(Mt(t.glow),t.glowAlpha),scrim:fo(Mt(Sc(t.top)),t.scrimAlpha)}}var Le=[.985,.006,250],Vi=.8,_o=.55,vo=.4,qi={rx:.52,ry:.76,cx:.86,cy:.14,fade:.64},bo={rx:.4,ry:.64,cx:.86,cy:.1,fade:.64},xo={rx:.24,ry:.95,cx:.86,cy:.5,fade:.64};function Oe(a,e){let t=i=>`${Math.round(i*100)}%`;return`radial-gradient(${t(a.rx)} ${t(a.ry)} at ${t(a.cx)} ${t(a.cy)}, ${e}, transparent ${t(a.fade)})`}function So(){let a=[];for(let e of gr)for(let t of wc){let i=Pe(e,t),n=t==="day"?`.animated-weather-card.${e}`:`.animated-weather-card.${e}[data-phase="${t}"]`;a.push(`${n} { --awc-sky-top: ${i.top}; --awc-sky-mid: ${i.mid}; --awc-sky-bottom: ${i.bottom}; --awc-sky-glow: ${i.glow}; --awc-sky-scrim: ${i.scrim}; }`)}return a.join(`
`)}function Ui(a,e,t){return a==null||!Number.isFinite(a)?t?"day":"night":a<-6?"night":a<6?e?"dawn":"dusk":"day"}var ee=3.2,Fe="cubic-bezier(0.37, 0, 0.63, 1)",To={"--awc-sky-top":"#3b5f8c","--awc-sky-mid":"#4a6d99","--awc-sky-bottom":"#5a7ba3","--awc-sky-glow":"rgba(0, 0, 0, 0)","--awc-sky-scrim":"rgba(0, 0, 0, 0)","--weather-sun-primary":"#ffd67a","--weather-sun-secondary":"#ffb547","--weather-sun-glow":"rgba(255, 214, 140, 0.55)","--weather-sun-halo":"rgba(255, 214, 140, 0.24)","--awc-cloud-far":"rgba(214, 226, 242, 0.85)","--awc-cloud-mid":"rgba(232, 239, 248, 0.92)","--awc-cloud-near":"rgba(248, 250, 253, 0.96)"},Co=Object.keys(To),yr=Co.filter(a=>a.startsWith("--awc-sky-"));function Ao(){return Co.map(a=>`${a} ${ee}s ${Fe}`).join(`,
            `)}var go=!1;function Yi(){if(go)return;go=!0;let a=globalThis.CSS;if(a?.registerProperty)for(let[e,t]of Object.entries(To))try{a.registerProperty({name:e,syntax:"<color>",inherits:!0,initialValue:t})}catch{}}var wr=Array.from({length:25},(a,e)=>[e%5/2-1,Math.floor(e/5)/2-1]).filter(([a,e])=>a*a+e*e<=1),Tc=1.9,Cc=.6,Ki=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="clouds";this.layerSelector=".clouds-layer";this.containerSelector=".clouds-container";this.cloudTimelines=[];this.startWindFactor=1;this.sunLit=1;this.looks=null;this.realWindSpeed=r,this.cloudsConfig={cloudCount:3,isPartlyCloudy:!1,...i},k(this.config.devMode,"CloudsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start clouds animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Cloud layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");ri(t);let r=Math.min(6,Math.max(1,Math.round(i.cloudCount)));this.cloudsConfig.isPartlyCloudy&&(r=Math.max(1,Math.round(r*.6))),this.cloudTimelines=lo(t,i,r,n,this.cardConfig),this.startWindFactor=Me(i.windSpeed),this.looks?.kill(),this.looks=window.AnimatedWeatherCardGsap.timeline({repeat:-1,onRepeat:()=>this.veilSun()}),this.looks.to({},{duration:.12}),this.veilSun(!0),k(this.config.devMode,`Clouds animation started with ${r} clouds`)}async onStop(){this.cloudTimelines.forEach(i=>{window.AnimatedWeatherCardGsap?.killTweensOf(i),i&&typeof i.kill=="function"&&i.kill()}),this.cloudTimelines=[],this.looks?.kill(),this.looks=null;let t=this.element.querySelector(this.layerSelector);t&&ri(t),this.lightSun(1),this.element.querySelector(".animated-weather-card")?.removeAttribute("data-occlude"),k(this.config.devMode,"Clouds animation stopped")}async onPause(){this.cloudTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),this.looks?.pause(),k(this.config.devMode,"Clouds animation paused")}async onResume(){this.cloudTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),this.looks?.resume(),k(this.config.devMode,"Clouds animation resumed")}veilSun(t=!1){if(this.occlude()){this.lightSun(1,t);return}let i=this.element.querySelector(".sun-track .sun"),n=i?.getBoundingClientRect(),r=Array.from(this.element.querySelectorAll(".cloud-gsap")),o=y=>Number(y.dataset.awcO)||0;if(!i||!n?.width||getComputedStyle(i).opacity==="0"){r.forEach(y=>this.dense(y,o(y),t));return}let s=n.width/2,l=n.left+s,c=n.top+n.height/2,d=this.element.querySelector(this.containerSelector),m=d?parseFloat(getComputedStyle(d).opacity):1,h=Number.isFinite(m)?m:1,p=r.map(y=>Math.min(o(y),parseFloat(getComputedStyle(y).opacity)||0)*Cc*h),g=r.map(y=>[y,...Array.from(y.children)].map(_=>_.getBoundingClientRect()).filter(_=>_.width&&_.height)),u=(y,_,b)=>g[y].some(v=>{let x=Math.min(v.width,v.height)/2,T=_-Math.min(Math.max(_,v.left+x),v.right-x),A=b-Math.min(Math.max(b,v.top+x),v.bottom-x);return T*T+A*A<=x*x}),f=0,w=r.map(()=>0);for(let[y,_]of wr)f+=r.reduce((b,v,x)=>u(x,l+y*s,c+_*s)?b*(1-p[x]):b,1),r.forEach((b,v)=>{u(v,l+y*s*1.25,c+_*s*1.25)&&(w[v]+=1/wr.length)});this.lightSun(f/wr.length,t),r.forEach((y,_)=>this.dense(y,o(y)*(1+(Tc-1)*Math.min(1,w[_]*3)),t))}occlude(){let t=this.element.querySelector(".animated-weather-card");if(!t||this.cardConfig.color_palette!=="theme")return!1;let i=t.closest("ha-card"),n=i?getComputedStyle(i):null,r=!!n&&(n.backgroundImage||"none")==="none"&&!!n.backgroundColor&&!/rgba|\/|transparent/.test(n.backgroundColor);return r&&t.style.getPropertyValue("--awc-card-bg")!==n.backgroundColor&&t.style.setProperty("--awc-card-bg",n.backgroundColor),t.toggleAttribute("data-occlude",r),r}dense(t,i,n){let r=(Math.round(Math.min(.95,i)*100)/100).toString();t.dataset.awcV!==r&&(t.dataset.awcV=r,n?window.AnimatedWeatherCardGsap?.set(t,{opacity:r}):window.AnimatedWeatherCardGsap?.to(t,{opacity:r,duration:.5,ease:"sine.out",overwrite:"auto"}))}lightSun(t,i=!1){let n=this.element.querySelector(".sun-track"),r=Math.round(t*100)/100;!n||r===this.sunLit&&!i||(this.sunLit=r,i?window.AnimatedWeatherCardGsap?.set(n,{opacity:r}):window.AnimatedWeatherCardGsap?.to(n,{opacity:r,duration:.5,ease:"sine.out",overwrite:!0}))}onWindSpeedChange(){if(!window.AnimatedWeatherCardGsap)return;let t=tt(this.cardConfig,this.realWindSpeed),i=Me(t.windSpeed)/this.startWindFactor;this.cloudTimelines.forEach(n=>{window.AnimatedWeatherCardGsap.to(n,{timeScale:i,duration:ee,ease:"sine.inOut",overwrite:!0})})}};var ji=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="fog";this.layerSelector=".animation-layer";this.containerSelector=".fog-container";this.fogTimelines=[];this.realWindSpeed=r,this.fogConfig={layerCount:3,...i},k(this.config.devMode,"FogAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start fog animation");let t=this.element.querySelector(".fog-container")||this.element.querySelector(this.layerSelector);if(!t)throw new Error("Fog container not found");let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");$i(n),this.fogTimelines=[];for(let r=0;r<this.fogConfig.layerCount;r++){let o=ho(t,i,r,n,this.cardConfig);this.fogTimelines.push(o.movement),this.fogTimelines.push(o.opacity)}k(this.config.devMode,`Fog animation started with ${this.fogConfig.layerCount} layers`)}async onStop(){this.fogTimelines.forEach(n=>{n&&typeof n.kill=="function"&&n.kill()}),this.fogTimelines=[],this.element.querySelector(".animated-weather-card")?.querySelectorAll(".fog-layer")?.forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Fog animation stopped")}async onPause(){this.fogTimelines.forEach(t=>{t&&typeof t.pause=="function"&&t.pause()}),k(this.config.devMode,"Fog animation paused")}async onResume(){this.fogTimelines.forEach(t=>{t&&typeof t.resume=="function"&&t.resume()}),k(this.config.devMode,"Fog animation resumed")}};var Ac=5,ko=353,kc=1440,Ec=1/2,Mc=.25,Pc=.2,Lc=2,Oc=2;function _r(a,e){let t=e>0?Math.min(e,kc):ko;return Math.max(15,Math.round(a*Ac*Math.max(1,t/ko)))}var Eo=20,Mo=10,Fc=12,Po=(a,e)=>a.right>e.left-Eo&&a.left<e.right+Eo&&a.bottom>e.top-Mo&&a.top<e.bottom+Mo;function oi(a){let e=[],t=document.createRange();if(typeof t.getClientRects!="function")return e;let i=".animation-layer, .animation-container, style, script",n=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let r=n.nextNode();r;r=n.nextNode())if(!(!r.nodeValue?.trim()||r.parentElement?.closest(i))){t.selectNodeContents(r);for(let o of Array.from(t.getClientRects()))o.width&&o.height&&e.push(o)}for(let r of Array.from(a.querySelectorAll("svg, ha-icon"))){if(r.closest(i))continue;let o=r.getBoundingClientRect();o.width&&o.height&&e.push(o)}return e}function Dc(a,e){for(let t of a){let i=t.getBoundingClientRect();t.classList.toggle("awc-veiled",!!i.width&&e.some(n=>Po(i,n)))}}function Lo(a){let e=a.querySelectorAll(".stars-field .star-gsap");if(!e.length)return;let t=a.querySelector(".moon-gsap")?.getBoundingClientRect();Dc(e,t?.width?[...oi(a),t]:oi(a))}function vr(a,e,{moon:t,still:i=!1,words:n=[]}){let r=document.createElement("div");r.className="stars-field";let o=t?document.createElement("div"):null;if(o){o.className="moon-gsap",a.appendChild(o);let c=o.getBoundingClientRect();c.width&&c.height&&(n=[...n,c])}let s=a.getBoundingClientRect(),l=n.length>0&&s.width>0&&s.height>0;for(let c=0;c<e;c++){let d=document.createElement("div");d.className="star-gsap";let m=1+Math.random()*3,h=.3+Math.random()*.5,p=0,g=0,u=!1;for(let f=0;f<(l?Fc:1)&&!u;f++){p=Math.random()*100,g=Math.random()*70;let w=s.left+p/100*s.width,y=s.top+g/100*s.height;u=!l||!n.some(_=>Po({left:w,top:y,right:w+m,bottom:y+m},_))}if(u||d.classList.add("awc-veiled"),d.style.cssText=`
            width: ${m.toFixed(2)}px;
            height: ${m.toFixed(2)}px;
            left: ${p.toFixed(2)}%;
            top: ${g.toFixed(2)}%;
            opacity: ${h.toFixed(2)};
        `,!i&&Math.random()<Ec){let f=Lc+Math.random()*Oc;d.classList.add("twinkle"),d.style.setProperty("--star-o",h.toFixed(2)),d.style.setProperty("--star-dim",(h*(Mc+Math.random()*Pc)).toFixed(2)),d.style.animationDuration=`${f.toFixed(2)}s`,d.style.animationDelay=`${(-Math.random()*f).toFixed(2)}s`}r.appendChild(d)}return o?a.insertBefore(r,o):a.appendChild(r),o?[r,o]:[r]}var Xi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="stars";this.layerSelector=".animation-layer";this.containerSelector=".stars-container";this.realWindSpeed=r,this.starsConfig={starCount:30,showMoon:!0,...i},k(this.config.devMode,"StarsAnimation created")}async onStart(){if(!window.AnimatedWeatherCardGsap)throw new Error("GSAP not loaded - cannot start stars animation");let t=this.element.querySelector(this.layerSelector);if(!t)throw new Error(`Animation layer not found: ${this.layerSelector}`);let i=tt(this.cardConfig,this.realWindSpeed),n=this.element.querySelector(".animated-weather-card");n?.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(o=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(o),o.remove()});let r=_r(i.cloudCount,t.clientWidth||n?.clientWidth||0);for(let o of vr(t,r,{moon:this.starsConfig.showMoon,words:n?oi(n):[]}))this.addParticle(o),window.AnimatedWeatherCardGsap.fromTo(o,{opacity:0},{opacity:1,duration:1.2,ease:"power1.out"});k(this.config.devMode,`Stars animation started with ${r} stars`)}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&t.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(n=>{window.AnimatedWeatherCardGsap&&window.AnimatedWeatherCardGsap.killTweensOf(n),n.parentNode&&n.parentNode.removeChild(n)}),k(this.config.devMode,"Stars animation stopped")}setPaused(t){this.element.querySelectorAll(`${this.layerSelector} .stars-field, ${this.layerSelector} .moon-gsap`).forEach(i=>i.classList.toggle("paused",t))}async onPause(){this.setPaused(!0),k(this.config.devMode,"Stars animation paused")}async onResume(){this.setPaused(!1),k(this.config.devMode,"Stars animation resumed")}};var Zi=class extends Z{constructor(t,i,n,r){super(t,i,n);this.animationType="sun";this.layerSelector=".sun";this.containerSelector=".sun-container";k(this.config.devMode,"SunAnimation created")}async onStart(){let t=this.element.querySelector(this.layerSelector);if(!t){k(this.config.devMode,"Sun element not found \u2014 CSS sun handles rendering");return}t.style.opacity="1",k(this.config.devMode,"Sun animation started (CSS-driven)")}async onStop(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.opacity="0"),k(this.config.devMode,"Sun animation stopped")}async onPause(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="paused"),k(this.config.devMode,"Sun animation paused")}async onResume(){let t=this.element.querySelector(this.layerSelector);t&&(t.style.animationPlayState="running"),k(this.config.devMode,"Sun animation resumed")}};var Qi=class{constructor(e,t,i,n){this.activeAnimations=new Map;this.element=e,this.config=t,this.timeOfDayManager=i,this.realWindSpeed=n}async startModularAnimation(e,t){this.activeAnimations.has(e)&&await this.stopModularAnimation(e);try{let i={intensity:t,scale:1,windSpeed:this.realWindSpeed||10,timeOfDay:this.timeOfDayManager?.getCurrentState()?.timePhase||"day",devMode:this.config.dev_mode||!1},n=null;switch(e){case"rain":n=new Ri(this.element,{...i,isStorm:t>=2&&t<=4,isPouring:t>4,isLightRain:t<1,particleCount:Math.floor(t*50),splashEnabled:!0},this.config,this.realWindSpeed);break;case"snow":n=new Ni(this.element,{...i,particleCount:Math.floor(t*30),accumulation:!0,accumulationHeight:0,swayAmplitude:30,fallSpeed:1},this.config,this.realWindSpeed);break;case"sleet":n=new Ii(this.element,{...i,particleCount:Math.floor(t*40)},this.config,this.realWindSpeed);break;case"wind":n=new Gi(this.element,{...i,leafCount:Math.max(1,Math.floor(t*3)),swooshEnabled:!0},this.config,this.realWindSpeed);break;case"lightning":n=new Bi(this.element,{...i,disableShake:this.config.disable_lightning_shake||!1,minInterval:ai[0],maxInterval:ai[1]},this.config,this.realWindSpeed);break;case"clouds":n=new Ki(this.element,{...i,cloudCount:Math.max(1,Math.floor(t*2)),isPartlyCloudy:t<3},this.config,this.realWindSpeed);break;case"fog":n=new ji(this.element,{...i,layerCount:Math.max(2,Math.min(5,Math.floor(t)))},this.config,this.realWindSpeed);break;case"stars":n=new Xi(this.element,{...i,starCount:Math.max(15,Math.floor(t*10)),showMoon:!0},this.config,this.realWindSpeed);break;case"sun":n=new Zi(this.element,i,this.config);break;default:return k(this.config.dev_mode,`No modular animation registered for type: ${e}`),null}return await n.start(),this.activeAnimations.set(e,n),k(this.config.dev_mode,`Started modular ${e} animation with intensity ${t}`),n}catch(i){return console.error(`Failed to start modular ${e} animation:`,i),null}}async stopModularAnimation(e){let t=this.activeAnimations.get(e);if(t)try{await t.destroy(),k(this.config.dev_mode,`Stopped modular ${e} animation`)}catch(i){console.error(`Error stopping modular ${e} animation:`,i)}finally{this.activeAnimations.delete(e)}}async pauseModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isActive())try{await t.pause()}catch(i){console.error(`Error pausing modular ${e} animation:`,i)}}async resumeModularAnimation(e){let t=this.activeAnimations.get(e);if(t&&t.isPaused())try{await t.resume()}catch(i){console.error(`Error resuming modular ${e} animation:`,i)}}updateWindSpeed(e){if(!Object.is(e,this.realWindSpeed)){this.realWindSpeed=e;for(let[t,i]of this.activeAnimations)try{i.setWindSpeed(e)}catch(n){console.warn(`Failed to update wind speed for ${t}:`,n)}}}async cleanup(){let e=Array.from(this.activeAnimations.keys()).map(t=>this.stopModularAnimation(t));await Promise.all(e),this.activeAnimations.clear()}};var De=class{constructor(e,t,i,n){this.currentWindSpeed=10;this.generation=0;this.animations={rain:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},snow:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sleet:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},wind:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},lightning:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},clouds:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},fog:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},stars:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]},sun:{isActive:!1,isPaused:!1,intensity:1,animationHandles:[],timeouts:[]}};this.defaultWeatherMappings={sunny:{animations:["sun"]},rainy:{animations:["rain"]},snowy:{animations:["snow"]},stormy:{animations:["rain","lightning"],overrides:{rain:{intensity:2}}},windy:{animations:["wind"]},cloudy:{animations:["clouds"]},foggy:{animations:["fog"]},"partly-cloudy":{animations:["sun","clouds"],overrides:{sun:{intensity:.7},clouds:{intensity:.6}}},pouring:{animations:["rain"],overrides:{rain:{intensity:8}}},"snowy-rainy":{animations:["snow","rain"]},"clear-night":{animations:["stars"]},sleety:{animations:["sleet"]},"snowy-stormy":{animations:["snow","lightning"]},"light-rain":{animations:["rain"],overrides:{rain:{intensity:.3}}},"sleety-stormy":{animations:["sleet","lightning"]}};this.element=e,this.config=t,this.isPausedFn=i,this.timeOfDayManager=n,this.modularBridge=new Qi(e,t,n,this.currentWindSpeed),k(this.config.dev_mode,"WeatherAnimationController initialized")}setWindSpeed(e){this.currentWindSpeed=e,this.modularBridge.updateWindSpeed(e)}async startAnimation(e,t){let i=this.animations[e];if(i.isActive){k(this.config.dev_mode,`Animation ${e} already active \u2014 skipping`);return}let n=t?.intensity??i.intensity??1,r=this.generation;i.isActive=!0,i.intensity=n,this.setAnimationLayerVisibility(e,!0);try{let o=await this.modularBridge.startModularAnimation(e,n);if(r!==this.generation){k(this.config.dev_mode,`Discarding stale start for ${e} (generation drifted)`),await this.modularBridge.stopModularAnimation(e);return}if(!o){i.isActive=!1,console.warn(`No modular animation available for type: ${e}`);return}k(this.config.dev_mode,`Started ${e} animation with intensity ${n}`)}catch(o){console.error(`Failed to start ${e} animation:`,o),i.isActive=!1}}async stopAnimation(e){let t=this.animations[e];if(t.isActive){this.generation++;try{await this.modularBridge.stopModularAnimation(e),k(this.config.dev_mode,`Stopped ${e} animation`)}catch(i){console.error(`Error stopping ${e} animation:`,i)}this.setAnimationLayerVisibility(e,!1),t.isActive=!1,t.isPaused=!1}}pauseAnimation(e){let t=this.animations[e];!t.isActive||t.isPaused||(t.isPaused=!0,this.modularBridge.pauseModularAnimation(e),k(this.config.dev_mode,`Paused ${e} animation`))}resumeAnimation(e){let t=this.animations[e];!t.isActive||!t.isPaused||(t.isPaused=!1,this.modularBridge.resumeModularAnimation(e),k(this.config.dev_mode,`Resumed ${e} animation`))}async stopAllAnimations(){this.generation++,await Promise.all(Object.keys(this.animations).map(e=>this.stopAnimation(e)))}pauseAllAnimations(){Object.keys(this.animations).forEach(e=>this.pauseAnimation(e))}resumeAllAnimations(){Object.keys(this.animations).forEach(e=>this.resumeAnimation(e))}async applyWeatherCondition(e){await this.stopAllAnimations(),this.clearIndividualAnimationClasses();let t=this.defaultWeatherMappings[e.toLowerCase()];if(!t){console.warn(`No animation mapping for weather condition: ${e}`);return}await Promise.all(t.animations.map(i=>{let n=t.overrides?.[i];return this.startAnimation(i,n)})),k(this.config.dev_mode,`Applied weather condition: ${e} with animations: ${t.animations.join(", ")}`)}getAnimationStates(){return{...this.animations}}getWeatherMappings(){return this.defaultWeatherMappings}setAnimationLayerVisibility(e,t){let i=this.element.querySelector(".animated-weather-card");if(!i)return;let n=`individual-${e}-active`;t?i.classList.add(n):i.classList.remove(n)}clearIndividualAnimationClasses(){let e=this.element.querySelector(".animated-weather-card");if(e)for(let t of Object.keys(this.animations))e.classList.remove(`individual-${t}-active`)}};var Ji=new Map,br=new Set;function xr(a,e,t){let i=Ji.get(a);if(!e){i&&(Ji.delete(a),Oo());return}let n={entity:e,sun:t||"sun.sun"};i&&i.entity===n.entity&&i.sun===n.sun||(Ji.set(a,n),Oo())}function Fo(a){if(a){for(let e of Ji.values())if(e.sun===a)return e.entity}}function Do(a){return br.add(a),()=>{br.delete(a)}}function Oo(){for(let a of[...br])a()}var tn=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:Number(a);return Number.isFinite(e)?e:null},ie=a=>typeof a=="string"?a.trim():"";function Wc(a){if(!a||typeof a!="object")return null;let e=a,t=typeof e.id=="number"?String(e.id):ie(e.id);return t?{id:t,label:ie(e.flight_number)||ie(e.callsign),aircraftCode:ie(e.aircraft_code),originCity:ie(e.airport_origin_city),originCode:ie(e.airport_origin_code_iata),destinationCity:ie(e.airport_destination_city),destinationCode:ie(e.airport_destination_code_iata),altitudeFt:tn(e.altitude),groundSpeedKt:tn(e.ground_speed),heading:tn(e.heading),verticalSpeed:tn(e.vertical_speed),onGround:e.on_ground===1||e.on_ground===!0||e.on_ground==="1"}:null}function Sr(a,e){if(!a||!e)return null;let t=a.states[e];if(!t||t.state==="unavailable"||t.state==="unknown")return null;let i=t.attributes?.flights;if(!Array.isArray(i))return[];let n=[];for(let r of i){let o=Wc(r);o&&n.push(o)}return n}var en=class{constructor(){this.known=null}get seeded(){return this.known!==null}update(e,t=!1){if(!e)return[];let i=e.filter(s=>!s.onGround),n=new Set(i.map(s=>s.id));if(this.known===null)return this.known=n,t?i.filter((s,l)=>i.findIndex(c=>c.id===s.id)===l):[];let r=[],o=new Set;for(let s of i)this.known.has(s.id)||o.has(s.id)||(o.add(s.id),r.push(s));return this.known=n,r}reset(){this.known=null}};var nn=class{constructor(e={}){this.listeners=new Set;this.config={enableDayNightCycle:e.enableDayNightCycle??!1,sunriseHour:6,sunsetHour:20,useBrowserTime:!0,...e},this.updateState(),this.config.enableDayNightCycle&&this.startAutoUpdate()}getCurrentState(){return this.currentState||this.updateState(),this.currentState}isEnabled(){return this.config.enableDayNightCycle||!1}updateConfig(e){let t=this.config.enableDayNightCycle;this.config={...this.config,...e},this.updateState(),this.config.enableDayNightCycle&&!t?this.startAutoUpdate():!this.config.enableDayNightCycle&&t&&this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}addListener(e){this.listeners.add(e)}removeListener(e){this.listeners.delete(e)}getTimeAwareColor(e){let t=this.getCurrentState();if(!this.isEnabled())return e.day;switch(t.timePhase){case"dawn":return e.dawn||this.blendColors(e.night,e.day,.3);case"day":return e.day;case"dusk":return e.dusk||this.blendColors(e.day,e.night,.3);case"night":return e.night;default:return e.day}}setDevOverride(e){this.devTimePhaseOverride=e,this.updateState()}clearDevOverride(){this.devTimePhaseOverride=void 0,this.updateState()}destroy(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0),this.listeners.clear()}updateState(){let e=new Date,t,i;if(!this.config.useBrowserTime&&this.config.timeZone){let s=new Intl.DateTimeFormat("en-US",{timeZone:this.config.timeZone,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(e);t=parseInt(s.find(l=>l.type==="hour")?.value||"0",10),i=parseInt(s.find(l=>l.type==="minute")?.value||"0",10)}else t=e.getHours(),i=e.getMinutes();let n=t+i/60,r;if(this.devTimePhaseOverride)r=this.devTimePhaseOverride;else{let s=this.config.sunriseHour,l=this.config.sunsetHour,c=(s-1+24)%24,d=(s+.5)%24,m=(l-.5+24)%24,h=(l+1)%24,p=(g,u,f)=>u<=f?g>=u&&g<f:g>=u||g<f;p(n,c,d)?r="dawn":p(n,d,m)?r="day":p(n,m,h)?r="dusk":r="night"}let o={isDaytime:r==="day"||r==="dawn",isNighttime:r==="night"||r==="dusk",isDawn:r==="dawn",isDusk:r==="dusk",currentHour:t,timePhase:r};!this.currentState||this.currentState.timePhase!==o.timePhase?(this.currentState=o,this.notifyListeners(o)):this.currentState=o}startAutoUpdate(){this.updateInterval=window.setInterval(()=>{this.updateState()},Ka.UPDATE_INTERVAL)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(i){console.error("TimeOfDayManager: Error in listener callback:",i)}})}blendColors(e,t,i){let n=e.replace("#",""),r=t.replace("#",""),o=parseInt(n.substring(0,2),16),s=parseInt(n.substring(2,4),16),l=parseInt(n.substring(4,6),16),c=parseInt(r.substring(0,2),16),d=parseInt(r.substring(2,4),16),m=parseInt(r.substring(4,6),16),h=Math.round(o*(1-i)+c*i),p=Math.round(s*(1-i)+d*i),g=Math.round(l*(1-i)+m*i),u=h.toString(16).padStart(2,"0"),f=p.toString(16).padStart(2,"0"),w=g.toString(16).padStart(2,"0");return`#${u}${f}${w}`}};var Tr=a=>`
        ${a} ha-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: var(--mdc-icon-size, 24px);
          height: var(--mdc-icon-size, 24px);
          vertical-align: middle;
        }
`;var Hc=So(),Rc=It(Mt(Le)),Wo=a=>`${Math.round(a*100)}%`,Nc=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,zc=48,Ic={low:"#84ef8a",moderate:"#f2db49",high:"#ffd1a9",very_high:"#ffcdc8",extreme:"#e5d0ff"},Cr=()=>`
${Tr("animated-weather-card")}
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
          --awc-secondary: ${Vi};

          /* Public color hooks (also set by custom_colors) */
          --weather-text-color: ${Rc};
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
            ${Ao()};
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
        ${Hc}

        .sky {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          --awc-sky-glow-layer: ${Oe(qi,"var(--awc-sky-glow)")};
          --awc-sky-layers:
            var(--awc-sky-glow-layer),
            linear-gradient(180deg, transparent ${Wo(vo)}, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) ${Wo(_o)}, var(--awc-sky-bottom) 100%);
          background: var(--awc-sky-override, var(--awc-sky-layers));
        }
        /* Wide cards put the metrics in the right column: keep the glow above them */
        @container awc (min-width: 640px) {
          .sky { --awc-sky-glow-layer: ${Oe(bo,"var(--awc-sky-glow)")}; }
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
        ${Object.entries(Ic).map(([a,e])=>`.animated-weather-card:not(.theme-colors) .attribute[data-kind="uv"][data-level="${a}"] .attribute-icon { color: ${e}; }`).join(`
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
          --awc-sky-glow-layer: ${Oe(xo,"var(--awc-sky-glow)")};
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
          --awc-cloud-overhang: ${zc}px;
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
          transition: opacity ${ee/2}s ${Fe};
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
          transition: transform ${ee}s ${Fe};
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

`;var Ar={feels_like:"F\xF8les som",indoors:"Inne",sunrise:"Soloppgang",sunset:"Solnedgang",solar_noon:"Solens h\xF8ydepunkt",daylight:"Dagslengde",first_light:"Morgengry",last_light:"Kveldsskumring",moon:"M\xE5ne",in_duration:"om {duration}",note_reading:"Leser v\xE6rmeldingen",note_writing:"Skriver notatet",uv_index:"UV-indeks",uv_low:"Lav",uv_moderate:"Moderat",uv_high:"H\xF8y",uv_very_high:"Sv\xE6rt h\xF8y",uv_extreme:"Ekstrem"},$c={en:{feels_like:"Feels like",indoors:"Indoors",sunrise:"Sunrise",sunset:"Sunset",solar_noon:"Solar noon",daylight:"Daylight",first_light:"First light",last_light:"Last light",moon:"Moon",in_duration:"in {duration}",note_reading:"Reading the forecast",note_writing:"Writing the note",uv_index:"UV index",uv_low:"Low",uv_moderate:"Moderate",uv_high:"High",uv_very_high:"Very high",uv_extreme:"Extreme"},de:{feels_like:"Gef\xFChlt",indoors:"Innen",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang",solar_noon:"Sonnenh\xF6chststand",daylight:"Tagesl\xE4nge",first_light:"Morgend\xE4mmerung",last_light:"Abendd\xE4mmerung",moon:"Mond",in_duration:"in {duration}",note_reading:"Vorhersage wird gelesen",note_writing:"Notiz wird geschrieben",uv_index:"UV-Index",uv_low:"Niedrig",uv_moderate:"M\xE4\xDFig",uv_high:"Hoch",uv_very_high:"Sehr hoch",uv_extreme:"Extrem"},es:{feels_like:"Sensaci\xF3n t\xE9rmica",indoors:"Interior",sunrise:"Salida del sol",sunset:"Puesta del sol",solar_noon:"Mediod\xEDa solar",daylight:"Duraci\xF3n del d\xEDa",first_light:"Alba",last_light:"Anochecer",moon:"Luna",in_duration:"en {duration}",note_reading:"Leyendo el pron\xF3stico",note_writing:"Escribiendo la nota",uv_index:"\xCDndice UV",uv_low:"Bajo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muy alto",uv_extreme:"Extremo"},fr:{feels_like:"Ressenti",indoors:"Int\xE9rieur",sunrise:"Lever du soleil",sunset:"Coucher du soleil",solar_noon:"Midi solaire",daylight:"Dur\xE9e du jour",first_light:"Aube",last_light:"Cr\xE9puscule",moon:"Lune",in_duration:"dans {duration}",note_reading:"Lecture des pr\xE9visions",note_writing:"R\xE9daction de la note",uv_index:"Indice UV",uv_low:"Faible",uv_moderate:"Mod\xE9r\xE9",uv_high:"\xC9lev\xE9",uv_very_high:"Tr\xE8s \xE9lev\xE9",uv_extreme:"Extr\xEAme"},it:{feels_like:"Percepita",indoors:"Interno",sunrise:"Alba",sunset:"Tramonto",solar_noon:"Mezzogiorno solare",daylight:"Durata del giorno",first_light:"Prima luce",last_light:"Ultima luce",moon:"Luna",in_duration:"tra {duration}",note_reading:"Lettura delle previsioni",note_writing:"Scrittura della nota",uv_index:"Indice UV",uv_low:"Basso",uv_moderate:"Moderato",uv_high:"Alto",uv_very_high:"Molto alto",uv_extreme:"Estremo"},nl:{feels_like:"Voelt als",indoors:"Binnen",sunrise:"Zonsopkomst",sunset:"Zonsondergang",solar_noon:"Zonnemiddag",daylight:"Daglengte",first_light:"Ochtendschemering",last_light:"Avondschemering",moon:"Maan",in_duration:"over {duration}",note_reading:"Verwachting lezen",note_writing:"Notitie schrijven",uv_index:"UV-index",uv_low:"Laag",uv_moderate:"Matig",uv_high:"Hoog",uv_very_high:"Zeer hoog",uv_extreme:"Extreem"},pl:{feels_like:"Odczuwalna",indoors:"Wewn\u0105trz",sunrise:"Wsch\xF3d s\u0142o\u0144ca",sunset:"Zach\xF3d s\u0142o\u0144ca",solar_noon:"Po\u0142udnie s\u0142oneczne",daylight:"D\u0142ugo\u015B\u0107 dnia",first_light:"\u015Awit",last_light:"Zmierzch",moon:"Ksi\u0119\u017Cyc",in_duration:"za {duration}",note_reading:"Czytanie prognozy",note_writing:"Pisanie notatki",uv_index:"Indeks UV",uv_low:"Niski",uv_moderate:"Umiarkowany",uv_high:"Wysoki",uv_very_high:"Bardzo wysoki",uv_extreme:"Ekstremalny"},pt:{feels_like:"Sensa\xE7\xE3o t\xE9rmica",indoors:"Interior",sunrise:"Nascer do sol",sunset:"P\xF4r do sol",solar_noon:"Meio-dia solar",daylight:"Dura\xE7\xE3o do dia",first_light:"Aurora",last_light:"Crep\xFAsculo",moon:"Lua",in_duration:"em {duration}",note_reading:"Leitura da previs\xE3o",note_writing:"Escrita da nota",uv_index:"\xCDndice UV",uv_low:"Baixo",uv_moderate:"Moderado",uv_high:"Alto",uv_very_high:"Muito alto",uv_extreme:"Extremo"},ro:{feels_like:"Resim\u021Bit\u0103",indoors:"Interior",sunrise:"R\u0103s\u0103rit",sunset:"Apus",solar_noon:"Amiaza solar\u0103",daylight:"Durata zilei",first_light:"Zori",last_light:"Amurg",moon:"Lun\u0103",in_duration:"\xEEn {duration}",note_reading:"Citesc prognoza",note_writing:"Scriu nota",uv_index:"Indice UV",uv_low:"Sc\u0103zut",uv_moderate:"Moderat",uv_high:"Ridicat",uv_very_high:"Foarte ridicat",uv_extreme:"Extrem"},nb:Ar,no:Ar,nn:Ar,uk:{feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",indoors:"\u0423 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u0456",sunrise:"\u0421\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",sunset:"\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F",solar_noon:"\u0421\u043E\u043D\u044F\u0447\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",daylight:"\u0422\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0434\u043D\u044F",first_light:"\u0421\u0432\u0456\u0442\u0430\u043D\u043E\u043A",last_light:"\u0412\u0435\u0447\u0456\u0440\u043D\u0456 \u0441\u0443\u0442\u0456\u043D\u043A\u0438",moon:"\u041C\u0456\u0441\u044F\u0446\u044C",in_duration:"\u0447\u0435\u0440\u0435\u0437 {duration}",note_reading:"\u0410\u043D\u0430\u043B\u0456\u0437 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0443",note_writing:"\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",uv_index:"\u0423\u0424-\u0456\u043D\u0434\u0435\u043A\u0441",uv_low:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439",uv_moderate:"\u041F\u043E\u043C\u0456\u0440\u043D\u0438\u0439",uv_high:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439",uv_very_high:"\u0414\u0443\u0436\u0435 \u0432\u0438\u0441\u043E\u043A\u0438\u0439",uv_extreme:"\u0415\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0438\u0439"}};function si(a){return a?.locale?.language||a?.language||"en"}function We(a){return`${si(a)}|${a?.locale?.time_format??""}|${kr(a)??""}`}function kr(a){if(a?.locale?.time_zone!=="server")return;let e=a.config?.time_zone;if(e)try{return new Intl.DateTimeFormat("en",{timeZone:e}),e}catch{return}}function st(a,e,t={}){return Gc($c,a,e,t)}function Gc(a,e,t,i={}){let n=si(e).toLowerCase();return(a[n]?.[t]??a[n.split("-")[0]]?.[t]??a.en[t]).replace(/\{(\w+)\}/g,(o,s)=>i[s]??"")}function Bc(a){let e=a?.locale;if(!e?.time_format)return;if(e.time_format==="12")return!0;if(e.time_format==="24")return!1;let t=e.time_format==="language"?si(a):void 0;try{return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}catch{return}}function pe(a,e){if(!a)return"--";let t=new Date(a);if(isNaN(t.getTime()))return"--";try{return Ho(e,{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function Ho(a,e){let t=Bc(a),i={...e,timeZone:kr(a)};return t!==void 0&&(i.hourCycle=t?"h12":"h23"),new Intl.DateTimeFormat(a?si(a):void 0,i)}function Ro(a,e){try{let t=Ho(e,{hour:"numeric",minute:"2-digit"}).formatToParts(a),i=t.filter(r=>r.type==="dayPeriod").map(r=>r.value).join("");return{time:t.filter(r=>r.type!=="dayPeriod").map(r=>r.value).join("").trim(),period:i}}catch{return{time:a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),period:""}}}function Er(a,e){try{let t=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23",timeZone:kr(e)}).formatToParts(a),i=n=>Number(t.find(r=>r.type===n)?.value??0);return i("hour")+i("minute")/60+i("second")/3600}catch{return a.getHours()+a.getMinutes()/60+a.getSeconds()/3600}}function Mr(a,e){let t=Math.round(Math.abs(a)*60),i=Math.floor(t/60),n=t%60,r=si(e),o=Intl.DurationFormat;if(o&&e)try{return new o(r,{style:"narrow"}).format(i>0?{hours:i,minutes:n}:{minutes:n})}catch{}return r.toLowerCase().split("-")[0]==="uk"?i>0?`${i}\xA0\u0433\u043E\u0434 ${n}\xA0\u0445\u0432`:`${n}\xA0\u0445\u0432`:i>0?`${i}h ${n}m`:`${n}m`}function li(a,e){let t=a.match(/^(.*?)\s?([AaPp]\.?\s?[Mm]\.?)$/);return t?`${P(t[1])}<span class="${e}">${P(t[2])}</span>`:P(a)}var No=["humidity","wind","pressure","sun","uv"],zo=["humidity","wind","pressure","sun"];function Pr(a){let e=a.metrics,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t)return[...zo];let i=[];for(let n of t){let r=String(n).trim().toLowerCase();No.includes(r)&&!i.includes(r)&&i.push(r)}return i}var rn=[3,6,8,11],Io=["low","moderate","high","very_high","extreme"];function ci(a){let e=a.uv_levels,t=Array.isArray(e)?e:typeof e=="string"?e.split(","):null;if(!t||t.length!==4)return rn;let i=t.map(n=>typeof n=="number"?n:parseFloat(String(n)));return i.every((n,r)=>isFinite(n)&&(r===0||n>i[r-1]))?i:rn}function di(a,e=rn){let t=Math.round(a),i=0;for(;i<4&&t>=e[i];)i++;return Io[i]}var Vc={"clear-night":"Clear, night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Lightning, rainy",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snowy, rainy",sunny:"Sunny",windy:"Windy","windy-variant":"Windy, cloudy"};function qc(a,e){try{let t=a.formatEntityState?.(e);if(t&&t!==e.state)return t}catch{}return Zt(Vc,e.state)||e.state}var $o=a=>{if(a==null||a==="")return null;let e=typeof a=="number"?a:parseFloat(String(a));return isFinite(e)?e:null};function Lr(a,e){return(e.uv_entity?$o(a?.states[e.uv_entity]?.state):null)??$o(e.entity?a?.states[e.entity]?.attributes?.uv_index:void 0)}function Or(a,e,t){if(t===null||!isFinite(t))return{text:"--",level:null};let i=di(t,ci(e));return{text:`${Et(Math.max(0,Math.round(t)),a)} ${Fr(a,i)}`,level:i}}function Fr(a,e){return st(a,`uv_${e}`)}var Uc=180;function Bo(a,e){let t=e.note_entity?a?.states[e.note_entity]:void 0;if(!t)return null;let i=s=>typeof s=="string"?s.trim():"",n=t.state==="unknown"||t.state==="unavailable"?"":i(t.state),r=i(t.attributes?.[e.note_attribute||"note"]);if(!n&&!r)return null;let o=Date.parse(t.attributes?.generated_at);return{line:n||r,note:r||n,writtenAt:Number.isNaN(o)?null:o}}function Vo(a,e){let t=Number(e.note_max_age??Uc);return a.writtenAt===null||!(t>0)?null:a.writtenAt+t*6e4}function Dr(a,e,t){if(e.dev_mode){let i=Yc(e,t);if(a&&e.sun_entity){let n=a.states[e.sun_entity];n&&(i.sun={sunrise:n.attributes.next_rising||null,sunset:n.attributes.next_setting||null,dawn:n.attributes.next_dawn||null,dusk:n.attributes.next_dusk||null,noon:n.attributes.next_noon||null,elevation:n.attributes.elevation??null,aboveHorizon:n.state==="above_horizon"})}return i}return a?jc(a,e):{temperature:"--",weatherCondition:"",location:e.name||"",humidity:"--",pressure:"--",pressureValue:null,feelsLike:null,windSpeed:"--",windSpeedValue:0,windBearing:null,indoorTemperature:"--",indoorHumidity:"--",uv:null}}function Yc(a,e){let n=or[e||"sunny"]||"22",r=an(a)?Et(parseFloat(n),void 0,1):n,o=a.name||"",s=me.humidity,l=me.windSpeed,c=parseFloat(l.split(" ")[0])||15,d=me.pressure,h=sr[e||"sunny"]||e||"sunny",p=me.indoorTemperature,g=me.indoorHumidity,u=new Date,f=new Date(u.getFullYear(),u.getMonth(),u.getDate(),6,14),w=new Date(u.getFullYear(),u.getMonth(),u.getDate(),18,32),y=new Date(u.getFullYear(),u.getMonth(),u.getDate(),5,45),_=new Date(u.getFullYear(),u.getMonth(),u.getDate(),19,1),b=new Date(u.getFullYear(),u.getMonth(),u.getDate(),12,23),v=Date.now(),x={sunrise:f.toISOString(),sunset:w.toISOString(),dawn:y.toISOString(),dusk:_.toISOString(),noon:b.toISOString(),elevation:42.5,aboveHorizon:v>=f.getTime()&&v<=w.getTime()};return{temperature:r,weatherCondition:h,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:null,pressure:d,pressureValue:null,feelsLike:null,indoorTemperature:p,indoorHumidity:g,uv:me.uv,sun:x}}var Kc={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};function Go(a){let e=typeof a=="number"?a:typeof a=="string"?parseFloat(a):NaN;return isFinite(e)?(e%360+360)%360:typeof a=="string"?Kc[a.trim().toUpperCase()]??null:null}function an(a){return Number(a.temperature_decimals)===1?1:0}function jc(a,e){if(!e.entity)throw new Error("Weather entity is required");let t=a.states[e.entity];if(!t)throw new Error(`Entity ${e.entity} not found`);let i;if(e.outdoor_sensor_entity){let S=a.states[e.outdoor_sensor_entity];S&&S.state&&!isNaN(parseFloat(S.state))?i=parseFloat(S.state):i=t.attributes.temperature}else i=t.attributes.temperature;let n=an(e),r=S=>Et(n?S:Math.round(S),a,n),o=i!=null&&!isNaN(i)?r(i):"--",s=qc(a,t),l=e.name||t.attributes.friendly_name||"",c=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?Et(Math.round(E),a)+"%":null},d="--";if(e.humidity_sensor_entity){let S=a.states[e.humidity_sensor_entity];d=S&&c(S.state)||c(t.attributes.humidity)||"--"}else d=c(t.attributes.humidity)||"--";let m="--",h=10,p=(S,E)=>{let M=typeof S=="number"?S:parseFloat(S);return isFinite(M)?(h=Qa(M,E||"km/h"),m=Et(Math.round(M),a)+" "+(E||"km/h"),!0):!1},g=e.wind_speed_sensor_entity?a.states[e.wind_speed_sensor_entity]:void 0;g&&p(g.state,g.attributes?.unit_of_measurement)||p(t.attributes.wind_speed,t.attributes.wind_speed_unit);let u=e.wind_direction_sensor_entity?a.states[e.wind_direction_sensor_entity]:void 0,f=Go(u?.state)??Go(t.attributes.wind_bearing),w=(S,E)=>{let M=typeof S=="number"?S:parseFloat(S);if(!isFinite(M))return null;let D=E.toLowerCase()==="inhg"?2:0;return Et(M,a,D)+" "+E},y=S=>{let E=typeof S=="number"?S:parseFloat(S);return isFinite(E)?E:null},_="--",b=null;if(e.pressure_sensor_entity){let S=a.states[e.pressure_sensor_entity];if(S){let E=S.attributes.unit_of_measurement||"hPa",M=w(S.state,E);M&&(_=M,b=y(S.state))}if(_==="--"&&t.attributes.pressure!==void 0){let E=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,E)||"--",b=y(t.attributes.pressure)}}else if(t.attributes.pressure!==void 0){let S=t.attributes.pressure_unit||"hPa";_=w(t.attributes.pressure,S)||"--",b=y(t.attributes.pressure)}let v=null,x;if(e.feels_like_entity&&(x=a.states[e.feels_like_entity]?.state),x===void 0&&t.attributes.apparent_temperature!==void 0&&(x=t.attributes.apparent_temperature),x!==void 0){let S=typeof x=="number"?x:parseFloat(x);isFinite(S)&&(v=r(S)+"\xB0")}let T="--";if(e.indoor_temperature_entity){let S=a.states[e.indoor_temperature_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(T=r(parseFloat(S.state))+"\xB0")}let A="--";if(e.indoor_humidity_entity){let S=a.states[e.indoor_humidity_entity];S&&S.state&&!isNaN(parseFloat(S.state))&&(A=Et(Math.round(parseFloat(S.state)),a)+"%")}let C;if(e.sun_entity){let S=a.states[e.sun_entity];S&&(C={sunrise:S.attributes.next_rising||null,sunset:S.attributes.next_setting||null,dawn:S.attributes.next_dawn||null,dusk:S.attributes.next_dusk||null,noon:S.attributes.next_noon||null,elevation:S.attributes.elevation??null,aboveHorizon:S.state==="above_horizon"})}return{temperature:o,weatherCondition:s,location:l,humidity:d,windSpeed:m,windSpeedValue:h,windBearing:f,pressure:_,pressureValue:b,feelsLike:v,indoorTemperature:T,indoorHumidity:A,uv:Lr(a,e),sun:C}}function Wr(a){return a&&typeof a=="object"&&typeof a.action=="string"?a:void 0}function on(a,e){return{entity:e,tap_action:Wr(a?.tap_action),hold_action:Wr(a?.hold_action),double_tap_action:Wr(a?.double_tap_action)}}function He(a){return!!a&&a.action!=="none"}function qo(a){return a.tap_action?He(a.tap_action):!!a.entity}function hi(a,e,t,i={}){let n=e[`${t}_action`],r=n&&Object.prototype.hasOwnProperty.call(i,n.action)?i[n.action]:void 0;if(r){r(t);return}if(t==="tap"&&!n){e.entity&&a.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0}));return}He(n)&&a.dispatchEvent(new CustomEvent("hass-action",{detail:{config:e,action:t},bubbles:!0,composed:!0}))}function sn(a,e,t,i={}){if(a.dataset.actionsBound)return;a.dataset.actionsBound="1";let n=null,r=!1,o,s,l=()=>{clearTimeout(o),o=void 0},c=()=>{n=null,l()},d=()=>{He(t().double_tap_action)?s?(clearTimeout(s),s=void 0,hi(e,t(),"double_tap",i)):s=setTimeout(()=>{s=void 0,hi(e,t(),"tap",i)},250):hi(e,t(),"tap",i)},m=h=>h.target!==a&&!!h.target?.closest?.('button, a, input, [role="slider"], [role="radio"]');a.addEventListener("pointerdown",h=>{h.button!==0||m(h)||(n={x:h.clientX,y:h.clientY},r=!1,l(),He(t().hold_action)&&(o=setTimeout(()=>{o=void 0,r=!0,hi(e,t(),"hold",i)},500)))}),a.addEventListener("pointermove",h=>{n&&Math.hypot(h.clientX-n.x,h.clientY-n.y)>10&&c()}),a.addEventListener("pointerup",()=>{let h=!!n&&!r;c(),h&&d()}),a.addEventListener("pointercancel",c),a.addEventListener("pointerleave",c),a.addEventListener("keydown",h=>{h.key!=="Enter"&&h.key!==" "||h.target!==a||!qo(t())||(h.preventDefault(),hi(e,t(),"tap",i))}),a.addEventListener("contextmenu",h=>{He(t().hold_action)&&h.preventDefault()})}function ui(a,e,t){qo(e)?(a.setAttribute("role","button"),a.tabIndex=0,a.style.cursor="pointer"):(t?a.setAttribute("role",t):a.removeAttribute("role"),a.removeAttribute("tabindex"),a.style.cursor="");let i=He(e.hold_action);a.style.userSelect=i?"none":"",a.style.setProperty("-webkit-user-select",i?"none":""),a.style.setProperty("-webkit-touch-callout",i?"none":"")}var Hr=new Map;function Re(a,e){let t=Hr.get(a);if(t)return t;let i=new Promise((n,r)=>{let s=Array.from(document.querySelectorAll("script[src]")).find(d=>/animated-weather-card(?:\.min)?\.js/.test(d.src)),l=s?s.src.replace(/animated-weather-card(\.min)?\.js/,`${a}$1.js`):`${a}.js`,c=document.createElement("script");c.src=l,c.type="module",c.async=!0,c.onload=()=>e()?n():r(new Error(`${l} loaded but registered nothing`)),c.onerror=()=>r(new Error(`Failed to load ${l}`)),document.head.appendChild(c)});return i.catch(()=>Hr.delete(a)),Hr.set(a,i),i}function mi(a){return Re("animated-weather-card-editor",()=>!!customElements.get(a))}var Uo={humidity:"m12.1 2.2c-4.7 6.5-7.1 10.9-7.1 13.6 0 4 3.4 7.2 7.5 7.2 4.1 0 7.5-3.2 7.5-7.2 0-2.7-2.4-7.1-7.1-13.6-.1-.1-.2-.2-.4-.2-.2 0-.3.1-.4.2",wind:"m14.4 5c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.3c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2h-10.4c-1.3 0-2.3 1-2.3 2.3 0 1.2 1 2.2 2.3 2.2h.8c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8h-.8c-.5 0-.8-.3-.8-.7 0-.5.3-.8.8-.8h10.4c2.1 0 3.8-1.7 3.8-3.7 0-2.1-1.7-3.8-3.8-3.8zm6.2 3.8c0 .4.3.7.8.7.3 0 .6.3.6.7 0 .5-.3.8-.7.8h-2.5c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h2.5c1.2 0 2.2-1 2.2-2.3 0-1.2-.9-2.2-2.1-2.2-.5 0-.8.3-.8.8m-12.8 5.2c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.1c.6 0 1.1.6 1.1 1.3 0 .6-.5 1.2-1.1 1.2h-.1c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.1c1.5 0 2.6-1.2 2.6-2.7 0-1.6-1.1-2.8-2.6-2.8zm0 0m-1-6c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h4.9c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8zm11.5 6.5c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h2.5c.4 0 .7.3.7.8 0 .4-.3.7-.7.7h-.8c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h.8c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3z",pressure:"m5.1 20.9a10.5 10.5 0 1 1 14.8 0 .8.8 0 0 1-1-1 9 9 0 1 0-12.8 0 .8.8 0 0 1-1 1zm6.8-7.9l4.1-4.9a.8.8 0 0 1 1.2 1l-4.1 4.9a.8.8 0 0 1-1.2-1zm-1.5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 1 1-4.2 0z",sunrise:"m6.9 15.4c0 .7.2 1.5.5 2.2h-4.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5.9c.1 0 .3 0 .4-.1.3-.2.4-.7.2-1-.5-.7-.9-1.7-.9-2.5 0-2.2 1.9-4 4.2-4 2.3 0 4.2 1.8 4.2 4 0 .9-.3 1.7-.8 2.4-.1.1-.2.3-.2.5 0 .4.3.7.7.7h5.9c.9 0 .9-1.4 0-1.4h-4.6c.3-.7.4-1.4.4-2.2 0-3-2.5-5.4-5.6-5.4-3.1 0-5.6 2.4-5.6 5.4m4.9-9.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.2.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.6 0-1 .7-.5 1.3m15.2 5.5c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm9.4.6l-1.7 2c-.2.2-.2.5 0 .7.2.2.6.1.7-.1l.9-1v3.7c0 .3.2.5.5.5.3 0 .5-.2.5-.5v-3.7l.9 1c.1.2.5.3.7.1.2-.2.2-.5 0-.7l-1.7-2c0 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.1-.1 0-.3.1-.4.2",sunset:"m11.8 14.7v2.9l-.6-.6c-.3-.3-.7-.3-1 0-.3.2-.3.7 0 .9l1.8 1.8c0 .1.1.2.2.2.1.1.2.1.3.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2l1.7-1.8c.3-.2.3-.7 0-.9-.3-.3-.7-.3-1 0l-.6.6v-2.9c0-.5-.4-.7-.7-.7-.3 0-.7.2-.7.7m-4.9-1.8c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h5.9c.4 0 .7-.3.7-.7 0-.1 0-.1 0-.1 0-.2-.1-.3-.2-.5-.5-.8-.8-1.6-.8-2.3 0-2.5 1.9-4.4 4.2-4.4 2.3 0 4.2 1.9 4.2 4.4 0 .8-.3 1.5-.8 2.3-.1.2-.2.3-.2.5 0 0 0 0 0 .1 0 .4.3.7.7.7h5.9c.9 0 .9-1.5 0-1.5h-4.6c.3-.7.4-1.4.4-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9",indoor:"m13.4 3.5l7.7 6.5a1.4 1.4 0 0 1 .5 1.1v9.1a1.4 1.4 0 0 1-1.4 1.4h-15.4a1.4 1.4 0 0 1-1.4-1.4v-9.1a1.4 1.4 0 0 1 .5-1.1l7.7-6.5a1.4 1.4 0 0 1 1.8 0zm-2 6.1v5.2a2.4 2.4 0 1 0 2.2 0v-5.2a1.1 1.1 0 0 0-2.2 0z",alert:"m5.2 12.5c-1.8.1-3.2 1.5-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2h12.5c.1 0 .2 0 .2 0 .2 0 .3 0 .4 0 2.6 0 4.7-2.2 4.7-4.9 0-2.6-2.1-4.8-4.7-4.8-.4 0-.9 0-1.3.2-1.1-2.1-3.2-3.5-5.6-3.5-3.4 0-6.2 2.9-6.2 6.5m6.6-3.1a.8.8 0 0 1 1.5 0v4a.8.8 0 0 1-1.5 0zm-.1 6.5a.8.8 0 1 1 1.6 0 .8.8 0 1 1-1.6 0z",noon:"m7 12.5c0 3 2.5 5.5 5.5 5.5 3 0 5.5-2.5 5.5-5.5 0-3-2.5-5.5-5.5-5.5-3 0-5.5 2.5-5.5 5.5m4.8-9.8v2c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.4l-1.4 1.4c-.3.2-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-13.8 0c-.3.3-.3.7 0 1l1.4 1.4c.7.7 1.7-.3 1-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.7c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4zm14.8 5.7c-.3.3-.3.7 0 1l1.4 1.4c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.2-.3-.2-.5-.2-.2 0-.4 0-.5.2m-11 0l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.4c.3-.3.3-.7 0-1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m5.3 2.8v2c0 .9 1.4.9 1.4 0v-2c0-.5-.3-.7-.7-.7-.4 0-.7.2-.7.7",daylight:"m7.4 5h10.2a.9.9 0 0 1 .9.9v1.4a.9.9 0 0 1-.2.5l-3.1 4.2a.9.9 0 0 1 0 1l3.1 4.2a.9.9 0 0 1 .2.5v1.4a.9.9 0 0 1-.9.9h-10.2a.9.9 0 0 1-.9-.9v-1.4a.9.9 0 0 1 .2-.5l3.1-4.2a.9.9 0 0 1 0-1l-3.1-4.2a.9.9 0 0 1-.2-.5v-1.4a.9.9 0 0 1 .9-.9zm.6 2.1l4.1 5.4-4.1 5.4v.6h9v-.6l-4.1-5.4 4.1-5.4v-.6h-9zm-3-3.4h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm0 16.2h15a.8.8 0 0 1 0 1.5h-15a.8.8 0 0 1 0-1.5zm5.9-11h3.2a.4.4 0 0 1 .3.7l-1.6 1.7a.4.4 0 0 1-.6 0l-1.6-1.7a.4.4 0 0 1 .3-.7zm1.9 6.1l2.5 2.9a.4.4 0 0 1-.3.7h-5a.4.4 0 0 1-.3-.7l2.5-2.9a.4.4 0 0 1 .6 0z","first-light":"m6.9 15.9c0 .7.1 1.4.4 2.1h-4.6c-.4 0-.7.3-.7.8 0 .4.3.7.7.7h19.6c.9 0 .9-1.5 0-1.5h-4.5c.2-.6.3-1.3.3-2.1 0-3.3-2.5-5.9-5.6-5.9-3.1 0-5.6 2.6-5.6 5.9m4.9-9.2v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7m7.1 2.3l-1.4 1.4c-.3.3-.3.7 0 1 .3.3.7.3 1 0l1.4-1.3c.3-.3.3-.8 0-1.1-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m-13.8 0c-.3.3-.3.8 0 1.1l1.4 1.3c.3.3.7.3 1 0 .3-.3.3-.7 0-1l-1.4-1.4c-.1-.1-.3-.2-.5-.2-.2 0-.4.1-.5.2m15.2 6.6c-1 0-1 1.4 0 1.4h2c.9 0 .9-1.4 0-1.4zm-17.6 0c-.9 0-.9 1.4 0 1.4h2c1 0 1-1.4 0-1.4z","last-light":"m12 3.5c-4.8.3-8.5 4.2-8.5 9 0 5 4.1 9 9.2 9 3.3 0 6.3-1.7 7.9-4.5.2-.3 0-.7-.4-.7-.2.1-.4.1-.6.1-4.5 0-8.3-3.7-8.3-8.2 0-1.5.4-2.9 1.1-4.1.2-.3 0-.6-.3-.6 0 0-.1 0-.1 0","moon-new":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0z","moon-waxing-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 5.8 10.5 0 0 0 0-21z","moon-first-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21v-21z","moon-waxing-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9-10.5a10.5 10.5 0 0 1 0 21 4.2 10.5 0 0 1 0-21z","moon-full":"m2 12.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5-5.8 0-10.5 4.7-10.5 10.5m9-6.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m5 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m-11 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-1.1 0-2-.9-2-2m7-8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m-6 8c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1m11-4c0 .6.4 1 1 1 .6 0 1-.4 1-1 0-.6-.4-1-1-1-.6 0-1 .4-1 1","moon-waning-gibbous":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 4.2 10.5 0 0 1 0 21z","moon-last-quarter":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21v21z","moon-waning-crescent":"m2 12.5a10.5 10.5 0 1 1 21 0 10.5 10.5 0 1 1-21 0zm1.5 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0zm9 10.5a10.5 10.5 0 0 1 0-21 5.8 10.5 0 0 0 0 21z"};function fe(a,e){return`<svg class="${e} awc-icon" data-icon="${a}" viewBox="0 0 25 25" aria-hidden="true" focusable="false"><path d="${Uo[a]}"/></svg>`}function Yo(a,e){!a||a.getAttribute("data-icon")===e||(a.setAttribute("data-icon",e),a.firstElementChild?.setAttribute("d",Uo[e]))}var Xc=29.530588853,Zc=Date.UTC(2e3,0,6,18,14),Qc={new_moon:[-.5,.5],waxing_crescent:[.5,6.5],first_quarter:[6.5,7.5],waxing_gibbous:[7.5,13.5],full_moon:[13.5,14.5],waning_gibbous:[14.5,20.5],last_quarter:[20.5,21.5],waning_crescent:[21.5,27.5]};function Ko(a,e){let i=((a.getTime()-Zc)/864e5/Xc%1+1)%1,n=e?Zt(Qc,e):void 0;if(!n)return i;let r=i*28;return r>=27.5&&(r-=28),r=Math.min(n[1],Math.max(n[0],r)),(r/28%1+1)%1}function jo(a,e=!1){let t=Math.cos(2*Math.PI*a),i=(1-t)/2,n=a<.5!==e,r=i<.5,o=(Math.abs(t)*50).toFixed(1),s=n===r?1:0,l=n?130:-30,d=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><filter id='s' x='-1' y='-1' width='3' height='3'><feGaussianBlur stdDeviation='2.5'/></filter><path filter='url(#s)' d='${`M50 -30L50 0A${o} 50 0 0 ${s} 50 100L50 130L${l} 130L${l} -30Z`}'/></svg>`,m=.3+.7*i;return{mask:`url("data:image/svg+xml,${encodeURIComponent(d)}")`,halo:`0 0 16px 2px rgba(226, 232, 255, ${(.28*m).toFixed(3)}), 0 0 56px 12px rgba(190, 206, 255, ${(.12*m).toFixed(3)})`}}var Xo=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;function Zo(a){let e=a.color_palette||"default",t=a.custom_colors||{},i="";if(e!=="theme"){let r=d=>{if(typeof d!="string"||!Xo.test(d))return null;let m=d.replace("#","");m.length===3&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]);let h=parseInt(m,16);return{r:h>>16&255,g:h>>8&255,b:h&255}},o=(d,m,h)=>"#"+(d<<16|m<<8|h).toString(16).padStart(6,"0"),s=(d,m)=>{let h=r(d);if(!h)return d;let p=1-m/100;return o(Math.max(0,Math.floor(h.r*p)),Math.max(0,Math.floor(h.g*p)),Math.max(0,Math.floor(h.b*p)))},l=(d,m)=>{let h=r(d);if(!h)return d;let p=m/100;return o(Math.min(255,Math.floor(h.r+(255-h.r)*p)),Math.min(255,Math.floor(h.g+(255-h.g)*p)),Math.min(255,Math.floor(h.b+(255-h.b)*p)))},c=(d,m)=>{let h=t[d];if(!h||typeof h!="string"||!Xo.test(h))return;let p=l(h,12),g=s(h,22);i+=`--weather-${m}-background: linear-gradient(180deg, transparent 40%, rgba(6, 12, 28, 0.38) 100%), linear-gradient(180deg, ${p} 0%, ${h} 55%, ${g} 100%); `};c("sunny_bg","sunny"),c("rainy_bg","rainy"),c("snowy_bg","snowy"),c("stormy_bg","stormy"),c("windy_bg","windy"),c("cloudy_bg","cloudy")}let n=(r,o)=>{r&&ii(r)&&(i+=o.replace(/\$\{value\}/g,r))};return n(t.text_color,"--weather-text-color: ${value} !important; "),n(t.temperature_color,"--awc-hero-color: ${value} !important; "),n(t.sun_color,"--weather-sun-primary: ${value} !important; --weather-sun-secondary: ${value} !important; "),n(t.rain_color,"--weather-rain-color: ${value} !important; "),n(t.snow_color,"--weather-snow-color: ${value} !important; "),i}var Ne="animated-weather-card-hour";var Qo={horizon:196,peak:34,trough:276,twilightRy:78},Jo={horizon:200,peak:96,trough:262,twilightRy:44};function Rr(a,e,t){let i=t-e;if(i<=0||i>=24)return 0;if(a>=e&&a<=t)return Math.sin(Math.PI*(a-e)/i);let n=((a-t)%24+24)%24;return-Math.sin(Math.PI*n/(24-i))}var Nr=(a,e=!1)=>e?1-a/24:a/24,ge=(a,e=!1)=>Nr(a,e)*1e3,zr=(a,e)=>a>=0?e.horizon-a*(e.horizon-e.peak):e.horizon-a*(e.trough-e.horizon);var is={new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"},Jc={new_moon:"moon-new",waxing_crescent:"moon-waxing-crescent",first_quarter:"moon-first-quarter",waxing_gibbous:"moon-waxing-gibbous",full_moon:"moon-full",waning_gibbous:"moon-waning-gibbous",last_quarter:"moon-last-quarter",waning_crescent:"moon-waning-crescent"};function td(a){return Zt(Jc,a)??"last-light"}function Ir(a,e){let t=n=>n.startsWith("sensor.")&&Zt(is,e.states[n]?.state)!==void 0,i=e?t("sensor.moon_phase")?"sensor.moon_phase":Object.keys(e.states).find(t):"sensor.moon_phase";return i?{sun_entity:a,moon_entity:i}:{sun_entity:a}}var ed=124,ts=16;function id(a,e){if(a<1)return 1;let t=Math.max(2,Math.floor((e+ts)/(ed+ts))),i=Math.ceil(a/t);return Math.ceil(a/i)}function nd(a,e,t,i){let n=[];for(let r=0;r<=240;r++){let o=r/10;n.push(`${ge(o,i).toFixed(1)},${zr(Rr(o,a,e),t).toFixed(1)}`)}return"M"+n.join(" L")}function cn(a,e){if(!a)return 0;let t=new Date(a);return isNaN(t.getTime())?0:Er(t,e)}var rd=a=>li(a,"st-ampm");Yi();var es=It(Mt(Le)),ad=`
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
        --st-text: ${es};
        --st-secondary: ${es};
        --st-secondary-opacity: ${Vi};
        --st-path: rgba(255, 232, 180, 0.95);
        --st-path-night: rgba(214, 224, 255, 0.4);
        --st-horizon: rgba(255, 255, 255, 0.3);
        --st-day-fill: #ffd98a;
        --st-day-fill-opacity: 0.22;
        --st-twilight: #ffb98a;
        --st-twilight-opacity: 0.38;
        background:
            ${Oe(qi,"var(--awc-sky-glow)")},
            linear-gradient(180deg, transparent 40%, var(--awc-sky-scrim) 100%),
            linear-gradient(180deg, var(--awc-sky-top) 0%, var(--awc-sky-mid) 55%, var(--awc-sky-bottom) 100%);
        text-shadow: 0 1px 12px rgba(6, 12, 28, 0.22);
        /* Same registered colors and curve as the weather card's sky */
        transition: ${yr.map(a=>`${a} ${ee}s ${Fe}`).join(", ")};
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
`,$r=class extends HTMLElement{constructor(){super();this.config={};this._path=null;this._link=null;this._onHour=t=>this._follow(t.detail);this._shadow=this.attachShadow({mode:"open"})}setConfig(t){if(!t.sun_entity)throw new Error("Please define a sun_entity (e.g. sun.sun)");this.config={...t},this._render()}set hass(t){let i=this.config.sun_entity||"",n=this.config.moon_entity||"",r=this._hass?.states[i],o=t.states[i],s=this._hass?.states[n]?.state,l=t.states[n]?.state,c=We(this._hass)!==We(t),d=this._weatherId()||"",m=d&&this._hass?.states[d]?.state!==t.states[d]?.state;this._hass=t;let h=r?.attributes?.elevation,p=o?.attributes?.elevation;(!r||r.state!==o?.state||r.attributes?.next_rising!==o?.attributes?.next_rising||r.attributes?.next_setting!==o?.attributes?.next_setting||Math.abs((h||0)-(p||0))>=.5||n&&s!==l||c||m)&&this._render()}connectedCallback(){this._clock||(this._clock=setInterval(()=>this._render(),6e4)),window.addEventListener(Ne,this._onHour),this._unshare||(this._unshare=Do(()=>{this._weatherId()!==this._drawnWeather&&this._render()})),!this._resizeObserver&&typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this._fit()),this._resizeObserver.observe(this))}disconnectedCallback(){this._clock&&clearInterval(this._clock),this._clock=void 0,window.removeEventListener(Ne,this._onHour),this._unshare?.(),this._unshare=void 0,this._link=null,this._resizeObserver?.disconnect(),this._resizeObserver=void 0}_fit(){let t=this._shadow.querySelector(".st-card");if(!t)return;let i=t.querySelector(".st-metrics");for(let n of["regular","compact","short","tight"]){if(t.dataset.fit=n,i){let r=Array.from(i.children).filter(o=>getComputedStyle(o).display!=="none").length;i.style.setProperty("--st-cols",String(id(r,i.clientWidth)))}if(t.scrollHeight<=t.clientHeight+1)return}}_actions(){return on(this.config,this.config.sun_entity)}getCardSize(){return this.config.compact?2:6}getGridOptions(){return this.config.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:6,min_columns:6,min_rows:3}}_weatherId(){return this.config.weather_entity||Fo(this.config.sun_entity)}_skyCondition(t){let i=this._weatherId(),n=i?this._hass?.states[i]?.state:void 0;if(n&&n!=="unavailable"&&n!=="unknown"){let r=Wi(n,!1,void 0,void 0,this._hass?.config?.time_zone,{night:t==="night"});if(gr.includes(r))return r}return t==="night"?"clear-night":"sunny"}static async getConfigElement(){return customElements.get("animated-sun-tracker-editor")||await mi("animated-sun-tracker-editor"),document.createElement("animated-sun-tracker-editor")}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return Ir(r.find(o=>o.startsWith("sun."))??"sun.sun",t)}_getSunData(){if(!this._hass||!this.config.sun_entity)return null;let t=this._hass.states[this.config.sun_entity];return t?{sunrise:t.attributes.next_rising||null,sunset:t.attributes.next_setting||null,dawn:t.attributes.next_dawn||null,dusk:t.attributes.next_dusk||null,noon:t.attributes.next_noon||null,elevation:typeof t.attributes.elevation=="number"?t.attributes.elevation:null,aboveHorizon:t.state==="above_horizon",rising:!!t.attributes.rising}:null}_getMoonData(){if(!this._hass||!this.config.moon_entity)return null;let t=this._hass.states[this.config.moon_entity];if(!t)return null;let i=t.state,n;try{n=this._hass.formatEntityState?.(t)}catch{}return{phase:i,phaseName:(n&&n!==i?n:void 0)||Zt(is,i)||i.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase()),icon:td(i)}}_render(){this._drawnWeather=this._weatherId();let t=this._getSunData(),i=this._getMoonData(),n=this.config.color_palette!=="theme";if(!t||!t.sunrise||!t.sunset){this._path=null,this._mount('<div class="st-no-data">No sun data yet.<br>Choose a sun entity, usually sun.sun.</div>',null);return}let r=new Date,o=Er(r,this._hass),s=cn(t.sunrise,this._hass),l=cn(t.sunset,this._hass),c=t.dawn?cn(t.dawn,this._hass):Math.max(0,s-.5),d=t.dusk?cn(t.dusk,this._hass):Math.min(24,l+.5),m=l-s,h=t.aboveHorizon,p=h?t.sunset:t.sunrise,g=new Date(p).getTime()-r.getTime(),u=this._hass,f=Q=>P(st(u,Q)),w=Q=>rd(pe(Q,u)),y=g>0?st(u,"in_duration",{duration:Mr(g/36e5,u)}):"",_=Ui(t.elevation,t.rising,t.aboveHorizon),b=Pe(this._skyCondition(_),_),v=n?{"--awc-sky-top":b.top,"--awc-sky-mid":b.mid,"--awc-sky-bottom":b.bottom,"--awc-sky-glow":b.glow,"--awc-sky-scrim":b.scrim}:null,x=this.config.compact?Jo:Qo,T=this.config.direction,A=T==="right_to_left"||T!=="left_to_right"&&(this._hass?.config?.latitude??0)<0;this._path={riseH:s,setH:l,rtl:A};let C=nd(s,l,x,A),S=`${C} L${ge(24,A)},${x.horizon} L${ge(0,A)},${x.horizon} Z`,E=Rr(o,s,l),M=Nr(o,A)*100,D=zr(E,x)/300*100,W=(Q,G)=>{let j=Math.max(70,Math.abs(G)/24*1e3*2.4);return`<ellipse cx="${ge(Q,A).toFixed(1)}" cy="${x.horizon}" rx="${j.toFixed(1)}" ry="${x.twilightRy}" fill="url(#twilight)" class="st-twilight"/>`},H=!!this.config.compact,R=this.config.show_header!==!1,F=R?`
            <div class="st-hero">
                ${this.config.title&&!H?`<div class="st-title">${P(this.config.title)}</div>`:""}
                <div class="st-eyebrow">
                    ${fe(h?"sunset":"sunrise","st-glyph")}
                    <span>${f(h?"sunset":"sunrise")}</span>
                </div>
                <div class="st-time">${w(p)}</div>
                ${y?`<div class="st-countdown">${P(y)}</div>`:""}
            </div>`:this.config.title&&!H?`<div class="st-hero"><div class="st-title">${P(this.config.title)}</div></div>`:"",I=(Q,G,j,nt,$t=!1)=>`
                <div class="st-metric" data-kind="${P(Q)}">
                    <div class="st-metric-label">${fe(G,"st-glyph")}<span title="${P(j)}">${P(j)}</span></div>
                    <div class="st-metric-value${$t?" wrap":""}">${nt}</div>
                </div>`,lt=!H&&this.config.show_details!==!1,Ct=H&&R?`
                        <div class="st-chart-note">${f(h?"sunrise":"sunset")}<span class="st-chart-note-time">${w(h?t.sunrise:t.sunset)}</span></div>`:"",At=lt?`
            <div class="st-metrics">
                ${h?I("sunrise","sunrise",f("sunrise"),w(t.sunrise)):I("sunset","sunset",f("sunset"),w(t.sunset))}
                ${I("noon","noon",f("solar_noon"),w(t.noon))}
                ${I("daylight","daylight",f("daylight"),P(Mr(m,u)))}
                ${I("first-light","first-light",f("first_light"),w(t.dawn))}
                ${I("last-light","last-light",f("last_light"),w(t.dusk))}
                ${i?I("moon",i.icon,f("moon"),P(i.phaseName),!0):""}
            </div>`:"",U=this.config.sun_entity?u?.states[this.config.sun_entity]:void 0,kt="";try{kt=U&&u?.formatEntityState?.(U)||""}catch{}let ht=[`${st(u,"sunrise")} ${pe(t.sunrise,u)}`,`${st(u,"sunset")} ${pe(t.sunset,u)}`,kt].filter(Boolean).join(" \xB7 ");this._mount(`
                    ${F}
                    <div class="st-chart" role="img" aria-label="${P(ht)}">
                        <svg viewBox="0 0 ${1e3} ${300}" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                                <radialGradient id="twilight">
                                    <stop offset="0" style="stop-color: var(--st-twilight); stop-opacity: 1"/>
                                    <stop offset="1" style="stop-color: var(--st-twilight); stop-opacity: 0"/>
                                </radialGradient>
                                <clipPath id="above"><rect x="0" y="0" width="${1e3}" height="${x.horizon}"/></clipPath>
                                <clipPath id="below"><rect x="0" y="${x.horizon}" width="${1e3}" height="${300-x.horizon}"/></clipPath>
                            </defs>
                            ${W(s,s-c)}
                            ${W(l,d-l)}
                            <path d="${S}" class="st-day-fill" clip-path="url(#above)"/>
                            <line x1="0" y1="${x.horizon}" x2="${1e3}" y2="${x.horizon}" class="st-horizon"/>
                            <line x1="${ge(o,A).toFixed(1)}" y1="0" x2="${ge(o,A).toFixed(1)}" y2="${300}" class="st-now-line"/>
                            <path d="${C}" class="st-path-night" clip-path="url(#below)"/>
                            <path d="${C}" class="st-path-day" clip-path="url(#above)"/>
                        </svg>
                        <div class="st-dot ${E<0?"below":""}" style="left: ${M.toFixed(2)}%; top: ${D.toFixed(2)}%;"></div>${Ct}
                    </div>
                    ${At}`,v)}_mount(t,i){let n=this._shadow.querySelector(".st-card");n||(this._shadow.innerHTML=`<style>${ad}</style><ha-card><div class="st-card"></div></ha-card>`,n=this._shadow.querySelector(".st-card"),sn(n.parentElement,this,()=>this._actions())),ui(n.parentElement,this._actions());let r=!!i;n.classList.toggle("sky",r),n.classList.toggle("compact",!!this.config.compact),n.parentElement?.classList.toggle("sky",r);for(let o of yr)i?n.style.setProperty(o,i[o]):n.style.removeProperty(o);n.innerHTML=t,this._link&&this._follow(),this._fit()}_follow(t){if(t){if(!t.source||t.sun!==this.config.sun_entity||t.at===null&&!this._link)return;if(this._link=t.at===null?null:t,!this._link){this._shadow.querySelector(".st-card")?.classList.remove("following"),this._render();return}}let i=this._shadow.querySelector(".st-card");i&&this._path&&this._link&&window.AnimatedWeatherCardForecast?.followTracker?.({card:i,hass:this._hass,weather:this._weatherId(),...this._path,compact:!!this.config.compact},this._link)}};customElements.define("animated-sun-tracker-card",$r);window.customCards=window.customCards||[];window.customCards.push({type:"animated-sun-tracker-card",name:"Animated Sun Tracker",description:"The sun's path through the day with the next sunrise or sunset, first and last light, solar noon, daylight and moon phase",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("sun.")?[{label:"Regular",config:{type:"custom:animated-sun-tracker-card",...Ir(e,a)}},{label:"Compact",config:{type:"custom:animated-sun-tracker-card",...Ir(e,a),compact:!0}}]:null});function ze(a){let e=Number(a?.attributes?.supported_features);if(!isFinite(e))return["hourly","daily"];let t=[];return e&2&&t.push("hourly"),e&4&&t.push("twice_daily"),e&1&&t.push("daily"),t}function ns(a){let e=ze(a);return e.includes("daily")?"daily":e.includes("twice_daily")?"twice_daily":null}var od=5e3;function sd(){let a=new WeakMap;return{subscribe(e,t,i,n){let r=a.get(e);r||a.set(e,r=new Map);let o=`${t}|${i}`,s=r.get(o);if(!s){let c={listeners:new Set};s=c,r.set(o,c);let d=m=>{c.last=m;for(let h of[...c.listeners])h(m)};c.unsubscribe=e.subscribeMessage(m=>d({type:m?.type??i,forecast:Array.isArray(m?.forecast)?m.forecast:null}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:i}).catch(()=>{r.get(o)===c&&r.delete(o),d({type:i,forecast:null,failed:!0})})}let l=s;return clearTimeout(l.closing),l.closing=void 0,l.listeners.add(n),l.last&&n(l.last),()=>{!l.listeners.delete(n)||l.listeners.size||(l.closing=setTimeout(()=>{l.listeners.size||(r.get(o)===l&&r.delete(o),l.unsubscribe?.then(c=>{typeof c=="function"&&c()}).catch(()=>{}))},od))}}}}function ld(){return window.AnimatedWeatherCardForecasts??(window.AnimatedWeatherCardForecasts=sd())}function rs(a,e,t,i){return a?.connection?.subscribeMessage?ld().subscribe(a.connection,e,t,i):()=>{}}var dn=class{constructor(e){this.changed=e;this.hourly=null;this.daily=null;this.dailyType=null;this.settled=!1;this.stops=[];this.pending=new Set}sync(e,t,i){let n=t?e?.states[t]:void 0,r=ze(n),o=i.hourly&&r.includes("hourly"),s=i.daily?ns(n):null,l=`${t}|${o}|${s}`;if(!e?.connection||!t||!n){this.key&&this.stop();return}if(l===this.key&&this.connection===e.connection)return;this.stop(),this.key=l,this.connection=e.connection,this.dailyType=s,this.pending=new Set([o?"hourly":"",s??""].filter(Boolean)),this.settled=this.pending.size===0;let c=(d,m)=>{this.stops.push(rs(e,t,d,h=>{h.failed||m(h.forecast),this.pending.delete(d),this.settled=this.pending.size===0,this.changed()}))};o&&c("hourly",d=>{this.hourly=d}),s&&c(s,d=>{this.daily=d}),this.settled&&this.changed()}stop(){for(let e of this.stops)e();this.stops=[],this.key=void 0,this.connection=void 0,this.hourly=null,this.daily=null,this.dailyType=null,this.settled=!1}};Yi();var as=a=>`Wind from ${Math.round(a)}\xB0`,os=a=>a==="rising"?"mdi:arrow-top-right":"mdi:arrow-bottom-right",ss=a=>a?"sunset":"sunrise",cd=18,dd=450,hd=1600;function Ie(a,e){return e?.states["sun.sun"]?{entity:a,sun_entity:"sun.sun"}:{entity:a}}var ud=400,md=120,pd=220,fd=24;window.AnimatedWeatherCardGsap=rr;var ls=["regular","compact","short","tight","minimal"],gd=[["regular","long"],["close","long"],["regular","line"],["snug","line"],...ls.map(a=>[a,"none"])],hn=class extends HTMLElement{constructor(){super(...arguments);this._initialRender=!0;this.isInitializing=!1;this.pendingTimeouts=[];this.animationsPaused=!1;this.currentWeatherClass="";this.wasManuallyPaused=!1;this._needsAnimationRestart=!1;this.currentWindSpeedValue=10;this.devTimeOverride=!1;this._animationGeneration=0;this.visibilityChangeHandler=null;this.windowFocusHandler=null;this.windowBlurHandler=null;this.tabHidden=!1;this.offscreen=!1;this.windowBlurred=!1;this.heroTextPending=new WeakMap;this.planesWanted=!1;this.flightTracker=new en;this.writtenNote=null;this.noteComing=!1;this.surface="card";this.forecastFeed=new dn(()=>this.extras?.update());this.following=!1;this.starFrame=0;this.onNeedle=t=>{let i=t.detail;this.following||this.forecastOn()||this.config?.dev_mode||i?.at==null||i.source===this||i.entity!==this.config?.entity||(this.following=!0,this.syncForecastFeed(),this.extras?this.extras.update():this.mountExtras())}}static getStubConfig(t,i=[],n=[]){let r=[...i,...n,...Object.keys(t?.states??{})];return Ie(r.find(o=>o.startsWith("weather."))??ar.entity,t)}actionsConfig(){if(this.config?.dev_mode||this.surface==="view")return{};let t=on(this.config,this.config?.entity);return t.tap_action?t:this.config?.layout==="nightstand"&&this.surface==="card"?{...t,tap_action:{action:"none"}}:this.forecastOn()?{...t,tap_action:{action:"forecast"}}:t}forecastOn(){return!this.config?.dev_mode&&(this.surface!=="card"||!!this.config?.show_forecast||this.config?.layout==="nightstand")}extrasWanted(){return this.forecastOn()||this.following||(!!this.config?.show_clock||!!this.config?.show_date||this.heroClock())&&!this.config?.dev_mode}shareSky(){let t=this.isConnected&&this.surface!=="view"&&!this.config?.dev_mode;xr(this,t?this.config?.entity:void 0,this.config?.sun_entity)}weatherShown(){return this.surface!=="forecast"||this.config?.weather_effects===!0}heroClock(){return this.config?.hero==="clock"&&!this.config.dev_mode&&this.surface!=="forecast"&&this.config.layout!=="nightstand"}syncForecastFeed(){if(!this.isConnected||!(this.forecastOn()||this.following)){this.forecastFeed.stop();return}let t=this.surface!=="forecast"||this.config?.show_hours!==!1||this.config?.compact;this.forecastFeed.sync(this._hass,this.config?.entity,{hourly:t!==!1,daily:!0})}mountExtras(){if(this.extras?.destroy(),this.extras=void 0,!this.isConnected||!this.extrasWanted()||!this.querySelector(".animated-weather-card .weather-info"))return;let t=window.AnimatedWeatherCardForecast;if(!t){Re("animated-weather-card-forecast",()=>!!window.AnimatedWeatherCardForecast).then(()=>{this.isConnected&&!this.extras&&this.mountExtras()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`));return}t.version===2&&(this.extras=t.attach(this.forecastHost()),this.extras.update(),this.applySizeState())}forecastHost(){return{element:this,surface:this.surface,config:()=>this.config,hass:()=>this._hass,forecast:()=>this.forecastFeed,layers:()=>this.weatherShown()?this.animationController:void 0,skyColors:Pe,phase:()=>this.currentSkyPhase(),current:()=>{let t=this.config?.outdoor_sensor_entity||this.config?.entity,i=Number(t?this.config?.outdoor_sensor_entity?this._hass?.states[t]?.state:this._hass?.states[t]?.attributes?.temperature:NaN);return isFinite(i)?i:void 0},temperature:t=>{let i=this.config?an(this.config):0;return Et(i?t:Math.round(t),this._hass,i).replace(/^-/,"\u2212")},conditionName:t=>this._hass?.formatEntityState?.({entity_id:this.config?.entity??"",state:t,attributes:{},last_changed:"",last_updated:""})??t,fit:()=>this.applySizeState(),refresh:()=>this._updateDataInPlace(),following:()=>this.following,seen:()=>this.noteVisible,still:()=>this.config?.animate===!1||!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,moreInfo:()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:this.config?.entity},bubbles:!0,composed:!0})),reading:(t,i)=>{if(!this.config||t!=="uv")return null;let n=i??Lr(this._hass,this.config);if(n===null||!isFinite(n))return null;let r=di(n,ci(this.config));return{label:st(this._hass,"uv_index"),value:Et(Math.max(0,Math.round(n)),this._hass),word:Fr(this._hass,r),level:r}}}}openForecast(){this.extras?this.extras.open():this.mountExtras()}static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.entity&&!t.dev_mode)throw new Error("You need to define an entity or enable dev mode");let i=o=>o===void 0||typeof o=="number"&&isFinite(o)&&o>=0&&o<=23;if(!i(t.sunrise_hour))throw new Error(`sunrise_hour must be a number between 0 and 23 (got ${t.sunrise_hour})`);if(!i(t.sunset_hour))throw new Error(`sunset_hour must be a number between 0 and 23 (got ${t.sunset_hour})`);let n=this.config?.auto_pause;this.config?.flights_entity!==t.flights_entity&&(this.flightTracker.reset(),this.lastFlightsState=void 0,this.heldPlanes=void 0),this.config?.entity!==t.entity&&(this.following=!1),this.config=t,this.shareSky();let r=this.querySelector(".weather-info");if(r&&ui(r,this.actionsConfig(),"group"),this.isConnected){this.initializeTimeOfDayManager();let o=this.animationController;this._animationGeneration++,this.animationController=new De(this,this.config,()=>this.animationsPaused,this.timeOfDayManager),o&&o.stopAllAnimations().catch(s=>k(this.config?.dev_mode,"Error stopping previous animation controller:",s))}this.isConnected&&(this.noteWriter?.stop(),this.noteWriter=void 0,this.writtenNote=null,this.noteComing=!1,this.mountNoteWriter()),this.isConnected&&(this.syncForecastFeed(),this.mountExtras()),this.isConnected&&!!t.auto_pause!=!!n&&(this.removeVisibilityTracking(),this.setupVisibilityTracking())}connectedCallback(){if(this.style.position="relative",this.style.display="block",this.style.height="100%",this.shareSky(),window.addEventListener(Ne,this.onNeedle),!this.resizeObserver&&typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.applySizeState(),this.devPanel?.isOpen&&this.devPanel.dock()}),this.resizeObserver.observe(this),document.fonts?.ready.then(()=>this.applySizeState()).catch(()=>{})),!this._initialRender&&this.querySelector(".animated-weather-card")){this.config&&(this.initializeTimeOfDayManager(),this.animationController||(this.animationController=new De(this,this.config,()=>this.animationsPaused,this.timeOfDayManager))),this.attachEventListeners(),this.setupVisibilityTracking(),this.syncForecastFeed(),this.mountExtras(),this._updateDataInPlace(),this.initializeAnimations();return}this.config&&(this.initializeTimeOfDayManager(),this.animationController=new De(this,this.config,()=>this.animationsPaused,this.timeOfDayManager)),this._initialRender=!1,this.render(),this.setupVisibilityTracking(),this.initializeAnimations(),requestAnimationFrame(()=>{let i=this.querySelector(".animated-weather-card");i&&(i.classList.remove("no-transitions"),i.classList.add("transitions-enabled"))})}render(){if(!this.config||!this.hass&&!this.config.dev_mode)return;cr(this),this.stopPlanes();let t=this.config.color_palette||"default",i;try{i=Dr(this.hass,this.config,this.currentDevCondition)}catch(F){let I=F?.message||"Error loading weather data";this.innerHTML=`
              <ha-card>
                <div class="awc-empty-state" role="status">
                  ${fe("alert","awc-empty-icon")}
                  <div class="awc-empty-title">Animated Weather Card</div>
                  <div class="awc-empty-message">${P(I)}</div>
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
            `;return}let{temperature:n,weatherCondition:r,location:o,humidity:s,windSpeed:l,windSpeedValue:c,windBearing:d,pressure:m,pressureValue:h,feelsLike:p,indoorTemperature:g,indoorHumidity:u,uv:f,sun:w}=i,y=this.updatePressureTrend(h);this.currentWindSpeedValue=c;let _=w?.aboveHorizon??!1,b=w?pe(_?w.sunset:w.sunrise,this._hass):"--",v=this.config.show_sun!==!1&&!!w&&b!=="--",x=!!this.config.compact,T=this.heroClock(),A=Zo(this.config),C=this.config.show_attribute_icons!==!1,S=this.config.show_attribute_labels!==!1,E=(F,I,lt,Ct,At="",U)=>{let kt=C||S?`<div class="attribute-label">${C?fe(I,"attribute-icon"):""}${S?`<span>${P(lt)}</span>`:""}</div>`:"";return`<div class="attribute" data-kind="${F}"${U?` data-level="${U}"`:""}>${kt}<div class="attribute-value"><span class="attribute-text">${Ct}</span>${At}</div></div>`},M=typeof d=="number"?`<ha-icon class="wind-bearing-arrow" icon="mdi:navigation" style="transform: rotate(${d+180}deg);" aria-label="${as(d)}"></ha-icon>`:"",D=y?`<ha-icon class="pressure-trend ${y}" icon="${os(y)}" aria-label="Pressure ${y}"></ha-icon>`:"",W=Or(this._hass,this.config,f),H={humidity:()=>E("humidity","humidity",Oi(this._hass,"ui.card.weather.attributes.humidity","Humidity"),P(s)),wind:()=>E("wind","wind",Oi(this._hass,"ui.card.weather.attributes.wind_speed","Wind"),P(l),M),pressure:()=>E("pressure","pressure",Oi(this._hass,"ui.card.weather.attributes.air_pressure","Pressure"),P(m),D),sun:()=>v?E("sun",ss(_),st(this._hass,_?"sunset":"sunrise"),li(b,"awc-ampm")):"",uv:()=>E("uv","noon",st(this._hass,"uv_index"),P(W.text),"",W.level)},R=this.config.show_attributes!==!1?`
              <div class="weather-attributes${S?"":" values-only"}">${Pr(this.config).map(F=>H[F]()).join("")}</div>`:"";this.innerHTML=`
      <ha-card>
        <div class="animated-weather-card no-transitions${this.surface==="view"?"":" loading"} ${t==="theme"?"theme-colors":""}"${this.config.spill_particles!==!1?" data-spill":""}${x?' data-variant="compact"':""} style="${P(A)}">
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
                <div class="awc-desc-row awc-lead-row"><span class="awc-temp-lead" aria-live="polite"><span class="temperature-value">${P(n)}</span><span class="degree">\xB0</span></span><div class="weather-desc" aria-live="polite">${P(r)}</div></div>`:`<div class="temperature" aria-live="polite"><span class="temperature-value">${P(n)}</span><span class="degree">\xB0</span></div>
                <div class="weather-desc" aria-live="polite">${P(r)}</div>`}
                ${x?`<div class="compact-meta">${this.config.show_clock&&!T?'<span class="awc-clock"></span>':""}${this.config.show_date&&!this.config.dev_mode?'<span class="awc-date"></span>':""}<span class="awc-meta-text">${P(this.compactMeta(o,p))}</span></div>`:`<div class="hero-meta">${this.heroMetaHtml(p,g,u)}</div>`}
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
        ${Cr()}
      </style>
    `,this.attachEventListeners(),this.applySkyPhase(),this.applySizeState(),this.applySpill(),this.syncForecastFeed(),this.mountExtras()}locationHtml(t,i){if(t)return"";let n=this.config?.show_location!==!1&&i?`<span class="awc-place">${P(i)}</span>`:"",r=this.config?.show_clock&&!this.config.dev_mode&&!this.heroClock()?'<span class="awc-clock"></span>':"",o=this.config?.show_date&&!this.config.dev_mode?'<span class="awc-date"></span>':"";return n||r||o?`<div class="location">${r}${o}${n}</div>`:""}heroTime(){let{time:t,period:i}=Ro(new Date,this._hass);return i?`${P(t)}<span class="awc-ampm">${P(i)}</span>`:P(t.replace(/^(\d)(\D)/,"0$1$2"))}applySpill(){let t=this.querySelector("ha-card");if(!t)return;let i=this.config?.spill_particles!==!1?"visible":"hidden";t.style.setProperty("overflow",i,"important");let n=()=>{let r=t.shadowRoot;if(!r)return;let o=r.querySelector("#awc-overflow");o||(o=document.createElement("style"),o.id="awc-overflow",r.appendChild(o)),o.textContent=`:host { overflow: ${i} !important; }`};n(),!t.shadowRoot&&typeof customElements<"u"&&customElements.whenDefined("ha-card").then(()=>requestAnimationFrame(n))}transitionCondition(){let t=this.querySelector(".animated-weather-card");if(!t||t.classList.contains("loading")){this.initializeAnimations();return}t.classList.add("condition-out"),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=setTimeout(()=>{this.conditionChangeTimeout=void 0,this.isConnected&&this.initializeAnimations()},ud)}noteEnabled(){return!!(this.config?.note_entity||this.config?.show_note)&&!this.config.compact&&!this.config.dev_mode&&this.surface!=="forecast"}mountNoteWriter(){if(!this.noteEnabled()||this.config?.note_entity||!this.isConnected){this.noteWriter?.stop(),this.noteWriter=void 0;return}let t=window.AnimatedWeatherCardNote;if(t){this.noteWriter??(this.noteWriter=new t(this)),this.noteWriter.start();return}Re("animated-weather-card-note",()=>!!window.AnimatedWeatherCardNote).then(()=>{this.isConnected&&this.mountNoteWriter()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}get noteVisible(){return!this.tabHidden&&!this.offscreen}showNote(t){this.writtenNote=t,this.updateNote()}noteWriting(t){this.noteComing!==t&&(this.noteComing=t,this.updateNote())}currentNote(){if(clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,!this.config)return null;let t=this.config.note_entity?Bo(this._hass,this.config):this.writtenNote,i=t?Vo(t,this.config):null;if(!t||i===null)return t;let n=i-Date.now();return n<=0?null:(n<2**31-1&&(this.noteExpiryTimer=setTimeout(()=>this.updateNote(),n+50)),t)}noteHtml(t){return`<p class="weather-note"${t?"":" hidden"}><span class="note-long">${P(t?.note??"")}</span><span class="note-short">${P(t?.line??"")}</span><span class="note-status" aria-hidden="true"><span class="note-dots"><i></i><i></i><i></i></span><span class="note-phrase"></span></span></p>`}updateNote(){let t=this.querySelector(".weather-note");if(!t)return;let i=t.querySelector(".note-long"),n=t.querySelector(".note-short"),r=t.dataset.writing!==void 0;if(this.noteComing&&!this.config?.note_entity){this.noteTyping?.finish();let l=t.querySelector(".note-phrase"),c=st(this._hass,this.noteComing==="forecast"?"note_reading":"note_writing");!r||t.hidden?(l&&(l.textContent=c),t.dataset.writing="",t.setAttribute("aria-busy","true"),t.hidden=!1,this.applySizeState()):this.fadeThrough(l,c);return}r&&(delete t.dataset.writing,t.removeAttribute("aria-busy"));let o=this.currentNote();if(!o){this.noteTyping?.finish(),(!t.hidden||r)&&(t.hidden=!0,this.applySizeState());return}if(t.hidden||r){this.noteTyping?.finish(),i&&(i.textContent=o.note),n&&(n.textContent=o.line),t.hidden=!1,this.applySizeState(),r&&this.typeIn(t);return}if(this.noteTyping){if(this.noteTyping.text===o.note+o.line)return;this.noteTyping.finish()}let s=()=>this.applySizeState();this.fadeThrough(i,o.note,s),this.fadeThrough(n,o.line,s)}compactMeta(t,i){return[this.config?.show_location!==!1?t:"",i?`${st(this._hass,"feels_like")} ${i}`:""].filter(Boolean).join(" \xB7 ")}indoorLead(){let t=this.config?.indoor_style,i=P(st(this._hass,"indoors")),n=fe("indoor","indoor-icon");if(t==="icon")return`${n}<span class="awc-visually-hidden">${i} </span>`;let r=`<span class="indoor-label">${i}</span>`;return t==="both"?n+r:r}heroMetaHtml(t,i,n){let r=[];t&&r.push(`<span class="feels-like">${P(st(this._hass,"feels_like"))} ${P(t)}</span>`);let o=[i,n].filter(s=>s&&s!=="--");return this.config?.show_indoor!==!1&&o.length&&r.push(`<span class="indoor-climate-inline">${this.indoorLead()}${o.map(s=>P(s)).join('<span class="indoor-sep">\xB7</span>')}</span>`),r.join("")}mountDevPanel(){if(!this.config?.dev_mode){this.devPanel?.disconnect(),this.devPanel=void 0;return}let t=window.AnimatedWeatherCardDevPanel;if(t){this.devPanel??(this.devPanel=new t(this)),this.devPanel.mount();return}Re("animated-weather-card-dev",()=>!!window.AnimatedWeatherCardDevPanel).then(()=>{this.isConnected&&this.mountDevPanel()}).catch(i=>console.warn(`Animated Weather Card: ${i.message}`))}attachEventListeners(){this.mountDevPanel(),this.mountNoteWriter();let t=this.querySelector(".weather-info");if(t&&(sn(t,this,()=>this.actionsConfig(),{forecast:()=>this.openForecast()}),ui(t,this.actionsConfig(),"group")),!this.isInitializing){let i=window.setTimeout(()=>{this.initializeAnimations(),this.config?.dev_mode&&!this.currentDevCondition&&(this.currentDevCondition="sunny")},100);this.pendingTimeouts.push(i)}}setAnimationsPaused(t){this.animationsPaused=t,this.toggleAttribute("data-paused",t),this.animationsPaused?(this.animationController?.pauseAllAnimations(),this.planes?.pause(),Fi(this)):this._needsAnimationRestart?(this._needsAnimationRestart=!1,this.initializeAnimations()):(this.animationController?.resumeAllAnimations(),this.planes?.resume(),Di(this),this.flyHeldPlanes()),this.devPanel?.updatePauseButton()}getWeatherSettings(t){if(!this.config)throw new Error("getWeatherSettings called before setConfig");return tt(this.config,t)}initializeAnimations(){if(this.isInitializing)return;this.isInitializing=!0;let t=++this._animationGeneration;try{if(!this.config)return;let i=this.config,n=this.querySelector(".animated-weather-card");if(!n)return;this.clearAnimations();let r;if(i.dev_mode)r=this.currentDevCondition||"sunny";else{if(!this.hass||!i.entity)return;let m=this.hass.states[i.entity];if(!m)return;r=m.state.toLowerCase()}let o=Wi(r,i.dev_mode??!1,i.sunrise_hour,i.sunset_hour,this._hass?.config?.time_zone,{clock:!!i.enable_day_night_cycle,night:this.skyIsNight()}),s=(i.color_palette||"default")==="theme"?"theme-colors":"",l=n.classList.contains("loading"),c=(...m)=>{n.className=["animated-weather-card",o,...m,s,l?"no-transitions":"transitions-enabled"].filter(Boolean).join(" "),l&&requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove("no-transitions"),n.classList.add("transitions-enabled")}))},d=typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(i.animate===!1||d||!this.weatherShown()){let m=o==="clear-night"&&this.surface!=="forecast";c(i.animate===!1?"static":"",m?"individual-stars-active":"");let h=n.querySelector(".animation-layer");m&&h&&vr(h,_r(tt(i).cloudCount,n.clientWidth),{moon:!0,still:!0,words:oi(n)}),this.currentWeatherClass=o;return}this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.animationInitTimeout=setTimeout(()=>{if(this.animationInitTimeout=void 0,!!this.isConnected&&t===this._animationGeneration){if(c(),this.animationsPaused){this.currentWeatherClass=o,this._needsAnimationRestart=!0;return}this.animationController&&(this.animationController.setWindSpeed(this.currentWindSpeedValue),this.animationController.applyWeatherCondition(o)),this.startPlanes()}},i.dev_mode?50:this.surface==="view"?0:200)}finally{this.isInitializing=!1}}clearAnimations(){this.animationController?.stopAllAnimations(),this.stopPlanes(),cr(this),this.animationInitTimeout&&(clearTimeout(this.animationInitTimeout),this.animationInitTimeout=void 0),this.querySelectorAll(".rain-layer, .snow-layer, .sleet-layer, .wind-layer").forEach(o=>{o.innerHTML=""});let i=this.querySelector(".animated-weather-card"),n=this.querySelector(".animation-layer");n&&(ri(this),n.querySelectorAll(".stars-field, .star-gsap, .moon-gsap").forEach(s=>{s.parentNode&&s.parentNode.removeChild(s)}),n.querySelectorAll(".plane-gsap").forEach(s=>s.remove())),i&&($i(i),co(i));let r=this.querySelector(".lightning");r&&(r.classList.remove("flash"),r.innerHTML=""),lr(this.pendingTimeouts)}set hass(t){let i=this._hass;if(this._hass=t,this.config){if(this.handleFlightUpdates(),this.noteWriter?.hassChanged(),this.syncForecastFeed(),this.extras?.update(),!i){this.render(),this.initializeAnimations();return}if(We(i)!==We(t)){this.render(),this.initializeAnimations();return}if(this.config.dev_mode||!this.config.entity)return;let n=i.states[this.config.entity],r=t.states[this.config.entity];if(!n||!r){this.render(),this.initializeAnimations();return}if(n.state!==r.state){this._updateDataInPlace(),this.transitionCondition();return}let o=!1,s=c=>c==null?"__missing__":String(c),l=["temperature","apparent_temperature","humidity","wind_speed","pressure","wind_bearing","uv_index","friendly_name"];for(let c of l)if(s(n.attributes[c])!==s(r.attributes[c])){o=!0;break}if(this.config.note_entity&&i.states[this.config.note_entity]!==t.states[this.config.note_entity]&&(o=!0),!o){let c=[this.config.outdoor_sensor_entity,this.config.feels_like_entity,this.config.humidity_sensor_entity,this.config.pressure_sensor_entity,this.config.wind_speed_sensor_entity,this.config.wind_direction_sensor_entity,this.config.indoor_temperature_entity,this.config.indoor_humidity_entity,this.config.uv_entity,this.config.sun_entity];for(let d of c){if(!d)continue;let m=i.states[d]?.state,h=t.states[d]?.state;if(m!==h){o=!0;break}}}if(o)this._updateDataInPlace();else{let c=this.config.sun_entity||"sun.sun";i.states[c]!==t.states[c]&&this.applySkyPhase()}}}_updateDataInPlace(){if(!this.config||!this._hass&&!this.config.dev_mode)return;let t;try{t=Dr(this._hass,this.config,this.currentDevCondition)}catch{return}let{temperature:i,weatherCondition:n,humidity:r,windSpeed:o,windSpeedValue:s,windBearing:l,pressure:c,pressureValue:d,feelsLike:m,indoorTemperature:h,indoorHumidity:p,uv:g,sun:u}=t;this.currentWindSpeedValue=s;let f=!!this.extras?.away(),w=this.config.entity?this._hass?.states[this.config.entity]?.state:void 0,y=w&&this.extras?.conditionText(w)||n,_=(x,T)=>{x&&x.textContent!==T&&(x.textContent=T)};if(!f){this.fadeThrough(this.querySelector(".temperature-value"),i),this.fadeThrough(this.querySelector(".weather-desc"),y);let x=(A,C)=>{_(this.querySelector(`.weather-attributes .attribute[data-kind="${A}"] .attribute-text`),C)};f||(x("humidity",r),x("wind",o),x("pressure",c),this.setUv(g)),f||this.syncValueIcon("wind","wind-bearing-arrow",typeof l=="number"?{icon:"mdi:navigation",transform:`rotate(${l+180}deg)`,label:as(l)}:null);let T=this.updatePressureTrend(d);if(this.syncValueIcon("pressure","pressure-trend",T?{icon:os(T),label:`Pressure ${T}`,className:T}:null),u){let A=this.querySelector('.weather-attributes .attribute[data-kind="sun"]'),C=A?.querySelector(".attribute-text"),S=li(pe(u.aboveHorizon?u.sunset:u.sunrise,this._hass),"awc-ampm");C&&C.innerHTML!==S&&(C.innerHTML=S),_(A?.querySelector(".attribute-label > span")??null,st(this._hass,u.aboveHorizon?"sunset":"sunrise")),Yo(A?.querySelector(".attribute-icon"),ss(u.aboveHorizon))}}let b=this.querySelector(".compact-meta .awc-meta-text");b&&_(b,this.compactMeta(t.location,m)),_(this.querySelector(".location .awc-place"),t.location);let v=this.querySelector(".hero-meta");if(v){let x=this.heroMetaHtml(m,h,p),T=v.querySelector(".awc-line");Array.from(v.children).filter(C=>C!==T).map(C=>C.outerHTML).join("")!==x&&(v.innerHTML=x,T&&v.prepend(T))}this.updateNote(),this.applySkyPhase(),this.applySizeState(),this.animationController&&this.animationController.setWindSpeed(s)}setUv(t){let i=this.querySelector('.weather-attributes .attribute[data-kind="uv"]');if(!i||!this.config)return;let n=Or(this._hass,this.config,t),r=i.querySelector(".attribute-text");r&&r.textContent!==n.text&&(r.textContent=n.text),n.level?i.dataset.level=n.level:delete i.dataset.level}updatePressureTrend(t){return typeof t!="number"?this._pressureTrend??null:(typeof this._lastPressureValue!="number"?this._lastPressureValue=t:Math.abs(t-this._lastPressureValue)>=.5&&(this._pressureTrend=t>this._lastPressureValue?"rising":"falling",this._lastPressureValue=t),this._pressureTrend??null)}syncValueIcon(t,i,n){let r=this.querySelector(`.weather-attributes .attribute[data-kind="${t}"] .attribute-value`);if(!r)return;let o=r.querySelector(`.${i}`);if(!n){o?.remove();return}o||(o=document.createElement("ha-icon"),r.appendChild(o)),o.className=[i,n.className].filter(Boolean).join(" "),o.getAttribute("icon")!==n.icon&&o.setAttribute("icon",n.icon),o.setAttribute("aria-label",n.label),o.style.transform=n.transform??""}typeIn(t){if(this.noteTyping?.finish(),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||this.config?.animate===!1)return;let i=Array.from(t.querySelectorAll(".note-long, .note-short")).map(h=>{let p=h.textContent??"",g=document.createElement("span");g.className="note-typed";let u=document.createElement("span");return u.className="note-untyped",u.textContent=p,h.replaceChildren(g,u),{span:h,text:p,typed:g,rest:u}}),n=Math.max(0,...i.map(h=>h.text.length)),r=Math.min(hd,Math.max(dd,n*cd)),o=window.requestAnimationFrame?.bind(window)??(h=>window.setTimeout(()=>h(Date.now()),16)),s=window.cancelAnimationFrame?.bind(window)??window.clearTimeout.bind(window),l=Date.now(),c=0,d={text:i.map(h=>h.text).join(""),finish:()=>{s(c);for(let h of i)h.span.textContent=h.text;this.noteTyping===d&&(this.noteTyping=void 0)}},m=()=>{let h=Math.min(1,(Date.now()-l)/r);for(let p of i){let g=Math.round(h*p.text.length);p.typed.textContent=p.text.slice(0,g),p.rest.textContent=p.text.slice(g)}h<1?c=o(m):d.finish()};this.noteTyping=d,c=o(m)}fadeThrough(t,i,n){if(!t)return;let r=this.heroTextPending.get(t);if((r??t.textContent)===i)return;let o=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(typeof t.animate!="function"||o){t.textContent=i,n?.();return}if(this.heroTextPending.set(t,i),r!==void 0)return;let s=()=>{let c=this.heroTextPending.get(t);this.heroTextPending.delete(t),c!==void 0&&(t.textContent=c),n?.()},l=t.animate([{opacity:1},{opacity:0}],{duration:md,easing:"cubic-bezier(0.5, 0, 0.75, 0)",fill:"forwards"});l.onfinish=()=>{s(),t.animate([{opacity:0,transform:"translateY(0.12em)"},{opacity:1,transform:"none"}],{duration:pd,easing:"cubic-bezier(0.25, 1, 0.5, 1)"}),l.cancel()},l.oncancel=s}get hass(){return this._hass}startPlanes(){if(!this.config||this.planes||!this.config.flights_entity&&!this.config.dev_mode)return;this.planesWanted=!0;let t=window.AnimatedWeatherCardPlanes;if(!t){Re("animated-weather-card-planes",()=>!!window.AnimatedWeatherCardPlanes).then(()=>{this.planesWanted&&this.isConnected&&this.startPlanes()}).catch(n=>console.warn(`Animated Weather Card: ${n.message}`));return}let i=new t(this,{intensity:1,scale:1,devMode:this.config.dev_mode||!1},this.config);this.planes=i,i.start().then(()=>{this.animationsPaused?i.pause():this.planes===i&&this.flyHeldPlanes()}).catch(n=>{console.error("Failed to start plane fly-overs:",n),this.planes===i&&(this.planes=void 0)})}stopPlanes(){this.planesWanted=!1;let t=this.planes;t&&(this.planes=void 0,t.destroy().catch(i=>k(this.config?.dev_mode,"Error stopping plane fly-overs:",i)))}handleFlightUpdates(){if(!this.config?.flights_entity)return;let t=this._hass?.states[this.config.flights_entity];if(t&&t===this.lastFlightsState)return;this.lastFlightsState=t;let i=!this.flightTracker.seeded,n=!!this.config.planes_on_load&&this.surface!=="view",r=this.flightTracker.update(Sr(this._hass,this.config.flights_entity),n);r.length&&(i&&(!this.planes||this.animationsPaused)?this.heldPlanes=new Set(r.map(o=>o.id)):this.flyPlanes(r))}flyHeldPlanes(){let t=this.heldPlanes;if(!t||!this.planes||this.animationsPaused)return;this.heldPlanes=void 0;let i=(Sr(this._hass,this.config?.flights_entity)??[]).filter(n=>!n.onGround&&t.has(n.id));i.length&&this.flyPlanes(i)}flyPlanes(t){!this.planes||this.animationsPaused||this.planes.flyOver(t,{night:this.config?.color_palette!=="theme"&&this.isNightForPlanes(),showLabels:this.config?.show_flight_labels!==!1,labelMode:this.config?.flight_label,speed:this.config?.plane_speed})}isNightForPlanes(){return this.querySelector(".animated-weather-card")?.classList.contains("clear-night")?!0:this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride)?this.timeOfDayManager.getCurrentState().isNighttime:this._hass?.states[this.config?.sun_entity||"sun.sun"]?.state==="below_horizon"}updateAutoPause(){if(this.noteVisible&&this.noteWriter?.wake(),this.extras?.seen(this.noteVisible),this.wasManuallyPaused)return;let t=this.tabHidden||this.offscreen||!!this.config?.auto_pause&&this.windowBlurred;t!==this.animationsPaused&&this.setAnimationsPaused(t)}setupVisibilityTracking(){this.visibilityChangeHandler||this.isConnected&&(this.tabHidden=document.hidden,this.visibilityChangeHandler=()=>{this.tabHidden=document.hidden,this.updateAutoPause()},document.addEventListener("visibilitychange",this.visibilityChangeHandler),typeof IntersectionObserver<"u"&&(this.intersectionObserver=new IntersectionObserver(t=>{this.offscreen=!t[t.length-1].isIntersecting,this.updateAutoPause()},{rootMargin:"100px"}),this.intersectionObserver.observe(this)),this.config?.auto_pause&&(this.windowFocusHandler=()=>{this.windowBlurred=!1,this.updateAutoPause()},this.windowBlurHandler=()=>{this.windowBlurred=!0,this.updateAutoPause()},window.addEventListener("focus",this.windowFocusHandler),window.addEventListener("blur",this.windowBlurHandler)),this.updateAutoPause())}removeVisibilityTracking(){this.visibilityChangeHandler&&(document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.visibilityChangeHandler=null),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0,this.windowFocusHandler&&(window.removeEventListener("focus",this.windowFocusHandler),this.windowFocusHandler=null),this.windowBlurHandler&&(window.removeEventListener("blur",this.windowBlurHandler),this.windowBlurHandler=null),this.tabHidden=!1,this.offscreen=!1,this.windowBlurred=!1}disconnectedCallback(){xr(this),window.removeEventListener(Ne,this.onNeedle),cancelAnimationFrame(this.starFrame),this.conditionChangeTimeout&&clearTimeout(this.conditionChangeTimeout),this.conditionChangeTimeout=void 0,clearTimeout(this.noteExpiryTimer),this.noteExpiryTimer=void 0,this.noteWriter?.stop(),this.noteTyping?.finish(),this.extras?.destroy(),this.extras=void 0,this.forecastFeed.stop(),this.clearAnimations(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.removeVisibilityTracking(),this.devPanel?.disconnect(),this.timeOfDayManager&&(this.timeOfDayManager.destroy(),this.timeOfDayManager=void 0),lr(this.pendingTimeouts)}initializeTimeOfDayManager(){if(this.timeOfDayManager&&this.timeOfDayManager.destroy(),this.timeOfDayManager=new nn({enableDayNightCycle:this.config?.enable_day_night_cycle||!1,sunriseHour:this.config?.sunrise_hour||6,sunsetHour:this.config?.sunset_hour||20,useBrowserTime:!0}),this.timeOfDayManager=this.timeOfDayManager,this.timeOfDayManager.addListener(t=>{this.onTimeOfDayChanged(t)}),this.config?.enable_day_night_cycle){let t=this.timeOfDayManager.getCurrentState();this.updateDayNightBackground(t)}}onTimeOfDayChanged(t){this.config?.enable_day_night_cycle&&(k(this.config?.dev_mode,`Time of day changed to: ${t.timePhase}`),this.updateDayNightBackground(t))}updateDayNightBackground(t){this.applySkyPhase()}currentSkyPhase(){if(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))return this.timeOfDayManager.getCurrentState().timePhase;let t=this._hass?.states[this.config?.sun_entity||"sun.sun"];if(!t)return"day";let i=t.attributes?.elevation;return Ui(typeof i=="number"?i:Number(i),!!t.attributes?.rising,t.state!=="below_horizon")}skyIsNight(){if(!(!(this.timeOfDayManager&&(this.timeOfDayManager.isEnabled()||this.devTimeOverride))&&!this._hass?.states[this.config?.sun_entity||"sun.sun"]))return this.currentSkyPhase()==="night"}applySkyPhase(){let t=this.querySelector(".animated-weather-card");if(!t)return;let i=this.currentSkyPhase();t.dataset.phase!==i&&(t.dataset.phase=i),this.applyMoon(t)}applyMoon(t){let i=t.querySelector(".animation-layer");if(!i)return;let n=this.config?.moon_entity,r=Ko(new Date,n?this._hass?.states[n]?.state:void 0),o=(this.latitude()??0)<0,s=`${r.toFixed(3)}${o?"s":"n"}`;if(i.dataset.moon===s)return;i.dataset.moon=s;let l=jo(r,o);i.style.setProperty("--awc-moon-mask",l.mask),i.style.setProperty("--awc-moon-halo",l.halo)}latitude(){let t=Number(this._hass?.config?.latitude);return this._hass?.config?.latitude!==void 0&&isFinite(t)?t:void 0}applySizeState(){let t=this.querySelector(".animated-weather-card"),i=t?.querySelector(".weather-info");if(!t||!i)return;cancelAnimationFrame(this.starFrame),this.starFrame=requestAnimationFrame(()=>Lo(t));let n=t.querySelector(".main-weather-info"),r=t.querySelector(".weather-attributes");if(t.dataset.height="regular",t.querySelector(".awc-hero-clock")?.style.removeProperty("font-size"),r){let u=t.dataset.metrics;t.dataset.metrics="row";let f=Array.from(r.children),w=parseFloat(getComputedStyle(r).columnGap)||0,y=f.reduce((v,x)=>v+x.getBoundingClientRect().width,0)+w*Math.max(0,f.length-1),_=r.clientWidth-y,b=_<-.5||u==="grid"&&_<fd;t.dataset.metrics=b?"grid":"row"}let o=t.dataset.variant==="compact",s=o?t.querySelector(".weather-desc"):null,l=t.querySelector(".weather-note"),c=()=>i.scrollHeight>i.clientHeight+1||!o&&!!n&&n.scrollHeight>n.clientHeight+1||!!s&&s.scrollWidth>s.clientWidth+1||!!l&&!l.hidden&&l.scrollHeight>l.clientHeight+1,m=!!l&&!l.hidden?gd:ls.map(u=>[u,void 0]),h=([u,f])=>{t.dataset.height=u,f?t.dataset.note=f:delete t.dataset.note},p=this.extras,g=p?.levels()??[];if(!p||!g.length){for(let u of m)if(h(u),!c())break;p?.fitted();return}for(let u=0;u<g.length;u++){p.setLevel(g[u]);let f=u===g.length-1;for(let w of m){if(!f&&!["regular","close","compact"].includes(w[0]))break;if(h(w),!c()&&(f||p.levelOk(c))){p.fitted();return}}}p.fitted()}getGridOptions(){return this.config?.compact?{columns:12,rows:2,min_columns:6,min_rows:1}:{columns:12,rows:this.gridRows(),min_columns:6,min_rows:3}}gridRows(){let t=this.noteEnabled()?1:0;return this.config?.layout==="nightstand"?6:this.config?.show_forecast&&!this.config.dev_mode?(ze(this.config.entity?this._hass?.states[this.config.entity]:void 0).includes("hourly")?8:5)+t:4+t}getCardSize(){if(this.config?.compact)return 2;let t=3;return this.config?.show_indoor!==!1&&(t+=1),this.config?.show_attributes!==!1&&(t+=1),this.noteEnabled()&&(t+=1),this.config?.show_forecast&&(t+=3),t}static async getConfigElement(){return customElements.get("animated-weather-card-editor")||await mi("animated-weather-card-editor"),document.createElement("animated-weather-card-editor")}};customElements.define("animated-weather-card",hn);var Gr=class extends hn{constructor(){super(),this.surface="forecast"}setConfig(e){if(!e.entity)throw new Error("Please define a weather entity (entity: weather.home)");super.setConfig(e)}gridRows(){if(this.config?.compact)return 2;let e=this.config?.show_hours!==!1&&ze(this.config?.entity?this.hass?.states[this.config.entity]:void 0).includes("hourly"),t=Math.max(0,Math.min(10,this.config?.forecast_days??7));return e?t<=3?5:7:Math.max(3,Math.ceil((58+t*32+20)/64))}getCardSize(){return this.config?.compact?2:this.gridRows()}static getStubConfig(e,t=[],i=[]){let n=[...t,...i,...Object.keys(e?.states??{})];return Ie(n.find(r=>r.startsWith("weather."))??ar.entity,e)}static async getConfigElement(){return customElements.get("animated-forecast-card-editor")||await mi("animated-forecast-card-editor"),document.createElement("animated-forecast-card-editor")}};customElements.define("animated-forecast-card",Gr);window.customCards=window.customCards||[];window.customCards.push({type:"animated-weather-card",name:"Animated Weather Card",description:"The weather as a moving sky that follows the sun, with the temperature, feels like, wind, humidity, pressure and sunset",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Regular",config:{type:"custom:animated-weather-card",...Ie(e,a)}},{label:"Compact",config:{type:"custom:animated-weather-card",...Ie(e,a),compact:!0}}]:null});window.customCards.push({type:"animated-forecast-card",name:"Animated Forecast",description:"The next hours and days of a weather entity, in its own sky: drag through the hours and the sky goes there",preview:!0,documentationURL:"https://github.com/alexsto1an/ha-ani-weather-card#the-forecast-card",getEntitySuggestion:(a,e)=>e.startsWith("weather.")?[{label:"Forecast",config:{type:"custom:animated-forecast-card",...Ie(e,a)}},{label:"Forecast strip",config:{type:"custom:animated-forecast-card",...Ie(e,a),compact:!0}}]:null});if(!window.animatedWeatherCardBannerShown){window.animatedWeatherCardBannerShown=!0;let a=Pe("sunny","day"),e=["display: inline-block","line-height: 12px","font-size: 12px","font-weight: 600","padding: 4px 8px","margin: 5px 0"];console.groupCollapsed(`%c \u26C5 Animated Weather Card %cv${ja} `,[`background: linear-gradient(90deg, ${a.top}, ${a.mid} 55%, ${a.bottom})`,`color: ${It(Mt(Le))}`,"border-radius: 4px 0 0 4px",...e].join(";"),["background: linear-gradient(90deg, #ffd67a, #ffb547)",`color: ${a.top}`,"border-radius: 0 4px 4px 0",...e].join(";")),console.log("%c Readme: %c https://github.com/alexsto1an/ha-ani-weather-card ","font-weight: bold","font-weight: normal"),console.groupEnd()}})();
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
