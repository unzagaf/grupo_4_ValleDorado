// console.log("general.js cargado");
let displayMenu = (visible, hidden)=>{
    document.getElementById('nav__menu').classList.add(visible)
    document.getElementById('nav__menu').classList.remove(hidden)
}

let displayAdmin = ()=>{
    document.getElementById('crear_paquete').classList.toggle('underline')
    document.getElementById('lista_paquete').classList.toggle('underline')
    document.getElementById('crear__paquetes__admin').classList.toggle('admin__hidden')
    document.getElementById('lista__paquetes__admin').classList.toggle('admin__hidden')
}

// let displayModal = ()=>{
//     document.getElementById('modificar__paquetes__admin').classList.toggle('modal__hidden')
// }


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


// funcion para poder calcular duracion de viaje
function calcularDuracion(fechaInicio, fechaFin) {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    // Diferencia en milisegundos
    const diferenciaMs = fechaFinObj - fechaInicioObj;

    // Convertir la diferencia a días y noches
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    const noches = Math.floor(dias / 2);

    return `${dias} días ${noches} noches`;
}
