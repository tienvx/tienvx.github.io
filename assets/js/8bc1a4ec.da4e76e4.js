"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[5705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Bash for linux",authors:"tienvx",date:"2013-07-02"},i=void 0,l={permalink:"/2013/07/02/bash-cho-linux",source:"@site/blog/2013-07-02-bash-cho-linux.md",title:"Bash for linux",description:"1. mv /.bashrc.bak.123456-789 .bashrc",date:"2013-07-02T00:00:00.000Z",formattedDate:"July 2, 2013",tags:[],readingTime:.13,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Bash for linux",authors:"tienvx",date:"2013-07-02"},prevItem:{title:"Install Sublime Text 3 on Ubuntu",permalink:"/2013/09/21/install-sublime-text-3-on-ubuntu"},nextItem:{title:"Episode 5: Create new Platform, new Site",permalink:"/2013/05/17/episode-5-create-new-platform-new-site"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"mv /.bashrc.bak.123456-789 .bashrc"),(0,a.kt)("li",{parentName:"ol"},"rm -rf abc/"),(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'update-alternatives --install "/usr/bin/drush" "drush" "/var/aegir/drush/drush" 2\nupdate-alternatives --install "/usr/bin/drush" "drush" "/var/aegir/drush6/drush" 1\nupdate-alternatives --config drush\n')))}f.isMDXComponent=!0}}]);