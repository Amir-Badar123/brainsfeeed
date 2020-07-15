import React from "react";
// import Learn from "./components/Learn";
import Topbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import { CompData } from "./db";
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Topbar />
      <Mainpage CompData={CompData} />
      
    </div>
  );
}

export default App;
