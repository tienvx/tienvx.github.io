(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(252)),i={title:"PHP Profiler",date:"2014-10-13"},p={permalink:"/2014/10/13/php-profiler",source:"@site/blog/2014-10-13-php-profiler.md",description:"1. sudo apt-get install python-setuptools",date:"2014-10-13T00:00:00.000Z",tags:[],title:"PHP Profiler",readingTime:.22,truncated:!1,prevItem:{title:"Install phpdbg on ubuntu 14.04",permalink:"/2014/10/20/install-phpdbg-on-ubuntu"},nextItem:{title:"How to install phing/phing in ubuntu 14.04",permalink:"/2014/08/21/how-to-install-phingphing-in-ubuntu-14-04"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"sudo apt-get install python-setuptools"),Object(a.b)("li",{parentName:"ol"},"sudo easy_install xdebugtoolkit"),Object(a.b)("li",{parentName:"ol"},"sudo apt-get install graphviz"),Object(a.b)("li",{parentName:"ol"},"sudo apt-get install php5-xdebug"),Object(a.b)("li",{parentName:"ol"},"[xdebug]"," xdebug.profiler_enable=1 xdebug.profiler_enable_trigger=1 xdebug.profiler_output_dir=/tmp/xdebug"),Object(a.b)("li",{parentName:"ol"},"Add a trigger to a page you want to profiling ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://example.com/file.php?XDEBUG_PROFILE=1"}),"http://example.com/file.php?XDEBUG_PROFILE=1")),Object(a.b)("li",{parentName:"ol"},"cg2dot /tmp/cachegrind.out.7340 | dot -Tpng -o ~/xdebug-all.png")))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(i,".").concat(s)]||b[s]||f[s]||a;return n?o.a.createElement(d,p(p({ref:t},c),{},{components:n})):o.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);