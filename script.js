function addToGrid(){
    let gridBox = document.createElement('div');
    gridBox.setAttribute('class', 'gridbox'); // set created div to class gridbox
    document.getElementById('grid').appendChild(gridBox);
}

function drawGrid(){
    for (let i = 0; i < 257; i++){
        addToGrid();
    }
}