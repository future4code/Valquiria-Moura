import { Request, Response } from "express";
import { GetVideoByUserUC } from "../../../business/usecase/video/getVideoByUser";
import { VideoDB } from "../../../data/videoDatabase";
import { JwtAuthorizer } from "../../lambda/services/jwtAuthorizer";

export const GetVideoByUserEndpoint = async (req: Request, res: Response) => {
    try{
        const getVideoByUserUC = new GetVideoByUserUC(new VideoDB, new JwtAuthorizer())
        const result = await getVideoByUserUC.execute({
            token: req.headers.auth as string,
            id: req.query ? req.query.id : ""
        })

        res.status(200).send(result)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}