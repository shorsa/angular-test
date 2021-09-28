import { createAction, props } from '@ngrx/store';
import { BaseResponseModel } from 'src/app/core/models/base';
import {
  RequestCreateTradeModel, RequestEditTradeModel,
  RequestGetTradesModel, ResponseTradesModel
} from './../../../../core/models/dashboard';


const GET_TRADES: string = '[TRADES] get trades';
export const getTradesAction = createAction(GET_TRADES, props<{ payload: RequestGetTradesModel }>());

const GET_TRADES_SUCCESS: string = '[TRADES] get trades success';
export const getTradesSuccessAction = createAction(GET_TRADES_SUCCESS, props<{ payload: ResponseTradesModel }>());

const CREATE_TRADE: string = '[TRADES] create trade';
export const createTradeAction = createAction(CREATE_TRADE, props<{ payload: RequestCreateTradeModel }>());

const CREATE_TRADE_SUCCESS: string = '[TRADES] create trade success';
export const createTradeSuccessAction = createAction(CREATE_TRADE_SUCCESS, props<{ payload: BaseResponseModel }>());

const EDIT_TRADE: string = '[TRADES] edit trade';
export const editTradeAction = createAction(EDIT_TRADE, props<{ payload: RequestEditTradeModel }>());

const EDIT_TRADE_SUCCESS: string = '[TRADES] create trade success';
export const editTradeSuccessAction = createAction(EDIT_TRADE_SUCCESS, props<{ payload: BaseResponseModel }>());






