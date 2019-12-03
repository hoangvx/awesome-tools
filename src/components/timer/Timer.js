import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Col
} from 'shards-react';
import moment from 'moment';
import _ from 'lodash';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: moment.duration(`PT0S`),
      timer: undefined,
    }
  }

  start = () => {
    let { timer, duration } = this.state;
    if (timer === undefined) {
      timer = setInterval(() => {
        this.setState({ duration: duration.add(1, 'second') })
      }, 1000);
      this.setState({ timer });
    }
  }

  stop = () => {
    let { timer } = this.state;
    if (timer !== undefined) {
      clearInterval(timer);
    }
  }

  handleKeyPress = () => {

  }

  componentDidMount() {
    if (this.props.auto) {
      this.start();
    }
  }

  render() {
    const { duration, timer } = this.state;
    const isRunning = timer !== undefined;
    const seconds = _.padStart(duration.seconds(), 2, 0);
    const minutes = _.padStart(duration.minutes(), 2, 0);
    const hours = _.padStart(duration.hours(), 2, 0);
    return (
      <Col className="text-center">
        <div className="d-inline-block">
          {hours}:{minutes}:{seconds}
        </div>
        <div>{isRunning ? 'running': 'stoped'}</div>
      </Col>
    )
  }
}

CountDown.propTypes = {
  autoStart: PropTypes.bool,
  
}

CountDown.defaultProps = {
  auto: true
};


export default Timer;