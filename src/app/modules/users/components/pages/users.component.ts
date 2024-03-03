import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Observable } from 'rxjs';

import { GlobalUserService } from '../../../../core/services/global-user.service';
import { GlobalUserInterface } from '../../../../core/interfaces/global-user.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$!: Observable<GlobalUserInterface[]>;

  constructor(private userService: GlobalUserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id);
  }
}
