(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={navigation:"Header_navigation__1wRpP",navMenu:"Header_navMenu__2xvlf",link:"Header_link__QbWjO",selected:"Header_selected__3iinm"}},,,function(e,t,n){e.exports={message:"Message_message__27PoF",avatar:"Message_avatar__2JQEp",body:"Message_body__2xweP",mainPart:"Message_mainPart__N-bDH",time:"Message_time__timTP"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1VHsN",errorInput:"SuperInputText_errorInput__38lyJ",error:"SuperInputText_error__2-O7e"}},,,function(e,t,n){e.exports={blue:"HW4_blue__HWia4",column:"HW4_column__sVv8f",testSpanError:"HW4_testSpanError__Rc1o2"}},function(e,t,n){e.exports={default:"SuperButton_default__1525S",red:"SuperButton_red__10c32"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1ET5s",spanClassName:"SuperCheckbox_spanClassName__y8qsb"}},function(e,t,n){e.exports={stlName:"HW8_stlName__1Oh8X",stlAge:"HW8_stlAge__1PnBf"}},,,,function(e,t,n){e.exports={App:"App_App__1MdE0"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__2RkwO",error:"Greeting_error__3vBww"}},function(e,t,n){e.exports={mySpan:"SuperEditableSpan_mySpan__pASLh"}},function(e,t,n){e.exports={superSelect:"SuperSelect_superSelect__G2hgw"}},function(e,t,n){e.exports={superRadio:"SuperRadio_superRadio__pabAb"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(27),s=n.n(r),i=(n(39),n(28)),o=n.n(i),j=n(11),l=n.p+"static/media/err.eddf4753.png",u=n(0);var d=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{style:{width:"80%",margin:"0 auto"},children:Object(u.jsx)("img",{src:l,alt:"err",style:{borderRadius:"50%"}})})})]})},b=n(2),h=n(13),O=n.n(h);var x=function(e){return Object(u.jsxs)("div",{className:O.a.message,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar"})}),Object(u.jsxs)("div",{className:O.a.body,children:[Object(u.jsxs)("div",{className:O.a.mainPart,children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("p",{children:e.message})]}),Object(u.jsx)("div",{className:O.a.time,children:e.time})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Artem",f="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",v="22:00";var g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 1"}),Object(u.jsx)(x,{avatar:p,name:m,message:f,time:v}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=n(3);var k=function(e){var t={display:"inline-block",width:"100px",height:"30px",color:"high"===e.affair.priority?"red":"middle"===e.affair.priority?"orange":"green"};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{display:"inline-block",width:"130px",height:"30px",marginLeft:"10px"},children:e.affair.name}),Object(u.jsx)("div",{style:t,children:"[ ".concat(e.affair.priority," ]")}),Object(u.jsx)("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t},children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(u.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(a.useState)(y),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return t===e.priority}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 2"}),Object(u.jsx)(C,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},S=n(17),w=n(29),H=n.n(w),T=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s="Name should not be blank!"===c?H.a.error:"",i={margin:0,paddingLeft:"5px",color:"Name should not be blank!"===c?"red":"black"};return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:s}),Object(u.jsx)("button",{onClick:a,children:"add"}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("p",{style:i,children:Object(u.jsx)("span",{children:c})})]})},A=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)("Type in your name."),j=Object(_.a)(o,2),l=j[0],d=j[1],b=t.length;return Object(u.jsx)(T,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){0===s.trim().length?(d("Name should not be blank!"),i("")):(alert("Hello ".concat(s.trim()," !")),d("Type in your name."),n(s.trim()),i(""))},error:l,totalUsers:b})},P=n(48);var E=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 3"}),Object(u.jsx)(A,{users:n,addUserCallback:function(e){c([].concat(Object(S.a)(n),[{_id:Object(P.a)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},F=n(7),I=n(6),J=n(18),M=n.n(J),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(M.a.error," ").concat(i||""),l="".concat(r&&M.a.errorInput," ").concat(s&&s," ").concat(M.a.superInput);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(u.jsx)("span",{className:j,children:r})]})},B=n(21),R=n.n(B),D=n(22),U=n.n(D),G=function(e){var t=e.red,n=e.className,a=Object(I.a)(e,["red","className"]),c="".concat(t&&U.a.red," ").concat(n||U.a.default);return Object(u.jsx)("button",Object(F.a)({className:c},a))},L=n(23),K=n.n(L),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(u.jsx)("span",{className:K.a.spanClassName,children:c})]})};var $=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 4"}),Object(u.jsxs)("div",{className:R.a.column,children:[Object(u.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r}),Object(u.jsx)(W,{className:R.a.blue}),Object(u.jsx)(G,{children:"Default"}),Object(u.jsx)(G,{red:!0,onClick:s,children:"Delete "}),Object(u.jsx)(G,{disabled:!0,children:"Disabled"}),Object(u.jsx)(X,{checked:j,onChangeChecked:l,children:"Hi there "}),Object(u.jsx)(X,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},q=n(30),Q=n.n(q),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],j=i[1],l=c||{},d=l.children,b=l.onDoubleClick,h=l.className,O=Object(I.a)(l,["children","onDoubleClick","className"]),x="".concat(Q.a.mySpan," ").concat(h);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(W,Object(F.a)({style:{height:"12px"},autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(u.jsxs)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:[Object(u.jsx)("span",{className:"material-icons ",children:"edit"}),d||r.value]}))})};function z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Y(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}z("test",{x:"A",y:1});var Z=Y("test",{x:"",y:0});console.log(Z);var ee=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 6"}),Object(u.jsxs)("div",{children:["This text can be edited: \xa0",Object(u.jsx)(V,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})]}),Object(u.jsx)(G,{onClick:function(){z("editable-span-value",n)},children:"Save"}),Object(u.jsx)(G,{onClick:function(){var e=Y("editable-span-value",n);c(e)},children:"Restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var te=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(N,{}),Object(u.jsx)(E,{}),Object(u.jsx)($,{}),Object(u.jsx)(ee,{})]})},ne=n(31),ae=n.n(ne),ce=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=e.className,r=Object(I.a)(e,["options","onChange","onChangeOption","className"]),s=t?t.map((function(e){return Object(u.jsx)("option",{style:e===r.value?{backgroundColor:"rgba(161, 250, 161, 0.8)"}:{backgroundColor:"rgba(161, 250, 161, 0.3)"},children:e},e)})):[],i="$ ".concat(c||ae.a.superSelect);return Object(u.jsx)("select",Object(F.a)(Object(F.a)({onChange:function(e){a&&a(e.currentTarget.value),n&&n(e)},className:i},r),{},{children:s}))},re=n(32),se=n.n(re),ie=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.className,r=e.onChange,s=e.onChangeOption,i=(Object(I.a)(e,["type","name","options","value","className","onChange","onChangeOption"]),function(e){r&&r(e),s&&s(e.currentTarget.value)}),o="$ ".concat(c||se.a.superRadio),j=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:e,value:e,checked:e===a,onChange:i,className:o}),"\xa0 ",e," \xa0"]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:j})},oe=["x","y","z"];var je=function(){var e=Object(a.useState)(oe[1]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Homeworks 7"}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(ce,{options:oe,value:n,onChangeOption:c})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(ie,{name:"radio",options:oe,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},le=function(e,t){switch(t.type){case"sort":var n=Object(S.a)(e);return"up"===t.payload&&n.sort((function(e,t){return e.name<=t.name?-1:1})),"down"===t.payload&&n.sort((function(e,t){return e.name<=t.name?1:-1})),n;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ue=n(24),de=n.n(ue),be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(a.useState)(be),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:de.a.stlName,children:e.name}),Object(u.jsx)("span",{className:de.a.stlAge,children:e.age.toString()})]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Homeworks 8"}),r,Object(u.jsxs)("div",{style:{paddingTop:"8px"},children:[Object(u.jsx)(G,{onClick:function(){return c(le(be,{type:"sort",payload:"up"}))},children:"sort up"}),Object(u.jsx)(G,{onClick:function(){return c(le(be,{type:"sort",payload:"down"}))},style:{width:"100px"},children:"sort down"}),Object(u.jsx)(G,{onClick:function(){return c(le(be,{type:"check",payload:18}))},children:"check 18"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Oe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(je,{}),Object(u.jsx)(he,{})]})};var xe=function(){return Object(u.jsx)("div",{children:"Junior+ page"})},pe="/pre-junior",me="/junior",fe="/junior-plus";var ve=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(b.a,{to:pe})}}),Object(u.jsx)(b.b,{path:pe,render:function(){return Object(u.jsx)(te,{})}}),Object(u.jsx)(b.b,{path:me,render:function(){return Object(u.jsx)(Oe,{})}}),Object(u.jsx)(b.b,{path:fe,render:function(){return Object(u.jsx)(xe,{})}}),"add routes",Object(u.jsx)(b.b,{render:function(){return Object(u.jsx)(d,{})}})]})})},ge=n(10),_e=n.n(ge);var ke=function(){return Object(u.jsx)("nav",{className:_e.a.navigation,children:Object(u.jsxs)("div",{className:_e.a.navMenu,children:[Object(u.jsx)(j.b,{to:pe,className:_e.a.link,activeClassName:_e.a.selected,children:"PreJunior \xa0"}),Object(u.jsx)(j.b,{to:me,className:_e.a.link,activeClassName:_e.a.selected,children:"Junior\xa0"}),Object(u.jsx)(j.b,{to:fe,className:_e.a.link,activeClassName:_e.a.selected,children:"Junior+\xa0"}),Object(u.jsx)("span",{children:"\xa0 >\xa0 "})]})})};var Ce=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(ke,{}),Object(u.jsx)(ve,{})]})})};var ye=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.20ff36bd.chunk.js.map