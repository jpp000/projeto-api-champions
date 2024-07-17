import { findAndModifyPlayer } from "../repositories/players-repo"
import { noContent, ok } from "../utils/http-helper"


export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await findAndModifyPlayer(id, statistics)
    let response;

    if(Object.keys(data).length !== 0){
        response = await ok(data)
    }else{
        response = await noContent()
    }
    return response
}