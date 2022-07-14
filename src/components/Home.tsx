import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="home">
            <Row>
                <Col md={12}>
                    <h2>ほーむ</h2>
                    <Link to="/about">概要とか</Link><br />
                    <Link to="/venue">開催場所とか</Link><br />
                    <Link to="/contact">連絡先とか</Link><br />
                </Col>
            </Row>
        </Container >
    );
}

export default Home;