(this["webpackJsonpaplicativo-vivero"]=this["webpackJsonpaplicativo-vivero"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),o=(n(13),n(2)),i=n(3),s=n(5),l=n(4),h=n(8),j=n(0),d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleTextChange=function(t){var n=t.target.value;e.props.onFilterTextChange(n)},e.handleInStockChange=function(t){e.props.onInStockChange(t.target.checked)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.inStockOnlyData;return Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",placeholder:"Buscar ...",onChange:this.handleTextChange})}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",{type:"checkbox",onChange:this.handleInStockChange,checked:e})," ","Solo mostrar porductos en Stock"]})})]})}}]),n}(c.Component),u=function(e){var t=e.product,n=t.stock?Object(j.jsx)("span",{className:"spanNuevo",children:t.nombre}):Object(j.jsx)("span",{style:{color:"red"},className:"spanNuevo",children:t.nombre});return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[n," "]}),Object(j.jsxs)("td",{children:[t.precio," "]})]})},b=function(e){var t=e.product;return Object(j.jsx)("tr",{children:Object(j.jsx)("th",{className:"thCategoria",colSpan:"2",children:t.categoria})})},O=function(){return Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"NOMBRE"}),Object(j.jsx)("th",{children:"PRECIO"})]})})},p=function(e){var t=e.filterTextData,n=e.inStockOnlyData,c=e.todos,a=null,r=[];return c.forEach((function(e){-1!==e.nombre.indexOf(t)&&(n&&!e.stock||(e.categoria!==a&&r.push(Object(j.jsx)(b,{product:e},e.categoria)),r.push(Object(j.jsx)(u,{product:e},e.nombre)),a=e.categoria))})),Object(j.jsx)("tbody",{children:r})},x=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filterTextData,n=e.inStockOnlyData,c=e.todos;return Object(j.jsxs)("table",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(p,{filterTextData:t,inStockOnlyData:n,todos:c})]})}}]),n}(c.Component),f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={filterText:"",inStockOnly:!1},e.handleFilterTextChange=function(t){e.setState({filterText:t})},e.handleInStockChange=function(t){e.setState({inStockOnly:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.filterText,n=e.inStockOnly;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row mt-4",children:Object(j.jsxs)("div",{className:"col-md-12 mt-4",children:[Object(j.jsx)(d,{filterTextData:t,inStockOnlyData:n,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),Object(j.jsx)(x,{todos:h.a,filterTextData:t,inStockOnlyData:n})]})})})}}]),n}(c.Component);n(15);r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"a":[{"categoria":"deportes","precio":"$10.30","stock":true,"nombre":"Football"},{"categoria":"deportes","precio":"9.90","stock":true,"nombre":"Baseball"},{"categoria":"deportes","precio":"7.80","stock":false,"nombre":"Basketball"},{"categoria":"electr\xf3nica","precio":"800.00","stock":true,"nombre":"iPod Touch"},{"categoria":"electr\xf3nica","precio":"323.00","stock":false,"nombre":"iPhone 5"},{"categoria":"electr\xf3nica","precio":"200.34","stock":true,"nombre":"Nexus 7"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.7d354a4c.chunk.js.map