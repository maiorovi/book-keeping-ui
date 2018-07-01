import React, {Component} from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import {fetchExpenses} from '../action/actions.js';

class ExpenseList extends Component {
    componentDidMount() {
        this.props.fetchExpenses()
    }

    render() {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Currency</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.expenses.map(expense => <Expense expense={expense} key={expense.id} /> )}
                </tbody>
            </table>
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
// export default ExpenseList;

