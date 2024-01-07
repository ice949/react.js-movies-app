import React from 'react'
import './HomePage.css';

const HomePage = ({modeColor}) => {
    console.log(modeColor)
  return (
    <div className="HomePage">
        <div className={`fet-cover ${modeColor}`}>
            <h3 className={modeColor}>Featured Movie</h3>
        </div>

        <div className="movies">
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
            <div className="movie">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBtb3ZpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <div className="movie-info">
                    <h3>Movie Title</h3>
                    <span className="green">PG-13</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
