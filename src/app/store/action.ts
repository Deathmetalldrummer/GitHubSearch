import {Action} from '@ngrx/store';
import {Search} from './store';

export enum ESearch {
  CHANGE = '[CHANGE] Search Change'
}
export class SearchChange implements Action {
  readonly type = ESearch.CHANGE;

  constructor(public payload: Search) {}
}


export enum ESearchType {
  CHANGE = '[CHANGE] Search Type Change'
}
export class SearchTypeChange implements Action {
  readonly type = ESearchType.CHANGE;
  constructor(public payload: any) {}
}


export enum EBody {
  CHANGE = '[CHANGE] Body Change'
}
export class BodyChange implements Action {
  readonly type = EBody.CHANGE;
  constructor(public payload: Array<object>) {}
}


