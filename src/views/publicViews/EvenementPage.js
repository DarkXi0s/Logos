import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "assets/css/logosStyle.css";
import Images from "../index-sectionsLogos/Images";

//MUI design
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Pagination from "@mui/material/Pagination";

//Event Component
import EventComp from "../SectionEvent/EventComponent";
// core components
import ExamplesNavbar from "componentsLogos/Navbars/PublicationNavbar";
import LandingPageHeader from "componentsLogos/Headers/LandingPageHeader.js";
import DefaultFooter from "componentsLogos/Footers/DefaultFooter.js";
import TitlePage from "views/index-sectionsLogos/PageTitle";
import SearchField from "views/index-sectionsLogos/SearchField";
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
        <Images />
        <TitlePage title={"ÉVÉNEMENTS "} />
      </div>
      <div className="section section-team text-center">
        <SearchField />
        <Container fluid>
          <Row style={{ padding: "2%" }}>
            <Col md="2"></Col>
            <Col md="8">
              <FormControl component="fieldset">
                <FormLabel component="legend">Sort By :</FormLabel>
                <RadioGroup
                  row
                  aria-label="Sort By"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="dates"
                    control={<Radio />}
                    label="dates"
                  />
                  <FormControlLabel
                    value="popularity"
                    control={<Radio />}
                    label="popularity"
                  />

                  <FormControlLabel
                    value="A-Z"
                    control={<Radio />}
                    label="A-Z"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row style={{ padding: "1%" }}>
            <Col md="2"></Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos.jpg").default}
                title={"L'écriture entre parole et silence"}
                description={
                  " Les écrivains et les poètes ( comme les musiciens et les hommeS de l’art en général) partagent l’intuition fondatrice que le silence est au cœur de leur création. Le défi paradoxal de la  littérature n’est-il pas d’exprimer ce qui ne peut l’être ? Rendez-vous avec lécrivaine et plasticienne maroco-suisse Bouthaïna Azami"
                }
                link={"/event-page-one"}
                date={"LE 30-10-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos2.jpg").default}
                title={
                  "Agora en ligne / La post-modernité : le crépuscule de la raison ? "
                }
                description={
                  " Les écrivains et les poètes ( comme les musiciens et les hommeS de l’art en général) partagent l’intuition fondatrice que le silence est au cœur de leur création. Le défi paradoxal de la  littérature n’est-il pas d’exprimer ce qui ne peut l’être ? Rendez-vous avec lécrivaine et plasticienne maroco-suisse Bouthaïna Azami"
                }
                link={"/event-page-one"}
                date={"LE 15-10-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos6.jpg").default}
                title={
                  "Les communs et territoires de vécu, une nouvelle quȇte de sens?"
                }
                description={
                  " Les écrivains et les poètes ( comme les musiciens et les hommeS de l’art en général) partagent l’intuition fondatrice que le silence est au cœur de leur création. Le défi paradoxal de la  littérature n’est-il pas d’exprimer ce qui ne peut l’être ? Rendez-vous avec lécrivaine et plasticienne maroco-suisse Bouthaïna Azami"
                }
                link={"/event-page-one"}
                date={"LE 18-06-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Col md="2"></Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos3.jpg").default}
                title={"AGORA au Café du Cinéma Renaissance #2"}
                description={
                  " Les Agoras au café vous donnent un nouveau rendez-vous ! Nous avons le plaisir de vous inviter à la 4ème Agora de ce Cycle autour de la  Culture en résilience avec un intervenant de renom, une grande figure de la diversité culturelle au Maroc et un acteur culturel reconnu au niveau international M.Brahim El Mazned."
                }
                link={"/event-page-one"}
                date={"LE 18-06-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos4.jpg").default}
                title={"Livre du Mois : Douce schizophrénie"}
                description={
                  "Présentation et signature du livre du Pr. Mohamed Bernoussi intitulé Douces Schizophrénies, études sémiotiques de la culture marocaine publié aux éditions MIMESIS PHILOSOPHIE L’objet de ce livre est de saisir un aspect fondamental de la culture marocaine et arabo-musulmane  ..."
                }
                link={"/event-page-one"}
                date={"LE 18-06-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col>
              <EventComp
                Img={require("assets/img/eventlogos5.jpg").default}
                title={"Livre du Mois : Esthétique du film politique"}
                description={
                  "Présentation et signature du livre du Pr. Mohamed Bernoussi intitulé Douces Schizophrénies, études sémiotiques de la culture marocaine publié aux éditions MIMESIS PHILOSOPHIE L’objet de ce livre est de saisir un aspect fondamental de la culture marocaine et arabo-musulmane  ..."
                }
                link={"/event-page-one"}
                date={"LE 18-06-2021"}
                lieu={"RABAT"}
              />
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Pagination count={3} color="primary" />
            </Col>
          </Row>
        </Container>
      </div>

      <ToTheTop />
      <DefaultFooter />
    </>
  );
}

export default LandingPage;
