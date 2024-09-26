import React, { useState, useRef } from "react";
import { Train, ArrowRight, Bot, User, Image as ImageIcon, Send } from "lucide-react";
import axios from "axios";
import { AiOutlineFileText, AiOutlineAudio, AiOutlinePicture } from "react-icons/ai";

export default function LeftColumn() {
  const [messages, setMessages] = useState([
    { content: "How can I help you?", sender: "bot" },
  ]);  
  const [complaintStep, setComplaintStep] = useState("initial");
  const [pnrNumber, setPnrNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [mobileNumberSubmitted, setMobileNumberSubmitted] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const addMessage = (content, sender, type = "text") => {
    setMessages((prev) => [...prev, { content, sender, type }]);
  };  

  const handleRaiseComplaint = () => {
    addMessage("Raise Complaint", "user");
    setComplaintStep("raise");
    addMessage("Are you onboard or offboard?", "bot");
  };

  const handleOnboard = () => {
    addMessage("Onboard", "user");
    setComplaintStep("onboard");
    addMessage("Please enter your PNR number", "bot");
  };

  const handleOffboard = () => {
    addMessage("Offboard", "user");
    setComplaintStep("offboard");
    addMessage("Please enter your mobile number", "bot");
  };

  const handlePnrSubmit = () => {
    addMessage(`PNR Number: ${pnrNumber}`, "user");
    console.log("PNR Number:", pnrNumber);
    setComplaintStep("complaintType");
    addMessage("How would you like to raise your complaint?", "bot");
  };

  const handleMobileNumberSubmit = () => {
    addMessage(`Mobile Number: ${mobileNumber}`, "user");
    setMobileNumberSubmitted(true);
    addMessage("Please enter the OTP sent to your mobile", "bot");
  };

  const handleOtpSubmit = () => {
    addMessage(`OTP: ${otp}`, "user");
    console.log("Mobile Number:", mobileNumber);
    console.log("OTP:", otp);
    setComplaintStep("complaintType");
    addMessage("How would you like to raise your complaint?", "bot");
  };

  const handleImageUpload = () => {
    addMessage("Image", "user");
    setComplaintStep("imageUpload");
    addMessage("Please upload an image for your complaint", "bot");
  };

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
  
      const reader = new FileReader();
      reader.onload = (e) => {
        // Add the image as a new message with type "image"
        addMessage(e.target.result, "user", "image");
      };
      reader.readAsDataURL(selectedFile);
  
      // Add a message indicating image selection
      addMessage(`Image selected: ${selectedFile.name}`, "user");
    }
  };
  
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload_image/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Append response message
      addMessage(response.data.message, "bot");
      // setUploadedImageUrl(response.data.image_url);
      setFile(null); // Reset file after upload

      // Show thank you message after the response
      addMessage(
        "Thank you for submitting your complaint. We will process it shortly.",
        "bot"
      );
      setComplaintStep("initial");
      //setUploadedImage(null); // Reset the image preview
    } catch (error) {
      console.error("Error uploading file", error);
      addMessage("Error uploading image. Please try again.", "bot");
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     // Validate file type (only images allowed)
  //     if (!file.type.startsWith("image/")) {
  //       alert("Please upload a valid image file");
  //       return;
  //     }

  //     // Create a preview of the uploaded image
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setUploadedImage(e.target.result); // Set preview URL
  //     };
  //     reader.readAsDataURL(file);

  //     // Log file information or process further
  //     console.log("Uploaded file:", file.name);
  //     addMessage(`Image uploaded: ${file.name}`, "user");
  //     addMessage(
  //       "Thank you for submitting your complaint. We will process it shortly.",
  //       "bot"
  //     );
  //     setComplaintStep("initial");
  //   }
  // };

  const handleNonFunctionalButton = (buttonType) => {
    addMessage(buttonType, "user");
    addMessage("This feature is not available at the moment.", "bot");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#8c0035] text-white flex p-4">
        <h1 className="text-xl font-bold ">Rail Madad </h1>
        <p className="text-xs pl-3 pt-2.5">– Your Personal Railway Assistant</p>
      </div>

      {/* Chat messages container */}
        <div className="h-[470px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
            >
            <div className={`flex items-start ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {message.sender === "bot" ? (
                <Bot className="w-6 h-6 mt-1 mr-2 text-[#8c0035]" />
              ) : (
                <User className="w-6 h-6 mt-1 ml-2 text-green-600" />
              )}
              <div
                className={`rounded-lg p-2 text-lg break-words whitespace-pre-wrap max-w-[80%] ${
                  message.sender === "user" ? "bg-green-100" : "bg-blue-100"
                }`}
              >
                {/* If the message type is image, render an img tag */}
                {message.type === "image" ? (
                  <img src={message.content} alt="Uploaded" className="w-auto h-auto" />
                ) : (
                  message.content // Display text content for normal messages
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section with buttons and inputs */}
      <div className="p-4 border-t">
        {complaintStep === "initial" && (
          <div className="flex space-x-2 mb-4 justify-center">
            <button
              onClick={handleRaiseComplaint}
              className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b]"
            >
              Raise Complaint
            </button>
            <button
              onClick={() => handleNonFunctionalButton("Track Complaint")}
              className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b]"
            >
              Track Complaint
            </button>
          </div>
        )}

        {complaintStep === "raise" && (
        <div className="flex space-x-2 mb-4 justify-center">
          <button
            onClick={handleOnboard}
            className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b] flex items-center space-x-2"
          >
            <Train className="w-5 h-5" /> {/* Icon for Onboard */}
            <span>Onboard</span>
          </button>
          <button
            onClick={handleOffboard}
            className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b] flex items-center space-x-2"
          >
            <ArrowRight className="w-5 h-5" /> {/* Icon for Offboard */}
            <span>Offboard</span>
          </button>
        </div>
        )}

        {complaintStep === "onboard" && (
          <div className="flex w-full mb-4 justify-center">
            <input
              type="text"
              placeholder="Enter PNR number"
              value={pnrNumber}
              onChange={(e) => setPnrNumber(e.target.value)}
              className="flex-grow border rounded-l px-4 py-1 text-lg"
            />
            <button
              onClick={handlePnrSubmit}
              className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded-r hover:bg-[#75002b]"
            >
              Submit
            </button>
          </div>
        )}

        {complaintStep === "offboard" && (
          <div className="flex flex-col w-full mb-4 justify-center">
            {/* Input for mobile number */}
            {!mobileNumberSubmitted ? (
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="flex-grow border rounded-l px-4 py-1 text-lg"
                />
                <button
                  onClick={handleMobileNumberSubmit}
                  className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded-r hover:bg-[#75002b]"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-grow border rounded-l px-4 py-1 text-lg"
                />
                <button
                  onClick={handleOtpSubmit}
                  className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded-r hover:bg-[#75002b]"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}

        {complaintStep === "complaintType" && (
        <div className="flex space-x-2 mb-4 justify-center">
          <button
            onClick={() => handleNonFunctionalButton("Feedback")}
            className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b] flex items-center space-x-2"
          >
            <AiOutlineFileText className="w-5 h-5" />
            <span>Text</span>
          </button>
        
          <button
            onClick={() => handleNonFunctionalButton("Feedback")}
            className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b] flex items-center space-x-2"
          >
            <AiOutlineAudio className="w-5 h-5" />
            <span>Audio</span>
          </button>
        
          <button
            onClick={handleImageUpload}
            className="bg-[#8c0035] text-white text-xl px-4 py-2 rounded hover:bg-[#75002b] flex items-center space-x-2"
          >
            <AiOutlinePicture className="w-5 h-5" />
            <span>Image</span>
          </button>
        </div>
        )}

        {complaintStep === "imageUpload" && (
          <div className="flex items-center w-full mb-4 justify-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="border rounded px-2 py-2 text-base flex-grow"
            />
            <button
              onClick={handleFileUpload}
              className="bg-[#8c0035] text-white text-xl px-4 py-2 ml-2 rounded hover:bg-[#75002b]"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
