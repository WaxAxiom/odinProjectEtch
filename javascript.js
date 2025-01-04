//@ts-check
/** @type {HTMLButtonElement| null} */
const newGridButton = document.querySelector("#sizePrompt");

newGridButton?.addEventListener("click", () => {
    let gridSize = prompt("Creating new grid. How many squares per side?") ?? "0";
    while (parseInt(gridSize) < 1 || parseInt(gridSize) > 100 || isNaN(parseInt(gridSize))) {
        alert("Please enter a number between 1 and 100!");
        gridSize = prompt("Creating new grid. How many squares per side?") ?? "0";
    }
    deleteGrid();
    createGrid(gridSize);
});

/** @type {HTMLButtonElement | null} */
const clearButton = document.querySelector("#clear");

clearButton?.addEventListener("click", () => {
    const gridSquares = document.querySelectorAll(".cell");
    
    gridSquares.forEach((square) => {
        // @ts-ignore
        square.style.backgroundColor = "white";
    });
});

/** @type {HTMLDivElement | null} */
const container = document.querySelector("#container");

function createGrid(N) {
    const squareHeight = Math.floor(window.innerHeight / N) - 2;
    const squareWidth = Math.floor(window.innerWidth / N) - 2;

    const squareSize = ((squareHeight < squareWidth) ? squareHeight : squareWidth).toString() + "px";

    console.log(squareHeight, squareWidth);

    for (let i = 0; i < N; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";
        for (let j = 0; j < N; j++) {
            let square = document.createElement("div");
            square.style.height = squareSize;
            square.style.width = squareSize;
            square.setAttribute("class", "cell");

            /** This is to enhance the feel by preventing dragging an element */
            square.onmousedown = (e) => {
                e.preventDefault();
            }
            square.addEventListener("mouseover", (e) => {
                if(e.buttons === 1) {
                    square.style.backgroundColor = "black";
                }
            });
            square.addEventListener("mousedown", (e) => {
                if(e.buttons === 1) {
                    square.style.backgroundColor = "black";
                }
            });
            
            row.appendChild(square);
        }
        container?.appendChild(row);
    }
}

function deleteGrid() {
    while (container?.firstChild) {
        container?.removeChild(container.firstChild);
    }
}