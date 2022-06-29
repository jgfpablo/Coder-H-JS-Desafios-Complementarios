// // Entrada Cine ------------------------------------------------

// let edadPadre = prompt("escribe la edad del padre");
// let edadNiño = prompt("escribe la edad del niño");

// let pagoDeEntrada = true;

// const saludar = () => {
//     console.log(saludo + " " + nombre);
// };

// if (pagoDeEntrada && (edadNiño >= 18 || edadPadre >= 18)) {
//     console.log("Pueden entrar");
// } else {
//     console.log("No pueden entrar");
// }

// //  FIN ENTRADA CINE ---------------------------------------------

// //  TABLA DE UN NUMERO INGRESADO ------------------------------------------------
// let numeroIngresado = parseInt(
//     prompt("ingrese un numero para obtener la tabla de multiplicar del mismo")
// );
// let resultado = [];

// for (let index = 0; index <= 10; index++) {
//     resultado[index] = numeroIngresado * index;
// }
// console.table(resultado);

// // FIN TABLA DE UN NUMERO INGRESADO ------------------------------------------------

// // FIN FIBONACCI ---------------------------------------------

// let num = 0;
// let num2 = 1;
// let aux;
// let index = 0;
// let tabla = [];

// while (index < 100) {
//     index = index + 1;
//     aux = num + num2;
//     num = num2;
//     num2 = aux;
//     tabla[index] = aux;
// }

// console.table(tabla);

// // FIN FIBONACCI ---------------------------------------------

const estaEntre = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        return true;
    }
};

console.log(estaEntre(3, 2, 5));
