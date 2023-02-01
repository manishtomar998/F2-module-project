function showDetails() {
        document.getElementById("name1").innerText = localStorage.getItem("Name");
        document.getElementById("userName1").innerText = localStorage.getItem("Username");
        localStorage.setItem("secondImageClick",true);
}