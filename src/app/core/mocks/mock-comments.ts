import { GolbalCommentInterface } from "../interfaces/global-comment.interface";

export const comments: GolbalCommentInterface[] = [
  {
    id: '0',
    userId: '1',
    rate: 5,
    comment: 'livraison rapide ! merci',
    createdAt: new Date('2024-01-24'),
  },
  {
    id: '1',
    userId: '3',
    rate: 5,
    comment: 'Je recommande ce site !!!',
    createdAt: new Date('2023-12-22'),
  },
  {
    id: '2',
    userId: '2',
    rate: 4,
    comment: 'ma commande est bien conforme',
    createdAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    userId: '4',
    rate: 3,
    comment: "Le livreur s'est trompé d'adresse ...",
    createdAt: new Date('2023-12-26'),
  },
];
