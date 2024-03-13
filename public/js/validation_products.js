// input type="text" name="destination" "destination"placeholder="Ingrese el nombre del paqu
// input type="text" name="city_depart" "city_depart"placeholder="Ingrese provincia de sal
// input type="number" name="price" "price"placeholder="Ingrese precio del paqu
// input type="number" name="group_size" "group_size"placeholder="Ingrese la cantidad base de perso
// input type="date" name="start_date" "start_date"placeholder="Ingrese fecha de inicio del paqu
// input type="date" name="finish_date""finish_date" placeholder="Ingrese fecha de finalizacion del paqu
//<input type="file" multiple name="imagen_producto" id="imagen_producto" placeholder="Ingrese la URL de la imagen 
//<button type="submit" id="submit">Crear paquete</button>

// input type="checkbox" name="incluye[]" value="Asistencia al Viajero">
// input type="checkbox" name="incluye[]" value="Hoteles 5 estrellas">
// input type="checkbox" name="incluye[]" value="Coordinador y guias locales">
// input type="checkbox" name="incluye[]" value="Régimen de comidas todo incluido">
// input type="checkbox" name="incluye[]" value="Excursiones según programa">
// input type="checkbox" name="incluye[]" value="Traslados de ingreso y egreso">

const elFormCreate = document.getElementById('productForm')
const elInputDestination = document.getElementById("destination");
const elInputCityDepart = document.getElementById("city_depart");
const elInputPrice = document.getElementById("price");
const elInputGroupSize = document.getElementById("group_size");
const elInputStartDate = document.getElementById("start_date");
const elInputFinishDate = document.getElementById("finish_date");
const elInputImagenProducto = document.getElementById("imagen_producto");
const elBtnSubmitAdmin=document.getElementById('submit');
const elCheckboxesIncluye = document.querySelectorAll('input[name="incluye[]"]');
/*******************************************
 *            Destino          *
 *******************************************/
elInputDestination.addEventListener('blur', function () {

    // Expresión regular que permite nombres de destino con un solo espacio en medio
    const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+(?: [A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+)*$/;

    // Sanitización de campos
    this.value = this.value.trim();
    this.value = this.value.replace(/\b\w/g, c => c.toUpperCase()); // Capitaliza cada palabra

    if (regex.test(this.value)) {
        // Si pasa el test, se elimina el mensaje de error y se marca como correcto
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {
        // Si no pasa el test, se muestra el mensaje de error y se marca como incorrecto
        this.nextElementSibling.innerText = 'Ingrese el nombre de destino, sin signos';
        this.isOK = false;
    }
});



/***********************************
 *            City Depart          *
 **********************************/
elInputCityDepart.addEventListener('blur', function () {
    // Expresión regular que permite nombres de destino con un solo espacio en medio
    const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+(?: [A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+)*$/;

    // Sanitización de campos
    this.value = this.value.trim();
    this.value = this.value.replace(/\b\w/g, c => c.toUpperCase()); // Capitaliza cada palabra

    if (regex.test(this.value)) {
        // Si pasa el test, se elimina el mensaje de error y se marca como correcto
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {
        // Si no pasa el test, se muestra el mensaje de error y se marca como incorrecto
        this.nextElementSibling.innerText = 'Por favor, ingresa el lugar de salida del viaje.';
        this.isOK = false;
    }
});


/******************************
 *            Price           *
 ******************************/

elInputPrice.addEventListener('blur', function () {

    // Expresión regular que valida números que representan precios, permitiendo precios mayores a $1000 y decimales opcionales para los centavos, con punto o coma como separadores de miles y coma como separador decimal
    const regex = /^\$?((1000|[1-9]\d{3,})(?:[.,]\d{1,2})?)$/;


    this.value = this.value.trim();

    if (regex.test(this.value)) {
        // Si pasa la validación, se elimina el mensaje de error y se marca como correcto
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {
        // Si no pasa la validación, se muestra el mensaje de error y se marca como incorrecto
        this.nextElementSibling.innerText = 'Por favor, ingrese un precio válido. El precio mínimo es $1000. Usar punto para los miles"';
        this.isOK = false;
    }
});


/****************************
 *        Group Size        *
 ***************************/

elInputGroupSize.addEventListener('blur', function () {
    // Expresión regular que valida números del 1 al 5
    const regex = /^(?:[1-5])$/;

    // Elimina espacios en blanco al principio y al final
    this.value = this.value.trim();

    if (regex.test(this.value)) {
        // Si pasa la validación, se elimina el mensaje de error y se marca como correcto
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {
        // Si no pasa la validación, se muestra el mensaje de error y se marca como incorrecto
        this.nextElementSibling.innerText = 'Por favor, ingresa un número válido de personas (de 1 a 5).';
        this.isOK = false;
    }
});


/****************************
 *        Start Date        *
 ***************************/

let startDate;

elInputStartDate.addEventListener('blur', function () {
    // Obtener la valor del campo de fecha de inicio
    const startDateValue = this.value;

    // Convertir la fecha de inicio a un objeto Date
    startDate = new Date(startDateValue);

    // Obtener la fecha actual
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Establecer las horas, minutos, segundos y milisegundos a cero para comparaciones

    // Validar si la fecha de inicio es válida y si es mayor o igual que la fecha actual
    if (startDateValue && startDate && !isNaN(startDate.getTime()) && startDate >= currentDate) {
        // Si la fecha de inicio es válida y es mayor o igual que la fecha actual, se considera correcta
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {

        // Si la fecha de inicio no es válida o es anterior a la fecha actual, se muestra un mensaje de error
        this.nextElementSibling.innerText = 'Por favor, ingrese una fecha válida y posterior a la fecha actual.';
        this.isOK = false
    }

});

elInputFinishDate.addEventListener('blur', function () {
    // Obtener el valor del campo de fecha de regreso
    const finishDateValue = this.value;

    // Convertir la fecha de regreso a un objeto Date
    const finishDate = new Date(finishDateValue);

    // Validar si la fecha de regreso es válida y si es posterior a la fecha de inicio
    if (finishDateValue && finishDate && !isNaN(finishDate.getTime()) && finishDate > startDate) {
        // Si la fecha de regreso es válida y es posterior a la fecha de inicio, se considera correcta
        this.nextElementSibling.innerText = "";
        this.isOK = true;
    } else {
        // Si la fecha de regreso no es válida o es igual o anterior a la fecha de inicio, se muestra un mensaje de error
        this.nextElementSibling.innerText = 'Por favor, ingrese una fecha válida y posterior a la fecha de inicio.';
        this.isOK = false;
    }
});

/**********************
 *       Imagen       *
 **********************/

elInputImagenProducto.isOK = true;

elCheckboxesIncluye.isOK=true;



/**********************
 *      Submit       *
 **********************/

elBtnSubmitAdmin.addEventListener('click', function (event) {

    // en esta variable vamos a guardar todos los errores que se junten de cada input
    let erroresInput = '';

    // caputramos el formulario, para poder acceder  a cada campo(input)
    elFormCreate.querySelectorAll('input').forEach(function (campo) {

        if (!campo.isOK) {
            //aqui guarda el error que ese encuentra en cada input, con la propiedad name
            erroresInput += `Error en el campo ${campo.name}\n`
        }
    });

    if (erroresInput === '') {
        this.nextElementSibling.innerText = 'Estan todos bien';
        this.nextElementSibling.style.color = 'green'

    } else {
        this.nextElementSibling.innerText = erroresInput;
        this.nextElementSibling.style.color = '#F18701';
        event.preventDefault();

    }

})








