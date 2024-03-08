// //Se capturan los input de los campos a validar

// const elInputName = document.getElementById('name');
// const elInputSurname = document.getElementById('surname');
// const elInputBirthdate = document.getElementById('birthdate');
// const elInputdni = document.getElementById('dni');
// const elInputTelephone = document.getElementById('telephone');
// const elInputEmail = document.getElementById('email');
// const elInputUsername = document.getElementById('username');
// const elInputpassword = document.getElementById('password');
// const elInputconfirmarPassword = document.getElementById('confirmarPassword')
// const elInputimagenUsuario = document.getElementById('imagenUsuario');
// const elBtnSubmit = document.getElementById('submit');


// /*****************************************
//  * Validaciones para el campo name   *
//  *****************************************/

// elInputNombre.addEventListener('blur', function () {

//     //queremos manejar las validaciones mediante expresiones regulares
//     const regex = /^[A-Z][a-z]{2,}$/;
//     //sanitizacion de campos
//     this.value = this.value.trim();
//     this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();

//     if (regex.test(this.value)) {
//         // si pasa el test:
//         // sacamos el msj de erro que pueda haber estado
//         //guardamos en una variable que está todo correcto.(para ser usado en el submit)
//         this.nextElementSibling.innerText = ""
//         this.isOK = true

//     } else {
//         //si no lo pasa
//         // este es el mensaje de error si se completa erroneamente el campo
//         this.nextElementSibling.innerText = 'Campo obligatorio, debe contener al menos 3 letras'
//         this.isOK = false
//     }

//     //Expresion regular que verifica:
//     //al menos tenga 3 caracteres
//     //la 1* letra sea con mayuscula
//     //no puede contener signos ni espacios
// });











// elInputName.addEventListener('blur', function () {

//     const regex = /^(?!\s)(?=.*\S)[a-zA-Z\s]{3,}$/;
//     errormesagge = ("Ingrese nuevamente el nombre, sin espacios ni signos")

//     ValidationRegister(elInputName, regex, errormesagge)

//     //Expresion regular que verifica:
//     //al menos tenga 3 caracteres
//     //la 1* letra sea con mayuscula
//     //no puede contener signos ni espacios
// });


// //-----------------------------//
// // ** Validación del Apellido ** //
// //-----------------------------//

// elInputSurname.addEventListener('blur', function () {

//     const regex = /^(?!\s)(?=.*\S)[a-zA-Z\s]{3,}$/;
//     errormesagge = ("Ingrese nuevamente el apellido, sin espacios ni signos")

//     ValidationRegister(elInputSurname, regex, errormesagge)

//     //Expresion regular que verifica:
//     //al menos tenga 3 caracteres
//     //la 1* letra sea con mayuscula
//     //no puede contener signos ni espacios


// });

// //------------------------------------//
// // ** Validación Fecha Nacimiento ** //
// //------------------------------------//
// elInputBirthdate.addEventListener('blur', function () {
//     const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
//     const errorMessage = "Ingrese una fecha de nacimiento válida en el formato DD/MM/AAAA";
//     ValidationRegister(elInputBirthdate, regex, errorMessage);

//     //Expresion regular que permite que el dia este comprendido entre 1 y 31
//     //el mes de 1 a 12
//     //que sea hasta el año 2099
// });

// //-----------------------------//
// //  ** Validación del DNI   ** //
// //-----------------------------//

// elInputdni.addEventListener('blur', function () {
//     const regex = /^\d{8}$/;
//     const errorMessage = "Ingrese un DNI válido compuesto por 8 dígitos";
//     ValidationRegister(elInputdni, regex, errorMessage);

//     //Expresion regular que solo permite que ingresen números, hasta 8 cifras
// });


// //--------------------------- ---//
// // ** Validación del Telefono ** //
// //------------------------------//

// elInputTelephone.addEventListener('blur', function () {
//     const regex = /^\d{3}\d{7}$/;
//     const errorMessage = "Ingrese un número de teléfono celular válido con código de área de 3 dígitos seguido de 7 dígitos para el número local";
//     ValidationRegister(elInputTelephone, regex, errorMessage);
// });


// //-----------------------------//
// // ** Validación del Email  ** //
// //-----------------------------//

// elInputEmail.addEventListener('blur', function () {

//     const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
//     errormesagge = ("Formato ingresado erróneo, intente nuevamete");
//     ValidationRegister(elInputEmail, regex, errormesagge);

//     // Valida el formato de correo electrónico, permitiendo solo letras minúsculas, números en el nombre de usuario y dominio

// });

// //-------------------------------//
// // ** Validación del Username ** //
// //-------------------------------//

// elInputUsername.addEventListener('blur', function () {

//     const regex = /^(?!\s)(?=.*\S)[a-zA-Z\s]{3,}$/;
//     errormesagge = ("Ingrese nuevamente el nombre, sin espacios ni signos")

//     ValidationRegister(elInputUsername, regex, errormesagge)

//     //Expresion regular que verifica:
//     //al menos tenga 3 caracteres
//     //la 1* letra sea con mayuscula
//     //no puede contener signos ni espacios
// });


// //--------------------------  ---//
// // ** Validación del Password ** //
// //-----------------------------  //

// elInputpassword.addEventListener('blur', function () {


// });


// //---------------------------    --//
// // ** Validación Confirmar Pass ** //
// //--------------------------   ---//
// elInputconfirmarPassword.addEventListener('blur', function () {


// });

// //-------------------------------//
// // ** Validación de la Imagen ** //
// //-------------------------------//






// elBtnSubmit.addEventListener('click', function (e) {

//     if (
//         elInputName.isOk) {
//         console.log('todo ok');

//     } else {
//         e.preventDefault();
//         console.log('algo mal');
//     }
// })


