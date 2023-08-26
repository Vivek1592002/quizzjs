import { Quiz } from "./Quiz.js"
document.addEventListener("DOMContentLoaded", ()=>{
    let submitButton = document.getElementById("submit")
    submitButton.addEventListener("click", register)

    let addButton = document.getElementById("adds")
    addButton.addEventListener("click", add)

    let logoutButton = document.getElementById("logs")
    logoutButton.addEventListener("click", logout)
})
const register = (e) => {
    e.preventDefault()
let title = document.getElementById("Title").value
let description = document.getElementById("Description").value
const newQuiz = new Quiz(title,description)

axios.post("https://quizattendace.onrender.com/api/quiz/add", newQuiz)
        .then(response => {
            console.log(response)
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Add Quiz"
            e.target.disabled = false
            title=""
            description=""
            window.location.href="Question-form.html"
        })}
const add = () => {
    window.location.href="Question-form.html"
}

const logout = () => {
    localStorage.clear()
    window.location.href="Login.html"
    
  };