import { Api, JsonRpc } from 'eosjs'

import ScatterJS from 'scatterjs-core'
import ScatterEOS from 'scatterjs-plugin-eosjs2'

import * as env from './env';

const appName = '币圈信息站';
const contract = 'coincoininfo';

const network = {
  blockchain: 'eos',
  protocol: env.PROTOCOL,
  host: env.HOST,
  port: env.PORT,
  chainId: env.CHAIN,
};

ScatterJS.plugins(new ScatterEOS());

const signatureProvider = ScatterJS.scatter.eosHook(network, null, true);
const url = network.protocol + '://' + network.host + ':' + network.port;

const rpc = new JsonRpc(url, { fetch })
const api = new Api({
  rpc,
  signatureProvider,
  chainId: network.chainId,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder(),
});

export { api, rpc, network, appName, contract }
