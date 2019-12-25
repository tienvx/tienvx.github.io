(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(242)),p={title:"Install phpdbg on ubuntu 14.04",date:"2014-10-20"},i=[],l={permalink:"/2014/10/20/install-phpdbg-on-ubuntu",source:"@site/blog/2014-10-20-install-phpdbg-on-ubuntu.md",description:"1. Install phpenv",date:"2014-10-20T00:00:00.000Z",tags:[],title:"Install phpdbg on ubuntu 14.04",prevItem:{title:"phpenv, drupalcs in fish shell",permalink:"/2014/12/29/phpenv-drupalcs-in-fish-shell"},nextItem:{title:"PHP Profiler",permalink:"/2014/10/13/php-profiler"}},c={rightToc:i,metadata:l},b="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install phpenv"),Object(a.b)("li",{parentName:"ol"},"Download bison 2.7 and install it ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://mirror.esc7.net/pub/Ubuntu/pool/main/b/bison/"}),"http://mirror.esc7.net/pub/Ubuntu/pool/main/b/bison/")),Object(a.b)("li",{parentName:"ol"})),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cd ~/.phpenv\ncd libexec\nvim phpenv-install\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},'Here is the most important part, we need to add more options to CONFIGURE_OPTIONS CONFIGURE_OPTIONS="--with-readline --enable-phpdbg"'),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"phpenv install php-5.6.2")," At the time this post is published, the latest version of PHP is 5.6.2, you can change that."),Object(a.b)("li",{parentName:"ol"})),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cd /path/to/your/index.php\nphpenv local 5.6.2\n")),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},"Remember to restore configure options if you want to install other version of php via phpenv")))}u.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||a;return n?o.a.createElement(f,i({ref:t},c,{components:n})):o.a.createElement(f,i({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);