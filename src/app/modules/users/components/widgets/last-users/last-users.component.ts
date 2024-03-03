import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { GlobalUserService } from '../../../../../core/services/global-user.service';
import { GlobalUserInterface } from '../../../../../core/interfaces/global-user.interface';

@Component({
  selector: 'app-last-users',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './last-users.component.html',
  styleUrl: './last-users.component.scss',
})
export class LastUsersComponent implements OnInit {
  users$!: Observable<GlobalUserInterface[]>;

  constructor(private userService: GlobalUserService) {}

  ngOnInit(): void {
    this.users$ = this.userService
      .getAllUsers()
      .pipe(
        map((data) =>
          data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        )
      );
  }
}
