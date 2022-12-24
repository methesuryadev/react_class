import React, { Component } from "react";

class PropsWithClass extends Component {

  render() {
    return(
        <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Subject: {this.props.subject}</h3>
      </div>
    )   
  }
}

export default PropsWithClass;
