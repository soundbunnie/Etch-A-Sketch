function drawGrid(size=16){
    let rows = document.getElementsByClassName('row');
    for (let i = 0; i < size; i++){ // create x amount of rows
        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        document.getElementById('grid').appendChild(newRow); //append each row to grid
    }
    for (let row of rows){
        for (let i =0; i < size; i++){ //create x amount of boxes for each row
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            row.appendChild(gridBox);
        }      
    }
}

drawGrid()