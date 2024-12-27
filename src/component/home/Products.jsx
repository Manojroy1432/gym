import React from "react";
import p2 from "../../assets/p2.jpeg";
import { MdCurrencyRupee } from "react-icons/md";

function Products() {
  return (
    <div>
      <div className="flex gap-1 sm:gap-2 md:gap-3 items-center justify-center flex-wrap">
        <div className="flex flex-col bg-white w-[45%] max-w-[300px] rounded-md p-1">
          <div>
            <img src={p2} alt="image" className="w-full mx-auto" />
          </div>
          <div className="p-2 text-xs flex flex-col">
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="flex flex-col bg-white w-[45%] max-w-[300px] rounded-md p-1 cursor-pointer ">
          <div className="overflow-hidden">
            <img
              src={p2}
              alt="image"
              className="w-full mx-auto hover:scale-110 duration-100"
            />
          </div>
          <div className="p-2 text-xs flex flex-col">
            <p className="flex items-center  gap-1">
              <span className="text-sm sm:text-xl">
                <MdCurrencyRupee />
              </span>
              <span className="text-xs sm:text-sm">2000</span>{" "}
            </p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="flex flex-col bg-white w-[45%] max-w-[300px] rounded-md p-1">
          <div>
            <img src={p2} alt="image" className="w-full mx-auto" />
          </div>
          <div className="p-2 text-xs flex flex-col">
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
