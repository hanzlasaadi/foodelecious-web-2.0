import React from "react";
import { data } from "../data/data.js";

const Categories = () => {
  const project = data;
  return (
    <div>
      {/* container for projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 m-4">
        {/* Gird Item */}
        {project.map((item, index) => (
          <div key={index} class="d-flex flex-col justify-center items-center">
            <img
              src={item.image}
              alt=""
              class="w-[200px] h-[200px] border-amber-500 rounded-full border-2"
            />

            <h4 class="text-center font-semibold pt-2 uppercase">
              {item.name}
            </h4>
            <p class="text-slate-600 text-center font-semibold">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
