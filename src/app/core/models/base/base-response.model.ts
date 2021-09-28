export interface BaseResponseModel {
  isSuccessful: boolean;
  statusCode?: number;
  errorMessage?: string;
}
