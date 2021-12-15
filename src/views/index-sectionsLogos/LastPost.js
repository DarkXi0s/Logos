import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

//React Icons
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Slider
import Slider from "react-slick";

const LastPost = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section section-team text-center">
      <Container fluid>
        <h2 className="title">Événements{" & "}Projets </h2>
        <div className="team">
          <Row>
            <Col md="2"> </Col>
            <Col md="8">
              <Slider {...settings}>
                <Button color="neutral">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/avatar.jpg").default}
                  ></img>
                  <h4 className="title">Titre De L'événements</h4>
                  <p className="category text-info">Événements</p>
                  <p
                    style={{ textAlign: "justify", padding: "3%" }}
                    className="description"
                  >
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      links
                    </a>
                    for people to be able to follow them outside the site.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <FaClock size="14px" /> <h6> LE 21-09-2021</h6>
                    </div>
                    <div style={{ display: "flex" }}>
                      <FaMapMarkerAlt size="14px" />
                      <h6> RABAT</h6>
                    </div>
                  </div>
                </Button>
                <Button color="neutral">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/avatar.jpg").default}
                  ></img>
                  <h4 className="title">Titre De Projet</h4>
                  <p className="category text-info">Projet</p>
                  <p
                    style={{ textAlign: "justify", padding: "3%" }}
                    className="description"
                  >
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <FaClock size="14px" /> <h6> LE 21-09-2021</h6>
                    </div>
                    <div style={{ display: "flex" }}>
                      <FaMapMarkerAlt size="14px" />
                      <h6> RABAT</h6>
                    </div>
                  </div>
                </Button>
                <Button color="neutral">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/ryan.jpg").default}
                  ></img>
                  <h4 className="title">Titre De L'événements</h4>
                  <p className="category text-info">Événement</p>
                  <p
                    style={{ textAlign: "justify", padding: "3%" }}
                    className="description"
                  >
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      links
                    </a>
                    for people to be able to follow them outside the site.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <FaClock size="14px" />
                      <h6> LE 21-09-2021</h6>
                    </div>
                    <div style={{ display: "flex" }}>
                      <FaMapMarkerAlt size="14px" />
                      <h6> RABAT</h6>
                    </div>
                  </div>
                </Button>

                <Button color="neutral">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/eva.jpg").default}
                  ></img>
                  <h4 className="title">Titre De Projet</h4>
                  <p className="category text-info">Projet</p>
                  <p
                    style={{ textAlign: "justify", padding: "3%" }}
                    className="description"
                  >
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <FaClock size="14px" />
                      <h6> LE 21-09-2021</h6>
                    </div>
                    <div style={{ display: "flex" }}>
                      <FaMapMarkerAlt size="14px" />
                      <h6> RABAT</h6>
                    </div>
                  </div>
                </Button>
              </Slider>
            </Col>
            <Col md="2"> </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LastPost;
