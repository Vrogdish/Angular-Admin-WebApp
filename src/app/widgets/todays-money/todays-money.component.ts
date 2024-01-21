import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-todays-money',
  standalone: true,
  imports: [CardComponent, SmallCardComponent],
  templateUrl: './todays-money.component.html',
  styleUrl: './todays-money.component.scss',
})
export class TodaysMoneyComponent {
  amount = 53000;
  balance = 55;

  content = {
    title: "Today's Money",
    imageUrl: '../../../assets/icons/money.png',
    path: '',
  };

  data = {amount : "53000 €",balance :"+55%"}
}
