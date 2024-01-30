let darkChange = document.getElementById('darkTheme');

// Variables botones
let btnEncriptar = document.getElementById('encriptar');
let btnDesEncriptar = document.getElementById('desEncriptarTexto');
let btnCopiar = document.querySelector('.copiar');
let btnLimpiar = document.getElementById('limpiar');

// //Limpiar campo de respuesta
const limpiar = () => {
    document.querySelector('.container__card__logo').style.display = 'none';
    document.querySelector('.card__text__subtitle').style.display = 'none';
    document.querySelector('.box__container__card').style.display = 'flex';
    document.querySelector('.box__container__card').style.justifyContent = 'center';
}

//Encriptar
btnEncriptar.addEventListener('click', () => {
    var cardMensaje = document.getElementById('displayMessage');
    var mensaje = document.querySelector('.container__intro__textArea').value;
    var encriptado = "";

    //Vacio
    if (mensaje=='') {
        alert('Ingresar un texto')
        return;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(mensaje) || /[A-Z]/.test(mensaje)) {
        alert(`El mensaje no debe contener mayúsculas o caracteres especiales.`);
            return;
    } else {
        for (let i = 0; i < mensaje.length; i++) {
            // encriptar
            if (mensaje[i] === mensaje[i].toLowerCase() && mensaje[i] === "a") {
            encriptado += "ai";
            } else if (mensaje[i] === mensaje[i].toLowerCase() && mensaje[i] === "e") {
            encriptado += "enter";
            } else if (mensaje[i] === mensaje[i].toLowerCase() && mensaje[i] === "i") {
            encriptado += "imes";
            } else if (mensaje[i] === mensaje[i].toLowerCase() && mensaje[i] === "o") {
            encriptado += "ober";
            } else if (mensaje[i] === mensaje[i].toLowerCase() && mensaje[i] === "u") {
            encriptado += "ufat";
            } else {
            encriptado += mensaje[i];
            }
        }
    }

    cardMensaje.innerText = encriptado;
    limpiar();
    
});

//desEncriptar
btnDesEncriptar.addEventListener('click',()=>{
    var cardMensaje = document.getElementById('displayMessage');
    var mensaje = document.querySelector('.container__intro__textArea').value;
    var desEncriptado = "";

    //Vacio
    if (mensaje=='') {
        alert('Ingresar un texto')
        return;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(mensaje) || /[A-Z]/.test(mensaje)) {
        alert(`El mensaje no debe contener mayúsculas o caracteres especiales.`);
            return;
    } else {
        for (let i = 0; i < mensaje.length; i++) {
            if (mensaje[i] === "a")  {
                desEncriptado = desEncriptado+"a";
                i = i+1;
            } else if (mensaje[i] === "e")  {
                desEncriptado = desEncriptado+"e";
                i = i+4;
            } else if (mensaje[i] === "i")  {
                desEncriptado = desEncriptado+"i";
                i = i+3;
            } else if (mensaje[i] === "o")  {
                desEncriptado = desEncriptado+"o";
                i = i+3;
            } else if (mensaje[i] === "u")  {
                desEncriptado = desEncriptado+"u";
                i = i+3;
            } else{
                desEncriptado = desEncriptado + mensaje[i]
            } 
        }
    }
    cardMensaje.innerText = desEncriptado;
    limpiar();
});

//copiar
const copiarDatos = () =>{
    let cardMensaje = document.getElementById('displayMessage');
    let boton = document.getElementById('copiar');

    navigator.clipboard.writeText(cardMensaje.textContent);
    boton.textContent='Copiado'//mensaje para el usuario
    document.getElementById('copiar').classList.toggle('--active');
}
//Limpiar
btnLimpiar.addEventListener('click', () =>{
    inicial();
});

//Default
const inicial = () =>{
    document.querySelector('.container__card__logo').style.display = '';
    document.querySelector('.card__text__subtitle').style.display = '';
    document.querySelector('.box__container__card').style.display = 'grid';
    document.querySelector('.box__container__card').style.justifyContent = '';
    document.getElementById('displayMessage').innerHTML = "Ningún mensaje fue encontrado";
    document.getElementById('copiar').classList.remove('--active');
    document.getElementById('copiar').textContent='Copiar'
    document.getElementById('textEnter').value = '';
}

//DarkTheme
darkChange.addEventListener('click', () => {
    var dark = document.getElementById('darkTheme');
    document.body.classList.toggle('darkTheme');
    
    if (dark.getAttribute('name') === 'moon') {
        dark.setAttribute('name', 'sunny');
    } else {
        dark.setAttribute('name', 'moon');
    }
});

