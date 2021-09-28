import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseResponseModel } from '../models/base';
import {
  RequestCreateTradeModel, RequestEditTradeModel, RequestGetTradesModel, ResponseTradesModel
} from './../models/dashboard';

@Injectable({
  providedIn: 'root'
})

export class TradesService {

  mockData: ResponseTradesModel = {
    isSuccessful: true,
    items: [
      {
        id: 1,
        entryDate: new Date(new Date().getFullYear(), 0, 1),
        entryPrice: 1200,
        exitDate: new Date(new Date().getFullYear(), 0, 10),
        exitPrice: 1250
      },
      {
        id: 2,
        entryDate: new Date(new Date().getFullYear(), 1, 1),
        entryPrice: 850,
        exitDate: new Date(new Date().getFullYear(), 1, 10),
        exitPrice: 1068
      },
      {
        id: 3,
        entryDate: new Date(new Date().getFullYear(), 2, 1),
        entryPrice: 1200,
        exitDate: new Date(new Date().getFullYear(), 2, 10),
        exitPrice: 1580
      },
      {
        id: 4,
        entryDate: new Date(new Date().getFullYear(), 3, 1),
        entryPrice: 2156,
        exitDate: new Date(new Date().getFullYear(), 3, 10),
        exitPrice: 2860
      },
      {
        id: 5,
        entryDate: new Date(new Date().getFullYear(), 4, 1),
        entryPrice: 984,
        exitDate: new Date(new Date().getFullYear(), 5, 10),
        exitPrice: 3520
      },
    ],
  }

  constructor(private httpClient: HttpClient) { }

  create(model: RequestCreateTradeModel): Observable<BaseResponseModel> {
    // return this.httpClient.post<BaseResponseModel>(ApiEndpointHelper.get(ApiEndpointsConstants.CREATE_TRADE), model);
    const newItem = {
      ...model,
      id: this.mockData.items.length + 1,
    };

    console.log(newItem);

    this.mockData = {
      ...this.mockData,
      items: [...this.mockData.items, newItem]
    }

    console.log(this.mockData.items);
    return of({ isSuccessful: true })
  }

  search(model: RequestGetTradesModel): Observable<ResponseTradesModel> {
    // return this.httpClient.post<ResponseTradesModel>(ApiEndpointHelper.get(ApiEndpointsConstants.GET_ALL_TRADES), model);
    return of(this.mockData)
  }

  edit(model: RequestEditTradeModel): Observable<BaseResponseModel> {
    const indexEditableItem: number = this.mockData.items.findIndex(item => item.id === model.id);
    const items = [...this.mockData.items];
    items[indexEditableItem] = model;

    this.mockData = {
      ...this.mockData,
      items: items
    }
    console.log(this.mockData);
    return of(this.mockData)
  }
}
