import React, {Component} from 'react';
import ExpenseList from "./ExpenseList.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpense from "./AddExpense";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/expenses/add" component={AddExpense}/>
                        <Route path="/expenses" component={ExpenseList}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;