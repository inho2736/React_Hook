import React, { useState, useEffect, useRef }from 'react';
import './App.css';
import useInput from "./hooks/useInput"

const useClick = (onClick) => {
  const element = useRef();
  
  useEffect(() => {
    if (typeof onClick === "function"){
      if (element.current){
        element.current.addEventListener("click", onClick);
      }
    }
    //useEffect 에서 return 시키는 함수는 componentWillUnmount 효과.
    //[]썼으니 update효과 없음.
    return () => {
      if (element.current){
        element.current.removeEventListener("click", onClick);
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
  const potato = useClick(sayHello);
  //setTimeout(() => potato.current.focus(), 2000 ); //input 태그에 써보기
  return (
    <div className="App">
      <div ref = {potato}>Hi</div>   
    </div>
  );
};

export default App;
