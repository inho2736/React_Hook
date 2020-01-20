import { useState } from 'react';

function useTabs (initialTab, allTabs){
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    //allTabs가 null이거나 배열이 아닐 경우 예외처리
    if (!allTabs || !Array.isArray(allTabs)){
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };
export default useTabs;

// import React, { useState } from 'react';
// import './App.css';
// import useInput from "./hooks/useInput"
// import { all } from 'q';

// const content = [
// {
//     tab: "Section 1",
//     content: "I'm the content of the Section 1"
// },
// {
//     tab: "Section 2",
//     content: "I'm the content of the Section 2"
// }
// ];
// const App = () => {  
// const { currentItem, changeItem } = useTabs(0 ,content);
// return (
//     <div className="App">
//     {content.map((section, index) => (
    //*** 함수로 쓰려면 이렇게
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//         ))}
//     <span>
//         { currentItem.content }
//     </span>      
//     </div>
// );
// };

// export default App;