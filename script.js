var gridBox = document.querySelectorAll('.gridBox')
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
drawGrid();

var gridBox = document.querySelectorAll('.gridBox')
gridBox.forEach(box =>{
    box.addEventListener('pointerdown', function changeColor(event){
        console.log(`box clicked, ${box.id}`);
        box.setAttribute('style', 'background-color: yellow;');
    })
    box.addEventListener('mouseover', function changeHoverColor(event){
        box.setAttribute('style', 'background-color: grey;');
    })
})
