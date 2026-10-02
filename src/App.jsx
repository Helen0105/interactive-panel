import "./App.css";

import { Component } from "react";

class App extends Component {
  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState((prev) => ({
      value: prev.value + 1,
    }));
  };

  handleMinus = () => {
    this.setState((prev) => ({
      value: prev.value - 1,
    }));
  };

  handleReset = () => {
    this.setState((prev) => ({
      value: (prev.value = 0),
    }));
  };




  render() {
    return (
      <section>
        <h1>Завдання 1. Лічильник кліків</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handlePlus} type="button">
          +1
        </button>
        <button onClick={this.handleMinus} type="button">
          -1
        </button>
        <button type="button" onClick={this.handleReset}>
          {/* {" "} */}
          Reset
        </button>

        <h2>Завдання 2. Перемикач теми</h2>
<button type="button">Увімкнути темну тему</button>
<button type="button">Увімкнути світлу тему</button>
      </section>
    );
  }
}

export default App;
