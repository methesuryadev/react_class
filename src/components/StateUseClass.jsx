import React, {Component} from 'react';

class StateUseClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "suraj",
    };
  }

  updateName() {
    this.setState({
        name: "Hayat",
      });
    // alert('dd')
  }

  render(){
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button className="" onClick={()=>this.updateName()}>
          Change the name using class Comp
        </button>
      </div>
    );
  }
  
}

export default StateUseClass;