import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SelectOptionPage() {
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
                <p className="mt-4 ml-[47px] font-semibold ">
                  Choose Size (any one)
                </p>
                <div>
                  <div className=" ">
                    <div class=" flex ml-[38px] col gap-2 justify-start items-center ">
                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201345.png?updatedAt=1701942521595"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £4.99
                        </p>

                        <h6 class=" absolute text-center font-semibold ml-[26px] pt-2 uppercase hover:text-black no-underline">
                          7'inches
                        </h6>
                      </div>

                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201309.png?updatedAt=1701960347310"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £8.99
                        </p>

                        <h6 class="text-center absolute font-semibold ml-[26px] pt-2 uppercase hover:text-black no-underline">
                          10'inches
                        </h6>
                      </div>

                      <div class="relative border rounded-lg border-2">
                        <img
                          src="https://ik.imagekit.io/p2slevyg1/Rectangle%201349.png?updatedAt=1701960474228"
                          alt=""
                          class="w-[130px] h-[115px] "
                        />
                        <p class="absolute top-[18px] right-[1px] text-white rounded-l-lg  fs-6 p-1 font-semibold bg-[#E57C35]">
                          £10.99
                        </p>

                        <h6 class="text-center absolute font-semibold ml-[26px] pt-2 uppercase hover:text-black no-underline">
                          14'inches
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-[82px] ml-[47px] font-semibold ">
                  Would you like double cheese?
                </p>
                <div>
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
                </div>

                <p className="mt-[82px] ml-[47px] font-semibold ">
                  Would you like double meat/veggies?
                </p>
                <div>
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
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <h4 class="text-center mt-5">TOTAL</h4>
              <div class="d-flex col mt-[468px] justify-between">
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
