var rotacionAcumulada = 0;
function girar(){
    const vueltas = Math.floor(Math.random() * 5) + 1;
    const grados = (Math.floor(Math.random() * 360) + 1) + (vueltas * 360);
    console.log(vueltas);
    console.log(grados);

    rotacionAcumulada = rotacionAcumulada + grados;

    document.documentElement.style.setProperty('--direccion',`${rotacionAcumulada}deg`);
}