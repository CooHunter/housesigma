import {
  createStore,
  combineReducers
} from 'redux'

import { reducer as maps } from '../containers/GoogleMap'

const reducer = combineReducers({
  maps
})

export default createStore(reducer)