document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');
    const closeChat = document.getElementById('close-chat');
    const sendMessage = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');

    // Show/Hide Chat Box
    chatButton.addEventListener('click', function() {
        chatBox.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', function() {
        chatBox.classList.add('hidden');
    });

    // Send Message Functionality
    sendMessage.addEventListener('click', function() {
        const message = chatInput.value;
        if (message.trim() !== "") {
            const messageElement = document.createElement('p');
            messageElement.textContent = "You: " + message;
            chatContent.appendChild(messageElement);
            chatInput.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;

            setTimeout(function() {
                const botMessageElement = document.createElement('p');
                botMessageElement.textContent = "Bot: We'll get back to you soon!";
                chatContent.appendChild(botMessageElement);
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }
    });
});