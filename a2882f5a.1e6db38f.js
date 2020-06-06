(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(9),i=(t(0),t(252)),a={title:"C\xe0i bundle cho Symfony 2 m\u1ed9t c\xe1ch th\u1ee7 c\xf4ng",date:"2013-04-07"},c={permalink:"/2013/04/07/cai-bundle-cho-symfony-2-mot-cach-thu-cong",source:"@site/blog/2013-04-07-cai-bundle-cho-symfony-2-mot-cach-thu-cong.md",description:"1.",date:"2013-04-07T00:00:00.000Z",tags:[],title:"C\xe0i bundle cho Symfony 2 m\u1ed9t c\xe1ch th\u1ee7 c\xf4ng",readingTime:.91,truncated:!1,prevItem:{title:"Annotation trong Doctrine 2",permalink:"/2013/04/07/annotation-trong-doctrine-2"},nextItem:{title:"Date time trong PHP",permalink:"/2013/04/07/date-time-trong-php"}},l=[],d={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Copy doctrine-fixtures, doctrine-fixtures-bundle, doctrine-migrations, doctrine-migrations-bundle to folder ./vender/doctrine/"),Object(i.b)("li",{parentName:"ul"},"Copy knp-menu, knp-menu-bundle to folder ./vender/knp/"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Registry bundle in AppKernel"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$bundles = array( new Knp\\\\Bundle\\\\MenuBundle\\\\KnpMenuBundle(), );\n\nif (in_array($this->getEnvironment(), array('dev', 'test'))) {\n  $bundles[] = new Doctrine\\\\Bundle\\\\FixturesBundle\\\\DoctrineFixturesBundle();\n  $bundles[] = new Doctrine\\\\Bundle\\\\MigrationsBundle\\\\DoctrineMigrationsBundle();\n}\nreturn $bundles;\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Update namespace (file ./vender/composer/autoload_namespaces.php)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"'Doctrine\\\\\\\\DBAL' => $vendorDir . '/doctrine/dbal/lib/', add =>\xa0\xa0\xa0 'Doctrine\\\\\\\\Common\\\\\\\\DataFixtures'\xa0\xa0\xa0 => $vendorDir . '/doctrine/doctrine-fixtures/lib', add =>\xa0\xa0\xa0 'Doctrine\\\\\\\\DBAL\\\\\\\\Migrations'\xa0\xa0\xa0 => $vendorDir . '/doctrine/doctrine-migrations/lib', 'Doctrine\\\\\\\\Common' => $vendorDir . '/doctrine/common/lib/', add =>\xa0\xa0\xa0 'Doctrine\\\\\\\\Bundle\\\\\\\\FixturesBundle' => $vendorDir . '/doctrine/doctrine-fixtures-bundle/', add =>\xa0\xa0 'Doctrine\\\\\\\\Bundle\\\\\\\\MigrationsBundle' => $vendorDir . '/doctrine/doctrine-migrations-bundle/', 'Doctrine\\\\\\\\Bundle\\\\\\\\DoctrineBundle' => $vendorDir . '/doctrine/doctrine-bundle/', ... add =>\xa0\xa0 'Knp\\\\Menu'\xa0\xa0 => $vendorDir . '/knp/knp-menu/src', add =>\xa0\xa0 'Knp\\\\\\\\Bundle\\\\\\\\MenuBundle' => $vendorDir . '/knp/knp-menu-bundle/', '' => $baseDir . '/src/',\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Use")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"php app/console doctrine:fixtures:load\nphp app/console doctrine:migrations:diff\nphp app/console doctrine:migrations:migrate\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Config menu (options) file /app/config.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'knp_menu: twig:\n# use "twig: false" to disable the Twig extension and the TwigRenderer template: knp_menu.html.twig templating: false\n# if true, enables the helper for PHP templates default_renderer: twig\n# The renderer to use, list is also available by default_renderer\n')),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"link download bundles ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://drive.google.com/folderview?id=0B44zRG-ekXoMRVpVNXFDSVh1WUU&usp=sharing"}),"https://drive.google.com/folderview?id=0B44zRG-ekXoMRVpVNXFDSVh1WUU&usp=sharing"))))}p.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,m=u["".concat(a,".").concat(s)]||u[s]||b[s]||i;return t?o.a.createElement(m,c(c({ref:n},d),{},{components:t})):o.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);