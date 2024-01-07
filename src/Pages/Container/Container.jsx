import React, { useState } from 'react'
import './Container.css';
import Navigation from '../../Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Container = () => {

    const [mode, setMode] = useState('dark')
    const [modeColor, setModeColor] = useState('dark-color')

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            setModeColor('light-color')
        } else {
            setMode('dark')
            setModeColor('dark-color')
        }
    }

  return (
    <div className={`Container ${mode}`}>
        <Navigation toggleMode={toggleMode} modeColor={modeColor}/>
        <Outlet modeColor={modeColor}/>
    </div>
  );
}

export default Container;
