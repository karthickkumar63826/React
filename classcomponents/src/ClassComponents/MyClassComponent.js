import { Component } from "react";

class ClassBasedComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello from Class Component" };
  }

  componentDidMount() {
    console.log("componenet is mounted");
  }

  render() {
    return (
      <>
        <h1>Class Based Components</h1>
        <h3>{this.state.message}</h3>
        <button
          onClick={() => this.setState({ message: "Message is updated" })}
        >
          Change message
        </button>
      </>
    );
  }
}

export default ClassBasedComponents;
