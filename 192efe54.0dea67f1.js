(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),a=(r(0),r(252)),c={title:"Ssl trong Symfony 2",date:"2013-04-07"},i={permalink:"/2013/04/07/ssl-trong-symfony-2",source:"@site/blog/2013-04-07-ssl-trong-symfony-2.md",description:"1. Start server trong xampp",date:"2013-04-07T00:00:00.000Z",tags:[],title:"Ssl trong Symfony 2",readingTime:.315,truncated:!1,prevItem:{title:"Routing Auth",permalink:"/2013/04/07/routing-auth"},nextItem:{title:"Unit Symfony 2 project v\u1edbi netbeans 7",permalink:"/2013/04/07/unit-symfony-2-project-voi-netbeans-7"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Start server trong xampp")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"start xampp sudo /opt/lampp/lampp startssl\n\nstop xampp sudo /opt/lampp/lampp stopssl\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Trong Route symfony 2")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"....\nprefix:\xa0\xa0 /admin\nrequirements: _\nscheme:\xa0 https\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Trong Virtual host")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'<VirtualHost 127.0.0.1:443>\n  ServerAdmin admin@website.com\n  DocumentRoot "/home/me/website/web"\n  ServerName website.com\n  ErrorLog "/home/me/website/error_log"\n  CustomLog "/home/me/website/access_log" common\n  <Directory "/home/me/website/web">\n    Require all granted\n  </Directory>\n  SSLEngine on\n  SSLCertificateFile "/opt/lampp/etc/ssl.crt/server.crt"\n  SSLCertificateKeyFile "/opt/lampp/etc/ssl.key/server.key"\n</VirtualHost>\n')))}s.isMDXComponent=!0},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);