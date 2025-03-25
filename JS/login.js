const email = document.getElementById("email")
const password = document.getElementById("password")
const para = document.getElementById("para")
signInBTN.addEventListener("click", signIn)

function signIn(){
    if (email.value === "" || password === "") {
        alert("Ensure all fields are filled")
    }
    
    // For password only
    para.innerHTML = "";
    if (password.value.length < 6) {
        para.innerHTML = "Please enter password length of 6 or more";
        para.style.textAlign = "center"
        para.style.color = "red"
        para.style.paddingTop = "1rem"
        para.style.fontSize = "18px"
        para.style.fontWeight = "200"
        console.log("Please enter password length of 6 or more");
    }
    
}