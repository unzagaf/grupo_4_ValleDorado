let displayMenu = (visible, hidden)=>{
    document.getElementById('nav__menu').classList.add(visible)
    document.getElementById('nav__menu').classList.remove(hidden)
}

const slider = document.getElementById("main__carousel__container");
let sliderSection = document.getElementsByClassName("main__carousel__one");
    
const btnLeft = document.getElementById("main__btn__left");
const btnRight = document.getElementById("main__btn__right");
slider.insertAdjacentElement("afterbegin", sliderSection[sliderSection.length -1])

let sliderFunction = (margin, position, section)=>{
    slider.style.marginLeft = margin;
    slider.style.transition = "all 1.5s";

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement(position, section)
        slider.style.marginLeft = "-100%";
    }, 1500);
}

btnRight.addEventListener('click', ()=>{clearInterval(interval); sliderFunction("-180vw", "beforeend", sliderSection[0])})
btnLeft.addEventListener('click', ()=>{clearInterval(interval); sliderFunction("0.7vw", "afterbegin", sliderSection[sliderSection.length -1])})

const interval = setInterval(()=>{
    sliderFunction("-180vw", "beforeend", sliderSection[0])
}, 4000)




/******************************************* */

