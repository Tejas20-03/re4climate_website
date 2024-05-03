import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const qaPairs = {
    /* ... predefined Q&A pairs ... */
  };
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there, How can I help you today?", type: "incoming" },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: currentMessage,
        type: "outgoing",
      };
      const responseText = generateResponse(currentMessage);
      const newResponse = {
        id: messages.length + 2,
        text: responseText,
        type: "incoming",
      };
      setMessages([...messages, newMessage, newResponse]);
      setCurrentMessage("");
    }
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    return Object.keys(qaPairs).find((key) => lowerInput.includes(key))
      ? qaPairs[lowerInput]
      : "Sorry, I don't understand that. Can you try asking something else?";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="show-chatbot">
      <button
        className="chatbot-toggle"
        onClick={() => {
          toggleChatbot();
        }}
      >
        {isVisible ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">mode_comment</span>
        )}
      </button>
      {isVisible && (
        <div className="chatbot">
          <header>
            <h2>RE4Climate</h2>
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
          <div className="chat-input">
            <textarea
              placeholder="Enter a message..."
              required
              value={currentMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            ></textarea>
            <span className="material-symbols-outlined">send</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
