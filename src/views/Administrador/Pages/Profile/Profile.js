import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faEnvelope, faLocationDot, faMobile, faPerson } from '@fortawesome/free-solid-svg-icons';
import "./profile.css"

function Profile() {

  
  return (
    <>
      <div className="container">
        <Card>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-stats d-flex justify-content-center'>
                </div>
              </div>
            </Row>
            <div className='text-center'>
              <h3>Qwest</h3>
              <h4><FontAwesomeIcon icon={faEnvelope} />&nbsp; :- <span>qwest@gmail.com</span></h4>
              <h4><FontAwesomeIcon icon={faMobile} style={{color: "#1f5132",}}/>&nbsp; :- <span>qwest@gmail.com</span></h4>
              <h4><FontAwesomeIcon icon={faPerson} />&nbsp; :- <span>qwest@gmail.com</span></h4>
              <h4><FontAwesomeIcon icon={faLocationDot} />&nbsp; :- <span>qwest@gmail.com</span></h4>
              <h5><FontAwesomeIcon icon={faCalendarDay} />&nbsp; Fecha de Creacion&nbsp;:- <span>qwest@gmail.com</span></h5>
              <h5><FontAwesomeIcon icon={faCalendarDay} />&nbsp; Fecha de Modificación&nbsp;:- <span>qwest@gmail.com</span></h5>

            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile