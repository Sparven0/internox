import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface GraphQLContext {
  req: Request;
  res: Response;
  user?: JwtPayload;
}
