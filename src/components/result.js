import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
              <img src={this.props.avatar} />
              <div>
                <span>Emp Id: {this.props.empId}</span>
                <br/>
                <span>Name: {this.props.name}</span>
              </div>
            </div>
        )
    }
}


export default Result;