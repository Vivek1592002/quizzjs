document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    const contactInput = document.getElementById("Contact");
    const passwordInput = document.getElementById("Password");

    function toggleSubmitButton() {
        const contactValue = contactInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        submitButton.disabled = contactValue === "" || passwordValue === "";

        if (submitButton.disabled) {
            submitButton.style.opacity = 0.5;
            submitButton.value = "Login";
        } else {
            submitButton.style.opacity = 1;
            submitButton.value = "Login";
        }
    }

    submitButton.onclick = function () {
        location.href = "quiz1.html";
    };
    toggleSubmitButton();

    contactInput.addEventListener("input", toggleSubmitButton);
    passwordInput.addEventListener("input", toggleSubmitButton);

    submitButton.addEventListener("click", login);
});



const login = (e) => {
    e.preventDefault();

    const submitButton = document.getElementById("submit");
    submitButton.value = "Logging in...";

    const contact = document.getElementById("Contact").value;
    const password = document.getElementById("Password").value;

    axios.post("https://quizattendace.onrender.com/api/user/login", { contact, password })
        .then((res) => {
            console.log(res.data);
            if (res.data.user.role === "student") {
                window.location.replace("Student.html");
            } else {
                window.location.replace("Faculty.html");
            }
            localStorage.setItem("loggedInuser",JSON.stringify(res.data.user))
            console.log(JSON.parse(localStorage.getItem("loggedInuser")).contact)
        
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("finally is running");
        });
};
