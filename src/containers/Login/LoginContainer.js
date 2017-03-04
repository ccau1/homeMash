/* @flow */

import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'src/actions';
import Login from './Login';
import {UsersState} from 'src/types';

class LoginContainer extends Component {
    static propTypes = {
    };

    constructor(props: Object): void {
        super(props);
    }

    onLoginSubmit(loginCred: {username: string, password: string}): void {
      console.log('loginCred', loginCred);
      this.props.Actions.signIn(loginCred.username, loginCred.password);
      Actions.dashboard();
    }

    render(): ReactElement<any> {
        return (
            <Login
              onSubmit={this.onLoginSubmit.bind(this)}
              />
        );
    }
}

function mapStateToProps(state: Object): {user: UsersState} {
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
