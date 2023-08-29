const quizContainer = document.getElementById('quizContainer');
const quizDisplay = document.getElementById('quizDisplay');


let quizes = [];
let selectedQuiz = null;
let questions = [];
let currentIdx = 0;
let selectedOption = null;


function fetchQuizzes() {
  axios.get('https://quizattendace.onrender.com/api/quiz/read')
    .then(response => {
      quizes = response.data;
      renderQuizzes();
    })
    .catch(error => console.error('Error fetching quizzes:', error));
}

function renderQuizzes() {
  quizContainer.innerHTML = '';
  quizes.forEach(quiz => {
    const button = document.createElement('button');
    button.className = 'Button';
    button.textContent = quiz.title;
    button.addEventListener('click', () => {
      selectedQuiz = quiz;
      fetchQuestions();
    });
    quizContainer.appendChild(button);
  });
}


function fetchQuestions() {
  axios.get(`https://quizattendace.onrender.com/api/quiz/read`)
    .then(response => {
      questions = selectedQuiz.ques;


      renderQuestion();
    })
    .catch(error => console.error('Error fetching questions:', error));
    
}

function renderQuestion() {
  quizDisplay.innerHTML = '';

  const questionDiv = document.createElement('div');
  questionDiv.className = 'Question';
  questionDiv.textContent = questions[currentIdx].ques;
  quizDisplay.appendChild(questionDiv);

  questions[currentIdx].ans.forEach((option, idx) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'options';
    input.value = option;
    input.addEventListener('change', () => {
      selectedOption = option;
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    quizDisplay.appendChild(label);
  });

  const nextButton = document.createElement('button');
  nextButton.className = 'Button';
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', () => {
    if (selectedOption !== null && currentIdx < questions.length - 1) {
      currentIdx++;
      selectedOption = null;
      renderQuestion();
    }
  });

  quizDisplay.appendChild(nextButton);
}


fetchQuizzes();
