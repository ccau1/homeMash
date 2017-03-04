import {Map} from 'immutable';
import createReducer from 'src/lib/createReducer';
import * as types from 'src/actions/types';

export const users = createReducer(Map({}), {
  [types.USER_SIGN_IN_COMPLETE]: (state, action) => {
    return state.set('viewer', {item: action.payload, status: 'ready'});
  },
});
