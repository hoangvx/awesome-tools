import React, { Component } from 'react';
import { 
  Container, Row, Col,
  Button, InputGroup, InputGroupAddon,
  FormInput,
  ListGroup,
  ListGroupItem
} from 'shards-react';

class ScrumEstimationCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessions: [
        "demo1",
        "demo2"
      ],
      title: '',  
      members: []
    }
  }

  addNewSession = () => {
    let { sessions, title } = this.state;
    sessions.push(title);
    title = '';
    this.setState({ sessions, title });
  }

  render() {
    const { title, sessions } = this.state;
    return (
      <Container>
        <Row>
          <Col className="p-4">
            <h1>Point Card</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <InputGroup>
              <FormInput
                value={title}
                onChange={({ target: { value: title } }) => this.setState({ title })}
              />
              <InputGroupAddon type="append">
                <Button onClick={() => this.addNewSession()} outline>Create Session</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <ListGroup>
              {sessions.map(item => (
                <ListGroupItem>
                  <Row className="align-items-center">
                    <Col>
                      <h5 className="mb-0">{item}</h5>
                    </Col>
                    <Col className="text-right">
                      <Button outline size="sm">X</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ScrumEstimationCard;