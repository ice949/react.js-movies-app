import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./HomePage.css";
import { modeContext } from "../../Pages/Container/Container";

import fetchShowList from "../../apis/FetchShows";
import { FaUser } from "react-icons/fa";

const HomePage = () => {
  const modeColor = useContext(modeContext);
  console.log(modeColor);

  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const page = 1;
    fetchShowList(page)
      .then((data) => {
        const showsArr = data.slice(12, 24);
        setShows(showsArr);
        console.log("Show List:", shows);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div className="HomePage">
      <div className={`fet-cover ${modeColor}`}>
        <div className="head">
          <h3 className={modeColor}>Featured Movie</h3>
          <div className="bordered">
            <FaUser />
          </div>
        </div>

        <div className="fet-movie">
          <h2>JUMANJI</h2>
          <div className="navs">
            <span className="active">Summary</span>
            <span className="green">Rating</span>
            <span className="green">genre</span>
          </div>
        </div>
        <p
          className={`${
            modeColor === "light-color" ? "orange" : ""
          } mobile-only`}
        >
          Siblings Peter and Judy Shepherd discover the magical board game
          Jumanji in an old mansion's attic. Upon playing, they release Alan
          Parrish, trapped in the game's inner world for decades. To free him,
          they must conquer challenges like giant bugs, ill-mannered monkeys,
          and stampeding rhinos.
        </p>
        <p
          className={`${
            modeColor === "light-color" ? "orange" : ""
          } desktop-only`}
        >
          A magical board game unleashes a world of adventure on siblings Peter
          (Bradley Pierce) and Judy Shepherd (Kirsten Dunst). While exploring an
          old mansion, the youngsters find a curious, jungle-themed game called
          Jumanji in the attic. When they start playing, they free Alan Parrish
          (Robin Williams), who's been stuck in the game's inner world for
          decades. If they win Jumanji, the kids can free Alan for good -- but
          that means braving giant bugs, ill-mannered monkeys and even
          stampeding rhinos!
        </p>
        <div className="buttons">
          <button className="btn">Watch Now</button>
          <button className="btn">Watch Later</button>
        </div>
      </div>

      <div className="movies">
        {shows.map((show) => {
          return (
            <div className={`movie ${modeColor}`}>
              <img src={show.image.medium} alt="" />
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
