(this.webpackJsonpdevops=this.webpackJsonpdevops||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);n(0);var c=n(8),i=n.n(c),r=(n(70),n(71),n(121)),s=n(120),a=n(50),o=n(51),j=n(52),f=n(13),h=new(function(){function e(t){Object(o.a)(this,e),this.giraffes=["Loading Giraffes..."],Object(f.d)(this,{},{autoBind:!0}),this.fetchGiraffes()}return Object(j.a)(e,[{key:"fetchGiraffes",value:function(){var e=this;fetch("rest/giraffes").then((function(t){return t.json().then((function(t){return Object(f.g)((function(){return e.giraffes=t}))}))}))}}]),e}()),l=n(59),d=n(6);var u=Object(l.a)((function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"It Works!"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(r.a,{onClick:function(){return h.addGiraffe("Elmer")},children:"Tilf\xf8j giraf"}),Object(d.jsx)("h1",{})]}),Object(d.jsx)("div",{children:Object(d.jsx)("form",{className:a.classes.root,noValidate:!0,autoComplete:"off",children:Object(d.jsx)(s.a,{id:"filled-basic",label:"Filled",variant:"filled"})})}),Object(d.jsx)("h1",{}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:h.giraffes.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})})]})})})),b=n(9),O=Object(b.f)((function(e){var t=e.history,n=e.match;return console.log(t),console.log(n),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["About ",n.params.text]}),Object(d.jsx)(r.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/")},children:"Go to front"})]})})),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},p=n(58);i.a.render(Object(d.jsx)(p.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/app",component:u}),Object(d.jsx)(b.a,{path:"/about/:text",component:O}),Object(d.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)("h1",{children:"Startside"})}}),Object(d.jsx)(b.a,{render:function(){return Object(d.jsx)("h1",{children:"404"})}})]})}),document.getElementById("root")),x()}},[[89,1,2]]]);
//# sourceMappingURL=main.94e3655d.chunk.js.map