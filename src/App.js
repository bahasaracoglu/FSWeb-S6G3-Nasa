import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BiComponent from "./components/BiComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-08-21").toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "UlsVoK8kcwqrZsjMU3GBTYLF0xxcbp7DpgafkE0n",
          date: datePicker,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [datePicker]);

  if (!data) return <h3>Yükleniyor...</h3>;

  // {data.media_type === "image" && <img src={data.url} alt={data.title} />}

  return (
    <div className="App">
      <div>
        <img
          className="background_image"
          style={{
            backgroundImage: `url(${data.hdurl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        />
        <div className="container">
          <nav>
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} />
            <h2>ASTRONOTE PICTURE OF THE DAY</h2>
            <FontAwesomeIcon icon={faShareNodes} style={{ color: "#ffffff" }} />
          </nav>
          <BiComponent
            data={data}
            dateChange={setDatePicker}
            currentDate={datePicker}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
