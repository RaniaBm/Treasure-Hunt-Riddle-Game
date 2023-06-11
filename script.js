let round = 1;
let counter = 60;
let timer;

function toggleItems() {
    document.getElementById("start").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("description").style.display = "none";

    document.getElementById("round").textContent = "ROUND 1";
    document.getElementById("question").textContent = "I am tall when I am young and short when I am old. What am I?";
    document.getElementById("ans").value = "";
    document.getElementById("form").style.display = "block";
    document.getElementById("msgs").style.color = 'red';
}

function startTimer() {
    toggleItems();
    timer = setInterval(() => {
        document.getElementById("time").textContent = `Time remaining: ${counter} seconds`;
        counter--;

        if (counter < 0) {
            clearInterval(timer);
            window.location.href = "timeOut.html";
        }
    }, 1000);
}

function formValidation() {

    const answer = document.getElementById("ans").value.trim();

    if (answer === "") {
        document.getElementById("msgs").textContent = "Please enter an answer.";
    } else {
        if (round === 1) {
            if (answer.toLowerCase() === "a candle") {
                document.getElementById("msgs").style.display = 'none';
                round++;
                document.getElementById("round").textContent = "ROUND 2";
                document.getElementById("question").textContent = "I have rivers but no water, I have cities but no people. What am I?";
                document.getElementById("ans").value = "";
            } else {
                document.getElementById("msgs").textContent = "Invalid answer. Try again.";
            }
        } else if (round === 2) {
            if (answer.toLowerCase() === "a map") {
                round++;
                document.getElementById("msgs").style.display = 'none';
                document.getElementById("round").textContent = "ROUND 3";
                document.getElementById("question").textContent = "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?";
                document.getElementById("ans").value = "";
            } else {
                document.getElementById("msgs").style.display = 'block';
                document.getElementById("msgs").style.marginLeft = '578px';
                document.getElementById("msgs").textContent = "Invalid answer. Try again.";
            }
        } else if (round === 3) {
            if (answer.toLowerCase() === "an echo") {
                document.getElementById("msgs").style.display = 'none';
                clearInterval(timer);
                window.location.href = "win.html";
            } else {
                document.getElementById("msgs").style.display = 'block';
                document.getElementById("msgs").textContent = "Invalid answer. Try again.";
            }
        }
    }

    return false;
}
