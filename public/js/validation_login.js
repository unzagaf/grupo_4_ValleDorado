/*
<input type="text" name="username" id="username" placeholder="usuario" 
<input type="password" name="password" id="password" placeholder="contraseña" 
*/

//Se capturan los input a validar

const elFormLogin = document.getElementById('formLogin');
const elInputUsername = document.getElementById('username');
const elInputpassword = document.getElementById('password');    
const elBtnSubmit = document.getElementById('submit')    


/*****************************************
 * Validaciones para el campo user name  *
 *****************************************/

elInputUsername.addEventListener('blur', function () {

    //Expresion regular que verifica:
    //al menos tenga 3 caracteres
    //la 1* letra sea con mayuscula
    //no puede contener signos ni espacios
    const regex =/^[A-Za-z0-9_-]{3,10}$/;

    this.value = this.value.trim();
    this.value = this.value.toLowerCase();

    if (regex.test(this.value)) {
        this.nextElementSibling.innerText = "";
        this.isOK = true;

    } else {

        this.nextElementSibling.innerText = 'Campo obligatorio, ingrese el usuario que generó al registrarse ';
        this.isOK = false;
    };


});


/*****************************************
 *  Validaciones para el campo password   *
 *****************************************/

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
        this.isOK = true

    } else {

        this.nextElementSibling.innerText = "Ingrese su contraseña con los parametros indicados anteriormente";
        this.nextElementSibling.style.color = "red";
        this.isOK = false
    }

});

/**********************
 *       Submit       *
 **********************/

elBtnSubmit.addEventListener('click', function (event) {

    event.preventDefault();
    // en esta variable vamos a guardar todos los errores que se junten de cada input
    let erroresInput = '';

    // caputramos el formulario, para poder acceder  a cada campo(input)
    elFormLogin.querySelectorAll('input[type="text"], input[type="password"]').forEach(function (campo) {

        if (!campo.isOK) {
            //aqui guarda el error que ese encuentra en cada input, con la propiedad name
            erroresInput += `Error en el campo ${campo.name}\n`

            console.log(erroresInput)
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
