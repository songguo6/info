
import ScatterJS from 'scatterjs-core'
import { network } from './config'
import { checkConnected } from './common';

import * as actionCreator from '../../store/actionCreator';

export const login = async (dispatch) => {
  try {
    await checkConnected();
    const identity = await ScatterJS.scatter.login({accounts:[network]});
    const account = identity.accounts[0];
    if(account){
      dispatch(actionCreator.changeLoginStatus(account));
    }
  } catch (error) {
    console.error(error);
  }
}

export const logout = async (dispatch) => {
  try {
    await ScatterJS.scatter.logout();
    dispatch(actionCreator.changeLoginStatus({}));
  } catch (error) {
    console.error(error);
  }
}

export const checkLogin = async (dispatch) => {
  try {
    await checkConnected();
    const res = await ScatterJS.scatter.checkLogin();
    if(res) dispatch(login);
  } catch (error) {
    console.error(error);
  }
};
