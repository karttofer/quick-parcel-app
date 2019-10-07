import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
describe('App', () => {
  it('renders the title', () => {
  	const app = shallow(<App debug/>);
    expect(toJson(app)).toMatchSnapshot();
  });
});