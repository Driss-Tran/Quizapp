const quizData = [
    {
        question : 'How old is Phat?',
        a: '18',
        b: '19',
        c: '20',
        d: '25',
        correct: 'b',
    },
    {
        question: 'What is the most used programming language in 2022?',
        a: 'Java',
        b: 'Javascript',
        c: 'Python',
        d: 'C',
        correct: 'c'
    },
    {
        question: 'where is the best place to live in the world ?',
        a:'Denmark',
        b:'VietNam',
        c:'Korea',
        d:'Canada',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Hyper Transfer Mark Length',
        d:'Another answer',
        correct: 'a',
    },
    {
        question: 'What year was Javascript launched ?',
        a:'1996',
        b:'1994',
        c:'1995',
        d:'None of the above',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const questionEl = document.getElementById('question')

const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const returnbtn = document.querySelector('.return');

let currentQuiz = 0;
let score = 0;


function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer =  answerEl.id;
        }
    });

    return answer;
  
}
function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


loadQuiz();

submitBtn.addEventListener('click',()=>{
    
    const answer = getSelected();
    //check to see the answer
    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
            submitBtn.style.display = "none";
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick = "location.reload()">Reload</button>`

        }
    }


})