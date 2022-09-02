import React, { useState } from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../components/card/Card";
import Form from "../components/form/Form";
import Thanks from "../components/thank-you/Thanks";

const Home = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = (e) => {
    // console.log(e);

    setButtonClicked(!buttonClicked);
  };
  return (
    <Container fluid className="main-container">
      <Row className="inner-container ">
        <Col lg={4} md={12} className="left-side ">
          <Card />
        </Col>
        <Col className="right-side">
          {buttonClicked ? (
            <Thanks clicked={handleClick} />
          ) : (
            <Form clicked={handleClick} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
