import React, { useState, useEffect, useRef, confirm }from 'react';
import './App.css';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    //이건 그냥 동작하라고 넣어주는 이상한거
    event.returnValue = "";        
  }
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener)
  }
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener)
  }
  return { enablePrevent, disablePrevent };
}

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}> protect </button>
      <button onClick={disablePrevent}> unprotect </button>
    </div>
  );
};

export default App;
