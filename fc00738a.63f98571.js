(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),c=n(9),a=(n(0),n(252)),o={title:"Graphml c\xf3 weight trong graphwalker",date:"2012-08-19"},i={permalink:"/2012/08/19/ve-va-su-dung-graphml-co-weight-trong-graphwalker",source:"@site/blog/2012-08-19-ve-va-su-dung-graphml-co-weight-trong-graphwalker.md",description:"1. \u0110\u1ec3 v\u1ebd graphml, ta\xa0s\u1eed\xa0d\u1ee5ng\xa0yEd. C\xe1ch c\xe0i\xa0yEd h\u01a1i r\u1eafc r\u1ed1i t\xed, t\u01b0\u01a1ng\xa0t\u1ef1 nh\u01b0 Virtualbox, b\u1ea1n v\xe0o category Linux\xa0\u0111\u1ec3 bi\u1ebft th\xeam c\xe1ch c\xe0i.",date:"2012-08-19T00:00:00.000Z",tags:[],title:"Graphml c\xf3 weight trong graphwalker",readingTime:.895,truncated:!1,prevItem:{title:"Hello World trong Zend Framework 2",permalink:"/2012/08/19/hello-world-trong-zend-framework-2"},nextItem:{title:"Selenium 2.25 v\xe0 Netbeans 7.2",permalink:"/2012/08/19/selenium-2-25-va-netbeans-7-2"}},l=[],h={rightToc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u0110\u1ec3 v\u1ebd graphml, ta\xa0s\u1eed\xa0d\u1ee5ng\xa0yEd. C\xe1ch c\xe0i\xa0yEd h\u01a1i r\u1eafc r\u1ed1i t\xed, t\u01b0\u01a1ng\xa0t\u1ef1 nh\u01b0 Virtualbox, b\u1ea1n v\xe0o category Linux\xa0\u0111\u1ec3 bi\u1ebft th\xeam c\xe1ch c\xe0i.")),Object(a.b)("p",null,"trong yEd, \u1edf m\u1ed7i nh\xe1nh (edge), ta ch\u1ecdn properties, r\u1ed3i th\xeam d\xf2ng weight=0,7"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/blog/screenshot-properties.png",alt:"Edit weight in yEd"}))),Object(a.b)("p",null,"weight ch\u1ea1y t\u1eeb 0 -> 1. 1 l\xe0 cao nh\u1ea5t, t\u1ee9c l\xe0 x\xe1c su\u1ea5t ch\u1ea1y qua c\u1ea1nh n\xe0y lu\xf4n l\xe0 100%.\xa0\u1edf tr\xean x\xe1c su\u1ea5t ch\u1ea1y qua c\u1ea1nh\xa0e_SearchBooks ch\u1ec9 l\xe0 70%."),Object(a.b)("p",null,"ch\xfa\xa0\xfd l\xe0 ta kh\xf4ng c\u1ea7n\xa0edit t\u1ea5t c\u1ea3 c\xe1c c\u1ea1nh (edge), m\xe0 ch\u1ec9\xa0edit m\u1ed9t s\u1ed1 c\u1ea1nh th\xf4i, c\xe1c c\u1ea1nh c\xf2n l\u1ea1i share nhau s\u1ed1 % c\xf2n l\u1ea1i."),Object(a.b)("p",null,"2.\xa0\u0111\u1ec3 s\u1eed\xa0d\u1ee5ng\xa0weight hi\u1ec7u qu\u1ea3 nh\u1ea5t, ta n\xean test\xa0offline."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"java -jar graphwalker.jar offline -f model-with-weight.graphml -g RANDOM -s TEST_LENGTH:100 -w\n")),Object(a.b)("p",null,"Tuy nhi\xean c\xf3 v\u1ebb nh\u01b0\xa0graphwalker kh\xf4ng th\xe2n thi\u1ec7n l\u1eafm khi xu\u1ea5t log cho\xa0weight. Ta kh\xf4ng bi\u1ebft t\u1ec9 l\u1ec7 ch\u1ea1y th\u1ef1c t\u1ebf qua t\u1eebng c\u1ea1nh nh\u01b0 th\u1ebf n\xe0o."),Object(a.b)("p",null,"B\u1ea1n n\xean cho TEST_LENGTH l\u1edbn\xa0\u0111\u1ec3 t\u1ec9 l\u1ec7 ch\u1ea1y qua c\xe1c c\u1ea1nh s\xe1t h\u01a1n."),Object(a.b)("p",null,"Ch\xfa\xa0\xfd tham s\u1ed1 -w, tham s\u1ed1 n\xe0y n\xf3i r\u1eb1ng s\u1eed\xa0d\u1ee5ng\xa0weight khi generate testcase. Trong trang ch\u1ee7 c\u1ee7a\xa0graphwalker kh\xf4ng c\xf3 n\xf3i t\u1edbi v\u1ea5n\xa0\u0111\u1ec1 nay."))}p.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h=c.a.createContext({}),p=function(e){var t=c.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(h.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,s=u["".concat(o,".").concat(b)]||u[b]||g[b]||a;return n?c.a.createElement(s,i(i({ref:t},h),{},{components:n})):c.a.createElement(s,i({ref:t},h))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var h=2;h<a;h++)o[h]=n[h];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);