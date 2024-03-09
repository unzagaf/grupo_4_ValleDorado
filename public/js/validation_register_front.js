//Se capturan los input de los campos a validar
const elForm = document.getElementById('registerForm')
const elInputName = document.getElementById('name');
const elInputSurname = document.getElementById('surname');
const elInputBirthdate = document.getElementById('birthdate');
const elInputdni = document.getElementById('dni');
const elInputTelephone = document.getElementById('telephone');
const elInputEmail = document.getElementById('email');
const elInputUsername = document.getElementById('username');
const elInputpassword = document.getElementById('password');
const elInputconfirmarPassword = document.getElementById('confirmarPassword')
const elInputimagenUsuario = document.getElementById('imagenUsuario');
const elBtnSubmit = document.getElementById('submit');


//Se usaran expresiones regulares para la validacion de los campos.


/*****************************************
 * Validaciones para el campo name   *
 *****************************************/

elInputName.addEventListener('blur', function () {
    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //no puede contener signos ni espacios
    //Comienza con una letra mayúscula (incluyendo caracteres acentuados en español).
    //Seguido por al menos tres letras minúsculas.
    //Opcionalmente seguido por un espacio y otro nombre que también cumpla con los mismos criterios
    const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+(?:\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+)?$/


    //sanitizacion de campos:
    //para que no queden espacios la inicio del campo
    //el 1* caracter con mayúscula.
    this.value = this.value.trim();
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();

    if (regex.test(this.value)) {
        // si pasa el test:
        // sacamos el msj de erro que pueda haber estado
        //guardamos en una variable que está todo correcto.(para ser usado en el submit)
        this.nextElementSibling.innerText = "";
        this.isOK = true;

    } else {
        //si no lo pasa
        // este es el mensaje de error si se completa erroneamente el campo
        this.nextElementSibling.innerText = 'Ingrese un solo nombre, debe contener al menos 3 letras';
        this.isOK = false
    }
});


/*****************************************
 * Validaciones para el campo surname   *
 *****************************************/

elInputSurname.addEventListener('blur', function () {

    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //la 1* letra sea con mayuscula
    //no puede contener signos ni espacios
    const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]{3,}$/;

    //sanitizacion de campos:
    //para que no queden espacios la inicio del campo
    //el 1* caracter con mayúscula.
    // se permiten ñ.
    this.value = this.value.trim();
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();

    if (regex.test(this.value)) {
        // si pasa el test:
        // sacamos el msj de erro que pueda haber estado
        //guardamos en una variable que está todo correcto.(para ser usado en el submit)
        this.nextElementSibling.innerText = "";
        this.isOK = true;

    } else {
        //si no lo pasa
        // este es el mensaje de error si se completa erroneamente el campo
        this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 4 letras';
        this.isOK = false;
    }

});

/*****************************************
 * Validaciones para el campo birthdate   *
 *****************************************/

elInputBirthdate.addEventListener('focus', function () {

    this.nextElementSibling.innerText = 'La fecha debe ser posterior 01/01/1920\n' + 'Debes ser mayor de 18 años para continuar';
    this.nextElementSibling.style.color = "blue"
});

elInputBirthdate.addEventListener('blur', function () {

    let birthdate = new Date('0001-01-01')
    if (this.value) {
        birthdate = new Date(this.value);
    }

    // Declaramos la fecha mínima
    const minDate = new Date('1920-01-01');

    // Calculamos la fecha hace 18 años
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    // Validar si la fecha está dentro del rango
    if (birthdate > eighteenYearsAgo || birthdate < minDate) {
        // Mostrar mensaje de error
        this.nextElementSibling.innerText = 'La fecha debe ser posterior 01/01/1920\n' + 'Debes ser mayor de 18 años para continuar';
        // Puedes agregar estilos CSS para que el mensaje sea visible
        this.nextElementSibling.style.color = "red"

    } else {
        // Limpiar el mensaje de error si la fecha es válida
        this.nextElementSibling.innerText = '';
        elInputBirthdate.isOk = true;
    }

})



// elInputBirthdate.addEventListener('blur', function () {
//     // Obtener la fecha actual
//     const currentDate = new Date();
//     console.log("Fecha actual:", currentDate);

//     // Calcular la fecha mínima para ser mayor de edad (18 años atrás)
//     const minDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
//     console.log("Fecha mínima para ser mayor de edad:", minDate);

//     // Calcular la fecha máxima (100 años atrás)
//    // Calcular la fecha máxima (100 años atrás)
// const maxDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());

//     console.log("Fecha máxima:", maxDate);

//     // Obtener la fecha de nacimiento ingresada por el usuario
//     const birthdate = new Date(this.value.replace(/-/g, '/')); // Reformatear la cadena de fecha
//     console.log("Fecha de nacimiento ingresada:", birthdate);
    

//     // Verificar si la fecha de nacimiento está dentro del rango permitido
//     if (birthdate >= minDate && birthdate <= maxDate) {
//         // La fecha de nacimiento es válida
//         this.nextElementSibling.innerText = "";
//         this.isOK = true;
//         console.log("Fecha de nacimiento ingresada:", birthdate);
//     } else {
//         // La fecha de nacimiento no está dentro del rango permitido
//         this.nextElementSibling.innerText = "La fecha de nacimiento debe indicar que la persona es mayor de edad y tiene menos de 100 años.";
//         this.isOK = false;
//         console.log("Fecha de nacimiento ingresada:", birthdate);
//     }
// });

// Otra opcion de validacion


// elInputBirthdate.addEventListener('blur', function () {
//     // Expresión regular valida el siguiente formato:
//     // dd: Día, acepta valores de 01 a 31.
//     // mm: Mes, acepta valores de 01 a 12.
//     // aaaa: Año, acepta cualquier año de cuatro dígitos.
//     const regex =  /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

