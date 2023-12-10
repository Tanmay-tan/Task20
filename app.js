// App.js

import React from 'react';
import './App.css';

const pricingOptions = [
  { name: 'Free', cost: '$0/Month' },
  { name: 'Basic', cost: '$9/Month' },
  { name: 'Pro', cost: '$49/Month' },
];

const App = () => {
  return (
    <div className="app">
      {pricingOptions.map((option, index) => (
        <div key={index} className="pricing-option">
          <div className="option-name">{option.name}</div>
          <div className="option-cost">{option.cost}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
