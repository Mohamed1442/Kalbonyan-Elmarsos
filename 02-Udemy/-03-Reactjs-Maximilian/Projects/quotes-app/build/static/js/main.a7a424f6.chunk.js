(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={header:"MainNavigation_header__2sUCr",logo:"MainNavigation_logo__27qwm",nav:"MainNavigation_nav__3D2Ni",active:"MainNavigation_active__2rq00"}},function(e,t,n){e.exports={form:"QuoteForm_form__1zIGK",loading:"QuoteForm_loading__1rbBI",control:"QuoteForm_control__2vxm3",actions:"QuoteForm_actions__18fKR"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2bqIB",loading:"NewCommentForm_loading__OH9EH",control:"NewCommentForm_control__2Xj03",actions:"NewCommentForm_actions__259Hk"}},,,,function(e,t,n){e.exports={list:"QuoteList_list__3FGLj",sorting:"QuoteList_sorting__13TKk"}},,function(e,t,n){e.exports={main:"Layout_main__1kOX4"}},,,function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1-mGk"}},function(e,t,n){e.exports={item:"QuoteItem_item__2b89y"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__31afb"}},function(e,t,n){e.exports={card:"Card_card__Hk35k"}},function(e,t,n){e.exports={comments:"Comments_comments__3jy7S"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__Mdfzb"}},,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(21),s=n.n(c),o=(n(39),n(2)),r=n(1),a=n(22),i=n.n(a),u=n(4),j=n(13),l=n.n(j),d=n(0),b=function(){return Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("div",{className:l.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:l.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.c,{activeClassName:l.a.active,to:"/quotes",children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.c,{activeClassName:l.a.active,to:"/new-quote",children:"Add a New Quote"})})]})})]})},x=function(e){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("main",{className:i.a.main,children:e.children})]})},h=n(25),m=n.n(h),O=function(){return Object(d.jsxs)("div",{className:m.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(u.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},f=n(26),p=n.n(f),_=function(e){return Object(d.jsxs)("li",{className:p.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(u.b,{to:"quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},v=n(20),g=n.n(v),N=function(e){var t,n,c=Object(o.h)(),s=Object(o.i)(),a="asc"===new URLSearchParams(s.search).get("sort");return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("div",{className:g.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){c.push("/quotes?sort="+(a?"des":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:g.a.list,children:(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1}))).map((function(e){return Object(d.jsx)(_,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},q=n(27),w=n.n(q),C=function(){return Object(d.jsx)("div",{className:w.a.spinner})},k=n(12),y=n(6),F=n(9),S=n(11);function Q(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var R=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(111);var n=Object(r.useReducer)(Q,{status:t?"pending":null,data:null,error:null}),c=Object(S.a)(n,2),s=c[0],o=c[1],a=Object(r.useCallback)(function(){var t=Object(F.a)(Object(y.a)().mark((function t(n){var c;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(2),o({type:"SEND"}),console.log(3),t.prev=3,console.log(4),t.next=7,e(n);case 7:c=t.sent,console.log(5),o({type:"SUCCESS",responseData:c}),console.log(6),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),o({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(k.a)({sendRequest:a},s)},E="https://react-20b47-default-rtdb.firebaseio.com";function A(){return I.apply(this,arguments)}function I(){return(I=Object(F.a)(Object(y.a)().mark((function e(){var t,n,c,s,o;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)o=Object(k.a)({id:s},n[s]),c.push(o);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=Object(F.a)(Object(y.a)().mark((function e(t){var n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=R(A,!0),t=e.sendRequest,n=e.status,c=e.data;return console.log(c),Object(r.useEffect)((function(){t()}),[t]),"pending"===n?Object(d.jsxs)("div",{className:"centered",children:[" ",Object(d.jsx)(C,{})]}):"completed"!==n||c&&0!==c.length?Object(d.jsx)(r.Fragment,{children:Object(d.jsx)(N,{quotes:c})}):Object(d.jsx)(O,{})},H=n(28),U=n.n(H),G=function(e){return Object(d.jsx)("div",{className:U.a.card,children:e.children})},T=n(14),B=n.n(T),J=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(!1),s=Object(S.a)(c,2),a=s[0],i=s[1];return Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)(G,{children:[Object(d.jsx)(o.a,{when:a,message:function(e){return"Are you sure you want to leave?"}}),Object(d.jsxs)("form",{onFocus:function(){i(!0)},className:B.a.form,onSubmit:function(c){c.preventDefault();var s=t.current.value,o=n.current.value;e.onAddQuote({author:s,text:o})},children:[e.isLoading&&Object(d.jsx)("div",{className:B.a.loading,children:Object(d.jsx)(C,{})}),Object(d.jsxs)("div",{className:B.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(d.jsxs)("div",{className:B.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:n})]}),Object(d.jsx)("div",{className:B.a.actions,children:Object(d.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})]})})},K=function(){var e=Object(o.h)(),t=R(D),n=t.sendRequest,c=t.status;console.log("newquote"),Object(r.useEffect)((function(){"completed"===c&&e.push("/quotes")}),[c]);return Object(d.jsx)(J,{isLoading:"pending"===c,onAddQuote:function(e){n(e),console.log(1)}})},z=function(){return Object(d.jsx)("p",{children:"404 Not Found"})},P=n(29),X=n.n(P),V=n(16),Y=n.n(V),W=function(e){var t=Object(r.useRef)(),n=function(e){e.preventDefault()};return Object(d.jsxs)("form",{className:Y.a.form,onSubmit:n,children:[Object(d.jsxs)("div",{className:Y.a.control,onSubmit:n,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:Y.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},Z=function(){var e=Object(r.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("section",{className:X.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(W,{}),Object(d.jsx)("p",{children:"Comments..."})]})},$=n(30),ee=n.n($),te=function(e){return Object(d.jsxs)("figure",{className:ee.a.quote,children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("figcaption",{children:e.author})]})},ne=function(){var e=R(A),t=e.sendRequest,n=e.data;Object(r.useEffect)((function(){t()}),[t]);var c=Object(o.j)(),s=null===n||void 0===n?void 0:n.find((function(e){return e.id===c.quoteId}));return s||null!==n?s?Object(d.jsxs)("section",{children:[Object(d.jsx)(te,{author:s.author,text:s.text}),Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(o.c,{path:"/quotes/".concat(c.quoteId),exact:!0,children:Object(d.jsx)(u.b,{className:"btn--flat",to:"/quotes/".concat(c.quoteId,"/comments"),children:"Add Comment"})})}),Object(d.jsx)(o.c,{path:"/quotes/".concat(c.quoteId,"/comments"),children:Object(d.jsx)(Z,{})})]}):Object(d.jsx)("p",{children:"Quote not found"}):Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(C,{})})};var ce=function(){return Object(d.jsx)(x,{children:Object(d.jsxs)(o.e,{children:[Object(d.jsx)(o.c,{path:"/",exact:!0,children:Object(d.jsx)(o.b,{to:"/quotes"})}),Object(d.jsx)(o.c,{path:"/quotes",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(o.c,{path:"/quotes/:quoteId",children:Object(d.jsx)(ne,{})}),Object(d.jsx)(o.c,{path:"/new-quote",children:Object(d.jsx)(K,{})}),Object(d.jsx)(o.c,{path:"*",children:Object(d.jsx)(z,{})})]})})};s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(u.a,{children:Object(d.jsx)(ce,{})}))}],[[48,1,2]]]);
//# sourceMappingURL=main.a7a424f6.chunk.js.map