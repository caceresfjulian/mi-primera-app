import React, { Component } from "react";

export default class Test extends Component {
  state = {
    cells: ["a", "b", "c"],
  };

  handleChange = (value, index) => {
    this.setState(({ cells }) => ({
      cells: cells.map((cell, i) => (index === i ? value : cell)),
    }));
  };

  handleAdd = (index) => {
    this.setState(({ cells }) => {
      const updatedCells = cells;
      updatedCells.splice(index + 1, 0, "-");
      return { cells: updatedCells };
    });
  };

  render() {
    const { cells } = this.state;
    return (
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "30vh",
        }}
      >
        <h2 style={{ display: "block" }}>{cells.join("")}</h2>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {cells.map((cell, index) => (
            <li
              key={index}
              style={{
                width: 100,
                height: 100,
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                position: "relative",
              }}
            >
              <input
                style={{
                  width: "75%",
                  textAlign: "center",
                  border: "unset",
                  cursor: "pointer",
                }}
                type="text"
                value={cell}
                onChange={(e) => this.handleChange(e.target.value, index)}
              />
              {index !== cells.length - 1 && (
                <span
                  style={{
                    position: "absolute",
                    right: -10,
                    height: "100%",
                    width: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => this.handleAdd(index)}
                />
              )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
