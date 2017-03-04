/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default class daysOfWeek extends Component {

  static propTypes = {
    selectedDays: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    onToggle: React.PropTypes.func,
  };

  isInDaysOfWeek(selectedDays: number[], day: number) {
    return selectedDays.indexOf(day) !== -1;
  }

  render() {
    const {onToggle, selectedDays} = this.props;
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={onToggle.bind(this, 6)} style={[styles.btnCircleContainer, (selectedDays.indexOf(6) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 6) ? styles.btnCircleActive : {}}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 0)} style={[styles.btnCircleContainer, (selectedDays.indexOf(0) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 0) ? styles.btnCircleActive : {}}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 1)} style={[styles.btnCircleContainer, (selectedDays.indexOf(1) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 1) ? styles.btnCircleActive : {}}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 2)} style={[styles.btnCircleContainer, (selectedDays.indexOf(2) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 2) ? styles.btnCircleActive : {}}>W</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 3)} style={[styles.btnCircleContainer, (selectedDays.indexOf(3) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 3) ? styles.btnCircleActive : {}}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 4)} style={[styles.btnCircleContainer, (selectedDays.indexOf(4) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 4) ? styles.btnCircleActive : {}}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggle.bind(this, 5)} style={[styles.btnCircleContainer, (selectedDays.indexOf(5) > -1 ? styles.btnCircleContainerActive : '')]}>
          <Text style={this.isInDaysOfWeek(selectedDays, 5) ? styles.btnCircleActive : {}}>S</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
