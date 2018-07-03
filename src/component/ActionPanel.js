import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ActionPanel extends Component {
    render() {
       return (<div id="action-panel">
            <Link className="btn btn-danger" to="/expenses/add">Add expense</Link>
        </div>)
    }
}

export default ActionPanel