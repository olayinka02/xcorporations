import { Container, Stack, Row, Col } from 'react-bootstrap';
import ProductIcon from '../Assets/ProoductIcon';

import '../Styles/cardstyle.css';

function CardDasboard() {
  return (
    <Container  fluid style={{width:100+'%'}}>
      <Row>
        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <div>production</div>
            <div className="ms-auto"><ProductIcon /></div>
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <div>production</div>
            <div className="ms-auto"><ProductIcon /></div>
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <div>production</div>
            <div className="ms-auto"><ProductIcon /></div>
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <div>production</div>
            <div className="ms-auto"><ProductIcon /></div>
          </Stack>
          </Container>
        </Col>

      

       

        
       
       
      </Row>
    </Container>
  );
}

export default CardDasboard;