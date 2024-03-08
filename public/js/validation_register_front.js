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


/*****************************************
 * Validaciones para el campo name   *
 *****************************************/

elInputName.addEventListener('blur', function () {

    //queremos manejar las validaciones mediante expresiones regulares
    const regex =/^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]{3,}$/;
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
        this.nextElementSibling.innerText = ""
        this.isOK = true

    } else {
        //si no lo pasa
        // este es el mensaje de error si se completa erroneamente el campo
        this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 3 letras'
        this.isOK = false
    }

    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //la 1* letra sea con mayuscula
    //no puede contener signos ni espacios
});


/*****************************************
 * Validaciones para el campo surname   *
 *****************************************/

elInputSurname.addEventListener('blur', function () {

    //queremos manejar las validaciones mediante expresiones regulares
    const regex =/^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]{3,}$/;
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
        this.nextElementSibling.innerText = ""
        this.isOK = true

    } else {
        //si no lo pasa
        // este es el mensaje de error si se completa erroneamente el campo
        this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 3 letras'
        this.isOK = false
    }

    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //la 1* letra sea con mayuscula
    //no puede contener signos ni espacios
});

