import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <span>
              <button className='Button' 
                  onClick={() => { this.props.getDetailsBtnClick(this.props.empId) }}>Get Details</button>
            </span>
        )
    }
}

export default Box;