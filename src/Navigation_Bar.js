import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { Badge } from "antd";
import { IoIosSearch } from "react-icons/io";

const Navigation_Bar = () => {
  const [navSize, setnavSize] = useState("4rem");
  const [topNav, setTopNav] = useState(40); 
  const [navColor, setnavColor] = useState("transparent");


  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
    window.scrollY > 10 ? setTopNav(0) : setTopNav(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <div className="">
    <nav
          className="fixed w-100 mx-0 drop-shadow-md "
          style={{
            backgroundColor: navColor,
            height: navSize,
            zIndex: "2",
          }}
        >
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          class="p-1"
          className="bg-white drop-shadow-sm "
        >
          <Container className="p-1">
            <Navbar.Brand href="/">
              <img
                src="https://ik.imagekit.io/p2slevyg1/e54ead5d-cee6-45c4-8fef-7845d6baf6f3.jpg?updatedAt=1701784899295"
                width={150}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto text-sm gap-5 font-sans">
                <Link
                  to="#"
                  className="no-underline text-dark hover:text-amber-500 relative"
                >
                  HOME{" "}
                  <span
                    className="absolute text-secondary hidden md:block"
                    style={{ marginTop: -21, marginLeft: 60 }}
                  >
                    |
                  </span>{" "}
                </Link>
                <Link
                  to="#"
                  className="no-underline text-dark hover:text-amber-500 relative"
                >
                  MENU{" "}
                  <span
                    className="absolute text-secondary hidden md:block"
                    style={{ marginTop: -21, marginLeft: 60 }}
                  >
                    |
                  </span>{" "}
                </Link>
                <Link
                  to="#"
                  className="no-underline text-dark hover:text-amber-500 relative"
                >
                  BLOG{" "}
                  <span
                    className="absolute text-secondary hidden md:block"
                    style={{ marginTop: -21, marginLeft: 60 }}
                  >
                    |
                  </span>{" "}
                </Link>
                <Link
                  to="#"
                  className="no-underline text-dark hover:text-amber-500 relative"
                >
                  CONTACT US{" "}
                </Link>
              </Nav>
              <Nav className=" gap-3">
                <h6 className="text-2xl md:block hidden text-secondary">
                  <IoIosSearch />
                </h6>
                <Badge
                  count="0"
                  color="#E57C35"
                  showZero
                  className="md:block hidden"
                >
                  <span className="text-2xl md:block hidden text-secondary">
                    <LuShoppingCart />
                  </span>
                </Badge>
                <h6 className="text-2xl md:block hidden text-secondary">
                  <AiOutlineUser />
                </h6>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Navigation_Bar;
