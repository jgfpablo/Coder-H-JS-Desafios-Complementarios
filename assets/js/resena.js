// -------------------------------
enviar = () => {
    nombre = document.getElementById("nombre");
    correo = document.getElementById("correo");
    texto = document.getElementById("texto");
    const comentarios = document.getElementById("comentarios");
    const article = document.createElement("article");
    article.className = "col-12 col-md-4 col-lg-3 bg m-4 resenas";

    div = document.createElement("div");
    div.className = "d-flex justify-content-center pt-4";
    img = document.createElement("img");
    article
        .appendChild(div)
        .appendChild(img)
        .setAttribute("src", "../assets/img/quote-img.png");

    // -------------------------------------
    div = document.createElement("div");
    div.className = "d-flex justify-content-center pt-4";
    span = document.createElement("span");
    span.className = "text-center";
    span.textContent = texto.value;
    article.appendChild(div).appendChild(span);

    // -------------------------------

    div = document.createElement("div");
    div.className = "d-flex justify-content-center mt-4";
    img = document.createElement("img");
    img.className = "border-100 imagen-resena";
    img.setAttribute("src", "../assets/img/personas/persona.jpg");
    article.appendChild(div).appendChild(img);

    // -------------------------------

    div = document.createElement("div");
    div.className = " d-flex justify-content-center fs-2 text-center";
    span = document.createElement("span");
    span.className = "color fs-1";
    span.textContent = nombre.value;
    article.appendChild(div).appendChild(span);

    comentarios.appendChild(article);
};
