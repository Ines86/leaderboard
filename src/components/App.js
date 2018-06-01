import React from 'react';
import axios from 'axios';
import Header from './Header';
import Leaderboard from './Leaderboard';

export default class App extends React.Component {
  state = {
    data: [],
    sortBy: "recent"
  };

  handleSortByRecent = () => {
    if (this.state.sortBy !== "recent") {
      this.state.data.sort((a, b) => b.recent - a.recent
      );
      this.setState({ data: this.state.data, sortBy: "recent" });
    }
  };

  handleSortByAlltime = () => {
    if (this.state.sortBy !== "alltime") {
      this.state.data.sort((a, b) => b.alltime - a.alltime
      );
      this.setState({ data: this.state.data, sortBy: "alltime" });
    }
  };

  componentDidMount() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    axios.get(url)
      .then((response) => {
        this.setState({ data: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = "Camper Leaderboard";

    return (
      <div className="wrapper">
        <Header title={title} />
        <Leaderboard
          data={this.state.data}
          handleSortByRecent={this.handleSortByRecent}
          handleSortByAlltime={this.handleSortByAlltime}
          sortedBy={this.state.sortBy}
        />
      </div>
    );
  }
}
