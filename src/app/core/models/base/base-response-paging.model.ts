import { BaseResponseModel } from "./base-response.model";

export interface BaseResponsePagingModel<T> extends BaseResponseModel {
  items?: T[];
  total?: number;
}
