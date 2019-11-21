import React from "react";

const Results = props => {
  return (
    <div className="mt-4 container">
      {props.title && <p>Title: {props.title}</p>}
      {props.director && <p>Director: {props.director}</p>}
      {props.created && <p>Created: {props.created}</p>}
      {props.opening_crawl && <p>Movie OverView: {props.opening_crawl}</p>}
      {props.release_date && <p>Release Date: {props.release_date}</p>}
    </div>
  );
};

export default Results;
