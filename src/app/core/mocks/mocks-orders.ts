import { GlobalOrderInterface } from '../interfaces/global-order.interface';

export const orders: GlobalOrderInterface[] = [
  {
    id: '1234',
    createdAt: new Date('2024-01-01'),
    userId: '1',
    cart: [
      {
        productId: '0',
        quantity: 2,
      },
      {
        productId: '1',
        quantity: 1,
      },
    ],
      status: 'new',
  },
  {
    id: '1242',
    createdAt: new Date('2024-01-25'),
    userId: '3',
    cart: [
      {
        productId: '2',
        quantity: 2,
      },
     ],
      status: 'new',
  },
  {
    id: '1334',
    createdAt: new Date('2024-02-01'),
    userId: '2',
    cart: [
      {
        productId: '1',
        quantity: 4,
      },
      {
        productId: '4',
        quantity: 1,
      },
      {
        productId: '4',
        quantity: 1,
      },
    ],
      status: 'send',
  },
  {
    id: '1240',
    createdAt: new Date('2024-01-28'),
    userId: '1',
    cart: [
      {
        productId: '3',
        quantity: 2,
      },
    ],
      status: 'new',
  },
  {
    id: '1279',
    createdAt: new Date('2024-01-04'),
    userId: '2',
    cart: [
      {
        productId: '1',
        quantity: 4,
      },
      {
        productId: '2',
        quantity: 1,
      },
    ],
      status: 'running',
  },

];
