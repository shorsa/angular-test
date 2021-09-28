import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReducerNodesEnum } from 'src/app/store';
import { TradesEffects } from './trades.effect';
import { TradesReducer } from './trades.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ReducerNodesEnum.trades, TradesReducer),
    EffectsModule.forFeature([TradesEffects]),
  ]
})
export class TradesStoreModule { }
