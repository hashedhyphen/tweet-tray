import React from 'react';
import Enzyme, { shallow, } from 'enzyme';
import { shallowToJson, } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import StatusInput from '../../app/components/StatusInput';
import * as testData from '../testData';

Enzyme.configure({ adapter: new Adapter(), });

function setup() {
  const component = shallow(<StatusInput
    placeholder="What\'s Happening?"
    weightedStatusText={testData.weightedStatus.text}
    updateWeightedStatus={(status) => { return status; }}
  />);
  return {
    component,
    textarea: component.find('textarea'),
  };
}

describe('StatusInput component', () => {
  it('should render textarea', () => {
    const { textarea, } = setup();
    expect(shallowToJson(textarea)).toMatchSnapshot();
  });
  it('textarea should contain placeholder', () => {
    const { textarea, } = setup();
    expect(textarea.prop('placeholder')).toMatchSnapshot();
  });
  it('textarea should contain textarea', () => {
    const { textarea, } = setup();
    expect(textarea.prop('value')).toMatchSnapshot();
  });
});
