let productos = [];
let precioTotal = 0;
class Producto {
    constructor(nombre, precio, cantidad) {
        (this.nombre = nombre),
            (this.precio = precio),
            (this.cantidad = cantidad);
    }

    agregar() {
        this.cantidad = this.cantidad + 1;
    }
    quitar() {
        if (this.cantidad >= 1) {
            this.cantidad = this.cantidad - 1;
        }
    }
}

total = () => {
    precioTotal = 0;
    let total = document.getElementById("total");
    for (const iterator of productos) {
        precioTotal = precioTotal + iterator.precio * iterator.cantidad;
    }
    total.innerHTML = precioTotal;
};

sumar = (id, precio) => {
    if (id.includes("-")) {
        nombre = id.replace(/-/g, " ");
    } else {
        nombre = id;
    }
    precio = Number(precio);
    cantidad = document.getElementById(id);
    cantidad.value++;

    let verificacionExistenciaEnArray = productos.filter(
        (item) => item.nombre == nombre
    );
    if (verificacionExistenciaEnArray.length != 0) {
        verificacionExistenciaEnArray[0].agregar();
    } else {
        productos.push(
            new Producto(nombre, precio, (cantidad = Number(cantidad.value)))
        );
    }
    let tabla = document.getElementById("tabla");

    for (const iterator of productos) {
        tdProducto = document.getElementById(iterator.nombre);
        if (tdProducto) {
            aumentarCantidad = document.getElementById(
                iterator.nombre + "cantidad"
            );
            aumentarCantidad.innerHTML = iterator.cantidad;
        } else {
            if (iterator.cantidad > 0) {
                const tr = document.createElement("tr");
                tr.setAttribute("id", iterator.nombre);

                nombre = document.createTextNode(iterator.nombre);
                cantidad = document.createTextNode(iterator.cantidad);

                td = document.createElement("td");
                tabla.appendChild(tr).appendChild(td).appendChild(nombre);
                td = document.createElement("td");
                td.setAttribute("id", iterator.nombre + "cantidad");
                tabla.appendChild(tr).appendChild(td).appendChild(cantidad);
            }
        }
    }
};

restar = (id, precio) => {
    console.log(productos);
    precio = Number(precio);
    nombre = id.replace("-", " ");
    cantidad = document.getElementById(id);

    if (cantidad.value <= 0) {
    } else {
        cantidad.value--;
    }

    let verificacionExistenciaEnArray = productos.filter(
        (item) => item.nombre == nombre
    );

    if (verificacionExistenciaEnArray.length != 0) {
        verificacionExistenciaEnArray[0].quitar();
    } else {
        productos.push(new Producto(nombre, precio, 0));
    }

    for (const iterator of productos) {
        tdProducto = document.getElementById(iterator.nombre);
        if (tdProducto) {
            aumentarCantidad = document.getElementById(
                iterator.nombre + "cantidad"
            );
            aumentarCantidad.innerHTML = iterator.cantidad;

            if (iterator.cantidad == 0) {
                tdProducto.remove();
            }
        }
    }
};
