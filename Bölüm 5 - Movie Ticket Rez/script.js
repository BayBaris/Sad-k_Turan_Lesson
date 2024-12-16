const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");


getFromLocalStorage();
calculateTotal();
container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        e.
        calculateTotal();
    }
});

select.addEventListener("change", function(e){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat)
    });

    //[1,4,12] gibi değer tutulacak.
    let selectedSeatIndexes = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    console.log(selectedSeatIndexes);

    let selectedSeatCount = selectedSeats.length;    
    count.innerText = selectedSeatCount;
    amount.innerText = select.value * selectedSeatCount;

    saveToLocalStorage(selectedSeatIndexes);
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selected_seats"));
    
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }
    
    const selectedMovieIndex = localStorage.getItem("selected_movie");

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexes){
    localStorage.setItem("selected_seats", JSON.stringify(indexes));
    localStorage.setItem("selected_movie", select.selectedIndex);
}