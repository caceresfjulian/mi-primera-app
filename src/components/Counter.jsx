import { Component } from "react";

const TITLE = "Contador";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 500,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => {
      return {
        value: state.value + props.step,
      };
    });
  };

  handleDecrement = () => {
    this.setState((state, props) => {
      return {
        value: state.value - props.step,
      };
    });
  };

  handleReset = () => {
    this.setState({ value: this.props.initialValue });
  };

  render() {
    const { step } = this.props;

    return (
      <div
        style={{
          padding: 10,
          margin: 10,
          border: "1px solid lightgreen",
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{TITLE}</h2>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
        <div>
          <button type="button" onClick={this.handleDecrement}>
            Decrement by {step}
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Increment by {step}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
