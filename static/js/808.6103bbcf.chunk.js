"use strict";(self.webpackChunkieltsexam=self.webpackChunkieltsexam||[]).push([[808],{8069:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(9439),a=t(2791),i=t(8008),u=t(9823),c=t(1087),o=t(27),l=t(184),s=function(n){var e=localStorage.getItem("user");return(0,l.jsx)(l.Fragment,{children:f&&f.length>0?(0,l.jsx)(l.Fragment,{children:f.map((function(t,r){return(0,l.jsx)("li",{className:t.cName,onClick:n.handleMenuClick,children:(0,l.jsx)(c.rU,{to:t.path,children:(0,l.jsx)("span",{className:"sidebar-title",children:"Profile"===t.title&&null===e||"Logout"===t.title&&null===e||"Login"===t.title&&null!==e?"":t.title})})},r)}))}):(0,l.jsx)("h1",{children:"Something went worng"})})},f=[{title:"Home",path:"/",cName:"nav-text"},{title:"Login",path:"/login",cName:"nav-text"},{title:"Profile",path:"/profile",cName:"nav-text"},{title:"Logout",path:(localStorage.removeItem("user"),void(0,o.uX)("/login")),cName:"nav-text"}],d=function(){var n=(0,a.useState)(!1),e=(0,r.Z)(n,2),t=e[0],o=e[1],f=function(){o(!t)};return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsxs)("div",{className:"navbar",children:[(0,l.jsx)("h1",{children:"IELTS Exam"}),(0,l.jsx)(c.rU,{className:"menu-bars",children:t?(0,l.jsx)(u.Z,{onClick:f,className:"menu-bars-icon",fontSize:"large"}):(0,l.jsx)(i.Z,{onClick:f,className:"menu-bars-icon",fontSize:"large"})})]}),(0,l.jsx)("div",{className:t?"navbar-background":"",children:(0,l.jsx)("nav",{className:t?"nav-menu active":"nav-menu",children:(0,l.jsxs)("ul",{className:"nav-menu-items",children:[(0,l.jsx)("li",{className:"navbar-toggle"}),(0,l.jsx)(s,{handleMenuClick:f})]})})})]})}},9823:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),u=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=u},8008:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),u=(0,a.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");e.Z=u},4036:function(n,e,t){var r=t(7312);e.Z=r.Z},9683:function(n,e,t){var r=t(8956);e.Z=r.Z},2071:function(n,e,t){var r=t(7563);e.Z=r.Z},3031:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a=t(2791),i=!0,u=!1,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(n){n.metaKey||n.altKey||n.ctrlKey||(i=!0)}function l(){i=!1}function s(){"hidden"===this.visibilityState&&u&&(i=!0)}function f(n){var e=n.target;try{return e.matches(":focus-visible")}catch(t){}return i||function(n){var e=n.type,t=n.tagName;return!("INPUT"!==t||!c[e]||n.readOnly)||"TEXTAREA"===t&&!n.readOnly||!!n.isContentEditable}(e)}var d=function(){var n=a.useCallback((function(n){var e;null!=n&&((e=n.ownerDocument).addEventListener("keydown",o,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",s,!0))}),[]),e=a.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(n){return!!f(n)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(u=!0,window.clearTimeout(r),r=window.setTimeout((function(){u=!1}),100),e.current=!1,!0)},ref:n}}},2971:function(n,e,t){function r(n,e){"function"===typeof n?n(e):n&&(n.current=e)}t.d(e,{Z:function(){return r}})},5721:function(n,e,t){var r=t(2791),a="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;e.Z=a},8956:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(2791),a=t(5721);function i(n){var e=r.useRef(n);return(0,a.Z)((function(){e.current=n})),r.useCallback((function(){return e.current.apply(void 0,arguments)}),[])}},7563:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(2791),a=t(2971);function i(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return r.useMemo((function(){return e.every((function(n){return null==n}))?null:function(n){e.forEach((function(e){(0,a.Z)(e,n)}))}}),e)}}}]);
//# sourceMappingURL=808.6103bbcf.chunk.js.map