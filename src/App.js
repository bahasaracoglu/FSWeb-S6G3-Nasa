import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BiComponent from "./components/BiComponent";

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

  return (
    <div className="App">
      <BiComponent
        data={data}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
