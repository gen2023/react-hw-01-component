(this["webpackJsonpreact-hw-01-component"]=this["webpackJsonpreact-hw-01-component"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=(t(13),function(e){var a=e.urlImg,t=e.name,n=e.alt,c=void 0===n?"user avater":n,l=e.tag,s=e.location,i=e.followers,m=e.views,u=e.likes,o=["label"],d=["quantity"];return r.a.createElement("div",{className:["profile"]},r.a.createElement("div",{className:["description"]},r.a.createElement("img",{src:a,alt:c,className:"avatar"}),r.a.createElement("p",{className:["name"]},t),r.a.createElement("p",{className:["tag"]},"@",l),r.a.createElement("p",{className:["location"]},s)),r.a.createElement("ul",{className:["stats"]},r.a.createElement("li",null,r.a.createElement("span",{className:o},"Followers"),r.a.createElement("span",{className:d},i)),r.a.createElement("li",null,r.a.createElement("span",{className:o},"Views"),r.a.createElement("span",{className:d},m)),r.a.createElement("li",null,r.a.createElement("span",{className:o},"Likes"),r.a.createElement("span",{className:d},u))))}),i=t(1),m=t.n(i),u=function(e){var a=e.id,t=e.label,n=e.percentage;return r.a.createElement("li",{className:["item"],key:a},r.a.createElement("span",{className:["label"]},t),r.a.createElement("span",{className:["percentage"]},n,"%"))};u.prototype={id:m.a.string.isRequired,label:m.a.string,percentage:m.a.number.isRequired};var o=u,d=function(e){var a=e.title,t=e.stats;return r.a.createElement("section",{className:["statistics"]},r.a.createElement("h2",{className:["title"]},a),r.a.createElement("ul",{className:["stat-list"]},t.map((function(e){var a=e.label,t=e.percentage;return r.a.createElement(o,{label:a,percentage:t})}))))};d.prototype={title:m.a.string,stats:m.a.number.isRequired};var p=d,f=function(e){var a=e.avatar,t=e.name,c=e.isOnline;return r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:["status"],style:{background:c?"green":"red"}}),r.a.createElement("img",{className:["avatar"],src:a,alt:"",width:"48"}),r.a.createElement("p",{className:["name"]},t))};f.prototype={avatar:m.a.string.isRequired,name:m.a.string.isRequired,isOnline:m.a.bool};var b=f,y=function(e){var a=e.friends,t=["item"];return r.a.createElement("ul",{className:["friend-list"]},a.map((function(e){return r.a.createElement("li",{className:t,key:e.id},r.a.createElement(b,{avatar:e.avatar,name:e.name,isOnline:e.isOnline}))})))},E=function(e){var a=e.type,t=e.amount,c=e.currency;return r.a.createElement(n.Fragment,null,r.a.createElement("td",null,a),r.a.createElement("td",null,t),r.a.createElement("td",null,c))};E.prototype={type:m.a.string.isRequired,amount:m.a.string.isRequired,currency:m.a.string.isRequired};var g=E,v=function(e){var a=e.items;return r.a.createElement("table",{className:["transaction-history"]},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement(g,{type:e.type,amount:e.amount,currency:e.currency}))}))))},w=t(2),N=t(5),h=t(6),O=t(7),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(s,{urlImg:w.avatar,name:w.name,tag:w.tag,location:w.location,followers:w.stats.followers,views:w.stats.views,likes:w.stats.likes}),r.a.createElement(p,{title:"Upload stats",stats:N}),r.a.createElement(y,{friends:h}),r.a.createElement(v,{items:O}))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.24dbd421.chunk.js.map