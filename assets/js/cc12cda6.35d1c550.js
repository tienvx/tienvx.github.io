"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[4470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),g=o,m=s["".concat(p,".").concat(g)]||s[g]||f[g]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"PHP Profiler",authors:"tienvx",date:"2014-10-13"},l=void 0,i={permalink:"/2014/10/13/php-profiler",source:"@site/blog/2014-10-13-php-profiler.md",title:"PHP Profiler",description:"1. sudo apt-get install python-setuptools",date:"2014-10-13T00:00:00.000Z",formattedDate:"October 13, 2014",tags:[],readingTime:.22,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"PHP Profiler",authors:"tienvx",date:"2014-10-13"},prevItem:{title:"Install phpdbg on ubuntu 14.04",permalink:"/2014/10/20/install-phpdbg-on-ubuntu"},nextItem:{title:"How to install phing/phing in ubuntu 14.04",permalink:"/2014/08/21/how-to-install-phingphing-in-ubuntu-14-04"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"sudo apt-get install python-setuptools"),(0,o.kt)("li",{parentName:"ol"},"sudo easy_install xdebugtoolkit"),(0,o.kt)("li",{parentName:"ol"},"sudo apt-get install graphviz"),(0,o.kt)("li",{parentName:"ol"},"sudo apt-get install php5-xdebug"),(0,o.kt)("li",{parentName:"ol"},"[xdebug]"," xdebug.profiler_enable=1 xdebug.profiler_enable_trigger=1 xdebug.profiler_output_dir=/tmp/xdebug"),(0,o.kt)("li",{parentName:"ol"},"Add a trigger to a page you want to profiling ",(0,o.kt)("a",{parentName:"li",href:"http://example.com/file.php?XDEBUG_PROFILE=1"},"http://example.com/file.php?XDEBUG_PROFILE=1")),(0,o.kt)("li",{parentName:"ol"},"cg2dot /tmp/cachegrind.out.7340 | dot -Tpng -o ~/xdebug-all.png")))}f.isMDXComponent=!0}}]);