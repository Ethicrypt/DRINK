// Declare variables to track scores and task completion counts
let partner1Score = 0;
let partner2Score = 0;
let partner1Tasks = 0;
let partner2Tasks = 0;

// Store the names of the players
let partner1Name = "";
let partner2Name = "";

// Task history
const taskHistory = [];

// Task list (provided tasks)
const tasks = [
    "Guess your partner's celebrity crush – if wrong Drink",
    "Do a squat while your partner seduces you – or drink",
    "Wear your partner's underwear for 10 min or drink",
    "Tell your partner something you've never told before or drink",
    "Where do you see your relationship in 5 years? Or drink",
    "Drink if you said 'I love you' first",
    "Drink if you've ever stolen your partner's clothes",
    "Say your first impression of your partner or drink",
    "Guess your partner's clothes size or drink",
    "French kiss for 3 minutes or drink",
    "Last movie watched together or drink",
    "Something you have seen your partner do that you wish you could unsee or drink",
    "Tell your partner the thing you adore most about them or drink",
    "The next date is on you or drink",
    "Guess your partner's favorite movie or if wrong drink",
    "Tell your partner the most embarrassing thing you have done or drink",
    "Drink if you are a best kisser",
    "Drink if you are the laziest",
    "Drink if you are the biggest flirt - follow by your best pickup line",
    "Take off 1 item of clothing or drink",
    "Massage your partner's feet or drink",
    "Go to bathroom and send a naughty pic or drink twice",
    "Imitate your partner's moan or drink",
    "Seductively suck your partner's finger or drink",
    "Give your partner a lap dance or drink",
    "Put your hand down in your partner's underwear for 2 min or drink",
    "Do whatever your partner asks for 5 min or drink",
    "Tell your partner the sex thing you like the most or drink",
    "Lick your partner's feet for 1 min or drink",
    "Watch porn together or drink",
    "Guess your partner's best sex position or drink",
    "Pin your partner against the wall and make out or drink",
    "Flash your body for 10 sec or drink",
    "Lick whipped cream off your partner's nipple or drink",
    "Blindfold your partner and have them guess what part of your body they are licking or drink",
    "Drink if you are first to finish during sex",
    "Drink if you are the horniest"
];

// Start the game
function startGame() {
    // Get player names
    partner1Name = document.getElementById('partner1').value;
    partner2Name = document.getElementById('partner2').value;
    
    if (partner1Name && partner2Name) {
        document.getElementById('name-inputs').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        
        // Initialize the game with the first task
        showTask();
    } else {
        alert("Please enter both player names");
    }
}

// Show the next task
function showTask() {
    // Randomize task selection to ensure no repetition
    if (tasks.length > 0) {
        const taskIndex = Math.floor(Math.random() * tasks.length);
        const task = tasks.splice(taskIndex, 1)[0]; // Remove the selected task from the list
        
        // Display the task
        document.getElementById('task').textContent = task;
        
        // Record the task in history
        const currentPlayer = (partner1Tasks + partner2Tasks) % 2 === 0 ? partner1Name : partner2Name;
        taskHistory.push(`${currentPlayer}: ${task}`);
        
        updateHistory();
    } else {
        showScore(); // Show score when all tasks are completed
    }
}

// Task Done button clicked
function taskDone() {
    // Update the tasks completed count
    if ((partner1Tasks + partner2Tasks) % 2 === 0) {
        partner1Tasks++;
    } else {
        partner2Tasks++;
    }
    
    // Proceed to the next task
    showTask();
}

// Drink button clicked
function drink() {
    // Update the drink count
    if ((partner1Tasks + partner2Tasks) % 2 === 0) {
        partner1Score++;
    } else {
        partner2Score++;
    }
    
    // Proceed to the next task
    showTask();
}

// Update the task history
function updateHistory() {
    const historyList = document.getElementById('task-list');
    historyList.innerHTML = ''; // Clear previous history
    
    taskHistory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Show the final score
function showScore() {
    // Show the final score at the end of the game
    const resultMessage = `${partner1Name} completed ${partner1Tasks} tasks and drank ${partner1Score} times.\n` +
                          `${partner2Name} completed ${partner2Tasks} tasks and drank ${partner2Score} times.`;
    
    alert(resultMessage);
    document.getElementById('task').textContent = "Game Over! " + resultMessage;
    
    // Optionally, reset for a new game
    // Reset all variables to allow for a new game
    partner1Score = 0;
    partner2Score = 0;
    partner1Tasks = 0;
    partner2Tasks = 0;
    taskHistory.length = 0;
    tasks.length = 0;  // Refill tasks list here if you want to reuse it
}

