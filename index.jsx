import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
  }

  render() {
    const jsonFile = require('./num_got_lucky.json');
    return jsonFile;
    return <button>Push If You Just Had Sex</button>
  }

  addASexHaving(){

  }
}
