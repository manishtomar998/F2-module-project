function dataCheck(){
    if(!(localStorage.getItem("Name") && localStorage.getItem("Username"))){
        document.getElementById("secondPicture").style.pointerEvents="none";
    }
}