import * as types from './actionTypes';

import LanguageApi from '../api/languageApi';

function loadLanguageObjSuccess(lang){
    return {type:types.LOAD_LANGUAGE_SUCCESS, language:lang};
}

export function switchLanguage(locale) {
  return function(dispatch) {

    return LanguageApi.getLanguage(locale).then(lang => {
       
      dispatch(loadLanguageObjSuccess(lang));
    }).catch(error => {

      throw(error);
    });
  };
}