(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=(n(102),n(94)),s=n(23),i=(n(103),n(104),n(105),n(106),n(5)),m=function(e){var t=e.children;return r.a.createElement(i.c,{fluid:!0},t)},u=function(){return r.a.createElement(i.c,null,r.a.createElement(i.o,null,r.a.createElement(i.b,null,r.a.createElement("h1",null,"404 PAGE NOT FOUND"))))},d=n(24),f=n(26),b=n(33),p=n(34),E=n(36),h=n(35),v=n(37),g=n(96),y=n(76),N=n(17),S=n(18),x=n(38),_=n.n(x),O=n(9),j=n.n(O),k=n(55),w=n(93),T=n.n(w),R=n(54),C=n.n(R),M=function(e){function t(e){var n;Object(b.a)(this,t),(n=Object(E.a)(this,Object(h.a)(t).call(this,e))).start=function(){var e=n.state,t=e.timer,a=e.duration;void 0===t&&(t=setInterval((function(){n.setState({duration:a.subtract(1,"second")})}),1e3),n.setState({timer:t}),n.props.onStart())},n.stop=function(){var e=n.state.timer,t=n.props,a=t.hours,r=t.minutes,l=t.seconds;void 0!==e&&(clearInterval(e),setTimeout((function(){n.setState({timer:void 0,duration:C.a.duration("PT".concat(a,"H").concat(r,"M").concat(l,"S"))}),n.props.onEnd()}),1e3))},n.handleKeyPress=function(){n.start()},n.componentWillReceiveProps=function(e){var t=e.hours,a=e.minutes,r=e.seconds;n.setState({duration:C.a.duration("PT".concat(t,"H").concat(a,"M").concat(r,"S"))}),e.auto&&n.start()};var a=n.props,r=a.hours,l=a.minutes,o=a.seconds;return n.state={duration:C.a.duration("PT".concat(r,"H").concat(l,"M").concat(o,"S")),timer:void 0,startBtnClass:"text-secondary"},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.duration,l=t.timer,o=t.startBtnClass,c=void 0!==l,s=j.a.padStart(n.seconds(),2,0),m=j.a.padStart(n.minutes(),2,0),u=j.a.padStart(n.hours(),2,0);return 0===n&&this.stop(),r.a.createElement(i.b,{className:"text-center"},c&&r.a.createElement(a.Fragment,null,this.props.title,r.a.createElement("div",{className:"d-inline-block"},u,":",m,":",s)),!c&&r.a.createElement(a.Fragment,null,r.a.createElement(i.o,{className:"vh-100 justify-content-center align-items-center"},r.a.createElement("h1",{className:"".concat(o," countdown-start-icon"),onClick:function(){return e.start()}},r.a.createElement(N.a,{icon:S.a,size:"3x"})))))}}]),t}(a.Component);M.defaultProps={hours:0,minutes:15,seconds:0,auto:!1};var P=M,A=function(e){var t=e.label,n=e.value,a=Object(y.a)(e.range,2),l=a[0],o=a[1],c=e.onSlide,s=Object(g.a)(e,["label","value","range","onSlide"]);return r.a.createElement(i.f,null,r.a.createElement("label",{htmlFor:"mobTimeSetting".concat(t)},r.a.createElement("strong",null,t,": "),r.a.createElement("span",null,n)),r.a.createElement(i.p,Object.assign({id:"mobTimeSetting".concat(t),className:"mt-2 mb-2",step:1,connect:[!0,!1],start:[n],range:{min:l,max:o},onSlide:function(e){var t=Object(y.a)(e,2),n=t[0];t[1];return c(Number(n))}},s)))},I=Object(k.c)((function(){return r.a.createElement(N.a,{className:"mr-2 members-drag",icon:S.b})})),D=Object(k.a)((function(e){var t=e.children;return r.a.createElement(i.i,null,t)})),z=Object(k.b)((function(e){var t=e.member,n=e.onDelete,a=e.disabled;return r.a.createElement(i.j,{className:"members-item d-flex justify-content-between align-items-center"},r.a.createElement("div",null,"Rest Time"!==t&&r.a.createElement(I,null),"Rest Time"===t&&r.a.createElement(N.a,{className:"mr-2",icon:S.d}),t),"Rest Time"!==t&&r.a.createElement(i.a,{theme:"link",size:"sm",disabled:a,onClick:function(){return n(t)}},r.a.createElement(N.a,{className:"text-secondary",icon:S.g})))})),W=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(h.a)(t).call(this,e))).onSubmitNewMember=function(e){e.preventDefault();var t=n.state,a=t.members,r=t.name,l=t.enabled_rest_time;if(-1!==a.indexOf(r))_.a.error("This Name Has Been Taken!!!");else{var o=[r];l&&(a.pop(),o=[].concat(Object(f.a)(o),["Rest Time"])),n.setState({members:[].concat(Object(f.a)(a),Object(f.a)(o)),name:""})}},n.onRemoveMember=function(e){var t=n.state.members,a=t.indexOf(e);-1!==a&&(t.splice(a,1),n.setState({members:t}))},n.onRandomOrder=function(){var e=n.state,t=e.members,a=[];e.enabled_rest_time&&(a=[].concat(Object(f.a)(a),[t.pop()])),t=[].concat(Object(f.a)(j.a.shuffle(t)),Object(f.a)(a)),n.setState({members:t})},n.onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex,r=n.state.members;r=T()(r,t,a),n.setState({members:r})},n.onToggleTooltip=function(e){var t={};t["tt_".concat(e)]=!n.state["tt_".concat(e)],n.setState(Object(d.a)({},n.state,{},t))},n.onToggleRestTime=function(){var e=n.state,t=e.enabled_rest_time,a=e.members;t?a.pop():a=[].concat(Object(f.a)(a),["Rest Time"]),n.setState({enabled_rest_time:!t,members:a})},n.onPlayerStartTurn=function(){var e=n.state,t=e.current_player_index;t=(t+1)%(e.members.length+1),n.setState({current_player_index:t,working:!0})},n.onPlayerEndTurn=function(){},n.state={members:[],interval:{hours:0,minutes:15,seconds:0},name:"",enabled_rest_time:!1,current_player_index:-1,working:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.interval,l=t.members,o=t.name,c=t.current_player_index,s=t.enabled_rest_time,m=t.working;return r.a.createElement(i.c,{fluid:!0},r.a.createElement(i.o,{className:"vh-100"},r.a.createElement(i.b,{md:"4",lg:"3",className:"p-2"},r.a.createElement("div",null,r.a.createElement("h3",{className:"m-0"},"Mob"),r.a.createElement("h3",{className:"m-0"},"Programing"),r.a.createElement("h3",{className:"m-0"},"Timer")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Interval Time"),r.a.createElement(A,{label:"Hours",disabled:m,value:n.hours,range:[0,24],onSlide:function(t){return e.setState({interval:Object(d.a)({},n,{},{hours:t})})}}),r.a.createElement(A,{label:"Minutes",disabled:m,value:n.minutes,range:[0,59],onSlide:function(t){return e.setState({interval:Object(d.a)({},n,{},{minutes:t})})}}),r.a.createElement(A,{label:"Seconds",disabled:m,value:n.seconds,range:[0,59],onSlide:function(t){return e.setState({interval:Object(d.a)({},n,{},{seconds:t})})}}),r.a.createElement("br",null),r.a.createElement("h4",null,"Others"),r.a.createElement(i.f,null,r.a.createElement(i.e,{checked:s,disabled:m,onChange:function(){return e.onToggleRestTime()}},"Rest Time")),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h4",{className:"m-0"},"Members"),l.length>1&&r.a.createElement(a.Fragment,null,r.a.createElement(i.a,{id:"tt_shuffle",theme:"link",size:"sm",onClick:function(){return e.onRandomOrder()}},r.a.createElement(N.a,{className:"text-secondary",icon:S.f})),r.a.createElement(i.q,{open:this.state.tt_shuffle,target:"#tt_shuffle",toggle:function(){return e.onToggleTooltip("shuffle")}},"Shuffle Your Team's Order"))),r.a.createElement(D,{axis:"y",useDragHandle:!0,disabled:m,onSortEnd:function(t){return e.onSortEnd(t)}},l.map((function(t,n){return r.a.createElement(z,{index:n,member:t,key:n,onDelete:function(t){return e.onRemoveMember(t)}})}))),r.a.createElement(i.d,{onSubmit:function(t){return e.onSubmitNewMember(t)}},r.a.createElement(i.g,{required:!0,className:"simplebox mt-4 border-primary text-primary",autoComplete:"off",value:o,onChange:function(t){var n=t.target.value;return e.setState({name:n})}}))),j.a.filter(l,(function(e){return"Rest Time"!==e})).length>1&&r.a.createElement(P,{title:l[c],hours:n.hours,minutes:n.minutes,seconds:n.seconds,onStart:function(){return e.onPlayerStartTurn()},onEnd:function(){return e.onPlayerEndTurn()}}),j.a.filter(l,(function(e){return"Rest Time"!==e})).length<2&&r.a.createElement(i.b,{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("h4",{className:"text-info"},"To Start Mob Programing"),r.a.createElement("h4",{className:"text-info"},"You Need More Than 1 Members "),r.a.createElement("h4",{className:"text-info"},"Do Not Play Alone!!! Buddy"))))}}]),t}(a.Component),B=n(74),F=n.n(B),H="estimation-settings",U=[0,1,2,3,5,8,13,21,34,55,89,999],q=[2,3,4,5,6,7,8,9];_.a.options={positionClass:"toast-top-full-width",progressBar:!0,timeOut:1e3};var V={number_of_players:4,darkMode:!1},J=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(E.a)(this,Object(h.a)(t).call(this,e))).playNewRound=function(){var e=n.state,t=e.histories,a=e.selected_point,r=e.isReady;e.isValid&&r&&t.push(a),n.setState({selected_point:Array(Number(n.state.number_of_players)).fill(void 0),isValid:!1,isReady:!1,histories:t})},n.play=function(e){var t=n.state.selected_point,a=t.indexOf(void 0);if(-1!==a){t[a]=e;var r=-1===t.indexOf(void 0),l=j.a.filter(t,(function(e){return 999!==e&&void 0!==e})),o=l.map((function(e){return U.indexOf(e)})),c=(j.a.max(o)||0)-(j.a.min(o)||0)<3;r&&!c&&_.a.error("Invalid Points Set!!!"),n.setState({selected_point:t,valid_points:l,isReady:r,isValid:c})}},n.setDefault=function(){var e={darkMode:n.state.darkMode,number_of_players:n.state.number_of_players};F.a.set(H,e),_.a.success("Number of player's defaut is set to ".concat(n.state.number_of_players)),n.setState(Object(d.a)({},e,{openSetting:!1})),n.playNewRound()},n.settingNumber=function(e){n.setState({number_of_players:e,selected_point:Array(Number(e)).fill(void 0)})},n.calAvg=function(e){var t=j.a.filter(e,(function(e){return 999!==e})),n=j.a.sum(t);return Math.round(n/t.length)||0},n.componentDidMount=function(){document.title="Estimation Card | Awesome Tools";var e=F.a.getJSON(H)||V;n.setState(Object(d.a)({},e,{selected_point:Array(Number(e.number_of_players)).fill(void 0)}))},n.state={points:U,number_of_players:q[2],histories:[],selected_point:[void 0,void 0,void 0,void 0],valid_points:[],isReady:!1,openInfo:!1,openSetting:!1,darkMode:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.points,l=t.number_of_players,o=t.histories,c=t.selected_point,s=t.valid_points,m=t.isReady,u=t.isValid,d=t.openInfo,f=t.openSetting,b=t.darkMode,p=["d-flex justify-content-center align-items-center","px-0","text-white"].concat([b?"bg-dark":"bg-primary"]).join(" "),E=b?"dark":"primary",h=b?"secondary":"light",v=l>6?3:4;return v=l%2===0?6:v,v=l%3===0?4:v,v=l%4===0?3:v,r.a.createElement(i.c,null,r.a.createElement(i.o,null,r.a.createElement(i.b,{xs:"10",className:"mt-4 px-0"},r.a.createElement("h3",{className:b?"text-dark":"text-primary"},"Estimations Card")),r.a.createElement(i.b,{xs:"2",className:"mt-4 px-0 d-flex justify-content-end align-items-start"},r.a.createElement(N.a,{icon:S.c,className:"mx-2",onClick:function(){return e.setState({openSetting:!0})}}),r.a.createElement(i.k,{className:"modal-dialog-centered",open:f,toggle:function(){return e.setState({openSetting:!f})}},r.a.createElement(i.n,null,"Settings"),r.a.createElement(i.l,null,r.a.createElement(i.o,{form:!0},r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement("label",{htmlFor:"numberOfPlayers"},"Number of players"),r.a.createElement(i.h,{value:l,onChange:function(t){var n=t.target.value;return e.settingNumber(n)},style:{fontSize:"16px"}},q.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement(i.e,{toggle:!0,checked:b,onChange:function(){return e.setState({darkMode:!b})}},"Enable Dark Mode"))),r.a.createElement(i.m,{className:"px-0"},r.a.createElement(i.a,{onClick:function(){return e.setDefault()}},"Save")))),r.a.createElement(N.a,{icon:S.e,className:"ml-2",onClick:function(){return e.setState({openInfo:!0})}}),r.a.createElement(i.k,{className:"modal-dialog-centered",open:d,toggle:function(){return e.setState({openInfo:!d})}},r.a.createElement(i.n,null,"How To Use!"),r.a.createElement(i.l,null,r.a.createElement("span",null,r.a.createElement("strong",null,"1:")," Update number of player to fix your team size"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"2:")," Press on the point that choosed"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"3:")," Average point will display when you  enter all member's point"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"4:")," You can start over by click on button at the bottom"))))),r.a.createElement(i.o,null),l&&r.a.createElement(i.o,{className:"mb-3 justify-content-center align-items-center"},!(m&&u)&&c.map((function(e,t){return r.a.createElement(a.Fragment,null,r.a.createElement(i.b,{key:t,className:"p-0 d-flex",xs:v,style:{height:"10vh"}},r.a.createElement(i.a,{theme:u||!m||e!==j.a.min(s)&&e!==j.a.max(s)?h:"danger",squared:!0,block:!0,className:"h-100 border-white",style:{fontSize:"2em"}},void 0===e?"-":999===e?"?":e)))})),m&&u&&r.a.createElement(i.b,{className:"p-0 d-flex justify-content-center align-items-center",style:{height:"10vh"}},r.a.createElement("h1",{className:"d-flex display-3 text-success"},this.calAvg(c)))),r.a.createElement(i.o,{className:"mb-3"},n.map((function(t,n){return r.a.createElement(i.b,{key:n,xs:4,style:{height:"10vh",border:"1px solid #fff"},className:p,onTouchEnd:function(){return e.play(t)}},r.a.createElement("span",{className:"d-flex",style:{fontSize:"3em"}},999===t?"?":t))}))),r.a.createElement(i.o,{className:"mb-3"},r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.a,{theme:E,squared:!0,block:!0,size:"lg",onClick:function(){return e.playNewRound()}},"Start Over"))),r.a.createElement(i.o,null,r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.i,null,o.reverse().map((function(t,n){return r.a.createElement(i.j,{className:"d-flex",key:n},r.a.createElement(i.o,{className:"w-100"},t.map((function(e,t){return r.a.createElement(i.b,{className:"d-flex justify-content-center",key:t},999===e?"?":e)})),r.a.createElement(i.b,{className:"d-flex justify-content-center text-success"},r.a.createElement("strong",null,e.calAvg(t)))))}))))))}}]),t}(a.Component);var Y=function(){return r.a.createElement(c.a,null,r.a.createElement(m,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/mob"})),r.a.createElement(s.b,{exact:!0,path:"/mob"},r.a.createElement(W,null)),r.a.createElement(s.b,{exact:!0,path:"/estimation_card"},r.a.createElement(J,null)),r.a.createElement(s.b,{path:"/*"},r.a.createElement(u,null)))))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/awesome-tools",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/awesome-tools","/service-worker.js");L?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},97:function(e,t,n){e.exports=n(184)}},[[97,1,2]]]);
//# sourceMappingURL=main.baa04d22.chunk.js.map