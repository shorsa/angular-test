import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createTradeAction, editTradeAction } from '../trades/store/trades.actions';
import { RequestCreateTradeModel, RequestEditTradeModel, ResponseTradeModelItem } from './../../../core/models/dashboard';

@Component({
  selector: 'app-trade-modal',
  templateUrl: './trade-modal.component.html',
  styleUrls: ['./trade-modal.component.scss']
})

export class TradeModalComponent {
  public formGroup: FormGroup;
  public minExitDate: Date;
  public maxEntryDate: Date;
  public minEntryDate: Date;
  public submitted: boolean;

  constructor(public dialogRef: MatDialogRef<TradeModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ResponseTradeModelItem,
    private formBuilder: FormBuilder,
    private store: Store) {

    this.buildForm();
  }

  public get isCreate(): boolean {
    return !Boolean(this.data)
  }

  public get formControl(): { [key: string]: AbstractControl } { return this.formGroup.controls; }

  public choseDate(event, formControlName: string): void {

    if ("entryDate" === formControlName) {
      const date = new Date(event.target.value);
      date.setDate(date.getDate() + 1);
      this.minExitDate = date;
    }

    if ("exitDate" === formControlName) {
      const date = new Date(event.target.value);
      date.setDate(date.getDate() - 1);
      this.maxEntryDate = date;
    }

  }

  public create(): void {
    this.submitted = true;
    if (this.formGroup.invalid) return;

    const model: RequestCreateTradeModel = {
      ...this.formGroup.value
    };

    this.store.dispatch(createTradeAction({ payload: model }))
    this.dialogRef.close(true);
  }

  public edit(): void {
    this.submitted = true;
    if (this.formGroup.invalid) return;

    const model: RequestEditTradeModel = {
      id: this.data.id,
      ...this.formGroup.value
    };

    this.store.dispatch(editTradeAction({ payload: model }));
    this.dialogRef.close(true);
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      entryDate: ["", [Validators.required,]],
      entryPrice: ["", [Validators.required, Validators.min(0)]],
      exitDate: ["", [Validators.required]],
      exitPrice: ["", [Validators.required, Validators.min(0)]],
    }, {
      validators: this.priceValidator
    });

    if (!this.isCreate) {
      this.formGroup.setValue({
        entryDate: this.data.entryDate,
        entryPrice: this.data.entryPrice,
        exitDate: this.data.exitDate,
        exitPrice: this.data.exitPrice
      });
    }
  }

  private priceValidator(formGroup: FormGroup) {
    if (formGroup.controls.entryPrice.value < 0) {
      formGroup.controls.entryPrice.setValue(0);
    }

    if (formGroup.controls.exitPrice.value < 0) {
      formGroup.controls.exitPrice.setValue(0);
    }

    const exitPriceValue: number = formGroup.controls.exitPrice.value;
    const entryPriceValue: number = formGroup.controls.entryPrice.value;

    if (exitPriceValue < entryPriceValue && exitPriceValue !== 0) {
      formGroup.controls.exitPrice.setErrors({ description: "The exit price must be greater than the entry price" })
    } else {
      formGroup.controls.exitPrice.setErrors(null)
    }
  }


}
