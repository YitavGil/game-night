import React, {useEffect} from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";



function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
        <Route path={['/game/:id', '/']} />
        <Home />
      
    </div>
  );
}

export default App;
