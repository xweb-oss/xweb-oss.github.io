(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{123:function(r,t,e){r.exports=e.p+"assets/img/shangfeng.11a856d7.jpg"},195:function(r,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"面试题集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题集成","aria-hidden":"true"}},[r._v("#")]),r._v(" 面试题集成")]),r._v(" "),a("img",{attrs:{src:e(123),alt:"Logo",width:"100%"}}),r._v(" "),a("p",[a("strong",[r._v("vue")])]),r._v(" "),a("ol",[a("li",[r._v("参考"),a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/blob/master/lib/Vue.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("面试题"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("参考"),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[r._v("官网vue-router"),a("OutboundLink")],1)])]),r._v(" "),a("p",[a("strong",[r._v("react")])]),r._v(" "),a("ol",[a("li",[r._v("参考"),a("a",{attrs:{href:"https://github.com/haizlin/fe-interview/blob/master/lib/React.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("面试题"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("参考"),a("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/basic-components",target:"_blank",rel:"noopener noreferrer"}},[r._v("官网react-router"),a("OutboundLink")],1)])]),r._v(" "),a("p",[a("strong",[r._v("javascript")])]),r._v(" "),a("ol",[a("li",[r._v("参考"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("阮一峰博客"),a("OutboundLink")],1)])]),r._v(" "),a("p",[a("strong",[r._v("网路攻击 - xss攻击")])]),r._v(" "),a("h6",{attrs:{id:"_1-基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础概念","aria-hidden":"true"}},[r._v("#")]),r._v(" 1.基础概念")]),r._v(" "),a("p",[r._v("XSS（Cross Site Scripting）攻击全称跨站脚本攻击，是为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS，XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。比如这些代码包括HTML代码和客户端脚本。（摘自百度百科）")]),r._v(" "),a("h6",{attrs:{id:"_2-主要危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-主要危害","aria-hidden":"true"}},[r._v("#")]),r._v(" 2.主要危害")]),r._v(" "),a("p",[r._v("1、盗取各类用户帐号，如机器登录帐号、用户网银帐号、各类管理员帐号"),a("br"),r._v("\n2、控制企业数据，包括读取、篡改、添加、删除企业敏感数据的能力"),a("br"),r._v("\n3、盗窃企业重要的具有商业价值的资料"),a("br"),r._v("\n4、非法转账"),a("br"),r._v("\n5、强制发送电子邮件"),a("br"),r._v("\n6、网站挂马"),a("br"),r._v("\n7、控制受害者机器向其它网站发起攻击")]),r._v(" "),a("h6",{attrs:{id:"_3-攻击方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-攻击方式","aria-hidden":"true"}},[r._v("#")]),r._v(" 3.攻击方式")]),r._v(" "),a("p",[r._v("简单的说就是：\n1、马冬梅给Bob发送一个恶意构造了Web的URL。"),a("br"),r._v("\n2、Bob点击并查看了这个URL。"),a("br"),r._v("\n3、恶意页面中的JavaScript打开一个具有漏洞的HTML页面并将其安装在Bob电脑上。"),a("br"),r._v("\n4、具有漏洞的HTML页面包含了在Bob电脑本地域执行的JavaScript。"),a("br"),r._v("\n5、马冬梅的恶意脚本可以在Bob的电脑上执行Bob所持有的权限下的命令。")]),r._v(" "),a("p",[r._v("常用来：、窃取用户信息，如cookie，token，账号密码等。")]),r._v(" "),a("h6",{attrs:{id:"_4-防范手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-防范手段","aria-hidden":"true"}},[r._v("#")]),r._v(" 4. 防范手段")]),r._v(" "),a("p",[a("strong",[r._v("1、入参字符过滤")]),a("br"),r._v("\n　　在源头控制，把输入的一些不合法的东西都过滤掉，从而保证安全性。如移除用户提交的的DOM属性如onerror，移除用户上传的Style节点，"),a("code",[r._v("<iframe>, <script>，<a>")]),r._v("节点等")]),r._v(" "),a("p",[a("strong",[r._v("2、出参进行编码")]),a("br"),r._v('\n　　如果源头没控制好，就得后期补救了：像一些常见的符号，如<>在输出的时候要对其进行转换编码，这样做浏览器是不会对该标签进行解释执行的，同时也不影响显示效果。例如：对<>做编码如："<"用:"<",">"用:">"来代替。')]),r._v(" "),a("p",[a("strong",[r._v("3、入参长度限制")]),a("br"),r._v("\n　　通过以上的案例我们不难发现xss攻击要能达成往往需要较长的字符串，因此对于一些可以预期的输入可以通过限制长度强制截断来进行防御。")]),r._v(" "),a("p",[a("strong",[r._v("4、设置cookie httponly为true")]),a("br"),r._v("\n　　具体详情请参考："),a("a",{attrs:{href:"https://www.cnblogs.com/mao2080/p/9520185.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.cnblogs.com/mao2080/p/9520185.html"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=n.exports}}]);