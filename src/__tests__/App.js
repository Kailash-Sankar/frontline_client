import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

test('renders without crashing', () => {
    mount(<App />);
});