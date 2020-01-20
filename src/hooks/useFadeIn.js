import React, { useState, useEffect, useRef, confirm }from 'react';
import './App.css';

const useFadeIn = (duration = 1, delay = 0) => {
  // useState useEffect 등이 조건에 따라 실행되고 말고 하면 오류남
  // if (typeof(duration) !== "number" || typeof(delay) !== "number"){
  //   return;
  // }
  const element = useRef();
  useEffect(()=>{
    if (element.current){
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [])
  return { ref: element, style: { opacity: 0}};
}

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(1, 4);

  return (
    //이렇게 하면 const element = useFadeIn();
    //<h1 ref: element style: { opacity: 0}> 랑 똑같다.
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>klsdjflksdjflksdjflk</p>
    </div>
  );
};

export default App;
