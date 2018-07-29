import React, {Component} from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import {fetchExpenses} from '../action/actions.js';
import ActionPanel from "./ActionPanel";

class ExpenseList extends Component {
    componentDidMount() {
        this.props.fetchExpenses()
    }

    render() {
        return (
            <div id="expense-list-page">
                <p className={"h1"}>Expenses Summary</p>
                <ActionPanel />
                <div>
                    <table className={"table table-striped"}>
                        <thead className={"thead-light"}>
                        <tr>
                            <th scope={"col"}>Description</th>
                            <th scope={"col"}>Amount</th>
                            <th scope={"col"}>Currency</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.expenses.map(expense => <Expense expense={expense} key={expense.id}/>)}
                        </tbody>
                    </table>
                </div>
            </div>);
    }

}

function mapStateToProps(state) {
    console.log(state.expenses);
    return {
        expenses: state.expenses
    };
}

export default connect(mapStateToProps, {fetchExpenses})(ExpenseList);

