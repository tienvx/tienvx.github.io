(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),p=(n(0),n(252)),i={title:"Test installing drupal on multiple version of php",date:"2014-06-20"},l={permalink:"/2014/06/20/test-installing-drupal-on-multiple-version-of-php",source:"@site/blog/2014-06-20-test-installing-drupal-on-multiple-version-of-php.md",description:'1. vim ~/.phpenv/versions/5.3.28/etc/php.ini pdomysql.defaultsocket="/var/run/mysqld/mysqld.sock"',date:"2014-06-20T00:00:00.000Z",tags:[],title:"Test installing drupal on multiple version of php",readingTime:.375,truncated:!1,prevItem:{title:"Install multiple version of php",permalink:"/2014/06/20/install-multiple-version-of-php"},nextItem:{title:"Debug php from command line",permalink:"/2014/06/03/debug-php-from-command-line"}},a=[],c={rightToc:a};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},'vim ~/.phpenv/versions/5.3.28/etc/php.ini pdo_mysql.default_socket="/var/run/mysqld/mysqld.sock"'),Object(p.b)("li",{parentName:"ol"},"mv ~/.drush/php.ini ~/.drush/php.ini_bak"),Object(p.b)("li",{parentName:"ol"},"cp ~/.phpenv/versions/5.3.28/etc/php.ini ~/.drush/"),Object(p.b)("li",{parentName:"ol"},"php -m | grep intl")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Download php5-intl_5.3.10-1ubuntu3_i386.deb"),Object(p.b)("li",{parentName:"ul"},"extract"),Object(p.b)("li",{parentName:"ul"},"Copy intl.so to ~/.phpenv/versions/5.3.28/lib/php/extensions/no-debug-non-zts-20090626/"),Object(p.b)("li",{parentName:"ul"},"Add this line to the end of ~/.phpenv/versions/5.3.28/etc/php.ini")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"extension=intl.so\n")),Object(p.b)("ol",{start:5},Object(p.b)("li",{parentName:"ol"},"php -m | grep mcrypt")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Download php5-mcrypt_5.3.2-0ubuntu1_i386.deb"),Object(p.b)("li",{parentName:"ul"},"extract"),Object(p.b)("li",{parentName:"ul"},"Copy mcrypt.so to ~/.phpenv/versions/5.3.28/lib/php/extensions/no-debug-non-zts-20090626/"),Object(p.b)("li",{parentName:"ul"},"Add these lines to the end of ~/.phpenv/versions/5.3.28/etc/php.ini")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"[mcrypt]\nextension=mcrypt.so\n")),Object(p.b)("ol",{start:6},Object(p.b)("li",{parentName:"ol"},"Download libicu48_4.8.1.1-3ubuntu0.1_i386.deb and install it")))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||p;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);