import React, { Component } from "react";

export default class LifeCycleComp extends Component {
  state = {
    winner: "",
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      winner: nextProps.players.reduce((playerA, playerB) => {
        if (playerA.score > playerB.score) {
          return playerA;
        } else if (playerA.score < playerB.score) {
          return playerB;
        } else {
          // return {
          //   name: `${playerA.name} - ${playerB.name}`,
          //   score: playerA.score,
          // };
          return undefined;
        }
      }),
    };
  }

  componentWillUnmount() {
    console.log("desmonte");
  }

  render() {
    const { winner } = this.state;
    return (
      <div>
        <h1>Meet the winner</h1>
        <p>Name: {winner.name}</p>
        <p>Score: {winner.score}</p>
      </div>
    );
  }
}
