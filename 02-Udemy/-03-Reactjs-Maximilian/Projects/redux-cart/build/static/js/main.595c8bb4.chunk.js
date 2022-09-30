(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{22:function(t,e,c){t.exports={item:"ProductItem_item__3iRzd",price:"ProductItem_price__1BIEj",actions:"ProductItem_actions__wBily"}},23:function(t,e,c){t.exports={notification:"Notification_notification__3LZRm",error:"Notification_error__3htkF",success:"Notification_success__2346K"}},27:function(t,e,c){t.exports={button:"CartButton_button__mr7-a",badge:"CartButton_badge__34XM4"}},32:function(t,e,c){t.exports={card:"Card_card__2n3Ja"}},33:function(t,e,c){t.exports={cart:"Cart_cart__1eVDs"}},35:function(t,e,c){t.exports={header:"MainHeader_header__i0_V5"}},37:function(t,e,c){t.exports={products:"Products_products__AJgY3"}},44:function(t,e,c){},51:function(t,e,c){"use strict";c.r(e);var i=c(31),n=c.n(i),a=(c(44),c(32)),r=c.n(a),s=c(0),o=function(t){return Object(s.jsx)("section",{className:"".concat(r.a.card," ").concat(t.className?t.className:""),children:t.children})},u=c(33),d=c.n(u),l=c(7),j=c.n(l),b=c(13),f=c(8),h=c(21),p=c(10),m=Object(p.b)({name:"ui",initialState:{isShown:!1,notification:null},reducers:{toggle:function(t){t.isShown=!t.isShown},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),O=m.actions,x=m,_=Object(p.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replace:function(t,e){var c;t.items=e.payload.items,t.totalQuantity=null===(c=e.payload)||void 0===c?void 0:c.totalQuantity},increase:function(t,e){t.changed=!0;var c=e.payload,i=t.items.find((function(t){return t.id===c.id}));i?(i.quantity++,i.totalPrice=i.quantity*i.price,t.totalQuantity++):(t.items.push({id:c.id,price:c.price,totalPrice:c.price,name:c.title,quantity:1}),t.totalQuantity++)},decrease:function(t,e){t.changed=!0;var c=e.payload,i=t.items.find((function(t){return t.id===c}));if(i.quantity>1)i.quantity--,i.totalPrice=i.quantity*i.price,t.totalQuantity--;else{var n=t.items.findIndex((function(t){return t.id===c}));t.items.splice(n,1),t.totalQuantity--}}}}),y=_.actions,v=_,g=function(t){var e=t.item,c=e.title,i=e.quantity,n=e.total,a=e.price,r=e.id,o=Object(b.a)();return Object(s.jsxs)("li",{className:j.a.item,children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:j.a.price,children:["$",n.toFixed(2)," ",Object(s.jsxs)("span",{className:j.a.itemprice,children:["($",a.toFixed(2),"/item)"]})]})]}),Object(s.jsxs)("div",{className:j.a.details,children:[Object(s.jsxs)("div",{className:j.a.quantity,children:["x ",Object(s.jsx)("span",{children:i})]}),Object(s.jsxs)("div",{className:j.a.actions,children:[Object(s.jsx)("button",{onClick:function(){o(y.increase({title:c,quantity:i,total:n,price:a,id:r}))},children:"+"}),Object(s.jsx)("button",{onClick:function(){o(y.decrease(r))},children:"-"})]})]})]})},N=c(6),w=function(t){var e=Object(N.b)((function(t){return t.cart.items}));return Object(s.jsxs)(o,{className:d.a.cart,children:[Object(s.jsx)("h2",{children:"Your Shopping Cart"}),Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(g,{item:{title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price,id:t.id}},t.id)}))})]})},C=c(1),q=c(27),Q=c.n(q),k=c(14),I=function(t){var e=Object(k.c)((function(t){return t.cart.totalQuantity})),c=Object(k.b)();return Object(s.jsxs)("button",{className:Q.a.button,onClick:function(){c(O.toggle())},children:[Object(s.jsx)("span",{children:"My Cart"}),Object(s.jsx)("span",{className:Q.a.badge,children:e})]})},S=c(35),P=c.n(S),E=function(t){return Object(s.jsxs)("header",{className:P.a.header,children:[Object(s.jsx)("h1",{children:"ReduxCart"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:Object(s.jsx)(I,{})})})})]})},B=function(t){return Object(s.jsxs)(C.Fragment,{children:[Object(s.jsx)(E,{}),Object(s.jsx)("main",{children:t.children})]})},F=c(22),J=c.n(F),M=c(5),R=function(t){Object(M.c)((function(t){return t.cart}));var e=Object(M.b)(),c=t.title,i=t.price,n=t.description,a=t.id;return Object(s.jsx)("li",{className:J.a.item,children:Object(s.jsxs)(o,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:J.a.price,children:["$",i.toFixed(2)]})]}),Object(s.jsx)("p",{children:n}),Object(s.jsx)("div",{className:J.a.actions,children:Object(s.jsx)("button",{onClick:function(){e(y.increase({id:a,price:i,title:c,description:n}))},children:"Add to Cart"})})]})})},T=c(37),L=c.n(T),$=[{id:"p1",price:1,title:"My first data",describtion:"This is my first data"},{id:"p2",price:2,title:"My Second data",describtion:"This is my Second data"}],A=function(t){return Object(s.jsxs)("section",{className:L.a.products,children:[Object(s.jsx)("h2",{children:"Buy your favorite products"}),Object(s.jsx)("ul",{children:$.map((function(t){return Object(s.jsx)(R,{id:t.id,title:t.title,price:t.price,description:t.describtion},t.id)}))})]})},D=c(23),H=c.n(D),U=function(t){var e="";"error"===t.status&&(e=H.a.error),"success"===t.status&&(e=H.a.success);var c="".concat(H.a.notification," ").concat(e);return Object(s.jsxs)("section",{className:c,children:[Object(s.jsx)("h2",{children:t.title}),Object(s.jsx)("p",{children:t.message})]})},V=!0;var W=function(){var t=Object(M.c)((function(t){return t.cart})),e=Object(M.b)(),c=Object(M.c)((function(t){return t.ui.notification}));Object(C.useEffect)((function(){e(function(){var t=Object(h.a)(Object(f.a)().mark((function t(e){var c,i;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-20b47-default-rtdb.firebaseio.com/cart.json");case 2:return c=t.sent,t.next=5,c.json();case 5:i=t.sent,e(y.replace({items:(null===i||void 0===i?void 0:i.items)||[],totalQuantity:(null===i||void 0===i?void 0:i.totalQuantity)||0}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(C.useEffect)((function(){V?V=!1:t.changed&&e(function(t){return function(){var e=Object(h.a)(Object(f.a)().mark((function e(c){var i;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(O.showNotification({status:"pending",title:"Loading...",message:"Waiting for response"})),i=function(){var e=Object(h.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-20b47-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify(t)});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Cannot fetch data");case 5:c(O.showNotification({status:"success",title:"Success",message:"Data sent successfully"}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i().catch((function(t){c(O.showNotification({status:"error",title:"Error",message:t.message}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({items:t.items,totalQuantity:t.totalQuantity}))}),[t,e]);var i=Object(M.c)((function(t){return t.ui.isShown}));return Object(s.jsxs)(C.Fragment,{children:[c&&Object(s.jsx)(U,{status:c.status,title:c.title,message:c.message}),Object(s.jsxs)(B,{children:[i&&Object(s.jsx)(w,{}),Object(s.jsx)(A,{})]})]})},Y=Object(p.a)({reducer:{ui:x.reducer,cart:v.reducer}});n.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(M.a,{store:Y,children:Object(s.jsx)(W,{})}))},7:function(t,e,c){t.exports={item:"CartItem_item__2EqUT",details:"CartItem_details__154lQ",quantity:"CartItem_quantity__34LoO",price:"CartItem_price__9PZWc",itemprice:"CartItem_itemprice__3gNJd",actions:"CartItem_actions__3quHx"}}},[[51,1,2]]]);
//# sourceMappingURL=main.595c8bb4.chunk.js.map