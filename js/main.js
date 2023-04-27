function creaSquare(number) {
    for (let i = 1; i <= number; i++) {
        let square = `<div class="square">${i}</div>`;
        
        box.innerHTML += square
        console.log("Box creato!");
        
    }
    
}

function randomNumber(maxNumber) {

    let numbers = []
    let number; 
    let x = true;
    
    for (let i = 0; i < 16; i++) {
        

        
        for (let c = 0; c < 16; c++) {
            
            number = (Math.floor(Math.random() * maxNumber));
            if (number == numbers[c]) {
                x = false
            }
            
        }
        

        if (x = true) {
            numbers.push(number)
    }
    }
    
    return numbers;
}

const box = document.getElementById("box");
const play = document.getElementById("start");
let mode = document.getElementById("values");


play.addEventListener("click", function () {
    box.innerHTML = ""
    console.log("Play!");

    creaSquare(mode.value);
    
    let square = document.getElementsByClassName("square");
    
    
    for (let c = 0; c < mode.value; c++) {
        
        if (mode.value == 49) {
            square[c].classList.add(`easy`)
        }
        
        if (mode.value == 81) {
            square[c].classList.add("medium")
        }
        
        square[c].addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`)
        })
        
    }
})

