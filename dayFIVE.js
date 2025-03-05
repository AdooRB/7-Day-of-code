const prompt = require("prompt-sync")();

const categorias = ["verduras", "lacteos", "carnes", "fruta", "congelados", "dulces", "otros"];
let listaDeCompras = [];
let verduras = [];
let lacteos = [];
let carnes = [];
let fruta = [];
let congelados = [];
let dulces = [];
let otros = [];
let entrada = "";
let categoria = "";

while(true){
    entrada = iniciar_Pregunta("¿Deseas agregar un alimento a tu lista de compras?    ");
    console.log(`Primera entrada: ${entrada}`);
    if (entrada.toUpperCase() == 'NO') break;
    
    entrada = prompt("¿Qué alimento desear agregar? ");
    console.log(`Segunda entrada: ${entrada}`);

    categoria = prompt(`¿En que categoría encaja ese alimento? (ingresa el #): ${menu_Categoria()}`);
    listaDeCompras.push(entrada +":" + categorias[categoria - 1]);
    console.log(`La lista de compra es: ${listaDeCompras}`);

}

console.log(`Final entrada: ${entrada}`);

function menu_Categoria(){
    let mensaje = "";
    for(let i = 0; i < categorias.length; i++){
        mensaje += `\n  ${i + 1} -  ${categorias[i]}`;
    }
    mensaje += "\n"
    return mensaje;
}

function iniciar_Pregunta(pregunta){
    let respuesta = prompt(pregunta);
    
    while(respuesta.toUpperCase() != 'SI' && respuesta.toUpperCase() != 'NO'){
        console.log("Valor incorrecto. Digitaliza 'si' o 'no'.");
        respuesta = prompt(pregunta);
    }

    return respuesta;
}

