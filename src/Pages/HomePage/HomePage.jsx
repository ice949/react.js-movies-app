import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./HomePage.css";
import { modeContext } from "../../Pages/Container/Container";

import fetchShowList from "../../apis/FetchShows";

const HomePage = () => {
    const modeColor = useContext(modeContext);
    console.log(modeColor)

  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const page = 1; // Replace with the desired page number
    fetchShowList(page)
      .then((data) => {
        // console.log("Show List:", data);
        const showsArr = data.slice(12, 24)
        setShows(showsArr);
        console.log("Show List:", shows);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors as needed
      });
  };

  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div className="HomePage">
      <div className={`fet-cover ${modeColor}`}>
        <h3 className={modeColor}>Featured Movie</h3>
      </div>

      <div className="movies">
        {shows.map((show) => {
            return (
                <div className={`movie ${modeColor}`}>
                <img
                    src={show.image.medium}
                    alt=""
                />
                <div className="movie-info">
                    <h3>{show.name}</h3>
                    <span className="green">{show.rating.average}</span>
                </div>
                <div className="movie-overview">
                    <h2>Overview</h2>
                    <p>{`${show.summary}`}</p>
                </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default HomePage;
