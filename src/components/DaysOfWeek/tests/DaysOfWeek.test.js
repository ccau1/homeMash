import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
require('react-native-mock/mock');
import {shallow} from 'enzyme';
import DaysOfWeek from '../DaysOfWeek';

describe('<DaysOfWeek />', () => {
  it('renders', () => {
    renderer.create(
      <DaysOfWeek selectedDays={[0, 1, 2, 3, 4]} onToggle={() => {}} />
    );
  });

  it('is in days of week', () => {
    const wrapper = shallow(<DaysOfWeek selectedDays={[0, 1, 2, 3, 4]} onToggle={() => {}} />);
    const isInDaysOfWeekTrue = wrapper.instance().isInDaysOfWeek([0, 1, 2, 3, 4], 0);
    const isInDaysOfWeekFalse = wrapper.instance().isInDaysOfWeek([0, 1, 2, 3, 4], 5);
    expect(isInDaysOfWeekTrue).toEqual(true);
    expect(isInDaysOfWeekFalse).toEqual(false);
  });
});
