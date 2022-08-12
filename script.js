var gridBox = document.querySelectorAll('.gridBox')
var gridBoard = document.querySelector('#grid');
var rowIndex = 0;
var dimensionBoxTitle = document.getElementById('dimensions-title');

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
    let stylusY = 0 //define default variables for x,y of stylus
    let stylusX = 1;
    if (event.key === "d"){
        stylusX--;
        let stylusPosition = `${stylusY}-${stylusX}`;
        let nextPos = document.getElementById(stylusPosition);
        nextPos.setAttribute('style', 'background-color: grey');
        stylusPosition = nextPos;//redefine stylusPoistion
        console.log(stylusPosition);
    }
})


function changeDimensions(){
    size = document.getElementById('dimension-size').value;
    dimensionBoxTitle.textContent = `Change grid size (Currently ${size} x ${size})`
    drawGrid(size);
}

drawGrid();