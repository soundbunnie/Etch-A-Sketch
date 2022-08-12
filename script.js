var gridBox = document.querySelectorAll('.gridBox')
var gridBoard = document.querySelector('#grid');
var rowIndex = 0;
var dimensionBoxTitle = document.getElementById('dimensions-title');
var stylusY;
var stylusX;
var controlType;
var keysPressed = {
    e: false,
    o: false,
};

function drawGrid(size=64){
    let rows = document.getElementsByClassName('row');
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

function addListeners(){
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box =>{
        box.addEventListener('mouseover', function changeHoverColor(event){ //create function that changes color of gridbox when moused over
            box.setAttribute('style', 'background-color: grey;');
        })
    })
    
}

function changeDimensions(){
    size = document.getElementById('dimension-size').value;//get value typed in the text box
    dimensionBoxTitle.textContent = `Change grid size (Currently ${size} x ${size})`
    drawGrid(size);//redraw grid using new size
}

document.addEventListener('keydown', function(event){
    if (stylusX === undefined && stylusY === undefined){ //define default x,y for stylus
        stylusY = 0;
        stylusX = 1;
    }
    if (event.key === "d" && stylusX - 1 >= 0){//do nothing if modifying stylusposition would put it off screen
        stylusX--;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new x value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "f" && stylusX + 1 >= 0){
        stylusX++;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new x value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);       
    }
    if (event.key === "j" && stylusY - 1 >= 0){
        stylusY--;
        let stylusPosition = `${stylusY}-${stylusX}`;//update stylus position with new y value
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "k" && stylusY + 1 >= 0){
        stylusY++;
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
        eraseGrid();
    }

});

document.addEventListener('keyup', function(event){
        if (event.key === "e"){
            keysPressed.e = false;
        }
        if (event.key === "o"){
            keysPressed.o = false;
        }
})

drawGrid();