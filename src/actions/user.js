/* @flow */

import * as types from './types';
import {Action} from 'src/types';

export function signIn(username: string, password: string): Action {
  return {
    type: types.USER_SIGN_IN_COMPLETE,
    payload: {
      name: 'Calvin Au',
      settings: {
        dayStart: {
          hour: 9,
          minute: 0,
        },
        dayEnd: {
          hour: 19,
          minute: 0,
        },
        daysOfWeek: [0,1,2,3,4],
      },
    },
  };
}
