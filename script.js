let flashcards = [
    {
        question: "What is Python?",
        answer: "Python is a popular programming language."
    }
];

let currentIndex = 0;
let showingAnswer = false;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const counterElement = document.getElementById("counter");

const showAnswerButton = document.getElementById("showAnswer");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

function displayCard() {
    const card = flashcards[currentIndex];

    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;

    if (showingAnswer) {
        answerElement.classList.remove("hidden");
        showAnswerButton.textContent = "Hide Answer";
    } else {
        answerElement.classList.add("hidden");
        showAnswerButton.textContent = "Show Answer";
    }

    counterElement.textContent =
        (currentIndex + 1) + " / " + flashcards.length;
}

showAnswerButton.addEventListener("click", function () {
    showingAnswer = !showingAnswer;
    displayCard();
});

nextButton.addEventListener("click", function () {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showingAnswer = false;
        displayCard();
    }
});

previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        showingAnswer = false;
        displayCard();
    }
});

displayCard();
const addButton = document.getElementById("add");

addButton.addEventListener("click", function () {
    const question = prompt("Enter your question:");
    const answer = prompt("Enter the answer:");

    if (question && answer) {
        flashcards.push({
            question: question,
            answer: answer
        });

        currentIndex = flashcards.length - 1;
        showingAnswer = false;
        displayCard();
    }
});
const editButton = document.getElementById("edit");

editButton.addEventListener("click", function () {
    const newQuestion = prompt(
        "Edit question:",
        flashcards[currentIndex].question
    );

    const newAnswer = prompt(
        "Edit answer:",
        flashcards[currentIndex].answer
    );

    if (newQuestion && newAnswer) {
        flashcards[currentIndex].question = newQuestion;
        flashcards[currentIndex].answer = newAnswer;

        showingAnswer = false;
        displayCard();
    }
});


const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function () {
    if (flashcards.length === 1) {
        alert("You must keep at least one flashcard.");
        return;
    }

    const confirmDelete = confirm("Are you sure you want to delete this flashcard?");

    if (confirmDelete) {
        flashcards.splice(currentIndex, 1);

        if (currentIndex >= flashcards.length) {
            currentIndex = flashcards.length - 1;
        }

        showingAnswer = false;
        displayCard();
    }
});