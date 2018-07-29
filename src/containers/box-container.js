import React, { Component } from 'react';
import Box from '../components/box'
import { connect } from 'react-redux';
import * as AC from '../actions/index';
import Result from '../components/result';
import FormContainer from './form-container';

class BoxContainer extends Component {
    constructor (props) {
      super(props);
      this.showResults = this.showResults.bind(this);
    }

    showResults() {
      const imgUrl = this.props.avatar;
      if (imgUrl === undefined || imgUrl === '') {
          return ''
      } else {
        return (
            <div>
                <Result avatar={this.props.avatar}
                        empId={this.props.empId}
                        name={this.props.name}>
                </Result>
            </div>
          );
      }
    }

    render() {
        return (
            <div>
              <FormContainer handleSelectionChange={this.props.handleChangeEmpSelection}></FormContainer>
              <Box getDetailsBtnClick={this.props.getDetailsBtnClick}
                   empId={this.props.empId}>
              </Box>
              {this.showResults()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, AC)(BoxContainer);