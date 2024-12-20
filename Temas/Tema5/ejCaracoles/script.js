var distancia1 = 0;
var distancia2 = 0;
var distancia3 = 0;

function avanzar(){
    var caracol = document.querySelectorAll('.caracol');
    distancia1 = c1 = (Math.random() * 13)+2 + distancia1;
    distancia2 = c2 = (Math.random() * 13)+2 + distancia2;
    distancia3 = c3 = (Math.random() * 13)+2 + distancia3;

    caracol[0].style.left = `${distancia1}vw`;
    caracol[1].style.left = `${distancia2}vw`;
    caracol[2].style.left = `${distancia3}vw`;

    console.log(caracol[0]);
    console.log(caracol[1]);
    console.log(caracol[2]);

    if(distancia1 >= 80 || distancia2 >= 80 || distancia3 >= 80){
        var boton = document.getElementById('boton');
        boton.style.display = "none";
    }
    if(distancia1 >= 80){
        caracol[0].nextElementSibling.style.opacity = 1;
    }
    if(distancia2 >= 80){
        caracol[0].nextElementSibling.style.opacity = 1;
    }
    if(distancia3 >= 80){
        caracol[0].nextElementSibling.style.opacity = 1;
    }
}