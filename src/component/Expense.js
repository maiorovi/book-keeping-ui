import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteExpense} from '../action/actions.js';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {expense : props.expense}
    }
    render() {
        return(
            <tr>
                <td>{this.state.expense.description}</td>
                <td>{this.state.expense.value}</td>
                <td>{this.state.expense.currency}</td>
                <td><span className="btn btn-delete" onClick={() => this.handleDelete()}>Delete</span></td>
            </tr>
            );
    }

    handleDelete() {
        console.log(`handle delete called for id ${this.state.expense._id}`);
        this.props.deleteExpense(this.state.expense._id)
    }
}

export default connect(null, {deleteExpense})(Expense);