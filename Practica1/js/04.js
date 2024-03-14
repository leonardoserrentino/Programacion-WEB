//Creo una variable "contador" que vale 10
var contador = 10;

//Output de contador a 10 y luego incremento de 1 (la prioritad es el output)
console.log(contador++);

//Output de contador a 11 (incremento de antes) y luego incremento de 1 como antes
console.log(contador++);

//La prioritad es en la asignacion de contador=contador+10, entonces antes lo incrementa y luego lo escribe
console.log(contador+=10);

//Mismo razonamiento de la linea antes, la asignacion contador=contador-5 tiene prioritad mas alta que la de escritura, entonces aumenta (reduze) antes y luego escribe
console.log(contador-=5);

//La asignacion tiene una prioritad mas alta que la operacion de output, pero la operacion de output tiene una prioritad mas alta que la de incremento, y la prioritad define l'orden de las operaciones