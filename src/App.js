import { useState } from 'react';
import './App.css';
import Box from './components/Box'
import Input from './components/Input';

function App() {
  const [color, setColor] = useState(null)

  const handleInput = val => {
    setColor(val)
  }

  return (
    <div className="App">
      <div className="container">
        <Box color={color} />
        <Input handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
