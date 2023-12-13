import React from "react";
import { Link, Outlet } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const CartView = ({ cart, handleRemoveFromCart }) => {
  return (
    <div class="pt-[5rem]">
      <div>
        <div className="flex justify-between items-baseline px-4 py-6">
          <p className="text-[30px] md:text-[40px] font-medium self-center text-[#e57c35]">
            YOUR CART
          </p>
          <Link to={`/`} className="cursor-pointer ">
            <p className="cursor-pointer text-center py-2 pb-5 no-underline text-black  font-medium text-[15px] tracking-wider hidden md:block">
              CONTINUE SHOPPING
            </p>
          </Link>
        </div>
        <div className="flex px-4 pb-2 items-baseline">
          <p className="text-gray-600 text-[14px] flex grow-[4]">PRODUCT</p>
          <p className="text-gray-600 text-[14px]  grow-[1] text-center justify-self-center hidden md:block ">
            QUANTITY
          </p>
          <p className="text-gray-600 text-[14px]  grow-[1] text-right justify-self-end hidden md:block">
            TOTAL
          </p>
        </div>
        <hr />

        {cart?.map((item) => {
          return (
            <div key={item._id} className="flex px-4 py-4">
              <div className="w-[148px] ">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/Ellipse%2027%20(9).png?updatedAt=1701960962339"
                  className="card-img-top "
                  alt=""
                />{" "}
              </div>
              <div className=" grow-[2]">
                <p className="text-[17px] font-medium px-6 pb-2 hover:underline cursor-pointer underline-offset-2 decoration-2">
                  {item.name}
                </p>
                <p className="text-gray-600 text-[15px] px-6 pb-2 ">₤14.99</p>
                <p className="text-gray-600 text-[15px] px-6 pb-2">
                  Pizza with extra toppings
                </p>

                <div className="flex flex-wrap grow-[1]  relative items-baseline justify-start md:hidden block">
                  <p className="">
                    <button className="px-2 py-1 ml-9 border-b border-l  border-t border-black cursor-pointer text-gray-500">
                      -
                    </button>
                    <button className=" px-2 py-1 border-b border-l border-r border-t border-black  font-bold">
                      0
                    </button>
                    <button className="text-gray-500 px-2 py-1 border-b  border-r border-t border-black cursor-pointer">
                      +
                    </button>
                  </p>
                  <p>
                    <RiDeleteBinLine
                      className="text-[20px] mt-1 cursor-pointer ml-3 absolute top-0 left-[106px]"
                      onClick={() => handleRemoveFromCart(item._id)}
                    />
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap grow-[1]  relative items-baseline justify-start hidden md:block">
                <p className="">
                  <button className="px-2 py-1 ml-9 border-b border-l  border-t border-black cursor-pointer text-gray-500">
                    -
                  </button>
                  <button className=" px-2 py-1 border-b border-l border-r border-t border-black  font-bold">
                    0
                  </button>
                  <button className="text-gray-500 px-2 py-1 border-b  border-r border-t border-black cursor-pointer">
                    +
                  </button>
                </p>
                <p>
                  <RiDeleteBinLine className="text-[20px] mt-1 cursor-pointer ml-3 absolute top-0 left-[106px]" />
                </p>
              </div>
              <div className=" text-gray-600 text-[16px] hidden md:block">
                <p>₤14.99</p>
              </div>
            </div>
          );
        })}

        <hr />
        <div className=" xs:text-center sm:text-center md:text-right px-4 py-6">
          <p className=" py-2 text-black underline-offset-2 my-2 font-medium text-[16px] tracking-wider ">
            SUBTOTAL
            <span className="text-gray-600 text-[16px] ml-3">₤14.99</span>
          </p>
          <p className="text-gray-600 text-[14px] my-2">
            Taxes and{" "}
            <span className="underline cursor-pointer hover:decoration-2 underline-offset-4 ">
              shipping{" "}
            </span>
            calculated at checkout
          </p>

          <Link to="/checkout">
            <button
              className=" w-[300px] w-96 border-orange-500 border-l border-r border-t border-b  px-2 py-[10px] text-white
           bg-[#e57c35] mb-2 text-center font-bold text-[16px] cursor-pointer "
            >
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CartView;
