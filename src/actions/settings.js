/* @flow */

import * as types from './types';
import {AsyncStorage} from 'react-native';
import type {Settings, Action} from 'src/types';

export function getSettings(): Action {
  return (dispatch: Function) => {
    AsyncStorage.getItem('settings').then(settings => {
      const defaultSettings = {
        dayStart: {
          hour: 9,
          minute: 0,
        },
        dayEnd: {
          hour: 19,
          minute: 0,
        },
        daysOfWeek: [0,1,2,3,4],
        locale: 'en',
      };
      const finalSettings = settings ? JSON.parse(settings) : defaultSettings;
      dispatch({
        type: types.SETTINGS_FETCH_COMPLETE,
        payload: finalSettings,
      });
    });
  };
}

export function updateSettings(newSettings: Settings): Action {
  return (dispatch: Function) => {
    AsyncStorage.setItem('settings', JSON.stringify(newSettings));
    dispatch({
      type: types.SETTINGS_UPDATE_COMPLETE,
      payload: newSettings,
    });
    dispatch({
      type: types.INTL_LOCALE_SET,
      payload: {locale: newSettings.locale},
    });
  };
}
