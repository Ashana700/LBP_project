import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="whole-page">
      <Navbar />
      <Searchbar />
      <Tabs/>
    </div>
  );
}

export default App;