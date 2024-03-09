//Se capturan los input de los campos a validar

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
        this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 3 letras';
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
        this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 3 letras';
        this.isOK = false;
    }

});


/*****************************************
 * Validaciones para el campo birthdate   *
 *****************************************/

elInputBirthdate.addEventListener('blur', function () {
    // Expresión regular valida el siguiente formato:
    // dd: Día, acepta valores de 01 a 31.
    // mm: Mes, acepta valores de 01 a 12.
    // aaaa: Año, acepta cualquier año de cuatro dígitos.
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    this.value = this.value.trim();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true
    } else {
        this.nextElementSibling.innerText = "El formato debe ser DD/MM/AAAA";
        this.isOK = false;
    }

});

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
        this.nextElementSibling.innerText = "Ingrese su dni, sin puntos";
        this.isOK = false;
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


