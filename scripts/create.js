
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myform");
    const submit = document.getElementById("submit");
    const usernameInput = document.getElementById("Name");
    const contactInput = document.getElementById("Contact");
    const mailInput = document.getElementById("Mail");
    const roleInput = document.getElementById("Role");
    const passwordInput = document.getElementById("Password");

    function areAllFieldsFilled() {
        return (
            usernameInput.value.trim() !== "" &&
            contactInput.value.trim() !== "" &&
            mailInput.value.trim() !== "" &&
            roleInput.value !== "select person type" &&
            passwordInput.value.trim() !== ""
        );
    }

    function toggleSubmitButton() {
        submit.disabled = !areAllFieldsFilled();

        if (submit.disabled) {
            submit.style.opacity = 0.5;
            submit.value = "Submit";
        } else {
            submit.style.opacity = 1;
            submit.value = "Submit";
        }
    }

    toggleSubmitButton();

    usernameInput.addEventListener("input", toggleSubmitButton);
    contactInput.addEventListener("input", toggleSubmitButton);
    mailInput.addEventListener("input", toggleSubmitButton);
    roleInput.addEventListener("change", toggleSubmitButton);
    passwordInput.addEventListener("input", toggleSubmitButton);

    submit.addEventListener("click", register);
});

const register = (e) => {
    e.preventDefault();

    const submitButton = document.getElementById("submit");
    submitButton.value = "Submitting...";

    const Name = document.getElementById("Name").value;
    const contact = document.getElementById("Contact").value;
    const password = document.getElementById("Password").value;
    const role = document.getElementById("Role").value;
   

    axios
        .post("https://quizattendace.onrender.com/api/user/add", {
            Name,
            contact,
            password,
            role,
        })
        .then((res) => {
            console.log(res.data.user);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("finally is running");
            window.location.replace("Login.html");
            alert("You are Succesfully registered!");
        });
};

//document.getElementById("submit")= true;
