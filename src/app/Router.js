/* @flow */

import React, {Component} from 'React';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from 'src/actions';
import {
  Router,
  Scene,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import LoginContainer from 'src/containers/Login/LoginContainer';
import DashboardContainer from 'src/containers/Dashboard/DashboardContainer';
import SettingsContainer from 'src/containers/Settings/SettingsContainer';

const scenes = Actions.create(
    <Scene key="root">
      <Scene
        key="login"
        component={LoginContainer}
        title="Login"
        direction="vertical"
        hideNavBar
        type={ActionConst.RESET}
        />
        <Scene
          key="dashboard"
          component={DashboardContainer}
          title="Dashboard"
          hideNavBar
          initial
          />
        <Scene
          key="settings"
          component={SettingsContainer}
          title="Settings"
          direction="vertical"
          />
    </Scene>
);

class AppRouter extends Component {
  render(): ReactElement<any> {
    return (
      <Router scenes={scenes} />
    );
  }
}

function mapDispatchToProps(dispatch: any): {Actions: any} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(() => { return {}; }, mapDispatchToProps)(AppRouter);
