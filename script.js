const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength-1)*100}vh`
//according to html our last image's name (leftside)given to 1st img(right side)
// so to correlate that we use '-' sign 
//and set slidelength to slidelength-1 
//100 is viewport height

//event listener
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
   const sliderHeight = sliderContainer.clientHeight

   //console.log(sliderHeight);
   //clientHeight is height of image on page ie viewport heigth of image
   // to chk remove comment of console log
   
   if(direction === 'up') {
       activeSlideIndex++
       if(activeSlideIndex > slidesLength - 1) {
           activeSlideIndex = 0
       }
   }

   else if(direction === 'down') {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
    }
}   

   slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
   slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

   //rt side is -ve bcoz we want to move it up (-y axis)
   //left side is +ve bcoz we want to move it down (y axis)

}