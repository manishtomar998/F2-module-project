function submitDetails(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    //let email=document.getElementById("email").value;
    let userName=document.getElementById("userName").value;

    localStorage.setItem("Name",name);
    localStorage.setItem("Username",userName);
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#userName").value="";
}