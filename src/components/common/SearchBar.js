import React from "react";

const SearchBar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          Get a Random Star war Film Info Using this Method e.g films/3 or
          films/9
        </label>
        <input
          name="searchQuery"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter film followed by a / an number  ........"
        />
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
