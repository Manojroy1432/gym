import React from "react";

function Navber() {
  return (
    <nav className="bg-gray-100 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 py-2 md:px-5 md:py-3">
        <div className="font-bold">Logo</div>
        <div className="flex items-center justify-center gap-1 md:gap-3">
          <div>Others</div>
          <button className="btn-white">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
