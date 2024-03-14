//Suma
function suma(a,b){return a+b;}

//Resta
function resta(a,b){return a-b;}

//Multi
function multi(a,b){return a*b;}

//Divi, $b debe ser diferente que 0
function divi(a,b){
    if(b){
        return a/b;
    }
    return 'No puedo dividir por 0!!';
}

//Racu, $a y $b deben ser majores o iguales que 0
function racu(a,b){
    if(a<0 || b<0){
        return 'a y b deben ser majores que 0!!';
    }
    return {
        racuA: Math.sqrt(a),
        racuB: Math.sqrt(b)
      };
}

//Fact1 es una funcion que calcula el factorial por un elemento, porque no hay una funcion nativa de javascript que lo hace
function fact1(n){
    if(n<0){
        return 'a y b deben ser majores que 0!!';
    }
    //Caso base
    if(n==0 || n==1){
        return 1;
    //Caso recursivo
    }else{
        return n*fact1(n-1);
    }
}

//Fact, $a y $b deben ser majores o iguales que 0
//Llama por cada elemento la funcion fact1 definida arriba
function fact(a,b){
    return{
        factA: fact1(a),
        factB: fact1(b)
    };
}

function Operar(a, b, oper){
    let resultado = oper(a,b);
    console.log('Resultado operación: ',resultado);
}

console.log('Operacion suma de 5 y 3:');
Operar(5,3,suma);

console.log('\nOperacion resta de 5 y 3:');
Operar(5,3,resta);

console.log('\nOperacion multi de 5 y 3:');
Operar(5,3,multi);

console.log('\nOperacion divi de 5 y 3:');
Operar(5,3,divi);

console.log('\nOperacion racu de 5 y 3:');
Operar(5,3,racu);

console.log('\nOperacion fact de 5 y 3:');
Operar(5,3,fact);
