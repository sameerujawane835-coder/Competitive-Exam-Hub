let currentQuestion = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = (currentQuestion + 1) + ". " + q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.style.display = "block";
        btn.style.margin = "10px auto";
        btn.style.padding = "10px";
        btn.style.width = "80%";

        if (answers[currentQuestion] === index) {
            btn.style.background = "#4CAF50";
            btn.style.color = "white";
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

    alert(
        `Quiz Complete!\n\nScore: ${score}/${questions.length}`
    );
};

loadQuestion();