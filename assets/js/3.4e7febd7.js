(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(t,n,e){var r=e(24)("unscopables"),i=Array.prototype;null==i[r]&&e(25)(i,r,{}),t.exports=function(t){i[r][t]=!0}},105:function(t,n,e){"use strict";e.d(n,"c",function(){return u}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return c}),e.d(n,"a",function(){return l}),e.d(n,"b",function(){return f});const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return s.test(t)}function a(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function l(t){if(u(t))return t;const n=t.match(r),e=n?n[0]:"",s=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return o.test(s)?t:s+".html"+e}function f(t,n,e){if(!t)return e;let r,i=n;for(;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||e}},115:function(t,n){t.exports={}},116:function(t,n,e){},117:function(t,n,e){var r=e(28).f,i=e(13),o=e(24)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},181:function(t,n,e){for(var r=e(182),i=e(55),o=e(26),s=e(7),u=e(25),a=e(115),c=e(24),l=c("iterator"),f=c("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(d),k=0;k<h.length;k++){var m,v=h[k],y=d[v],L=s[v],S=L&&L.prototype;if(S&&(S[l]||u(S,l,p),S[f]||u(S,f,v),a[v]=p,y))for(m in r)S[m]||o(S,m,r[m],!0)}},182:function(t,n,e){"use strict";var r=e(104),i=e(183),o=e(115),s=e(30);t.exports=e(184)(Array,"Array",function(t,n){this._t=s(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},183:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},184:function(t,n,e){"use strict";var r=e(56),i=e(6),o=e(26),s=e(25),u=e(115),a=e(185),c=e(117),l=e(186),f=e(24)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,h,k,m,v){a(e,n,h);var y,L,S,x=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},T=n+" Iterator",b="values"==k,g=!1,O=t.prototype,M=O[f]||O["@@iterator"]||k&&O[k],_=M||x(k),A=k?b?x("entries"):_:void 0,j="Array"==n&&O.entries||M;if(j&&(S=l(j.call(new t)))!==Object.prototype&&S.next&&(c(S,T,!0),r||"function"==typeof S[f]||s(S,f,d)),b&&M&&"values"!==M.name&&(g=!0,_=function(){return M.call(this)}),r&&!v||!p&&!g&&O[f]||s(O,f,_),u[n]=_,u[T]=d,k)if(y={values:b?_:x("values"),keys:m?_:x("keys"),entries:A},v)for(L in y)L in O||o(O,L,y[L]);else i(i.P+i.F*(p||g),n,y);return y}},185:function(t,n,e){"use strict";var r=e(58),i=e(40),o=e(117),s={};e(25)(s,e(24)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(s,{next:i(1,e)}),o(t,n+" Iterator")}},186:function(t,n,e){var r=e(13),i=e(54),o=e(41)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},187:function(t,n,e){var r=e(54),i=e(55);e(188)("keys",function(){return function(t){return i(r(t))}})},188:function(t,n,e){var r=e(6),i=e(27),o=e(8);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*o(function(){e(1)}),"Object",s)}},189:function(t,n,e){"use strict";var r=e(6),i=e(39)(3);r(r.P+r.F*!e(29)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},190:function(t,n,e){"use strict";var r=e(116);e.n(r).a},199:function(t,n,e){"use strict";e.r(n);e(181),e(187),e(189),e(57);var r=e(105),i={props:{link:{required:!0}},computed:{normalizedlink:function(){return Object(r.a)(this.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.normalizedlink}):"/"===this.normalizedlink}},methods:{isExternal:r.c,isMailto:r.d,isTel:r.e}},o=(e(190),e(4)),s=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.normalizedlink)?e("a",{staticClass:"nav-link external",attrs:{href:t.normalizedlink,target:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"_blank",rel:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"noopener noreferrer"}},[t._t("default")],2):e("router-link",{staticClass:"nav-link",attrs:{to:t.normalizedlink,exact:t.exact}},[t._t("default")],2)},[],!1,null,null,null);n.default=s.exports}}]);