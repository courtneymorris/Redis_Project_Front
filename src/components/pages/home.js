import React, { useState, useEffect } from "react";

import SingleURL from "./singleURL";

export default function home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/url/get")
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.log(error));
  }, []);

  const renderUrls = () => {
    return data.map((key) => <SingleURL key={key} urlKey={key} />);
  };

  return (
    <div
      className="home-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderUrls()}
    </div>
  );
}
