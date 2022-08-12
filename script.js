var gridBox = document.querySelectorAll('.gridBox')
var gridBoard = document.querySelector('#grid');
var rowIndex = 0;
var dimensionBoxTitle = document.getElementById('dimensions-title');
var stylusY;
var stylusX;

function drawGrid(size=64   ){
    let rows = document.getElementsByClassName('row');
    eraseGrid();
    for (let i = 0; i <= size; i++){ // create x amount of rows
        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        newRow.setAttribute('id', `row-${i}`); //set id to row number
        document.getElementById('grid').appendChild(newRow); //append each row to grid
    }
    for (let row of rows){
        for (let i =0; i <= size; i++){ //create x amount of boxes for each row
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            gridBox.setAttribute('id', `${rowIndex}-${i}`); //set id to rownumber - boxnumber
            row.appendChild(gridBox);
        }
        rowIndex+=1;
    addListeners();
    }
}
function eraseGrid(){
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box =>{
        box.setAttribute('style', 'background-color: #dfdfdf;');
    })
}

function addListeners(){
    let gridBox = document.querySelectorAll('.gridBox')
    gridBox.forEach(box =>{
        box.addEventListener('mouseover', function changeHoverColor(event){
            box.setAttribute('style', 'background-color: grey;');
        })
    })
    
}

document.addEventListener('keydown', function(event){
    if (stylusX === undefined && stylusY === undefined){ //define default x,y for stylus
        stylusY = 0;
        stylusX = 1;
    }
    if (event.key === "d"){
        stylusX--;
        let stylusPosition = `${stylusY}-${stylusX}`;
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "f"){
        stylusX++;
        let stylusPosition = `${stylusY}-${stylusX}`;
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);       
    }
    if (event.key === "j"){
        stylusY--;
        let stylusPosition = `${stylusY}-${stylusX}`;
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
    if (event.key === "k"){
        stylusY++;
        let stylusPosition = `${stylusY}-${stylusX}`;
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        console.log(stylusPosition);
    }
})


function changeDimensions(){
    size = document.getElementById('dimension-size').value;
    dimensionBoxTitle.textContent = `Change grid size (Currently ${size} x ${size})`
    drawGrid(size);
}

drawGrid();