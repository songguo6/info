import { pushAction } from './send';
import store from '../../store';

export const addcandy = async (type, title, link, info, reward, start_time, end_time, callback) => {
  const account = store.getState().account;
  if(account.name){
    try{
      const res = await pushAction(account.name, account.authority, 'addcandy', {
        type, title, link, info, reward, start_time, end_time, 
      });
      callback(res);
    }catch(error){
      callback(error);
    }
  }
}
