import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const qaPairs = {
    hello: "Hello! How can I help you today?",
    "how are you": "I'm a bot, but thank you for asking! How can I assist you?",
    "what is your name":
      "I am RE4Climate Bot. What would you like to know more about?",
    "help me": "Sure, please tell me more about what you need help with.",
    "climate change":
      "Climate change refers to long-term shifts and alterations in temperatures and weather patterns...",
  };

  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there, How can I help you today?", type: "incoming" },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "Hello",
    "How are you?",
    "What is your name?",
    "Help me",
    "What is climate change?",
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const sendMessage = (messageText = currentMessage) => {
    if (messageText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: messageText,
        type: "outgoing",
      };
      const responseText = generateResponse(messageText);
      const newResponse = {
        id: messages.length + 2,
        text: responseText,
        type: "incoming",
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, newResponse]);
      setCurrentMessage("");
      updateSuggestions(messageText);
    }
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    const responseKey = Object.keys(qaPairs).find((key) =>
      lowerInput.includes(key)
    );
    return responseKey
      ? qaPairs[responseKey]
      : "Sorry, I don't understand that. Can you try asking something else?";
  };

  const updateSuggestions = (lastUserMessage) => {
    let newSuggestions = [];
    const messageLower = lastUserMessage.toLowerCase();

    if (messageLower.includes("hello")) {
      newSuggestions = [
        "Effects of climate change",
        "How to prevent climate change?",
        "Climate change policies",
      ];
    } else if (messageLower.includes("help")) {
      newSuggestions = [
        "Contact support",
        "Troubleshooting tips",
        "User guides",
      ];
    } else {
      newSuggestions = [
        "Hello",
        "How are you?",
        "What is your name?",
        "Help me",
        "What is climate change?",
      ];
    }

    setSuggestedQuestions(newSuggestions);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="show-chatbot">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <span className="material-symbols-outlined">
          {isVisible ? "close" : "mode_comment"}
        </span>
      </button>
      {isVisible && (
        <div className="chatbot">
          <header>
            <h2>RE4Climate Assistant</h2>
            <span className="material-symbols-outlined" onClick={toggleChatbot}>
              close
            </span>
          </header>
          <ul className="chatbox">
            {messages.map((message) => (
              <li key={message.id} className={`chat ${message.type}`}>
                <span className="material-symbols-outlined">smart_toy</span>
                <p>{message.text}</p>
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
          <div className="suggestions">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                className="suggestion-chip"
              >
                {question}
              </button>
            ))}
          </div>
          <div className="chat-input">
            <textarea
              placeholder="Enter a message..."
              required
              value={currentMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            ></textarea>
            <span
              className="material-symbols-outlined"
              onClick={() => sendMessage()}
            >
              send
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
