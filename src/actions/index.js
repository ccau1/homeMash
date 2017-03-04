/* @flow */

import * as IntlActions from './intl';
import * as UserActions from './user';
import * as settingsActions from './settings';

export const ActionCreators = Object.assign({},
  IntlActions,
  UserActions,
  settingsActions,
);
