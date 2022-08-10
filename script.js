function drawGrid(){
    for (let i = 0; i < 16; i++){
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridbox'); // set created div to class gridbox
        document.getElementById('grid').appendChild(gridBox);
    }
}