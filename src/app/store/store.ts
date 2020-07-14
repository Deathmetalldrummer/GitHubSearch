export interface Search {
  q: string | null;
}
export interface SearchState {
  search: Search | null;
}

export const initialSearchState: SearchState = {
  search: null
};

export interface SearchTypeState {
  searchType: 'repositories' | 'users';
}
export const initialSearchTypeState: SearchTypeState = {
  searchType: 'repositories'
};

export interface BodyState {
  body: Array<object> | null;
}
export const initialBodyState: BodyState = {
  body: null
};

export interface AppState {
  search: SearchState;
  searchType: SearchTypeState;
  body: BodyState;
}
export const AppState = {
  search: null,
  searchType: null,
  body: null,
};
