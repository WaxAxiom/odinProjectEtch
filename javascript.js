//@ts-check
/** @type {HTMLInputElement | null} */
const newGridButton = document.querySelector("#sizePrompt");

if (newGridButton) {
    newGridButton.addEventListener("click", () => {
        const gridSize = prompt("Creating new grid. How many squares per side?", "16");
        createGrid(gridSize);
    });
}

function createGrid(N) {

}