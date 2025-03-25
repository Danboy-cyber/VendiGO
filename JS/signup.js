const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const password = document.getElementById("password")
const para = document.getElementById("para")
const yeap = document.getElementById("yeap")
signUpBTN.addEventListener("click", signUp)
alert("Welcome to VendiGo MART")

function signUp() {
    // For everything
    if (first.value === "" || last.value === "" || email.value === "" || password === "") {
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
    }
    // End of password only
    
    // For email only
    const Email = email.value.trim()
    let regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(Email)){
        yeap.textContent = "Validate Email"
        yeap.style.color = "green"
        yeap.style.paddingTop = "1rem"
        yeap.style.fontSize = "18px"
        yeap.style.fontWeight = "200"
        yeap.style.textAlign = "center"
    }
    else{
        yeap.textContent = "Invalid Email"
        yeap.style.color = "red"
        yeap.style.paddingTop = "1rem"
        yeap.style.fontSize = "18px"
        yeap.style.fontWeight = "200"
        yeap.style.textAlign = "center"
    }
    // End of email only
}