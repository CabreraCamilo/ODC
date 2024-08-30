export interface ErrorMessage {
  [key: string]: (error: any) => string;
}
