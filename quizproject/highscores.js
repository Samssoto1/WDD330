const highScoresList = document.getElementById('highScoresList'); // Grab high score ul
const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // Grab saved localStorage highscores if it exists. Otherwise, -> empty array.

// Display the highscores
highScoresList.innerHTML = highScores.map(highScore => {
    return `<li class="high-score">${highScore.name} - ${highScore.score}</li>`;
});