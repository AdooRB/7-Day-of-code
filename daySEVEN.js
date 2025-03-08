const prompt = require("prompt-sync")();

let operaciones = ["Suma","Resta","Multiplicación","Dividendo"];
let opcion = 0;
let numero_uno = 0;
let numero_dos = 0;
let resultado = 0;

while(true){
    opcion  =   preguntar_operacion(`¿Cuál operación quieres realizar? (ingresa #) ${crear_Menu()}`);
    numero_uno  =   preguntar_numeros(1);
    numero_dos  =   preguntar_numeros(2);
    resultado   =   ejecutar_operaciones(numero_uno, numero_dos);
    break;
}

function crear_Menu(){
    let mensaje = "";

    for(let i = 0; i < operaciones.length; i++){
        mensaje += `\n  ${i + 1} -   ${operaciones[i]}`;
    }

    mensaje += `\n`;
    return mensaje;
}

function preguntar_operacion(pregunta){
    let respuesta = prompt(pregunta);

    while(parseInt(respuesta) > operaciones.length  ||  isNaN(parseInt(respuesta))){
        console.log("Valor incorrecto. Digitaliza el numeral de la categoría.");
        respuesta = prompt(pregunta);
    }

    return parseInt(respuesta);

}

function preguntar_numeros(numero){
    let respuesta = 0;
    
    if(numero == 1){
        respuesta = prompt(`Ingresa el ${opcion == 1 ? "primer sumando" : opcion == 2 ? "minuendo" : opcion == 3 ? "multiplicando": "dividendo"}:  `);
    }else{
        respuesta = prompt(`Ingresa el ${opcion == 1 ? "segundo sumando" : opcion == 2 ? "sustraendo" : opcion == 3 ? "multiplicador": "divisor"}:  `);
    }
    
    return parseInt(respuesta);

}

function ejecutar_operaciones(numero1, numero2){
    let total = 0;

    switch (opcion) {
        case 1:
            total = sumar(numero1, numero2);
            console.log("sumass");
            break;
        
        case 2:
            total = restar(numero1, numero2);
            break;

        case 3:
            total = multiplicar(numero1, numero2);
            break;

        case 4:
            total = dividir(numero1, numero2);
            break;
    }
    
    console.log(`Operación ${operaciones[opcion - 1]}:`);
    console.log(`   ${numero1}  ${opcion == 1 ? "+" : opcion == 2 ? "-" : opcion == 3 ? "*": "/"}  ${numero2}   =   ${total}`);

    return total;
}

function sumar(sumando1, sumando2){
    return sumando1 + sumando2;
}

function restar(minuendo, sustraendo){
    return minuendo - sustraendo;
}

function multiplicar(multiplicando, multiplicador){
    return multiplicando * multiplicador;
}

function dividir(dividendo, divisor){
    return dividendo / divisor;
}