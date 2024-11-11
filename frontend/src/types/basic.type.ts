export type TNext = {
  next: () => void;
};

export type TSignedOut = {
  signedOut: () => void;
}

export interface ResponseGenerator {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
}

export type TError = {
  message: string;
  messages?: string[];
  status: number;
};

export type TFail = {
  fail: (error: TError) => void;
};
