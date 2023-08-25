const questions = [
    {
        'que': 'which of the following is the markup language',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'php',
        'correct':'a'
    },
    {
        'que': 'Hypertext Markup Language is also Known as',
        'a':'php',
        'b':'CSS',
        'c':'Javascript',
        'd':'None of these',
        'correct':'d'
    },
    {
        'que': 'Cascading style sheet is also known as',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'None of these',
        'correct':'b'
    }
]
 
let index = 0;
let correct = 0;
let wrong = 0;
let total = questions.length;
const startingMinutes = 0;
let time = 10;
let countdownElement;

const quebox = document.getElementById("quebox");
const optionInp = document.querySelectorAll('.options');
const innerend = document.getElementById("inner") ;
const countElement = document.getElementById("timer");

const loadQuestion = () => {
    if(index == total)
    {
        end();
    }else
    reset();
    
    const data = questions[index]
    console.log(data)
    quebox.innerHTML = `${index+1})${data.que}`;
    optionInp[0].nextElementSibling.innerHTML = data.a;
    optionInp[1].nextElementSibling.innerHTML = data.b;
    optionInp[2].nextElementSibling.innerHTML = data.c;
    optionInp[3].nextElementSibling.innerHTML = data.d;
    

  }

 const submitQuiz = () =>{
    
   time = 10;
    document.getElementById('btnPrevious').style.display = 'block';
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct)
    {
        correct++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion(); 
    return;
  }

  
  const getAnswer = () => {
    let answer;
    optionInp.forEach (
        (input) => {
            if(input.checked){
            answer = input.value;
            }
        })
        return answer;
  }


  const previous = () =>{
    if(index > 0)
    {
        index--;
    }
    if(index === 0){
        document.getElementById('btnPrevious').style.display = 'none';

    }
    loadQuestion();
    return;
}

  const reset = () =>{
    optionInp.forEach (
        (input) => {
            input.checked = false;
        })
    
  }


  const end = () =>{
    clearInterval(countdownElement);
    alert("Are you want to submit the quiz")
innerend.innerHTML = `
<h1>Congratulation for completing this quiz</h1>
<h2>your score is ${correct} out of ${total}</h2>`

  }
countdownElement = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countElement.innerHTML = `${0}${minutes}:${seconds}`;
    if (time > 0) {
        time--;
    } else {
       
        submitQuiz(); // Submit the quiz when time is up
    }
}


  loadQuestion();