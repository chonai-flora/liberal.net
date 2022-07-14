import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <Container className="about">
            <Row>
                <Col md={12}>
                    <h1>この取り組みについて</h1>
                    <br />
                    <p>
                        &emsp;世の中には貧困で~~~(なんか書く)
                        SDGsの目標1である「貧困をなくそう」を~~~(なんか書く)
                    </p>
                    <p>
                        そこで私たちは「ご飯だよ！全員集合！」と題して、
                        新しい移動式子ども食堂のシステムを提案します。
                    </p>
                    <h4>Vision</h4>
                    <p> - 世界の貧困解決、耕作放棄地問題解決、失業者問題解決</p>
                    <h4>Goals</h4>
                    <p> - 子ども食堂の可能性を広げる</p>
                    <h4>Targets</h4>
                    <p> - 移動式子ども食堂の新しいシステムを提案</p>
                    <br />
                    <p>
                        地域の子ども(保護者も可)、失業者や何らかの理由で就職できない人、
                        土地を所有しているが使っていない人を対象とします。
                    </p>

                    <br />
                    <p>(なんか図置く)</p>
                </Col>
            </Row>
        </Container >
    );
}

export default About;