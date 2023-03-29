import { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    id: "",
  };

  handleStartTimer = () => {
    if (!this.state.id) {
      this.setState((prevState) => {
        const id = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
        return { id };
      });
    }
  };

  handleStopTimer = () => {
    clearInterval(this.state.id);
    this.setState({ id: "" });
  };

  handleThrowError = () => {
    throw new Error();
  };

  render() {
    const { time } = this.state;
    return (
      <>
        <h1>{time}</h1>
        <div>
          <button onClick={this.handleStartTimer}>Start</button>
          <button onClick={this.handleStopTimer}>Stop</button>
          <button onClick={this.handleThrowError}>Error</button>
        </div>
      </>
    );
  }
}

export default Timer;
