import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-satisfaction',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './satisfaction.component.html',
  styleUrl: './satisfaction.component.scss',
})
export class SatisfactionComponent implements OnInit {
  rate$!: Observable<number>;
  rotateStyle$!: Observable<string>;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.rate$ = this.commentsService.getAverageRate();
    this.rotateStyle$ = this.commentsService
      .getAverageRate()
      .pipe(map((value) => `rotate(${(value / 100) * 180 - 135}deg)`));
  }
}

