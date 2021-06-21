import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React app inside Wellcom';

export const mount = (node) => {
  ReactDOM.render(<App title={title} />, node);
};
