import { User } from '../app/models/user';

export const users: User[] = [
  {
    id: '1',
    firstname: 'Cédric',
    lastname: 'Gache',
    imageUrl: '../assets/exemples/profile.png',
    email: 'gachecedric@exemple.com',
    adress: 'adress here',
    postalCode: '34000',
    city: 'Montellier',
    country: 'France',
    createdAt : new Date("2023-12-24")
   
  },
  {
    id: '2',
    firstname: 'Paul',
    lastname: 'Doe',
    imageUrl: '../assets/exemples/profile.png',
    email: 'Doe@exemple.com',
    adress: 'adress here',
    postalCode: '34000',
    city: 'Montellier',
    country: 'France',
    createdAt : new Date("2024-01-22")
  },
  {
    id: '3',
    firstname: 'Marie',
    lastname: 'Doe',
    imageUrl: '../assets/exemples/profile.png',
    email: 'Doe@exemple.com',
    adress: 'adress here',
    postalCode: '34000',
    city: 'Montellier',
    country: 'France',
    createdAt : new Date("2024-01-23")
  },
  {
    id: '4',
    firstname: 'Alice',
    lastname: 'Doe',
    imageUrl: '../assets/exemples/profile.png',
    email: 'Doe@exemple.com',
    adress: 'adress here',
    postalCode: '34000',
    city: 'Montellier',
    country: 'France',
    createdAt : new Date("2024-01-25")
  },
];
