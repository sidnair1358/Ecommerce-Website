import React, { useState } from "react";

export const ConfirmationModal = ({ close, setClose }) => {
  const closeModal = (e) => {
    e.preventDefault();
    setClose(true);
  };
  return (
    <div
      id="toast-default"
      className={
        close
          ? "hidden"
          : "flex mt-10 items-center w-full max-w-xs p-4 text-gray-800 bg-stone-100 rounded-lg shadow dark:text-gray-400"
      }
      role="alert"
    >
      <div className="ml-3 text-lg text-center pl-14 font-normal">
        Item added to cart
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-stone-100 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => closeModal(e)}
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
