webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,i){"use strict";function r(t){i("lICg")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={name:"app"},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},d=[],u={render:s,staticRenderFns:d},o=u,c=i("VU/8"),l=c(n,o,!1,null,null,null),_=l.exports,v=i("/ocq"),m={},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-child-width-expand@s uk-text-center uk-margin-large-top\nuk-margin-large-right uk-margin-large-left",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-card uk-card-default uk-card-body"},[i("h3",{staticClass:"uk-heading-divider"},[t._v("Request a ride")]),t._v(" "),i("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"UserApp"}}},[t._v("User app")])],1)]),t._v(" "),i("div",[i("div",{staticClass:"uk-card uk-card-default uk-card-body"},[i("h3",{staticClass:"uk-heading-divider"},[t._v("For drivers")]),t._v(" "),i("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"DriverApp"}}},[t._v("Driver app")])],1)]),t._v(" "),i("div",[i("div",{staticClass:"uk-card uk-card-default uk-card-body"},[i("h3",{staticClass:"uk-heading-divider"},[t._v("Super admin")]),t._v(" "),i("router-link",{staticClass:"uk-button uk-button-primary",attrs:{to:{name:"Dashboard"}}},[t._v("Dashboard")])],1)])])},p=[],g={render:h,staticRenderFns:p},k=g,f=i("VU/8"),b=f(m,k,!1,null,null,null),C=b.exports,w={data:function(){return{user_id:void 0,fetching_rides:!1,user_rides:[]}},methods:{request_ride:function(){var t=this;this.$http.post("/api/user/ride/",{user_id:parseInt(this.user_id)}).then(function(e){t.$router.push({name:t.$route.name,params:{user_id:t.user_id}}),t.fetch_user_rides()},function(t){alert(t)})},fetch_user_rides:function(){var t=this;this.fetching_rides=!0,this.$http.get("/api/user/ride/?id="+this.$route.params.user_id).then(function(e){t.user_rides=e.data.rides,t.fetching_rides=!1},function(e){UIkit.notification({message:"Error fetching your rides :(",status:"danger",pos:"bottom-center",timeout:5e3}),t.fetching_rides=!1})}},filters:{readable_format:function(t){var e=new Date(t);return e.toDateString()+" "+e.toLocaleTimeString()}},mounted:function(){void 0!==this.$route.params.user_id&&this.fetch_user_rides()}},y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("GlobalNavBar"),t._v(" "),t.$route.params.user_id?i("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-top uk-margin-left"},[i("router-link",{attrs:{to:{name:t.$route.name,params:{}}}},[i("span",{attrs:{"uk-icon":"arrow-left"}}),t._v(" Request ride with a different USER ID\n        ")]),t._v(" "),t.fetching_rides?i("div",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom"},[i("div",{attrs:{"uk-spinner":""}}),i("br"),t._v(" "),i("div",{staticClass:"uk-margin-small-right"},[t._v("Fetching your rides..")])]):i("div",{staticClass:"uk-testing"},[t.user_rides.length>0?i("table",{staticClass:"uk-table uk-table-hover uk-table-small"},[i("caption",{staticClass:"uk-text-center"},[i("a",{on:{click:function(e){t.fetch_user_rides()}}},[t._v("Refresh")])]),t._v(" "),t._m(0),t._v(" "),i("tbody",t._l(t.user_rides,function(e){return i("tr",{key:e.id},[i("td",{staticClass:"uk-text-left"},[t._v(t._s(e.status))]),t._v(" "),i("td",{staticClass:"uk-text-left"},[t._v(t._s(e.pickup_driver?e.pickup_driver:"-"))]),t._v(" "),i("td",{staticClass:"uk-text-right"},[t._v("\n                            "+t._s(t._f("readable_format")(e.modified_at))+"\n                        ")])])}))]):i("div",{staticClass:"uk-margin-large-top uk-margin-large-bottom uk-text-center"},[t._v("\n                Your ride history will appear here..\n            ")])])],1):i("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-top uk-margin-left"},[i("h3",{staticClass:"uk-card-title"},[t._v("Request a ride")]),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.request_ride(e)}}},[i("div",{staticClass:"uk-margin"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"uk-input",attrs:{type:"number",min:"0",placeholder:"Enter the user ID",required:""},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"uk-button uk-button-primary"},[t._v("Request")])])])],1)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",{staticClass:"uk-text-left"},[t._v("Status")]),t._v(" "),i("th",{staticClass:"uk-text-left"},[t._v("Driver")]),t._v(" "),i("th",{staticClass:"uk-text-right"},[t._v("Ride requested on")])])}],$={render:y,staticRenderFns:x},D=$,R=i("VU/8"),U=R(w,D,!1,null,null,null),E=U.exports,q={data:function(){return{waiting_rides:[],ongoing_ride:null,completed_rides:[],selected_driver:"Select a driver",available_drivers:[{id:1,name:"Driver 1"},{id:2,name:"Driver 2"},{id:3,name:"Driver 3"},{id:4,name:"Driver 4"},{id:5,name:"Driver 5"}],fetching_waiting_rides:!1,fetching_ongoing_ride:!1,fetching_completed_rides:!1,fetching_driver_list:!1}},computed:{driver_name:function(){return"Driver "+this.$route.params.driver_id}},methods:{pickup_ride:function(t){var e=this;this.$http.post("/api/driver/pickup/",{driver_id:this.$route.params.driver_id,ride_id:t.id}).then(function(i){e.waiting_rides.splice(e.waiting_rides.indexOf(t),1)},function(i){404===i.status&&(e.waiting_rides.splice(e.waiting_rides.indexOf(t),1),UIkit.notification({message:"Ride already taken..",status:"danger",pos:"bottom-center",timeout:5e3}))})},fetch_waiting_rides:function(){var t=this;this.fetching_waiting_rides=!0,this.$http.get("/api/driver/waiting_rides/").then(function(e){t.waiting_rides=e.data.waiting_rides,t.fetching_waiting_rides=!1},function(e){t.fetching_waiting_rides=!1})},fetch_completed_rides:function(){var t=this;this.fetching_completed_rides=!0,this.$http.get("/api/driver/completed_rides/?driver_id="+this.$route.params.driver_id).then(function(e){t.completed_rides=e.data.completed_rides,t.fetching_completed_rides=!1},function(e){t.fetching_completed_rides=!1})},fetch_ongoing_ride:function(){var t=this;this.fetching_ongoing_ride=!0,this.$http.get("/api/driver/ongoing_ride/?driver_id="+this.$route.params.driver_id).then(function(e){t.ongoing_ride=e.data.ride_details,t.fetching_ongoing_ride=!1},function(e){t.fetching_ongoing_ride=!1})},set_driver:function(){this.$router.push({name:this.$route.name,params:{driver_id:this.selected_driver}})},fetch_init_data:function(){this.fetch_ongoing_ride(),this.fetch_waiting_rides(),this.fetch_completed_rides()}},mounted:function(){void 0!==this.$route.params.driver_id&&this.fetch_init_data()}},F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("GlobalNavBar"),t._v(" "),i("div",{staticClass:"uk-child-width-3@s uk-child-width-1-3@m uk-padding",attrs:{"uk-grid":""}},[t.$route.params.driver_id?i("div",[i("ul",{staticClass:"uk-breadcrumb"},[i("li",[i("router-link",{attrs:{to:{name:t.$route.name,params:{}}}},[t._v("\n                        Drivers\n                    ")])],1),t._v(" "),i("li",[i("span",[t._v(" "+t._s(t.driver_name)+" ")])])]),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"uk-switcher uk-margin"},[i("li",[i("a",{staticClass:"uk-text-center",on:{click:function(e){t.fetch_ongoing_ride()}}},[t._v("Refresh")]),t._v(" "),t.fetching_ongoing_ride?i("div",{staticClass:"uk-section uk-section-muted"},[t.fetching_ongoing_ride?i("div",{staticClass:"uk-text-center uk-margin-large-top uk-margin-large-bottom"},[i("div",{attrs:{"uk-spinner":""}}),i("br"),t._v(" "),i("div",{staticClass:"uk-margin-small-right"},[t._v("Fetching your current ride details..")])]):t._e()]):i("div",{staticClass:"uk-section uk-section-muted"},[t.ongoing_ride?i("div",{staticClass:"uk-container uk-text-center"},[t._v("\n                            Ride ID: # "+t._s(t.ongoing_ride.id)+" "),i("br"),t._v("\n                            User ID: # "+t._s(t.ongoing_ride.user)+" "),i("br"),t._v("\n                            Requested at: "+t._s(t.ongoing_ride.created_at)+" "),i("br"),t._v("\n                            Picked up at: "+t._s(t.ongoing_ride.modified_at)+"\n                        ")]):i("div",{staticClass:"uk-container uk-text-center"},[t._v("\n                            You do not appear to be on any active rides. "),i("br"),t._v("\n                            Pickup a ride from the "),i("code",[t._v("Waiting")]),t._v(" tab.\n                        ")])])]),t._v(" "),i("li",[i("a",{staticClass:"uk-text-center",on:{click:function(e){t.fetch_waiting_rides()}}},[t._v("Refresh")]),t._v(" "),t.fetching_waiting_rides?i("div",{staticClass:"uk-section uk-section-muted uk-text-center uk-margin-large-top uk-margin-large-bottom"},[i("div",{attrs:{"uk-spinner":""}}),i("br"),t._v(" "),i("div",{staticClass:"uk-margin-small-right"},[t._v("Fetching your pending rides..")])]):i("div",[t.waiting_rides.length>0?i("table",{staticClass:"uk-table uk-table-hover uk-table-middle uk-table-small"},[i("caption",{staticClass:"uk-text-center"},[i("a",{on:{click:function(e){t.fetch_waiting_rides()}}},[t._v("Refresh")])]),t._v(" "),i("tbody",t._l(t.waiting_rides,function(e){return i("tr",{key:e.id},[i("td",[t._v("# "+t._s(e.id))]),t._v(" "),i("td",{staticClass:"uk-text-right"},[i("button",{staticClass:"uk-button uk-button-default",on:{click:function(i){t.pickup_ride(e)}}},[t._v("\n                                            Pickup\n                                        ")])])])}))]):i("div",{staticClass:"uk-section uk-section-muted"},[t._m(1)])])]),t._v(" "),i("li",[i("a",{staticClass:"uk-text-center",on:{click:function(e){t.fetch_completed_rides()}}},[t._v("Refresh")]),t._v(" "),t.fetching_completed_rides?i("div",{staticClass:"uk-section uk-section-muted uk-text-center uk-margin-large-top uk-margin-large-bottom"},[i("div",{attrs:{"uk-spinner":""}}),i("br"),t._v(" "),i("div",{staticClass:"uk-margin-small-right"},[t._v("Loading your completed rides..")])]):i("div",[0==t.completed_rides.length?i("div",{staticClass:"uk-section uk-section-muted uk-container uk-text-center"},[t._v("\n                            You have not completed any rides yet.. "),i("br"),t._v("\n                            Your completed rides appear here.\n                        ")]):i("table",{staticClass:"uk-table uk-table-hover uk-table-middle"},[t._m(2)])])])])]):i("div",[t._v("\n            Please select a driver:\n            "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_driver,expression:"selected_driver"}],staticClass:"uk-select",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected_driver=e.target.multiple?i:i[0]},t.set_driver]}},[i("option",{attrs:{selected:"",disabled:""}},[t._v("Select a driver")]),t._v(" "),t._l(t.available_drivers,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})],2)])])],1)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"uk-child-width-expand uk-subnav",attrs:{"uk-tab":""}},[i("li",{staticClass:"uk-active"},[i("a",{attrs:{href:"#ongoing"}},[t._v("Ongoing")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#waiting"}},[t._v("Waiting")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#complete"}},[t._v("Complete")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-text-center"},[t._v("\n                                Currently there are no waiting rides. "),i("br"),t._v("\n                                Check back after some time..\n                            ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tbody",[i("tr",[i("td",[t._v("# 12312")]),t._v(" "),i("td",{staticClass:"uk-text-right"},[t._v("12:46:39 PM")])])])}],I={render:F,staticRenderFns:A},N=I,P=i("VU/8"),S=P(q,N,!1,null,null,null),V=S.exports,B={},G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("GlobalNavBar"),t._v("\n    Hello from dashboard\n")],1)},H=[],L={render:G,staticRenderFns:H},O=L,Y=i("VU/8"),W=r,M=Y(B,O,!1,W,null,null),T=M.exports,j={computed:{nav_routes:function(){return this.$router.options.routes.filter(function(t){try{return t.nav.visible}catch(t){return!1}})}}},z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{"uk-sticky":"sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"}},[i("nav",{staticClass:"uk-navbar-container",staticStyle:{position:"relative","z-index":"980"},attrs:{"uk-navbar":""}},[i("div",{staticClass:"uk-navbar-center"},[i("ul",{staticClass:"uk-navbar-nav"},t._l(t.nav_routes,function(e){return i("li",{class:{"uk-active":t.$route.name===e.name}},[i("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.nav.title))])],1)}))])])])])},J=[],K={render:z,staticRenderFns:J},Q=K,X=i("VU/8"),Z=X(j,Q,!1,null,null,null),tt=Z.exports;a.a.use(v.a),a.a.component("GlobalNavBar",tt);var et=new v.a({routes:[{path:"/",name:"Landing",component:C,nav:{visible:!0,title:"Home"}},{path:"/user/:user_id?",name:"UserApp",component:E,nav:{visible:!0,title:"User App"}},{path:"/driver/:driver_id?",name:"DriverApp",component:V,nav:{visible:!0,title:"Driver App"}},{path:"/dashboard",name:"Dashboard",component:T,nav:{visible:!0,title:"Dashboard"}}],mode:"history"}),it=i("8+8L");a.a.config.productionTip=!1,a.a.use(it.a),new a.a({el:"#app",router:et,template:"<App/>",mode:"history",components:{App:_}})},lICg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4275e0ae2f33279518db.js.map