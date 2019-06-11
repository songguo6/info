import * as actionTypes from './actionTypes';

export const changeLoginStatus = (value) => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  value
});