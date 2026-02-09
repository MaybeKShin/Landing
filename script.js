const fortune = [
    "The best way to predict the future is to create it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "You are not a ghost.",
    "About time I got out of that damn cookie.",
    "Word to the wise: Don't play leapfrog with a unicorn.........",
    "When in doubt, let your instincts guide you.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You will have sex with your mother."
];

const quoteText = document.getElementById('quote');
const newQuoteButton = document.getElementById('cookie-button');

newQuoteButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * fortune.length);
    const randomFortune = fortune[randomIndex];
    quoteText.textContent = randomFortune;
});
