// import Alert from "./components/Alert";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
import { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import LifeCycleComp from "./components/LifeCycleComp";

class App extends Component {
  state = {
    players: [
      { name: "Maria", score: 10 },
      { name: "Andrea", score: 4 },
      { name: "Phillip", score: 12 },
      { name: "Will", score: 8 },
      { name: "Robinson", score: 3 },
    ],
    isGameOpen: false,
  };

  handleScoreUpdate = (operation, playerIndex) => {
    return () => {
      this.setState((prevState) => {
        const updatedList = [...prevState.players];
        updatedList[playerIndex] = {
          ...prevState.players[playerIndex],
          score:
            operation === "add"
              ? prevState.players[playerIndex].score + 1
              : prevState.players[playerIndex].score - 1,
        };
        return { players: updatedList };
      });
    };
  };

  render() {
    const { players, isGameOpen } = this.state;
    return (
      <div style={styles}>
        {isGameOpen &&
          players.map((player, index) => (
            <label
              key={index}
              style={{
                width: "350px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
              }}
            >
              <span>{player.name}</span>
              <button onClick={this.handleScoreUpdate("substract", index)}>
                -
              </button>
              <span style={{ textAlign: "center" }}>{player.score}</span>
              <button onClick={this.handleScoreUpdate("add", index)}>+</button>
            </label>
          ))}
        <ErrorBoundary>
          {isGameOpen && <LifeCycleComp players={players} />}
        </ErrorBoundary>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              isGameOpen: !prevState.isGameOpen,
            }))
          }
        >{`${isGameOpen ? "End" : "Start"} game`}</button>
      </div>
    );
  }
}

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default App;
