import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";

function SelectOptionPage() {
  const [topping, setTopping] = useState("10'INCHES");
  const [cheese, setCheese] = useState("Yes");
  const [meat, setMeat] = useState("Yes");

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  const onOptionChange2 = (e) => {
    setCheese(e.target.value);
  };
  const onOptionChange3 = (e) => {
    setMeat(e.target.value);
  };

  return (
    <div class="pt-[5rem]">
      <div class="my-[5rem]">
        <h3 className="text-center">Options</h3>

        <Container
          className="card container p-5 mt-4 font-sans"
          style={{ backgroundColor: "rgba(244, 244, 244, 1)" }}
        >
          <Row>
            <Col sm={12} md={8} lg={8}>
              <div className="border-r-2 border-gray-400">
                <div style={{ color: "#E57C35" }}>
                  <p>
                    <FaArrowLeftLong />
                  </p>
                  <span>
                    <h4 className="mt-[-39px] ml-[47px] font-bold">
                      Country Size Classic
                    </h4>
                  </span>
                </div>
                <h6 className="mt-4 ml-[47px]  font-semibold ">
                  Choose Size (any one)
                </h6>
                <div class="d-flex flex-col ml-[47px]   justify-center items-start">
                  <div>
                    <input
                      type="radio"
                      name="topping"
                      value="7'INCHES"
                      id="7'INCHES"
                      checked={topping === "7'INCHES"}
                      onChange={onOptionChange}
                    />{" "}
                    <label htmlFor="7'INCHES" class="px-2">
                      7'INCHES
                    </label>
                    <label htmlFor="7'INCHES" class="px-5">
                      £4.99
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="topping"
                      value="10'INCHES"
                      id="10'INCHES"
                      checked={topping === "10'INCHES"}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="10'INCHES" class="px-2">
                      10'INCHES
                    </label>
                    <label htmlFor="10'INCHES" class="px-5">
                      £8.99
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="topping"
                      value="12'INCHES"
                      id="12'INCHES"
                      checked={topping === "12'INCHES"}
                      onChange={onOptionChange}
                    />
                    <label htmlFor="12'INCHES" class="px-2">
                      12'INCHES
                    </label>
                    <label htmlFor="12'INCHES" class="px-5">
                      £10.99
                    </label>
                  </div>
                </div>

                <h6 className="mt-5 ml-[47px] font-semibold ">
                  Would you like double cheese?
                </h6>
                <div class="d-flex flex-col ml-[47px]   justify-center items-start">
                  <div>
                    <input
                      type="radio"
                      name="cheese"
                      value="Yes"
                      id="Yes"
                      checked={cheese === "Yes"}
                      onChange={onOptionChange2}
                    />{" "}
                    <label htmlFor="Yes" class="px-2">
                      Yes
                    </label>
                    <label htmlFor="Yes" class="px-5">
                      £1.99
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="cheese"
                      value="No"
                      id="No"
                      checked={cheese === "No"}
                      onChange={onOptionChange2}
                    />
                    <label htmlFor="No" class="px-2">
                      No
                    </label>
                    <label htmlFor="No" class="px-5">
                      £8.99
                    </label>
                  </div>
                </div>

                {/* <div>
                  <div className=" ">
                    <div class=" flex ml-[38px] col gap-2 justify-start items-center ">
                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201309%20(1).png?updatedAt=1701960700636"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £1.99
                        </p>

                        <h6 class=" absolute text-center font-semibold ml-[51px] pt-2 uppercase hover:text-black no-underline">
                          Yes
                        </h6>
                      </div>

                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201348.png?updatedAt=1701960721149"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £8.99
                        </p>

                        <h6 class="text-center absolute font-semibold ml-[51px] pt-2 uppercase hover:text-black no-underline">
                          No
                        </h6>
                      </div>
                    </div>
                  </div>
                </div> */}

                <h6 className="mt-5 ml-[47px] font-semibold ">
                  Would you like double meat/veggies?
                </h6>
                <div class="d-flex flex-col ml-[47px]   justify-center items-start">
                  <div>
                    <input
                      type="radio"
                      name="meat"
                      value="Yes"
                      id="Yes"
                      checked={meat === "Yes"}
                      onChange={onOptionChange3}
                    />
                    <label htmlFor="Yes" class="px-2">
                      Yes
                    </label>
                    <label htmlFor="Yes" class="px-5">
                      £2.99
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="meat"
                      value="No"
                      id="No"
                      checked={meat === "No"}
                      onChange={onOptionChange3}
                    />{" "}
                    <label htmlFor="No" class="px-2">
                      No
                    </label>
                    <label htmlFor="No" class="px-5">
                      £8.99
                    </label>
                  </div>
                </div>
                {/* <div>
                  <div className=" ">
                    <div class=" flex ml-[38px] col gap-2 justify-start items-center ">
                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201348%20(1).png?updatedAt=1701960737818"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £2.99
                        </p>

                        <h6 class=" absolute text-center font-semibold ml-[51px] pt-2 uppercase hover:text-black no-underline">
                          Yes
                        </h6>
                      </div>

                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201348.png?updatedAt=1701960721149"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £8.99
                        </p>

                        <h6 class="text-center absolute font-semibold ml-[51px] pt-2 uppercase hover:text-black no-underline">
                          No
                        </h6>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <h4 class="text-center mt-5">TOTAL</h4>
              <p>
                Selected topping <strong>{topping}</strong>
              </p>
              <p>
                Selected Cheese <strong>{cheese}</strong>
              </p>
              <p>
                Selected Meat <strong>{meat}</strong>
              </p>
              <div class="d-flex col mt-[150px] justify-between">
                <div>
                  <p className=" font-semibold"> SubTotal</p>
                  <p className=" text-xl font-semibold"> Total</p>
                </div>

                <div>
                  <p>£8.99</p>
                  <p
                    className=" text-xl font-semibold"
                    style={{ color: "#E57C35" }}
                  >
                    {" "}
                    £8.99
                  </p>
                </div>
              </div>

              <Link to="/cartview">
                <button
                  className="text-white w-64 p-2 ml-[69px]"
                  style={{ backgroundColor: "#E57C35" }}
                >
                  Next
                </button>
              </Link>
            </Col>
          </Row>
          {/* <div className="grid  lg-grid-cols-8">
          <div style={{ color: "#E57C35" }}>
            <p>
              <FaArrowLeftLong />
            </p>
            <span>
              <h4 className="mt-[-39px] ml-[47px] font-bold">
                Country Size Classic
              </h4>
            </span>
          </div>
          <p className="mt-4 ml-[47px] ffont-semibold ">
            Choose Size (any one)
          </p>

          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2  ">
              <div class=" flex col justify-center items-center gap-2">
                <Link to="#" class="text-black no-underline">
                  <div class="relative ">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/Rectangle%201345.png?updatedAt=1701942521595"
                      alt=""
                      class="w-[200px] h-[150px] "
                    />
                    <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#E57C35]">
                      £4.99
                    </p>
                  </div>

                  <h6 class="text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
                    7'inches
                  </h6>
                </Link>

                <Link to="#" class="text-black no-underline">
                  <div class="relative">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/Rectangle%201345.png?updatedAt=1701942521595"
                      alt=""
                      class="w-[200px] h-[150px] "
                    />
                    <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#E57C35]">
                      £4.99
                    </p>
                  </div>

                  <h6 class="text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
                    7'inches
                  </h6>
                </Link>

                <Link to="#" class="text-black no-underline">
                  <div class="relative ">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/Rectangle%201345.png?updatedAt=1701942521595"
                      alt=""
                      class="w-[200px] h-[150px] "
                    />
                    <p class="absolute top-[21px] right-[2px] text-white rounded-l-lg  fs-5 p-2 font-semibold bg-[#E57C35]">
                      £4.99
                    </p>
                  </div>

                  <h6 class="text-center font-semibold w-[12rem] pt-2 uppercase hover:text-black no-underline">
                    7'inches
                  </h6>
                </Link>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div className="grid lg:grid-cols-4" lg={4} sm={12}>
            <h2>total</h2>
          </div> */}
        </Container>
      </div>
    </div>
  );
}

export default SelectOptionPage;
