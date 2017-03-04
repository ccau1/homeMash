/* @flow */

import * as types from './types';
import {Action} from 'src/types';

/* Translations */
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import en_messages from '../../messages/_default.js';
import zh from 'react-intl/locale-data/zh';
import zh_CN_messages from '../../messages/zh_CN.js';
import zh_HK_messages from '../../messages/zh_HK.js';

export const setCurrentLocale = (locale: string): Action => ({
  type: types.INTL_LOCALE_SET,
  payload: {locale},
});

export const setIntl = (): Action => {
  return (dispatch: Function) => {
    addLocaleData([...en, ...zh]);
    return dispatch({
      type: types.INTL_SET,
      payload: {
        defaultLocale: 'en',
        currentLocale: 'zh_HK',
        locales: [
          {key: 'en', text: 'English'},
          {key: 'zh_CN', text: '中文 (簡)'},
          {key: 'zh_HK', text: '中文 (繁)'},
        ],
        messages: {
          en: en_messages,
          zh_CN: zh_CN_messages,
          zh_HK: zh_HK_messages,
        },
      },
    });
  };
};
