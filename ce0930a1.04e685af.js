(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{219:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"rightToc",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"default",(function(){return l}));var r=n(1),a=n(9),i=(n(0),n(241)),o={title:"Use fcitx in hipchat on ubuntu",date:"2016-10-30"},c=[],u={permalink:"/2016/10/30/use-fcitx-in-hipchat-on-ubuntu",source:"@site/blog/2016-10-30-use-fcitx-in-hipchat-on-ubuntu.md",description:"In my company, we use Hipchat to communicate while we work. But on my machine (Ubuntu 16.04.1) I can not type my native language (Vietnamese). \xa0That is because I switch from ibus to fcitx (there are lot of [bug](http://www.nerdyweekly.com/posts/ibus-is-dead-to-me-use-fcitx-instead-vi/) in ibus these days), and unfortunately, Hipchat [only support ibus](https://jira.atlassian.com/browse/HCPUB-1702). I used to use Hipchat [web](https://go1.hipchat.com/chat) as an alternative. But recently I [find out](http://d.sunnyone.org/2014/09/linuxhipchatubuntu-qt5.html) I can make Hipchat work with fcitx, with a simple command: `sudo ln -s /usr/lib/x86_64-linux-gnu/qt5/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so /opt/HipChat4/lib/plugins/platforminputcontexts` Hope this help some one.",date:"2016-10-30T00:00:00.000Z",tags:[],title:"Use fcitx in hipchat on ubuntu",prevItem:{title:"Install bumblebee Ubuntu 16.04.1",permalink:"/2016/10/30/install-bumblebee-ubuntu-16-04-1"},nextItem:{title:"Unison End_of_file exception raised in loading archive",permalink:"/2016/03/08/uniso-end_of_file-exception-raised-in-loading-archive"}},p={rightToc:c,metadata:u},s="wrapper";function l(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)(s,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In my company, we use Hipchat to communicate while we work. But on my machine (Ubuntu 16.04.1) I can not type my native language (Vietnamese). \xa0That is because I switch from ibus to fcitx (there are lot of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.nerdyweekly.com/posts/ibus-is-dead-to-me-use-fcitx-instead-vi/"}),"bug")," in ibus these days), and unfortunately, Hipchat ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jira.atlassian.com/browse/HCPUB-1702"}),"only support ibus"),". I used to use Hipchat ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://go1.hipchat.com/chat"}),"web")," as an alternative. But recently I ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://d.sunnyone.org/2014/09/linuxhipchatubuntu-qt5.html"}),"find out")," I can make Hipchat work with fcitx, with a simple command: ",Object(i.b)("inlineCode",{parentName:"p"},"sudo ln -s /usr/lib/x86_64-linux-gnu/qt5/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so /opt/HipChat4/lib/plugins/platforminputcontexts")," Hope this help some one."))}l.isMDXComponent=!0},241:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),s=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},l=function(t){var e=s(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},m="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),l=s(n),m=r,f=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return n?a.a.createElement(f,c({ref:e},p,{components:n})):a.a.createElement(f,c({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[m]="string"==typeof t?t:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);