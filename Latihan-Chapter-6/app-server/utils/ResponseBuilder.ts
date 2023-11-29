import { Response } from 'express';

class ResponseBuilder {
  constructor() {}
  static response<T = any>(
    res: Response,
    code: number,
    data: T,
    message?: string
  ) {
    return res.status(code).json({
      message,
      data,
    });
  }
}

export default ResponseBuilder;
