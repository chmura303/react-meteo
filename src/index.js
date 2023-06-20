import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Countries from './Countries';
import Count from './Count';
import Countdown from './Countdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Countries />
    <Count enabled={false} incrementBy={1} />
    <Count enabled={true} incrementBy={10} />
    <Countdown />
  </>
);
