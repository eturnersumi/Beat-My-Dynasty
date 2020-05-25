import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import placeholder from "../../images/basketball_image.jpg";
import "./style.css"
require('dotenv').config()

function Profiler() {

  const [photo, setPhoto] = useState();
  const [url, setURL] = useState("");
  var userObj={};
  userObj = JSON.parse(localStorage.getItem("userData"))
  if (!userObj) {
    userObj={};
  }
  let userName = userObj.username;
  let favTeam = userObj.favoriteTeam;

  console.log("this is your username: ", userName)
  console.log("this is your fav team: ", favTeam)
  

  function showWidget() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dzpwlldac',
        uploadPreset: 'g6lwdxhy',
        sources: ["local", "camera"]
      },
      (error, result) => {
        if (result.event === "success") {
        
          const file = result.info.url; 
          console.log("this is the file: ", file);
          //setPhoto({ photo: file });
          setPhoto(file)
        }
      }
    );
    widget.open();
  };
  
  return(
    <div className="profileWrapper">
    <Container>
    <Row id="profrow">
      <Col>
        <Button id="profbtn" variant="success" size="lg" onClick={showWidget}>
          Upload your profile picture
        </Button>
        <br />

        <img 
        className="profileImg" 
        src={photo} 
        >
        
        </img>
        <br />

      </Col>
      
      <Col>
        <h3 id="welcome">Welcome {userObj ? favTeam : "basketball"} fan!</h3>
        <p>
          Customize your profile and connect with your friends!
        </p>
        <p>
        
        <label htmlFor="bio"><b>--Bio--</b></label>
        <br />
        <textarea placeholder="Tell us about yourself" name="bio"/>
        <button type="submit" className="save">
          Save
        </button>
        </p>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default Profiler;