import React, { Component } from "react";
import Header from "./components/Header";
//import { BrowserRouter /* , Switch, Route  */ } from "react-router-dom";

import SearchBar from "./components/common/SearchBar";
import Results from "./components/common/Results";
import "./App.css";
import { API_URL } from "./config";

class App extends Component {
  state = {
    title: null,
    created: null,
    director: null,
    opening_crawl: "",
    starships: [],
    release_date: "",
    characters: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchField = e.target.elements.searchQuery.value.toLowerCase();
    fetch(`${API_URL}${searchField}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          created: data.created,
          director: data.director,
          opening_crawl: data.opening_crawl,
          starships: data.starships,
          release_date: data.release_date,
          characters: data.characters
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.characters);
    return (
      <>
        <Header />
        <SearchBar handleSubmit={this.handleSubmit} />
        <Results
          title={this.state.title}
          created={this.state.created}
          director={this.state.director}
          opening_crawl={this.state.opening_crawl}
          starships={this.state.starships}
          release_date={this.state.release_date}
          characters={this.state.characters}
        />
      </>
    );
  }
}

export default App;
