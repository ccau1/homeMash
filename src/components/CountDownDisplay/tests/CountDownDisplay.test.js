import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
require('react-native-mock/mock');
import {shallow} from 'enzyme';
import CountDownDisplay from '../CountDownDisplay';

describe('<CountDownDisplay />', () => {
  it('renders', () => {
    renderer.create(
      <CountDownDisplay milliseconds={10000} />
    );
  });

  it('gets time parts from milliseconds', () => {
    const wrapper = shallow(<CountDownDisplay />);
    const timeParts = wrapper.instance().getTimeDiffParts(10000);
    expect(timeParts).toEqual({seconds: 10, minutes: 0, hours: 0, days: 0});
  });
});
