const container = document.querySelector(".container");
const image = document.getElementById("music-image");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const audio = document.getElementById("music");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");



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