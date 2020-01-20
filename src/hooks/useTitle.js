import React, { useState, useEffect }from 'react';
//import './App.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title])
  return setTitle;
}

export default useTitle;
// const App = () => {
//   const titleUpdater = useTitle("...Loading");
//   //titleUpdater("change!");
//   setTimeout(() => titleUpdater("Home"), 3000);
//   return (
//     <div className="App">
//       <div>Hi</div>   
//       <button onClick={ () => titleUpdater("change2") }>change</button>   
//     </div>
//   );
// };

// export default App;
