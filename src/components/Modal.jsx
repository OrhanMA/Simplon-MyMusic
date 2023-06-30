import React from "react";

const Modal = ({ isOpen, onClose }) => {
  const modalStyles = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalStyles}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed flex flex-col items-center bg-white border-2 border-green-500  p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Please make a valid input before pressing the search button!
        </h1>
        <button
          className="border border-black hover:border-green-500 bg-gray-100 py-2 px-4 text-xl rounded hover:text-green-500  text-gray-500  self-center"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
