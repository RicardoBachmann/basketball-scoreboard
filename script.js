// Variables

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
let resetGuestScore = document.getElementById("reset-guest-score");


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



// Button Function - Guest

guestScoreBtnOne.addEventListener("click", function() {
    guestScoreEl.textContent ++;
});

guestScoreBtnTwo.addEventListener("click", function() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
}); 

guestScoreBtnThree.addEventListener("click", function() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

resetGuestScore.addEventListener("click", function() {
    guestScoreEl.textContent = 0;
})