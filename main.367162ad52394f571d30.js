(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3LA4":function(e,t,n){e.exports=n.p+"images/loading.gif"},JNau:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,l=e.escapeExpression,i=e.lambda,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="photo-card">\n    <img src="'+l("function"==typeof(o=null!=(o=c(n,"webformatURL")||(null!=t?c(t,"webformatURL"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"webformatURL",hash:{},data:r,loc:{start:{line:3,column:14},end:{line:3,column:30}}}):o)+'" alt="'+l(i(null!=t?c(t,"tags"):t,t))+'" data-src="'+l(i(null!=t?c(t,"largeImageURL"):t,t))+'" />\n    <div class="stats">\n        <p class="stats-item">\n            <i class="material-icons">thumb_up</i>\n            '+l(i(null!=t?c(t,"likes"):t,t))+'\n        </p>\n        <p class="stats-item">\n            <i class="material-icons">visibility</i>\n            '+l(i(null!=t?c(t,"views"):t,t))+'\n        </p>\n        <p class="stats-item">\n            <i class="material-icons">comment</i>\n            '+l(i(null!=t?c(t,"comments"):t,t))+'\n        </p>\n        <p class="stats-item">\n            <i class="material-icons">cloud_download</i>\n            '+l(i(null!=t?c(t,"downloads"):t,t))+"\n        </p>\n    </div>\n\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?o:""},useData:!0})},OSpC:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("OSpC"),n("PzF0"),n("bzha"),n("zrP5");const a="19178590-f2f628b09a5664f3e2bf6a47d";function r(){return{galleryContainer:document.querySelector("#gallery"),form:document.querySelector("#search-form"),header:document.querySelector(".search")}}var o=n("JNau"),l=n.n(o);const i=r();var c={renderImageCards:function(e){const t=l()(e);i.galleryContainer.insertAdjacentHTML("beforeend",t)},clearImageContainer:function(){i.galleryContainer.innerHTML=""}},s=n("dcBu"),u=n("3LA4"),d=n.n(u);var h={loadingPlaceholder:s.create(`<img src="${d.a}"/>`),bigImg:function(e){return s.create(`<img src="${e}"/>`)}},g=n("yWWw"),m=n.n(g),p=n("QJ3N");var f={errorNotFound:function(){Object(p.error)({title:"Oops!",text:"No images found :( Please enter another query!",delay:1500})},errorNotice:function(){Object(p.notice)({title:"Well..",text:"Something went wrong. Please reload a page.",delay:3e3})},errorInfo:function(){Object(p.info)({title:"You found all pictures that you want!",text:"No more pictures for your search query.",delay:3e3})},errorNoQuery:function(){Object(p.info)({title:"Empty query!",text:"Please enter a query.",delay:1500})}};const y=r(),w=new class{constructor(){this._page=1,this._searchQuery=""}async fetchImages(){const e=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${a}`;return this.getData(e).then(e=>e.hits)}async countImages(){const e=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${a}`;return this.getData(e).then(e=>e.totalHits)}async getData(e){const t=await fetch(e);return await t.json()}get searchQuery(){return this._searchQuery}set searchQuery(e){this._searchQuery=e}get page(){return this._page}set page(e){this._page=e}};let v=0;const b=m()((function(e){if(pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-1){h.loadingPlaceholder.show();try{w.countImages().then(e=>{if(e===y.galleryContainer.childElementCount)return f.errorInfo(),window.removeEventListener("scroll",b),void h.loadingPlaceholder.close();w.fetchImages().then(e=>{w.page+=1,v=y.galleryContainer.offsetHeight,c.renderImageCards(e),h.loadingPlaceholder.close(),window.scrollTo({top:v,left:0,behavior:"smooth"})})})}catch(e){f.errorNotice(),h.loadingPlaceholder.close()}}}),500);y.form.addEventListener("submit",(function(e){e.preventDefault(),h.loadingPlaceholder.show();let t=e.currentTarget.elements.query;if(""===t.value)return f.errorNoQuery(),void h.loadingPlaceholder.close();c.clearImageContainer(),w.page=1,w.searchQuery=t.value;try{w.countImages().then(e=>{if(0===e)return f.errorNotFound(),void h.loadingPlaceholder.close();w.fetchImages().then(e=>{c.renderImageCards(e),window.addEventListener("scroll",b),h.loadingPlaceholder.close()})})}catch(e){f.errorNotice(),h.loadingPlaceholder.close()}t.value})),y.galleryContainer.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;h.bigImg(e.target.dataset.src).show()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.367162ad52394f571d30.js.map