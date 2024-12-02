var auxCarta = null;
let numeroFallos = 0;
let numeroAciertos = 0;

function girarCarta(cartaGirada) {
    if (!cartaGirada.classList.contains('girada')) {
        cartaGirada.classList.add('girada');
        setTimeout(comparar, 900, cartaGirada);
    }
    // cartaGirada.classList.toggle('girada');
    // setTimeout(comparar,900,cartaGirada);
}

function comparar(carta2) {
    if (auxCarta == null) {
        auxCarta = carta2;
    } else {
        if (auxCarta.id != carta2.id) {
            auxCarta.classList.remove('girada');
            carta2.classList.remove('girada');
            numeroFallos++;
            fallos = document.getElementById("fallos");
            fallos.textContent = ("Fallos: "+numeroFallos);
        } else{
            numeroAciertos++;
            aciertos = document.getElementById("aciertos");
            aciertos.textContent = ("Aciertos: "+numeroAciertos);
        }
        auxCarta = null;
    }

    
    

    if(numeroFallos == 3){
        let nuevoElemento = document.createElement("h1");
        nuevoElemento.textContent = "Has perdido. Has fallado 3 veces";
        let body = document.getElementById("body");
        body.appendChild(nuevoElemento);
        // document.write("Has perdido. Has fallado 3 veces");
    }
    if(numeroAciertos == 3){
        let nuevoElemento = document.createElement("h1");
        nuevoElemento.textContent = "Has ganado. Has adivinado todas las parejas";
        let body = document.getElementById("body");
        body.appendChild(nuevoElemento);
        // document.write("Has ganado. Has adivinado todas las parejas");
    }
}