(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{223:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(252)),c={title:"Episode 4: Database server",date:"2013-05-14"},i={permalink:"/2013/05/14/episode-4-database-server",source:"@site/blog/2013-05-14-episode-4-database-server.md",description:"1. C\xe0i debian 7 trong khi c\xe0i b\u1ea1n ch\u1ecdn hostname l\xe0 database c\xf3 username l\xe0 webdev v\xe0 pass l\xe0 webdev",date:"2013-05-14T00:00:00.000Z",tags:[],title:"Episode 4: Database server",readingTime:.635,truncated:!1,prevItem:{title:"Episode 3: Web server",permalink:"/2013/05/14/episode-3-web-server"},nextItem:{title:"Episode 1: Make drupal server run",permalink:"/2013/05/03/episode-1-make-drupal-server-run"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"C\xe0i debian 7 trong khi c\xe0i b\u1ea1n ch\u1ecdn hostname l\xe0 database c\xf3 username l\xe0 webdev v\xe0 pass l\xe0 webdev")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"c\xe0i xong kh\u1edfi \u0111\u1ed9ng l\u1ea1i b\u1ea1n c\xe0i ph\u1ea7n m\u1ec1m ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.mysql.com",title:"MySQL"}),"mysql server"),": apt-get install mysql-server\xa0 php5-mysql trong l\xfac c\xe0i b\u1ea1n ch\u1ecdn pass cho user root l\xe0 root")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"c\u1ea5u h\xecnh"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"cho ph\xe9p remote access \u1edf database \u0111i v\xe0o command line c\u1ee7a mysql")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mysql -u root -p\nGRANT ALL PRIVILEGES ON *.* TO aegir@aegir.com IDENTIFIED BY 'aegir' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"edit file my.cnf ",Object(o.b)("em",{parentName:"li"},"sudo cp /etc/mysql/my.cnf /etc/mysql/my.cnf.bak")," comment d\xf2ng ",Object(o.b)("em",{parentName:"li"},"bind-address = 127.0.0.1")," _sudo /etc/init.d/mysql restart"),Object(o.b)("li",{parentName:"ul"},"l\xfac t\u1ea1o database server, b\u1ea1n nh\u1eadp v\xe0o username v\xe0 pass l\xe0 aegir (v\xec aegir t\u1eeb aegir.com \u0111\xe3 \u0111\u01b0\u1ee3c full quy\u1ec1n tr\xean database.com)_")),Object(o.b)("p",null,"tham kh\u1ea3o ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.ghacks.net/2009/12/27/allow-remote-connections-to-your-mysql-server/"}),"http://www.ghacks.net/2009/12/27/allow-remote-connections-to-your-mysql-server/")))}s.isMDXComponent=!0},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);