(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=document.querySelector(".mobile");function d(t){i.classList.toggle("is-open")}const a=document.querySelector(".header-burger-btn");a.addEventListener("click",d);function f(t){i.classList.remove("is-open")}const m=document.querySelector(".mobile-menu-btn");m.addEventListener("click",f);const u=document.querySelector(".header"),s=()=>{u.classList.add("scrolled")},p=()=>{u.classList.remove("scrolled")};window.addEventListener("scroll",function(){window.scrollY>50?(console.log(s),s()):p()});const y=document.querySelectorAll('a[href^="#"]');for(let t of y)t.addEventListener("click",function(r){const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,n),r.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
