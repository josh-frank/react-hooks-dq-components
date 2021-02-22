import React from "react";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <MainContent />
      <TopMenu />
    </div>
  );
}

export default App;
