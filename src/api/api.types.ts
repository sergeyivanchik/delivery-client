interface IErrorResp {
  errors?: Array<{
    status?: string;
    title?: string;
    detail?: string;
  }>;
  message?: string;
}

export { IErrorResp };
