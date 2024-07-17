import { Request, Response } from "express"
import { getPlayerService } from "../services/get-player-service"
import { getPlayerByIdService } from "../services/get-player-by-id-service"
import { createPlayerService } from "../services/create-player-service"
import HttpResponse from "../models/http-response-model"
import { deletePlayerService } from "../services/delete-player-service"
import PlayerModel from "../models/player-model"
import { updatePlayerService } from "../services/update-player-service"

export const getPlayer = async (req: Request, res: Response) => {
    const response = await getPlayerService()
    res.status(response.statusCode).json(response.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const response = await getPlayerByIdService(id)
    res.status(response.statusCode).json(response.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue: PlayerModel = req.body
    const response: HttpResponse = await createPlayerService(bodyValue)
    res.status(response.statusCode).json(response.body)
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const response = await deletePlayerService(id)
    res.status(response.statusCode).json(response.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body
    const response = await updatePlayerService(id, bodyValue)
    res.status(response.statusCode).json(response.body)
}