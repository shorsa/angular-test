
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '.';
import { TradesReducer } from '../features/dashboard/trades/store/trades.reducer';
import { saveStorMetaReducer } from './app-save-store';
import { ErrorsReducer } from './errors/errors.reducer';

export const reducers: ActionReducerMap<AppState> = {
  trades: TradesReducer,
  appErrors: ErrorsReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: Action): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [saveStorMetaReducer]
  : [saveStorMetaReducer];
