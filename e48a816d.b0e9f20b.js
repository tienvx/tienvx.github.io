(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{229:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),i=(t(0),t(241)),c={title:"C\xe0i bundle cho Symfony 2 m\u1ed9t c\xe1ch th\u1ee7 c\xf4ng",date:"2013-04-07"},a=[],l={permalink:"/2013/04/07/cai-bundle-cho-symfony-2-mot-cach-thu-cong",source:"@site/blog/2013-04-07-cai-bundle-cho-symfony-2-mot-cach-thu-cong.md",description:"1a. Copy doctrine-fixtures, doctrine-fixtures-bundle, doctrine-migrations, doctrine-migrations-bundle to folder ./vender/doctrine/ 1b. Copy knp-menu, knp-menu-bundle to folder ./vender/knp/",date:"2013-04-07T00:00:00.000Z",tags:[],title:"C\xe0i bundle cho Symfony 2 m\u1ed9t c\xe1ch th\u1ee7 c\xf4ng",prevItem:{title:"Annotation trong Doctrine 2",permalink:"/2013/04/07/annotation-trong-doctrine-2"},nextItem:{title:"Date time trong PHP",permalink:"/2013/04/07/date-time-trong-php"}},d={rightToc:a,metadata:l},u="wrapper";function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"1a. Copy doctrine-fixtures, doctrine-fixtures-bundle, doctrine-migrations, doctrine-migrations-bundle to folder ./vender/doctrine/ 1b. Copy knp-menu, knp-menu-bundle to folder ./vender/knp/"),Object(i.b)("p",null,"2","."," Registry bundle in AppKernel"),Object(i.b)("p",null,"$bundles = array( new Knp","\\","Bundle","\\","MenuBundle","\\","KnpMenuBundle(), );"),Object(i.b)("p",null,"if (in","_","array($this->getEnvironment(), array('dev', 'test'))) { $bundles","[","]"," = new Doctrine","\\","Bundle","\\","FixturesBundle","\\","DoctrineFixturesBundle(); $bundles","[","]"," = new Doctrine","\\","Bundle","\\","MigrationsBundle","\\","DoctrineMigrationsBundle(); } return $bundles;"),Object(i.b)("p",null,"3","."," Update namespace (file ./vender/composer/autoload","_","namespaces.php) 'Doctrine","\\","\\","DBAL' => $vendorDir . '/doctrine/dbal/lib/', add =>\xa0\xa0\xa0 'Doctrine","\\","\\","Common","\\","\\","DataFixtures'\xa0\xa0\xa0 => $vendorDir . '/doctrine/doctrine-fixtures/lib', add =>\xa0\xa0\xa0 'Doctrine","\\","\\","DBAL","\\","\\","Migrations'\xa0\xa0\xa0 => $vendorDir . '/doctrine/doctrine-migrations/lib', 'Doctrine","\\","\\","Common' => $vendorDir . '/doctrine/common/lib/', add =>\xa0\xa0\xa0 'Doctrine","\\","\\","Bundle","\\","\\","FixturesBundle' => $vendorDir . '/doctrine/doctrine-fixtures-bundle/', add =>\xa0\xa0 'Doctrine","\\","\\","Bundle","\\","\\","MigrationsBundle' => $vendorDir . '/doctrine/doctrine-migrations-bundle/', 'Doctrine","\\","\\","Bundle","\\","\\","DoctrineBundle' => $vendorDir . '/doctrine/doctrine-bundle/', ... add =>\xa0\xa0 'Knp","\\","Menu'\xa0\xa0 => $vendorDir . '/knp/knp-menu/src', add =>\xa0\xa0 'Knp","\\","\\","Bundle","\\","\\","MenuBundle' => $vendorDir . '/knp/knp-menu-bundle/', '' => $baseDir . '/src/',"),Object(i.b)("p",null,"4","."," Use"),Object(i.b)("p",null,"php app/console doctrine:fixtures:load php app/console doctrine:migrations:diff php app/console doctrine:migrations:migrate"),Object(i.b)("p",null,"5","."," Config menu (options) file /app/config.yml"),Object(i.b)("p",null,"knp","_",'menu: twig:\xa0 # use "twig: false" to disable the Twig extension and the TwigRenderer template: knp',"_","menu.html.twig templating: false # if true, enables the helper for PHP templates default","_","renderer: twig # The renderer to use, list is also available by default","_","renderer"),Object(i.b)("p",null,"6","."," link download bundles ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://drive.google.com/folderview?id=0B44zRG-ekXoMRVpVNXFDSVh1WUU&usp=sharing"}),"https://drive.google.com/folderview?id=0B44zRG-ekXoMRVpVNXFDSVh1WUU&usp=sharing")))}p.isMDXComponent=!0},241:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),u=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,m=p["".concat(c,".").concat(s)]||p[s]||b[s]||i;return t?o.a.createElement(m,a({ref:n},d,{components:t})):o.a.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[s]="string"==typeof e?e:r,c[1]=a;for(var d=2;d<i;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);