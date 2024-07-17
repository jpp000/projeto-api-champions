import * as PlayerRepo from "../repositories/players-repo"
import { notFound, ok } from "../utils/http-helper"


export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepo.findPlayerById(id)
    let response = null

    if(data){
        response = await ok(data)
    }else{
        response = await notFound()
    }

    return response
}

