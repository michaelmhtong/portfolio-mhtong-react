import React from "react";
import Panorama from "../Project/Panorama";

const ModalPano = ({ open, onClose }) => {
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
          <Panorama src="/assets/weconet_panorama1.png" />
        </div>
      </div>
    </div>
  );
};

export default ModalPano;
