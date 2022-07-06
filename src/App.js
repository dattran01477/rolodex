import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://41281316-4d2b-4928-a501-d81652f90557.mock.pstmn.io/zing.com")
      .then((rs) => rs.json())
      .then((users) => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
