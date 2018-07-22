import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {addExpense} from '../action/actions.js';
import {connect} from 'react-redux';

class AddExpense extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <div>
                    <label>Description</label>
                    <Field name="description" component="input" type="text" />
                </div>
                <div>
                    <label>Amount</label>
                    <Field name="value" component="input" type="text" />
                </div>
                <div>
                    <label>Currency</label>
                    <Field name="currency" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    handleSubmit(values) {
        this.props.addExpense(values, () => {
            this.props.history.push('/expenses');
        });
    }
}

export default reduxForm({
    form: 'AddExpense'
})(connect(null, {addExpense})(AddExpense))