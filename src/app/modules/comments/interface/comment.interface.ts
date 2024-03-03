import { GolbalCommentInterface } from "../../../core/interfaces/global-comment.interface"
import { GlobalUserInterface } from "../../../core/interfaces/global-user.interface"

export interface CommentInterface {
    id : string
    userId : string
    firstname:  string
    userImage: string
    rate : number
    comment : string
    createdAt : Date
}

export class CommentFormatter {
    static format(comment: GolbalCommentInterface, user : GlobalUserInterface): CommentInterface {
        return {
            id: comment.id,
            userId: comment.userId,
            rate: comment.rate,
            comment: comment.comment,
            createdAt: comment.createdAt,
            firstname: user.firstname,
            userImage: user.imageUrl
        };
    }
}