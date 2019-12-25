(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return p}));var b=n(1),r=n(9),a=(n(0),n(242)),l={title:"Install bumblebee Ubuntu 16.04.1",date:"2016-10-30"},i=[],u={permalink:"/2016/10/30/install-bumblebee-ubuntu-16-04-1",source:"@site/blog/2016-10-30-install-bumblebee-ubuntu-16-04-1.md",description:"Update and install latest driver",date:"2016-10-30T00:00:00.000Z",tags:[],title:"Install bumblebee Ubuntu 16.04.1",prevItem:{title:"Install bumblebee on Ubuntu 16.10",permalink:"/2016/10/31/install-bumblebee-on-ubuntu-16-10"},nextItem:{title:"Use fcitx in hipchat on ubuntu",permalink:"/2016/10/30/use-fcitx-in-hipchat-on-ubuntu"}},o={rightToc:i,metadata:u},c="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(c,Object(b.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Update and install latest driver"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo apt-add-repository ppa:graphics-drivers/ppa\nsudo apt-get update && sudo apt-get dist-upgrade\nsudo apt install nvidia-prime nvidia-370\n")),Object(a.b)("p",null,"Reboot Switch to intel card"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo prime-select intel\n")),Object(a.b)("p",null,"Install bumblebee testing with primus"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo add-apt-repository ppa:bumblebee/testing\nsudo apt update\nsudo apt-get install bumblebee bumblebee-nvidia primus nvidia-settings nvidia-370\n")),Object(a.b)("p",null,"Add kernel modules to load at boot time"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo gedit /etc/modules i915 bbswitch\n")),Object(a.b)("p",null,"Blacklist nvidia"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo gedit /etc/modprobe.d/bumblebee.conf # 370 blacklist nvidia-370 blacklist nvidia-370-updates blacklist nvidia-experimental-370\n")),Object(a.b)("p",null,"Configure bumblebee"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo gedit /etc/bumblebee/bumblebee.conf nvidia-current -> nvidia-370 Driver=nvidia\n")),Object(a.b)("p",null,"Add user to bumblebee group, enable bumblebeed daemon service."),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo gpasswd -a $USER bumblebee\nsudo systemctl enable bumblebeed\n")),Object(a.b)("p",null,"Add boot flags (depend on each machine, my laptop is):"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),'sudo gedit /etc/default/grub\nGRUB_CMDLINE_LINUX_DEFAULT="quiet splash nouveau.modeset=0 acpi_osi=! acpi_osi=\\"Windows 2009\\" acpi_backlight=native idle=nomwait"\nsudo update grub2\n')),Object(a.b)("p",null,"Reboot Check if bumblebee working"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo apt-get install mesa-utils primusrun glxinfo | grep OpenGL lsmod | grep bbswitch\ncat /proc/acpi/bbswitch\nprimusrun glxgears\ncat /proc/acpi/bbswitch\n")),Object(a.b)("p",null,"There is a bug that prevent to run steam's games using bumblebee, here is how to fix:"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"sudo apt-get install lib32stdc++6\ncd ~/.steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu\nmv libstdc++.so.6 ~/backup/32\nln -fs /usr/lib32/libstdc++.so.6 libstdc++.so.6\ncd ~/.steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu\nmv libstdc++.so.6 ~/backup/64\nln -fs /usr/lib32/libstdc++.so.6 libstdc++.so.6\n")),Object(a.b)("p",null,"Open games in steam: open steam -> libraries -> right click a game -> properties -> set launch options ",Object(a.b)("inlineCode",{parentName:"p"},"primusrun %command%")),Object(a.b)("p",null,"Useful commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"lspci | egrep 'VGA|3D' lsmod | grep bbswitch dmesg | grep bbswitch dpkg -l | grep bumblebee\nlsmod | grep nvidia\noptirun -b none\n/usr/bin/nvidia-settings -c :8\n")),Object(a.b)("p",null,"Sources:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(b.a)({parentName:"li"},{href:"http://www.webupd8.org/2016/08/how-to-install-and-configure-bumblebee.html"}),"How to install and configure bumblebee")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(b.a)({parentName:"li"},{href:"https://rajat-osgyan.blogspot.com/2016/04/how-to-install-latest-nvidia-drivers-on.html"}),"Bumblebee on ubuntu 16.04")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(b.a)({parentName:"li"},{href:"https://rajat-osgyan.blogspot.com/2016/07/bumblebee-on-ubuntu-1604-revised.html"}),"Bumblebee on ubuntu 16.04 revised")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(b.a)({parentName:"li"},{href:"http://lenovolinux.blogspot.com/2016/05/bumblebee-on-lenovo-t440p-nvidia-gt.html"}),"Bumblebee on Lenovo T440p Ubuntu 16.04"))))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=c(n),s=b,m=p["".concat(l,".").concat(s)]||p[s]||d[s]||a;return n?r.a.createElement(m,i({ref:t},o,{components:n})):r.a.createElement(m,i({ref:t},o))}));function O(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:b,l[1]=i;for(var o=2;o<a;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);