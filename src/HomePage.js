import Carousel from 'react-bootstrap/Carousel';
import Cointainer from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function HomePage() {
    return (
        <div>
            <Cointainer>
             <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 slide"
                src="Images/slide1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide"
                src="Images/img2.svg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide"
                src="Images/img3.svg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>
        <Row>
            <div className='col-12 col-md-6 mb20'>
            <Card className='c61B570'>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
                </Card>
            </div>
            <br/>
            <div className='col-12 col-md-6 mb20'>
            <Card className='c61B570'>
            <Card.Img variant="top" src="Images/stock1.jfif" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
        </Row>
        <br/>
        <Row>
            <Card className="phaseCard text-white">
                <Card.Img className="myDesk" src="Images/RylanDesk.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Row>
        </Cointainer>
        <footer>
            <p className='ftxt'>Made by Rylan Workman</p>
        </footer>
        </div>
    )
}
export default HomePage