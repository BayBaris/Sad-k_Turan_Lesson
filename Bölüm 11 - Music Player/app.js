const container = document.querySelector(".container");
const image = document.getElementById("music-image");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const audio = document.getElementById("music");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const duration = document.getElementById("duration");
const currentTime = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const volume = document.getElementById("volume-icon");
const volumeBar = document.getElementById("volume-bar");

const player = new MusicPlayer(musicList);
const controller = new MusicController();

window.addEventListener("load", ()=>{
    let music = player.getMusic();
    controller.displayMusic(music);
})

const calculateTime = (duration) => {
    const minute = Math.floor(duration / 60);
    const second = Math.floor(duration % 60);
    const updatedSecond = second < 10 ? `0${second}` : `${second}`
    const time = `
        ${minute}:${updatedSecond} 
    `;
    return time;
}

play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing")
    isMusicPlay ? controller.pauseMusic() : controller.playMusic()
})

prev.addEventListener("click", () => {controller.prevMusic();})

next.addEventListener("click", () =>{controller.nextMusic();})

audio.addEventListener("loadedmetadata",()=>{
    console.log(audio.duration);
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", ()=>{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
})

progressBar.addEventListener("input", ()=>{
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
})

let muteState = "unmuted";

volume.addEventListener("click", ()=>{
    if(muteState === "unmuted"){
        audio.muted = true;
        muteState = "muted";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    }else{
        audio.muted = false;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;

    }
})

volumeBar.addEventListener("input", (e)=>{
    const value = e.target.value;
    audio.volume = value / 100;
    if(value == 0){
        audio.muted = true;
        muteState = "muted";
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else{
        audio.muted = false;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-high";
    }
})