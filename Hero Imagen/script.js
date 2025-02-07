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