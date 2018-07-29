import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {addExpense} from '../action/actions.js';
import {connect} from 'react-redux';

class AddExpense extends Component {

    render() {
        const {handleSubmit} = this.props;

        return (

            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))} className={"col-4 offset-md-4"}>
                <p className={"h1"}>Add Expense</p>
                <div className={"form-group"}>
                    <label>Description</label>
                    <Field name="description"  className={"form-control"} placeholder="What did you buy"
                           component="input" type="text"/>
                </div>

                <div className={"form-group"}>
                    <label>Amount</label>
                    <Field name="value" className={"form-control"} component="input" type="text" placeholder="How much did it cost"/>
                </div>

                <div className={"form-group"}>
                    <label>Currency</label>
                    <Field name="currency" component="input" className={"form-control"} type="text"
                           placeholder="Currency"/>
                </div>
                <button type="submit">Add</button>
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