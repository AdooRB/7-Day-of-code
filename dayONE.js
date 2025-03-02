
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

console.log(numeroUn == stringUn);
if(numeroUn == stringUn){
    console.log(`Las variables numeroUn y stringUn tiene el mismo valor, pero tipos diferentes`);
}else{
    console.log(`Las variables numeroUn y stringUUn tiene el mismo valor`);
}


console.log(numeroTreinta === stringTreinta);
if(numeroTreinta === stringTreinta){
    console.log(`Las variables numeroTreinta y stringTreinta tiene el mismo valor y el mismo tipo`);
}else{
    console.log(`Las variables numeroTreinta y stringTreinta no tienen el mismo tipo`);
}


console.log(numeroDiez == stringDiez);
if(numeroDiez == stringDiez){
    console.log(`Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes`);
}else{
    console.log(`Las variables numeroDiez y stringDiez tiene el mismo valor`)
}