import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-last-users',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './last-users.component.html',
  styleUrl: './last-users.component.scss',
})
export class LastUsersComponent implements OnInit {

  users$ ! :Observable<User[]>

  constructor(private userService : UserService) {}

  ngOnInit(): void {
      this.users$ = this.userService.getUsers().pipe(
        map(data => data.sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())),
      )
  }
}
