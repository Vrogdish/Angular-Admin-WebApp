import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Comment } from '../../models/comments';
import { User } from '../../models/user';
import { CommentsService } from '../../services/comments.service';
import { Observable, map } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-comments',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './last-comments.component.html',
  styleUrl: './last-comments.component.scss',
})
export class LastCommentsComponent implements OnInit {
  comments!: { user: User; comment: Comment }[];
  comments$!: Observable<Comment[]>;
  rating = [1, 2, 3, 4, 5];

  constructor(
    private commentsService: CommentsService,
    private usersSeervice: UserService
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService
      .getAllComments()
      .pipe(
        map((data) =>
          data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        )
      );
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
