"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[4011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Unison end of file exception",authors:"tienvx",date:"2015-06-12"},a=void 0,l={permalink:"/2015/06/12/unison-end-of-file-exception",source:"@site/blog/2015-06-12-unison-end-of-file-exception.md",title:"Unison end of file exception",description:'When your computer crash while a unison\'s profile is open, you will see this error: "Endoffile exception raised in loading archive" (this indicates a bug!)',date:"2015-06-12T00:00:00.000Z",formattedDate:"June 12, 2015",tags:[],readingTime:.26,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Unison end of file exception",authors:"tienvx",date:"2015-06-12"},prevItem:{title:"Remote debugging PHP with a firewall in the way",permalink:"/2015/07/11/remote-debugging-php-with-a-firewall-in-the-way"},nextItem:{title:"Fix can not mount /dev/loop0",permalink:"/2015/04/29/fix-can-not-mount-devloop0"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'When your computer crash while a unison\'s profile is open, you will see this error: "End_of_file exception raised in loading archive" (this indicates a bug!)'),(0,o.kt)("p",null,"You can run the command bellow to make it fix the profile, and then you can open the profile again without the error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unison-gtk -ignorearchives\n")))}f.isMDXComponent=!0}}]);