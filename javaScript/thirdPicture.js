function dataCheck() {
    localStorage.setItem("diceCount", 0);
    localStorage.setItem("total", 0);
    localStorage.setItem("chances", 1);
}
function rollDice() {
    if (parseInt(localStorage.getItem("diceCount")) < 3 && parseInt(localStorage.getItem("chances")) < 3){
        localStorage.setItem("diceCount", parseInt(localStorage.getItem("diceCount")) + 1);
        if (parseInt(localStorage.getItem("total")) != 0) {
            localStorage.setItem("total", parseInt(localStorage.getItem("total")) + randomDice(1, 6));
            document.getElementById("total").innerText=parseInt(localStorage.getItem("total"));
        }
        else {
            localStorage.setItem("total", randomDice(1, 6));
            document.getElementById("total").innerText=parseInt(localStorage.getItem("total"));
        }
        if (parseInt(localStorage.getItem("diceCount")) === 3 && parseInt(localStorage.getItem("total")) > 10) {
            document.getElementById("btn").style.display = "block";
            localStorage.setItem("thirdButtonClick", true);
            localStorage.setItem("utrNum",utrNum(12));
        }
        if (parseInt(localStorage.getItem("diceCount")) === 3 && parseInt(localStorage.getItem("total")) <= 10) {
            localStorage.setItem("chances", parseInt(localStorage.getItem("chances")) + 1);
            localStorage.setItem("diceCount", 0);
            localStorage.setItem("total", 0);
            document.getElementById("chance").style.display = "block";
        }
        if(parseInt(localStorage.getItem("chances")) ==3){
            document.getElementById("badLuck").style.display = "block";
            document.getElementById("chance").style.display = "none";
            document.getElementById("btn").style.display = "block";
            localStorage.setItem("status","failure");
        }
    }
}

function randomDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function utrNum(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}