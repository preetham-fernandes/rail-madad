import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={msg.type}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
