function mostrarHora() {
    //Tomo la hora de ahora
    const ahora = new Date();

    //Por cada de elementos de el formato paso el toString a el padStart para formalizar con HH:MM:SS:MMMM
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const milisegundos = ahora.getMilliseconds().toString().padStart(4, '0');

    console.log(`${horas}:${minutos}:${segundos}:${milisegundos}`);

    //Llamo recurisivamente la funcion con setTimeout luego 4000millisegundos (4 segundos)
    setTimeout(mostrarHora, 4000);
}

//Llamada a la funcion recursiva
mostrarHora();