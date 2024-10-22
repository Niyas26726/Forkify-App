function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,i={},n={},r=t.parcelRequire7e89;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire7e89=r),(0,r.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,n=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.786996a1.js","eyyUD","icons.c14567a0.svg"]'));const s="https://forkify-api.herokuapp.com/api/v2/recipes/",a="cf440178-83c0-4920-8395-611e29b4b15a",o=async function(e,t){try{let i=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([i,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await n.json();if(!n.ok)throw Error(`${r.message} (${n.status})`);return r}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookMarks:[]},c=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.sourceUrl,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},l=async function(e){try{let t=`${s}${e}?key=${a}`,i=await o(t);d.recipe=c(i),d.bookMarks.some(t=>t.id===e)?d.recipe.bookMarked=!0:d.recipe.bookMarked=!1}catch(e){throw e}},u=async function(e){try{let t=`${s}?search=${e}&key=${a}`;d.search.query=e;let i=await o(t);d.search.results=i.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),d.search.page=1}catch(e){throw e}},h=function(e=d.search.page){d.search.page=e;let t=(e-1)*d.search.resultsPerPage,i=e*d.search.resultsPerPage;return d.search.results.slice(t,i)},f=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings}),d.recipe.servings=e},p=function(){localStorage.setItem("bookMarks",JSON.stringify(d.bookMarks))},g=function(e){d.bookMarks.push(e),d.recipe.id===e.id&&(d.recipe.bookMarked=!0),p()},_=function(e){let t=d.bookMarks.findIndex(t=>t.id==e);d.bookMarks.splice(t,1),d.recipe.id===e&&(d.recipe.bookMarked=!1),p()};!function(){let e=localStorage.getItem("bookMarks");e&&(d.bookMarks=JSON.parse(e))}();const v=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[i,n,r]=t;return{quantity:i?+i:null,unit:n,description:r}}),i={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await o(`${s}?key=${a}`,i);d.recipe=c(n),g(d.recipe)}catch(e){throw e}};var b={};b=new URL("icons.c14567a0.svg",import.meta.url).toString();var k={};!function(e){function t(){return Error("Parameters must be integer")}function i(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function r(e,r){var a=l,o=u;let d=u;if(null!=e){if(void 0!==r){if("bigint"==typeof e)a=e;else{if(isNaN(e))throw i();if(0!=e%1)throw t();a=BigInt(e)}if("bigint"==typeof r)o=r;else{if(isNaN(r))throw i();if(0!=r%1)throw t();o=BigInt(r)}d=a*o}else if("object"==typeof e){if("d"in e&&"n"in e)a=BigInt(e.n),o=BigInt(e.d),"s"in e&&(a*=BigInt(e.s));else if(0 in e)a=BigInt(e[0]),1 in e&&(o=BigInt(e[1]));else if("bigint"==typeof e)a=e;else throw i();d=a*o}else if("number"==typeof e){if(isNaN(e))throw i();if(0>e&&(d=-u,e=-e),0==e%1)a=BigInt(e);else if(0<e){r=1;var c=0,h=1,f=1;let t=1;for(1<=e&&(r=10**Math.floor(1+Math.log10(e)),e/=r);1e7>=h&&1e7>=t;)if(e===(o=(c+f)/(h+t))){1e7>=h+t?(a=c+f,o=h+t):t>h?(a=f,o=t):(a=c,o=h);break}else e>o?(c+=f,h+=t):(f+=c,t+=h),1e7<h?(a=f,o=t):(a=c,o=h);a=BigInt(a)*BigInt(r),o=BigInt(o)}}else if("string"==typeof e){if(o=0,c=r=a=l,h=f=u,null===(e=e.replace(/_/g,"").match(/\d+|./g)))throw i();if("-"===e[o]?(d=-u,o++):"+"===e[o]&&o++,e.length===o+1?r=s(e[o++],d):"."===e[o+1]||"."===e[o]?("."!==e[o]&&(a=s(e[o++],d)),(++o+1===e.length||"("===e[o+1]&&")"===e[o+3]||"'"===e[o+1]&&"'"===e[o+3])&&(r=s(e[o],d),f=p**BigInt(e[o].length),o++),("("===e[o]&&")"===e[o+2]||"'"===e[o]&&"'"===e[o+2])&&(c=s(e[o+1],d),h=p**BigInt(e[o+1].length)-u,o+=3)):"/"===e[o+1]||":"===e[o+1]?(r=s(e[o],d),f=s(e[o+2],u),o+=3):"/"===e[o+3]&&" "===e[o+1]&&(a=s(e[o],d),r=s(e[o+2],d),f=s(e[o+4],u),o+=5),e.length<=o)d=a=c+(o=f*h)*a+h*r;else throw i()}else if("bigint"==typeof e)d=a=e,o=u;else throw i()}if(o===l)throw n();g.s=d<l?-u:u,g.n=a<l?-a:a,g.d=o<l?-o:o}function s(e,t){try{e=BigInt(e)}catch(e){throw i()}return e*t}function a(e,t){if(t===l)throw n();let i=Object.create(c.prototype);i.s=e<l?-u:u;let r=d(e=e<l?-e:e,t);return i.n=e/r,i.d=t/r,i}function o(e){let t={},i=e,n=h,r=f-u;for(;r<=i;){for(;i%n===l;)i/=n,t[n]=(t[n]||l)+u;r+=u+h*n++}return i!==e?1<i&&(t[i]=(t[i]||l)+u):t[e]=(t[e]||l)+u,t}function d(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function c(e,t){if(r(e,t),!(this instanceof c))return a(g.s*g.n,g.d);e=d(g.d,g.n),this.s=g.s,this.n=g.n/e,this.d=g.d/e}"undefined"==typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let l=BigInt(0),u=BigInt(1),h=BigInt(2),f=BigInt(5),p=BigInt(10),g={s:u,n:l,d:u};c.prototype={s:u,n:l,d:u,abs:function(){return a(this.n,this.d)},neg:function(){return a(-this.s*this.n,this.d)},add:function(e,t){return r(e,t),a(this.s*this.n*g.d+g.s*this.d*g.n,this.d*g.d)},sub:function(e,t){return r(e,t),a(this.s*this.n*g.d-g.s*this.d*g.n,this.d*g.d)},mul:function(e,t){return r(e,t),a(this.s*g.s*this.n*g.n,this.d*g.d)},div:function(e,t){return r(e,t),a(this.s*g.s*this.n*g.d,this.d*g.n)},clone:function(){return a(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return a(this.s*this.n%this.d,u);if(r(e,t),l===g.n*this.d)throw n();return a(this.s*g.d*this.n%(g.n*this.d),g.d*this.d)},gcd:function(e,t){return r(e,t),a(d(g.n,this.n)*d(g.d,this.d),g.d*this.d)},lcm:function(e,t){return r(e,t),g.n===l&&this.n===l?a(l,u):a(g.n*this.n,d(g.n,this.n)*d(g.d,this.d))},inverse:function(){return a(this.s*this.d,this.n)},pow:function(e,t){if(r(e,t),g.d===u)return g.s<l?a((this.s*this.d)**g.n,this.n**g.n):a((this.s*this.n)**g.n,this.d**g.n);if(this.s<l)return null;e=o(this.n),t=o(this.d);let i=u,n=u;for(let t in e)if("1"!==t){if("0"===t){i=l;break}if(e[t]*=g.n,e[t]%g.d!==l)return null;e[t]/=g.d,i*=BigInt(t)**e[t]}for(let e in t)if("1"!==e){if(t[e]*=g.n,t[e]%g.d!==l)return null;t[e]/=g.d,n*=BigInt(e)**t[e]}return g.s<l?a(n,i):a(i,n)},equals:function(e,t){return r(e,t),this.s*this.n*g.d==g.s*g.n*this.d},compare:function(e,t){return r(e,t),(l<(e=this.s*this.n*g.d-g.s*g.n*this.d))-(e<l)},ceil:function(e){return e=p**BigInt(e||0),a(this.s*e*this.n/this.d+(e*this.n%this.d>l&&this.s>=l?u:l),e)},floor:function(e){return e=p**BigInt(e||0),a(this.s*e*this.n/this.d-(e*this.n%this.d>l&&this.s<l?u:l),e)},round:function(e){return e=p**BigInt(e||0),a(this.s*e*this.n/this.d+this.s*((this.s>=l?u:l)+e*this.n%this.d*h>this.d?u:l),e)},roundTo:function(e,t){r(e,t);var i=this.n*g.d;return t=i%(e=this.d*g.n),i/=e,t+t>=e&&i++,a(this.s*i*g.n,g.d)},divisible:function(e,t){return r(e,t),!(!(g.n*this.d)||this.n*g.d%(g.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e){function t(e){return"bigint"==typeof e?e:Math.floor(e)}let i=this.n,n=this.d;e=e||15;var r=function(e,t){for(;t%h===l;t/=h);for(;t%f===l;t/=f);if(t===u)return l;e=p%t;let i=1;for(;e!==u;i++)if(e=e*p%t,2e3<i)return l;return BigInt(i)}(i,n);let s=function(e,t,i){e=u;var n=p;let r=u;for(;i>l;n=n*n%t,i>>=u)i&u&&(r=r*n%t);for(i=0,n=r;300>i;i++){if(e===n)return BigInt(i);e=e*p%t,n=n*p%t}return 0}(i,n,r),a=this.s<l?"-":"";if(a+=t(i/n),(i=i%n*p)&&(a+="."),r){for(e=s;e--;)a+=t(i/n),i%=n,i*=p;for(a+="(";r--;)a+=t(i/n),i%=n,i*=p;a+=")"}else for(r=e;i&&r--;)a+=t(i/n),i%=n,i*=p;return a},toFraction:function(e){let t=this.n,i=this.d,n=this.s<l?"-":"";if(i===u)n+=t;else{let r=t/i;e&&r>l&&(n+=r,n+=" ",t%=i),n=n+t+"/"+i}return n},toLatex:function(e){let t=this.n,i=this.d,n=this.s<l?"-":"";if(i===u)n+=t;else{let r=t/i;e&&r>l&&(n+=r,t%=i),n=n+"\\frac{"+t+"}{"+i+"}"}return n},toContinued:function(){let e=this.n,t=this.d,i=[];do{i.push(e/t);let n=e%t;e=t,t=n}while(e!==u)return i},simplify:function(e){e=e||.001;let t=this.abs(),i=t.toContinued();for(let n=1;n<i.length;n++){let r=a(i[n-1],u);for(let e=n-2;0<=e;e--)r=r.inverse().add(i[e]);if(Math.abs(r.sub(t).valueOf())<e)return r.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return c}):(Object.defineProperty(c,"__esModule",{value:!0}),c.default=c,c.Fraction=c,k=c)}(0);class m{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let i=this._generateMarkup();if(!t)return i;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",i)}update(e){this._data=e;let t=this._generateMarkup(),i=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));i.forEach((e,t)=>{let i=n[t];e.isEqualNode(i)||e.firstChild?.nodeValue.trim()===""||(i.textContent=e.textContent),e.isEqualNode(i)||Array.from(e.attributes).forEach(e=>{i.setAttribute(e.name,e.value)})})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/e(b)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let i=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(b)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",i)}renderMessage(t=this._message){let i=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(b)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",i)}}class y extends m{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerRenderUpdateServings(e){this._parentEl.addEventListener("click",function(t){let i=t.target.closest(".btn--update-servings");if(!i)return;let n=+i.dataset.updateTo;n>=1?e(n):e(1)})}addHandlerRenderBookmark(e){this._parentEl.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
          <figure class="recipe__fig">
            <img src= ${this._data.image} alt=${this._data.title} class="recipe__img" />
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>

          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${/*@__PURE__*/e(b)}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${/*@__PURE__*/e(b)}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
              <span class="recipe__info-text">servings</span>

              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings-1}">
                  <svg>
                    <use href="${/*@__PURE__*/e(b)}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to ="${this._data.servings+1}">
                  <svg>
                    <use href="${/*@__PURE__*/e(b)}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${/*@__PURE__*/e(b)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round btn--bookmark">
              <svg class="">
                <use href="${/*@__PURE__*/e(b)}#icon-bookmark${this._data.bookMarked?"-fill":""}"></use>
              </svg>
            </button>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href=${this._data.sourceUrl}
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${/*@__PURE__*/e(b)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        `}_generateMarkupIngredient(t){return`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/e(b)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity?new(0,k.Fraction)(t.quantity).toFraction(!0):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
              </div>
            </li>
          `}}var w=new y,$=new class extends m{_parentEl="";_generateMarkup(){let t=window.location.hash.slice(1);return`
          <li class="preview">
            <a class="preview__link ${t===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/e(b)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `}};class E extends m{_parentEl=document.querySelector(".results");_errorMessage="No recepi found for your query! Please try again \uD83D\uDE41";_message="";_generateMarkup(){return this._data.map(e=>$.render(e,!1)).join("")}}var M=new E;class S{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var I=new S;class H extends m{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let i=t.target.closest(".btn--inline");i&&e(+i.dataset.goto)})}_generateMarkup(){let t=Math.ceil((this._data.length||this._data.results.length)/this._data.resultsPerPage),i=this._data.page;return 1===i&&t>1?`
              <button data-goto="${i+1}" class="btn--inline pagination__btn--next">
                <span>Page ${i+1}</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/e(b)}#icon-arrow-right"></use>
                </svg>
              </button>
            `:i===t&&t>1?`
              <button data-goto="${i-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/e(b)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${i-1}</span>
              </button>
            `:i<t?`
              <button data-goto="${i-1}" button class="btn--inline pagination__btn--prev" >
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/e(b)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${i-1}</span>
              </button >
              <button data-goto="${i+1}" class="btn--inline pagination__btn--next">
                <span>Page ${i+1}</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/e(b)}#icon-arrow-right"></use>
                </svg>
              </button>
            `:""}}var B=new H;class q extends m{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it \uD83D\uDE41";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>$.render(e,!1)).join("")}}var x=new q;class L extends m{_parentEl=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var P=new L;const N=async function(){try{let e=window.location.hash.slice(1);if(!e)return;w.renderSpinner(),M.update(h()),x.update(d.bookMarks),await l(e),w.render(d.recipe)}catch(e){console.error(e),w.renderError()}},R=async function(){try{let e=I.getQuery();if(e&&M.renderSpinner(),!e)return;await u(e),M.render(h()),B.render(d.search)}catch(e){M.renderError()}},T=async function(e){try{P.renderSpinner(),await v(e),console.log(d.recipe),w.render(d.recipe),P.renderMessage(),x.render(d.bookMarks),window.history.pushState(null,"",`#${d.recipe.id}`),setTimeout(()=>{P.toggleWindow()},2500)}catch(e){console.error("Error uploading recipe",e),P.renderError(e)}};x.addHandlerRender(function(){x.render(d.bookMarks)}),w.addHandlerRender(N),w.addHandlerRenderUpdateServings(function(e){f(e),w.update(d.recipe)}),w.addHandlerRenderBookmark(function(){d.recipe.bookMarked?_(d.recipe.id):g(d.recipe),w.update(d.recipe),x.render(d.bookMarks)}),I.addHandlerSearch(R),B.addHandlerClick(function(e){B.render(h(e)),B.render(d.search),M.render(h(e))}),P.addHandlerUpload(T);
//# sourceMappingURL=index.786996a1.js.map
