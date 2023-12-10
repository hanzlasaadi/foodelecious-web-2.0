import React from "react";
import Left from "../Sub_Components/Page5/Left";
import Right from "../Sub_Components/Page5/Right";

function CheckoutPage() {
  return (
    <div className="flex ">
      <div className=" md:w-full lg:w-[900px]">
        <Left />
      </div>
      <div className=" lg:w-[700px] ">
        <Right />
      </div>
    </div>
  );
}

export default CheckoutPage;
