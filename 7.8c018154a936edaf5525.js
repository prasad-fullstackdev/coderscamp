(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5UzA":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=(u("o0su"),function(){function l(l){this.sm=l}return l.prototype.ngOnInit=function(){this.sm.setIsShowThemeMenu(!1)},l}()),o=function(){function l(){}return l.prototype.ngOnInit=function(){var l=this;l.hasUserMedia()?(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:!0},function(n){document.querySelector("video").srcObject=n,l.stream=n},function(l){})):alert("WebRTC is not supported"),document.getElementById("btnGetAudioTracks").addEventListener("click",function(){console.log("getAudioTracks"),console.log(l.stream.getAudioTracks())}),document.getElementById("btnGetTrackById").addEventListener("click",function(){console.log("getTrackById"),console.log(l.stream.getTrackById(l.stream.getAudioTracks()[0].id))}),document.getElementById("btnGetTracks").addEventListener("click",function(){console.log("getTracks()"),console.log(l.stream.getTracks())}),document.getElementById("btnGetVideoTracks").addEventListener("click",function(){console.log("getVideoTracks()"),console.log(l.stream.getVideoTracks())}),document.getElementById("btnRemoveAudioTrack").addEventListener("click",function(){console.log("removeAudioTrack()"),l.stream.removeTrack(l.stream.getAudioTracks()[0])}),document.getElementById("btnRemoveVideoTrack").addEventListener("click",function(){console.log("removeVideoTrack()"),l.stream.removeTrack(l.stream.getVideoTracks()[0])})},l.prototype.hasUserMedia=function(){return!!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia)},l}(),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=function(){return function(){}}(),a=u("pMnS"),c=u("ZYCi"),b=u("Ip0R"),s=u("n8hj"),d=t.mb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Cb(0,[(l()(),t.ob(0,0,null,null,16,"ul",[["class","nav nav-pills"],["role","tablist"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,7,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,6,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.wb(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.nb(3,671744,[[2,4]],0,c.m,[c.k,c.a,b.g],{routerLink:[0,"routerLink"]},null),t.xb(4,1),t.nb(5,1720320,null,2,c.l,[c.k,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.zb(603979776,1,{links:1}),t.zb(603979776,2,{linksWithHrefs:1}),(l()(),t.Bb(-1,null,["emmet-demo"])),(l()(),t.ob(9,0,null,null,7,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.ob(10,0,null,null,6,"a",[["class","nav-link"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.wb(l,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.nb(11,671744,[[4,4]],0,c.m,[c.k,c.a,b.g],{routerLink:[0,"routerLink"]},null),t.xb(12,1),t.nb(13,1720320,null,2,c.l,[c.k,t.k,t.D,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.zb(603979776,3,{links:1}),t.zb(603979776,4,{linksWithHrefs:1}),(l()(),t.Bb(-1,null,["formatting-demo"])),(l()(),t.ob(17,0,null,null,3,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),t.ob(18,0,null,null,2,"div",[["class","container tab-pane active"]],null,null,null,null,null)),(l()(),t.ob(19,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.nb(20,212992,null,0,c.o,[c.b,t.O,t.j,[8,null],t.h],null,null)],function(l,n){var u=l(n,4,0,"./emmet-demo");l(n,3,0,u),l(n,5,0,"active");var t=l(n,12,0,"./formatting-demo");l(n,11,0,t),l(n,13,0,"active"),l(n,20,0)},function(l,n){l(n,2,0,t.wb(n,3).target,t.wb(n,3).href),l(n,10,0,t.wb(n,11).target,t.wb(n,11).href)})}function k(l){return t.Cb(0,[(l()(),t.ob(0,0,null,null,1,"app-cm-demo",[],null,null,null,m,d)),t.nb(1,114688,null,0,e,[s.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t.kb("app-cm-demo",e,k,{},{},[]),g=t.mb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Cb(0,[(l()(),t.ob(0,0,null,null,0,"video",[["autoplay",""]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,1,"button",[["id","btnGetAudioTracks"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["getAudioTracks() "])),(l()(),t.ob(5,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,1,"button",[["id","btnGetTrackById"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["getTrackById() "])),(l()(),t.ob(8,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(9,0,null,null,1,"button",[["id","btnGetTracks"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["getTracks()"])),(l()(),t.ob(11,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(12,0,null,null,1,"button",[["id","btnGetVideoTracks"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["getVideoTracks() "])),(l()(),t.ob(14,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(15,0,null,null,1,"button",[["id","btnRemoveAudioTrack"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["removeTrack() - audio "])),(l()(),t.ob(17,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ob(18,0,null,null,1,"button",[["id","btnRemoveVideoTrack"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["removeTrack() - video "]))],null,null)}function p(l){return t.Cb(0,[(l()(),t.ob(0,0,null,null,1,"app-emmet-movie",[],null,null,null,f,g)),t.nb(1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)}var T=t.kb("app-emmet-movie",o,p,{},{},[]),h=t.mb({encapsulation:0,styles:[[""]],data:{}});function y(l){return t.Cb(0,[(l()(),t.Bb(-1,null,["formatting works!!!"]))],null,null)}function B(l){return t.Cb(0,[(l()(),t.ob(0,0,null,null,1,"app-formatting-movie",[],null,null,null,y,h)),t.nb(1,114688,null,0,i,[],null,null)],function(l,n){l(n,1,0)},null)}var A=t.kb("app-formatting-movie",i,B,{},{},[]);u.d(n,"CmDemoModuleNgFactory",function(){return w});var w=t.lb(r,[],function(l){return t.ub([t.vb(512,t.j,t.ab,[[8,[a.a,v,T,A]],[3,t.j],t.x]),t.vb(4608,b.l,b.k,[t.u,[2,b.r]]),t.vb(1073742336,b.b,b.b,[]),t.vb(1073742336,c.n,c.n,[[2,c.t],[2,c.k]]),t.vb(1073742336,r,r,[]),t.vb(1024,c.i,function(){return[[{path:"",component:e,children:[{path:"emmet-demo",component:o},{path:"formatting-demo",component:i},{path:"",redirectTo:"recent",pathMatch:"prefix"}]}]]},[])])})}}]);