import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss',
})
export class SmallCardComponent {
  @Input({ required: true }) content!: {
    title: string;
    imageUrl: string;
    path: string;
  };
  @Input({ required: true }) data!: {
    amount: string;
    balance: string;
  };
}
