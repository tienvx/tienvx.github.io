"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[3722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Episode 2: C\xe0i Aegir server",authors:"tienvx",date:"2013-05-14"},o=void 0,s={permalink:"/2013/05/14/episode-2-cai-aegir-server",source:"@site/blog/2013-05-14-episode-2-cai-aegir-server.md",title:"Episode 2: C\xe0i Aegir server",description:"1. C\xe0i debian 6, l\xfac c\xe0i ch\u1ecdn root pass l\xe0 root, th\xeam user name l\xe0 aegir v\xe0 password l\xe0 aegir: adduser --system --group --home /var/aegir aegir passwd aegir usermod -a -G www-data aegir",date:"2013-05-14T00:00:00.000Z",formattedDate:"May 14, 2013",tags:[],readingTime:1.2,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Episode 2: C\xe0i Aegir server",authors:"tienvx",date:"2013-05-14"},prevItem:{title:"Episode 5: Create new Platform, new Site",permalink:"/2013/05/17/episode-5-create-new-platform-new-site"},nextItem:{title:"Episode 3: Web server",permalink:"/2013/05/14/episode-3-web-server"}},c={authorsImageUrls:[void 0]},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"C\xe0i debian 6, l\xfac c\xe0i ch\u1ecdn root pass l\xe0 root, th\xeam user name l\xe0 aegir v\xe0 password l\xe0 aegir: adduser --system --group --home /var/aegir aegir passwd aegir usermod -a -G www-data aegir")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"C\xe0i Aegir server. ",(0,n.kt)("inlineCode",{parentName:"p"},"a. wget http://files.aegir.cc/versions/BARRACUDA.sh.txt")," b. sau khi t\u1ea3i v\u1ec1 ta thay \u0111\u1ed5i th\xf4ng s\u1ed1 c\u1ee7a file BARRACUDA.sh.txt ","_","MY","_",'OWNIP="192.168.56.101" ',"_","MY","_",'HOSTN="aegir.com" ',"_","MY","_",'FRONT="master.aegir.com" ',"_","EASY","_",'HOSTNAME="debian.com" ',"_","AUTOPILOT=YES ","_","MY","_",'EMAIL="',(0,n.kt)("a",{parentName:"p",href:"mailto:webdev@aegir.com"},"webdev@aegir.com"),'" ',"_","DNS","_","SETUP","_","TEST=NO n\u1ebfu c\xf3 g\u1eb7p l\u1ed7i dns th\xec ",(0,n.kt)("inlineCode",{parentName:"p"},"nano /root/.barracuda.cnf")," ","_","DNS","_","SETUP","_","TEST=NO c. nano /etc/hosts 192.168.56.101\xa0\xa0 aegir.com 192.168.56.101\xa0\xa0 master.aegir.com d. nano /etc/network/interface auto eth1 iface eth1 inet static address 192.168.56.101 network 192.168.56.0 netmask 255.255.255.0 # gateway 192.168.56.1 3. b\u1ea1n n\xean th\xeam v\xe0o file /etc/hosts 2 d\xf2ng \u1edf client: 192.168.56.101 aegir.com 192.168.56.101 master.aegir.com \u0111\u1ec3 client c\xf3 th\u1ec3 truy c\u1eadp v\xe0o admin.aegir.com \u0111\u1ec3 thay \u0111\u1ed5i pass v\xe0 th\u1ef1c hi\u1ec7n c\u1ea5u h\xecnh. ps: \u0111\u1ec3 \u0111\u0103ng nh\u1eadp v\xe0 \u0111\u1ed5i pass ta l\xe0m nh\u01b0 sau: cd ~ cat install.log d\xf2ng cu\u1ed1i c\xf9ng c\xf3 ch\u1ee9a th\xf4ng tin \u0111\u0103ng nh\u1eadp 1 l\u1ea7n \u0111\u1ec3 thay m\u1eadt kh\u1ea9u. hay c\xf3 th\u1ec3 cd v\xe0o ~/host","_","master/001/sites/master.aegir drush uli \u0111\u1ec3 thay pass")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sau khi c\xe0i xong, aegir cho ta m\u1ed9t \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ec3 reset password (n\u1ebfu l\u1ee1 m\u1ea5t th\xec ta d\xf9ng l\u1ec7nh drush uli). ta truy c\u1eadp v\xe0o \u0111\u01b0\u1eddng d\u1eabn n\xe0y t\u1eeb 1 browser, reset username v\xe0 pass l\u1ea1i th\xe0nh admin v\xe0 admin")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"chsh -s /bin/bash aegir passwd aegir su aegir ssh-keygen nano /etc/hosts 192.168.56.102 web.com 192.168.56.103 database.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"th\xeam webserver v\xe0 database server. ssh-copy-id ",(0,n.kt)("a",{parentName:"p",href:"mailto:aegir@web.com"},"aegir@web.com")," ssh-copy-id ",(0,n.kt)("a",{parentName:"p",href:"mailto:root@web.com"},"root@web.com")," (rsync) ssh-copy-id ",(0,n.kt)("a",{parentName:"p",href:"mailto:aegir@database.com"},"aegir@database.com")))),(0,n.kt)("p",null,"ngu\u1ed3n ",(0,n.kt)("a",{parentName:"p",href:"http://friendlydrupal.com/screencasts/installing-barracuda-aegir"},"http://friendlydrupal.com/screencasts/installing-barracuda-aegir")))}u.isMDXComponent=!0}}]);