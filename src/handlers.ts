import { Response, Request } from "express";

export function getHelloWorld(_: Request, res: Response) {
  res.status(200).send("Hello World!");
}
