import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Searchbar from "./Searchbar";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="whole-page">
       <Navbar />
      <Searchbar />
      <Tabs />
      <Content />
    </div>
  );
}

export default App;