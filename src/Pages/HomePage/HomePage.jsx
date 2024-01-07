import React from 'react'
import './HomePage.css';

const HomePage = ({modeColor}) => {
    console.log(modeColor)
  return (
    <div className="HomePage">
        <div className={`fet-cover ${modeColor}`}>
            <h3 className={modeColor}>Featured Movie</h3>
        </div>
    </div>
  );
}

export default HomePage;
