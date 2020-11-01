import React, { Component } from "react";
import { UserInput } from "./Components/userInput/userInput";
import { UserOutput } from "./Components/userOutput/userOutput";
import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ram", age: 55 },
      { id: 2, name: "Shyam", age: 75 },
      { id: 3, name: "Tedd", age: 25 }
    ]
  };

  handleIncrement = (id) => {
    let array = [...this.state.persons];
    const idx = array.findIndex((ele) => ele.id === id);
    array[idx].age++;
    this.setState({ persons: array });
  };

  handleDecrement = (id) => {
    let array = [...this.state.persons];
    const idx = array.findIndex((ele) => ele.id === id);
    array[idx].age--;
    this.setState({ persons: array });
  };

  handleOnChnage = (id, value) => {
    let array = [...this.state.persons];
    const idx = array.findIndex((ele) => ele.id === id);
    array[idx].name = value;

    this.setState({ persons: array });
  };

  renderingContent = () => {
    let content = this.state.persons.map((ele) => (
      <div className="column " key={ele.id}>
        <div className="ui fluid  card">
          <UserOutput
            name={ele.name}
            age={ele.age}
            callIncrement={() => this.handleIncrement(ele.id)}
            callDecrement={() => this.handleDecrement(ele.id)}
          />
          <UserInput
            value={ele.name}
            handleChange={(e) => this.handleOnChnage(ele.id, e.target.value)}
          />
        </div>
      </div>
    ));
    return content;
  };

  render() {
    return (
      <div className="App ui container">
        <h1> React Demo Project 4</h1>
        <div className="ui three column grid">{this.renderingContent()}</div>
      </div>
    );
  }
}

export default App;
