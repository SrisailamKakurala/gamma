import React, { useContext, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" 
import Home from "./pages/Home";
import Template from "./pages/Template";
import Site from "./pages/Site";
import {commonContext} from "./context/utilContext";

const App = () => {
  const [prompt, setPrompt] = useState();
  
  return (
    <commonContext.Provider value={{prompt, setPrompt}}>
      <div className="h-screen bg-black">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/site" element={<Site />} />
          </Routes>
        </Router>
      </div>
    </commonContext.Provider>
  );
}

export default App;