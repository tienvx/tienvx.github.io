"use strict";(self.webpackChunktienvx_blog=self.webpackChunktienvx_blog||[]).push([[8457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Episode 1: Make drupal server run",authors:"tienvx",date:"2013-05-03"},i=void 0,s={permalink:"/2013/05/03/episode-1-make-drupal-server-run",source:"@site/blog/2013-05-03-episode-1-make-drupal-server-run.md",title:"Episode 1: Make drupal server run",description:"1. C\xe0i \u0111\u1eb7t virtualbox tr\xean host. \u1ede \u0111\xe2y m\xecnh d\xf9ng Ubuntu Desktop 13.04. Sau khi c\xe0i xong virtualbox, b\u1ea1n v\xe0o File -> Preferences -> Network -> Add Host-only network. B\u1ea1n s\u1ebd c\xf3 m\u1ed9t card m\u1ea1ng \u1ea3o tr\xean host v\u1edbi dhcp \u0111\xe3 \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh s\u1eb5n v\u1edbi \u0111\u01b0\u1eddng m\u1ea1ng 192.168.56.1/255.255.255.0.",date:"2013-05-03T00:00:00.000Z",formattedDate:"May 3, 2013",tags:[],readingTime:3.08,hasTruncateMarker:!1,authors:[{name:"Tien",title:"Contributor of Pact PHP",url:"https://github.com/tienvx",imageURL:"https://github.com/tienvx.png",key:"tienvx"}],frontMatter:{title:"Episode 1: Make drupal server run",authors:"tienvx",date:"2013-05-03"},prevItem:{title:"Episode 4: Database server",permalink:"/2013/05/14/episode-4-database-server"},nextItem:{title:"Read more path in views (Drupal)",permalink:"/2013/04/17/read-more-path-in-views-drupal"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C\xe0i \u0111\u1eb7t virtualbox tr\xean host. \u1ede \u0111\xe2y m\xecnh d\xf9ng Ubuntu Desktop 13.04. Sau khi c\xe0i xong virtualbox, b\u1ea1n v\xe0o File -> Preferences -> Network -> Add Host-only network. B\u1ea1n s\u1ebd c\xf3 m\u1ed9t card m\u1ea1ng \u1ea3o tr\xean host v\u1edbi dhcp \u0111\xe3 \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh s\u1eb5n v\u1edbi \u0111\u01b0\u1eddng m\u1ea1ng 192.168.56.1/255.255.255.0.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C\xe0i guest. \u1ede \u0111\xe2y m\xecnh d\xf9ng Ubuntu Server 13.04. T\u1ea1o m\u1edbi m\u1ed9t Virtual Machine v\u1edbi 1 card m\u1ea1ng eth0, Attached to Host-only adapter, Name l\xe0 card m\u1ea1ng \u1ea3o b\xean host, m\u1ed9t shared folder \u0111\u1ec3 chia s\u1ebb d\u1eef li\u1ec7u gi\u1eefa host v\xe0 guest d\u1ec5 h\u01a1n. L\xfac c\xe0i b\u1ea1n n\xean ch\u1ecdn \u1edf m\xe0n h\xecnh c\xe0i ph\u1ea7n m\u1ec1m l\xe0 OpenSSH server, LAMP server, Mail server. Sau khi reboot guest, b\u1ea1n \u0111\u0103ng nh\u1eadp v\xe0o v\xe0 g\xf5 l\u1ec7nh sudo nano /etc/network/interfaces v\xe0 \u0111\u1ec3 card m\u1ea1ng eth0 \u1edf ch\u1ebf \u0111\u1ed9 automatic ip: auto eth0 iface eth0 inet dhcp ch\u1ea1y l\u1ec7nh sudo /etc/init.d/networking restart \u0111\u1ec3 kh\u1edfi \u0111\u1ed9ng l\u1ea1i networking service sau khi thay \u0111\u1ed5i th\xf4ng s\u1ed1 ip. T\u1eeb host v\xe0 guest b\u1ea1n ping l\u1eabn nhau \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o guest v\xe0 host th\xf4ng nhau.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0110\u1ec3 guest c\xf3 th\u1ec3 v\xe0o internet \u0111\u01b0\u1ee3c th\xec ta c\u1ea7n 2 card m\u1ea1ng \u1edf guest. Card m\u1ea1ng eth0 \u1edf ch\u1ebf \u0111\u1ed9 NAT, card eth1 \u1edf ch\u1ebf \u0111\u1ed9 Host-only. Trong guest khi ta ch\u1ea1y l\u1ec7nh ifconfig ch\u1ec9 th\u1ea5y card m\u1ea1ng eth0, nh\u01b0ng v\u1eabn ping \u0111\u01b0\u1ee3c v\u1edbi host, v\xe0 v\xe0o internet \u0111\u01b0\u1ee3c.\xa0 Nh\u01b0ng \u1edf host ping guest (ping 192.168.56.101) kh\xf4ng \u0111\u01b0\u1ee3c, l\xfd do l\xe0 v\xec ta v\xec eth1 ch\u01b0a c\xf3 \u0111\u1ecba ch\u1ec9 ip, ta c\u1ea7n edit l\u1ea1i /etc/network/interfaces (th\xeam v\xe0o eth1 c\xf3 c\u1ea5u h\xecnh nh\u01b0 c\u1ee7a eth0, t\u1ee9c l\xe0 dhcp). Ch\xfa \xfd sau khi edit ta c\u1ea7n kh\u1edfi \u0111\u1ed9ng l\u1ea1i service networking (sudo /etc/init.d/networking restart). \u0110\u1ec3 ch\u1eafc ch\u1eafn, \u1edf guest ch\xfang ta ch\u1ea1y l\u1ec7nh ifconfig -a \u0111\u1ec3 xem c\u1ea5u h\xecnh c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c card m\u1ea1ng. n\u1ebfu mu\u1ed1n x\xe0i ip t\u0129nh \u1edf eth1 th\xec th\xeam nh\u1eefng d\xf2ng:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"auto eth1\niface eth1 inet static\n  address 192.168.56.104\n  network 192.168.56.0\n  broadcast 192.168.56.255\n  netmask 255.255.255.0\n  # gateway 192.168.56.1\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C\xe0i VBoxGuestAdditionsb\u1ea1n v\xe0o Click Devices / CD/DVD Devices / Choose a virtual CD/DVD disk file, ch\u1ecdn file VBoxGuestAdditions.iso c\xf3 trong /usr/share/virtualbox/, sau \u0111\xf3 ch\u1ea1y c\xe1c l\u1ec7nh sau: sudo apt-get install hwinfo sudo mount /dev/cdrom /media/cdrom cd /media/cdrom sudo ./VBoxLinuxAdditions.run sudo reboot")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Khi b\u1ea1n ch\u1ecdn auto mount th\u01b0 m\u1ee5c shared gi\u1eefa host v\xe0 guest, b\u1ea1n s\u1ebd th\u1ea5y trong /media c\xf3 th\u01b0 m\u1ee5c sf_Share, tuy nhi\xean n\u1ebfu b\u1ea1n d\xf9ng l\u1ec7nh ls /media/sf_Share th\xec b\u1ecb b\xe1o l\u1ed7i permission. b\u1ea1n ph\u1ea3i ch\u1ea1y 2 l\u1ec7nh sau: sudo usermod -aG vboxsf group_cua_username_hien_tai sudo usermod -aG vboxsf www-data")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Th\u1ef1c hi\u1ec7n c\xe1c l\u1ec7nh sau \u0111\u1ec3 install drupal l\xean server:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget\xa0 http://ftp.drupal.org/files/projects/drupal-7.22.tar.gz\ntar xfvz drupal-7.22.tar.gz\nsudo mv drupal-7.22/ /var/www/\ncd /var/www/drupal-7.22\ncp sites/default/default.settings.php sites/default/settings.php\nchmod a+w sites/default/settings.php\nchmod a+w sites/default\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql -u root -p\nCREATE DATABASE drupal;\nCREATE USER druser@localhost;\nSET PASSWORD FOR druser@localhost= PASSWORD(\"drupass\");\nGRANT ALL PRIVILEGES ON drupal.* TO druser@localhost IDENTIFIED BY 'drupass';\nFLUSH PRIVILEGES;\nexit\n\nsudo apt-get install php5-gd\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0110\u1ed5i t\xean server thay v\xec \u1edf host ta ph\u1ea3i \u0111\xe1nh \u0111\u1ecba ch\u1ec9 192.168.56.102 d\xe0i, ta c\xf3 th\u1ec3 thay \u0111\u1ed5i t\xean th\xe0nh server.com ng\u1eafn g\u1ecdn h\u01a1n. \u0110\u1ec3 l\xe0m \u0111i\u1ec1u n\xe0y \u1edf host (v\xe0 \u1edf guest n\u1ebfu c\u1ea7n) ta th\xeam d\xf2ng 192.168.56.102 server.com v\xe0o /etc/hosts")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C\xe0i \u0111\u1eb7t \u1edf host ta nh\u1eadp \u0111\u1ecba ch\u1ec9 server.com/drupal-7.22 v\xe0 b\u1eaft \u0111\u1ea7u c\xe0i \u0111\u1eb7t drupal. Ch\xfa \xfd database l\xe0 drupal, user name mysql l\xe0 druser, pass mysql l\xe0 drupass. Khi c\xe0i c\xe1c b\u1ea1n nh\u1edb user v\xe0 pass c\u1ee7a drupal (admin user c\u1ee7a drupal) \u0111\u1ec3 \u0111\u0103ng nh\u1eadp l\u1ea7n sau :)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SSH c\xe1c b\u1ea1n v\xe0o \u0111\xe2y \u0111\u1ecdc, r\u1ea5t hay, qu\xe1 \u0111\u1ea7y \u0111\u1ee7 cho m\u1ed9t newbie (",(0,a.kt)("a",{parentName:"p",href:"http://support.suso.com/supki/SSH_Tutorial_for_Linux"},"http://support.suso.com/supki/SSH_Tutorial_for_Linux"),") c\xf3 2 l\u1ec7nh ch\u1ee7 y\u1ebfu l\xe0: ssh-keygen -t dsa v\xe0 scp ~/.ssh/id_dsa.pub ",(0,a.kt)("a",{parentName:"p",href:"mailto:username@arvo.suso.org"},"username@arvo.suso.org"),":.ssh/authorized_keys ssh-copy-id user@host"))))}h.isMDXComponent=!0}}]);