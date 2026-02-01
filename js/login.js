// Predefined credentials
        const correctUsername = "7054033320";
        const correctPassword = "rani@2025";

        // Get modal elements
        const modal = document.getElementById("loginModal");
        const loginBtn = document.getElementById("loginBtn");
        const closeBtn = document.querySelector(".close");
        const loginForm = document.getElementById("loginForm");
        const errorMessage = document.getElementById("errorMessage");
        const passwordInput = document.getElementById("password");
        const showPasswordCheckbox = document.getElementById("showPassword");

        // Open the modal when clicking login button
        loginBtn.onclick = function() {
            modal.style.display = "block";
        };

        // Close the modal when clicking the close button
        closeBtn.onclick = function() {
            modal.style.display = "none";
            errorMessage.style.display = "none"; // Hide error message on close
        };

        // Close modal if user clicks outside the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                errorMessage.style.display = "none"; // Hide error message on close
            }
        };

        // Toggle password visibility
        showPasswordCheckbox.onclick = function() {
            passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
        };

        // Handle form submission
        loginForm.onsubmit = function(event) {
            event.preventDefault(); // Prevent page refresh

            // Get user input values
            const username = document.getElementById("username").value;
            const password = passwordInput.value;

            // Check if credentials are correct
            if (username === correctUsername && password === correctPassword) {
                window.location.href = "admin/e-Services/G-drive/IP$rAnI&lv3ih$6ki8$u7hJZIbubdlCCZ2bEDRnNMqbRzxVoloH8pWXLQOEsT3WfOvbn2gLVnxFLR=.html"; // Redirect to new page
            } else {
                errorMessage.style.display = "block"; // Show error message
            }
        };