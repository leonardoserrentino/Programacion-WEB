const frutas = [
    { nombre: 'Manzana', precio: 2.500},
    { nombre: 'Pera', precio: 1.700},
    { nombre: 'Ciruela', precio: 4.300},
    { nombre: 'Uva', precio: 2.200},
    { nombre: 'Melocoton', precio: 3.50},
    { nombre: 'Sandia', precio: 0.500},
    { nombre: 'Tomate', precio: 0.900},
    { nombre: 'Melon', precio: 1.800}
]

//foreach
console.log("ForEach Output:");
frutas.forEach((fruta) => {
    console.log(`El precio de la fruta ${fruta.nombre} es de ${fruta.precio} € por kilo`);
});

console.log("\nMap Output")
//map
frutas.map((fruta) => {
    console.log(`El precio de la fruta ${fruta.nombre} es de ${fruta.precio} € por kilo`);
});
