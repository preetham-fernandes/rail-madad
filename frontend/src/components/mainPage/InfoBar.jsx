import React from "react";
import stationIcon from "../assets/infobar/station.png";
import trainIcon from "../assets/infobar/train.png";
import appreciationIcon from "../assets/infobar/appreciation.png";
import enquiryIcon from "../assets/infobar/enquiry.png";
import trackIcon from "../assets/infobar/track.png";
import suggestionIcon from "../assets/infobar/suggestion.png";

const InfoBar = () => {
  return (
    <div className="h-full w-36 flex flex-col space-y-0 pt-20 pl-6">
      {/* Info Content */}  
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 border-b-2 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={stationIcon} alt="Station Icon" className="w-6 h-6 mb-1" />
        <span className="text-sm font-medium text-center">STATION</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 border-b-2 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={trainIcon} alt="Station Icon" className="w-6 h-6 mb-1" />
        <span className="text-sm font-medium text-center">TRAIN</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 border-b-2 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={appreciationIcon} alt="Station Icon" className="w-6 h-6 mt-3" />
        <span className="text-sm font-medium text-center mb-2">APPRECIATION/<br/>RAIL ANUBHAV</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 border-b-2 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={enquiryIcon} alt="Station Icon" className="w-6 h-6 mb-1" />
        <span className="text-sm font-medium text-center">ENQUIRY</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 border-b-2 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={trackIcon} alt="Station Icon" className="w-6 h-6 mt-3" />
        <span className="text-sm font-medium text-center mb-3">TRACK YOUR<br/>CONCERN</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center h-16 bg-[#8c0035] px-4 py-3 hover:bg-[#75002b] text-white"
      >
        <img src={suggestionIcon} alt="Station Icon" className="w-6 h-6 mb-1" />
        <span className="text-sm font-medium text-center">SUGGESTIONS</span>
      </a>
    </div>
  );
};

export default InfoBar;
