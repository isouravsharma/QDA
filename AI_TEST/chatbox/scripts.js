// Show/Hide Chatbot
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'block';
});

// Close Chatbot
document.getElementById('closeChat').addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'none';
});

// Handle User Input and Bot Response
document.getElementById('send-message').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        // Display user message
        displayMessage('user', userInput);

        // Simulate AI bot response (could be replaced with actual API call)
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            displayMessage('bot', botResponse);
        }, 1000);
    }
    document.getElementById('user-input').value = '';
});

// Display message in chatbox
function displayMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender + '-message');
    messageContainer.innerHTML = `<p>${message}</p>`;
    document.getElementById('chatbox-body').appendChild(messageContainer);
    document.getElementById('chatbox-body').scrollTop = document.getElementById('chatbox-body').scrollHeight;
}

// Simple Bot Response Logic (can be replaced with more complex AI)
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('data') || lowerInput.includes('insights')) {
        return "I can help you analyze data and provide insightful reports. What do you need help with?";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else {
        return "Sorry, I didn’t quite understand that. Can you try asking something else?";
    }
}
