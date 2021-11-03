import { React, useState } from "react";

const Search = () => {
  const [place, setPlace] = useState("San Diego");
  return (
    <input
      type="text"
      placeholder="Enter city name..."
      value={place}
      onChange={(e) => setPlace(e.target.value)}
    ></input>
  );
};

export default Search;
