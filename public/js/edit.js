window.onload = function (){
    let form = document.querySelector('.form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
       let errores = []

       let nombre = document.querySelector('#nombre_producto');
       let descripcion = document.querySelector('#descripcion_producto');
       let filename = document.querySelector('#filename');
       


       if(nombre.value == ""){
        errores.push("Ingrese nombre de producto")
        nombre.classList.add('is-invalid')
        nombre.classList.remove('is-valid')
       }else{
        nombre.classList.add('is-valid')
        nombre.classList.remove('is-invalid')
       }

       
       if(descripcion.value == ""){
        errores.push("Ingrese descripción del producto")
        descripcion.classList.add('is-invalid')
        descripcion.classList.remove('is-valid')
       }else{
        descripcion.classList.add('is-valid')
        descripcion.classList.remove('is-invalid')
       }

       
       let image = document.querySelector("#filename");
       let validExtensions = /(.jpg|.jpeg|.png)$/i;
       if(filename.value == "" || !validExtensions.exec(image.value)){
        errores.push("Debe cargar foto en formato correcto")
        filename.classList.add('is-invalid')
        filename.classList.remove('is-valid')
       }else{
        filename.classList.add('is-valid')
        filename.classList.remove('is-invalid')
       }


       if (errores.length > 0){
        let  ulErrores = document.querySelector('.errores')
        ulErrores.classList.add("alert-warning")
        ulErrores.innerHTML = ""
        for(let i  = 0; i < errores.length; i++){
            ulErrores.innerHTML += `<li> ${errores[i]} </li>`
        }
        }
        else{
        form.submit()
    }
    })
}