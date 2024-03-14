//Linea de codigo para usar prompt
//const prompt=require("prompt-sync")({sigint:true}); 
//Preguntar los dos numeros para hacer las operaciones
const m = parseInt(prompt('Ingresa el numero de filas (m):'));
const n = parseInt(prompt('Ingresa el numero de columnas (n):'));

if(m>0 && n>0){
    var max = m*n;
    //Creo una matriz
    const matrix = [];

    for (let i=0; i<m; i++){
        //Cada elemento de matrix es un array (array de arrays)
        matrix[i] = [];
        for(let j=0; j<n; j++){
            //Para asignar un valor a el elemento i,j llamo el jth elemento del ith elemento de matrix
            //El decremento es hecho luego la asignacion, entonces esto es como escribir
            /*matrix[i][j]=max;
              max = max - 1;
             */
            matrix[i][j] = max--;
        }
    }

    console.log('Matriz:');
    for (let i = 0; i < m; i++) {
        //El formato de output necesitato se hace escribiendo cada elemento de la dimension 1
        console.log(matrix[i]);
    }
} else {
    console.log('Los valores m y n deben ser mayores que 0');
}