(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(187)),c={title:"M\u1ed9t s\u1ed1 command trong Symfony 2",date:"2013-04-07"},p={permalink:"/2013/04/07/mot-so-command-trong-symfony-2",source:"@site/blog/2013-04-07-mot-so-command-trong-symfony-2.md",description:"1. cache logs",date:"2013-04-07T00:00:00.000Z",tags:[],title:"M\u1ed9t s\u1ed1 command trong Symfony 2",readingTime:.55,truncated:!1,prevItem:{title:"Default value trong twig",permalink:"/2013/04/07/default-value-trong"},nextItem:{title:"preg_match compilation failed offset 389",permalink:"/2013/04/07/preg_match-compilation-failed-offset-389"}},l=[],i={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"cache logs")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"rm -rf app/cache/\\*\nrm -rf app/logs/\\*\nsudo chmod 777 -R app/cache app/logs\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"config visual ",Object(o.b)("a",{parentName:"p",href:"http://website.com/web/app_dev.php/_configurator/step/0"},"http://website.com/web/app_dev.php/_configurator/step/0"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"parameters.yml:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"parameters:\n  database_driver: pdo_mysql\n  database_host: 127.0.0.1\n  database_port: null\n  database_name: db_name\n  database_user: root\n  database_password: null\n  mailer_transport: smtp\n  mailer_host: 127.0.0.1\n  mailer_user: null\n  mailer_password: null\n  locale: en\n  secret: b998a210c4981883d4447fa4a6bea331d\n  database_path: null\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"bundle php")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"app/console generate:bundle --namespace=NameSpace/Bundle --dir=yml --format=yml\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"doctrine")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"doctrine:schema:drop --force doctrine:schema:create\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"entities:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'doctrine:generate:entity --entity="NameSpaceBundle:Entity" --fields="title:string body:text tags:text created:datetime updated:datetime"\ndoctrine:generate:entities NameSpace\n')),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"fixtures and migrations")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"php app/console doctrine:migrations:diff\nphp app/console doctrine:migrations:migrate\nphp app/console doctrine:fixtures:load\n")),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"assests")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"php app/console assets:install web --symlink\n")),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"\u0111\xe1nh d\u1ea5u")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://symfony2admingenerator.org/installation.html"},"http://symfony2admingenerator.org/installation.html")))}b.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(d,p(p({ref:t},i),{},{components:n})):a.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);