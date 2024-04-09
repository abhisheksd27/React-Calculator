import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperatorClick = (operator) => {
    try {
      setResult(eval(input + operator + '0'));
      setInput(input + operator);
    } catch (error) {
      console.error('Error performing calculation:', error);
    }
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(input));
      setInput('');
    } catch (error) {
      console.error('Error performing calculation:', error);
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <div>
        <input type="text" value={input || result} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
