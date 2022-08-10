function drawGrid(size=16){
    for (let i = 0; i < size; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridbox'); // set created div to class gridbox
        document.getElementById('grid').appendChild(gridBox);
    }
}