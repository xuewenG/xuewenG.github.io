"use strict";document.addEventListener("DOMContentLoaded",function(){var e="right"===CONFIG.sidebar.position,d={};function i(){var e=document.querySelector(".footer"),i=document.querySelector(".header").offsetHeight+document.querySelector(".main").offsetHeight+e.offsetHeight;e.classList.toggle("footer-fixed",i<=window.innerHeight)}({lines:document.querySelector(".sidebar-toggle"),init:function(){window.addEventListener("mousedown",this.mousedownHandler),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector(".sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar),window.addEventListener("sidebar:hide",this.hideSidebar)},mousedownHandler:function(e){d.X=e.pageX,d.Y=e.pageY},mouseupHandler:function(e){var i=e.pageX-d.X,t=e.pageY-d.Y;(Math.hypot(i,t)<20&&e.target.matches(".main")||e.target.matches("img.medium-zoom-image"))&&this.hideSidebar()},clickHandler:function(){document.body.classList.contains("sidebar-active")?this.hideSidebar():this.showSidebar()},showSidebar:function(){document.body.classList.add("sidebar-active");var t=e?"fadeInRight":"fadeInLeft";document.querySelectorAll(".sidebar .animated").forEach(function(e,i){e.style.animationDelay=100*i+"ms",e.classList.remove(t),setTimeout(function(){e.classList.add(t)})})},hideSidebar:function(){document.body.classList.remove("sidebar-active")}}).init(),i(),window.addEventListener("resize",i),window.addEventListener("scroll",i,{passive:!0})});