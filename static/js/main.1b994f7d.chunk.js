(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(228)},225:function(e){e.exports={type:"Update",version:"1560149505593",description:"alerts"}},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(97),r=a.n(s),o=a(42),c=a(43),i=a(7),u=a(8),m=a(10),d=a(9),v=a(11),h=(a(40),a(22)),b=function(e){var t=e.value,a="busy"===t?"badge-red":"badge-green";return l.a.createElement("div",{className:"badge ".concat(a)},t)},f=function(){return l.a.createElement("div",{className:"badge"},l.a.createElement("div",{className:"badge-bugs"}))},p={esd:"SSF",cmdb:"CMDB",mm:"SSP",MM_stage:"SSP STAGE",MM_stage2:"SSP STAGE2",MM_us:"SSP US",MM_eu:"SSP EU"},g=function(e){e.type;var t=e.env,a=e.bugs;return l.a.createElement("div",{className:"card-header ".concat(a?"bugs-style":"")},l.a.createElement("div",{className:"env-name"},p[t]||t),a?l.a.createElement(f,null):l.a.createElement(b,{value:"busy"}))},E=function(e){var t=e.children;return l.a.createElement("div",{className:"card-body"},t)},y={deploys:["user","branch","tag","updated","date"],installation:["user","branch","tag","version","updated","date"],tests:["date","updated"]},S={deploys:{date:1},installation:{date:1,branch:1,tag:1},tests:{}},O=function(e){return y[e]||null},N="fail",C="pass",k="running",w=function(e){var t=e.user,a=e.date,n=t.replace("/","");return l.a.createElement("div",{className:"user-card"},l.a.createElement("div",{className:"image-holder"},l.a.createElement("img",{alt:"user",src:"https://avatars1.githubusercontent.com/".concat(n)})),l.a.createElement("div",{className:"user-holder"},l.a.createElement("div",{className:"name-holder"},n),l.a.createElement("div",{className:"user-date"},a)))},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={timeAgo:"--"},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"calculateTime",value:function(){var e=this.props.timestamp;if(e){var t=function(e){var t=(new Date).getTime()/1e3-e,a=Math.floor(t/86400);t-=86400*a;var n=Math.floor(t/3600)%24;t-=3600*n;var l=Math.floor(t/60)%60;t-=60*l;var s=Math.floor(t%60);return"".concat(a?"".concat(a,"d"):""," ").concat(n?"".concat(n,"h"):""," ").concat(l?"".concat(l,"m"):""," ").concat(s?"".concat(s,"s"):""," ago")}(e);this.setState({timeAgo:t})}}},{key:"timeAgoTimer",value:function(){var e=this;setInterval(function(){e.calculateTime()},1e3)}},{key:"componentDidMount",value:function(){this.timeAgoTimer()}},{key:"render",value:function(){return l.a.createElement("span",null,this.state.timeAgo)}}]),t}(n.Component),B=function(e,t){return"updated"===e&&t.timestamp?l.a.createElement(j,{timestamp:t.timestamp}):"user"===e?l.a.createElement(w,{user:t.user,date:t.date}):t[e]},L=function(e){var t=e.type,a=e.data,n=O(t),s=S[t]||{};return n?l.a.createElement("ul",null,n.map(function(e){return!s[e]&&function(e,t,a){return"user"===e?l.a.createElement("li",{key:e},B(e,t)):l.a.createElement("li",{key:e},l.a.createElement("span",{className:"list-key"},e,":"),l.a.createElement("span",{className:"list-val"},B(e,t)))}(e,a)})):l.a.createElement("ul",null,l.a.createElement("li",null,"no such type"))},I=function(e){var t=e.name,a=e.failed,n=e.total,s=0===a?"test-success":function(e,t){var a=100*e/t;return a<5?"test-minor":a>=5&&a<10?"test-major":"test-fail"}(a,n);return l.a.createElement("ul",{className:"test-thread-box ".concat(s)},l.a.createElement("li",{className:"test-thread-name"},t),l.a.createElement("li",{className:"test-thread-value"},"".concat(a,"/").concat(n)))},A=function(){return l.a.createElement("ul",{className:"test-thread-box"},l.a.createElement("li",{className:"test-thread-loading"},l.a.createElement("div",{className:"bouncing_loading"},l.a.createElement("div",{className:"bounce1"}),l.a.createElement("div",{className:"bounce2"}),l.a.createElement("div",{className:"bounce3"}))))},D=function(e,t){return l.a.createElement("li",{key:t,className:"thread-box"},e)},M=function(e,t){var a=Object.keys(e).length;if(0===a)return D(l.a.createElement(A,null),1);var n=[];return Object.keys(e).forEach(function(t){var a=e[t];n.push(D(l.a.createElement(I,{key:t,name:t,failed:a.failed,total:a.total}),t))}),function(e){return Object.keys(e).some(function(t){return e[t]})}(t)&&n.push(D(l.a.createElement(A,{key:a+1}),a+1)),n},x=function(e){var t=e.browsers,a=e.threadsRunning,n=(e.date,e.status);return l.a.createElement("div",{className:"tests-body"},l.a.createElement("div",{className:"tests-inner-body"},l.a.createElement("div",{className:"tests-header-container"},l.a.createElement("div",{className:"tests-header"},"Test Status"),l.a.createElement("div",{className:"tests-status st-status-".concat(n)},function(e){switch(e){case"fail":return"Failed";case"pass":return"Passed";case"running":return"Running...";default:return""}}(n))),l.a.createElement("div",{className:"test-threads-body-container"},l.a.createElement("ul",{className:"test-threads-body"},M(t,a)))))},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={user:"--",date:"--",branch:"--",tag:"--",version:"--",timestamp:0,failed:"--",passed:"--",threadsRunning:{},browsers:{}},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"createStateObj",value:function(e,t,a,n,l){return{user:e[t]&&e[t].user||"n/a",date:e[t]&&e[t].date||"n/a",branch:e[t]&&e[t].branch||"n/a",timestamp:e[t]&&e[t].timestamp||0,version:e[t]&&e[t].version||"n/a",tag:e[t]&&e[t].tag||"n/a",browsers:a,threadsRunning:n,status:l}}},{key:"testsRunning",value:function(e){return Object.keys(e).some(function(t){return e[t]})}},{key:"testsFailed",value:function(e){return Object.keys(e).some(function(t){return e[t].failed>0})}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.env,n=t.type;(n||a)&&h.database().ref().child(n).on("value",function(t){var l=t.val(),s=k;l||(l=JSON.parse(localStorage.getItem(n)));var r=l[a]&&function(e){if(e){var t={};return Object.keys(e).forEach(function(a){var n=0,l=0;t[a]={},Object.keys(e[a]).forEach(function(t){var s=e[a][t];n+=parseInt(s.total,0),l+=parseInt(s.failed,0)}),t[a].total=n,t[a].failed=l}),t}}(l[a].browsers)||{},o=l[a]&&l[a].threads_running||{};!e.testsRunning(o)&&Object.keys(r).length>0&&(s=e.testsFailed(r)?N:C),e.setState(e.createStateObj(l,a,r,o,s))})}},{key:"extractDataFromState",value:function(e){var t=this,a=O(e)||[],n=this.state,l=n.browsers,s=n.threadsRunning,r=n.timestamp;return a.reduce(function(e,a){return e[a]=t.state[a],e},{browsers:l,threadsRunning:s,timestamp:r})}},{key:"render",value:function(){var e=this.props,t=e.env,a=e.type,n=e.tests,s=this.state.status,r=this.extractDataFromState(a);return l.a.createElement("div",{className:"card"},l.a.createElement(g,{type:a,env:t}),l.a.createElement(E,null,l.a.createElement(L,{type:a,data:r})),n&&l.a.createElement(x,{browsers:r.browsers,threadsRunning:r.threadsRunning,date:new Date(1e3*r.timestamp),status:s}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={slidesCount:e.children({}).length,showIndex:0,windowWidth:0,timer:null,offSet:50,timerValue:3e4},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"enableTimer",value:function(){var e=this;return setInterval(function(){e.setState({showIndex:(e.state.showIndex+1)%e.state.slidesCount})},this.state.timerValue)}},{key:"componentDidMount",value:function(e){var t=this.props,a=t.enableCarousel,n=t.showOnlySlide;if(a){var l=this.enableTimer();this.setState({timer:l}),this.props.setTotalSlides(this.state.slidesCount)}else this.setState({showIndex:n})}},{key:"componentWillReceiveProps",value:function(e){if(e.enableCarousel!==this.props.enableCarousel)if(e.enableCarousel){var t=this.enableTimer();this.setState({timer:t}),console.log("Carousel enable timer")}else console.log("Carousel disable timer"),clearInterval(this.state.timer);this.props.enableCarousel||e.showOnlySlide===this.props.showOnlySlide||(console.log("set default slide"),this.setState({showIndex:e.showOnlySlide}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.props.children,t=this.state.showIndex,a=(this.refs.slideClosure?this.refs.slideClosure.offsetWidth:0)*t*-1;return l.a.createElement("ul",{className:"carousel",ref:"slideClosure"},e({showIndex:t,margin:a}))}}]),t}(n.Component),G=function(e){var t=e.children,a=e.style;return l.a.createElement("li",{style:Object(o.a)({transition:"all 0.5s cubic-bezier(0.43, 0.2, 0.96, 0.99)"},a),className:"slide"},t)},T=function(e){var t=e.data,a=e.envName,n=(t=t||{})[a]||0,s=n.dirty,r=s?"busy":"free",o=s?"dirty":"clean",c=n.user;return l.a.createElement("div",{className:"statusBlock"},l.a.createElement("div",{className:"st-name"},p[a]),l.a.createElement("div",{className:"st-value ".concat(r)},o),s&&l.a.createElement("div",{className:"st-user busy"},c))},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={data:null},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().child("master_status").on("value",function(t){var a=t.val();e.setState({data:a})})}},{key:"render",value:function(){var e=this.props.title;return l.a.createElement("div",{className:"header"},l.a.createElement("ul",{className:"header-list"},l.a.createElement("li",{className:"main-title"}," ",e," "),l.a.createElement("li",null,l.a.createElement(T,Object.assign({},this.state,{envName:"cmdb"}))),l.a.createElement("li",null,l.a.createElement(T,Object.assign({},this.state,{envName:"esd"}))),l.a.createElement("li",null,l.a.createElement(T,Object.assign({},this.state,{envName:"mm"})))))}}]),t}(l.a.Component),P=a(99),U=a(98),K=a.n(U),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={total:null,data:null,constLinks:{SMILE:1,SAD:2,HYSTERICAL:3,BLOCK_GOOD:5,BLOCK_BAD:10,QUE_GOOD:60,QUE_BAD:80,BUGS_URL:"https://samanage-node-proxy.herokuapp.com/",SSF_BLOCK:"SSF",SSP_BLOCK:"SSP",SSP_ALL:"SSP-ALL",SSF_ALL:"SSF-ALL"}},a.getData=function(){var e=a.props.type,t=a.state.constLinks,n=t.BUGS_URL;K.a.get("".concat(n).concat(t[e])).then(function(e){return a.setState({total:e.data.Items.length,data:e.data.Items})})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData(),this.timer=setInterval(function(){e.getData()},18e5)}},{key:"componentWillMount",value:function(){clearInterval(this.timer)}},{key:"getLevel",value:function(e){var t=this.props.type,a=this.state.constLinks,n=a.SMILE,l=a.SAD,s=a.HYSTERICAL,r=t.match(/BLOCK/gi)?[a.BLOCK_GOOD,a.BLOCK_BAD]:[a.QUE_GOOD,a.QUE_BAD],o=Object(P.a)(r,2),c=o[0],i=o[1];return e<c?n:e>=c&&e<=i?l:s}},{key:"render",value:function(){var e=this.props,t=e.env,a=e.type,n=this.state.total,s=this.getLevel(n||0);return l.a.createElement("div",{className:"card"},l.a.createElement(g,{env:t,type:a,bugs:!0}),l.a.createElement(E,null,null===n?l.a.createElement(A,null):l.a.createElement("div",{className:"bugs-stat-view"},l.a.createElement("div",{className:"number color-bugs-".concat(s)},n),l.a.createElement("div",{className:"level emoji-level-".concat(s)}))))}}]),t}(l.a.Component),W=function(e){var t=e.enableCarousel,a=e.setTotalSlides,n=e.showOnlySlide;return l.a.createElement("div",{className:"simple-board"},l.a.createElement(F,{title:"master status"}),l.a.createElement(_,{showOnlySlide:n,enableCarousel:t,setTotalSlides:a},function(e){e.showIndex;var t=e.margin;return[l.a.createElement(G,{style:{marginLeft:t},key:"1"},l.a.createElement(R,{type:"deploys",env:"review"}),l.a.createElement(R,{type:"deploys",env:"build"}),l.a.createElement(R,{type:"installation",env:"dev10"}),l.a.createElement(R,{type:"tests",env:"NewDev12",tests:!0}),l.a.createElement(R,{type:"tests",env:"CMDB",tests:!0})),l.a.createElement(G,{key:"2"},l.a.createElement(R,{type:"tests",env:"MM_stage",tests:!0}),l.a.createElement(R,{type:"tests",env:"MM_us",tests:!0}),l.a.createElement(R,{type:"tests",env:"MM_eu",tests:!0})),l.a.createElement(G,{key:"3"},l.a.createElement(V,{type:"SSP_BLOCK",env:"SSP BLOCKERS"}),l.a.createElement(V,{type:"SSF_BLOCK",env:"SSF BLOCKERS"}),l.a.createElement(V,{type:"SSF_ALL",env:"SSF BUGS IN QUEUE"}),l.a.createElement(V,{type:"SSP_ALL",env:"SSP BUGS IN QUEUE"}))]}))},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={samboardKey:"samboardKey",show:!1},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"activateSlide",value:function(){var e=this;setTimeout(function(){e.setState({fxClass:"n-msg-slide"})},2e3)}},{key:"activateSelfKill",value:function(){var e=this;setTimeout(function(){e.setState({show:!1})},1e4)}},{key:"componentDidMount",value:function(){var e=this.state.samboardKey,t=a(225),n=JSON.parse(localStorage.getItem(e))||{};t.version&&t.version!==n.version&&(this.setState({show:!0,ver:t}),localStorage.setItem(e,JSON.stringify(t)),this.activateSlide(),this.activateSelfKill())}},{key:"render",value:function(){var e=this.state,t=e.ver,a=e.show,n=e.fxClass;return a?l.a.createElement("div",{className:"n-msg ".concat(n||"")},l.a.createElement("div",{className:"n-msg-header"},"".concat(t.type," - Build(").concat(new Date(parseInt(t.version,10)).toLocaleDateString(),")")),l.a.createElement("div",{className:"n-msg-body"},t.description)):null}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={runValue:-100,timer:null,schedule:null},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){this.props.enableBB8&&this.applyForNewRun()}},{key:"componentWillReceiveProps",value:function(e){e.enableBB8!==this.props.enableBB8&&(e.enableBB8?(this.applyForNewRun(),console.log("enable bb8")):(clearTimeout(this.state.schedule),clearInterval(this.state.timer),console.log("disable bb8")))}},{key:"getRandom",value:function(){return Math.floor(30*Math.random())+1}},{key:"applyForNewRun",value:function(){var e=this;return setTimeout(function(){e.run()},6e4*this.getRandom())}},{key:"run",value:function(){var e=this,t=setInterval(function(){e.refs.bb8.style.marginRight=e.state.runValue+"px",e.setState({runValue:e.state.runValue+2},function(){if(e.state.runValue>window.outerWidth+100){clearInterval(e.state.timer);var t=e.applyForNewRun();e.setState({runValue:-100,timer:null,schedule:t})}})},5);this.setState({timer:t})}},{key:"render",value:function(){var e=this.props.enableBB8;return this.state.timer&&e?l.a.createElement("div",{ref:"bb8",className:"move-bb8"},l.a.createElement("div",{className:"bb8"})):null}}]),t}(n.Component),q=function(e){var t=e.children;return l.a.createElement("div",{className:"cfg-row"},t)},z=function(e){var t=e.onClose;return l.a.createElement("div",{className:"close-holder",onClick:t},l.a.createElement("div",{className:"close"},"Done"))},Y={0:"SSF",1:"SSP",2:"Bugs"},H=function(e){var t=e.onClose,a=e.toggleCarousel,n=e.toggleBB8,s=e.enableCarousel,r=e.enableBB8,o=e.totalSlides,c=e.setShowOnlySlide,i=e.showOnlySlide,u=e.toggleCustomGeolocation,m=e.lat,d=e.lon,v=e.customGeolocation,h=e.setLat,b=e.setLon;return l.a.createElement("div",{className:"config-box"},l.a.createElement("div",{className:"config-header"},"Configuration"),l.a.createElement("div",{className:"basic-config-box"},l.a.createElement(q,null,l.a.createElement("label",{htmlFor:"enableCarousel"},"Enable Carousel"),l.a.createElement("input",{name:"enableCarousel",onChange:a,checked:s,id:"enableCarousel",type:"checkbox"})),l.a.createElement(q,null,l.a.createElement("label",{className:s?"opacity":"",htmlFor:"onlySlide"},"Show Only"),l.a.createElement("select",{onChange:function(e){return c(e.target.selectedIndex)},id:"onlySlide",name:"onlySlide",disabled:s,value:i},function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}(o).map(function(e){return l.a.createElement("option",{key:e,value:e},Y[e])}))),l.a.createElement(q,null,l.a.createElement("label",{htmlFor:"enableBB-8"},"Enable BB-8"),l.a.createElement("input",{id:"enableBB-8",onChange:n,checked:r,name:"enableBB-8",type:"checkbox"}))),l.a.createElement("div",{className:"basic-config-box"},l.a.createElement(q,null,l.a.createElement("div",{className:"cfg-row"},l.a.createElement("label",{htmlFor:"enable-custom-geolocation"},"Enable Custom Geolocation"),l.a.createElement("input",{id:"enable-custom-geolocation",onChange:u,checked:v,name:"enable-custom-geolocation",type:"checkbox"})),l.a.createElement("div",{className:"cfg-row"},l.a.createElement("label",{className:v?"":"opacity",htmlFor:"lat"},"Latitude"),l.a.createElement("input",{className:!0,disabled:!v,id:"lat",onChange:function(e){return h(e.target.value)},name:"lat",type:"text",value:m})),l.a.createElement("div",{className:"cfg-row"},l.a.createElement("label",{className:v?"":"opacity",htmlFor:"lon"},"Longitude"),l.a.createElement("input",{disabled:!v,id:"lon",onChange:function(e){return b(e.target.value)},name:"lon",type:"text",value:d})))),l.a.createElement(z,{onClose:t}))},X=function(e){var t=e.onClick;return l.a.createElement("div",{className:"config-button-\ud83c\udf54",onClick:t},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={active:!1,enableCarousel:!0,enableBB8:!1},a.setActive=function(){a.setState({active:!a.state.active})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.active,t=this.props,a=t.toggleCarousel,n=t.toggleBB8,s=t.enableBB8,r=t.enableCarousel,o=t.totalSlides,c=t.setShowOnlySlide,i=t.showOnlySlide,u=t.toggleCustomGeolocation,m=t.lat,d=t.lon,v=t.customGeolocation,h=t.setLat,b=t.setLon;return l.a.createElement("div",null,l.a.createElement(X,{onClick:this.setActive}),e&&l.a.createElement(H,{toggleCarousel:a,toggleBB8:n,onClose:this.setActive,enableBB8:s,enableCarousel:r,totalSlides:o,showOnlySlide:i,setShowOnlySlide:c,toggleCustomGeolocation:u,lat:m,lon:d,customGeolocation:v,setLat:h,setLon:b}))}}]),t}(n.Component),$=function(){h.initializeApp({auth:"AIzaSyCDrjqOVXidkdekquE4MumZAkR9sY5VP94",apiKey:"AIzaSyCDrjqOVXidkdekquE4MumZAkR9sY5VP94",authDomain:"sam-esd-status.firebaseapp.com",databaseURL:"https://sam-esd-status.firebaseio.com",storageBucket:"sam-esd-status.appspot.com"}),h.auth().signInAnonymously().catch(function(e){console.log(e)})},ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state=a.createTimeObject(),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"createTimeObject",value:function(){return{date:(new Date).toString().split(" ").splice(0,3).join(" "),time:(new Date).toString().split(" ")[4]}}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState(e.createTimeObject())},1e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"time-card"},l.a.createElement("div",{className:"date"},this.state.date),l.a.createElement("div",{className:"time"},this.state.time))}}]),t}(n.Component),te=function(e){e.lat,e.lon,e.customGeolocation;return l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"logo-holder"},l.a.createElement("h2",{className:"brand"},"Sam"),l.a.createElement("h2",{className:"brand second"},"Hub")),l.a.createElement("div",{className:"side-right"},l.a.createElement(ee,null)))},ae=function(e){localStorage.setItem("sam-hub",JSON.stringify(e))},ne=function(){return JSON.parse(localStorage.getItem("sam-hub"))||null},le=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggleCustomGeolocation=function(){a.setState({customGeolocation:!a.state.customGeolocation},function(){return ae(a.state)})},a.setShowOnlySlide=function(e){a.setState({showOnlySlide:e},function(){return ae(a.state)})},a.toggleCarousel=function(){a.setState({enableCarousel:!a.state.enableCarousel},function(){return ae(a.state)})},a.toggleBB8=function(){a.setState({enableBB8:!a.state.enableBB8},function(){return ae(a.state)})},a.setTotalSlides=function(e){a.setState({totalSlides:e},function(){return ae(a.state)})},a.setLatOrLong=function(e){return function(t){a.setState(Object(c.a)({},e,t),function(){return ae(a.state)})}},$();var n=ne();return a.state=Object(o.a)({},n||{enableCarousel:!0,enableBB8:!0,showOnlySlide:0,totalSlides:0,customGeolocation:!1,lat:0,lon:0}),n||ae(a.state),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){window.location.reload()},864e5)}},{key:"render",value:function(){var e=this.state,t=e.enableBB8,a=e.enableCarousel,n=e.totalSlides,s=e.showOnlySlide,r=e.customGeolocation,o=e.lat,c=e.lon;return l.a.createElement("div",{className:"App"},l.a.createElement(te,{lat:o,lon:c,customGeolocation:r}),l.a.createElement("div",null,l.a.createElement(W,{enableCarousel:a,setTotalSlides:this.setTotalSlides,showOnlySlide:s}),l.a.createElement(J,null),l.a.createElement(Q,{enableBB8:t}),l.a.createElement(Z,{toggleCarousel:this.toggleCarousel,toggleBB8:this.toggleBB8,enableBB8:t,enableCarousel:a,setShowOnlySlide:this.setShowOnlySlide,totalSlides:n,showOnlySlide:s,toggleCustomGeolocation:this.toggleCustomGeolocation,customGeolocation:r,lat:o,lon:c,setLat:this.setLatOrLong("lat"),setLon:this.setLatOrLong("lon")})))}}]),t}(n.Component);a(226),a(227);alert("here"),r.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})},40:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.1b994f7d.chunk.js.map