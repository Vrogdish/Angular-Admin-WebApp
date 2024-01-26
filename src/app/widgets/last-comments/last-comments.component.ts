import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Comment } from '../../models/comments';
import { User } from '../../models/user';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-last-comments',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './last-comments.component.html',
  styleUrl: './last-comments.component.scss',
})
export class LastCommentsComponent implements OnInit {
  comments!: { user: User; comment: Comment }[];

  constructor( private service : CommentsService ) {}
  
  

  ngOnInit(): void {
  


    }
  }


