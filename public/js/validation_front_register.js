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
 * Funcion que realiza la Validacion     *
 *****************************************/


function ValidationRegister(elementInput, regex, errormesagge){

    elementInput.value= elementInput.value.trim();
    elementInput.value= elementInput.value.charAt(0).toUpperCase() + elementInput.value.slice(1);

    if(regex.test(elementInput.value)){

        elementInput.nextElementSibling.innerText = "";
        elementInput.isOk = true;

    }else{
        elementInput.nextElementSibling.innerText = errormesagge;
    }

}


//----------------------------//
// ** Validaciones Nombre ** //

elInputName.addEventListener('blur', function () {

    const regex = /^(?!\s)(?=.*\S)[a-zA-Z\s]{3,}$/;
    errormesagge=("El campo debe tener al menos 3 caracteres")
    
    ValidationRegister(elInputName, regex, errormesagge)

   //Expresion regular que verifica:
    //el campo no este vacio
    //al menos tenga 3 caracteres
    //permite espacios en el nombre
    // No puede empezar con espacios vacios

        
});

//-----------------------------//
// ** Validación del Apellido ** //
//-----------------------------//

elInputSurname.addEventListener('blur', function () {
    

});

//------------------------------------//
// ** Validación Fecha Naciemiento ** //
//------------------------------------//
elInputBirthdate.addEventListener('blur', function () {
    

});

//-----------------------------//
//  ** Validación del DNI   ** //
//-----------------------------//

elInputdni.addEventListener('blur', function () {
    

});

//--------------------------- ---//
// ** Validación del Telefono ** //
//------------------------------//

elInputTelephone.addEventListener('blur', function () {
    

});

//-----------------------------//
// ** Validación del Email  ** //
//-----------------------------//

elInputEmail.addEventListener('blur', function () {
    

});

//-------------------------------//
// ** Validación del Username ** //
//-------------------------------//

elInputUsername.addEventListener('blur', function () {
    

});

//--------------------------  ---//
// ** Validación del Password ** //
//-----------------------------  //

elInputpassword.addEventListener('blur', function () {
    

});


//---------------------------    --//
// ** Validación Confirmar Pass ** //
//--------------------------   ---//
elInputconfirmarPassword.addEventListener('blur', function () {
    

});

//-------------------------------//
// ** Validación de la Imagen ** //
//-------------------------------//

elInputimagenUsuario.addEventListener('blur', function () {
    

});


elBtnSubmit.addEventListener('click', function (e) {

    if (
        elInputName.isOk) {
        console.log('todo ok');

    } else {
        e.preventDefault();
        console.log('algo mal');
    }
})


