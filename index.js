function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.getElementById("chatIcon");
  const chatContainer = document.getElementById("chatContainer");
  const closeChat = document.getElementById("closeChat");
  const chatWindow = document.getElementById("chatWindow");
  const userInput = document.getElementById("userMessage");
  const sendButton = document.getElementById("sendMessage");

  const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
  const OPENAI_API_KEY = "PASTE YOUR API KEY HERE AND DO NOT COMMIT IT";

  // Function to toggle chat visibility
  function toggleChat() {
    chatContainer.classList.toggle("active");

    // Show initial response when chat opens
    if (chatContainer.classList.contains("active")) {
      chatIcon.style.display = "none";
      if (!chatWindow.dataset.initialized) {
        addMessage(
          "bot",
          "Welcome to FRAM! Ask me about farm produce, delivery services, or sustainability practices."
        );
        chatWindow.dataset.initialized = true;
      }
      chatWindow.scrollTop = chatWindow.scrollHeight;
    } else {
      chatIcon.style.display = "flex";
    }
  }

  // Event Listeners for opening and closing chat
  chatIcon.addEventListener("click", toggleChat);
  closeChat.addEventListener("click", toggleChat);

  // Helper to Add Messages
  function addMessage(sender, text) {
    const messageBubble = document.createElement("div");
    messageBubble.className = `chat-bubble ${sender}`;
    messageBubble.textContent = text;
    chatWindow.appendChild(messageBubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Typing Indicator
  function showTypingIndicator() {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "chat-bubble bot typing";
    typingIndicator.textContent = "...";
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return typingIndicator;
  }

  // Remove Typing Indicator
  function removeTypingIndicator(indicator) {
    indicator.remove();
  }

  // Error Message
  function showError(message) {
    const errorBubble = document.createElement("div");
    errorBubble.className = "chat-bubble bot error";
    errorBubble.textContent = message;
    chatWindow.appendChild(errorBubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Fetch Chatbot Response from OpenAI API
  async function getChatResponse(userMessage) {
    const requestBody = {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for the FRAM website. Only answer questions about farm produce, delivery services, and sustainability practices. If a question is unrelated, politely decline to answer.",
        },
        { role: "user", content: userMessage },
      ],
      max_tokens: 150,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      throw new Error("Failed to fetch chatbot response.");
    }
  }

  async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage("user", userMessage);
    userInput.value = "";

    const typingIndicator = showTypingIndicator();

    try {
      const botMessage = await getChatResponse(userMessage);

      removeTypingIndicator(typingIndicator);

      addMessage("bot", botMessage);
    } catch (error) {
      removeTypingIndicator(typingIndicator);

      showError("Failed to connect. Wait and try again later.");
    }
  }

  // Event Listeners for Sending Messages
  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendMessage();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cartCountElement = document.querySelector(".cart-count");
  let cartCount = 0;

  function updateCartCount() {
    cartCountElement.textContent = cartCount;
  }

  const addToBasketButtons = document.querySelectorAll(".add-to-basket");
  addToBasketButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      updateCartCount();

      button.textContent = "Added!";
      setTimeout(() => {
        button.textContent = "Add to basket";
      }, 1000);
    });
  });
});

/* Google maps code I did not use

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
*/
