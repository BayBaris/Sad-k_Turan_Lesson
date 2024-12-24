class MusicController{
    displayMusic (music){
        title.innerText = music.getName();
        singer.innerText = music.singer;
        image.src = "img/" + music.img;
        audio.src = "mp3/" + music.file;
    }
    
    playMusic(){
        audio.play();
        play.classList = "fa-solid fa-pause"
        container.classList.add("playing");
    }
    
    pauseMusic(){
        container.classList.remove("playing");
        play.classList = "fa-solid fa-play"
        audio.pause();
    }
    
    prevMusic(){
        player.prev();
        let music = player.getMusic();
        this.displayMusic(music);
        this.playMusic();
    }
    
    nextMusic(){
        player.next();
        let music = player.getMusic();
        this.displayMusic(music);
        this.playMusic();
    }
}