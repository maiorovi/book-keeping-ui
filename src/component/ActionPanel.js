import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DatesRange from './dates/DatesRange'

class ActionPanel extends Component {
    render() {
       return (<div id="action-panel" className={'mt-2 mb-4 pt-2 pb-4 border-dark border-bottom'}>
            <Link className="btn btn-danger mr-5" to="/expenses/add">Add expense</Link>
           <DatesRange />
        </div>)
    }
}

export default ActionPanel