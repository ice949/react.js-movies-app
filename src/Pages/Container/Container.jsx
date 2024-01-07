import React, { useState, createContext } from 'react'
import './Container.css';
import Navigation from '../../Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const modeContext = createContext();

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
    <modeContext.Provider value={modeColor}>
        <div className={`Container ${mode}`}>
        <Navigation toggleMode={toggleMode} modeColor={modeColor}/>
        <Outlet modeColor={modeColor}/>
        </div>
        
    </modeContext.Provider>
  );
}

export default Container;
