import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import placeholder from "../../images/basketball_image.jpg";
import "./style.css"

function Profiler(props) {

  
    const photo = props.profilePhotoURL ? props.profilePhotoURL : placeholder;
  const url = props.profilePhotoURL ? props.profilePhotoURL : "";
  

  return(
    <div className="profileWrapper">
    <Container>
    <Row>
      <Col>
        <Button variant="success" size="lg" onClick={props.showWidget}>
          Upload picture
        </Button>
        <br />

        <img className="profileImg" src={photo} />
        <br />

        <p>
          This is the picture URL:{" "}
          <span>
            <a href={url}>{url}</a>
          </span>
        </p>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default Profiler;