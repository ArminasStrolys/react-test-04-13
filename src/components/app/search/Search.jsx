import React, { useState } from "react";
import Dishes from "../../dishes/Dishes";

const Search = () => {

  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("null");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(value)
  };

  return (
    <div
      style={{ marginTop: "100px", marginBottom: "100px" }}
      className="ui container"
    >
      <form onSubmit={handleSubmit}>
        <div className="ui fluid input">
          <input
            type="text"
            placeholder="Search dishes..."
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />
          <div className="ui buttons">
            {value.length > 0 ? (
              <button className="ui button">Search</button>
            ) : (
              <button className="ui disabled button">Search</button>
            )}
          </div>
        </div>
      </form>
      <div className="ui container" style={{ marginTop: "100px", marginBottom: "100px", textAlign:'center'}}>
          <Dishes searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Search;
