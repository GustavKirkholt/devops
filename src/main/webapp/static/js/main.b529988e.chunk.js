(this.webpackJsonpdevops=this.webpackJsonpdevops||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);n(0);var i=n(8),c=n.n(i),s=(n(70),n(71),n(121)),r=n(120),a=n(50),f=n(51),o=n(52),h=n(11),j=new(function(){function e(t){Object(f.a)(this,e),this.newGiraffe=["Ny Giraf"],this.giraffes=["Loading Giraffes..."],this.state=[""],this.state="Loading",Object(h.d)(this,{giraffes:h.f},{autoBind:!0}),this.fetchGiraffes()}return Object(o.a)(e,[{key:"fetchGiraffes",value:function(){var e=this;fetch("rest/giraffes").then((function(t){t.json().then((function(t){return Object(h.g)((function(){return e.giraffes=t})).then((function(){this.state="Done"})).catch(e.state="Failed")}))}))}},{key:"postGiraffes",value:function(){var e=this;fetch("rest/giraffes",this.newGiraffe).then((function(t){t.json().then((function(t){return Object(h.g)((function(){return e.giraffes=t})).then(console.log(e.giraffes))}))}))}},{key:"postGiraffess",value:function(e){e=this.newGiraffe,fetch("rest/giraffes",{method:"post",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(this.giraffes)}))}}]),e}()),u=n(59),l=n(6);var d=Object(u.a)((function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:j.state}),Object(l.jsxs)("div",{children:[Object(l.jsx)(s.a,{onClick:function(){return j.postGiraffess},children:"Tilf\xf8j giraf"}),Object(l.jsx)("h1",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("form",{className:a.classes.root,noValidate:!0,autoComplete:"off",children:Object(l.jsx)(r.a,{id:"filled-basic",label:"Filled",variant:"filled"})})}),Object(l.jsx)("h1",{}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:j.giraffes.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})})]})})})),b=n(9),O=Object(b.f)((function(e){var t=e.history,n=e.match;return console.log(t),console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["About ",n.params.text]}),Object(l.jsx)(s.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/")},children:"Go to front"})]})})),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))},x=n(58);c.a.render(Object(l.jsx)(x.a,{children:Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/app",component:d}),Object(l.jsx)(b.a,{path:"/about/:text",component:O}),Object(l.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)("h1",{children:"Startside"})}}),Object(l.jsx)(b.a,{render:function(){return Object(l.jsx)("h1",{children:"404"})}})]})}),document.getElementById("root")),p()}},[[89,1,2]]]);
//# sourceMappingURL=main.b529988e.chunk.js.map