import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {/* Why Choose */}
      <div className="row d-flex justify-center items-center m-5 ">
        <h1 className="text-dark mt-5 font-sans font-bold text-center">
          Why Choose Us
        </h1>
        <div className="col-lg-6 mt-3">
          <div className="row d-flex justify-content-around">
            <div
              className="col-lg-5 col-md-5  box text-center"
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
      <div className="row d-flex justify-center items-center m-5 ">
        {" "}
        <h1 className="text-dark mt-5 font-sans font-bold text-left">Blog</h1>
        <Container fluid className="my-16 lg:px-32 xxl:px-32 md:px-20">
          <Row className="rounded-[0px]">
            <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
              <Card class="my-2 p-3 bg-white shadow-md border  rounded-lg">
                <Card.Img
                  variant="top"
                  src="https://ik.imagekit.io/2nuimwatr/Blog1.png?updatedAt=1701786962110"
                  class="p-3"
                />
                <Card.Body>
                  <Card.Text class="text-slate-600 text-left">
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service...
                  </Card.Text>
                  <Link to="/blogmain" class="no-underline">
                    <Card.Text class="text-right text-slate-600 cursor-pointer">
                      Read More &gt;&gt;
                    </Card.Text>{" "}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
              <Card class=" p-3 bg-white shadow-md border  rounded-lg">
                <Card.Img
                  variant="top"
                  src="https://ik.imagekit.io/2nuimwatr/blog2.png?updatedAt=1701786962088"
                  class="p-3"
                />
                <Card.Body>
                  <Card.Text class="text-slate-600 text-left">
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service...
                  </Card.Text>
                  <Link to="/blogmain" class="no-underline">
                    <Card.Text class="text-right text-slate-600 cursor-pointer">
                      Read More &gt;&gt;
                    </Card.Text>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
              <Card class=" p-3 bg-white shadow-md border  rounded-lg">
                <Card.Img
                  variant="top"
                  src="https://ik.imagekit.io/2nuimwatr/blog3.png?updatedAt=1701786962017"
                  class="p-3"
                />
                <Card.Body>
                  <Card.Text class="text-slate-600 text-left">
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service...
                  </Card.Text>
                  <Link to="/blogmain" class="no-underline">
                    <Card.Text class="text-right text-slate-600 cursor-pointer">
                      Read More &gt;&gt;
                    </Card.Text>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* contact */}
      <Container fluid class="p-0 ">
        <Row>
          {" "}
          <Col
            sm={12}
            md={6}
            lg={6}
            className="p-5 m-0  bg-[#FFF4D9] d-flex flex-col justify-center items-center "
          >
            <h1 className="text-dark  font-sans font-bold text-center">
              Visit Us
            </h1>
            <div class="d-flex justify-center items-center mx-2">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Component%201.png?updatedAt=1701851731230"
                alt=""
                class="mx-2"
              />
              <b class="text-[#454545]">
                For Bookings & Other Queries, Call Us at:
              </b>
            </div>

            <h4 class="py-2 text-[#E57C35]">01170000000</h4>
            <div class="d-flex justify-center items-center mx-2">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Component%201%20(1).png?updatedAt=1701851908697"
                alt=""
                class="mx-2"
              />
              <b class="text-[#454545]">Location</b>
            </div>
            <p class="px-3 mx-3">80 EAST STREET BEDMINSTER, BS3 4EY</p>
            <div class="d-flex justify-center items-center mx-2">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Component%202.png?updatedAt=1701851908726"
                alt=""
                class="mx-2"
              />
              <b class="text-[#454545]">Open Time</b>
            </div>

            <p class="px-3 ">Monday to Friday: 10:00 am - 10:30 pm</p>
            <p class="px-3">Saturday to Sunday: 6:00 am - 11:00 pm</p>
          </Col>
          <Col sm={12} md={6} lg={6} className="p-0 m-0" data-aos="fade-up">
            <iframe
              class="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.7208009586145!2d-2.5976303!3d51.4419388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c2afe0462c9%3A0x6a18b3aedfe9e621!2s80-82%20East%20St%2C%20Bedminster%2C%20Bristol%20BS3%204EY%2C%20UK!5e0!3m2!1sen!2s!4v1702567683578!5m2!1sen!2s"
              frameBorder={0}
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
