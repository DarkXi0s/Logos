import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// core components
import Carousel from "./Carousel";
function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons" id="Events-section">
        <Container>
          <Row>
            <Col className="text-center" lg="6">
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                <h2>Événements</h2>
              </p>
              <h5 style={{ textAlign: "justify" }} className="description">
                Now UI Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Now UI Kit PRO Make
                sure you check all of them and use those that you like the most.
              </h5>
              <div style={{ marginBottom: "30px" }} >
                <Button
                  className="btn-round "
                  style={{ width: "60%" }}
                  color="info"
                  size="lg"
                  tag={Link}
                  to="/evenement-page"
                >
                  Plus d'évènements ...
                </Button>
              </div>
            </Col>
            <Col>
              <Carousel />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
