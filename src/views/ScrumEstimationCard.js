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
      sessions: [],
      title: '',  
      members: []
    }
  }

  addNewSession = () => {
    let { sessions, title } = this.state;
    sessions.push(title);
    this.setState({ sessions });
  }

  render() {
    const { title } = this.state;
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
              <ListGroupItem>de</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ScrumEstimationCard;