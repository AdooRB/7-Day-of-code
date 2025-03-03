const prompt = require("prompt-sync")();

const areas = ["BACK-END", "BACKEND", "FRONT-END", "FRONTEND"];
const errorMsg = ["Área no reconocida."];
let errorNum = 0;
let errorHay = false;
let fin = false;
let area = "";
let LP_area = "¿Cuál lenguaje de programación queres estudiar ";

while(fin == false){
    
    area = prompt("¿Cuál área de estudios de la programación quiere estudiar? (Back-End / Front-End)    ").toUpperCase();
    areas.includes(area) ? 
    areas[1].includes("BACK")? LP_area +="C# o Java?  " : LP_area += "React o Vue?    ":
    errorHay = true;

    if(errorHay == true) console.log(errorMsg[errorNum]);
    errorHay = false;
    
    fin = true;

}

console.log("Fin del Juego");