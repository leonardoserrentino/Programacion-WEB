function calcularLetraDNI(numeroDNI){
    // Verificar que el numeroDNI sea una cadena numerica de 1 a 8 caracteres
    /*Expresion regular (/^\d{1,n}$/) verifica que la cadena de entrada contenga solo digitos numericos y tenga longitud de 1 a n caracteres*/
    if(!/^\d{1,8}$/.test(numeroDNI)){
        return 'Numero de DNI no valido';
    }

    // Rellenar por la izquierda con ceros hasta que tenga 8 caracteres
    /*padStart se usa para agregar caracteres a la izquierda de una cadena hasta 
    alcanzar una longitud especifica*/
    const dniCompleto = numeroDNI.padStart(8, '0');

    // Array con las letras para calcular la letra del DNI
    //Recurso de esto es el ministero del interior
    //https://www.interior.gob.es/opencms/ca/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
    const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';

    // Calcular la letra del DNI
    const indice = dniCompleto % 23;

    //Combinar el dni numerico con la letra elegida de letrasDNI
    //charAt es un metodo para tomar un elemento a el indice como parametro
    return dniCompleto + letrasDNI.charAt(indice);
}

//const prompt=require("prompt-sync")({sigint:true}); 
const dni = prompt('Poner el DNI incompleto: ');

const dniCompleto = calcularLetraDNI(dni);
console.log(`DNI Completo: ${dniCompleto}`)