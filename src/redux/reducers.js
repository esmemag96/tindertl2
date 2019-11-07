import { combineReducers } from 'redux';
import profileReducer from './ShowPhoto/reducer';

export default combineReducers({
  profile: profileReducer,
});
