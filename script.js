const countDownDate = new Date("Jun 6, 2026 06:00:00").getTime();

function pad(n) {
    return n < 10 ? "0" + n : n;
}

const timerFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

    if (distance < 0) {
        clearInterval(timerFunction);
        document.getElementById("timer").innerHTML = "NOW PLAYING";
        document.querySelector(".target-date").style.display = "none";
    }
}, 1000);

function toggleTeksti() {
    var textElement = document.getElementById("teksti");
    var btnElement = document.getElementById("mainBtn");

    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block";
        btnElement.innerHTML = "Katso vähemmän";
        btnElement.style.borderColor = "#8b0000";
        btnElement.style.color = "#8b0000";
    } else {
        textElement.style.display = "none";
        btnElement.innerHTML = "KATSO LISÄÄ";
        btnElement.style.borderColor = "#dcdcdc";
        btnElement.style.color = "#dcdcdc";
    }
}

function toggleMenu() {
    var sidebar = document.getElementById("mySidebar");
    var burger = document.querySelector(".burger-icon");
    sidebar.classList.toggle("active");
    burger.classList.toggle("open");
}
