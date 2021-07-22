(this["webpackJsonp15-puzzle"]=this["webpackJsonp15-puzzle"]||[]).push([[0],{32:function(e,t,a){e.exports={board:"Board_board__29-vl",tile:"Board_tile__3Ymhw",empty:"Board_empty__1gxMu",top:"Board_top__Ic1aJ",moveTop:"Board_moveTop__3xhjx",right:"Board_right__2_HCr",moveRight:"Board_moveRight__2By8J",bottom:"Board_bottom__1xtci",moveBottom:"Board_moveBottom__3gVCX",left:"Board_left__1L6g6",moveLeft:"Board_moveLeft__2oT5I",fadeIn:"Board_fadeIn__2lzj2",fadeInBottomTop:"Board_fadeInBottomTop__1-zR8",fadeInLeftRight:"Board_fadeInLeftRight__32TLr"}},35:function(e,t,a){e.exports={stats:"Stats_stats__3gBwN",actions:"Stats_actions__1QOC0",restartButton:"Stats_restartButton__1UNvd",pauseButton:"Stats_pauseButton__1pDxZ",resumeButton:"Stats_resumeButton__2_GFM",fadeIn:"Stats_fadeIn__Zoumi",fadeInBottomTop:"Stats_fadeInBottomTop__bVIlK",fadeInLeftRight:"Stats_fadeInLeftRight__1u6oK"}},39:function(e,t,a){e.exports={animatedButton:"AnimatedButton_animatedButton__1SurT",animatedButtonInnerWrapper:"AnimatedButton_animatedButtonInnerWrapper__1RucT",animatedButtonBgContainer:"AnimatedButton_animatedButtonBgContainer__E2Lzh",disabled:"AnimatedButton_disabled__34BNW",fadeIn:"AnimatedButton_fadeIn__3rQW2",fadeInBottomTop:"AnimatedButton_fadeInBottomTop__2_raM",fadeInLeftRight:"AnimatedButton_fadeInLeftRight__1qWH9"}},40:function(e,t,a){e.exports={gamePage:"GamePage_gamePage__RkYJb",fadeIn:"GamePage_fadeIn__1W9Zx",puzzleSolved:"GamePage_puzzleSolved__2oQkb",gamePaused:"GamePage_gamePaused__v3GrE",stats:"GamePage_stats__zYTP1",fadeInBottomTop:"GamePage_fadeInBottomTop__3i44h",fadeInLeftRight:"GamePage_fadeInLeftRight__lVcuh"}},50:function(e,t,a){e.exports={mainPage:"MainPage_mainPage__JXrbz",inputWrapper:"MainPage_inputWrapper__3mTBc",fadeIn:"MainPage_fadeIn__bB1cu",fadeInBottomTop:"MainPage_fadeInBottomTop__3NoA8",fadeInLeftRight:"MainPage_fadeInLeftRight__2XBc-"}},53:function(e,t,a){e.exports={leaderboardPage:"LeaderboardPage_leaderboardPage__1VFxE",fadeIn:"LeaderboardPage_fadeIn__G-A7Z",actionButton:"LeaderboardPage_actionButton__3KS0i",fadeInBottomTop:"LeaderboardPage_fadeInBottomTop__1VgP3",fadeInLeftRight:"LeaderboardPage_fadeInLeftRight__183ml"}},71:function(e,t,a){e.exports={fadeIn:"index_fadeIn__38lkY",fadeInBottomTop:"index_fadeInBottomTop__2JA79",fadeInLeftRight:"index_fadeInLeftRight__7Tlft"}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),s=a.n(c),r=(a(71),a(10)),i=a(42),u=a(9),d=a(60),l=a(57),f=a(15),b=a(22),m=a.n(b),j=a(27),_=a(5),p=a.n(_),O=a(39),h=a.n(O),x=a(1),v=o.a.forwardRef((function(e,t){var a=e.className,n=e.text,o=e.onClick,c=e.href,s=e.disabled;return Object(x.jsx)("div",{className:m()(h.a.animatedButton,a,Object(j.a)({},h.a.disabled,s)),children:Object(x.jsxs)("div",{className:h.a.animatedButtonInnerWrapper,children:[Object(x.jsx)("div",{className:h.a.animatedButtonBgContainer}),Object(x.jsx)("button",{children:Object(x.jsx)("a",{href:c,ref:t,onClick:o,role:"none",children:n})})]})})}));v.defaultProps={className:"",text:"",onClick:function(){},href:null,disabled:!1},v.propTypes={className:p.a.string,text:p.a.string,onClick:p.a.func,href:p.a.string,disabled:p.a.bool};var g=v,B="/",I="/game",C="/leaderboard",k=function(e){return e.username},P=function(e){return e.isGameMode},y=function(e){return e.isPaused},S=function(e){return e.moves},T=function(e){return e.time},N=a(20),M={setUsername:Object(N.a)("setUsername"),setIsGameMode:Object(N.a)("setIsGameMode"),setIsPaused:Object(N.a)("setIsPaused"),setMoves:Object(N.a)("setMoves"),setTime:Object(N.a)("setTime")},R=a(50),L=a.n(R),G=function(){var e=Object(r.b)(),t=Object(r.c)(k),a=o.a.useRef(),n=o.a.useRef(),c=o.a.useState(!1),s=Object(f.a)(c,2),i=s[0],u=s[1],d=null===t||void 0===t?void 0:t.length,l=!d&&!i,b=o.a.useCallback((function(){e(M.setUsername(null))}),[e]),j=o.a.useCallback((function(){a.current&&a.current.focus()}),[]),_=o.a.useCallback((function(e){e.preventDefault(),n.current&&n.current.click()}),[]);return o.a.useEffect(j,[j]),o.a.useEffect(b,[b]),Object(x.jsx)("main",{className:L.a.mainPage,children:Object(x.jsxs)("form",{onSubmit:_,children:[Object(x.jsx)("h1",{children:"15 Puzzle"}),Object(x.jsxs)("div",{className:m()(L.a.inputWrapper,{withError:l}),"data-validate":"Username is reauired",children:[Object(x.jsx)("input",{type:"text",name:"username",placeholder:"Type your username",onChange:function(t){return e(M.setUsername(t.target.value))},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},ref:a}),Object(x.jsx)("span",{"data-symbol":"\uf206"})]}),Object(x.jsx)(g,{text:"Start Game",href:I,ref:n,disabled:!d})]})})},E=a(29),z=a.n(E),A=a(37),w=a(58),D=a.n(w),U=a(3),F=a.n(U),W=a(110),J=a(109),V=a(108),q=a(106),Y=a(107),K=a(105),Z=function(e){var t=e.title,a=e.body,n=e.confirmButton,c=e.discardButton,s=e.delayMS,r=F.a.isNumber(s)&&s>0,i=o.a.useState(!r),u=Object(f.a)(i,2),d=u[0],l=u[1],b=o.a.useCallback((function(){r&&setTimeout((function(){l(!0)}),s)}),[s,r]),m=o.a.useCallback((function(){l(!1),F.a.isFunction(null===n||void 0===n?void 0:n.onClick)&&n.onClick.apply(n,arguments)}),[n]),j=o.a.useCallback((function(){l(!1),F.a.isFunction(null===c||void 0===c?void 0:c.onClick)&&c.onClick.apply(c,arguments)}),[c]);return o.a.useEffect(b,[b]),Object(x.jsxs)(J.a,{open:d,onClose:function(){return l(!1)},children:[Object(x.jsx)(K.a,{id:"alert-dialog-title",children:t||""}),Object(x.jsx)(q.a,{children:Object(x.jsx)(Y.a,{id:"alert-dialog-description",children:a||""})}),(n||c)&&Object(x.jsxs)(V.a,{children:[c&&Object(x.jsx)(W.a,{onClick:j,color:"primary",children:c.text||""}),n&&Object(x.jsx)(W.a,{onClick:m,color:"primary",autoFocus:!0,children:n.text||""})]})]})};Z.defaultProps={title:"",body:"",confirmButton:null,discardButton:null,delayMS:0};var Q=Z,X=F.a.reduce({CONFIGURATION:"/configuration",RECORD:"/record",LEADERBOARD:"/leaderboard"},(function(e,t,a){return e[a]="".concat("https://fifteen-puzzle-server.herokuapp.com/api").concat(t),e}),{}),H=function(e){return F.a.replace(new Date(e).toUTCString(),/.*(\d{2}:\d{2}:\d{2}).*/,"$1")},$=a(35),ee=a.n($),te=function(e){var t,a=e.className,n=e.restartGame,c=Object(r.b)(),s=Object(r.c)(S),i=Object(r.c)(P),u=Object(r.c)(y),d=o.a.useRef(i&&!u),l=o.a.useMemo((function(){return Date.now()}),[]),b=o.a.useState(),_=Object(f.a)(b,2),p=_[0],O=_[1],h=o.a.useState(0),v=Object(f.a)(h,2),B=v[0],I=v[1],C=Object(r.c)(T),k=o.a.useCallback((function(){setTimeout((function(){d.current&&c(M.setTime(Date.now()-l-B))}),500)}),[c,l,B]),N=o.a.useCallback((function(){d.current=i&&!u}),[i,u]),R=o.a.useCallback((function(){O(Date.now()),c(M.setIsPaused(!0))}),[c]),L=o.a.useCallback((function(){I(B+(Date.now()-p)),c(M.setIsPaused(!1))}),[c,p,B]);return o.a.useEffect(k,[k,C]),o.a.useEffect(N,[N]),Object(x.jsxs)("div",{className:m()(ee.a.stats,a),children:[Object(x.jsxs)("div",{className:ee.a.actions,children:[Object(x.jsx)(g,{className:ee.a.restartButton,text:"Restart",onClick:n}),Object(x.jsx)(g,{className:m()((t={},Object(j.a)(t,ee.a.pauseButton,!u),Object(j.a)(t,ee.a.resumeButton,u),t)),text:u?"Resume":"Pause",onClick:u?L:R,disabled:!i})]}),Object(x.jsxs)("span",{children:[Object(x.jsx)("h4",{children:H(C)}),Object(x.jsx)("h4",{children:"Moves: ".concat(s)})]})]})};te.defaultProps={className:"",restartGame:function(){}};var ae=te,ne=a(31),oe=a(32),ce=a.n(oe),se=Math.pow(4,2),re=Math.pow(6,2),ie=F.a.times(re,(function(){return-1})),ue=F.a.times(se,(function(e){return e})),de=F.a.times(se,(function(e){return(e+1)%se})),le=function(e){return 7+6*Math.floor(e/4)+e%4},fe=function(e){var t=e.initialConfiguration,a=e.onSolveCallback,n=Object(r.b)(),c=Object(u.g)(),s=Object(r.c)(S),i=o.a.useMemo((function(){return F.a.isArray(t)&&F.a.chain(t).sortBy().isEqual(ue).value()}),[t]),d=o.a.useMemo((function(){return e=t,F.a.map(e,(function(e){return{value:e,className:0===e?ce.a.empty:""}}));var e}),[t]),l=o.a.useState(d),b=Object(f.a)(l,2),j=b[0],_=b[1],p=o.a.useState(),O=Object(f.a)(p,2),h=O[0],v=O[1],g=o.a.useMemo((function(){return(e=j)?F.a.reduce(e,(function(e,t,a){return e[le(a)]=t,e}),Object(ne.a)(ie)):ie;var e}),[j]),I=o.a.useCallback((function(){i||c.push(B)}),[c,i]),C=o.a.useCallback((function(){i&&n(M.setIsGameMode(!0))}),[n,i]),k=o.a.useCallback((function(){n(M.setIsGameMode(!1)),a()}),[n,a]),P=o.a.useCallback((function(e){var t,a,n,o,c=le(e);return{top:{index:c-6,value:null===(t=g[c-6])||void 0===t?void 0:t.value},right:{index:c+1,value:null===(a=g[c+1])||void 0===a?void 0:a.value},bottom:{index:c+6,value:null===(n=g[c+6])||void 0===n?void 0:n.value},left:{index:c-1,value:null===(o=g[c-1])||void 0===o?void 0:o.value}}}),[g]),y=o.a.useCallback((function(e){var t=Number(e.target.dataset.tileValue),a=Number(e.target.dataset.tileIndex);if(!(0===t)){var o=P(a),c=F.a.findKey(o,(function(e){return 0===e.value}));if(c){var r=Object(ne.a)(j);r[a]={value:t,className:ce.a[c]},_(r);var i,u=Object(ne.a)(j);u[F.a.findIndex(j,(function(e){return 0===e.value}))]={value:t,className:""},u[a]={value:0,className:ce.a.empty},v(u),n(M.setMoves(s+1)),F.a.isEqual((i=u,F.a.map(i,"value")),de)&&k()}}}),[j,n,P,s,k]);return o.a.useEffect(I,[I]),o.a.useEffect(C,[C]),Object(x.jsx)("div",{className:ce.a.board,"data-id":"board",children:F.a.map(j,(function(e,t){var a=e.value,n=e.className;return Object(x.jsx)("div",{role:"none","data-tile-index":t,"data-tile-value":a,onClick:y,className:m()(ce.a.tile,n),onAnimationEnd:function(){_(h)},children:a},F.a.uniqueId(t))}))})};fe.defaultProps={initialConfiguration:[],onSolveCallback:function(){}};var be,me,je=o.a.memo(fe),_e=a(40),pe=a.n(_e),Oe=function(){var e,t=Object(r.b)(),a=Object(u.g)(),n=Object(r.d)(),c=Object(r.c)(k),s=Object(r.c)(y),i=o.a.useState(),d=Object(f.a)(i,2),l=d[0],b=d[1],_=o.a.useState(!1),p=Object(f.a)(_,2),O=p[0],h=p[1],v=o.a.useCallback((function(){c||a.push(B)}),[a,c]),g=o.a.useCallback(Object(A.a)(z.a.mark((function e(){var t,a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X.CONFIGURATION,{"Content-Type":"application/json"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.data,b(n);case 8:case"end":return e.stop()}}),e)}))),[]),I=o.a.useCallback((function(){t(M.setIsGameMode(!1)),t(M.setIsPaused(!1)),t(M.setMoves(0)),t(M.setTime(0)),h(!1),b(null),g()}),[t,g]),P=o.a.useCallback(Object(A.a)(z.a.mark((function e(){var t,a,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t=n.getState(),a=S(t),o=T(t),e.next=6,fetch(X.RECORD,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{username:c,moves:a,time:o}})});case 6:case"end":return e.stop()}}),e)}))),[n,c]),N=o.a.useCallback((function(){a.push(C),a.go()}),[a]);return o.a.useEffect(v,[v]),o.a.useEffect(I,[I]),Object(x.jsxs)("main",{className:m()(pe.a.gamePage,(e={},Object(j.a)(e,pe.a.puzzleSolved,O),Object(j.a)(e,pe.a.gamePaused,s),e)),children:[Object(x.jsx)("h1",{children:l?"Game on, ".concat(c,"!"):"Loading..."}),l&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{className:pe.a.stats,restartGame:I}),Object(x.jsx)(je,{initialConfiguration:l,onSolveCallback:P})]}),O&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D.a,{gravity:.4,run:!0,numberOfPieces:400}),Object(x.jsx)(Q,{title:"Amazing!",body:"You finally solved it... Much respect",confirmButton:{text:"Play again!",onClick:I},discardButton:{text:"Go to leaderboard",onClick:N},delayMS:2e3})]})]})},he=a(53),xe=a.n(he),ve=function(){var e=Object(r.c)(k),t=e?"Play Again":"Play",a=e?I:B,n=o.a.useState(),c=Object(f.a)(n,2),s=c[0],i=c[1],u=o.a.useCallback(Object(A.a)(z.a.mark((function e(){var t,a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X.LEADERBOARD);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.data,i(n);case 8:case"end":return e.stop()}}),e)}))),[]);return o.a.useEffect(u,[u]),Object(x.jsxs)("main",{className:xe.a.leaderboardPage,children:[Object(x.jsx)("h1",{children:s?"Leaderboard":"Loading..."}),s&&(F.a.isEmpty(s)?Object(x.jsx)("h3",{children:"No stats yet... Better hurry up and play!"}):Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Username"}),Object(x.jsx)("th",{children:"Moves"}),Object(x.jsx)("th",{children:"Time"})]})}),Object(x.jsx)("tbody",{children:F.a.map(s,(function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.username}),Object(x.jsx)("td",{children:e.moves}),Object(x.jsx)("td",{children:H(e.time)})]},F.a.uniqueId(e.username))}))})]})),s&&Object(x.jsx)(g,{className:xe.a.actionButton,text:t,href:a})]})},ge=a(26),Be=a(54),Ie=a(59),Ce=a.n(Ie),ke=Object(ge.b)({username:Object(N.b)(M.setUsername,{defaultState:null}),isGameMode:Object(N.b)(M.setIsGameMode,{defaultState:!1}),isPaused:Object(N.b)(M.setIsPaused,{defaultState:!1}),moves:Object(N.b)(M.setMoves,{defaultState:0}),time:Object(N.b)(M.setTime,{defaultState:0})}),Pe={key:"root",version:"1",storage:Ce.a},ye=function(){if(!be||!me){var e=Object(Be.a)(Pe,ke);be=Object(ge.c)(e,{},(t=[],ge.a.apply(void 0,Object(ne.a)(t)))),me=Object(Be.b)(be)}var t;return{store:be,persistor:me}}(),Se=ye.store,Te=ye.persistor,Ne=Object(d.hot)((function(){return Object(x.jsx)(r.a,{store:Se,children:Object(x.jsx)(l.a,{loading:null,persistor:Te,children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{path:B,exact:!0,component:G}),Object(x.jsx)(u.b,{path:I,exact:!0,component:Oe}),Object(x.jsx)(u.b,{path:C,exact:!0,component:ve}),Object(x.jsx)(u.a,{to:B})]})})})})}));s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Ne,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.92e46bc1.chunk.js.map