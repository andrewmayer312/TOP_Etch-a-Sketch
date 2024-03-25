const gridContainer = document.querySelector("#grid-container");
const setButton = document.querySelector("#set-button");

function populateGrid(gridSize) {
    console.log("This launched!");
    const gridSizeInt = parseInt(gridSize);
    console.log(gridSizeInt);

    for (let i = 0; i < gridSizeInt; i++) {
        gridContainer.appendChild(createRowContainer(gridSizeInt));
    }
}

function createRowContainer(gridSize) {
    console.log("We got here too!");
    const rowContainer = document.createElement("div");
    rowContainer.classList.toggle("row-container");

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");

        square.addEventListener("mouseover", () => {
            square.classList.add("fill-square");
        });
        rowContainer.appendChild(square);
    }

    return rowContainer;
}

function promptUser() {
    console.log("Why is this executing");
    let userInput = prompt("Insert the number of squares per side of grid: ");

    const badUserInput = NaN;

    while (parseInt(userInput) > 100 || parseInt(userInput) == badUserInput ){
        userInput = prompt("Only a max of 100 allowed or you typed something that was not a number");
    }

    eraseBoard();

    populateGrid(userInput);

}

function eraseBoard() {
    while(gridContainer.hasChildNodes()) {
        while(gridContainer.firstChild.hasChildNodes()) {
            gridContainer.firstChild.firstChild.remove();
        }
        gridContainer.firstChild.remove();
    }
}

setButton.addEventListener("click", () => {
    promptUser()
});

populateGrid("16");

