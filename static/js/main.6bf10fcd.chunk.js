(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{194:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(174),r=n.n(s),i=n(28),o=(n(194),n(175)),j=n.n(o),u=n(106),l=n.n(u),b=n(110),h=n(176),d=n(189),m=n(3);var O=function(e){var t=e.socket,n=e.username,a=e.room,s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)([]),O=Object(i.a)(u,2),p=O[0],x=O[1],f=function(){var e=Object(h.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=6;break}return c={room:a,author:n,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("send_message",c);case 4:x((function(e){return[].concat(Object(b.a)(e),[c])})),j("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.on("receive_message",(function(e){x((function(t){return[].concat(Object(b.a)(t),[e])}))}))}),[t]),Object(m.jsxs)("div",{className:"chat-window",children:[Object(m.jsx)("div",{className:"chat-header",children:Object(m.jsx)("p",{children:"My Chat"})}),Object(m.jsx)("div",{className:"chat-body",children:Object(m.jsx)(d.a,{className:"message-container",children:p.map((function(e){return Object(m.jsx)("div",{className:"message",id:n===e.author?"other":"you",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"message-content",children:Object(m.jsx)("p",{children:e.message})}),Object(m.jsxs)("div",{className:"message-meta",children:[Object(m.jsx)("p",{id:"time",children:e.time}),Object(m.jsx)("p",{id:"author",children:n===e.author?"Eu":e.author})]})]})})}))})}),Object(m.jsxs)("div",{className:"chat-footer",children:[Object(m.jsx)("input",{type:"text",value:o,placeholder:"Mensagem...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(m.jsx)("button",{onClick:f,children:"\u25ba"})]})]})},p=j.a.connect("https://api-websocket-chat.herokuapp.com");var x=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)(!1),l=Object(i.a)(u,2),b=l[0],h=l[1];return Object(m.jsx)("div",{className:"App",children:b?Object(m.jsx)(O,{socket:p,username:n,room:o}):Object(m.jsxs)("div",{className:"joinChatContainer",children:[Object(m.jsx)("h3",{children:"Bate papo"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&""!==o&&(p.emit("join_room",o),h(!0))},children:[Object(m.jsx)("input",{type:"text",placeholder:"Gabriel...",onChange:function(e){a(e.target.value)}}),Object(m.jsx)("input",{type:"text",placeholder:"ID da sala...",onChange:function(e){j(e.target.value)}}),Object(m.jsx)("button",{type:"submit",children:"Entrar na Sala"})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,384)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),f()}},[[383,1,2]]]);
//# sourceMappingURL=main.6bf10fcd.chunk.js.map