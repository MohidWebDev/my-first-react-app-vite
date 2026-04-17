import { useState } from "react";
import Header from "./components/Header";
import Area from "./components/Area";
import Students from "./components/Students";

function App() {
  const studentNames = ["Mohid", "Ahmed", "Sameer", "Ali", "Saqib"];
  return (
    <div>
      <Header headerName={"I am called from the main App.jsx to Header.jsx!"} />
      <Header headerName={"I am also called from App.jsx!"} />
      <Area />
      <Students stdNames={studentNames} />
    </div>
  );
}
export default App;
