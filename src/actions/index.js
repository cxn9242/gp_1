import axios from 'axios';
import { CHANGE_EMP_SELECTION } from '../appsettings/constants'

export function getDetailsBtnClick(emp) {
  return (dispatch) => {
    return axios.get('https://reqres.in/api/users/' + emp)
              .then( (res) => {
                const data = res.data.data;
                dispatch(setDataAsProps(data.avatar, data.first_name, data.last_name, data.id));
              })
              .catch( (res) => {
                console.log('ERROR IS HANDLED IN CODE IN INDEX.JS ------ ERROR from AXIOS', res)
              })
  }
}

export function setDataAsProps(avatar, fname, lname, id) {
    return {
        type: 'GOT_DATA_FROM_SVR',
        avatar,
        name: fname + ' ' + lname,
        empId: id
    }
}

export function handleChangeEmpSelection(emp) {
  return (dispatch) => {
    dispatch(changeSelectedEmployee(emp));
  }
}

export function changeSelectedEmployee(emp) {
  return {
    type: 'CHANGE_EMP_SELECTION',
    empId: emp
  }
}
