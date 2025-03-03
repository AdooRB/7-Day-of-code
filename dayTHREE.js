const prompt = require("prompt-sync")();

const areas = ["BACK-END", "BACKEND", "FRONT-END", "FRONTEND"];
const errorMsg = ["Área no reconocida. \nIngrese correctamente el área.", "Lenguaje de programación incorrectro.\nIngrese correctamente el lenguaje de programación."];
let errorNum = 0;
let errorHay = false;
let fin = false;
let area = "";
let pregAlterna = "";
let asw2 = "";

while(fin == false){
    
    // area = prompt("¿Cuál área de estudios de la programación quiere estudiar? (Back-End / Front-End)    ").toUpperCase();
        
    area = preguntar("¿Cuál área de estudios de la programación quiere estudiar? (Back-End / Front-End)    ", areas, 0);
    pregAlterna = "¿Cuál lenguaje de programación queres estudiar ";
    area.includes('B') ? pregAlterna +="C# o Java?  " : pregAlterna += "React o Vue?    ";
    asw2 = preguntar(pregAlterna,["C#", "JAVA", "REACT", "VUE"], 1);

    console.log(asw2);
    
    fin = true;

}

console.log("Fin del Juego");

function preguntar(pregunta, respuestas, numError){

    let respuesta = prompt(pregunta).toUpperCase();
    errorNum = numError;

    if(respuestas.includes(respuesta) == false){
        errorHay = true;
        mostrarError(numError);
        respuesta = repreguntar(pregunta,respuestas, numError);
    }
    return respuesta;
}

function repreguntar(pregunta, respuestas, numError){
    let respuesta = "";

    while(errorHay == true){
        respuesta = prompt(pregunta).toUpperCase();
        respuestas.includes(respuesta) == true ? errorHay = false: mostrarError(numError);
    }
    return respuesta;
}

function mostrarError(numErrors){
    console.log(errorMsg[numErrors]);
}
