(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(9),a=(r(0),r(242)),i={title:"T\u1ea1o m\u1edbi field chatroom trong drupal 7",date:"2013-04-14"},c=[],l={permalink:"/2013/04/14/tao-moi-field-chatroom-trong-drupal-7",source:"@site/blog/2013-04-14-tao-moi-field-chatroom-trong-drupal-7.md",description:"```",date:"2013-04-14T00:00:00.000Z",tags:[],title:"T\u1ea1o m\u1edbi field chatroom trong drupal 7",prevItem:{title:"Pass by reference trong module_invoke",permalink:"/2013/04/14/pass-by-reference-trong-module_invoke"},nextItem:{title:"Tham s\u1ed1 trong hook_field_update",permalink:"/2013/04/14/tham-so-trong-hook_field_update"}},p={rightToc:c,metadata:l},u="wrapper";function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(u,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"if (!field_info_field('field_chatroom')) {\n  $field = array( 'field_name' => 'field_chatroom', 'type' => 'chatroom', );\n  field_create_field($field);\n\n  // Create the instance on the bundle.\n  $instance = array( 'field_name' => 'field_chatroom', 'entity_type' => 'node', 'label' => 'ChatRoom', 'bundle' => 'project', 'required' => TRUE, 'widget' => array( 'type' => 'chatroom_chatroom', ), );\n\n\n  field_create_instance($instance);\n}\n")))}f.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,s=f["".concat(i,".").concat(d)]||f[d]||m[d]||a;return r?o.a.createElement(s,c({ref:t},p,{components:r})):o.a.createElement(s,c({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);