const socket = io();

document.getElementById('joinRoom').addEventListener('click', () => {
    const roomID = document.getElementById('roomID').value;
    if (roomID) {
        socket.emit('joinRoom', roomID);
        document.getElementById('chatBox').classList.remove('hidden');
    }
});

document.getElementById('sendMessage').addEventListener('click', () => {
    const roomID = document.getElementById('roomID').value;
    const message = document.getElementById('messageInput').value;
    if (message) {
        socket.emit('chatMessage', { roomID, message });
        document.getElementById('messageInput').value = '';
    }
});

socket.on('message', (message) => {
    const messageContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
});
