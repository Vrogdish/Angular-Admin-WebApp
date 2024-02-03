import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.users$ = this.userService.getUsers()
  }

  deleteUser(){}
}
