(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(9),a=(n(0),n(241)),c={title:"Default value trong twig",date:"2013-04-07"},i=[],u={permalink:"/2013/04/07/default-value-trong",source:"@site/blog/2013-04-07-default-value-trong.md",description:"{% set value = value|default('now +1 day'|datetimelocal()) %}",date:"2013-04-07T00:00:00.000Z",tags:[],title:"Default value trong twig",prevItem:{title:"Date time trong PHP",permalink:"/2013/04/07/date-time-trong-php"},nextItem:{title:"M\u1ed9t s\u1ed1 command trong Symfony 2",permalink:"/2013/04/07/mot-so-command-trong-symfony-2"}},l={rightToc:i,metadata:u},p="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"{% set value = value|default('now +1 day'|datetimelocal()) %}"))}f.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?o.a.createElement(d,i({ref:t},l,{components:n})):o.a.createElement(d,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);