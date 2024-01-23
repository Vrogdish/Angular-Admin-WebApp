import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Comment } from '../../models/comments';
import { User } from '../../models/user';

@Component({
  selector: 'app-last-comments',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './last-comments.component.html',
  styleUrl: './last-comments.component.scss',
})
export class LastCommentsComponent implements OnInit {
  comments!: { user: User; comment: Comment }[];

  ngOnInit(): void {
    this.comments = [
      {
        user: {
          id: '',
          firstname: '',
          lastname: '',
          imageUrl : "",
          email: '',
          adress: '',
          postalCode: '',
          city: '',
          country: '',
        },

        comment: {
          id: '1234',
          userId: '1',
          rate: 4,
          comment: 'string',
        },
      },
    ];
  }
}
