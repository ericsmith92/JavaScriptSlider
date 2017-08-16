//alert('connected');

//grab all slides
const slideOne = document.querySelector('#slide-one');
const slideTwo = document.querySelector('#slide-two');
const slideThree = document.querySelector('#slide-three');
const slideFour = document.querySelector('#slide-four');
const slideFive = document.querySelector('#slide-five');

//put into array
const slideArray = [slideOne, slideTwo, slideThree, slideFour, slideFive];

//grab buttons
const btns = document.querySelectorAll('button');

//counter for index
let idx = 0;

//functionality

function moveSlide(){
    //remove class of current from image being shown
    slideArray[idx].classList.remove('current');
    
    if(this.id === 'prev'){
        idx--
        if(idx < 0){
            idx = slideArray.length - 1;
        }
        slideArray[idx].classList.add('current');
    } 
    
    if(this.id === 'next'){
        idx++
        if(idx > slideArray.length - 1){
            idx = 0;
        }
        slideArray[idx].classList.add('current');
    }

}

//listeners
btns.forEach(btn => btn.addEventListener('click', moveSlide));
