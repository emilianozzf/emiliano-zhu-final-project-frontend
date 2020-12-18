import React from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import mongo from "../../static/mongo.png";
import express from "../../static/express.png";
import react from "../../static/react.png";
import node from "../../static/node.png";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
   >
      {" "}
      <Row className="mb-4">
         <h1 className="text-white display-4 font-weight-bold">COVID-19 Discussion Forem</h1>
      </Row>
      <Row>
         <Col>
            <img src={mongo} alt="mongo" className="img-fluid" />
         </Col>
         <Col>
            <img src={express} alt="express" className="img-fluid" />
         </Col>
         <Col>
            <img src={react} alt="react" className="img-fluid" />
         </Col>
         <Col>
            <img src={node} alt="node" className="img-fluid" />
         </Col>

      </Row>
      <h5 className="text-white mt-4">Welcome to Discussion Forem! Click Entert o view posts.</h5>
      <Row className="mb-4">

      <Link to="/blog">
         <Button
             variant="danger"
             className="mt-3 font-weight-bold"
         >
            Enter
         </Button>
      </Link>
      </Row>
   </Container>
);

export default Landing;
