
document.addEventListener('DOMContentLoaded', function () {
    var slidesContainer = document.querySelector('.slides');
    var slidesArr = slidesContainer.querySelectorAll('.slides__item');

    var buttonContainer = document.querySelector('.page__slider');
    var buttonNext = buttonContainer.querySelector('.slider__arrow');

    var currentNumber = document.querySelector('.slider__current-slide');
    var totalSlides = document.querySelector('.slider__total-slides');

    var mainSlider = new Slider(slidesContainer, buttonNext, slidesArr, currentNumber, totalSlides);
});

var Slider = function (slidesContainer, buttonNext, slidesArr, currentNumber, totalSlides) {
    this.currentSlide = 1;
    this.slidesArr = slidesArr;
    this.slidesContainer = slidesContainer;
    this.items = this.slidesArr.length;
    this.currentNumber = currentNumber;
    this.totalSlides = totalSlides;

    this.bindEvents(buttonNext);
    this.initTimer();
    this.renderCounter();
}

Slider.prototype.bindEvents = function (buttonNext) {
    buttonNext.addEventListener('click', this.switchRight.bind(this));
};

Slider.prototype.initTimer = function () {
    setInterval(this.switchRight.bind(this), 5000);
};

Slider.prototype.switchRight = function () {
    var sliderWidth;

    if (this.currentSlide < this.items) {
        sliderWidth = this.slidesArr[this.currentSlide].offsetWidth;
        this.slidesContainer.style.left = `-${this.currentSlide * sliderWidth}px`;
        this.currentSlide++;
    } else {
        this.slidesContainer.style.left = '0';
        this.currentSlide = 1;
    }

    this.renderCounter()
};
Slider.prototype.renderCounter = function(){
    this.currentNumber.innerText = this.currentSlide;
    this.totalSlides.innerText = this.items;
}
