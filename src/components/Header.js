import React from "react";
import App from "./App";

function Header({onDarkModeClick, click}){
    
    function handleHeaderButton() {
        const buttonState = false;
        onDarkModeClick(buttonState);
    }
    
   

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick ={handleHeaderButton}>
                {click ? "Dark" : "Light"} Mode
            </button>
            
        </header>
    )
}
export default Header;
      