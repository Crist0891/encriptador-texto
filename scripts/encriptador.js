
//variables de las clases o etiquetas
const textArea = document.querySelector(".main-tx-encriptar");
const resultadoTex = document.querySelector(".main-tx-resultado");


//variables de los botones
const botonEncriptat = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const botonCopiar = document.querySelector(".copiar");

/* ---- array de arrays para las letras que se usan para encriptar ---- */

const claves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];


/* -------------------
funcion para encriptar
---------------------- */

function encriptarMensaje (mensaje){
  let mensajeEncriptar = "";
  
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;

    for(let j = 0; j < claves.length; j++){

      if(letra === claves[j][0]){
        encriptada = claves[j][1];
        break;
      }
    }
    mensajeEncriptar += encriptada;
  }
  return mensajeEncriptar;
}


/* ---------------------
funcion para desencriptar 
------------------------ */

function desencriptar (mensaje){
  let mensajeDesencriptar = mensaje;

  for(let i = 0; i < claves.length; i++){
    let expreciones = new RegExp(claves[i][1], 'g');
    mensajeDesencriptar = mensajeDesencriptar.replace(expreciones, claves[i][0]);
  }
  return mensajeDesencriptar;
}


/*------------------------- 
capturando el Tex Area
---------------------------*/

textArea.addEventListener("input", (e)=>{
})


/* -----------------------------
funcionalidad del boto Encriptar
--------------------------------*/

botonEncriptat.addEventListener("click", (e)=>{
  let mensaje = textArea.value.toLowerCase();
  let mensajeEncriptar = encriptarMensaje(mensaje);
  resultadoTex.textContent = mensajeEncriptar;
})


/* ---------------------------------
funcionalidad del boton Desencriptar
------------------------------------*/

botonDesencriptar.addEventListener("click", (e)=>{
  let mensaje = textArea.value.toLowerCase();
  let mensajeDesencriptar = desencriptar(mensaje);
  resultadoTex.textContent = mensajeDesencriptar;
})


console.log(botonDesencriptar);

/* ------------------------
funcionalidad de Boton copiar
---------------------------*/

botonCopiar.addEventListener("click", ()=>{
  let copiado = resultadoTex.textContent;
  navigator.clipboard.writeText(copiado).then(()=>{

  })
})