(this["webpackJsonpbulls-cows-react"]=this["webpackJsonpbulls-cows-react"]||[]).push([[0],{136:function(e,t,n){e.exports=n(151)},141:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(47),l=n.n(o),c=(n(141),n(124)),s=n(79),i=n(80),u=n(99),m=n(107),h=n(152),d=n(31),p=n(163),f=n(166),g=n(164),b=n(171),w=n(167),E=function(e){return r.a.createElement(b.a,{inverted:!0},r.a.createElement(w.a,{divided:!0,inverted:!0,relaxed:!0},e.answer.map((function(e){return r.a.createElement(w.a.Item,{key:e.key},r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Header,null,e.bullsCount," ",e.bullsCount.length>0?"Bulls":"Bull"," ",e.cowsCount," Cows"),r.a.createElement("br",null),"ATTEMPT",e.attemptCount," : ",e.content))}))))},v=n(168),C=n(172),k=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modalOpen:!1},e.handleOpen=function(){return e.setState({modalOpen:!0})},e.handleClose=function(){e.setState({modalOpen:!1}),e.props.restartGame()},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.gameWon!==this.props.gameWon&&this.props.gameWon&&this.handleOpen()}},{key:"render",value:function(){return r.a.createElement(v.a,{basic:!0,size:"small",open:this.state.modalOpen,onClose:this.handleClose},r.a.createElement(C.a,{icon:!0},r.a.createElement(d.a,{name:"like"}),"Win"),r.a.createElement(v.a.Content,null,r.a.createElement("p",null,"You have won this game, play again.")),r.a.createElement(v.a.Actions,null,r.a.createElement(h.a,{color:"green",inverted:!0,onClick:this.handleClose},r.a.createElement(d.a,{name:"checkmark"})," OK")))}}]),n}(a.Component),y=(n(148),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={guessNumber:"",secretNumber:"",attempts:[],attemptCount:0,gameWon:!1,started:!1},e.randomNumber=function(){for(var e="",t=[],n=0;n<4;n++){e=Math.round(Math.random()*(10-n));for(var a=0;a<t.length;a++)t[a]===e&&(t.splice(a,1),n--);t.push(e)}return console.log(t.join("")),t.join("")},e.startGame=function(){return e.setState({secretNumber:e.randomNumber(),started:!0})},e.handleInputChange=function(t){t.target.value.length<=4&&e.setState({guessNumber:t.target.value})},e.reset=function(){return e.setState({guessNumber:""})},e.restartGame=function(){return e.setState({guessNumber:"",secretNumber:"",attempts:[],attemptCount:0,gameWon:!1,started:!1})},e.checkAnswer=function(t){t.preventDefault();var n=e.state,a=n.guessNumber,r=n.secretNumber,o=n.attemptCount;if(/^\d{4}$/.test(a)){var l=[],s=[],i=0,u=0;l=r.split(""),s=a.split(""),l.forEach((function(e,t){l[t]===s[t]&&(i+=1,l[t]="X",s[t]="Z")})),l.forEach((function(e,t){l.indexOf(s[t])>=0&&(l[l.indexOf(s[t])]="",u+=1)})),4===i&&e.setState({gameWon:!0});var m={key:Date.now(),content:a,bullsCount:i,cowsCount:u,attemptCount:o+1};e.setState((function(e){return{guessNumber:"",attemptCount:e.attemptCount+1,attempts:[m].concat(Object(c.a)(e.attempts))}}))}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.guessNumber,n=e.attempts,o=e.gameWon,l=e.started;return r.a.createElement(a.Fragment,null,r.a.createElement(k,{gameWon:o,restartGame:this.restartGame}),r.a.createElement(h.a,{color:"green",onClick:this.startGame},r.a.createElement(d.a,{name:"play"}),"START"),r.a.createElement(h.a,{color:"red",onClick:this.restartGame},r.a.createElement(d.a,{name:"refresh"}),"PLAY AGAIN"),r.a.createElement(p.a,{hidden:!0}),r.a.createElement(f.a,{noValidate:!0,autoComplete:"off"},r.a.createElement(f.a.Field,null,r.a.createElement("label",{style:{color:"white",fontSize:"2rem",marginBottom:"10px"}},"Guess"),r.a.createElement(g.a,{placeholder:"0000",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="0000"},value:t,style:{width:"240px",fontSize:"2rem"},onChange:this.handleInputChange,disabled:!l})),r.a.createElement(h.a,{primary:!0,onClick:this.checkAnswer},"Submit"),r.a.createElement(h.a,{onClick:this.reset},"Reset")),n.length>0?r.a.createElement(E,{answer:n}):null)}}]),n}(a.Component)),A=n(170),N=function(){return r.a.createElement(A.a,{info:!0,floating:!0},r.a.createElement(A.a.Header,null,r.a.createElement(d.a,{name:"question circle"})," How to play"),r.a.createElement("p",null,"The goal of this game is to guess a 4-digit number within the least number of attempts possible."),r.a.createElement("p",null,"With every guess, you will get a feedback indicating how many Bulls and Cows you got with the guess."),r.a.createElement("p",null,"A Bull means: one of the digits is correct, and is also at the right place."),r.a.createElement("p",null,"A Cow means: one of the digits is a right number, but not at the right place."),r.a.createElement("p",null," For example, given that the answer is 0130, a guess of 3610 will receive 1 Bull 2 Cows. 1 Bull is 0, 2 Cows are 1 and 3."))},O=n(165),W=(n(149),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null,r.a.createElement("h1",null,"Bulls and Cows game"),r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement("a",{className:"sourceLink",href:"https://github.com/Nicole-tu/bulls-cows-react"},"https://github.com/Nicole-tu/bulls-cows-react")),r.a.createElement("div",{className:"backgroundFont"},r.a.createElement("p",null,"1A2B"),r.a.createElement("p",null,"2A1B"),r.a.createElement("p",null,"0A3B")))}),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(150);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bulls-cows-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bulls-cows-react","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[136,1,2]]]);
//# sourceMappingURL=main.db3c9463.chunk.js.map