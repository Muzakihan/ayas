import { Container, Row, Col, Card, Image} from "react-bootstrap"
import back4Blood from "../asset/best/back4blood.jpg"
import crysis3 from "../asset/best/crysis3.jpg"
import walkingDead from "../asset/best/theWalkingDead.jpg"
import thief from "../asset/best/thief.jpg"
import untilDawn from "../asset/best/untilDawn.jpg"


function BestGame () {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">BEST GAMES</h1>
                <br/>
                <Row>
                <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4Blood} alt="Back 4 Blood Game" className="images" />
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">A</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Crysis 3 Game" className="images" />
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">A</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    {/* <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil} alt="Resident Evil 2 Game" className="images" />
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">B</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col> */}
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={walkingDead} alt="The Walking Dead Game" className="images" />
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">C</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Thief Game" className="images" />
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">E</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="Until Dawn Game" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">F</Card.Title>
                                        <Card.Text className="text-left">This is a wider card with natural lead-in to additional content</Card.Text>
                                        <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;