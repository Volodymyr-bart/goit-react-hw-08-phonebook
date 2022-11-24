/*! For license information please see 753.fb3be635.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{1245:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7462),o=n(2791),i=n(3366),u=n(8182),c=n(4419),a=n(9853),s=n(5873),f=n(6863),l=n(5878),p=n(1217);function d(e){return(0,p.Z)("MuiSvgIcon",e)}(0,l.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var y=n(184),h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,f.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,a.Z)(n.color))],t["fontSize".concat((0,a.Z)(n.fontSize))]]}})((function(e){var t,n,r,o,i,u,c,a,s,f,l,p,d,y,h,m,v,b=e.theme,g=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=b.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=b.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=b.typography)||null==(u=i.pxToRem)?void 0:u.call(i,20))||"1.25rem",medium:(null==(c=b.typography)||null==(a=c.pxToRem)?void 0:a.call(c,24))||"1.5rem",large:(null==(s=b.typography)||null==(f=s.pxToRem)?void 0:f.call(s,35))||"2.1875rem"}[g.fontSize],color:null!=(l=null==(p=(b.vars||b).palette)||null==(d=p[g.color])?void 0:d.main)?l:{action:null==(y=(b.vars||b).palette)||null==(h=y.action)?void 0:h.active,disabled:null==(m=(b.vars||b).palette)||null==(v=m.action)?void 0:v.disabled,inherit:void 0}[g.color]}})),v=o.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiSvgIcon"}),o=n.children,f=n.className,l=n.color,p=void 0===l?"inherit":l,v=n.component,b=void 0===v?"svg":v,g=n.fontSize,T=void 0===g?"medium":g,w=n.htmlColor,O=n.inheritViewBox,S=void 0!==O&&O,A=n.titleAccess,C=n.viewBox,E=void 0===C?"0 0 24 24":C,j=(0,i.Z)(n,h),k=(0,r.Z)({},n,{color:p,component:b,fontSize:T,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:E}),x={};S||(x.viewBox=E);var P=function(e){var t=e.color,n=e.fontSize,r=e.classes,o={root:["root","inherit"!==t&&"color".concat((0,a.Z)(t)),"fontSize".concat((0,a.Z)(n))]};return(0,c.Z)(o,d,r)}(k);return(0,y.jsxs)(m,(0,r.Z)({as:b,className:(0,u.Z)(P.root,f),focusable:"false",color:w,"aria-hidden":!A||void 0,role:A?"img":void 0,ref:t},x,j,{ownerState:k,children:[o,A?(0,y.jsx)("title",{children:A}):null]}))}));v.muiName="SvgIcon";var b=v;function g(e,t){function n(n,o){return(0,y.jsx)(b,(0,r.Z)({"data-testid":"".concat(t,"Icon"),ref:o},n,{children:e}))}return n.muiName=b.muiName,o.memo(o.forwardRef(n))}},2977:function(e,t,n){"use strict";var r=n(3981);t.Z=r.Z},6258:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2791);var o=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},5783:function(e,t,n){"use strict";var r=n(9723);t.Z=r.Z},8195:function(e,t,n){"use strict";var r=n(7979);t.Z=r.Z},4938:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(885),o=n(2791);var i=function(e){var t=e.controlled,n=e.default,i=(e.name,e.state,o.useRef(void 0!==t).current),u=o.useState(n),c=(0,r.Z)(u,2),a=c[0],s=c[1];return[i?t:a,o.useCallback((function(e){i||s(e)}),[])]}},3026:function(e,t,n){"use strict";var r=n(5721);t.Z=r.Z},9511:function(e,t,n){"use strict";var r=n(8956);t.Z=r.Z},7933:function(e,t,n){"use strict";var r=n(7563);t.Z=r.Z},2763:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,o=n(2791),i=!0,u=!1,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function f(){"hidden"===this.visibilityState&&u&&(i=!0)}function l(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!c[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}var p=function(){var e=o.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",f,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!l(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(u=!0,window.clearTimeout(r),r=window.setTimeout((function(){u=!1}),100),t.current=!1,!0)},ref:e}}},8949:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.d(t,{Z:function(){return r}})},3981:function(e,t,n){"use strict";function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];var c=function(){e.apply(r,i)};clearTimeout(t),t=setTimeout(c,n)}return r.clear=function(){clearTimeout(t)},r}n.d(t,{Z:function(){return r}})},9723:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},7979:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9723);function o(e){return(0,r.Z)(e).defaultView||window}},2971:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},5721:function(e,t,n){"use strict";var r=n(2791),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;t.Z=o},8956:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2791),o=n(5721);function i(e){var t=r.useRef(e);return(0,o.Z)((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},7563:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2791),o=n(2971);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((function(){return t.every((function(e){return null==e}))?null:function(e){t.forEach((function(t){(0,o.Z)(t,e)}))}}),t)}},6248:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return a}});var o=n(885),i=n(2791),u=0;var c=(r||(r=n.t(i,2))).useId;function a(e){if(void 0!==c){var t=c();return null!=e?e:t}return function(e){var t=i.useState(e),n=(0,o.Z)(t,2),r=n[0],c=n[1],a=e||r;return i.useEffect((function(){null==r&&c("mui-".concat(u+=1))}),[r]),a}(e)}},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,c,a=o(e),s=1;s<arguments.length;s++){for(var f in u=Object(arguments[s]))n.call(u,f)&&(a[f]=u[f]);if(t){c=t(u);for(var l=0;l<c.length;l++)r.call(u,c[l])&&(a[c[l]]=u[c[l]])}}return a}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,u){if(e===u)return!0;if(e&&u&&"object"==typeof e&&"object"==typeof u){if(e.constructor!==u.constructor)return!1;var c,a,s,f;if(Array.isArray(e)){if((c=e.length)!=u.length)return!1;for(a=c;0!==a--;)if(!i(e[a],u[a]))return!1;return!0}if(n&&e instanceof Map&&u instanceof Map){if(e.size!==u.size)return!1;for(f=e.entries();!(a=f.next()).done;)if(!u.has(a.value[0]))return!1;for(f=e.entries();!(a=f.next()).done;)if(!i(a.value[1],u.get(a.value[0])))return!1;return!0}if(r&&e instanceof Set&&u instanceof Set){if(e.size!==u.size)return!1;for(f=e.entries();!(a=f.next()).done;)if(!u.has(a.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(u)){if((c=e.length)!=u.length)return!1;for(a=c;0!==a--;)if(e[a]!==u[a])return!1;return!0}if(e.constructor===RegExp)return e.source===u.source&&e.flags===u.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===u.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===u.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(u).length)return!1;for(a=c;0!==a--;)if(!Object.prototype.hasOwnProperty.call(u,s[a]))return!1;if(t&&e instanceof Element)return!1;for(a=c;0!==a--;)if(("_owner"!==s[a]&&"__v"!==s[a]&&"__o"!==s[a]||!e.$$typeof)&&!i(e[s[a]],u[s[a]]))return!1;return!0}return e!==e&&u!==u}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4270:function(e,t,n){"use strict";n.d(t,{q:function(){return fe}});var r=n(2007),o=n.n(r),i=n(9475),u=n.n(i),c=n(77),a=n.n(c),s=n(2791),f=n(1725),l=n.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(h).map((function(e){return h[e]})),"charset"),v="cssText",b="href",g="http-equiv",T="innerHTML",w="itemprop",O="name",S="property",A="rel",C="src",E="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",x="defer",P="encodeSpecialCharacters",I="onChangeClientState",Z="titleTemplate",L=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[h.NOSCRIPT,h.SCRIPT,h.STYLE],N="data-react-helmet",M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=W(e,h.TITLE),n=W(e,Z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=W(e,k);return t||r||void 0},U=function(e){return W(e,I)||function(){}},Y=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Q("Helmet: "+e+' should be of type "Array". Instead found type "'+M(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),u=0;u<i.length;u++){var c=i[u],a=c.toLowerCase();-1===t.indexOf(a)||n===A&&"canonical"===e[n].toLowerCase()||a===A&&"stylesheet"===e[a].toLowerCase()||(n=a),-1===t.indexOf(c)||c!==T&&c!==v&&c!==w||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),u=0;u<i.length;u++){var c=i[u],a=l()({},r[c],o[c]);r[c]=a}return e}),[]).reverse()},W=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){$(t)}),0)}}(),X=function(e){return clearTimeout(e)},G="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,J="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,Q=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,u=e.metaTags,c=e.noscriptTags,a=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,r),oe(h.HTML,o),re(l,p);var d={baseTag:ie(h.BASE,n),linkTags:ie(h.LINK,i),metaTags:ie(h.META,u),noscriptTags:ie(h.NOSCRIPT,c),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),a(e,y,m)},ne=function(e){return Array.isArray(e)?e.join(""):e},re=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),oe(h.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(N),o=r?r.split(","):[],i=[].concat(o),u=Object.keys(t),c=0;c<u.length;c++){var a=u[c],s=t[a]||"";n.getAttribute(a)!==s&&n.setAttribute(a,s),-1===o.indexOf(a)&&o.push(a);var f=i.indexOf(a);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(N):n.getAttribute(N)!==u.join(",")&&n.setAttribute(N,u.join(","))}},ie=function(e,t){var n=document.head||document.querySelector(h.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],u=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(N,"true"),o.some((function(e,t){return u=t,n.isEqualNode(e)}))?o.splice(u,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},ae=function(e,t,n){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[N]=!0,r),i=ce(n,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ue(n),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case d:return{toComponent:function(){return ce(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[N]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===T||n===v){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===v)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",u=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(u?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},se=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,u=e.metaTags,c=e.noscriptTags,a=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ae(h.BASE,t,r),bodyAttributes:ae(p,n,r),htmlAttributes:ae(d,o,r),link:ae(h.LINK,i,r),meta:ae(h.META,u,r),noscript:ae(h.NOSCRIPT,c,r),script:ae(h.SCRIPT,a,r),style:ae(h.STYLE,s,r),title:ae(h.TITLE,{title:l,titleAttributes:y},r)}},fe=function(e){var t,n;return n=t=function(t){function n(){return _(this,n),q(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!a()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(r.type){case h.TITLE:return z({},o,((t={})[r.type]=u,t.titleAttributes=z({},i),t));case h.BODY:return z({},o,{bodyAttributes:z({},i)});case h.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)}(D(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=D(t,["children"]),o=z({},r);return n&&(o=this.mapChildrenToProps(n,o)),s.createElement(e,o)},B(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(u()((function(e){return{baseTag:V([b,E],e),bodyAttributes:Y(p,e),defer:W(e,x),encode:W(e,P),htmlAttributes:Y(d,e),linkTags:K(h.LINK,[A,b],e),metaTags:K(h.META,[O,m,g,S,w],e),noscriptTags:K(h.NOSCRIPT,[T],e),onChangeClientState:U(e),scriptTags:K(h.SCRIPT,[C,T],e),styleTags:K(h.STYLE,[v],e),title:H(e),titleAttributes:Y(y,e)}}),(function(e){ee&&J(ee),e.defer?ee=G((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind},9475:function(e,t,n){"use strict";var r,o=n(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,s=[];function f(){a=e(s.map((function(e){return e.props}))),l.canUseDOM?t(a):n&&(a=n(a))}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return a},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,s=[],e};var u=o.prototype;return u.UNSAFE_componentWillMount=function(){s.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},u.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return u(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(l,"canUseDOM",c),l}}}}]);
//# sourceMappingURL=753.fb3be635.chunk.js.map