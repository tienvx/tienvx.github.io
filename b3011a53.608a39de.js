(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(187)),o={title:"Install Sublime Text 3 on Ubuntu",date:"2013-09-21"},l={permalink:"/2013/09/21/install-sublime-text-3-on-ubuntu",source:"@site/blog/2013-09-21-install-sublime-text-3-on-ubuntu.md",description:"1. Install dev build//www.sublimetext.com/3dev",date:"2013-09-21T00:00:00.000Z",tags:[],title:"Install Sublime Text 3 on Ubuntu",readingTime:.455,truncated:!1,prevItem:{title:"Undefined index: path",permalink:"/2013/10/27/undefined-index-path"},nextItem:{title:"Bash for linux",permalink:"/2013/07/02/bash-cho-linux"}},c=[],b={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install dev build: ",Object(a.b)("a",{parentName:"li",href:"http://www.sublimetext.com/3dev"},"http://www.sublimetext.com/3dev")),Object(a.b)("li",{parentName:"ol"},"cd ~/.config/sublime-text-3/Packages"),Object(a.b)("li",{parentName:"ol"},"git clone git://github.com/wbond/sublime_package_control.git Package","\\"," Control"),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/martomo/SublimeTextXdebug.git"},"https://github.com/martomo/SublimeTextXdebug.git"),' "Xdebug Client"'),Object(a.b)("li",{parentName:"ol"},'git clone -b BH2ST3 git://github.com/facelessuser/BracketHighlighter.git "BracketHighlighter"'),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/spadgos/sublime-jsdocs"},"https://github.com/spadgos/sublime-jsdocs")),Object(a.b)("li",{parentName:"ol"},'git clone -b st3 git://github.com/titoBouzout/SideBarEnhancements.git "SideBarEnhancements"'),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/sergeche/emmet-sublime.git"},"https://github.com/sergeche/emmet-sublime.git")," Emmet"),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/bgreenlee/sublime-github"},"https://github.com/bgreenlee/sublime-github")),Object(a.b)("li",{parentName:"ol"},"wget ",Object(a.b)("a",{parentName:"li",href:"https://github.com/SublimeCodeIntel/SublimeCodeIntel/archive/v2.0.6+st3.tar.gz"},"https://github.com/SublimeCodeIntel/SublimeCodeIntel/archive/v2.0.6+st3.tar.gz")," tar xfvz v2.0.6+st3.tar.gz -C ./ mv SublimeCodeIntel-2.0.6-st3 SublimeCodeIntel"),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/dzhibas/SublimePrettyJson.git"},"https://github.com/dzhibas/SublimePrettyJson.git")),Object(a.b)("li",{parentName:"ol"},"git clone\xa0",Object(a.b)("a",{parentName:"li",href:"https://github.com/srusskih/SublimeJEDI.git"},"https://github.com/srusskih/SublimeJEDI.git"),"\xa0SublimeJEDI"),Object(a.b)("li",{parentName:"ol"},"git clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/akalongman/sublimetext-codeformatter"},"https://github.com/akalongman/sublimetext-codeformatter")),Object(a.b)("li",{parentName:"ol"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo pear install PHP_Beautifier-0.1.15 --alldeps\nsudo vim /usr/bin/php_beautifier\n# line 52\n# error_reporting(E_ALL & ~E_STRICT & ~E_DEPRECATED);\n")),Object(a.b)("p",null,"Refs: ",Object(a.b)("a",{parentName:"p",href:"http://www.henriquebarroso.com/my-top-10sublime-2-plugins/"},"http://www.henriquebarroso.com/my-top-10sublime-2-plugins/")))}u.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,g=m["".concat(o,".").concat(s)]||m[s]||p[s]||a;return n?i.a.createElement(g,l(l({ref:t},b),{},{components:n})):i.a.createElement(g,l({ref:t},b))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);