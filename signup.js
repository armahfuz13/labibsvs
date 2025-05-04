document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".form-container");
    const submitBtn = document.querySelector(".submit");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Clear previous errors
        document.querySelectorAll(".error").forEach(el => el.remove());

        if (!username || !email || !password) {
            showError("All fields are required!");
            return;
        }

        if (!validateEmail(email)) {
            showError("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            showError("Password must be at least 6 characters long.");
            return;
        }

        alert("✅ Signup successful! Welcome to Labib's Video Store 🎉");
    });

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function showError(message) {
        let errorMsg = document.createElement("p");
        errorMsg.className = "error";
        errorMsg.style.color = "red";
        errorMsg.innerText = message;
        formContainer.appendChild(errorMsg);
    }
});
