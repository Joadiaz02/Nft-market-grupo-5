window.onload = function (){
    let form = document.querySelector('.form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
       let errores = []

       let correo = document.querySelector('#correo_usuario');
       let contrasena = document.querySelector('#contrasena_usuario');
       


       if(correo.value == ""){
        errores.push("Ingrese su correo correctamente")
        correo.classList.add('is-invalid')
        correo.classList.remove('is-valid')
       }else{
        correo.classList.add('is-valid')
        correo.classList.remove('is-invalid')
       }

       
       if(contrasena.value == ""){
        errores.push("Ingrese contraseña")
        contrasena.classList.add('is-invalid')
        contrasena.classList.remove('is-valid')
       }else{
        contrasena.classList.add('is-valid')
        contrasena.classList.remove('is-invalid')
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
