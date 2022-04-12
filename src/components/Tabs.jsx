import React,{useState} from "react";
import Faculties from "./tabs/faculties";
import Projects from "./tabs/projects";

const Tabs=()=> {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  
  return (
    <div>
    <div className="tabs">
    <div  className={activeTab === "tab1" ? "tab-1-highlight" : "tab-1"}
          onClick={handleTab1}>
          <div classname="text-tab1">Projects </div></div> 
    <div  className={activeTab === "tab2" ? "tab-2-highlight" : "tab-2"}
          onClick={handleTab2}>  <div classname="text-tab2">Faculty </div> </div>
    </div>
    <div className="outlet">
       {activeTab === "tab1" ? <Projects /> : <Faculties/>}
     </div>
    </div>
  );
}

export default Tabs;