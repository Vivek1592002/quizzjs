// function checkForm () {
//  let nameInput = document.getElementById('Name');
//  let contactInput = document.getElementById('Contact');
//  let mailInput = document.getElementById('Mail');
//  let roleInput = document.getElementById('Role');
//  let passwordInput = document.getElementById('Password');
//  let submitInput = document.getElementById('submit');

 
//  if(nameInput.value === '' &&    contactInput.value === '' &&    mailInput.value === '' &&    roleInput.value === '' &&   passwordInput.value === '' )
//  {
//     submitInput.disabled = true;
//  } else{
//     submitInput.disabled = false;
//  }
// }




const form = document.getElementById("myform");
const submit = document.getElementById("submit");

form.addEventListener("input",() => {
    const inputs = form.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value){
            allFilled = false;
        }
    });
    submit.disabled = !allFilled;
})




document.addEventListener("DOMContentLoaded", ()=>{
    let submitButton = document.getElementById("submit")
    submitButton.addEventListener("click", register)
})
const register = (e) => {
    e.preventDefault()
   
const Name = document.getElementById("Name").value
const contact = document.getElementById("Contact").value
const password = document.getElementById("Password").value
const  role= document.getElementById("Role").value


axios.post("https://server-api1-li2k.onrender.com/api/user/add",{Name,contact,password,role
}).then(res=> {console.log(res.data);
})
.catch(err=> {console.log(err)})
.finally(() =>{
    console.log("finally is running");
    window.location.replace("Login.html")
})
}