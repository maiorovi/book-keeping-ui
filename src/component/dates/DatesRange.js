import React, {Component} from 'react';

class DatesRange extends Component {

   render() {
        return (
            <div id={"dates range"} >f
                <div className={"form-group"}>
                    <label>From: </label>
                    <input type={"date"} />
                </div>
                <div className={"form-group"}>
                    <label>To: </label>
                    <input type={"date"} />
                </div>
                    <button type="submit">Find</button>
            </div>
        )
    }


}

export default DatesRange