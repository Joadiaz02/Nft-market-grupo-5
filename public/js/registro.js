window.onload = function (){
    let form = document.querySelector('.form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
       let errores = []

       let nombre = document.querySelector('#nombre_usuario')
       let apellido = document.querySelector('#apellido_usuario')

       let correo = document.querySelector('#correo_usuario')
 
       let contrasena = document.querySelector('#contrasena_usuario')
       let password = document.querySelector('#password')

    

       if(nombre.value == "" || nombre.value.length < 2){
        errores.push("Debe completar el nombre")
        nombre.classList.add('is-invalid')
        nombre.classList.remove('is-valid')
       }else{
        nombre.classList.add('is-valid')
        nombre.classList.remove('is-invalid')
       }

       if(apellido.value == ""){
        errores.push("Debe completar el apellido")
        apellido.classList.add('is-invalid')
        apellido.classList.remove('is-valid')
       }else{
        apellido.classList.add('is-valid')
        apellido.classList.remove('is-invalid')
       }

       if(correo.value == ""){
        errores.push("Debe ingresar un correo")
        correo.classList.add('is-invalid')
        correo.classList.remove('is-valid')
       }else{
        correo.classList.add('is-valid')
        correo.classList.remove('is-invalid')
       }

       let image = document.querySelector("#filename");
       let validExtensions = /(.jpg|.jpeg|.png|jfif)$/i;
       if(filename.value == "" || !validExtensions.exec(image.value)){
        errores.push("Debe cargar foto y en formato correcto")
        filename.classList.add('is-invalid')
        filename.classList.remove('is-valid')
       }else{
        filename.classList.add('is-valid')
        filename.classList.remove('is-invalid')
       }

       if(contrasena.value == "" || contrasena.value.length < 8){
        errores.push("Debe ingresar una contraseña con al menos 8 caracteres")
        contrasena.classList.add('is-invalid')
        contrasena.classList.remove('is-valid')
       }else{
       contrasena.classList.add('is-valid')
       contrasena.classList.remove('is-invalid')
       }
   
       if(password.value == ""){
        errores.push("Repita Contraseña")
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
       }else{
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
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