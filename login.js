const form=document.querySelector("#loginform");

form.addEventListener("submit", function(e){
e.preventDefault(); //to remain at the same page

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="Yashanshu" && password==="y"){
    sessionStorage.setItem("authToken", "some-valid-token");

    window.location.href="Home.html";
}else{
    alert("Login unsuccessful");
}

})

