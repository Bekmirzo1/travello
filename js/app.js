'use strict';
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-summer__body')) {
    let summerSwiper = new Swiper('.slider-summer__body', {
        /*
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        */
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        watchOverflow: true,
        // autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        // simulateTouch: false,
        //loop: true,
        // Отключить предзагрузку всех картинок
        preloadImages: false,
        // Lazy Loading
        lazy: {
            // Подключать на старте переключения слайда
            loadOnTransitionStart: true,
            // Подключить предыдущую и следующие картинки
            loadPrevNext: true,
        },
        // Слежка за видимыми слайдами
        watchSlidesProgress: true,
        // Добавление класса видимым слайдам
        watchSlidesVisibility: true,
        // Dotts
        //pagination: {
        //	el: '.slider-quality__pagging',
        //	clickable: true,
        //},
        init: false,
        // Arrows
        navigation: {
            nextEl: '.nav-slider-summer__button_next',
            prevEl: '.nav-slider-summer__button_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2.33,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2.33,
                spaceBetween: 30,
            },
        },
        // And if we need scrollbar
        //scrollbar: {
        //	el: '.swiper-scrollbar',
        //},
        on: {
            transitionStart: function () {
                indexSlide();
            },
            slideChange: function () {
                indexSlide();
            },
        },
    });
    function indexSlide() {
        for (let index = 0; index < summerSwiper.slides.length; index++) {
            const slide = summerSwiper.slides[index];
            if (!slide.classList.contains('swiper-slide-active')) {
                const slideMassive = slide.getAttribute('aria-label').split(' ');
                const slideNumber = slideMassive[0];
                if ((summerSwiper.realIndex + 1) > +(slideNumber)) {
                    slide.classList.add('_foc');
                }
            } else {
                slide.classList.remove('_foc');
            }
        }
    }
    summerSwiper.init();
};

if (document.querySelector('.slider-flash__body')) {
    new Swiper('.slider-flash__body', {
        /*
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        */
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        watchOverflow: true,
        // autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        // simulateTouch: false,
        grabCursor: true,
        loop: true,
        // Отключить предзагрузку всех картинок
        preloadImages: false,
        // Lazy Loading
        lazy: {
            // Подключать на старте переключения слайда
            loadOnTransitionStart: true,
            // Подключить предыдущую и следующие картинки
            loadPrevNext: true,
        },
        // Слежка за видимыми слайдами
        watchSlidesProgress: true,
        // Добавление класса видимым слайдам
        watchSlidesVisibility: true,
        // Dotts
        //pagination: {
        //	el: '.slider-quality__pagging',
        //	clickable: true,
        //},
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

};
// *Эта функция проверяет поддерживается ли браузером формат изображения webp и если поддерживается, то эта функция добавляет из css-документа внутрь html-документа класс с изобажением формата webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// *iconMenu
let menuBody = document.querySelector('.menu__body');
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}

// * LazyLoading
const lazyImages = document.querySelectorAll('img[data-lazy]');
// const loadMapBlock = document.querySelector('._load-map');
const windowHieght = document.documentElement.clientHeight;
const lazyLimit = 10;
let lazyImagesPositions = [];

window.addEventListener('scroll', lazyScroll);
function lazyScroll() {
	if (lazyImages.length > 0) {
		lazyScrollCheck();
	}
}
if (lazyImages.length > 0) {
	for (let index = 0; index < lazyImages.length; index++) {
		const lazyImage = lazyImages[index];
		if (lazyImage.dataset.lazy || lazyImage.dataset.lazyset) {
			lazyImagesPositions.push(lazyImage.getBoundingClientRect().top + pageYOffset - (windowHieght / lazyLimit));
			lazyScrollCheck();
		}
	}
}

// image lazy
function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHieght
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.lazy) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.lazy;
			lazyImages[imgIndex].removeAttribute('data-lazy');
			if (lazyImages[imgIndex].previousElementSibling) {
				const webp = lazyImages[imgIndex].previousElementSibling;
				if (webp.tagName == 'SOURCE') {
					const dataImgSrc = lazyImages[imgIndex].getAttribute('src').split('.');
					dataImgSrc[1] = 'webp'
					const dataImgSrcWebp = dataImgSrc.join('.');
					webp.setAttribute('srcset', dataImgSrcWebp);
					webp.removeAttribute('data-srcset');
				}
			}
		}
		delete lazyImagesPositions[imgIndex]
	}
}