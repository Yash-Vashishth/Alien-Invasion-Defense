// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
  
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.className = toast.className.replace('show', '');
    }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Check localStorage for existing signup data
    const storedSignupData = localStorage.getItem("signupData");
  
    // Debugging: Log the data retrieved from localStorage
    console.log("Retrieved data from localStorage:", storedSignupData);
  
    if (storedSignupData) {
      const formData = JSON.parse(storedSignupData);
  
      // Check if all fields exist in the stored data before populating
      if (formData.fullName && formData.email && formData.password) {
        document.getElementById("full-name").value = formData.fullName;
        document.getElementById("email").value = formData.email;
        document.getElementById("password").value = formData.password;
      } else {
        console.error("Some fields are missing in the stored data.");
      }
    } else {
      console.warn("No signup data found in localStorage.");
    }
  
    // Form submission handler
    document.getElementById("signup-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Capture form data
      const formData = {
        fullName: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
  
      // Store data in localStorage
      localStorage.setItem("signupData", JSON.stringify(formData));
  
      // Show success toast
      showToast('Signup successful! Redirecting...');
  
      // Clear form after signup
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
  
      // Redirect after delay
      setTimeout(function () {
        window.location.href = "../login/login.html";
      }, 1000);
    });
  
    // Password toggle visibility
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
  
    togglePassword.addEventListener('click', function () {
      // Toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
  
      // Toggle the eye icon
      if (type === 'password') {
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        </svg>`;
      } else {
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>`;
      }
    });
  });