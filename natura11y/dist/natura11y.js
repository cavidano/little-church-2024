!function(){"use strict";let e,t=0,i=document.querySelector(":root");const a=a=>{e=document.activeElement,t=window.scrollY,i.style.setProperty("--scroll-position",`-${t}px`),i.classList.add("has-overlay"),a&&s(a)},o=a=>{i.removeAttribute("style"),i.classList.remove("has-overlay"),i.classList.length||i.removeAttribute("class"),window.scrollTo({top:t,behavior:"instant"}),a&&"false"===a.getAttribute("aria-hidden")&&a.setAttribute("aria-hidden",!0),a&&e&&e.focus()},n=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])',"video","audio"])].filter((e=>!e.hasAttribute("disabled")))},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=n(e),a=i[0],s=i[i.length-1];t.setAttribute("tabindex","-1"),t.focus(),e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===s&&(t.shiftKey||(t.preventDefault(),a.focus())),document.activeElement===a&&t.shiftKey&&(t.preventDefault(),s.focus());break;case"Escape":o(e)}}))},r=(e,t,i,a)=>{e instanceof Element||e instanceof Document?"string"==typeof t&&t?"string"==typeof i&&i?"function"==typeof a?e.addEventListener(t,(e=>{(e.target.matches(i)||e.target.closest(i))&&a(e)})):console.error("Invalid or missing handler function provided to delegateEvent."):console.error("Invalid or missing selector provided to delegateEvent."):console.error("Invalid or missing event type provided to delegateEvent."):console.error("Invalid parent element provided to delegateEvent.")};class l{#e=document.querySelectorAll(".accordion");#t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(e).forEach((e=>{e.setAttribute("tabindex",t?0:-1)}))}#i(e,t,i,a){e.preventDefault(),e.stopPropagation(),a.forEach((e=>{e.classList.remove("show"),e!==i&&(e.classList.remove("shown"),e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.#t(e,!1))})),i.classList.toggle("shown");const o="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!o),i.setAttribute("aria-hidden",o),this.#t(i,!o);const n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)}#a(e,t,i){const a=a=>{e.preventDefault();let o=i+a;-1===a&&o<0?t[t.length-1].focus():1===a&&o>=t.length?t[0].focus():t[o].focus()};switch(e.code){case"ArrowUp":a(-1);break;case"ArrowDown":a(1)}}init(){this.#e.forEach((e=>{const t=e.querySelectorAll(':scope > [data-accordion="button"]'),i=e.querySelectorAll(':scope > [data-accordion="panel"]');t.forEach(((a,o)=>{const n=a.nextElementSibling,s="true"===a.getAttribute("aria-expanded");a.setAttribute("tabindex",0),n.classList.toggle("show",s),this.#t(n,s),r(e,"click",'[data-accordion="button"]',(e=>{e.target===a&&this.#i(e,a,n,i)})),r(e,"keydown",'[data-accordion="button"]',(e=>{e.target===a&&this.#a(e,t,o)})),r(e,"keyup",'[data-accordion="button"]',(e=>{"Enter"===e.code&&this.#i(e,a,n,i)}))}))}))}}class c{#o='\n    <button class="button button--icon-only" aria-label="Close alert" aria-describedby="alert-description">\n        <span class="icon icon-close" aria-hidden="true"></span>\n    </button>\n  ';#n=e=>{e.preventDefault();const t=e.target.closest(".alert--dismissable");t&&(t.classList.add("dismissed"),t.addEventListener("animationend",(()=>{t.remove()})))};#s=e=>{e.insertAdjacentHTML("afterbegin",this.#o),e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true")};init=()=>{document.querySelectorAll(".alert--dismissable").forEach((e=>{this.#s(e)})),r(document,"click",".alert--dismissable .button--icon-only",this.#n)}}class d{#r=document.querySelectorAll(".backdrop:has(video)");#l=window.matchMedia("(prefers-reduced-motion: reduce)");#c(e,t){const i=t.querySelector(".icon");e.paused?(e.play(),this.#d(i,t,"pause")):(e.pause(),this.#d(i,t,"play"))}#u(e,t){if(t.hasAttribute("data-check-reduced-motion")){const i=t.querySelector(".icon");this.#l.matches?(e.pause(),this.#d(i,t,"play")):(e.play(),this.#d(i,t,"pause")),this.#l.addEventListener("change",(()=>{this.#l.matches?(e.pause(),this.#d(i,t,"play")):(e.play(),this.#d(i,t,"pause"))}))}}#d(e,t,i){const a="pause"===i;e.classList.toggle("icon-play",!a),e.classList.toggle("icon-pause",a),t.setAttribute("aria-label",a?"Pause video":"Play video"),t.setAttribute("aria-pressed",String(a))}#h(e){const t=e.querySelector("video"),i=e.querySelector(".backdrop__media__control .button");t&&i&&(this.#u(t,i),i.addEventListener("click",(()=>{this.#c(t,i)})))}init=()=>{this.#r.forEach((e=>this.#h(e)))}}class u{#g=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","false"),t.classList.remove("shown"),i&&e.focus()};#p=(()=>function(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.setAttribute("aria-expanded","true"),t.classList.add("shown"),s(t),i&&i.focus()})();#b=(e,t,i)=>a=>{switch(a.code){case"Tab":document.activeElement===i&&a.shiftKey&&(a.preventDefault(),e.focus());break;case"Escape":this.#g(e,t,!0)}};#m=e=>{e.preventDefault();const t=e.target.closest('[data-toggle="collapse"]');if(!t)return;const i=t.getAttribute("aria-controls")?.replace(/^#/,""),a=document.getElementById(i);if(!a)return void console.error(`Collapse target with ID "${i}" not found.`);const o=n(a)[0];"true"===t.getAttribute("aria-expanded")||a.classList.contains("shown")?this.#g(t,a):this.#p(t,a,a.hasAttribute("data-focus-first")?o:null);const s=this.#b(t,a,o);if(a.addEventListener("keydown",s),a.addEventListener("transitionend",(()=>{a.classList.contains("shown")||a.removeEventListener("keydown",s)})),t.hasAttribute("data-target-close")){const e=t.getAttribute("data-target-close")?.replace(/^#/,""),i=document.getElementById(e),a=document.querySelector(`[aria-controls="${e}"]`);i&&a?this.#g(a,i):console.error(`Could not find close target or close target button for ID ${e}`)}};init=()=>{r(document,"click",'[data-toggle="collapse"]',this.#m)}}const h=e=>!e?.trim(),g=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["is-invalid"];e.closest(".form-entry").classList.toggle(i[0],!t),e.setAttribute("aria-invalid",!t)};class p{#f=document.querySelectorAll(".form-entry");#y=["is-invalid"];#v=!1;#L(e){const t=h(e.value);return g(e,!t,this.#y),t}#x(e,t){this.#v&&t&&this.#L(e),e.closest(".form-entry").classList.toggle("has-value",""!==e.value)}#E(e){e.addEventListener("input",(()=>{this.#L(e)}))}#A(e,t){const i=e.closest(".form-entry").querySelector(".form-entry__field__input");t&&(e.setAttribute("required","true"),e.setAttribute("aria-required","true")),this.#E(e),e.addEventListener("change",(()=>this.#x(e,t))),i&&i.addEventListener("click",this.#w)}#w(e){const t=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e.target.tagName&&t.focus()}init(){this.#f.forEach((e=>{const t=e.hasAttribute("data-required");e.querySelectorAll("input, select, textarea").forEach((e=>this.#A(e,t))),r(e,"focusin","input, select, textarea",(e=>{this.#S(e,!0)})),r(e,"focusout","input, select, textarea",(e=>{this.#S(e,!1)}))}))}#S(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.target.closest(".form-entry").classList.toggle("is-focused",t)}}class b{#k=document.querySelectorAll("form[novalidate]");#y=["is-invalid"];#v=!1;#T(e,t){e.forEach((e=>{const i=e.closest(".form-entry"),a=i.querySelector(".form-entry__field__label"),o=i.getAttribute("data-error-message")||"This field is required",n=i.querySelector(".form-entry__help")?.innerHTML||"";t.push([o,n]),i.querySelector(".form-entry__feedback")||a.insertAdjacentHTML("afterend",this.#C(o,n))}))}#C(e,t){return`\n      <small class="form-entry__feedback" role="alert">\n        <span class="icon icon-warn" aria-hidden="true"></span>\n        <span class="message">\n          <strong>${e}</strong> ${t||""}\n        </span>\n      </small>\n    `}#_(e){const t=e.querySelector(".is-invalid, [data-alert]");t&&window.scrollTo({top:t.offsetTop-16,behavior:"smooth"})}#L(e){const t=h(e.value);return g(e,!t,this.#y),t}#q(e){e.addEventListener("submit",(t=>{t.preventDefault(),this.#v=!0;const i=[];e.querySelectorAll("input, select, textarea").forEach((e=>{e.hasAttribute("required")&&this.#L(e)}));const a=e.querySelectorAll(":invalid");this.#T(a,i),i.length>0&&(t.preventDefault(),this.#_(e))}))}init(){this.#k.forEach((e=>this.#q(e)))}}class m{#M=document.querySelectorAll(".file-upload");#I(e){return t=>{const[i]=t.target.files;if(!i)return;const{name:a,size:o}=i,n=o>=1e6?`${(o/1e6).toFixed(2)} MB`:`${(o/1e3).toFixed(2)} KB`,s=e.querySelector(".file-upload__data");s&&s.remove(),e.insertAdjacentHTML("beforeend",`\n        <span class="file-upload__data">\n          <span class="file-name">${a}</span>\n          <span class="file-size">${n}</span>\n        </span>\n      `)}}dragOver(e){e.preventDefault(),e.target.closest(".form-entry").classList.add("is-focused")}dragOff(e){e.target.closest(".form-entry").classList.remove("is-focused")}dropped(e){e.preventDefault(),e.target.closest(".form-entry").classList.remove("is-focused")}#P(e){e.querySelector('input[type="file"]').addEventListener("change",this.#I(e)),e.addEventListener("dragenter",this.dragOver.bind(this)),e.addEventListener("dragleave",this.dragOff.bind(this)),e.addEventListener("dragend",this.dragOff.bind(this)),e.addEventListener("drop",this.dropped.bind(this))}init(){this.#M.forEach((e=>this.#P(e)))}}class f{#D=document.querySelectorAll("[data-lightbox]");#H='\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n    <div class="lightbox__controls">\n      <button class="button button--icon-only" data-lightbox-previous aria-label="Previous">\n        <span class="icon icon-arrow-left" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next aria-label="Next">\n        <span class="icon icon-arrow-right" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close aria-label="Close">\n        <span class="icon icon-close" aria-hidden="true"></span>\n      </button>\n    </div>\n  ';#O='\n    <video controls tabindex="0">\n      <source type="video/mp4">\n    </video>\n  ';#$='\n    <iframe\n      frameborder="0"\n      allow="autoplay; fullscreen;"\n      allowfullscreen\n      controls\n      tabindex="0"\n    ></iframe>\n  ';#B='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#F='<img src="https://source.unsplash.com/1600x900"/>';#K=[];#N=e=>t=>{document.querySelector(".lightbox")||(t.preventDefault(),this.lightbox=this.#R(),this.lightbox.setAttribute("aria-hidden",!1),this.currentLB=e,this.#V(e),a(this.lightbox))};#U=e=>{if(e.stopPropagation(),e.target!==e.currentTarget&&"click"===e.type)return;const t=this.lightbox.querySelector("[data-lightbox-previous]"),i=this.lightbox.querySelector("[data-lightbox-next]"),a=this.lightbox.querySelector("[data-lightbox-close]");t.removeEventListener("click",this.#z),i.removeEventListener("click",this.#z),a.removeEventListener("click",this.#U),o(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#W)};#j=(()=>{var e=this;return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.lightbox.querySelector(".lightbox__caption").style.display=t?"block":"none"}})();#z=e=>{if(e.preventDefault(),e.target.hasAttribute("data-lightbox-previous"))this.#Q(-1);else{if(!e.target.hasAttribute("data-lightbox-next"))return;this.#Q(1)}};#W=e=>{if(e.preventDefault(),!(this.#K.length<=1)||"ArrowLeft"!==e.code&&"ArrowRight"!==e.code)switch(e.code){case"ArrowLeft":this.#Q(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#Q(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#U(e);break;default:return}};#G=e=>{e.setAttribute("tabindex",0),e.addEventListener("focus",(t=>{t.preventDefault(),e.children[0].focus(),n(e.children[0])}))};#Q(e){this.currentLB+=e,this.currentLB<0?this.currentLB=this.#K.length-1:this.currentLB>=this.#K.length&&(this.currentLB=0),this.#V(this.currentLB)}#V(e){const t=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let a;t.innerHTML="";const{lbType:o,lbSrc:n,lbAlt:r,lbCaption:l}=this.#K[e],c=null!==l;switch(this.#j(c),o){case"image":a=this.#X(t,n);break;case"video":a=this.#Y(t,n)}this.#G(t),c&&(i.innerHTML=l),s(this.lightbox)}#X=(e,t)=>{e.hasAttribute("style")&&e.removeAttribute("style"),e.innerHTML=this.#F;const i=this.#J();e.appendChild(i);const a=e.querySelector("img");return a.src=t,this.#Z(a,i),a};#Y=(e,t)=>{const i=/youtube/i.test(t),a=/vimeo/i.test(t);let o;if(i||a)e.innerHTML=this.#$,o=e.querySelector("iframe"),o.src=t;else{e.innerHTML=this.#O;const i=this.#J();e.appendChild(i),o=e.querySelector("source");const a=e.querySelector("video");a.addEventListener("loadedmetadata",(()=>{let t=a.videoWidth,i=a.videoHeight;e.style.maxWidth=`${t}px`,e.style.aspectRatio=`${t} / ${i}`})),this.#Z(o,i),o.src=t}return o};#J=()=>{const e=document.createElement("div");return e.className="lightbox__media__loader",e.innerHTML=this.#B,e};#Z=(e,t)=>{const i="SOURCE"===e.nodeName?"loadeddata":"load";e.closest("SOURCE"===e.nodeName?"video":"img").addEventListener(i,(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),null!==this.#K[this.currentLB].lbCaption&&this.#j(!0)})),e.onerror=()=>{const i=t.querySelector(".lightbox__media__loader"),a=t.querySelector(".lightbox__media__error");e.style.display="none",this.#j(!1),i.style.display="none",a.style.display="block"}};#R=()=>{const e=document.createElement("div");e.classList.add("lightbox"),e.setAttribute("aria-hidden",!0),e.setAttribute("aria-live","polite"),e.innerHTML=this.#H,document.body.appendChild(e);const t=e.querySelector("[data-lightbox-previous]"),i=e.querySelector("[data-lightbox-next]"),a=e.querySelector("[data-lightbox-close]");return this.#K.length<=1&&(t.setAttribute("disabled",!0),i.setAttribute("disabled",!0),t.style.display="none",i.style.display="none"),a.addEventListener("click",this.#U),t.addEventListener("click",this.#z),i.addEventListener("click",this.#z),window.addEventListener("keyup",this.#W),e};#ee=e=>{let t=null,i="";if(null!==e.querySelector("img")){const a=e.querySelector("img");t=a.src||null,i=a.alt||""}const a=e.getAttribute("data-lightbox")||"image",o=e.getAttribute("data-lightbox-src")||t,n=e.getAttribute("data-lightbox-caption")||null,s=e.getAttribute("data-lightbox-alt")||i;return null===o?(console.error("No source provided for lightbox"),null):{lbType:a,lbSrc:o,lbCaption:n,lbAlt:s}};#te=()=>{this.#D.forEach((e=>{this.#K.push(this.#ee(e))}))};#ie=()=>{r(document,"click","[data-lightbox]",(e=>{const t=e.target.closest("[data-lightbox]"),i=Array.from(this.#D).indexOf(t);-1!==i&&this.#N(i)(e)}))};#ae=()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const i=t.target,a=i.dataset.lightboxSrc||i.src;if(!a)return;e.unobserve(i);const o=new Image;o.onload=()=>{document.body.appendChild(o)},o.onerror=()=>{console.error(`Failed to load image: ${a}`)},o.src=a,o.style.display="none",this.#K[Number(i.dataset.index)].hiddenImage=o}}))}),{threshold:.25});Array.from(this.#D).filter((e=>"image"===e.getAttribute("data-lightbox"))).forEach(((t,i)=>{const a=t.querySelector("img");a&&(a.dataset.index=i,e.observe(a))}))};init=()=>{this.#te(),this.#ie(),this.#ae()}}class y{#oe=new Map;#ne=this.#se.bind(this);#re(e,t){const i=i=>{e.querySelector(".modal__content").contains(i.target)||t(i)};window.addEventListener("pointerdown",i),this.#oe.set(e,i)}#le(e){const t=this.#oe.get(e);t&&(window.removeEventListener("pointerdown",t),this.#oe.delete(e))}#se(e){"Escape"===e.code&&document.querySelectorAll(".modal.shown").forEach((e=>this.#ce(e)))}#ce(e){e.classList.remove("shown"),o(e),this.#le(e),window.removeEventListener("keydown",this.#ne)}openModal(e){if(!e)return void console.warn("Modal target not found.");e.classList.add("shown"),e.focus();const t=e.querySelector(".modal__content");if(t){if(a(t),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0),e.querySelectorAll("[data-modal-close]").forEach((t=>{t.addEventListener("click",(()=>this.#ce(e))),t.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside){const t=()=>this.#ce(e);this.#re(e,t)}window.addEventListener("keydown",this.#ne)}else console.warn("Modal content not found.")}init(){r(document,"click",'[data-modal="open"]',(e=>{const t=e.target.getAttribute("aria-controls")?.replace(/^#/,""),i=document.getElementById(t);this.openModal(i)}))}}class v{#de=!1;#ue(e,t){this.#de=!0,e.setAttribute("aria-expanded","true"),t.classList.add("shown"),t.classList.contains("mega-menu")&&a()}#he(e,t){this.#de=this.#ge(),t.classList.remove("shown"),e.setAttribute("aria-expanded","false"),t.classList.contains("mega-menu")&&o()}#ge(){return Array.from(document.querySelectorAll('[data-toggle="dropdown"]')).some((e=>{const t=document.getElementById(e.getAttribute("aria-controls"));return t&&t.classList.contains("shown")}))}#pe=e=>{this.#de&&document.querySelectorAll('[data-toggle="dropdown"]').forEach((t=>{const i=document.getElementById(t.getAttribute("aria-controls"));i&&i.classList.contains("shown")&&!i.contains(e.target)&&!t.contains(e.target)&&this.#he(t,i)}))};#be=e=>{"Escape"===e.key&&this.#de&&(document.querySelectorAll('[data-toggle="dropdown"]').forEach((e=>{const t=document.getElementById(e.getAttribute("aria-controls"));t.classList.contains("shown")&&(this.#he(e,t),e.focus())})),this.#de=!1)};#me=(e,t)=>i=>{const a=i.relatedTarget;!a||t.contains(a)||e.contains(a)||this.#he(e,t)};init(){r(document,"click",'[data-toggle="dropdown"]',(e=>{const t=e.target,i=t.getAttribute("aria-controls"),a=document.getElementById(i);a?a.classList.contains("shown")?this.#he(t,a):this.#ue(t,a):console.warn(`No dropdown menu found for ${i}`)})),document.querySelectorAll('[data-toggle="dropdown"]').forEach((e=>{const t=e.getAttribute("aria-controls"),i=document.getElementById(t);if(!i)return;const a=this.#me(e,i);e.addEventListener("focusout",a),i.addEventListener("focusout",a)})),window.addEventListener("click",this.#pe),document.addEventListener("keydown",this.#be)}}class L{#fe=document.querySelectorAll('[class*="table--stack"]');#ye=document.querySelectorAll(".table-scroll");#ve(e){const t=e.querySelectorAll("thead th"),i=e.querySelectorAll("tbody tr");let a=[];t.forEach(((e,t)=>{if(""!==e.textContent){const i=e.textContent.trim();a.push({title:i,id:`header-${t}`}),e.setAttribute("id",`header-${t}`)}})),i.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{e.innerHTML=this.#Le(e.innerHTML),e.setAttribute("data-header",a[t].title),e.setAttribute("aria-labelledby",a[t].id)}))}))}#Le(e){return`\n      <div class="td-content">\n        ${e}\n      </div>\n    `}#xe(){this.#ye.forEach((e=>{let t=e.querySelector(".table-scroll__container"),i=e.offsetWidth;t.scrollWidth>i?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#fe.forEach((e=>{this.#ve(e)})),this.#xe(),window.addEventListener("resize",this.#xe.bind(this))}}class x{#Ee=document.querySelectorAll(".tabs");#Ae(e,t){e.forEach((e=>{e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),e.classList.remove("is-active")})),t.forEach((e=>{e.classList.remove("shown"),e.setAttribute("aria-hidden","true")}))}#we(e,t,i){this.#Ae(t,i),e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0"),e.classList.add("is-active");const a=e.getAttribute("aria-controls"),o=document.getElementById(a);o.classList.add("shown"),o.setAttribute("aria-hidden","false")}init(){this.#Ee.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),i=e.querySelectorAll('[role="tabpanel"]');r(e,"click",'[role="tab"]',(e=>{const a=e.target.closest('[role="tab"]');this.#we(a,t,i)})),r(e,"keydown",'[role="tab"]',(e=>{if(!["Enter","Space","ArrowLeft","ArrowRight","Home","End"].includes(e.code))return;const a=e.target.closest('[role="tab"]'),o=Array.from(t).indexOf(a);switch(e.code){case"Enter":case"Space":e.preventDefault(),this.#we(a,t,i);break;case"ArrowLeft":case"ArrowRight":case"Home":case"End":((e,i,a,o)=>{e.preventDefault();let n=i;switch(e.code){case"ArrowLeft":n=i-1<0?a.length-1:i-1;break;case"ArrowRight":n=i+1>=a.length?0:i+1;break;case"Home":n=0;break;case"End":n=a.length-1;break;default:return}(e=>{t[e].focus()})(n)})(e,o,t)}})),this.#we(t[0],t,i)}))}}class E{#Se=document.querySelectorAll(".track");#ke=null;#Te(e,t){return e.querySelector(t)}#Ce(e){return parseInt(getComputedStyle(e).getPropertyValue("--visible-panels"),10)||1}#_e(e,t){e.classList.toggle("hide-controls",t<=1)}#qe(e){const t=this.#Te(e,".track__panels"),i=this.#Te(e,"[data-track-pagination]"),a=this.#Ce(t),o=e.getAttribute("data-track-id"),n=[];let s=[];Array.from(t.children).forEach(((e,i)=>{const r=`${o}-panel-${i}`;e.setAttribute("id",r),s.push(e),s.length!==a&&i!==t.children.length-1||(n.push(s),s=[])})),e.pages=n,e.currentPageIndex=0,i&&(i.innerHTML=n.map(((e,t)=>`\n                <li>\n                    <button\n                        type="button"\n                        data-page-index="${t}"\n                        aria-label="Go To Page ${t+1}"\n                        ${0===t?'aria-current="true"':""}\n                    >\n                        <span class="pagination__number">\n                            ${t+1}\n                        </span>\n                    </button>\n                </li>\n            `)).join("")),this.#_e(e,n.length),this.#Me(e,0)}#Ie(e,t){this.#Te(e,"[data-track-pagination]").querySelectorAll("[data-page-index]").forEach(((e,i)=>{e.classList.toggle("active",i===t),e.setAttribute("aria-current",i===t?"true":"false")})),this.#Pe(e,t,e.pages.length)}#Me(e,t){e.pages.forEach(((e,i)=>{e.forEach((e=>{const a=n(e),o=i===t;e.setAttribute("aria-hidden",o?"false":"true"),a.forEach((e=>{e.setAttribute("tabindex",o?"0":"-1")}))}))}))}#De(e,t){const i=this.#Te(e,".track__panels"),a=e.pages[t][0];e.currentPageIndex=t,i.scrollTo({left:a.offsetLeft,behavior:"smooth"}),clearTimeout(this.#ke),this.#ke=setTimeout((()=>{this.#Ie(e,t)}),300)}#He(e){const t=e.currentPageIndex<e.pages.length-1?e.currentPageIndex+1:0;this.#De(e,t)}#Oe(e){const t=e.currentPageIndex>0?e.currentPageIndex-1:e.pages.length-1;this.#De(e,t)}#$e(e){const t=getComputedStyle(e);return parseFloat(t.paddingLeft)||0}#Be(e,t){const i=this.#Te(e,".track__panels"),a=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const a=t.target.id,o=e.pages.findIndex((e=>e.some((e=>e.id===a)))),n=()=>{e.currentPageIndex=o,this.#Ie(e,o)};-1!==o&&("onscrollend"in window?i.onscrollend=n:i.onscroll=()=>{clearTimeout(this.#ke),this.#ke=setTimeout(n,250)})}}))}),{root:i,threshold:.5,rootMargin:`0px -${.5*t}px`});e.pages.forEach((e=>{a.observe(e[0])})),e.pageObserver=a}#Fe(e,t){const i=this.#Te(e,".track__panels"),a=new IntersectionObserver((e=>{e.forEach((e=>{const t=n(e.target),i=e.isIntersecting;e.target.setAttribute("aria-hidden",i?"false":"true"),t.forEach((e=>{e.setAttribute("tabindex",i?"0":"-1")}))}))}),{root:i,threshold:.5,rootMargin:`0px -${t}px`});e.pages.flat().forEach((e=>{a.observe(e)})),e.tabbingObserver=a}#Ke(e){r(e,"keydown","[data-track-prev], [data-track-next]",(t=>{"ArrowRight"===t.code&&t.target.matches("[data-track-next]")?this.#He(e):"ArrowLeft"===t.code&&t.target.matches("[data-track-prev]")&&this.#Oe(e)}))}#Ne(e){const t=this.#Te(e,".track__panels"),i=this.#Te(e,"[data-track-pagination]");t.scrollLeft=0,i&&(i.innerHTML=""),e.pageObserver&&e.pageObserver.disconnect(),e.tabbingObserver&&e.tabbingObserver.disconnect(),e.currentPageIndex=0;const a=this.#$e(t);this.#qe(e),this.#Re(e),this.#Be(e,a),this.#Fe(e,a),this.#Ke(e)}#ie(e){r(e,"click","[data-page-index]",(t=>{const i=t.target.closest("[data-page-index]");if(i){const t=parseInt(i.getAttribute("data-page-index"));this.#De(e,t)}})),r(e,"click","[data-track-prev]",(()=>{const t=e.currentPageIndex>0?e.currentPageIndex-1:e.pages.length-1;this.#De(e,t)})),r(e,"click","[data-track-next]",(()=>{const t=e.currentPageIndex<e.pages.length-1?e.currentPageIndex+1:0;this.#De(e,t)})),window.addEventListener("resize",(()=>{this.#Ne(e)}))}#Re(e){let t=this.#Te(e,".liveregion");t||(t=document.createElement("div"),t.className="liveregion screen-reader-only",t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),e.appendChild(t))}#Pe(e,t,i){const a=this.#Te(e,".liveregion");a&&(a.textContent=`Page ${t+1} of ${i}`)}init(){this.#Se.forEach(((e,t)=>{e.setAttribute("data-track-id",`track-${t}`),this.#Ne(e),this.#ie(e)}))}destroy(e){["pageObserver","tabbingObserver"].forEach((t=>{e[t]&&e[t].disconnect()})),clearTimeout(this.#ke)}}class A{init(){document.querySelectorAll(".audio-player").forEach((e=>{const t=e.querySelector("#audio"),i=e.querySelector("#play-pause-button"),a=e.querySelector("#progress-bar"),o=e.querySelector(".audio-player__progress__fill"),n=e.querySelector(".audio-player__thumb"),s=e.querySelector(".audio-player__volume"),r=e.querySelector("#mute-button"),l=e.querySelector(".audio-player__volume__fill"),c=e.querySelector(".audio-player__thumb"),d=e.querySelector(".audio-player__timestamp");let u=!1,h=null;const g=()=>{const e=100*t.volume;l.style.width=`${e}%`,c.style.left=`${e}%`;const i=t.volume<.1,a=r.querySelector("span.icon");i?(a.classList.remove("icon-volume"),a.classList.add("icon-volume-mute")):(a.classList.remove("icon-volume-mute"),a.classList.add("icon-volume"))};i.addEventListener("click",(()=>{var e,a,o;u?t.pause():t.play(),u=!u,e=i.querySelector("span.icon"),a="icon-play",o="icon-pause",e.classList.contains(a)?(e.classList.remove(a),e.classList.add(o)):(e.classList.remove(o),e.classList.add(a))})),r.addEventListener("click",(()=>{0===t.volume?t.volume=h||1:(h=t.volume,t.volume=0),g()})),t.addEventListener("timeupdate",(()=>{const e=t.currentTime/t.duration*100;o.style.width=`${e}%`;const i=Math.floor(t.currentTime/60),a=(Math.floor(t.currentTime-60*i),t.duration-t.currentTime),s=Math.floor(a/60),r=Math.floor(a-60*s);d.innerText=`${s.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`,n.style.left=`${e}%`})),a.addEventListener("click",(e=>{const i=(e.clientX-a.getBoundingClientRect().left)/a.offsetWidth*100;t.currentTime=i/100*t.duration})),s.addEventListener("click",(e=>{const i=(e.clientX-s.getBoundingClientRect().left)/s.offsetWidth*100;t.volume=Math.min(1,i/100),g()})),t.addEventListener("loadedmetadata",(()=>{const e=Math.floor(t.duration/60),i=Math.floor(t.duration-60*e);d.innerText=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`})),g()}))}}class w{#Ve=document.querySelector("#map");#Ue="AIzaSyBMukzRcxV0QEUWhIAQiDALNq0PoVqyghs";#ze;#We={lat:40.745191,lng:-73.98587};async#je(){return new Promise(((e,t)=>{if(document.querySelector("script[data-google-maps]"))return void e();const i=document.createElement("script");i.src=`https://maps.googleapis.com/maps/api/js?key=${this.#Ue}&callback=initMap`,i.async=!0,i.defer=!0,i.dataset.googleMaps=!0,i.onload=e,i.onerror=()=>t(new Error("Google Maps API failed to load.")),document.head.appendChild(i)}))}#Qe=()=>{this.#ze=new google.maps.Map(this.#Ve,{center:this.#We,zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,zoomControl:!0,fullscreenControl:!0}),this.#Ge()};#Ge(){this.#ze&&new google.maps.Marker({position:this.#We,map:this.#ze,title:"The Church of The Transfiguration"})}init=()=>{this.#Ve?(window.initMap=this.#Qe,this.#je().catch((e=>console.error(e)))):console.warn("Map element (#map) not found.")}}document.addEventListener("DOMContentLoaded",(()=>{(new l).init(),(new c).init(),(new d).init(),(new u).init(),(new p).init(),(new b).init(),(new m).init(),(new f).init(),(new y).init(),(new v).init(),(new L).init(),(new x).init(),(new E).init(),(new A).init(),(new w).init()}))}();