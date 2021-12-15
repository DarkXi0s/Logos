import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
//Ant Lib
import { Image, Space, Divider } from "antd";
// core components
import ExamplesNavbar from "componentsLogos/Navbars/EventNavBar";
import LandingPageHeader from "componentsLogos/Headers/LandingPageHeader.js";
import DefaultFooter from "componentsLogos/Footers/DefaultFooter";
//React Share
import ShareB from "views/index-sectionsLogos/ShareButton";
//ImageGallerie
import AlbumGallerie from "views/index-sectionsLogos/AlbumGallerie";
//Last Update

import ToTheTop from "views/index-sectionsLogos/ButtonToTop";
function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <Container fluid>
          <Row>
            <Col
              className="ml-auto mr-auto text-center"
              md="6"
              style={{ paddingBottom: "10%" }}
            >
              <h1 className="title">L'écriture entre parole et silence</h1>
              <h5
                style={{
                  padding: "20px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Les écrivains et les poètes (comme les musiciens et les hommes
                de l’art en général) partagent l’intuition fondatrice que le
                silence est au cœur de leur création. Le défi paradoxal de la
                littérature n’est-il pas d’exprimer ce qui ne peut l’être ?{" "}
                <br /> de mobiliser dans le langage des ressources situées
                ailleurs que dans l’expression ?<br /> Rendez-vous avec
                l'écrivaine et plasticienne maroco-suisse Bouthaïna Azami,
                samedi 30 octobre à Fès, pour explorer les puissances muettes du
                langage et les voix bruyantes du silence.
              </h5>

              <Row style={{ paddingLeft: "30px" }}>
                <h4>
                  <FaMapMarkerAlt color="#1AA5E1" size="18px" />
                  {" - "}
                  Address :
                </h4>
                <ul>
                  <li style={{ marginLeft: "25px" }}>
                    <h5>
                      Derb ElHrichi, ElHomia Quartier Douh,
                      <br /> El Bartha, Fes Elmadina
                    </h5>
                  </li>
                </ul>
              </Row>
              <Row style={{ paddingBottom: "20px", paddingLeft: "30px" }}>
                <h4>
                  <FaPhoneAlt color="#1AA5E1" size="18px" />
                  {" - "}
                  Téléphone :
                </h4>

                <ul style={{ marginTop: "2px" }}>
                  <li>
                    <h5>05.35.63.54.32</h5>
                  </li>
                </ul>
              </Row>
              <Row style={{ paddingBottom: "20px", paddingLeft: "30px" }}>
                <h4>
                  <FaClock color="#1AA5E1" size="18px" />
                  {" - "}
                  Date :
                </h4>
                <ul style={{ marginTop: "2px", marginLeft: "52px" }}>
                  <li>
                    <h5>30 October 2021 A 15H00</h5>
                  </li>
                </ul>
              </Row>
            </Col>
            <Col style={{ textAlign: "center" }} md="6">
              <Space size={12}>
                <Image
                  height="auto"
                  width="500px"
                  style={{
                    marginTop: "-9.3vw",
                  }}
                  src={require("assets/img/eventlogos.jpg").default}
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={"auto"}
                    />
                  }
                />
              </Space>
              <ShareB />
            </Col>
          </Row>
          <Row>
            <Divider style={{ padding: "40px" }} orientation="left" plain>
              Album
            </Divider>
            <AlbumGallerie
              Img1={require("assets/img/eventlogos.jpg").default}
              Img2={require("assets/img/eventlogos3.jpg").default}
              Img3={require("assets/img/eventlogos2.jpg").default}
              Img4={require("assets/img/eventlogos.jpg").default}
            />
          </Row>
          <Row>
            <Divider orientation="left">Video De L'événements</Divider>
          </Row>
        </Container>

        <ToTheTop />
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
