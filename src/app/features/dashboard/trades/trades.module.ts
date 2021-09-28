import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { RoutesConstants } from "src/app/core/constants";
import { TradeModalComponent } from "../trade-modal/trade-modal.component";
import { TradesComponent } from './trades.component';

const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: TradesComponent
  }
];

@NgModule({
  declarations: [
    TradesComponent,
    TradeModalComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class TradesModule { }
