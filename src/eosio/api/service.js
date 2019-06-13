import { pushAction } from './send';
import { getUserInfo } from '../store/actionCreator';
import store from '../store';

export const addcandy = async (dispatch) => {
  const account = store.getState().account;
  if(account.name){
    try{
      const res = await pushAction(account.name, account.authority, 'addcandy', {
        account: logged.name
      });
      console.log(res.transaction_id);
      dispatch(getUserInfo(logged.name));
    }catch(error){
      console.log(error.message);
    }
  }
}
