// @flow
import React from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'src/actions';
import {State, IntlState} from 'src/types';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

class Intl extends React.Component {

  static propTypes = {
    intl: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    addLocaleData([...en, ...zh]);
  }

  componentDidMount() {
    this.props.Actions.setIntl();
  }

  render() {
    const {intl, ...props} = this.props;
    const {currentLocale, defaultLocale, initialNow, messages} = intl;

    if (!intl.currentLocale) {
      return null;
    }

    let strippedDefaultLocale = defaultLocale.split('_')[0];
    let strippedCurrentLocale = currentLocale.split('_')[0];

    return (
      <IntlProvider
        // locale="en" // just use this if you don't want to deal with locale files, else remove this and enable the rest
        defaultLocale={strippedDefaultLocale}
        initialNow={initialNow}
        key={currentLocale}
        locale={strippedCurrentLocale}
        messages={messages[currentLocale]}
      >
        {props.children}
      </IntlProvider>
    );
  }
}

function mapStateToProps(state: State): {intl: IntlState} {
    return {
        intl: state.intl,
    };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Intl);
