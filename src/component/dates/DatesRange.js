import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExpenses} from "../../action/actions";

class DatesRange extends Component {

    constructor(props) {
        super(props);
        this.state = {from: '2018-07-04', to: '2018-07-04'}
        this.handleFromDateSelection = this.handleFromDateSelection.bind(this);
        this.handleToDateSelection = this.handleToDateSelection.bind(this);
    }

   render() {
        return (
            <div id={"dates range"} >f
                <div className={"form-group"}>
                    <label>From: </label>
                    <input type={"date"} onChange={this.handleFromDateSelection} />
                </div>
                <div className={"form-group"}>
                    <label>To: </label>
                    <input type={"date"} onChange={this.handleToDateSelection} />
                </div>
                    <button type="submit" onClick={() => this.props.fetchExpenses(this.state.from, this.state.to)}>Find</button>
            </div>
        )
    }

    handleToDateSelection(event) {
        console.log(event.target.value);
        this.setState({from : event.target.value})
    }


    handleFromDateSelection(event) {
        console.log(event.target.value);
        this.setState({to : event.target.value});
    }
}

export default connect(null, {fetchExpenses})(DatesRange)