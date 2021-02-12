(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{187:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=l(t),s=r,g=p["".concat(i,".").concat(s)]||p[s]||d[s]||a;return t?o.a.createElement(g,c(c({ref:n},u),{},{components:t})):o.a.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(187)),i={title:"Fix Waiting For Connection (netbeans-xdebug) in Netbeans",date:"2014-04-14"},c={permalink:"/2014/04/14/fix-waiting-for-connection-netbeans-xdebug-in-netbeans",source:"@site/blog/2014-04-14-fix-waiting-for-connection-netbeans-xdebug-in-netbeans.md",description:"1. This is the old and buggy xdebug config:",date:"2014-04-14T00:00:00.000Z",tags:[],title:"Fix Waiting For Connection (netbeans-xdebug) in Netbeans",readingTime:.43,truncated:!1,prevItem:{title:"Exclude directory from grep search",permalink:"/2014/05/07/exclude-directory-from-grep-search"},nextItem:{title:"Upgrade xdebug on Ubuntu 14.04",permalink:"/2014/04/03/upgrade-xdebug-on-ubuntu-14-04"}},b=[],u={toc:b};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"This is the old and buggy xdebug config:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'[Xdebug]\n;zend_extension=/usr/lib/php5/20121212/xdebug.so\n;xdebug.remote_host=127.0.0.1\nxdebug.remote_connect_back=1\nxdebug.remote_enable=1\nxdebug.remote_autostart = 1\nxdebug.remote_handler="dbgp"\nxdebug.remote_port=9000\nxdebug.profiler_enable=0\nxdebug.profiler_enable_trigger = 1\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"This is new and stable xdebug config:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'[xdebug]\n;zend_extension=/usr/lib/php5/20121212/xdebug.so\nxdebug.remote_host=127.0.0.1\nxdebug.remote_enable=1\nxdebug.remote_autostart = 1\nxdebug.default_enable = 1\nxdebug.remote_handler=dbgp\nxdebug.remote_port=9000\nxdebug.idekey="netbeans-xdebug"\nxdebug.profiler_enable=1\nxdebug.profiler_enable_trigger = 1\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"sudo vim /etc/php5/apache2/php.ini"),Object(a.b)("li",{parentName:"ol"},"Change to new config"),Object(a.b)("li",{parentName:"ol"},"sudo vim /etc/php5/cli/php.ini"),Object(a.b)("li",{parentName:"ol"},"Change to new config"),Object(a.b)("li",{parentName:"ol"},"sudo service apache2 restart"),Object(a.b)("li",{parentName:"ol"},"Disable 'Watches and Balloon Evaluation' in netbeans"),Object(a.b)("li",{parentName:"ol"},"Restart netbeans")))}l.isMDXComponent=!0}}]);