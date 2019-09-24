import { all } from 'redux-saga';
import cartSaga from './cart/sagas';

export default function* rootSaga() {
  return yield all([cartSaga]);
}
