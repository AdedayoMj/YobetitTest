import React, { Component } from "react";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="container center ">
        <div>
          <h1>ERROR 404</h1>
        </div>
        <div></div>
        <p>
          ...Oops Something went wrong, the page you are looking for is not
          available
        </p>
      </div>
    );
  }
}
