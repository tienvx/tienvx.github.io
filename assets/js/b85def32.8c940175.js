"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[1497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),b=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var b=2;b<o;b++)l[b]=n[b];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>b});var r=n(7462),a=(n(7294),n(3905));const o={title:"Install bumblebee on Ubuntu 16.10",authors:"tienvx",date:"2016-10-31"},l=void 0,u={permalink:"/2016/10/31/install-bumblebee-on-ubuntu-16-10",source:"@site/blog/2016-10-31-install-bumblebee-on-ubuntu-16-10.md",title:"Install bumblebee on Ubuntu 16.10",description:"The same as my last post, but we need to install bumblebee from testing ppa manually, because there are no packages for yakkety yet.",date:"2016-10-31T00:00:00.000Z",formattedDate:"October 31, 2016",tags:[],readingTime:.28,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Install bumblebee on Ubuntu 16.10",authors:"tienvx",date:"2016-10-31"},nextItem:{title:"Install bumblebee Ubuntu 16.04.1",permalink:"/2016/10/30/install-bumblebee-ubuntu-16-04-1"}},i={authorsImageUrls:[void 0]},b=[],s={toc:b},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The same as my ",(0,a.kt)("a",{parentName:"p",href:"https://tienxuanvo.wordpress.com/2016/10/30/install-bumblebee-ubuntu-16-04-1/"},"last post"),", but we need to install bumblebee from testing ppa manually, because there are no packages for yakkety yet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir bumblebee-testing\ncd bumblebee-testing\nwget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee-nvidia_3.2.1-96~xenialppa1_amd64.deb\nwget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee_3.2.1-96~xenialppa1_amd64.deb\nsudo dpkg -i *.deb\n")),(0,a.kt)("p",null,"And bumblebee can work fine with steam's games now, no need to update libstdc++ library inside steam folder."))}c.isMDXComponent=!0}}]);