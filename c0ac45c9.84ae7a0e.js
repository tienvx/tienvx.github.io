(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(187)),a={title:"Unison End_of_file exception raised in loading archive",date:"2016-03-08"},c={permalink:"/2016/03/08/uniso-end_of_file-exception-raised-in-loading-archive",source:"@site/blog/2016-03-08-uniso-end_of_file-exception-raised-in-loading-archive.md",description:"Solution:",date:"2016-03-08T00:00:00.000Z",tags:[],title:"Unison End_of_file exception raised in loading archive",readingTime:.2,truncated:!1,prevItem:{title:"Use fcitx in hipchat on ubuntu",permalink:"/2016/10/30/use-fcitx-in-hipchat-on-ubuntu"},nextItem:{title:"Fix netbeans do not index drupal's files",permalink:"/2015/07/11/fix-netbeans-do-not-index-drupals-files"}},l=[],u={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Solution:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to ~/.unison on your local and delete all cache files. e.g.\xa0ar82caecb482c04a8d000cc5f562acde60 and\xa0fp82caecb482c04a8d000cc5f562acde60"),Object(i.b)("li",{parentName:"ol"},"Go to ~/.unison on your server and delete all cache files, just like above"),Object(i.b)("li",{parentName:"ol"},"Delete unison.log if you want (This file is big)")))}p.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,b=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);