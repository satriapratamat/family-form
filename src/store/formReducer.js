import { UPDATE_FORM } from './actions';

const initialState = {
  name: '',
  idNumber: '',
  address: '',
  job: '',
  dob: '',
  phoneNumbers: [{ number: '' }],
  familyMembers: [{ name: '', dob: '', relationship: '' }],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;