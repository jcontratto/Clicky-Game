(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"/images/bender.png",name:"Bender"},{id:2,image:"/images/farnsworth.png",name:"Farnsworth"},{id:3,image:"/images/fry.png",name:"Fry"},{id:4,image:"/images/hermes.png",name:"Hermes"},{id:5,image:"/images/kif.png",name:"Kif"},{id:6,image:"/images/Leela2.png",name:"Leela"},{id:7,image:"/images/nibbler.png",name:"Nibbler"},{id:8,image:"/images/scruffy.png",name:"Scruffy"},{id:9,image:"/images/zap.png",name:"Zap"},{id:10,image:"/images/zoidberg.png",name:"Dr.Zoidberg"}]},,,function(e,a,n){e.exports=n(26)},,,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(2),c=n.n(r),m=(n(14),n(3)),l=n(4),s=n(7),u=n(5),o=n(8),g=(n(16),function(e){return i.a.createElement("nav",{className:"navbar navbar-light bg-light"},i.a.createElement("ul",null,i.a.createElement("li",null,"Score: ",e.score)))}),d=(n(18),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=(n(20),function(e){return i.a.createElement("div",{className:"card",onClick:e.images},i.a.createElement("div",{className:"img-container",onClick:function(){return e.imageClick(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,"Name: ",e.name))))}),p=(n(22),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=n(6),E=(n(24),function(e){function a(){var e,n;Object(m.a)(this,a);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={characters:h,charactersClicked:[],score:0},n.handleCounter=function(){n.state.this.setState({count:n.state.score+1})},n}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,null,"score=",this.state.score),i.a.createElement(p,null,i.a.createElement(d,null,"Futurama Clicky Game"),this.state.characters.map(function(a){return i.a.createElement(f,{imageClick:e.imageClick,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(t.Component));c.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.69fb075c.chunk.js.map