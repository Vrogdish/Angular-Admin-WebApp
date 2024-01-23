export interface Order {
    id : string
    date : Date,
    user : string,
    amount : number,
    status : "new" | "running" |"send",
}