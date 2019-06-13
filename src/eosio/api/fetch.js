import { rpc, contract } from './config'

export const fetchAll = async (table, options) => {
  const res = await rpc.get_table_rows({
    json: true,             
    code: contract,     
    scope: contract,      
    table,        
    limit: 9999,       
    reverse: true, 
    key_type: 'i64',
    index_position: 1,             
    ...options,   
  });
  return res.rows;
}

export const fetchOne = async (table, keyValue) => {
  const res = await rpc.get_table_rows({
    json: true,                
    code: contract,          
    scope: contract,           
    table,          
    lower_bound: keyValue, 
    upper_bound: keyValue,    
    limit: 1,          
  });
  return res.rows[0];
}