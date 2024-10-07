const textbox = document.getElementById('textbox');

// Function to execute a random action
function randomAction() {
    const actions = [
        () => displayStoryPart(),
        () => document.body.style.backgroundColor = getRandomColor(),
        () => playRandomSound(),
        () => showRandomGif(),
        () => displayInteractiveParticles()
    ];

    const randomIndex = Math.floor(Math.random() * actions.length);
    actions[randomIndex]();
}

// Example actions
function displayStoryPart() {
    const storyParts = [
        "Once upon a time, in a far-off land...",
        "The mysterious door creaked open slowly...",
        "A gentle breeze carried whispers of adventure..."
    ];
    const randomStory = storyParts[Math.floor(Math.random() * storyParts.length)];
    alert(randomStory);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function playRandomSound() {
    const sounds = ['audio/sound1.mp3', 'audio/sound2.mp3', 'audio/sound3.mp3'];
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
}

function showRandomGif() {
    const gifs = ['images/gif1.gif', 'images/gif2.gif', 'images/gif3.gif'];
    const img = document.createElement('img');
    img.src = gifs[Math.floor(Math.random() * gifs.length)];
    document.body.appendChild(img);
}

function displayInteractiveParticles() {
    // Code to display particle effects using a library like particles.js
    // This can be implemented to show interactive particles on the screen
}

// Event listener for "Enter" key press
textbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        randomAction();
        textbox.value = ''; // Clear the textbox after pressing Enter
    }
});

textbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        randomAction();
        textbox.value = ''; // Clear the textbox after pressing Enter

        // Update score and track actions
        updateScore(10);
        trackAction();
    }
});
