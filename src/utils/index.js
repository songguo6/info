import moment from 'moment';

export const getTodayZeroStamp = () => {
  const now = moment().format('YYYY-MM-DD');
  const zero = moment(now).format('YYYY-MM-DD HH:mm:ss');
  return moment(zero).toDate().getTime();
}