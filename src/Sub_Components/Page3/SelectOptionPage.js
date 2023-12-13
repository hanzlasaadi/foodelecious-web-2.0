import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../../App.css";

function SelectOptionPage({ currentOptions, currentItem, setCommodityList }) {
  const navigate = useNavigate();
  const { itemId } = useParams();
  console.log(currentItem, "curItem");
  console.log(currentOptions, "curOpts");
  const [stepsPrice, setStepsPrice] = useState(currentItem.price);
  const [displayOptions, setDisplayOptions] = useState([]);

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

  const getCheckedOptions = () => {
    console.log(document.querySelectorAll('input[type="checkbox"]:checked'));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    let arrMain = [];
    let choosedOptions = [];
    document
      .querySelectorAll("input[type=checkbox]:checked")
      .forEach((inp) => arrMain.push(inp.id));
    currentOptions.stepsToChoose?.forEach((step) =>
      step.options.forEach((opt) => {
        if (arrMain.includes(opt._id)) {
          choosedOptions.push({
            stepName: step.stepName,
            shortName: step.shortName,
            type: opt.type,
            price: opt.price,
            selected: true,
            optId: opt._id,
          });
        }
      })
    );
    // console.log(choosedOptions);
    // console.log(filteredProduct);
    // console.log(stepsPrice);
    // console.log(currentProducts._id);

    const tempCommodity = {
      barcode: "testBarcode",
      name: currentItem.name,
      // subCategory: subcategoryClicked._id,
      productPrice: stepsPrice,
      options: choosedOptions,
      // unit: units,
    };
    if (currentItem.steps) tempCommodity.stepsId = currentItem.steps;

    setDisplayOptions(filterArray(tempCommodity.options));
    console.log("tempComm: ", tempCommodity);
    setCommodityList((comm) => {
      localStorage.setItem(
        "commodityList",
        JSON.stringify([...comm, tempCommodity])
      );
      return [...comm, tempCommodity];
    });
  };

  const filterArray = (inputArray) => {
    return inputArray.reduce((acc, current) => {
      const existingItem = acc.find(
        (item) => item.stepName === current.stepName
      );

      if (existingItem) {
        // If the item already exists, add the type to its type array
        existingItem.type.push(current.type);
      } else {
        // If the item doesn't exist, create a new object with a type array
        acc.push({
          ...current,
          type: [current.type],
        });
      }

      return acc;
    }, []);
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
                    <FaArrowLeftLong onClick={() => navigate(-1)} />
                  </p>
                  <span>
                    <h4 className="mt-[-39px] ml-[47px] font-bold">
                      {currentItem.name || " "}
                    </h4>
                  </span>
                </div>
                {currentOptions?.stepsToChoose.map((step) => {
                  return (
                    <Step
                      key={step._id}
                      stepToChoose={step}
                      setStepsPrice={setStepsPrice}
                      getCheckedOptions={getCheckedOptions}
                      handleAddToCart={handleAddToCart}
                    />
                  );
                })}

                <Button
                  onClick={handleAddToCart}
                  variant="outline-secondary text-black"
                  id=""
                >
                  Choose these options
                </Button>

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
              {displayOptions?.map((opt) => {
                return (
                  <p>
                    {opt.shortName}{" "}
                    <strong>
                      {opt.type.map((o) =>
                        opt.type.length === 1 ? o + "" : o + ", "
                      )}
                    </strong>
                  </p>
                );
              })}
              {/* <p>
                Selected topping <strong>{topping}</strong>
              </p>
              <p>
                Selected Cheese <strong>{cheese}</strong>
              </p>
              <p>
                Selected Meat <strong>{meat}</strong>
              </p> */}
              <div class="d-flex col mt-[150px] justify-between">
                <div>
                  {/* <p className=" font-semibold"> SubTotal</p> */}
                  <p className=" text-xl font-semibold"> Total</p>
                </div>

                <div>
                  {/* <p>£8.99</p> */}
                  <p
                    className=" text-xl font-semibold"
                    style={{ color: "#E57C35" }}
                  >
                    {" "}
                    £{Math.round(stepsPrice * 100) / 100}
                  </p>
                </div>
              </div>

              {/* <Link to="/cartview"> */}
              <div className="d-flex w-100 gap-3 justify-content-center">
                <button
                  onClick={() => navigate("/cartview")}
                  className="text-white w-50 p-2 rounded"
                  style={{ backgroundColor: "#E57C35" }}
                >
                  Go to cart
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="text-white w-50 p-2 rounded"
                  style={{ backgroundColor: "#E57C35" }}
                >
                  Continue Browsing
                </button>
              </div>
              {/* </Link> */}
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

function Step({ stepToChoose, setStepsPrice, handleAddToCart }) {
  return (
    <>
      <h6 className="mt-4 ml-[47px]  font-semibold ">
        {stepToChoose.stepName}
      </h6>
      <div class="d-flex flex-col ml-[47px]   justify-center items-start">
        <Option
          options={stepToChoose.options}
          stepName={stepToChoose.stepName}
          setStepsPrice={setStepsPrice}
        />
      </div>
    </>
  );
}

function Option({ options, stepName, setStepsPrice }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState([]);

  const handleCheckboxChange = (value, stepNm, optPrice) => {
    let max = 1;
    if (stepNm.toLowerCase().includes("any"))
      max = Number(stepNm.replace(/[^0-9]/g, ""));
    // Check if the checkbox is already selected
    if (selectedCheckboxes.includes(value)) {
      // If selected, remove it from the array
      setStepsPrice(
        (stepsPrices) => Math.round((stepsPrices - optPrice) * 100) / 100
      );
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    } else {
      // If not selected, check if the maximum limit is reached
      if (selectedCheckboxes.length < max) {
        // If not reached, add the checkbox to the array
        setStepsPrice(
          (stepsPrices) => Math.round((stepsPrices + optPrice) * 100) / 100
        );
        setSelectedCheckboxes([...selectedCheckboxes, value]);
      }
    }
  };

  return (
    <>
      {options.map((option) => {
        return (
          <div key={option._id}>
            <input
              type="checkbox"
              name={option.type}
              value={option._id}
              id={option._id}
              checked={selectedCheckboxes.includes(option._id)}
              onChange={(e) => {
                handleCheckboxChange(option._id, stepName, option.price);
              }}
            />{" "}
            <label htmlFor="Yes" class="px-2">
              {option.type}
            </label>
            <label htmlFor="Yes" class="px-5">
              £{option.price}
            </label>
          </div>
        );
      })}
    </>
    //   <div className="option">
    //   <input
    //     type="checkbox"
    //     id={option._id}
    //     name={option.type}
    //     value={option._id}
    //     className="option-input"
    //     checked={selectedCheckboxes.includes(option._id)}
    //     onChange={() =>
    //       handleCheckboxChange(option._id, stepName, option.price)
    //     }
    //   />
    //   <label className="option-label" htmlFor={option._id}>
    //     <span className="option-text" style={{ color: "black" }}>
    //       {option.type}
    //     </span>
    //     <span className="option-price" style={{ color: "darkgrey" }}>
    //       +{option.price}£
    //     </span>
    //   </label>
    // </div>
  );
}

export default SelectOptionPage;
