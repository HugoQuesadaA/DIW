moverTexto();
moverImagenes();
animacionTitulo();

function animacion(n, b) { 
    eliminarClases();
    moverFondo(n, b);
    setTimeout(() => {
        moverTexto();
        moverImagenes();
        animacionTitulo();
    }, 1000);
}

function moverFondo(n, b) {
    let fondos = document.querySelectorAll('.fondo');
    let botones = document.querySelectorAll('.boton');

    for (let i = 0; i < 3; i++) {
        fondos[i].style.transform = `translateX(-${n}%)`;
    }

    botones.forEach(boton => {
        boton.classList.remove("buttonWhite");
    });

    b.classList.add("buttonWhite");
}

function moverTexto() {
    let textos = document.querySelectorAll('.texto');

    textos.forEach(texto => {
        texto.classList.add("animacionTexto");
    });
}

function moverImagenes() {
    let imagenes = document.querySelectorAll('.imagen');

    imagenes.forEach(imagen => {
        imagen.classList.add("animacionImagen");
    });
}

function animacionTitulo(){
    let titulos = document.querySelectorAll('.h1');

    titulos.forEach(titulo => {
        titulo.classList.add("animacionTitulo");
    });
}

function eliminarClases() {

    let textos = document.querySelectorAll('.texto');

    textos.forEach(texto => {
        texto.classList.remove("animacionTexto");
        console.log('Clase animacionTexto eliminada de:', texto);
    });

    let imagenes = document.querySelectorAll('.imagen');

    imagenes.forEach(imagen => {
        imagen.classList.remove("animacionImagen");
    });
    
    let titulos = document.querySelectorAll('.h1');

    titulos.forEach(titulo => {
        titulo.classList.remove("animacionTitulo");
    });
}