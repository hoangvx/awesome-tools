import React, { Component } from 'react';
import { 
  Container, Row, Col,
  Button,
  FormInput,
  ListGroup,
  ListGroupItem,
  ListGroupItemText
} from 'shards-react';

const SESSION_KEY = 'playapointcard';

const points = [
  0, 1, 2, 3, 5,
  8, 13, 21, 34,
  55, 89, 144
]

class ScrumEstimationCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points,
      number_of_players: 3,
      histories: [],
      selected_point: [undefined, undefined, undefined]
    }
  }

  playNewRound = () => {
    let { histories, selected_point } = this.state;
    if (selected_point.indexOf(undefined) === -1) {
      histories.push(selected_point);
    }
    this.setState({
      selected_point: Array(Number(this.state.number_of_players)).fill(undefined),
      histories
    })
  }

  play = (value) => {
    let { selected_point } = this.state;
    const idx = selected_point.indexOf(undefined);
    if (idx !== -1) {
      selected_point[idx] = value;
      this.setState({ selected_point });
    }
  }

  render() {
    const { points, number_of_players, histories, selected_point } = this.state;
    const isCal = selected_point.indexOf(undefined) === -1;
    return (
      <Container>
        <Row>
          <Col className="mt-4 px-0">
            <h1 className="text-info">Point Card</h1>
          </Col>
        </Row>
        {/* Welcome Panel for first visited */}
        <Row className="mb-3">
          <Col xs="12" className="px-0">
            <label className="text-secondary">Change number of players</label>
            <FormInput
              type="number"
              value={number_of_players}
              onChange={({ target: { value: number_of_players } }) => this.setState({ number_of_players, selected_point: Array(Number(number_of_players)).fill(undefined) })}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          {!isCal && selected_point.map((p, idx) => (
            <Col key={idx} className="p-0" style={{ height: '10vh' }}>
              <Button theme="light" disabled squared block className="h-100">{p === undefined ? '-' : p}</Button>
            </Col>
          ))}
          {isCal && (
            <Col className="p-0 d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
                <h1 className="d-flex text-success display-3">
                  {Math.round(selected_point.reduce((a,b) => a + b, 0) / number_of_players)}
                </h1>
            </Col>
          )}
        </Row>
        <Row className="mb-3">
          { points.map((p, idx) => (
            <Col key={idx} xs="4" className="px-0 border border-light" style={{ height: '10vh' }}>
              <Button 
                block squared className="h-100" style={{ fontSize: '2em' }}
                onClick={() => this.play(p)}>
                {p === 999 ? '?' : p}
              </Button>
            </Col>
          )) }
        </Row>
        <Row className="mb-3">
          <Col className="px-0">
            <Button block size="lg" onClick={() => this.playNewRound()}>Start Over</Button>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <ListGroup>
              {histories.reverse().map((h, idx) => (
                <ListGroupItem className="d-flex" key={idx}>
                  <Row className="w-100">
                  { h.map((p, i) => (
                    <Col className="d-flex justify-content-center" key={i}>{p}</Col>
                  )) }
                  <Col className="d-flex justify-content-center text-success">
                    <strong>{Math.round(h.reduce((a,b) => a + b, 0) / number_of_players)}</strong>
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