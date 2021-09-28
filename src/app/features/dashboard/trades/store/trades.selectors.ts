/*-------------VENDORS-------------------*/
import { createFeatureSelector, createSelector } from "@ngrx/store";
/*-------------ENUMS-------------------*/
import { ReducerNodesEnum } from 'src/app/store';
/*-------------INTERFACES-------------------*/
import { TradeState } from ".";



const tradesSelector = createFeatureSelector<TradeState>(ReducerNodesEnum.trades);

export const tradesDataSelector = createSelector(tradesSelector, (state: TradeState) => state.tradeData);
