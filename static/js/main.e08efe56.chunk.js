(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),l=n.n(r),c=(n(89),n(82)),i=n(23),s=(n(90),n(91),n(92),n(93),n(4)),m=function(e){var t=e.children;return o.a.createElement(s.c,{fluid:!0},t)},u=function(){return o.a.createElement(s.c,null,o.a.createElement(s.l,null,o.a.createElement(s.b,null,o.a.createElement("h1",null,"404 PAGE NOT FOUND"))))},d=n(30),p=n(31),b=n(33),f=n(32),g=n(34),h=n(80),y=n.n(h),E=n(13),C=n.n(E),S=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).start=function(){var e=n.state,t=e.timer,a=e.duration;void 0===t&&(t=setInterval((function(){n.setState({duration:a.subtract(1,"second")})}),1e3),n.setState({timer:t}))},n.stop=function(){var e=n.state.timer;void 0!==e&&clearInterval(e)},n.handleKeyPress=function(){};var a=n.props,o=a.hours,r=a.minutes,l=a.seconds;return n.state={duration:y.a.duration("PT".concat(o,"H").concat(r,"M").concat(l,"S")),timer:void 0},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.auto&&this.start()}},{key:"render",value:function(){var e=this.state,t=e.duration,n=void 0!==e.timer,a=C.a.padStart(t.seconds(),2,0),r=C.a.padStart(t.minutes(),2,0),l=C.a.padStart(t.hours(),2,0);return o.a.createElement(s.b,{className:"text-center"},o.a.createElement("div",{className:"d-inline-block"},l,":",r,":",a),o.a.createElement("div",null,n?"running":"stoped"))}}]),t}(a.Component);S.defaultProps={hours:0,minutes:15,seconds:0,auto:!0};var k=S,v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={members:[]},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(s.c,null,o.a.createElement(s.l,null,o.a.createElement(s.b,{className:"p-4"},o.a.createElement("h1",null,"Mob Programing Timer"))),o.a.createElement(s.l,null,o.a.createElement(k,null)))}}]),t}(a.Component),N=n(81),x=n(9),O=n(10),w=n(68),j=n.n(w),_=n(50),P=n.n(_);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I="srumpointcaloptions",R=[0,1,2,3,5,8,13,21,34,55,89,999],z=[2,3,4,5,6,7,8,9];P.a.options={positionClass:"toast-top-full-width",progressBar:!0,timeOut:1e3};var M={number_of_players:4,keyboardColorSetting:"primary",buttonColorSetting:"primary",pointColorSetting:"secondary",keyboardColor:"primary",buttonColor:"primary",pointColor:"secondary"},T=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).playNewRound=function(){var e=n.state,t=e.histories,a=e.selected_point,o=e.isReady;e.isValid&&o&&t.push(a),n.setState({selected_point:Array(Number(n.state.number_of_players)).fill(void 0),isValid:!1,isReady:!1,histories:t})},n.play=function(e){var t=n.state.selected_point,a=t.indexOf(void 0);if(-1!==a){t[a]=e;var o=-1===t.indexOf(void 0),r=C.a.filter(t,(function(e){return 999!==e&&void 0!==e})),l=r.map((function(e){return R.indexOf(e)})),c=(C.a.max(l)||0)-(C.a.min(l)||0)<3;o&&!c&&P.a.error("Invalid Points Set!!!"),n.setState({selected_point:t,valid_points:r,isReady:o,isValid:c})}},n.setDefault=function(){var e={keyboardColor:n.state.keyboardColorSetting,buttonColor:n.state.buttonColorSetting,pointColor:n.state.pointColorSetting,keyboardColorSetting:n.state.keyboardColorSetting,buttonColorSetting:n.state.buttonColorSetting,pointColorSetting:n.state.pointColorSetting,number_of_players:n.state.number_of_players};j.a.set(I,e),P.a.info("Number of player's defaut is set to ".concat(n.state.number_of_players)),n.setState(A({},e,{openSetting:!1})),n.playNewRound()},n.calAvg=function(e){var t=C.a.filter(e,(function(e){return 999!==e})),n=C.a.sum(t);return Math.round(n/t.length)||0},n.componentDidMount=function(){document.title="Estimation Card | Awesome Tools";var e=j.a.getJSON(I)||M;n.setState(A({},e,{selected_point:Array(Number(e.number_of_players)).fill(void 0)}))},n.state={points:R,number_of_players:z[2],histories:[],selected_point:[void 0,void 0,void 0,void 0],valid_points:[],isReady:!1,openInfo:!1,openSetting:!1,keyboardColorSetting:"primary",buttonColorSetting:"primary",pointColorSetting:"secondary",keyboardColor:"primary",buttonColor:"primary",pointColor:"secondary"},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.points,a=t.number_of_players,r=t.histories,l=t.selected_point,c=t.valid_points,i=t.isReady,m=t.isValid,u=t.openInfo,d=t.openSetting,p=t.keyboardColor,b=t.buttonColor,f=t.pointColor;return o.a.createElement(s.c,null,o.a.createElement(s.l,null,o.a.createElement(s.b,{xs:"10",className:"mt-4 px-0"},o.a.createElement("h3",{className:"text-info"},"Estimations Card")),o.a.createElement(s.b,{xs:"2",className:"mt-4 px-0 d-flex justify-content-end align-items-start"},o.a.createElement(x.a,{icon:O.a,className:"mx-2",onClick:function(){return e.setState({openSetting:!0})}}),o.a.createElement(s.h,{className:"modal-dialog-centered",open:d,toggle:function(){return e.setState({openSetting:!d})}},o.a.createElement(s.k,null,"Settings"),o.a.createElement(s.i,null,o.a.createElement(s.l,{form:!0},o.a.createElement(s.b,{sm:"6"},o.a.createElement("label",{htmlFor:"numberOfPlayers"},"Number of players"),o.a.createElement(s.e,{value:a,onChange:function(t){var n=t.target.value;return e.setState({number_of_players:n})},style:{fontSize:"16px"}},z.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e)})))),o.a.createElement(s.b,{sm:"6"},o.a.createElement("p",{className:"mb-2 mt-2"},"Points color:"),o.a.createElement(s.d,{inline:!0,name:"pointColor",checked:"primary"===this.state.pointColorSetting,onChange:function(){e.setState({pointColorSetting:"primary"})}},o.a.createElement(x.a,{className:"text-primary",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"pointColor",checked:"warning"===this.state.pointColorSetting,onChange:function(){e.setState({pointColorSetting:"warning"})}},o.a.createElement(x.a,{className:"text-warning",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"pointColor",checked:"success"===this.state.pointColorSetting,onChange:function(){e.setState({pointColorSetting:"success"})}},o.a.createElement(x.a,{className:"text-success",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"pointColor",checked:"dark"===this.state.pointColorSetting,onChange:function(){e.setState({pointColorSetting:"dark"})}},o.a.createElement(x.a,{className:"text-dark",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"pointColor",checked:"secondary"===this.state.pointColorSetting,onChange:function(){e.setState({pointColorSetting:"secondary"})}},o.a.createElement(x.a,{className:"text-secondary",icon:O.c}))),o.a.createElement(s.b,{sm:"6"},o.a.createElement("p",{className:"mb-2 mt-2"},"Card (keyboard) color:"),o.a.createElement(s.d,{inline:!0,name:"keyboardColor",checked:"primary"===this.state.keyboardColorSetting,onChange:function(){e.setState({keyboardColorSetting:"primary"})}},o.a.createElement(x.a,{className:"text-primary",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"keyboardColor",checked:"warning"===this.state.keyboardColorSetting,onChange:function(){e.setState({keyboardColorSetting:"warning"})}},o.a.createElement(x.a,{className:"text-warning",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"keyboardColor",checked:"success"===this.state.keyboardColorSetting,onChange:function(){e.setState({keyboardColorSetting:"success"})}},o.a.createElement(x.a,{className:"text-success",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"keyboardColor",checked:"dark"===this.state.keyboardColorSetting,onChange:function(){e.setState({keyboardColorSetting:"dark"})}},o.a.createElement(x.a,{className:"text-dark",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"keyboardColor",checked:"secondary"===this.state.keyboardColorSetting,onChange:function(){e.setState({keyboardColorSetting:"secondary"})}},o.a.createElement(x.a,{className:"text-secondary",icon:O.c}))),o.a.createElement(s.b,{sm:"6"},o.a.createElement("p",{className:"mb-2 mt-2"},"Button color:"),o.a.createElement(s.d,{inline:!0,name:"buttonColor",checked:"primary"===this.state.buttonColorSetting,onChange:function(){e.setState({buttonColorSetting:"primary"})}},o.a.createElement(x.a,{className:"text-primary",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"buttonColor",checked:"warning"===this.state.buttonColorSetting,onChange:function(){e.setState({buttonColorSetting:"warning"})}},o.a.createElement(x.a,{className:"text-warning",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"buttonColor",checked:"success"===this.state.buttonColorSetting,onChange:function(){e.setState({buttonColorSetting:"success"})}},o.a.createElement(x.a,{className:"text-success",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"buttonColor",checked:"dark"===this.state.buttonColorSetting,onChange:function(){e.setState({buttonColorSetting:"dark"})}},o.a.createElement(x.a,{className:"text-dark",icon:O.c})),o.a.createElement(s.d,{inline:!0,name:"buttonColor",checked:"secondary"===this.state.buttonColorSetting,onChange:function(){e.setState({buttonColorSetting:"secondary"})}},o.a.createElement(x.a,{className:"text-secondary",icon:O.c})))),o.a.createElement(s.j,{className:"px-0"},o.a.createElement(s.a,{onClick:function(){return e.setDefault()}},"Save")))),o.a.createElement(x.a,{icon:O.b,className:"ml-2",onClick:function(){return e.setState({openInfo:!0})}}),o.a.createElement(s.h,{className:"modal-dialog-centered",open:u,toggle:function(){return e.setState({openInfo:!u})}},o.a.createElement(s.k,null,"How To Use!"),o.a.createElement(s.i,null,o.a.createElement("span",null,o.a.createElement("strong",null,"1:")," Update number of player to fix your team size"),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("strong",null,"2:")," Press on the point that choosed"),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("strong",null,"3:")," Average point will display when you  enter all member's point"),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("strong",null,"4:")," You can start over by click on button at the bottom"))))),a&&o.a.createElement(s.l,{className:"mb-3"},!(i&&m)&&l.map((function(e,t){return o.a.createElement(s.b,{key:t,className:"p-0",style:{height:"10vh"}},o.a.createElement(s.a,{theme:m||!i||e!==C.a.min(c)&&e!==C.a.max(c)?f:"danger",squared:!0,block:!0,className:"h-100 border-light",style:{fontSize:"2em"}},void 0===e?"-":999===e?"?":e))})),i&&m&&o.a.createElement(s.b,{className:"p-0 d-flex justify-content-center align-items-center",style:{height:"10vh"}},o.a.createElement("h1",{className:"d-flex display-3 text-success"},this.calAvg(l)))),o.a.createElement(s.l,{className:"mb-3"},n.map((function(t,n){return o.a.createElement(s.b,{key:n,xs:"4",className:"px-0 border border-light",style:{height:"10vh"}},o.a.createElement(s.a,{block:!0,squared:!0,className:"h-100",theme:p,style:{fontSize:"2em"},onClick:function(){return e.play(t)}},999===t?"?":t))}))),o.a.createElement(s.l,{className:"mb-3"},o.a.createElement(s.b,{className:"px-0"},o.a.createElement(s.a,{block:!0,theme:b,size:"lg",onClick:function(){return e.playNewRound()}},"Start Over"))),o.a.createElement(s.l,null,o.a.createElement(s.b,{className:"px-0"},o.a.createElement(s.f,null,r.reverse().map((function(t,n){return o.a.createElement(s.g,{className:"d-flex",key:n},o.a.createElement(s.l,{className:"w-100"},t.map((function(e,t){return o.a.createElement(s.b,{className:"d-flex justify-content-center",key:t},999===e?"?":e)})),o.a.createElement(s.b,{className:"d-flex justify-content-center text-success"},o.a.createElement("strong",null,e.calAvg(t)))))}))))))}}]),t}(a.Component);var B=function(){return o.a.createElement(c.a,null,o.a.createElement(m,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/"},o.a.createElement(i.a,{to:"/estimation_card"})),o.a.createElement(i.b,{exact:!0,path:"/mob"},o.a.createElement(v,null)),o.a.createElement(i.b,{exact:!0,path:"/estimation_card"},o.a.createElement(T,null)),o.a.createElement(i.b,{path:"/*"},o.a.createElement(u,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,n){e.exports=n(164)},89:function(e,t,n){},90:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.e08efe56.chunk.js.map