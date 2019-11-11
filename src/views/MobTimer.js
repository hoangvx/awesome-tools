import React, { Component } from 'react';
import { 
  Container, Row, Col
} from 'shards-react';
import CountDown from '../components/timer/CountDown';

class MobTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="p-4">
            <h1>Mob Programing Timer</h1>
          </Col>
        </Row>
        <Row>
          <CountDown />
        </Row>
      </Container>
    )
  }
}

export default MobTimer;