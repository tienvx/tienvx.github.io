"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[6665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),b=i,g=c["".concat(u,".").concat(b)]||c[b]||p[b]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const a={title:"Install Sublime Text 3 on Ubuntu",authors:"tienvx",date:"2013-09-21"},o=void 0,l={permalink:"/2013/09/21/install-sublime-text-3-on-ubuntu",source:"@site/blog/2013-09-21-install-sublime-text-3-on-ubuntu.md",title:"Install Sublime Text 3 on Ubuntu",description:"1. Install dev build//www.sublimetext.com/3dev",date:"2013-09-21T00:00:00.000Z",formattedDate:"September 21, 2013",tags:[],readingTime:.455,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Install Sublime Text 3 on Ubuntu",authors:"tienvx",date:"2013-09-21"},prevItem:{title:"Undefined index: path",permalink:"/2013/10/27/undefined-index-path"},nextItem:{title:"Bash for linux",permalink:"/2013/07/02/bash-cho-linux"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install dev build: ",(0,i.kt)("a",{parentName:"li",href:"http://www.sublimetext.com/3dev"},"http://www.sublimetext.com/3dev")),(0,i.kt)("li",{parentName:"ol"},"cd ~/.config/sublime-text-3/Packages"),(0,i.kt)("li",{parentName:"ol"},"git clone git://github.com/wbond/sublime_package_control.git Package","\\"," Control"),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/martomo/SublimeTextXdebug.git"},"https://github.com/martomo/SublimeTextXdebug.git"),' "Xdebug Client"'),(0,i.kt)("li",{parentName:"ol"},'git clone -b BH2ST3 git://github.com/facelessuser/BracketHighlighter.git "BracketHighlighter"'),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spadgos/sublime-jsdocs"},"https://github.com/spadgos/sublime-jsdocs")),(0,i.kt)("li",{parentName:"ol"},'git clone -b st3 git://github.com/titoBouzout/SideBarEnhancements.git "SideBarEnhancements"'),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sergeche/emmet-sublime.git"},"https://github.com/sergeche/emmet-sublime.git")," Emmet"),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bgreenlee/sublime-github"},"https://github.com/bgreenlee/sublime-github")),(0,i.kt)("li",{parentName:"ol"},"wget ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SublimeCodeIntel/SublimeCodeIntel/archive/v2.0.6+st3.tar.gz"},"https://github.com/SublimeCodeIntel/SublimeCodeIntel/archive/v2.0.6+st3.tar.gz")," tar xfvz v2.0.6+st3.tar.gz -C ./ mv SublimeCodeIntel-2.0.6-st3 SublimeCodeIntel"),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dzhibas/SublimePrettyJson.git"},"https://github.com/dzhibas/SublimePrettyJson.git")),(0,i.kt)("li",{parentName:"ol"},"git clone\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/srusskih/SublimeJEDI.git"},"https://github.com/srusskih/SublimeJEDI.git"),"\xa0SublimeJEDI"),(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/akalongman/sublimetext-codeformatter"},"https://github.com/akalongman/sublimetext-codeformatter")),(0,i.kt)("li",{parentName:"ol"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo pear install PHP_Beautifier-0.1.15 --alldeps\nsudo vim /usr/bin/php_beautifier\n# line 52\n# error_reporting(E_ALL & ~E_STRICT & ~E_DEPRECATED);\n")),(0,i.kt)("p",null,"Refs: ",(0,i.kt)("a",{parentName:"p",href:"http://www.henriquebarroso.com/my-top-10sublime-2-plugins/"},"http://www.henriquebarroso.com/my-top-10sublime-2-plugins/")))}p.isMDXComponent=!0}}]);