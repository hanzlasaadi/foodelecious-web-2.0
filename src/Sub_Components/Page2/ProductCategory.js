import React from "react";
import { data } from "../../data/data2.js";
import { Link, Outlet } from "react-router-dom";

const ProductCategory = () => {
  const project = data;
  return (
    <div class="pt-[5rem] ">
      <p class="fs-5 mx-5 my-5">
        &lt;
        <span class="underline underline-offset-2 cursor-pointer pl-1 fs-5">
          <Link to="/" class="text-black">
            back
          </Link>
        </span>
      </p>

      <span class="text-white rounded-r-full py-2 px-4 fs-5 my-5 font-semibold bg-gradient-to-r from-orange-500 to-orange-300">
        PIZZA
      </span>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5 mx-4 px-5">
        {project.map((item, index) => (
          <div key={index} class="d-flex flex-col justify-center items-center">
            <div class="relative">
              <img src={item.image} alt="" class="w-[200px] h-[200px] " />
              <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#FE2B2B]">
                {item.price}
              </p>
            </div>

            <h6 class="text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
              {item.name}
            </h6>
            <p class="text-slate-600 text-center font-semibold no-underline">
              {item.desc}
            </p>
            <Link to={`/selectOption`}>
              <button class="text-center font-semibold  uppercase px-5 py-2 text-white rounded-md bg-[#59A453]">
                Order Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default ProductCategory;
