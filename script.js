function drawGrid(){
    var gridBox = document.createElement("div");
    gridBox.setAttribute('class', 'gridbox');
    gridBox.innerHTML = "HELLO";
    
    document.getElementById("grid").appendChild(gridBox);
}