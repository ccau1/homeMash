/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {FormattedMessage} from 'react-intl-native';
import translations from './messages';
import styles from './styles.js';
import StatDisplay from 'src/components/StatDisplay';
import {Settings, User} from 'src/types';


export default class Dashboard extends Component {
  state: {
    statViews: {
      title: string;
      key: string;
    }[];
    currentStatView: number;
  };

  static propTypes = {
    settings: React.PropTypes.shape({
      dayStart: React.PropTypes.shape({
        hour: React.PropTypes.number,
        minute: React.PropTypes.number,
      }),
      dayEnd: React.PropTypes.shape({
        hour: React.PropTypes.number,
        minute: React.PropTypes.number,
      }).isRequired,
      daysOfWeek: React.PropTypes.arrayOf(React.PropTypes.number),
    }),
    user: React.PropTypes.object,
  };

  constructor(props: {settings: Settings, user: User}): void {
    super(props);
    this.state = {
      statViews: [
        {
          title: 'daily',
          key: 'daily-time',
        },
        {
          title: 'daily',
          key: 'daily-percent',
        },
        {
          title: 'weekly',
          key: 'weekly-time',
        },
        {
          title: 'weekly',
          key: 'weekly-percent',
        },
      ],
      currentStatView: 0,
    };

    console.log('user', props.user, props.settings);
  }

  toggleStatDisplay(): void {
    this.setState({
      currentStatView: this.state.currentStatView + 1 === this.state.statViews.length ? 0 : ++this.state.currentStatView,
    });
  }

  openSettings(): void {
    Actions.settings();
  }

  render(): ReactElement<any> {

    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('src/images/background1.jpg')}>
          <View style={styles.statDisplayContainer}>
            <Text style={styles.title}>
              <FormattedMessage {...translations[this.state.statViews[this.state.currentStatView].title]} /></Text>
            <TouchableWithoutFeedback style={styles.statButton} onPress={this.toggleStatDisplay.bind(this)}>
              <View><StatDisplay settings={this.props.settings} view={this.state.statViews[this.state.currentStatView].key} /></View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={this.openSettings.bind(this)}>
              <Text style={styles.btnSettings}>
                <FormattedMessage {...translations.settings} />
              </Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}
