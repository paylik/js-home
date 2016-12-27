function Slider(selector, options) {

    var __self = this;
    var sliderNode = document.querySelector(selector);
    var sliderImagesNode = sliderNode.querySelector('.slider__images-wrap');
    var prevImagesNode = sliderNode.querySelector('.slider__pager_previous');
    var nextImagesNode = sliderNode.querySelector('.slider__pager_next');
    var paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = options.currentSlide || 0;
    var imagesCount = sliderImagesNode.children.length;
    var slidSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];

    
    this.createPaginationsItems = function () {

    var li = document.getElementsByClassName('slider__pagination-item')[0];
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < imagesCount; i++) {
        var newLi = li.cloneNode(true);
        newLi.classList.remove('slider__pagination-item_tmpl');
       if (i === 0) {
           newLi.querySelector('a').classList.add('active');
       }
        newLi.querySelector('a').dataset.slider__item = i;
        newLi.querySelector('a').innerHTML = i+1;
        fragment.appendChild(newLi);
        //li.parentElement.appendChild(newLi);
    }
        li.parentElement.appendChild(fragment);
    paginationNode.removeChild(document.getElementsByClassName('slider__pagination-item')[0]);
    };
    this.createPaginationsItems();
    
    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };

    this.__render = function () {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';

        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slidSize) + 'px';

        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };
    
    
    prevImagesNode.onclick = function (e) {
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };
    nextImagesNode.onclick = function (e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };

    paginationNode.onclick = function (e) {
        e.preventDefault();

        var link = e.target;

        if (link.tagName !== 'A') {
            return;
        }

        currentSlideIndex = + link.dataset['slider__item'];
        __self.__render();
    };

    this.__init = function () {
        if (options.direction === 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }
        this.__render();
    };

    this.__init();
    this.__render();

}
