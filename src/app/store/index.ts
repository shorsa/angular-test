import { TradeState } from "../features/dashboard/trades/store";
import { ErrorState } from "./errors";

export enum ReducerNodesEnum {
  appErrors = 'appErrors',
  trades = "trades",
}

export interface AppState {
  trades?: TradeState;
  appErrors: ErrorState;
}




