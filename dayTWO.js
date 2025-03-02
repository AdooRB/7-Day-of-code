const prompt = require("prompt-sync")();

let nombre = prompt("¿Cuál es tu nombre?    ");
let edad = prompt("¿Cuántos años tienes?    ");
let LP = prompt("¿Qué lenguaje de programación estás estudiando?    ");

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${LP}!`)
