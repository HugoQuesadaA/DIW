var video = document.getElementById("myVideo");

var btn = document.getElementById("btn");

var videoTitle = document.getElementById("videoTitle");

var soundBtn = document.getElementById("soundBtn");
var soundImg = document.getElementById("soundImg");

var showTime = 3;

video.addEventListener("timeupdate", function(){
    if(video.currentTime >= showTime && video.currentTime < showTime + 5){
        videoTitle.style.display = "block";
    } else {
        videoTitle.style.display = "none";
    }
});

function myFunction(){
    if(video.paused){
        video.play();
        btn.innerHTML = "Pause";
    } else{
        video.pause();
        btn.innerHTML = "Play";
    }
}

function soundMute(){
    if(video.muted){
        video.muted = false;
        soundImg.src = "img/muted.PNG";
        soundImg.alt = "Sound Off";
    } else{
        video.muted = true;
        soundImg.src = "img/sound.PNG";
        soundImg.alt = "Sound On";
    }
}