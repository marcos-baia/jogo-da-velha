const selecBox = document.querySelector(".select-box"),
selectXBtn = selecBox.querySelector(".playerX"),
selectOBtn = selecBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"), 
allBox = document.querySelectorAll("section span");

window.onload = ()=> {
  selectXBtn.onclick = ()=>{
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
  }
  selectOBtn.onclick = ()=>{
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
  } 
}