//Costante con el formato de el dni para el metodo match
const dniRegex = /^[0-9]{8}[A-Z]$/;

// Obtener el valor del DNI del campo de entrada
//Linea de codigo que Unix necesita para el metodo prompt
//const prompt=require("prompt-sync")({sigint:true}); 
const dni = prompt('Poner el DNI: ');

//Check si dni escribido es similiar (match) el formato dni costante definido en principio
if(dni.match(dniRegex)){
    console.log('Formato de DNI correcto');
}else{
    console.log('Formato de DNI incorrecto. Debe ser "99999999X"');
}