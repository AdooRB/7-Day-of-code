const prompt = require("prompt-sync")();
const categorias = ["Verduras", "Lacteos", "Carnes", "Fruta", "Congelados", "Dulces", "Otros"];
let listaDeCompras = [];
let entrada = "";
let categoria = "";

//ciclo principal del programa
while(true){
    //pregunta para continuar o salir del ciclo principal
    entrada = preguntar_SI_NO(`¿Deseas agregar ${listaDeCompras.length == 0 ? "un" : "otro"} alimento a tu lista de compras?    `);
    if (entrada.toUpperCase() == 'NO') break;
    
    //2da pregunta, digitalizar el alimento
    entrada = prompt("¿Qué alimento desear agregar? ");

    //3ra pregunta, categorizar el alimento y lo añade a la lista de compras
    categoria = categorizar_Alimento(`¿En que categoría encaja este alimento? (ingresa el #): ${menu_Categoria()}`);
    listaDeCompras.push(entrada +":" + categorias[categoria - 1]);

    //4ta pregunta, eleiminar un elemento
    entrada = eliminar_dato(`¿Deseas eleminar un elemento?   `);
}

//mostrar la "Lista de compras" por categorías
imprimir_Lista("LISTA DE COMPRAS:","*-");

//enumera las categorias
function menu_Categoria(){
    let mensaje = "";
    for(let i = 0; i < categorias.length; i++){
        mensaje += `\n  ${i + 1} -  ${categorias[i]}`;
    }
    mensaje += "\n"
    return mensaje;
}

//pregunta y repite pregunta si la respuesta nos es "SI/NO"
function preguntar_SI_NO(pregunta){
    let respuesta = prompt(pregunta);
    
    while(respuesta.toUpperCase() != 'SI' && respuesta.toUpperCase() != 'NO'){
        console.log("Valor incorrecto. Digitaliza 'si' o 'no'.");
        respuesta = prompt(pregunta);
    }

    return respuesta;
}

//categoriza el alimento dependiendo del # del menu_categorías
function categorizar_Alimento(pregunta){
    let respuesta = prompt(pregunta);
   
    while(parseInt(respuesta) > categorias.length || isNaN(parseInt(respuesta))){
        console.log("Valor incorrecto. Digitaliza el numeral de la categoría.");
        respuesta = prompt(pregunta);
    }
    return respuesta;
}

//ordena y muestra los datos de la lista de compras
function imprimir_Lista(titulo,adorno){
    let newAdorno = crear_adorno(adorno);
    console.log(`\n${newAdorno}`);
    console.log(titulo);
    
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
    console.log(`${newAdorno}\n`);
    return;
}

//busca y elimina datos, y muestra la nueva lista de compras
function eliminar_dato(pregunta){
    let respuesta = preguntar_SI_NO(pregunta);
    let alimento = "";
    let encontrado = false;
    
    if(respuesta.toUpperCase() == "NO") return;
    
    imprimir_Lista("PRE-LISTA DE COMPRAS:",".. ")

    alimento = prompt(`¿Qué alimento deseas eliminar?   `);
    for(let i = 0; i < listaDeCompras.length; i++){
        if(listaDeCompras[i].includes(alimento) && categorias.includes(alimento) == false){
            listaDeCompras.splice(i,1);
            encontrado = true;
            imprimir_Lista("NUEVA LISTA DE COMPRAS:","~>");
            // i --;
        }
    }
    
    if(encontrado == false){
        console.log(`No se encontró "${alimento}" en la lista de compras.`);
        console.log("Ingrese el elemento correcto.");
        eliminar_dato(pregunta);
    }
    return;
}

//añade ardono para la impresión de la List de Compras
function crear_adorno(adorno){
    let nuevoAdorno = "";
    for(let i = 0;i < 18; i++){
        nuevoAdorno += adorno;
    }
    return nuevoAdorno;
}

