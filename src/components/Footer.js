import useWebAnimations from "@wellyshen/use-web-animations";
import React from "react";
import envelope from "./images/envelopetransparent-removebg-preview.png"

function Footer() {


  const animatetiming = {
    iterations:Infinity,
    duration : 1000,
    easing: "ease-in-out",
    direction: "alternate"
}

    const pop = useWebAnimations({
        keyframes:{
            transform:["scale(1.1)"]
        },
        timing:animatetiming
    })    

  return (
      <div>
    <div className="Footer">
      <div className="Footer__text">
        <p>Pick my brain/cortex and let's get </p>
        <p>started on your project</p>
      </div>
      <div className = "Footer__icon">
            <img ref = {pop.ref} src={envelope} alt="" />
            <p>ahsenriaz2001@gmail.com</p>
      </div>
    </div>
        
    </div>
  );
}

export default Footer;
 