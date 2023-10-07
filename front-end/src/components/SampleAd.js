import React from "react";

export default function SampleAd(props) {

    return (
    <>
      <div>SampleAd</div>
      {props.entries.map((entry) => (
        <div className="row" key={entry._id}>
          <div className="col">{entry.text}</div>
          <div className="col">{entry.textTwo}</div>
        </div>
      ))}
      <h2>
        This:{" "}
        {props.entries.length > 1 ? props.entries[0].text : "No data available"}
      </h2>
      {/* <h2>This: {props.entries[0].text}</h2> */}
    </>
  );
}
