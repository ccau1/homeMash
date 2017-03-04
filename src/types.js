import ActionTypes from 'src/actions/types';

// Models

export type Settings = {
  dayStart: {
    hour: number,
    minute: number,
  };
  dayEnd: {
    hour: number,
    minute: number,
  };
  daysOfWeek: number[],
};

export type User = {
  name: string,
  settings: Settings,
};


// Reducers

export type SettingsState = Settings;

export type UsersState = {
  viewer: ?User,
  users: ?Array<User>,
};

export type IntlState = {
  currentLocale: ?string,
  defaultLocale: ?string,
  initialNow: ?number,
  locales: ?Array<string>,
  messages: ?Object,
};


// State

export type State = {
  settings: SettingsState,
  intl: IntlState,
  users: UsersState,
};


// Actions

export type Action =
    {type: ActionTypes.LOCALE_SET, payload: {locale: string}}
  | {type: ActionTypes.USER_SIGN_IN_COMPLETE, payload: User}
  | {type: ActionTypes.WORK_SETTINGS_UPDATE_COMPLETE, payload: Settings}
  ;