//     if (regex.test(this.value)) {
//         this.nextElementSibling.innerText = "";
//         this.isOK = true
//         console.log(elInputBirthdate)

//     } else {
//         this.nextElementSibling.innerText = "El formato debe ser DD/MM/AAAA";
//         this.isOK = false;
//         console.log(elInputBirthdate)
//     }

//     console.log(elInputBirthdate)
// });

/*****************************************
 * Validaciones para el campo dni   *
 *****************************************/

elInputdni.addEventListener('blur', function () {

    //Esta expresión regular valida un DNI argentino que tenga entre 7 y 8 dígitos.
    // y no permite ningún otro caracter
    const regex = /^[0-9]{7,8}$/;

    this.value = this.value.trim();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true

    } else {
        this.nextElementSibling.innerText = "Ingrese su DNI, sin puntos";
        this.isOK = false;
    }

});

/*****************************************
 *  Validaciones para el campo teléfono   *
 *****************************************/

elInputTelephone.addEventListener('blur', function () {
    //El texto debe comenzar (^) con exactamente 3 dígitos.
    //Después de los primeros 3 dígitos, debe haber exactamente 7 dígitos adicionales
    // El $ asegura que la cadena termine aquí.
    const regex = /^\d{3}\d{7}$/;

    this.value = this.value.trim();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true

    } else {
        this.nextElementSibling.innerText = "Ingrese el área + el número sin espacios";
        this.isOK = false
    }


});


/*****************************************
 * Validaciones para el campo email   *
 *****************************************/

elInputEmail.addEventListener('blur', function () {

    // Requiere que la parte antes del símbolo "@" tenga al menos 3 caracteres, que pueden ser letras, números, puntos, guiones bajos, porcentajes o signos de suma o resta.
    //Requiere que después del "@" haya al menos 3 caracteres, que pueden ser letras, números, puntos o guiones, seguidos de un punto.
    //El punto después del "@" debe estar seguido por al menos dos letras, que representan el dominio de nivel superior (como ".com").
    //Opcionalmente, permite subdominios adicionales seguidos de puntos, seguidos de al menos dos letras para el dominio de nivel superior.
    const regex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

    this.value = this.value.trim();
    this.value = this.value.toLowerCase();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true

    } else {
        this.nextElementSibling.innerText = "Formato incorrecto, debe ingresar @ y el dominio";
        this.isOK = false
    }
});

/*****************************************
 * Validaciones para el campo user name  *
 *****************************************/

elInputUsername.addEventListener('blur', function () {

    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //la 1* letra sea con mayuscula
    //no puede contener signos ni espacios
    const regex = /^[A-Za-z0-9_-]{3,10}$/;

    this.value = this.value.trim();
    this.value = this.value.toLowerCase();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true;

    } else {

        this.nextElementSibling.innerText = 'Campo obligatorio, ingrese cual sera su nombre de usuario debe contener al menos 3 letras';
        this.isOK = false;
    }

});

/*****************************************
 *  Validaciones para el campo password   *
 *****************************************/

// Mensaje que mostrará los requirimientos para llenar el campo
const passwordCriteria = 'La contraseña debe tener al menos 8 caracteres\n' +
    'Debe poseer al menos una letra Mayúscula\n' +
    'Debe poseer al menos una letra Minúscula\n' +
    'Debe poseer al menos un caracter especial\n' +
    'Lista de caracteres especiales: !@#$%^&*()-_=+{};:,<.>'

elInputpassword.addEventListener('focus', function () {

    //se muestran los requirimientos al usuario
    //  muestro esos requerimientos en azul, si es rojo sería molestos para el usuario, si es verde quedaria como correcto, por eso se elegi otro color
    this.nextElementSibling.innerText = passwordCriteria;
    this.nextElementSibling.style.color = "#F18701"
});


elInputpassword.addEventListener('blur', function () {

    const regex = /^(?=.*[!@#$%^&*()-_=+{};:,<.>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    this.value = this.value.trim();

    if (regex.test(this.value)) {

        this.nextElementSibling.innerText = "";
        this.isOK = true

    } else {

        this.nextElementSibling.innerText = "Ingrese su contraseña con los parametros indicados";
        this.nextElementSibling.style.color = "red";
        this.isOK = false
    }

});

/*******************************************
 * Validaciones para campo Confirmar Password *
 *******************************************/

elInputconfirmarPassword.addEventListener('blur', function () {

    this.value = this.value.trim();

    if (this.value === elInputpassword.value) {

        this.nextElementSibling.innerText = "Contraseña ingresada correctamente";
        this.nextElementSibling.style.color = "green";
        this.isOK = true;

    } else {
        this.nextElementSibling.innerText = 'Ingrese nuevamente su contraseña';
        this.nextElementSibling.style.color = "red";
        this.isOK = false;
    }

});
/**********************
 *       Imagen       *
 **********************/


elInputimagenUsuario.isOk = true;

/**********************
 *       Submit       *
 **********************/

elBtnSubmit.addEventListener('click', function (event) {

    event.preventDefault();

    // en esta variable vamos a guardar todos los errores que se junten de cada input
    let erroresInput = '';

    // caputramos el formulario, para poder acceder  a cada campo(input)
    elForm.querySelectorAll('input').forEach(function (campo) {

        
        if (!campo.isOK) {
            //aqui guarda el error que ese encuentra en cada input, con la propiedad name
            erroresInput += `Error en el campo ${campo.name}\n`
        }
    });

    if (erroresInput=== '') {
        this.nextElementSibling.innerText = 'Estan todos bien';
        this.nextElementSibling.style.color = 'green'
    } else {
        this.nextElementSibling.innerText = erroresInput;
        this.nextElementSibling.style.color = 'red';

    }

})






