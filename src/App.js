import React from "react";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/ContactContext";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Routes />
      </BookContextProvider>
    </div>
  );
}

export default App;
