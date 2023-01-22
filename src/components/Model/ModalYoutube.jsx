import React from "react";
import YoutubeEmbed from "../Project/YoutubeEmbed";

const ModalYoutube = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
      onClick={onClose}
    >
      <div
        className={`${
          open ? "block" : "hidden"
        } fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-sm w-full bg-white rounded-lg overflow-y-auto`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="p-4">
          <p className="text-right cursor-pointer" onClick={onClose}>
            X
          </p>
          <YoutubeEmbed embedId="CrXdIugj3z0" />
          {/* <div className="content text-center p-4">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg m-2">
              <span className="font-bold">YES</span>, I love NFT's
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg m-2">
              <span className="font-bold">NO</span>, thanks
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModalYoutube;
