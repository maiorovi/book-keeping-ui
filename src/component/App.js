import React, { Component } from 'react';
import ExpenseList from "./ExpenseList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book-keeping-ui</h1>
        <ExpenseList />
      </div>
    );
  }
}

export default App;
