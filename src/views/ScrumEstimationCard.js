import React, { Component, Fragment } from 'react';
import { 
  Container, Row, Col,
  Button,
  ListGroup, ListGroupItem,
  Modal, ModalBody, ModalHeader, ModalFooter,
  FormSelect, FormCheckbox
} from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Cookies from 'js-cookie';
import toastr from 'toastr';
import _ from 'lodash';

// import Timer from '../components/timer/Timer';

const DEFAULT_OPTIONS = 'estimation-settings';

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
  darkMode: false,
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
      darkMode: false,
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
      darkMode: this.state.darkMode,
      number_of_players: this.state.number_of_players,
    }

    Cookies.set(DEFAULT_OPTIONS, options);
    toastr.success(`Number of player's defaut is set to ${this.state.number_of_players}`);
    this.setState({
      ...options,
      openSetting: false,
    });
    this.playNewRound();
  }

  settingNumber = (number_of_players) => {
    this.setState({
      number_of_players,
      selected_point: Array(Number(number_of_players)).fill(undefined),
    })
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
      darkMode
    } = this.state;

    const keyBoardClass = [
      'd-flex justify-content-center align-items-center',
      'px-0',
      'text-white',
      ...[
        darkMode ? 'bg-dark' : 'bg-primary'
      ]
    ].join(' ');
    const startBtnTheme = darkMode ? 'dark' : 'primary';
    const pointBtnTheme = darkMode ? 'secondary' : 'light';
    let adjSize = number_of_players > 6 ? 3 : 4;
    adjSize = number_of_players % 2 === 0 ? 6 : adjSize;
    adjSize = number_of_players % 3 === 0 ? 4 : adjSize;
    adjSize = number_of_players % 4 === 0 ? 3 : adjSize;
    return (
      <Container>
        <Row>
          <Col xs="10" className="mt-4 px-0">
            <h3 className={ darkMode ? 'text-dark' : 'text-primary' }>Estimations Card</h3>
          </Col>
          <Col xs="2" className="mt-4 px-0 d-flex justify-content-end align-items-start">
            <FontAwesomeIcon icon={faCog} className="mx-2" onClick={() => this.setState({ openSetting: true })}/>  
            <Modal className="modal-dialog-centered" open={openSetting} toggle={() => this.setState({ openSetting: !openSetting })}>
              <ModalHeader>Settings</ModalHeader>
              <ModalBody>
                <Row form>
                  <Col sm="6" className="mb-3">
                    <label htmlFor="numberOfPlayers">Number of players</label>
                    <FormSelect
                      value={number_of_players}
                      onChange={({ target: { value: number_of_players }}) => this.settingNumber(number_of_players)}
                      style={{ fontSize: '16px' }}>
                      {members_option.map((o, key) => (
                        <option key={key} value={o}>{o}</option>
                      ))}
                    </FormSelect>
                  </Col>
                  <Col sm="6" className="mb-3">
                    <FormCheckbox
                      toggle
                      checked={darkMode}
                      onChange={() => this.setState({ darkMode: !darkMode })}>
                      Enable Dark Mode
                    </FormCheckbox>
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
        <Row>
          {/* <Col>
            <Timer />
          </Col> */}
        </Row>
        { number_of_players && (
          <Row className="mb-3 justify-content-center align-items-center">
            {!(isReady && isValid) && selected_point.map((p, idx) => (
              <Fragment>
                <Col key={idx}
                  className="p-0 d-flex"
                  xs={adjSize} style={{ height: '10vh' }}
                >
                  <Button 
                    theme={ !isValid && isReady && (p === _.min(valid_points) || p === _.max(valid_points)) ? 'danger': pointBtnTheme } 
                    squared block className="h-100 border-white"
                    style={{ fontSize: '2em' }}
                  >{p === undefined ? '-' : p === 999 ? '?' : p}</Button>
                </Col>
              </Fragment>
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
            <Col key={idx} xs={4} 
              style={{ height: '10vh', border: '1px solid #fff' }}
              className={keyBoardClass}
              onTouchEnd={() => this.play(p)}
            >
              <span className="d-flex" style={{ fontSize: '3em' }}>{p === 999 ? '?' : p}</span>
            </Col>
          )) }
        </Row>
        <Row className="mb-3">
          <Col className="px-0">
            <Button theme={startBtnTheme} squared block size="lg" onClick={() => this.playNewRound()}>Start Over</Button>
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