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


const box = document.getElementById("box");
const play = document.getElementById("start");
let mode = document.getElementById("values");
let result = document.getElementById("risultato")


play.addEventListener("click", function () {
    box.innerHTML = ""
    console.log("Play!");
    
    box.classList.remove("cheat")
    creaSquare(mode.value);
    let points = 0;
    result.innerHTML = ``
    
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
                for (let i = 0; i < bomb.length; i++) {
                    
                    square[bomb[i]].classList.add("bomb")
                    
                }
                console.log(`Hai perso, la casella numero: ${square[c].innerHTML} era una bomba`);
                result.innerHTML = `Mi dispiace, hai perso! la casella numero: ${square[c].innerHTML} era una bomba il tuo punteggio è: ${points}`
                box.classList.add("cheat")  //è barare?
            } else {
                this.classList.add("clicked")
                console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`)
                points++
            }
        })
        
    }


})
