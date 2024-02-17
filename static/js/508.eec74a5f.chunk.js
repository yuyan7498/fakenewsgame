"use strict";(self.webpackChunkchatvia=self.webpackChunkchatvia||[]).push([[508],{2508:(e,r,s)=>{s.r(r),s.d(r,{default:()=>R});var t=s(9584),a=s(3948),l=s(3424),n=s(6940),i=s(6168),o=s(172),c=s(2512),d=s(7864),u=s(1424),m=s(2152),h=s(8436),g=s(6492),p=s(664),b=s(1704),f=s(6896),j=s(2596),x=s(6892),v=s(5704),y=s(132),O=s(8500),N=s(9884),w=s(6596),C=s(6359),k=s(4340),P=s(6228),E=s(7884);const R=(0,i.c)((0,a.Ul)((e=>{const{user:r,loading:s,error:t}=e.Auth;return{user:r,loading:s,error:t}}),{registerUser:N.Ee,apiError:N.w3})((e=>{const r=(0,l.i6)(),s=(0,a.OY)(),{t:i}=(0,w.Gy)(),R=(0,o.KO)({enableReinitialize:!0,initialValues:{username:"",email:"",password:""},validationSchema:c.kt({username:c.Qb().required("Required"),email:c.Qb().email("Enter proper email").required("Required"),password:c.Qb().required("Required")}),onSubmit:r=>{e.registerUser(r)}}),S=(0,P.M3)((e=>e.Auth),(e=>({user:e.user,success:e.success,error:e.error}))),{user:M,error:U,success:q}=(0,a.w1)(S);return(0,t.useEffect)((()=>{q&&setTimeout((()=>r("/login")),3e3)}),[s,q,U,M,r]),(0,t.useEffect)((()=>{s((0,N.w3)(""))}),[s]),document.title="Register | Chatvia React - Responsive Bootstrap 5 Chat App",(0,E.jsx)(t.Fragment,{children:(0,E.jsx)("div",{className:"account-pages my-5 pt-sm-5",children:(0,E.jsx)(d.c,{children:(0,E.jsx)(u.c,{className:"justify-content-center",children:(0,E.jsxs)(m.c,{md:8,lg:6,xl:5,children:[(0,E.jsxs)("div",{className:"text-center mb-4",children:[(0,E.jsxs)(n.cH,{to:"/",className:"auth-logo mb-5 d-block",children:[(0,E.jsx)("img",{src:C,alt:"",height:"30",className:"logo logo-dark"}),(0,E.jsx)("img",{src:k,alt:"",height:"30",className:"logo logo-light"})]}),(0,E.jsx)("h4",{children:i("Register")}),(0,E.jsxs)("p",{className:"text-muted mb-4",children:[i("Get your Chatvia account now"),"."]})]}),(0,E.jsx)(h.c,{children:(0,E.jsx)(g.c,{className:"p-4",children:(0,E.jsxs)(p.c,{onSubmit:e=>{e.preventDefault(),R.handleSubmit()},children:[M&&M?(0,E.jsx)(b.c,{color:"success",children:"Register User Successfully"}):null,U&&U?(0,E.jsx)(b.c,{color:"danger",children:(0,E.jsx)("div",{children:U})}):null,(0,E.jsxs)("div",{className:"mb-3",children:[(0,E.jsx)(f.c,{className:"form-label",children:i("Email")}),(0,E.jsxs)(j.c,{className:"input-group bg-soft-light rounded-3 mb-3",children:[(0,E.jsx)("span",{className:"input-group-text text-muted",children:(0,E.jsx)("i",{className:"ri-mail-line"})}),(0,E.jsx)(x.c,{type:"text",id:"email",name:"email",className:"form-control form-control-lg bg-soft-light border-light",placeholder:"Enter Email",onChange:R.handleChange,onBlur:R.handleBlur,value:R.values.email,invalid:!(!R.touched.email||!R.errors.email)}),R.touched.email&&R.errors.email?(0,E.jsx)(v.c,{type:"invalid",children:R.errors.email}):null]})]}),(0,E.jsxs)("div",{className:"mb-3",children:[(0,E.jsx)(f.c,{className:"form-label",children:i("Username")}),(0,E.jsxs)(j.c,{className:"mb-3 bg-soft-light input-group-lg rounded-lg",children:[(0,E.jsx)("span",{className:"input-group-text border-light text-muted",children:(0,E.jsx)("i",{className:"ri-user-2-line"})}),(0,E.jsx)(x.c,{type:"text",id:"username",name:"username",className:"form-control form-control-lg bg-soft-light border-light",placeholder:"Enter Username",onChange:R.handleChange,onBlur:R.handleBlur,value:R.values.username,invalid:!(!R.touched.username||!R.errors.username)}),R.touched.username&&R.errors.username?(0,E.jsx)(v.c,{type:"invalid",children:R.errors.username}):null]})]}),(0,E.jsxs)(y.c,{className:"mb-4",children:[(0,E.jsx)(f.c,{className:"form-label",children:i("Password")}),(0,E.jsxs)(j.c,{className:"mb-3 bg-soft-light input-group-lg rounded-lg",children:[(0,E.jsx)("span",{className:"input-group-text border-light text-muted",children:(0,E.jsx)("i",{className:"ri-lock-2-line"})}),(0,E.jsx)(x.c,{type:"password",id:"password",name:"password",className:"form-control form-control-lg bg-soft-light border-light",placeholder:"Enter Password",onChange:R.handleChange,onBlur:R.handleBlur,value:R.values.password,invalid:!(!R.touched.password||!R.errors.password)}),R.touched.password&&R.errors.password?(0,E.jsx)(v.c,{type:"invalid",children:R.errors.password}):null]})]}),(0,E.jsx)("div",{className:"d-grid",children:(0,E.jsx)(O.c,{color:"primary",block:!0,className:" waves-effect waves-light",type:"submit",children:"Register"})}),(0,E.jsx)("div",{className:"mt-4 text-center",children:(0,E.jsxs)("p",{className:"text-muted mb-0",children:[i("By registering you agree to the Chatvia")," ",(0,E.jsx)(n.cH,{to:"#",className:"text-primary",children:i("Terms of Use")})]})})]})})}),(0,E.jsxs)("div",{className:"mt-5 text-center",children:[(0,E.jsxs)("p",{children:[i("Already have an account")," ? ",(0,E.jsxs)(n.cH,{to:"login",className:"font-weight-medium text-primary",children:[" ",i("Signin")," "]})," "]}),(0,E.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",i("Chatvia"),". ",i("Crafted with")," ",(0,E.jsx)("i",{className:"mdi mdi-heart text-danger"})," ",i("by Themesbrand")]})]})]})})})})})})))},1704:(e,r,s)=>{s.d(r,{c:()=>j});var t=s(9584),a=s(308),l=s.n(a),n=s(6736),i=s.n(n),o=s(5096),c=s(304),d=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},u.apply(this,arguments)}function m(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function h(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?m(Object(s),!0).forEach((function(r){g(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function g(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function p(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)s=l[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var b={children:l().node,className:l().string,closeClassName:l().string,closeAriaLabel:l().string,color:l().string,cssModule:l().object,fade:l().bool,innerRef:l().oneOfType([l().object,l().string,l().func]),isOpen:l().bool,tag:o.aq,toggle:l().func,transition:l().shape(c.c.propTypes)};function f(e){var r=e.className,s=e.closeClassName,a=e.closeAriaLabel,l=void 0===a?"Close":a,n=e.cssModule,m=e.tag,g=void 0===m?"div":m,b=e.color,f=void 0===b?"success":b,j=e.isOpen,x=void 0===j||j,v=e.toggle,y=e.children,O=e.transition,N=void 0===O?h(h({},c.c.defaultProps),{},{unmountOnExit:!0}):O,w=e.fade,C=void 0===w||w,k=e.innerRef,P=p(e,d),E=(0,o.UR)(i()(r,"alert","alert-".concat(f),{"alert-dismissible":v}),n),R=(0,o.UR)(i()("btn-close",s),n),S=h(h(h({},c.c.defaultProps),N),{},{baseClass:C?N.baseClass:"",timeout:C?N.timeout:0});return t.createElement(c.c,u({},P,S,{tag:g,className:E,in:x,role:"alert",innerRef:k}),v?t.createElement("button",{type:"button",className:R,"aria-label":l,onClick:v}):null,y)}f.propTypes=b;const j=f},132:(e,r,s)=>{s.d(r,{c:()=>g});var t=s(9584),a=s(308),l=s.n(a),n=s(6736),i=s.n(n),o=s(5096),c=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},d.apply(this,arguments)}function u(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)s=l[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var m={children:l().node,row:l().bool,check:l().bool,switch:l().bool,inline:l().bool,floating:l().bool,noMargin:l().bool,disabled:l().bool,tag:o.aq,className:l().string,cssModule:l().object};function h(e){var r=e.className,s=e.cssModule,a=e.row,l=e.disabled,n=e.check,m=e.inline,h=e.floating,g=e.noMargin,p=e.tag,b=void 0===p?"div":p,f=e.switch,j=u(e,c),x=n||f,v=(0,o.UR)(i()(r,!!a&&"row",!!x&&"form-check",!!f&&"form-switch",!x&&!g&&"mb-3",!(!x||!m)&&"form-check-inline",!(!x||!l)&&"disabled",h&&"form-floating"),s);return"fieldset"===b&&(j.disabled=l),t.createElement(b,d({},j,{className:v}))}h.propTypes=m;const g=h},6359:(e,r,s)=>{e.exports=s.p+"static/media/logo-dark.f5240afc6ee851482fc6.png"},4340:(e,r,s)=>{e.exports=s.p+"static/media/logo-light.f5240afc6ee851482fc6.png"}}]);