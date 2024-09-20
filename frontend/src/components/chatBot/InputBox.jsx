import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const InputBox = ({ message, setMessage, hitRequest }) => {
  return (
    <div className="inputBox h-[60px] rounded-[30px] flex items-center justify-between m-2 p-2 sm:p-3 xl:p-3 bg-white w-full">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        className="bg-transparent flex-1 ml-2 outline-none border-none"
        placeholder="Type here...."
        id="messageBox"
      />
      {message && (
        <i
          className="flex items-center bg-green-500 text-white p-2 rounded-full hover:bg-green-600 cursor-pointer"
          onClick={hitRequest}
        >
          <PaperAirplaneIcon className="h-6 w-7" />
        </i>
      )}
    </div>
  );
};

export default InputBox;
