(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,s=b["".concat(i,".").concat(f)]||b[f]||d[f]||a;return n?o.a.createElement(s,u(u({ref:t},c),{},{components:n})):o.a.createElement(s,u({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(187)),i={title:"Upgrade xdebug on Ubuntu 14.04",date:"2014-04-03"},u={permalink:"/2014/04/03/upgrade-xdebug-on-ubuntu-14-04",source:"@site/blog/2014-04-03-upgrade-xdebug-on-ubuntu-14-04.md",description:"xdebug 2.2.3 is very buggy on Ubuntu 14.04. We need to upgrade it. Here is how I done:",date:"2014-04-03T00:00:00.000Z",tags:[],title:"Upgrade xdebug on Ubuntu 14.04",readingTime:.275,truncated:!1,prevItem:{title:"Fix Waiting For Connection (netbeans-xdebug) in Netbeans",permalink:"/2014/04/14/fix-waiting-for-connection-netbeans-xdebug-in-netbeans"},nextItem:{title:"Install thelia",permalink:"/2014/03/29/install-thelia"}},p=[],c={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"xdebug 2.2.3 is very buggy on Ubuntu 14.04. We need to upgrade it. Here is how I done:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"php -i > ~/phpinfo"),Object(a.b)("li",{parentName:"ol"},"Copy content of phpinfo and paste into\xa0",Object(a.b)("a",{parentName:"li",href:"http://xdebug.org/wizard.php"},"http://xdebug.org/wizard.php")),Object(a.b)("li",{parentName:"ol"},"Follow those steps:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Download\xa0",Object(a.b)("a",{parentName:"li",href:"http://xdebug.org/files/xdebug-2.3.3.tgz"},"xdebug-2.3.3.tgz")),Object(a.b)("li",{parentName:"ol"},"tar -xvf xdebug-2.3.3.tgz"),Object(a.b)("li",{parentName:"ol"},"cd xdebug-2.3.3/"),Object(a.b)("li",{parentName:"ol"},"phpize && ./configure && make"),Object(a.b)("li",{parentName:"ol"},"sudo cp modules/xdebug.so /usr/lib/php5/20131226/")))))}l.isMDXComponent=!0}}]);