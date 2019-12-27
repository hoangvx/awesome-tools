import React, { Component, Fragment } from 'react';
import { 
  Container, Row, Col,
  Form, FormGroup, FormInput, FormCheckbox,
  Slider, Button,
  ListGroup, ListGroupItem,
  Tooltip,
} from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faRandom, faBars, faFrog } from '@fortawesome/free-solid-svg-icons';
import toastr from "toastr";
import _ from "lodash";
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";

import CountDown from '../components/timer/CountDown';

const MobTimeSetting = ({label, value, range: [ min, max ], onSlide, ...props }) => (
  <FormGroup>
    <label htmlFor={ `mobTimeSetting${label}` }>
      <strong>{ label }: </strong>
      <span>{ value }</span>
    </label>
    <Slider
      id={ `mobTimeSetting${label}` }
      className="mt-2 mb-2"
      step={1}
      connect={[true, false]}
      start={[value]}
      range={{ min, max }}
      onSlide={([start, _end]) => onSlide(Number(start))}
      {...props}
    />
  </FormGroup>
)

const DragHandle = SortableHandle(() => <FontAwesomeIcon className="mr-2 members-drag" icon={faBars} />);

const SortableListGroupContainer = SortableContainer(({ children }) => {
  return (
    <ListGroup>
      {children}
    </ListGroup>
  )
});

const SortableListItem = SortableElement(({ member, onDelete, disabled }) => {
  return (
    <ListGroupItem className="members-item d-flex justify-content-between align-items-center">
      <div>
        { member !== 'Rest Time' && <DragHandle /> }
        { member === 'Rest Time' && <FontAwesomeIcon className="mr-2" icon={faFrog} /> }
        { member }
      </div>
      { member !== 'Rest Time' &&
        <Button theme="link" size="sm"
          disabled={disabled}
          onClick={() => onDelete(member)}>
          <FontAwesomeIcon className="text-secondary" icon={faTrash}/>
        </Button>
      }
    </ListGroupItem>
  )
})

class MobTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      interval: {
        hours: 0,
        minutes: 15,
        seconds: 0,
      },
      name: '',
      enabled_rest_time: false,
      current_player_index: -1,
      working: false,
    }
  }

  onSubmitNewMember = (e) => {
    e.preventDefault();
    let { members, name, enabled_rest_time } = this.state;
    if (members.indexOf(name) !== -1) {
      toastr.error("This Name Has Been Taken!!!")
    } else {
      let names = [name];
      if (enabled_rest_time) {
        members.pop();
        names = [...names, 'Rest Time'];
      }
      this.setState({
        members: [
          ...members,
          ...names,
        ],
        name: '',
      });
    }
  }

  onRemoveMember = member => {
    let { members } = this.state;

    const idx = members.indexOf(member);
    if (idx !== -1) {
      members.splice(idx, 1);
      this.setState({ members });
    }
  }

  onRandomOrder = () => {
    let { members, enabled_rest_time } = this.state;
    let sub = [];
    if (enabled_rest_time) {
      sub = [...sub, members.pop()];
    }

    members = [..._.shuffle(members), ...sub];
    this.setState({ members });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    let { members } = this.state;

    members = arrayMove(members, oldIndex, newIndex);
    this.setState({ members });
  }

  onToggleTooltip = (target) => {
    const toolTipState = {};
    toolTipState[`tt_${target}`] = !this.state[`tt_${target}`];
    this.setState({ ...this.state, ...toolTipState });
  }

  onToggleRestTime = () => {
    let { enabled_rest_time, members } = this.state;

    if (enabled_rest_time) {
      members.pop();
    } else {
      members = [...members, 'Rest Time'];
    }

    this.setState({ enabled_rest_time: !enabled_rest_time, members });
  }

  onPlayerStartTurn = () => {
    let { current_player_index, members } = this.state;
    current_player_index = (current_player_index + 1) % (members.length + 1);

    this.setState({
      current_player_index,
      working: true
    })
  }

  onPlayerEndTurn = () => {

  }

  render() {
    const {
      interval, members, name,
      current_player_index,
      enabled_rest_time,
      working,
    } = this.state;

    return (
      <Container fluid>
        <Row className="vh-100">
          <Col md="4" lg="3" className="p-2">
            <div>
              <h3 className="m-0">Mob</h3>
              <h3 className="m-0">Programing</h3>
              <h3 className="m-0">Timer</h3>
            </div>
            <hr/>
            <h4>
              Interval Time
            </h4>
            <MobTimeSetting
              label="Hours"
              disabled={working}
              value={interval.hours}
              range={[0, 24]}
              onSlide={hours => this.setState(
                { 
                  interval: { ...interval, ...{ hours } } 
                }
              )}
            />
            <MobTimeSetting
              label="Minutes"
              disabled={working}
              value={interval.minutes}
              range={[0, 59]}
              onSlide={minutes => this.setState(
                { 
                  interval: { ...interval, ...{ minutes } } 
                }
              )}
            />
            <MobTimeSetting
              label="Seconds"
              disabled={working}
              value={interval.seconds}
              range={[0, 59]}
              onSlide={seconds => this.setState(
                { 
                  interval: { ...interval, ...{ seconds } } 
                }
              )}
            />
            <br/>
            <h4>
              Others
            </h4>
            <FormGroup>
              <FormCheckbox
                checked={enabled_rest_time}
                disabled={working}
                onChange={() => this.onToggleRestTime()}
              >
                Rest Time
              </FormCheckbox>
            </FormGroup>
            <br/>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">
                Members
              </h4>
              { members.length > 1 &&
                <Fragment>
                  <Button id="tt_shuffle" theme="link" size="sm"
                  onClick={() => this.onRandomOrder()}>
                    <FontAwesomeIcon className="text-secondary" icon={faRandom}/>
                  </Button>
                  <Tooltip
                    open={this.state.tt_shuffle}
                    target="#tt_shuffle"
                    toggle={() => this.onToggleTooltip('shuffle')}
                  >
                    Shuffle Your Team's Order
                  </Tooltip>
                </Fragment>
              }
            </div>
            <SortableListGroupContainer axis="y"
              useDragHandle
              disabled={working}
              onSortEnd={position => this.onSortEnd(position)}>
              { members.map((member, index) => (
                <SortableListItem 
                  index={index}
                  member={member}
                  key={index}
                  onDelete={member => this.onRemoveMember(member)}
                />
              )) }
            </SortableListGroupContainer>
            <Form onSubmit={e => this.onSubmitNewMember(e)}>
              <FormInput
                required
                className="simplebox mt-4 border-primary text-primary"
                autoComplete="off"
                value={name}
                onChange={({ target: { value: name } }) => this.setState({ name })}
              />
            </Form>
          </Col>
          { _.filter(members, item => item !== 'Rest Time').length > 1 && 
            <CountDown
              title={members[current_player_index]}
              hours={interval.hours}
              minutes={interval.minutes}
              seconds={interval.seconds}
              onStart={() => this.onPlayerStartTurn()}
              onEnd={() => this.onPlayerEndTurn()}
            />
          }
          { _.filter(members, item => item !== 'Rest Time').length < 2 && 
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info">To Start Mob Programing</h4>
              <h4 className="text-info">You Need More Than 1 Members </h4>
              <h4 className="text-info">Do Not Play Alone!!! Buddy</h4>
            </Col>
          }
        </Row>
      </Container>
    )
  }
}

export default MobTimer;