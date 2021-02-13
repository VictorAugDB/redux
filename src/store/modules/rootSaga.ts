import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export default function* rootSaga() {
  return yield all([
    cart,
  ])
}

// export default function* = export default async function
// O * é chamado de generator
// O yield é um await