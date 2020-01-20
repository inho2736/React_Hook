
import React, { useState }from 'react';
//import './App.css';

const useChange = (initialValue) => {
  const [lettering, changeLettering] = useState(initialValue);
  const addAlert = (value) => {
    console.log("work!");
    alert("nananana");
    changeLettering(value);
  }
  return { lettering, addAlert };
}

const App = () => {
  const { lettering, addAlert } = useChange("Before push the button..");
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={ () => addAlert("Pushed") }>{ lettering }</button> 
    </div>
  );
};

export default App;
