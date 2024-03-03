import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../../services/comments.service';
import { CommentInterface } from '../../../interface/comment.interface';

@Component({
  selector: 'app-last-comments',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './last-comments.component.html',
  styleUrl: './last-comments.component.scss',
})
export class LastCommentsComponent implements OnInit {
  comments!: CommentInterface[];

  rating = [1, 2, 3, 4, 5];

  constructor(
    private commentsService: CommentsService,

  ) {}

  ngOnInit(): void {
    this.commentsService
      .getAllComments()
      .subscribe((comments) => (this.comments = comments));
  }

}
