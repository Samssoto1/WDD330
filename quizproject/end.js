const username = document.getElementById('username');
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [] //If = to null.... return empty array;

finalScore.innerText = mostRecentScore;




username.addEventListener('keyup', () =>{

    saveScoreBtn.disabled = !username.value; // Set button to disabled if no value in username input     (CHANGE THIS LATER)
})

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b)=>b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/index.html')

};