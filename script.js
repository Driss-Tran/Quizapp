const quizData = [
    {
        question : 'Phát bao nhiêu tuổi nè?',
        a: '18',
        b: '19',
        c: '20',
        d: '25',
        correct: 'b',
    },
    {
        question: 'Phát học ngành gì nè?',
        a: 'Kế toán',
        b: 'Kĩ thuật hóa học',
        c: 'Công nghệ thông tin',
        d: 'Quản trị kinh doanh',
        correct: 'c'
    },
    {
        question: 'Phát thích chơi môn thể thao nào nhất ?',
        a:'Bơi lội',
        b:'Bóng bàn',
        c:'Cầu lông',
        d:'Bóng rổ',
        correct: 'd'
    },
    {
        question: 'Người yêu cũ gần đây nhất là ai nè (này trả lời giữ kín nhoa)?',
        a:'Nhã Linh',
        b:'Anh Thy',
        c:'Mỹ Anh',
        d:'Không phải những bạn kể trên',
        correct: 'a',
    },
    {
        question: 'Phát đang học trường nào nè ?',
        a:'Công nghệ thông tin - ĐH Quốc Gia',
        b:'Đại Học Kinh Tế',
        c:'Đại Học Văn Lang',
        d:'Đại học Tôn Đức Thắng',
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
            if(score<quizData.length)
            {
                quiz.innerHTML = `<h2>Bạn iu đã trả lời đúng được ${score}/${quizData.length} câu hỏi. Tuy không được trọn điểm 
                nhưng chúng ta có thể tìm hiểu thêm mà đúng hông nè. Bạn có thể làm lại cũng được nè </h2>
                <button onclick = "location.reload()">Reload</button>
                `
            }
            else if(score==quizData.length)
            {
                quiz.innerHTML = `<h2>Bạn iu đã trả lời đúng được ${score}/${quizData.length} câu hỏi nè. Quá hiểu tui lun
                xứng đáng làm người yêu tui . <3 </h2>`
            }

        }
    }


})