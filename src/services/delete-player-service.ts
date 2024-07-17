import { deletePlayerById } from "../repositories/players-repo";
import { badRequest, ok } from "../utils/http-helper";


export const deletePlayerService = async (id: number) => {
    let response = null;
    const deleted = await deletePlayerById(id)

    if(deleted){
        response = await ok({ message: "deleted" })
    }else{
        response = await badRequest()
    }
    return response
}