document.addEventListener("DOMContentLoaded",()=>{
    let htmlQuiz = document.getElementById('htmlQuiz');
    htmlQuiz.addEventListener('click',redirectToQuiz)

})

const redirectToQuiz = () =>{
    window.location.replace('quiz1.html');
}