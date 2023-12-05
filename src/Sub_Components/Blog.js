import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Blog = () => {
  return (
    <div>
      {/* Why Choose */}
      <div className="row d-flex justify-center items-center p-5 ">
        <h1 className="text-dark mt-5 font-sans font-bold text-center">
          Why Choose Us
        </h1>
        <div className="col-lg-6 mt-3">
          <div className="row d-flex justify-content-around">
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img
                src="https://ik.imagekit.io/2nuimwatr/Service.png?updatedAt=1701785453099"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img
                src="https://ik.imagekit.io/2nuimwatr/Service2.png?updatedAt=1701785453282"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img
                src="https://ik.imagekit.io/2nuimwatr/Service3.png?updatedAt=1701785453140"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img
                src="https://ik.imagekit.io/2nuimwatr/Service4.png?updatedAt=1701785453629"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5" data-aos="fade-up">
          <img
            src="https://ik.imagekit.io/2nuimwatr/whychoose.png?updatedAt=1701785455231"
            className="img-fluid"
            alt=""
          />
        </div>
        <div
          className="col-lg-8 text-center offset-lg-2"
          data-aos="fade-up"
        ></div>
      </div>

      {/* Blog  */}
      <div className="row d-flex justify-center items-center p-5 ">
        {" "}
        <h1 className="text-dark mt-5 font-sans font-bold text-left">Blog</h1>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://ik.imagekit.io/2nuimwatr/Blog1.png?updatedAt=1701786962110"
            />
            <Card.Body>
              <Card.Text class="text-slate-600">
                Great food and reasonable prices. recommended to best time with
                Great customer service Great food and reasonable prices.
                recommended to best time with Great customer service Great food
                and reasonable prices. recommended to best time with Great
                customer service...
              </Card.Text>
              <Card.Text class="text-right text-slate-600">
                Read More &gt;&gt;
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://ik.imagekit.io/2nuimwatr/blog2.png?updatedAt=1701786962088"
            />
            <Card.Body>
              <Card.Text class="text-slate-600">
                Great food and reasonable prices. recommended to best time with
                Great customer service Great food and reasonable prices.
                recommended to best time with Great customer service Great food
                and reasonable prices. recommended to best time with Great
                customer service...
              </Card.Text>
              <Card.Text class="text-right text-slate-600">
                Read More &gt;&gt;
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://ik.imagekit.io/2nuimwatr/blog3.png?updatedAt=1701786962017"
            />
            <Card.Body>
              <Card.Text class="text-slate-600">
                Great food and reasonable prices. recommended to best time with
                Great customer service Great food and reasonable prices.
                recommended to best time with Great customer service Great food
                and reasonable prices. recommended to best time with Great
                customer service...
              </Card.Text>
              <Card.Text class="text-right text-slate-600">
                Read More &gt;&gt;
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Blog;
