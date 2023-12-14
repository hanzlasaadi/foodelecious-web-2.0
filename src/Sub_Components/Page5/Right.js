import React from "react";

import { Button } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";

import { Badge } from "antd";

function Right() {
  return (
    <div className="bg-gray-100 border-l mt-14 border-gray-300 py-14 pl-14 pr-[26%] h-[52rem] hidden lg:block ">
      <>
        <div className="flex mb-4 ">
          <div className="relative">
            <Badge
              count="0"
              color="#E57C35"
              showZero
              className="md:block hidden right-0 absolute"
            >
              <div
                className="w-[70px] h-[68px] rounder-[200px] overflow-hidden bg-white border-gray-500 absolute"
                style={{ borderRadius: "11px", border: "1px solid #dddddd " }}
              >
                <img
                  className="w-[50px] ml-[10px] mt-[10px] object-cover"
                  src="https://ik.imagekit.io/p2slevyg1/png-transparent-chicken-burger-with-sliced-of-tomato-illustration-hamburger-fried-chicken-chicken-sandwich-fast-food-french-fries-hamburger-food-recipe-chicken-meat-thumbnail-removebg-preview.png?updatedAt=1701851984907"
                  alt="img"
                />
              </div>
            </Badge>
          </div>

          <div className="col pt-1 ml-20 ">
            <p className="font-bold text-[13px]">Chicken Burger</p>
            <p className="font-light text-[12px] text-gray-600">
              Burger Description
            </p>
            <p className="font-light text-[12px] text-gray-600">Options Size</p>
          </div>
          <div>
            <p className="item-center font-bold text-[13px] mt-4">£176.00</p>
          </div>
        </div>
      </>

      <hr className="mb-4  text-gray-500" />

      <div className="flex  justify-between">
        <input
          className="border-t border-l border-r border-b border-gray-300 py-3 pr-20  lg:grow-1 grow pl-3 text-gray-700  text-left "
          placeholder="Gift card or discount code"
        />
        <Button
          type="submit"
          className="bg-[#E57C35] border-[0px] pt-3 grow-1 pb-3 px-3 hover:bg-gray-300 focus:bg-gray-300 font-bold my-1 ml-4"
        >
          Apply
        </Button>
      </div>

      <hr className="mb-4  mt-4 text-gray-500" />

      <div className="flex justify-between">
        <p className="font-light text-[13px] text-gray-700">Subtotal </p>
        <p className="font-bold text-[13px] text-gray-700"> £176.00</p>
      </div>

      <div className="flex justify-between">
        <p className="font-medium text-[13px] text-gray-700 relative">
          Shipping
          <AiFillQuestionCircle className="absolute top-[4%] left-14 text-lg " />
        </p>

        {/* <p className="font-medium text-[13px] text-gray-700">£176</p> */}
      </div>

      <hr className="mb-4  mt-4 text-gray-500" />

      <div className="flex justify-between">
        <p className="font-medium text-[16px] text-gray-700">Total</p>
        <p className="font-medium text-2xl text-gray-700">
          <span className="text-gray-500 text-[12px]"> £176.00</span>
        </p>
      </div>
    </div>
  );
}

export default Right;
