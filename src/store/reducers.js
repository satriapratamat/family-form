import { combineReducers } from 'redux';
import formReducer from './formReducer';


const SET_NAME = 'SET_NAME';
const SET_ID_NUMBER = 'SET_ID_NUMBER';
const SET_ADDRESS = 'SET_ADDRESS';
const SET_JOB = 'SET_JOB';
const SET_DOB = 'SET_DOB';
const SET_PHONE_NUMBERS = 'SET_PHONE_NUMBERS';
const SET_FAMILY_MEMBERS = 'SET_FAMILY_MEMBERS';
const SET_ERRORS = 'SET_ERRORS';

export const setName = (name) => ({ type: SET_NAME, name });
export const setIdNumber = (idNumber) => ({ type: SET_ID_NUMBER, idNumber });
export const setAddress = (address) => ({ type: SET_ADDRESS, address });
export const setJob = (job) => ({ type: SET_JOB, job });
export const setDob = (dob) => ({ type: SET_DOB, dob });
export const setPhoneNumbers = (phoneNumbers) => ({ type: SET_PHONE_NUMBERS, phoneNumbers });
export const setFamilyMembers = (familyMembers) => ({ type: SET_FAMILY_MEMBERS, familyMembers });
export const setErrors = (errors) => ({ type: SET_ERRORS, errors });

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
};

const idNumberReducer = (state = '', action) => {
  switch (action.type) {
    case SET_ID_NUMBER:
      return action.idNumber;
    default:
      return state;
  }
};

const addressReducer = (state = '', action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return action.address;
    default:
      return state;
  }
};

const jobReducer = (state = '', action) => {
  switch (action.type) {
    case SET_JOB:
      return action.job;
    default:
      return state;
  }
};

const dobReducer = (state = '', action) => {
  switch (action.type) {
    case SET_DOB:
      return action.dob;
    default:
      return state;
  }
};

const phoneNumbersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PHONE_NUMBERS:
      return action.phoneNumbers;
    default:
      return state;
  }
};

const familyMembersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FAMILY_MEMBERS:
      return action.familyMembers;
    default:
      return state;
  }
};

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    name: nameReducer,
    idNumber: idNumberReducer,
    address: addressReducer,
    job: jobReducer,
    dob: dobReducer,
    phoneNumbers: phoneNumbersReducer,
    familyMembers: familyMembersReducer,
    errors: errorsReducer,
    form: formReducer,
});

export default rootReducer;