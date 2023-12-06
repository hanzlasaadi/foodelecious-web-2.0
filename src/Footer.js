import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
    <div className="bg-zinc-800 font-sans text-white">
      <Container>
        <Row className="p-4">
          <Col md={3} sm={12}>
            <img
              className="mt-3"
              src="https://ik.imagekit.io/p2slevyg1/6013562b-e9ae-4b62-8d89-87be625d7eef-removebg-preview.png?updatedAt=1701857515366"
              width={200}
            />
            <p className="mt-3 leading-5 ">
              Welcome to our Foodelicious, where culinary magic meets
              exceptional dining. Explore a world of flavors, indulge in
              delectable creations, and embark on a gastronomic journey like no
              other. Discover your new food paradise!
            </p>
          </Col>
          <Col md={2} sm={12} className=" flex row">
            <p className="text-center font-sans leading-loose mt-4">
              <h6 className="lg:ml-[33px] ">SERVICE</h6>
              <span className="lg:ml-[15px]">Home</span> <br />
              <span className="lg:ml-[15px]">Menu</span><br />
              <span className="lg:ml-[4px]">Blog</span> <br />
              <span className="lg:ml-[29px]">About Us </span>
              <br />
              <span className="lg:ml-[33px]">Contact Us</span> <br />
            </p>
          </Col>
          <Col md={4} sm={12} className="flex row ">
            <p className="text-center font-sans  mt-4">
              <h6 className="lg:ml-[-37px] ">CONTACT US</h6>
              <p className="lg:ml-[88px] flex mt-4 col">
                <h5>
                  <IoLocationOutline />
                </h5>
                <span className="ml-2" style={{fontSize:12}}>80 EAST STREET BEDMINSTER,BS34EY
                  
                </span>
              </p>

              <p className="lg:ml-[88px]  flex  col">
                <h5>
                  <FiPhone />
                </h5>
                <span className="text-sm ml-2 leading-5"> 011700000000</span>
              </p>
            </p>
          </Col>
          <Col md={3} sm={12} className="">
            <p className="text-center font-sans  mt-5">
              <h5 className="lg:ml-[77px]">GET NEW & OFFER</h5>
              <p className="lg:ml-[78px] ">
                <InputGroup className="mt-3" style={{width:290}}>
                  <Form.Control
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary text-white" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </p>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="bg-dark rounded">
          <Col className="pt-3">
            <p className="text-sm px-5">Copyright 2023 Designed By</p>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <p className="text-sm pt-3">
              Terms & Condition | Privacy | Support
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
