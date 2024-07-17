import HttpResponse from "../models/http-response-model";
import { findAllClubs } from "../repositories/clubs-repo";
import { noContent, ok } from "../utils/http-helper";


export const getClubServices = async (): Promise<HttpResponse> => {
    const data = await findAllClubs()
    let response;

    if(data.length !== 0){
        response = await ok(data)
    }else{
        response = noContent()
    }
    
    return response
}