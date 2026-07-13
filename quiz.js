let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerHTML =
    questions[currentQuestion].question;

  let options = "";
  questions[currentQuestion].options.forEach((option, index) => {
    options += `
      <label>
        <input type="radio" name="answer" value="${index}">
        ${option}
      </label><br><br>
    `;
  });

  document.getElementById("options").innerHTML = options;
}

document.getElementById("nextBtn").onclick = function () {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (selected) {
    if (parseInt(selected.value) === questions[currentQuestion].answer) {
      score++;
    }
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);
    window.location.href = "result.html";
  }
};

document.getElementById("prevBtn").onclick = function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

document.getElementById("submitBtn").onclick = function () {
  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);
  window.location.href = "result.html";
};

loadQuestion();
