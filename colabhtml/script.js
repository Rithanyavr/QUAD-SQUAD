document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    window.login = function () {
        if (usernameInput.value === "username" && passwordInput.value === "password") {
            localStorage.setItem("isAuthenticated", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials!");
        }
    };

    if (window.location.pathname.includes("dashboard.html")) {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            window.location.href = "index.html";
        }
    }
});
// Function to save the document
