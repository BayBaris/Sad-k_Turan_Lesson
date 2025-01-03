const profile = new Profile();
const ui = new UI();

const searchProfile = document.getElementById("search-profile");


searchProfile.addEventListener("keyup", (event) => {
    let text = event.target.value;
    ui.clear();

    if(text != ""){
        profile.getProfile(text)
        .then(res => {
            if(res.profile.length === 0){
                ui.showAlert(text);
            }
            else{
                ui.showProfile(res.profile[0]);
            }
        })
    }
})