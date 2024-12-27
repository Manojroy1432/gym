import React from "react";
import AutoSlider from "../../component/home/AutoSlider";
import Navber from "../../component/home/Navber";
import Products from "../../component/home/Products";

function Home() {
  return (
    <div>
      <AutoSlider />
      <Navber />
      <div className="max-w-6xl mx-auto">
        <Products />
      </div>
    </div>
  );
}

export default Home;
