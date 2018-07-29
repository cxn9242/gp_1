import CHANGE_EMP_SELECTION from '../appsettings/constants';

const defaultState = {
    avatar: '',
    name: '',
    empId: ''
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'GOT_DATA_FROM_SVR':
            return {
              ...state,
              avatar: action.avatar,
              name: action.name,
              empId: action.empId
            }
        case 'CHANGE_EMP_SELECTION':
            return {
              ...state,
              empId: action.empId
            }
        case 'CLEAR_BTN_CLICK':
            return {
              ...state,
              avatar: '',
              name: '',
              empId: ''
            }
        default:
            return {...state}
    }
}

export default mainReducer;