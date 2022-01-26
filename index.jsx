import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
    var json = await fetch("/time").then(resp => resp.json());
    return { time: json.time };
  }

  render() {
    return <p>The Current Time Is: "Time is an abstract of human perception an illusion created by NAHH NAHH NAHH NAHH NAAHH" {this.props.time}</p>;
  }
}
