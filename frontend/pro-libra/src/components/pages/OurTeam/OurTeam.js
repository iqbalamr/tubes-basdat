import React from 'react'
import {
  Card,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import './OurTeam.css';
import OurTeamList from './OurTeam.json';

function OurTeam() {
  return (
    <Container className="our-team-page">
      <Row>
        <Col md={12} xs={12}>
          <h1>This Is Our Team !</h1>
        </Col>
        <Col md={12} xs={12} className="team-list">
        {OurTeamList.map((member) => {
          return(
            <Card className="members-cards">
          <div className="member-img">
          <Card.Img className="member-picture" src={member.src}/>
          </div>
          <Card.Body className="member-detail">
            <div className="desc-member">
              <div >
                <label>
                  <h4>Name    :</h4>
                </label>{" "}
                {member.Nama}
              </div>
              <div>
            <label>
              <h4>NIM   :</h4>
            </label>{" "} 
            {member.NIM}
          </div>
          <div>
            <label>
              <h4>Email   :</h4>
            </label>{" "} 
            {member.Email}
          </div>
          <div>
            <label>
              <h4>As    :</h4>
            </label>{" "}
            {member.id}
          </div>
          <div>
            <label>
              <h4>Job   :</h4>
            </label>{" "}
              {member.LingkupKerja}
          </div>
            </div>
          </Card.Body>
        </Card>
          )
        })}
        </Col>
      </Row>
    </Container>
  )
}

export default OurTeam;
