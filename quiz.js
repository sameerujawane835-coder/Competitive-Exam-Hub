let currentQuestion = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionEl.innerHTML = q.question;
    progress.innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;
    progressBar.max = questions.length;
    progressBar.value = currentQuestion + 1;

    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerHTML = option;
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.margin = "12px 0";

        if (answers[currentQuestion] === index) {
            btn.style.background = "#22c55e";
        }

        btn.onclick = () => {
            answers[currentQuestion] = index;
            loadQuestion();
        };

        optionsEl.appendChild(btn);
    });
}

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
};

prevBtn.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

submitBtn.onclick = () => {
    score = 0;

    answers.forEach((ans, i) => {
        if (ans === questions[i].answer) score++;
    });

    let percent = Math.round((score / questions.length) * 100);

    let rank = "C";

    if (percent >= 90) rank = "S+";
    else if (percent >= 80) rank = "A+";
    else if (percent >= 70) rank = "A";
    else if (percent >= 60) rank = "B";

  localStorage.setItem("score", score);
localStorage.setItem("total", questions.length);
window.location.href = "result.html";
};
loadQuestion();