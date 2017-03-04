/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {FormattedMessage} from 'react-intl-native';
import dismissKeyboard from 'dismissKeyboard';
import styles from './styles';
import Locales from 'src/components/Locales';
import type {Settings as SettingsType} from 'src/types';
import translations from './messages';
import DaysOfWeek from 'src/components/DaysOfWeek';

export default class Settings extends Component {
  state: {
    settings: SettingsType
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
      }),
      daysOfWeek: React.PropTypes.arrayOf(React.PropTypes.number),
    }).isRequired,
    intl: React.PropTypes.shape({
      currentLocale: React.PropTypes.string.isRequired,
      locales: React.PropTypes.arrayOf(React.PropTypes.shape({
        key: React.PropTypes.string,
        text: React.PropTypes.string,
      })).isRequired,
    }),
    onChange: React.PropTypes.func.isRequired,
  };

  constructor(props: Object): void {
    super(props);

    this.state = {
      settings: props.settings.toJS(),
    };
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (!nextProps.settings.equals(this.props.settings)) {
      this.setState({
        settings: nextProps.settings.toJS(),
      });
    }
  }

  closeSettings(): void {
    Actions.pop();
  }

  updateField(name: string, value: string|number): void {
    const valParsedInt = parseInt(value, 10);
    let newSettings = {...this.state.settings.item};
    switch (name) {
      case 'dayStart.hour':
        newSettings.dayStart.hour = isNaN(valParsedInt) ? '' : valParsedInt;
        break;
      case 'dayStart.minute':
        newSettings.dayStart.minute = isNaN(valParsedInt) ? '' : valParsedInt;
        break;
      case 'dayEnd.hour':
        newSettings.dayEnd.hour = isNaN(valParsedInt) ? '' : valParsedInt;
        break;
      case 'dayEnd.minute':
        newSettings.dayEnd.minute = isNaN(valParsedInt) ? '' : valParsedInt;
        break;
      case 'daysOfWeek':
        newSettings.daysOfWeek = this.toggleDayOfWeek(newSettings.daysOfWeek, parseInt(value, 10));
        break;
      default:
        newSettings[name] = value;
        break;
    }

    this.setState({
      settings: {...this.state.settings, item: newSettings},
    }, () => {
      if (this.validate(newSettings).isValid) {
        this.props.onChange(newSettings);
      }
    });
  }

  validate(settings: SettingsType): {errors: Object[], isValid: boolean} {
    let result = {
      errors: [],
      isValid: true,
    };

    if (settings.dayStart.hour === '' || isNaN(settings.dayStart.hour)) {
      result.errors.push({field: 'dayStart.hour', msg: 'number required'});
      result.isValid = false;
    }

    if (settings.dayStart.minute === '' || isNaN(settings.dayStart.minute)) {
      result.errors.push({field: 'dayStart.minute', msg: 'number required'});
      result.isValid = false;
    }

    if (settings.dayEnd.hour === '' || isNaN(settings.dayEnd.hour)) {
      result.errors.push({field: 'dayEnd.hour', msg: 'number required'});
      result.isValid = false;
    }

    if (settings.dayEnd.minute === '' || isNaN(settings.dayEnd.minute)) {
      result.errors.push({field: 'dayEnd.minute', msg: 'number required'});
      result.isValid = false;
    }

    return result;
  }

  toggleDayOfWeek(daysOfWeek: number[], day: number): number[] {
    const dayIndex = daysOfWeek.indexOf(day);
    if (dayIndex > -1) {
      daysOfWeek.splice(dayIndex, 1);
    } else {
      daysOfWeek.push(day);
    }
    return daysOfWeek;
  }

  isInDaysOfWeek(daysOfWeek: number[], day: number): boolean {
    return daysOfWeek.indexOf(day) > -1;
  }

  render(): ReactElement<any> {
    const settings = this.state.settings.item;
    const {intl} = this.props;
    console.log('settings intl', this.props.intl);
    return (
      <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
        <Image source={require('../../images/bg_settings.jpg')} style={styles.container}>
          <View style={styles.settingsFormContainer}>
            <Text style={styles.heading}><FormattedMessage {...translations.settings} /></Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, padding: 20}}>
                <Text style={styles.subHeading}><FormattedMessage {...translations.start} /></Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="HH"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="number-pad"
                    style={styles.inputNumber}
                    value={settings.dayStart.hour.toString()}
                    onChangeText={this.updateField.bind(this, 'dayStart.hour')}
                  />
                  <Text style={{padding: 10}}>:</Text>
                  <TextInput
                    placeholder="MM"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="number-pad"
                    style={styles.inputNumber}
                    value={settings.dayStart.minute.toString()}
                    onChangeText={this.updateField.bind(this, 'dayStart.minute')}
                  />
                </View>
              </View>
              <View style={{flex: 1, padding: 20}}>
                <Text style={styles.subHeading}><FormattedMessage {...translations.end} /></Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="HH"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="number-pad"
                    style={styles.inputNumber}
                    value={settings.dayEnd.hour.toString()}
                    onChangeText={this.updateField.bind(this, 'dayEnd.hour')}
                  />
                  <Text style={{padding: 10}}>:</Text>
                  <TextInput
                    placeholder="MM"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="number-pad"
                    style={styles.inputNumber}
                    value={settings.dayEnd.minute.toString()}
                    onChangeText={this.updateField.bind(this, 'dayEnd.minute')}
                  />
                </View>
              </View>
            </View>
            <View style={{padding: 20}}>
              <Text style={styles.subHeading}><FormattedMessage {...translations.daysOfWeek} /></Text>
              <DaysOfWeek selectedDays={settings.daysOfWeek} onToggle={this.updateField.bind(this, 'daysOfWeek')} />
            </View>
            <View style={{padding: 20, flex: 1}}>
              <Text style={styles.subHeading}><FormattedMessage {...translations.language} /></Text>
              <Locales locales={intl.locales} currentLocale={intl.currentLocale} onChange={this.updateField.bind(this, 'locale')} />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={this.closeSettings.bind(this)}>
              <Text style={styles.btnClose}><FormattedMessage {...translations.close} /></Text>
            </TouchableOpacity>
          </View>
        </Image>
      </TouchableWithoutFeedback>
    );
  }
}
