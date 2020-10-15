(this.webpackJsonpminimanote=this.webpackJsonpminimanote||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),o=n.n(c),l=n(8),u=(n(62),n(10)),s=(n(63),n(15)),i=n(9),d={EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_USER_START:"SIGN_OUT_USER_START",SIGN_OUT_USER_SUCCESS:"SIGN_OUT_USER_SUCCESS",SIGN_UP_USER_START:"SIGN_UP_USER_START",USER_ERROR:"USER_ERROR",RESET_USER_STATE:"RESET_USER_STATE",SIGN_IN_WITH_GOOGLE_START:"SIGN_IN_WITH_GOOGLE_START"},m=function(e){return{type:d.SIGN_IN_SUCCESS,payload:e}},p=function(e){return{type:d.USER_ERROR,payload:e}},E=n(40),f=Object(a.createContext)(),b=f.Provider,h=(f.Consumer,function(e){return{currentUser:e.user.currentUser}});var v=function(e){var t=Object(a.useContext)(f),n=t.darkThemeActive,c=t.setDarkThemeActive,o=function(){u({type:d.SIGN_OUT_USER_START})},l=Object(i.c)(h).currentUser,u=Object(i.b)();return r.a.createElement("header",{className:"main-header"},r.a.createElement(s.b,{to:"/",className:"logo"},"Minimanote"),l&&r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(E.a,{size:"20",style:{cursor:"pointer"},onClick:function(){c(!n)}})),r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return o()}},"Logout"))),!l&&r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/login"},"Login"))))};n(69);var S=function(e){var t=e.children;return r.a.createElement("ul",null,t)},O=n(56);n(70);var T=function(e){var t=e.placeholder,n=e.handleChange,a=e.type,c=e.label,o=Object(O.a)(e,["placeholder","handleChange","type","label"]);return c?r.a.createElement("div",null,r.a.createElement("label",{for:c},c),r.a.createElement("input",Object.assign({className:"sidebar-input",placeholder:t,onChange:n,type:a},o))):r.a.createElement("input",Object.assign({className:"sidebar-input",placeholder:t,onChange:n,type:a},o))},_=(n(71),{ADD_NEW_NOTE_START:"ADD_NEW_NOTE_START",FETCH_NOTES_START:"FETCH_NOTES_START",SET_NOTES:"SET_NOTES",DELETE_NOTES_START:"DELETE_NOTES_START",ADD_NOTE_CONTENT_START:"ADD_NOTE_CONTENT_START",ADD_HEADER_IMG_START:"ADD_HEADER_IMG_START",CURRENT_DOCUMENT:"CURRENT_DOCUMENT"}),g=function(){return{type:_.FETCH_NOTES_START}},j=function(e){return{type:_.SET_NOTES,payload:e}},N=n(20);n(72);var x=function(e){var t=e.children,n=e.handleClick,a=e.type,c=e.bgColor;return r.a.createElement("button",{type:a,onClick:n,style:{backgroundColor:c||"#333333"}},t)};n(73);var y=function(e){var t=e.children,n=e.openModal,c=e.modalTitle,o=(e.closeModal,Object(a.useState)(!1)),u=Object(l.a)(o,2),s=u[0],i=u[1],d=Object(a.useContext)(f).darkThemeActive;return r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return i(!0)}},n),r.a.createElement("div",{className:"modal",style:{display:s?"block":"none"}},r.a.createElement("div",{className:"modal-contents",style:{backgroundColor:d?"#333333":"#E1E8ED",color:d?"white":"black"}},r.a.createElement("span",{onClick:function(){return i(!1)}},"X"),r.a.createElement("h2",{style:{borderBottomColor:d?"#E1E8ED":"#333333"}},c),t)))},C=function(e){var t=e.user;return{notes:e.notesData.notes,currentUser:t.currentUser}};var U=function(e){var t=e.setNoteData,n=Object(a.useContext)(f).darkThemeActive,c=Object(i.c)(C),o=c.currentUser,u=c.notes,s=Object(a.useState)(""),d=Object(l.a)(s,2),m=d[0],p=d[1],E=Object(i.b)();Object(a.useEffect)((function(){E(g())}),[]);var b=u.map((function(e,n){if(e.noteUserUID===o.id)return r.a.createElement("li",{key:e.documentID,className:"sidebar-note-titles"},r.a.createElement("span",{onClick:function(){return function(e,n){t(e,n)}(e,e.documentID)}},e.noteTitle))}));return Object(a.useEffect)((function(){var e=u.filter((function(e){return e.noteUserUID===o.id}));t(e[0])}),[t]),r.a.createElement("div",{className:"sidebar",style:{backgroundColor:n?"#ffa48e":"#E1E8ED",color:n?"white":"black"}},r.a.createElement(S,null,r.a.createElement("div",{className:"sidebar-content-85"},r.a.createElement("h2",{style:{borderBottomColor:n?"#E1E8ED":"#333333"}},o.displayName),u&&b),r.a.createElement("div",{className:"sidebar-modal",style:{borderTopColor:n?"#E1E8ED":"#333333"}},r.a.createElement(y,{openModal:r.a.createElement("div",null,r.a.createElement(N.a,null),r.a.createElement("span",null,"Notebook")),modalTitle:"Add Notebook"},r.a.createElement(T,{placeholder:"Untitled",handleChange:function(e){return p(e.target.value)},type:"text",value:m}),r.a.createElement(x,{handleClick:function(){if(""!==m){E({type:_.ADD_NEW_NOTE_START,payload:{noteTitle:m}}),p("");var e=u.filter((function(e){return e.noteUserUID===o.id}));t(e[e.length-1])}},bgColor:n?"#ffa48e":"#333333"},"Create Notebook")))))};n(74);var k=function(e){var t=e.children;return r.a.createElement("div",{className:"landingPage"},r.a.createElement("h1",null,"\ud83d\udcdd Welcome To Minimanote"),r.a.createElement("p",null,"A Minimalistic Todo and Note taking Appliation."),t)},w=(n(75),n(76),n(41)),D=n.n(w),R=n(42),I=n.n(R),A=n(43),G=n.n(A),P=n(44),H=n.n(P),M=n(45),L=n.n(M),W=n(46),B=n.n(W),F=n(47),z=n.n(F),K=n(48),J=n.n(K),V=n(49),q=n.n(V),Q=n(50),X=n.n(Q),Y=n(51),Z=n.n(Y),$={header:{class:I.a,inlineToolbar:!0},table:B.a,paragraph:{class:G.a,inlineToolbar:!0},list:L.a,warning:{class:X.a,inlineToolbar:!0,shortcut:"CMD+SHIFT+e",config:{titlePlaceholder:"Title",messagePlaceholder:"Message"}},code:{class:z.a,inlineToolbar:!0},marker:{class:Z.a,inlineToolbar:!0,shortcut:"CMD+SHIFT+h"},checklist:{class:H.a,inlineToolbar:!0},delimiter:J.a,inlineCode:q.a};var ee=function(e){var t=e.noteData,n=e.filteredNotesByUser,c=Object(a.useContext)(f).darkThemeActive,o=Object(i.b)(),u=Object(a.useState)(),s=Object(l.a)(u,2),d=s[0],m=s[1],p=Object(a.useState)({blocks:[{type:"header",data:{text:"Enter Title Here",level:"2"}},{type:"paragraph",data:{text:"Don't forget to save your notes."}}]}),E=Object(l.a)(p,2),b=E[0],h=E[1],v=Object(a.useState)({blocks:[{type:"header",data:{text:"Enter Title Here",level:"2"}},{type:"paragraph",data:{text:"Don't forget to save your notes."}}]}),S=Object(l.a)(v,1)[0];Object(a.useEffect)((function(){o(g()),h(S)}),[]);var O=n&&n.map((function(e,n){if(e.documentID===t.documentID)return r.a.createElement(D.a,{autofocus:!0,key:n,tools:$,onReady:function(){return console.log("ready")},data:""===e.noteContent?S:e.noteContent,onData:function(e){return h(e)}})}));return r.a.createElement("div",{className:"note-inputs"},r.a.createElement("div",null,n&&0!==n.length&&r.a.createElement("div",{className:"note-title-btn"},r.a.createElement(x,{handleClick:function(){var e=t.documentID;o({type:_.ADD_NOTE_CONTENT_START,payload:{text:b,documentID:e}}),m(!0)},bgColor:c?"#ffa48e":"#333333"},"Save"),r.a.createElement("div",null,r.a.createElement(y,{openModal:r.a.createElement("span",null,r.a.createElement(N.b,{style:{cursor:"pointer"}})),modalTitle:"Options",closeModal:d},r.a.createElement("div",{className:"note-modal-icons"},r.a.createElement(N.c,{size:"25px",style:{cursor:"pointer"},onClick:function(){var e=t.documentID;o(function(e){return{type:_.DELETE_NOTES_START,payload:e}}(e))}}),"Delete"))))),r.a.createElement("div",{id:"editor-container"},n&&0!==n.length?O:r.a.createElement(k,null,r.a.createElement("div",{className:"landing-page-p",style:{textAlign:"left",marginTop:"4vh",backgroundColor:"white"}},r.a.createElement("ul",{style:{color:"black"}},r.a.createElement("li",null,r.a.createElement("p",null,"Begin by clicking on Notebook and entering the notebook title.")),r.a.createElement("li",null,r.a.createElement("p",null,"You can choose an image for your note header.")),r.a.createElement("li",null,r.a.createElement("p",null,"Start by clicking on the default note and begin typing away.")))))))},te=n(52),ne=n.n(te),ae=(n(91),n(3)),re=n.n(ae),ce=n(11),oe=n(53),le=(n(93),n(95),n(105),n(23)),ue=n.n(le);ue.a.initializeApp({apiKey:"AIzaSyD-UcseVbM7o7mSkxfiCMU-gt6QJr9ZM8w",authDomain:"ljaph-minimanote.firebaseapp.com",databaseURL:"https://ljaph-minimanote.firebaseio.com",projectId:"ljaph-minimanote",storageBucket:"ljaph-minimanote.appspot.com",messagingSenderId:"885490802629",appId:"1:885490802629:web:ed92149ceca7e1f7c1f5ac"});var se=ue.a.auth(),ie=ue.a.firestore(),de=ue.a.storage(),me=new ue.a.auth.GoogleAuthProvider;me.setCustomParameters({prompt:"select_account"});var pe=function(){var e=Object(oe.a)(re.a.mark((function e(t){var n,a,r,c,o,l,u;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.userAuth,a=t.additionalData,n){e.next=3;break}return e.abrupt("return");case 3:return r=n.uid,c=ie.doc("users/".concat(r)),e.next=7,c.get();case 7:if(e.sent.exists){e.next=19;break}return o=n.displayName,l=n.email,u=new Date,e.prev=11,e.next=14,c.set(Object(ce.a)({displayName:o,email:l,createdDate:u},a));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.log(e.t0);case 19:return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t){return e.apply(this,arguments)}}();var Ee=function(e){var t=e.noteData,n=e.filteredNotesByUser,c=Object(i.b)(),o=Object(a.useState)(),u=Object(l.a)(o,2),s=u[0],d=u[1],m=["image/png","image/jpeg"],p=function(e){var n=e.target.files[0];if(n&&m.includes(n.type)){var a=t.documentID;de.ref("headerImages/".concat(n.name)).put(n).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){de.ref("headerImages").child(n.name).getDownloadURL().then((function(e){d(e),c({type:_.ADD_HEADER_IMG_START,payload:{documentID:a,url:e}})})).catch((function(e){return console.log(e)}))}))}};console.log("filteredNotesByUser",n);var E=t&&n.map((function(e,n){if(t.documentID===e.documentID)return r.a.createElement("div",{key:n},r.a.createElement("div",{className:"header-image",style:{backgroundImage:""===e.noteHeader?"url(".concat(ne.a,")"):"url(".concat(e.noteHeader||s,")")}},r.a.createElement("input",{type:"file",title:"Change Cover",name:"file",onChange:p,id:"file",className:"inputfile"}),r.a.createElement("label",{htmlFor:"file"},r.a.createElement("span",null,r.a.createElement(N.d,null)," Change Header"))))}));return r.a.createElement("header",{className:"note-header"},E)},fe=function(e){var t=e.user,n=e.notesData;return{currentUser:t.currentUser,notes:n.notes}};var be=function(e){var t=Object(i.c)(fe),n=t.currentUser,c=t.notes,o=Object(a.useContext)(f).darkThemeActive,u=Object(a.useState)(),d=Object(l.a)(u,2),m=d[0],p=d[1],E=Object(a.useState)(),b=Object(l.a)(E,2),h=b[0],S=b[1];return Object(a.useEffect)((function(){var e=c.filter((function(e){return e.noteUserUID===n.id}));if(S(e),void 0===m)return p(e[0])}),[c]),r.a.createElement("div",{className:"mainlayout"},r.a.createElement("div",null,r.a.createElement(v,null)),null===n&&r.a.createElement(k,null,r.a.createElement("div",{className:"pageLinks"},r.a.createElement(s.b,{to:"/login"},"Login"),r.a.createElement(s.b,{to:"/register"},"Sign Up"))),n&&r.a.createElement("div",{className:"mainLayout-flex"},r.a.createElement(U,{setNoteData:p}),c&&r.a.createElement("div",{className:"notes-display",style:{backgroundColor:o?"#243447":"white",color:o?"white":"black"}},r.a.createElement(Ee,{noteData:m,filteredNotesByUser:h}),r.a.createElement(ee,{noteData:m,filteredNotesByUser:h}))))};n(99);var he=function(e){var t=e.headline,n=e.children;return r.a.createElement("div",{className:"authWrapper"},r.a.createElement("div",{className:"wrap"},r.a.createElement("h2",null,t),n))};n(100);var ve=function(e){var t=e.placeholder,n=e.handleChange,a=e.type;return r.a.createElement("input",{placeholder:t,type:a,onChange:n})},Se=(n(101),function(e){var t=e.user;return{currentUser:t.currentUser,userError:t.userError}});var Oe=function(e){var t=Object(u.g)(),n=Object(i.b)(),c=Object(i.c)(Se),o=c.currentUser,s=c.userError,m=Object(a.useState)(""),p=Object(l.a)(m,2),E=p[0],f=p[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),v=h[0],S=h[1],O=Object(a.useState)(""),T=Object(l.a)(O,2),_=T[0],g=T[1];Object(a.useEffect)((function(){o&&(j(),t.push("/"))}),[o]),console.log(s),Object(a.useEffect)((function(){void 0===s&&""!==s||g(s)}),[s]);var j=function(){f(""),S("")};return r.a.createElement(he,{headline:"Login"},r.a.createElement("div",null,r.a.createElement("div",{className:"signIn"},_&&r.a.createElement("p",{style:{color:"red",fontSize:12}},_),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n({type:d.EMAIL_SIGN_IN_START,payload:{email:E,password:v}})}},r.a.createElement(ve,{placeholder:"Email",type:"email",handleChange:function(e){return f(e.target.value)}}),r.a.createElement(ve,{placeholder:"Password",type:"password",handleChange:function(e){return S(e.target.value)}}),r.a.createElement(x,null,"Login")),r.a.createElement(x,{handleClick:function(){n({type:d.SIGN_IN_WITH_GOOGLE_START})}},"Login with Google"))))},Te=(n(102),function(e){var t=e.user;return{currentUser:t.currentUser,userError:t.userError}});var _e=function(e){var t=Object(u.g)(),n=Object(i.c)(Te),c=n.currentUser,o=n.userError,s=Object(i.b)(),m=Object(a.useState)(""),p=Object(l.a)(m,2),E=p[0],f=p[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),v=h[0],S=h[1],O=Object(a.useState)(""),T=Object(l.a)(O,2),_=T[0],g=T[1],j=Object(a.useState)(""),N=Object(l.a)(j,2),y=N[0],C=N[1],U=Object(a.useState)(""),k=Object(l.a)(U,2),w=k[0],D=k[1];return Object(a.useEffect)((function(){c&&t.push("/")}),[c]),Object(a.useEffect)((function(){""!==o&&D(o)}),[o]),r.a.createElement(he,{headline:"Sign Up"},w&&r.a.createElement("p",{style:{color:"red",textAlign:"center"}},w),r.a.createElement("div",{className:"signUp"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({type:d.SIGN_UP_USER_START,payload:{displayName:E,email:v,password:_,confirmPassword:y}})}},r.a.createElement(ve,{placeholder:"Username",type:"text",handleChange:function(e){return f(e.target.value)}}),r.a.createElement(ve,{placeholder:"Email",type:"email",handleChange:function(e){return S(e.target.value)}}),r.a.createElement(ve,{placeholder:"Password",type:"password",handleChange:function(e){return g(e.target.value)}}),r.a.createElement(ve,{placeholder:"Confirm Password",type:"password",handleChange:function(e){return C(e.target.value)}}),r.a.createElement(x,{type:"submit"},"Sign Up"))))};n(103);var ge=function(e){return r.a.createElement("div",null,r.a.createElement(v,null),e.children)},je=function(e){return{currentUser:e.user.currentUser}};var Ne=function(){var e=Object(i.c)(je).currentUser,t=Object(i.b)(),n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],s=c[1];return Object(a.useEffect)((function(){t({type:d.CHECK_USER_SESSION})}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(b,{value:{darkThemeActive:o,setDarkThemeActive:s}},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(u.b,{path:"/login",render:function(){return e?r.a.createElement(u.a,{to:"/"}):r.a.createElement(ge,null,r.a.createElement(Oe,null))}}),r.a.createElement(u.b,{path:"/register",render:function(){return e?r.a.createElement(u.a,{to:"/login"}):r.a.createElement(ge,null,r.a.createElement(_e,null))}}))))},xe=n(18),ye=n(55),Ce=n(54),Ue={currentUser:null,userErrors:""},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SIGN_IN_SUCCESS:return Object(ce.a)(Object(ce.a)({},e),{},{currentUser:t.payload,userError:""});case d.USER_ERROR:return Object(ce.a)(Object(ce.a)({},e),{},{userError:t.payload});case d.RESET_USER_STATE:case d.SIGN_OUT_USER_SUCCESS:return Object(ce.a)(Object(ce.a)({},e),Ue);default:return e}},we={notes:[]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SET_NOTES:return Object(ce.a)(Object(ce.a)({},e),{},{notes:t.payload});default:return e}},Re=Object(xe.c)({user:ke,notesData:De}),Ie=n(5),Ae=re.a.mark(Ve),Ge=re.a.mark(qe),Pe=re.a.mark(Qe),He=re.a.mark(Xe),Me=re.a.mark(Ye),Le=re.a.mark(Ze),We=re.a.mark($e),Be=re.a.mark(et),Fe=re.a.mark(tt),ze=re.a.mark(nt),Ke=re.a.mark(at),Je=re.a.mark(rt);function Ve(e){var t,n,a,r=arguments;return re.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},c.prev=1,c.next=4,pe({userAuth:e,additionalData:t});case 4:return n=c.sent,c.next=7,n.get();case 7:return a=c.sent,c.next=10,Object(Ie.c)(m(Object(ce.a)({id:a.id},a.data())));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),console.log(c.t0);case 15:case"end":return c.stop()}}),Ae,null,[[1,12]])}function qe(e){var t,n,a,r,c;return re.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,a=t.password,o.prev=1,o.next=4,se.signInWithEmailAndPassword(n,a);case 4:return r=o.sent,c=r.user,o.next=8,Ve(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(Ie.c)(p(o.t0.message));case 14:case"end":return o.stop()}}),Ge,null,[[1,10]])}function Qe(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(d.EMAIL_SIGN_IN_START,qe);case 2:case"end":return e.stop()}}),Pe)}function Xe(){var e;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=se.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Ve(e);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),He,null,[[0,10]])}function Ye(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(d.CHECK_USER_SESSION,Xe);case 2:case"end":return e.stop()}}),Me)}function Ze(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.signOut();case 3:return e.next=5,Object(Ie.c)({type:d.SIGN_OUT_USER_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Ie.c)(p(e.t0.message));case 11:case"end":return e.stop()}}),Le,null,[[0,7]])}function $e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(d.SIGN_OUT_USER_START,Ze);case 2:case"end":return e.stop()}}),We)}function et(e){var t,n,a,r,c,o,l,u;return re.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.payload,n=t.displayName,a=t.email,r=t.password,c=t.confirmPassword,r===c){s.next=5;break}return s.next=4,Object(Ie.c)(p("Passwords do not match"));case 4:return s.abrupt("return");case 5:return s.prev=5,s.next=8,se.createUserWithEmailAndPassword(a,r);case 8:return o=s.sent,l=o.user,u={displayName:n},s.next=13,Ve(l,u);case 13:s.next=19;break;case 15:return s.prev=15,s.t0=s.catch(5),s.next=19,Object(Ie.c)(p(s.t0.message));case 19:case"end":return s.stop()}}),Be,null,[[5,15]])}function tt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(d.SIGN_UP_USER_START,et);case 2:case"end":return e.stop()}}),Fe)}function nt(){var e,t;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,se.signInWithPopup(me);case 3:return e=n.sent,t=e.user,n.next=7,Ve(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Ie.c)(p(n.t0.message));case 13:case"end":return n.stop()}}),ze,null,[[0,9]])}function at(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(d.SIGN_IN_WITH_GOOGLE_START,nt);case 2:case"end":return e.stop()}}),Ke)}function rt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.a)([Object(Ie.b)(Qe),Object(Ie.b)(Ye),Object(Ie.b)($e),Object(Ie.b)(tt),Object(Ie.b)(at)]);case 2:case"end":return e.stop()}}),Je)}var ct=function(e){return new Promise((function(t,n){ie.collection("notes").doc().set(e).then((function(){return t()})).catch((function(e){n(e)}))}))},ot=function(e,t){return new Promise((function(n,a){ie.collection("notes").doc(t).update({noteContent:e}).then((function(){return n()})).catch((function(e){return a(e)}))}))},lt=function(e){return new Promise((function(t,n){ie.collection("notes").doc(e).delete().then((function(){return t()})).catch((function(e){return n(e)}))}))},ut=function(e,t){new Promise((function(n,a){ie.collection("notes").doc(e).update({noteHeader:t}).then((function(){return n()})).catch((function(e){return a(e)}))}))},st=re.a.mark(Ot),it=re.a.mark(Tt),dt=re.a.mark(_t),mt=re.a.mark(gt),pt=re.a.mark(jt),Et=re.a.mark(Nt),ft=re.a.mark(xt),bt=re.a.mark(yt),ht=re.a.mark(Ct),vt=re.a.mark(Ut),St=re.a.mark(kt);function Ot(e){var t,n;return re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.noteTitle,a.prev=1,n=new Date,a.next=5,ct({noteTitle:t,createdDate:n,noteUserUID:se.currentUser.uid,noteContent:"",noteHeader:""});case 5:return a.next=7,Object(Ie.c)(g());case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),st,null,[[1,9]])}function Tt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(_.ADD_NEW_NOTE_START,Ot);case 2:case"end":return e.stop()}}),it)}function _t(){var e;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){ie.collection("notes").orderBy("createdDate").get().then((function(t){var n=t.docs.map((function(e){return Object(ce.a)(Object(ce.a)({},e.data()),{},{documentID:e.id})}));e(n)})).catch((function(e){t(e)}))}));case 3:return e=t.sent,t.next=6,Object(Ie.c)(j(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),dt,null,[[0,8]])}function gt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(_.FETCH_NOTES_START,_t);case 2:case"end":return e.stop()}}),mt)}function jt(e){var t,n,a;return re.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.text,a=t.documentID,r.prev=1,r.next=4,ot(n,a);case 4:return r.next=6,Object(Ie.c)(g());case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}}),pt,null,[[1,8]])}function Nt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(_.ADD_NOTE_CONTENT_START,jt);case 2:case"end":return e.stop()}}),Et)}function xt(e){var t;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,lt(t);case 4:return n.next=6,Object(Ie.c)(g());case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),ft,null,[[1,8]])}function yt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(_.DELETE_NOTES_START,xt);case 2:case"end":return e.stop()}}),bt)}function Ct(e){var t,n,a;return re.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.documentID,a=t.url,r.prev=1,r.next=4,ut(n,a);case 4:return r.next=6,Object(Ie.c)(g());case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}}),ht,null,[[1,8]])}function Ut(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.d)(_.ADD_HEADER_IMG_START,Ct);case 2:case"end":return e.stop()}}),vt)}function kt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.a)([Object(Ie.b)(Tt),Object(Ie.b)(gt),Object(Ie.b)(Nt),Object(Ie.b)(yt),Object(Ie.b)(Ut)]);case 2:case"end":return e.stop()}}),St)}var wt=re.a.mark(Dt);function Dt(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ie.a)([Object(Ie.b)(rt),Object(Ie.b)(kt)]);case 2:case"end":return e.stop()}}),wt)}var Rt=Object(ye.a)(),It=[Rt,Ce.logger],At=Object(xe.e)(Re,xe.a.apply(void 0,It));Rt.run(Dt);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:At},r.a.createElement(s.a,null,r.a.createElement(Ne,null)))),document.getElementById("root"))},52:function(e,t,n){e.exports=n.p+"static/media/stephan-seeber-PzqrVrfjasc-unsplash.250b9ed6.jpg"},57:function(e,t,n){e.exports=n(104)},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},91:function(e,t,n){},99:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.14d5f790.chunk.js.map