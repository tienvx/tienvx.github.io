(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(9),a=(t(0),t(252)),i={title:"Annotation trong Doctrine 2",date:"2013-04-07"},c={permalink:"/2013/04/07/annotation-trong-doctrine-2",source:"@site/blog/2013-04-07-annotation-trong-doctrine-2.md",description:"`",date:"2013-04-07T00:00:00.000Z",tags:[],title:"Annotation trong Doctrine 2",readingTime:.42,truncated:!1,prevItem:{title:"Tham s\u1ed1 trong hook_field_update",permalink:"/2013/04/14/tham-so-trong-hook_field_update"},nextItem:{title:"C\xe0i bundle cho Symfony 2 m\u1ed9t c\xe1ch th\u1ee7 c\xf4ng",permalink:"/2013/04/07/cai-bundle-cho-symfony-2-mot-cach-thu-cong"}},s=[],u={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'/**\n * @Assert\\\\NotBlank()\n */\n\n/**\n * @Assert\\\\Choice(\n *\xa0\xa0\xa0\xa0 choices = { "male", "female" },\n *\xa0\xa0\xa0\xa0 message = "Choose a valid gender."\n * )\n */\n\n/**\n * @Assert\\\\Choice({"male", "female"})\n */\n\n/**\n * @Assert\\\\NotBlank()\n * @Assert\\\\Length(min = "3")\n */\n\n/**\n * @Assert\\\\True(message = "The password cannot match your first name")\n */\npublic function isPasswordLegal() { // return true or false }\n\n/**\n * @Assert\\\\Email(groups={"registration"})\n */\nprivate $email;\n\n/**\n * @Assert\\\\NotBlank(groups={"registration"})\n * @Assert\\\\Length(min=7, groups={"registration"})\n */\nprivate $password;\n\n/**\n * @Assert\\\\Length(min = "2")\n */\nprivate $city;\n')))}p.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(i,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);