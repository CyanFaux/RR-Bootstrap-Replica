import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
  return (
    <Container fluid style={{ backgroundColor: "#deedd6", height: "15rem", textAlign: "center" }}>
      <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
        <Col>
          <div style={{ width: "578px", fontFamily: "Roboto" }} >
            <h1 style={{ fontSize: "41px" }}>Order groceries for delivery or pickup today</h1>
            <p style={{ fontSize: "1rem" }}>
              Whatever you want from local stores, brought right to your door.
            </p>
          </div>
        </Col>
        <Col style={{ height: "100%" }} >
          <img src={"../homepage.jpg"} alt="Homepage Image"style={{ height: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
