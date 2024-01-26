import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comments';
import { comments } from '../../mocks/mock-comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  getAllComments(): Observable<Comment[]> {
    return new Observable<Comment[]>((observer) => observer.next(comments));
  }

  getAverageRate(): Observable<number> {
    let sum = 0;
    let total = 0

    this.getAllComments().subscribe((value) => {
      value.forEach((element) => {
        sum += element.rate
        total +=5
      });
    });

    const average = (sum / total) *100

    return new Observable<number>((observer) => observer.next(average));
  }
}
