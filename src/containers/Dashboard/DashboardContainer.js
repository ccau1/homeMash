/* @flow */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Text} from 'react-native';
import {ActionCreators} from 'src/actions';
import {State, UsersState, SettingsState} from 'src/types';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {

  componentDidMount(): void {
    this.props.Actions.signIn();
    this.props.Actions.getSettings();
  }

  render(): ReactElement<any> {
    return this.props.users.toJS().viewer && this.props.settings.toJS().item ? (
      <Dashboard settings={this.props.settings.toJS().item} user={this.props.users.toJS().viewer.item} />
    ) : <Text>Loading...</Text>;
  }
}


function mapStateToProps(state: State): {users: UsersState, settings: SettingsState} {
    return {
        users: state.users,
        settings: state.settings,
    };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
