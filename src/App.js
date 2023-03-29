import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=UlsVoK8kcwqrZsjMU3GBTYLF0xxcbp7DpgafkE0n"
      )
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        Astronomy Photo Of The Day
        <span role="img" aria-label="go!">
          🚀
        </span>
      </h1>
      <p>
        Explore the mysteries of the universe! Each day, a unique image or
        photograph of distant galaxies, stunning nebulas, and other celestial
        wonders is highlighted, complemented by a brief description written by
        an experienced astronomer.
      </p>

      <p>{data.date}</p>
      <img src={data.url}></img>
      <p>{data.title}</p>
      <p>
        Image Credit & Copyright: <span>{data.copyright}</span>
      </p>
      <p>
        Explanation: <span>{data.explanation}</span>
      </p>
    </div>
  );
}

export default App;
