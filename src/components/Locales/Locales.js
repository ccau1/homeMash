/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default class Locales extends Component {
  static propTypes = {
    locales: React.PropTypes.arrayOf(React.PropTypes.shape({
      key: React.PropTypes.string,
      text: React.PropTypes.string,
    })).isRequired,
    currentLocale: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  render(): ReactElement<any> {
    const {locales, currentLocale, onChange} = this.props;

    return (
      <View style={styles.container}>
        {locales.map(locale => {
          return <TouchableOpacity key={locale.key} onPress={onChange.bind(this, locale.key)} style={[styles.btnLocale, (locale.key === currentLocale ? styles.btnLocaleActive : '')]}>
            <Text style={[styles.btnTextLocale, (locale.key === currentLocale ? styles.btnTextLocaleActive : '')]}>{locale.text}</Text>
          </TouchableOpacity>;
        })}
      </View>
    );
  }
}
