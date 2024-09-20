import React from "react";

const chatHeader = () => {
  return (
    <div className="header mb-4 flex items-center justify-between w-full">
      <h2 className="text-xl ml-2 text-white font-navbar font-extrabold mt-2">AgneloAI</h2>
      <button id="newChatBtn" className="bg-[#f48323] p-2 rounded-2xl mt-3 mr-2 cursor-pointer text-lg text-white">
        + New Chat
      </button>
    </div>
  );
};

export default chatHeader;
