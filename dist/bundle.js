!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".slides"),t=e.querySelectorAll(".slides__item"),r=document.querySelector(".page__slider").querySelector(".slider__arrow"),n=document.querySelector(".slider__current-slide"),s=document.querySelector(".slider__total-slides");new i(e,r,t,n,s)});var i=function(e,t,r,i,n){this.currentSlide=1,this.slidesArr=r,this.slidesContainer=e,this.items=this.slidesArr.length,this.currentNumber=i,this.totalSlides=n,this.bindEvents(t),this.initTimer(),this.renderCounter()};i.prototype.bindEvents=function(e){e.addEventListener("click",this.switchRight.bind(this))},i.prototype.initTimer=function(){setInterval(this.switchRight.bind(this),5e3)},i.prototype.switchRight=function(){var e;this.currentSlide<this.items?(e=this.slidesArr[this.currentSlide].offsetWidth,this.slidesContainer.style.left="-"+this.currentSlide*e+"px",this.currentSlide++):(this.slidesContainer.style.left="0",this.currentSlide=1),this.renderCounter()},i.prototype.renderCounter=function(){this.currentNumber.innerText=this.currentSlide,this.totalSlides.innerText=this.items}},function(e,t){}]);
//# sourceMappingURL=bundle.js.map