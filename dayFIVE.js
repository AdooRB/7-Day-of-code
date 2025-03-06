const prompt = require("prompt-sync")();

const categorias = ["Verduras", "Lacteos", "Carnes", "Fruta", "Congelados", "Dulces", "Otros"];
let listaDeCompras = [];
let entrada = "";
let categoria = "";

while(true){
    entrada = iniciar_Pregunta(`¿Deseas agregar ${listaDeCompras.length == 0 ? "un" : "otro"} alimento a tu lista de compras?    `);
    if (entrada.toUpperCase() == 'NO') break;
    
    entrada = prompt("¿Qué alimento desear agregar? ");

    categoria = categorizar_Alimento(`¿En que categoría encaja este alimento? (ingresa el #): ${menu_Categoria()}`);
    listaDeCompras.push(entrada +":" + categorias[categoria - 1]);
    console.log(listaDeCompras);
}

imprimir_Lista();

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

function categorizar_Alimento(pregunta){
    let respuesta = prompt(pregunta);
   
    while(parseInt(respuesta) > categorias.length || isNaN(parseInt(respuesta))){
        console.log("Valor incorrecto. Digitaliza el numeral de la categoría.");
        respuesta = prompt(pregunta);
    }
    return respuesta;
}

function imprimir_Lista(){
    console.log("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log("LISTA DE COMPRAS:");
    
    let alimento = "";

    for(let i_categoria = 0; i_categoria < categorias.length; i_categoria++){
        
        alimento = `${categorias[i_categoria]}: `;
        
        for (let i_lista = 0; i_lista < listaDeCompras.length; i_lista++) {
            if(listaDeCompras[i_lista].includes(":"+categorias[i_categoria])){
                alimento == `${categorias[i_categoria]}: ` ? alimento += `  ${listaDeCompras[i_lista].replace(":"+categorias[i_categoria],"")}`: alimento += `, ${listaDeCompras[i_lista].replace(":"+categorias[i_categoria],"")}`;
            }
        }

        alimento == `${categorias[i_categoria]}: ` ? alimento = "": console.log(`   ${alimento}`);
    }
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");
    return;
}

