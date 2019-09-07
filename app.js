
function setupCell(cell) {
    const userSelection = cell.querySelector(".user-selection");
    function game(userChoice){
        if (userChoice === "X") userSelection.innerHTML = "X";
        if (userChoice === "O") userSelection.innerHTML = "O";
    }
    cell.querySelector(".xbox").addEventListener("click", function () {
        game("X");
    })
    cell.querySelector(".obox").addEventListener("click", function () {
        game("O");
    })
}

const cells = document.querySelectorAll(".cell");

// for-of loop
for (const cell of cells){
    setupCell(cell);
}



/*
const x_div = document.getElementById("xbadge");
const o_div = document.getElementById("obadge");
const userselection_span = document.getElementById("user-selection");

const oneOne_cell = document.getElementById("1-1");
const oneTwo_cell = document.getElementById("1-2");
const twoOne_cell = document.getElementById("2-1");
const twoTwo_cell = document.getElementById("2-2");


oneOne_cell.addEventListener('click', function() {
    console.log("1-1");
})

oneTwo_cell.addEventListener('click', function() {
    console.log("1-2");
})

twoOne_cell.addEventListener('click', function() {
    console.log("2-1");
})

twoTwo_cell.addEventListener('click', function() {
    console.log("2-2");
})



function game(userChoice) {
    if (userChoice === "X") userselection_span.innerHTML = "X";
    if (userChoice === "O") userselection_span.innerHTML = "O";

}

x_div.addEventListener('click', function(){
    game("X");
})

o_div.addEventListener('click', function(){
    game("O");
})
*/