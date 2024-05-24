// Function to send a message in the chat room
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatbox = document.getElementById('chatbox');
    const message = chatInput.value.trim();

    if (message !== '') {
        chatbox.innerHTML += `<div class="message">You: ${message}</div>`;
        chatInput.value = '';
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
    }
}

// Function to post a message on the message board
function postMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageBoard = document.createElement('div');
        messageBoard.classList.add('message-board-item');
        messageBoard.innerHTML = message;
        document.getElementById('message-board').appendChild(messageBoard);
        messageInput.value = '';
    }
}
