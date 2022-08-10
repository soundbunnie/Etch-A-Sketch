function drawGrid(size=16){
    for (let i = 0; i < size; i++){ // create x amount of rows
        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        document.getElementById('grid').appendChild(newRow); //append each row to grid
    }
    for (let i = 0; i < size; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        document.querySelector('.row').appendChild(gridBox);
    }
}