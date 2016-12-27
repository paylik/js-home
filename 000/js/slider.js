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



    function createPaginationItems() {
        var paginatorLink = document.getElementsByTagName('slider__pagination');
        var li = document.querySelector('li');
        for (var i = 1; i < 4; i++) {
            var myLi = li[i].cloneNode(true);
            paginatorLink.appendChild(myLi);
        }
    
    }
        this.__render();
        createPaginationItems();
    
}
// /* 2. Полностью делает TBODY, а затем вставляет в документ */
// var appendLast = new function() {
//     var benchTable;
//
//     this.setup = function() {
//         // очистить всё
//         benchTable = document.getElementById('bench-table');
//         while (benchTable.firstChild) {
//             benchTable.removeChild(benchTable.firstChild);
//         }
//     };
//
//     this.work = function() {
//         var tbody = document.createElement('TBODY');
//
//         for (var i = 0; i < 20; i++) {
//             var tr = document.createElement('TR');
//             tbody.appendChild(tr);
//             for (var j = 0; j < 20; j++) {
//                 var td = document.createElement('td');
//                 tr.appendChild(td);
//                 td.appendChild(document.createTextNode('' + i.toString(20) + j.toString(20)));
//             }
//         }
//
//         benchTable.appendChild(tbody);
//     }
//
// }