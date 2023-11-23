import { Request, Response } from "express";
export interface IRestController {
  list: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  delete: (req: Request, res: Response) => void;
}

// export type TParams = {
//   title?: string;
//   author?: string;
//   isbn?: string;
//   published_year?: string;
//   genre?: string;
//   copies_available?: number;
//   total_copies?: number;
//   picture?: string;
// };

export interface IRestModel<TParams> {
  list: () => Promise<any>;
  create: (params?: TParams) => Promise<any>;
  // show: (id: string) => Promise<T>;
  // update: (id: string, payload: T) => Promise<T>;
  // delete: (id: string) => Promise<T>;
}
