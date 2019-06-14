import { pushAction } from './send';
import store from '../store';

export const addcandy = async (type, title, link, info, start_time, end_time) => {
  const account = store.getState().account;
  if(account.name){
    try{
      const res = await pushAction(account.name, account.authority, 'addcandy', {
        type, title, link, info, start_time, end_time, 
      });
      console.log(res.transaction_id);
    }catch(error){
      console.log(error.message);
    }
  }
}
