class UI{
    constructor(){
        this.profileContainer = document.getElementById("profile-container"),
        this.alert = document.getElementById("alert");
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="#"><img src="https://placehold.jp/150x150.png" class="img-thumbnail">
                        </a>
                    </div>
                    <div class="col-md-6">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                Username: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                Email: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                Address: 
                                ${profile.address.street} 
                                ${profile.address.city} 
                                ${profile.address.zipcode} 
                                ${profile.address.suite} 
                            </li>
                            <li class="list-group-item">
                                Website: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                Phone: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                Company: ${profile.company.name}
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }

    clear(){
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}