import React, { Component } from "react";

const GENDER = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  name: "",
  username: "",
  password: "",
  gender: GENDER.MALE,
  legal: false,
  age: "",
  error: {
    name: true,
    username: true,
    password: true,
    gender: false,
    legal: true,
    age: true,
  },
};

export default class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleInput = (e) => {
    const { name, type, checked, value } = e.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      error: {
        ...this.state.error,
        [name]: this.validateError(name, type === "checkbox" ? checked : value),
      },
    });
  };

  validateError = (name, value) => {
    if (
      (name === "name" || name === "password" || name === "username") &&
      value.length < 5
    ) {
      return true;
    } else if (name === "age" && value === "") {
      return true;
    } else if (name === "legal" && !value) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          style={{
            border: `${
              this.state.error.name ? "1px solid red" : "1px solid black"
            }`,
          }}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
          style={{
            border: `${
              this.state.error.username ? "1px solid red" : "1px solid black"
            }`,
          }}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInput}
          style={{
            border: `${
              this.state.error.password ? "1px solid red" : "1px solid black"
            }`,
          }}
        />
        <section
          style={{
            border: `${
              this.state.error.gender ? "1px solid red" : "1px solid black"
            }`,
          }}
        >
          <label style={{ marginRight: "15px" }}>
            Male
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === GENDER.MALE}
              value={GENDER.MALE}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              checked={this.state.gender === GENDER.FEMALE}
              value={GENDER.FEMALE}
              onChange={this.handleInput}
            />
          </label>
        </section>
        <select
          name="age"
          value={this.state.age}
          onChange={this.handleInput}
          style={{
            border: `${
              this.state.error.age ? "1px solid red" : "1px solid black"
            }`,
          }}
        >
          <option value="" disabled></option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36+">36+</option>
        </select>
        <label
          style={{
            border: `${
              this.state.error.legal ? "1px solid red" : "1px solid black"
            }`,
          }}
        >
          Agree to terms
          <input
            type="checkbox"
            name="legal"
            style={{ marginLeft: "15px" }}
            onChange={this.handleInput}
          />
        </label>
        <button disabled={Object.values(this.state.error).includes(true)}>
          ENVIAR
        </button>
      </form>
    );
  }
}
