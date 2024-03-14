/*
function hora_minuto-segundo(fecha){
    hms = fecha.getHours();
    hms = hms + ":" + fecha.getMinutes();
    hms = hms + ":" + fecha.getSeconds();
    return hms;
}
*/

const hora_minuto_segundo = (fecha) => {
    const hms = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    return hms;
};

