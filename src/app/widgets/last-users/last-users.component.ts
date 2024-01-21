import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-users',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './last-users.component.html',
  styleUrl: './last-users.component.scss',
})
export class LastUsersComponent {
  users = [
    {
      username: 'Cédric',
      imageUrl: '../../../assets/profils-exemples/profile.png',
      duration: 0,
    },
    {
      username: 'Paul',
      imageUrl: '../../../assets/profils-exemples/profile.png',
      duration: 1,
    },
    {
      username: 'Marie',
      imageUrl: '../../../assets/profils-exemples/profile.png',
      duration: 1,
    },
    {
      username: 'Alice',
      imageUrl: '../../../assets/profils-exemples/profile.png',
      duration: 3,
    },
  ];
}
