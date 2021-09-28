import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as moment from "moment";
import { Color, Label } from 'ng2-charts';
import { TradeModalComponent } from '../trade-modal/trade-modal.component';
import { RequestGetTradesModel, ResponseTradeModelItem, ResponseTradesModel } from './../../../core/models/dashboard';
import { lineChartColors, lineChartOptions } from './chart-config.constants';
import { getTradesAction } from './store/trades.actions';
import { tradesDataSelector } from './store/trades.selectors';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent {
  public lineChartLegend: boolean;
  public lineChartType: ChartType;
  public lineChartLabels: Label[]
  public lineChartData: ChartDataSets[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any });
  public lineChartColors: Color[];

  private tradesData: ResponseTradesModel;

  constructor(
    private store$: Store,
    private dialog: MatDialog) {

    this.initializationVariables();
    this.initializationSelects();

  }

  private initializationSelects(): void {
    this.store$.select(tradesDataSelector).subscribe(res => {
      this.setChartData = res;
    })
  }

  private initializationVariables(): void {
    this.lineChartLegend = true;
    this.lineChartType = 'line';
    this.lineChartOptions = lineChartOptions;
    this.lineChartColors = lineChartColors;
  }

  private set setChartData(trades: ResponseTradesModel) {
    this.tradesData = { ...trades };
    if (!trades) return;

    this.tradesData.items = [...trades.items].sort((a, b) => a.entryDate.getUTCSeconds() - b.entryDate.getUTCSeconds())

    const getValuesEntryPrice = () =>
      this.tradesData.items.map(item => item.entryPrice);

    const getValuesExitPrice = () =>
      this.tradesData.items.map(item => item.exitPrice);

    const getProfitValue = () =>
      this.tradesData.items.map(item => item.exitPrice - item.entryPrice)

    this.lineChartData[0] = {
      data: getValuesEntryPrice(),
      backgroundColor: "rgba(0, 98, 255, 0.2)",
      borderColor: "rgb(41, 123, 255)",
      pointBackgroundColor: 'rgb(41, 123, 255)',
      label: "Entry Price"
    };
    this.lineChartData[1] = {
      data: getValuesExitPrice(),
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: 'rgba(77,83,96,1)',
      label: "Exit Price"
    };
    this.lineChartData[2] = {
      data: getProfitValue(),
      backgroundColor: "rgba(41, 255, 95,0.4)",
      borderColor: "rgb(30, 255, 0)",
      pointBackgroundColor: 'rgb(30, 255, 0)',
      label: "Profit per month"
    };

    this.lineChartLabels = this.tradesData.items.map(item => moment().month(item.entryDate.getMonth()).format("MMMM"))
    this.lineChartColors = lineChartColors;
  }

  public createTrade(): void {
    const dialogRef = this.dialog.open(TradeModalComponent);
    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        const model: RequestGetTradesModel = {
          from: new Date(new Date().getFullYear(), 0, 1),
          to: new Date(new Date().getFullYear(), 7, 1),
        };
        this.store$.dispatch(getTradesAction({ payload: model }))
      }
    })
  }

  public editTrade({ active }) {
    if (!active.length) return;

    const clickedElementIndex: number = active[0]._index;
    const value: ResponseTradeModelItem = this.tradesData.items[clickedElementIndex];

    const dialogRef = this.dialog.open(TradeModalComponent, {
      data: value
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        const model: RequestGetTradesModel = {
          from: new Date(new Date().getFullYear(), 0, 1),
          to: new Date(new Date().getFullYear(), 7, 1),
        };
        this.store$.dispatch(getTradesAction({ payload: model }))
      }
    })
  }


}
