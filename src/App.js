import { useState } from "react";
import style from "./App.module.css";
import Input from "./atoms/Input/Input";

function App() {
  const [check, setCheck]= useState("")
  function handle(e) {
   setCheck(e.target.value)
 }
  return (
    <div className="App">
      <Input label="hasrh" handleChange={handle} type="password"  />
   {check}
    </div>
  );
}

export default App;
