//Linea de codigo para usar prompt
//const prompt=require("prompt-sync")({sigint:true}); 
//Preguntar los dos numeros para hacer las operaciones
const numero1 = parseInt(prompt('Ingresa el primer numero (del 1 al 10):'));
const numero2 = parseInt(prompt('Ingresa el segundo numero (del 1 al 10):'));

//Check si el numero 1 es meno que el numero 2
if(numero1>=numero2){
    console.log("Numero1 debe ser meno que el numero 2");
}else{
    //Definir variable global prod para riutilizarla
    var prod;
    //check si los numeros son entre 1 y 10
    if(numero1 >= 1 && numero1 <= 10 && numero2 >= 1 && numero2 <= 10){
        //El primero for itera de numero1 hasta numero2 para el primo moltiplicator
        for (let i = numero1; i < numero2; i++) {
            //El segundo for itera de 1 hasta numero2 para el segundo moltiplicator
            for (let j = 1; j <= numero2; j++) {
                prod = i*j;
                console.log(`${i} * ${j} = ${prod}`);
            }
        }
    }else{
        console.log('Los numeros deben estar en el rango del 1 al 10.');
    }
}