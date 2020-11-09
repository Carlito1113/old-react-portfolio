import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    
    return(
        <footer className="mt-5">
            <Container>
                <Row>
                    <col className="p-0" md={3} sm={12}>
                        Carlito Algarin
                    </col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;