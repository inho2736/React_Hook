import React, { useState, useEffect, useRef, confirm}from 'react';
import './App.css';
import useInput from "./hooks/useInput"

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction =() => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteTheWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteTheWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}> Delete the World </button>
    </div>
  );
};

export default App;
