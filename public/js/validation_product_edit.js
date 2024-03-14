document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí
    
    
    
//<input type="text" name="destination" placeholder="Ingrese el nombre del paquete" ></input>
//<input type="text" name="destination" placeholder="Ingrese el nombre del paquete"></input>
const elInputDestinationEdit = document.getElementById("destination");

console.log(elInputDestinationEdit)

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

});