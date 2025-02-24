import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const chatRef = useRef(null);

  const quickResponses = [
    "Tell me about your services",
    "Book a consultation",
    "Pricing information",
    "Contact support"
  ];

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputText }]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Thanks for your message! Our team will get back to you shortly." 
      }]);
    }, 1000);
  };

  const handleQuickResponse = (response) => {
    setMessages(prev => [...prev, { type: 'user', text: response }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: `I'll help you with ${response.toLowerCase()}.` 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className="chat-bot-trigger"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-comments"></i>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-bot-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="chat-header">
              <h3>Varest Assistant</h3>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>

            <div className="chat-messages" ref={chatRef}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`message ${msg.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            <div className="quick-responses">
              {quickResponses.map((response, index) => (
                <button 
                  key={index}
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </button>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDownCapture={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot; 