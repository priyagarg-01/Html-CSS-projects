var timer = 10;
var score = 0;
var hitrun = 0;

function runTimer() {
    var interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(interval);
            document.querySelector(".pbottom").innerHTML = `<h2>GAME OVER<h2><br><h2>SCORE:${score}<h2>`
        }
    }, 1000);
}

function makeNewHit() {
    hitrun = Math.floor(Math.random() * 10)
    document.querySelector("#hitter").textContent = hitrun;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 176; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbottom").innerHTML = clutter;
}

document.querySelector(".pbottom").addEventListener("click", function (details) {
    if ("GO" == (details.target.textContent)){
        makeBubble();
        runTimer();
        makeNewHit();
    }
    if(hitrun === (Number(details.target.textContent))) {
        makeBubble();
        makeNewHit();
        increaseScore();
    }
});





