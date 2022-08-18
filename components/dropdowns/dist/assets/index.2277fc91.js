var m=Object.defineProperty;var p=(n,t,e)=>t in n?m(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(p(n,typeof t!="symbol"?t+"":t,e),e);const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};D();class g{constructor(t,e){t.forEach(a=>{a.querySelector(".wk-dropdown__active-button").addEventListener("click",o=>{o.stopPropagation();const l=window.innerWidth,c=window.innerHeight,h=o.target.getBoundingClientRect(),d=h.x*100/l,u=h.y*100/c,s=a.querySelector(".wk-dropdown__menu");d<=50?s.style.left="0":s.style.right="0",u<=50?s.style.top="0":s.style.bottom="0",setTimeout(()=>{s.style.visibility="visible",s.animate([{opacity:"0"},{opacity:"1"}],{duration:e,fill:"forwards"})},e)})}),document.body.addEventListener("click",()=>{t.forEach(a=>{const i=a.querySelector(".wk-dropdown__menu");i.animate([{opacity:"1"},{opacity:"0"}],{duration:e,fill:"forwards"}),setTimeout(()=>{i.style.visibility="collapse",i.style.top="auto",i.style.left="auto",i.style.right="auto",i.style.bottom="auto"},e)})})}}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".wk-dropdown");new g(n,200)});class f{constructor(t){r(this,"rippleTimeout");r(this,"rippleEnd");r(this,"els");r(this,"elementData");this.rippleEnd=!1,this.els=t,this.elementData={size:0,color:"",transition:200,halfWidth:0,halfHeight:0,touchData:{top:0,left:0,right:0,bottom:0}},this.els.forEach(e=>{e.addEventListener("pointerdown",a=>{this.start(a)}),e.addEventListener("mouseleave",a=>{this.end(a.target)}),e.addEventListener("mouseup",a=>{this.end(a.target)}),e.addEventListener("touchleave",a=>{this.end(a.target)}),e.addEventListener("touchend",a=>{this.end(a.target)})})}start(t){this.setElementSize(t.target),this.setColorAndTransition(t.target),this.elementData.halfWidth=t.target.offsetWidth/2,this.elementData.halfHeight=t.target.offsetHeight/2,this.rippleTimeout=setTimeout(()=>{this.rippleEnd=!0},this.elementData.transition),this.create(t)}setElementSize(t){const e=Number(window.getComputedStyle(t).getPropertyValue("width").replace(/px/gi,"")),a=Number(window.getComputedStyle(t).getPropertyValue("height").replace(/px/gi,""));this.elementData.size=Math.sqrt(Math.pow(e,2)+Math.pow(a,2))/4}setColorAndTransition(t){this.elementData.color=window.getComputedStyle(t).getPropertyValue("--rp-color"),this.elementData.transition=Number(window.getComputedStyle(t).getPropertyValue("--rp-transition"))}create(t){const e=document.createElement("span");e.classList.add("ripple"),t.target.appendChild(e),this.setTouchData(t),e.style.top=`${this.elementData.touchData.top-this.elementData.size/2}px`,e.style.left=`${this.elementData.touchData.left-this.elementData.size/2}px`,e.style.willChange="transform border-radius width height top left",e.style.backgroundColor=this.elementData.color,e.style.transform=`scale(${this.getScaleRipple()/(this.elementData.size/2)})`,e.style.width=`${this.elementData.size}px`,e.style.height=`${this.elementData.size}px`,e.style.borderRadius="100%",e.style.position="absolute",e.style.pointerEvents="none",e.style.opacity="1",e.style.transition=`opacity linear ${this.elementData.transition}ms, transform linear ${this.elementData.transition}ms`}setTouchData(t){this.elementData.touchData.top=Number(Math.abs(t.target.getBoundingClientRect().top-t.clientY)),this.elementData.touchData.left=Number(Math.abs(t.target.getBoundingClientRect().left-t.clientX)),this.elementData.touchData.right=Number(Math.abs(t.target.getBoundingClientRect().right-t.clientX)),this.elementData.touchData.bottom=Number(Math.abs(t.target.getBoundingClientRect().bottom-t.clientY))}getFormula(){return{a:Math.sqrt(this.elementData.touchData.bottom**2+this.elementData.touchData.right**2),b:Math.sqrt(this.elementData.touchData.bottom**2+this.elementData.touchData.left**2),c:Math.sqrt(this.elementData.touchData.top**2+this.elementData.touchData.right**2),d:Math.sqrt(this.elementData.touchData.top**2+this.elementData.touchData.left**2)}}getScaleRipple(){return this.elementData.touchData.top<=this.elementData.halfHeight&&this.elementData.touchData.left<=this.elementData.halfWidth?this.getFormula().a:this.elementData.touchData.top<this.elementData.halfHeight&&this.elementData.touchData.left>this.elementData.halfWidth?this.getFormula().b:this.elementData.touchData.top>this.elementData.halfHeight&&this.elementData.touchData.left<this.elementData.halfWidth?this.getFormula().c:this.elementData.touchData.top>this.elementData.halfHeight&&this.elementData.touchData.left>this.elementData.halfWidth?this.getFormula().d:this.getFormula().d}end(t){t.querySelectorAll(".ripple").forEach(a=>{this.rippleEnd?(a.style.opacity="0",a.style.transition=`opacity linear ${this.elementData.transition}ms`,a.addEventListener("transitionend",()=>{a.remove()})):setTimeout(()=>{a.style.opacity="0",a.style.transition=`opacity linear ${this.elementData.transition}ms`,a.addEventListener("transitionend",()=>{a.remove()})},this.elementData.transition),clearTimeout(this.rippleTimeout),this.rippleEnd=!1})}}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".ripples");new f(n)});const w=document.querySelector("#app"),y=`
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="more"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="more"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="more"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <div class="wk-dropdown">
    <button class="wk-dropdown__active-button wk-btn navbar ripples">
      <ion-icon name="more"></ion-icon>
    </button>
    <ul class="wk-dropdown__menu">
      <li>This is dropdown</li>
    </ul>
  </div>
  <h3>Adapted for all positions in screen</h3>
`;w.innerHTML=y;
