/* @flow */

import {Map} from 'immutable';
import createReducer from 'src/lib/createReducer';
import * as types from 'src/actions/types';

export const settings = createReducer(Map({}), {
  [types.SETTINGS_FETCH_COMPLETE]: (state, action) => {
    return state.set('item', action.payload).set('status', 'ready');
  },
  [types.SETTINGS_UPDATE_COMPLETE]: (state, action) => {
    return state.set('item', action.payload).set('status', 'ready');
  },
});
