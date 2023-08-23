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
