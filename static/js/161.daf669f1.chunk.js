(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var r=n(1087),i=n(6842),s=n(7892),a=n.n(s),u=n(184),c=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/mysite").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Simulation of Zonal flows in rotating-RBC",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",image:"/images/projects/RBC_setup.png",date:"2022-12-05",desc:"Working on flows along different latitudes of gas giants such as Jupiter, with specific interest to flow along the equitorial regions called the zonal flows,modelling them in rotating RBC setup, studying the dynamics and energetics of the same,Ongoing, more to come after producible results are achieved."},{title:"Single Molecular Transistor",subtitle:"2015 BVP Hackathon",link:"https://aip.scitation.org/doi/10.1063/5.0016104",image:"/images/projects/nearestdollar.jpg",date:"2018-05-20",desc:"Summer Research Internship at the Dept. of Physics under Dr. Soumya Jyoti Ray. Was involved in the field of Nanoelectronics. My role was to visualize, study and analyze the data files that my guide had  Give results and account for the observations from the visualisation."},{title:"applied superconductivity and accelerator technology",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://www.comsol.com/paper/superconducting-magnetic-system-83801",image:"/images/projects/harvest.jpg",date:"2019-05-15",desc:"Worked at the Electromagnetic Application and Instrumentation Division, Bhabha Atomic Research Centre, Mumbai. Project was related to design and development of superconducting magnet system for mass spectroscopy.,  Familiarized with applied superconductivity, cryogenics and accelerator technology."}],h=function(){return(0,u.jsx)(i.Z,{title:"Projects",description:"Learn about Siddhant Mishra's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I've presented at conferences or published in academic journals."})]})}),o.map((function(t){return(0,u.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",c="week",o="month",h="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:c,d:u,D:d,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=$;var D=function(t){return t instanceof b},w=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,i=u}return!r&&i&&(v=i),i||!r&&v},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},j=y;j.l=w,j.i=D,j.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function $(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!j.u(e)||e,h=j.p(t),f=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return r?f(1,0):f(31,11);case o:return r?f(1,$):f(0,$+1);case c:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return f(r?g-M:g+(6-M),$);case u:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=j.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[d]=h+"Date",n[o]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[c],m=c===u?this.$D+(e-this.$W):e;if(c===o||c===l){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(r,h){var d,f=this;r=Number(r);var m=j.p(h),p=function(t){var e=S(f);return j.w(e.date(e.date()+Math.round(t*r)),f)};if(m===o)return this.set(o,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===u)return p(1);if(m===c)return p(7);var $=(d={},d[s]=e,d[a]=n,d[i]=t,d)[m]||1,g=this.$d.getTime()+r*$;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,h=n.meridiem,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return j.s(s%12||12,t,"0")},m=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return u+1;case"MM":return j.s(u+1,2,"0");case"MMM":return l(n.monthsShort,u,o,3);case"MMMM":return l(o,u);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,c,2);case"ddd":return l(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return j.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,d,f){var m,p=this,$=j.p(d),g=S(r),y=(g.utcOffset()-this.utcOffset())*e,v=this-g,M=function(){return j.m(p,g)};switch($){case l:m=M()/12;break;case o:m=M();break;case h:m=M()/3;break;case c:m=(v-y)/6048e5;break;case u:m=(v-y)/864e5;break;case a:m=v/n;break;case s:m=v/e;break;case i:m=v/t;break;default:m=v}return f?m:j.a(m)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),k=b.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",o],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=M[v],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=161.daf669f1.chunk.js.map