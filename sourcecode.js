const gridContainer = document.querySelector("#grid-container");

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
        rowContainer.appendChild(square);
    }

    return rowContainer;
}

populateGrid("30");