const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); //Creates an array of all items from class "choice-text"

const questionCounterText = document.getElementById('questionCounter'); // for HUD
const scoreText = document.getElementById('score'); // for HUD

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [1];
// Configurations //
const CORRECT_BONUS = 10; // Amount of points awarded per correct answer
const MAX_QUESTIONS = 15; // Configure to change amount of questions on quiz (up to 50 due to api limit)
// //

// APi CALL //
fetch('https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple')
    .then(res => {
        return res.json(); // Takes json and creates js object
    })
    .then(loadedQuestions => {
        //console.log(loadedQuestions.results);                     Shows what is returned from API
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1; // Randomize the location of the answer among the four choices (Randomizes for a selection of 4)
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice; // get each choice
            });
            return formattedQuestion
        });
        startGame();
    });
// //

// Start the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // take all of the questions provided and place in availableQuestions
    getNewQuestion();
};
//

// Code needed to run each question
getNewQuestion = () => {
    // If the list is empty or counter is greater than amount of questions: end
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score); // pass score of the quiz to localStorage in cause user wants to save
        return window.location.assign('./end.html'); // redirect user to the end screen
    }


    questionCounter++; // Increase question counter by 1
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}` // Update HUD number of questions

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // Randomizes what question we are on from the provided list of questions
    currentQuestion = availableQuestions[questionIndex] // Determines which question we're on
    question.innerHTML = currentQuestion.question; // Changes the name of the question (h2)

    // Assigns proper choices for each question
    choices.forEach(choice => {
        const number = choice.dataset['number']; // access data-number
        choice.innerHTML = currentQuestion['choice' + number]; // replace default innerHTML with the number associated 'choice'
    });
    availableQuestions.splice(questionIndex, 1); // cut out one element (whatever the questionIndex is equal to) from the availableQuestions array

    acceptingAnswers = true; // Now allowed to accept answers (set to true)

};
//

// Add click event listeners to each choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target; // grab element thats clicked
        const selectedAnswer = selectedChoice.dataset["number"]; // grab number of choice thats clicked 

        const classToApply = (selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'); // if selected = question answer -> correct, otherwise incorrect

        // Increase score if correct
        if (classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        else { 
            // If incorrect, target the correct option and add the correct class to it. (Display correct answer for user friendliness)
            document.querySelector(`[data-number='${currentQuestion.answer}']`).parentElement.classList.add('correct');
        }

        // TARGET USER CHOSEN CHOICE BOX (Give the selected option g/r correct/incorrect css class)
        selectedChoice.parentElement.classList.add(classToApply); // adds the correct or incorrect CSS class to the choice (red or green)


        // allows the user the opportunity to see the styled class before calling the new question (1000ms)
        setTimeout(() => {
            // Get rid of all correct / incorrect css classes before the next question.
            selectedChoice.parentElement.classList.remove(classToApply);
            document.querySelector(`[data-number='${currentQuestion.answer}']`).parentElement.classList.remove('correct');

            getNewQuestion(); // Call for the next question upon click
        }, 1000);
    })
});
//


function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

//Main
//startGame();