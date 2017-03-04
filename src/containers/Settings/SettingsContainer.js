/* @flow */

import React, {Component} from 'react';
import Settings from './Settings';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'src/actions';
import type {Settings as SettingsType, State, UsersState, SettingsState, IntlState} from 'src/types';

class SettingsContainer extends Component {

  onSettingsChanged(newSettings: SettingsType) {
    this.props.Actions.updateSettings(newSettings);
  }

  render(): ReactElement<any> {
    const {settings, intl} = this.props;
    return (
      <Settings settings={settings} intl={intl} onChange={this.onSettingsChanged.bind(this)} />
    );
  }
}


function mapStateToProps(state: State): {user: UsersState, settings: SettingsState, intl: IntlState} {
    return {
        user: state.user,
        settings: state.settings,
        intl: state.intl,
    };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
