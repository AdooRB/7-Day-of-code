const prompt = require("prompt-sync")();

const areas = ["BACK-END", "BACKEND", "FRONT-END", "FRONTEND"];
const errorMsg = ["Área no reconocida. \nIngrese correctamente el área.", "Lenguaje de programación incorrectro.\nIngrese correctamente el lenguaje de programación."];
let errorNum = 0;
let errorHay = false;
let areaRes = "";
let pregAlterna = "";
let asw2 = "";
let asw3 = "";
let listaAprendizaje = [];
let nuevasRespuestas = [];


//Paso 1 "Back-end o Front-end"
areaRes = preguntar_Con_Respuesta("¿Cuál área de estudios de la programación quiere estudiar? (Back-End / Front-End)    ", areas, 0);

//Paso 2 estudiar "C# o Java" - "React o Vue"
pregAlterna = "¿Cuál lenguaje de programación queres estudiar ";
areaRes.includes('B') ? pregAlterna +="C# o Java?  " : pregAlterna += "React o Vue?    ";
nuevasRespuestas = cambio_de_Variables(areaRes,'BACK','FRONT',["C#","JAVA"],["REACT","VUE"]);
asw2 = preguntar_Con_Respuesta(pregAlterna,nuevasRespuestas, 1);

//Paso 3 "Especialización" o "Fullstack"
asw3 = pregunta_Libre(`¿Quieres seguir especializandote en el área de "${areaRes.toLowerCase()}" o desarrollarte para convertirte en "Fullstack"?  `).toUpperCase();
asw3.includes('FULL') ? console.log('Eligiste desarrollo en "Fullstack".'): console.log(`Eligiste especialización en "${areaRes.toLowerCase()}".`);

//Paso 4 ¿Qué más tecnologías?
listaAprendizaje = preguntar_Tec("¿Qué tecnologías quieres especializarte o conocer?  ");

console.log("Fin del Juego");
resumen();


//Pregunta con respuestas establecidas
function preguntar_Con_Respuesta(pregunta, respuestas, numError){

    let respuesta = prompt(pregunta).toUpperCase();
    errorNum = numError;

    if(respuestas.includes(respuesta) == false){
        errorHay = true;
        mostrar_Error(numError);
        respuesta = re_preguntar(pregunta,respuestas, numError);
    }
    return respuesta;
}

//Pregunta sin respuestas establecidas
function pregunta_Libre(pregunta){
    let respuesta = prompt(pregunta).toUpperCase();
    return respuesta;
}

//Pregunta con obj. de recopilar información
function preguntar_Tec(pregunta){
    let listaDeAprendizaje = [];
    let nuevaTec = "";
    let conocerOtrasTec = true;

    nuevaTec = (pregunta_Libre(pregunta));
    nuevaTec.includes(",") ? listaDeAprendizaje = nuevaTec.split(','): listaDeAprendizaje.push(nuevaTec);
    nuevaTec = "";

    while(conocerOtrasTec == true){
        nuevaTec = pregunta_Libre("¿Hay otra tecnología que te gustaría conocer? ");
        nuevaTec.toUpperCase() == 'NO' ? conocerOtrasTec = false: listaDeAprendizaje.push(nuevaTec);
        if(nuevaTec.toUpperCase() != 'NO') console.log(`Ingresaste: ${nuevaTec}`);
    }

    return listaDeAprendizaje;

}

//Pregunta genera un ciclo para la *pregunta_Con_Respuesta, sino coinside con respuestas definidad.
function re_preguntar(pregunta, respuestas, numError){
    let respuesta = "";

    while(errorHay == true){
        respuesta = prompt(pregunta).toUpperCase();
        respuestas.includes(respuesta) == true ? errorHay = false: mostrar_Error(numError);
    }
    return respuesta;
}

function mostrar_Error(numErrors){
    console.log(errorMsg[numErrors]);
}

//organiza las respuestas definidas
function cambio_de_Variables(evaluacion,condicion1, condicion2, variables1, variables2){
    let variablesCorrectas = [];
    if(evaluacion.includes(condicion1)){
        variablesCorrectas = variables1; 
    }else if(evaluacion.includes(condicion2)){
        variablesCorrectas = variables2;
    }
    return variablesCorrectas;
}

//resumen de datos recopilados
function resumen(){
    console.log("");
    console.log("********RESUMEN********");
    
    //1era pregunta
    console.log(`Estudios: ${areaRes}`)

    //2da pregunta
    console.log(`Lenguaje de programación de ${areaRes} a estudiar: ${asw2}`);

    //3ra pregunta
    console.log(`Especialización en: ${asw3}`);

    //4ta pregunta
    console.log(`Lista de lenguajes de programación para estudiar: ${listaAprendizaje.toString()}`);
    
    console.log("***********************");

}