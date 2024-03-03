import { Injectable } from '@angular/core';
import { GlobalCommentsService } from '../../../core/services/global-comments.service';
import { GlobalUserService } from '../../../core/services/global-user.service';
import { Observable, map } from 'rxjs';
import { CommentFormatter, CommentInterface } from '../interface/comment.interface';
import { GlobalUserInterface } from '../../../core/interfaces/global-user.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
ghostUser : GlobalUserInterface = {id: '', firstname: '', imageUrl: '', lastname: '', email: '', adress: '', postalCode: '', city: '', country: '', createdAt: new Date()};
  constructor(private globalCommentService : GlobalCommentsService , private globalUserService:GlobalUserService) { }
        
  getAllComments(): Observable<CommentInterface[]> {
    return new Observable<CommentInterface[]>((observer) => {
      this.globalCommentService.getAllComments().subscribe((comments) => {
        this.globalUserService.getAllUsers().subscribe((users) => {
          observer.next(comments.map((comment) => {
            const user = users.find((user) => user.id === comment.userId) || this.ghostUser;
            return CommentFormatter.format(comment, user);
          }));
        });
      });
    });
  }

  getAverageRate(): Observable<number> {
    let sum = 0;
    let total = 0;

    this.getAllComments().subscribe((value) => {
      value.forEach((element) => {
        sum += element.rate;
        total += 5;
      });
    });

    const average = (sum / total) * 100;

    return new Observable<number>((observer) => observer.next(average));
  }
}
