"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[3704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"M\u1ed9t s\u1ed1 command trong Symfony 2",authors:"tienvx",date:"2013-04-07"},l=void 0,p={permalink:"/2013/04/07/mot-so-command-trong-symfony-2",source:"@site/blog/2013-04-07-mot-so-command-trong-symfony-2.md",title:"M\u1ed9t s\u1ed1 command trong Symfony 2",description:"1. cache logs",date:"2013-04-07T00:00:00.000Z",formattedDate:"April 7, 2013",tags:[],readingTime:.55,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"M\u1ed9t s\u1ed1 command trong Symfony 2",authors:"tienvx",date:"2013-04-07"},prevItem:{title:"Default value trong twig",permalink:"/2013/04/07/default-value-trong"},nextItem:{title:"preg_match compilation failed offset 389",permalink:"/2013/04/07/preg_match-compilation-failed-offset-389"}},i={authorsImageUrls:[void 0]},c=[],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cache logs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf app/cache/\\*\nrm -rf app/logs/\\*\nsudo chmod 777 -R app/cache app/logs\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"config visual ",(0,a.kt)("a",{parentName:"p",href:"http://website.com/web/app_dev.php/_configurator/step/0"},"http://website.com/web/app_dev.php/_configurator/step/0"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"parameters.yml:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parameters:\n  database_driver: pdo_mysql\n  database_host: 127.0.0.1\n  database_port: null\n  database_name: db_name\n  database_user: root\n  database_password: null\n  mailer_transport: smtp\n  mailer_host: 127.0.0.1\n  mailer_user: null\n  mailer_password: null\n  locale: en\n  secret: b998a210c4981883d4447fa4a6bea331d\n  database_path: null\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"bundle php")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"app/console generate:bundle --namespace=NameSpace/Bundle --dir=yml --format=yml\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"doctrine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"doctrine:schema:drop --force doctrine:schema:create\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"entities:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'doctrine:generate:entity --entity="NameSpaceBundle:Entity" --fields="title:string body:text tags:text created:datetime updated:datetime"\ndoctrine:generate:entities NameSpace\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"fixtures and migrations")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php app/console doctrine:migrations:diff\nphp app/console doctrine:migrations:migrate\nphp app/console doctrine:fixtures:load\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"assests")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php app/console assets:install web --symlink\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"\u0111\xe1nh d\u1ea5u")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://symfony2admingenerator.org/installation.html"},"http://symfony2admingenerator.org/installation.html")))}u.isMDXComponent=!0}}]);