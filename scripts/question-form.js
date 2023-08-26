

document.addEventListener('DOMContentLoaded',() => {

    let selectoption = document.getElementById("Choose")
    selectoption.addEventListener("click", optionvalue)
    let addoption = document.getElementById("addQuestionButton")
    addoption.addEventListener("click", addquestion)
    let logoutButton = document.getElementById("logs")
    logoutButton.addEventListener("click", logout)

    axios.get('https://quizattendace.onrender.com/api/quiz/read')
    .then(res => {
        res.data.forEach(quiz => {
            document.getElementById('quizSelector').innerHTML += `
                <option value=${quiz.id}>${quiz.title}</option>
            `
        });
    }).catch(console.log)

})

const optionvalue = () => {
    document.getElementById('option1').innerHTML = document.getElementById('Optionvalue1').value;   
    document.getElementById('option2').innerHTML = document.getElementById('Optionvalue2').value;   
    document.getElementById('option3').innerHTML = document.getElementById('Optionvalue3').value;   
    document.getElementById('option4').innerHTML = document.getElementById('Optionvalue4').value;       
}

       

const addquestion = () => {

        const question = document.getElementById('Question').value;
        const option1 = document.getElementById('Optionvalue1').value;
        const option2 =  document.getElementById('Optionvalue2').value;
        const option3 = document.getElementById('Optionvalue3').value;
        const option4 = document.getElementById('Optionvalue4').value; 
        const answer = document.getElementById('Choose').value;
        const quizId = document.getElementById('quizSelector').value;

    
        

    const newQuestion = {
        question,
        options: [option1, option2, option3, option4],
        answer,
        quizId
     };
          axios.post("https://quizattendace.onrender.com/api/ques/add", newQuestion)
                    .then(response => {
                        console.log(response);

                    })
                    // window.location.href="Login.html"
                }


    const logout = () => {
        localStorage.clear()
     window.location.href="Login.html"
                    
    };