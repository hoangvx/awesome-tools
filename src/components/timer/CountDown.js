import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { 
  Col, Row
} from 'shards-react';
import moment from 'moment';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

class CountDown extends Component {
  constructor(props) {
    super(props)
    const { hours, minutes, seconds } = this.props;
    this.state = {
      duration: moment.duration(`PT${hours}H${minutes}M${seconds}S`),
      timer: undefined,
      startBtnClass: 'text-secondary',
    }
  }

  start = () => {
    let { timer, duration } = this.state;
    if (timer === undefined) {
      timer = setInterval(() => {
        this.setState({ duration: duration.subtract(1, 'second') })
      }, 1000);
      this.setState({ timer });
      this.props.onStart();
    }
  }

  stop = () => {
    let { timer } = this.state;
    const { hours, minutes, seconds } = this.props;
    if (timer !== undefined) {
      clearInterval(timer);
      setTimeout(() => {
        this.setState({
          timer: undefined,
          duration: moment.duration(`PT${hours}H${minutes}M${seconds}S`),
        });
        this.props.onEnd();
      }, 1000);
      
    }
  }

  handleKeyPress = () => {
    this.start();
  }

  componentWillReceiveProps = (nextProps) => {
    const { hours, minutes, seconds } = nextProps;
    this.setState({
      duration: moment.duration(`PT${hours}H${minutes}M${seconds}S`),
    })

    if (nextProps.auto) {
      this.start();
    }
  }

  render() {
    const { duration, timer, startBtnClass } = this.state;
    const isRunning = timer !== undefined;
    const seconds = _.padStart(duration.seconds(), 2, 0);
    const minutes = _.padStart(duration.minutes(), 2, 0);
    const hours = _.padStart(duration.hours(), 2, 0);
    
    if (duration == 0) {
      this.stop();
    }

    return (
      <Col className="text-center">
        { isRunning &&
          <Fragment>
            {this.props.title}
            <div className="d-inline-block">
              {hours}:{minutes}:{seconds}
            </div>
          </Fragment>
        }
        { !isRunning && 
          <Fragment>
            <Row className="vh-100 justify-content-center align-items-center">
              <h1 className={ `${startBtnClass} countdown-start-icon` } 
                onClick={() => this.start()}
              >
                <FontAwesomeIcon icon={faArrowCircleRight} size="3x" />
              </h1>
            </Row>
          </Fragment>
        }
      </Col>
    )
  }
}

CountDown.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  autoStart: PropTypes.bool,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onContinue: PropTypes.func,
  onEnd: PropTypes.func,
  title: PropTypes.string,
}

CountDown.defaultProps = {
  hours: 0,
  minutes: 15,
  seconds: 0,
  auto: false
};


export default CountDown;