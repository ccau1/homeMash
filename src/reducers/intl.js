// import {Map} from 'immutable';
import createReducer from 'src/lib/createReducer';
import * as types from 'src/actions/types';

const initialState = {
  currentLocale: null,
  defaultLocale: null,
  initialNow: null,
  locales: null,
  messages: null,
};

export const intl = createReducer(initialState, {
  [types.INTL_LOCALE_SET]: (state, action) => {
    return {...state, currentLocale: action.payload.locale};
  },
  [types.INTL_SET]: (state, action) => {
    return {...state, ...action.payload};
  },
  [types.SETTINGS_FETCH_COMPLETE]: (state, action) => {
    return {...state, currentLocale: action.payload.locale};
  },
});
