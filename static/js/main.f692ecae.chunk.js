(this["webpackJsonpboard-experiment"]=this["webpackJsonpboard-experiment"]||[]).push([[0],[,,,,,,,,function(e,t,s){},,function(e,t,s){},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(5),d=s.n(n),i=(s(17),s(18),s(19),s(2)),o=(s(10),s.p+"static/media/borat.b6c7fdb6.png"),r=s.p+"static/media/gwbush.b1a35170.png",l=s.p+"static/media/vs.93f0f250.png",u=s(0),b=function(e){var t=Object(i.b)();return Object(u.jsxs)("div",{className:"welcome-screen",children:[Object(u.jsx)("img",{className:"welcome-screen__logo",src:o}),Object(u.jsx)("img",{className:"welcome-screen__logo",src:l}),Object(u.jsx)("img",{className:"welcome-screen__logo",src:r}),Object(u.jsx)("span",{className:"welcome-screen__text",children:"Earth is under attack! A swarm of space Georges W. Bushes is trying to take over our planet! You are Borat and you were given a spaceship equiped with space rockets, made in Kazakhstan of course, the greatest nation in the world"}),Object(u.jsxs)("span",{className:"welcome-screen__text",children:["To move, use keyboard arrows ",Object(u.jsx)("button",{className:"welcome-screen__button-demo",children:"<"})," and ",Object(u.jsx)("button",{className:"welcome-screen__button-demo",children:">"})]}),Object(u.jsxs)("span",{className:"welcome-screen__text",children:["To shoot, use the ",Object(u.jsx)("button",{className:"welcome-screen__button-demo",children:"SPACE"})," key!"]}),Object(u.jsx)("span",{className:"welcome-screen__text",children:"If you can save us all, it's nice. I liiiiiike!"}),Object(u.jsx)("button",{name:"button",className:"welcome-screen__button-start",onClick:function(e){t({type:"gameStarted/setValue",payload:!0})},children:"SAVE THE EARTH!"})]})},y=s(6),j=(s(27),s(28),function(e){var t=Object(i.b)(),s=Object(i.c)((function(t){return t.projectiles.find((function(t){return t.id==e.id}))})),c=Object(a.useRef)();return Object(a.useEffect)((function(){!0===s.dead?c.current.className="projectile projectile--dead":(c.current.className="projectile",s.y>=-10?setTimeout((function(){t({type:"projectile/elevate",payload:{position:(parseInt(s.y)-10).toString(),id:e.id}})}),50):t({type:"projectile/setDead",payload:{dead:!0,id:s.id}}))})),Object(u.jsx)("div",{className:"projectile",style:{top:s.y+"vh",left:s.x+"vh"},ref:c})}),h=function(e){var t=Object(i.b)(),s=Object(a.useRef)();Object(a.useEffect)((function(){s.current.focus()}));var c=Object(i.c)((function(e){return e.boratPosition})),n=Object(a.useState)([]),d=Object(y.a)(n,2),o=(d[0],d[1]),r=Object(a.useState)(!1),l=Object(y.a)(r,2),b=(l[0],l[1]),j=Object(a.useState)(Date.now()),h=Object(y.a)(j,2),p=h[0],x=h[1];return Object(u.jsx)("div",{tabIndex:"0",className:"fancy-square",style:{top:c.y+"vh",left:c.x+"vh"},onKeyDown:function(e){var s;e.preventDefault(),"ArrowLeft"===(s=e.key)?c.x>=2&&(o([]),t({type:"borat/putXPosition",payload:parseInt(c.x)-5})):"ArrowRight"===s&&c.x<=92&&(o([]),t({type:"borat/putXPosition",payload:parseInt(c.x)+5}))," "===s&&Date.now()-p>200&&(t({type:"projectile/spawn",payload:parseInt(c.x)}),b(!1),x(Date.now()))},onKeyUp:function(e){e.preventDefault()," "===e.key&&b(!1)},ref:s})},p=(s(29),function(e){var t=Object(i.b)(),s=Object(i.c)((function(e){return e.projectiles})),c=Object(i.c)((function(e){return e.waveCount})),n=Object(i.c)((function(t){return t.enemies[c][e.id]})),d=Object(i.c)((function(t){return t.enemies[c][e.id].dead})),o=Object(a.useRef)();return Object(a.useEffect)((function(){!0===d?o.current.className="gwbush gwbush--dead":(s.length>0&&s.slice(-10).map((function(s){!1===s.dead&&Math.abs(s.x-n.x)<=5&&Math.abs(s.y-n.y)<=5?(t({type:"killCount/add",payload:1}),t({type:"projectile/setDead",payload:{dead:!0,id:s.id}}),t({type:"enemy/setDead",payload:{waveNumber:c,dead:!0,id:e.id}})):o.current.className=n.style})),n.y<100?setTimeout((function(){return t({type:"enemy/descend",payload:{waveNumber:c,position:(parseInt(n.y)+1).toString(),id:e.id}})}),100):(t({type:"lifeCount/decrease",payload:!0}),t({type:"killCount/add",payload:1}),t({type:"enemy/setDead",payload:{waveNumber:c,dead:!0,id:e.id}})))})),Object(u.jsx)("div",{className:n.style,style:{top:n.y+"vh",left:n.x+"vh"},ref:o})}),x=function(){var e=Object(i.c)((function(e){return e.waveCount})),t=Object(i.c)((function(e){return e.enemies})),s=Object(i.c)((function(e){return e.projectiles})),a=t[e].map((function(e){return Object(u.jsx)(p,{id:e.id})}));console.log(s);var c=[];return s.length>0&&(c=s.map((function(e){if(!1===e.dead)return Object(u.jsx)(j,{id:e.id})}))),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)(h,{}),a,c]})},f=(s(8),function(){var e=Object(i.c)((function(e){return e.lifeCount}));return e>0?Object(u.jsxs)("div",{className:"life-counter",children:[Object(u.jsx)("i",{class:"fas fa-heart life-counter__icon"}),Object(u.jsx)("div",{className:"life-counter__value",children:e})]}):Object(u.jsx)("div",{className:"life-counter",children:"Game Over Man!"})}),m=function(){var e=Object(i.c)((function(e){return e.killCount}));return e<10?Object(u.jsxs)("div",{className:"life-counter",children:[Object(u.jsx)("i",{class:"fas fa-skull life-counter__icon"}),Object(u.jsx)("div",{className:"life-counter__value",children:e})]}):Object(u.jsx)("div",{className:"life-counter",children:"They are all dead!"})},w=function(){var e=Object(i.c)((function(e){return e.waveCount}));return e<10?Object(u.jsxs)("div",{className:"life-counter",children:[Object(u.jsx)("i",{class:"fas fa-skull life-counter__icon"}),Object(u.jsx)("div",{className:"life-counter__value",children:e})]}):Object(u.jsx)("div",{className:"life-counter",children:"They are all dead!"})},g=s.p+"static/media/borat-nice.2dcc8014.png",O=s.p+"static/media/youlose.65e4e62e.png",v={boratPosition:{x:"50",y:"90"},GWBushPosition:{x:"50",y:"50"},enemies:[[{id:0,x:"5",y:"10",dead:!1,style:"gwbush"},{id:1,x:"25",y:"10",dead:!1,style:"gwbush"},{id:2,x:"45",y:"10",dead:!1,style:"gwbush"},{id:3,x:"65",y:"10",dead:!1,style:"gwbush"},{id:4,x:"85",y:"10",dead:!1,style:"gwbush"},{id:5,x:"5",y:"20",dead:!1,style:"gwbush"},{id:6,x:"25",y:"20",dead:!1,style:"gwbush"},{id:7,x:"45",y:"20",dead:!1,style:"gwbush"},{id:8,x:"65",y:"20",dead:!1,style:"gwbush"},{id:9,x:"85",y:"20",dead:!1,style:"gwbush gwbush--red"}],[{id:0,x:"5",y:"10",dead:!1,style:"gwbush"},{id:1,x:"25",y:"10",dead:!1,style:"gwbush"},{id:2,x:"45",y:"10",dead:!1,style:"gwbush gwbush--red"},{id:3,x:"65",y:"10",dead:!1,style:"gwbush"},{id:4,x:"85",y:"10",dead:!1,style:"gwbush gwbush--red"},{id:5,x:"5",y:"20",dead:!1,style:"gwbush"},{id:6,x:"25",y:"20",dead:!1,style:"gwbush gwbush--red"},{id:7,x:"45",y:"20",dead:!1,style:"gwbush"},{id:8,x:"65",y:"20",dead:!1,style:"gwbush gwbush--red"},{id:9,x:"85",y:"20",dead:!1,style:"gwbush"}],[{id:0,x:"5",y:"10",dead:!1,style:"gwbush"},{id:1,x:"25",y:"10",dead:!1,style:"gwbush gwbush--red"},{id:2,x:"45",y:"10",dead:!1,style:"gwbush"},{id:3,x:"65",y:"10",dead:!1,style:"gwbush gwbush--red"},{id:4,x:"85",y:"10",dead:!1,style:"gwbush"},{id:5,x:"5",y:"20",dead:!1,style:"gwbush"},{id:6,x:"25",y:"20",dead:!1,style:"gwbush"},{id:7,x:"45",y:"20",dead:!1,style:"gwbush gwbush--red"},{id:8,x:"65",y:"20",dead:!1,style:"gwbush"},{id:9,x:"85",y:"20",dead:!1,style:"gwbush"}],[{id:0,x:"5",y:"10",dead:!1,style:"gwbush"},{id:1,x:"25",y:"10",dead:!1,style:"gwbush"},{id:2,x:"45",y:"10",dead:!1,style:"gwbush"},{id:3,x:"65",y:"10",dead:!1,style:"gwbush"},{id:4,x:"85",y:"10",dead:!1,style:"gwbush"},{id:5,x:"5",y:"20",dead:!1,style:"gwbush"},{id:6,x:"25",y:"20",dead:!1,style:"gwbush"},{id:7,x:"45",y:"20",dead:!1,style:"gwbush"},{id:8,x:"65",y:"20",dead:!1,style:"gwbush"},{id:9,x:"85",y:"20",dead:!1,style:"gwbush"}],[{id:0,x:"5",y:"10",dead:!1,style:"gwbush"},{id:1,x:"25",y:"10",dead:!1,style:"gwbush"},{id:2,x:"45",y:"10",dead:!1,style:"gwbush"},{id:3,x:"65",y:"10",dead:!1,style:"gwbush"},{id:4,x:"85",y:"10",dead:!1,style:"gwbush"},{id:5,x:"5",y:"20",dead:!1,style:"gwbush"},{id:6,x:"25",y:"20",dead:!1,style:"gwbush"},{id:7,x:"45",y:"20",dead:!1,style:"gwbush"},{id:8,x:"65",y:"20",dead:!1,style:"gwbush"},{id:9,x:"85",y:"20",dead:!1}]],projectiles:[],lifeCount:3,killCount:0,waveCount:0,gameStarted:!1},_=function(e){Object(i.b)();return Object(i.c)((function(e){return e.lifeCount}))>0?Object(u.jsxs)("div",{className:"welcome-screen",children:[Object(u.jsx)("img",{className:"welcome-screen__logo welcome-screen__logo--big",src:g}),Object(u.jsx)("span",{className:"welcome-screen__text",children:"WOW Dude. You saved the earth. Now humans can kill each other in peace and harmony"})]}):Object(u.jsxs)("div",{className:"welcome-screen",children:[Object(u.jsx)("img",{className:"welcome-screen__logo welcome-screen__logo--big",src:O}),Object(u.jsx)("span",{className:"welcome-screen__text",children:"WOW Dude. You suck. Everyone's dead now. Children and everything. Also, it's your fault"})]})};var N=function(){var e=Object(i.c)((function(e){return e.gameStarted})),t=Object(i.c)((function(e){return e.killCount})),s=Object(i.c)((function(e){return e.lifeCount})),a=Object(i.c)((function(e){return e.waveCount})),c=Object(i.c)((function(e){return e.enemies[a].length})),n=Object(i.c)((function(e){return e.enemies.length})),d=Object(i.b)();return!0===e?(t===c&&a!=n-1&&(d({type:"wave/add",payload:1}),d({type:"killCount/add",payload:-10})),a!=n-1&&s>0?Object(u.jsxs)("div",{className:"screen",children:[Object(u.jsxs)("div",{className:"counters",children:[Object(u.jsx)(f,{}),Object(u.jsx)(m,{}),Object(u.jsx)(w,{})]}),Object(u.jsx)(x,{})]}):Object(u.jsx)("div",{className:"screen",children:Object(u.jsx)(_,{})})):Object(u.jsx)("div",{className:"screen",children:Object(u.jsx)(b,{})})},C=s(12),k=s(4),S=(s(30),s(3));var D=Object(C.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"borat/putXPosition":return Object(k.a)(Object(k.a)({},e),{},{boratPosition:{x:t.payload,y:e.boratPosition.y}});case"borat/putYPosition":return Object(k.a)(Object(k.a)({},e),{},{boratPosition:{x:e.boratPosition.x,y:t.payload}});case"lifeCount/decrease":return Object(k.a)(Object(k.a)({},e),{},{lifeCount:e.lifeCount-1});case"killCount/add":return Object(k.a)(Object(k.a)({},e),{},{killCount:e.killCount+t.payload});case"enemy/descend":return Object(S.a)(e,(function(e){e.enemies[t.payload.waveNumber][t.payload.id].y=t.payload.position}));case"projectile/elevate":return Object(S.a)(e,(function(e){e.projectiles[t.payload.id].y=t.payload.position}));case"projectile/spawn":return Object(S.a)(e,(function(e){console.log(e.projectiles.length),e.projectiles.push({id:e.projectiles.length,x:t.payload.toString(),y:"90",dead:!1})}));case"enemy/setDead":return Object(S.a)(e,(function(e){e.enemies[t.payload.waveNumber][t.payload.id].dead=t.payload.dead}));case"projectile/setDead":return Object(S.a)(e,(function(e){e.projectiles[t.payload.id].dead=t.payload.dead}));case"projectile/remove":return Object(S.a)(e,(function(e){e.projectiles=e.projectiles.splice(t.payload,1)}));case"gameStarted/setValue":return Object(S.a)(e,(function(e){e.gameStarted=t.payload}));case"wave/add":return Object(S.a)(e,(function(e){e.waveCount=e.waveCount+t.payload}));default:return e}}));console.log("Initial state: ",D.getState());var P=D;d.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i.a,{store:P,children:Object(u.jsx)(N,{})})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.f692ecae.chunk.js.map