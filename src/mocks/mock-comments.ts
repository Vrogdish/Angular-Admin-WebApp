import { Comment } from "../app/models/comments";

export const comments : Comment [] = [
    {
        id: "0",
        userId: "1",
        rate: 4,
        comment: "livraison rapide ! merci",
        createdAt: new Date("2022-10-31T09:00:00Z")
    },
    {
        id: "1",
        userId: "0",
        rate: 4,
        comment: "Je recommande ce site !!!",
        createdAt: new Date("2022-10-31T09:00:00Z")
    },
    {
        id: "2",
        userId: "2",
        rate: 4,
        comment: "ma commande est bien conforme",
        createdAt: new Date("2022-10-31T09:00:00Z")
    },
    {
        id: "3",
        userId: "4",
        rate: 5,
        comment: "Le livreur s'est trompé d'adresse ...",
        createdAt: new Date("2022-10-31T09:00:00Z")
    }
]