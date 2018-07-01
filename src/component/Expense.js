import React, {Component} from 'react';

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
            </tr>);
    }
}

export default Expense;