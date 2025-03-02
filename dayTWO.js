const prompt = require("prompt-sync")();

let nombre = prompt("¿Cuál es tu nombre?    ");
let edad = prompt("¿Cuántos años tienes?    ");
let LP = prompt("¿Qué lenguaje de programación estás estudiando?    ");

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${LP}!`)

let answer = prompt(`¿Te gusta estudiar ${LP}?  `).toUpperCase();
let mensaje = "";

answer == 'SI' ? mensaje = "¡Muy bien! Sigue estudiendo y tendrás mucho éxito.": answer == 'NO' ? mensaje = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?" : mensaje = "Ingresa una respuesta de 'si/no' a la pregunta anterior.";

console.log(mensaje);