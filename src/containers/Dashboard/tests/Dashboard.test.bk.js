import 'react-native';
import React from 'react';
// import renderer from 'react-test-renderer';
import createComponentWithIntl from '../../../../jest/helpers/createComponentWithIntl';
import Dashboard from '../Dashboard';

it('renders Dashboard', () => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  const settings = {
    dayStart: {
      hour: 9,
      minute: 0,
    },
    dayEnd: {
      hour: 17,
      minute: 0,
    },
    daysOfWeek: [0, 1, 2, 3, 4, 5],
  };

  const user = {
    name: 'John Doe',
    settings: settings,
  };

  // renderer.create(
  //   <IntlProvider locale="en"><Dashboard user={user} settings={settings} /></IntlProvider>
  // );

  createComponentWithIntl(<Dashboard user={user} settings={settings} />);
});
