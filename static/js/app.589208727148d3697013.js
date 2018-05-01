webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,r){"use strict";function a(t){r("lICg")}Object.defineProperty(e,"__esModule",{value:!0});var i=r("7+uW"),s={name:"app"},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],l={render:n,staticRenderFns:u},o=l,d=r("VU/8"),c=d(s,o,!1,null,null,null),v=c.exports,_=r("/ocq"),p={},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-child-width-expand@s uk-text-center uk-margin-large-top\nuk-margin-large-right uk-margin-large-left",attrs:{"uk-grid":""}},[r("div",[r("div",{staticClass:"uk-card uk-card-default uk-card-body"},[r("h3",{staticClass:"uk-heading-divider"},[t._v("Request a ride")]),t._v(" "),r("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"UserApp"}}},[t._v("User app")])],1)]),t._v(" "),r("div",[r("div",{staticClass:"uk-card uk-card-default uk-card-body"},[r("h3",{staticClass:"uk-heading-divider"},[t._v("For drivers")]),t._v(" "),r("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"DriverApp"}}},[t._v("Driver app")])],1)]),t._v(" "),r("div",[r("div",{staticClass:"uk-card uk-card-default uk-card-body"},[r("h3",{staticClass:"uk-heading-divider"},[t._v("Super admin")]),t._v(" "),r("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"Dashboard"}}},[t._v("Dashboard")])],1)])])},k=[],h={render:m,staticRenderFns:k},f=h,b=r("VU/8"),g=b(p,f,!1,null,null,null),C=g.exports,y={data:function(){return{user_id:void 0,fetching_rides:!1,user_rides:[]}},methods:{request_ride:function(){var t=this;this.$http.post("/api/user/ride/",{user_id:parseInt(this.user_id)}).then(function(e){t.$router.push({name:t.$route.name,params:{user_id:t.user_id}})},function(t){alert(t)})},fetch_user_rides:function(){var t=this;this.fetching_rides=!0,this.$http.get("/api/user/ride/?id="+this.$route.params.user_id).then(function(e){t.user_rides=e.data.rides,t.fetching_rides=!1},function(e){UIkit.notification({message:"Error fetching your rides :(",status:"danger",pos:"bottom-center",timeout:5e3}),t.fetching_rides=!1})}},filters:{readable_format:function(t){var e=new Date(t);return e.toDateString()+" "+e.toLocaleTimeString()}},mounted:function(){this.$route.params.user_id&&this.fetch_user_rides()}},x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("GlobalNavBar"),t._v(" "),t.$route.params.user_id?r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-top uk-margin-left"},[r("router-link",{attrs:{to:{name:t.$route.name,params:{}}}},[r("span",{attrs:{"uk-icon":"arrow-left"}}),t._v(" Request ride with a different USER ID\n        ")]),t._v(" "),t.fetching_rides?r("div",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom"},[r("div",{attrs:{"uk-spinner":""}}),r("br"),t._v(" "),r("div",{staticClass:"uk-margin-small-right"},[t._v("Fetching your rides..")])]):r("div",{staticClass:"uk-testing"},[t.user_rides.length>0?r("table",{staticClass:"uk-table uk-table-hover uk-table-small"},[r("caption",{staticClass:"uk-text-center"},[r("a",{on:{click:function(e){t.fetch_user_rides()}}},[t._v("Refresh")])]),t._v(" "),t._m(0),t._v(" "),r("tbody",t._l(t.user_rides,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"uk-text-left"},[t._v(t._s(e.status))]),t._v(" "),r("td",{staticClass:"uk-text-left"},[t._v(t._s(e.pickup_driver?e.pickup_driver:"-"))]),t._v(" "),r("td",{staticClass:"uk-text-right"},[t._v("\n                            "+t._s(t._f("readable_format")(e.modified_at))+"\n                        ")])])}))]):r("div",{staticClass:"uk-margin-large uk-text-center"},[t._v("\n                Your ride history will appear here..\n            ")])])],1):r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-top uk-margin-left"},[r("h3",{staticClass:"uk-card-title"},[t._v("Request a ride")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.request_ride(e)}}},[r("div",{staticClass:"uk-margin"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"uk-input",attrs:{type:"number",min:"0",placeholder:"Enter the user ID",required:""},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary"},[t._v("Request")])])])],1)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",{staticClass:"uk-text-left"},[t._v("Status")]),t._v(" "),r("th",{staticClass:"uk-text-left"},[t._v("Driver")]),t._v(" "),r("th",{staticClass:"uk-text-right"},[t._v("Ride requested on")])])}],D={render:x,staticRenderFns:$},R=D,w=r("VU/8"),U=w(y,R,!1,null,null,null),E=U.exports,q={},A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("GlobalNavBar"),t._v("\n    Hello from driver app\n")],1)},F=[],N={render:A,staticRenderFns:F},I=N,S=r("VU/8"),V=S(q,I,!1,null,null,null),H=V.exports,B={},G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("GlobalNavBar"),t._v("\n    Hello from dashboard\n")],1)},L=[],P={render:G,staticRenderFns:L},T=P,j=r("VU/8"),z=a,J=j(B,T,!1,z,null,null),M=J.exports,O={computed:{nav_routes:function(){return this.$router.options.routes.filter(function(t){try{return t.nav.visible}catch(t){return!1}})}}},W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{"uk-sticky":"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"}},[r("nav",{staticClass:"uk-navbar-container",staticStyle:{position:"relative","z-index":"980"},attrs:{"uk-navbar":""}},[r("div",{staticClass:"uk-navbar-center"},[r("ul",{staticClass:"uk-navbar-nav"},t._l(t.nav_routes,function(e){return r("li",{class:{"uk-active":t.$route.name===e.name}},[r("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.nav.title))])],1)}))])])])])},Y=[],K={render:W,staticRenderFns:Y},Q=K,X=r("VU/8"),Z=X(O,Q,!1,null,null,null),tt=Z.exports;i.a.use(_.a),i.a.component("GlobalNavBar",tt);var et=new _.a({routes:[{path:"/",name:"Landing",component:C,nav:{visible:!0,title:"Home"}},{path:"/user/:user_id?",name:"UserApp",component:E,nav:{visible:!0,title:"User App"}},{path:"/driver",name:"DriverApp",component:H,nav:{visible:!0,title:"Driver App"}},{path:"/dashboard",name:"Dashboard",component:M,nav:{visible:!0,title:"Dashboard"}}],mode:"history"}),rt=r("8+8L");i.a.config.productionTip=!1,i.a.use(rt.a),new i.a({el:"#app",router:et,template:"<App/>",mode:"history",components:{App:v}})},lICg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.589208727148d3697013.js.map