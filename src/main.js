const ADVICE = document.getElementById("quote-box");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => ADVICE.innerHTML = `
    <h1> Advice #${data.slip.id}</h1>
    <p>"${data.slip.advice}"
    `);
};

getAdvice();

