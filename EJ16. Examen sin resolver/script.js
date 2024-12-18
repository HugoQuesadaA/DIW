function nevar(){
    const copos = document.querySelector('.copos');
    const audio = document.querySelector('audio');
    audio.muted = false;
    copos.classList.add('coposCaer');
    setTimeout(desaparecer, 3000);
}

function desaparecer(){
    const copos = document.querySelector('.copos');
    copos.classList.add('desaparecer');
    setTimeout(desnevar, 2500);
    
}

function desnevar(){
    const copos = document.querySelector('.copos');
    copos.classList.remove('coposCaer');
}