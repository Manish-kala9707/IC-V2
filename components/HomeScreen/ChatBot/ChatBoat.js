import { useState, useEffect } from "react";

import "./ChatBoat.css";

import Modal from "react-bootstrap/Modal";

import ReactMarkdown from "react-markdown";

import bharti from "../../../image/HomepageLogo/ChatBoat/Ai-Chat-Bot-(inside-chat-bubble).webp";

import ICLogo from "../../../image/HomepageLogo/MenuBar/ICP-LOGO-V2-White-01.webp";

import send from "../../../image/HomepageLogo/ChatBoat/send_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [hasWelcomed, setHasWelcomed] = useState(false);

  const [threadId, setThreadId] = useState(0);

  useEffect(() => {
    const newId = Date.now(); // Unique ID based on time

    setThreadId(newId);

    fetch(`https://chatbot-o5zy.onrender.com/clear_memory?thread_id=${newId}`, {
      method: "GET",
    })
      .then(() => console.log(`Memory cleared for thread_id=${newId}`))

      .catch((err) => console.error("Error clearing memory:", err));
  }, []);

  const handleSend = async (customInput = null) => {
    const query = customInput || input.trim();

    if (!query) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", text: query },
    ]);

    setInput("");

    setLoading(true);

    try {
      const response = await fetch("https://chatbot-o5zy.onrender.com/chat", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ query, thread_id: threadId }),
      });

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", text: data.answer },
      ]);

      setData(data);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearMemory = async () => {
    try {
      await fetch(
        `https://chatbot-o5zy.onrender.com/clear_memory?thread_id=${threadId}`,
        {
          method: "GET",
        }
      );

      console.log(`Memory cleared for thread_id=${threadId}`);
    } catch (error) {
      console.error("Error clearing memory:", error);
    }

    setMessages([]);

    setHasWelcomed(false);
  };

  const chatbot = () => {
    setShowModal(true);

    if (!hasWelcomed) {
      setHasWelcomed(true);

      setTimeout(() => handleSend("hey"), 150);
    }
  };

  return (
    <>
      <div onClick={chatbot} className="chatbot">
        <img className="chatbot-avatar" src={bharti} alt="Open Chatbot" />
      </div>

      <Modal show={showModal} dialogClassName="chatbot-modal" centered>
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="header-left">
              <img src={ICLogo} alt="ICP Logo" className="icp-logo" />
            </div>
            <div className="header-right">
              <button onClick={handleClearMemory} className="clear-button">
                Clear Chat
              </button>
              <button
                className="close-button"
                onClick={() => {
                  setShowModal(false);

                  setHasWelcomed(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    width="24.8061"
                    height="3.30748"
                    rx="1.65374"
                    transform="matrix(0.702788 0.7114 -0.702788 0.7114 2.32373 0)"
                    fill="white"
                  />
                  <rect
                    width="24.8061"
                    height="3.30748"
                    rx="1.65374"
                    transform="matrix(-0.702788 0.7114 -0.702788 -0.7114 19.9995 2.35254)"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="chat-box">
            <div className="messages">
              {messages.map((msg, index) =>
                msg.role === "user" ? (
                  <div key={index} className="message user">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  <div key={index} className="assistant-wrapper">
                    <img
                      src={bharti}
                      alt="Bharti"
                      className="bharti-avatar-side"
                    />
                    <div className="message assistant">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                )
              )}

              {loading && (
                <div className="message assistant loading">
                  <em>Bharti is thinking...</em>
                  <div className="spinner"></div>
                </div>
              )}
            </div>

            <div className="input-container">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Type your query here..."
                className="chat-input"
              />
              <button onClick={() => handleSend()} className="send-button">
                <img src={send} alt="Send" className="send-icon" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
