import React from "react";

export default class extends React.Component {
  static async getInitialProps() {
    const fs = require('fs');

    fs.readFile('./num_got_lucky.json', 'utf8', (err, data) => {

      if (err) {
        console.log(`Error reading file from disk: ${err}`);
      } else {

        // parse JSON string to JSON object
        const num_got_lucky = JSON.parse(data);

        // print all databases
        num_got_lucky.forEach(db => {
          num_got_lucky.log(`${db.name}: ${db.type}`);
        });
      }
      
    });

  render() {
    return <p></p>;
    return <button>"Click If You Just Had Sex"</button>;
  }
}
