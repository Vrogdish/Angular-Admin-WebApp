import { Order } from '../../shared/models/order';

export const orders: Order[] = [
  {
    id: '1548',
    createdAt: new Date('2024-01-10'),
    userID: '1',
    cart: [
      {
        productId: '2',
        quantity: 1,
      },
    ],
    amount: 45.6,
    status: 'send',
  },
  {
    id: '5689',
    createdAt: new Date('2024-01-25'),
    userID: '3',
    cart: [
      {
        productId: '1',
        quantity: 4,
      },
      {
        productId: '0',
        quantity: 1,
      },
    ],
    amount: 132.1,
    status: 'new',
  },
  {
    id: '7812',
    createdAt: new Date('2024-01-22'),
    userID: '2',
    cart: [
      {
        productId: '3',
        quantity: 1,
      },
    ],
    amount: 148.5,
    status: 'new',
  },
];
