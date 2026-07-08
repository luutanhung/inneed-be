export interface AppResponseParams<T = unknown> {
  success?: boolean;
  code: string;
  data: T;
}

export class AppResponse<T = unknown> {
  public success: boolean;
  public code: string;
  public data: T;

  constructor(params: AppResponseParams<T>) {
    this.success = params.success || true;
    this.code = params.code;
    this.data = params.data;
  }
}
