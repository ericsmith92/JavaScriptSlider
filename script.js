//grab all slides

const slides = document.querySelectorAll('.slide');
const slideArray = [];

slides.forEach(function(slide){
    slideArray.push(slide);
});

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
