import React, { Component } from 'react';
import { 
  Container, Row, Col,
  Button,
  FormInput,
  InputGroup, InputGroupAddon,
  ListGroup, ListGroupItem,
  Modal, ModalBody, ModalHeader
} from 'shards-react';

import Cookies from 'js-cookie';
import toastr from 'toastr';

const DEFAULT_NUMBER_OF_PLAYPER = 'dnop';

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
      number_of_players: 4,
      histories: [],
      selected_point: [undefined, undefined, undefined, undefined],
      open: false
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

  setDefault = () => {
    Cookies.set(DEFAULT_NUMBER_OF_PLAYPER, this.state.number_of_players);
    toastr.info(`Number of player's defaut is set to ${this.state.number_of_players}`);
  }

  componentDidMount = () => {
    const number_of_players = Number(Cookies.get(DEFAULT_NUMBER_OF_PLAYPER)) || 4;
    this.setState({ 
      number_of_players,
      selected_point: Array(Number(number_of_players)).fill(undefined),
    })
  }

  render() {
    const { points, number_of_players, histories, selected_point, open } = this.state;
    const isCal = selected_point.indexOf(undefined) === -1;
    return (
      <Container>
        <Row>
          <Col xs="10" className="mt-4 px-0">
            <h1 className="text-info">Point Card</h1>
          </Col>
          <Col xs="2" className="mt-4 px-0 d-flex justify-content-center align-items-center">
            <Button outline theme="light" size="sm" onClick={() => this.setState({ open: true })}>?</Button>
            <Modal className="modal-dialog-centered" open={open} toggle={() => this.setState({ open: !open })}>
              <ModalHeader>How To Use!</ModalHeader>
              <ModalBody>
                <span>
                  <strong>1:</strong> Update number of player to fix your team size
                </span>
                <br/>
                <span>
                  <strong>2:</strong> Press on the point that choosed
                </span>
                <br/>
                <span>
                  <strong>3:</strong> Average point will display when you  enter all member's point
                </span>
                <br/>
                <span>
                  <strong>4:</strong> You can start over by click on button at the bottom
                </span>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
        {/* Welcome Panel for first visited */}
        <Row className="mb-3">
          <Col xs="12" className="px-0">
            <label className="text-secondary">Change number of players</label>
            <InputGroup>
              <FormInput
                type="number"
                value={number_of_players}
                onChange={({ target: { value: number_of_players } }) => this.setState({ number_of_players, selected_point: Array(Number(number_of_players)).fill(undefined) })}
              />
              <InputGroupAddon type="append">
                <Button theme="light" onClick={() => this.setDefault()}>Set As Default</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        { number_of_players && (
          <Row className="mb-3">
            {!isCal && selected_point.map((p, idx) => (
              <Col key={idx} className="p-0" style={{ height: '10vh' }}>
                <Button 
                  theme="light" disabled squared block className="h-100"
                  style={{ fontSize: '2em' }}
                >{p === undefined ? '-' : p}</Button>
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
        )}
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