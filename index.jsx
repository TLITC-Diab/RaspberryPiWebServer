import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
    const jsonFile = require('./num_got_lucky.json');
  }

  render() {
    return jsonFile;
    return <button>Push If You Just Had Sex</button>
  }

  addASexHaving(){

  }
}
