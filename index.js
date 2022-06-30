// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", event =>{
   let keyPressed = event.key;
   switch(keyPressed){
    case "ArrowLeft":
        moveDodgerLeft();
        break;
    case "ArrowRight":
        moveDodgerRight();
        break;
    case "ArrowUp":
        moveDodgerUp();
        break;
    case "ArrowDown":
        moveDodgerDown();
        break;
    default:
        alert("Try pressing an arrow key!");
        break;
   }
});

function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace("px","");
    const left = parseInt(leftNumber,10);

    if(left>0){
        dodger.style.left = `${left-1}px`;
    }
}

function moveDodgerRight(){
    const leftNumber = dodger.style.left.replace("px","");
    const left = parseInt(leftNumber,10);

    if(left<360){
        dodger.style.left = `${left+1}px`;
    }
}

function moveDodgerUp(){
    const upNumber = dodger.style.bottom.replace("px","");
    const up = parseInt(upNumber,10);

    if(up>=0&&up<380){
        dodger.style.bottom = `${up+1}px`;
    }
}

function moveDodgerDown(){
    const downNumber = dodger.style.bottom.replace("px","");
    const down = parseInt(downNumber,10);

    if(down>0){
        dodger.style.bottom = `${down-1}px`;
    }
}