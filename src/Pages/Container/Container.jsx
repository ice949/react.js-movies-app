import React, { useState } from 'react'
import './Container.css';
import Navigation from '../../Components/Navigation/Navigation';

const Container = () => {

    const [mode, setMode] = useState('dark')

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
        } else {
            setMode('dark')
        }
    }

  return (
    <div className={`Container ${mode}`}>
        <Navigation toggleMode={toggleMode}/>
      
    </div>
  );
}

export default Container;
