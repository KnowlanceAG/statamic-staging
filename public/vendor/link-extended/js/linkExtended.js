!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=Statamic.$bard.tiptap.commands,o=r.removeMark,a=r.pasteRule,s=Statamic.$bard.tiptap.utils.getMarkRange,l=Statamic.$bard.tiptap.core,c=l.Plugin,u=l.TextSelection,f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"name",value:function(){return"link"}},{key:"schema",value:function(){return{attrs:{href:{default:null},target:{default:null},rel:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(t){return{href:t.getAttribute("href"),target:t.getAttribute("target"),rel:t.getAttribute("rel")}}}],toDOM:function(t){return["a",t.attrs,0]}}}},{key:"commands",value:function(t){var e=t.type,n=t.updateMark;return function(t){return t.href?n(e,t):o(e)}}},{key:"pasteRules",value:function(t){var e=t.type;return[a(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,e,(function(t){return{href:t}}))]}},{key:"plugins",value:function(){return[new c({props:{handleClick:function(t,e){var n=t.state,i=n.schema,r=n.doc,o=n.tr,a=s(r.resolve(e),i.marks.link);if(a){var l=r.resolve(a.from),c=r.resolve(a.to),f=new u(l,c),d=o.setSelection(f);t.dispatch(d),Statamic.$emit("link-selected",f)}else Statamic.$emit("link-deselected")}}})]}}])&&i(e.prototype,n),r&&i(e,r),t}();function d(t,e,n,i,r,o,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}var h=d({props:{config:Object,initialLinkAttrs:Object},data:function(){return{linkAttrs:this.initialLinkAttrs,linkInput:this.initialLinkAttrs.href,targetBlank:null,noFollow:null,isEditing:!1}},computed:{hasLink:function(){return null!=this.actualLinkHref},isInternalLink:function(){return!1},actualLinkHref:function(){return this.isInternalLink?this.internalLink.url:this.linkAttrs.href},actualLinkText:function(){return this.isInternalLink?this.internalLink.text:this.linkAttrs.href}},created:function(){var t=this;this.noFollow=!!this.linkAttrs.rel&&/nofollow/g.test(this.linkAttrs.rel),this.noOpener=!!this.linkAttrs.rel&&/noopener/g.test(this.linkAttrs.rel),this.noReferrer=!!this.linkAttrs.rel&&/noreferrer/g.test(this.linkAttrs.rel),this.targetBlank=this.linkAttrs.href?"_blank"===this.linkAttrs.target:this.config.target_blank,this.linkAttrs.href||this.edit(),Statamic.$on("link-selected",(function(e){var n=e.content().content.content[0].content.content[0].marks[0].attrs;t.linkAttrs=n,t.linkInput=n.href,t.targetBlank="_blank"===n.target,t.noFollow=!!n.rel&&/nofollow/g.test(n.rel)})),Statamic.$on("link-deselected",(function(){t.$emit("deselected")}))},methods:{edit:function(){var t=this;this.isEditing=!0,this.$nextTick((function(){return t.$refs.input.focus()}))},remove:function(){this.$emit("updated",{href:null})},commit:function(){if(this.linkInput){var t=[];(this.config.link_noopener||this.noOpener)&&t.push("noopener"),(this.config.link_noreferrer||this.noReferrer)&&t.push("noreferrer"),this.noFollow&&t.push("nofollow"),t=t.length?t.join(" "):null,this.$emit("updated",{href:this.sanitizeLink(this.linkInput),rel:t,target:this.targetBlank?"_blank":null})}},getLinkId:function(t){var e=t.match(/^{{ link:(.*) }}$/);return e&&e[1]?e[1]:null},sanitizeLink:function(t){var e=t.trim();return e.match(/^\w[\w\-_.]+\.(co|uk|com|org|net|gov|biz|info|us|eu|de|fr|it|es|pl|nz)/i)?"https://"+e:e}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bard-link-toolbar bg-black"},[n("div",{staticClass:"flex items-center px-2"},[n("div",{staticClass:"flex-1 min-w-0"},[n("div",{staticClass:"link-container"},[n("a",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"link",attrs:{href:t.actualLinkHref,target:"_blank"},domProps:{textContent:t._s(t.actualLinkText)}})]),t._v(" "),n("div",{class:t.isEditing?"flex items-center":"hidden"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkInput,expression:"linkInput"}],ref:"input",staticClass:"flex-1 input",attrs:{type:"text"},domProps:{value:t.linkInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.commit(e))},input:function(e){e.target.composing||(t.linkInput=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"bard-link-toolbar-buttons"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.__("Edit Link"),expression:"__('Edit Link')"},{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],on:{click:t.edit}},[n("span",{staticClass:"icon icon-pencil"})]),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.__("Remove Link"),expression:"__('Remove Link')"},{name:"show",rawName:"v-show",value:t.hasLink&&t.isEditing,expression:"hasLink && isEditing"}],on:{click:t.remove}},[n("span",{staticClass:"icon icon-trash"})]),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.__("Done"),expression:"__('Done')"},{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],on:{click:t.commit}},[n("span",{staticClass:"icon icon-check"})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"p-sm pt-1 border-t border-faint-white"},[n("label",{staticClass:"text-2xs text-white flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.targetBlank,expression:"targetBlank"}],staticClass:"checkbox mr-1 -mt-sm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.targetBlank)?t._i(t.targetBlank,null)>-1:t.targetBlank},on:{change:function(e){var n=t.targetBlank,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.targetBlank=n.concat([null])):o>-1&&(t.targetBlank=n.slice(0,o).concat(n.slice(o+1)))}else t.targetBlank=r}}}),t._v("\n      "+t._s(t.__("Open in new window"))+"\n    ")]),t._v(" "),n("pre",{staticClass:"text-white"}),t._v(" "),n("label",{staticClass:"text-2xs text-white flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noFollow,expression:"noFollow"}],staticClass:"checkbox mr-1 -mt-sm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.noFollow)?t._i(t.noFollow,null)>-1:t.noFollow},on:{change:function(e){var n=t.noFollow,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.noFollow=n.concat([null])):o>-1&&(t.noFollow=n.slice(0,o).concat(n.slice(o+1)))}else t.noFollow=r}}}),t._v("\n      "+t._s(t.__("No Follow"))+"\n    ")]),t._v(" "),t.config.link_noopener?t._e():n("label",{staticClass:"text-2xs text-white flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noOpener,expression:"noOpener"}],staticClass:"checkbox mr-1 -mt-sm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.noOpener)?t._i(t.noOpener,null)>-1:t.noOpener},on:{change:function(e){var n=t.noOpener,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.noOpener=n.concat([null])):o>-1&&(t.noOpener=n.slice(0,o).concat(n.slice(o+1)))}else t.noOpener=r}}}),t._v("\n      "+t._s(t.__("No Opener"))+"\n    ")]),t._v(" "),t.config.link_noreferrer?t._e():n("label",{staticClass:"text-2xs text-white flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noReferrer,expression:"noReferrer"}],staticClass:"checkbox mr-1 -mt-sm",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.noReferrer)?t._i(t.noReferrer,null)>-1:t.noReferrer},on:{change:function(e){var n=t.noReferrer,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.noReferrer=n.concat([null])):o>-1&&(t.noReferrer=n.slice(0,o).concat(n.slice(o+1)))}else t.noReferrer=r}}}),t._v("\n      "+t._s(t.__("No Referrer"))+"\n    ")])])])}),[],!1,null,null,null).exports,p=d({mixins:[BardToolbarButton],components:{LinkToolbar:h},data:function(){return{linkAttrs:null,showingToolbar:!1,getMarkAttrs:this.editor.getMarkAttrs.bind(this.editor)}},methods:{showLinkToolbar:function(t){var e=this;this.showingToolbar=!1,this.$nextTick((function(){e.showingToolbar=!0,e.linkAttrs=t}))},setLink:function(t){this.editor.commands.link(t),this.linkAttrs=null,this.showingToolbar=!1,this.editor.focus()}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-block relative"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",class:{active:t.active},attrs:{"aria-label":t.button.text},domProps:{innerHTML:t._s(t.button.html)},on:{click:function(e){t.showLinkToolbar(t.getMarkAttrs("link"))}}}),t._v(" "),t.showingToolbar?n("link-toolbar",{attrs:{"initial-link-attrs":t.linkAttrs,config:t.config,bard:t.bard},on:{updated:t.setLink,deselected:function(e){t.showingToolbar=!1}}}):t._e()],1)}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.$bard.extend((function(t){return(0,t.mark)(new f)})),Statamic.$bard.buttons((function(t){var e=t.findIndex((function(t){return"anchor"===t.name}));-1!==e&&t.splice(e,1,{name:"anchor_extended",text:"Link",command:"link",icon:"link",component:p})}))}))}]);