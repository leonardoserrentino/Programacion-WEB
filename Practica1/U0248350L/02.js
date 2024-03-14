function msToDate(milliseconds){
    //Function que calcula de milisegundos a el formato del ejercicio
    const seconds = Math.floor(milliseconds/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const weeks = Math.floor(days/7);
    const months = Math.floor(weeks/4.5);

    //Retorna una estructura de datos con el resto que no es meses
    return {
        months,
        weeks: weeks%52,
        days: days%7,
        hours: hours%24,
        minutes: minutes%60,
        seconds: seconds%60
      };
}

function calcularEdad(fechaNacimiento){
    //Fecha actual
    const fechaActual = new Date();

    // Calcular la diferencia en miliseconds entre la fecha actual y la fecha de nacimiento
    const msDifference = fechaActual-fechaNacimiento;
    
    //Return la diferencia formatada con el metodo msToDate()
    return msToDate(msDifference);
}

//Linea de codigo que Unix necesita para interpretar prompt de la console
//const prompt=require("prompt-sync")({sigint:true}); 

const fechaNacimientoStr = prompt('Por favor, ingresa tu fecha de nacimiento en el formato YYYY-MM-DD:');
const fechaNacimiento = new Date(fechaNacimientoStr);
const fechaActual = new Date();

//Check si la fecha es valida
if(isNaN(fechaNacimiento.getTime())){
  console.log('Fecha de nacimiento no valida. Asegurate de usar el formato correcto (YYYY-MM-DD).');
}//Check si la fecha es luego de hoy
else if(fechaNacimiento > fechaActual){
    console.log('Fecha de nacimiento no valida. Asegurate de usar una fecha menor a la de hoy!');
}
//Si la fecha es valida
else{
  const edad = calcularEdad(fechaNacimiento);
  console.log(`Edad: ${edad.months} meses, ${edad.weeks} semanas, ${edad.days} dias, ${edad.hours} horas, ${edad.minutes} minutos y ${edad.seconds} segundos.`);
}