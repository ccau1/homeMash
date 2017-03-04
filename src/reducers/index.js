import {combineReducers} from 'redux';
import * as intlReducer from './intl';
import * as usersReducer from './users';
import * as settingsReducer from './settings';

export default combineReducers(Object.assign(
  intlReducer,
  usersReducer,
  settingsReducer,
));
