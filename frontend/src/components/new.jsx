
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import "../App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";


const LeftColumn = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setisResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  let allMessages = [];

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    }
    else {
      alert("You must write somthing... !")
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;
    const genAI = new GoogleGenerativeAI("API_KEY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(msg);
    const newMessages = [
        ...messages,
        { 
            type: "userMsg", 
            text: msg 
        },
        { 
            type: "responseMsg", 
            text: result.response.text() 
        }
    ];
    setMessages(newMessages);   //Append new messages to the existing ones
    setisResponseScreen(true);
    setMessage("");
    console.log(result.response.text());
  }
  return (
    <div className="bg-white h-full">
        {
            isResponseScreen ?
                <div className="h-[74vh] bg-gray-200 text-[#75002b] flex flex-col justify-start p-4">
                    <div className="header mb-4 flex items center justify-between w-full">
                            <h2 className="text-xl font-navbar font-extrabold mt-2">ChatBot</h2>
                            <button id="newChatBtn" className="bg-[#f48323] p-2 rounded-2xl cursor-pointer text-lg text-white">+ New Chat</button>
                    </div>
                    <div className="messages">
                    {
                        messages?.map((msg, index) => {
                            return(
                                <div key={index} className={msg.type}>{msg.text}</div>
                            )
                        })
                    }
                        {/* <div className="userMsg">hi</div>
                        <div className="responseMsg">hi i am AI</div> */}
                    </div>
                </div>
            :
            <div className="h-[74vh] bg-gray-100 text-black flex items-center flex-col justify-center">
                <div className="bg-transparent font-navbar font-extrabold text-railMadadNavbar flex items-center">Welcome to Railmadad!</div>
            </div>
        }
      
      {/* ChatBot Footer */}
      <div className="bottom flex flex-row items-center bg-railMadadNavbar">
        {/* Input Container with Fixed Height */}
        <div className="inputBox h-[60px] rounded-[30px] flex items-center justify-between m-2 p-2 sm:p-3 xl:p-3 bg-white w-full">
          {/* Input Field */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="bg-transparent flex-1 ml-2 outline-none border-none"
            placeholder="Type here...."
            id="messageBox"
          />

          {/* Send Icon */}
          {message && (
            <i
              className="flex items-center bg-green-500 text-white p-2 rounded-full hover:bg-green-600 cursor-pointer"
              onClick={hitRequest}
            >
              <PaperAirplaneIcon className="h-6 w-7" />
            </i>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
