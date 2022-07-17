import React from "react";
import '../style/Footer1.css'
import ColoredLine from "./ColoredLine";
  
function Footer2  ()  {
  console.log(new Date().getFullYear());
return(
  <footer className="footer">


    <ColoredLine color="green" />

   
    <div>Copyright © {new Date().getFullYear()} Livre troc</div>
  
  </footer>
)
};

export default Footer2;