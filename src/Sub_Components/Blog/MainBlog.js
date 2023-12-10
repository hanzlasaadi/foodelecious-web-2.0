import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const MainBlog = () => {
  return (
    <div class="pt-[3rem]">
      <div>
        <div className="row">
          <div className="bg-[url('https://ik.imagekit.io/2nuimwatr/blog-bg.jpg?updatedAt=1702206496176')] relative bg-center bg-no-repeat bg-cover h-[22rem]">
            <div class="text-white py-5 mt-[2rem] font-sans text-6xl font-bold text-center">
              Blog
            </div>
            <div class="text-white py-5 font-sans text-3xl font-bold text-center">
              {" "}
              Home &gt; Blog
            </div>
          </div>
        </div>
        <div className="row d-flex justify-center items-center m-5 ">
          <Container fluid className="my-16 lg:px-32 xxl:px-32 md:px-20">
            <Row className="rounded-[0px]">
              <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                <Link to="post1" terget="_blank" class="no-underline">
                  <Card class="my-2 p-3 bg-white shadow-md border  rounded-lg">
                    <Card.Img
                      variant="top"
                      src="https://ik.imagekit.io/2nuimwatr/Blog1.png?updatedAt=1701786962110"
                      class="p-3"
                    />
                    <Card.Body>
                      <Card.Text class="text-slate-600 text-left">
                        Great food and reasonable prices. recommended to best
                        time with Great customer service Great food and
                        reasonable prices. recommended to best time with Great
                        customer service Great food and reasonable prices.
                        recommended to best time with Great customer service...
                      </Card.Text>
                      <Card.Text class="text-right text-slate-600 cursor-pointer">
                        Read More &gt;&gt;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                <Link to="post2" terget="_blank" class="no-underline">
                  <Card class=" p-3 bg-white shadow-md border  rounded-lg">
                    <Card.Img
                      variant="top"
                      src="https://ik.imagekit.io/2nuimwatr/blog2.png?updatedAt=1701786962088"
                      class="p-3"
                    />
                    <Card.Body>
                      <Card.Text class="text-slate-600 text-left">
                        Great food and reasonable prices. recommended to best
                        time with Great customer service Great food and
                        reasonable prices. recommended to best time with Great
                        customer service Great food and reasonable prices.
                        recommended to best time with Great customer service...
                      </Card.Text>
                      <Card.Text class="text-right text-slate-600 cursor-pointer">
                        Read More &gt;&gt;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                <Link to="post3" terget="_blank" class="no-underline">
                  <Card class=" p-3 bg-white shadow-md border  rounded-lg">
                    <Card.Img
                      variant="top"
                      src="https://ik.imagekit.io/2nuimwatr/blog3.png?updatedAt=1701786962017"
                      class="p-3"
                    />
                    <Card.Body>
                      <Card.Text class="text-slate-600 text-left">
                        Great food and reasonable prices. recommended to best
                        time with Great customer service Great food and
                        reasonable prices. recommended to best time with Great
                        customer service Great food and reasonable prices.
                        recommended to best time with Great customer service...
                      </Card.Text>
                      <Card.Text class="text-right text-slate-600 cursor-pointer">
                        Read More &gt;&gt;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainBlog;
