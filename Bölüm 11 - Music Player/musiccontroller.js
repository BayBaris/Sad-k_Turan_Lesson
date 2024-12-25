class MusicController{
    displayMusic (music){
        title.innerText = music.getName();
        singer.innerText = music.singer;
        image.src = "img/" + music.img;
        audio.src = "mp3/" + music.file;
    }
    
    playMusic(){
        container.classList.add("playing");
        audio.play();
        play.querySelector("i").classList = "fa-solid fa-pause"
    }
    
    pauseMusic(){
        container.classList.remove("playing");
        audio.pause();
        play.querySelector("i").classList = "fa-solid fa-play"
    }
    
    prevMusic(){
        player.prev();
        let music = player.getMusic();
        this.displayMusic(music);
        this.playMusic();
        isPlayingNow();

    }
    
    nextMusic(){
        player.next();
        let music = player.getMusic();
        this.displayMusic(music);
        this.playMusic();
        isPlayingNow();

    }
}