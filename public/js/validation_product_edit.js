//document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí
    
    
    
//<input type="text" name="destination" placeholder="Ingrese el nombre del paquete" ></input>
//<input type="text" name="destination" placeholder="Ingrese el nombre del paquete"></input>
const elFormEdit = document.getElementById('productFormEdit')
const elInputDestinationEdit = document.getElementById("destination");
const elInputCityDepartEdit = document.getElementById("city_depart");
const elInputPriceEdit = document.getElementById("price");
const elInputGroupSizeEdit = document.getElementById("group_size");
const elInputStartDateEdit = document.getElementById("start_date");
const elInputFinishDateEdit = document.getElementById("finish_date");
const elInputImagenProductoEdit = document.getElementById("imagen_producto");
const elBtnSubmitEdit=document.getElementById('submit');
const elCheckboxesIncluyeEdit = document.querySelectorAll('input[name="incluye[]"]');


/*******************************************
 *            Destino          *
*******************************************/
elInputDestinationEdit.addEventListener('blur', function () {
    
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
elInputCityDepartEdit.addEventListener('blur', function () {
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

elInputPriceEdit.addEventListener('blur', function () {

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

elInputGroupSizeEdit.addEventListener('blur', function () {
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

elInputStartDateEdit.addEventListener('blur', function () {
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

elInputFinishDateEdit.addEventListener('blur', function () {
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

elInputImagenProductoEdit.isOK = true;

/**********************
 *      Submit       *
 **********************/


elBtnSubmitEdit.addEventListener('click', function (event) {

   
    let erroresInput = '';

    elFormEdit.querySelectorAll('input').forEach(function (campo) {
        if (!campo.isOK && campo.type !== 'checkbox') {
            erroresInput += `Error en el campo ${campo.name}\n`;
        }
    });

    // Validación para los checkboxes
    const checkboxesChecked = Array.from(elCheckboxesIncluye).some(function (checkbox) {
        return checkbox.checked;
    });

    if (!checkboxesChecked) {
        erroresInput += 'Debe seleccionar al menos una opción de incluye\n';
    }

    if (erroresInput === '') {
        this.nextElementSibling.innerText = 'Todos los campos están bien';
        this.nextElementSibling.style.color = 'green';
    } else {
        this.nextElementSibling.innerText = erroresInput;
        this.nextElementSibling.style.color = '#F18701';
        event.preventDefault();
        
    }
});







//});