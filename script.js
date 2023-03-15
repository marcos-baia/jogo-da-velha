const selecBox = document.querySelector(".select-box"),
selectXBtn = selecBox.querySelector(".playerX"),
selectOBtn = selecBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"), 
allBox = document.querySelectorAll("section span"),
player = document.querySelectorAll(".player");

window.onload = ()=> {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick","clickedBox(this)");
  }

  selectXBtn.onclick = ()=>{
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
  }
  selectOBtn.onclick = ()=>{
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
    player.setAttribute("class", "player active");
  } 
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element){

}