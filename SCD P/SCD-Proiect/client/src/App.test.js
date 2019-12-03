import React from 'react';
import ReactDOM from 'react-dom';
import gpsApp from './gpsApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<gpsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
