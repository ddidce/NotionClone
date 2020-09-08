import React, { useState, useCallback } from 'react'
import CreateNotion from './components/CreateNotion';

const App = () => {
  const [notions, setNotions] = useState('');
  console.log([notions],[setNotions]);

  const newLine = useCallback(e => {
    if(e.key === "Enter") {
      e.preventDefault();
    }
  })

  return (
    <div contentEditable="tr">
      <CreateNotion />
    </div>
  )
}

export default App;
