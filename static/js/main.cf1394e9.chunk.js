(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(96),a(89)),o=a(21),i=(a(97),a(98),a(99),a(100),a(4)),m=function(e){var t=e.children;return r.a.createElement(i.c,{fluid:!0},t)},u=function(){return r.a.createElement(i.c,null,r.a.createElement(i.l,null,r.a.createElement(i.b,null,r.a.createElement("h1",null,"404 PAGE NOT FOUND"))))},d=a(28),p=a(29),f=a(31),E=a(30),b=a(32),h=a(88),v=a.n(h),y=a(11),g=a.n(y),N=function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).start=function(){var e=a.state,t=e.timer,n=e.duration;void 0===t&&(t=setInterval((function(){a.setState({duration:n.subtract(1,"second")})}),1e3),a.setState({timer:t}))},a.stop=function(){var e=a.state.timer;void 0!==e&&clearInterval(e)},a.handleKeyPress=function(){};var n=a.props,r=n.hours,l=n.minutes,c=n.seconds;return a.state={duration:v.a.duration("PT".concat(r,"H").concat(l,"M").concat(c,"S")),timer:void 0},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.auto&&this.start()}},{key:"render",value:function(){var e=this.state,t=e.duration,a=void 0!==e.timer,n=g.a.padStart(t.seconds(),2,0),l=g.a.padStart(t.minutes(),2,0),c=g.a.padStart(t.hours(),2,0);return r.a.createElement(i.b,{className:"text-center"},r.a.createElement("div",{className:"d-inline-block"},c,":",l,":",n),r.a.createElement("div",null,a?"running":"stoped"))}}]),t}(n.Component);N.defaultProps={hours:0,minutes:15,seconds:0,auto:!0};var x=N,k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={members:[]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(i.c,null,r.a.createElement(i.l,null,r.a.createElement(i.b,{className:"p-4"},r.a.createElement("h1",null,"Mob Programing Timer"))),r.a.createElement(i.l,null,r.a.createElement(x,null)))}}]),t}(n.Component),_=a(71),S=a(66),O=a(68),j=a(69),w=a.n(j),C=a(48),M=a.n(C),A="estimation-settings",I=[0,1,2,3,5,8,13,21,34,55,89,999],P=[2,3,4,5,6,7,8,9];M.a.options={positionClass:"toast-top-full-width",progressBar:!0,timeOut:1e3};var R={number_of_players:4,darkMode:!1},D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).playNewRound=function(){var e=a.state,t=e.histories,n=e.selected_point,r=e.isReady;e.isValid&&r&&t.push(n),a.setState({selected_point:Array(Number(a.state.number_of_players)).fill(void 0),isValid:!1,isReady:!1,histories:t})},a.play=function(e){var t=a.state.selected_point,n=t.indexOf(void 0);if(-1!==n){t[n]=e;var r=-1===t.indexOf(void 0),l=g.a.filter(t,(function(e){return 999!==e&&void 0!==e})),c=l.map((function(e){return I.indexOf(e)})),s=(g.a.max(c)||0)-(g.a.min(c)||0)<3;r&&!s&&M.a.error("Invalid Points Set!!!"),a.setState({selected_point:t,valid_points:l,isReady:r,isValid:s})}},a.setDefault=function(){var e={darkMode:a.state.darkMode,number_of_players:a.state.number_of_players};w.a.set(A,e),M.a.success("Number of player's defaut is set to ".concat(a.state.number_of_players)),a.setState(Object(_.a)({},e,{openSetting:!1})),a.playNewRound()},a.settingNumber=function(e){a.setState({number_of_players:e,selected_point:Array(Number(e)).fill(void 0)})},a.calAvg=function(e){var t=g.a.filter(e,(function(e){return 999!==e})),a=g.a.sum(t);return Math.round(a/t.length)||0},a.componentDidMount=function(){document.title="Estimation Card | Awesome Tools";var e=w.a.getJSON(A)||R;a.setState(Object(_.a)({},e,{selected_point:Array(Number(e.number_of_players)).fill(void 0)}))},a.state={points:I,number_of_players:P[2],histories:[],selected_point:[void 0,void 0,void 0,void 0],valid_points:[],isReady:!1,openInfo:!1,openSetting:!1,darkMode:!1},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.points,l=t.number_of_players,c=t.histories,s=t.selected_point,o=t.valid_points,m=t.isReady,u=t.isValid,d=t.openInfo,p=t.openSetting,f=t.darkMode,E=["d-flex justify-content-center align-items-center","px-0","text-white"].concat([f?"bg-dark":"bg-primary"]).join(" "),b=f?"dark":"primary",h=f?"secondary":"light",v=l>6?3:4;return v=l%2===0?6:v,v=l%3===0?4:v,v=l%4===0?3:v,r.a.createElement(i.c,null,r.a.createElement(i.l,null,r.a.createElement(i.b,{xs:"10",className:"mt-4 px-0"},r.a.createElement("h3",{className:f?"text-dark":"text-primary"},"Estimations Card")),r.a.createElement(i.b,{xs:"2",className:"mt-4 px-0 d-flex justify-content-end align-items-start"},r.a.createElement(S.a,{icon:O.a,className:"mx-2",onClick:function(){return e.setState({openSetting:!0})}}),r.a.createElement(i.h,{className:"modal-dialog-centered",open:p,toggle:function(){return e.setState({openSetting:!p})}},r.a.createElement(i.k,null,"Settings"),r.a.createElement(i.i,null,r.a.createElement(i.l,{form:!0},r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement("label",{htmlFor:"numberOfPlayers"},"Number of players"),r.a.createElement(i.e,{value:l,onChange:function(t){var a=t.target.value;return e.settingNumber(a)},style:{fontSize:"16px"}},P.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement(i.b,{sm:"6",className:"mb-3"},r.a.createElement(i.d,{toggle:!0,checked:f,onChange:function(){return e.setState({darkMode:!f})}},"Enable Dark Mode"))),r.a.createElement(i.j,{className:"px-0"},r.a.createElement(i.a,{onClick:function(){return e.setDefault()}},"Save")))),r.a.createElement(S.a,{icon:O.b,className:"ml-2",onClick:function(){return e.setState({openInfo:!0})}}),r.a.createElement(i.h,{className:"modal-dialog-centered",open:d,toggle:function(){return e.setState({openInfo:!d})}},r.a.createElement(i.k,null,"How To Use!"),r.a.createElement(i.i,null,r.a.createElement("span",null,r.a.createElement("strong",null,"1:")," Update number of player to fix your team size"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"2:")," Press on the point that choosed"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"3:")," Average point will display when you  enter all member's point"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"4:")," You can start over by click on button at the bottom"))))),r.a.createElement(i.l,null),l&&r.a.createElement(i.l,{className:"mb-3 justify-content-center align-items-center"},!(m&&u)&&s.map((function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(i.b,{key:t,className:"p-0 d-flex",xs:v,style:{height:"10vh"}},r.a.createElement(i.a,{theme:u||!m||e!==g.a.min(o)&&e!==g.a.max(o)?h:"danger",squared:!0,block:!0,className:"h-100 border-white",style:{fontSize:"2em"}},void 0===e?"-":999===e?"?":e)))})),m&&u&&r.a.createElement(i.b,{className:"p-0 d-flex justify-content-center align-items-center",style:{height:"10vh"}},r.a.createElement("h1",{className:"d-flex display-3 text-success"},this.calAvg(s)))),r.a.createElement(i.l,{className:"mb-3"},a.map((function(t,a){return r.a.createElement(i.b,{key:a,xs:4,style:{height:"10vh",border:"1px solid #fff"},className:E,onTouchEnd:function(){return e.play(t)}},r.a.createElement("span",{className:"d-flex",style:{fontSize:"3em"}},999===t?"?":t))}))),r.a.createElement(i.l,{className:"mb-3"},r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.a,{theme:b,squared:!0,block:!0,size:"lg",onClick:function(){return e.playNewRound()}},"Start Over"))),r.a.createElement(i.l,null,r.a.createElement(i.b,{className:"px-0"},r.a.createElement(i.f,null,c.reverse().map((function(t,a){return r.a.createElement(i.g,{className:"d-flex",key:a},r.a.createElement(i.l,{className:"w-100"},t.map((function(e,t){return r.a.createElement(i.b,{className:"d-flex justify-content-center",key:t},999===e?"?":e)})),r.a.createElement(i.b,{className:"d-flex justify-content-center text-success"},r.a.createElement("strong",null,e.calAvg(t)))))}))))))}}]),t}(n.Component);var T=function(){return r.a.createElement(s.a,null,r.a.createElement(m,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(o.a,{to:"/estimation_card"})),r.a.createElement(o.b,{exact:!0,path:"/mob"},r.a.createElement(k,null)),r.a.createElement(o.b,{exact:!0,path:"/estimation_card"},r.a.createElement(D,null)),r.a.createElement(o.b,{path:"/*"},r.a.createElement(u,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(178)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.cf1394e9.chunk.js.map