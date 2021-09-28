import * as  tradesAction from './../../features/dashboard/trades/store/trades.actions';
import * as  tradesSelectors from './../../features/dashboard/trades/store/trades.selectors';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { RequestGetTradesModel, ResponseTradesModel } from './../models/dashboard';


@Injectable({
  providedIn: 'root'
})
export class TradesResolver implements Resolve<ResponseTradesModel> {
  constructor(private store$: Store) {
  }


  resolve(): Observable<ResponseTradesModel> {
    const model: RequestGetTradesModel = {
      from: new Date(new Date().getFullYear(), 0, 1),
      to: new Date(new Date().getFullYear(), 7, 1),
    };

    this.store$.dispatch(tradesAction.getTradesAction({ payload: model }));

    const tradesData$: Observable<ResponseTradesModel | undefined> = this.store$.select(tradesSelectors.tradesDataSelector);

    return tradesData$.pipe(
      filter(data => !!data),
      take(1)
    )
  }

}
