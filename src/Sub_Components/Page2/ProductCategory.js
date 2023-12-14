import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { data } from "../../data/data.js";

const ProductCategory = ({
  subCategories,
  handleAddToCart,
  handleRemoveFromCart,
  cart,
}) => {
  const { id } = useParams();
  // console.log(id, "this is id");
  const filteredSubcategories = subCategories.filter(
    (sub) => sub.productCategory === id
  );
  // console.log(filteredSubcategories);
  // const project = data;
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

      {/* <<<<<<< HEAD */}
      <span class="text-white rounded-r-full py-2 px-4 fs-5 my-5 font-semibold bg-gradient-to-r from-orange-500 to-orange-300">
        PIZZA
      </span>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5 mx-4 px-5">
        {data.map((item, index) => (
          <div
            key={index}
            class="d-flex flex-col justify-around items-center container "
          >
            <div class="relative">
              <img src={item.image} alt="" class="w-[200px] h-[200px] image" />
              <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#FE2B2B]">
                {item.price}
              </p>
            </div>

            <h6 class="text text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
              {item.name}
            </h6>
            <p class="text text-slate-600 text-center px-4 font-semibold no-underline">
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
      {/* ======= */}
      {filteredSubcategories.map((filSubcat) => (
        <SubCategory
          key={filSubcat._id}
          subCat={filSubcat}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          cart={cart}
        />
      ))}
      {/* >>>>>>> 85cf74723bd7481de1f8bbfa7bb87e0ad985001b */}

      <Outlet />
    </div>
  );
};

function SubCategory({ subCat, handleAddToCart, handleRemoveFromCart, cart }) {
  const navigate = useNavigate();
  return (
    <>
      <span class="text-white rounded-r-full py-2 px-4 fs-5 my-5 font-semibold bg-gradient-to-r from-orange-500 to-orange-300">
        {subCat.name}
      </span>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5 mx-4 px-5">
        {subCat?.productsList?.map((item) => (
          <div
            key={item._id}
            class="d-flex flex-col justify-center items-center"
          >
            <div class="relative">
              <img src={item.image} alt="" class="w-[200px] h-[200px] " />
              {item.price ? (
                <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#FE2B2B]">
                  {item.price}
                </p>
              ) : null}
            </div>

            <h6 class="text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
              {item.name}
            </h6>
            {/* <p class="text-slate-600 text-center font-semibold no-underline">
              {item.description}
            </p> */}
            {/* <Link to={`/selectOption`}> */}
            {cart.some((c) => c._id === item._id) ? (
              <button
                class="text-center font-semibold  uppercase px-5 py-2 text-white rounded-md bg-[#59A453]"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                class="text-center font-semibold  uppercase px-5 py-2 text-white rounded-md bg-[#59A453]"
                onClick={() => {
                  handleAddToCart(item);
                  navigate(`/selectOption/${item._id}`);
                }}
              >
                Add to Cart
              </button>
            )}
            {/* </Link> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCategory;
