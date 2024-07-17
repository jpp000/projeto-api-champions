import PlayerModel from "../models/player-model";
import { addPlayer } from "../repositories/players-repo";
import { badRequest, created, ok } from "../utils/http-helper";

export const createPlayerService = async (player: PlayerModel) => {
    let response;
    if(Object.keys(player).length !== 0){
        await addPlayer(player)
        response =  await created()
    }else{
        response = await badRequest()
    }
    return response
}