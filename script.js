// Variables

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");

// Button Function - Home

homeScoreBtnOne.addEventListener("click", function() {
    homeScoreEl.textContent++;
});

homeScoreBtnTwo.addEventListener("click", function() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});

homeScoreBtnThree.addEventListener("click", function() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});


resetHomeScore.addEventListener("click", function() {
    homeScoreEl.textContent = 0;
})