class rpuigallery extends HTMLElement {
		  connectedCallback() {
		    var number=Math.random().toString(36).substring(7);
			this.innerHTML = `<div class="swiper-container galleria-`+number+` w-100 bg-dark shadow rounded" style="height:75vh;"><div class="swiper-wrapper">`+this.innerHTML+`</div><div class="swiper-pagination swiper-pagination-`+number+`"></div><div class="swiper-button-prev swiper-button-prev-`+number+`"></div><div class="swiper-button-next swiper-button-next-`+number+`"></div></div>`;
			var mySwiper = new Swiper('.galleria-'+number, {
			    lazy: {
                    loadPrevNext: true,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
			    loop: true,
			    slidesPerView: 1,
    			pagination: {
    				el: '.swiper-pagination-'+number,
    			  },
    			  // Navigation arrows
    			  navigation: {
    				nextEl: '.swiper-button-next-'+number,
    				prevEl: '.swiper-button-prev-'+number,
    			  },
			});
			mySwiper.lazy.load();
		  }
		}
window.customElements.define('rpui-gallery', rpuigallery);
class rpuiplayer extends HTMLElement {
		  connectedCallback() {
		    var immagine=this.getAttribute("immagine") || "", mp4=this.getAttribute("mp4") || "", width=this.getAttribute("width") || "100%", height=this.getAttribute("height") || "500";
			this.innerHTML = `<video id="my-video" class="video-js" controls preload="auto" width="`+width+`" height="`+height+`" poster="`+immagine+`" data-setup="{}"><source src="`+mp4+`" type="video/mp4" /></video><script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>`;
		}
}
window.customElements.define('rpui-player', rpuiplayer);
