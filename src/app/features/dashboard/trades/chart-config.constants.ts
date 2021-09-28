import { ChartOptions } from "chart.js";
import { Color } from "ng2-charts";

export const lineChartOptions: (ChartOptions & { annotation: any }) = {
  responsive: true,
  annotation: {
    annotations: [
      {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: 'March',
        borderColor: 'orange',
        borderWidth: 2,
        label: {
          enabled: true,
          fontColor: 'orange',
          content: 'LineAnno'
        }
      },
    ],
  },
};
export const lineChartColors: Color[] = [
  {
    backgroundColor: 'rgba(0, 98, 255, 0.2)',
    borderColor: 'rgb(41, 123, 255)',
    pointBackgroundColor: 'rgb(41, 123, 255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  {
    backgroundColor: 'rgba(41, 255, 95,0.4)',
    borderColor: 'rgb(30, 255, 0)',
    pointBackgroundColor: 'rgb(30, 255, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
