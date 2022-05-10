import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Navigationbar.css'
//import { useNavigate } from "react-router-dom";
import { Button, Card,Col,Row,Container} from "react-bootstrap";
//import { Card } from "material-ui";
import Records from './courseList.json';

function Dashboard(){
    
    return (
        <div className="container">
            {
            Records.map( record => {
                return(
                    <Container>
                      <Row>
                        <Col>
                            <div class="card text-center" key={record.course_id}>
                                <div class="overflow">
                                   <img variant="top" src={record.image} alt="" />
                                </div>
                                <div class="card-body text-dark" style={{ width: '18rem' }}>
                                    <Card.Title>{record.course_name}</Card.Title>
                                    <Card.Text>
                                        Course ID : {record.course_id}<br/>
                                        Start Date : {record.enrollment_start}<br/>End Date : {record.enrollment_end}
                                    </Card.Text>
                                    <Button variant="primary">Unenroll Now</Button>
                                </div>
                            </div>
                        </Col>
                      </Row>
                    </Container>
                )
            })
        }
        </div>
    );
};

export default Dashboard