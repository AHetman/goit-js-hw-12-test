import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function u(t){const o="https://pixabay.com",n="/api/",s=`?key=42361876-39dc0f6de1023fb2a8c585c35&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=o+n+s;return fetch(e).then(r=>r.json()).then(r=>(r.hits.length===0&&l.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:"😭 Sorry, there are no images matching youre search query. Please, try again!"}),r))}const f=document.querySelector(".gallery");function m(t){return`<li class="gallery-item">
        <a href="${t.largeImageURL}"> <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"></a>
        <div class='discription'><p><b>Likes </b>${t.likes}</p>
        <p><b>Views </b>${t.views}</p>
        <p><b>Comments </b>${t.comments}</p>
        <p><b>Downloads </b>${t.downloads}</p>
        </div>
      </li>`}function d(t){const o=t.hits.map(m).join("");f.innerHTML=o;const n={captionsData:"alt",captionDelay:250},s=new p(".gallery a",n);s.on("show.simplelightbox"),s.refresh()}const g=document.querySelector("form"),h=document.querySelector(".gallery"),i=document.querySelector(".loader");g.addEventListener("submit",y);let c;function y(t){t.preventDefault(),i.classList.add("is-open"),c=t.target.elements.search.value.trim(),c===""?(i.classList.remove("is-open"),h.innerHTML="",l.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:"❌ Please enter a search tag"})):u(c).then(o=>{i.classList.remove("is-open"),d(o)}).catch(o=>{i.classList.remove("is-open"),console.error("Error fetching images:",o)}),t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map