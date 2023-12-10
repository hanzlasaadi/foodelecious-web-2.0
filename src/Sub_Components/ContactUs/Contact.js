import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div class="py-[4rem] ">
      <Container class="">
        <h1 className="text-dark my-3 font-sans font-bold text-center ">
          Contact Us
        </h1>
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
              <b class="text-[#454545]">Booking Request</b>
            </div>
            <h4 class="py-2 text-[#E57C35]">+011 4765 32568</h4>
            <div class="d-flex justify-center items-center mx-2">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Component%201%20(1).png?updatedAt=1701851908697"
                alt=""
                class="mx-2"
              />
              <b class="text-[#454545]">Location</b>
            </div>
            <p class="px-3 mx-3">
              600 N Washington Ave Suite C203, Minneapolis, MN 55401
            </p>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder={0}
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
