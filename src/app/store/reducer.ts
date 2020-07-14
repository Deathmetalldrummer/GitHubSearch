import {BodyChange, EBody, ESearch, ESearchType, SearchChange, SearchTypeChange} from './action';
import {AppState, BodyState, initialBodyState, initialSearchState, initialSearchTypeState, SearchState, SearchTypeState} from './store';
import {ActionReducerMap} from '@ngrx/store';

export function searchReducer(state: SearchState = initialSearchState, action: SearchChange): SearchState {
  switch (action.type) {
    case ESearch.CHANGE:
      return {
        search: action.payload
      } as SearchState;

    default:
      return state;
  }
}
export function searchTypeReducer(state: SearchTypeState = initialSearchTypeState, action: SearchTypeChange): SearchTypeState {
  switch (action.type) {
    case ESearchType.CHANGE:
      return {
        searchType: action.payload,
      };

    default:
      return state;
  }
}
export function bodyReducer(state: BodyState = initialBodyState, action: BodyChange): BodyState {
  switch (action.type) {
    case EBody.CHANGE:
      return {
        body: action.payload,
      };

    default:
      return state;
  }
}


export const reducers: ActionReducerMap<AppState> = {
  search: searchReducer,
  searchType: searchTypeReducer,
  body: bodyReducer
};
