(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t.n(a),l=t(2),o=t(0),u=t.n(o),c=function(e){var n=e.filter,t=e.handleFilterChange;return u.a.createElement("div",null,"Search: ",u.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.newName,t=e.newNumber,a=e.handleNameChange,r=e.handleNumberChange,l=e.handleAddPerson;return u.a.createElement("form",null,u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:n,onChange:a})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:t,onChange:r})),u.a.createElement("div",null,u.a.createElement("button",{onClick:l,type:"submit"},"add")))},d=function(e){var n=e.persons,t=e.filterValue,a=e.handleDeletePerson;return n.filter((function(e){return e.name.toLocaleLowerCase().match(t.toLocaleLowerCase())})).map((function(e){return u.a.createElement("div",{key:e.name},e.name,"  ",e.number,u.a.createElement("button",{id:e.id,name:e.name,onClick:a},"delete"))}))},m=t(3),f=t.n(m),s="/api/persons",h=function(){return f.a.get(s).then((function(e){return e.data}))},b=function(e){return f.a.post(s,e).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(s,"/").concat(e)).then((function(e){return console.log(e),e.data}))},E=function(e){var n=e.message;return""===n?null:u.a.createElement("div",{style:{color:"green",backGround:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,fontStyle:"bold",fontSize:50}},n)},v=function(){var e=Object(o.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)(""),m=Object(l.a)(r,2),f=m[0],s=m[1],v=Object(o.useState)(""),p=Object(l.a)(v,2),C=p[0],w=p[1],j=Object(o.useState)(""),O=Object(l.a)(j,2),k=O[0],N=O[1],S=Object(o.useState)(""),y=Object(l.a)(S,2),D=y[0],P=y[1];return Object(o.useEffect)((function(){h().then((function(e){return a(e)}))}),[]),u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(E,{message:D}),u.a.createElement(c,{filter:k,handleFilterChange:function(e){N(e.target.value)}}),u.a.createElement("h2",null,"Add new"),u.a.createElement(i,{newName:f,newNumber:C,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){w(e.target.value)},handleAddPerson:function(e){e.preventDefault();var n={name:f,number:C};t.find((function(e){return e.name===f}))?alert("".concat(f," is already added to phonebook")):b(n).then((function(e){console.log(e),a(t.concat(e)),s(""),w(""),P("Added ".concat(f)),setTimeout((function(){P("")}),5e3)}))}}),u.a.createElement("div",null,"new name: ",f),u.a.createElement("h2",null,"Numbers"),u.a.createElement(d,{persons:t,filterValue:k,handleDeletePerson:function(e){e.preventDefault(),window.confirm("Delete ".concat(e.target.name,"?"))&&g(e.target.id).then((function(){h().then((function(e){return a(e)}))}))}}))};t(39);r.a.render(u.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2ddeb8c.chunk.js.map