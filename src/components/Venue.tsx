import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Venue = () => {
    return (
        <Container className="venue">
            <Row>
                <Col md={12}>
                    <h1>開催状況</h1>
                    <br />
                    <ul>
                        <li>
                            毎月第2・4土曜日 AM11:00~PM14:00<br />
                            ○○公民館
                        </li>
                        <li>
                            10/23(日) AM11:00~PM14:00<br />
                            △△公民館
                        </li>
                        <li>
                            そのうち<br />
                            どこか
                        </li>
                    </ul>

                    <p>(地図とかリンクとか貼る)</p>
                </Col>
            </Row>
        </Container >
    );
}

export default Venue;