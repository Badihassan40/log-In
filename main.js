var loaderWrapper = document.getElementById("loader-wrapper");
var inputContainer = document.getElementById("formContainer");
var userName = document.getElementById("userName");
inputContainer.style.display = "none";

function loader() {
    loaderWrapper.style.display = "none";
    inputContainer.style.display = "block";
};

setTimeout("loader()", 3000);

function msg() {
    if (userName.value == "") {
        alert("Please Write Your Name");
        return false
    }
    window.open("https://catalog-of-watches.netlify.app/")
};