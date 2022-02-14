import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
    var json = await fetch("/time").then(resp => resp.json());
    return { time: json.time };
    const jsonFile = require('./num_got_lucky.json');
  }

  render() {
    return <p>jsonFile</p>;
  }
}
