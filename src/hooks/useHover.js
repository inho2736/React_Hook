import React, { useState, useEffect, useRef }from 'react';
import './App.css';
import useInput from "./hooks/useInput"

const useHover = (onHover) => {
  const element = useRef();
  
  useEffect(() => {
    if (typeof onHover === "function"){
      if (element.current){
        element.current.addEventListener("mouseenter", onHover);
      }
    }
    //useEffect 에서 return 시키는 함수는 componentWillUnmount 효과.
    //[]썼으니 update효과 없음.
    return () => {
      if (element.current){
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => {
    console.log("sayHello");
  }
  //reference 는 컴포넌트의 부분을 선택할수 있는것 (document.getElementById 처럼)
  //모든 컴포넌트는 ref prop을 가지고있음
  const potato = useHover(sayHello);
  //setTimeout(() => potato.current.focus(), 2000 ); //input 태그에 써보기
  return (
    <div className="App">
      <input ref = {potato} placeholder="asdf" />
    </div>
  );
};

export default App;
