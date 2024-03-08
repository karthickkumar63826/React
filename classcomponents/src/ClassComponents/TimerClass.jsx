import React from "react";

class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component is instantiated");
    this.state = { time: new Date() };
  }

  componentDidMount() {
    console.log("component is mounted");
    this.timeId = setInterval(() => 
    .setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
    clearInterval(this.timeId);
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  render() {
    return (
      <>
        {this.state.time.getHours()}:{this.state.time.getMinutes()}:
        {this.state.time.getSeconds()}
      </>
    );
  }
}

export default TimerClass;
