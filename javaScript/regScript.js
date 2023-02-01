function submitDetails(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let userName = document.getElementById("userName").value;

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#userName").value = "";
    console.log(name, userName);
    if (name === "" || userName === "") {
        window.alert("Please enter all details!");
    }
    else {
        localStorage.setItem("firstImageClick", true);
        document.getElementById("backBtn").style.display = "block";
        localStorage.setItem("Name", name);
        localStorage.setItem("Username", userName);
    }
} 