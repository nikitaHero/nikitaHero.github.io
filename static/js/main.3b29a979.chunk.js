(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{59:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(36),i=c.n(n),r=(c(59),c(19)),l=c(13),j=c(0),o=c.n(j),d=c(5),b=c(11),u=c(49),h=c(33);Object(u.a)({apiKey:"AIzaSyB8y94P_1PtSCfAzP_dpF9FSWVjDwRNXWs",authDomain:"cosmetica-502a4.firebaseapp.com",projectId:"cosmetica-502a4",storageBucket:"cosmetica-502a4.appspot.com",messagingSenderId:"692602196022",appId:"1:692602196022:web:25d8733b6360b96f2e8897"});var O=Object(h.d)(),x=function(){var e=Object(d.a)(o.a.mark((function e(t){var c,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)(Object(h.b)(O,"products"));case 2:return c=e.sent,s=[],e.next=6,c.forEach((function(e){s.push(e.data())}));case 6:if(!t){e.next=11;break}return e.next=9,s.filter((function(e){return":".concat(e.id)==t}));case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Object(h.b)(O,"sales"),p=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(h.a)(m,t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=c(22),v=c(28),g=c(32),N=c(45),y=c(50),k={basket:[],lang:"ru"};var w={key:"root",storage:c.n(y).a},S=Object(N.a)(w,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"basket/add":case"basket/remove":return Object(v.a)(Object(v.a)({},e),{},{basket:t.payload});case"lang/switch":return Object(v.a)(Object(v.a)({},e),{},{lang:t.payload});default:return e}})),_=Object(g.b)(S),E=Object(N.b)(_),F=function(e){return _.dispatch({type:"lang/switch",payload:e})},P=c(1),C=function(e){var t=e.data,c=_.getState().language;return Object(P.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(P.jsxs)("div",{className:"sigma_product",children:[Object(P.jsx)("div",{className:"sigma_product-thumb",children:Object(P.jsx)(r.b,{to:"/product-details:".concat(null===t||void 0===t?void 0:t.id),children:Object(P.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photo),alt:"img"})})}),Object(P.jsxs)("div",{className:"sigma_product-body",children:[Object(P.jsx)("h5",{className:"sigma_product-title",children:Object(P.jsx)(r.b,{to:"/product-details:".concat(null===t||void 0===t?void 0:t.id),children:"ru"===c?null===t||void 0===t?void 0:t.titleru:t.titleua})}),Object(P.jsxs)("div",{className:"sigma_product-price",children:[Object(P.jsxs)("span",{children:[null===t||void 0===t?void 0:t.price," \u0433\u0440\u043d"]}),Object(P.jsxs)("span",{children:[null===t||void 0===t?void 0:t.salePrice," \u0433\u0440\u043d"]})]})]})]})})},I=c(24),q=c.n(I),D=function(){return Object(P.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(P.jsxs)("div",{className:"sigma_product",children:[Object(P.jsx)("div",{className:"sigma_product-thumb",children:Object(P.jsx)(q.a,{height:383,width:255})}),Object(P.jsxs)("div",{className:"sigma_product-body",children:[Object(P.jsx)("h5",{className:"sigma_product-title",children:Object(P.jsx)(q.a,{height:20,width:200})}),Object(P.jsx)("div",{className:"sigma_product-price",children:Object(P.jsx)(q.a,{height:20,width:200})})]})]})})},A=function(){var e=Object(s.useState)([{}]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(b.a)(n,2),r=i[0],l=i[1];Object(s.useEffect)(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,e.next=5,a(t);case 5:case"end":return e.stop()}}),e)}))),[]);var j=_.getState().lang;return Object(s.useEffect)((function(){l(j)}),[j]),console.log(c),Object(P.jsx)("div",{className:"section-padding-2 pt-0",children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("div",{className:"section-header text-center",children:[Object(P.jsxs)("h5",{id:"shop",children:["ru"===r?"\u0422\u043e\u0432\u0430\u0440\u044b":"\u0422\u043e\u0432\u0430\u0440\u0438"," "]}),Object(P.jsxs)("div",{className:"heading_arrow",children:[Object(P.jsx)("span",{className:"dots_div"}),Object(P.jsx)("span",{className:"s"}),Object(P.jsx)("span",{className:"dots_div"})]}),Object(P.jsx)("h2",{children:"ru"===r?"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f":"\u041e\u0441\u0442\u0430\u043d\u043di \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"})]}),Object(P.jsx)("div",{className:"row",children:c&&c.length>1?c.sort((function(e,t){return e.position-t.position})).map((function(e,t){return Object(P.jsx)(C,{data:e},t)})):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D,{})," ",Object(P.jsx)(D,{}),Object(P.jsx)(D,{}),Object(P.jsx)(D,{})]})})]})})},B=c.p+"static/media/text-logo.7e1ccbbb.jpg",T=c(52),U=c.n(T),W=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],n=_.getState().lang;return Object(s.useEffect)((function(){a(n)}),[n]),Object(P.jsx)("div",{className:"sigma-banner banner-2",children:Object(P.jsx)("div",{className:"sigma_banner-slider",children:Object(P.jsx)("div",{className:"sigma_banner-slider-inner bg-cover bg-center",children:Object(P.jsx)("div",{class:"container",children:Object(P.jsxs)("div",{class:"intro_text",children:[Object(P.jsx)("p",{}),Object(P.jsx)("img",{src:B}),Object(P.jsx)("p",{}),Object(P.jsx)(U.a,{href:"#shop",className:"btn shop-btn",children:"ru"===c?"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440":"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f"})]})})})})})},z=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(W,{}),Object(P.jsx)(A,{})]})},J=c.p+"static/media/logo.f56d3c1e.png",K=c(40),L=function(){var e=Object(s.useState)(0),t=Object(b.a)(e,2),c=t[0],a=t[1],n=_.getState().basket;_.subscribe((function(){return a(_.getState().basket.length)})),Object(s.useEffect)((function(){a(n.length)}),[]);var i=Object(K.b)(),l=_.getState().lang;Object(s.useEffect)((function(){console.log(_.getState())}),[]);return console.log(l),Object(P.jsxs)("header",{className:"sigma_header style-5 can-sticky",children:[Object(P.jsx)("div",{className:"sigma_header-topbar d-none d-md-block",children:Object(P.jsx)("div",{className:"container-fluid",children:Object(P.jsx)("div",{className:"sigma_header-topbar-inner",children:Object(P.jsxs)("ul",{className:"topbar-links",children:[Object(P.jsx)("li",{children:Object(P.jsxs)(r.b,{to:"/",children:[Object(P.jsx)("i",{className:"fa fa-phone"}),"+380957601400"]})}),Object(P.jsx)("li",{children:Object(P.jsxs)(r.b,{to:"/",children:[Object(P.jsx)("i",{className:"fa fa-envelope"}),"sunflavour.shop@gmail.com"]})})]})})})}),Object(P.jsx)("div",{className:"sigma_header-middle",children:Object(P.jsx)("div",{className:"container-fluid",children:Object(P.jsxs)("div",{className:"navbar",children:[Object(P.jsx)("div",{className:"sigma_logo-wrapper",children:Object(P.jsx)(r.b,{className:"sigma_logo",to:"/",children:Object(P.jsx)("img",{src:J,alt:"logo"})})}),Object(P.jsxs)("ul",{className:"navbar-nav",children:[Object(P.jsx)("li",{className:"menu-item",children:Object(P.jsx)(r.b,{to:"/",children:"ru"===l?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})}),Object(P.jsx)("li",{onClick:function(){i(F("ru"===l?"ua":"ru")),window.location.reload()},class:"menu-item",children:Object(P.jsxs)("div",{className:"lang-item-list",children:[Object(P.jsx)("span",{className:"lang-item ".concat("ru"===l&&"lang-item-active"),children:"RU"}),Object(P.jsx)("span",{className:"lang-item ".concat("ua"===l&&"lang-item-active"),children:"UA"})]})})]}),Object(P.jsx)("div",{className:"sigma_header-controls",children:Object(P.jsx)("ul",{className:"sigma_header-controls-inner",children:Object(P.jsx)("li",{className:"header-controls-item  d-sm-block",children:Object(P.jsxs)(r.b,{to:"/checkout",children:[Object(P.jsx)("i",{className:"flaticon-shopping-bag"}),Object(P.jsx)("span",{className:"cart-count",children:c})]})})})})]})})})]})},R=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],n=_.getState().lang;return Object(s.useEffect)((function(){a(n)}),[n]),Object(P.jsx)("footer",{class:"sigma_footer style-2 section-padding pb-0",children:Object(P.jsxs)("div",{class:"container",children:[Object(P.jsxs)("div",{class:"sigma_footer-top",children:[Object(P.jsx)("div",{class:"footer-item",children:Object(P.jsx)("ul",{class:"sigma_footer-links",children:Object(P.jsx)("li",{children:Object(P.jsx)(r.b,{to:"/",children:"ru"===c?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})})})}),Object(P.jsx)("div",{class:"sigma_footer-logo",children:Object(P.jsx)("img",{src:B,alt:"logo"})}),Object(P.jsx)("div",{class:"follow_us m-0",children:Object(P.jsx)("ul",{})})]}),Object(P.jsxs)("div",{class:" sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between ",children:[Object(P.jsx)("div",{class:"sigma_footer-copyright",children:Object(P.jsxs)("p",{class:"mb-0",children:["Copyright \xa9 Website",Object(P.jsx)(r.b,{to:"/",children:"2021"})]})}),Object(P.jsx)("div",{class:"sigma_footer-payment mt-3 mt-sm-0",children:Object(P.jsx)("img",{src:J,alt:"img"})})]})]})})},M=(c(72),c(73),c(74),c(75),c(76),function(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(b.a)(n,2),r=i[0],j=i[1],u=_.getState().basket,h=Object(l.g)().id,O=Object(l.f)();Object(s.useEffect)(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=5;break}return e.next=3,x(h);case 3:t=e.sent,a(t[0]);case 5:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){var e=Object(f.a)(u).find((function(e){return":".concat(e.id)===h}));(null===e||void 0===e?void 0:e.count)>0&&j(e.count)}),[u]);var m=function(){c&&function(e){var t=Object(f.a)(_.getState().basket),c=t.findIndex((function(t){return t.id===e.id}));if(-1!==c){t[c].count=t[c].count+1,console.log(t[c],2);var s=t;return _.dispatch({type:"basket/add",payload:s})}e.count=1,_.dispatch({type:"basket/add",payload:[].concat(Object(f.a)(t),[e])})}(c)},p=_.getState().lang;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("div",{class:"section-padding pb-0",children:Object(P.jsx)("div",{class:"container",children:Object(P.jsxs)("div",{class:"row",children:[Object(P.jsx)("div",{class:"col-lg-5",children:Object(P.jsx)("div",{class:"sigma_product-slider-1",children:Object(P.jsx)("div",{class:"item",children:(null===c||void 0===c?void 0:c.photo)?Object(P.jsx)("img",{src:c.photo,alt:"img"}):Object(P.jsx)(q.a,{height:300})})})}),Object(P.jsx)("div",{className:"col-lg-7",children:Object(P.jsxs)("div",{className:"shop-detail-content mt-5 mt-lg-0",children:[Object(P.jsx)("h3",{className:"product-title m-0",children:c&&"ru"===p?c.titleru:c&&"ua"===p?c.titleua:Object(P.jsx)(q.a,{height:30})}),Object(P.jsxs)("div",{className:"sigma_product-price",children:[(null===c||void 0===c?void 0:c.price)?Object(P.jsxs)("span",{children:[c.price," \u0433\u0440\u043d"]}):Object(P.jsx)(q.a,{height:80}),(null===c||void 0===c?void 0:c.salePrice)&&Object(P.jsxs)("span",{children:[c.salePrice," \u0433\u0440\u043d"]})]}),Object(P.jsxs)("div",{className:"shop-detail-inner",children:[Object(P.jsxs)("div",{className:"availability-box",children:[Object(P.jsx)("div",{className:"d-inline-block other-info",children:Object(P.jsxs)("h6",{children:["ru"===p?"\u041d\u0430\u043b\u0438\u0447\u0438\u0435":"\u041d\u0430\u044f\u0432\u043di\u0441\u0442\u044c",":",(null===c||void 0===c?void 0:c.availability)?Object(P.jsx)("span",{className:"text-success ml-2",children:c.availability&&"In Stock"}):Object(P.jsx)(q.a,{})]})}),Object(P.jsx)("div",{className:"ml-2 d-inline-block other-info",children:Object(P.jsxs)("h6",{children:["SKU:",Object(P.jsx)("span",{className:"grey ml-2",children:c.id})]})})]}),Object(P.jsx)("div",{className:"short-descr",children:(null===c||void 0===c?void 0:c.descriptionru)?Object(P.jsx)("p",{children:"ru"===p?c.descriptionru:c.descriptionua}):Object(P.jsx)(q.a,{height:90})}),Object(P.jsxs)("div",{className:"quantity-cart d-sm-flex align-items-center",children:[(null===c||void 0===c?void 0:c.price)?Object(P.jsxs)("div",{className:"quantity-box",children:[Object(P.jsx)("button",{onClick:(null===c||void 0===c?void 0:c.price)&&function(){!function(e){var t=Object(f.a)(_.getState().basket),c=t.findIndex((function(t){return t.id===e}));if(c>0){if(t[c].count-1<=0)return _.dispatch({type:"basket/remove",payload:_.getState().basket.filter((function(t){return t.id!==e}))});t[c].count=t[c].count-1;var s=t;return _.dispatch({type:"basket/add",payload:s})}_.dispatch({type:"basket/remove",payload:_.getState().basket.filter((function(t){return t.id!==e}))})}(c.id),r>0&&j(r-1)},type:"button",className:"minus-btn",children:Object(P.jsx)("i",{className:"fa fa-minus"})}),Object(P.jsx)("input",{type:"text",className:"input-qty",name:"name",value:r}),Object(P.jsx)("button",{onClick:(null===c||void 0===c?void 0:c.price)&&function(){m(),j(r+1)},type:"button",class:"plus-btn",children:Object(P.jsx)("i",{className:"fa fa-plus"})})]}):Object(P.jsx)(q.a,{height:50,width:170}),Object(P.jsx)("div",{className:"cart-btn",children:(null===c||void 0===c?void 0:c.price)?Object(P.jsx)("button",{className:"btn",onClick:function(){return O.push("/checkout")},children:"ru"===p?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443":"\u0423 \u043a\u043e\u0448\u0438\u043a"}):Object(P.jsx)(q.a,{height:40,width:150})})]})]})]})})]})})})})}),Q=c(6),V=function(e){var t=e.data,c=_.getState().lang;return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{"data-title":"Product",children:Object(P.jsx)("div",{class:"andro_cart-product-wrapper",children:Object(P.jsxs)("div",{class:"andro_cart-product-body",children:[Object(P.jsx)("h6",{children:Object(P.jsx)("a",{href:"#",children:"ru"===c?t.titleru:t.titleua})}),Object(P.jsxs)("p",{children:[t.count," ","ru"===c?"\u041a\u043e\u043b-\u0432\u043e":"\u041ai\u043b\u044c-\u0441\u0442\u044c"]})]})})}),Object(P.jsxs)("td",{"data-title":"Quantity",children:["x",t.count]}),Object(P.jsx)("td",{"data-title":"Total",children:Object(P.jsx)("strong",{children:parseFloat(t.price.toString())*t.count})})]})},X=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(b.a)(n,2),r=i[0],l=i[1],j=Object(s.useState)(""),u=Object(b.a)(j,2),h=u[0],O=u[1],x=_.getState().basket;_.subscribe((function(){return a(_.getState().basket)})),Object(s.useEffect)((function(){a(x)}),[]),Object(s.useEffect)((function(){var e=r,t=h||"";c.forEach((function(t){return e+=parseFloat(t.price)*t.count})),c.forEach((function(e){return t=t+" "+e.titleru+" \u043a\u043e\u043b-\u0432\u043e :"+e.count+";"})),l(e),O(t)}),[c]);var m=function(){var e=Object(d.a)(o.a.mark((function e(t){var c,s,a,n,i,l,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={},s=new FormData(t.target),a=Object(Q.a)(s.entries());try{for(a.s();!(n=a.n()).done;)i=Object(b.a)(n.value,2),l=i[0],(j=i[1])&&(c[l]=j)}catch(o){a.e(o)}finally{a.f()}return c.basket=h+" \u041e\u0431\u0449\u0430\u044f \u0446\u0435\u043d\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ".concat(r),e.next=8,p(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=_.getState().lang;return Object(P.jsx)("div",{class:"section-padding pb-0",children:Object(P.jsx)("div",{class:"container",children:Object(P.jsx)("form",{onSubmit:m,children:Object(P.jsxs)("div",{class:"row",children:[Object(P.jsxs)("div",{class:"col-xl-7",children:[Object(P.jsxs)("h4",{children:[" ","ru"===f?"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430":"\u0414\u0435\u0442\u0430\u043bi \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"]}),Object(P.jsxs)("div",{class:"row",children:[Object(P.jsxs)("div",{class:"form-group col-xl-12",children:[Object(P.jsxs)("label",{class:"form-label",children:["ru"===f?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f":"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsx)("input",{type:"text",placeholder:"ru"===f?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f":"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f",name:"name",class:"form-control",required:""})]}),Object(P.jsxs)("div",{class:"form-group col-xl-12",children:[Object(P.jsxs)("label",{class:"form-label",children:["ru"===f?"\u0413\u043e\u0440\u043e\u0434":"\u041c\u0456\u0441\u0442\u043e",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsx)("input",{type:"text",placeholder:"ru"===f?"\u0413\u043e\u0440\u043e\u0434":"\u041c\u0456\u0441\u0442\u043e",name:"town",class:"form-control",required:""})]}),Object(P.jsxs)("div",{class:"form-group col-xl-6",children:[Object(P.jsxs)("label",{class:"form-label",children:["ru"===f?" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsx)("input",{type:"text",placeholder:"ru"===f?" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",name:"phone",class:"form-control",required:""})]}),Object(P.jsxs)("div",{class:"form-group col-xl-6",children:[Object(P.jsxs)("label",{class:"form-label",children:["ru"===f?" \u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b":"\u0417\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsx)("input",{type:"text",placeholder:"ru"===f?" \u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b":"\u0417\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",name:"sposobOplaty",class:"form-control",required:""})]}),Object(P.jsxs)("div",{class:"form-group col-xl-12",children:[Object(P.jsxs)("label",{class:"form-label",children:["\u0421\u043b\u0443\u0436\u0431\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 ",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsxs)("select",{class:"form-control",children:[Object(P.jsx)("option",{value:"",children:"\u0421\u043b\u0443\u0436\u0431\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(P.jsx)("option",{value:"novaPoshta",children:"\u041d\u043e\u0432\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),Object(P.jsx)("option",{value:"intaym",children:"\u0418\u043d\u0442\u0430\u0439\u043c"}),Object(P.jsx)("option",{value:"mist",children:"\u041c\u0438\u0441\u0442\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441"}),Object(P.jsx)("option",{value:"mejdunarodnayaDostavka",children:"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})]})]}),Object(P.jsxs)("div",{class:"form-group col-xl-6",children:[Object(P.jsxs)("label",{class:"form-label",children:["ru"===f?"\u041d\u043e\u043c\u0435\u0440 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0441\u043b\u0443\u0436\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",Object(P.jsx)("span",{class:"text-danger",children:"*"})]}),Object(P.jsx)("input",{type:"text",placeholder:"ru"===f?"\u041d\u043e\u043c\u0435\u0440 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0441\u043b\u0443\u0436\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",name:"novaPoshta",class:"form-control",required:""})]}),Object(P.jsxs)("div",{class:"form-group col-xl-12 mb-0",children:[Object(P.jsx)("label",{class:"form-label",children:"ru"===f?"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439":"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440i\u0439"}),Object(P.jsx)("textarea",{name:"comment",rows:"5",class:"form-control",placeholder:"ru"===f?"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439":"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440i\u0439"})]})]})]}),Object(P.jsxs)("div",{class:"col-xl-5 checkout-billing mt-4 mt-xl-0",children:[Object(P.jsx)("div",{class:"table-responsive-md",children:Object(P.jsxs)("table",{class:"andro_responsive-table",children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:" \u0422\u043e\u0432\u0430\u0440"}),Object(P.jsx)("th",{children:"ru"===f?"\u041a\u043e\u043b-\u0432\u043e":"\u041ai\u043b\u044c-\u0441\u0442\u044c"}),Object(P.jsx)("th",{children:"ru"===f?"\u0426\u0435\u043d\u0430":"\u0426i\u043d\u0430"})]})}),Object(P.jsxs)("tbody",{children:[c.map((function(e,t){return Object(P.jsx)(V,{data:e},t)})),Object(P.jsxs)("tr",{class:"total",children:[Object(P.jsx)("td",{children:Object(P.jsx)("h6",{class:"mb-0",children:"ru"===f?"\u041e\u0431\u0449\u0430\u044f \u0446\u0435\u043d\u0430":"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0446i\u043d\u0430"})}),Object(P.jsx)("td",{}),Object(P.jsx)("td",{children:Object(P.jsxs)("strong",{children:[r," \u0413\u0420\u041d"]})})]})]})]})}),c.length>0&&Object(P.jsx)("button",{onClick:function(){window.localStorage.clear(),window.location.reload()},type:"submit",class:"btn btn-block",children:"ru"===f?"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0448\u0438\u043a"}),Object(P.jsx)("button",{type:"submit",class:"btn btn-block",children:"ru"===f?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437":"\u041fi\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})]})})})})};var G=function(){return Object(s.useEffect)((function(){x()}),[]),Object(P.jsx)("div",{className:"App",children:Object(P.jsxs)(r.a,{children:[Object(P.jsx)(L,{}),Object(P.jsxs)(l.c,{children:[Object(P.jsx)(l.a,{exact:!0,path:"/",children:Object(P.jsx)(z,{})}),Object(P.jsx)(l.a,{exact:!0,path:"/checkout",children:Object(P.jsx)(X,{})}),Object(P.jsx)(l.a,{exact:!0,path:"/product-details:id",children:Object(P.jsx)(M,{})})]}),Object(P.jsx)(R,{})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},Y=c(53);i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(K.a,{store:_,children:Object(P.jsx)(Y.a,{loading:null,persistor:E,children:Object(P.jsx)(G,{})})})}),document.getElementById("root")),H()}},[[77,1,2]]]);
//# sourceMappingURL=main.3b29a979.chunk.js.map