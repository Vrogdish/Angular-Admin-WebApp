import { Component } from '@angular/core';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { SmallCardComponent } from '../../../../../shared/components/small-card/small-card.component';

@Component({
  selector: 'app-todays-money',
  standalone: true,
  imports: [CardComponent, SmallCardComponent],
  templateUrl: './todays-money.component.html',
  styleUrl: './todays-money.component.scss',
})
export class TodaysMoneyComponent {
  content = {
    title: "Today's Money",
    imageUrl: '../../../assets/icons/money.png',
    path: '',
  };

  data = { amount: '1200 €', balance: '+55%' };
}
