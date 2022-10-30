import { Request, Response } from "express";
import * as handlers from "../handlers";

describe("Handlers", () => {
  describe("getHelloWorld", () => {
    let mockResponse: Response;
    let mockRequest: Request;

    beforeEach(() => {
      mockRequest = {} as Request;
      mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      } as unknown as Response;
    });

    it("should return a 200 status code", () => {
      handlers.getHelloWorld(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
    });

    it("should return a message", () => {
      handlers.getHelloWorld({} as Request, mockResponse);
      expect(mockResponse.send).toHaveBeenCalledWith("Hello World!");
    });
  });
});
