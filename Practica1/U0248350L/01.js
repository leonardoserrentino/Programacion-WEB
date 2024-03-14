const fecha = new Date();

//Este metodo devuelve el dia del mes (del 1 al 31) de una fecha dada
const dia = fecha.getDate();
console.log(`Dia del mes: ${dia}`);

//Retorna el dia de la semana (0 para domingo, 1 para lunes, etc.) de una fecha dada
const diaSemana = fecha.getDay();
console.log(`Dia de la semana: ${diaSemana}`);

//Devuelve el mes (0 para enero, 1 para febrero, etc.) de una fecha dada
const mes = fecha.getMonth();
console.log(`Mes: ${mes}`);

//Convierte la fecha en una cadena de texto legible por humanos que incluye el dia de la semana, el mes, el dia y el ano.
const fechaLegible = fecha.toDateString();
console.log(`Fecha legible: ${fechaLegible}`);

//Este metodo devuelve el valor numérico de la fecha en milisegundos desde el 1 de enero de 1970 (tiempo Unix)
const tiempoUnix = fecha.getTime();
console.log(`Tiempo Unix: ${tiempoUnix}`);