import { Component } from "react";

class ClassIncrement extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "", num1: 0, num2: 0 };
  }

  Increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  Decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <>
        count: {this.state.count} <br />
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        {this.state.name}
        <br></br>
        <h2>Adding two numbers</h2>
        <p>Enter first number :</p>
        <input
          type="text"
          value={this.state.num1}
          onChange={(e) => this.setState({ num1: Number(e.target.value) })}
        ></input>
        <br />
        <p>Enter second number :</p>
        <input
          type="text"
          value={this.state.num2}
          onChange={(e) => this.setState({ num2: Number(e.target.value) })}
        />
        <br />
        {this.state.num1 + this.state.num2}
      </>
    );
  }
}

export default ClassIncrement;
