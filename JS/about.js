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

document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const parent = this.parentElement;

            // Close all other open items
            document.querySelectorAll(".accordion-item").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                }
            });
            
            // Toggle the clicked item
            parent.classList.toggle("active");
        });
    });
});