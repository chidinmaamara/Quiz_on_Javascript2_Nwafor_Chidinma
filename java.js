    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message');
    const sender1 = 'Sender 1';
    const sender2 = 'Sender 2';

    function displayMessage(sender, message) {
      const messageElement = document.createElement('p');
      messageElement.textContent = `${sender}: ${message}`;
      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function sendMessage() {
      const message = messageInput.value.trim();
      if (message === '') return;


      const currentSender = localStorage.getItem('currentSender') === sender1 ? sender2 : sender1;


      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.push({ sender: currentSender, message });
      localStorage.setItem('messages', JSON.stringify(messages));


      localStorage.setItem('currentSender', currentSender);

      displayMessage(currentSender, message);

      messageInput.value = '';
    }

    function displayStoredMessages() {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.forEach(({ sender, message }) => {
        displayMessage(sender, message);
      });
    }

    displayStoredMessages();

