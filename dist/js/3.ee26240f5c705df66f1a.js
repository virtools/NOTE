(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"d-flex flex-fill flex-row"},[s("navs",{staticClass:"sidebar flex-fill flex-column p-2",attrs:{list:t.navList,avtiveid:t.pageid},on:{change:t.item_click}}),t._v(" "),s("div",{staticClass:"d-flex flex-fill flex-column content"},[s("navs",{staticClass:"topbar flex-row px-2 pt-2",attrs:{list:t.navList,avtiveid:t.pageid},on:{change:t.item_click}}),t._v(" "),s("nav",{staticClass:"navbar navbar-expand-lg justify-content-end tool mb-4"},[t.selectList.length!=t.dataList.length?s("icon-button",{staticClass:"btn-sm p-0 mr-2",attrs:{icon:"select_all",disabled:t.run},nativeOn:{click:function(i){return t.selectAll_click(t.dataList)}}},[t._v("全選")]):t._e(),t._v(" "),t.selectList.length?s("icon-button",{staticClass:"btn-sm p-0 mr-2",attrs:{icon:"clear",disabled:t.run},nativeOn:{click:function(i){return t.deselect_click(i)}}},[t._v("取消")]):t._e(),t._v(" "),s("icon-button",{staticClass:"btn-sm p-0 mr-2",attrs:{icon:"delete",disabled:t.run||!t.selectList.length},nativeOn:{click:function(i){return t.delete_click(i)}}},[t._v("刪除")]),t._v(" "),s("icon-button",{staticClass:"btn-sm p-0 mr-2",attrs:{icon:"star",disabled:t.run||!t.selectList.length},nativeOn:{click:function(i){return t.star_click(i)}}},[t._v("星號")]),t._v(" "),s("icon-button",{staticClass:"btn-sm p-0",attrs:{icon:"note_add"},nativeOn:{click:function(i){return t.add_click(i)}}},[t._v("新增筆記")])],1),t._v(" "),s("b-overlay",{staticClass:"flex-fill",attrs:{show:t.run,rounded:"sm",variant:"light",opacity:"0.75",blur:"0"}},[s("cards",{attrs:{list:t.dataList},scopedSlots:t._u([{key:"default",fn:function(i){return[s("b-card",{staticClass:"mb-4 shadow-sm",attrs:{tag:"label"}},[s("div",{staticClass:"d-flex justify-content-end"},[s("b-form-checkbox",{attrs:{value:i.item.id},model:{value:t.selectList,callback:function(i){t.selectList=i},expression:"selectList"}})],1),t._v(" "),s("b-card-title",[s("i",{staticClass:"material-icons icon-star align-middle"},[t._v(t._s(i.item.star?"star":"star_border"))]),t._v(" "),s("span",{staticClass:"align-middle",domProps:{innerHTML:t._s(i.item.title)}})]),t._v(" "),s("b-card-text",[s("p",{staticClass:"ellipsis",domProps:{innerHTML:t._s(i.item.ellipsis)}})]),t._v(" "),s("div",{staticClass:"d-flex justify-content-end"},[s("b-button",{attrs:{href:"#",variant:"primary"},on:{click:function(s){return t.view_click(i.item)}}},[t._v("查看")])],1)],1)]}}])})],1)],1)],1)};e._withStripped=!0;var n=s(68),a=s.n(n),c=s(75),l=s(74),r=s(77),o={name:"all",components:{Navs:c.a,Cards:l.a,IconButton:r.a},data:function(){return{selectList:[],pageid:this.$route.name,dataList:[],run:!1}},mounted:function(){this.update()},methods:{update:function(){var t=this;this.run=!0,a.a.get("dataList").then((function(i){t.dataList=i.data,t.run=!1}))},item_click:function(t){this.$router.push({name:t.id})},add_click:function(){this.$router.push({name:"edit",params:{id:"new"}})},view_click:function(t){this.$router.push({name:"edit",params:{id:t.id}})},delete_click:function(){var t=this;this.run=!0,a.a.delete("dataList",{data:this.selectList}).then((function(i){t.dataList=i.data,t.selectList=[],t.run=!1}))},star_click:function(){var t=this;this.run=!0;var i=!this.selectList.every((function(i){return t.dataList.find((function(t){return i===t.id})).star})),s=this.selectList.map((function(t){return{id:t,star:i}}));a.a.post("dataList",s).then((function(i){t.dataList=i.data,t.run=!1}))},selectAll_click:function(t){this.selectList=[];for(var i=0;i<t.length;i++)this.selectList.push(t[i].id)},deselect_click:function(){this.selectList=[]}},computed:{navList:function(){return this.$store.state.navList}}},u=s(31),d=Object(u.a)(o,e,[],!1,null,"0f2199e4",null);d.options.__file="src/vue/pages/All.vue";i.default=d.exports},74:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container-fluid p-4"},[s("div",{staticClass:"row"},t._l(t.list,(function(i){return s("div",{key:i.id,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3"},[t._t("default",null,{item:i})],2)})),0)])};e._withStripped=!0;var n={name:"cards",props:{list:Array}},a=s(31),c=Object(a.a)(n,e,[],!1,null,"01627a4c",null);c.options.__file="src/vue/components/Cards.vue";i.a=c.exports},75:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",{staticClass:"nav nav-tabs"},t._l(t.list,(function(i){return s("li",{key:i.id,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.avtiveid==i.id},attrs:{href:"javascript:void(0);"},on:{click:function(s){return t.item_click(i)}}},[t._v(t._s(i.title))])])})),0)};e._withStripped=!0;var n={name:"navs",props:{list:Array,avtiveid:String},methods:{item_click:function(t){this.$emit("change",t)}}},a=s(31),c=Object(a.a)(n,e,[],!1,null,"5d388e57",null);c.options.__file="src/vue/components/Navs.vue";i.a=c.exports},77:function(t,i,s){"use strict";var e=function(){var t=this.$createElement,i=this._self._c||t;return i("button",{staticClass:"btn",attrs:{type:"button"}},[""!==this.icon?i("i",{staticClass:"material-icons icon-color align-middle"},[this._v(this._s(this.icon))]):this._e(),this._v(" "),i("span",{staticClass:"align-middle"},[this._t("default")],2)])};e._withStripped=!0;var n={props:{icon:{type:String,default:""}}},a=s(31),c=Object(a.a)(n,e,[],!1,null,"e354921c",null);c.options.__file="src/vue/components/IconButton.vue";i.a=c.exports}}]);