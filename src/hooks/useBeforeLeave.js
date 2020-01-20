import React, { useState, useEffect, useRef, confirm }from 'react';
import './App.css';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if ( clientY <= 0 ){
      onBefore();
    }
  };
  useEffect(() => {
    //여기서 앞 이벤트 키워드에 연결되는 핸들러에는 무조건 event객채가 보내진다
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Don't leave!");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
