(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(101),a(94)),s=a(23),i=(a(102),a(103),a(104),a(105),a(5)),m=function(e){var t=e.children;return r.a.createElement(i.c,{fluid:!0},t)},u=function(){return r.a.createElement(i.c,null,r.a.createElement(i.o,null,r.a.createElement(i.b,null,r.a.createElement("h1",null,"404 PAGE NOT FOUND"))))},d=a(24),f=a(26),b=a(33),E=a(34),p=a(36),h=a(35),v=a(37),g=a(76),y=a(20),N=a(21),S=a(38),x=a.n(S),_=a(10),O=a.n(_),j=a(55),k=a(93),T=a.n(k),w=a(54),M=a.n(w),C=function(e){function t(e){var a;Object(b.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).start=function(){var e=a.state,t=e.timer,n=e.duration;void 0===t&&(t=setInterval((function(){a.setState({duration:n.subtract(1,"second")})}),1e3),a.setState({timer:t}),a.props.onStart())},a.stop=function(){var e=a.state.timer,t=a.props,n=t.hours,r=t.minutes,l=t.seconds;void 0!==e&&(clearInterval(e),setTimeout((function(){a.setState({timer:void 0,duration:M.a.duration("PT".concat(n,"H").concat(r,"M").concat(l,"S"))}),a.props.onEnd()}),1e3))},a.handleKeyPress=function(){a.start()},a.componentWillReceiveProps=function(e){var t=e.hours,n=e.minutes,r=e.seconds;a.setState({duration:M.a.duration("PT".concat(t,"H").concat(n,"M").concat(r,"S"))}),e.auto&&a.start()};var n=a.props,r=n.hours,l=n.minutes,c=n.seconds;return a.state={duration:M.a.duration("PT".concat(r,"H").concat(l,"M").concat(c,"S")),timer:void 0,startBtnClass:"text-secondary"},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.duration,l=t.timer,c=t.startBtnClass,o=void 0!==l,s=O.a.padStart(a.seconds(),2,0),m=O.a.padStart(a.minutes(),2,0),u=O.a.padStart(a.hours(),2,0);return 0==a&&this.stop(),r.a.createElement(i.b,{className:"text-center"},o&&r.a.createElement(n.Fragment,null,this.props.title,r.a.createElement("div",{className:"d-inline-block"},u,":",m,":",s)),!o&&r.a.createElement(n.Fragment,null,r.a.createElement(i.o,{className:"vh-100 justify-content-center align-items-center"},r.a.createElement("h1",{className:"".concat(c," countdown-start-icon"),onClick:function(){return e.start()}},r.a.createElement(y.a,{icon:N.a,size:"3x"})))))}}]),t}(n.Component);C.defaultProps={hours:0,minutes:15,seconds:0,auto:!1};var R=C,P=function(e){var t=e.label,a=e.value,n=Object(g.a)(e.range,2),l=n[0],c=n[1],o=e.onSlide;return r.a.createElement(i.f,null,r.a.createElement("label",{htmlFor:"mobTimeSetting".concat(t)},r.a.createElement("strong",null,t,": "),r.a.createElement("span",null,a)),r.a.createElement(i.p,{id:"mobTimeSetting".concat(t),className:"mt-2 mb-2",step:1,connect:[!0,!1],start:[a],range:{min:l,max:c},onSlide:function(e){var t=Object(g.a)(e,2),a=t[0];t[1];return o(Number(a))}}))},I=Object(j.c)((function(){return r.a.createElement(y.a,{className:"mr-2 members-drag",icon:N.b})})),A=Object(j.a)((function(e){var t=e.children;return r.a.createElement(i.i,null,t)})),D=Object(j.b)((function(e){var t=e.member,a=e.onDelete;return r.a.createElement(i.j,{className:"members-item d-flex justify-content-between align-items-center"},r.a.createElement("div",null,r.a.createElement(I,null),t),r.a.createElement(i.a,{theme:"link",size:"sm",onClick:function(){return a(t)}},r.a.createElement(y.a,{className:"text-secondary",icon:N.f})))})),z=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmitNewMember=function(e){e.preventDefault();var t=a.state,n=t.members,r=t.name,l=t.enabled_rest_time;if(-1!==n.indexOf(r))x.a.error("This Name Has Been Taken!!!");else{var c=[r];l&&(n.pop(),c=[].concat(Object(f.a)(c),["Rest Time"])),a.setState({members:[].concat(Object(f.a)(n),Object(f.a)(c)),name:""})}},a.onRemoveMember=function(e){var t=a.state.members,n=t.indexOf(e);-1!==n&&(t.splice(n,1),a.setState({members:t}))},a.onRandomOrder=function(){var e=a.state,t=e.members,n=[];e.enabled_rest_time&&(n=[].concat(Object(f.a)(n),[t.pop()])),t=[].concat(Object(f.a)(O.a.shuffle(t)),Object(f.a)(n)),a.setState({members:t})},a.onSortEnd=function(e){var t=e.oldIndex,n=e.newIndex,r=a.state.members;r=T()(r,t,n),a.setState({members:r})},a.onToggleTooltip=function(e){var t={};t["tt_".concat(e)]=!a.state["tt_".concat(e)],a.setState(Object(d.a)({},a.state,{},t))},a.onToggleRestTime=function(){var e=a.state,t=e.enabled_rest_time,n=e.members;t?n.pop():n=[].concat(Object(f.a)(n),["Rest Time"]),a.setState({enabled_rest_time:!t,members:n})},a.onPlayerStartTurn=function(){var e=a.state,t=e.current_player_index;t=(t+1)%(e.members.length+1),a.setState({current_player_index:t})},a.onPlayerEndTurn=function(){},a.state={members:[],interval:{hours:0,minutes:15,seconds:0},name:"",enabled_rest_time:!1,current_player_index:-1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.interval,l=t.members,c=t.name,o=t.current_player_index,s=t.enabled_rest_time;return r.a.createElement(i.c,{fluid:!0},r.a.createElement(i.o,{className:"vh-100"},r.a.createElement(i.b,{md:"4",lg:"3",className:"p-2"},r.a.createElement("div",null,r.a.createElement("h3",{className:"m-0"},"Mob"),r.a.createElement("h3",{className:"m-0"},"Programing"),r.a.createElement("h3",{className:"m-0"},"Timer")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Interval Time"),r.a.createElement(P,{label:"Hours",value:a.hours,range:[0,24],onSlide:function(t){return e.setState({interval:Object(d.a)({},a,{},{hours:t})})}}),r.a.createElement(P,{label:"Minutes",value:a.minutes,range:[0,59],onSlide:function(t){return e.setState({interval:Object(d.a)({},a,{},{minutes:t})})}}),r.a.createElement(P,{label:"Seconds",value:a.seconds,range:[0,59],onSlide:function(t){return e.setState({interval:Object(d.a)({},a,{},{seconds:t})})}}),r.a.createElement("br",null),r.a.createElement("h4",null,"Others"),r.a.createElement(i.f,null,r.a.createElement(i.e,{checked:s,onChange:function(){return e.onToggleRestTime()}},"Rest Time")),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h4",{className:"m-0"},"Members"),l.length>1&&r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{id:"tt_shuffle",theme:"link",size:"sm",onClick:function(){return e.onRandomOrder()}},r.a.createElement(y.a,{className:"text-secondary",icon:N.e})),r.a.createElement(i.q,{open:this.state.tt_shuffle,target:"#tt_shuffle",toggle:function(){return e.onToggleTooltip("shuffle")}},"Shuffle Your Team's Order"))),r.a.createElement(A,{axis:"y",useDragHandle:!0,onSortEnd:function(t){return e.onSortEnd(t)}},l.map((function(t,a){return r.a.createElement(D,{index:a,member:t,key:a,onDelete:function(t){return e.onRemoveMember(t)}})}))),r.a.createElement(i.d,{onSubmit:function(t){return e.onSubmitNewMember(t)}},r.a.createElement(i.g,{required:!0,className:"simplebox mt-4 border-primary text-primary",autoComplete:"off",value:c,onChange:function(t){var a=t.target.value;return e.setState({name:a})}}))),l.length>1&&r.a.createElement(R,{title:l[o],hours:a.hours,minutes:a.minutes,seconds:a.seconds,onStart:function(){return e.onPlayerStartTurn()},onEnd:function(){return e.onPlayerEndTurn()}}),l.length<2&&r.a.createElement(i.b,{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("h4",{className:"text-info"},"To Start Mob Programing"),r.a.createElement("h4",{className:"text-info"},"You Need More Than 1 Members "),r.a.createElement("h4",{className:"text-info"},"Do Not Play Alone!!! Buddy"))))}}]),t}(n.Component),B=a(74),F=a.n(B),H="estimation-settings",q=[0,1,2,3,5,8,13,21,34,55,89,999],V=[2,3,4,5,6,7,8,9];x.a.options={positionClass:"toast-top-full-width",progressBar:!0,timeOut:1e3};var J={number_of_players:4,darkMode:!1},U=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).playNewRound=function(){var e=a.state,t=e.histories,n=e.selected_point,r=e.isReady;e.isValid&&r&&t.push(n),a.setState({selected_point:Array(Number(a.state.number_of_players)).fill(void 0),isValid:!1,isReady:!1,histories:t})},a.play=function(e){var t=a.state.selected_point,n=t.indexOf(void 0);if(-1!==n){t[n]=e;var r=-1===t.indexOf(void 0),l=O.a.filter(t,(function(e){return 999!==e&&void 0!==e})),c=l.map((function(e){return q.indexOf(e)})),o=(O.a.max(c)||0)-(O.a.min(c)||0)<3;r&&!o&&x.a.error("Invalid Points Set!!!"),a.setState({selected_point:t,valid_points:l,isReady:r,isValid:o})}},a.setDefault=function(){var e={darkMode:a.state.darkMode,number_of_players:a.state.number_of_players};F.a.set(H,e),x.a.success("Number of player's defaut is set to ".concat(a.state.number_of_players)),a.setState(Object(d.a)({},e,{openSetting:!1})),a.playNewRound()},a.settingNumber=function(e){a.setState({number_of_players:e,selected_point:Array(Number(e)).fill(void 0)})},a.calAvg=function(e){var t=O.a.filter(e,(function(e){return 999!==e})),a=O.a.sum(t);return Math.round(a/t.length)||0},a.componentDidMount=function(){document.title="Estimation Card | Awesome Tools";var e=F.a.getJSON(H)||J;a.setState(Object(d.a)({},e,{selected_point:Array(Number(e.number_of_players)).fill(void 0)}))},a.state={points:q,number_of_players:V[2],histories:[],selected_point:[void 0,void 0,void 0,void 0],valid_points:[],isReady:!1,openInfo:!1,openSetting:!1,darkMode:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.points,l=t.number_of_players,c=t.histories,o=t.selected_point,s=t.valid_points,m=t.isReady,u=t.isValid,d=t.openInfo,f=t.openSetting,b=t.darkMode,E=["d-flex justify-content-center align-items-center","px-0","text-white"].concat([b?"bg-dark":"bg-primary"]).join(" "),p=b?"dark":"primary",h=b?"secondary":"light",v=l>6?3:4;return v=l%2===0?6:v,v=l%3===0?4:v,v=l%4===0?3:v,r.a.createElement(i.c,null,r.a.createElement(i.o,null,r.a.createElement(i.b,{xs:"10",className:"mt-4 px-0"},r.a.createElement("h3",{className:b?"text-dark":"text-primary"},"Estimations Card")),r.a.createElement(i.b,{xs:"2",className:"mt-4 px-0 d-flex justify-content-end align-items-start"},r.a.createElement(y.a,{icon:N.c,className:"mx-2",onClick:function(){return e.setState({openSetting:!0})}}),r.a.createElement(i.k,{className:"modal-dialog-centered",open:f,toggle:function(){return e.setState({openSetting:!f})}},r.a.createElement(i.n,null,"Settings"),r.a.createElement(i.l,null,r.a.createElement(i.o,{form:!0},r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement("label",{htmlFor:"numberOfPlayers"},"Number of players"),r.a.createElement(i.h,{value:l,onChange:function(t){var a=t.target.value;return e.settingNumber(a)},style:{fontSize:"16px"}},V.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement(i.e,{toggle:!0,checked:b,onChange:function(){return e.setState({darkMode:!b})}},"Enable Dark Mode"))),r.a.createElement(i.m,{className:"px-0"},r.a.createElement(i.a,{onClick:function(){return e.setDefault()}},"Save")))),r.a.createElement(y.a,{icon:N.d,className:"ml-2",onClick:function(){return e.setState({openInfo:!0})}}),r.a.createElement(i.k,{className:"modal-dialog-centered",open:d,toggle:function(){return e.setState({openInfo:!d})}},r.a.createElement(i.n,null,"How To Use!"),r.a.createElement(i.l,null,r.a.createElement("span",null,r.a.createElement("strong",null,"1:")," Update number of player to fix your team size"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"2:")," Press on the point that choosed"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"3:")," Average point will display when you  enter all member's point"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"4:")," You can start over by click on button at the bottom"))))),r.a.createElement(i.o,null),l&&r.a.createElement(i.o,{className:"mb-3 justify-content-center align-items-center"},!(m&&u)&&o.map((function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(i.b,{key:t,className:"p-0 d-flex",xs:v,style:{height:"10vh"}},r.a.createElement(i.a,{theme:u||!m||e!==O.a.min(s)&&e!==O.a.max(s)?h:"danger",squared:!0,block:!0,className:"h-100 border-white",style:{fontSize:"2em"}},void 0===e?"-":999===e?"?":e)))})),m&&u&&r.a.createElement(i.b,{className:"p-0 d-flex justify-content-center align-items-center",style:{height:"10vh"}},r.a.createElement("h1",{className:"d-flex display-3 text-success"},this.calAvg(o)))),r.a.createElement(i.o,{className:"mb-3"},a.map((function(t,a){return r.a.createElement(i.b,{key:a,xs:4,style:{height:"10vh",border:"1px solid #fff"},className:E,onTouchEnd:function(){return e.play(t)}},r.a.createElement("span",{className:"d-flex",style:{fontSize:"3em"}},999===t?"?":t))}))),r.a.createElement(i.o,{className:"mb-3"},r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.a,{theme:p,squared:!0,block:!0,size:"lg",onClick:function(){return e.playNewRound()}},"Start Over"))),r.a.createElement(i.o,null,r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.i,null,c.reverse().map((function(t,a){return r.a.createElement(i.j,{className:"d-flex",key:a},r.a.createElement(i.o,{className:"w-100"},t.map((function(e,t){return r.a.createElement(i.b,{className:"d-flex justify-content-center",key:t},999===e?"?":e)})),r.a.createElement(i.b,{className:"d-flex justify-content-center text-success"},r.a.createElement("strong",null,e.calAvg(t)))))}))))))}}]),t}(n.Component);var W=function(){return r.a.createElement(o.a,null,r.a.createElement(m,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{to:"/mob"})),r.a.createElement(s.b,{exact:!0,path:"/mob"},r.a.createElement(z,null)),r.a.createElement(s.b,{exact:!0,path:"/estimation_card"},r.a.createElement(U,null)),r.a.createElement(s.b,{path:"/*"},r.a.createElement(u,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){e.exports=a(183)}},[[96,1,2]]]);
//# sourceMappingURL=main.bf3a6cfb.chunk.js.map