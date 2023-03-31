import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;
  if (!data) return <h3>Yükleniyor...</h3>;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  return (
    <div>
      <h1>APOD</h1>

      <p>{data.date}</p>
      <p>
        (<label htmlFor="apodDate">See the Astronomy Photo of the:</label>
        <input
          onChange={(e) => dateChangeHandler(e)}
          type="date"
          name="apodDate"
          value={currentDate}
        />
        )
      </p>

      {data.media_type === "video" && (
        <iframe
          title={data.title}
          width="420"
          height="315"
          src={data.url}
        ></iframe>
      )}
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
