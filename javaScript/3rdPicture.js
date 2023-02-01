function dataCheck(){
    // if(!(localStorage.getItem("Name") && localStorage.getItem("Username"))){
    //     document.getElementById("secondPicture").style.pointerEvents="none";
    // }
    localStorage.setItem("diceCount",0);
    localStorage.setItem("total",0);

}
function rollDice(){
    console.log(parseInt(localStorage.getItem("diceCount")));
    if(parseInt(localStorage.getItem("diceCount"))<3){
        localStorage.setItem("diceCount",parseInt(localStorage.getItem("diceCount"))+1);
        if(parseInt(localStorage.getItem("total"))!=0){
            localStorage.setItem("total",parseInt(localStorage.getItem("total"))+randomDice(1,6));
        }
        else{
            localStorage.setItem("total",randomDice(1,6));

        }
    }
}

function randomDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

