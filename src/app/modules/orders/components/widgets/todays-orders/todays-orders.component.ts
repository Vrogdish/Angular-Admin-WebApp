import { Component } from '@angular/core';
import { SmallCardComponent } from '../../../../../shared/components/small-card/small-card.component';

@Component({
  selector: 'app-todays-orders',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './todays-orders.component.html',
  styleUrl: './todays-orders.component.scss',
})
export class TodaysOrdersComponent {
  content = {
    title: "Today's Orders",
    imageUrl: '../../../assets/icons/list.png',
    path: '',
  };

  data = { amount: '40', balance: '+15%' };
}
