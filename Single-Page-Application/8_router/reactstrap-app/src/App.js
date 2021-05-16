import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Row, Col, Container, Progress, Spinner } from 'reactstrap';


function App() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Alert color="primary">
                            This is a primary alert — check it out!
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary">primary</Button>
                    </Col>
                    <Col>
                        <Spinner type="grow" color="primary" />
                    </Col>
                    <Col>
                        <Progress value="25" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
