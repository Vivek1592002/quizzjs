document.addEventListener("DOMContentLoaded", ()=>{
    let submitButton = document.getElementById("submit")
    submitButton.addEventListener("click", register)
})
const register = (e) => {
    e.preventDefault()
    
    const contact = document.getElementById("Contact").value
    const password = document.getElementById("Password").value
   

    axios.post("https://server-api1-li2k.onrender.com/api/user/login",{contact,password
    }).then(res=> {console.log(res.data)
        if(res.data.role==='student'){
            window.location.replace("Student.html")
        }
        else{
            window.location.replace("Faculty.html")
        }
    })
    .catch(err=> {console.log(err)})
    .finally(() =>{
        console.log("finally is running")
        
    })
    

}