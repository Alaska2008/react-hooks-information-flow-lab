import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  function handleDarkModeClick(childClick) {
    childClick =! isClicked;
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setIsClicked((isClicked) => childClick);
  }

  return (
    <div className={"App "+ (isDarkMode ? "dark":"light" )}>
      <Header click= {isClicked} onDarkModeClick ={handleDarkModeClick} />;
      <ShoppingList items={itemData} />
    </div>
    
    
  )
}

export default App;
