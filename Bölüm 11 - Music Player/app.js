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



const player = new MusicPlayer(musicList);

window.addEventListener("load", ()=>{
    let music = player.getMusic();
    displayMusic(music);
})


function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

function playMusic() {
    audio.play();
    play.classList = "fa-solid fa-pause"
    container.classList.add("playing");
}

function pauseMusic() {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play"
    audio.pause();
}

function prevMusic(){
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function nextMusic(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

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
    isMusicPlay ? pauseMusic() : playMusic()
})

prev.addEventListener("click", () => {
    prevMusic();
})

next.addEventListener("click", () =>{
    nextMusic();
})

audio.addEventListener("loadedmetadata",()=>{
    console.log(audio.duration);
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
})

audio.addEventListener("timeupdate", ()=>{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
})