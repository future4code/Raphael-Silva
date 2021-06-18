import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusics from "./AddMusics";

const PlaylistConteiner = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 5%;
`;

const ButtonBack = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 10px;
  margin-bottom: 4%;
  background-color: green;
  color: whitesmoke;
`;

const SearchField = styled.input`
  width: 15%;
  padding: 5px;
  margin-bottom: 5%;
`;

const ButtonSearch = styled.button`
  font-size: 14px;
  width: 10%;
  padding: 5.2px;
  background-color: green;
  color: whitesmoke;
`;

const PlaylistsNames = styled.span`
  padding-bottom: 10%;
  line-height: 50px;
`;

const ButtonDelete = styled.span`
  color: red;
  margin-left: 1%;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "raphael-nicolini-molina"
  }
};

class Playlists extends React.Component {
  state = {
    playlists: [],
    title: "Suas Playlists:",
    currentPage: "playlists",
    listId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePlaylist = (listId) => {
    if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
      axios
        .delete(`${baseUrl}/${listId}`, axiosConfig)
        .then(() => {
          alert("Playlist deletada!");
          this.fetchPlaylists();
        })
        .catch((erro) => {
          alert("Erro ao deletar Playlist");
          console.log(erro.message);
        });
    }
  };

  changePage = (listId) => {
    if (this.state.currentPage === "playlists") {
      this.setState({
        currentPage: "playlistDetail",
        listId: listId
      });
    } else {
      this.setState({ currentPage: "playlists", listId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`,
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.playlist });
      })
      .catch((error) => {
        alert("Erro ao buscar playlist");
        console.log(error);
      });
  };

  render() {
    return (
      <PlaylistConteiner>
        <ButtonBack onClick={this.props.changePage}>Voltar</ButtonBack>
        <h3>Procurar playlist:</h3>
        <SearchField
          placeholder="Buscar Playlist"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <ButtonSearch onClick={this.handleSearchPlaylist}>Buscar</ButtonSearch>
        {this.state.currentPage === "playlists" ? (
          <div>
            <ul>
              <h2>{this.state.title}</h2>
              {this.state.playlists.length === 0 && <div>Carregando...</div>}
              {this.state.playlists.map((list) => {
                return (
                  <li>
                    <PlaylistsNames
                      onClick={() => this.changePage(list.id, list.name)}
                    >
                      {list.name}
                    </PlaylistsNames>
                    <ButtonDelete onClick={() => this.deletePlaylist(list.id)}>
                      X
                    </ButtonDelete>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <AddMusics listId={this.state.listId} changePage={this.changePage} />
        )}
      </PlaylistConteiner>
    );
  }
}
export default Playlists;
