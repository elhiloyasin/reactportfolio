
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Yaze from '../images/yaze.jpg';
import Html from '../images/html.png';
import Css from '../images/css.jpg';
import JavaScript from '../images/javascript.png';
import Jquery from '../images/jquery.png';
import Bootstrap from '../images/bootstrap.png';
import Node from '../images/node.png';
import Express from '../images/express.png';
import Mysql from '../images/mysql.jpg';
import mongodb from '../images/mongodb.png';
import Reactjs from '../images/reactjs.png';
import Nodepackage from '../images/nodepackage.png';
import Mern from '../images/mern.jpg';
import Github from '../images/github.png';
import Button from 'react-bootstrap/Button';



function AboutMe() {
    return (
        <>
            <div className='title-container'>
                <h1>About Me</h1>
            </div>
            <Container>

                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image
                            id='image'
                            src={Yaze}
                            thumbnail />
                    </Col>
                </Row>

                <div className='bio-info'>
                    <p>
                    A full stack developer with over 2 years of experience in full stack development. Passionate about creating high performance and user friendly applications by writing efficient, testable and maintainable code. Proven skills in problem solving and strong foundation in Agile methodologies and Scrum practice.
                    </p>

                </div>
                <div className='skills-title'>
                    <h1>Skills</h1>
                </div>
                <div>
              <img src={Html} className='technologies'/>
              <img src={Css} className='technologies'/>
              <img src={JavaScript} className='technologies'/>
              <img src={Jquery} className='technologies'/>
              <img src={Bootstrap} className='technologies'/>
              <img src={Node} className='technologies'/>
              <img src={Express} className='technologies'/>
              <img src={Mysql} className='technologies' />
              <img src={mongodb} className='technologies' />
              <img src={Reactjs} className='technologies react-color' />
              <img src={Nodepackage} className='technologies' />
              <img src={Mern} className='technologies' />
              <img src={Github} className='technologies gitty'  />
              <a className='projectlead-button'  href='./Projects'>< Button>VIEW PROJECTS</Button></a>
                </div>
               
                
            </Container>



        </>



    )
}



export default AboutMe