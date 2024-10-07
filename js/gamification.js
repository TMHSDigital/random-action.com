let score = 0;
let level = 1;
let actionsPerformed = 0;

// Function to update score
function updateScore(points) {
    score += points;
    document.getElementById('score-display').innerText = 'Score: ' + score;

    // Level up every 50 points
    if (score >= level * 50) {
        levelUp();
    }
}

// Function to handle leveling up
function levelUp() {
    level++;
    document.getElementById('level-display').innerText = 'Level: ' + level;
    alert('Congratulations! You have reached Level ' + level + '!');
}

// Function to track actions performed and reward achievements
function trackAction() {
    actionsPerformed++;

    // Reward achievements at certain milestones
    if (actionsPerformed === 10) {
        awardAchievement('First 10 Actions Completed!');
    } else if (actionsPerformed === 50) {
        awardAchievement('Action Master: 50 Actions Completed!');
    } else if (actionsPerformed === 100) {
        awardAchievement('Action Legend: 100 Actions Completed!');
    }
}

// Function to display achievements
function awardAchievement(achievement) {
    const achievementElement = document.createElement('div');
    achievementElement.className = 'achievement';
    achievementElement.innerText = 'Achievement Unlocked: ' + achievement;
    document.body.appendChild(achievementElement);

    // Remove achievement notification after 5 seconds
    setTimeout(() => {
        achievementElement.remove();
    }, 5000);
}
