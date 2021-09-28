import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { TradeState } from '.';
import * as tradesActions from './trades.actions';

const initialState: TradeState = {
  tradeData: undefined
};

export const _TradesReducer: ActionReducer<TradeState, Action> =
  createReducer(
    initialState,
    on(
      tradesActions.getTradesSuccessAction,
      (state: TradeState, { payload }) =>
        ({ ...state, tradeData: { ...payload } })
    ),
    // on(
    //   usersActions.createUserSuccessAction,
    //   (state: TradeState, { res: userCreate }) =>
    //     ({ ...state, createUser: { ...userCreate } })
    // ),
    // on(
    //   usersActions.editUserSuccessAction,
    //   (state: TradeState, { res: userEdit }) =>
    //     ({ ...state, editUser: { ...userEdit } })
    // ),
    // on(
    //   usersActions.deleteUserSuccessAction,
    //   (state: TradeState, { res: deleteUser }) =>
    //     ({ ...state, deleteUser: { ...deleteUser } })
    // ),
    // on(
    //   usersActions.clearStateAfterCloseModalAction,
    //   (state: TradeState) =>
    //   ({
    //     ...state,
    //     createUser: initialState.createUser,
    //     editUser: initialState.editUser,
    //     deleteUser: initialState.deleteUser
    //   })
    // ),
  );

export function TradesReducer(state: TradeState, action: Action) {
  return _TradesReducer(state, action);
}
