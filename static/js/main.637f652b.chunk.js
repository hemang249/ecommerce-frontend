(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[0],{262:function(e,t,a){e.exports=a(692)},264:function(e,t,a){},682:function(e,t){},684:function(e,t){},692:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a(34),l=a(1),s=(a(264),"http://fierce-wildwood-11738.herokuapp.com/api/v1"),m=(Object({NODE_ENV:"production",PUBLIC_URL:"/ecommerce-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND:"http://fierce-wildwood-11738.herokuapp.com/api/v1"}).STRIPE_KEY,function(){return localStorage.removeItem("token"),fetch("".concat(s,"/auth/signout"),{method:"GET"}).then((function(e){return console.log("sign out successfull")})).catch((function(e){return console.log(e)}))}),i=function(){return!!localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token"))},u=Object(o.g)((function(){return c.a.createElement("div",{className:"sticky-top"},c.a.createElement("ul",{className:"nav bg-primary text-white nav-tabs"},c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/user/cart"},"Cart")),i()&&0===i().user.role&&c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/user/dashboard"},"Dashboard")),i()&&1===i().user.role&&c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/admin/dashboard"},"Admin")),i()&&c.a.createElement("li",{onClick:m,className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/"},"Sign out")),!1===i()?c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/signin"},"Login")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(r.b,{className:"nav-link text-white",to:"/signup"},"Register"))):null))})),d=function(e){return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid"},e.showHeader&&c.a.createElement("div",{className:"jumbotron text-center",style:{backgroundImage:"url('https://ak0.picdn.net/shutterstock/videos/1012305950/thumb/1.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},c.a.createElement("h2",{className:"display-6 text-white"},"C0DERS"),c.a.createElement("p",{className:"lead text-white"},"We are a clothing store for geeks to top up their swag.")),c.a.createElement("div",{className:""},e.children)))};function p(e){var t=e.product;return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:"".concat(s,"/product/thumbnail/").concat(t._id),alt:"photo",style:{height:"225px",width:"350px"},className:"mb-3 rounded"}))}var E=function(e,t){var a={};localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a[e._id]={product:e,count:t},localStorage.setItem("cart",JSON.stringify(a))},f=function(){if(localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))},h=function(e){var t=e.product,a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=(r[0],r[1],Object(n.useState)(0)),s=Object(l.a)(o,2),m=s[0],i=s[1];Object(n.useEffect)((function(){var e=f();e&&e[t._id]&&i(e[t._id].count)}),[]);return c.a.createElement("div",{className:"card text-white bg-primary border border-info my-4 "},c.a.createElement("div",{className:"card-header lead"},t.name),c.a.createElement("div",{className:"card-body"},c.a.createElement(p,{product:t}),c.a.createElement("p",{className:"lead  font-weight-normal text-wrap"},t.description),c.a.createElement("p",{className:"btn btn-warning rounded  btn-sm px-4"},"$ ",t.price),c.a.createElement("p",{className:"btn btn-warning rounded  btn-sm px-4 mx-4"},t.category.name.toUpperCase()),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){i(m+1),console.log(m),E(t,m+1)},className:"btn btn-block btn-success mt-2 mb-2"},"Add to Cart (",m,")")),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){0!=m&&(i(m-1),E(t,m))},className:"btn btn-block btn-danger mt-2 mb-2"},"Remove from cart")))))};function b(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),m=Object(l.a)(o,2),i=m[0],u=m[1];Object(n.useEffect)((function(){u(!0),fetch("".concat(s,"/product/all"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){r(e),u(!1)})).catch((function(e){return console.log(e)}))}),[]);return c.a.createElement(d,{showHeader:!0},c.a.createElement("div",{className:"text-center"},i&&c.a.createElement("div",{class:"loader"},"Loading...")),function(){var e=[],t=a.length,n=Math.ceil(t/3);console.log(n);for(var r=0;r<n;r++)e.push(c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(h,{product:a[3*r+0]})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(h,{product:a[3*r+1]})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(h,{product:a[3*r+2]}))));return c.a.createElement("div",null,e)}())}var g=a(33),N=a(13),v=function(){var e=Object(n.useState)({firstName:"",email:"",lastName:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],m=a.email,i=a.firstName,u=a.lastName,p=a.password,E=a.error,f=a.success,h=function(e){return function(t){console.log("update"),o(Object(N.a)({},a,Object(g.a)({error:!1},e,t.target.value))),console.log(a)}},b=function(e){var t;console.log(a),e.preventDefault(),o(Object(N.a)({},a,{error:!1})),(t={firstName:i,lastName:u,email:m,password:p},fetch("".concat(s,"/auth/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(N.a)({},a,{error:e.error,success:!1})):o(Object(N.a)({},a,{firstName:"",lastName:"",email:"",password:"",error:"",success:!0}))})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement(d,null,f?c.a.createElement("div",{className:"alert text-center alert-success"},"Registration successfull ",c.a.createElement("i",{className:"fas fa-check"}),c.a.createElement("br",null),"To Login Click here : ",c.a.createElement(r.b,{to:"/signin"},"Sign In")):null,E?c.a.createElement("div",{className:"alert text-center alert-danger"},"Registration Failed ",c.a.createElement("i",{className:"fas fa-wrong"}),c.a.createElement("br",null),"Please Try Again Later!"):null,c.a.createElement("div",{className:"row bg-primary p-4"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"First Name"),c.a.createElement("input",{name:"firstName",onChange:h("firstName"),className:"form-control",type:"text",value:i}),c.a.createElement("label",{className:"text-light"},"Last Name"),c.a.createElement("input",{name:"lastName",onChange:h("lastName"),type:"text",className:"form-control",value:u}),c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{name:"email",onChange:h("email"),type:"text",className:"form-control",value:m}),c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{name:"password",onChange:h("password"),type:"password",className:"form-control",value:p}),c.a.createElement("button",{onClick:b,className:"btn btn-success btn-block my-4"},"Submit")))))))},O=function(){var e=Object(n.useState)({email:"",password:"",error:!1,loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],m=a.email,u=a.password,p=a.error,E=(a.loading,a.didRedirect),f=(i().user,function(e){return function(t){r(Object(N.a)({},a,Object(g.a)({error:!1},e,t.target.value)))}}),h=function(e){e.preventDefault(),r(Object(N.a)({},a,{error:!1,loading:!0})),function(e){return fetch("".concat(s,"/auth/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:m,password:u}).then((function(e){e.error?r(Object(N.a)({},a,{error:e.error,loading:!1})):function(e,t){localStorage.setItem("token",JSON.stringify(e)),t()}(e,(function(){r(Object(N.a)({},a,{email:"",password:"",error:!1,loading:!1,didRedirect:!0}))}))})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement(d,null,p?c.a.createElement("div",{className:"alert text-center alert-danger"},"Incorrect Email or Password ",c.a.createElement("i",{className:"fas fa-wrong"}),c.a.createElement("br",null),"Please Try Again Later!"):null,function(){if(E)return i()&&1==i().user.role?c.a.createElement(o.a,{to:"/admin/dashboard"}):c.a.createElement(o.a,{to:"/user/dashboard"})}(),c.a.createElement("div",{className:"row  p-4"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:""},"Email"),c.a.createElement("input",{name:"email",onChange:f("email"),value:m,class:"form-control",type:"text"}),c.a.createElement("label",{className:""},"Password"),c.a.createElement("input",{name:"password",onChange:f("password"),value:u,type:"password",class:"form-control"}),c.a.createElement("button",{onClick:h,className:"btn btn-success btn-block my-4"},"Submit"," ")))))))},j=function(){return fetch("".concat(s,"/category/all"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};function y(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)([]),E=Object(l.a)(p,2),f=E[0],h=E[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),N=g[0],v=g[1],O=Object(n.useState)(null),y=Object(l.a)(O,2),S=y[0],x=y[1],w=i(),k=w.user,C=w.token;Object(n.useEffect)((function(){j().then((function(e){return h(e)})).catch((function(e){return console.log(e)}))}),[]);var A=function(e){r(e.target.value)},T=function(e){d(e.target.value)},P=function(e){e.preventDefault(),function(e,t,a){return fetch("".concat(s,"/category/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({name:a})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(k._id,C,a).then((function(e){return j().then((function(e){return h(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},_=function(e){e.preventDefault(),console.log(S),function(e,t,a,n){return fetch("".concat(s,"/category/").concat(a,"/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:{name:n}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(k._id,C,S,a).then((function(e){console.log(e),j().then((function(e){return h(e)})).catch((function(e){return console.log(e)})),v(!1)})).catch((function(e){return console.log(e)}))},D=function(e){(function(e,t,a){return fetch("".concat(s,"/category/").concat(a,"/").concat(e),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e})).catch((function(e){return console.log(e)}))})(k._id,C,e).then((function(e){return j().then((function(e){return h(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",{className:"bg-light rounded"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",null,c.a.createElement("p",{className:"lead"},"All Catergories"),c.a.createElement("ul",{className:"list-group"},f.map((function(e){return c.a.createElement("li",{className:"list-group-item"}," ",e.name.toUpperCase(),c.a.createElement("button",{onClick:function(){return D(e._id)},className:"btn btn-sm btn-danger mx-4"},"Delete")," ",c.a.createElement("button",{onClick:function(){return t=e._id,x(t),void v(!0);var t},className:"btn btn-sm btn-warning mx-4"},"Update")," ")})))),c.a.createElement("div",{className:"my-4"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter Category Name"),c.a.createElement("input",{type:"text",className:"form-control my-3 ",required:!0,placeholder:"Summer",value:a,onChange:A}),c.a.createElement("button",{onClick:P,className:"btn btn-outline-info"},"Create")))),N&&c.a.createElement("div",{className:"my-4"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Update Category"),c.a.createElement("input",{type:"text",className:"form-control my-3 ",required:!0,placeholder:"Enter updated name",value:u,onChange:T}),c.a.createElement("button",{onClick:function(){return _()},className:"btn btn-outline-info"},"Update"))))))}function S(){return c.a.createElement("div",null)}function x(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({name:"",description:"",stock:0,price:0,category:"",formData:new FormData,loading:!1}),m=Object(l.a)(o,2),u=m[0],d=m[1],p=i(),E=p.user,f=p.token,h=u.name,b=u.description,v=u.stock,O=u.price,y=u.category,S=u.formData,x=u.loading;Object(n.useEffect)((function(){j().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var w=function(e){return function(t){var a="thumbnail"===e?t.target.files[0]:t.target.value;S.set(e,a),d(Object(N.a)({},u,Object(g.a)({},e,a)))}},k=function(e){d(Object(N.a)({},u,{loading:!0})),function(e,t,a){fetch("".concat(s,"/product/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(E._id,f,S).then((function(e){d({name:"",description:"",price:0,stock:0,formData:"",loading:!1})})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,x&&c.a.createElement("p",null,"Loading ..."),c.a.createElement("div",{className:"my-4 px-4"},c.a.createElement("h1",{className:"text-center"},"Create Product"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"}," Product Name"),c.a.createElement("input",{onChange:w("name"),value:h,type:"text",className:"form-control my-3 ",required:!0,placeholder:"Amazing T-Shirt"}),c.a.createElement("p",{className:"lead"}," Product Image"),c.a.createElement("input",{onChange:w("thumbnail"),type:"file",className:"form-control my-3 ",required:!0}),c.a.createElement("p",{className:"lead"}," Product Description "),c.a.createElement("input",{onChange:w("description"),value:b,type:"text",className:"form-control my-3 ",required:!0,placeholder:"Describe Your Product..."}),c.a.createElement("p",{className:"lead"},"Price"),c.a.createElement("input",{onChange:w("price"),value:O,type:"number",className:"form-control my-3 ",required:!0}),c.a.createElement("p",{className:"lead"},"Category"),c.a.createElement("select",{name:"",id:"",value:y,onChange:w("category")},a.map((function(e){return c.a.createElement("option",{value:e._id},e.name.toUpperCase())}))),c.a.createElement("br",null),c.a.createElement("p",{className:"lead"}," Stock"),c.a.createElement("input",{onChange:w("stock"),value:v,type:"number",className:"form-control my-3 ",required:!0}),c.a.createElement("button",{onClick:k,className:"btn btn-outline-info"},"Create")))))}var w=function(){var e=i().user,t=(e.email,e.firstName,e.role,Object(n.useState)("category")),a=Object(l.a)(t,2),r=a[0],o=a[1],s=function(e){return function(t){o(e)}};return c.a.createElement(d,null,c.a.createElement("div",{className:"row container-fluid"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card admin-nav"},c.a.createElement("h4",{className:"card-header bg-warning"},"Admin Navigation"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{onClick:s("category"),className:"list-group-item"},"Manage Categories"),c.a.createElement("li",{onClick:s("order"),className:"list-group-item"},"Manage Orders"),c.a.createElement("li",{onClick:s("product"),className:"list-group-item"},"Manage Products")))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header text-center"},r.toUpperCase()),"category"===r?c.a.createElement(y,null):"product"===r?c.a.createElement(x,null):"order"===r?c.a.createElement(S,null):null))))},k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=i(),m=o.user,u=o.token,p=Object(n.useState)(!1),E=Object(l.a)(p,2),f=E[0],h=E[1];Object(n.useEffect)((function(){var e,t;h(!0),(e=m._id,t=u,fetch("".concat(s,"/order/").concat(e),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){console.log(e),r(e.orders),h(!1)})).catch((function(e){return console.log(e)}))}),[]);return c.a.createElement(d,null,c.a.createElement("div",{className:"fluid-container my-4"},c.a.createElement("h2",{className:"card-title text-center"},"Your Orders"),f&&c.a.createElement("div",{class:"loader"},"Loading..."),a.map((function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-4"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Order ID "),": ",e._id),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Date Ordered "),": ",e.createdAt.substring(0,10)),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"Amount")," : $",e.amount),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,"TransactionId"),": ",e.transactionId))))}))))},C=function(){return c.a.createElement(d,null,"Profile")},A=a(95),T=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return i()?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathName:"/signin",from:e.location}})}}))},P=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return i()&&1===i().user.role?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathName:"/signin",from:e.location}})}}))},_=a(258),D=a.n(_);function I(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],m=t[1],u=Object(n.useState)(!1),p=Object(l.a)(u,2),E=p[0],b=p[1],g=Object(n.useState)(0),N=Object(l.a)(g,2),v=N[0],O=N[1],j=Object(n.useState)(!1),y=Object(l.a)(j,2),S=y[0],x=y[1],w=Object(n.useState)(""),k=Object(l.a)(w,2),C=k[0],A=k[1];Object(n.useEffect)((function(){m(f())}),[]),Object(n.useEffect)((function(){O(T())}),[a]);var T=function(){var e=0;return a&&Object.entries(a).forEach((function(t){var a=Object(l.a)(t,2),n=(a[0],a[1]);e+=n.count*n.product.price})),e},P=function(e){b(!0),A({city:e.card.address_city,street:e.card.address_line1,country:e.card.address_country});var t={token:e,amount:100*v};fetch("".concat(s,"/stripe"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json()})).then((function(e){(function(e,t,a,n){var c=f(),r=[];return Object.entries(c).forEach((function(e){var t=Object(l.a)(e,2),a=(t[0],t[1]);r.push({productId:a.product._id,name:a.product.name,count:a.count})})),fetch("".concat(s,"/order/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:{products:r,amount:a,address:n}})}).then((function(e){return e.json})).catch((function(e){return console.log(e)}))})(i().user._id,i().token,v,C).then((function(e){console.log(e),localStorage.removeItem("cart"),b(!1),x(!0)}))})).catch((function(e){return console.log(e)}))};return c.a.createElement(d,{showHeader:!1},S?c.a.createElement(o.a,{to:"/"}):null,c.a.createElement("h1",{className:"text-center my-4"},"Your Cart"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},function(){var e=[];return a&&Object.entries(a).forEach((function(t){var a=Object(l.a)(t,2),n=(a[0],a[1]);e.push(c.a.createElement(h,{product:n.product}))})),c.a.createElement(n.Fragment,null,e)}()),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{class:"card p-4 my-4 ",style:{width:"800px"}},c.a.createElement("h4",{className:"text-center text-success"},"Thank You For Shopping With Us"),c.a.createElement("h5",{className:"text-center text-dark"},"Your Products will be delivered within 3 working days."),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},"Invoice")),c.a.createElement("table",{class:"table text-center"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Product"),c.a.createElement("th",{scope:"col"},"Quantity"),c.a.createElement("th",{scope:"col"},"Net Amount"))),c.a.createElement("tbody",null,function(){var e=[],t=1;return a&&Object.entries(a).forEach((function(a){var n=Object(l.a)(a,2),r=(n[0],n[1]);r.count,r.product.price,e.push(c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},t++),c.a.createElement("td",null,r.product.name),c.a.createElement("td",null,r.count),c.a.createElement("td",null,"$ ",r.product.price*r.count)))})),c.a.createElement(n.Fragment,null,e)}(),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},c.a.createElement("strong",null,"TOTAL AMOUNT : ")),c.a.createElement("th",{scope:"col"}),c.a.createElement("th",{scope:"col"}),c.a.createElement("th",{scope:"col"},"$ ",v)))),c.a.createElement("div",{class:"card-body text-center"},i()?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,{name:"C0DERS Clothing",stripeKey:"pk_test_E1j6fsqMDJg1nJUWBS4O6kVN00Ml4rt39d",shippingAddress:!0,billingAddress:!0,token:P},c.a.createElement("button",{className:"btn btn-success btn-lg"},"Proceed To Pay ($ ",v,")")),E&&c.a.createElement("div",null,c.a.createElement("p",null,"Please Do not Exit, Your transaction is in process..."),c.a.createElement("div",{class:"loader"}))):c.a.createElement("div",null,c.a.createElement(r.b,{to:"/signin"},c.a.createElement("button",{className:"btn btn-warning btn-lg"},"Login")),c.a.createElement("p",{className:"text-info"},"You Must be logged in to place an order")))))))}var J=a(259),R=a.n(J);a(691);function L(){return c.a.createElement(R.a,{url:"".concat(s,"/api-docs")})}var U=function(){return c.a.createElement(r.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/api-docs",exact:!0,component:L}),c.a.createElement(o.b,{path:"/",exact:!0,component:b}),c.a.createElement(o.b,{path:"/signup",exact:!0,component:v}),c.a.createElement(o.b,{path:"/signin",exact:!0,component:O}),c.a.createElement(T,{path:"/user/profile",exact:!0,component:C}),c.a.createElement(T,{path:"/user/dashboard",exact:!0,component:k}),c.a.createElement(o.b,{path:"/user/cart",exact:!0,component:I}),c.a.createElement(P,{path:"/admin/dashboard",exact:!0,component:w})))},B=a(150);a.n(B).a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.637f652b.chunk.js.map