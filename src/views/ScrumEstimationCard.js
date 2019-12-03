import React, { Component } from 'react';
import { 
  Container, Row, Col,
  Button,
  ListGroup, ListGroupItem,
  Modal, ModalBody, ModalHeader, ModalFooter,
  FormSelect, FormRadio
} from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';

import Cookies from 'js-cookie';
import toastr from 'toastr';
import _ from 'lodash';

const DEFAULT_OPTIONS = 'srumpointcaloptions';

const points = [
  0, 1, 2, 3, 5,
  8, 13, 21, 34,
  55, 89, 999
]

const members_option = [2,3,4,5,6,7,8,9]

toastr.options = {
  positionClass: 'toast-top-full-width',
  progressBar: true,
  timeOut: 1000
}

const default_options = {
  number_of_players: 4,
  keyboardColorSetting: 'primary',
  buttonColorSetting: 'primary',
  pointColorSetting: 'secondary',
  keyboardColor: 'primary',
  buttonColor: 'primary',
  pointColor: 'secondary',
}

class ScrumEstimationCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points,
      number_of_players: members_option[2],
      histories: [],
      selected_point: [undefined, undefined, undefined, undefined],
      valid_points: [],
      isReady: false,
      openInfo: false,
      openSetting: false,
      keyboardColorSetting: 'primary',
      buttonColorSetting: 'primary',
      pointColorSetting: 'secondary',
      keyboardColor: 'primary',
      buttonColor: 'primary',
      pointColor: 'secondary',
    }
  }

  playNewRound = () => {
    let { histories, selected_point, isReady, isValid } = this.state;
    if (isValid && isReady) {
      histories.push(selected_point);
    }
    this.setState({
      selected_point: Array(Number(this.state.number_of_players)).fill(undefined),
      isValid: false,
      isReady: false,
      histories
    })
  }

  play = (value) => {
    let { selected_point } = this.state;
    const idx = selected_point.indexOf(undefined);
    if (idx !== -1) {
      selected_point[idx] = value;
      const isReady = selected_point.indexOf(undefined) === -1;
      const valid_points = _.filter(selected_point, p => p !== 999 && p !== undefined);
      const selected_idxs = valid_points.map(p => points.indexOf(p));
      const isValid = (_.max(selected_idxs) || 0) - (_.min(selected_idxs) || 0) < 3;
      if (isReady && !isValid) {
        toastr.error('Invalid Points Set!!!');
      }
      this.setState({ selected_point, valid_points, isReady, isValid });
    }
  }

  setDefault = () => {
    const options = {
      keyboardColor: this.state.keyboardColorSetting,
      buttonColor: this.state.buttonColorSetting,
      pointColor: this.state.pointColorSetting,
      keyboardColorSetting: this.state.keyboardColorSetting,
      buttonColorSetting: this.state.buttonColorSetting,
      pointColorSetting: this.state.pointColorSetting,
      number_of_players: this.state.number_of_players,
    }

    Cookies.set(DEFAULT_OPTIONS, options);
    toastr.info(`Number of player's defaut is set to ${this.state.number_of_players}`);
    this.setState({
      ...options,
      openSetting: false, 
    });
    this.playNewRound();
  }

  
  calAvg = (points) => {
    const valid_points = _.filter(points, p => p !== 999);
    const total = _.sum(valid_points);
    return Math.round(total / valid_points.length) || 0;
  }
  
  componentDidMount = () => {
    document.title = 'Estimation Card | Awesome Tools';
    const options = Cookies.getJSON(DEFAULT_OPTIONS) || default_options;
    this.setState({
      ...options,
      selected_point: Array(Number(options.number_of_players)).fill(undefined),
    })
  }
  render() {
    const { 
      points, number_of_players, histories, 
      selected_point, valid_points, 
      isReady, isValid,
      openInfo, openSetting,
      keyboardColor, buttonColor, pointColor
    } = this.state;
    return (
      <Container>
        <Row>
          <Col xs="10" className="mt-4 px-0">
            <h3 className="text-info">Estimations Card</h3>
          </Col>
          <Col xs="2" className="mt-4 px-0 d-flex justify-content-end align-items-start">
            <FontAwesomeIcon icon={faCog} className="mx-2" onClick={() => this.setState({ openSetting: true })}/>  
            <Modal className="modal-dialog-centered" open={openSetting} toggle={() => this.setState({ openSetting: !openSetting })}>
              <ModalHeader>Settings</ModalHeader>
              <ModalBody>
                <Row form>
                  <Col sm="6">
                    <label htmlFor="numberOfPlayers">Number of players</label>
                    <FormSelect
                      value={number_of_players}
                      onChange={({ target: { value: number_of_players }}) => this.setState({ number_of_players })}
                      style={{ fontSize: '16px' }}>
                      {members_option.map((o, key) => (
                        <option key={key} value={o}>{o}</option>
                      ))}
                    </FormSelect>
                  </Col>
                  <Col sm="6">
                    <p className="mb-2 mt-2">Points color:</p>
                    <FormRadio
                      inline
                      name="pointColor"
                      checked={this.state.pointColorSetting === "primary"}
                      onChange={() => {
                        this.setState({ pointColorSetting: 'primary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-primary" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="pointColor"
                      checked={this.state.pointColorSetting === "warning"}
                      onChange={() => {
                        this.setState({ pointColorSetting: 'warning' });
                      }}
                    >
                      <FontAwesomeIcon className="text-warning" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="pointColor"
                      checked={this.state.pointColorSetting === "success"}
                      onChange={() => {
                        this.setState({ pointColorSetting: 'success' });
                      }}
                    >
                      <FontAwesomeIcon className="text-success" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="pointColor"
                      checked={this.state.pointColorSetting === "dark"}
                      onChange={() => {
                        this.setState({ pointColorSetting: 'dark' });
                      }}
                    >
                      <FontAwesomeIcon className="text-dark" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="pointColor"
                      checked={this.state.pointColorSetting === "secondary"}
                      onChange={() => {
                        this.setState({ pointColorSetting: 'secondary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-secondary" icon={faStar}/>
                    </FormRadio>
                  </Col>
                  <Col sm="6">
                    <p className="mb-2 mt-2">Card (keyboard) color:</p>
                    <FormRadio
                      inline
                      name="keyboardColor"
                      checked={this.state.keyboardColorSetting === "primary"}
                      onChange={() => {
                        this.setState({ keyboardColorSetting: 'primary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-primary" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="keyboardColor"
                      checked={this.state.keyboardColorSetting === "warning"}
                      onChange={() => {
                        this.setState({ keyboardColorSetting: 'warning' });
                      }}
                    >
                      <FontAwesomeIcon className="text-warning" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="keyboardColor"
                      checked={this.state.keyboardColorSetting === "success"}
                      onChange={() => {
                        this.setState({ keyboardColorSetting: 'success' });
                      }}
                    >
                      <FontAwesomeIcon className="text-success" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="keyboardColor"
                      checked={this.state.keyboardColorSetting === "dark"}
                      onChange={() => {
                        this.setState({ keyboardColorSetting: 'dark' });
                      }}
                    >
                      <FontAwesomeIcon className="text-dark" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="keyboardColor"
                      checked={this.state.keyboardColorSetting === "secondary"}
                      onChange={() => {
                        this.setState({ keyboardColorSetting: 'secondary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-secondary" icon={faStar}/>
                    </FormRadio>
                  </Col>
                  <Col sm="6">
                    <p className="mb-2 mt-2">Button color:</p>
                    <FormRadio
                      inline
                      name="buttonColor"
                      checked={this.state.buttonColorSetting === "primary"}
                      onChange={() => {
                        this.setState({ buttonColorSetting: 'primary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-primary" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="buttonColor"
                      checked={this.state.buttonColorSetting === "warning"}
                      onChange={() => {
                        this.setState({ buttonColorSetting: 'warning' });
                      }}
                    >
                      <FontAwesomeIcon className="text-warning" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="buttonColor"
                      checked={this.state.buttonColorSetting === "success"}
                      onChange={() => {
                        this.setState({ buttonColorSetting: 'success' });
                      }}
                    >
                      <FontAwesomeIcon className="text-success" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="buttonColor"
                      checked={this.state.buttonColorSetting === "dark"}
                      onChange={() => {
                        this.setState({ buttonColorSetting: 'dark' });
                      }}
                    >
                      <FontAwesomeIcon className="text-dark" icon={faStar}/>
                    </FormRadio>
                    <FormRadio
                      inline
                      name="buttonColor"
                      checked={this.state.buttonColorSetting === "secondary"}
                      onChange={() => {
                        this.setState({ buttonColorSetting: 'secondary' });
                      }}
                    >
                      <FontAwesomeIcon className="text-secondary" icon={faStar}/>
                    </FormRadio>
                  </Col>
                </Row>
                <ModalFooter className="px-0">
                  <Button onClick={() => this.setDefault()}>Save</Button>
                </ModalFooter>
              </ModalBody>
            </Modal>
            <FontAwesomeIcon icon={faInfoCircle} className="ml-2" onClick={() => this.setState({ openInfo: true })}/>  
            <Modal className="modal-dialog-centered" open={openInfo} toggle={() => this.setState({ openInfo: !openInfo })}>
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
        { number_of_players && (
          <Row className="mb-3">
            {!(isReady && isValid) && selected_point.map((p, idx) => (
              <Col key={idx} className="p-0" style={{ height: '10vh' }}>
                <Button 
                  theme={ !isValid && isReady && (p === _.min(valid_points) || p === _.max(valid_points)) ? 'danger': pointColor } 
                  squared block className="h-100 border-light"
                  style={{ fontSize: '2em' }}
                >{p === undefined ? '-' : p === 999 ? '?' : p}</Button>
              </Col>
            ))}
            {isReady && isValid && (
              <Col className="p-0 d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
                  <h1 className="d-flex display-3 text-success">
                    {this.calAvg(selected_point)}
                  </h1>
              </Col>
            )}
          </Row>
        )}
        <Row className="mb-3">
          { points.map((p, idx) => (
            <Col key={idx} xs="4" className="px-0 border border-light" style={{ height: '10vh' }}>
              <Button 
                block squared className="h-100" theme={keyboardColor} style={{ fontSize: '2em' }}
                onClick={() => this.play(p)}>
                {p === 999 ? '?' : p}
              </Button>
            </Col>
          )) }
        </Row>
        <Row className="mb-3">
          <Col className="px-0">
            <Button block theme={buttonColor} size="lg" onClick={() => this.playNewRound()}>Start Over</Button>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <ListGroup>
              {histories.reverse().map((h, idx) => (
                <ListGroupItem className="d-flex" key={idx}>
                  <Row className="w-100">
                  { h.map((p, i) => (
                    <Col className="d-flex justify-content-center" key={i}>{p === 999 ? '?' : p}</Col>
                  )) }
                  <Col className="d-flex justify-content-center text-success">
                    <strong>{this.calAvg(h)}</strong>
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