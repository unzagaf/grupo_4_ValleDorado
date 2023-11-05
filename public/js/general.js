let hamburguerMenuVisible = document.getElementById('header__hamburguer')
hamburguerMenuVisible.addEventListener('click', ()=>{
    document.getElementById('nav__menu').classList.add('nav__menu-visible')
    document.getElementById('nav__menu').classList.remove('nav__menu-hidden')
})

let hamburguerMenuHidden = document.getElementById('li__menu__close__hamburguer')
hamburguerMenuHidden.addEventListener('click', ()=>{
    document.getElementById('nav__menu').classList.remove('nav__menu-visible')
    document.getElementById('nav__menu').classList.add('nav__menu-hidden')
})


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

btnRight.addEventListener('click', ()=>{sliderFunction("-180vw", "beforeend", sliderSection[0])})
btnLeft.addEventListener('click', ()=>{sliderFunction("0.7vw", "afterbegin", sliderSection[sliderSection.length -1])})

setInterval(()=>{
    sliderFunction("-180vw", "beforeend", sliderSection[0])
}, 4000)




/******************************************* */

