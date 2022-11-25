let pickedColor = "#a960d3"

function colorPick(){
    let colorPicker = document.getElementById("colorPicker")
    pickedColor = colorPicker.value;
}
function targetCellOnClick(){
    let targetCell = document.getElementById("targetCell")
    targetCell.style.backgroundColor = pickedColor
}
function targetCellMouseOver(){
    let targetCell = document.getElementById("targetCell")
    targetCell.style.backgroundColor = "#"+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase()
}

function targetCellOnDblClick(){
    let targetCells = document.getElementsByClassName("target-column");

    for(let cell in targetCells){
        targetCells[cell].style.backgroundColor = pickedColor;
    }
}

