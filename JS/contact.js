image.addEventListener("click", ScrollUp)
function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}

function signUp() {
    location.href = "../HTML/signup.html"
}

function signIn() {
    location.href = "../HTML/login.html"
}

function ScrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });   
}

function chatMe() {
    location.href = "web.whatsapp.com"
}