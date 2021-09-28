import { BaseResponsePagingModel } from "../../base";

export interface ResponseTradesModel extends BaseResponsePagingModel<ResponseTradeModelItem> {

}

export interface ResponseTradeModelItem {
  id: number
  entryDate: Date;
  entryPrice: number;
  exitDate: Date;
  exitPrice: number;
}
