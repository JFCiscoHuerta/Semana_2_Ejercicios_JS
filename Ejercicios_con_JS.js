//3 Objetos
// Objeto Carro
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Azul",
    encendido: false
};

// Objeto Casa
let casa = {
    direccion: "Calle 123",
    numHabitaciones: 3,
    numBaños: 2,
    color: "Blanco",
    tieneJardin: true
};

// Objeto Humano
let humano = {
    nombre: "Juan",
    edad: 30,
    genero: "Masculino",
    nacionalidad: "Mexicano",
    casado: false
};

// Acceder a las propiedades de cada objeto
console.log("Marca del carro:", carro.marca);
console.log("Número de habitaciones de la casa:", casa.numHabitaciones);
console.log("Nombre del humano:", humano.nombre);

// Cambiar 3 propiedades de cada objeto
carro.color = "Rojo";
carro.año = 2021;
carro.encendido = true;

casa.color = "Verde";
casa.numHabitaciones = 4;
casa.tieneJardin = false;

humano.nombre = "Carlos";
humano.edad = 35;
humano.casado = true;

console.log("Carro actualizado:", carro);
console.log("Casa actualizada:", casa);
console.log("Humano actualizado:", humano);

// Arreglo de nombres
let nombres = ["Ana", "Luis", "Carlos", "Pedro", "María", "Elena", "Jorge", "Mónica"];

// Arreglo de edades
let edades = [25, 30, 35, 40, 45, 50, 55, 60];

// Acceder al arreglo de nombres en el índice 3, 5, 7 y 100
console.log("Nombre en índice 3:", nombres[3]);  // Pedro
console.log("Nombre en índice 5:", nombres[5]);  // Elena
console.log("Nombre en índice 7:", nombres[7]);  // Mónica
console.log("Nombre en índice 100:", nombres[100]);  // undefined

// Acceder al arreglo de edades en el índice 7, 1, 3 y 100
console.log("Edad en índice 7:", edades[7]);  // 60
console.log("Edad en índice 1:", edades[1]);  // 30
console.log("Edad en índice 3:", edades[3]);  // 40
console.log("Edad en índice 100:", edades[100]);  // undefined

// Cambiar los índices 4, 5, 6 a otro valor en cada arreglo
nombres[4] = "Sofía";
nombres[5] = "Andrea";
nombres[6] = "Raúl";

edades[4] = 22;
edades[5] = 33;
edades[6] = 44;

console.log("Nombres actualizados:", nombres);
console.log("Edades actualizadas:", edades);
