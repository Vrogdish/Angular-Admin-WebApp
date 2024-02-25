import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Comment } from '../../../../shared/models/comments';
import { CommentsService } from '../../../../core/services/comments.service';
import { Observable, map } from 'rxjs';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-comments',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './last-comments.component.html',
  styleUrl: './last-comments.component.scss',
})
export class LastCommentsComponent implements OnInit {
  comments!: Comment[];

  rating = [1, 2, 3, 4, 5];

  constructor(
    private commentsService: CommentsService,
    private usersSeervice: UserService
  ) {}

  ngOnInit(): void {
    this.commentsService
      .getAllComments()
      .subscribe((comments) => (this.comments = comments));
  }

  getUsername(comment: Comment): Observable<string | undefined> {
    return this.usersSeervice.getUsers().pipe(
      map((users) => users.find((user) => user.id === comment.userId)),
      map((user) => user?.firstname)
    );
  }

  getUserImage(comment: Comment): Observable<string | undefined> {
    return this.usersSeervice.getUsers().pipe(
      map((users) => users.find((user) => user.id === comment.userId)),
      map((user) => user?.imageUrl)
    );
  }
}
