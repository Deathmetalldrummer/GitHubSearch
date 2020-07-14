import {AppState} from './store';

export const selectSearch = (state: AppState) => state.search.search;
export const selectSearchType = (state: AppState) => state.searchType.searchType;
export const selectBody = (state: AppState) => state.body.body;
