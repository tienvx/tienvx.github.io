"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[6259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Fix netbeans do not index drupal's files",authors:"tienvx",date:"2015-07-11"},i=void 0,l={permalink:"/2015/07/11/fix-netbeans-do-not-index-drupals-files",source:"@site/blog/2015-07-11-fix-netbeans-do-not-index-drupals-files.md",title:"Fix netbeans do not index drupal's files",description:"When you open a drupal project using netbeans > 7.2.1, netbeans won't index files, so we can not go to functions or refactor code.",date:"2015-07-11T00:00:00.000Z",formattedDate:"July 11, 2015",tags:[],readingTime:.29,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Fix netbeans do not index drupal's files",authors:"tienvx",date:"2015-07-11"},prevItem:{title:"Unison End_of_file exception raised in loading archive",permalink:"/2016/03/08/uniso-end_of_file-exception-raised-in-loading-archive"},nextItem:{title:"Remote debugging PHP with a firewall in the way",permalink:"/2015/07/11/remote-debugging-php-with-a-firewall-in-the-way"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you open a drupal project using netbeans > 7.2.1, netbeans won't index files, so we can not go to functions or refactor code."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.drupal.org/node/1019816"},"Here")," is the way to set up netbeans so that it can recognize drupal's files."),(0,o.kt)("p",null,"Then you have to delete netbeans's cache, so that it can re-index drupal project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf ~/.cache/netbeans/8.0.2\n")))}f.isMDXComponent=!0}}]);