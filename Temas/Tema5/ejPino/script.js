function rojo(){
    var bolas = document.querySelectorAll('.bola');
    bolas.forEach(element => {
        element.style.backgroundColor = "red";
        element.style.boxShadow = "0 0 10px red";
    });
}

function azul(){
    var bolas = document.querySelectorAll('.bola');
    bolas.forEach(element => {
        element.style.backgroundColor = "blue";
        element.style.boxShadow = "0 0 10px blue";
    });
}

function verde(){
    var bolas = document.querySelectorAll('.bola');
    bolas.forEach(element => {
        element.style.backgroundColor = "green";
        element.style.boxShadow = "0 0 10px green";
    });
}