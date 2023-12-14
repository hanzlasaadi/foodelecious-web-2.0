import React from "react";
import { data } from "../../data/data.js";
import { Link, Outlet } from "react-router-dom";
import { apiUrl } from "../../data/env.js";

const Categories = ({ categories }) => {
  return (
    <div>
      {/* container for projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 m-4">
        {/* Gird Item */}
        {categories?.map((item, index) => (
          <div key={index} class="d-flex flex-col justify-center items-center">
            <Link
              to={`/productCategories/${item._id}`}
              class="text-black no-underline"
            >
              <img
                src={`${apiUrl}/images/categories/${item.image}`}
                alt=""
                class="w-[180px] h-[180px] border-orange-500 rounded-full border-2"
              />

              <h4 class="text-center font-semibold pt-2 uppercase hover:text-black no-underline">
                {item.name}
              </h4>
              <p class="text-slate-600 text-center font-semibold no-underline">
                {item.desc}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
