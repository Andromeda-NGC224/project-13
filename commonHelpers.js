(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector(".mobile");function u(o){s.classList.toggle("is-open")}const d=document.querySelector(".header-burger-btn");d.addEventListener("click",u);function a(o){s.classList.remove("is-open")}const f=document.querySelector(".mobile-menu-btn");f.addEventListener("click",a);const i=document.querySelector(".header"),m=()=>{i.classList.add("scrolled")},p=()=>{i.classList.remove("scrolled")};window.addEventListener("scroll",function(){window.scrollY>1?m():p()});const y=document.querySelectorAll('a[href^="#"]');for(let o of y)o.addEventListener("click",function(r){const n=o.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,n),r.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map