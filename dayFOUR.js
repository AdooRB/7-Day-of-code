const prompt = require("prompt-sync")();

const numeroSecreto = 5;
let intentos = 3;
let acierto = 0;

while(intentos > 0){

    acierto = parseInt(prompt("Adivina el número que estoy pensando (1 - 10):    "));
    
    if(acierto === numeroSecreto){
        console.log(`¡Felicidades!, el número era ${acierto}`);
        break;
    }else {
        intentos --;
        if(intentos != 0) console.log(`Oh... No era. Tienes ${intentos} ${intentos != 1 ? "intentos": "intento"} más.`);
    }

}
