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

    while (numbers.length < 16 ) {

        number = (Math.floor(Math.random() * maxNumber));

        if (numbers.includes(number)) {
            console.log("Numero già esistente")
        } else {
            numbers.push(number)
        }
    }
    
    return numbers;
}

function addBomb() {
    
    

}

const box = document.getElementById("box");
const play = document.getElementById("start");
let mode = document.getElementById("values");
let result = document.getElementById("risultato")
let points = 0


play.addEventListener("click", function () {
    box.innerHTML = ""
    console.log("Play!");

    creaSquare(mode.value);
    
    let square = document.getElementsByClassName("square");
    
    let bomb = randomNumber(mode.value)
    

    for (let c = 0; c < mode.value; c++) {
        
        if (mode.value == 49) {
            square[c].classList.add(`easy`)
        }
        
        if (mode.value == 81) {
            square[c].classList.add("medium")
        }
        
        square[c].addEventListener("click", function () {

            if (bomb.includes(c)) {
                this.classList.toggle("bomb")
                console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`);
                result.innerHTML = `Mi dispiace, hai perso, il tuo punteggio è: ${points}`
            } else {
                this.classList.toggle("clicked")
                console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`)
                points++
            }
        })
        
    }


})

