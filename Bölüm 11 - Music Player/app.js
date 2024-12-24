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

play.addEventListener("click", () => {
    audio.play();
})

next.addEventListener("click", () =>{
    player.next();
    let music = player.getMusic();
    displayMusic(music);
})