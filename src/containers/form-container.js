import React, { Component } from 'react';

const empDeptData = [
  { dept: '', employees: [] },
  { dept: 'HR', employees: [1, 2, 3, 4, 5] },
  { dept: 'ENGINEERING', employees: [6, 7, 8, 9, 10] }
];

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeptChange = this.onDeptChange.bind(this);
    this.onEmpChange = this.onEmpChange.bind(this);
    this.populateEmpDropdown = this.populateEmpDropdown.bind(this);

    this.state = {
      employeesToShow: []
    }
  }

  populateEmpDropdown(empArr) {
    let newArr = [];
    for (let i = 0; i < empArr.length; i++) {
      let emp = empArr[i];
      newArr.push(<option key={emp} value={emp}>{emp}</option>)
    }
    this.setEmployeesToShowState(newArr);
  }

  populateDeptDropdown() {
    let newArr = [];
    let idx = -1;
    empDeptData.map((obj) => {
      idx = idx + 1;
      let dept = obj.dept;
      newArr.push(<option key={dept} value={idx}>{dept}</option>)
      return newArr;
    });
    return newArr;
  }

  onDeptChange(e) {
    const empArr = empDeptData[e.target.value].employees;
    this.populateEmpDropdown(empArr);
    this.setSelectedEmployeeState(empArr[0]);
  }

  onEmpChange(e) {
    this.setSelectedEmployeeState(e.target.value);
  }

  setEmployeesToShowState(arr) {
    this.setState({
      employeesToShow: arr
    })
  }

  setSelectedEmployeeState(emp) {
    this.props.handleSelectionChange(emp);
  }

  render() {
    return (
      <div className='formContainer'>
          <span className='Button'>
            <label htmlFor='cboDept'>Department </label>
            <select id='cboDept' onChange={this.onDeptChange}>
              {this.populateDeptDropdown()}
            </select>
          </span>

          <span className='Button'>
            <label htmlFor='cboEmp'>Employees </label>
            <select id='cboEmp' onChange={this.onEmpChange}>
              {this.state.employeesToShow}
            </select>
          </span>
      </div>
    )
  }
}

export default FormContainer;