import { Response, Request } from "express";
import { getClubServices } from "../services/clubs-services";
import HttpResponse from "../models/http-response-model";


export const getClubs = async (req: Request, res: Response) => {
    const response: HttpResponse = await getClubServices()
    res.status(response.statusCode).json(response.body)
}