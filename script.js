const messages = [
    "I love you more than words can express.",
    "I love you more than a kid loves candy on Children's Day.",
    "Remember, babe, how we used to dream as children? On this International Children's Day, let's promise to keep our dreams alive and chase them together.",
    "You are my sunshine, my only sunshine.",
    "I am so lucky to have you in my life."
];

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

let currentMessageIndex = 0;

const messageContainer = document.getElementById('messageContainer');
const messageElement = document.getElementById('message');
const messageImage = document.getElementById('messageImage');
const nextButton = document.getElementById('nextButton');
const finalQuestion = document.getElementById('finalQuestion');
const yesButton = document.getElementById('yesButton');
const countdown = document.getElementById('countdown');
const countElement = document.getElementById('count');
const ticketImage = document.getElementById('ticketImage');

nextButton.addEventListener('click', () => {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
        messageElement.textContent = messages[currentMessageIndex];
        messageImage.src = images[currentMessageIndex];
    } else {
        nextButton.classList.add('hidden');
        // messageImage.classList.add('hidden');
        finalQuestion.classList.remove('hidden');
    }
});

yesButton.addEventListener('click', () => {
    let count = 5;

    countElement.textContent = count;
    countdown.classList.remove('hidden');

    const intervalId = setInterval(() => {
        count--;
        countElement.textContent = count;

        if (count === 0) {
            clearInterval(intervalId);
            countdown.classList.add('hidden');
            messageImage.src = 'movie-ticket.jpg';
            messageImage.classList.remove('hidden');
        }
    }, 1000);

    yesButton.classList.add('hidden'); // Add this line
    noButton.classList.add('hidden'); // Add this line

});

const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
    alert("I know you're joking, you will click Yes");
});