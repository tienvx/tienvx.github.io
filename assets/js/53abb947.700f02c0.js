"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[9355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Exclude directory from grep search",authors:"tienvx",date:"2014-05-07"},i=void 0,c={permalink:"/2014/05/07/exclude-directory-from-grep-search",source:"@site/blog/2014-05-07-exclude-directory-from-grep-search.md",title:"Exclude directory from grep search",description:'1. If we want to exclude abc/ and xyz/ directory (in root directory) form grep\'s results we can do this: grep -rn --exclude-dir={abc,xyz} "text to find"',date:"2014-05-07T00:00:00.000Z",formattedDate:"May 7, 2014",tags:[],readingTime:.25,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Exclude directory from grep search",authors:"tienvx",date:"2014-05-07"},prevItem:{title:"Debug php from command line",permalink:"/2014/06/03/debug-php-from-command-line"},nextItem:{title:"Fix Waiting For Connection (netbeans-xdebug) in Netbeans",permalink:"/2014/04/14/fix-waiting-for-connection-netbeans-xdebug-in-netbeans"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'If we want to exclude abc/ and xyz/ directory (in root directory) form grep\'s results we can do this: grep -rn --exclude-dir={abc,xyz} "text to find"'),(0,o.kt)("li",{parentName:"ol"},"If we want to exclude abc/def/some","_","thing","_","special/ghi...: grep -rn --exclude-dir={some","_","thing","_",'special} "text to find"'),(0,o.kt)("li",{parentName:"ol"},"Do you know how to exclude the whole directory path?")))}d.isMDXComponent=!0}}]);