(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(9),o=(n(0),n(252)),u={title:"Install bumblebee on Ubuntu 16.10",date:"2016-10-31"},b={permalink:"/2016/10/31/install-bumblebee-on-ubuntu-16-10",source:"@site/blog/2016-10-31-install-bumblebee-on-ubuntu-16-10.md",description:"The same as my last post, but we need to install bumblebee from testing ppa manually, because there are no packages for yakkety yet.",date:"2016-10-31T00:00:00.000Z",tags:[],title:"Install bumblebee on Ubuntu 16.10",readingTime:.28,truncated:!1,nextItem:{title:"Install bumblebee Ubuntu 16.04.1",permalink:"/2016/10/30/install-bumblebee-ubuntu-16-04-1"}},l=[],i={rightToc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The same as my ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tienxuanvo.wordpress.com/2016/10/30/install-bumblebee-ubuntu-16-04-1/"}),"last post"),", but we need to install bumblebee from testing ppa manually, because there are no packages for yakkety yet."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir bumblebee-testing\ncd bumblebee-testing\nwget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee-nvidia_3.2.1-96~xenialppa1_amd64.deb\nwget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee_3.2.1-96~xenialppa1_amd64.deb\nsudo dpkg -i *.deb\n")),Object(o.b)("p",null,"And bumblebee can work fine with steam's games now, no need to update libstdc++ library inside steam folder."))}c.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(f,b(b({ref:t},i),{},{components:n})):a.a.createElement(f,b({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,u[1]=b;for(var i=2;i<o;i++)u[i]=n[i];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);