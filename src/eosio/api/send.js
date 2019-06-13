import { api, contract } from './config'

export const pushAction = async (actor, permission, action, data) => {
  const result = await api.transact({
    actions: [{
      account: contract,
      name: action,
      authorization: [{
        actor,
        permission,
      }],
      data,
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
  return result;
}