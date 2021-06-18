import React from "react";
import styled from "styled-components";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";


const AppConteiner = styled.div`
  background-color: black;
  color: whitesmoke;
  margin: 0;
`;

class App extends React.Component {
  state = {
    currentPage: "addPlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "addPlaylist") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <AppConteiner>
        {this.state.currentPage === "addPlaylist" ? (
          <AddPlaylist changePage={this.changePage} />
        ) : (
          <Playlists changePage={this.changePage} />
        )}
      </AppConteiner>
    );
  }
}

export default App;
