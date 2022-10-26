import { Container, Stack, Row, Col, Image } from 'react-bootstrap';
import ProductIcon from '../Assets/ProoductIcon';

import departments from '../Assets/departments.svg';
import production from '../Assets/production.svg';
import users from '../Assets/users.svg';
import sales from '../Assets/sales.svg';
import Arrow from '../Assets/Arrow.svg';

import '../Styles/cardstyle.css';


function CardDasboard() {
  return (
   
      <Row>
        <Col xs={12} sm={6} md={3} >
          <Container fluid className="EachCard" >
          <Stack direction="horizontal" >
            <Stack gap={1} style={{marginTop:1.5+'rem',}}>
              <div>Production</div>
              <div>45</div>
            </Stack>
            <Stack gap={1}>
              <div  className="ms-auto">
                <span style={{display: 'block',  backgroundColor: 'red', borderRadius: 45 + 'px', height: 22 + 'px', width: 22 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
              </div>
              <div className="ms-auto">
                 <Image src={production} fluid alt="production" />
              </div>
              <div  className="ms-auto">
                 <Image src={Arrow} fluid alt="arrow" />
              </div>

            </Stack>
           
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <Stack gap={1} style={{marginTop:1.5+'rem',}}>
              <div>Production</div>
              <div>45</div>
            </Stack>
            <Stack gap={1}>
              <div  className="ms-auto">
                <span style={{display: 'block',  backgroundColor: 'red', borderRadius: 45 + 'px', height: 22 + 'px', width: 22 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
              </div>
              <div className="ms-auto">
                 <Image src={sales} fluid alt="sales" />
              </div>
              <div  className="ms-auto">
                 <Image src={Arrow} fluid alt="arrow" />
              </div>

            </Stack>
           
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <Stack gap={1} style={{marginTop:1.5+'rem',}}>
              <div>Production</div>
              <div>45</div>
            </Stack>
            <Stack gap={1}>
              <div  className="ms-auto">
                <span style={{display: 'block',  backgroundColor: 'red', borderRadius: 45 + 'px', height: 22 + 'px', width: 22 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
              </div>
              <div className="ms-auto">
                 <Image src={users} fluid alt="users" />
              </div>
              <div  className="ms-auto">
                 <Image src={Arrow} fluid alt="arrow" />
              </div>

            </Stack>
           
          </Stack>
          </Container>
        </Col>

        <Col xs={12} sm={6} md={3} >
          <Container className="EachCard" >
          <Stack direction="horizontal" >
            <Stack gap={1} style={{marginTop:1.5+'rem',}}>
              <div>Production</div>
              <div>45</div>
            </Stack>
            <Stack gap={1}>
              <div  className="ms-auto">
                <span style={{display: 'block',  backgroundColor: 'red', borderRadius: 45 + 'px', height: 22 + 'px', width: 22 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
              </div>
              <div className="ms-auto">
                 <Image src={departments} fluid alt="departments" />
              </div>
              <div  className="ms-auto">
                 <Image src={Arrow} fluid alt="arrow" />
              </div>

            </Stack>
           
          </Stack>
          </Container>
        </Col>

      

       

        
       
       
      </Row>
 
  );
}

export default CardDasboard;