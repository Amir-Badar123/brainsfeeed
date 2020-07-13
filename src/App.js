import React from "react";

import Topbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import { CompData } from "./db";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Mainpage CompData={CompData} />
    </div>
  );
}

export default App;
