import React, { useState } from "react";
import "./styles.css";
import Switch from "../src/components/Switch";

const App = () => {
  const [isToggled, setIsToggled] = useState(false); //creates state in the component
  
  return (
    <div className="App">
      <Switch
        rounded={true}
        isToggled={isToggled} // isToggled is =false from useState by default
        onToggle={() => setIsToggled(!isToggled)} // onToggle changes when input changes, sets to true
      />
    </div>
  );
};
export default App;
