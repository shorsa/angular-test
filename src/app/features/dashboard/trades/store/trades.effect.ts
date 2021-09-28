import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseResponseModel } from 'src/app/core/models/base';
import { TradesService } from 'src/app/core/services/trades.service';
import * as errorActions from 'src/app/store/errors/error.actions';
import { ResponseTradesModel } from './../../../../core/models/dashboard/response/response-trades.model';
import * as tradesActions from './trades.actions';

@Injectable()
export class TradesEffects {
  constructor(
    private actions$: Actions,
    private tradesService: TradesService,
  ) { }

  @Effect()
  searchTrades$ = this.actions$.pipe(
    ofType(tradesActions.getTradesAction),
    switchMap((action) =>
      this.tradesService.search(action.payload).pipe(
        map((response: ResponseTradesModel) => {
          return tradesActions.getTradesSuccessAction({ payload: response });
        }),
        catchError(error => {
          return of(errorActions.errorAction({ errors: error }));
        })
      ))
  );

  @Effect()
  createTrade$ = this.actions$.pipe(
    ofType(tradesActions.createTradeAction),
    switchMap((action) =>
      this.tradesService.create(action.payload).pipe(
        map((data: BaseResponseModel) => {
          if (data.isSuccessful) {
            return tradesActions.createTradeSuccessAction({ payload: data });
          }
        }),
        catchError(error => {
          return of(errorActions.errorAction({ errors: error }));
        })
      ))
  );


  @Effect()
  editTrade$ = this.actions$.pipe(
    ofType(tradesActions.editTradeAction),
    switchMap((action) =>
      this.tradesService.edit(action.payload).pipe(
        map((data: BaseResponseModel) => {
          if (data.isSuccessful) {
            return tradesActions.editTradeSuccessAction({ payload: data });
          }
        }),
        catchError(error => {
          return throwError(error);
        })
      ))
  );
}
