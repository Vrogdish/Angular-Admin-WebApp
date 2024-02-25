export interface Order {
    id : string
    createdAt : Date,
    userID : string,
    cart : {
        productId : string
        quantity : number
    }[]
    amount : number,
    status : "new" | "running" |"send",
}