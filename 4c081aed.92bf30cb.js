(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(9),o=(r(0),r(241)),c={title:"Episode 4: Database server",date:"2013-05-14"},i=[],p={permalink:"/2013/05/14/episode-3-database-server",source:"@site/blog/2013-05-14-episode-3-database-server.md",description:"1\\. C\xe0i debian 7 trong khi c\xe0i b\u1ea1n ch\u1ecdn hostname l\xe0 database c\xf3 username l\xe0 webdev v\xe0 pass l\xe0 webdev",date:"2013-05-14T00:00:00.000Z",tags:[],title:"Episode 4: Database server",prevItem:{title:"Episode 3: Web server",permalink:"/2013/05/14/episode-3-web-server"},nextItem:{title:"Episode 1: Make drupal server run",permalink:"/2013/05/03/episode-1-make-drupal-server-run"}},s={rightToc:i,metadata:p},l="wrapper";function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"1","."," C\xe0i debian 7 trong khi c\xe0i b\u1ea1n ch\u1ecdn hostname l\xe0 database c\xf3 username l\xe0 webdev v\xe0 pass l\xe0 webdev"),Object(o.b)("p",null,"2","."," c\xe0i xong kh\u1edfi \u0111\u1ed9ng l\u1ea1i b\u1ea1n c\xe0i ph\u1ea7n m\u1ec1m ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.mysql.com",title:"MySQL"}),"mysql server"),": apt-get install mysql-server\xa0 php5-mysql trong l\xfac c\xe0i b\u1ea1n ch\u1ecdn pass cho user root l\xe0 root"),Object(o.b)("p",null,"3","."," c\u1ea5u h\xecnh a. cho ph\xe9p remote access \u1edf database \u0111i v\xe0o command line c\u1ee7a mysql ",Object(o.b)("em",{parentName:"p"},"mysql -u root -p")," ",Object(o.b)("inlineCode",{parentName:"p"}," `GRANT ALL PRIVILEGES ON *.* TO aegir@aegir.com IDENTIFIED BY 'aegir' WITH GRANT OPTION;` FLUSH PRIVILEGES;")," b. edit file my.cnf ",Object(o.b)("em",{parentName:"p"},"sudo cp /etc/mysql/my.cnf /etc/mysql/my.cnf.bak")," comment d\xf2ng ",Object(o.b)("em",{parentName:"p"},"bind-address = 127.0.0.1")," ",Object(o.b)("em",{parentName:"p"},"sudo /etc/init.d/mysql restart c. l\xfac t\u1ea1o database server, b\u1ea1n nh\u1eadp v\xe0o username v\xe0 pass l\xe0 aegir (v\xec aegir t\u1eeb aegir.com \u0111\xe3 \u0111\u01b0\u1ee3c full quy\u1ec1n tr\xean database.com)")),Object(o.b)("p",null,"tham kh\u1ea3o ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.ghacks.net/2009/12/27/allow-remote-connections-to-your-mysql-server/"}),"http://www.ghacks.net/2009/12/27/allow-remote-connections-to-your-mysql-server/")))}m.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);