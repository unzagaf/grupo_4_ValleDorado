/*
<input type="text" name="username" id="username" placeholder="usuario" 
<input type="password" name="password" id="password" placeholder="contraseña" 
*/

//Se capturan los input a validar

const elFormLogin = document.getElementById('formLogin');
const elInputUsername = document.getElementById('username');
const elInputpassword = document.getElementById('password');
const elCheckBox = document.getElementById('recordar');
const elBtnSubmit = document.getElementById('submit');


/*************************
 *        user name      *
 ************************/

elInputUsername.addEventListener('blur', function () {

    //Expresion regular que verifica:
    //Letras mayúsculas y minúsculas (a-z, A-Z).
    //Números (0-9).
    //Guiones bajos (_).
    //Guiones (-).
    //Puntos (.).
    const regex = /^[a-zA-Z0-9_\-\.]{3,20}$/;


    this.value = this.value.trim();
    this.value = this.value.toLowerCase();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOk = true;

    } else {

        this.nextElementSibling.innerText = 'Campo obligatorio, ingrese el usuario que generó al registrarse ';
        this.isOk = false;
    };


});


/***********************
 *   campo password    *
 ***********************/

elInputpassword.addEventListener('focus', function () {

    // Mensaje que mostrará los requirimientos para llenar el campo
    const passwordCriteriaLogin = 'La contraseña debe ser la misma que uso al registrarse\n' +
        'Cumpliendo el mismo parametro'

    this.nextElementSibling.innerText = passwordCriteriaLogin;
    this.nextElementSibling.style.color = "#F18701"
});


elInputpassword.addEventListener('blur', function () {

    const regex = /^(?=.*[!@#$%^&*()-_=+{};:,<.>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    this.value = this.value.trim();

    if (regex.test(this.value)) {

        this.nextElementSibling.innerText = "";
        this.isOk = true

    } else {

        this.nextElementSibling.innerText = "Ingrese su contraseña con los parametros indicados anteriormente";
        this.nextElementSibling.style.color = "red";
        this.isOk = false
    }

});

/**********************
 *      Checkbox      *
 **********************/
//Se coloca en true ya que no es necesario validarlo pero si corre en el forEach del submit
elCheckBox.isOk = true;

/**********************
 *       Submit       *
 **********************/

elBtnSubmit.addEventListener('click', function (event) {


    // en esta variable vamos a guardar todos los errores que se junten de cada input
    let erroresInput = '';

    // caputramos el formulario, para poder acceder  a cada campo(input)
    elFormLogin.querySelectorAll('input[type="text"], input[type="password"]').forEach(function (campo) {

        if (!campo.isOk) {
            //aqui guarda el error que ese encuentra en cada input, con la propiedad name
            erroresInput += `Error en el campo ${campo.name}\n`

            console.log(erroresInput)
        }
    });

    if (erroresInput === '') {
        this.nextElementSibling.innerText = 'Estan todos bien';
        this.nextElementSibling.style.color = 'green'
    } else {
        this.nextElementSibling.innerText = erroresInput;
        this.nextElementSibling.style.color = 'red';
        event.preventDefault();
    }

})
