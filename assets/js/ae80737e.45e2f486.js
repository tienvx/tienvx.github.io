"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[7401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=o,h=s["".concat(i,".").concat(b)]||s[b]||m[b]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Install phpdbg on ubuntu 14.04",authors:"tienvx",date:"2014-10-20"},l=void 0,p={permalink:"/2014/10/20/install-phpdbg-on-ubuntu",source:"@site/blog/2014-10-20-install-phpdbg-on-ubuntu.md",title:"Install phpdbg on ubuntu 14.04",description:"1. Install phpenv",date:"2014-10-20T00:00:00.000Z",formattedDate:"October 20, 2014",tags:[],readingTime:.42,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Install phpdbg on ubuntu 14.04",authors:"tienvx",date:"2014-10-20"},prevItem:{title:"phpenv, drupalcs in fish shell",permalink:"/2014/12/29/phpenv-drupalcs-in-fish-shell"},nextItem:{title:"PHP Profiler",permalink:"/2014/10/13/php-profiler"}},i={authorsImageUrls:[void 0]},u=[],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install phpenv"),(0,o.kt)("li",{parentName:"ol"},"Download bison 2.7 and install it ",(0,o.kt)("a",{parentName:"li",href:"http://mirror.esc7.net/pub/Ubuntu/pool/main/b/bison/"},"http://mirror.esc7.net/pub/Ubuntu/pool/main/b/bison/")),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/.phpenv\ncd libexec\nvim phpenv-install\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Here is the most important part, we need to add more options to CONFIGURE_OPTIONS CONFIGURE_OPTIONS="--with-readline --enable-phpdbg"'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"phpenv install php-5.6.2")," At the time this post is published, the latest version of PHP is 5.6.2, you can change that."),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /path/to/your/index.php\nphpenv local 5.6.2\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Remember to restore configure options if you want to install other version of php via phpenv")))}m.isMDXComponent=!0}}]);