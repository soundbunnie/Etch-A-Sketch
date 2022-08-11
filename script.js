var gridBox = document.querySelectorAll('.gridBox')
var gridBoard = document.querySelector('#grid');
var rowIndex = 0;

function drawGrid(size=16){
    let rows = document.getElementsByClassName('row');
    deleteGrid()
    for (let i = 0; i < size; i++){ // create x amount of rows
        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        newRow.setAttribute('id', `row-${i}`); //set id to row number
        document.getElementById('grid').appendChild(newRow); //append each row to grid
    }
    for (let row of rows){
        for (let i =0; i < size; i++){ //create x amount of boxes for each row
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            gridBox.setAttribute('id', `${rowIndex}-${i}`); //set id to rownumber - boxnumber
            row.appendChild(gridBox);
        }
        rowIndex+=1;
    addListeners();
    }
}
function deleteGrid(){
    let rows = document.querySelectorAll('.row');
    rows.forEach(row =>{
        row.remove();
    })
    gridBox.forEach(box=>{
        box.remove();
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

function changeDimensions(){
    var size = document.getElementById('dimension-size').value;
    console.log(size);
    drawGrid(size)
}

drawGrid();