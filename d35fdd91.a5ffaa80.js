(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(252)),p={title:"How to install phing/phing in ubuntu 14.04",date:"2014-08-21"},i={permalink:"/2014/08/21/how-to-install-phingphing-in-ubuntu-14-04",source:"@site/blog/2014-08-21-how-to-install-phingphing-in-ubuntu-14-04.md",description:"1. Upgrade php5.5 http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/",date:"2014-08-21T00:00:00.000Z",tags:[],title:"How to install phing/phing in ubuntu 14.04",readingTime:.175,truncated:!1,prevItem:{title:"PHP Profiler",permalink:"/2014/10/13/php-profiler"},nextItem:{title:"Install Zero MQ on Ubuntu",permalink:"/2014/07/16/install-zero-mq-on-ubuntu"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Upgrade php5.5 ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/"}),"http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/")),Object(o.b)("li",{parentName:"ol"},"sudo pear install channel://",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://pear.php.net/VersionControl_SVN-0.5.1"}),"pear.php.net/VersionControl_SVN-0.5.1")),Object(o.b)("li",{parentName:"ol"},"sudo pear install channel://",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://pear.php.net/VersionControl_Git-0.4.4"}),"pear.php.net/VersionControl_Git-0.4.4")),Object(o.b)("li",{parentName:"ol"},"sudo pear install channel://",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://pear.php.net/Services_Amazon_S3-0.4.0"}),"pear.php.net/Services_Amazon_S3-0.4.0")),Object(o.b)("li",{parentName:"ol"},"sudo pear install channel://",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://pear.php.net/XML_Serializer-0.20.2"}),"pear.php.net/XML_Serializer-0.20.2")),Object(o.b)("li",{parentName:"ol"},"sudo pear install pear/PHP_CodeSniffer"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"sudo pear install --alldeps phing/phing"))))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(p,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);