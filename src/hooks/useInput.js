import { useState } from 'react';

function useInput (initialValue, validator) {
  //useState에서 보내준 set 함수는 값을 변경하고 다시 렌더링해줌 
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target: { value }
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { props: { value, onChange }, utils: { setValue } };
  };

export default useInput;

//import useInput from "./hooks/useInput"

// const App = () => {
//   const validator = value => !value.includes("@");
//   const name = useInput("Mr. ", validator);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name.props} />
//     </div>
//   );
// };