document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.getElementById('resetButton');
    
    resetButton.addEventListener('click', function () {
        updatePageOpenTime();
    });

    function updatePageOpenTime() {
        localStorage.pageOpenTime = new Date().getTime();
        alert("Page open time updated to the current time.");
    }

    const savedPageOpenTime = localStorage.pageOpenTime; 
    const countDownDate = new Date("2023-11-28T00:00:00").getTime();
    const pageLoadTime = savedPageOpenTime ? parseInt(savedPageOpenTime) : new Date().getTime();
    localStorage.pageOpenTime = new Date().getTime();

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const elapsedTime = now - pageLoadTime;
        const remainingTime = countDownDate - now;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

        // Corrected progress bar calculation
        const progress = (elapsedTime / (countDownDate - pageLoadTime)) * 100;
        document.getElementById("progress-bar").style.width = progress >= 100 ? "100%" : `${progress}%`;

        if (remainingTime < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Happy Birthday!";
            document.getElementById("progress-bar").style.width = "100%";
        }
    }, 100);
});
