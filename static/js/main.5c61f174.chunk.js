(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{107:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(23),i=c.n(n),r=(c(74),c(24)),l=c(15),o=c(31),j=c(50),d=c(1),b=c.n(d),u=c(5),h=c(11),m=c(61),O=c(35);Object(m.a)({apiKey:"AIzaSyCL7F3X4FoH9ISzVZKGcsxyqJR2yrgKLNw",authDomain:"sunflavourcomua-59f9f.firebaseapp.com",projectId:"sunflavourcomua-59f9f",storageBucket:"sunflavourcomua-59f9f.appspot.com",messagingSenderId:"41179038993",appId:"1:41179038993:web:64d67129b804d16246b8b0",measurementId:"G-TF8SNDZBN2"});var x=Object(O.d)(),p=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(Object(O.b)(x,"products"));case 2:return c=e.sent,s=[],e.next=6,c.forEach((function(e){s.push(e.data())}));case 6:if(!t){e.next=11;break}return e.next=9,s.filter((function(e){return":".concat(e.id)==t}));case 9:return a=e.sent,e.abrupt("return",a);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=Object(O.b)(x,"sales"),v=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(O.a)(f,t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=c(25),N=c(30),k=c(34),y=c(52),w=c(62),S={basket:[],lang:"ru"};var _={key:"root",storage:c.n(w).a},q=Object(y.a)(_,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"basket/add":case"basket/remove":return Object(N.a)(Object(N.a)({},e),{},{basket:t.payload});case"lang/switch":return Object(N.a)(Object(N.a)({},e),{},{lang:t.payload});default:return e}})),E=Object(k.b)(q),P=Object(y.b)(E),C=function(e){return E.dispatch({type:"lang/switch",payload:e})},F=c.p+"static/media/123.d1b33292.png",T=c(0),I=function(e){var t=e.data,c=Object(s.useState)(),a=Object(h.a)(c,2),n=a[0],i=a[1],o=E.getState().lang,j=Object(l.f)();return Object(s.useEffect)((function(){i(o)}),[o]),Object(T.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return j.push("/product-details:".concat(null===t||void 0===t?void 0:t.id))},className:"col-lg-3 col-md-4 col-sm-6",children:Object(T.jsxs)("div",{className:"sigma_product",children:[(null===t||void 0===t?void 0:t.hitProdaj)&&Object(T.jsx)("img",{className:"bestPrice",src:F}),Object(T.jsx)("div",{className:"sigma_product-thumb",children:Object(T.jsx)("img",{src:"".concat(null===t||void 0===t?void 0:t.photo),alt:"img"})}),Object(T.jsxs)("div",{className:"sigma_product-body",children:[Object(T.jsx)("h5",{className:"sigma_product-title",children:Object(T.jsx)(r.b,{to:"/product-details:".concat(null===t||void 0===t?void 0:t.id),children:"ru"===n?null===t||void 0===t?void 0:t.titleru:t.titleua})}),Object(T.jsxs)("div",{className:"sigma_product-price",children:[Object(T.jsxs)("span",{children:[null===t||void 0===t?void 0:t.salePrice," \u0433\u0440\u043d"]}),Object(T.jsxs)("span",{children:[null===t||void 0===t?void 0:t.sale," \u0433\u0440\u043d"]})]})]})]})})},D=c(17),B=c.n(D),M=function(){return Object(T.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6",children:Object(T.jsxs)("div",{className:"sigma_product",children:[Object(T.jsx)("div",{className:"sigma_product-thumb",children:Object(T.jsx)(B.a,{height:383,width:255})}),Object(T.jsxs)("div",{className:"sigma_product-body",children:[Object(T.jsx)("h5",{className:"sigma_product-title",children:Object(T.jsx)(B.a,{height:20,width:200})}),Object(T.jsx)("div",{className:"sigma_product-price",children:Object(T.jsx)(B.a,{height:20,width:200})})]})]})})},V=function(){var e=Object(s.useState)([{}]),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(h.a)(n,2),r=i[0],l=i[1];Object(s.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return t=e.sent,e.next=5,a(t);case 5:case"end":return e.stop()}}),e)}))),[]);var o=E.getState().lang,j=c&&c.sort((function(e,t){return(null===e||void 0===e?void 0:e.position)-(null===t||void 0===t?void 0:t.position)}));return Object(s.useEffect)((function(){l(o),console.log(j)}),[o,j]),Object(T.jsx)("div",{className:"section-padding-2 pt-0",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{className:"section-header text-center",children:[Object(T.jsxs)("h5",{id:"shop",children:["ru"===r?"\u0422\u043e\u0432\u0430\u0440\u044b":"\u0422\u043e\u0432\u0430\u0440\u0438"," "]}),Object(T.jsxs)("div",{className:"heading_arrow",children:[Object(T.jsx)("span",{className:"dots_div"}),Object(T.jsx)("span",{className:"s"}),Object(T.jsx)("span",{className:"dots_div"})]}),Object(T.jsx)("h2",{children:"ru"===r?"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f":"\u041e\u0441\u0442\u0430\u043d\u043di \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"})]}),Object(T.jsx)("div",{className:"row",children:c&&c.length>1?c.sort((function(e,t){return parseInt(null===e||void 0===e?void 0:e.position)-parseInt(null===t||void 0===t?void 0:t.position)})).map((function(e,t){return Object(T.jsx)(I,{data:e},t)})):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(M,{})," ",Object(T.jsx)(M,{}),Object(T.jsx)(M,{}),Object(T.jsx)(M,{})]})})]})})},U=c.p+"static/media/text-logo.7e1ccbbb.jpg",A=c(64),L=c.n(A),J=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],n=E.getState().lang;return Object(s.useEffect)((function(){a(n)}),[n]),Object(T.jsx)("div",{className:"sigma-banner banner-2",children:Object(T.jsx)("div",{className:"sigma_banner-slider",children:Object(T.jsx)("div",{className:"sigma_banner-slider-inner bg-cover bg-center",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"intro_text",children:[Object(T.jsx)("p",{}),Object(T.jsx)("img",{src:U}),Object(T.jsx)("p",{}),Object(T.jsx)(L.a,{href:"#shop",className:"btn shop-btn",children:"ru"===c?"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440":"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f"})]})})})})})},K=function(){return Object(T.jsx)(j.a,{children:"  \n      <script>\n      !function(f,b,e,v,n,t,s)\n      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n      n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('init', '4437536256338610');\n      fbq('track', 'PageView');\n    <\/script>\n    <noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n      src=\"https://www.facebook.com/tr?id=4437536256338610&ev=PageView&noscript=1\"\n    /></noscript>\n    \n       <script>\n      \n!function(f,b,e,v,n,t,s)\nif(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '931601087731736');\nfbq('track', 'PageView');\nfbq('track', 'AddToCart');\nfbq('track', 'InitiateCheckout');\nfbq('track', 'ViewContent');\nfbq('track', 'Purchase', {value: 0.00, currency: 'USD'});\n      <\/script>\n      <noscript>\n        <img\n          height=\"1\"\n          width=\"1\"\n          style=\"display:none\"\n          src=\"https://www.facebook.com/tr?id=931601087731736&ev=PageView&noscript=1\"\n        />\n      </noscript>"})},R=function(){return a.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K,{}),Object(T.jsx)(J,{}),Object(T.jsx)(V,{})]})},z=c.p+"static/media/logo.f56d3c1e.png",G=c(44),W=function(){var e=Object(s.useState)(0),t=Object(h.a)(e,2),c=t[0],a=t[1],n=E.getState().basket;E.subscribe((function(){return a(E.getState().basket.length)})),Object(s.useEffect)((function(){a(n.length)}),[]);var i=Object(G.b)(),l=E.getState().lang;return console.log(l),Object(T.jsxs)("header",{className:"sigma_header style-5 can-sticky",children:[Object(T.jsx)("div",{className:"sigma_header-topbar d-none d-md-block",children:Object(T.jsx)("div",{className:"container-fluid",children:Object(T.jsx)("div",{className:"sigma_header-topbar-inner",children:Object(T.jsxs)("ul",{className:"topbar-links",children:[Object(T.jsx)("li",{children:Object(T.jsxs)(r.b,{to:"/",children:[Object(T.jsx)("i",{className:"fa fa-phone"}),"+380994555606"]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(r.b,{to:"/",children:[Object(T.jsx)("i",{className:"fa fa-envelope"}),"sunflavour.shop@gmail.com"]})})]})})})}),Object(T.jsx)("div",{className:"sigma_header-middle",children:Object(T.jsx)("div",{className:"container-fluid",children:Object(T.jsxs)("div",{className:"navbar",children:[Object(T.jsx)("div",{className:"sigma_logo-wrapper",children:Object(T.jsx)(r.b,{className:"sigma_logo",to:"/",children:Object(T.jsx)("img",{src:z,alt:"logo"})})}),Object(T.jsxs)("ul",{className:"navbar-nav",children:[Object(T.jsx)("li",{className:"menu-item",children:Object(T.jsx)(r.b,{to:"/",children:"ru"===l?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})}),Object(T.jsx)("li",{onClick:function(){i(C("ru"===l?"ua":"ru")),window.location.reload()},class:"menu-item",children:Object(T.jsxs)("div",{className:"lang-item-list",children:[Object(T.jsx)("span",{className:"lang-item ".concat("ru"===l&&"lang-item-active"),children:"RU"}),Object(T.jsx)("span",{className:"lang-item ".concat("ua"===l&&"lang-item-active"),children:"UA"})]})})]}),Object(T.jsx)("div",{className:"sigma_header-controls",children:Object(T.jsx)("ul",{className:"sigma_header-controls-inner",children:Object(T.jsx)("li",{className:"header-controls-item  d-sm-block",children:Object(T.jsxs)(r.b,{to:"/checkout",children:[Object(T.jsx)("i",{className:"flaticon-shopping-bag"}),Object(T.jsx)("span",{className:"cart-count",children:c})]})})})})]})})})]})},Z=c.p+"static/media/privacy_police.de1097b0.pdf",H=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],n=E.getState().lang;return Object(s.useEffect)((function(){a(n)}),[n]),Object(T.jsx)("footer",{class:"sigma_footer style-2 section-padding pb-0",children:Object(T.jsxs)("div",{class:"container",children:[Object(T.jsxs)("div",{class:"sigma_footer-top",children:[Object(T.jsx)("div",{class:"footer-item",children:Object(T.jsx)("ul",{class:"sigma_footer-links",children:Object(T.jsx)("li",{children:Object(T.jsx)(r.b,{to:"/",children:"ru"===c?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})})})}),Object(T.jsx)("div",{class:"sigma_footer-logo",children:Object(T.jsx)("img",{src:U,alt:"logo"})}),Object(T.jsx)("div",{class:"follow_us m-0",children:Object(T.jsx)("ul",{})})]}),Object(T.jsxs)("div",{class:" sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between ",children:[Object(T.jsx)("div",{class:"sigma_footer-copyright",children:Object(T.jsx)("p",{class:"mb-0",children:"Copyright \xa9 sunflavour.com.ua "})}),Object(T.jsxs)("div",{className:"sigma_footer-payment mt-3 mt-sm-0",children:[Object(T.jsx)("a",{className:"privacy_police mb-0",target:"_blank",href:Z,children:"ru"===c?"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438":"\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456"}),Object(T.jsx)("img",{src:z,alt:"img"})]})]})]})})},Q=(c(91),c(92),c(93),c(94),c(95),c(96),c(65)),X=(c(106),function(e){var t=e.data,c=e.photo,a=Object(s.useState)(""),n=Object(h.a)(a,2),i=n[0],r=n[1],l=Object(s.useState)(),o=Object(h.a)(l,2),j=o[0],d=o[1],b=Object(s.useState)(!1),u=Object(h.a)(b,2),m=u[0],O=u[1];Object(s.useEffect)((function(){c&&r(c)}),[c]),Object(s.useEffect)((function(){t&&t.length>0&&d(t)}),[t]);return Object(T.jsxs)(T.Fragment,{children:[m&&Object(T.jsx)(Q.a,{mainSrc:i,onCloseRequest:function(){return O(!1)}}),Object(T.jsx)("div",{className:"sigma_product-slider-1",children:Object(T.jsx)("div",{style:{cursor:"pointer"},className:"item",onClick:function(){return O(!0)},children:i?Object(T.jsx)("img",{src:i,alt:"img"}):Object(T.jsx)(B.a,{height:300})})}),Object(T.jsx)("div",{className:"sliderWrapper",children:j&&j.length>0&&j.map((function(e,t){return Object(T.jsx)("div",{onClick:function(){return function(e){var t=j.filter((function(t){return t!==e}));t.push(i),d(t),r(e)}(e)},className:"slideWrapper",children:Object(T.jsx)("img",{className:"sliderItem",src:e})},t)}))})]})}),Y=function(){var e=Object(o.useToasts)().addToast,t=Object(s.useState)({}),c=Object(h.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(0),r=Object(h.a)(i,2),j=r[0],d=r[1],m=Object(s.useState)(!1),O=Object(h.a)(m,2),x=O[0],f=O[1],v=E.getState().basket,N=Object(l.g)().id,k=Object(l.f)();Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(s.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=5;break}return e.next=3,p(N);case 3:t=e.sent,n(t[0]);case 5:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){var e=Object(g.a)(v).find((function(e){return":".concat(e.id)===N}));(null===e||void 0===e?void 0:e.count)>0?d(e.count):d(1)}),[v]);var y,w,S=function(){a&&function(e){var t=Object(g.a)(E.getState().basket),c=t.findIndex((function(t){return t.id===e.id}));if(-1!==c){t[c].count=t[c].count+1;var s=t;return E.dispatch({type:"basket/add",payload:s})}e.count=1,E.dispatch({type:"basket/add",payload:[].concat(Object(g.a)(t),[e])})}(a),e("ru"===q?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 !":"\u0423 \u043a\u043e\u0448\u0438\u043a\u0443 !",{appearance:"success",autoDismiss:!0})},_=function(){S(),d(j+1)},q=E.getState().lang;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K,{}),Object(T.jsx)("div",{className:"section-padding pb-0",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsxs)("div",{className:"col-lg-5",children:[(null===a||void 0===a?void 0:a.hitProdaj)&&Object(T.jsx)("img",{className:"bestPrice top55",src:F}),(null===a||void 0===a?void 0:a.photo)&&Object(T.jsx)(X,{photo:null===a||void 0===a?void 0:a.photo,data:null===a||void 0===a?void 0:a.dopPhoto})]}),Object(T.jsx)("div",{className:"col-lg-7",children:Object(T.jsxs)("div",{className:"shop-detail-content mt-5 mt-lg-0",children:[Object(T.jsx)("h3",{className:"product-title m-0",children:a&&"ru"===q?a.titleru:a&&"ua"===q?a.titleua:Object(T.jsx)(B.a,{height:30})}),Object(T.jsxs)("div",{className:"sigma_product-price",children:[(null===a||void 0===a?void 0:a.salePrice)?Object(T.jsxs)("span",{children:[a.salePrice," \u0433\u0440\u043d"]}):Object(T.jsx)(B.a,{height:80}),Object(T.jsxs)("div",{className:"saleBlock",children:[(null===a||void 0===a?void 0:a.salePrice)&&(null===a||void 0===a?void 0:a.sale)&&Object(T.jsxs)("span",{className:"persentSale",children:["sale ",parseInt((y=parseFloat(a.sale),w=parseFloat(a.salePrice),100*Math.abs((y-w)/((y+w)/2)))),"%"]}),(null===a||void 0===a?void 0:a.sale)&&Object(T.jsxs)("span",{children:[a.sale," \u0433\u0440\u043d"]})]})]}),Object(T.jsxs)("div",{className:"shop-detail-inner",children:[Object(T.jsxs)("div",{className:"availability-box",children:[Object(T.jsx)("div",{className:"d-inline-block other-info",children:Object(T.jsxs)("h6",{children:["ru"===q?"\u041d\u0430\u043b\u0438\u0447\u0438\u0435":"\u041d\u0430\u044f\u0432\u043di\u0441\u0442\u044c",":",(null===a||void 0===a?void 0:a.availability)?Object(T.jsx)("span",{className:"text-success ml-2",children:"ru"===q?"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438":"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442i"}):Object(T.jsx)(B.a,{})]})}),Object(T.jsx)("div",{className:"ml-2 d-inline-block other-info",children:Object(T.jsxs)("h6",{children:["ru"===q?"\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0430":"\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443"," :",Object(T.jsx)("span",{className:"grey ml-2",children:null===a||void 0===a?void 0:a.id})]})})]}),Object(T.jsxs)("div",{children:[" ",Object(T.jsx)("h4",{className:"kharakteristiki-title",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),Object(T.jsxs)("div",{className:"kharakteristiki-list",children:[Object(T.jsxs)("div",{className:"kharakteristiki-item",children:[Object(T.jsx)("div",{className:"kharakteristiki-item-title",children:"ru"===q?"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c":"\u042f\u043a \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438"}),(null===a||void 0===a?void 0:a.useru)?Object(T.jsx)("div",{className:"kharakteristiki-item-subtitle",children:"ru"===q?a.useru:a.useua}):Object(T.jsx)(B.a,{height:30})]}),Object(T.jsxs)("div",{className:"kharakteristiki-item",children:[Object(T.jsx)("div",{className:"kharakteristiki-item-title",children:"ru"===q?"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e":"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u0446\u0442\u0432\u043e"}),(null===a||void 0===a?void 0:a.productionru)?Object(T.jsx)("div",{className:"kharakteristiki-item-subtitle",children:"ru"===q?a.productionru:a.productionua}):Object(T.jsx)(B.a,{height:30})]}),Object(T.jsxs)("div",{className:"kharakteristiki-item",children:[Object(T.jsx)("div",{className:"kharakteristiki-item-title",children:"ru"===q?"\u0412\u0435\u0441":"\u0412\u0430\u0433\u0430"}),(null===a||void 0===a?void 0:a.weightru)?Object(T.jsx)("div",{className:"kharakteristiki-item-subtitle",children:"ru"===q?a.weightru:a.weightua}):Object(T.jsx)(B.a,{height:30})]}),Object(T.jsxs)("div",{className:"kharakteristiki-item",children:[Object(T.jsx)("div",{className:"kharakteristiki-item-title",children:"ru"===q?"\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u0438\u043d\u0433\u0440\u0438\u0434\u0438\u0435\u043d\u0442\u044b":"\u0413\u043e\u043b\u043e\u0432\u043d\u0456 \u0456\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442\u0438"}),(null===a||void 0===a?void 0:a.ingridientru)?Object(T.jsx)("div",{className:"kharakteristiki-item-subtitle",children:"ru"===q?a.ingridientru:a.ingridientua}):Object(T.jsx)(B.a,{height:30})]})]})]}),Object(T.jsxs)("div",{className:"quantity-cart d-sm-flex align-items-center",children:[(null===a||void 0===a?void 0:a.sale)?Object(T.jsxs)("div",{className:"quantity-box",children:[Object(T.jsx)("button",{onClick:(null===a||void 0===a?void 0:a.sale)&&function(){!function(e){var t=Object(g.a)(E.getState().basket),c=t.findIndex((function(t){return t.id===e}));if(c>0){if(t[c].count-1<=0)return E.dispatch({type:"basket/remove",payload:E.getState().basket.filter((function(t){return t.id!==e}))});t[c].count=t[c].count-1;var s=t;return E.dispatch({type:"basket/add",payload:s})}E.dispatch({type:"basket/remove",payload:E.getState().basket.filter((function(t){return t.id!==e}))})}(a.id),j>0&&d(j-1),e("ru"===q?"\u0423\u0434\u0430\u043b\u0435\u043d\u043e !":"\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043e !",{appearance:"error",autoDismiss:!0})},type:"button",className:"minus-btn",children:Object(T.jsx)("i",{className:"fa fa-minus"})}),Object(T.jsx)("input",{type:"text",className:"input-qty",name:"name",value:j}),Object(T.jsx)("button",{onClick:(null===a||void 0===a?void 0:a.sale)&&_,type:"button",className:"plus-btn",children:Object(T.jsx)("i",{className:"fa fa-plus"})})]}):Object(T.jsx)(B.a,{height:50,width:170}),Object(T.jsx)("div",{className:"cart-btn",children:(null===a||void 0===a?void 0:a.sale)?Object(T.jsx)("button",{className:"btn saleButton",onClick:function(){!v.find((function(e){return":".concat(e.id)===N}))&&_(),k.push("/checkout")},children:"ru"===q?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443":"\u0423 \u043a\u043e\u0448\u0438\u043a"}):Object(T.jsx)(B.a,{height:40,width:150})})]}),Object(T.jsxs)("h4",{onClick:function(){return f(!x)},className:"descr-title",children:["ru"===q?"\u041f\u043e\u043b\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435":"\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",Object(T.jsx)("span",{children:" \u2193"})]}),x&&Object(T.jsx)("div",{className:"short-descr",children:(null===a||void 0===a?void 0:a.descriptionru)?Object(T.jsx)("p",{children:"ru"===q?a.descriptionru:a.descriptionua}):Object(T.jsx)(B.a,{height:90})})]})]})})]})})})]})},$=c(6),ee=function(e){var t=e.data,c=E.getState().lang;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{"data-title":"Product",children:Object(T.jsx)("div",{className:"andro_cart-product-wrapper",children:Object(T.jsxs)("div",{className:"andro_cart-product-body",children:[Object(T.jsx)("h6",{children:Object(T.jsx)("a",{href:"#",children:"ru"===c?t.titleru:t.titleua})}),Object(T.jsxs)("p",{children:[t.count," ","ru"===c?"\u041a\u043e\u043b-\u0432\u043e":"\u041ai\u043b\u044c-\u0441\u0442\u044c"]})]})})}),Object(T.jsxs)("td",{"data-title":"Quantity",children:["x",t.count]}),Object(T.jsx)("td",{"data-title":"Total",children:Object(T.jsx)("strong",{children:parseFloat(t.salePrice.toString())*t.count})})]})},te=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(h.a)(n,2),r=i[0],l=i[1],j=Object(s.useState)(""),d=Object(h.a)(j,2),m=d[0],O=d[1],x=E.getState().basket,p=Object(o.useToasts)().addToast;Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),E.subscribe((function(){return a(E.getState().basket)})),Object(s.useEffect)((function(){a(x)}),[]),Object(s.useEffect)((function(){var e=r,t=m||"";c.forEach((function(t){return e+=parseFloat(t.salePrice)*t.count})),c.forEach((function(e){return t=t+" "+e.titleru+" \u043a\u043e\u043b-\u0432\u043e :"+e.count+";"})),l(e),O(t)}),[c]);var f=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,s,a,n,i,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={},s=new FormData(t.target),a=Object($.a)(s.entries());try{for(a.s();!(n=a.n()).done;)i=Object(h.a)(n.value,2),l=i[0],(o=i[1])&&(c[l]=o)}catch(j){a.e(j)}finally{a.f()}if(console.log(c),(null===c||void 0===c?void 0:c.name)&&!((null===c||void 0===c?void 0:c.name.length)<1)){e.next=11;break}return p("ru"===g?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0438\u043c\u044f!":"\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u043b\u0435 \u0456\u043c'\u044f!",{appearance:"error",autoDismiss:!0}),e.abrupt("return");case 11:if((null===c||void 0===c?void 0:c.phone)&&!((null===c||void 0===c?void 0:c.phone.length)<10)){e.next=14;break}return p("ru"===g?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10 \u0446\u0438\u0444\u0440!":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u0437 10 \u0446\u0438\u0444\u0440!",{appearance:"error",autoDismiss:!0}),e.abrupt("return");case 14:return c.basket=m+" \u041e\u0431\u0449\u0430\u044f \u0446\u0435\u043d\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ".concat(r),e.next=17,v(c);case 17:p("ru"===g?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442! !":"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u0435 !",{appearance:"success",autoDismiss:!0});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=E.getState().lang;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K,{}),Object(T.jsx)("div",{className:"section-padding pb-0",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("form",{onSubmit:f,children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsxs)("div",{className:"col-xl-7",children:[Object(T.jsxs)("h4",{children:[" ","ru"===g?"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430":"\u0414\u0435\u0442\u0430\u043bi \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"]}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsxs)("div",{className:"form-group col-xl-12",children:[Object(T.jsxs)("label",{className:"form-label",children:["ru"===g?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f":"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)("input",{type:"text",placeholder:"ru"===g?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f":"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f",name:"name",className:"form-control",required:""})]}),Object(T.jsxs)("div",{className:"form-group col-xl-12",children:[Object(T.jsx)("label",{className:"form-label",children:"ru"===g?"\u0413\u043e\u0440\u043e\u0434":"\u041c\u0456\u0441\u0442\u043e"}),Object(T.jsx)("input",{type:"text",placeholder:"ru"===g?"\u0413\u043e\u0440\u043e\u0434":"\u041c\u0456\u0441\u0442\u043e",name:"town",className:"form-control",required:""})]}),Object(T.jsxs)("div",{className:"form-group col-xl-6",children:[Object(T.jsxs)("label",{className:"form-label",children:["ru"===g?" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)("input",{type:"text",placeholder:"ru"===g?" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",name:"phone",className:"form-control",required:""})]}),Object(T.jsxs)("div",{className:"form-group col-xl-6",children:[Object(T.jsx)("label",{className:"form-label",children:"ru"===g?" \u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b":"\u0417\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438"}),Object(T.jsx)("input",{type:"text",placeholder:"ru"===g?" \u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b":"\u0417\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",name:"sposobOplaty",className:"form-control",required:""})]}),Object(T.jsxs)("div",{className:"form-group col-xl-12",children:[Object(T.jsx)("label",{className:"form-label",children:"\u0421\u043b\u0443\u0436\u0431\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(T.jsxs)("select",{className:"form-control",children:[Object(T.jsx)("option",{value:"",children:"\u0421\u043b\u0443\u0436\u0431\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(T.jsx)("option",{value:"novaPoshta",children:"\u041d\u043e\u0432\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),Object(T.jsx)("option",{value:"intaym",children:"\u0418\u043d\u0442\u0430\u0439\u043c"}),Object(T.jsx)("option",{value:"mist",children:"\u041c\u0438\u0441\u0442\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441"}),Object(T.jsx)("option",{value:"mejdunarodnayaDostavka",children:"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})]})]}),Object(T.jsxs)("div",{className:"form-group col-xl-6",children:[Object(T.jsx)("label",{className:"form-label",children:"ru"===g?"\u041d\u043e\u043c\u0435\u0440 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0441\u043b\u0443\u0436\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(T.jsx)("input",{type:"text",placeholder:"ru"===g?"\u041d\u043e\u043c\u0435\u0440 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0441\u043b\u0443\u0436\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",name:"novaPoshta",className:"form-control",required:""})]}),Object(T.jsxs)("div",{className:"form-group col-xl-12 mb-0",children:[Object(T.jsx)("label",{className:"form-label",children:"ru"===g?"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439":"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440i\u0439"}),Object(T.jsx)("textarea",{name:"comment",rows:"5",className:"form-control",placeholder:"ru"===g?"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439":"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440i\u0439"})]})]})]}),Object(T.jsxs)("div",{className:"col-xl-5 checkout-billing mt-4 mt-xl-0",children:[Object(T.jsx)("div",{className:"table-responsive-md",children:Object(T.jsxs)("table",{className:"andro_responsive-table",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:" \u0422\u043e\u0432\u0430\u0440"}),Object(T.jsx)("th",{children:"ru"===g?"\u041a\u043e\u043b-\u0432\u043e":"\u041ai\u043b\u044c-\u0441\u0442\u044c"}),Object(T.jsx)("th",{children:"ru"===g?"\u0426\u0435\u043d\u0430":"\u0426i\u043d\u0430"})]})}),Object(T.jsxs)("tbody",{children:[c.map((function(e,t){return Object(T.jsx)(ee,{data:e},t)})),Object(T.jsxs)("tr",{className:"total",children:[Object(T.jsx)("td",{children:Object(T.jsx)("h6",{className:"mb-0",children:"ru"===g?"\u041e\u0431\u0449\u0430\u044f \u0446\u0435\u043d\u0430":"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0446i\u043d\u0430"})}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:Object(T.jsxs)("strong",{children:[r," \u0413\u0420\u041d"]})})]})]})]})}),c.length>0&&Object(T.jsx)("button",{onClick:function(){window.localStorage.clear(),window.location.reload()},type:"submit",className:"btn btn-block",children:"ru"===g?"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0448\u0438\u043a"}),Object(T.jsx)("button",{type:"submit",className:"btn btn-block",children:"ru"===g?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437":"\u041fi\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})]})})})})]})};var ce=function(){return Object(s.useEffect)((function(){p()}),[]),Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(o.ToastProvider,{autoDismiss:!0,autoDismissTimeout:6e3,placement:"top-right",children:Object(T.jsxs)(r.a,{children:[Object(T.jsx)(W,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{exact:!0,path:"/",children:Object(T.jsx)(R,{})}),Object(T.jsx)(l.a,{exact:!0,path:"/checkout",children:Object(T.jsx)(te,{})}),Object(T.jsx)(l.a,{exact:!0,path:"/product-details:id",children:Object(T.jsx)(Y,{})})]}),Object(T.jsx)(H,{})]})})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},ae=c(67);i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(G.a,{store:E,children:Object(T.jsx)(ae.a,{loading:null,persistor:P,children:Object(T.jsx)(ce,{})})})}),document.getElementById("root")),se()},74:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.5c61f174.chunk.js.map