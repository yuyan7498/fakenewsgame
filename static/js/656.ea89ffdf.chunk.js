"use strict";(self.webpackChunkchatvia=self.webpackChunkchatvia||[]).push([[656],{9656:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var s=t(9584),a=t(7864),l=t(1424),n=t(2152),c=t(8436),o=t(6492),i=t(1704),d=t(664),u=t(6896),m=t(2596),g=t(6892),p=t(5704),b=t(8500),h=t(3948),f=t(6940),j=t(6168),v=t(172),O=t(2512),x=t(6596),y=t(9884),N=t(6359),w=t(4340),P=t(3424),k=t(7884);const C=(0,j.c)((0,h.Ul)((e=>{const{user:r,loading:t,error:s}=e.Auth;return{user:r,loading:t,error:s}}),{loginUser:y.Uc,apiError:y.w3})((e=>{const r=(0,h.OY)(),{t:t}=(0,x.Gy)(),j=(0,P.i6)(),C=(0,s.useCallback)((()=>{r((0,y.w3)(""))}),[r]);(0,s.useEffect)((()=>{C()}),[C]);const E=(0,v.KO)({initialValues:{email:"\u65b0\u624b\u8a18\u8005"},validationSchema:O.kt({email:O.Qb().required("\u8acb\u8f38\u5165\u4f7f\u7528\u8005\u540d\u7a31")}),onSubmit:r=>{e.loginUser(r.email,r.password,e.router.navigate);const t=r.email;localStorage.setItem("username",t),j("/dashboard")}});return document.title="\u767b\u5165 | \u5047\u65b0\u805e\u80a1\u4efd\u6709\u9650\u516c\u53f8",(0,k.jsx)(s.Fragment,{children:(0,k.jsx)("div",{className:"account-pages my-5 pt-sm-5",children:(0,k.jsx)(a.c,{children:(0,k.jsx)(l.c,{className:"justify-content-center",children:(0,k.jsxs)(n.c,{md:8,lg:6,xl:5,children:[(0,k.jsxs)("div",{className:"text-center mb-4",children:[(0,k.jsxs)(f.cH,{to:"/",className:"auth-logo mb-5 d-block",children:[(0,k.jsx)("img",{src:N,alt:"",height:"70",className:"logo logo-dark"}),(0,k.jsx)("img",{src:w,alt:"",height:"70",className:"logo logo-light"})]}),(0,k.jsx)("h4",{children:t("\u5047\u65b0\u805e\u80a1\u4efd\u6709\u9650\u516c\u53f8")}),(0,k.jsxs)("p",{className:"text-muted mb-4",children:[t(""),"."]})]}),(0,k.jsx)(c.c,{children:(0,k.jsxs)(o.c,{className:"p-4",children:[e.error&&(0,k.jsx)(i.c,{color:"danger",children:e.error}),(0,k.jsx)("div",{className:"p-3",children:(0,k.jsxs)(d.c,{onSubmit:E.handleSubmit,children:[(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(u.c,{className:"form-label",children:t("\u8acb\u8f38\u5165\u4f7f\u7528\u8005\u540d\u7a31")}),(0,k.jsxs)(m.c,{className:"mb-3 bg-soft-light rounded-3",children:[(0,k.jsx)("span",{className:"input-group-text text-muted",id:"basic-addon3",children:(0,k.jsx)("i",{className:"ri-user-2-line"})}),(0,k.jsx)(g.c,{type:"text",id:"email",name:"email",className:"form-control form-control-lg border-light bg-soft-light",placeholder:"Enter email",onChange:E.handleChange,onBlur:E.handleBlur,value:E.values.email,invalid:!(!E.touched.email||!E.errors.email)}),E.touched.email&&E.errors.email?(0,k.jsx)(p.c,{type:"invalid",children:E.errors.email}):null]})]}),(0,k.jsx)("div",{className:"d-grid",children:(0,k.jsx)(b.c,{color:"primary",block:!0,className:" waves-effect waves-light",type:"submit",children:t("\u767b\u5165")})})]})})]})})]})})})})})})))},1704:(e,r,t)=>{t.d(r,{c:()=>j});var s=t(9584),a=t(308),l=t.n(a),n=t(6736),c=t.n(n),o=t(5096),i=t(304),d=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},u.apply(this,arguments)}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)t=l[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)t=l[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h={children:l().node,className:l().string,closeClassName:l().string,closeAriaLabel:l().string,color:l().string,cssModule:l().object,fade:l().bool,innerRef:l().oneOfType([l().object,l().string,l().func]),isOpen:l().bool,tag:o.aq,toggle:l().func,transition:l().shape(i.c.propTypes)};function f(e){var r=e.className,t=e.closeClassName,a=e.closeAriaLabel,l=void 0===a?"Close":a,n=e.cssModule,m=e.tag,p=void 0===m?"div":m,h=e.color,f=void 0===h?"success":h,j=e.isOpen,v=void 0===j||j,O=e.toggle,x=e.children,y=e.transition,N=void 0===y?g(g({},i.c.defaultProps),{},{unmountOnExit:!0}):y,w=e.fade,P=void 0===w||w,k=e.innerRef,C=b(e,d),E=(0,o.UR)(c()(r,"alert","alert-".concat(f),{"alert-dismissible":O}),n),S=(0,o.UR)(c()("btn-close",t),n),R=g(g(g({},i.c.defaultProps),N),{},{baseClass:P?N.baseClass:"",timeout:P?N.timeout:0});return s.createElement(i.c,u({},C,R,{tag:p,className:E,in:v,role:"alert",innerRef:k}),O?s.createElement("button",{type:"button",className:S,"aria-label":l,onClick:O}):null,x)}f.propTypes=h;const j=f},6359:(e,r,t)=>{e.exports=t.p+"static/media/logo-dark.f5240afc6ee851482fc6.png"},4340:(e,r,t)=>{e.exports=t.p+"static/media/logo-light.f5240afc6ee851482fc6.png"}}]);