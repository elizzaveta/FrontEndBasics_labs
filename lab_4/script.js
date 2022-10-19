const BLUE = "#8bbfc2"
const PURPLE = "#b88ab9"

function firstElementOnClick(){
    let element = document.getElementById("element9");
    if(element.style.background === ''){
        element.style.background = BLUE;
    } else {
        element.style.background = ''
    }
}
function secondElementOnClick(){
    let element = document.querySelector(".element10");
    if(element.style.background === ''){
        element.style.background = PURPLE;
    } else {
        element.style.background = ''
    }
}


function zoomInImage(){
    let images = document.querySelectorAll(".image")
    images.forEach(image=>{
        console.log(image.width)
        image.style.width = image.width + 40 +'px'
        console.log(image.width)
    })
}
function zoomOutImage(){
    let images = document.querySelectorAll(".image")
    images.forEach(image=>{
        console.log(image.width)
        image.style.width = image.width - 40 +'px'
        console.log(image.width)
    })
}

function deleteImage(){
    let images = document.querySelectorAll(".image")
    if(images.length !==0){
        images[images.length-1].remove()
    }
}


function addImage(){
    document.getElementById("uploadImage") .click();
}
function upload(){
    let uploader = document.getElementById("uploadImage");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        let img = document.createElement("img")
        img.src = uploaded_image
        img.className="image"
        document.getElementById("imagesDiv").appendChild(img)
    });
    reader.readAsDataURL(uploader.files[0]);
}


