import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { comments } from '../mocks/mock-comments';
import { GolbalCommentInterface } from '../interfaces/global-comment.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalCommentsService {
  constructor() {}

  getAllComments(): Observable<GolbalCommentInterface[]> {
    return of(comments);
  }


}
