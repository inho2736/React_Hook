import React, { useState, useEffect }from 'react';
import './App.css';

//useEffects는 componentDidMount, componentDidUpdate, componentWillUnmount ...와 같은거
const App = () => {

  const sayHello = () => {console.log("sayHello")};
  
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  
  //처음 마운트될때 sayHello실행하고 이후에는 deps에 있는 값 변경될때만 실행
  //두번째 저 deps조건은 componentWillUpdate 함수와 같이 동작
  //처음 마운트될때 이후로 함수를 실행하고 싶지 않다면 [](빈 배열)을 넣으면 됨
  //빈배열도 안넣으면 모든 값 변화에 동작
  
  useEffect(sayHello);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={ () => setNumber(number+1)}>{ number }</button>
      <button onClick={ () => setAnumber(anumber+1)}>{ anumber }</button>
    </div>
  );
};

export default App;
