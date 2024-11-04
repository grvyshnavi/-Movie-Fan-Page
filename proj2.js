const quotes = [
    "May the Force be with you.",
    "With great power comes great responsibility.",
    "Why so serious?",
    "I am Iron Man.",
    "I solemnly swear that I am up to no good."
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for participating! Your answers have been submitted.");
});
