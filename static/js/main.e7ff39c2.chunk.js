(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(14),s=n.n(c),i=(n(21),n(3)),d=n(16),l=(n(22),a.a.createContext({})),o=n(0),j=function(){var e=Object(r.useContext)(l);function t(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(o.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var n=e.login,r=e.name,a=e.picture,c=e.phone,s=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(o.jsx)("img",{src:a.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(o.jsxs)("td",{"data-th":"Name",className:"align-middle",children:[r.first," ",r.last]}),Object(o.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(o.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(o.jsx)("a",{href:"mailto:"+s,target:"__blank",children:s})}),Object(o.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},n.uuid)})):Object(o.jsx)(o.Fragment,{})})},h=function(){var e=Object(r.useContext)(l);return console.log(e.developerState.headings[1].order),Object(o.jsx)("div",{className:"datatable mt-5",children:Object(o.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.developerState.headings.map((function(t){var n=t.name,r=t.width,a=t.order,c="nocarrot";return"Image"!==n&&(c="carrot".concat(a)),Object(o.jsxs)("th",{className:"col",id:n,style:{width:r},onClick:function(){e.handleSort(n)},children:[n,Object(o.jsx)("span",{className:c})]},n)}))})}),Object(o.jsx)(j,{})]})})},u=function(){var e=Object(r.useContext)(l);return Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})})},m=(n(24),function(){return Object(o.jsx)("div",{className:"bg-light",children:Object(o.jsx)("div",{className:"search-area col-4",children:Object(o.jsx)(u,{})})})}),b=n(15),f=n.n(b),O={getUsers:function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")}},g=(n(44),function(){var e=Object(r.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){O.getUsers().then((function(e){a(Object(i.a)(Object(i.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(o.jsxs)(l.Provider,{value:{developerState:n,handleSearchChange:function(e){var t=e.target.value,r=n.users.filter((function(e){return-1!=="".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase()).indexOf(t.toLowerCase())?e:""}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:r}))},handleSort:function(e){var t=n.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var r=n.filteredUsers.sort((function(n,r){return"ascend"===t?void 0===n[e]?1:void 0===r[e]?-1:"name"===e?n[e].first.localeCompare(r[e].first):"dob"===e?n[e].age-r[e].age:n[e].localeCompare(r[e]):void 0===n[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(n[e].first):"dob"===e?r[e].age-n[e].age:r[e].localeCompare(n[e])})),c=n.headings.map((function(n){return n.order=n.name===e?t:n.order,n}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:r,headings:c}))}},children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"data-area",children:n.filteredUsers.length>0?Object(o.jsx)(h,{}):Object(o.jsx)("div",{})})]})}),p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g,{})})},x=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})},v=(n(45),function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{children:"Search employees by name. Click the column headings to sort."})]})});n(46);var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(x,{children:[Object(o.jsx)(v,{}),Object(o.jsx)(p,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(47);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.e7ff39c2.chunk.js.map