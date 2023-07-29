var gridBox = document.querySelectorAll('.gridBox')
var gridBoard = document.querySelector('#grid');
var dimensionBoxTitle = document.getElementById('dimensions-title');
var screenContainer = document.getElementById('screen-container');
var gridContainer = document.getElementById('grid-container');
var logo = document.getElementById('logo');
var checkbox = document.querySelector('#color-checkbox');
var rowIndex = 0;
var stylusY;
var stylusX;
var gridSize;
var controlType;
var keysPressed = {
    d: false,
    f: false,
    j: false,
    k: false,
    e: false,
    o: false,
};
var colors = [
    "#53BF9D",
    "#F94C66",
    "#BD4291",
    "#FFC54D"
]

function drawGrid(size=64){
    let rows = document.getElementsByClassName('row');
    gridSize = size;
    rowIndex = 0;
    eraseGrid(); //make sure grid is blank before re-drawing
    for (let i = 0; i <= size; i++){ // create (size) amount of rows
        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        newRow.setAttribute('id', `row-${i}`); //set id to row number
        document.getElementById('grid').appendChild(newRow); //append each row to grid
    }
    for (let row of rows){
        for (let i =0; i <= size; i++){ //create (size) amount of gridboxes
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            gridBox.setAttribute('id', `${rowIndex}-${i}`); //set id to rownumber - boxnumber
            row.appendChild(gridBox);//append gridbox to respective row
        }
        rowIndex+=1;
    addListeners();//add event listeners to gridbox after they've been created
    }
}
function eraseGrid(){
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box =>{
        box.setAttribute('style', 'background-color: #dfdfdf;'); //reset all gridbox color to default
    })
}

function destroyGrid(){
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box => {
        box.remove();
    })
}

function addListeners(){
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box =>{
        box.addEventListener('mouseover', function changeHoverColor(event){ //create function that changes color of gridbox when moused over
            let color;
            if (checkbox.checked){
                color = colors[Math.floor(Math.random() * colors.length)];//if rainbow colors checkbox is checked choose random color
                console.log(color);
            } 
            else if (checkbox.checked === false){
                color = "grey";
            }
            box.setAttribute('style', `background-color: ${color};`);
            gridContainer.setAttribute('style', 'background-color: black;');
        })
    })
    
}

function changeDimensions(){
    size = document.getElementById('dimension-size').value;//get value typed in the text box
    gridSize = size;
    if (size > 128){
        alert("Input number exceeded max of 128. Grid size has been set to 64x64.")
        size = 64;
    }
    dimensionBoxTitle.textContent = `Change grid size (Currently ${size} x ${size})`
    destroyGrid();
    drawGrid(size);//redraw grid using new size
}

document.addEventListener('keydown', function(event){
    if (stylusX === undefined && stylusY === undefined){ //define default x,y for stylus
        stylusY = 0;
        stylusX = 1;
    }
    if (event.key === "d" && stylusX - 1 >= 0){//do nothing if modifying stylusposition would put it off screen
        keysPressed.d = true;
        stylusX--;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new x value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "f" && stylusX + 1 <= gridSize){
        keysPressed.f = true;
        stylusX++;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new x value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);       
    }
    if (event.key === "j" && stylusY + 1 <= gridSize){
        keysPressed.j = true;
        stylusY++;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new y value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "k" && stylusY - 1 >= 0){
        keysPressed.k = true;
        stylusY--;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new y value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "e"){
        keysPressed.e = true;
    }
    if (event.key === "o"){
        keysPressed.o = true;
    }
    if (keysPressed.e === true && keysPressed.o === true){
        screenContainer.setAttribute('class', 'shake-anim');
    }
    gridContainer.setAttribute('style', 'background-color: #dfdfdf');
});

document.addEventListener('keyup', function(event){
    if (event.key === "d"){
        keysPressed.d = false;
    }
    if (event.key === "f"){
        keysPressed.f = false;
    }
    if (event.key === "j"){
        keysPressed.j = false;
    } 
    if (event.key === "k")
    {
        keysPressed.k = false;
    }
    if (event.key === "e"){
        screenContainer.removeAttribute('class', 'shake-anim');
        eraseGrid();
        keysPressed.e = false;
    }
    if (event.key === "o"){
        screenContainer.removeAttribute('class', 'shake-anim');
        eraseGrid();
        keysPressed.o = false;
    }
})

drawGrid();
