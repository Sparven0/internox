import { Request, Response } from "express";
import { Pool } from "pg";
import { JwtPayload } from "jsonwebtoken";

export interface GraphQLContext {
  req: Request;
  res: Response;
  db: Pool;
  user?: JwtPayload;
}
