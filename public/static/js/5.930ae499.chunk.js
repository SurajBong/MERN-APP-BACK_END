(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{43:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(45);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},45:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},46:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c}));var n=function(){return{type:"REQUIRE"}},r=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},c=function(e,t){var a=!0,n=!0,r=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var u=c.value;"REQUIRE"===u.type&&(a=a&&e.trim().length>0),"MINLENGTH"===u.type&&(a=a&&e.trim().length>=u.val),"MAXLENGTH"===u.type&&(a=a&&e.trim().length<=u.val),"MIN"===u.type&&(a=a&&+e>=u.val),"MAX"===u.type&&(a=a&&+e<=u.val),"EMAIL"===u.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){r=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}},52:function(e,t,a){"use strict";var n=a(10),r=a(43),i=a(0),c=a.n(i),l=a(46),u=(a(53),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)({},e,{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},53:function(e,t,a){},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(45),i=a(43),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)({},e,{inputs:Object(i.a)({},e.inputs,Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},55:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),c=a(44);a(56);t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(),l=Object(n.a)(a,2),u=l[0],o=l[1],s=Object(r.useState)(),p=Object(n.a)(s,2),d=p[0],f=p[1],v=Object(r.useState)(!1),b=Object(n.a)(v,2),m=b[0],O=b[1];Object(r.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(u)}}),[u]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:t,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=m;t.target.files&&1===t.target.files.length?(a=t.target.files[0],o(a),O(!0),n=!0):(O(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},d&&i.a.createElement("img",{src:d,alt:"Preview"}),!d&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){t.current.click()}},"PICK IMAGE")),!m&&i.a.createElement("p",null,e.errorText))}},56:function(e,t,a){},57:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n),i=a(48),c=a(10),l=a(0),u=a.n(l),o=a(8),s=a(52),p=a(44),d=a(55),f=a(50),v=a(15),b=a(46),m=a(54),O=a(51),j=a(11);a(57);t.default=function(e){var t=Object(l.useContext)(j.a),a=Object(O.a)(),n=a.isLoading,E=a.error,y=a.sendRequest,g=a.clearError,h=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),T=Object(c.a)(h,2),I=T[0],V=T[1],w=Object(o.g)(),P=function(){var e=Object(i.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(n=new FormData).append("title",I.inputs.title.value),n.append("description",I.inputs.description.value),n.append("address",I.inputs.address.value),n.append("image",I.inputs.image.value),e.next=9,y("https://bong-mern.herokuapp.com/api/places","POST",n,{Authorization:"Bearer "+t.token});case 9:w.push("/"),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{error:E,onClear:g}),u.a.createElement("form",{className:"place-form",onSubmit:P},n&&u.a.createElement(v.a,{asOverlay:!0}),u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],onInput:V,errorText:"Please enter a valid title"}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],onInput:V,errorText:"Please enter a valid description (at least 5 characters)."}),u.a.createElement(s.a,{id:"address",element:"input",label:"Address",validators:[Object(b.c)()],onInput:V,errorText:"Please enter a valid address."}),u.a.createElement(d.a,{id:"image",onInput:V,errorText:"Please provide an image."}),u.a.createElement(p.a,{type:"submit",disabled:!I.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.930ae499.chunk.js.map