let seleccionesDeUsuario = [];
let numero = 0;
let agregar = "Si";
let precioTotal = 0;

function Productos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//FUNCION  SeleccionProducto ---------------------------------------------------------------------------------------------
const seleccionProducto = (tiposMenu) => {
    if (tiposMenu == 1) {
        let Seleccion = prompt(
            `seleccione una Bebida Caliente
                \n 1-Macchiato Bombóm
                \n 2-Capuccino Moka
                \n 3-Cappuccino
                \n 4-Cappuccino Tentación
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                seleccionesDeUsuario[numero] = new Productos(
                    "Macchiato Bombóm",
                    255
                );
                break;
            case "2":
                seleccionesDeUsuario[numero] = new Productos(
                    "Capuccino Moka",
                    255
                );
                break;
            case "3":
                seleccionesDeUsuario[numero] = new Productos("Cappuccino", 255);
                break;
            case "4":
                seleccionesDeUsuario[numero] = new Productos(
                    "Cappuccino Tentación",
                    255
                );
                break;
        }
    } else if (tiposMenu == 2) {
        let Seleccion = prompt(
            `seleccione una Bebida Fria
                \n 1-Té de Frambuesa
                \n 2-Té de Limon
                \n 3-Té de Naranja
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                seleccionesDeUsuario[numero] = new Productos(
                    "Té de Frambuesa",
                    255
                );
                break;
            case "2":
                seleccionesDeUsuario[numero] = new Productos(
                    "Té de Limon",
                    255
                );
                break;
            case "3":
                seleccionesDeUsuario[numero] = new Productos(
                    "Té de Naranja",
                    255
                );
                break;
        }
    } else if (tiposMenu == 3) {
        let Seleccion = prompt(
            `seleccione un Salados
                \n 1-Tostado 4 Quesos
                \n 2-Tostado Mixto
                \n 3-Tostado Napolitano
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                seleccionesDeUsuario[numero] = new Productos(
                    "Tostado 4 Quesos",
                    255
                );
                break;
            case "2":
                seleccionesDeUsuario[numero] = new Productos(
                    "Tostado Mixto",
                    255
                );
                break;
            case "3":
                seleccionesDeUsuario[numero] = new Productos(
                    "Tostado Napolitano",
                    255
                );
                break;
        }
    } else if (tiposMenu == 4) {
        let Seleccion = prompt(
            `seleccione un Postres
                \n 1-Flan
                \n 2-Pay de Queso
                \n Ingrese un numero para continuar`
        );

        switch (Seleccion) {
            case "1":
                seleccionesDeUsuario[numero] = new Productos("Flan", 255);
                break;
            case "2":
                seleccionesDeUsuario[numero] = new Productos(
                    "Pay de Queso",
                    255
                );
                break;
        }
    } else {
        alert("Porfavor Ingrese un numero de menu valido");
        numero--;
    }
};
// FIN FUNCION  SeleccionProducto ---------------------------------------------------------------------------------------------

//FUNCION repetirSeleccion -------------------------------------------------------------------------------------------------
const repetirSeleccion = () => {
    agregar = "";
    console.table(seleccionesDeUsuario);
    do {
        agregar = prompt(
            "si desea agregar algo a su menu escriba Si en caso contrario escriba No"
        );
    } while (
        agregar != "Si" &&
        agregar != "si" &&
        agregar != "SI" &&
        agregar != "No" &&
        agregar != "no" &&
        agregar != "NO"
    );

    if (agregar == "si" || agregar == "Si" || agregar == "SI") {
        numero++;
    }
};
//FIN FUNCION repetirSeleccion -------------------------------------------------------------------------------------------------

while (agregar == "Si" || agregar == "si" || agregar == "SI") {
    let tiposMenu = prompt(
        `seleccione uno de nuestro menu de  productos
        \n 1-Bebidas Calientes
        \n 2-Bebidas Frias
        \n 3-Salados
        \n 4-Postres
        \n Ingrese un numero para continuar`
    );
    seleccionProducto(tiposMenu);
    repetirSeleccion();
}
if (agregar == "No" || agregar == "no" || agregar == "NO") {
    console.log("\n");
    console.log("Su Pedido es :");
    console.table(seleccionesDeUsuario);

    seleccionesDeUsuario.forEach((seleccionDeUsuario) => {
        precioTotal += seleccionDeUsuario.precio;
    });
    console.log("El total de su compra es : " + precioTotal);
} else {
    console.log(
        "el programador no tiene idea de como llegaste a esta opcion reportalo para que asi este pueda recapacitar si seguir programando o dejarlo para siempre"
    );
}

console.log("array de obj" + seleccionesDeUsuario[0]);
