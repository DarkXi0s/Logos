import React from "react";
import "assets/css/logos.css"
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Images() {
  return (
    <>
      <Container fluid style={{ padding: "3%", backgroundColor: "whitesmoke" }}>
        <Row>
          <Col className="ml-auto mr-auto text-center">
            <p
            
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              BIENVENUE SUR
              <h2>LOGOS</h2>
            </p>
            <h4
            className="DescTitleHome"
            >
              LOGOS - Organisation Non Gouvernementale (ONG) - <br /> Est Une
              assise Humaine , Où "penser" n'est pas un fait élitiste , Mais Un
              Droit De Citoyenneté Démocratiquement Fondé.
            </h4>
          </Col>
        </Row>
        ;
      </Container>
    </>
  );
}

export default Images;
