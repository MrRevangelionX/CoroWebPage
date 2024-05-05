// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");

// Get the logout option
var logoutOption = document.getElementById("logoutOption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the login button, open the modal
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Example function to simulate user login
function simulateUserLogin() {
    // For demonstration purposes, assume user is logged in
    // You can replace this with your actual login logic
    logoutOption.style.display = "block"; // Show logout option
}

// Call this function when the user logs in
simulateUserLogin();
